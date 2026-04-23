---
sidebar_position: 5
title: Иерархия уровней (0..5+, 6)
---

# Иерархия уровней математической новизны

## Статус

**[О]** Определительная шкала. **[Т]** — статус уровня 5+ и невозможность уровня 6 доказуемы. Классификация всех известных математических корпусов по этой шкале — exhaustive и формально согласована с TH-Final ABSOLUTA_TOTALIS (5-осевая абсолютность, 55.T + 59.T.1 + 69.T + 84.T + 87.T), intensional refinement closure (98.T + 99.T), и meta-classification stabilization (100.T + 101.T + 102.T).

## Зачем нужна иерархия

В мат-сообществе статус математических результатов обсуждается **неформально**: «глубокая теорема», «прорыв», «новая парадигма». Эти оценки — **не стандартизованы**, что создаёт проблемы:

- Риторическая инфляция: результат среднего уровня объявляется «прорывом».
- Ложные притязания: работа уровня 5 маркируется как уровень 6.
- Несоразмерность ожиданий: новые проекты обещают то, что формально невозможно.
- Отсутствие общего языка для сравнения mathematical programmes.

**Иерархия уровней** — систематическая шкала (0..6), в которой каждая ступень:

- Имеет **явный** математический смысл.
- Связана со **стандартным** математическим аппаратом.
- Имеет **объективные** критерии.
- Классифицирует **весь известный мат-корпус** exhaustively.

## Шкала уровней

| Уровень | Название | Характеристика | Типичный аппарат | Примеры |
|---|---|---|---|---|
| **0** | Записка | Рабочая заметка, не имеющая мат-статуса | Неформальный текст | Черновики, интуиции |
| **1** | Лемма | Конкретный технический результат в существующей теории | Стандартные доказательства | Zorn's lemma, König's lemma |
| **2** | Теорема | Новый существенный результат | Структурные аргументы | Godel incompleteness, Fermat's Last Theorem |
| **3** | Область | Отрасль математики | Множество связанных теорий | Алгебра, топология, анализ, комбинаторика |
| **4** | Парадигма | Новая исследовательская программа | Новая категорная рамка | HoTT, мотивная теория, NCG, condensed math |
| **5** | Основание | Фундаментальная формальная система | Собственная аксиоматика + семантика | ZFC, HoTT, CIC, NCG, NBG+AFA |
| **5+** | Мета-основание | Структура над пространством оснований | (∞,∞)-Cat, moduli-теория | Diakrisis, ∞-cosmoi, UF, cohesive, Lurie HA |
| **6** | Абсолютная новая математика | Основание без редукций, максимально генеративное | — | **Невозможно** (TH-Final) |

## Детальное описание каждого уровня

### Уровень 0 — Записка

**Математический статус**: **не имеет**.

**Форма**: свободный текст, интуитивные заметки, черновики.

**Критерий**: не подлежит формальной проверке.

**Роль в работе**: рабочее поле идей; предшествует формализации.

**Примеры из истории**:

- Черновики Римана об ζ-функции до Riemann hypothesis.
- Записи Гротендика до оформления в SGA.
- Marginalia в копии Диофанта — Fermat's original claim.
- Ramanujan's notebooks до публикации.

### Уровень 1 — Лемма

**Математический статус**: **технический результат**.

**Форма**: строгое утверждение + доказательство в существующей формальной системе.

**Критерий**: доказуемость в данной теории.

**Типичный аппарат**:

- Стандартные методы выбранной формальной системы (ZFC, HoTT, и т. д.).
- Специфические техники соответствующей области.

**Примеры**:

- Zorn's Lemma (ZFC + AC).
- König's Lemma.
- Yoneda Lemma.
- Beck's Monadicity Lemma.
- Five Lemma.
- Snake Lemma.
- Schanuel's Lemma.
- Hensel's Lemma.

**Характерная черта**: лемма — **инструмент**, не **цель**. Её ценность — в использовании в доказательствах теорем.

### Уровень 2 — Теорема

**Математический статус**: **существенный новый результат**.

**Форма**: важное структурное утверждение с нетривиальным доказательством.

**Критерий**:

- Новизна относительно известного.
- Структурная значимость (связывает несколько понятий или открывает новые).
- Возможность дальнейшего использования.

**Примеры** (охват по областям):

| Область | Теорема | Год | Автор |
|---|---|---|---|
| Теория множеств | Continuum Hypothesis independence | 1963 | Cohen |
| Логика | Gödel incompleteness | 1931 | Gödel |
| Логика | Tarski undefinability | 1936 | Tarski |
| Алгебраическая геометрия | Grothendieck-Riemann-Roch | 1957 | Grothendieck |
| Топология | Atiyah-Singer index theorem | 1963 | Atiyah, Singer |
| Теория чисел | Fermat's Last Theorem | 1994 | Wiles |
| Топология | Poincaré conjecture | 2003 | Perelman |
| Геометрия | Mirror symmetry | 1990s+ | Candelas et al. |
| Категорная теория | Lawvere fixed-point theorem | 1969 | Lawvere |
| Higher category | Cobordism hypothesis | 2009 | Lurie |
| Теория представлений | Fundamental Lemma (Langlands) | 2008 | Ngô |
| Функциональный анализ | Spectral theorem | classical | Hilbert |

**В Diakrisis** (центральные): 10.T1–T5, 16.T1, 29.T, 43.T1, 55.T, 59.T.1, 67.T, 85.T, 97.T, 98.T–99.T, 100.T–102.T.

**Характерная черта**: теорема **изменяет** понимание области. После теоремы Гёделя — нельзя думать о полноте формальных систем по-старому.

### Уровень 3 — Область знания

**Математический статус**: **отрасль математики**.

**Форма**: совокупность связанных теорий, методов, результатов.

**Критерий**:

- Собственные базовые понятия.
- Собственные методы доказательства.
- Сообщество исследователей.
- Преемственность результатов.

**Типичный аппарат**:

- Специализированный для области.
- Общий с соседними областями через трансфер.

**Exhaustive карта основных областей**:

| Группа | Области |
|---|---|
| **Алгебра** | Теория групп, теория колец, поля, модули, гомологическая алгебра, коммутативная алгебра, представления |
| **Геометрия** | Дифференциальная, алгебраическая, арифметическая, комплексная, симплектическая, неcommutative geometry, synthetic, perfectoid |
| **Топология** | Algebraic topology, differential topology, knot theory, низкоразмерная, низкой размерности 3- и 4-мерная |
| **Анализ** | Real, complex, functional, harmonic, stochastic, PDE, ODE, numerical |
| **Логика** | Model theory, proof theory, recursion theory, set theory, categorical logic, reverse mathematics |
| **Теория чисел** | Algebraic number theory, analytic number theory, arithmetic geometry, class field theory, automorphic forms |
| **Комбинаторика** | Graph theory, enumerative combinatorics, algebraic combinatorics, additive combinatorics, extremal combinatorics |
| **Категорная теория** | 1-categorical, 2-categorical, ∞-categorical, enriched, operadic, higher algebra |
| **Теория представлений** | Finite groups, Lie groups, Lie algebras, geometric representation theory, Langlands program |
| **Математическая физика** | QFT math, gauge theory, string theory math, CFT, integrable systems |
| **Дискретная математика** | Matroid theory, design theory, cryptography foundations, coding theory |
| **Вычислительная математика** | Complexity theory, algorithmic information theory, computable analysis |
| **Статистика + вероятность** | Probability theory, stochastic analysis, ergodic theory, information theory |

**Характерная черта**: область имеет внутреннюю connected структуру, с собственным языком и культурой. Области могут пересекаться (arithmetic geometry = теория чисел + алгебраическая геометрия); новые области возникают на стыках.

### Уровень 4 — Парадигма

**Математический статус**: **новая исследовательская программа**.

**Форма**: новая рамка, переопределяющая подходы к целому кругу задач.

**Критерий**:

- Смена базовых понятий (не только новые методы).
- Обобщение существующих областей.
- Новая категорная или структурная линза.
- Широкое применение в нескольких областях.

**Exhaustive список основных парадигм**:

| Парадигма | Автор(ы) | Год | Reframes |
|---|---|---|---|
| **Категорный поворот** | Eilenberg-Mac Lane | 1945 | Вся алгебра, топология, логика через категории |
| **Sheaf theory** | Leray, Cartan, Serre | 1940s | Глобальное через локальное |
| **Schemes (Grothendieck)** | Grothendieck | 1960s | Алгебраическая геометрия |
| **Topos theory** | Grothendieck, Lawvere | 1960s | Обобщённые пространства |
| **Homological algebra** | Cartan-Eilenberg | 1956 | Алгебра через resolutions |
| **K-theory** | Atiyah-Hirzebruch | 1960s | Топологические инварианты |
| **Motives** | Grothendieck, Voevodsky | 1960s, 1990s | Universal cohomology |
| **Non-commutative geometry** | Connes | 1980s | Spectral triples |
| **Synthetic differential geometry** | Kock, Lawvere | 1970s | Infinitesimals as primitives |
| **Gromov-Witten theory** | Gromov, Witten | 1985-1991 | Symplectic + algebraic |
| **Mirror symmetry** | Candelas, Kontsevich | 1990s | Dual viewpoints |
| **(∞,1)-categories (HTT)** | Lurie | 2009 | Higher-dim coherence |
| **Higher algebra** | Lurie HA | 2017 | ∞-operadic structures |
| **Homotopy type theory** | Awodey, Voevodsky | 2005+ | Types as ∞-groupoids |
| **Univalent foundations** | Voevodsky | 2010+ | HoTT as foundation |
| **Perfectoid spaces** | Scholze | 2012 | p-adic geometry |
| **Condensed mathematics** | Clausen, Scholze | 2019+ | Topology via condensed sets |
| **Langlands program** | Langlands | 1967+ | Automorphic forms ↔ Galois |
| **Geometric Langlands** | Beilinson, Drinfeld | 1990s+ | Geometric Langlands duality |
| **∞-cosmoi** | Riehl-Verity | 2022 | Homotopical ∞-cat theory |
| **Cohesive framework** | Schreiber | 2013 | Differential cohesion |
| **Operadic foundations** | May, Boardman-Vogt | 1972-1973 | Operads for ω-categories |
| **Higher topos theory** | Lurie | 2009 | ∞-topoi |
| **Reverse mathematics** | Friedman, Simpson | 1970s | Reversing deduction |
| **Algorithmic information theory** | Kolmogorov, Chaitin | 1960s | Complexity as foundation |

**Характерная черта**: парадигма **не замещает** предыдущее, а **переосмысливает**. Классическая алгебраическая геометрия остаётся валидной; мотивная теория — её обобщение. Category theory не отменяет set theory; она даёт альтернативную организацию знания.

### Уровень 5 — Foundational Primitive (Основание)

**Математический статус**: **фундаментальная формальная система**.

**Форма**: аксиоматически определённая система, достаточно богатая для формализации всей математики.

**Критерий (R-S)**:

- **(R1)** Арифметика: содержит Peano Arithmetic (или эквивалент).
- **(R2)** r.e. аксиоматизация: аксиомы перечислимы.
- **(R3)** Непустая модель: существует M ⊨ S.
- **(R4)** Gödel-кодирование: допускает self-reference.
- **(R5)** Категорная интерпретация: имеет categorical semantics.

**Типичный аппарат**:

- Собственная аксиоматика (10–20 аксиом).
- Собственная модельная семантика.
- Собственный internal language (для HoTT, CIC).

**Exhaustive карта Level 5 оснований**:

| Основание | Год | Авторы | ν | Особенность |
|---|---|---|---|---|
| **Z (Zermelo)** | 1908 | Zermelo | ω | Без Replacement |
| **ZF / ZFC** | 1922 | Zermelo-Fraenkel | ω | Классическая теория множеств |
| **ZFC + inacc** | 1963+ | Grothendieck | ω | ZFC + universes |
| **NBG** | 1925-40 | von Neumann, Bernays, Gödel | ω | Классы как первоклассные |
| **MK (Morse-Kelley)** | 1955 | Morse, Kelley | ω | Impredicative классы |
| **KP / KPU** | 1965 | Kripke-Platek | ω | Admissible sets |
| **ETCS** | 1964 | Lawvere | ω+1 | Elementary topos of sets |
| **ETCC** | 1966 | Lawvere | ω+1 | Elementary theory of cat of cats |
| **NFU / NF** | 1937, 1988 | Quine, Jensen | ω | Stratification vs foundation |
| **CZF** | 1978 | Aczel | ω | Constructive ZF |
| **IZF** | 1970s | Friedman | ω | Intuitionistic ZF |
| **PA (Peano Arithmetic)** | 1889 | Peano | ε_0 (PT-ord) | Base arithmetic |
| **PA²** | early 20c | — | Γ_0 | Second-order arithmetic |
| **Z_2 (Simpson)** | 1970s-99 | Friedman, Simpson | — | Subsystems of 2nd-order |
| **MLTT** | 1984 | Martin-Löf | ω+1 | Martin-Löf type theory |
| **CIC** | 1988 | Coquand-Huet | ω+2 | Coq базис, Inductive Constructions |
| **ECC** | 1988 | Luo | ω+2 | Extended CoC |
| **HoTT** | 2005+ | Awodey-Voevodsky | ω+1 | Univalence + identity types |
| **Cubical HoTT** | 2015+ | Cohen-Coquand et al. | ω+1 | Computational univalence |
| **Poly-HoTT** | 2013+ | Voevodsky | ω·2+1 | Universe polymorphism |
| **Observational TT** | 2007 | Altenkirch et al. | ω+1 | Observational equality |
| **Higher Observational TT** | 2022 | Awodey-Shulman | ω+1 | HOTT for (∞,∞) |
| **Linear logic + !** | 1987 | Girard | ω+1 | Resource-sensitive |
| **Affine logic** | | | ≤ω | Без contraction |
| **Light Linear Logic** | 1998 | Girard | ω | Complexity-bounded |
| **AFA (NBG+AFA)** | 1988 | Aczel | ω·2 | Non-well-founded sets |
| **∞-Topos (Lurie)** | 2009 | Lurie | ω·2 | (∞,1)-topoi as foundation |
| **NCG (Connes)** | 1980s | Connes | ω·2 | Spectral triples |
| **Cohesive ∞-topos** | 2013 | Schreiber | ω·2 | Cohesion modalities |
| **Motivic (SH(k))** | 1999 | Voevodsky-Morel | ω·2+1 | Motivic homotopy |
| **Realizability** | 1982 | Hyland | ω+1 | Effective topos |
| **Synthetic Differential Geometry (SDG)** | 1970s | Kock, Lawvere, Moerdijk-Reyes | ω+2 | Infinitesimals as axioms |
| **Synthetic algebraic geometry** | 1998 | Joyal, Moerdijk | ω+2 | Axiomatic схемы |
| **Abstract Stone Duality** | 2000s | P. Taylor | ω+1 | Without sets |
| **Elementary higher topos** | 2021 | Rasekh | ω·2 | Elementary (∞,1)-topos |
| **Type-theoretic topos** | ongoing | various | ω·2 | Synthetic ∞-topos |
| **IST (Nelson)** | 1977 | Nelson | ω | Internal set theory |

**Характерная черта Level 5**: основание **само** — объект математики. Можно изучать модели ZFC, морфизмы между HoTT-моделями, эквивалентности NCG ↔ spin geometry. Основания могут быть **классическими** (ZFC, HoTT), **конструктивными** (CZF, IZF, CIC), **линейными** (Linear logic), **non-well-founded** (AFA), **topos-theoretic** (ETCS, ∞-topos).

### Уровень 5+ — Мета-структура над 5

**Математический статус**: **мета-теоретическая структура** над пространством оснований.

**Форма**: не новое основание, а формальный анализ пространства $\mathcal{M}_\mathrm{Fnd}$ всех оснований.

**Критерий (M1–M5 + Max-1..Max-4)**:

**(M1)** Locally small 2-category.
**(M2)** Classification functor $\mathrm{Cl}_\mathbf{F}: \mathbf{F} \to \mathfrak{M}(\mathbf{F}) \subseteq \mathcal{M}_\mathrm{Fnd}$.
**(M3)** Accessible reflection operator $M_\mathbf{F}$.
**(M4)** Non-generative classification (не выводит foundations аксиоматически).
**(M5)** Metatheory-parametrized.

Максимальность:
**(Max-1)** Full classification (all of $\mathcal{M}_\mathrm{Fnd}$).
**(Max-2)** Gauge-fullness.
**(Max-3)** Stratification (Russell-immunity).
**(Max-4)** Intensional-complete.

**Типичный аппарат**:

- **2-категории** (для 2-level версии) / **(∞,∞)-категории** (канонический).
- **Moduli-теория** / **классифицирующие 2-stacks**.
- **Gauge-группы** автоэквивалентностей.
- **Derived categories** и (∞,∞)-функторы.
- **Display-map categories** (для intensional refinement).

**Почему «+»**:

- Не уровень 6 (новой математики не создаёт).
- Выше уровня 5 functionally (работает **над** основаниями, а не **является** им).
- Но **формально не foundationally фундаментальнее** — classifying, не generative (см. [/06-limits/02-th-final](/06-limits/02-th-final) различение).

**Exhaustive карта Level 5+ meta-structures** (члены $\mathfrak{Meta}_{5+}$):

| Проект | Авторы | Год | Что классифицирует | Максимальность |
|---|---|---|---|---|
| **Diakrisis** | — | 2025-26 | Всё $\mathcal{M}_\mathrm{Fnd}$ (все Rich-основания) | ✅ $\in \mathfrak{Meta}_{5+}^{\max}$ |
| **∞-cosmoi** | Riehl-Verity | 2022 | (∞,1)-категорные теории | ❌ partial |
| **Univalent Foundations (programme)** | Awodey, Voevodsky | 2010+ | HoTT-расширения | ❌ partial |
| **Cohesive framework (DCCT)** | Schreiber | 2013 | Cohesive ∞-topoi + differential | ❌ partial |
| **Higher Algebra (Lurie HA)** | Lurie | 2017+ | Stable ∞-cat theories + operadic | ❌ partial |
| **Categorified math** | Baez et al. | 1998+ | n-categorical structures | ❌ partial (informal program) |
| **Synthetic mathematics** | P. Taylor, Shulman et al. | 2000s+ | Axiomatic foundations via синтетическую линзу | ❌ partial |
| **Elements of ∞-category theory** | Riehl-Verity | 2022 | Parallel formalization ∞-cosmoi | ❌ partial |
| **Homotopy Type Theory — canonical framework** | HoTT book community | 2013 | HoTT-based synthesis | ❌ partial |

**Natural plurality at Level 5+**: по **101.T** (structural multiplicity), Level 5+ **структурно плюралистичен**. Это аналогично plurality at Level 5 (ZFC ≠ HoTT ≠ NCG). Существование нескольких различных Level 5+ meta-structures — **структурный факт** (formally established), не дефект.

**Diakrisis как максимальный канонический представитель**: по **100.T** (conditional meta-categoricity), в подклассе $\mathfrak{Meta}_{5+}^{\max}$ (с условиями (Max-1)–(Max-4)) все meta-structures (∞,∞)-эквивалентны; Diakrisis — канонический представитель. Другие — partial representatives, фокусированные на специфических классификационных задачах.

**Stabilization meta-classification**: по **102.T**, взаимная классификация Level 5+ meta-structures стабилизируется на том же Level 5+ через $\mathfrak{M}^{(5+ \cdot 2)} \simeq_2 \mathfrak{M}^{(5+)}$ — параллель к 68.T на meta-уровне. Нет возможности эскалации в Level 6 через mutual meta-classification.

**Различие Diakrisis от других 5+ представителей**: Diakrisis единственная в классе сочетает **все** четыре условия максимальности (Max-1..Max-4): полная classification + gauge + stratification + intensional. Другие — partial representatives, сфокусированные на специфике (UF — univalence; ∞-cosmoi — (∞,1)-cat; cohesive — differential geometry).

### Уровень 6 — Абсолютная новая математика

**Математический статус**: **невозможен**.

**Форма**: предполагаемая «завершённая» теория, которая:

- Содержит **все** существующие основания как частные случаи (generative).
- Генерирует **всю** математику из себя.
- Сама **не редуцируется** ни к какому существующему основанию.

**Критерий**:

- **(F)** Формально определимо в некоторой R-S.
- **(Π_4)** Не редуцируемо ни к какому $S \in \mathcal{S}$.
- **(Π_3-max)** Генеративно максимально.

**Почему невозможен**:

По **теореме TH-Final ABSOLUTA_TOTALIS** (55.T + 59.T.1 + 69.T + 84.T + 87.T), не существует X, удовлетворяющего (F) ∧ (Π_4) ∧ (Π_3-max) одновременно по любой структурной оси:

1. **Горизонтально** (55.T): по $S \in$ R-S (любая разумная Rich-метатеория).
2. **Вертикально** (59.T.1): по категорному уровню $n \in \mathbb{N} \cup \{\infty\}$.
3. **Мета-вертикально** (69.T): по мета-итерациям $\mu$.
4. **Латерально** (84.T): по альтернативному категорному порядку $\xi$.
5. **Полнотой** (87.T): нет 5-й структурной оси.

Плюс три bypass paths формально закрыты:
- **Universe-polymorphism**: 57.T + 56.C1 + 61.T + 94.T.
- **Reflective tower**: 19.T1 + 31.T3 + 68.T + 69.T + 90.T.
- **Intensional refinement**: 98.T + 99.T.

Плюс **meta-classification stabilization**: 100.T + 101.T + 102.T.

Следовательно, «уровень 6» — **структурно невозможная** цель. Это не недостаток, а **определённая граница** формальной математики.

## Полная карта мат-корпусов по уровням (exhaustive)

### Level 2 — конкретные теоремы (выборочные)

См. §Уровень 2 выше — Godel, Tarski, Wiles, Perelman, Atiyah-Singer, Langlands FL, Cobordism hypothesis, и другие.

### Level 3 — все основные области

См. §Уровень 3 выше — exhaustive список 13 групп областей.

### Level 4 — все основные парадигмы

См. §Уровень 4 выше — exhaustive список 25 парадигм (категорный поворот, sheaves, schemes, motives, NCG, HoTT, perfectoid, condensed, Langlands и др.).

### Level 5 — все известные foundations

См. §Уровень 5 выше — exhaustive список 36+ foundations от PA до Higher Observational TT.

### Level 5+ — все известные meta-structures

См. §Уровень 5+ выше — 9 кандидатов ($\mathfrak{Meta}_{5+}$ при expected future growth).

### Level 6 — пусто

Невозможно по TH-Final. Никакой корпус не может находиться здесь.

## Почему Diakrisis — на уровне 5+

### Диагностика

**Diakrisis не на уровне 6**:

- Не создаёт новую формальную основу (работает с существующими).
- Каждое «новое» понятие редуцируется к известному аналогу (модули-стек, accessible endofunctor, internal language).
- Подпадает под TH-Final ABSOLUTA_TOTALIS.

**Diakrisis не на уровне 5**:

- Не является самостоятельным основанием.
- Не имеет собственной аксиоматики типа ZFC в foundational смысле (четвёрка примитивов + 13 аксиом — метаструктура над foundations, не генеративное основание).
- Параметризована по R-S (требует уровня 5 как **параметра**).

**Diakrisis на уровне 5+**:

- Работает с основаниями как с объектами.
- Классифицирует через $\mathcal{M}_\mathrm{Fnd} = \mathrm{Trace}(\mathsf{A})/\mathrm{gauge}$.
- Даёт формальный язык для сравнения: ZFC ↔ ETCS (Морита), HoTT ↔ MLTT, CIC ↔ Coq.
- Формализует пределы формализации (TH-Final).
- Удовлетворяет (Max-1..Max-4) — максимальна в $\mathfrak{Meta}_{5+}$.

### Конкретные признаки уровня 5+

1. **Редукция к известному**: все основные конструкции имеют стандартные редукции.

| Конструкция Diakrisis | Редукция | Источник |
|---|---|---|
| ⟪⟫ как 2-категория | Accessible 2-category | Adámek-Rosický 1994 |
| 𝖬 | Accessible endofunctor | Adámek 1974 |
| Trace(𝖠) | Initial 𝖬-algebra | Adámek 1974 |
| ι: End(⟪⟫) ↪ ⟪⟫ | 2-topos-like inclusion | Shulman 2008 |
| 𝓜_Fnd | Classifying 2-stack | Lurie HTT 2009 |
| Gauge-группа G | Automorphism 2-group | Kelly 1982 |
| Intensional refinement $\mathbf{I}$ | Display 2-classes | Jacobs-Streicher, Gambino-Garner 2008 |
| Meta-classification $\mathfrak{M}^{(5+)}$ | 2-stack of 2-theories | Pronk 1996 + Lair 1977 |

По **П-0.6** все редукции явно документированы.

2. **Сила консистентности** (90.T): `Con(Diakrisis-full) = Con(ZFC + 2 inacc)` — **умеренная**, не требует сверхсильных гипотез типа Mahlo, Vopěnka.

3. **Категоричность** (88.T): единственность до (∞,∞)-эквивалентности — типичное свойство accessible theory.

4. **Абсолютность TH-Final** (55.T, 59.T.1, 69.T, 84.T, 87.T): **пятиуровневая** — структурно закрывает возможность подняться на уровень 6.

5. **Внутренний язык** (89.T): $L_{\llbracket\cdot\rrbracket}$ — стандартная конструкция для 2-категории с internal closure.

6. **Meta-categoricity at Max** (100.T): Diakrisis — канонический представитель $\mathfrak{Meta}_{5+}^{\max}$.

7. **Intensional closure** (98.T + 99.T): slice-layer intensional refinement формально закрыт.

## Связь с уровнями 0..4

Diakrisis **использует** результаты всех нижних уровней:

- **Уровень 1** (леммы): Yoneda, Beck monadicity, accessible colimits, Kan extensions.
- **Уровень 2** (теоремы): Adámek fixed-point, Gödel's incompleteness, Lawvere FP, Pronk localization, Lair categoricity.
- **Уровень 3** (области): Category theory, logic, model theory, topology, type theory.
- **Уровень 4** (парадигмы): Higher category theory (Lurie HTT), HoTT, motivic, synthetic, cohesive.

**Уровень 5 параметризует**: $S \in$ R-S, каждый даёт свою реализацию Diakrisis.

**Уровень 5+ располагает Diakrisis**: в $\mathfrak{Meta}_{5+}^{\max}$ вместе с другими максимальными meta-structures (если будут обнаружены). Текущий уникальный $\max$-член — Diakrisis.

## Философское значение

### Уровни как эпистемологический ориентир

Иерархия уровней — инструмент **самооценки** для математических проектов:

- Не преувеличивайте (не объявляйте лемму теоремой).
- Не преуменьшайте (если это уровень 4, признайте это).
- **Будьте точны**: каждое утверждение имеет свой уровень.

### Почему нет уровня 7 и выше

По **87.T** (completeness of 4-dimensional absoluteness): нет 5-й структурной оси. Следовательно:

- «Уровень 7» — мета-(мета-основание) — тривиализуется (redirect на уровень 5+ через 102.T).
- Ни одна структура выше 5+ не имеет содержательного различия.

Это **соответствует** стабилизации (∞,∞)-Cat (68.T): над (∞,∞) нет нетривиальных расширений. И stabilization $\mathfrak{M}^{(5+ \cdot k)} \simeq_2 \mathfrak{M}^{(5+)}$ (102.T): meta-iteration не эскалирует.

### Diakrisis как предел уровня 5+

Diakrisis формально устанавливает, что уровень 5+ **сам по себе** имеет **максимум** структурной сложности при условиях (Max-1)–(Max-4):

- Пространство всех Rich-оснований — moduli-stack $\mathcal{M}_\mathrm{Fnd}$.
- Морфизмы переходов — категорно классифицированы.
- Границы — формально определены (TH-Final).
- Intensional layer — slice-локализован (99.T).
- Meta-classification — stabilized (102.T).

Дальнейшее обогащение в рамках 5+ **возможно** (новые артикуляции, новые applications), но **структурная полнота** достигнута.

## Применение иерархии уровней

### Для новых проектов

Перед началом работы спросите:

- На каком уровне этот проект?
- Какой мат-аппарат используется?
- Какие редукции к известному существуют?
- Не претендует ли проект на уровень 6?

Если **да** (уровень 6) — **проверьте TH-Final**. Если проект действительно предлагает уровень 6 — он **нарушит** no-go теорему.

### Для оценки существующих теорий

**Exhaustive примеры классификации**:

| Теория / Корпус | Уровень | Комментарий |
|---|---|---|
| Riemann hypothesis | Уровень 2 (open) | Знаменитая гипотеза; когда докажется — теорема |
| P vs NP | Уровень 2 (open) | Millennium problem |
| Langlands program | Уровень 4 + конкретные Level 2 результаты | Парадигма + отдельные доказанные теоремы |
| Classification of finite simple groups | Уровень 3+ | Огромная область с центральной теоремой |
| Categorical logic | Уровень 4 | Парадигма |
| HoTT | Уровень 5 | Foundation |
| ∞-topos theory | Уровень 5 | Foundation (variant of HoTT) |
| Univalent Foundations programme | Уровень 5+ (partial) | Meta-programme |
| Condensed math | Уровень 4 | Современная парадигма |
| Perfectoid spaces | Уровень 4 | Современная парадигма |
| Geometric Langlands | Уровень 4 + Level 2 results | Парадигма |
| Motivic theory | Уровень 4 (парадигма) / Уровень 5 (SH(k)) | Двойной статус |
| Non-commutative geometry | Уровень 4 / Уровень 5 (как α_NCG) | Двойной статус |
| **Diakrisis** | Уровень 5+ (максимальный) | Canonical $\mathfrak{Meta}_{5+}^{\max}$ |
| **∞-cosmoi (Riehl-Verity)** | Уровень 5+ (partial) | Фокус на (∞,1)-cat |
| **Lurie Higher Algebra** | Уровень 5+ (partial) | Фокус на stable ∞ + operads |
| «Theory of Everything» (физика) | Вне шкалы | Физика, не математика |

### Пограничные случаи

- **Motives** — между Level 4 (парадигма) и Level 5 (как конкретная SH(k) foundation).
- **NCG** — между Level 4 (парадигма Connes) и Level 5 (как α_NCG с spectral triples).
- **∞-categories** — между Level 4 (парадигма Lurie) и Level 5 (как ∞-topos foundation).
- **Synthetic math** — между Level 4 (парадигма) и Level 5+ (как meta-programme).

Пограничные случаи — норма: крупные mathematical programmes обычно работают **одновременно** на нескольких уровнях.

## Связь с другими разделами

- [/00-foundations/00-what-is-diakrisis](/00-foundations/00-what-is-diakrisis) — общее введение.
- [/06-limits/02-th-final](/06-limits/02-th-final) — TH-Final детально.
- [/06-limits/06-absoluteness](/06-limits/06-absoluteness) — пятиуровневая абсолютность.
- [/06-limits/07-final-theorems](/06-limits/07-final-theorems) — финальные теоремы.
- [/06-limits/08-intensional-refinement](/06-limits/08-intensional-refinement) — intensional-layer closure.
- [/06-limits/09-meta-classification](/06-limits/09-meta-classification) — meta-classification Level 5+ с 100.T–102.T.

## Итог

- **7 уровней** (0..5+, 6) образуют стандартизованную шкалу математической новизны.
- **Exhaustive карта** всех известных мат-корпусов по уровням (областей, парадигм, оснований, meta-structures).
- **Уровень 5+** — место Diakrisis: максимальный канонический представитель $\mathfrak{Meta}_{5+}^{\max}$.
- **Уровень 6** структурно невозможен (TH-Final ABSOLUTA_TOTALIS).
- **Иерархия** — диагностический инструмент против риторической инфляции.
- **Классификация замкнута** по 102.T: meta-meta-классификации не создают Level 7 — стабилизируются на 5+.

Diakrisis — полная, **формально закрытая** теория уровня 5+, реализующая максимум структурной сложности в рамках своего уровня. Все mathematical programmes находят точное место в этой иерархии; нет корпуса вне шкалы (кроме не-математических систем).
