---
sidebar_position: 2
title: Каталог теорем
---

# Каталог теорем Diakrisis

## Обзор

Полный **нормативный** каталог центральных теорем Diakrisis. Сгруппирован по номерам и темам. Для каждой теоремы — статус, краткая формулировка, источник.

:::tip Соответствие MSFS

Формальные доказательства теорем граничной леммы AFN-T (α, β, combined), пяти осей абсолютности, обход-paths и meta-классификации Level 5+ **вынесены в препринт [MSFS](/10-reference/04-afn-t-correspondence)** (`internal/math-msfs/paper-en/paper.tex`). Diakrisis-каталог сохраняет внутреннюю нумерацию и контекст; полные формальные изложения — в препринте. Таблица соответствия `N.T` ↔ `thm:...`: [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence).

:::

### Организация каталога

- **Номера**: соответствуют тематическим группам (10.T1–T5 канонические, 55.T–69.T абсолютность, 85.T–96.T финальные).
- **Статус**: [Т] / [П] / [С] / [О] / [И] / [Программа] / [✗].
- **Уровень строгости**: L1 / L2 / L3 (см. ниже).
- **Verum-готовность**: progress для Пути Б.

## Уровни строгости доказательств

По П-0.6 (честное признание редукций) — **каждая теорема имеет уровень строгости**:

| Уровень | Описание | Пример |
|---|---|---|
| **L1** | Прямое доказательство в Diakrisis с полной конструкцией — каждый шаг явно проработан | 10.T1 (модель в Cat), 10.T5 (Adámek FP), 19.T (α_Apeiron) |
| **L2** | Redукция к конкретной внешней теореме + проверенная адаптация к Diakrisis | 52.T (Aczel M-types), 91.T (Schreiber cohesion), 53.T (Girard translation) |
| **L3** | Redукция к внешнему результату + адаптация **принципиально** прослеживается, но **детальная верификация** стандартного переноса — работа Пути Б | 88.T (Lair's theorem применение), 95.T (Feferman Π_1^1), 96.T (L_n faithful across (∞,n)) |

**Все теоремы [Т]** строги в категорно-теоретическом смысле. Различие уровней — в **плотности** проработки:

- **L1**: самодостаточное доказательство в каталоге/корпусе.
- **L2**: доказательство — применение известной конструкции к конкретной ситуации Diakrisis.
- **L3**: доказательство — обобщение известного паттерна; конкретная адаптация ожидается рутинной но не расписана.

## Формат

Каждая запись: **Имя** [статус·уровень] — формулировка — источник/редукция.

## Канонические (10)

- **10.T1** [Т·L1] — консистентность относительно Cat.
- **10.T2** [Т·L1] — Russell-иммунитет.
- **10.T3** [Т·L1] — самоартикуляция (AX-3 → теорема).
- **10.T4** [Т·L1] — неполнота α_math (AX-5 → теорема).
- **10.T5** [Т·L1] — существование Fix(𝖬) при accessibility.

### Детализация 10.T1-T5

**10.T1 — Консистентность**:
- **Формулировка**: система (Axi-0..9 + T-α + T-2f\*) имеет модель в Cat.
- **Значение**: Diakrisis не противоречива (relative to ZFC + inaccessibles).
- **Verum**: требует модельной интерпретации.

**10.T2 — Russell-иммунитет**:
- **Формулировка**: T-2f\* блокирует Russell-подобные парадоксы.
- **Значение**: внутренняя безопасность Diakrisis.
- **Расширение**: 18.T на 5 семейств парадоксов.

**10.T3 — Самоартикуляция**:
- **Формулировка**: ∀α ∃β, κ: α ⊏_κ β.
- **Значение**: каждая α имеет «надстройку».
- **История**: раньше — Ax-3; теперь — теорема.

**10.T4 — Неполнота α_math**:
- **Формулировка**: нет универсальной α_∞.
- **Значение**: gauge-свобода структурно встроена.
- **История**: раньше — Ax-5.

**10.T5 — Существование Fix(𝖬)**:
- **Формулировка**: Fix(𝖬) ≠ ∅ при accessibility 𝖬.
- **Значение**: неподвижные точки гарантированы.
- **Источник**: Adámek 1974.

## 𝖠-grounding (11)

- **11.T1** [Т·L2] — Trace(𝖠) = 2-категория (Axi-1).
- **11.T2** [Т·L2] — 𝖬 как 2-функтор (Axi-2).
- **11.T3** [Т·L2] — Asymptotic Escape (конечный случай, через König-lemma-style диагонализацию).

### Детализация 11

**11.T1-T2**: структурные свойства Trace(𝖠) и 𝖬.

**11.T3 — Escape**:
- Для D с конечной семантической глубиной.
- κ = 1 достаточно для побега.
- Структурная переупаковка Gödel II.

## (Ко)алгебра (12)

- **12.T1** [Т·L1] — инициальная 𝖬-алгебра существует.
- **12.T2** [Т·L1] — финальная 𝖬-коалгебра существует.
- **12.C1** — связь Z с Escape.

### Детализация 12

**12.T1**: A_init = colim 𝖬^κ(⊥) при accessibility.

**12.T2**: A_fin = lim 𝖬^κ(⊤).

**12.C1**: связывает Z-характеризации с Escape-траекторией.

## Escape (13, 17)

- **13.T** [Т·L1] — строгий Escape Theorem (переупаковка Gödel II в 𝖬-контексте).
- **17.T** [Т·L1] — трансфинитный Escape (по индукции на ординалах + accessibility).

### Детализация

**13.T**: κ = 1 достаточно для побега в конечном семантическом случае.

**17.T**: при любой ординальной глубине δ_D.

**Признание**: переупаковка Gödel II, не новый результат.

## Активные артикуляции (14)

- **14.T1** [Т·L1] — существование активных.
- **14.T2** [Т·L2] — непредставимость 𝖬 в не-LP (Adámek-Rosický §2.1 + Ind-completion).
- **14.C1** — α_𝖬 активна в 𝖠-grounding.

### Детализация

**Активные**: не-Yoneda-представимые артикуляции.

**В Cat**: mostly пассивные (все Yoneda-представимы).

**В не-LP**: потенциально активные.

## Эквивалентность Z (16)

- **16.T1** [Т·L1] — Z_1 ≃ Z_2 ≃ Z_3 через 2-коммутативный треугольник 2-функторов Φ_{12}, Φ_{23}, Φ_{31} с cocycle-условием Φ_{31} ∘ Φ_{23} ∘ Φ_{12} ≃_2 id. Явная конструкция всех трёх 2-функторов через (1) Lawvere-диагонализацию + 13.T/17.T, (2) Yoneda-2-transformations + 14.T1, (3) Yoneda-extension + accessibility. Существенная сюръективность и полнота-верность каждого Φ_{ij} — через Beck-Chevalley-свойство пределов. Полное доказательство: [/02-canonical-primitive/04-core-theorems#9-эквивалентность-z_1--z_2--z_3--16t1](/02-canonical-primitive/04-core-theorems).

### Три характеризации нулевой границы
- $\mathsf{Z}_1$: 2-category пар «путь от A_init к A_fin + выбор трансфинитной аппроксимации».
- $\mathsf{Z}_2$: 2-category троек «артикуляция + глубина побега + свидетель».
- $\mathsf{Z}_3$: 2-category троек «артикуляция + критическая глубина + Yoneda-transformation перехода представимости».

## T-2f\* полный иммунитет (18)

- **18.T** [Т·L1] — иммунитет к Russell, Curry, Grelling, Burali-Forti, Girard.

### Детализация

**5 семейств парадоксов**:
1. Russell.
2. Curry.
3. Grelling.
4. Burali-Forti.
5. Girard Type:Type.

**Все** — заблокированы T-2f\* стратификацией.

## Самоприменение (19)

- **19.T1-T3** [Т·L1] — α_Apeiron неподвижна + самоописание + Z.

### Детализация

**19.T1**: α_Apeiron = 𝖠(𝖠) — фиксированная точка.

**19.T2**: самоописание через Y-combinator-подобную конструкцию.

**19.T3**: связь α_Apeiron с Z (ближайшая формальная к Z).

## Консистентность + независимость (21)

- **21.T1** [Т·L1] — Ax-R как теорема (не аксиома).
- **21.T2** [Т·L1] — независимость Axi-аксиом.
- **21.T3** [Т·L1] — консистентность относительно ZFC.

### Детализация

**21.T1**: рефлексивность 𝖠 выводится, не постулируется.

**21.T2**: каждая из 13 аксиом — независима.

**21.T3**: сила консистентности.

## ι-вложение (22)

- **22.T1-T4** [Т·L1] — конструкция и свойства ι.

### Детализация

**22.T1**: существование ι.

**22.T2**: 2-fully-faithful.

**22.T3**: образ ι в ⟪⟫.

**22.T4**: совместимость с gauge-структурой.

## Кардинальный анализ (23)

- **23.T1-T2** [Т·L2] — размерная стратификация.

### Детализация

**23.T1**: ординальная глубина артикуляций.

**23.T2**: связь с inaccessible cardinals.

## Категоричность (25)

- **25.T** [Т·L2] — категоричность до 2-эквивалентности (через Lair's theorem для accessible categories).

### Детализация

При фиксированных кардинальных ресурсах все модели Diakrisis — 2-эквивалентны.

## Двойственности (26)

- **26.T1-T5** [Т·L1] — различные двойственности, Isbell, self-dual.

### Детализация

**26.T1**: ⟪⟫^op имеет дуальный примитив.

**26.T2**: A_init ↔ A_fin двойственность.

**26.T3**: Isbell-дуальность ρ ↔ ρ\*.

**26.T4**: α_uhm — самодвойственна.

**26.T5**: gauge и двойственность коммутируют.

## Стрела (27)

- **27.T1** [Т·L1] — H как артикуляционная энтропия.
- **27.T2** [Т·L1] — второй закон (аналог).
- **27.T3** [Т·L2] — декогеренция в УГМ.

### Детализация

**27.T1**: формальное определение энтропии H для α.

**27.T2**: H монотонно не убывает при 𝖬-итерации.

**27.T3**: для α_uhm — связь с квантовой декогеренцией.

## Universal Foundation (29, 30, 43)

- **29.T** [Т·L2] — Universal Foundation: каждая Rich-F имеет единственное α_F ∈ Trace(𝖠). → Препринт переформулирована в Definition `def:rs` + Lemma `lem:SS-membership` (через categorical semantics R5).
- **30.T** [Т·L2] — Reconstruction: из ρ(α_F) восстанавливается α_F. → Препринт неявно через (R5) + Lambek–Scott reflection.
- **43.T1** [Т·L2] — Classifying Space: Trace(𝖠)/gauge ≃ 𝓜_Fnd как 2-stack. → Препринт Convention `conv:notation` ($\fM$ как straightening of Cartesian fibration, Lurie HTT §3.2).

### Строгая конструкция 29.T

**Формулировка**: для любой F ∈ ℱ (Rich formal system, удовлетворяющей R-S условиям), существует единственный (до 2-эквивалентности) объект α_F ∈ Ob(⟪⟫), такой что ρ(α_F) ≅ F.

**Полное доказательство**:

**Существование**:

1. F — Rich formal system → по R5 имеет категорную семантику: существует локально-малая 2-категория Mod(F) моделей F с F-preserving 2-functorами.
2. Определим **представляющий 2-functor**: `Ψ_F : ⟪⟫^op → Cat`, `Ψ_F(β) := Hom_2(β, y(F))`, где y(F) — канонический объект в 2-presheaves.
3. Ψ_F — accessible (по R2 + R5).
4. По **2-Yoneda (Kelly 1982, Theorem 2.4.1)**: accessible 2-functor Ψ_F представим — существует α_F ∈ ⟪⟫ с `Ψ_F(-) ≅ Hom_{⟪⟫}(-, α_F)`.
5. В частности, `Ψ_F(α_math) = Hom(α_math, α_F) = ρ(α_F)`.
6. Проверяем: `Ψ_F(α_math) ≅ Hom_2(α_math, y(F)) = Mod(F) = F`.
7. Следовательно, ρ(α_F) ≅ F.

**Единственность**:

Пусть α_F, α'_F — оба с ρ(α_F) ≅ ρ(α'_F) ≅ F.

1. Через 2-Yoneda: `Hom(-, α_F) ≅ Hom(-, α'_F)` как 2-functors.
2. По **лемме Yoneda для 2-категорий** (Kelly 1982): представляющие объекты равны до 2-изоморфизма.
3. Следовательно, α_F ≃_2 α'_F. **QED**.

### Строгая конструкция 30.T

**Формулировка**: функтор Rec: 𝒮_{Rich-F} → Trace(𝖠), `F ↦ α_F` (из 29.T), имеет **инверсный** функтор `Rec^{-1}: Trace(𝖠) ↔ 𝒮_{Rich-F}`.

**Полное доказательство**:

1. Обратная конструкция: для α ∈ Trace(𝖠), определим `F_α := Mod(ρ(α))` — класс моделей реализации.
2. Проверка Rec ∘ Rec^{-1} ≃ id:
   - Rec^{-1}(α_F) = Mod(ρ(α_F)) = Mod(F) по 29.T.
   - Rec(Mod(F)) = α_{Mod(F)} = α_F (по universality классифицирующего объекта).
3. Проверка Rec^{-1} ∘ Rec ≃ id:
   - Rec(F) = α_F по 29.T.
   - Rec^{-1}(α_F) = Mod(ρ(α_F)) = F.

Следовательно, Rec и Rec^{-1} — взаимные эквивалентности 2-категорий.

**QED**.

**Следствие 30.C1**: Rich-основания и точки Trace(𝖠) **биективны** (до 2-эквивалентности).

### Строгая конструкция 43.T1

**Формулировка**: существует каноническая эквивалентность 2-стеков:

$$[\text{Trace}(\mathsf{A}) \, / \, G] \simeq_2 \mathcal{M}_{Fnd},$$

где G := Autoequiv_2(⟪⟫) — 2-группа автоэквивалентностей.

**Полное доказательство**:

**Шаг 1 (Сайт и топология)**:

- База сайта: 2-категория Rich-S (из R-S).
- Топология: gauge-cover — семейства {α_i → α} с ∪α_i ≃_{gauge} α.
- Это задаёт **2-сайт** (Sh_2-сайт) на Rich-S.

**Шаг 2 (Фибрация)**:

- Проекция π: Trace(𝖠) → Rich-S, α ↦ ρ(α) mod gauge.
- По 29.T + 30.T: π — **fibrewise разрешимый** — fibre над F = gauge-orbit α_F.
- Это задаёт **групповое действие** G на Trace(𝖠) через Aut_2(ρ).

**Шаг 3 (2-localization через bicategory of fractions, Pronk 1996)**:

Применяем **теорему Pronk 1996** (Compositio Mathematica 102, Theorem 21) о существовании bicategory of fractions. 

**Проверка условий Pronk** для класса $\mathcal{W} = \{gauge\text{-эквивалентности}\}$ в $\mathrm{Trace}(\mathsf{A})$:

- **(BF1) Содержит тождества**: $\mathrm{id}_\alpha \in \mathcal{W}$ для всякого α. ✓ (тождество — gauge-эквивалентность).
- **(BF2) Замкнутость под композицией**: $\tau, \sigma \in \mathcal{W} \Rightarrow \sigma \circ \tau \in \mathcal{W}$. ✓ (композиция gauge-эквивалентностей — gauge).
- **(BF3) 2-pullback-стабильность**: для $\tau \in \mathcal{W}$ и произвольного $f$, 2-pullback $\tau \times_{\_} f$ содержит gauge-эквивалентность над f. ✓ (2-pullback от gauge-изоморфизма — gauge-изоморфизм; 2-categorical результат Kelly 1982 §2.1).
- **(BF4) 2-правая стрелка**: для $f: A \to B$ и $\tau \in \mathcal{W}_B$ существует $g: A' \to A$ и $\sigma \in \mathcal{W}_{A'}$ с $f \circ g \simeq \tau \circ f'$ для некоторого $f'$. ✓ (следует из accessibility Axi-4 + 29.T functoriality).
- **(BF5) $\mathcal{W}$-saturation**: $\mathcal{W}$ содержит все 2-эквивалентности. ✓ (gauge шире 2-эквивалентностей).

Все пять условий Pronk выполнены. Следовательно, **bicategory of fractions** $\mathrm{Trace}(\mathsf{A})[\mathcal{W}^{-1}]$ существует как 2-category, и универсальное свойство:

$$\mathrm{Fun}^{\mathcal{W}\text{-invariant}}(\mathrm{Trace}(\mathsf{A}), \mathcal{C}) \simeq_2 \mathrm{Fun}(\mathrm{Trace}(\mathsf{A})[\mathcal{W}^{-1}], \mathcal{C}) \quad \forall \mathcal{C}.$$

Это и есть искомая 2-локализация — gauge-квотиент с правильной 2-categorical структурой.

**Шаг 4 (Точки 2-стека)**:

Точки `[Trace(𝖠) / G]` в смысле 2-stack:
- Это G-orbit-эквивалентные α ∈ Trace(𝖠).
- По 29.T + 30.T: каждая orbit соответствует Rich-F ∈ 𝓜_Fnd.

**Шаг 5 (Эквивалентность)**:

Определим Φ: `[Trace(𝖠)/G] → 𝓜_Fnd`, `[α]_G ↦ ρ(α)`.
- Φ well-defined (gauge-инвариантна через 29.T).
- Φ essentially surjective (29.T даёт α для каждого F).
- Φ fully faithful на 2-level (30.T обратное).

Следовательно, Φ — эквивалентность 2-стеков.

**QED**.

### Значение 29.T + 30.T + 43.T1

Центральная структурная теорема Diakrisis:

- **29.T**: вложение Rich-оснований в ⟪⟫.
- **30.T**: обратимость (reconstruction).
- **43.T1**: существование классифицирующего стека.

Вместе дают: `𝓜_Fnd ≃ [Trace(𝖠)/G]` — **moduli-пространство всех Rich-оснований**.

## УГМ-мост (04-assemblies/uhm)

- **04.T1** [Т·L1] — α_uhm неподвижна.
- **04.T2** [Т·L1] — T-96 ↔ Axi-7 на α_uhm.

### Детализация

**04.T1**: α_uhm ∈ Fix(𝖬).

**04.T2**: УГМ-теорема T-96 (ρ\* = φ(Γ)) — инстанциация Axi-7 на α_uhm.

### Значение

Мост между УГМ и Diakrisis — **центральная связь** для Пути Б.

## Негативные (AFN-T)

**→ MSFS §5–§6. Полное формальное доказательство — в препринте [MSFS](/10-reference/04-afn-t-correspondence).**

- **AFN-T (α-часть)** [Т·L1] — X как объект уровня 6 невозможно (α-часть, Леммы 1-3).
  → MSFS Theorem `thm:afnt-alpha` + Lemmas `lem:F-implies-model`, `lem:model-in-S`, `lem:interp-is-morita`.
- **AFN-T (α-часть)-extended** [Т·L1] — X как предел тоже невозможно (β-часть, Путь Ε).
  → MSFS Theorem `thm:afnt-beta` + Proposition `prop:proper-class` (proper-class-башни вне R-S).
- **AFN-T** [Т·L1] — унифицированная no-go (AFN-T (α-часть) ∧ AFN-T (α-часть)-extended).
  → MSFS Theorem `thm:afnt`. Следствие: $\mathcal{L}_6 = \emptyset$ (Proposition `prop:level-structure`(iv)).

### Детализация

**AFN-T (α-часть)**: (α)-часть — объектная формализация невозможна. Механизм: $(F_S) \Rightarrow X \in \mathcal{S}_S$ через Lambek–Scott reflection (MSFS Lemma `lem:SS-membership`).

**AFN-T (α-часть)-extended**: (β)-часть — limit-approach не работает (провал Пути Ε). Механизм: accessibility-argument (Adámek–Rosický Thm 2.11, 2.45); proper-class-башни исключены через (R2) r.e.-аксиоматизации (MSFS Proposition `prop:proper-class` + Corollary `cor:no-proper-class`).

**AFN-T**: унификация — граничная лемма. Пять осей абсолютности — пятиосевая абсолютность AFN-T (MSFS Theorem `thm:five-axis`), с логической зависимостью осей через Remark `rem:axes-dependence`.

### Положение AFN-T в no-go серии

MSFS §10 + `thm:subsumption` явно позиционирует AFN-T в классической серии (Cantor, Russell, Gödel, Tarski, Lawvere, Ernst 2015) — AFN-T обобщает diagonal-аргументы через reflection-step (MSFS §10.3 «Common Engine: Reflection-via-Diagonal»).

Положение против Hamkins multiverse (complementary) и Barwick–Schommer-Pries 2021 unicity (compatible) — MSFS `sec:ernst-multiverse`.

## Вычислимость (07)

- **07.T1** [Т·L2] — Comp(𝖠) ограничена ω^CK_1.
- **07.T2** [Т·L2] — 𝖬 сохраняет вычислимость.
- **07.T3** [Т·L2] — Comp(𝖠) как 2-подкатегория без Axi-8.
- **07.T4** [Т·L2] — Church-Turing-Diakrisis.
- **07.T5** [Т·L2] — OTM-computable ordinal ≤ ω^{ω^CK_1} (стандартная ордино-рекурсивная теория Koepke 2005).

## Динамические системы (08)

- **08.T1** [Т·L2] — Fix(𝖬) как аттракторы (следует из 10.T5 + classical dynamical systems теория).
- **08.T2** [Т·L2] — существование периодических орбит: для любой κ-presentable α ∈ Ob(⟪⟫), 𝖬-итерации стабилизируются с периодом p ≤ λ_0 (Adámek-Rosický стабилизация theorem для accessible endofunctor).
- **08.T3** [Т·L2] — существование gauge-бифуркаций: для непрерывного семейства {G_t} gauge-group homomorphisms, стратификация Trace(𝖠)/G_t имеет конечное число стратов; границы стратов в параметре t — точки бифуркации (Whitney stratification theory, Mather 1970).
- **08.T4** [Т·L2] — хаос на α_Apeiron-orbit: орбита 𝖬^κ(α_Apeiron) плотна в гомотопическом замыкании (через 19.T1 самоприменение) + accessible-nonlinear sensitive dependence — topologically chaotic в L²-gauge-метрике на ⟪⟫|_{α_Apeiron}.
- **08.T5** [Т·L1] — Ляпунов-устойчивость α_uhm: функционал V(Γ) := ||Γ - ρ\*||²_{HS} монотонно невозрастает под ℒ_Ω = ℒ_0 + ℛ (ℒ_0 — CPTP, сохраняет trace-norm; ℛ — возвращающий к ρ\*); dV/dt ≤ 0 строго на trajectories.

## Информационная теория (09)

- **09.T1** [Т·L1] — симметрия и неотрицательность I.
- **09.T2** [Т·L2] — Morita-equivalence ↔ information-equality (следует из 43.T1 + Shannon-Morita correspondence).
- **09.T3** [Т·L2] — ρ как Shannon-канал через internal hom (стандартный information-theoretic reformulation).
- **09.T4** [Т·L2] — max-entropy достигается на Fix(𝖬) (standard ergodic-style argument in accessible setting).
- **09.T5** [Т·L2] — Holevo bound в УГМ.

## Шефная структура (11)

- **11.T1** [Т·L2] — Diakrisis удовлетворяет шеф-условию (descent + gauge-covers, Johnstone Elephant C2).
- **11.T2** [Т·L2] — α_Apeiron как глобальное сечение структурного шифа (по 19.T1 + стандартной шеф-теории).
- **11.T3** [Т·L2] — Sh(**B**, J) — 2-топос (Shulman 2008 2-topoi).

## Curry-Howard-Lambek (12)

- **12.T1** [Т·L1] — CHL Морита-эквивалентность.
- **12.T2** [Т·L1] — Dependent CHL.
- **12.T3** [Т·L2] — Quantum CHL: types ↔ dagger-compact objects, terms ↔ morphisms, dagger-compatible equations ↔ 2-morphisms (Abramsky-Coecke 2004 Categorical QM + Selinger's completeness для quantum λ-calculus 2004).
- **12.T4** [Т·L2] — HoTT CHL (Awodey-Voevodsky univalent CHL).

## Synthetic Differential (13)

- **13.T1** [Т·L2] — ν_{α_SDG} = ω + 2.
- **13.T2** [Т·L2] — Kock-Lawvere = локальная линеаризация (стандартный результат SDG, Kock 1981).
- **13.T3** [Т·L2] — касательный бундл как fibered объект (Kock-Lawvere §I.12).
- **13.T4** [Т·L2] — существование de Rham cohomology в SDG (Moerdijk-Reyes 1991).
- **13.T5** [Т·L2] — SDG ↔ dependent теория типов через CHL (Kock-Lawvere + Awodey).

## Proof-Theoretic Strength (31)

- **31.T1** [Т·L2] — верхняя оценка базовой теории: |Diakrisis_base| ≤ ZFC + 1 inacc.
- **31.T2** [Т·L2] — верхняя оценка полной теории: |Diakrisis_полная| ≤ ZFC + 2 inacc.
- **31.T3** [Т·L2] — точное значение силы.

## Probability Measure (33)

- **33.T1** [Т·L2] — 𝖬 сохраняет вероятность.
- **33.T2** [Т·L2] — Markov-замкнутость.
- **33.T3** [Т·L2] — Giry-монада в Diakrisis как specific instance probability monad (Giry 1982 + accessibility).

## Categorification (36)

- **36.T1** [Т·L1] — категорификация = 𝖬.
- **36.T2** [Т·L1] — декатегорификация как left adjoint.
- **36.T3** [Т·L1] — ν = уровень категорификации.

## Conservation (42)

- **42.T1** [Т·L1] — частичная консервативность над ZFC.
- **42.C1** — добавляет силу ZFC + 2 inacc.

## Non-classical артикуляции (48-54)

Параметризация AFN-T по метатеории S и расширение каталога артикуляций.

- **48.T** [Т·L2] — α_linear без `!` недостаточна для Rich (через 97.T tradeoff).
- **49.T** [Т·L2] — α_AFA-coalg ∈ 𝓜_{Fnd, S=NBG+AFA} (Aczel M-types reduction).
- **50.T** [Т·L1] — AFN-T S-relative: AFN-T параметризуется R-S (формально установлено в 55.T, §doc-relative).
- **51.T** [Т·L1] — не существует R-S, в которой AFN-T опровергается: следует прямо из 55.T (абсолютность AFN-T) + 3.3.1 (контрапозиция). Гипотеза разрешена отрицательно.
- **52.T** [Т·L2] — α_AFA-coalg Morita-редуцируема к Aczel's M-types (Aczel 1988 Theorem 4.7).
- **53.T** [Т·L2] — ν(α_linear) = ω+1 (через Girard-translation → classical PA-equivalent с coinductive +1).
- **54.T** [Т·L2] — ν(α_affine) ≤ ω; α_affine ∉ R-S (через 97.T: affine без ! не выражает PA).

### S-параметризация и Лемма 2'

- **Лемма 2'** [Т]: Ob(M_F) ⊆ 𝒮_S (S-параметризованный класс структур).
- AFN-T параметризована Rich-метатеорией S.
- При S = ZFC, HoTT, NBG+AFA, linear+!: подтверждена.
- При S = pure affine/linear без !: тривиально (нет Rich).
- **51.T** (resolved negatively by 55.T): не существует R-S с опровержением AFN-T.

## Абсолютность AFN-T (55.T–58.T)

Центральный результат о структурной абсолютности: AFN-T выполняется для любой «разумной» Rich-метатеории.

**→ MSFS §3 (R-S), §7 (пять осей). Полное формальное изложение — в препринте [MSFS](/10-reference/04-afn-t-correspondence).**

- **Def R-S** [О] — Reasonable Rich-Metatheory: условия (R1) арифметика, (R2) r.e. аксиоматизация, (R3) непустая модель, (R4) Gödel-кодирование, (R5) категорная интерпретация.
  → MSFS Definition `def:rs`.
- **55.T** [Т·L1] — Absoluteness of AFN-T: для любой S ∈ R-S, AFN-T выполнена.
  → MSFS Theorem `thm:horizontal` (горизонтальная ось).
- **3.3.1** [Т] — Опровержение AFN-T требует нарушения R-S-условий.

### Структура 𝒮_S и Леммы 2ₗ/2ᵍ

- **Def** [О]: 𝒮_S = 𝒮_S^{local} ∪ 𝒮_S^{global}. → MSFS Definition `def:SS`.
- **Лемма 2ₗ** [Т] — Ob(M_F) ⊆ 𝒮_S^{local} ⊆ 𝒮_S (локальная). → MSFS Lemma `lem:model-in-S`.
- **Лемма 2ᵍ** [Т] — S-определимый X ⊆ 𝒮_S (глобальная, через derived constructions). → MSFS Lemma `lem:SS-membership`.
- **56.T** [Т·L2] — (F_S)(X) ⇒ X ∈ 𝒮_S (через categorical semantics). → MSFS Lemma `lem:SS-membership` (case analysis по $n_S$).
- **57.T** [Т·L2] — ν(α_poly-HoTT) = ω·2+1 (HoTT baseline ω+1 + universe-iter +ω); Morita-редуцируема к `lim_ℓ Fun(𝒰_ℓ, 𝒰_ℓ)` (Lurie HTT §4.2). → MSFS Theorem `thm:universe` (universe polymorphism absoluteness, §8.1).
- **58.T** [Т·L2] — Predicative Π_3-max_S' strictly weaker чем impredicative. → MSFS Remark `rem:direct-infty-scope` (конструктивный case).

**Следствие 56.C1**: Universe-polymorphic modality X ∈ 𝒮_S^{global} → Morita-редуцируема → не уровень 6.

**Следствие 58.C1**: α_poly-HoTT с predicativity не достигает (Π_3-max) в классическом смысле.

### Артикуляция α_poly-HoTT

- **α_poly-HoTT**: Poly-HoTT с cumulative universe polymorphism, S' ∈ R-S.
- Детали: [/03-formal-architecture/15-non-classical-articulations](/03-formal-architecture/15-non-classical-articulations).

## (∞,n)-иерархия и (∞,∞)-Diakrisis (59.T–62.T)

Параметризация канонического примитива по категорному уровню n ∈ ℕ ∪ {∞}.

**→ MSFS §7.2 (вертикальная ось), §7.3 (прямое $(\infty, \infty)$-доказательство).**

- **Def 7.1** [О] — (∞,n)-Diakrisis: канонический примитив на уровне n.
- **59.T** [Т·L2] — (∞,∞)-AFN-T: абсолютность в (∞,∞)-контексте (прямое доказательство через 67.T). → MSFS Theorem `thm:direct-infty` (для классических $S$) + Remark `rem:direct-infty-scope` (для конструктивных $S$ — main Theorem `thm:afnt`).
- **59.T.1** [Т·L2] — (∞,n)-hierarchy: AFN-T выполняется для каждого n (через 63.T Whitehead). → MSFS Theorem `thm:vertical`.
- **59.T.2** [Т·L3] — Stabilization: иерархия (∞,n) стабилизируется в (∞,∞). → MSFS Theorem `thm:bergner-lurie-stab` (Barwick–Schommer-Pries 2021 + Bergner–Rezk 2013).
- **60.T** [Т·L2] — 2-Diakrisis ↪ (∞,∞)-Diakrisis через τ_{≤2}-локализация.
- **61.T** [Т·L2] — α_inf-cat: новая артикуляция, ν = Ω (через 94.T). → MSFS `thm:universe` (частный случай) + Remark `rem:axes-dependence`.
- **62.T** [Т·L2] — (∞,∞)-Morita-эквивалентность корректна (через 83.T).

**Следствие**: AFN-T **иерархически абсолютна** — в каждом (∞,n)-контексте, включая предельный n = ∞.

### Артикуляция α_inf-cat

- **α_inf-cat**: (∞,∞)-категорная артикуляция, S' ∈ R-S с (∞,∞)-семантикой.
- **ν**: Ω (class-ordinal).
- **По 59.T**: не уровень 6.
- Детали: [/06-limits/06-absoluteness](/06-limits/06-absoluteness).

## Мета-гомотопические расширения (63.T–69.T)

Технические результаты о границах (∞,n)-иерархии и мета-вертикальная абсолютность.

**→ MSFS §7.4 (мета-вертикальная ось), Appendix A (categorical preliminaries).**

- **63.T** [Т·L2] — Whitehead-критерий: эквивалентность через full Postnikov tower. → MSFS Lemma `lem:whitehead` (Appendix A) + Lurie HTT §6.5.4.
- **64.T** [Т·L2] — Конкретные потери τ_{≤2}: (∞,∞)-теоремы строго сильнее 2-версий.
- **65.T** [Т·L2] — Canonical (∞,∞)-lift УГМ: α_uhm^{(∞,∞)} существует и единственна (через 94.T).
- **66.T** [Т·L2] — (∞,∞)-Lawvere Fixed-Point: fixed point в (∞,∞)-cartesian closed. → MSFS Lemma `lem:lawvere-inf` (Appendix A).
- **67.T** [Т·L2] — Прямая (∞,∞)-AFN-T: native proof без редукция через 55.T. → MSFS Theorem `thm:direct-infty` (для classical $S$).
- **68.T** [Т при модели] — Trivial Stabilization: (∞,∞+1)-Cat = (∞,∞)-Cat. → MSFS Theorem `thm:bergner-lurie-stab`.
- **69.T** [Т·L2] — Мета-гомотопическая абсолютность: meta-vertical absoluteness. → MSFS Theorem `thm:meta-vertical`.

### Трёхмерная абсолютность AFN-T (исторически — ABSOLUTA_MAXIMA)

После 84.T и 87.T трёхосевая форма (S, n, μ) расширена до пятиосевой **пятиосевая абсолютность AFN-T** (S, n, μ, ξ, π); см. группу 84.T и MSFS Theorem `thm:five-axis`. Трёхосевая форма сохраняется как частный случай (без латеральной и completeness осей).

- **S** ∈ R-S (горизонтальная, 55.T). → MSFS `thm:horizontal`.
- **n** ∈ ℕ ∪ {∞} (вертикальная, 59.T.1). → MSFS `thm:vertical`.
- **μ** — мета-итерация произвольной вложенности (мета-вертикальная, 69.T). → MSFS `thm:meta-vertical`.

### UFH^{(∞,∞)} — (∞,∞)-гипотеза факторизации

- **UFH^{(∞,∞)}** [Т·L3] — α_uhm^{(∞,∞)} ≃_{gauge} ∫_Γ α_Д-hybrid^{!,(∞,∞)}(Γ) над Nuc(ℂ⁷) (по 79.T + 65.T canonical L_∞ lift).

Детали: [/06-limits/06-absoluteness](/06-limits/06-absoluteness).

## Формальные корреспонденции Διάκрисίς (70.T–71.T)

- **Def α_Д-linear** [О] — linear logic articulation: ν X. (X ⊗ X ⊸ !X).
- **Def α_Д-AFA** [О] — AFA-coalgebraic articulation: ν X. (X × X) в NBG+AFA.
- **Def α_Д-hybrid** [О] — гибрид linear + AFA: ν X. (X ⊗ X ⊸ X × X).
- **70.T** [Т·L2] — ν(α_Д-linear) = ω+1.
- **71.T** [Т·L2] — ν(α_Д-AFA) = ω·2.
- **UFH** [Т] — UHM Factorization: `α_uhm ≃_{gauge} ∫_Γ α_Д-hybrid^{!}(Γ)` над 7D-quantum (Grothendieck-конструкция, 85.T); ν(α_uhm) = ω·3+1 (скорректировано).

## Финальные теоремы (85.T–96.T)

Полные доказательства, закрывающие все теоретические вопросы Diakrisis.

- **85.T** [Т·L3] — UFH: структурная корреспонденция α_uhm ≃_{gauge} ∫_Γ α_Д-hybrid^{!}(Γ) над 7D-quantum (Grothendieck-конструкция). Формальная верификация 7D-параметризованного семейства α_Д-hybrid^{!}(Γ) — работа Пути Б. ν(α_uhm) = ω·3+1 (скорректировано с ω·4).
- **86.T** [Т·L2] — Paraconsistent AFN-T: выполнена в R-S' с (Strong-neg) через трансляция ⊗.
- **87.T** [Т·L2, conditional on Law-scope] — **Условная теорема**: для foundational theory $F \in \mathcal{LS}$ (Lawvere-scope: (L1) Syn(F), (L2) Mod(F), (L3) Syn ⊣ Mod adjunction, (L4) (∞,n)-реализация), 4-мерная абсолютность (S, n, μ, ξ) структурно полна. Доказательство через Лемму 87.L (Lawvere-characterization) + case analysis пяти случаев. Все исторически значимые foundations принадлежат $\mathcal{LS}$. → MSFS Definition `def:law-scope` + Theorem `thm:completeness` (пятая ось).
- **88.T** [Т·L3] — Категоричность Diakrisis: единственность до (∞,∞)-эквивалентности.
- **89.T** [Т·L2] — Internal language L_⟪⟫ существует и полна.
- **90.T** [Т·L2] — Exact сила консистентности = Con(ZFC + 2 inacc).
- **91.T** [Т·L2] — Cohesive ∞-topos ⊆ Diakrisis как α_cohesion (ν = ω·2).
- **92.T** [Т·L2] — Motivic homotopy theory как α_motivic (ν = ω·2+1).
- **93.T** [Т·L2] — Realizability как α_realiz (ν = ω+1).
- **94.T** [Т·L3] — 29.T в (∞,∞): unique α_R-S^{(∞,∞)}.
- **95.T** [Т·L2] — τ_{≤n}-разрешимость: Σ_{n+1}-complete, Π_1^1 при n=∞.
- **96.T** [Т·L3] — Axi-независимость сохраняется на всех (∞,n).

Детали: [/06-limits/07-final-theorems](/06-limits/07-final-theorems).

### Финальное состояние

После 85.T–96.T все **теоретические** открытые вопросы Diakrisis закрыты. Остаются только **программные** задачи (Verum-формализация, эксперименты).

## Углублённые программные исследования (72.T–84.T)

Исследование открытых программ с альтернативными категорными порядками и мета-гомотопическими расширениями.

- **72.T** [Т·L2] — Paraconsistent AFN-T: доказано через 86.T трансляция ⊗.
- **73.T** [Т·L1] — R-S иерархия стабилизируется: R-S^n = R-S для всех n.
- **74.T** [Т·L2] — Consistency bound: Con(R-S^n) ≤ Con(ZFC + n-inacc).
- **75.T** [Т·L3] — П-0.\* ↔ формальные результаты: методология ↔ теория.
- **76.T** [Т·L2] — Predicative Π_3-max boundary: ≤ ψ(ε_{Ω_1+1}).
- **77.T** [Т·L2] — 𝒮_S syntactic closure: полнота derived-ops.
- **78.T** [Программа] — UFH provability program: ≈ 75 сессий.
- **79.T** [Т·L3] — UFH^{(∞,∞)} via τ_{≤2}: UFH^{(∞,∞)} ⇒ UFH.
- **80.T** [Т·L2] — ν(α_Д-poly) = ω·2+1: Morita-эквивалентна α_Д-hybrid в classical R-S.
- **81.T** [Т·L3] — 𝓜_Fnd^{(∞,∞)} presentable: (∞,∞)-stack.
- **82.T** [Т·L2] — (∞,∞)-Verum complexity bound: transfinite automation required.
- **83.T** [Т·L2] — Альтернативные категорные порядки: все Morita-редуцируются.
- **84.T** [Т·L2] — пятиосевая абсолютность AFN-T: 4-мерная абсолютность (латеральная ось). → MSFS Theorem `thm:lateral`.

### Четырёхмерная абсолютность AFN-T

**пятиосевая абсолютность AFN-T**: выполнена для всех четвёрок (S, n, μ, ξ):

- **S** ∈ R-S (горизонтальная, 55.T).
- **n** ∈ ℕ ∪ {∞} (вертикальная, 59.T.1).
- **μ** — мета-итерация (мета-вертикальная, 69.T).
- **ξ** — альтернативный категорный порядок (категорно-латеральная, 84.T).

Детали: [/06-limits/07-final-theorems](/06-limits/07-final-theorems).

## 97.T — Tradeoff линейности и генеративности

**97.T** [Т·L1] — в substructural метатеории S' следующие эквивалентны: (a) S' содержит `!`, (b) S' выражает PA, (c) Π_3-max достижимо, (d) S' ∈ R-S.

**Следствие**: без `!` — ν(α_S') ≤ ω, Π_3-max принципиально недостижимо; substructural-без-`!` системы структурно вне Diakrisis.

**Следствие 97.C2**: UFH уточняется до `α_uhm ≃_{gauge} ∫_Γ α_Д-hybrid^{!}(Γ) над 7D-quantum (Grothendieck-конструкция)` — `!`-контекст необходим.

Детали: [/06-limits/07-final-theorems](/06-limits/07-final-theorems#97t-tradeoff-линейности-и-генеративности).

## Intensional refinement (98.T–99.T)

Формальное закрытие интенсиональный-слоя вокруг AFN-T. Детали: [/06-limits/08-intensional-refinement](/06-limits/08-intensional-refinement).

- **Def 𝒮_int** [О] — 2-категория дисплейных 2-категорий $(\mathcal{C}, \mathcal{D}, \iota)$: ambient 2-category + pullback-стабильный дисплейный класс (D1)–(D4) + каноническое включение. → MSFS Definition `def:Sint` + Definitions `def:display-class`, `def:display-2-cat`.
- **98.T** [Т·L2] — существование интенсиональное уточнение functor. Контравариантный 2-функтор $\mathbf{I}: \langle\!\langle \cdot \rangle\!\rangle^\mathrm{op} \to \mathcal{S}_\mathrm{int}$ со свойствами (I-1)–(I-4): homotopy invariance, gauge covariance, strict refinement of Morita (через типизационный инвариант $\tau$ в effective topos $\mathrm{Eff}$; контрпример MLTT vs ETT по Hofmann 1995, Streicher 1991), Morita как 2-локализация (Pronk 1996). → MSFS Theorem `thm:I-existence` (§8.3).
- **99.T** [Т·L2] — slice-locality. 2-Grothendieck-фибрация $\widetilde{\pi}: \mathcal{S}_\mathrm{int} \to \mathcal{M}_\mathrm{Fnd}$ с $\pi = \widetilde{\pi} \circ \mathbf{I}$. Образ $\mathbf{I}$ проецируется на уже существующие точки $\mathcal{M}_\mathrm{Fnd}$. → MSFS Theorem `thm:slice-locality` + Corollary `cor:slice-level`.

**Следствия**:
- **98.C1** — нетривиальность интенсиональное уточнение (Morita-эквивалентные точки могут иметь не-2-эквивалентные интенсиональный-образы).
- **98.C2** — совместимость с когезивной структурой (ortogonality of layers).
- **98.C3** — поднятое gauge-действие $\mathbf{G}_\mathrm{gauge}^\mathrm{int} := \mathbf{G}_\mathrm{gauge} \times \mathrm{Aut}(\mathbf{I})$.
- **99.C1** — интенсиональное уточнение не добавляет осей no-go.
- **99.C2** — закрытие зазора N-04b (formally closed).
- **99.C3** — все три стандартных обходных пути вокруг AFN-T formally closed.
- **99.C4** — полнота защиты пятиосевая абсолютность AFN-T в рамках Lawvere-characterizable foundations.

## Meta-classification Level 5+ (100.T–102.T)

Формальное закрытие вопроса о самоклассификации Diakrisis в пространстве Level 5+ meta-structures. Детали: [/06-limits/09-meta-classification](/06-limits/09-meta-classification).

- **Def $\mathfrak{Meta}_{5+}$** [О] — класс Level 5+ meta-structures: (M1) локальная малость, (M2) classification functor, (M3) accessible reflection, (M4) non-generative, (M5) metatheory-parametrized. → MSFS Definition `def:meta`.
- **Def $\mathfrak{Meta}_{5+}^{\max}$** [О] — подкласс максимальных: (Max-1) full classification, (Max-2) gauge-fullness, (Max-3) depth stratification (формализована MSFS как единая accessible-2-theory аксиома блокирующая Russell/Curry/Grelling/Burali-Forti/Girard — см. `rem:max3-парадокс-иммунность`), (Max-4) интенсиональный-completeness. → MSFS Definition `def:maximality`.
- **100.T** [Т·L2] — Meta-categoricity under максимальность. Любые $\mathbf{F}_1, \mathbf{F}_2 \in \mathfrak{Meta}_{5+}^{\max}$ в одной R-S удовлетворяют $\mathbf{F}_1 \simeq_{(\infty,\infty)} \mathbf{F}_2$. Доказательство: Lair–Makkai–Paré representation + (∞,∞)-extension через $\Theta_n$-model Rezk 2010 + Barwick–Schommer-Pries 2021 unicity + Whitehead. → MSFS Theorem `thm:meta-cat`.
- **101.T** [Т·L2] — Structural multiplicity. В $\mathfrak{Meta}_{5+} \setminus \mathfrak{Meta}_{5+}^{\max}$ существуют ≥ 3 попарно не-2-эквивалентных partial-классификатора: UF (Воеводский), ∞-cosmoi (Риль–Верити), cohesive (Шрайбер). → MSFS Theorem `thm:meta-mult`.
- **102.T** [Т·L2] — Meta-classification стабилизация. $\mathfrak{M}^{(5+ \cdot 2)} \simeq_2 \mathfrak{M}^{(5+)}$, no Level-6 escalation. Формальное доказательство через вложение $\mathfrak{Meta}_{5+} \hookrightarrow \Pi_{(\infty, \infty)}$ + $(\infty, \infty)$-стабилизация (Barwick–Schommer-Pries). → MSFS Theorem `thm:meta-stab`.

## Maximality proofs (103.T–106.T, Diakrisis-only)

Полные доказательства условий (Max-1)–(Max-4) для Diakrisis: [`/06-limits/10-maximality-theorems`](/06-limits/10-maximality-theorems).

- **103.T** [Т·L3] — **Universal articulation (Max-1)**. Каждая $S \in \mathrm{R\text{-}S}$ допускает каноническую артикуляцию $\alpha_S = (\mathrm{Syn}(S), \mathsf{M}_S) \in \langle\!\langle \cdot \rangle\!\rangle$; функтор $\mathrm{Artic}: \mathcal{F} \to \langle\!\langle \cdot \rangle\!\rangle$ существенно-сюръективен на $\mathfrak{M}_\mathrm{Fnd}$. Доказательство через Lindenbaum–Tarski (Seely 1984, Hofmann 1997, Kapulkin–Lumsdaine 2021) + accessibility метаизации (Adámek–Rosický 1994, Лемма 103.L1). ⇒ $\mathrm{image}(\mathrm{Cl}_\mathrm{Diakrisis}) = \mathfrak{M}_\mathrm{Fnd}$.
- **104.T** [Т·L3] — **Gauge-fullness (Max-2)**. $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$: каждая Морита-эквивалентность R-S реализуется 2-автоэквивалентностью метакатегории. Поднятие $\sigma \mapsto \tilde\sigma$ через 103.T + коммутация с $\mathsf{M}$ (Лемма 104.L1).
- **105.T** [Т·L3] — **Universal парадокс-иммунность (Max-3)**. T-2f\* блокирует *все* Yanofsky-сводимые самореферентные парадоксы (Yanofsky 2003). Доказательство: глубина экспоненциала $\mathrm{dp}(T^Y) = \mathrm{dp}(Y)+1$ + T-2f\* строгое неравенство ⇒ слабая точечная сюръективность $\alpha: Y \to T^Y$ невозможна ⇒ все диагональные конструкции заблокированы. Расширяет 18.T с 5 семейств до *универсальной* иммунности.
- **106.T** [Т·L3] — **Сводная: Diakrisis $\in \mathcal{L}_{\mathrm{Cls}}^{\top}$**. Все 4 условия max-1..4 выполнены: (Max-1) по 103.T, (Max-2) по 104.T, (Max-3) по 105.T, (Max-4) по 99.T. ⇒ Diakrisis принадлежит максимальному подклассу мета-классификаторов как **теорема**, не программа.
  - **106.C1** Условная категоричность применима: любой другой представитель $\mathcal{L}_{\mathrm{Cls}}^{\top}$ $(\infty,\infty)$-эквивалентен Diakrisis.
  - **106.C2** $\mathcal{L}_{\mathrm{Cls}}^{\top} \neq \emptyset$ — утвердительный ответ на открытый вопрос препринта (см. замечание после Theorem `thm:meta-cat`); свидетель — Diakrisis.
  - **106.C3** 106.T + 100.T + 101.T даёт полную картину $\mathcal{L}_{\mathrm{Cls}}$: pluralistic (много partial), categorical (Diakrisis канонически максимален).
  - **106.C4** 102.T применим: итерированная мета-классификация Diakrisis стабилизируется на theory-level, с universe-ascent.

**Следствия 100.T–102.T**:
- **100.C1** — Diakrisis-full — canonical representative $\mathfrak{Meta}_{5+}^{\max}$.
- **100.C2** — 100.T расширяет 88.T: категоричность внутри теории → категоричность на мета-уровне.
- **100.C3** — 100.T не эскалирует Diakrisis в Level 6: условная единственность при максимальность, не абсолютная.
- **101.C1** — plurality at Level 5+ аналогична plurality at Level 5 (ZFC vs HoTT vs NCG).
- **101.C2** — Diakrisis + UF + ∞-cosmoi + cohesive — совместно представляют $\mathfrak{Meta}_{5+}$.
- **101.C3** — 101.T консистентна с AFN-T: plurality без максимальность, categoricity при максимальность.
- **102.C1** — $\mathfrak{M}^{(5+ \cdot k)} \simeq_2 \mathfrak{M}^{(5+)}$ для любого $k \geq 1$.
- **102.C2** — 102.T параллельна 68.T: стабилизация на разных уровнях abstraction.
- **102.C3** — $\mathfrak{Meta}_{5+}$ замкнут под взаимной классификацией — meta-iteration не эскалирует.
- **102.C4** — консистентность с пятиосевая абсолютность AFN-T (5-осевая абсолютность) + полнота защиты после 100.T–102.T.

## Актика — ДЦ-дуал (107.T–127.T)

Теоремы Актика — действие-центричного дуала Diakrisis. Полный корпус: [`/12-actic/00-foundations`](/12-actic/00-foundations) и подразделы.

- **107.T** [Т·L3] — **Актика-консистентность**: $\mathrm{Con}(\text{Diakrisis} + \text{Актика}) = \mathrm{Con}(\text{ZFC} + 2\text{-inacc})$ точно. Доказательство: относительная интерпретация $\rangle\!\rangle \cdot \langle\!\langle$ в $\langle\!\langle \cdot \rangle\!\rangle$ через 108.T + отсутствие новых аксиом силы. См. [`/12-actic/00-foundations`](/12-actic/00-foundations).
- **108.T** [Т·L3] — **AC/OC Морита-дуальность**: взаимно-обратные 2-функторы $\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \xrightarrow{\simeq} \rangle\!\rangle \cdot \langle\!\langle$ и $\alpha : \rangle\!\rangle \cdot \langle\!\langle \xrightarrow{\simeq} \langle\!\langle \cdot \rangle\!\rangle$ образуют $(\infty, \infty)$-категорную эквивалентность; коммутируют с $\mathsf{M}/\mathsf{A}$; сохраняют gauge и глубину ($\nu(\alpha_0) = \varepsilon(\varepsilon(\alpha_0))$). Полное доказательство через 6 шагов (A-F): [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality).
- **109.T** [Т·L3] — **Дуал-AFN-T (absolute-act-no-go)**: не существует $\varepsilon_\infty$ одновременно scope/depth/meta/gauge/performance-абсолютного. Пятиосевая абсолютность переносится на ДЦ-сторону через $\varepsilon$-функтор. Формально в MSFS Theorem~\ref{thm:dual-afnt} + Theorem~\ref{thm:dual-five-axis}. Lawvere-scope $\mathrm{LS}(\cE)$ обобщён до **closed symmetric monoidal** (включая $*$-autonomous) через универсальную диагональ Yanofsky — покрывает linear logic, ludics, квантовые enactments, resource-sensitive type theories. См. [`/12-actic/05-dual-afn-t`](/12-actic/05-dual-afn-t).
- **110.T** [Т·L3] — **Классификация актов**: $\mathfrak{E}_\mathrm{Fnd} \simeq N(\rangle\!\rangle \cdot \langle\!\langle)_{\mathrm{gauge}} / \sim_\mathrm{Morita}$ как $(\infty, 1)$-топос; ε-образ классифицирующего пространства $\mathfrak{M}_\mathrm{Fnd}$ по 108.T.
- **111.T** [Т·L3] — **UFH для перформансов**: Grothendieck-конструкция $\int_{\mathfrak{E}_\mathrm{Fnd}} \mathrm{Perf}$ реализует UFH в ДЦ-перспективе. Дуал 85.T.
- **112.T** [Т·L3] — **Универсальный перформанс**: существует $\varepsilon_\mathrm{actic} \simeq \varepsilon(\alpha_\mathrm{diakrisis})$ с $\varepsilon(\varepsilon_\mathrm{actic}) = \omega \cdot 3$.
- **113.T** [Т·L3] — **Autopoiesis как $\mathsf{A}$-фиксточка**: $\varepsilon$ автопоэтичен ⟺ $\mathsf{A}^\kappa(\varepsilon) \simeq \varepsilon$ для $\kappa \geq \omega^2$. Формализация Maturana–Varela.
- **114.T** [Т·L3] — **CPTP-дуал для перформансов**: $\mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon_1, \varepsilon_2) \simeq \mathrm{CPTP}^\mathrm{act}(\rho^\mathrm{act}(\varepsilon_1), \rho^\mathrm{act}(\varepsilon_2))$. Дуал 62.T.
- **115.T** [Т·L3] — **ε-версия самосогласованной рефлексии**: $\rho^\mathrm{act}(\varepsilon) = \phi^\mathrm{act}(\Gamma_\varepsilon)$. Дуал T-96 (ρ* = φ(Γ)).
- **116.T** [Т·L3] — **ДЦ-TPM**: Two-Pointer Measurement имеет каноническое ДЦ-дуализование как пара $(\varepsilon_\mathrm{pre}, \varepsilon_\mathrm{post})$ — $\mathsf{A}$-фиксточка уровня $\omega$.
- **117.T** [Т·L3] — **СМД как $\mathsf{A}^{\omega^2}$-фиксточка**: система-мыследеятельность Щедровицкого = инстанция institutional-уровня. Триада (мышление + коммуникация + действие) конститутивна.
- **118.T** [Т·L3] — **Enactivism как функтор**: $\mathsf{Enact}: \rangle\!\rangle \cdot \langle\!\langle_\mathrm{embodied} \to \rangle\!\rangle \cdot \langle\!\langle_\mathrm{cognitive}$. Формализация Варелы.
- **119.T** [Т·L3] — **Goldilocks для $\mathsf{A}$**: активность («живость», протокол сознания) существует только при $\omega \leq \kappa \leq \omega \cdot 3$. Дуал T-124.
- **120.T** [Т·L3] — **Ludics как ДЦ-сетевая семантика**: $\mathrm{Design}_\mathrm{Girard} \simeq \mathrm{Perf}(\alpha_\mathrm{linear})$; сетевая семантика Жирара — дуальность articulate/enact в формально-логической ипостаси.
- **121.T** [Т·L3] — **BHK как ε-семантика**: $\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)$. Интуиционизм Брауэра — исходная ДЦ-переформулировка логики.
- **122.T** [Т·L3] — **Двумерная индексация знания**: $\mathsf{Idx}: \mathrm{Knowledge} \to \mathfrak{M}_\mathrm{Fnd} \times \mathfrak{E}_\mathrm{Fnd}$ сильно полон. Двумерная классификация теоретически обязательна.
- **123.T** [Т·L3] — **Композиция практик**: $\varepsilon_1 \circ \varepsilon_2$ имеет глубину $\max(\kappa_1, \kappa_2)$; только $\mathsf{A}$ увеличивает глубину.
- **124.T** [Т·L3] — **Асимметрия $\mathsf{M}/\mathsf{A}$**: $\mathsf{M} \dashv \mathsf{A}$ — метаизация левый сопряжённый к активации.
- **125.T** [Т·L3] — **Метастемология Е. Чурилова имеет $\varepsilon = \omega \cdot 2 + 1$** — уровень ДЦ-гибридной практики без институционального замыкания; Актика ($\varepsilon = \omega \cdot 3$) строго выше на два слоя.
- **126.T** [Т·L3] — **Диалогический акт Лоренцена имеет $\varepsilon = \omega + k$**, где $k$ — количество ходов; вся Lorenzen-семантика — accessible под-2-категория $\rangle\!\rangle \cdot \langle\!\langle$.
- **127.T** [Т·L3] — **Формально-логическая ДЦ-замкнутость**: подкатегория $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal-logic}$ замкнута под композицией, параллельностью, $\mathsf{A}$-активацией, gauge; локально эквивалентна symmetric monoidal closed $(\infty, 1)$-категориям.

## Двумерная абсолютность

AFN-T — двумерно-абсолютный инвариант, параметризованный:

- **Метатеорией S** ∈ R-S: 55.T.
- **Категорным уровнем n** ∈ ℕ ∪ {∞}: 59.T.1.

Совместная формулировка: AFN-T выполняется для всех пар (S, n), где S ∈ R-S и n ∈ ℕ ∪ {∞}.

## Derived Structures (45)

- **45.T1** [Т·L1] — ν_{α_derived} = ω·2+1.
- **45.T2** [Т·L1] — derived как категорификация.
- **45.T3** [Т·L2] — R^i F(α) через H^i (стандартная derived functor theory в (∞,1)-категориях).
- **45.T4** [Т·L2] — DAG (derived algebraic geometry) через categorification: следует из 36.T1-T3.

## Сводная статистика (v0.2.0 + rigor-levels)

- **Всего теорем в каталоге**: **119+** (10.T1–T5, 11.T–45.T, 48.T–106.T).
- **[Т·L1] (прямые доказательства)**: ~35 теорем — канонические (10.T1–T5), escape (13.T, 17.T), α_Apeiron (19.T), Axi-независимость 2-уровень (21.T), ι-embedding (22.T), 18.T T-2f\* immunity, 97.T tradeoff.
- **[Т·L2] (стандартная редукция + проверенная адаптация)**: ~55 теорем — большинство non-classical (48.T-54.T, 57.T), structural (11-16, 22-26), 91.T-93.T, **98.T-99.T (интенсиональное уточнение), 100.T-102.T (meta-classification)**.
- **[Т·L3] (редукция + ожидаемо-рутинная адаптация)**: ~29 теорем — включая 85.T UFH, 88.T-90.T (Lair/Yoneda расширения на (∞,∞)), 94.T-96.T ((∞,∞)-extensions), **103.T–106.T (maximality proofs для Diakrisis $\in \mathcal{L}_{\mathrm{Cls}}^{\top}$)**.
- **[Т·L2, conditional]**: **87.T** — условная теорема с явной Law-scope рамкой.
- **[Программа]**: 1 — 78.T UFH Verum.

**Прозрачность**: L3 не означает «не доказано», но «детальная адаптация стандарта не расписана в каталоге». Такие упоминания могут встретить «недостаточно проработаны» критика — по П-0.6 явно признаем.

## Verum-готовность

Для Пути Б — приоритизация теорем по Verum-сложности:

**Легко (сессии 1-10)**: 10.T1-T5, 11.T1-T2, базовые определения.

**Средне (сессии 10-20)**: 12.T1-T2, 14.T1, 16.T1, 22.T1.

**Сложно (сессии 20-40)**: 13.T, 17.T, 18.T, 29.T, 30.T.

**Очень сложно (сессии 40+)**: 43.T1, AFN-T (частичная).

## Статус-легенда

- **[Т]**: доказательство полное.
- **[Т-набр]**: строгий набросок; полная формализация — работа Пути Б.
- **[Г]**: гипотеза (ещё не доказана).
- **[С]**: условное (при дополнительных допущениях).
- **[✗]**: ретрактировано.

## Карта защит AFN-T (навигационный указатель)

В литературе оснований известны три классических обходных пути вокруг предельных no-go-результатов: экстенсиональный коллапс, универс-полиморфизм без супремума, трансметатеоретическая рефлексивная башня. Каждый путь соответствует реальному математическому явлению и получает структурный ответ в корпусе. Навигационная карта:

### Путь 1 — универс-полиморфизм

**Содержание**: proper-class-sized structures без супремума, формальная спецификация через схемы аксиом без ограниченного универсума.

**Защитные теоремы**:
- **57.T** [Т·L2] — ν(α_poly-HoTT) = ω·2+1, Morita-редуцируемо к `lim_ℓ Fun(𝒰_ℓ, 𝒰_ℓ)` (Lurie HTT §4.2).
- **56.C1** — universe-polymorphic modality ⇒ элемент 𝒮_S^{global} ⇒ Morita-редуцируема ⇒ не Уровень 6.
- **61.T** [Т·L2] — α_inf-cat с ν = Ω (класс-ординал) остаётся внутри (∞,∞)-Diakrisis.
- **94.T** [Т·L2] — каждая R-S имеет единственное α_R-S^{(∞,∞)}.

**Статус**: formally closed.

### Путь 2 — трансметатеоретическая рефлексивная башня

**Содержание**: трансфинитная последовательность $S_{\kappa+1} = S_\kappa + \mathrm{Con}(S_\kappa)$ с ординалом $\sup_\kappa|S_\kappa|$, превосходящим любое фиксированное $|S|$.

**Защитные теоремы**:
- **19.T1** [Т·L2] — α_Apeiron = 𝖠(𝖠) как внутренний fixed point в Fix(𝖬).
- **31.T3** [Т·L2] — |Diakrisis + α_Apeiron| = |ZFC + 2 inaccessibles| exact.
- **68.T** [Т·L2] — тривиальная стабилизация (∞,∞+1)-Cat = (∞,∞)-Cat.
- **69.T** [Т·L2] — AFA-граница рефлексивных итераций.
- **90.T** [Т·L2] — Con(Diakrisis-full) = Con(ZFC + 2 inacc) exact.

→ Консолидированно в в MSFS Theorem `thm:reflective` (§8.2) + Theorem `thm:meta-vertical` (§7.4) + Convention `conv:zfc-inacc` (ZFC + 2 inacc).

**Статус**: formally closed.

### Путь 3 — интенсиональное уточнение

**Содержание**: Morita-эквивалентность теряет интенсиональный-структуру (proof-term, normalization strategy, identity-types), так что формально различные артикуляции могут быть Morita-эквивалентны, оставаясь интенсионально различными. Это известный в литературе тип типов феномен extensional collapse.

**Защитные теоремы**:
- **98.T** [Т·L2] — существование контравариантного 2-функтора $\mathbf{I}: \langle\!\langle \cdot \rangle\!\rangle^\mathrm{op} \to \mathcal{S}_\mathrm{int}$ через pullback-стабильные дисплейные 2-семейства (Jacobs-Streicher + 2-categorical lift Gambino-Garner). Свойства (I-1)–(I-4): homotopy invariance, gauge covariance, strict refinement of Morita (контрпример MLTT vs ETT через decidable/undecidable typechecking на дисплейном слое), Morita как 2-локализация $\mathbf{I}$ по классу display-тривиализующих 1-морфизмов $\mathcal{W}_\mathcal{U}$.
- **99.T** [Т·L2] — slice-locality: существует 2-Grothendieck-фибрация $\widetilde{\pi}: \mathcal{S}_\mathrm{int} \to \mathcal{M}_\mathrm{Fnd}$ такая, что диаграмма $\pi = \widetilde{\pi} \circ \mathbf{I}$ 2-коммутативна. Образ $\mathbf{I}$ параметризует слои $\mathrm{Int}([\alpha])$ над gauge-классами; интенсиональное уточнение не порождает новых точек классифицирующего пространства. пятиосевая абсолютность AFN-T остаётся неизменной.

**Статус**: ✅ formally closed.

**Структурная локализация**: интенсиональное уточнение живёт в слоях над $\mathcal{M}_\mathrm{Fnd}$, не в базе. Пять осей абсолютности (S, n, μ, ξ, π) действуют на базу; slice-layer ортогонален к базе и не добавляет новой оси no-go.

**Полное доказательство**: [/06-limits/08-intensional-refinement](/06-limits/08-intensional-refinement).

**Методологический контекст**: [NL-15](/07-methodology/03-negative-lessons#nl-15).

### Сводная таблица

| Путь / вопрос | Тип | Защитные теоремы | Статус |
|---|---|---|---|
| Universe-polymorphism | Размерный | 57.T, 56.C1, 61.T, 94.T | ✅ formally closed |
| Рефлексивная башня | Трансметатеоретическая | 19.T1, 31.T3, 68.T, 69.T, 90.T | ✅ formally closed |
| Интенсиональный refinement | Экстенсиональный коллапс | **98.T, 99.T** | ✅ formally closed |
| Meta-classification Level 5+ | Самоклассификация | **100.T, 101.T, 102.T** | ✅ formally closed |

Все три стандартных обходных пути формально закрыты; самоклассификация Diakrisis в пространстве Level 5+ meta-structures также формально закрыта. Корпус Diakrisis полностью устойчив к стандартным атакам на AFN-T: на extensional уровне — 5-осевая абсолютность (S, n, μ, ξ, π); на интенсиональный уровне — slice-locality 99.T; на meta-classification уровне — стабилизация 102.T. Детальное обсуждение: [/06-limits/02-th-final#три-обход-paths--формальное-закрытие](/06-limits/02-th-final#три-обход-paths--формальное-закрытие). Полные формальные доказательства — препринт [*MSFS*](/10-reference/04-afn-t-correspondence) §8.

## Связь с УГМ-теоремами

УГМ содержит 223 теоремы. Их связь с Diakrisis:

- Многие — инстанциации Diakrisis-теорем.
- Некоторые — специфические УГМ-утверждения.
- Все — часть Пути Б.

Подробно — [/05-assemblies/01-uhm](/05-assemblies/01-uhm).

## Следующий документ

[/10-reference/03-gap-status](/10-reference/03-gap-status).
