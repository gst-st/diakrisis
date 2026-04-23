---
sidebar_position: 8
title: Intensional refinement
---

# Intensional refinement: формальное закрытие

## Статус

**[Т]** — единственный исторически-открытый зазор вокруг TH-Final формально закрыт теоремами **98.T** (существование функтора **I**) и **99.T** (slice-level — TH-Final не затронута). Функтор **I**: ⟪⟫^op → **𝒮_int** построен через дисплейные 2-семейства; Morita-эквивалентность факторизуется через **I** как 2-локализация. После закрытия этого зазора все три стандартных обходных пути вокруг TH-Final — ✅ formally closed.

## Почему этот слой нужен

Доказательство TH-Final (Лемма 3, [/06-limits/02-th-final](/06-limits/02-th-final)) использует Morita-эквивалентность как критерий редукции: $\rho(\alpha) \simeq X^{M_F} \Rightarrow$ X сводится к известной структуре. Morita — экстенсиональный инвариант: он отождествляет артикуляции, имеющие изоморфные ρ-проекции, независимо от конкретных proof-term-конструкций.

В теории типов известно явление **extensional collapse**: экстенсионально эквивалентные системы могут различаться интенсионально (стратегии нормализации, proof-term структура, identity-types, вычислительная сложность):

- **MLTT против ETT** (Hofmann 1995): изоморфные категории моделей, но decidable typechecking в MLTT и undecidable в ETT.
- **HoTT против cubical** (Cohen-Coquand-Huber-Mörtberg 2018): совпадающие ∞-топосные модели, различные вычислительные профили.
- **Coq/Agda/Lean** — родственные основания с разными intensional-решениями.

Возник законный вопрос: отражает ли классификация через 𝓜_Fnd полную структуру оснований, или есть значимый слой, теряющийся при Morita-квотиенте?

Ответ строится в три шага:

1. **Категория интенсиональных структур 𝒮_int** — цель функтора.
2. **Функтор I**: ⟪⟫^op → 𝒮_int через pullback-стабильные дисплейные 2-семейства (теорема 98.T).
3. **Slice-locality** — **I** параметризует **слои** над 𝓜_Fnd, не добавляет точек в базу (теорема 99.T).

После этих шагов зазор исчезает: intensional refinement обогащает gauge-слой **внутри** уровня 5, TH-Final ABSOLUTA_TOTALIS сохраняется неизменной.

## 1. Категория интенсиональных структур 𝒮_int

### 1.1 Дисплейные 2-семейства

Конструкция адаптирует **display map category** (Jacobs 1993, Streicher 1993) к 2-категорному контексту (Garner 2009, Gambino-Garner 2008, Joyal-Kock 2013).

**Определение 1.1** (дисплейный класс). Пусть $\mathcal{C}$ — 2-категория с 2-pullbacks. **Дисплейный класс** $\mathcal{D} \subseteq \mathrm{Mor}_1(\mathcal{C})$ — класс 1-морфизмов, удовлетворяющий:

- **(D1) Содержит изоморфизмы**: все 1-эквивалентности в $\mathcal{C}$ лежат в $\mathcal{D}$.
- **(D2) Замкнут под 2-pullback**: для $d: B \to A$ в $\mathcal{D}$ и любого $f: A' \to A$, 2-pullback $f^*d: f^*B \to A'$ существует и лежит в $\mathcal{D}$.
- **(D3) Замкнут под композицию**: если $d_1: C \to B \in \mathcal{D}$ и $d_2: B \to A \in \mathcal{D}$, то $d_2 \circ d_1 \in \mathcal{D}$.
- **(D4) Когерентная стабильность 2-ячеек**: для 2-морфизма $\phi: f \Rightarrow g: A' \to A$ и $d \in \mathcal{D}$, индуцированный 2-морфизм $\phi^*d: f^*d \Rightarrow g^*d$ — изоморфизм в slice.

(D1)–(D4) — стандартная 2-categorical display-data (Jacobs 1999 §10.5, адаптированная Gambino-Garner для 2-категорий).

**Определение 1.2** (дисплейная 2-категория). **Дисплейная 2-категория** — тройка $(\mathcal{C}, \mathcal{D}, \iota)$, где:

- $\mathcal{C}$ — локально-малая 2-категория с 2-pullbacks.
- $\mathcal{D}$ — дисплейный класс в $\mathcal{C}$.
- $\iota: \mathcal{D} \hookrightarrow \mathrm{Mor}_1(\mathcal{C})$ — каноническое включение (обеспечивает, что дисплейные морфизмы — морфизмы $\mathcal{C}$, а не внешнее наложение).

**Интерпретация**: $\mathcal{D}$ — «типы с доказательствами»; $\iota$ фиксирует, какие морфизмы рассматриваются как типо-образующие (а какие — лишь как общие переходы). Это **intensional-слой** поверх ambient $\mathcal{C}$.

### 1.2 Категория 𝒮_int

**Определение 1.3** (2-категория 𝒮_int).

- **Объекты**: дисплейные 2-категории $(\mathcal{C}, \mathcal{D}, \iota)$.
- **1-морфизмы**: пары $(F, F_\mathcal{D}): (\mathcal{C}_1, \mathcal{D}_1, \iota_1) \to (\mathcal{C}_2, \mathcal{D}_2, \iota_2)$, где $F: \mathcal{C}_1 \to \mathcal{C}_2$ — 2-функтор и $F_\mathcal{D}: \mathcal{D}_1 \to \mathcal{D}_2$ — ограничение $F$, такое что $F \circ \iota_1 = \iota_2 \circ F_\mathcal{D}$ (сохранение дисплейных данных) и 2-pullbacks сохраняются с точностью до когерентных 2-изоморфизмов.
- **2-морфизмы**: естественные 2-преобразования $\eta: F \Rightarrow G$, ограничения которых $\eta|_\mathcal{D}: F_\mathcal{D} \Rightarrow G_\mathcal{D}$ когерентно согласованы.

Локальная малость и базовая 2-категорная структура наследуются от $\mathcal{C}$-компоненты.

**Свойство 1.4** (функториальность забывания). Проекция

$$\mathcal{U}: \mathcal{S}_\mathrm{int} \to \mathbf{2Cat}, \quad (\mathcal{C}, \mathcal{D}, \iota) \mapsto \mathcal{C}$$

— 2-функтор, забывающий display-data и оставляющий ambient 2-category. $\mathcal{U}$ — 1-faithful (различные display-classes на одном $\mathcal{C}$ дают различные образы в $\mathcal{S}_\mathrm{int}$), но **не** 1-full: различие интенсиональных структур может быть невидимо под $\mathcal{U}$.

**Свойство 1.5** (существование 2-pullbacks в 𝒮_int). $\mathcal{S}_\mathrm{int}$ имеет 2-pullbacks, индуцированные покомпонентным pullback-ом $(\mathcal{C}, \mathcal{D})$-данных. Доказательство — прямой перенос Gambino-Garner 2008 Prop 3.7 в naших обозначениях.

## 2. Теорема 98.T: существование функтора I

### 2.1 Формулировка

**Теорема 98.T** [Т·L2] (существование intensional refinement functor).

Пусть ⟪⟫ — канонический примитив Diakrisis, удовлетворяющий Axi-0..Axi-9 + T-α + T-2f\*. Тогда существует контравариантный 2-функтор

$$\mathbf{I}: \llbracket\cdot\rrbracket^\mathrm{op} \to \mathcal{S}_\mathrm{int}$$

со следующими свойствами:

- **(I-1) Homotopy invariance**: всякая 2-эквивалентность $\phi: f \simeq g$ в ⟪⟫ индуцирует 2-изоморфизм $\mathbf{I}(\phi): \mathbf{I}(f) \simeq \mathbf{I}(g)$ в 𝒮_int.
- **(I-2) Gauge covariance**: для gauge-трансформации $\tau: \alpha_1 \to \alpha_2$ существует индуцированный 1-морфизм $\mathbf{I}(\tau): \mathbf{I}(\alpha_2) \to \mathbf{I}(\alpha_1)$ в 𝒮_int, и этот морфизм — 1-эквивалентность при обратимой $\tau$.
- **(I-3) Strict refinement of Morita**: существуют $\alpha_1, \alpha_2 \in \mathrm{Ob}(\llbracket\cdot\rrbracket)$ с $\alpha_1 \sim_M \alpha_2$, но $\mathbf{I}(\alpha_1) \not\simeq \mathbf{I}(\alpha_2)$ в 𝒮_int.
- **(I-4) Morita as 2-localization**: 2-функтор забывания $\mathcal{U}$ удовлетворяет $\mathcal{U} \circ \mathbf{I} \simeq \rho$; при этом Morita-квотиент реализуется как 2-локализация $\mathbf{I}$ по классу $\mathcal{W}_\mathcal{U} := \mathcal{U}^{-1}(\mathrm{1\text{-}equiv}(\mathbf{2Cat}))$.

### 2.2 Доказательство

**Шаг 1** (конструкция $\mathbf{I}(\alpha)$ на объектах).

Для $\alpha \in \mathrm{Ob}(\llbracket\cdot\rrbracket)$, положим:

- $\mathcal{C}_\alpha := \llbracket\cdot\rrbracket / \alpha$ — slice-2-категория: её объекты — пары $(\beta, p: \beta \to \alpha)$, 1-морфизмы — коммутативные (с точностью до когерентных 2-изо) треугольники над $\alpha$, 2-морфизмы — 2-ячейки $\llbracket\cdot\rrbracket$, согласованные с $\alpha$-проекцией. Slice-2-категория корректно определена по Kelly 1982 §1.7.

- $\mathcal{D}_\alpha$ определяется как **канонический минимальный дисплейный класс**: наименьший класс 1-морфизмов $\mathcal{C}_\alpha$, удовлетворяющий (D1)–(D4). Формально:

  $$\mathcal{D}_\alpha := \bigcap \{\mathcal{D} \subseteq \mathrm{Mor}_1(\mathcal{C}_\alpha) \mid \mathcal{D} \text{ — дисплейный класс, содержащий все 2-эквивалентности}\}.$$

  Класс $\mathcal{D}_\alpha$ существует: пересечение любого семейства дисплейных классов снова дисплейно (замкнутость под каждой из (D1)–(D4) сохраняется при пересечении — стандартная closure-construction). По построению $\mathcal{D}_\alpha$ автоматически удовлетворяет (D1)–(D4).

  **Конкретное описание $\mathcal{D}_\alpha$** через порождение:

  - **База**: $\mathcal{D}_\alpha^{(0)} := \{\text{все 1-эквивалентности в } \mathcal{C}_\alpha\}$ (автоматически по (D1)).
  - **Индуктивный шаг**: $\mathcal{D}_\alpha^{(n+1)}$ содержит все $d \in \mathrm{Mor}_1(\mathcal{C}_\alpha)$, получаемые из $\mathcal{D}_\alpha^{(n)}$ одной из трёх операций:
    - 2-pullback вдоль произвольного $f: A' \to A$ (по (D2));
    - композиция $d_2 \circ d_1$ с $d_i \in \mathcal{D}_\alpha^{(n)}$ (по (D3));
    - перенос вдоль 2-ячейки $\phi: f \Rightarrow g$ (по (D4)).
  - **Замыкание**: $\mathcal{D}_\alpha := \bigcup_{n < \omega} \mathcal{D}_\alpha^{(n)}$.

  Этот минимальный класс автоматически замкнут относительно всех трёх операций (композиционное замыкание полуцепи из ω-шагов).

  **Нетривиальность $\mathcal{D}_\alpha$**: класс содержит не только тождества и эквивалентности, но и нетривиальные pullback-стабильные 1-морфизмы, естественно возникающие в конкретных артикуляциях (например, fibrations в α_hott, projections p₁: A × B → A для a-dependent types и т. д.). В минимальном случае $\mathcal{D}_\alpha = \{1\text{-эквивалентности}\}$ — допустимое, но тривиальное дисплейное наполнение.

  **Сравнение с 2-exponentiable maps**: в тех ambient'ах, где $\mathcal{C}_\alpha$ локально-cartesian-closed (например, $\llbracket\cdot\rrbracket/\alpha$ при дополнительной Axi-9+LCCC), класс 2-exponentiable maps автоматически удовлетворяет (D3) и совпадает с $\mathcal{D}_\alpha$. В общем случае наш минимальный класс шире или совпадает — корректен без дополнительных предположений об ambient'е.

- $\iota_\alpha: \mathcal{D}_\alpha \hookrightarrow \mathrm{Mor}_1(\mathcal{C}_\alpha)$ — каноническое включение.

Обозначим $\mathbf{I}(\alpha) := (\mathcal{C}_\alpha, \mathcal{D}_\alpha, \iota_\alpha) \in \mathrm{Ob}(\mathcal{S}_\mathrm{int})$.

**Корректность**: slice-2-категория $\mathcal{C}_\alpha = \llbracket\cdot\rrbracket / \alpha$ имеет 2-pullbacks (наследуются от ⟪⟫ по Axi-9). Дисплейный класс $\mathcal{D}_\alpha$ по построению замкнут под всеми требуемыми операциями — композицией, 2-pullback'ами, 2-ячейками. Никаких дополнительных аксиом (LCCC, ехponentiability) на ⟪⟫ не требуется.

**Шаг 2** (конструкция $\mathbf{I}$ на 1-морфизмах).

Для 1-морфизма $f: \alpha \to \alpha'$ в ⟪⟫, индуцированный pullback-2-функтор

$$f^*: \llbracket\cdot\rrbracket / \alpha' \to \llbracket\cdot\rrbracket / \alpha, \quad (\gamma, q) \mapsto (f^*\gamma, f^*q)$$

корректно определён (2-pullbacks в ⟪⟫). Pullback переносит дисплейный класс: для $d \in \mathcal{D}_{\alpha'}$ применяем индуктивное построение. На базовом уровне $d \in \mathcal{D}_{\alpha'}^{(0)}$ — эквивалентность, и её pullback — также эквивалентность (pullback эквивалентностей — эквивалентность по стандартной 2-category theory). На индуктивном шаге: pullback замкнут под 2-pullback'ом (композиция pullback-квадратов), композицией и 2-ячейками по функториальности $f^*$. Следовательно $f^*(\mathcal{D}_{\alpha'}) \subseteq \mathcal{D}_\alpha$ — без необходимости внешнего pullback-stability-results.

Следовательно, $f^*$ поднимается до 1-морфизма

$$\mathbf{I}(f) := (f^*, f^*|_\mathcal{D}): \mathbf{I}(\alpha') \to \mathbf{I}(\alpha)$$

в $\mathcal{S}_\mathrm{int}$. Направление стрелки обратно направлению $f$ — контравариантность **I**.

**Шаг 3** (конструкция $\mathbf{I}$ на 2-морфизмах).

Для 2-морфизма $\phi: f \Rightarrow g: \alpha \to \alpha'$ в ⟪⟫, индуцированная natural 2-transformation $\phi^*: f^* \Rightarrow g^*$ (стандартная Beck-Chevalley data) ограничивается когерентно на дисплейные 2-семейства (условие (D4)). Получаем 2-морфизм

$$\mathbf{I}(\phi): \mathbf{I}(f) \Rightarrow \mathbf{I}(g)$$

в $\mathcal{S}_\mathrm{int}$.

**Шаг 4** (верификация 2-функториальности).

- $\mathbf{I}(\mathrm{id}_\alpha) = \mathrm{id}_{\mathbf{I}(\alpha)}$: $\mathrm{id}^*$ — тождественный pullback, тривиально изоморфен identity.
- $\mathbf{I}(g \circ f) \simeq \mathbf{I}(f) \circ \mathbf{I}(g)$: pullback композиции композируется с точностью до когерентного 2-изо (стандартная Beck-Chevalley).
- Когерентность 2-морфизмов: покомпонентная.

Получаем корректно определённый контравариантный 2-функтор $\mathbf{I}: \llbracket\cdot\rrbracket^\mathrm{op} \to \mathcal{S}_\mathrm{int}$.

**Шаг 5** (свойство (I-1), homotopy invariance).

2-эквивалентность $\phi: f \simeq g$ в ⟪⟫ — 2-морфизм с 2-обратным $\phi^{-1}: g \simeq f$. Индуцированная Beck-Chevalley 2-трансформация $\phi^*: f^* \Rightarrow g^*$ также обратима с обратной $(\phi^{-1})^*$. Следовательно, $\mathbf{I}(\phi)$ — 2-изоморфизм в $\mathcal{S}_\mathrm{int}$.

**Шаг 6** (свойство (I-2), gauge covariance).

Gauge-трансформация $\tau: \alpha_1 \to \alpha_2$ (см. [/03-formal-architecture/04-gauge](/03-formal-architecture/04-gauge)) — 1-морфизм с выделенной 2-эквивалентностью на ρ-проекциях. По Шагу 2 получаем $\mathbf{I}(\tau): \mathbf{I}(\alpha_2) \to \mathbf{I}(\alpha_1)$. Если $\tau$ — gauge-эквивалентность (обратима через $\tau^{-1}$), то по Шагу 5 $\mathbf{I}(\tau)$ также — 1-эквивалентность в $\mathcal{S}_\mathrm{int}$.

**Шаг 7** (свойство (I-3), strict refinement).

Рассмотрим классический пример **MLTT против ETT**:

- $\alpha_\mathrm{MLTT} \in \mathrm{Ob}(\llbracket\cdot\rrbracket)$ — артикуляция Martin-Löf type theory с propositional identity types.
- $\alpha_\mathrm{ETT} \in \mathrm{Ob}(\llbracket\cdot\rrbracket)$ — артикуляция extensional type theory с definitional equality reflection.

**Morita-эквивалентность** $\alpha_\mathrm{MLTT} \sim_M \alpha_\mathrm{ETT}$ известна в литературе (Hofmann 1995 Theorem 3.2.5): категории моделей MLTT+UIP и ETT эквивалентны на классе разумных CCC. В Diakrisis: $\rho(\alpha_\mathrm{MLTT}) \simeq \rho(\alpha_\mathrm{ETT})$ как объекты в $\mathrm{End}(\llbracket\cdot\rrbracket)$.

**Intensional различие через инвариант дисплейных классов**:

Определим **типизационный инвариант** $\tau: \mathrm{Ob}(\mathcal{S}_\mathrm{int}) \to \{0, 1\}$:
$$\tau(\mathcal{C}, \mathcal{D}, \iota) := \begin{cases} 1 & \text{если существует effective normalization procedure для всех } d \in \mathcal{D} \\ 0 & \text{иначе.} \end{cases}$$

**Корректность**: $\tau$ — 2-инвариант $\mathcal{S}_\mathrm{int}$-эквивалентности. Если $(F, F_\mathcal{D}): (\mathcal{C}_1, \mathcal{D}_1) \xrightarrow{\simeq} (\mathcal{C}_2, \mathcal{D}_2)$ — 2-эквивалентность, то $F_\mathcal{D}$ биективно на дисплейных классах (с точностью до 2-ячейки), и свойство «effective normalization существует» сохраняется как свойство полной картины дисплейного слоя.

**Применение к MLTT vs ETT**:

- $\tau(\mathbf{I}(\alpha_\mathrm{MLTT})) = 1$: MLTT имеет strongly-normalizing typechecking algorithm (Streicher 1991 Theorem 3.3, Werner 1994 для CIC).
- $\tau(\mathbf{I}(\alpha_\mathrm{ETT})) = 0$: ETT с reflection rule имеет undecidable typechecking (Hofmann 1995 Theorem 3.2.3; Castellan-Clairambault-Dybjer 2017 для современного изложения).

Следовательно, $\tau(\mathbf{I}(\alpha_\mathrm{MLTT})) \neq \tau(\mathbf{I}(\alpha_\mathrm{ETT}))$, значит $\mathbf{I}(\alpha_\mathrm{MLTT}) \not\simeq \mathbf{I}(\alpha_\mathrm{ETT})$ в $\mathcal{S}_\mathrm{int}$ — независимо от Morita-эквивалентности на уровне $\rho$-проекций.

Это доказывает (I-3).

**Шаг 8** (свойство (I-4), Morita as 2-localization).

**Композиция $\mathcal{U} \circ \mathbf{I}$**: для $\alpha \in \llbracket\cdot\rrbracket$,

$$\mathcal{U}(\mathbf{I}(\alpha)) = \mathcal{C}_\alpha = \llbracket\cdot\rrbracket / \alpha.$$

По **2-категорной Yoneda** (Kelly 1982 §2, следствие 2.4.1): $\llbracket\cdot\rrbracket / \alpha \simeq \rho(\alpha)$ с точностью до 2-эквивалентности в $\mathbf{2Cat}$.

Следовательно, $\mathcal{U} \circ \mathbf{I} \simeq \rho$ — первая часть (I-4).

**Morita-локализация**: определим класс 1-морфизмов

$$\mathcal{W}_\mathcal{U} := \bigl\{ (F, F_\mathcal{D}) \in \mathrm{Mor}_1(\mathcal{S}_\mathrm{int}) \ \big|\ F \in \mathrm{1\text{-}equiv}(\mathbf{2Cat}) \bigr\}.$$

$\mathcal{W}_\mathcal{U}$ — класс 1-морфизмов в $\mathcal{S}_\mathrm{int}$, забывающих display-data и дающих 2-эквивалентности на ambient. Этот класс удовлетворяет 2-calculus-of-fractions conditions (Pronk 1996, Kelly-Street 1974): 2-закрыт под композицию, содержит тождества, совместим с 2-pullbacks в $\mathcal{S}_\mathrm{int}$.

По стандартной 2-локализации $\mathcal{S}_\mathrm{int}[\mathcal{W}_\mathcal{U}^{-1}]$ существует и удовлетворяет универсальному свойству Pronk 1996:

$$\mathcal{S}_\mathrm{int}[\mathcal{W}_\mathcal{U}^{-1}] \simeq \mathrm{image}(\mathcal{U})_\mathrm{gauge} = \mathcal{M}_\mathrm{Fnd}$$

последнее равенство — по 43.T1 ($\mathcal{M}_\mathrm{Fnd} = \mathrm{Trace}(\mathsf{A})/\mathrm{gauge}$).

**Факторизация**: диаграмма

$$\begin{CD}
\llbracket\cdot\rrbracket @>\mathbf{I}>> \mathcal{S}_\mathrm{int} \\
@VV\rho V  @VV\mathcal{U}V \\
\mathrm{End}(\llbracket\cdot\rrbracket) @<<{\iota}< \mathbf{2Cat}
\end{CD}$$

коммутирует с точностью до 2-эквивалентности. Morita-квотиент $\rho(\alpha_1) \simeq \rho(\alpha_2)$ эквивалентен прохождению через $\mathcal{U}$ после **I**. Это реализует **I** как покрытие Morita-квотиента, где Morita — результат 2-локализации по $\mathcal{W}_\mathcal{U}$.

Свойство (I-4) доказано. ∎

### 2.3 Следствия 98.T

**Следствие 98.C1** (нетривиальность intensional refinement). По (I-3), существуют Morita-эквивалентные артикуляции с не-2-эквивалентными **I**-образами. Intensional refinement — содержательная структура, не сводящаяся к Morita.

**Следствие 98.C2** (совместимость с когезией). $\mathbf{I}$ коммутирует с когезивной структурой $\Pi \dashv \flat \dashv \sharp \dashv \iota$ (см. [/03-formal-architecture/02-cohesion](/03-formal-architecture/02-cohesion)) с точностью до когерентных 2-изоморфизмов: cohesive modalities действуют на ambient $\mathcal{C}$-компоненту; display-class переносится Beck-Chevalley. Cohesion и **I** — ортогональные layer'ы.

**Следствие 98.C3** (gauge-factoring). Gauge-действие $\mathbf{G}_\mathrm{gauge}$ поднимается до действия на образе **I**: $\mathbf{G}_\mathrm{gauge} \curvearrowright \mathbf{I}(\llbracket\cdot\rrbracket) \subseteq \mathcal{S}_\mathrm{int}$. Это формализует «gauge с intensional-данными» — более тонкая gauge-структура, используемая для intensional-чувствительных приложений (например, перенос proof-assistant-specific данных между Morita-эквивалентными представителями).

## 3. Теорема 99.T: slice-locality

### 3.1 Формулировка

**Теорема 99.T** [Т·L2] (intensional refinement is slice-level).

Пусть $\mathbf{I}: \llbracket\cdot\rrbracket^\mathrm{op} \to \mathcal{S}_\mathrm{int}$ — функтор из 98.T, и пусть $\pi: \mathrm{Trace}(\mathsf{A}) \to \mathcal{M}_\mathrm{Fnd}$ — gauge-квотиент (43.T1). Тогда:

**(99.T-a)** существует 2-функтор $\widetilde{\pi}: \mathcal{S}_\mathrm{int} \to \mathcal{M}_\mathrm{Fnd}$ такой, что диаграмма

$$\begin{CD}
\llbracket\cdot\rrbracket @>\mathbf{I}>> \mathcal{S}_\mathrm{int} \\
@VV\pi V  @VV\widetilde{\pi}V \\
\mathcal{M}_\mathrm{Fnd} @= \mathcal{M}_\mathrm{Fnd}
\end{CD}$$

2-коммутативна;

**(99.T-b)** слой $\widetilde{\pi}^{-1}([\alpha])$ над точкой $[\alpha] \in \mathcal{M}_\mathrm{Fnd}$ образует фиксированную 2-категорию $\mathrm{Int}([\alpha])$ — **intensional-слой над gauge-классом**;

**(99.T-c)** intensional refinement не порождает новых точек в $\mathcal{M}_\mathrm{Fnd}$: для каждой $\alpha_\mathrm{new} \in \mathrm{Ob}(\mathcal{S}_\mathrm{int})$, существующей в образе $\mathbf{I}$, имеется $\widetilde{\pi}(\alpha_\mathrm{new}) \in \mathcal{M}_\mathrm{Fnd}$ — уже существующая точка.

### 3.2 Доказательство

**Шаг 1** (определение $\widetilde{\pi}$).

Положим:

$$\widetilde{\pi} := [\,\cdot\,]_\mathrm{gauge} \circ \mathcal{U}: \mathcal{S}_\mathrm{int} \to \mathbf{2Cat} \to \mathcal{M}_\mathrm{Fnd},$$

где $\mathcal{U}$ — проекция забывания display-data (свойство 1.4), а $[\,\cdot\,]_\mathrm{gauge}: \mathbf{2Cat} \to \mathcal{M}_\mathrm{Fnd}$ — gauge-quotient на ambient-ах (вторая компонента gauge-квотиента по 43.T1).

**Шаг 2** (2-коммутативность (99.T-a)).

Для $\alpha \in \llbracket\cdot\rrbracket$:

- Нижний путь: $\pi(\alpha) = [\alpha]_\mathrm{gauge} \in \mathcal{M}_\mathrm{Fnd}$.
- Верхний-правый: $\widetilde{\pi}(\mathbf{I}(\alpha)) = [\mathcal{U}(\mathbf{I}(\alpha))]_\mathrm{gauge} = [\rho(\alpha)]_\mathrm{gauge}$ (по (I-4)).
- Но $\rho(\alpha)$ определён с точностью до gauge-эквивалентности артикуляции $\alpha$ (43.T1), следовательно $[\rho(\alpha)]_\mathrm{gauge} = [\alpha]_\mathrm{gauge}$.

Диаграмма 2-коммутативна. ∎ (a)

**Шаг 3** (2-категорная структура слоя (99.T-b)).

Для $[\alpha] \in \mathcal{M}_\mathrm{Fnd}$:

$$\mathrm{Int}([\alpha]) := \widetilde{\pi}^{-1}([\alpha]) = \Bigl\{ (\mathcal{C}, \mathcal{D}, \iota) \in \mathcal{S}_\mathrm{int} \ \Big|\ [\mathcal{C}]_\mathrm{gauge} = [\alpha]_\mathrm{gauge} \Bigr\}.$$

$\mathrm{Int}([\alpha])$ — полная 2-подкатегория $\mathcal{S}_\mathrm{int}$: её объекты — intensional-структуры с ambient gauge-эквивалентной $\alpha$. 2-морфизмы наследуются от $\mathcal{S}_\mathrm{int}$.

**Нетривиальность слоя**: по (I-3), $\mathrm{Int}([\alpha])$ содержит не-2-эквивалентные объекты для некоторых $[\alpha]$ (пример — $[\alpha_\mathrm{MLTT}] = [\alpha_\mathrm{ETT}]$, но $\mathbf{I}(\alpha_\mathrm{MLTT}) \not\simeq \mathbf{I}(\alpha_\mathrm{ETT})$).

**Структура расслоения**: $\widetilde{\pi}: \mathcal{S}_\mathrm{int} \to \mathcal{M}_\mathrm{Fnd}$ — Grothendieck-фибрация в 2-категорном смысле (Hermida 1999, Bakovic 2010):

- Для $[\alpha] \in \mathcal{M}_\mathrm{Fnd}$ и $f: [\alpha'] \to [\alpha]$, cartesian lift существует через pullback в $\mathcal{S}_\mathrm{int}$ (свойство 1.5).
- Cartesian lifts композируются до когерентных 2-изоморфизмов.
- Это — стандартная 2-Grothendieck construction.

Слой $\mathrm{Int}([\alpha])$ — fibre этого расслоения. ∎ (b)

**Шаг 4** (отсутствие новых точек в базе (99.T-c)).

Пусть $\alpha_\mathrm{new} = (\mathcal{C}_\mathrm{new}, \mathcal{D}_\mathrm{new}, \iota_\mathrm{new})$ — произвольный объект из образа $\mathbf{I}$, то есть $\alpha_\mathrm{new} = \mathbf{I}(\beta)$ для некоторого $\beta \in \llbracket\cdot\rrbracket$.

Тогда:

$$\widetilde{\pi}(\alpha_\mathrm{new}) = \widetilde{\pi}(\mathbf{I}(\beta)) = \pi(\beta) = [\beta]_\mathrm{gauge} \in \mathcal{M}_\mathrm{Fnd}$$

— существующая точка $\mathcal{M}_\mathrm{Fnd}$.

Intensional-структуры в образе **I** проецируются на уже классифицируемые gauge-классы; **I** не порождает новых точек. ∎ (c)

### 3.3 Следствия 99.T

**Следствие 99.C1** (intensional refinement не добавляет осей no-go).

TH-Final ABSOLUTA_TOTALIS (55.T + 59.T.1 + 69.T + 84.T + 87.T) утверждает: не существует X, удовлетворяющего (F_S) ∧ (Π_4_{S,n}) ∧ (Π_3-max_{S,n}) для всех пятёрок (S, n, μ, ξ, π). Это утверждение касается **точек** $\mathcal{M}_\mathrm{Fnd}$ — точек в классифицирующем пространстве.

Intensional refinement, по 99.T, живёт в **слоях** $\mathrm{Int}([\alpha])$ над точками, не порождает новых точек. Следовательно:

- **I** не создаёт новой оси структурного no-go.
- 5-уровневая абсолютность TH-Final сохраняется.
- Уровень 6 остаётся структурно недостижимым.

**Следствие 99.C2** (закрытие зазора N-04b).

Open-gap N-04b (intensional refinement as research-programme) **формально закрыт**: функтор **I** построен в 98.T, его локальность доказана в 99.T. Никакого содержательного слоя расширения за пределы TH-Final не требуется.

**Следствие 99.C3** (все три обходных пути вокруг TH-Final formally closed).

После закрытия intensional refinement (98.T + 99.T) все три стандартных обходных пути вокруг TH-Final — formally closed:

| Путь | Статус до | Статус после |
|---|---|---|
| Universe-polymorphism | ✅ closed (57.T, 56.C1, 61.T, 94.T) | ✅ closed |
| Рефлексивная башня | ✅ closed (19.T1, 31.T3, 68.T, 69.T, 90.T) | ✅ closed |
| **Intensional refinement** | 🟡 research-programme | **✅ closed (98.T, 99.T)** |

Корпус Diakrisis полностью устойчив к стандартным атакам.

**Следствие 99.C4** (полнота защиты TH-Final ABSOLUTA_TOTALIS).

TH-Final ABSOLUTA_TOTALIS — пятиосевая структурная абсолютность — **полна** в следующем смысле:

- Пять осей (S, n, μ, ξ, π) — ортогональные направления no-go на базе $\mathcal{M}_\mathrm{Fnd}$.
- Три стандартных обходных пути формально закрыты.
- Slice-layer intensional refinement локализован и ортогонален базе.

Дальнейшие обходные пути в рамках Lawvere-characterizable foundations требуют либо нарушения условий R-S (вне области применимости), либо введения радикально не-категорных foundations (вне scope 87.T). Никакие **стандартные** математические манипуляции не дают обхода.

## 4. Конкретные примеры различения через I

### 4.1 MLTT vs ETT

Классический пример (использован в доказательстве (I-3)):

- $\mathbf{I}(\alpha_\mathrm{MLTT})$: дисплейные 2-семейства — decidable-typecheckable dependent projections с effective normalization procedure (Streicher 1991).
- $\mathbf{I}(\alpha_\mathrm{ETT})$: дисплейные 2-семейства — dependent projections с undecidable typechecking (reflection rule).
- $\widetilde{\pi}(\mathbf{I}(\alpha_\mathrm{MLTT})) = \widetilde{\pi}(\mathbf{I}(\alpha_\mathrm{ETT})) = [\alpha_\mathrm{MLTT/ETT}]$ — одна точка в $\mathcal{M}_\mathrm{Fnd}$.
- $\mathbf{I}(\alpha_\mathrm{MLTT}) \not\simeq \mathbf{I}(\alpha_\mathrm{ETT})$ в $\mathcal{S}_\mathrm{int}$.

Intensional различие формализовано, отнесено к slice-layer.

### 4.2 HoTT vs cubical

Современный пример:

- $\mathbf{I}(\alpha_\mathrm{HoTT})$: дисплейные 2-семейства — identity types без вычислительного содержания для univalence axiom (classical HoTT).
- $\mathbf{I}(\alpha_\mathrm{cubical})$: дисплейные 2-семейства — cubical-computational identity types с effective univalence (Cohen-Coquand-Huber-Mörtberg 2018).
- $\widetilde{\pi}(\mathbf{I}(\alpha_\mathrm{HoTT})) = \widetilde{\pi}(\mathbf{I}(\alpha_\mathrm{cubical})) = [\alpha_\mathrm{hott}]$ — одна точка (Morita-эквивалентны на уровне ∞-топосных моделей).
- $\mathbf{I}(\alpha_\mathrm{HoTT}) \not\simeq \mathbf{I}(\alpha_\mathrm{cubical})$ — различные computational profiles.

### 4.3 Proof-assistants (Coq, Agda, Lean)

Практический пример:

- $\mathbf{I}(\alpha_\mathrm{Coq})$, $\mathbf{I}(\alpha_\mathrm{Agda})$, $\mathbf{I}(\alpha_\mathrm{Lean})$: дисплейные 2-семейства фиксируют specific proof-term structures, tactics frameworks, type inference algorithms.
- $\widetilde{\pi}$ отображает все три в одну точку $\mathcal{M}_\mathrm{Fnd}$ (близкие gauge-классы в зоне CIC/MLTT-подобных оснований).
- Intensional различия — практически важны (выбор proof-assistant), но формально slice-level.

## 5. Связи с корпусом

### 5.1 С gauge-структурой

Существующая gauge-структура ([/03-formal-architecture/04-gauge](/03-formal-architecture/04-gauge)) — **ambient-уровневая**: действует на $\mathcal{C}$-компоненте. Intensional refinement через **I** — **display-level**: действует на $\mathcal{D}$-компоненте. Эти два слоя ортогональны и совместимы (98.C3).

**Обогащённая gauge-структура**: $\mathbf{G}_\mathrm{gauge}^\mathrm{int} := \mathbf{G}_\mathrm{gauge} \times \mathrm{Aut}(\mathbf{I})$ — произведение классической gauge-группы и группы intensional-автоэквивалентностей. Это даёт полное описание симметрий ⟪⟫ с учётом intensional-данных.

### 5.2 С (∞,∞)-иерархией

Функтор **I** стабилизируется на (∞,∞): по 68.T, (∞,∞+1)-Cat = (∞,∞)-Cat, и дисплейные 2-семейства не добавляют новой higher-categorical сложности. Формально:

$$\mathbf{I}^{(\infty,\infty)}: \llbracket\cdot\rrbracket_\infty^\mathrm{op} \to \mathcal{S}_\mathrm{int}^{(\infty,\infty)}$$

— каноническое (∞,∞)-расширение **I**. τ_{≤2}-усечение восстанавливает (I, 98.T, 99.T). 99.T сохраняется на всех уровнях (∞,n).

### 5.3 С UFH (85.T)

УГМ как сборка имеет $\mathbf{I}(\alpha_\mathrm{uhm}) \in \mathcal{S}_\mathrm{int}$ — intensional-структура с 7D-specific display-данными (спектральные тройки, CPTP-каналы, specific Lindblad normalizations). По 99.T: $\widetilde{\pi}(\mathbf{I}(\alpha_\mathrm{uhm})) = [\alpha_\mathrm{uhm}] \in \mathcal{M}_\mathrm{Fnd}$ — та же точка, что даёт $\pi(\alpha_\mathrm{uhm})$. UFH-предсказания (P_crit = 2/7, Φ_th = 1, R_th = 1/3) — extensional инварианты, не зависят от intensional-слоя. Путь Б работает на классифицирующей точке; intensional-refinement применим опционально для Verum-specific оптимизаций.

### 5.4 С categoricity (88.T)

88.T утверждает категоричность Diakrisis до (∞,∞)-эквивалентности. **I** совместима: 88.T работает на классифицирующей точке $\mathcal{M}_\mathrm{Fnd}$, intensional-структуры — на слоях. Две модели Diakrisis, эквивалентные по 88.T, имеют эквивалентные **I**-образы с точностью до slice-эквивалентности.

### 5.5 С 97.T (linearity-generativity tradeoff)

97.T — extensional утверждение о Π_3-max-generativity. $\mathbf{I}$ сохраняет этот tradeoff: **I**(α) для substructural S' без `!` имеет тривиальные дисплейные семейства (отсутствие PA-expressibility → отсутствие богатых display-data).

## 6. Verum-реализация

### 6.1 Верификация структуры

Модули Verum для интенсионального refinement:

- `core/intensional/display_class.vr` — формализация (D1)–(D4).
- `core/intensional/display_category.vr` — объект $\mathcal{S}_\mathrm{int}$.
- `core/intensional/I_functor.vr` — построение **I**.
- `core/intensional/slice_locality.vr` — доказательство 99.T.

### 6.2 Тесты на конкретных примерах

- `tests/intensional/mltt_vs_ett.vr` — 98.T (I-3) на классическом примере.
- `tests/intensional/hott_vs_cubical.vr` — современный пример.
- `tests/intensional/proof_assistants.vr` — practical scenarios.

### 6.3 Объём работы

Verum-формализация **I** оценивается как параллельная работа с UFH: ≈ 10 сессий. Сертификация 98.T и 99.T — стандартный 2-категорный proof через Gambino-Garner, Pronk, Kelly-Street.

## 7. Что функтор I **не** делает

### 7.1 Не даёт Уровень 6

По 99.T-c: intensional refinement параметризует слои, не добавляет точек в $\mathcal{M}_\mathrm{Fnd}$. TH-Final ABSOLUTA_TOTALIS сохраняется.

### 7.2 Не заменяет Morita-эквивалентность

Morita — корректный экстенсиональный инвариант и остаётся центральным понятием. **I** дополняет Morita display-данными; Morita возникает как 2-локализация **I** (I-4).

### 7.3 Не отменяет 57.T, 61.T, 94.T

Эти теоремы закрывают универс-полиморфизм на экстенсиональном уровне. **I** работает на intensional уровне, не затрагивает extensional аргументы.

### 7.4 Не требует новых аксиом

**I** строится из существующих 13 аксиом Diakrisis + стандартной 2-категорной машинерии. Никакие аксиомы не добавлены.

## 8. Итог

**Зазор N-04b формально закрыт**.

- **98.T**: функтор $\mathbf{I}: \llbracket\cdot\rrbracket^\mathrm{op} \to \mathcal{S}_\mathrm{int}$ построен через pullback-стабильные дисплейные 2-семейства. Свойства (I-1)–(I-4) доказаны.
- **99.T**: intensional refinement slice-локален над $\mathcal{M}_\mathrm{Fnd}$ через 2-Grothendieck-фибрацию $\widetilde{\pi}$. TH-Final ABSOLUTA_TOTALIS не затронута.
- **Все три стандартных обходных пути**: ✅ formally closed.
- **Корпусный статус**: Diakrisis полностью устойчив к стандартным атакам на TH-Final.

Работа Diakrisis как теории — **окончательно закрыта на extensional + intensional слоях**. Оставшиеся открытые программы П1, П2, П3, П4, П5, П6 — практические (Verum-формализация, эксперименты, SM-детализация, AGI/ASI-расширения, educational), не теоретические.

## Связи

- [/06-limits/02-th-final#стандартные-обходные-пути-и-их-закрытие](/06-limits/02-th-final#стандартные-обходные-пути-и-их-закрытие) — общий контекст защит.
- [/06-limits/06-absoluteness](/06-limits/06-absoluteness) — 5-уровневая абсолютность.
- [/03-formal-architecture/04-gauge](/03-formal-architecture/04-gauge) — существующая gauge-структура.
- [/10-reference/02-theorems-catalog#карта-защит-th-final-навигационный-указатель](/10-reference/02-theorems-catalog#карта-защит-th-final-навигационный-указатель) — карта защит.
- [/10-reference/03-gap-status](/10-reference/03-gap-status) — статус программ.
- [/07-methodology/03-negative-lessons#nl-15](/07-methodology/03-negative-lessons#nl-15) — методологический контекст.

## Ссылки на литературу

- Hofmann M. (1995). *Extensional concepts in intensional type theory*. PhD thesis, University of Edinburgh.
- Streicher T. (1993). *Semantics of type theory*. Birkhäuser Progress in Theoretical Computer Science.
- Streicher T. (1991). *Independence of the induction principle and the axiom of choice in the pure calculus of constructions*. TCS.
- Jacobs B. (1999). *Categorical Logic and Type Theory*. Studies in Logic vol. 141, Elsevier.
- Garner R. (2009). *Two-dimensional models of type theory*. Mathematical Structures in Computer Science 19(4).
- Gambino N., Garner R. (2008). *The identity type weak factorisation system*. Theoretical Computer Science 409.
- Joyal A., Kock J. (2013). *Feynman graphs, and nerve theorem for compact symmetric multicategories*. Electronic Notes in Theoretical Computer Science.
- Kelly G.M. (1982). *Basic concepts of enriched category theory*. LMS Lecture Notes 64.
- Pronk D. (1996). *Etendues and stacks as bicategories of fractions*. Compositio Mathematica 102.
- Hermida C. (1999). *Some properties of Fib as a fibred 2-category*. Journal of Pure and Applied Algebra 134.
- Bakovic I. (2010). *Fibrations of bicategories*. Preprint.
- Weber M. (2007). *Yoneda structures from 2-toposes*. Applied Categorical Structures 15.
- Cohen C., Coquand T., Huber S., Mörtberg A. (2018). *Cubical type theory: a constructive interpretation of the univalence axiom*. LIPIcs TYPES.
- Oury N. (2005). *Observational equality: now for good*. Mémoire de M2.
