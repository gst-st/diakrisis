---
sidebar_position: 8
title: Производные структуры
---

# Производные структуры и гомологическая алгебра в Diakrisis

## Статус

**[Т-набр]** — формализация .

## Постановка

Derived categories (Verdier), homological algebra (Cartan-Eilenberg), stable ∞-categories (Люри HA) — центральные инструменты современной математики. Они:

- Управляют когомологиями.
- Объединяют различные вычислительные контексты.
- Лежат в основе derived algebraic geometry, K-theory, motivic homotopy.

**Вопрос**: как они выражаются в Diakrisis?

## Артикуляция α_derived

### Структурные инварианты

α_derived кодирует:

- **D_1 (Абелева категория A)**: базовая (модули над кольцом, шефы).
- **D_2 (Цепные комплексы Ch(A))**: ⋯ → X_{n+1} → X_n → X_{n-1} → ⋯ с d² = 0.
- **D_3 (Quasi-isomorphisms)**: морфизмы, индуцирующие изо на когомологиях.
- **D_4 (Derived category D(A))**: Ch(A) / quasi-iso.
- **D_5 (Triangulated structure)**: distinguished triangles.
- **D_6 (t-structure)**: когомологическая иерархия.
- **D_7 (∞-категорное расширение)**: stable ∞-category для D(A).

### Ординальная позиция

**Теорема 45.T1**: ν_{α_derived} = ω · 2 + 1.

*Обоснование*:
- Начинается с абелевой категории (ω для модулей/шефов).
- Добавляет цепные комплексы (ω-длинные).
- Quasi-quotient (+1).
- Triangulated/∞-структура (+ω для высших когомологий).

Итого ω·2+1. ∎

**Сравнение**: α_derived более глубокая, чем α_NCG (ω·2), но менее, чем α_cohesion (ω·2+4).

## Связь с 𝖬-итерацией

### Derived как категорификация

По теореме 36.T1 (категорификация = 𝖬): derived category получается категорификацией абелевой категории.

**Теорема 45.T2**: α_derived ∈ Trace(𝖠) получается как 𝖬(α_abelian).

*Обоснование*: derived functors — n-functors, категорифицированные обычные. ∎

## Triangulated structure

### Distinguished triangles

**Def 45.1**: distinguished triangle в D(A):

$$X \to Y \to Z \to X[1]$$

с определёнными свойствами.

### Аксиомы Verdier

- (TR1): X → X → 0 → X[1] distinguished.
- (TR2): rotation.
- (TR3): morphism lifting.
- (TR4): octahedral axiom.

### В Diakrisis

Triangles — специфические диаграммы в Trace(𝖠). Они формализуют «short exact sequences» в категорной форме.

## t-structure

### Определение

**Def 45.2**: t-structure на triangulated category — пара (D^{≤0}, D^{≥0}) с условиями:

- Hom(D^{≤0}, D^{≥1}) = 0.
- Каждый X имеет triangle X^{≤0} → X → X^{≥1} → X^{≤0}[1].

### В Diakrisis

t-structure даёт **когомологическую иерархию** через ⊏-отношение:

- X^{≤0} — «простые» компоненты.
- X^{≥0} — «сложные».

## Stable ∞-категории

### Люри HA

**Stable ∞-category**: ∞-category с finite limits и colimits, где pushout squares = pullback squares.

**Связь**: D(A) как ∞-category — стабильна.

### В Diakrisis

Stable ∞-categories — специфический gauge-класс в 𝓜_Fnd.

## Cohomology через derived

### Производные функторы

**Def 45.3**: для функтора F: A → B между абелевыми, производные функторы:

- L_i F: derived left.
- R^i F: derived right.

Они вычисляют **обструкции** точности F.

### В Diakrisis

Производные функторы F — n-функторы в Trace(𝖠), коммутирующие с 𝖬 с коррекциями.

**Теорема 45.T3**: R^i F(α) = H^i(F-transform α) в Diakrisis.

## Spectral sequences

### Гротендик spectral sequence

$$E_2^{p,q} = R^p F R^q G \Rightarrow R^{p+q}(F \circ G).$$

### В Diakrisis

Spectral sequences — инструмент computation cohomology в Trace(𝖠). Они коммутируют с 𝖬 до sheaf condition.

## K-theory

### Algebraic K-theory

**K_0(A)** = Гротендик группа классов проективных модулей.
**K_1(A)** = группа изоморфизмов.
**K_n(A)** = high K-theory.

### В Diakrisis

K-theory — специфический инвариант в α_derived.

**Следствие 45.C1**: K-theory — часть derived structure Diakrisis.

## Derived algebraic geometry (DAG)

### Schemes → Derived schemes

Derived scheme: scheme + derived structure on rings.

### В Diakrisis

DAG — точка в 𝓜_Fnd, получаемая категорификацией обычной algebraic geometry.

**Теорема 45.T4**: α_DAG = 𝖬(α_scheme) (приблизительно, с корректировками).

## Motivic homotopy

### Воеводский motives

Motives — universal cohomology theory. Связь с derived structures фундаментальная.

### В Diakrisis

Motivic theory — ρ-проекция специфической α_motivic ∈ Trace(𝖠).

**Гипотеза 45.H1**: α_motivic ⊏_κ α_derived для некоторого κ.

## Применения

### В алгебраической геометрии

- Derived schemes.
- Motivic theory.
- K-theory.

### В топологии

- Spectra as stable ∞-category.
- Cohomology theories.
- Generalized (co)homology.

### В Diakrisis

- **α_derived**: specific калибровочный класс.
- **Связь с УГМ**: cohomological aspects of quantum systems.

## Связь с другими разделами

### С cohesion

Derived + cohesion: derived cohesive ∞-topos (Шрайбер).

### С ∞-topos

Stable ∞-categories — специфический случай ∞-topoi.

### С NCG

Derived NCG — расширение Конн theory через derived methods.

## Признанные редукции

- **Verdier (1967)**: derived categories.
- **Cartan-Eilenberg (1956)**: homological algebra.
- **Люри (2017)**: Higher Algebra.
- **Воеводский (2000+)**: motives.

## Итог

- **α_derived** с ν = ω·2+1.
- **45.T1**: ординальная позиция.
- **45.T2**: derived как категорификация.
- **Triangulated + t-structure** — формальная структура.
- **Stable ∞-categories**: Люри formalism.
- **K-theory**: инвариант в α_derived.
- **DAG, motivic**: расширения.

## Следующий документ

[/02-canonical-primitive/09-conservation](/02-canonical-primitive/09-conservation).
