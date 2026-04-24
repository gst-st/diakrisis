import type {ReactNode, JSX} from 'react';
import {useState, useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * Минималистичная визуализация Diakrisis.
 *
 * Композиция: треугольник трёх характеризаций нулевой границы Z.
 *  - Центральный символ Δ — акт различения (Διάκρисίс).
 *  - Три орбитальных узла — Z₁ (путь), Z₂ (побег), Z₃ (представимость).
 *  - Связующие дуги — 2-функторы Φ_{ij} (эквивалентность по 16.T1).
 *  - Пульс через «дыхание» breath — живая структура без времени.
 *  - Фоновое свечение с radial gradient.
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

  const rotationSpeed = 1.2;
  const coreR = 38;
  const innerR = 72;
  const triR = 135;
  const boundaryR = 175;

  const breath = 1 + Math.sin(time * 0.35) * 0.02;

  const vertex = (idx: number, r: number) => {
    const angle = ((idx * 120) - 90) * Math.PI / 180;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    };
  };

  const renderTriangleEdges = () => {
    const r = triR * breath;
    const edges: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      const a = vertex(i, r);
      const b = vertex((i + 1) % 3, r);
      const pulse = Math.sin(time * 0.55 + i * 0.9);
      const opacity = 0.28 + pulse * 0.12;
      edges.push(
        <line key={`edge-${i}`}
          x1={a.x} y1={a.y} x2={b.x} y2={b.y}
          stroke="var(--ifm-color-primary)"
          strokeWidth={1.5}
          opacity={opacity}
        />,
      );
    }
    return edges;
  };

  const renderRays = () => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      const pulse = Math.sin(time * 0.6 + i * (Math.PI * 2 / 3));
      const len = (triR + pulse * 6) * breath;
      const end = vertex(i, len);
      const innerEnd = vertex(i, coreR);
      elements.push(
        <line key={`ray-${i}`}
          x1={innerEnd.x} y1={innerEnd.y}
          x2={end.x} y2={end.y}
          stroke="var(--ifm-color-primary)"
          strokeWidth={1.5}
          strokeLinecap="round"
          opacity={0.4 + pulse * 0.15}
        />,
      );
      elements.push(
        <circle key={`node-${i}`}
          cx={end.x} cy={end.y}
          r={4 * breath}
          fill="var(--ifm-color-primary)"
          opacity={0.55 + pulse * 0.2}
        />,
      );
    }
    return elements;
  };

  const renderLabels = () => {
    const labels = ['Z₁', 'Z₂', 'Z₃'];
    const r = triR * breath + 26;
    return labels.map((label, i) => {
      const {x, y} = vertex(i, r);
      return (
        <text key={`label-${i}`}
          x={x} y={y}
          className={styles.vertexLabel}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {label}
        </text>
      );
    });
  };

  const renderGaugeArcs = () => {
    const arcs: JSX.Element[] = [];
    const r = innerR * breath;
    for (let i = 0; i < 3; i++) {
      const a = vertex(i, r);
      const b = vertex((i + 1) % 3, r);
      const midA = ((i * 120 + 60) - 90) * Math.PI / 180;
      const ctrlR = r * 1.22;
      const ctrlX = cx + Math.cos(midA) * ctrlR;
      const ctrlY = cy + Math.sin(midA) * ctrlR;
      const pulse = Math.sin(time * 0.5 + i * 1.1);
      arcs.push(
        <path key={`arc-${i}`}
          d={`M ${a.x} ${a.y} Q ${ctrlX} ${ctrlY} ${b.x} ${b.y}`}
          fill="none"
          stroke="var(--ifm-color-primary)"
          strokeWidth={1}
          opacity={0.18 + pulse * 0.1}
        />,
      );
    }
    return arcs;
  };

  const renderMiniTriangles = () => {
    const elements: JSX.Element[] = [];
    const mainR = triR * breath;
    const miniR = 9;
    for (let v = 0; v < 3; v++) {
      const vp = vertex(v, mainR);
      for (let i = 0; i < 3; i++) {
        const a1 = ((i * 120) - 90) * Math.PI / 180;
        const a2 = (((i + 1) * 120) - 90) * Math.PI / 180;
        const x1 = vp.x + Math.cos(a1) * miniR;
        const y1 = vp.y + Math.sin(a1) * miniR;
        const x2 = vp.x + Math.cos(a2) * miniR;
        const y2 = vp.y + Math.sin(a2) * miniR;
        const pulse = Math.sin(time * 0.5 + v * 0.9 + i * 0.3);
        elements.push(
          <line key={`mini-${v}-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="var(--ifm-color-primary)"
            strokeWidth={0.5}
            opacity={0.14 + pulse * 0.08}
          />,
        );
      }
    }
    return elements;
  };

  return (
    <svg viewBox="0 0 500 500" className={styles.orbitalSvg}>
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--ifm-color-primary)" stopOpacity="0.45" />
          <stop offset="50%" stopColor="var(--ifm-color-primary)" stopOpacity="0.13" />
          <stop offset="100%" stopColor="var(--ifm-color-primary)" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="coreGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={cx} cy={cy} r={boundaryR * breath} fill="url(#bgGrad)" />

      <circle cx={cx} cy={cy} r={boundaryR * breath}
        fill="none"
        stroke="var(--ifm-color-primary)"
        strokeWidth={1}
        opacity={0.18}
      />

      <g style={{
        transform: `rotate(${time * rotationSpeed}deg)`,
        transformOrigin: `${cx}px ${cy}px`,
      }}>
        <circle cx={cx} cy={cy} r={innerR * breath}
          fill="none"
          stroke="var(--ifm-color-primary)"
          strokeWidth={0.5}
          strokeDasharray="2 4"
          opacity={0.22}
        />
        <circle cx={cx} cy={cy} r={triR * breath}
          fill="none"
          stroke="var(--ifm-color-primary)"
          strokeWidth={0.5}
          opacity={0.1}
        />
        <g filter="url(#glow)">{renderGaugeArcs()}</g>
        <g filter="url(#glow)">{renderTriangleEdges()}</g>
        {renderMiniTriangles()}
        <g filter="url(#glow)">{renderRays()}</g>
        {renderLabels()}
      </g>

      {(() => {
        const wx = Math.sin(time * 0.31) * 2;
        const wy = Math.sin(time * 0.23) * 2;
        const x = cx + wx;
        const y = cy + wy;
        const r = coreR * breath;
        return (
          <g className={styles.coreGroup}>
            <circle cx={x} cy={y} r={r * 1.3}
              fill="var(--ifm-color-primary)"
              opacity={0.12}
              filter="url(#coreGlow)"
            />
            <circle cx={x} cy={y} r={r}
              fill="var(--ifm-color-primary)"
              className={styles.coreCircle}
            />
            <text x={x} y={y}
              className={styles.coreSymbol}
              textAnchor="middle"
              dominantBaseline="central"
            >
              Δ
            </text>
          </g>
        );
      })()}
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
            (∞,∞)-мета-структурная теория пространства математических оснований <code>𝓜<sub>Fnd</sub></code>
          </p>
          <p className={styles.heroDescription}>
            Канонический примитив <code>(⟪⟫, 𝖬, α<sub>math</sub>, ⊏<sub>•</sub>)</code> с 13 аксиомами в <strong>(∞,∞)-формулировке</strong>. Каждое Rich-основание <code>F</code> (ZFC, HoTT, CIC, NCG, linear, AFA, cohesive, motivic, realizability, УГМ, ...) — точка <code>α<sub>F</sub></code> классифицирующего 2-стека{' '}
            <code>𝓜<sub>Fnd</sub> = Trace(𝖠)/gauge</code>. Корпус: <strong>106 теорем</strong> в номерной системе с классификацией строгости L1/L2/L3. Теория теоретически <strong>закрыта</strong> на четырёх слоях: <strong>extensional</strong> (5-осевая абсолютность AFN-T), <strong>intensional</strong> (slice-локальность{' '}
            <code>𝐈</code>{' '}через топос 𝐄𝐟𝐟 Хайланда — 98.T + 99.T), <strong>meta-classification</strong> (theory-level stabilization с universe-ascent — 100.T + 101.T + 102.T), <strong>maximality</strong> (Diakrisis ∈ <code>𝓛<sub>Cls</sub><sup>⊤</sup></code> как теорема — 103.T + 104.T + 105.T + 106.T). Самодостаточный препринт{' '}
            <strong>MSFS</strong> (44 стр.) выносит структурное ядро в стандартной категорной нотации; AFN-T — граничная лемма, унифицирующая no-go серию Cantor → Russell → Gödel → Tarski → Lawvere → Ernst. <strong>UFH (85.T)</strong>:{' '}
            <code>α<sub>uhm</sub> ≃<sub>gauge</sub> ∫<sub>Γ</sub> α<sub>Д-hybrid</sub><sup>!</sup>(Γ)</code> над <code>7D-quantum</code>.
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
