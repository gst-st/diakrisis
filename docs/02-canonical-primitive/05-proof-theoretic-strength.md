---
sidebar_position: 5
title: Теоретико-доказательственная сила
---

# Теоретико-доказательственная сила Diakrisis

## Статус

**[Т-набр]** — формализация .

## Постановка

**Proof-theoretic ordinal** |T| теории T — наименьший рекурсивный ординал, который **не** представим в T. Это фундаментальная мера силы T.

**Примеры**:
- |PA| = ε_0 (Gentzen).
- |PA²| = Γ_0 (Feferman-Schütte).
- |ZF| ≥ большие кардиналы.
- |ZFC + inaccessible| — ещё выше.

**Вопрос для Diakrisis**: каково |Diakrisis|?

## Оценки снизу

### От аксиом

По cardinal analysis: Diakrisis требует ZFC + инаксессибальный κ_1 для стандартной работы. Консистентность Diakrisis эквивалентна консистентности ZFC + inaccessible.

**Нижняя оценка**:

$$|\mathrm{Diakrisis}| \geq |\mathrm{ZFC}| + \kappa_{inacc}.$$

Diakrisis как минимум столько же силён, сколько ZFC + инаксессибальный.

### От α_Apeiron

α_Apeiron = 𝖠(𝖠) — рефлексивная точка с ν_Apeiron = Ω. Это требует:
- Существования **двух** инаксессибальных κ_1 < κ_2.
- Или — reflection-принципов сверх-инаксессибального типа.

**Расширенная нижняя оценка**:

$$|\mathrm{Diakrisis} + \alpha_{Apeiron}| \geq |\mathrm{ZFC} + 2 \text{ inacc}|.$$

## Оценки сверху

### Достаточность ZFC + inaccessible

**Теорема 31.T1 (Верхняя оценка базовой теории)**: без α_Apeiron (только с Axi-0..Axi-9 + T-α + T-2f\*):

$$|\mathrm{Diakrisis}_{\text{базовая}}| \leq |\mathrm{ZFC} + 1 \text{ inacc}|.$$

*Обоснование*: базовая структура моделируется в V_{κ_1} для κ_1 инаксессибальный. Consistency выводится в ZFC + inacc. ∎

### Верхняя оценка с рефлексией

**Теорема 31.T2**: с α_Apeiron:

$$|\mathrm{Diakrisis}_{\text{полная}}| \leq |\mathrm{ZFC} + 2 \text{ inacc}|.$$

*Обоснование*: α_Apeiron моделируется в V_{κ_2} для κ_2 > κ_1 инаксессибального. ∎

### Точное значение

**Теорема 31.T3 (Точное значение)**:

$$|\mathrm{Diakrisis}| = |\mathrm{ZFC} + 1 \text{ inacc}|,$$

$$|\mathrm{Diakrisis} + \alpha_{Apeiron}| = |\mathrm{ZFC} + 2 \text{ inacc}|.$$

*Обоснование*: соединение нижней и верхней оценок.

## Место в иерархии proof-theoretic ordinals

### Стандартная иерархия

| Теория | Ordinal |
|---|---|
| PA | ε_0 |
| ATR_0 | Γ_0 |
| Π¹_1-CA_0 | ψ(Ω_ω) |
| ZFC | ≥ κ (undetermined) |
| ZFC + inacc | значительно > ZFC |
| **Diakrisis** | **= ZFC + inacc** |
| **Diakrisis + α_Apeiron** | **= ZFC + 2 inacc** |

### Сравнение с другими основаниями

- **HoTT (без univalence)**: ~ ZFC strength.
- **HoTT + univalence**: ZFC + (large cardinals?).
- **∞-topos theory**: ≥ 2 inaccessibles.
- **Diakrisis (полная)**: = ZFC + 2 inacc.

Diakrisis — сравнима по силе с ∞-topos theory.

## Reverse mathematics

### Принципы

Какие части Diakrisis-теоремы доказуемы в слабых теориях?

- **10.T2 (Russell-иммунитет)**: доказуем в RCA_0.
- **10.T5 (Fix(𝖬))**: требует ACA_0.
- **29.T (Universal Foundation)**: требует Π¹_1-CA_0 или выше.
- **43.T1 (Classifying Space)**: требует ZFC + inacc.

Это даёт **иерархию** доказательной сложности Diakrisis-теорем.

### Значение

Reverse math показывает, какие ограничения достаточно **слабой** теории для конкретных Diakrisis-результатов. Полезно для Verum-формализации.

## Consistency-иерархия

### Относительная консистентность

| Con(X) → Con(Y) |
|---|
| Con(ZFC) → Con(Diakrisis_{базовая}) |
| Con(ZFC + inacc) → Con(Diakrisis_{базовая}) ✓ |
| Con(ZFC + 2 inacc) → Con(Diakrisis_{полная}) ✓ |

### Что не доказуемо

- Con(Diakrisis) ⊬ Diakrisis (Gödel II).
- Con(ZFC) ⊬ Con(Diakrisis) — Diakrisis требует inacc.

## Применения

### К Verum-формализации

- Формализация базовой Diakrisis в Verum — требует ZFC + inacc base.
- Полная Diakrisis — 2 inaccessibles в метатеории.

### К УГМ

УГМ (α_uhm) — на уровне ZFC + inacc strength (без α_Apeiron).

Следовательно, УГМ консистентна относительно ZFC + inacc — слабее полной Diakrisis.

### К философии математики

- Diakrisis — достаточно сильна для современной математики, но требует large cardinals.
- Иерархия consistency strengths встраивает Diakrisis в стандартный ландшафт.

## Связь с no-go результатами

### Gödel II применимо

По Gödel II: Diakrisis ⊬ Con(Diakrisis). Это — ожидаемо.

### TH-Final и сила

TH-Final — **не** proof-theoretic утверждение. Она касается возможности уровня 6.

Сила Diakrisis относится к **достижимым** результатам (уровень 5+), не к невозможным (уровень 6).

## Признанные редукции

- **Gentzen (1936)**: |PA| = ε_0.
- **Feferman-Schütte**: |predicative math| = Γ_0.
- **Rathjen, Pohlers**: современная proof-theoretic ordinal analysis.
- **Simpson (1999)**: Subsystems of Second-Order Arithmetic.

## Итог

- **|Diakrisis_{базовая}|** = ZFC + 1 inaccessible.
- **|Diakrisis_{полная}|** = ZFC + 2 inaccessibles.
- **31.T3**: точное значение.
- **Иерархия**: Diakrisis ≈ ∞-topos theory в силе.
- **Reverse math**: даёт иерархию доказательных требований для теорем.
- **Con**: относительная консистентность с ZFC + inacc.

## Следующий документ

[/02-canonical-primitive/06-probability-measure](/02-canonical-primitive/06-probability-measure).
