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

  // Radii — four concentric strata
  const coreR = 24;
  const innerR = 72;
  const midR = 135;
  const outerR = 185;
  const boundaryR = 218;

  // Soft breath modulation (~±1.5%)
  const breath = 1 + Math.sin(time * 0.3) * 0.015;

  // Slow counter-rotation — wordless sense of flow
  const midSpin = time * 0.45;
  const innerSpin = -time * 0.7;

  // Mid ring: 7 abstract orbital points (no labels, no meaning assigned)
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

  // Inner ring: 3 hollow marks, subtler counter-motion
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

  // Five radial whisper-rays
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

  // Central point micro-drift
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

      {/* Ambient breath */}
      <circle cx={cx} cy={cy} r={boundaryR * breath} fill="url(#ambientGrad)" />

      {/* Outer dashed boundary — unlabeled limit */}
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

      {/* Five whisper-rays */}
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

      {/* Outer ring — thin */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.5}
        opacity={0.14}
      />

      {/* Mid ring — baseline */}
      <circle
        cx={cx}
        cy={cy}
        r={midR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={0.5}
        opacity={0.2}
      />

      {/* Seven orbital points on the mid ring */}
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

      {/* Inner ring — dashed, softer */}
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

      {/* Three hollow inner marks */}
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

      {/* Central singularity — subtle glow + Δ */}
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
            Различение — первичный акт, не объект. Пространство всех математических оснований рассматривается как единая классифицирующая структура: каждое основание занимает в нём координатную позицию, и ни одно не абсолютно. Программа формализует это пространство, доказывает его структурный плюрализм и устанавливает формальную границу, обобщающую классическую серию no-go-теорем.
          </p>
          <div className={styles.heroButtons}>
            <Link className="button button--primary button--lg" to="/intro">
              Введение
            </Link>
            <Link className="button button--outline button--lg" to="/06-limits/02-th-final">
              AFN-T
            </Link>
            <Link className="button button--outline button--lg" to="/06-limits/10-maximality-theorems">
              Maximality
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
          Четыре компонента, из которых выводится весь корпус.
        </p>

        <div className={styles.essenceGrid}>
          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>⟪⟫</div>
            <h3>Примитив</h3>
            <p>
              Локально-малая 2-категория с 2-полностью-верным вложением{' '}
              <code>ι: End(⟪⟫) ↪ ⟪⟫</code>. Объекты — артикуляции α. Эндо-2-функтор{' '}
              <code>𝖬: ⟪⟫ → ⟪⟫</code> задаёт метаизацию. Выделенный объект{' '}
              <code>α<sub>math</sub></code> — линза реализации. Семейство отношений{' '}
              <code>⊏<sub>κ</sub></code> индексируется ординалами и фиксирует глубину подартикуляции.
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>Axi</div>
            <h3>Аксиоматика</h3>
            <p>
              13 условий: Axi-0..Axi-9 (существование, 2-категорная структура,{' '}
              <code>𝖬</code>-функториальность, реализация через внутренний хом, нетривиальность,
              самоартикулируемость, достаточность) + структурные{' '}
              <code>T-α</code> (непривилегированность{' '}
              <code>α<sub>math</sub></code>) и{' '}
              <code>T-2f*</code> (локально-стратифицированная комплетация, блокирующая парадоксы самоссылки).
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>𝓜</div>
            <h3>Классификация</h3>
            <p>
              <strong>29.T</strong> (Universal Foundation): каждое Rich-основание{' '}
              <code>F</code> определяет единственную{' '}
              <code>α<sub>F</sub></code> с точностью до gauge.{' '}
              <strong>30.T</strong> (Reconstruction): обратное восстановление из{' '}
              <code>ρ(α<sub>F</sub>)</code>. Вместе — биекция между Rich-основаниями и точками{' '}
              <code>𝓜<sub>Fnd</sub> = Trace(𝖠)/gauge</code> (<strong>43.T1</strong>).
            </p>
          </div>

          <div className={styles.essenceCard}>
            <div className={styles.essenceSymbol}>¬𝓛<sub>Abs</sub></div>
            <h3>Граница</h3>
            <p>
              <strong>AFN-T</strong> (Absolute Foundation No-Go Theorem): не существует{' '}
              <code>X</code>, одновременно удовлетворяющего{' '}
              <code>(F<sub>S</sub>)</code> формальной определимости,{' '}
              <code>(Π<sub>4,S,n</sub>)</code> нередуцируемости к{' '}
              <code>𝒮<sub>S</sub></code> и{' '}
              <code>(Π<sub>3</sub>-max<sub>S,n</sub>)</code> максимальной генеративности.{' '}
              <strong>Пятиосевая абсолютность</strong> (55.T · 59.T.1 · 69.T · 84.T · 87.T): инвариантно по метатеории <code>S</code>, категорному уровню{' '}
              <code>n</code>, мета-итерации μ, альтернативным порядкам ξ, в полноте Lawvere-scope.
              Diakrisis{' '}∈{' '}<code>𝓛<sub>Cls</sub><sup>⊤</sup></code> — теорема 106.T (все Max-1..Max-4 доказаны).
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
            <Heading as="h2" className={styles.sectionTitle}>Мотивация</Heading>

            <h3 className={styles.motivationSubheading}>Постановка</h3>
            <p>
              Современная мат-логика обладает широким спектром формальных оснований — ZFC, ETCS, CIC, MLTT, HoTT, NCG, (∞,1)-топосы Лурье — каждое из которых покрывает существенный фрагмент мат-практики, но ни одно не обладает привилегированным статусом. Отношения между ними (Морита-эквивалентность, интерпретация, gauge-соответствие) исследуются ad hoc. Отсутствует систематический формализм, в котором отдельные основания занимают координатные позиции в общем пространстве.
            </p>

            <h3 className={styles.motivationSubheading}>Программа</h3>
            <p>
              Diakrisis строит такое пространство — классифицирующий объект{' '}
              <code>𝓜<sub>Fnd</sub></code>, внутри которого основания становятся точками, а переходы между ними — морфизмами. Канонический примитив{' '}
              <code>(⟪⟫, 𝖬, α<sub>math</sub>, ⊏<sub>•</sub>)</code> фиксирует минимальную 2-категорную структуру, достаточную для этой классификации, без заимствования технических терминов у уже существующих оснований (принцип П-0.1).
            </p>

            <h3 className={styles.motivationSubheading}>Граница</h3>
            <p>
              Граничная лемма <strong>AFN-T</strong> (Absolute Foundation No-Go Theorem) — седьмой член структурной серии{' '}
              <em>Cantor → Russell → Gödel → Tarski → Lawvere-FP → Ernst</em> — формально закрывает стратум{' '}
              <code>𝓛<sub>Abs</sub></code>. <strong>Пятиосевая абсолютность</strong> устанавливает инвариантность по всем структурным осям: горизонтальная (55.T, метатеория{' '}
              <code>S</code>), вертикальная (59.T.1, уровень{' '}
              <code>n</code>), мета-вертикальная (69.T, μ-итерации), латеральная (84.T, категорный порядок ξ), полнота (87.T, Lawvere-scope). Diakrisis формально принадлежит максимальному подклассу классификаторов{' '}
              <code>𝓛<sub>Cls</sub><sup>⊤</sup></code> как теорема (106.T); все четыре условия максимальности (Max-1..Max-4) доказаны (103.T · 104.T · 105.T · 99.T).
            </p>

            <h3 className={styles.motivationSubheading}>Связь с УГМ</h3>
            <p>
              Теорема <strong>UFH (85.T, [Т·L3])</strong> устанавливает структурную корреспонденцию:{' '}
              <code>α<sub>uhm</sub> ≃<sub>gauge</sub> ∫<sub>Γ</sub> α<sub>Д-hybrid</sub><sup>!</sup>(Γ)</code> над <code>7D-quantum</code> — Grothendieck-конструкция с gauge-группой S₇ × U(1). Ординальная арифметика: ν(α<sub>uhm</sub>) = ν(7D) + ν(α<sub>Д-hybrid</sub>) = (ω+1) + (ω·2+1) = <strong>ω·3+1</strong>. Путь Б: Verum-формализация сводится к формализации α<sub>Д-hybrid</sub><sup>!</sup> + 7D-quantum + Grothendieck construction.
            </p>
          </div>

          <div className={styles.motivationFacts}>
            <Heading as="h3" className={styles.factsTitle}>Ключевые показатели</Heading>
            <dl className={styles.factsList}>
              <div><dt>Примитив</dt><dd>четвёрка <code>(⟪⟫, 𝖬, α<sub>math</sub>, ⊏<sub>•</sub>)</code> в (∞,∞)-форме</dd></div>
              <div><dt>Аксиомы</dt><dd>13 (Axi-0..Axi-9, T-α, T-2f*)</dd></div>
              <div><dt>Сила консистентности</dt><dd>Con(Diakrisis) = Con(ZFC + 2 inacc) — 90.T</dd></div>
              <div><dt>Корпус теорем</dt><dd>106 записей в номерной системе (119+ с под-теоремами), L1/L2/L3 классификация</dd></div>
              <div><dt>Категоричность</dt><dd>единственность до (∞,∞)-эквивалентности — 88.T</dd></div>
              <div><dt>Внутренний язык</dt><dd>L<sub>⟪⟫</sub> — 2-HoTT через Yoneda (89.T)</dd></div>
              <div><dt>Извлечения</dt><dd>ZFC, ETCS, CIC, MLTT, HoTT, ∞-Topos, NCG</dd></div>
              <div><dt>Non-classical α</dt><dd>α_linear, α_AFA-coalg, α_poly-HoTT, α_Д-hybrid</dd></div>
              <div><dt>Связующие</dt><dd>α_cohesion (91.T), α_motivic (92.T), α_realiz (93.T)</dd></div>
              <div><dt>(∞,n)-иерархия</dt><dd>(∞,∞)-канон; (∞,1), 2-Diakrisis через τ-усечения</dd></div>
              <div><dt>Флагман-сборка</dt><dd>УГМ (α_uhm, ν = ω·3+1)</dd></div>
              <div><dt>UFH (85.T [Т·L3])</dt><dd>α<sub>uhm</sub> ≃<sub>gauge</sub> ∫α<sub>Д-hybrid</sub><sup>!</sup>(Γ) над 7D (Grothendieck)</dd></div>
              <div><dt>Tradeoff 97.T</dt><dd>! ⟺ PA ⟺ Π<sub>3</sub>-max ⟺ R-S</dd></div>
              <div><dt>AFN-T</dt><dd>пятиосевая абсолютность (55.T · 59.T.1 · 69.T · 84.T · 87.T)</dd></div>
              <div><dt>Meta-classification</dt><dd>theory-level stabilization + universe-ascent (100.T · 101.T · 102.T)</dd></div>
              <div><dt>Maximality</dt><dd>Diakrisis ∈ 𝓛<sub>Cls</sub><sup>⊤</sup> как теорема (103.T · 104.T · 105.T · 106.T)</dd></div>
              <div><dt>MSFS препринт</dt><dd>44 стр · 54 thm · 47 bib · рецензионно-чистое ядро</dd></div>
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
    items: ['Что такое Diakrisis', 'Метод работы', 'Нулевые принципы П-0.0..П-0.7', 'Концепт нулевой границы Z', 'Иерархия уровней (0..5+, 6)'],
  },
  {
    id: 'phenomenon',
    title: 'Феномен различения',
    description: 'Διάκрисίс как акт',
    link: '/01-diakrisis-phenomenon/00-act-not-object',
    items: ['Моменты акта: расщепление, направление, соотнесение', 'Феноменологическое обоснование', 'Параллели с Гегелем, Брауэром, Делёзом', 'Формальные корреспонденции: α_Д-linear / AFA / hybrid'],
  },
  {
    id: 'primitive',
    title: 'Канонический примитив',
    description: '(⟪⟫, 𝖬, α_math, ⊏_•) + 13 аксиом',
    link: '/02-canonical-primitive/00-overview',
    items: ['Четвёрка примитивов, строгая типизация', 'Axi-0..Axi-9 + T-α + T-2f*', 'Производные: ρ, Fix(𝖬), Trace(𝖠), Z₁/Z₂/Z₃', 'Центральные теоремы 10.T1..T5'],
  },
  {
    id: 'architecture',
    title: 'Формальная архитектура',
    description: '2-категория, когезия, gauge, модальность',
    link: '/03-formal-architecture/00-metacategory-structure',
    items: ['ι-вложение End(⟪⟫) ↪ ⟪⟫', 'Когезия Π ⊣ ♭ ⊣ ♯ ⊣ ι', 'Фибрация, gauge, S4-модальность', 'Вычислимость, информация, CHL, SDG', 'Non-classical: α_linear, α_AFA-coalg, α_Д-hybrid'],
  },
  {
    id: 'extractions',
    title: 'Извлечения оснований',
    description: 'ZFC, HoTT, NCG, ∞-Topos, CIC',
    link: '/04-extractions/00-overview',
    items: ['Каждое основание F — α_F ∈ Trace(𝖠)', 'Universal Foundation Theorem (29.T)', 'Reconstruction Theorem (30.T)', 'Classifying Space 𝓜_Fnd (43.T1)'],
  },
  {
    id: 'assemblies',
    title: 'Сборки',
    description: 'УГМ, Стандартная модель, теории сознания',
    link: '/05-assemblies/01-uhm',
    items: ['α_uhm — 7 инвариантов, ν = ω·3+1', 'T-96 (ρ* = φ(Γ)) ↔ Axi-7 (04.T2)', 'UFH (85.T): α_uhm ≃ ∫α_Д-hybrid(Γ) над 7D', 'IIT, GWT, HOT, Orch-OR как точки в 𝓜_Fnd', 'SM через Connes-Chamseddine'],
  },
  {
    id: 'limits',
    title: 'Пределы формализации',
    description: 'AFN-T, maximality proofs, meta-classification — четыре слоя закрытия',
    link: '/06-limits/02-th-final',
    items: [
      'AFN-T (граничная лемма): 𝓛_Abs = ∅',
      '7-й член серии Cantor → Russell → Gödel → Tarski → Lawvere → Ernst',
      'Пятиосевая абсолютность (55.T · 59.T.1 · 69.T · 84.T · 87.T)',
      'Intensional refinement + slice-локальность 𝐈 (98.T + 99.T)',
      'Meta-classification Level 5+ (100.T + 101.T + 102.T)',
      'Maximality proofs: Diakrisis ∈ 𝓛_Cls^⊤ теорема (103.T–106.T)',
      '97.T: tradeoff линейности и генеративности',
    ],
  },
  {
    id: 'msfs-preprint',
    title: 'Препринт MSFS',
    description: 'Самодостаточный рецензионно-чистый формальный корпус',
    link: '/10-reference/04-afn-t-correspondence',
    items: [
      'The Moduli Space of Formal Systems: Classification, Stabilization, and a No-Go Theorem for Absolute Foundations',
      '44 страницы · 54 theorem-like environments · 47 bib-entries',
      'Страты: 𝓛_Fnd, 𝓛_Cls, 𝓛_Cls^⊤, 𝓛_Abs (мнемонические индексы)',
      'AFN-T (α, β, combined), пять осей, три bypass-paths',
      'Meta-classification (100.T–102.T)',
      'Таблица соответствия N.T ↔ MSFS labels',
      'Сборка: bun internal/math-msfs/scripts/build-paper.ts',
    ],
  },
  {
    id: 'methodology',
    title: 'Методология',
    description: 'Рекурсивные аудиты и негативные уроки',
    link: '/07-methodology/02-recursive-audits',
    items: ['Рекурсивные аудиты (многоуровневые)', 'Негативные уроки NL-1..NL-15', 'Мета-аудит AFN-T', 'Навигационная целостность корпуса'],
  },
  {
    id: 'applications',
    title: 'Применения',
    description: 'Путь Б — формализация УГМ в Verum',
    link: '/09-applications/00-path-B-uhm-formalization',
    items: ['223 теоремы УГМ → Verum', 'Критерии успеха К-Б-1..К-Б-5', 'Многосессионный план', 'UFH (85.T): α_uhm ≃ ∫α_Д-hybrid^!(Γ) над 7D', 'Интеграция с Verum-системой'],
  },
];

function OverviewSection() {
  return (
    <section className={styles.docsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Обзор корпуса</Heading>
        <p className={styles.sectionSubtitle}>
          Одиннадцать разделов — от феноменологии акта к формальной классификации оснований и Verum-формализации.
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
      description="Diakrisis — (∞,∞)-мета-структурная теория пространства мат-оснований 𝓜_Fnd. 106 теорем: четырёхуровневое закрытие (extensional / intensional / meta-classification / maximality) с пятиосевой абсолютностью граничной леммы AFN-T и доказанным членством в 𝓛_Cls^⊤. UFH-мост к УГМ через Grothendieck-конструкцию."
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
