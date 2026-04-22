#!/usr/bin/env bun
/**
 * consolidate.ts - Consolidates Diakrisis documentation into a single markdown file
 *
 * Dynamically reads sidebar and navbar configuration from Docusaurus config
 * to generate a consolidated document following the exact navigation order.
 *
 * Usage:
 *   bun scripts/consolidate.ts [output-file]
 *
 * Default output: diakrisis-consolidated.md
 *
 * The script automatically adapts to:
 * - New/renamed documents (reads from sidebars.ts)
 * - New/renamed sections (reads navbar from docusaurus.config.ts)
 * - Changed section order (follows navbar order)
 *
 * Diakrisis-specific adaptations vs the holon/website variant:
 * - Project root is the diakrisis repo itself (not a `website/` subfolder).
 * - `docs/` lives directly in project root.
 * - `numberPrefixParser: false` — doc IDs retain their `NN-` prefixes.
 * - `routeBasePath: '/'` — absolute doc links use `/<id>` (not `/docs/<id>`).
 * - Only one sidebar (`mainSidebar`) — the script still walks it recursively
 *   through all 11 categories declared in sidebars.ts.
 * - Intro page (`intro.md`) sits at the top of the sidebar as a plain string
 *   (outside of any category) — handled by the generic walker.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";

// Get script directory and project root (diakrisis/).
const scriptDir = dirname(Bun.main);
const projectRoot = join(scriptDir, "..");
const docsDir = join(projectRoot, "docs");

// Types for Docusaurus configuration
interface NavbarItem {
  type?: string;
  sidebarId?: string;
  label?: string;
  position?: string;
  to?: string;
}

interface DocusaurusConfig {
  themeConfig?: {
    navbar?: {
      items?: NavbarItem[];
    };
  };
}

interface CategoryItem {
  type: "category";
  label: string;
  collapsed?: boolean;
  link?: { type: string; title?: string; slug?: string };
  items: SidebarItem[];
}

type SidebarItem = string | CategoryItem;
type SidebarConfig = Record<string, SidebarItem[]>;

interface SectionInfo {
  sidebarId: string;
  label: string;
}

interface DocMeta {
  filePath: string;
  docId: string;
  title: string;
  description?: string;
  content: string;
}

/**
 * Extract section configuration from Docusaurus navbar.
 * Returns sections (docSidebar items) in navbar order with their labels.
 */
async function extractSections(): Promise<SectionInfo[]> {
  const configPath = join(projectRoot, "docusaurus.config.ts");

  try {
    const configModule = await import(configPath);
    const config: DocusaurusConfig = configModule.default;

    const navbarItems = config?.themeConfig?.navbar?.items || [];

    const sections: SectionInfo[] = navbarItems
      .filter(
        (item): item is NavbarItem & { sidebarId: string; label: string } =>
          item.type === "docSidebar" &&
          typeof item.sidebarId === "string" &&
          typeof item.label === "string",
      )
      .map((item) => ({
        sidebarId: item.sidebarId,
        label: item.label,
      }));

    if (sections.length === 0) {
      console.warn(
        "Warning: No docSidebar items found in navbar, falling back to sidebar keys",
      );
      return [];
    }

    return sections;
  } catch (error) {
    console.warn(`Warning: Could not load docusaurus.config.ts: ${error}`);
    return [];
  }
}

/**
 * Load sidebar configuration from sidebars.ts.
 */
async function loadSidebar(): Promise<SidebarConfig> {
  const sidebarsPath = join(projectRoot, "sidebars.ts");
  const sidebarsModule = await import(sidebarsPath);
  return sidebarsModule.default;
}

/**
 * Parse YAML frontmatter from markdown content.
 */
function parseFrontmatter(content: string): {
  frontmatter: Record<string, string>;
  body: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterBlock = match[1];
  const body = content.slice(match[0].length);
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterBlock.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Strip surrounding quotes (e.g. title with a colon in it)
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

/**
 * Read and parse a documentation file.
 */
function readDocFile(docId: string): DocMeta | null {
  const filePath = join(docsDir, `${docId}.md`);

  if (!existsSync(filePath)) {
    console.warn(`  ⚠ File not found: ${docId}.md`);
    return null;
  }

  const rawContent = readFileSync(filePath, "utf-8");
  const { frontmatter, body } = parseFrontmatter(rawContent);

  // Trim leading whitespace from body
  const trimmedBody = body.trimStart();

  // Extract title from frontmatter or first heading
  let title = frontmatter.title || "";
  const h1Match = trimmedBody.match(/^#\s+(.+)\n/);

  if (!title && h1Match) {
    title = h1Match[1];
  }
  if (!title) {
    title = docId;
  }

  // Always remove first h1 heading since we add our own section header
  let content = trimmedBody;
  if (h1Match) {
    content = trimmedBody.slice(h1Match[0].length);
  }

  // Convert relative doc links to anchor links
  content = convertRelativeLinks(content, docId);

  return {
    filePath: `docs/${docId}.md`,
    docId,
    title,
    description: frontmatter.description,
    content: content.trim(),
  };
}

/**
 * Process doc content for a specific heading level.
 * Adjusts internal headings relative to the document's position in hierarchy.
 */
function processDocContent(content: string, docHeadingLevel: number): string {
  // Doc title is at docHeadingLevel (e.g., ## = 2)
  // Content h2 should become docHeadingLevel + 1
  const increment = docHeadingLevel - 1;
  return adjustHeadingLevels(content, increment);
}

/**
 * Adjust heading levels in content.
 * Converts all headings (h1-h6) to appropriate levels based on document position.
 */
function adjustHeadingLevels(content: string, increment: number): string {
  return content.replace(/^(#{1,6})\s+/gm, (_match, hashes) => {
    const newLevel = Math.min(hashes.length + increment, 6);
    return "#".repeat(newLevel) + " ";
  });
}

/**
 * Convert doc links to anchors.
 * Diakrisis uses `routeBasePath: '/'`, so absolute doc links look like `/<id>`
 * rather than `/docs/<id>`.
 */
function convertRelativeLinks(content: string, _currentDocId: string): string {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  return content.replace(linkPattern, (match, text, href) => {
    // Skip external links, mail, images, and already-anchor links
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("#") ||
      /\.(png|jpg|jpeg|gif|svg|pdf|webp)$/i.test(href)
    ) {
      return match;
    }

    // Handle absolute Docusaurus links in Diakrisis:
    //   /NN-section/NN-doc  (routeBasePath: '/')
    //   /docs/NN-section/NN-doc  (legacy form, still guarded against)
    if (href.startsWith("/")) {
      const [, anchor] = href.split("#");
      if (anchor) {
        return `[${text}](#${anchor})`;
      }
      return `[${text}](#${slugify(text)})`;
    }

    // Handle relative paths: ./path or ../path
    if (href.startsWith(".")) {
      const [, anchor] = href.split("#");
      if (anchor) {
        return `[${text}](#${anchor})`;
      }
      return `[${text}](#${slugify(text)})`;
    }

    return match;
  });
}

/**
 * Extract all doc IDs from a sidebar item recursively.
 */
function extractDocIds(item: SidebarItem): string[] {
  if (typeof item === "string") {
    return [item];
  }
  if (item.type === "category") {
    return item.items.flatMap(extractDocIds);
  }
  return [];
}

/**
 * Generate consolidated content from a sidebar item.
 */
function processSidebarItem(
  item: SidebarItem,
  headingLevel: number = 2,
): string {
  const parts: string[] = [];
  const hashes = "#".repeat(headingLevel);

  if (typeof item === "string") {
    const doc = readDocFile(item);
    if (doc) {
      const adjustedContent = processDocContent(doc.content, headingLevel);

      parts.push(`\n<!-- Source: ${doc.filePath} -->`);
      parts.push(`${hashes} ${doc.title}\n`);
      if (doc.description) {
        parts.push(`*${doc.description}*\n`);
      }
      parts.push(adjustedContent);
      parts.push("\n---\n");
    }
  } else if (item.type === "category") {
    parts.push(`\n${hashes} ${item.label}\n`);

    for (const subItem of item.items) {
      parts.push(processSidebarItem(subItem, headingLevel + 1));
    }
  }

  return parts.join("\n");
}

/**
 * Process a sidebar section.
 */
function processSection(
  sectionLabel: string,
  items: SidebarItem[],
): string {
  const parts: string[] = [];

  // Section header (level 1)
  parts.push(`\n# ${sectionLabel}\n`);

  // Process each item in the section (starting at level 2)
  for (const item of items) {
    parts.push(processSidebarItem(item, 2));
  }

  return parts.join("\n");
}

/**
 * Generate table of contents.
 */
function generateTOC(
  sections: SectionInfo[],
  sidebar: SidebarConfig,
): string {
  const lines: string[] = ["# Содержание\n"];

  for (const section of sections) {
    const items = sidebar[section.sidebarId];
    if (!items) continue;

    lines.push(`\n## ${section.label}\n`);

    function addTOCItems(items: SidebarItem[], indent: number = 0) {
      const prefix = "  ".repeat(indent) + "- ";

      for (const item of items) {
        if (typeof item === "string") {
          const doc = readDocFile(item);
          if (doc) {
            lines.push(`${prefix}[${doc.title}](#${slugify(doc.title)})`);
          }
        } else if (item.type === "category") {
          lines.push(`${prefix}**${item.label}**`);
          addTOCItems(item.items, indent + 1);
        }
      }
    }

    addTOCItems(items);
  }

  return lines.join("\n");
}

/**
 * Generate URL-safe slug from title (supports Cyrillic).
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-zа-яё0-9\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Generate metadata header.
 */
function generateHeader(): string {
  const now = new Date().toISOString().split("T")[0];
  return `---
title: "Diakrisis — полная документация"
generated: ${now}
generator: scripts/consolidate.ts
source: docs/
---

<!--
  This file was automatically generated from the Diakrisis documentation.
  Do not edit manually. Re-generate using: bun scripts/consolidate.ts
-->

`;
}

/**
 * Main function.
 */
async function main() {
  console.log("📚 Consolidating Diakrisis documentation...\n");

  // Load configurations
  const sidebar = await loadSidebar();
  let sections = await extractSections();

  // Fallback: if navbar parsing failed, use sidebar keys with default labels
  if (sections.length === 0) {
    console.log("Using sidebar keys as sections (no navbar config found)");
    sections = Object.keys(sidebar).map((key) => ({
      sidebarId: key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));
  }

  // Filter to only available sections
  const availableSections = sections.filter((s) => sidebar[s.sidebarId]);

  console.log(
    `Sections (from navbar): ${availableSections.map((s) => s.label).join(", ")}`,
  );

  // Count documents
  let totalDocs = 0;
  for (const section of availableSections) {
    const docIds = sidebar[section.sidebarId].flatMap(extractDocIds);
    totalDocs += docIds.length;
  }
  console.log(`Total documents: ${totalDocs}\n`);

  // Build consolidated document
  const parts: string[] = [];

  // Header
  parts.push(generateHeader());

  // Table of contents
  parts.push(generateTOC(availableSections, sidebar));
  parts.push("\n---\n");

  // Process each section in order
  for (const section of availableSections) {
    console.log(`Processing: ${section.label}...`);
    parts.push(processSection(section.label, sidebar[section.sidebarId]));
  }

  // Footer
  parts.push(`\n\n---\n\n*Сгенерировано: ${new Date().toISOString()}*\n`);

  // Write output
  const outputPath =
    process.argv[2] || join(projectRoot, "diakrisis-consolidated.md");
  const content = parts.join("\n");

  writeFileSync(outputPath, content, "utf-8");

  console.log(`\n✅ Done! Output: ${outputPath}`);
  console.log(`   Size: ${(content.length / 1024).toFixed(1)} KB`);
  console.log(`   Lines: ${content.split("\n").length}`);
}

// Run
main().catch(console.error);
