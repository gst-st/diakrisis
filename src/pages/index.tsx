import type {ReactNode, JSX} from 'react';
import {useState, useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * Minimalist abstract composition — no theory-specific labels.
 *
 * Geometric gesture conveys the essential structure without naming:
 *  - central point (singularity of distinction, Δ)
 *  - layered concentric rings (stratification)
 *  - dashed outer boundary (limit)
 *  - orbit points (plurality within the middle stratum)
 *  - soft radial rays (axes of absoluteness, unlabeled)
 *  - slow breath + counter-rotation
 *
 * The intent is that the visual reads as a structured, bounded,
 * contemplative cosmos rather than a diagram of any specific theory.
 */
function DiakrisisVisualization() {
  const cx = 250;
  const cy = 250;
  const [time, setTime] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      setTime(elapsed);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const coreR = 24;
  const innerR = 72;
  const midR = 135;
  const outerR = 185;
  const boundaryR = 218;

  const breath = 1 + Math.sin(time * 0.3) * 0.015;
  const midSpin = time * 0.45;
  const innerSpin = -time * 0.7;

  const midNodeCount = 7;
  const midNodes: {x: number; y: number; pulse: number}[] = [];
  for (let i = 0; i < midNodeCount; i++) {
    const angle = ((i / midNodeCount) * 2 * Math.PI) + midSpin - Math.PI / 2;
    const r = midR * breath;
    const pulse = Math.sin(time * 0.5 + i * 0.9);
    midNodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      pulse,
    });
  }

  const innerNodeCount = 3;
  const innerNodes: {x: number; y: number}[] = [];
  for (let i = 0; i < innerNodeCount; i++) {
    const angle = ((i / innerNodeCount) * 2 * Math.PI) + innerSpin - Math.PI / 2;
    const r = innerR * breath;
    innerNodes.push({
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    });
  }

  const rayCount = 5;
  const rays: {ix: number; iy: number; ox: number; oy: number; pulse: number}[] = [];
  for (let i = 0; i < rayCount; i++) {
    const angle = ((i / rayCount) * 2 * Math.PI) - Math.PI / 2;
    const pulse = (Math.sin(time * 0.33 + i * ((2 * Math.PI) / rayCount)) + 1) * 0.5;
    rays.push({
      ix: cx + Math.cos(angle) * (innerR + 10),
      iy: cy + Math.sin(angle) * (innerR + 10),
      ox: cx + Math.cos(angle) * (boundaryR - 12),
      oy: cy + Math.sin(angle) * (boundaryR - 12),
      pulse,
    });
  }

  const driftX = Math.sin(time * 0.27) * 1.2;
  const driftY = Math.sin(time * 0.19) * 1.2;
  const centerX = cx + driftX;
  const centerY = cy + driftY;

  return (
    <svg viewBox="0 0 500 500" className={styles.orbitalSvg} aria-hidden="true">
      <defs>
        <radialGradient id="ambientGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--ifm-color-primary)" stopOpacity="0.38" />
          <stop offset="55%" stopColor="var(--ifm-color-primary)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--ifm-color-primary)" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="coreGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={cx} cy={cy} r={boundaryR * breath} fill="url(#ambientGrad)" />

      <circle
        cx={cx}
        cy={cy}
        r={boundaryR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.7}
        strokeDasharray="4 5"
        opacity={0.28}
      />

      {rays.map((ray, i) => (
        <line
          key={`ray-${i}`}
          x1={ray.ix}
          y1={ray.iy}
          x2={ray.ox}
          y2={ray.oy}
          stroke="var(--ifm-color-primary)"
          strokeWidth={0.45}
          strokeDasharray="1 5"
          opacity={0.12 + ray.pulse * 0.1}
        />
      ))}

      <circle
        cx={cx}
        cy={cy}
        r={outerR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.5}
        opacity={0.14}
      />

      <circle
        cx={cx}
        cy={cy}
        r={midR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.5}
        opacity={0.2}
      />

      <g filter="url(#softGlow)">
        {midNodes.map((node, i) => (
          <circle
            key={`mid-node-${i}`}
            cx={node.x}
            cy={node.y}
            r={3 + node.pulse * 0.8}
            fill="var(--ifm-color-primary)"
            opacity={0.55 + node.pulse * 0.25}
          />
        ))}
      </g>

      <circle
        cx={cx}
        cy={cy}
        r={innerR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.6}
        strokeDasharray="2 4"
        opacity={0.35}
      />

      {innerNodes.map((node, i) => (
        <circle
          key={`inner-node-${i}`}
          cx={node.x}
          cy={node.y}
          r={2.4}
          fill="none"
          stroke="var(--ifm-color-primary)"
          strokeWidth={1}
          opacity={0.55}
        />
      ))}

      <circle
        cx={centerX}
        cy={centerY}
        r={coreR * 1.6 * breath}
        fill="var(--ifm-color-primary)"
        opacity={0.1}
        filter="url(#coreGlow)"
      />
      <circle
        cx={centerX}
        cy={centerY}
        r={coreR * breath}
        fill="var(--ifm-color-primary)"
        className={styles.coreCircle}
      />
      <text
        x={centerX}
        y={centerY}
        className={styles.coreSymbol}
        textAnchor="middle"
        dominantBaseline="central"
        dy="-0.06em"
      >
        Δ
      </text>
    </svg>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Diakrisis
          </Heading>
          <p className={styles.heroSubtitle}>
            Мета-структурная теория пространства математических оснований
          </p>
          <p className={styles.heroDescription}>
            Различение — первичный акт, не объект. Множественность математических оснований рассматривается как единая классифицирующая структура: каждое основание занимает в ней координатную позицию, и ни одно не абсолютно. Программа формализует это пространство, доказывает его структурный плюрализм и устанавливает формальную границу, обобщающую классическую серию no-go-теорем.
          </p>
          <div className={styles.heroButtons}>
            <Link className="button button--primary button--lg" to="/intro">
              Введение
            </Link>
            <Link className="button button--outline button--lg" to="/06-limits/02-th-final">
              AFN-T
            </Link>
            <Link className="button button--outline button--lg" to="/06-limits/10-maximality-theorems">
              Максимальность
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <DiakrisisVisualization />
        </div>
      </div>
    </header>
  );
}

function EssenceSection() {
  return (
    <section className={styles.essenceSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Суть</Heading>
        <p className={styles.sectionSubtitle}>
          Четыре содержательных компонента, из которых собирается весь корпус.
        </p>

        <div className={styles.essenceGrid}>
          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>I</div>
            <h3>Примитив</h3>
            <p>
              Минимальная мета-структура: пространство артикуляций, оператор метаизации, выделенная линза реализации, семейство отношений подартикуляции. Достаточно для того, чтобы основание стало координатой.
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>II</div>
            <h3>Аксиоматика</h3>
            <p>
              Тринадцать формальных условий — о существовании и базовой структуре примитивов, о непривилегированности линзы, о стратификации по глубине, блокирующей самореферентные парадоксы.
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>III</div>
            <h3>Классификация</h3>
            <p>
              Каждое достаточно богатое основание единственным образом артикулируется в общем пространстве модулей; обратное восстановление через линзу реализации даёт биекцию.
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>IV</div>
            <h3>Граница</h3>
            <p>
              Абсолютное основание невозможно. Граница пятиосево абсолютна — по основанию, по категорному уровню, по мета-итерации, по альтернативному порядку, по условию полноты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MotivationSection() {
  return (
    <section className={styles.motivationSection}>
      <div className="container">
        <div className={styles.motivationLayout}>
          <div className={styles.motivationText}>
            <Heading as="h2" className={styles.sectionTitle}>Контекст</Heading>

            <h3 className={styles.motivationSubheading}>Постановка</h3>
            <p>
              Основание математики множественно. Несколько формально различных оснований покрывают существенные фрагменты практики; ни одно не привилегировано. Отношения между ними исследуются разрозненно, без общей системы координат.
            </p>

            <h3 className={styles.motivationSubheading}>Программа</h3>
            <p>
              Diakrisis строит классифицирующее пространство, в котором основания становятся точками, а переходы — морфизмами. Минимальная мета-структура достаточна для общей классификации без заимствования технических терминов у конкретных оснований.
            </p>

            <h3 className={styles.motivationSubheading}>Граница</h3>
            <p>
              Граница — единая no-go-теорема, унифицирующая классическую серию no-go-результатов. Она структурно абсолютна по пяти независимым осям одновременно. Дуальная сторона расширяет границу на акт-центричное представление.
            </p>

            <h3 className={styles.motivationSubheading}>Внутри границы</h3>
            <p>
              Пространство классификаторов имеет нетривиальную внутреннюю структуру. Интенсиональное уточнение различает основания, экстенсионально эквивалентные. Мета-классификация стабилизируется на теоретическом уровне с восхождением по универсумам Гротендика. Корпус формально входит в максимальный подкласс классификаторов.
            </p>
          </div>

          <div className={styles.motivationFacts}>
            <Heading as="h3" className={styles.factsTitle}>Состояние</Heading>
            <dl className={styles.factsList}>
              <div><dt>Аксиоматика</dt><dd>тринадцать условий минимальной структуры</dd></div>
              <div><dt>Корпус</dt><dd>сто тридцать пять формальных утверждений</dd></div>
              <div><dt>Метатеория</dt><dd>стандартная теория множеств с двумя недостижимыми кардиналами; граница тугая</dd></div>
              <div><dt>Стратификация</dt><dd>основания, классификаторы, максимальные классификаторы; абсолютный стратум пуст</dd></div>
              <div><dt>Граница</dt><dd>пятиосевая абсолютность no-go-теоремы</dd></div>
              <div><dt>Категоричность</dt><dd>максимальный подкласс — единственная точка до канонической эквивалентности</dd></div>
              <div><dt>Дуальная сторона</dt><dd>акт-центричная проекция с собственной формальной серией</dd></div>
              <div><dt>Связанные корпуса</dt><dd>самодостаточный препринт MSFS, прикладные сборки, инженерная платформа знаний</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

type DocSection = {
  id: string;
  title: string;
  description: string;
  link: string;
  items: string[];
};

const docSections: DocSection[] = [
  {
    id: 'foundations',
    title: 'Основания проекта',
    description: 'Нулевые принципы, нулевая граница, иерархия уровней',
    link: '/00-foundations/00-what-is-diakrisis',
    items: [
      'Что такое Diakrisis',
      'Метод работы',
      'Нулевые принципы',
      'Нулевая граница',
      'Иерархия уровней структурной мощности',
    ],
  },
  {
    id: 'phenomenon',
    title: 'Феномен различения',
    description: 'Διάκрисίс как акт',
    link: '/01-diakrisis-phenomenon/00-act-not-object',
    items: [
      'Различение как акт, не объект',
      'Феноменологическое обоснование',
      'Параллели в философской традиции',
      'Формальные корреспонденции',
    ],
  },
  {
    id: 'primitive',
    title: 'Канонический примитив',
    description: 'Четыре первичных понятия и тринадцать аксиом',
    link: '/02-canonical-primitive/00-overview',
    items: [
      'Метакатегория артикуляций и её структура',
      'Эндофунктор метаизации',
      'Выделенная линза реализации',
      'Семейство отношений подартикуляции',
      'Тринадцать аксиом и их независимость',
    ],
  },
  {
    id: 'architecture',
    title: 'Формальная архитектура',
    description: 'Внутренняя замкнутость, когезия, калибровка, модальность',
    link: '/03-formal-architecture/00-metacategory-structure',
    items: [
      'Вложение пространства эндооператоров в метакатегорию',
      'Когезивная четвёрка-сопряжение',
      'Расслоение, калибровка, модальная интерпретация',
      'Соответствие Карри–Ховарда–Ламбека',
      'Не-классические артикуляции',
    ],
  },
  {
    id: 'extractions',
    title: 'Извлечения оснований',
    description: 'Конкретные основания как точки классифицирующего пространства',
    link: '/04-extractions/00-overview',
    items: [
      'Универсальная теорема об артикуляции основания',
      'Теорема о восстановлении основания из реализации',
      'Классифицирующее пространство модулей',
      'Каталог логик и оснований',
    ],
  },
  {
    id: 'assemblies',
    title: 'Сборки',
    description: 'УГМ, физические и философские теории как специализации примитива',
    link: '/05-assemblies/01-uhm',
    items: [
      'Универсальный гомометрический манифольд',
      'Универсальная гипотеза о структурной корреспонденции',
      'Стандартная модель через спектральные тройки',
      'Теории сознания как точки в пространстве модулей',
    ],
  },
  {
    id: 'limits',
    title: 'Пределы формализации',
    description: 'No-go-теорема, доказательства максимальности, мета-классификация',
    link: '/06-limits/02-th-final',
    items: [
      'No-go-теорема для абсолютных оснований',
      'Место в классической no-go-серии',
      'Пятиосевая абсолютность',
      'Интенсиональное уточнение и срез-локальность',
      'Мета-классификация со стабилизацией на теоретическом уровне',
      'Доказательства максимальности',
      'Закрытие открытых вопросов после теоремы 106',
    ],
  },
  {
    id: 'msfs-preprint',
    title: 'Препринт MSFS',
    description: 'Самодостаточная формальная версия в стандартной нотации',
    link: '/10-reference/04-afn-t-correspondence',
    items: [
      'Пространство модулей формальных систем',
      'Пять структурных результатов',
      'No-go-теорема как граничное следствие',
      'Соответствие нумерации с корпусом Diakrisis',
    ],
  },
  {
    id: 'methodology',
    title: 'Методология',
    description: 'Рекурсивные аудиты и негативные уроки',
    link: '/07-methodology/02-recursive-audits',
    items: [
      'Рекурсивные многоуровневые аудиты',
      'Негативные уроки',
      'Мета-аудит главной no-go-теоремы',
      'Навигационная целостность корпуса',
    ],
  },
  {
    id: 'noesis',
    title: 'Noesis',
    description: 'Инженерная платформа знаний над Diakrisis',
    link: '/11-noesis/00-introduction',
    items: [
      'Введение и архитектура',
      'Модель знаний и операции',
      'Агент с проверкой формальной корректности',
      'Федерация и управление',
      'Дорожная карта реализации в фазах',
    ],
  },
  {
    id: 'actic',
    title: 'Актика',
    description: 'Дуальная акт-центричная проекция',
    link: '/12-actic/00-foundations',
    items: [
      'Дуальный канонический примитив',
      'Морита-двойственность артикуляций и актов',
      'Дуальная no-go-теорема',
      'Эпсилон-инвариант глубины актов',
      'Формальное расширение Метастемологии',
    ],
  },
];

function OverviewSection() {
  return (
    <section className={styles.docsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Обзор корпуса</Heading>
        <p className={styles.sectionSubtitle}>
          Одиннадцать разделов — от феноменологии акта различения через формальную классификацию оснований к инженерной реализации.
        </p>
        <div className={styles.docsGrid}>
          {docSections.map((section) => (
            <Link key={section.id} to={section.link} className={styles.docCard}>
              <h3>{section.title}</h3>
              <p className={styles.docDescription}>{section.description}</p>
              <ul className={styles.docItems}>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Математическая структура классификации оснований"
      description="Diakrisis — мета-структурная теория пространства математических оснований. Каноническая аксиоматика из тринадцати условий, корпус из ста тридцати пяти теорем, пятиосевая абсолютность граничной no-go-теоремы, доказанное членство в максимальном подклассе классификаторов."
    >
      <HomepageHeader />
      <main>
        <EssenceSection />
        <MotivationSection />
        <OverviewSection />
      </main>
    </Layout>
  );
}
