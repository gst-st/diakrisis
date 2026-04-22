---
sidebar_position: 8
title: Рабочие сценарии
---

# Workflow-паттерны Noesis

## Обзор

15 канонических workflow-паттернов — типичные сценарии использования Noesis. Каждый покрывает distinct user-journey с measurable outcomes.

---

## WF-1: Ingest theory

**Use case**: researcher хочет загрузить новую theory в Noesis.

**Steps**:
1. `knowledge/create` — создать knowledge-object.
2. Import markdown docs (per-paper, per-chapter).
3. LLM-assist: automatic claim extraction from text (с user review).
4. Agent proposes dependencies based on cross-references.
5. User refines; `claim/add_dependency` для corrections.
6. `knowledge/audit` — initial coherence check.
7. `axiom/check` per-claim compliance.

**Outcome**: structured theory ready for querying.

**Time**: ~30 min для 100-page paper vs ~2-3 days manual.

---

## WF-2: Paradox detection

**Use case**: self-reference обнаружен в theory.

**Steps**:
1. User: `claim/set_status T-X C "paradox"`.
2. Noesis: `propagation/preview` показывает 18 affected claims.
3. Agent: analyzes alternative chains (мог бы X обойти без T-X?).
4. User: reviews propagation, accepts or overrides.
5. `propagation/apply` — atomic update.
6. Git commit with audit trail.

**Outcome**: consistent state восстановлен в <5 min (vs 2-4 hours manual).

---

## WF-3: Cross-theory translation

**Use case**: понять как concept в T_1 соотносится с T_2.

**Steps**:
1. `translate/claim T_1:X --target T_2`.
2. Noesis computes Kan extension approximation.
3. Agent proposes top-3 candidates с confidence + obstruction.
4. User reviews; selects best или refines.
5. `functor/create` если новый bridge established.
6. SMT-verification of functoriality.

**Outcome**: formal translation с verifiable confidence.

---

## WF-4: Coherence audit

**Use case**: проверить целостность theory перед submission.

**Steps**:
1. `knowledge/audit T` — full audit (5 violation types).
2. `coherence/check --cross T --target all` — cross-theory coherence.
3. Agent: summarizes findings.
4. User addresses each violation.
5. Final audit → green.

**Outcome**: publication-ready theory.

---

## WF-5: Literature integration

**Use case**: включить findings новой paper в existing theory.

**Steps**:
1. `knowledge/import` — parse paper markdown/PDF.
2. Agent: extract claims, propose dependencies.
3. User reviews extractions.
4. `claim/add_dependency` — connect to existing claims.
5. `coherence/check` — detect conflicts с existing corpus.
6. Resolve conflicts (update statuses, refine claims).

**Outcome**: new paper structurally integrated в days, не weeks.

---

## WF-6: Thesis / dissertation structuring

**Use case**: PhD student structures thesis in Noesis.

**Steps**:
1. `knowledge/create thesis`.
2. Initial axioms = background assumptions.
3. Claims = chapters, sections, results.
4. Dependencies between chapters.
5. Translations to literature (IIT, GWT, UHM).
6. Agent: detects unexplored gaps.
7. `meta/patterns` identifies recurring themes.

**Outcome**: thesis с formal structural backbone + gap analysis.

---

## WF-7: Regulatory compliance

**Use case**: pharma company submits NDA в multiple jurisdictions.

**Steps**:
1. Load regulations: FDA, EMA, PMDA (each as knowledge-object).
2. Load clinical trial data как claims.
3. Agent: compute translations между regulatory frameworks.
4. `coherence/check` — detect regulatory conflicts.
5. Generate submission packages per jurisdiction с conflict resolutions.

**Outcome**: multi-jurisdictional submission в days vs 18+ months.

---

## WF-8: Patent analysis

**Use case**: determine if invention has prior art.

**Steps**:
1. Describe invention as claim structure.
2. `graph/search` — similarity search across patent database.
3. Agent: ranks candidates by structural overlap.
4. `morita/check` — check если invention Morita-equivalent existing patent.
5. `obstruction/compute` — quantify novelty.

**Outcome**: structural prior-art report с obstruction metrics.

---

## WF-9: Safety-critical specification

**Use case**: aerospace engineer creates system spec.

**Steps**:
1. Load relevant standards (ISO 26262, DO-178C, ARP4754A).
2. Create specification as knowledge-object.
3. Dependencies from claims to standards.
4. `axiom/check` — verify satisfaction of safety axioms.
5. `coherence/check` — cross-standard consistency.
6. SMT-verified compliance report.

**Outcome**: formally-verified safety specification.

---

## WF-10: Research reproducibility

**Use case**: research team ensures results reproducible.

**Steps**:
1. Each experiment → claim with dependencies.
2. Data + analysis code linked as witness.
3. Prediction claims with test protocols.
4. `verum/verify` — run verification pipeline.
5. Cross-experiment coherence checks.

**Outcome**: reproducible research с audit trail.

---

## WF-11: Curriculum design

**Use case**: professor designs new course.

**Steps**:
1. `knowledge/create course_X`.
2. Claims = learning objectives, topics.
3. Dependencies = prerequisite relationships.
4. Translations to textbooks (Knuth, Cormen, etc.).
5. Agent: suggests optimal ordering.
6. `coherence/check` — ensure no circular prerequisites.

**Outcome**: structured curriculum с dependency analysis.

---

## WF-12: M&A due diligence

**Use case**: due diligence при корпоративном acquisition.

**Steps**:
1. Target company documents imported as knowledge-objects.
2. Acquirer knowledge similarly structured.
3. `morita/check` — detect duplicative IP.
4. `coherence/check` — identify conflicts.
5. `obstruction/compute` — quantify integration cost.
6. Comprehensive due-diligence report.

**Outcome**: structural M&A analysis в days vs months.

---

## WF-13: Collaborative research

**Use case**: international research consortium.

**Steps**:
1. Each institution maintains local Noesis instance.
2. Federation protocol connects nodes.
3. Shared knowledge-objects (public claims).
4. Private claims (institutional).
5. Agent: discovers cross-institutional opportunities.
6. `coherence/check --scope federation`.

**Outcome**: coordinated research с preserved privacy.

---

## WF-14: Evidence synthesis

**Use case**: systematic review в medicine.

**Steps**:
1. Import studies as knowledge-objects.
2. Each study: claims = findings, dependencies = methodology.
3. Agent: extract comparable claims across studies.
4. `morita/check` — identify methodologically-equivalent studies.
5. Meta-analysis enabled by structural alignment.

**Outcome**: formal systematic review.

---

## WF-15: Meta-research (Noesis about Noesis)

**Use case**: senior researcher studies own knowledge structure.

**Steps**:
1. `meta/audit` — check T_meta adequacy.
2. `meta/patterns` — find recurring issues.
3. Agent: proposes structural extensions.
4. `meta/suggest_extension` — new dependency types.
5. User confirms; structure evolves (L-II / L-III).

**Outcome**: adapted knowledge infrastructure.

---

## Integration с existing tools

### From Obsidian / Roam

**Migration path**: existing vault → import → structural augmentation.

Noesis reads plain markdown; adds YAML frontmatter; builds dependency graph.

Existing notes remain valid; enhanced with typed structure.

### From Lean4 / Coq / Agda

**Bidirectional integration**:
- Export Noesis claims to Lean4 for formal proof.
- Import Lean4-verified theorems as [Т·L1] claims.
- SMT gate uses same underlying technology.

### From Git repositories

**Auto-import**: scan repository → extract documentation → structure as claims.

Useful for:
- Specifications в software projects.
- ADRs (Architecture Decision Records).
- Regulatory documentation.

### From Notion / Confluence / SharePoint

**Enterprise integration**:
- Read-only import.
- Augment with structural metadata.
- Expose via NP endpoints.

### From academic paper databases

**Literature integration**:
- PubMed, arXiv, Semantic Scholar.
- OCR + NLP extraction.
- Agent builds claim structure.
- Review + refinement by researcher.

## Onboarding workflow

### Week 1: setup

- Install Noesis (local или cloud).
- Connect к existing data source (git repo, Notion, etc.).
- Import first knowledge-object.
- Initial audit.

### Week 2: structure

- Refine claim structure.
- Add dependencies.
- Create first functor к related knowledge.

### Week 3: automation

- Enable agent for routine tasks.
- Set up coherence monitoring.
- Configure notifications.

### Month 2-3: adoption

- Full workflow integration.
- Team onboarding.
- Domain-specific customization.

### Month 3+: federation

- Connect к partners.
- Cross-organizational knowledge sharing.
- Mature collaborative workflows.

## Performance benchmarks

| Task | Manual | Noesis | Speedup |
|---|---|---|---|
| Coherence audit of 400-page corpus | 40 hours | 10 minutes | 240× |
| Loading new theory | 3 days | 30 minutes | 144× |
| Cross-theory translation | 1 week | 2 hours | 84× |
| Multi-regulatory compliance check | 3 weeks | 4 hours | 126× |
| Thesis coherence review | 20 hours | 2 hours | 10× |
| Patent prior-art search | 2 weeks | 6 hours | 56× |

(Benchmarks based on UHM case study + domain extrapolation.)

## Следующий шаг

Для domain applications: [09 — Наука](./09-science), [10 — Инженерия](./10-engineering).

Для case studies: [14 — Кейсы](./14-case-studies).
