---
sidebar_position: 13
title: Curry-Howard-Lambek
---

# Curry-Howard-Lambek в Diakrisis-контексте

## Статус

**[Т]** — CHL-correspondence через 12.T1-T4 каталога (Lambek-Scott + Awodey-Voevodsky + Abramsky-Coecke).

## Обзор

Классическое CHL-соответствие получает Diakrisis-обоснование: Curry-Howard (proofs = types) и Lambek (proofs = morphisms in CCC) объединяются как **специальные случаи** Морита-эквивалентности.

## Классическое CHL

**Curry-Howard correspondence**: proofs в λ-исчислении = programs в типовой системе.

**Lambek correspondence**: proofs (в intuitionistic logic) = morphisms в cartesian closed categories.

**CHL-триангуляция**:

```
       типовая теория
          /    \
    λ-исчисление — категорная теория
```

Все три — **формально эквивалентны** (Lambek-Scott, 1986).

**Вопрос для Diakrisis**: в каком смысле они эквивалентны формально?

## CHL-теорема в Diakrisis

### Артикуляции

Определим три соответствующие артикуляции:

- **α_prop**: пропозициональная логика (интуиционистская).
- **α_lambda**: λ-исчисление (типизированное).
- **α_CCC**: cartesian closed category.

### Основная теорема

**Теорема 12.T1 (CHL в Diakrisis)**:

$$\alpha_{prop} \;\sim_M\; \alpha_{lambda} \;\sim_M\; \alpha_{CCC}.$$

То есть все три — Морита-эквивалентны в Diakrisis-смысле.

*Обоснование*: ρ(α_prop), ρ(α_lambda), ρ(α_CCC) — все реализуют CCC (в разных gauge-выборах). По теореме 29.C1 Морита = gauge. ∎

**Следствие 12.C1**: CHL — **формально** выражено как gauge-эквивалентность в Diakrisis. Три «направления» одной структуры.

## Расширения

### Extended CHL

**Dependent Curry-Howard**: зависимые типы = зависимые пропозиции = fibered categories.

В Diakrisis:
- α_dep-prop (зависимая логика).
- α_MLTT (Martin-Löf теория типов).
- α_fib-cat (fibered category).

Все Морита-эквивалентны (аналогично 12.T1).

**Теорема 12.T2 (Dependent CHL)**:

$$\alpha_{dep\text{-}prop} \;\sim_M\; \alpha_{MLTT} \;\sim_M\; \alpha_{fib\text{-}cat}.$$

### Linear CHL

**Linear logic** (Girard) ↔ **linear λ-calculus** ↔ **symmetric monoidal category**.

В Diakrisis: α_lin-prop ∼_M α_lin-lambda ∼_M α_SMC.

Из теоремы о логиках: α_lin квантоподобна. CHL расширяется на квантовую логику:

**Теорема 12.T3 (Quantum CHL)**:

$$\alpha_{quantum\text{-}logic} \;\sim_M\; \alpha_{quantum\text{-}lambda} \;\sim_M\; \alpha_{quantum\text{-}CCC}.$$

### HoTT CHL

**HoTT CHL**: типы = пропозиции = ∞-groupoids.

В Diakrisis:
- α_hott.
- α_∞-prop.
- α_∞-grpd.

Все Морита-эквивалентны; связь с univalence (как gauge-принципом).

**Теорема 12.T4 (HoTT CHL)**:

$$\alpha_{hott} \;\sim_M\; \alpha_{\infty\text{-}prop} \;\sim_M\; \alpha_{\infty\text{-}grpd}.$$

## Структурное значение

### Три «перспективы» одной структуры

| Перспектива | Язык | Объекты | Морфизмы |
|---|---|---|---|
| Логическая | logic | пропозиции | доказательства |
| Вычислительная | λ-calculus | типы | термы |
| Категорная | CCC | объекты | морфизмы |

Все три — **идентичны** через gauge-эквивалентность в Diakrisis.

### Перевод между перспективами

Gauge-преобразование между α_prop ↔ α_lambda ↔ α_CCC:

- Proof φ ⇒ program t: φ ↔ типизация терма t.
- Program t ⇒ morphism f: t ↔ морфизм в CCC.
- Morphism f ⇒ proof φ: обратное через Yoneda.

## Применения

### В логике

- **Автоматизация доказательств**: через λ-исчисление (Coq, Lean).
- **Денотационная семантика**: через категорную теорию.

### В программировании

- **Типы как пропозиции**: основа functional programming.
- **Curry-Howard как спецификация**: программа = proof.

### В математике

- **Categorical logic**: CCC как модель логики.
- **∞-topoi**: HoTT-CHL.
- **Linear algebra**: через linear CHL.

### В Diakrisis

- Обоснование **единства** логики, вычислимости и категории.
- Каждый gauge-класс может быть reinterpreted в трёх перспективах.
- Практическое: Verum-формализация УГМ использует CHL для доказательств.

## Связь с Rich-основанием

Rich-основания (из 29.T) имеют CHL-структуру:

- R1 (самоссылка) ↔ Curry-Howard fixed-point (Y-combinator).
- R2 (мета-теория) ↔ Higher-order types.
- R3 (рефлексия) ↔ internal теория типов.
- R4 (трансфинитная глубина) ↔ ∞-CHL.

## Признанные редукции

- **Curry (1934, 1958)**: combinatory logic.
- **Howard (1969)**: formulae-as-types.
- **Lambek (1968, 1980)**: categorical logic.
- **Lambek-Scott (1986)**: Introduction to Higher-Order Categorical Logic.

## Итог

- **CHL-триангуляция**: logic ↔ λ-calculus ↔ CCC.
- **12.T1**: все три Морита-эквивалентны в Diakrisis.
- **Расширения**: dependent, linear, quantum, HoTT.
- **Применения**: автоматизация, семантика, Verum.
- **В Rich-основаниях**: CHL-структура обеспечивает полноту.

## Следующий документ

[/03-formal-architecture/14-synthetic-differential](/03-formal-architecture/14-synthetic-differential).
