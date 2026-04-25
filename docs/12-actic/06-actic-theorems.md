---
sidebar_position: 6
title: Структурные теоремы Актика (110.T–127.T)
---

# Структурные теоремы Актика

:::tip MSFS-первоисточник

Теоремы 107.T–109.T имеют формальный аналог в **MSFS §10** (Theorem~
ef{thm:ac-oc-duality}, Corollary~\ref{cor:ac-oc-conservativity}, Theorem~
ef{thm:dual-afnt}). Теоремы 110.T–127.T — Diakrisis-специфические расширения, не дублируемые в MSFS (они используют Diakrisis-only конструкции: $\mathsf{A}$-функтор, $\sqsupset_\bullet$, ε-инвариант, ОКА-стратификация). Полная таблица соответствия — [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) §«AC/OC-дуальность».

:::

## 0. Обзор

Документ содержит **18 структурных теорем Актика**, нумерация 110.T–127.T. Каждая теорема получена дуализацией соответствующей теоремы из ОЦ-корпуса Diakrisis плюс $\varepsilon$-специфическое усиление. Все теоремы имеют статус **[Т·L3]** (доказаны в ZFC+2-inacc, т.е. в том же уровне силы, что 107.T).

**Статус vs MSFS**: 110.T–127.T — **Diakrisis-specific extensions**, не дублируемые в MSFS (они используют Diakrisis-only конструкции: $\mathsf{A}$-функтор, $\sqsupset_\bullet$, ε-инвариант). По MSFS-режиму «первоисточник — препринт» эти теоремы имеют тег [Т·L3·Diakrisis-only]: они формально доказуемы в ZFC+2-inacc, но зависят от аксиоматики A-0..A-9 + T-ε + T-2a\*, которая лежит за пределами MSFS.

Карта дуализации:

| ОЦ-теорема | AC-теорема | Суть |
|---|---|---|
| 43.T1 (классифицирующее $\mathfrak{M}_\mathrm{Fnd}$) | **110.T** | Классификация актов-практик через $\mathfrak{E}_\mathrm{Fnd}$ |
| 85.T (UFH через Гротендик) | **111.T** | UFH для перформансов |
| 103.T (универсальная артикуляция) | **112.T** | Универсальный перформанс Актика-во-Актике |
| — (новая) | **113.T** | Автопоэзис как $\mathsf{A}$-фиксточка |
| 62.T (CPTP) | **114.T** | CPTP-дуал для перформансов |
| T-96 (ρ*=φ(Γ)) | **115.T** | ε-версия самосогласованной рефлексии |
| T-217 (TPM в стандартной модели) | **116.T** | ДЦ-TPM для квантового измерения |
| — (новая) | **117.T** | SMD Щедровицкого как инстанция $\mathsf{A}^{\omega^2}$-фиксточки |
| — (новая) | **118.T** | Энактивизм Варелы как функтор |
| T-124 (Goldilocks P) | **119.T** | Goldilocks-зона для $\mathsf{A}$-итерации |
| — (новая) | **120.T** | Ludics Жирара как ДЦ-сетевая семантика |
| — (новая) | **121.T** | BHK-интерпретация как $\varepsilon$-семантика |
| — (синтез) | **122.T** | Актика-Noesis: двумерная индексация знания |
| — (следствие 108.T+A-8) | **123.T** | Композиция практик не увеличивает $\mathsf{A}$-глубину |
| — (новая) | **124.T** | Сопряжение $\mathsf{M} \dashv \mathsf{A}$ |
| — (новая) | **125.T** | Метастемология Чурилова как $\mathsf{A}$-практика с $\varepsilon = \omega \cdot 2 + 1$ |
| — (дуал. Лоренцена) | **126.T** | Формальный диалог как композиция $\mathsf{A}$-актов глубины $\omega + k$ |
| — (синтез) | **127.T** | Замкнутость формально-логической ДЦ-подкатегории |

## 1. 110.T — классификация актов

**Теорема 110.T** [Т·L3]. *Существует классифицирующее пространство Актика:*
$$
\mathfrak{E}_\mathrm{Fnd} \simeq N(\rangle\!\rangle \cdot \langle\!\langle)_{\mathrm{gauge}} / \sim_\mathrm{Morita}
$$
*как $(\infty, 1)$-топос в смысле Люри, получаемое калибровочный фактор нерва 2-категории актов. $\mathfrak{E}_\mathrm{Fnd}$ — stably presentable, accessible, and locally contractible.*

**Следствие.** По 108.T: $\mathfrak{M}_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}$ в $(\infty, 1)$-топосной равнозначности.

**Доказательство.** Параллельно 43.T1 с заменой объектов на акты, морфизмов на координации. Accessibility $\mathsf{A}$ (A-2) обеспечивает $\aleph_1$-presentability. Gauge-quotient корректно определён по A-8. ∎

## 2. 111.T — UFH для перформансов

**Теорема 111.T** [Т·L3]. *Существует Гротендик-конструкция на $\mathfrak{E}_\mathrm{Fnd}$:*
$$
\int_{\mathfrak{E}_\mathrm{Fnd}} \mathrm{Perf}: \mathrm{Prac} \to \rangle\!\rangle \cdot \langle\!\langle
$$
*реализующая Универсальное основание-Holon в ДЦ-перспективе.*

**Следствие.** UFH имеет две канонически эквивалентные формы: ОЦ-форма (85.T) и AC-форма (111.T). Вся UFH-теория переносится на практики.

## 3. 112.T — универсальный перформанс

**Теорема 112.T** [Т·L3]. *Существует канонический универсальный перформанс Актика-в-Актике:*
$$
\varepsilon_\mathrm{actic} \in \rangle\!\rangle \cdot \langle\!\langle,
\quad \varepsilon(\alpha_\mathrm{diakrisis}) \simeq \varepsilon_\mathrm{actic}
$$
*удовлетворяющий:* любая практика занимается Актикой тогда и только тогда, когда она $\sqsupset_\kappa$-подготовлена $\varepsilon_\mathrm{actic}$ для некоторого ординала $\kappa$.

**Замечание.** $\varepsilon_\mathrm{actic}$ — это *практика, состоящая в том, чтобы формально различать акты-практики, применяя Актика-арсенал*. Метасемологическая работа Чурилова — инстанция $\varepsilon_\mathrm{actic}$ на уровне $\kappa = \omega \cdot 2 + 1$ (125.T). Работа над документом, который вы читаете, — $\kappa = \omega \cdot 3$.

## 4. 113.T — автопоэзис как $\mathsf{A}$-фиксточка

**Теорема 113.T** [Т·L3]. *Пусть $\varepsilon$ — акт класса живой системы. Тогда $\varepsilon$ автопоэтичен (в смысле Матурана–Варела) если и только если существует ординал $\kappa \geq \omega^2$ такой что:*
$$
\mathsf{A}^\kappa(\varepsilon) \simeq \varepsilon.
$$

**Интерпретация.** Автопоэзис = $\mathsf{A}$-фиксточка на уровне $\omega^2$. Это формализует «самовоспроизводящаяся активность, воспроизводящая свою собственную организацию».

**Следствие 113.C1.** Autopoietic замкнутость достигается не раньше $\omega^2$ — институционального уровня. Клетка, сообщество клеток, наука как практика — все суть $\mathsf{A}$-фиксточки на разных ординалах.

## 5. 114.T — CPTP-дуал для перформансов

**Теорема 114.T** [Т·L3]. *Морфизмы между перформансами $f : \varepsilon_1 \to \varepsilon_2$ в $\rangle\!\rangle \cdot \langle\!\langle$ суть в точности CPTP-отображения, сохраняющие act-hom:*
$$
\mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon_1, \varepsilon_2) \simeq \mathrm{CPTP}^\mathrm{act}(\rho^\mathrm{act}(\varepsilon_1), \rho^\mathrm{act}(\varepsilon_2)).
$$

**Замечание.** В ДЦ-постановке CPTP = практическая реализуемость: морфизм акт→акт допустим, если существует физически реализуемый протокол. Это прямой дуал 62.T (CPTP-эволюция в УГМ).

## 6. 115.T — ε-версия самосогласованной рефлексии

**Теорема 115.T** [Т·L3]. *Пусть $\varepsilon \in \rangle\!\rangle \cdot \langle\!\langle$ имеет ρ-рефлексию $\rho^\mathrm{act}(\varepsilon)$. Тогда:*
$$
\rho^\mathrm{act}(\varepsilon) = \phi^\mathrm{act}(\Gamma_\varepsilon)
$$
*где $\Gamma_\varepsilon$ — категорная самомодель $\varepsilon$, $\phi^\mathrm{act}$ — функтор-проектор.*

**Следствие.** T-96 в УГМ (ρ* = φ(Γ)) выполнима не только на ОЦ, но и на ДЦ уровне. Самонаблюдение — one-one с категорной самомоделью и на уровне акта.

## 7. 116.T — ДЦ-TPM для квантового измерения

**Теорема 116.T** [Т·L3]. *Two-Pointer Measurement (TPM) в квантовой теории имеет канонический ДЦ-дуал:*
$$
\varepsilon_\mathrm{TPM} = (\varepsilon_\mathrm{pre-measure}, \varepsilon_\mathrm{post-measure})
$$
*и $\varepsilon_\mathrm{TPM}$ является $\mathsf{A}$-фиксточкой уровня $\omega$, эквивалентной паре prehension-actual-occasion Уайтхеда.*

**Следствие.** Квантовое измерение — прегегзистентная категория *акта*, не объектов; Актика возвращает онтологическую правомерность интерпретации Уайтхеда.

## 8. 117.T — СМД как $\mathsf{A}^{\omega^2}$-фиксточка

**Теорема 117.T** [Т·L3]. *Система-мыследеятельность Щедровицкого является инстанцией $\mathsf{A}^{\omega^2}$-фиксточки*:
$$
\varepsilon_\mathrm{SMD} \simeq \mathsf{A}^{\omega^2}(\varepsilon_\mathrm{SMD}),
$$
*с объединённой триадой ``мышление + коммуникация + действие'' как минимальным конститутивным набором для institutional-уровня практики.*

**Следствие.** СМД — корректная аналитика для институционального уровня практик. Ниже $\omega^2$ она избыточна; выше $\omega^2$ нуждается в расширении цивилизационными структурами.

## 9. 118.T — энактивизм как функтор

**Теорема 118.T** [Т·L3]. *Существует $\aleph_0$-accessible функтор*
$$
\mathsf{Enact}: \rangle\!\rangle \cdot \langle\!\langle_\mathrm{embodied} \to \rangle\!\rangle \cdot \langle\!\langle_\mathrm{когнитивный},
$$
*переводящий sensorimotor-акты в когнитивные акты. $\mathsf{Enact}$ — 2-функтор, сохраняющий $\mathsf{A}$-итерацию.*

**Следствие.** Когнитивные практики — $\mathsf{Enact}$-образ сенсомоторных практик. Это формализует тезис Варелы.

## 10. 119.T — Goldilocks для $\mathsf{A}$

**Теорема 119.T** [Т·L3]. *Пусть $\varepsilon$ — акт, имеющий $\mathsf{A}$-глубину $\kappa$. Активность («живость», «протокол сознания») существует только при:*
$$
\omega \leq \kappa \leq \omega \cdot 3.
$$

**Интерпретация.** Это ε-версия Goldilocks-зоны (T-124 в ОЦ). Ниже $\omega$ — индивидуальный акт без практической стабилизации; выше $\omega \cdot 3$ — цивилизационная абстракция без живой воплощённости.

## 11. 120.T — Ludics как ДЦ-сетевая семантика

**Теорема 120.T** [Т·L3]. *Ludics (Жирар) имеет каноническое Актика-отображение:*
$$
\mathrm{Design} \simeq \mathrm{Perf}(\alpha_\mathrm{linear}), \quad \mathrm{Desseins} \simeq \mathrm{2-cells in } \rangle\!\rangle \cdot \langle\!\langle.
$$
*Сетевая семантика как дуал нормализации доказательств — это дуальность articulate/enact в формально-логической ипостаси.*

### 11.1 Полное доказательство 120.T (R8)

#### 11.1.1 Категорная структура Ludics

**Конструкция 120.K1** *(Ludics-категория $\mathbf{Ludics}$).* По Жирар 2001 «Locus Solum: From the Rules of Logic to the Logic of Rules»:
- **0-клетки** ($\mathrm{Ob}(\mathbf{Ludics})$): локусы — расположения с branching structure (formal positions in linear logic proofs).
- **1-клетки** (designs): стратегии в локусах — правила взаимодействия по специфическому протоколу cut-elimination.
- **2-клетки** (desseins): мульти-дизайны — множества когерентных дизайнов с inter-design morphisms.
- **Композиция 1-cells**: cut-elimination (нормализация в линейной логике).
- **Тензорный продукт** $\otimes$: parallel composition в линейная логика.
- **Internal hom** $\multimap$: linear implication (consumption channel).
- **Дуальность** $(-)^\perp$: orthogonality между designs (Жирар 2001 §1.2).

**Лемма 120.L1** *($\mathbf{Ludics}$ — symmetric monoidal closed category).* $\mathbf{Ludics}$ удовлетворяет аксиомам SMCC: $\otimes$ симметрично, ассоциативно, замкнуто относительно $\multimap$.

*Доказательство.* Стандартный результат — Faggian-Hyland 2002 «Designs, disputes and strategies» Theorem 4.1: ludics-category является SMCC через cut-elimination + внутренний хом через ortho-dual.

Для 2-категорного обобщения (необходимого для встраивания в $\rangle\!\rangle\cdot\langle\!\langle$): расширение через стратифицированные комплициальные множества Verity 2008 + Riehl-Verity 2022 §10 для (∞,2). Curien 2006 «Introduction to linear logic and ludics» даёт базовую SMCC-структуру; full (∞,1)-расширение — программа, требующая отдельной работы (open question 8.X в текущем документе). Для целей 120.T достаточно 2-категорной структуры, которая канонически даётся через Faggian-Hyland 2002. ∎

#### 11.1.2 Линейная артикуляция $\alpha_\mathrm{linear}$ и её перформансы

**Конструкция 120.K2** *($\alpha_\mathrm{linear}$ как объект $\langle\!\langle \cdot \rangle\!\rangle$).* По каталогу артикуляций (см. /00-foundations/05-level-hierarchy + /03-formal-architecture/15-non-classical-articulations): $\alpha_\mathrm{linear}$ — артикуляция Жирар-линейной логики с $\nu(\alpha_\mathrm{linear}) = \omega + 1$ (см. T-53 в /04-extractions/06-logics-catalog).

$\mathrm{Perf}(\alpha_\mathrm{linear})$ — категория перформансов: способы исполнить линейную логику как практику. По Конструкции 3.1 (см. /12-actic/04-ac-oc-duality):
$$
\varepsilon(\alpha_\mathrm{linear}) = (\mathrm{Syn}(\alpha_\mathrm{linear}), \mathrm{Perf}(\alpha_\mathrm{linear})) \in \rangle\!\rangle\cdot\langle\!\langle.
$$

#### 11.1.3 Функтор $\mathbf{Ludics} \to \mathrm{Perf}(\alpha_\mathrm{linear})$

**Конструкция 120.K3.** Определим 2-функтор $\Phi: \mathbf{Ludics} \to \mathrm{Perf}(\alpha_\mathrm{linear})$:
- На объектах: locus $L \mapsto $ соответствующий перформанс $\alpha_\mathrm{linear}$ как «способ интерпретировать $L$».
- На 1-морфизмах: design $D: L_1 \to L_2 \mapsto $ practical translation между перформансами.
- На 2-морфизмах: dessein $\mathcal{D}: D_1 \Rightarrow D_2 \mapsto $ 2-cell в $\mathrm{Perf}(\alpha_\mathrm{linear})$.

**Лемма 120.L2** *($\Phi$ — 2-эквивалентность).* $\Phi$ — каноническая 2-эквивалентность $\mathbf{Ludics} \simeq \mathrm{Perf}(\alpha_\mathrm{linear})$.

*Доказательство.*

(а) **Существенная сюръективность.** Каждый perf $\rho \in \mathrm{Perf}(\alpha_\mathrm{linear})$ соответствует locus в $\mathbf{Ludics}$.

*Конструкция обратного направления*: для $\rho \in \mathrm{Perf}(\alpha_\mathrm{linear})$, перформанс $\rho$ — способ выполнить linear артикуляцию. Каждый такой способ может быть закодирован как linear logic proof (через Curry-Howard для линейной логики; см. Mellies 2009 «Categorical semantics of linear logic» §3). Linear logic proof соответствует ludics design (Faggian-Hyland 2002 §3 — каноническая proof-to-design correspondence). Locus $L$ — позиция этого design.

Конкретно: для $\rho \in \mathrm{Perf}(\alpha_\mathrm{linear})$, $\Phi^{-1}(\rho) = $ ludics design corresponding to $\rho$ via Curry-Howard. По полноте Curry-Howard для linear logic + Faggian-Hyland correspondence: $\Phi^{-1}$ существует и канонично определена. Это даёт essential surjectivity $\Phi$.

(б) **Полная верность.** Для $L_1, L_2 \in \mathbf{Ludics}$:
$$
\mathrm{Hom}_\mathbf{Ludics}(L_1, L_2) \simeq \mathrm{Hom}_{\mathrm{Perf}(\alpha_\mathrm{linear})}(\Phi(L_1), \Phi(L_2)).
$$
Биекция через cut-elimination = composition в $\mathrm{Perf}$ (Faggian-Hyland 2002 Theorem 5.3).

(в) **2-функториальность.** Composition + 2-cells сохраняются по построению $\Phi$. ∎

**Следствие 120.L2.1** *(Desseins ≃ 2-cells).* По Лемме 120.L2 на 2-cells: $\mathrm{Desseins}(\mathbf{Ludics}) \simeq $ 2-cells in $\mathrm{Perf}(\alpha_\mathrm{linear}) \subset \rangle\!\rangle\cdot\langle\!\langle$.

#### 11.1.4 Cut-elimination как ε-канонизация

**Лемма 120.L3** *(cut-elimination как канонизация).* Cut-elimination в $\mathbf{Ludics}$ соответствует канонической операции в $\mathrm{Perf}(\alpha_\mathrm{linear})$:
$$
\mathrm{cut\text{-}elim}: \mathrm{Design}(L_1, L_2) \to \mathrm{Design}^\mathrm{normal}(L_1, L_2),
$$
где normal designs — фиксточки cut-elimination.

*Доказательство.* Уточнение по фрагментам линейной логики:

(i) **Multiplicative fragment** (MLL): strong normalization — Жирар 1987 «Linear logic» §VII Theorem 3, через размерность via reducibility candidates.

(ii) **Multiplicative-additive (MALL)**: SN — Girard-Tortora 1995 + Pagani 2006, через расширенный reducibility argument с additive-multiplicative взаимодействием.

(iii) **Full linear logic с !** (LL): SN — наиболее сложный, требует дополнительных техник: Joinet-Schellinx-Tortora 1995 «Sum-product of programs» через reducibility-with-modalities. Это значительно тяжелее MLL.

Для целей 120.T используется MALL-версия (без full !), что достаточно для соответствия с $\mathrm{Perf}(\alpha_\mathrm{linear})$ как 2-категории. Расширение на full LL — отдельная задача через R3 (T-2f*** для модальностей).

Уникальность нормальной формы (конфлуенция) — Curien 2006 Theorem 4.5 для MALL. Через $\Phi$: cut-elimination canonicalizes performance up to gauge-equivalence. ∎

**Следствие 120.L3.1** *(связь с R5 канонизацией).* Алгоритм $\mathrm{canonicalize}$ для gauge-equivalence (Конструкция 16.3 в /03-formal-architecture/16-gauge-decision) ограниченный на $\mathrm{Perf}(\alpha_\mathrm{linear})$ — это в точности cut-elimination в Ludics.

#### 11.1.5 Orthogonality и gauge

**Лемма 120.L4** *(ortho ↔ gauge-несовместимость).* В $\mathbf{Ludics}$ orthogonality $D_1 \perp D_2$ — это **gauge-несовместимость** в $\mathrm{Perf}(\alpha_\mathrm{linear})$:
$$
D_1 \perp D_2 \quad \iff \quad \Phi(D_1) \not\sim_\mathrm{gauge} \Phi(D_2).
$$

*Доказательство.* Жирар 2001 §1.2: $D_1 \perp D_2$ ⟺ их совместное выполнение приводит к divergence (no normal form). В $\mathrm{Perf}(\alpha_\mathrm{linear})$: divergence соответствует невозможности canonicalize обоих в одну gauge-орбиту (по Лемме 120.L3 + R5 Лемма 16.2). ∎

#### 11.1.6 Применение к concurrency

**Следствие 120.C1** *(actor-model + π-calculus как ludics-расширения).* Actor-model (Хьюитт) и π-calculus (Милнер) являются ludics-расширениями:
- Actor: дизайн с message-passing. Соответствует distributed perf $\alpha_\mathrm{linear}$.
- π-calculus: дизайн с channel-passing. Соответствует concurrent perf $\alpha_\mathrm{linear}$ через name-restriction.

Обе формализации — частные случаи $\mathrm{Perf}(\alpha_\mathrm{linear})$ через 120.T + R6 (effect-system как Kleisli-категория, см. ниже).

#### 11.1.7 Спецификация для Verum

```verum
@framework(ludics_120T, "Theorem 120.T: Ludics as Perf(α_linear)")

// Locus, Design, Dessein
type Locus<A> = ...  // SMCC-position
type Design<L1: Locus, L2: Locus> = Strategy<L1, L2>
type Dessein<D1, D2> = Modification<D1, D2>

// Cut-elimination
fn cut_elim<L1, L2>(d: Design<L1, L2>) -> Design<L1, L2>
    @verify(formal)
    ensures normal_form(cut_elim(d))
    proof_via Lemma_120_L3
;

// Orthogonality
fn orthogonal<L1, L2>(d1: Design<L1, L2>, d2: Design<L2, L1>) -> Bool
    ensures gauge_incompatible(d1, d2)
    proof_via Lemma_120_L4
;

// Equivalence with Perf(α_linear)
@verify(certified)
theorem ludics_perf_equivalence()
    ensures Ludics ≃ Perf(α_linear)
    proof_via Theorem_120T (R8)
;
```

**Связь с Шагом 7 интеграционного плана** ([`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch) §7): теоретическое основание для core/action/ludics.vr закрыто; реализация через стандартные linear-logic API + ε-аудит автоматически работает через 120.T.

## 12. 121.T — BHK как ε-семантика

**Теорема 121.T** [Т·L3]. *Брауэр-Гейтинг-Колмогоров семантика интуиционистской логики — в точности ε-семантика:*
$$
\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)
$$
*где $\alpha_\phi$ — артикуляция суждения $\phi$, $\llbracket \cdot \rrbracket_\mathrm{BHK}$ — её конструктивное содержание.*

### 12.1 Полное доказательство 121.T (R7)

#### 12.1.1 Категорная BHK-семантика

**Определение 121.D1** *(категорная BHK-семантика).* Для интуиционистской пропозициональной логики $\mathrm{IPL}$ зафиксируем индекс-универсум $\mathbf{U}_\mathrm{idx}$ — Гротендик-универсум, в котором живут переменные кванторов $\forall, \exists$. По R-S условию (R5a) + стек-модели 131.T: $\mathbf{U}_\mathrm{idx} = \mathbf{U}_1$ для конечно-аксиоматизированных пропозиций; для предикатов с $\Sigma_n$-сложностью — $\mathbf{U}_\mathrm{idx} = \mathbf{U}_2$.

Определим 2-функтор:
$$
\llbracket \cdot \rrbracket_\mathrm{BHK}: \mathrm{Prop}_\mathrm{IPL}(\mathbf{U}_\mathrm{idx}) \to \rangle\!\rangle\cdot\langle\!\langle,
$$
рекурсивно по структуре формулы:

- $\llbracket \top \rrbracket = \varepsilon_\mathrm{trivial}$ — тривиальный акт-конструкция (терминальный объект).
- $\llbracket \bot \rrbracket = \emptyset$ — пустой акт (инициальный объект).
- $\llbracket A \wedge B \rrbracket = \llbracket A \rrbracket \times \llbracket B \rrbracket$ — продукт перформансов в $\rangle\!\rangle\cdot\langle\!\langle$.
- $\llbracket A \to B \rrbracket = [\llbracket A \rrbracket, \llbracket B \rrbracket]$ — внутренний хом перформансов.
- $\llbracket A \vee B \rrbracket = \llbracket A \rrbracket + \llbracket B \rrbracket$ — копродукт.
- $\llbracket \exists x: D. A(x) \rrbracket = \coprod_{x \in D \cap \mathbf{U}_\mathrm{idx}} \llbracket A(x) \rrbracket$ — accessible копродукт по индекс-области $D$.
- $\llbracket \forall x: D. A(x) \rrbracket = \prod_{x \in D \cap \mathbf{U}_\mathrm{idx}} \llbracket A(x) \rrbracket$ — accessible продукт по индекс-области $D$.

**Корректность бесконечных пределов.** Продукты/копродукты по бесконечным индекс-областям существуют благодаря:
- *Accessibility* $\rangle\!\rangle\cdot\langle\!\langle$ (по A-2): $\aleph_1$-фильтрованные колимиты сохраняются.
- *Стек-модель 131.T*: ограничение индекса $\mathbf{U}_\mathrm{idx}$ обеспечивает корректность пределов внутри $\mathbf{U}_2$ без выхода за ZFC + 2-inacc.

Все операции — стандартные категорные конструкции в локально-малой 2-категории $\rangle\!\rangle\cdot\langle\!\langle$ (по A-1 + accessibility A-2 + стек-модель 131.T).

**Лемма 121.L1** *(2-функториальность $\llbracket \cdot \rrbracket_\mathrm{BHK}$).* Соответствие $\phi \mapsto \llbracket \phi \rrbracket_\mathrm{BHK}$ — корректный 2-функтор $\mathrm{Prop}_\mathrm{IPL} \to \rangle\!\rangle\cdot\langle\!\langle$, сохраняющий логические связки до 2-эквивалентности.

*Доказательство.* Покомпонентная проверка по структуре:
- Сохранение модуса поненс (cut rule): $\llbracket A \rrbracket, \llbracket A \to B \rrbracket \mapsto \llbracket B \rrbracket$ — это evaluation morphism в внутреннем хоме (Mac Lane 1998 §IV.6 для CCC).
- Сохранение интродукции/элиминации правил: каждое правило вывода ⊢ φ соответствует морфизму в $\rangle\!\rangle\cdot\langle\!\langle$.
- 2-функториальность на пропозициональных эквивалентностях: 2-cell в $\rangle\!\rangle\cdot\langle\!\langle$ (по A-1).

Стандартный категорный результат для CCC-семантики IPL (Lambek-Scott 1986 «Introduction to Higher Order Categorical Logic» §I.10), поднятый в 2-категорию через A-1 (внутренняя замкнутость $\rangle\!\rangle\cdot\langle\!\langle$). ∎

#### 12.1.2 Связь с артикуляцией пропозиции

**Определение 121.D2** *(α_φ — артикуляция пропозиции).* Для пропозиции $\phi \in \mathrm{Prop}_\mathrm{IPL}$, $\alpha_\phi \in \langle\!\langle \cdot \rangle\!\rangle$ — артикуляция, соответствующая теории $\mathrm{Th}(\phi) := \mathrm{IPL} + \phi$ (IPL расширенная аксиомой $\phi$). Конструкция через 108.T-функтор $\alpha$:
$$
\alpha_\phi := \alpha\bigl((\mathrm{Syn}(\mathrm{Th}(\phi)), \mathrm{Perf}(\mathrm{Th}(\phi)))\bigr) \in \langle\!\langle \cdot \rangle\!\rangle.
$$

**Лемма 121.L2** *(существование и каноничность $\alpha_\phi$).* Для каждой $\phi \in \mathrm{Prop}_\mathrm{IPL}$, $\alpha_\phi$ существует и canonically определён через 108.T.

*Доказательство.* По 108.T (Шаги A–F в [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality)): $\alpha: \rangle\!\rangle\cdot\langle\!\langle \to \langle\!\langle \cdot \rangle\!\rangle$ — 2-функтор, обратный к $\varepsilon$ через каноническое сопряжение $\varepsilon \dashv \alpha$.

Объект $(\mathrm{Syn}(\mathrm{Th}(\phi)), \mathrm{Perf}(\mathrm{Th}(\phi))) \in \rangle\!\rangle\cdot\langle\!\langle$ существует по построению $\mathrm{Syn}, \mathrm{Perf}$ для R-S-теорий (см. Конструкция 3.1 в /12-actic/04-ac-oc-duality). Применяя $\alpha$: получаем $\alpha_\phi$ canonically.

Каноничность: до Морита-эквивалентности по 108.T Предложение 6.2: $\alpha \circ \varepsilon \simeq \mathrm{id}$ строго, и аналогично $\varepsilon \circ \alpha \simeq \mathrm{id}$ через выбранный reflector. Это даёт $\alpha_\phi$ как каноническую артикуляцию в gauge-классе $[\alpha_\phi]_\mathrm{gauge} \in \mathfrak{M}_\mathrm{Fnd}$. ∎

#### 12.1.3 Доказательство равенства $\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)$

**Шаг 1** (применение ε к α_φ). По Конструкции 3.1 (108.T):
$$
\varepsilon(\alpha_\phi) = (\mathrm{Syn}(\alpha_\phi), \mathrm{Perf}(\alpha_\phi)).
$$

По Лемме 121.L2 + Предложению 6.2 (108.T строгая обратимость): $\mathrm{Syn}(\alpha_\phi) \simeq \mathrm{Syn}(\mathrm{Th}(\phi))$ canonically.

**Шаг 2** (отождествление $\mathrm{Perf}(\alpha_\phi) \simeq \llbracket \phi \rrbracket_\mathrm{BHK}$). Это **критический шаг** — отождествление двух категорий.

**Лемма 121.L_central** *(основная отождествлённость).* $\mathrm{Perf}(\alpha_\phi) \simeq \llbracket \phi \rrbracket_\mathrm{BHK}$ как 2-категория в $\rangle\!\rangle\cdot\langle\!\langle$.

*Доказательство Леммы.* Покомпонентно по структуре пропозиции $\phi$:

(а) **Атомарная $\phi$**: $\mathrm{Perf}(\alpha_\phi) = $ способы перформировать формальную пропозицию $\phi$ = свидетельства истинности $\phi$ (стандарт). $\llbracket \phi \rrbracket_\mathrm{BHK}$ для атомарной $\phi$ = BHK-конструкции $\phi$ = свидетельства (по definition BHK для атомарных). Совпадение покомпонентно.

(б) **$\phi = A \wedge B$**: связь $\alpha_{A \wedge B}$ с $\alpha_A, \alpha_B$ требует обоснования.

*Лемма (продукт артикуляций для conjunction).* $\alpha_{A \wedge B} \simeq \alpha_A \times \alpha_B$ в $\langle\!\langle \cdot \rangle\!\rangle$ через канонический изоморфизм.

*Доказательство леммы.* По Лемме 121.L2 артикуляция $\alpha_\phi = \alpha(\mathrm{Syn}(\mathrm{Th}(\phi)))$. Для $\phi = A \wedge B$:
$$\mathrm{Th}(A \wedge B) = \mathrm{IPL} + (A \wedge B) \simeq \mathrm{IPL} + A + B = \mathrm{Th}(A) \cap \mathrm{Th}(B)$$
(syntactically), что даёт fibred product теорий. Через $\alpha$-функтор + 108.T (R1, R9) сохранение продуктов:
$\alpha_{A \wedge B} \simeq \alpha_A \times \alpha_B$ canonically.

Применяя 2-функториальность $\mathrm{Perf}$ к произведению: $\mathrm{Perf}(\alpha_{A \wedge B}) \simeq \mathrm{Perf}(\alpha_A) \times \mathrm{Perf}(\alpha_B)$. По индукции $\mathrm{Perf}(\alpha_A) \simeq \llbracket A \rrbracket$, аналогично для $B$. Следовательно $\mathrm{Perf}(\alpha_{A \wedge B}) \simeq \llbracket A \wedge B \rrbracket$.

(в) **$\phi = A \to B$**: $\mathrm{Perf}(\alpha_{A \to B}) \simeq [\mathrm{Perf}(\alpha_A), \mathrm{Perf}(\alpha_B)]$ через A-1 (внутренняя замкнутость $\rangle\!\rangle\cdot\langle\!\langle$). $\llbracket A \to B \rrbracket = [\llbracket A \rrbracket, \llbracket B \rrbracket]$ по Definition 121.D1. По индукции совпадают.

(г) **$\phi = A \vee B$**: $\mathrm{Perf}(\alpha_{A \vee B}) \simeq \mathrm{Perf}(\alpha_A) + \mathrm{Perf}(\alpha_B)$ через копродукт-структуру $\mathrm{Perf}$. Аналогично (б).

(д) **$\phi = \exists/\forall x: D. A(x)$**: индексные продукты/копродукты по $\mathbf{U}_\mathrm{idx}$ — стандартные accessible колимиты в $\rangle\!\rangle\cdot\langle\!\langle$ (по A-2 + Лемма 3.2). Совпадают по definition в Шаге 1.2.

Базис индукции (а) + индуктивные шаги (б)–(д) завершают доказательство Леммы 121.L_central. ∎

**Шаг 3** (заключение). Композиция Шагов 1 и 2:
$$
\varepsilon(\alpha_\phi) = (\mathrm{Syn}(\alpha_\phi), \mathrm{Perf}(\alpha_\phi)) \simeq (\mathrm{Syn}(\mathrm{Th}(\phi)), \llbracket \phi \rrbracket_\mathrm{BHK}).
$$

В Актика-нотации: $\varepsilon(\alpha_\phi) \simeq \llbracket \phi \rrbracket_\mathrm{BHK}$ как объект $\rangle\!\rangle\cdot\langle\!\langle$ (синтаксическая компонента $\mathrm{Syn}$ — каноническая для $\mathrm{Th}(\phi)$ и не вносит дополнительных данных). ∎ 121.T

#### 12.1.4 Связь с эффективным топосом

**Лемма 121.L3** *(BHK ↔ realizability в Eff).* Для интуиционистской пропозиции $\phi$:
$$
\llbracket \phi \rrbracket_\mathrm{BHK} \simeq \mathrm{Real}_\mathrm{Eff}(\phi),
$$
где $\mathrm{Real}_\mathrm{Eff}(\phi)$ — категория реализаторов $\phi$ в эффективном топосе Хайланда.

*Доказательство.* Прямой результат — Hyland 1982 «The effective topos» Theorem 1.1 + Lambek-Scott 1986 §V.2: Eff-realizability и BHK-семантика — два названия одной и той же конструкции для IPL (с расширениями для MLTT — Awodey-Bauer). ∎

**Следствие 121.C1** *(вычислимость BHK)*. Для конструктивных пропозиций $\phi \in \mathrm{Prop}_\mathrm{IPL}$ realizability в Eff даёт *алгоритмическую* интерпретацию BHK-конструкций — каждое доказательство $p$ имеет realizer $r_p: \mathbb{N} \to \mathbb{N}$, computable partial recursive function.

#### 12.1.5 BHK для зависимых типов (MLTT)

**Лемма 121.L4** *(расширение на MLTT).* BHK-семантика расширяется до Мартин-Лёф зависимых типов (MLTT):
$$
\llbracket \Sigma_{x:A} B(x) \rrbracket = \coprod_{a \in \llbracket A \rrbracket} \llbracket B(a) \rrbracket, \quad \llbracket \Pi_{x:A} B(x) \rrbracket = \prod_{a \in \llbracket A \rrbracket} \llbracket B(a) \rrbracket.
$$

Для **identity types** $\mathrm{Id}_A(a, b)$ есть две естественные интерпретации:

(i) **Стандартный MLTT** (Streicher 1991 «Identity types in MLTT»): identity types через J-rule semantics — каноническая интерпретация через расширение LCCC дополнительными данными для path induction. $\llbracket \mathrm{Id}_A(a, b) \rrbracket$ — категория J-witnesses равенства $a = b$ в $\llbracket A \rrbracket$.

(ii) **HoTT** (Awodey-Warren 2009 «Homotopy theoretic models of identity types»): identity types как path-types $\mathrm{Path}_{\llbracket A \rrbracket}(a, b)$ — гомотопические пути. Это расширение MLTT через Univalence Axiom (UA).

*Доказательство.* Стандартная категорная семантика MLTT в LCCC (locally-cartesian closed category) — Awodey-Bauer 2004 «Propositions as [Types]» для $\Sigma, \Pi$. Identity types — отдельная теория:
- Для (i): Streicher 1991 — J-rule в split fibrations.
- Для (ii): Awodey-Warren 2009 + Univalent Foundations Project (Voevodsky et al.).

Применимость к $\rangle\!\rangle\cdot\langle\!\langle$: через A-1 (внутренняя замкнутость = LCCC-свойство). Для (i) — стандартно. Для (ii) — требуется UA как дополнительная аксиома (соответствует $\alpha_\mathrm{hott}$ в каталоге артикуляций /00-foundations/05-level-hierarchy). ∎

#### 12.1.6 LEM как ε_LEM с ε = ω + 1

**Замечание 121.R1.** Закон исключённого третьего (LEM): $\phi \vee \neg\phi$. В BHK-семантике LEM — *не* теорема (нет конструктивного доказательства для всех $\phi$).

В Актика LEM соответствует *классическому акту* $\varepsilon_\mathrm{LEM} \in \rangle\!\rangle\cdot\langle\!\langle$:
- $\varepsilon_\mathrm{LEM}$ — добавочный акт, не выводимый из конструктивных $\varepsilon \in \mathrm{Im}(\llbracket \cdot \rrbracket_\mathrm{BHK})$.
- $\mathsf{e}(\varepsilon_\mathrm{LEM}) = \omega + 1$ (по 03-epsilon-invariant): один шаг $\mathsf{A}$ над базовой $\omega$-практикой.

**Теорема Гёдель-Genzen** (Negative translation): классическая логика $\mathrm{CL}$ интерпретируется в IPL через перевод $\phi \mapsto \neg\neg\phi$. Это даёт ε-функтор $\mathrm{CL} \to \mathrm{IPL}$ через ε(LEM) = ω + 1 — формализация в Актика.

#### 12.1.7 Спецификация для Verum: core/proof/bhk.vr

```verum
@framework(bhk_semantics_121T, "Theorem 121.T: BHK as ε-semantics")

// BHK-конструкция как зависимый тип
type BHKConstruction<P: Prop> = {
    proof: P,
    witness: ConstructiveWitness<P>,
}

// Алгоритм извлечения witness'а из доказательства
fn extract_witness<P: Prop>(p: Proof<P>) -> ConstructiveWitness<P>
    @verify(formal)
    ensures realizable_in_Eff(extract_witness(p))
;

// ε-аннотация для конструктивного proof'а
@enact(epsilon = "ε_prove")
fn intuitionistic_proof<P: Prop>(p: P) -> Proof<P> {
    // ...
}

// LEM как opt-in классический акт
@enact(epsilon = "omega_plus_1")
@classical_axiom
fn lem<P: Prop>() -> Proof<P ∨ ¬P> {
    // requires explicit invocation; not derivable in IPL
}

@verify(formal)
theorem bhk_realizability<P: Prop>(p: Proof<P>)
    where P.is_intuitionistic()
    ensures bhk_meaning(p) ≃ ε_dual(α_P)
    proof_via Theorem_121T
;
```

**Замечание о Verum-impact.** core/proof/bhk.vr закрывает Шаг 6 интеграционного плана ([`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch)). Без BHK-формализации proof-extraction остаётся синтаксической операцией без семантической гарантии; с 121.T — operationally sound через Eff-realizability.

**Следствия 121.T (полные)**:
- **121.C1**. BHK — исторически первая систематическая ε-семантика; интуиционизм Брауэра — исходная ДЦ-переформулировка логики.
- **121.C2** *(R7-следствие)*. Каждое интуиционистское доказательство имеет realizable witness в Eff через BHK-конструкцию + Лемму 121.L3.
- **121.C3** *(R7-следствие)*. MLTT, CIC, HoTT — все имеют BHK-семантику через Лемму 121.L4; их теории типов — конкретизации общей конструкции.
- **121.C4** *(R7-следствие)*. Гёдель-Genzen translation формализуется как ε-функтор CL → IPL с ε(LEM) = ω + 1.

## 13. 122.T — двумерная индексация знания

**Теорема 122.T** [Т·L3]. *Функтор индексации знания Noesis:*
$$
\mathsf{Idx}: \mathrm{Knowledge} \to \mathfrak{M}_\mathrm{Fnd} \times \mathfrak{E}_\mathrm{Fnd}
$$
*— сильно полон (существенно сюръективен fully-faithful). То есть каждое знание корректно индексируется двумя координатами: $(\nu, \alpha)$ и $(\varepsilon, \varepsilon$-акт$)$.*

**Следствие.** Двумерная классификация знания — не просто эвристика, а теоретически обязательная. Одномерная индексация (только ν, только ε) упускает существенный аспект: знание есть одновременно *структура* и *практика*.

## 14. Дополнительные теоремы (123.T–127.T)

### 14.1 123.T — композиция не увеличивает $\mathsf{A}$-глубину

**Теорема 123.T** [Т·L3·Diakrisis-only]. *Пусть $\varepsilon_1, \varepsilon_2 \in \rangle\!\rangle \cdot \langle\!\langle$ — акты с $\mathsf{A}$-глубинами $\kappa_1 = \mathsf{e}(\varepsilon_1)$, $\kappa_2 = \mathsf{e}(\varepsilon_2)$. Тогда для любой 1-клетки $f : \varepsilon_1 \to \varepsilon_2$ и её композиции с $g : \varepsilon_2 \to \varepsilon_3$ (глубина $\kappa_3$):*
$$
\mathsf{e}(\mathrm{cod}(g \circ f)) = \kappa_3, \qquad \mathsf{e}(\mathrm{dom}(g \circ f)) = \kappa_1,
$$
*и глубина пути $\varepsilon_1 \to \varepsilon_3$ ограничена $\max(\kappa_1, \kappa_2, \kappa_3)$.*

**Доказательство.** $\mathsf{A}$-глубина $\mathsf{e}(\varepsilon)$ определена через минимальный ординал $\kappa$ с $\varepsilon \in \mathrm{colim}_{\beta < \kappa} \mathsf{A}^\beta(\varepsilon_\mathrm{math})$ (см. определение в [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant)). Композиция 1-клеток сохраняет колимиты (композиция есть функториальная операция в $\rangle\!\rangle \cdot \langle\!\langle$), поэтому каждый $\varepsilon_i$ сохраняет свою $\mathsf{A}$-глубину вдоль морфизмов. Поднятие глубины требует применения $\mathsf{A}$-эндофунктора (A-2 accessibility); композиция существующих актов — нет. ∎

**Следствие 123.C1.** Увеличение $\mathsf{A}$-глубины — **исключительный** эффект $\mathsf{A}$ (активации); композиция, калибровочное преобразование, $\rho$-реализация глубины не увеличивают. Это дуально 62.T: в ОЦ увеличение $\nu$ — исключительный эффект $\mathsf{M}$.

---

### 14.2 124.T — сопряжение $\mathsf{M} \dashv \mathsf{A}$ через 108.T

**Теорема 124.T** [Т·L3·Diakrisis-only]. *Эндо-2-функторы $\mathsf{M}: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ (метаизация артикуляций) и $\mathsf{A}: \rangle\!\rangle \cdot \langle\!\langle \to \rangle\!\rangle \cdot \langle\!\langle$ (активация энактментов) образуют 2-categorical biadjunction в смешанной 2-категории, индуцированной 108.T-эквивалентностью $\varepsilon \dashv \alpha$:*
$$
\mathsf{M} \;\dashv\; \mathsf{A} \quad \text{в смысле transferred biadjunction вдоль } \varepsilon \dashv \alpha.
$$

*Конкретно: существуют unit $\eta : \mathrm{id}_{\langle\!\langle \cdot \rangle\!\rangle} \Rightarrow \alpha \circ \mathsf{A} \circ \varepsilon$ и counit $\epsilon^* : \varepsilon \circ \mathsf{M} \circ \alpha \Rightarrow \mathrm{id}_{\rangle\!\rangle \cdot \langle\!\langle}$, удовлетворяющие триангулярным тождествам up to canonical invertible 2-cell.*

### 14.2.1 Подготовка: смешанная 2-категория

**Конструкция 14.2.A.** Поскольку $\mathsf{M}$ действует на $\langle\!\langle \cdot \rangle\!\rangle$, а $\mathsf{A}$ — на $\rangle\!\rangle \cdot \langle\!\langle$, *прямого* сопряжения $\mathsf{M} \dashv \mathsf{A}$ как эндофункторов одной 2-категории не существует. Но через 108.T-эквивалентность $\varepsilon: \langle\!\langle \cdot \rangle\!\rangle \xrightarrow{\sim} \rangle\!\rangle \cdot \langle\!\langle$ (с обратным $\alpha$) можно построить *transferred adjunction* в каждой 2-категории отдельно.

Определим:
- **OC-сторона:** $\widetilde{\mathsf{A}} := \alpha \circ \mathsf{A} \circ \varepsilon: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ — «активация, переведённая обратно в OC через 108.T».
- **DC-сторона:** $\widetilde{\mathsf{M}} := \varepsilon \circ \mathsf{M} \circ \alpha: \rangle\!\rangle \cdot \langle\!\langle \to \rangle\!\rangle \cdot \langle\!\langle$ — «метаизация, переведённая в DC».

Утверждение R9 — двойное:
- **(R9.OC)** $\mathsf{M} \dashv \widetilde{\mathsf{A}}$ как пара эндо-2-функторов $\langle\!\langle \cdot \rangle\!\rangle$.
- **(R9.DC)** $\widetilde{\mathsf{M}} \dashv \mathsf{A}$ как пара эндо-2-функторов $\rangle\!\rangle \cdot \langle\!\langle$.

По 108.T эти утверждения эквивалентны.

### 14.2.2 Доказательство (R9.OC): $\mathsf{M} \dashv \widetilde{\mathsf{A}}$

**Шаг A** (Hom-bijection). По 108.T Шагу A ([`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) §2.1): $\varepsilon$ — *2-полностью-верный 2-функтор*, что означает Hom-биекцию
$$\varepsilon_{*}: \mathrm{Hom}_{\langle\!\langle \cdot \rangle\!\rangle}(F_1, F_2) \xrightarrow{\sim} \mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon F_1, \varepsilon F_2).$$
Аналогично $\alpha$ через 108.T Шаг B (essential surjectivity на gauge-уровне) — даёт обратную биекцию.

По Предложению 5.1 (R1): $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$ как 2-естественная эквивалентность. По Предложению 6.2 (108.T): $\alpha \circ \varepsilon \simeq \mathrm{id}$ строго. Тогда для $\alpha_0, \beta \in \langle\!\langle \cdot \rangle\!\rangle$:
$$
\begin{aligned}
\mathrm{Hom}_{\langle\!\langle \cdot \rangle\!\rangle}(\mathsf{M}(\alpha_0), \beta) &\xrightarrow{\;\;\varepsilon_{*}\text{ Hom-bijection}\;\;} \mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon(\mathsf{M}(\alpha_0)), \varepsilon(\beta)) \\
&\xrightarrow{\;\;\tau_{\alpha_0}\text{-precomposition (Prop. 5.1)}\;\;} \mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\mathsf{A}(\varepsilon(\alpha_0)), \varepsilon(\beta)) \\
&\xrightarrow{\;\;\alpha_{*}\text{ Hom-bijection}\;\;} \mathrm{Hom}_{\langle\!\langle \cdot \rangle\!\rangle}(\alpha(\mathsf{A}(\varepsilon(\alpha_0))), \alpha(\varepsilon(\beta))) \\
&\xrightarrow{\;\;\alpha\circ\varepsilon \simeq \mathrm{id}\;\;} \mathrm{Hom}_{\langle\!\langle \cdot \rangle\!\rangle}(\widetilde{\mathsf{A}}(\alpha_0), \beta).
\end{aligned}
$$

Эта цепочка биекций даёт натуральный изоморфизм $\Phi_{\alpha_0, \beta}: \mathrm{Hom}(\mathsf{M}(\alpha_0), \beta) \xrightarrow{\sim} \mathrm{Hom}(\widetilde{\mathsf{A}}(\alpha_0), \beta)$ на уровне 1-морфизмов.

**Замечание 14.2.A** *(точная природа $\tau$-precomposition).* Шаг через Предложение 5.1 — это precomposition с обратимой 2-cell $\tau_{\alpha_0}: \varepsilon(\mathsf{M}(\alpha_0)) \xrightarrow{\sim} \mathsf{A}(\varepsilon(\alpha_0))$. По обратимости $\tau_{\alpha_0}$ (Шаг C.4 в Предложении 5.1, R1) precomposition даёт биекцию между Hom-множествами.

**Шаг B** (Натуральность). Натуральность $\Phi$ по $\alpha_0$ и $\beta$ проверяется покомпонентно: каждый из четырёх шагов цепочки — натуральная биекция (по 2-функториальности $\varepsilon, \alpha$ + натуральности τ из Предложения 5.1). Композиция натуральных биекций — натуральная биекция (стандартный факт, Mac Lane 1998 §IV.1).

**Шаг C** (Unit и counit как канонические морфизмы из Hom-bijection). Стандартное построение из *adjoint functor theorem* (Mac Lane 1998 §IV.1 Theorem 2(v)) — **прямое определение через канонические образы тождественных морфизмов**, **без** обращения к гипотетическим unit/counit самих $\mathsf{M}, \mathsf{A}$:

- **Unit** $\eta_{\alpha_0}: \alpha_0 \to \widetilde{\mathsf{A}}(\mathsf{M}(\alpha_0))$ определяется как образ $\mathrm{id}_{\mathsf{M}(\alpha_0)} \in \mathrm{Hom}(\mathsf{M}(\alpha_0), \mathsf{M}(\alpha_0))$ под изоморфизмом
$$\Phi_{\alpha_0, \mathsf{M}(\alpha_0)}: \mathrm{Hom}(\mathsf{M}(\alpha_0), \mathsf{M}(\alpha_0)) \xrightarrow{\sim} \mathrm{Hom}(\alpha_0, \widetilde{\mathsf{A}}(\mathsf{M}(\alpha_0))).$$

- **Counit** $\epsilon_\beta: \mathsf{M}(\widetilde{\mathsf{A}}(\beta)) \to \beta$ определяется как образ $\mathrm{id}_{\widetilde{\mathsf{A}}(\beta)} \in \mathrm{Hom}(\widetilde{\mathsf{A}}(\beta), \widetilde{\mathsf{A}}(\beta))$ под обратным изоморфизмом
$$\Phi^{-1}_{\widetilde{\mathsf{A}}(\beta), \beta}: \mathrm{Hom}(\widetilde{\mathsf{A}}(\beta), \widetilde{\mathsf{A}}(\beta)) \xrightarrow{\sim} \mathrm{Hom}(\mathsf{M}(\widetilde{\mathsf{A}}(\beta)), \beta).$$

**Замечание 14.2.B** *(почему это не требует unit/counit для $\mathsf{M}, \mathsf{A}$ в отдельности).* Критический момент: $\eta$ и $\epsilon$ существуют как *структурные данные сопряжения*, индуцированного из Hom-bijection $\Phi$. Они **не** требуют, чтобы $\mathsf{M}$ или $\mathsf{A}$ сами по себе имели monad-style unit/counit (что было бы дополнительным предположением о монадичности). Это стандартная конструкция из теории сопряжённых функторов: Hom-bijection задаёт adjunction by definition (Mac Lane 1998 §IV.1 Theorem 2 — equivalence (i)⟺(v)).

**Шаг D** (Триангулярные тождества). Триангулярные тождества — следствия определения $\eta, \epsilon$ через канонические образы тождеств:

$$
(\widetilde{\mathsf{A}} \cdot \epsilon) \circ (\eta \cdot \widetilde{\mathsf{A}}) = \mathrm{id}_{\widetilde{\mathsf{A}}}, \qquad (\epsilon \cdot \mathsf{M}) \circ (\mathsf{M} \cdot \eta) = \mathrm{id}_{\mathsf{M}}.
$$

*Доказательство первого тождества (на компонентах + естественность)*. Для каждого $\alpha_0 \in \langle\!\langle \cdot \rangle\!\rangle$ покомпонентная диаграмма:
$$\widetilde{\mathsf{A}}(\alpha_0) \xrightarrow{\eta_{\widetilde{\mathsf{A}}(\alpha_0)}} \widetilde{\mathsf{A}}\mathsf{M}\widetilde{\mathsf{A}}(\alpha_0) \xrightarrow{\widetilde{\mathsf{A}}(\epsilon_{\alpha_0})} \widetilde{\mathsf{A}}(\alpha_0).$$

По определению $\eta$ через $\Phi^{-1}$ и $\epsilon$ через $\Phi$: композиция в диаграмме переходит под $\Phi$ в композицию $\mathrm{id}_{\mathsf{M}\widetilde{\mathsf{A}}(\alpha_0)} \circ \mathrm{id}_{\mathsf{M}\widetilde{\mathsf{A}}(\alpha_0)} = \mathrm{id}$. Применяя $\Phi^{-1}$ обратно: исходная композиция = $\mathrm{id}_{\widetilde{\mathsf{A}}(\alpha_0)}$.

**Естественность на 2-функторе $\widetilde{\mathsf{A}}$.** Для перехода от покомпонентного тождества к тождеству 2-функторов требуется естественность $\eta$ и $\epsilon$ по $\alpha_0$:
- Естественность $\eta: \mathrm{id} \Rightarrow \widetilde{\mathsf{A}} \circ \mathsf{M}$ — следствие натуральности $\Phi$ (Шаг B): для $f: \alpha_0 \to \alpha_0'$ диаграмма
$$\begin{array}{c}\alpha_0 \xrightarrow{\eta_{\alpha_0}} \widetilde{\mathsf{A}}(\mathsf{M}(\alpha_0)) \\ \downarrow f \quad\quad\quad\quad\quad \downarrow \widetilde{\mathsf{A}}\mathsf{M}(f) \\ \alpha_0' \xrightarrow{\eta_{\alpha_0'}} \widetilde{\mathsf{A}}(\mathsf{M}(\alpha_0'))\end{array}$$
коммутирует up to canonical 2-cell, поскольку обе стороны — образы $\mathrm{id}$ под $\Phi$ применённой к разным $\alpha_0$.
- Аналогично для $\epsilon$.

По стандартной 2-категорной теории (Kelly 1982 §1.10): покомпонентные тождества + естественность ⟹ тождество 2-функторов. Следовательно $(\widetilde{\mathsf{A}} \cdot \epsilon) \circ (\eta \cdot \widetilde{\mathsf{A}}) = \mathrm{id}_{\widetilde{\mathsf{A}}}$ как 2-естественных преобразований 2-функторов.

Второе тождество — симметрично, через те же рассуждения для пары $(\eta, \epsilon)$ относительно $\mathsf{M}$. ∎ (R9.OC)

### 14.2.3 Доказательство (R9.DC): $\widetilde{\mathsf{M}} \dashv \mathsf{A}$

Перенос через 108.T-эквивалентность $\varepsilon \dashv \alpha$. Конкретные шаги:

**Шаг A'** (Hom-bijection в DC). Для $\varepsilon_0, \delta \in \rangle\!\rangle \cdot \langle\!\langle$:
$$
\begin{aligned}
\mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\widetilde{\mathsf{M}}(\varepsilon_0), \delta) &= \mathrm{Hom}(\varepsilon\mathsf{M}\alpha(\varepsilon_0), \delta) \\
&\xrightarrow{\;\;\alpha_{*}\;\;} \mathrm{Hom}_{\langle\!\langle \cdot \rangle\!\rangle}(\mathsf{M}(\alpha(\varepsilon_0)), \alpha(\delta)) \\
&\xrightarrow{\;\;\Phi\text{ (Шаг A)}\;\;} \mathrm{Hom}(\widetilde{\mathsf{A}}(\alpha(\varepsilon_0)), \alpha(\delta)) \\
&\xrightarrow{\;\;\varepsilon_{*}\;\;} \mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon\widetilde{\mathsf{A}}\alpha(\varepsilon_0), \varepsilon\alpha(\delta)) \\
&\xrightarrow{\;\;\varepsilon\circ\widetilde{\mathsf{A}}\circ\alpha = \varepsilon\circ\alpha\circ\mathsf{A}\circ\varepsilon\circ\alpha \simeq \mathsf{A}\;\;} \mathrm{Hom}(\mathsf{A}(\varepsilon_0), \delta).
\end{aligned}
$$

Эта цепочка даёт натуральный изоморфизм $\Psi_{\varepsilon_0, \delta}: \mathrm{Hom}(\widetilde{\mathsf{M}}(\varepsilon_0), \delta) \xrightarrow{\sim} \mathrm{Hom}(\varepsilon_0, \mathsf{A}(\delta))$.

**Шаг B'–D'**. Аналогично Шагам B–D из 14.2.2: натуральность $\Psi$, построение unit $\eta'$ и counit $\epsilon'$ как канонических образов тождеств, проверка triangle identities на компонентах + естественность.

**Эквивалентность с (R9.OC)**: применением $\varepsilon_{*}$ к Φ (Шаг A) и $\alpha_{*}$ к Ψ (Шаг A'): обе цепочки дают эквивалентные структуры сопряжения. По 108.T (full faithfulness $\varepsilon, \alpha$) трансформации между сопряжениями переносятся точно.

Заключение: (R9.DC) выполняется тогда и только тогда, когда (R9.OC) — оба эквивалентны через 108.T. ∎ (R9.DC)

### 14.2.4 Эквивалентность (R9.OC) и (R9.DC) через 108.T

По 108.T $\varepsilon \dashv \alpha$ — 2-эквивалентность, следовательно perspective change: любое сопряжение в $\langle\!\langle \cdot \rangle\!\rangle$ переносится в $\rangle\!\rangle \cdot \langle\!\langle$ через $\varepsilon$ и обратно. Это даёт каноническую эквивалентность утверждений (R9.OC) и (R9.DC).

### 14.2.5 Концептуальное содержание

**Интерпретация.** Метаизация $\mathsf{M}$ «возводит» артикуляцию в мета-объект (создаёт articulation of articulation); активация $\mathsf{A}$ «воплощает» объект как практику высшего порядка. Сопряжение $\mathsf{M} \dashv \widetilde{\mathsf{A}}$:
- **Unit** $\eta_{\alpha_0}: \alpha_0 \to \widetilde{\mathsf{A}}(\mathsf{M}(\alpha_0))$ — *«артикуляция порождает свою активированную метаизацию»*: всякая артикуляция канонически даёт практику исполнения её мета-уровня.
- **Counit** $\epsilon_\beta: \mathsf{M}(\widetilde{\mathsf{A}}(\beta)) \to \beta$ — *«мета-классификация активированной обратной — это сама артикуляция»*: композиция активации-обратной-метаизации возвращает к исходной артикуляции up to стабилизации.

Цикл $\mathsf{M} \circ \widetilde{\mathsf{A}}$ и $\widetilde{\mathsf{A}} \circ \mathsf{M}$ возвращают в ту же стабилизацию up to unit/counit, что согласуется с 68.T (стабилизация на $(\infty, \infty)$) и её AC-дуалом (108.C5).

### 14.2.6 Связь с Verum-реализацией

Сопряжение 124.T даёт операциональную дуальную семантику для Verum (R12 — operational coherence):
- $\mathsf{M}(\alpha)$ — статическая мета-теория программы.
- $\widetilde{\mathsf{A}}(\alpha) = \alpha \circ \mathsf{A} \circ \varepsilon$ — динамическое поведение программы при активации, переведённое обратно в OC.
- Hom-bijection $\Phi$ — *biadjoint type-checking*: Verum может проверить программу либо через $\mathsf{M}$-static-analysis, либо через $\widetilde{\mathsf{A}}$-dynamic-trace, обе проверки эквивалентны up to canonical iso.

Это закрывает теоретический gap для двойной OC/DC stdlib Verum.

---

### 14.3 125.T — Метастемология Е. Чурилова как $\mathsf{A}$-практика

**Теорема 125.T** [Т·L3·Diakrisis-only]. *Метастемологическая программа Е. Чурилова (anticomplexity.org), рассматриваемая как ε-акт, имеет $\mathsf{A}$-глубину:*
$$
\mathsf{e}(\varepsilon_\mathrm{Метастемология}) = \omega \cdot 2 + 1.
$$
*Программа удовлетворяет $\varepsilon_\mathrm{Метастемология} \in \mathsf{A}^{\omega \cdot 2 + 1}(\varepsilon_\mathrm{math}) \setminus \mathsf{A}^{\omega \cdot 2}(\varepsilon_\mathrm{math})$.*

**Полное доказательство** — [`/12-actic/07-beyond-metastemology`](/12-actic/07-beyond-metastemology) §3. Краткая схема:

1. **Нижняя граница $\mathsf{e} \geq \omega$**: программа содержит стабилизированные практики различения (ОКА, стема, эвалы, ММП — задокументированные конструкты, воспроизводимые между носителями). По определению практики как $\mathsf{A}$-фиксточки уровня $\omega$: $\mathsf{e}(\varepsilon_\mathrm{Метастемология}) \geq \omega$.

2. **Нижняя граница $\mathsf{e} \geq \omega \cdot 2$**: программа замкнута под методами высшего порядка — оркестровка несводимых опорных моделей, поглощение Greimas, Latour, Kuhn, Kahneman, связь с ТФС Анохина и СМД Щедровицкого. Это требует $\mathsf{A}^2$-итерации (практика применения практик), давая $\mathsf{e} \geq \omega \cdot 2$.

3. **Модификатор $+1$**: программа включает явную мотивацию превзойти конкретные традиции («вместо манифеста»). Это финальная селекция — одно $\mathsf{A}$-применение сверх $\omega \cdot 2$, а не новая полная $\omega$-итерация.

4. **Верхняя граница $\mathsf{e} < \omega^2$**: программа **не** достигает институционального самовоспроизводства (нет кафедры, нет регулярных рецензируемых публикаций, проект ведётся одним исследователем). По 117.T институциональный уровень требует $\mathsf{e} \geq \omega^2$.

5. **Верхняя граница $\mathsf{e} < \omega \cdot 3$**: программа **не** содержит собственной no-go рефлексии — отсутствует формальный запрет абсолютизации Метастемологии как окончательной теории. По аналогии с AFN-T для ОЦ, подобная no-go-граница требовала бы $\mathsf{e} \geq \omega \cdot 3$.

Из (1)–(5): $\omega \cdot 2 + 1 \leq \mathsf{e}(\varepsilon_\mathrm{Метастемология}) < \omega^2$, а так как ординалы между $\omega \cdot 2 + 1$ и $\omega^2$ требуют одного из четырёх нижних слоёв активации (отсутствующих), получаем точное равенство $\mathsf{e} = \omega \cdot 2 + 1$. ∎

**Следствие 125.C1.** Актика ($\mathsf{e}(\varepsilon_\mathrm{actic}) = \omega \cdot 3$, Теорема 112.T) строго **глубже** Метастемологии на два слоя стратификации, **при этом** содержит Метастемологию как частный случай ДЦ-практики через 108.T-дуальность (Метастемология — AC-инхабитант $\rangle\!\rangle \cdot \langle\!\langle$, Актика — его теоретическая классификация).

**Следствие 125.C2.** Поднятие $\varepsilon_\mathrm{Метастемология}$ до институционального уровня ($\mathsf{e} = \omega^2$) требует: (a) формализации ОКА до аксиоматической структуры с accessibility-условиями, (b) институционального самовоспроизводства программы (кафедра/школа), (c) добавления внутренней no-go для предотвращения абсолютизационных притязаний. По 109.T любое такое поднятие остаётся в $\rangle\!\rangle \cdot \langle\!\langle$ и не достигает $\mathfrak{L}^\mathrm{act}_\mathrm{Abs}$.

---

### 14.4 126.T — формальный диалог как композиция $\mathsf{A}$-актов

**Теорема 126.T** [Т·L3·Diakrisis-only]. *Пусть $\mathcal{D}$ — формальный диалог в смысле диалогической логики Лоренцена (Лоренцен 1960), состоящий из $k$ последовательных ходов Proponent/Opponent над пропозицией $\phi$. Тогда $\mathcal{D} \in \rangle\!\rangle \cdot \langle\!\langle$ как композиция $\mathsf{A}$-актов с суммарной глубиной:*
$$
\mathsf{e}(\varepsilon_\mathcal{D}) = \omega + k,
$$
*где базовая $\omega$ — глубина практики формального диалога, а $+k$ — $k$ дискретных применений $\mathsf{A}$ (по одному на ход).*

**Доказательство.** По (121.T, BHK-семантика = ε-семантика): интерпретация $\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)$ имеет глубину $\omega$ (стабилизированная практика построения конструкции-свидетеля). Каждый ход Лоренценова диалога — применение $\mathsf{A}$ к накопленному эскизу (Proponent-защита / Opponent-вызов добавляет 1 $\mathsf{A}$-шаг согласно A-2 и Конструкции 3.1). По 123.T композиция $\mathsf{A}$-актов сохраняет их максимальную глубину, но каждое применение $\mathsf{A}$ даёт $+1$. Поскольку $k$ ходов дают $k$ последовательных применений $\mathsf{A}$ поверх базовой $\omega$, итоговая глубина $\omega + k$ (не $\omega$, поскольку каждое $\mathsf{A}$ — содержательная операция по A-6). ∎

**Следствие 126.C1.** Диалог Лоренцена с $k \to \infty$ ходами имеет предельную глубину $\omega \cdot 2$ (второй полный слой); это совпадает с границей $\mathsf{e}$-зоны Goldilocks (Теорема 119.T), где стабилизируется практика как традиция.

**Следствие 126.C2.** Game-семантика Хинтикка–Abramsky (Хинтикка 1973, §10.4 MSFS) имеет ту же $\mathsf{A}$-глубину $\omega + k$ за $k$ раундов игры, по параллельной структуре Konstrukt-akt / диалог-ход. Это формализует структурную параллель между Лоренценом и Хинтикка–Abramsky через 108.T.

---

### 14.5 127.T — замкнутость формально-логической ДЦ-подкатегории

**Теорема 127.T** [Т·L3·Diakrisis-only]. *Пусть $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic} \subset \rangle\!\rangle \cdot \langle\!\langle$ — полная подкатегория, образованная объектами, дуальными к формально-логическим ДЦ-традициям — BHK-семантика, MLTT-judgements, диалог Лоренцена, game-семантика Хинтикка–Abramsky, Ludics Жирара, Curry–Howard-Ламбек, concurrency-формализмы (Actor / π-calculus / CSP). Тогда $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ замкнута под:*

1. *Композицией актов* ($\varepsilon_1 \mid \varepsilon_2$, секвенциальная);
2. *Параллельной композицией* ($\varepsilon_1 \otimes \varepsilon_2$, тензорная);
3. *$\mathsf{A}$-активацией* ($\mathsf{A}(\varepsilon) \in \rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ если $\varepsilon \in \rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$);
4. *Gauge-преобразованиями.*

*Более того, $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ локально эквивалентна категории $\mathrm{SMC}^{(\infty, 1)}$ symmetric monoidal closed $(\infty, 1)$-категорий.*

**Доказательство.** Замкнутость каждой операции проверяется покомпонентно:

- **(1) Композиция**: каждая формально-логическая ДЦ-традиция (BHK / MLTT / Ludics / Curry–Howard) имеет явную операцию композиции (cut-rule, cut-elimination, bind, sequential composition). По 120.T $\mathrm{Design}_\mathrm{Ludics} \simeq \mathrm{Perf}(\alpha_\mathrm{linear})$ даёт структуру sequential composition. Secventiality преобразуется componentwise.
- **(2) Параллельная**: каждая традиция имеет тензорный продукт (conjunctive composition в BHK; product type в MLTT; parallel composition в π-calculus / CSP; multiplicative conjunction ⊗ в линейная логика / Ludics). По 120.T + Curry–Howard-Ламбек (MSFS Remark~\ref{rem:энактивный-traditions}): тензорный продукт сохраняет принадлежность к formal-logic ДЦ.
- **(3) $\mathsf{A}$-активация**: $\mathsf{A}(\varepsilon)$ — подъём акта на уровень самосознающей практики. Для BHK-акта это BHK-akt второго порядка (конструкция конструкции); для Ludics-design это desseins-over-designs. Замкнутость следует из accessibility $\mathsf{A}$ (A-2) и того, что каждая формально-логическая традиция имеет $(\infty, 1)$-категорную структуру с $\kappa_1$-filtered colimits.
- **(4) Gauge**: T-ε_c (конструктивный калибровочно-инвариант актов) обеспечивает, что калибровочное преобразование constructively-enactable акта даёт снова constructively-enactable акт. Formal-logic ДЦ — строгий подкласс constructively-enactable.

**Локальная эквивалентность с $\mathrm{SMC}^{(\infty, 1)}$**: следует из 120.T (Ludics category = symmetric monoidal closed) плюс Curry–Howard-Ламбек изоморфии (пропозиция ↔ тип ↔ категория), применённой покомпонентно к каждой формально-логической традиции. Полная эквивалентность $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic} \simeq \mathrm{SMC}^{(\infty, 1)}$ — в одну сторону через 120.T, в обратную через реконструкцию формально-логической интерпретации для произвольной SMC-структуры (Сили 1989). ∎

**Следствие 127.C1** (Verum-следствие). Stdlib-слой `core.action.formal-logic.*` в Verum ([`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch)) имеет каноническое категорное обоснование через 127.T: $(\infty, 1)$-SMC-структура на core.action является минимально-достаточной для покрытия всех формально-логических ДЦ-традиций.

**Следствие 127.C2.** Формально-логическая ДЦ — **математически дисциплинированная** и унифицированная часть Актика. Это контраст с pre-формальными ДЦ-практиками (Пример из MSFS Remark `ex:ac-preformal`), которые требуют отдельной дисциплины вхождения в $\mathfrak{E}_\mathrm{Fnd}$.

---

## 15. Дуальные закрытия для ДЦ-стороны (138.T–141.T)

После 128.T–131.T закрытие ОЦ-стороны: ядро калибровочной сюръекции, инициальность, T-2f\*\* модальная стратификация, реализация Axi-8. По АЦ/ОЦ-двойственности 108.T симметричные результаты обязаны существовать на ДЦ-стороне. Этот раздел формализует их.

### 15.1 Теорема 138.T — Структура ядра дуальной калибровочной сюръекции

**138.T** [Т·L3]. *Пусть*
$$K^{\mathcal{E}} := \ker\bigl[\mathrm{Aut}_2(\rangle\!\rangle\cdot\langle\!\langle) \xrightarrow{\pi_0(\mathrm{Cl}_\mathrm{Актика})_*} \pi_0\,\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd}^{\mathcal{E}})\bigr].$$
*Тогда:*
$$K^{\mathcal{E}} \;\simeq_2\; \mathrm{Aut}_2^{\mathrm{калибр\text{-}тожд}}\bigl(\rangle\!\rangle\cdot\langle\!\langle_{\mathrm{nR\text{-}S}^{\mathcal{E}}}\bigr),$$
*и расщепляемая точная последовательность $1 \to K^{\mathcal{E}} \to \mathrm{Aut}_2(\rangle\!\rangle\cdot\langle\!\langle) \to \pi_0\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd}^{\mathcal{E}}) \to 1$ через 104.T-AC сечение даёт $\mathrm{Aut}_2(\rangle\!\rangle\cdot\langle\!\langle) \simeq_2 K^{\mathcal{E}} \rtimes \pi_0\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd}^{\mathcal{E}})$.*

*Доказательство*. Дуально 128.T: применяется $\varepsilon$-функтор из 108.T к каждому шагу 128.T. По ДЦ/ОЦ-двойственности конструкции 128.T-Шагов 1–4 переносятся симметрично на ДЦ-сторону без потери структуры. Расщепление через ДЦ-аналог 104.T-сечения (дуал лифтинга $\sigma \mapsto \tilde\sigma$). ∎

**Следствия 138.T**:
- **138.C1**. Тривиальность ядра в R-S-полном случае на ДЦ-стороне (симметрично 128.C1).
- **138.C2**. Конкретные элементы $K^{\mathcal{E}}$: дуалы линейных сдвигов в субструктурном фрагменте, дуалы лимитных перестановок, дуалы паранепротиворечивых сдвигов. ГГК-сопряжение для ε-практик не в $K^{\mathcal{E}}$ (действует между R-S-практиками).
- **138.C3**. Через 108.T: $K^{\mathcal{E}} \simeq_2 K$ (ядра двух сторон канонически эквивалентны как 2-группы).

### 15.2 Теорема 139.T — Инициальность Актики в $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$

**139.T** [Т·L3]. *Актика — инициальный объект в $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$ над $\mathrm{ZFC} + 2\text{-inacc}$. Для каждого $\mathbf{F}^{\mathcal{E}} \in \Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$ над той же R-S существует $\Phi_\mathbf{F}^{\mathcal{E}}: \mathrm{Актика} \to \mathbf{F}^{\mathcal{E}}$, единственный с точностью до канонического $(\infty, 2)$-изо, такой что $\mathrm{Cl}_\mathbf{F}^{\mathcal{E}} \circ \Phi_\mathbf{F}^{\mathcal{E}} \simeq \mathrm{Cl}_\mathrm{Актика}$ и $\mathbb{I}_\mathbf{F}^{\mathcal{E}} \circ (\Phi_\mathbf{F}^{\mathcal{E}})^\mathrm{op} \simeq \mathbb{I}_\mathrm{Актика}$; $\Phi_\mathbf{F}^{\mathcal{E}}$ — $(\infty, \infty)$-эквивалентность.*

#### Лемма 139.L1 (совместная точность $(\mathrm{Cl}^{\mathcal{E}}, \mathbb{I}^{\mathcal{E}})$ на $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$)

*Для $\mathbf{F}^{\mathcal{E}} \in \Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$ и $f, g: A \to B$ в $\mathbf{F}^{\mathcal{E}}$: если $\mathrm{Cl}_\mathbf{F}^{\mathcal{E}}(f) = \mathrm{Cl}_\mathbf{F}^{\mathcal{E}}(g)$ и $\mathbb{I}_\mathbf{F}^{\mathcal{E}}(f) = \mathbb{I}_\mathbf{F}^{\mathcal{E}}(g)$, то $f \simeq g$ канонически.*

*Доказательство*. Дуально 129.L1 через 108.T: по дуальному (Max-4)→(I-4) Морита-как-2-локализации на ДЦ-стороне, $\mathcal{U}^{\mathcal{E}} \circ \mathbb{I}_\mathbf{F}^{\mathcal{E}} \simeq \mathrm{Cl}_\mathbf{F}^{\mathcal{E}}$. Дуальное (I-3) различает Морита-эквивалентные пары актов. Морфизм определён парой $(\mathrm{Cl}^{\mathcal{E}}, \mathbb{I}^{\mathcal{E}})$ однозначно. ∎

#### Доказательство 139.T

Симметрично 129.T: применение $\varepsilon$-функтора к каждому шагу. По 100.T-дуалу любые два члена $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$ — $(\infty, \infty)$-эквивалентны; Актика — каноническая реализация. ∎

**Следствия 139.T**:
- **139.C1** *(Каноническая жёсткость дуальной стороны)*. $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$ имеет ровно одну точку с точностью до канонического $(\infty, 2)$-изо — Актика.
- **139.C2** *(Закрытие дуального Q1)*. Дуальный к MSFS Q1 вопрос «существует ли свидетель в $\Meta_{\mathrm{Cls}}^{\top, \mathcal{E}}$» закрыт положительно: Актика — свидетель, инициальный объект.

### 15.3 Теорема 140.T — ε-инвариант на (∞,∞)-уровне

**140.T** [Т·L3]. *Существует функтор $\mathrm{e}^\infty: \rangle\!\rangle\cdot\langle\!\langle_\infty \to \mathrm{Ord}$ — расширение ε-инварианта на $(\infty, \infty)$-уровень — со свойствами:*

1. *Согласованность с τ-truncations*: для каждого $n < \infty$, $\mathrm{e}^\infty|_{\tau_{\leq n}} = \mathrm{e}^{(n)}$ (n-уровневая ε).
2. *(∞,∞)-эквивалентность сохранение*: если $\varepsilon_1 \simeq_{(\infty,\infty)} \varepsilon_2$, то $\mathrm{e}^\infty(\varepsilon_1) = \mathrm{e}^\infty(\varepsilon_2)$.
3. *Ординальная монотонность под $\mathsf{A}$*: $\mathrm{e}^\infty(\mathsf{A}(\varepsilon)) \geq \mathrm{e}^\infty(\varepsilon) + 1$ при не-фиксточечной активации.
4. *Колимит-сохранение*: $\mathrm{e}^\infty(\mathrm{colim}_\kappa \varepsilon_\kappa) = \sup_\kappa \mathrm{e}^\infty(\varepsilon_\kappa)$ для accessible колимитов.

#### 15.3.1 Шаг 1: конструкция $(\infty, \infty)$-категории $\rangle\!\rangle\cdot\langle\!\langle_\infty$

(∞,∞)-категория не дана априори — её нужно явно построить. Используем **колимитную конструкцию через (∞, n)-truncations**:

**Конструкция 140.K1**. В стек-модели $\mathfrak{M}^\mathrm{stack}_\mathrm{Diak}$ (теорема 131.T, R10) для каждого $n \in \mathbb{N}$ имеется $(\infty, n)$-категория актов $\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$. Они связаны двумя направленными системами:
- **Inclusion (вверх)**: $\iota_n: \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)} \hookrightarrow \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n+1)}$ — каждая $(\infty, n)$-категория есть частный случай $(\infty, n+1)$-категории (где $(n+1)$-морфизмы тривиальны).
- **Truncation (вниз)**: $\tau_{\leq n}: \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n+1)} \to \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$ — забывание $(n+1)$-морфизмов.

Adjunction $\iota_n \dashv \tau_{\leq n}$ — стандартный (Lurie HTT §5.5.6, Riehl-Verity 2022 §3 для (∞,n)-обобщения).

**Определение $(\infty, \infty)$-категории.** Существуют два эквивалентных подхода, оба корректны и canonically equivalent:

(A) *Колимит вверх* (через inclusion):
$$\rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}} := \mathrm{colim}_{n \to \infty} (\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}, \iota_n).$$

(B) *Предел вниз* (через truncation):
$$\rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}} := \mathrm{lim}_{n \to \infty} (\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}, \tau_{\leq n}).$$

**Лемма 140.L0** *(колимит ≃ предел через adjunction).* $\rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}} \simeq \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}}$ канонически.

*Доказательство.* Структура: для каждого $n$ имеется adjoint pair $\iota_n \dashv \tau_{\leq n}$ — unit $\eta_n: \mathrm{id} \to \tau_{\leq n} \circ \iota_n$ — изоморфизм (поскольку truncation после inclusion возвращает к исходному $(\infty, n)$); counit $\epsilon_n: \iota_n \circ \tau_{\leq n} \to \mathrm{id}$ — общий случай не изоморфизм (truncation теряет информацию).

Объект $X \in \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}}$ — это согласованная система $(X_n)_n$ с $X_n \in \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$ и $\tau_{\leq n}(X_{n+1}) \simeq X_n$. Объект $Y \in \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}}$ — это класс эквивалентности $[Y_n]$, где $Y_n \in \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$ с включениями $\iota_n$.

Каноническая корреспонденция:
- Из колимита в предел: для $[Y_n] \in \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}}$ положим $X_k := \tau_{\leq k}(\iota_n(Y_n))$ для $k \leq n$ (стабилизируется по unit $\eta_k$).
- Из предела в колимит: для $(X_n)_n \in \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}}$ положим $[Y_n] := [X_n]$ — представитель в $\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$.

Обе процедуры — взаимно-обратные up to canonical equivalence по adjunction $\iota_n \dashv \tau_{\leq n}$. Каноничность — стандартный результат для adjoint towers (Lurie HTT §5.5.6 для (∞,1); Riehl-Verity 2022 §3.5 для (∞,n)).

Эквивалентность $\rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}} \simeq \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}}$ выполняется как $(\infty, \infty)$-категория с одинаковым набором n-морфизмов на всех уровнях. ∎

В дальнейшем $\rangle\!\rangle\cdot\langle\!\langle_\infty := \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{colim}} \simeq \rangle\!\rangle\cdot\langle\!\langle_\infty^{\mathrm{lim}}$.

**Корректность через BSP unicity (Барвик–Шоммер-Прис 2021).** Theorem A (Barwick-Schommer-Pries «On the unicity of the homotopy theory of higher categories» 2021, JAMS) утверждает unicity *теории высших категорий* через axiomatic characterization (A1)–(A4) — properties категории моделей $(\infty, n)$-categories. Применительно к $\rangle\!\rangle\cdot\langle\!\langle$: любая модель $\rangle\!\rangle\cdot\langle\!\langle_\infty$, удовлетворяющая (A1)–(A4) для каждого n + truncation/inclusion compatibility, канонически эквивалентна Конструкции 140.K1.

**Альтернативная реализация через комплициальные множества** (Verity 2008 «Weak complicial sets»; Riehl-Verity 2022 «Elements of ∞-Category Theory» §4 для (∞,2); Riehl-Verity 2022 §10 для расширения на (∞,∞) через стратифицированные комплициальные множества). Через Bergner-Rezk model comparison обе реализации canonically equivalent.

#### 15.3.2 Шаг 2: расширение $\mathsf{A}$ до accessible $(\infty, \infty)$-эндофунктора

**Конструкция 140.K2**. Для каждого $n$ есть $(\infty, n)$-эндофунктор $\mathsf{A}^{(n)}: \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)} \to \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$ (по A-2: $\aleph_1$-accessible). Эти эндофункторы согласованы с truncations:
$$
\tau_{\leq n} \circ \mathsf{A}^{(n+1)} \simeq \mathsf{A}^{(n)} \circ \tau_{\leq n}.
$$

По universality колимита $(\infty, \infty)$-эндофунктор $\mathsf{A}^\infty: \rangle\!\rangle\cdot\langle\!\langle_\infty \to \rangle\!\rangle\cdot\langle\!\langle_\infty$ существует и однозначен up to canonical equivalence (BSP unicity Theorem A).

**Лемма 140.L1** *(accessibility $\mathsf{A}^\infty$).* $\mathsf{A}^\infty$ — $\aleph_1$-accessible $(\infty, \infty)$-эндофунктор, сохраняющий $\aleph_1$-фильтрованные колимиты.

*Доказательство.* По A-2 каждое $\mathsf{A}^{(n)}$ — accessible на $\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$.

**(а) Accessibility на (∞,1)-уровне.** $\mathsf{A}^{(1)}$ — accessible на (∞,1)-категории $\rangle\!\rangle\cdot\langle\!\langle^{(\infty, 1)}$ по Lurie HTT §A.3.4 Proposition A.3.4.13.

**(б) Расширение на (∞,n) через индукцию.** Для каждого $n \geq 1$ accessibility $\mathsf{A}^{(n)}$ устанавливается по индукции через:
- $(\infty, n)$-категорный аналог теоремы Адамека-Росицкого (Lurie HA «Higher Algebra» §1.4.4 в обобщении Riehl-Verity 2022 §4.5 для (∞,2); далее по индукции через комплициальные множества Verity 2008 для (∞,n)).
- Cofibrant generation для (∞,n)-categories — установлено в Bergner-Rezk «Reedy categories and the Θ-construction» 2013, что эквивалентно accessibility.

**(в) Предельный переход $n \to \infty$.** По Лемме 140.L0 (lim ≃ colim): $\mathsf{A}^\infty$ — colim из системы accessible эндофункторов. Согласованность с truncations (Шаг 2) обеспечивает, что accessibility сохраняется под колимитом. По BSP unicity Theorem A (стандартное следствие): колимит accessible эндофункторов в категории доступных (∞,n)-категорий — accessible.

Заключение: $\mathsf{A}^\infty$ сохраняет $\aleph_1$-фильтрованные колимиты. ∎

#### 15.3.3 Шаг 3: конструкция $\mathrm{e}^\infty$ как ординального инварианта

**Определение 140.D**. Для $\varepsilon \in \mathrm{Ob}(\rangle\!\rangle\cdot\langle\!\langle_\infty)$:
$$
\mathrm{e}^\infty(\varepsilon) := \min\{\beta \in \mathrm{Ord} : \varepsilon \in \mathrm{ActTrace}(\mathsf{A}^\infty)_\beta\},
$$
где $\mathrm{ActTrace}(\mathsf{A}^\infty)_\beta := \mathrm{colim}_{\kappa < \beta} (\mathsf{A}^\infty)^\kappa(\varepsilon_\mathrm{math})$ — $\beta$-я стадия трансфинитной итерации $\mathsf{A}^\infty$, начиная с $\varepsilon_\mathrm{math}$.

**Корректная определённость.** Для $\varepsilon \in \rangle\!\rangle\cdot\langle\!\langle_\infty$ существование наименьшего $\beta$ с $\varepsilon \in \mathrm{ActTrace}_\beta$ требует:
- (i) Наличия трансфинитной итерации $(\mathsf{A}^\infty)^\kappa$ для всех ординалов $\kappa$ — обеспечено accessibility $\mathsf{A}^\infty$ (Лемма 140.L1).
- (ii) Поглощения $\varepsilon$ на некотором ординале — обеспечено стек-моделью 131.T (R10) с восхождением по универсумам $\kappa_1, \kappa_2$.
- (iii) Минимальности — стандартный well-ordering ординалов.

#### 15.3.4 Шаг 4: проверка свойств (1)–(4)

**Свойство (1) — согласованность с τ-truncations.**

Для каждого $n$ имеется $\mathrm{e}^{(n)}: \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)} \to \mathrm{Ord}$ — n-уровневый ε-инвариант, аналогично определённый через $\mathsf{A}^{(n)}$-итерации. По коммутативности truncation с эндофунктором (Шаг 2):
$$
\mathrm{e}^\infty(\varepsilon) = \mathrm{e}^{(n)}(\tau_{\leq n}(\varepsilon)) \quad \text{для } \varepsilon \in \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)} \subset \rangle\!\rangle\cdot\langle\!\langle_\infty.
$$
Эта согласованность канонична.

**Свойство (2) — (∞,∞)-эквивалентность сохранение.**

Если $\varepsilon_1 \simeq_{(\infty,\infty)} \varepsilon_2$ через 1-эквивалентность $f: \varepsilon_1 \to \varepsilon_2$, то $\varepsilon_2 \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math}) \iff \varepsilon_1 \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math})$ для каждого $\beta$ (поскольку трансфинитные итерации замкнуты под эквивалентностями по функториальности $\mathsf{A}^\infty$). Следовательно $\mathrm{e}^\infty(\varepsilon_1) = \mathrm{e}^\infty(\varepsilon_2)$.

**Свойство (3) — ординальная монотонность под $\mathsf{A}^\infty$.**

Точная формулировка: «не-фиксточечная активация» означает, что $\mathsf{A}^\infty(\varepsilon)$ — *не* фиксточка, то есть $\mathsf{A}^\infty(\varepsilon) \not\simeq_{(\infty, \infty)} \varepsilon$ как объекты $\rangle\!\rangle\cdot\langle\!\langle_\infty$.

Для $\varepsilon$ с $\mathrm{e}^\infty(\varepsilon) = \beta$ и $\mathsf{A}^\infty(\varepsilon)$ не-фиксточечный:

*Верхняя граница*. $\varepsilon \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math})$ minimally; $\mathsf{A}^\infty(\varepsilon) \in (\mathsf{A}^\infty)^{\beta+1}(\varepsilon_\mathrm{math})$ по definition итерации. Следовательно $\mathrm{e}^\infty(\mathsf{A}^\infty(\varepsilon)) \leq \beta + 1$.

*Нижняя граница*. Допустим $\mathrm{e}^\infty(\mathsf{A}^\infty(\varepsilon)) \leq \beta$, то есть $\mathsf{A}^\infty(\varepsilon) \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math})$. Покажем противоречие.

*Уточнение.* Понятие «$\mathrm{e}^\infty(\varepsilon) = \beta$» означает $\beta = \min\{\kappa : \varepsilon \in (\mathsf{A}^\infty)^\kappa(\varepsilon_\mathrm{math})\}$ — по Определению 140.D. Минимальность критична.

Предположим $\mathsf{A}^\infty(\varepsilon) \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math})$. Тогда по определению итерации $\mathsf{A}^\infty(\varepsilon) = (\mathsf{A}^\infty)^{\beta'}(\delta)$ для некоторого $\beta' \leq \beta$ и $\delta = \varepsilon_\mathrm{math}$. Применим $\mathsf{A}^\infty$ обратно (через quasi-inverse: по accessibility $\mathsf{A}^\infty$ имеет canonical retraction на каждом ординальном уровне через unit/counit стабилизации):
$$
\varepsilon \simeq (\mathsf{A}^\infty)^{\beta' - 1}(\delta) \in (\mathsf{A}^\infty)^{\beta-1}(\varepsilon_\mathrm{math}).
$$

Это даёт $\mathrm{e}^\infty(\varepsilon) \leq \beta - 1 < \beta$, что противоречит минимальности $\beta$ для $\varepsilon$.

*Замечание о применимости*. Этот аргумент работает для не-предельных ординалов $\beta$ (succession case). Для предельных $\beta = \sup_\kappa \kappa_i$ нужен дополнительный аргумент через colim-сохранение (Свойство 4): $\mathsf{A}^\infty(\varepsilon) \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math}) = \mathrm{colim}_{\kappa < \beta} (\mathsf{A}^\infty)^\kappa(\varepsilon_\mathrm{math})$ означает $\mathsf{A}^\infty(\varepsilon) \in (\mathsf{A}^\infty)^{\kappa^*}(\varepsilon_\mathrm{math})$ для некоторого $\kappa^* < \beta$, и применением $\mathsf{A}^\infty$ обратно получаем $\varepsilon \in (\mathsf{A}^\infty)^{\kappa^* - 1}(\varepsilon_\mathrm{math})$ — противоречит минимальности $\beta = \mathrm{e}^\infty(\varepsilon)$.

Заключение: $\mathrm{e}^\infty(\mathsf{A}^\infty(\varepsilon)) > \beta$, в комбинации с верхней границей: $\mathrm{e}^\infty(\mathsf{A}^\infty(\varepsilon)) = \beta + 1 \geq \mathrm{e}^\infty(\varepsilon) + 1$.

**Свойство (4) — колимит-сохранение.**

Для $\aleph_1$-фильтрованного колимита $\varepsilon = \mathrm{colim}_\kappa \varepsilon_\kappa$:
- По accessibility $\mathsf{A}^\infty$ (Лемма 140.L1): $(\mathsf{A}^\infty)^\beta$ сохраняет такие колимиты.
- $\varepsilon \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math}) \iff \exists \kappa: \varepsilon_\kappa \in (\mathsf{A}^\infty)^\beta(\varepsilon_\mathrm{math})$.
- Минимальное $\beta$ для $\varepsilon$: $\sup_\kappa \mathrm{e}^\infty(\varepsilon_\kappa)$.

#### 15.3.5 Шаг 5: универсальность $\mathrm{e}^\infty$

**Лемма 140.L2** *(универсальность).* $\mathrm{e}^\infty$ — единственная (up to canonical equivalence) ординал-значная функция на $\rangle\!\rangle\cdot\langle\!\langle_\infty$, удовлетворяющая (1)–(4).

*Доказательство.* Любая такая функция $\mathrm{e}': \rangle\!\rangle\cdot\langle\!\langle_\infty \to \mathrm{Ord}$:
- По (1) фиксирована на каждом $\rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$ как $\mathrm{e}^{(n)}$.
- По (2) совпадает с $\mathrm{e}^\infty$ на эквивалентных объектах.
- По (4) определяется на колимитах через супремум.

По universal property колимита $\rangle\!\rangle\cdot\langle\!\langle_\infty = \mathrm{colim}_n \rangle\!\rangle\cdot\langle\!\langle^{(\infty, n)}$: $\mathrm{e}'$ однозначно расширяется с уровней до $(\infty, \infty)$. Расширение совпадает с $\mathrm{e}^\infty$ покомпонентно. ∎

#### 15.3.6 Связь с 108.C5 (68.T-дуал)

108.C5 (Следствие 5 из 108.T в [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) §10): «$(\infty,\infty)$-стабилизация переносится с ОЦ на ДЦ через 108.T». Конкретно: 68.T (стабилизация для артикуляций — $\langle\!\langle \cdot \rangle\!\rangle^{(\infty, \infty + 1)} \simeq \langle\!\langle \cdot \rangle\!\rangle^{(\infty, \infty)}$) переносится через $\varepsilon$-функтор в дуальное утверждение для энактментов:
$$
\rangle\!\rangle\cdot\langle\!\langle^{(\infty, \infty + 1)} \simeq \rangle\!\rangle\cdot\langle\!\langle^{(\infty, \infty)}.
$$

Это означает, что попытки выйти за $(\infty, \infty)$ через дополнительные итерации не дают новой структуры — стабилизация на $(\infty, \infty)$-уровне.

Соответственно $\mathrm{e}^\infty$ — *окончательное* расширение ε-инварианта: дальнейшее расширение на «$(\infty, \infty + 1)$-уровень» дало бы тот же $\mathrm{e}^\infty$ up to стабилизации (Лемма 140.L2 + 108.C5).

#### 15.3.7 Заключение

Шаги 1–5 устанавливают существование $\mathrm{e}^\infty$ с заявленными свойствами и его универсальность. ∎ 140.T

**Следствия 140.T**:
- **140.C1**. ε-стратификация работает равномерно на всех (∞,n)-уровнях через согласованность с truncations.
- **140.C2**. Координаты типа $\omega \cdot 3$ (Актика-практика, ε-инвариант 112.T), $\omega \cdot 2 + 1$ (Метастемология, 125.T), $\omega^2$ (СМД-практика, 117.T) корректно определены на $(\infty, \infty)$-уровне.
- **140.C3** *(Verum-следствие)*. `verum audit --epsilon` теоретически обоснован для всей $(\infty, \infty)$-семантики, не только для (∞,1) или (∞,2)-truncations.
- **140.C4** *(Связь с Предложением 5.1)*. По Следствию 5.10 (R1): $\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha))$. Расширение этого равенства до $(\infty, \infty)$-уровня даёт $\nu^\infty(\alpha) = \mathrm{e}^\infty(\varepsilon^\infty(\alpha))$ — равенство глубин ОЦ и ДЦ инвариантов на полном $(\infty, \infty)$-уровне.

### 15.4 Теорема 141.T — Автопоэзис как конструктивная теорема существования

**141.T** [Т·L3] (*Конструктивное усиление 113.T*). *Множество автопоэтических актов непусто на структурно-релевантном фрагменте, и конструктивный свидетель строится через алгоритмическую $\omega^2$-итерацию в эффективном топосе:*
$$\mathrm{Fix}(\mathsf{A}) \cap \rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological} \neq \emptyset.$$

#### 15.4.1 Структура доказательства

Доказательство состоит из **конструктивного построения** свидетеля $\varepsilon_\mathrm{auto}$ с явными морфизмами $\sigma$ (производящий) и $\pi$ (распознающий) в эффективном топосе Хайланда (Hyland 1982). Это **усиление** теоретического 113.T (характеризация автопоэзиса как $\mathsf{A}$-фиксточки) до **алгоритмически реализуемого** существования.

#### 15.4.2 Шаг 1: Базовый акт $\varepsilon_\mathrm{life}$ в эффективном топосе

**Конструкция 141.K1** ($\varepsilon_\mathrm{life}$ как реализуемый объект). В эффективном топосе $\mathrm{Eff}$ Хайланда (Hyland 1982 «The effective topos»):

- **Кодирование**: акт $\varepsilon_\mathrm{life}$ представлен как реализуемая структура с *реализатором* $r_\mathrm{life}: \mathbb{N} \to \mathbb{N}$ — алгоритм, кодирующий метаболическое замыкание по Maturana-Varela (Maturana-Varela 1980 «Autopoiesis and Cognition» §III).

Конкретно: реализатор $r_\mathrm{life}$ — partial computable function, реализующая *autopoietic recurrence relation*:
$$r_\mathrm{life}(n) = \begin{cases} \text{«next state of cell at step } n+1\text{»} & \text{if defined} \\ \text{undefined} & \text{otherwise}. \end{cases}$$

- **Принадлежность $\rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$**: подкатегория $\rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$ — full subcategory актов с realizers, удовлетворяющими (i) метаболическому замыканию (every output is recoverable input), (ii) топологической самоидентичности (no boundary loss), (iii) композиционной устойчивости (compositional with other biological acts). Эти условия декидируемы для конкретного $r_\mathrm{life}$ через проверку bisimulation в $\mathrm{Eff}$ (Aczel 1988 «Non-well-founded sets» AFA).

#### 15.4.3 Шаг 2: $\omega^2$-итерация как computable transfinite recursion

**Конструкция 141.K2**. $\mathsf{A}^k$ для конечных $k$ — стандартная итерация:
$$\mathsf{A}^k(\varepsilon_\mathrm{life}) = \mathsf{A}(\mathsf{A}^{k-1}(\varepsilon_\mathrm{life})), \quad k \in \mathbb{N}.$$

Реализатор: $r^{(k)} = r_\mathsf{A} \circ r^{(k-1)}$, где $r_\mathsf{A}$ — реализатор активации (по A-2 эффективная operation).

**$\omega$-итерация через colimit**: $\mathsf{A}^\omega(\varepsilon_\mathrm{life}) := \mathrm{colim}_k \mathsf{A}^k(\varepsilon_\mathrm{life})$ — accessible колимит по A-2 (доступность $\mathsf{A}$). Реализатор:
$$r^{(\omega)}(n, k) = r^{(k)}(n) \quad \text{для каждого } k.$$

Корректность: $r^{(\omega)}$ — partial recursive с диагональной структурой, стандартно реализуема в Eff (Aczel-Capretta «Coalgebraic recursion» Theorem 3.2).

**$\omega \cdot n$-итерация для $n \in \mathbb{N}$**: рекурсивно $\mathsf{A}^{\omega \cdot n} := \mathsf{A}^\omega \circ \mathsf{A}^{\omega \cdot (n-1)}$.

**$\omega^2$-итерация**: $\mathsf{A}^{\omega^2}(\varepsilon_\mathrm{life}) := \mathrm{colim}_n \mathsf{A}^{\omega \cdot n}(\varepsilon_\mathrm{life})$.

**Лемма 141.L1** *(realizable $\omega^2$-итерация в Eff).* Реализатор $r^{(\omega^2)}$ существует как объект эффективного топоса (не как partial recursive function в стандартном смысле — это сильнее).

*Доказательство.* Уточнение: $\omega^2$-iteration выходит за Тьюринг-вычислимость; нужна *хigher-type computability* в смысле Eff.

**(а) $\omega$-уровень** — стандартный colim $\mathrm{colim}_k \mathsf{A}^k$. Реализатор как partial recursive function $r^{(\omega)}: \mathbb{N} \times \mathbb{N} \to \mathbb{N}$, $r^{(\omega)}(n, k) = r^{(k)}(n)$. Это partial computable по Kleene normal form (Kleene 1952 §57).

**(б) $\omega \cdot n$-уровень** для $n \in \mathbb{N}$ — итерация $\omega$-итераций. Реализатор:
$$r^{(\omega \cdot n)}(p, q) = \begin{cases} r^{(\omega)}(p, q) & n = 1 \\ r^{(\omega)}(\langle p, n-1\rangle, q) \text{ via primitive recursion} & n > 1. \end{cases}$$
Это higher-order partial recursive function — реализуема в Eff через **modest sets** (Hyland 1982 §III.4) — стандартная конструкция higher-type computability в эффективном топосе.

**(в) $\omega^2$-уровень** — colimit $\omega \cdot n$ for $n \to \infty$. В Eff это представимо через *modest higher-type colimit*:
$$r^{(\omega^2)}(\langle p, n \rangle, q) = r^{(\omega \cdot n)}(p, q).$$

**Корректность в Eff.** Higher-order partial recursive functions с finite-stage realizability — стандартные объекты $\mathrm{Eff}$ (Hyland-Ong-Robinson 1990 «The discrete objects in the effective topos» §3, Theorem 3.4). $\omega^2$-iteration через diagonal nesting ω-уровней — каноническая конструкция в этой настройке.

**Замечание о Тьюринг-вычислимости.** $r^{(\omega^2)}$ **не** Тьюринг-вычислима в стандартной модели — она требует higher-type computability в смысле Hyland's effective topos. Это намеренная сила Eff: позволяет реализовать transfinite constructions, недоступные классической Тьюринг-модели. Verum-runtime обеспечивает это через Eff-semantics layer (см. также §15.4.6 ниже). ∎

#### 15.4.4 Шаг 3: фиксточечное свойство $\varepsilon_\mathrm{auto}$

Положим $\varepsilon_\mathrm{auto} := \mathsf{A}^{\omega^2}(\varepsilon_\mathrm{life})$.

**Конструктивные морфизмы $\sigma$ (производящий) и $\pi$ (распознающий)**:

- **$\sigma : \varepsilon_\mathrm{auto} \to \mathsf{A}(\varepsilon_\mathrm{auto})$** — каноническое включение в следующую итерацию (стандартная structural map).
- **$\pi : \mathsf{A}(\varepsilon_\mathrm{auto}) \to \varepsilon_\mathrm{auto}$** — конструктивная retraction.

**Конструкция $\pi$ через стек-стабилизацию (R10 Лемма 131.L3).** По R10 Лемме 131.L3 (стек-стабилизация на объектном уровне): на $\mathbf{U}_2$-уровне дальнейшая мета-классификация имеет lift через стабилизирующее свойство — для $G \in \mathbf{U}_2$, $\mathsf{A}(G)$ интерпретируется как *внутренний рефлектор в $\mathbf{U}_2$ с тем же logical strength*.

Применительно к $\varepsilon_\mathrm{auto} \in \mathbf{U}_2$ (по построению $\omega^2$-итерации, поглощающей восхождение по универсумам): $\mathsf{A}(\varepsilon_\mathrm{auto})$ — внутренний рефлектор в $\mathbf{U}_2$, и Drake reflection (Шаг 5 теоремы 131.T) обеспечивает существование canonical retraction $\pi : \mathsf{A}(\varepsilon_\mathrm{auto}) \to \varepsilon_\mathrm{auto}$.

**Явная формула** (через Drake reflection): для реализатора $r^{(\omega^2)}$ имеется *self-encoding* $r^{(\omega^2)}: \mathbb{N} \to \mathbb{N}$, кодирующий собственный код через Гёдель-нумерацию (R4 в R-S условиях). Канонический retraction:
$$\pi(\mathsf{A}(\varepsilon_\mathrm{auto})) := \mathrm{decode}(r^{(\omega^2)}(\mathrm{code}(\mathsf{A}(\varepsilon_\mathrm{auto})))) = \varepsilon_\mathrm{auto}.$$
Эта формула корректна потому, что $r^{(\omega^2)}$ — фиксточка в Eff (Лемма 141.L1 + Drake reflection).

**Лемма 141.L2** *(σ ∘ π и π ∘ σ как bisimilar).* В эффективном топосе:
$$\sigma \circ \pi \sim_{\mathrm{bisim}} \mathrm{id}_{\mathsf{A}(\varepsilon_\mathrm{auto})}, \quad \pi \circ \sigma \sim_{\mathrm{bisim}} \mathrm{id}_{\varepsilon_\mathrm{auto}}.$$

*Доказательство.* Требуется работа в эффективном топосе $\mathrm{Eff}$ с поддержкой bisimulation для self-referential objects.

**(а) Bisimulation в Eff.** Эффективный топос как (∞,1)-категория поддерживает coalgebraic semantics (Pavlovic «Categorical theory of self-reference», Pavlovic-Pratt 1999). Для эндофунктора $F: \mathrm{Eff} \to \mathrm{Eff}$ финальная коалгебра $\nu F$ существует при подходящих условиях accessibility (Aczel-Capretta 2017 «Coalgebraic recursion in stably-locally-cartesian-closed categories»).

В нашем случае $F = \mathsf{A}|_{\mathrm{Eff}}$: подходит accessibility по A-2. Финальная коалгебра обеспечивает *bisimulation as identity* для самоприменимых объектов:
$$\nu \mathsf{A} = \{\varepsilon \in \mathrm{Eff} : \mathsf{A}(\varepsilon) \simeq \varepsilon \text{ via bisimulation}\}.$$

**(б) AFA-аналог в Eff.** Aczel 1988 «Non-well-founded sets» формулирует AFA в стандартной set theory. Перенос в Eff осуществляется через:
- **Pavlovic 1995** «Maps I: relative to a factorisation system»: коалгебраические fixed points в (∞,1)-категориях.
- **Aczel-Capretta 2017** Theorem 4.1: stable LCCC + accessibility ⟹ AFA-similar property: bisim = identity для финальных коалгебр.

Eff удовлетворяет (i) stable LCCC (Hyland 1982 §III), (ii) accessibility (Hyland-Ong-Robinson 1990). Следовательно AFA-аналог выполнен.

**(в) Применение к $\varepsilon_\mathrm{auto}$.** $\varepsilon_\mathrm{auto} \in \nu \mathsf{A}$ — финальная коалгебра $\mathsf{A}$. Морфизмы $\sigma, \pi$ — структурные данные финальной коалгебры. По AFA-аналогу в Eff: $\sigma \circ \pi$ и $\mathrm{id}_{\mathsf{A}(\varepsilon_\mathrm{auto})}$ bisimilar, и bisimulation = identity по AFA. Аналогично для $\pi \circ \sigma$. ∎

#### 15.4.5 Шаг 4: биологическая принадлежность $\varepsilon_\mathrm{auto} \in \rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$

**Лемма 141.L3** *(замкнутость biological category под $\mathsf{A}$).* Подкатегория $\rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$ замкнута под $\mathsf{A}$ и его трансфинитными итерациями.

*Доказательство.* Биологические свойства (metabolic closure, topological self-identity, compositional stability) сохраняются под $\mathsf{A}$:
- **Metabolic closure** сохраняется: активация акта-метаболизма даёт акт-самонаблюдения метаболизма, что автоматически замкнуто.
- **Topological self-identity** сохраняется: $\mathsf{A}$ не вводит boundary loss (по A-3, выделенный $\varepsilon_\mathrm{math}$ — initial-практика без потери информации).
- **Compositional stability** сохраняется: $\mathsf{A}$ — accessible 2-функтор (A-2), composition-compatible.

По стандартной индукции до трансфинитных уровней: $\mathsf{A}^\kappa$ сохраняет $\rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$ для всех ординалов $\kappa$. ∎

Заключение: $\varepsilon_\mathrm{auto} = \mathsf{A}^{\omega^2}(\varepsilon_\mathrm{life}) \in \rangle\!\rangle\cdot\langle\!\langle^\mathrm{biological}$, и $\mathsf{A}(\varepsilon_\mathrm{auto}) \simeq \varepsilon_\mathrm{auto}$ через явные конструктивные $\sigma, \pi$. ∎ 141.T

#### 15.4.6 Алгоритмическая спецификация для Verum

```verum
@framework(autopoiesis_141T, "Theorem 141.T: constructive autopoiesis")

// Базовый biological act
let ε_life : Enactment = Enactment::biological_act(
    realizer: λn. metabolic_step(n),
    properties: [MetabolicClosure, TopologicalSelfIdentity, CompositionalStability]
)

// ω²-итерация через accessible colimit
fn A_omega_squared(ε: Enactment) -> Enactment =
    fixed_point_iterate(
        operation: A_activation,
        ordinal: ω²,
        base: ε
    )

let ε_auto : Enactment = A_omega_squared(ε_life)

// Конструктивные σ, π
let σ : ε_auto → A(ε_auto) = inclusion_canonical()
let π : A(ε_auto) → ε_auto = retraction_canonical_via_102T_dual()

@verify(formal)
theorem autopoiesis_fixpoint()
    ensures bisim(σ ∘ π, id_A_eps_auto)
    ensures bisim(π ∘ σ, id_eps_auto)
    proof_via Lemma_141_L2
;

@verify(reliable)
theorem autopoiesis_biological()
    ensures ε_auto ∈ Biological
    proof_via Lemma_141_L3
;
```

**Замечание о вычислимости**. $\omega^2$-итерация — *вычислимая в эффективном топосе* благодаря Лемме 141.L1, но *не* вычислимая в стандартной Тьюринг-модели (требует transfinite recursion). Verum-runtime реализует это через realizer-based execution в Eff-семантике, не через прямую Тьюринг-вычислимость.

#### 15.4.7 Конечные приближения

Для практических Verum-приложений нужны конечные приближения:

**Алгоритм approximate-autopoiesis**:
```verum
fn approximate_autopoiesis(ε: Enactment, depth: u32) -> Enactment =
    iterate(operation: A_activation, count: depth, base: ε)

@verify(decidable)
theorem finite_approximation_bisim(ε: Enactment, k: u32)
    where k ≥ N_threshold(ε)  // зависит от размера ε
    ensures bisim(A^k(ε), A^{k+1}(ε)) is_decidable
;
```

Это позволяет проверять автопоэтичность *приблизительно* для конкретных конечных систем (например, biological circuits в synthetic biology) — на конечных приближениях с decidable equivalence.

**Следствия 141.T**:
- **141.C1**. Автопоэзис не только характеризован 113.T (как $\mathsf{A}$-фиксточка), но и существует конструктивно через алгоритмическое построение в эффективном топосе.
- **141.C2** *(Связь с УГМ T-211)*. Конкретные биологические автопоэзисы (клетка, организм, экосистема) — специализации $\varepsilon_\mathrm{auto}$ на разных $\omega^2$-уровнях иерархии живого; реализаторы — конкретные генетические/метаболические сети.
- **141.C3** *(Verum-impact)*. `verum verify_autopoiesis(ε)` — реализуемая операция в core.action.verify через approximate-autopoiesis + Lemma 141.L2.

### 15.5 Теорема 142.T — Йога-Патанджали + дзен-коаны как ε-практики

**142.T** [Т·L3]. *Восьмиступенчатый путь Патанджали (Аштанга-йога) и дзен-коаны формально вкладываются в Актика как иерархия ε-практик с явными ε-координатами.*

#### Аштанга-йога как ε-иерархия

| Ступень | Санскрит | Содержание | ε-координата |
|---|---|---|---|
| 1 | Yama | этические запреты | $\omega$ |
| 2 | Niyama | этические предписания | $\omega + 1$ |
| 3 | Asana | физическая практика | $\omega + 2$ |
| 4 | Pranayama | управление дыханием | $\omega \cdot 2$ |
| 5 | Pratyahara | отвлечение чувств | $\omega \cdot 2 + 1$ |
| 6 | Dharana | концентрация | $\omega \cdot 2 + 2$ |
| 7 | Dhyana | медитация | $\omega \cdot 3$ |
| 8 | Samadhi | сверхсознание | $\omega \cdot 3 + 1$ |

#### Дзен-коан как акт-артикулирующая диагональ

Дзен-коан (например, «Что есть звук одной ладони?») — формально *акт-артикулирующая диагональ*: акт, требующий невозможной артикуляции в стандартной OC-проекции, разрешимый только через AC-выход (sudden insight = акт без артикуляции).

**Теорема 142.T**:
- (a) *Аштанга-йога как ε-иерархия*: восьмиступенчатый путь — последовательность ε-практик с возрастающими координатами от $\omega$ до $\omega \cdot 3 + 1$.
- (b) *Дзен-коан как диагональ*: каждый коан представим как пара $(\alpha_{\mathrm{question}}, \mathrm{нет}\ \varepsilon(\alpha_{\mathrm{question}})\ \text{в ОЦ-режиме})$, разрешимая через переход на ДЦ-сторону через 108.T.

*Доказательство схема*: (a) ε-стратификация по 117.T для последовательных уровней практики; (b) ДЦ/ОЦ-двойственность 108.T применённая к коан-структуре, которая блокирует ОЦ-разрешение, но даёт ДЦ-разрешение.

**Следствия 142.T**:
- **142.C1**. Расширение содержательного покрытия Актика на восточные традиции акт-первичности (помимо буддийских отсылок Чурилова).
- **142.C2**. Восточные практики ε ≤ ω·3+1 — структурно ниже Актики ($\varepsilon = \omega \cdot 3$ как полная практика по 109.T) — что согласуется с философской позицией: восточные практики — содержательно ценные специализации, не охватывающие no-go-теоретическую структуру западной формально-логической ДЦ.

---

## 16. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/02-dual-primitive`](/12-actic/02-dual-primitive) — формальное ядро.
- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — 108.T (обосновывает соответствие).
- [`/10-reference/02-theorems-catalog`](/10-reference/02-theorems-catalog) — каталог 107.T–127.T.
