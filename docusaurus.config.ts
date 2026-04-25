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
  favicon: 'img/favicon.svg',

  url: ghPagesUrl,
  baseUrl: ghPagesBaseUrl,

  headTags: [
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: 'img/favicon.svg'}},
    {tagName: 'link', attributes: {rel: 'alternate icon', type: 'image/x-icon', href: 'img/favicon.ico'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: 'img/apple-touch-icon.png'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '192x192', href: 'img/android-chrome-192x192.png'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '512x512', href: 'img/android-chrome-512x512.png'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#5d4ebf'}},
  ],

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
          rehypePlugins: [[rehypeKatex, {
            strict: false,
            macros: {
              // Calligraphic shortcuts matching paper-en/paper.tex preamble
              '\\cS': '\\mathcal{S}',
              '\\cF': '\\mathcal{F}',
              '\\cM': '\\mathcal{M}',
              '\\cC': '\\mathcal{C}',
              '\\cD': '\\mathcal{D}',
              '\\cL': '\\mathcal{L}',
              '\\cP': '\\mathcal{P}',
              // Fraktur
              '\\fM': '\\mathfrak{M}',
              '\\Meta': '\\mathfrak{Meta}',
              // Mnemonic strata (post-audit14)
              '\\LFnd': '\\mathcal{L}_{\\mathrm{Fnd}}',
              '\\LCls': '\\mathcal{L}_{\\mathrm{Cls}}',
              '\\LClsMax': '\\mathcal{L}_{\\mathrm{Cls}}^{\\top}',
              '\\LAbs': '\\mathcal{L}_{\\mathrm{Abs}}',
              // Roman operators
              '\\id': '\\mathrm{id}',
              '\\Ob': '\\mathrm{Ob}',
              '\\Mor': '\\mathrm{Mor}',
              '\\Hom': '\\mathrm{Hom}',
              '\\Fun': '\\mathrm{Fun}',
              '\\Cl': '\\mathrm{Cl}',
              '\\Lan': '\\mathrm{Lan}',
              '\\Ran': '\\mathrm{Ran}',
              '\\Set': '\\mathrm{Set}',
              '\\Cat': '\\mathrm{Cat}',
              '\\Syn': '\\mathrm{Syn}',
              '\\Mod': '\\mathrm{Mod}',
              '\\Con': '\\mathrm{Con}',
              '\\colim': '\\operatorname*{colim}',
              // Sans-serif theories
              '\\PA': '\\mathsf{PA}',
              '\\ZFC': '\\mathsf{ZFC}',
              '\\MLTT': '\\mathsf{MLTT}',
              '\\HoTT': '\\mathsf{HoTT}',
              '\\ETT': '\\mathsf{ETT}',
              '\\CIC': '\\mathsf{CIC}',
              '\\NBG': '\\mathsf{NBG}',
              // Compound
              '\\RS': '\\mathrm{R\\text{-}S}',
              '\\Sint': '\\mathcal{S}_{\\mathrm{int}}',
              '\\II': '\\mathbf{I}',
            },
          }]],
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
      {name: 'description', content: 'Diakrisis — (∞,∞)-мета-структурная теория пространства мат-оснований 𝓜_Fnd. 106 теорем: четырёхуровневое закрытие (extensional / intensional / meta-classification / maximality) с пятиосевой абсолютностью граничной леммы AFN-T и доказанным членством в 𝓛_Cls^⊤. UFH-мост к УГМ через Grothendieck-конструкцию.'},
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
      title: '',
      logo: {
        alt: 'Diakrisis',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value: `<span class="navbar-version navbar-version--attached">v${theoryVersion}</span>`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Diakrisis',
        },
        {
          type: 'docSidebar',
          sidebarId: 'noesisSidebar',
          position: 'left',
          label: 'Noesis',
        },
        {
          to: '/06-limits/02-th-final',
          position: 'left',
          label: 'AFN-T',
        },
        {
          to: '/06-limits/10-maximality-theorems',
          position: 'left',
          label: 'Максимальность',
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
            {label: 'AFN-T (граничная лемма)', to: '/06-limits/02-th-final'},
            {label: 'Доказательства максимальности (103.T–106.T)', to: '/06-limits/10-maximality-theorems'},
            {label: 'Мета-классификация (100.T–102.T)', to: '/06-limits/09-meta-classification'},
            {label: 'Классифицирующее пространство (43.T1)', to: '/02-canonical-primitive/03-derived-notions'},
            {label: 'УГМ-сборка (UFH / 85.T)', to: '/05-assemblies/01-uhm'},
          ],
        },
        {
          title: 'Справочник',
          items: [
            {label: 'Глоссарий', to: '/10-reference/00-glossary'},
            {label: 'Каталог аксиом', to: '/10-reference/01-axioms-catalog'},
            {label: 'Каталог теорем', to: '/10-reference/02-theorems-catalog'},
            {label: 'Статус пробелов', to: '/10-reference/03-gap-status'},
          ],
        },
        {
          title: 'Связанные проекты',
          items: [
            {label: 'УГМ — сайт теории', href: 'https://holon.sh'},
            {label: 'Verum', href: 'https://verum-lang.org/'},
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
