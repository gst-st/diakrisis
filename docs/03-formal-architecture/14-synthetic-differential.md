---
sidebar_position: 14
title: Синтетическая дифференциальная геометрия
---

# Синтетическая дифференциальная геометрия как артикуляция

## Статус

**[Т-набр]** — формализация `/apeiron/02-articulation/13-synthetic-differential.md`.

## Постановка

**Synthetic Differential Geometry** (SDG; Lawvere, Kock, Moerdijk-Reyes) — аксиоматический подход к дифференциальной геометрии. Вместо построения многообразий через atlases, постулируется:

- Существование **нильпотентных инфинитезималов** d (с d² = 0).
- **Kock-Lawvere axiom**: функции определяются своим значением на таких d.
- Гладкие пространства — объекты специфического топоса.

**Задача**: формализовать SDG как α_SDG ∈ Trace(𝖠).

## Артикуляция α_SDG

### Структурные инварианты

α_SDG кодирует:

- **S_1 (Кольцо R)**: коммутативное кольцо гладких величин.
- **S_2 (Нильпотенты D)**: D = {d ∈ R : d² = 0}, не сводится к {0}.
- **S_3 (Kock-Lawvere axiom)**: каждая f: D → R имеет вид f(d) = f(0) + f'(0) · d.
- **S_4 (Касательный бундл)**: TX = X^D для пространства X.
- **S_5 (Дифференциальные формы)**: через алгебру функций на D^n.
- **S_6 (Внутренний язык)**: интуиционистский (Kock).
- **S_7 (Моделирование C^∞-геометрии)**: гладкие многообразия — специфические объекты в SDG-топосе.

### Ординальная позиция

**Теорема 13.T1**: ν_{α_SDG} = ω + 2.

*Обоснование*:
- Алгебраическая структура кольца (ω).
- Нильпотенты + Kock-Lawvere (+ 1).
- Геометрическая структура (+ 1).

Итого ω+2 (наравне с α_CIC). ∎

## Kock-Lawvere аксиома в Diakrisis

### Структурный смысл

**Kock-Lawvere**: функция на D **однозначно** определяется её значением и наклоном в 0.

**Diakrisis-перевод**: свойство **линейности** в окрестности точки. Соответствует линеаризации 𝖬 в окрестности Fix(𝖬).

**Теорема 13.T2 (Kock-Lawvere = локальная линеаризация)**: Kock-Lawvere axiom в SDG эквивалентна линеаризации 𝖬 в окрестности неподвижных точек Fix(𝖬).

*Обоснование*: оба утверждения говорят о **линейной структуре малых возмущений**. В SDG: нильпотенты. В Diakrisis: линеаризованный 𝖬 вблизи Fix(𝖬). ∎

**Следствие 13.C1**: SDG — **локальная теория** Diakrisis около аттракторов.

### Нильпотенты как инфинитезимальные перемещения

В dynamical systems: якобиан T_{α\*} линеаризует 𝖬 вблизи α\*. Нильпотентные возмущения d ∈ D соответствуют инфинитезимальным перемещениям в касательном пространстве.

**Следствие 13.C2**: D (нильпотенты в SDG) ↔ Ядро линеаризованного 𝖬 в Diakrisis.

## Касательные бундлы

### TX = X^D

В SDG: касательный бундл — это exponential X^D.

**Diakrisis-перевод**: TX = внутренний хом [D, X] в SDG-подтопосе Diakrisis.

**Теорема 13.T3**: касательный бундл TX = [D, X] — специфический fibered объект в Diakrisis (fibration section).

### Связь с ρ

ρ(α)[D] — реализация α на нильпотентах. Это — **касательное пространство α**.

**Следствие 13.C3**: ρ(α)[D] = T_α Diakrisis — касательное пространство к α.

## Дифференциальные формы

### Алгебра форм

Ω^n(X) = funcs(D^n → R), как в SDG.

**В Diakrisis**: формы Ω^n(α) — функционалы на n-кратном касательном пространстве α.

### De Rham cohomology

**Теорема 13.T4**: H_{dR}^n(α) существует для каждой α и даёт dR-cohomology.

Это — Diakrisis-версия de Rham теории.

## Внутренний язык SDG

### Интуиционистский

SDG требует intuitionistic логику (Kock). Связь с каталогом логик:
- α_SDG базируется на α_int.
- Gauge-класс α_SDG включает α_int.

### Внутренняя логика Diakrisis

**Следствие 13.C4**: в gauge-classе α_SDG, Diakrisis использует intuitionistic логику для differential reasoning.

## Применения

### В физике

- **General Relativity**: geometry of spacetime.
- **Gauge theory**: connection и curvature через differential forms.
- **String theory**: loop spaces и differential geometry.

### В УГМ

- **Γ ∈ D(ℂ⁷)** — «поверхность» с differential structure.
- **ℒ_Ω** — vector field на D(ℂ⁷).
- **Пути** Γ(t) — integral curves.

**Следствие 13.C5**: УГМ-динамика — частный случай SDG на D(ℂ⁷).

### В mathematics

- **Differential topology**: через SDG вместо классики.
- **Algebraic geometry**: через derived algebraic geometry (DAG).

## Связь с другими разделами

### С dynamical systems

- Линеаризация 𝖬 (Jacobian) — differential structure.
- Стабильность (Lyapunov) — через eigenvalues linearization.

### С cohesion

**Схождение**: cohesive ∞-topoi Schreiber включают SDG-like structure.

Schreiber DCCT: differential geometry в cohesive setting — естественно.

### С curry-howard-lambek

**Теорема 13.T5**: SDG в α_SDG ↔ dependent type theory через CHL.

Это даёт **dependent differential type theory** (DDTT) — активная программа исследования.

## Признанные редукции

- **Lawvere (1967)**: synthetic differential geometry.
- **Kock (1981, 2006)**: Synthetic Differential Geometry book.
- **Moerdijk-Reyes (1991)**: Models for Smooth Infinitesimal Analysis.
- **Schreiber DCCT**: modern synthesis.

## Итог

- **α_SDG** — артикуляция synthetic differential geometry.
- **ν_{α_SDG} = ω + 2**.
- **Kock-Lawvere** ↔ локальная линеаризация 𝖬 (13.T2).
- **TX = X^D** — касательный бундл.
- **D ≠ {0}** — нильпотенты как инфинитезимали.
- **Связь с УГМ**: динамика на D(ℂ⁷) — SDG.
- **Связь с HoTT**: dependent differential type theory — программа.

## Следующий документ

Возврат к [/04-extractions/00-overview](/04-extractions/00-overview) (раздел закрыт).

Для дальнейшего углубления: [/02-canonical-primitive/05-proof-theoretic-strength](/02-canonical-primitive/05-proof-theoretic-strength).
