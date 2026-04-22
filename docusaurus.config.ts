import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const theoryVersion = require('./package.json').version as string;

const ghPagesUrl = process.env.GH_PAGES_URL || 'https://diakrisis.local';
const ghPagesBaseUrl = process.env.GH_PAGES_BASE_URL || '/';

const config: Config = {
  title: 'Diakrisis',
  tagline: 'Математическая структура классификации оснований',
  favicon: 'img/favicon.ico',

  url: ghPagesUrl,
  baseUrl: ghPagesBaseUrl,

  organizationName: process.env.GH_ORG_NAME || 'uhm-theory',
  projectName: process.env.GH_PROJECT_NAME || 'diakrisis',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        label: 'Русский',
        htmlLang: 'ru-RU',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          numberPrefixParser: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  clientModules: [
    require.resolve('./src/theme/MermaidRounded.js'),
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['ru'],
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    function ignoreWarningsPlugin() {
      return {
        name: 'ignore-warnings',
        configureWebpack() {
          return {
            ignoreWarnings: [
              {module: /vscode-languageserver-types/},
              /Critical dependency: require function is used/,
            ],
            module: {
              exprContextCritical: false,
            },
          };
        },
      };
    },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    metadata: [
      {name: 'author', content: 'Diakrisis Authors'},
      {name: 'description', content: 'Diakrisis — 2-категорный формализм для классификации математических оснований.'},
    ],
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Diakrisis',
      logo: {
        alt: 'Diakrisis',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value: `<span class="navbar-version">v${theoryVersion}</span>`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          to: '/06-limits/02-th-final',
          position: 'left',
          label: 'TH-Final',
        },
        {
          to: '/10-reference/02-theorems-catalog',
          position: 'left',
          label: 'Теоремы',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {label: 'Введение', to: '/intro'},
            {label: 'Что такое Diakrisis', to: '/00-foundations/00-what-is-diakrisis'},
            {label: 'Канонический примитив', to: '/02-canonical-primitive/00-overview'},
            {label: 'Формальная архитектура', to: '/03-formal-architecture/00-metacategory-structure'},
          ],
        },
        {
          title: 'Ключевые результаты',
          items: [
            {label: 'TH-Final', to: '/06-limits/02-th-final'},
            {label: 'Universal Foundation (29.T)', to: '/04-extractions/00-overview'},
            {label: 'Classifying Space (43.T1)', to: '/02-canonical-primitive/03-derived-notions'},
            {label: 'УГМ-сборка', to: '/05-assemblies/01-uhm'},
          ],
        },
        {
          title: 'Справочник',
          items: [
            {label: 'Глоссарий', to: '/10-reference/00-glossary'},
            {label: 'Каталог аксиом', to: '/10-reference/01-axioms-catalog'},
            {label: 'Каталог теорем', to: '/10-reference/02-theorems-catalog'},
            {label: 'Статус gap', to: '/10-reference/03-gap-status'},
          ],
        },
        {
          title: 'Связанные проекты',
          items: [
            {label: 'УГМ Theory (website)', href: 'https://holon.sh'},
            {label: 'Verum language', href: 'https://verum-lang.org/'},
          ],
        },
      ],
      copyright: `Diakrisis v${theoryVersion} · формальный корпус теории артикуляции оснований.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['haskell', 'coq'],
    },

    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        flowchart: {
          curve: 'basis',
          padding: 15,
          nodeSpacing: 50,
          rankSpacing: 50,
          defaultRenderer: 'dagre-wrapper',
          htmlLabels: true,
        },
        themeVariables: {
          nodeBorder: '1px',
          clusterBorder: '1px',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
