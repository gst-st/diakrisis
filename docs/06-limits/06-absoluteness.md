---
sidebar_position: 6
title: Абсолютность TH-Final (пять осей)
---

# Абсолютность TH-Final — ABSOLUTA_TOTALIS

## Статус

**TH-Final ABSOLUTA_TOTALIS** — пятиосевая абсолютность AFN-T: теорема справедлива равномерно по **всем** структурным осям вариации формальной математики.

**Каноническое изложение** — препринт [*AFN-T*](/10-reference/04-afn-t-correspondence) §7, Theorem `thm:five-axis`.

Настоящий документ содержит Diakrisis-специфическую интерпретацию пяти осей и их связь с каноническим примитивом $(\langle\langle \cdot \rangle\rangle, \mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\bullet)$.

## Таблица пяти осей

| Ось | Вариация | Diakrisis № | Препринт |
|---|---|---|---|
| **Горизонтальная** | $S \in \mathrm{R\text{-}S}$ (Rich-metatheories) | 55.T | Theorem `thm:horizontal` |
| **Вертикальная** | $n \in \mathbb{N} \cup \{\infty\}$ (категорный уровень) | 59.T.1 | Theorem `thm:vertical` |
| **Мета-вертикальная** | $\mu$-iterations (meta-итерации) | 69.T | Theorem `thm:meta-vertical` |
| **Латеральная** | $\xi$ (альтернативные categorical orderings) | 84.T | Theorem `thm:lateral` |
| **Полноты** | $\pi$ (Lawvere-scope) | 87.T | Theorem `thm:completeness` |

Комбинированное утверждение — препринт Theorem `thm:five-axis`: для каждого кортежа $(S, n, \mu, \xi, \pi)$ AFN-T справедлива.

## Логическая независимость осей

**Важное уточнение** (препринт Remark `rem:axes-dependence`): пять осей **не полностью логически независимы**:

- **completeness subsumes horizontal**: каждая R-S лежит в Lawvere-scope $\mathcal{L}\mathcal{S}$ по (R5).
- **lateral ≡ vertical**: альтернативные orderings редуцируются к $(\infty, n)$-Cat (Ara–Maltsiniotis, Barwick–Schommer-Pries).
- **meta-vertical = $\mu$-closure of vertical**: стабилизация на $(\infty, \infty)$ (Theorem `thm:bergner-lurie-stab`).

**Минимальный логически независимый набор** — **2 оси**: горизонтальная + вертикальная. Пятиосевая формулировка сохраняется *педагогически*: каждая ось соответствует конкретному классу исторических bypass-аргументов.

## Diakrisis-интерпретация по осям

### Горизонтальная — 55.T

Независимость TH-Final от выбора R-S. В Diakrisis-языке: для каждой $\alpha_S \in \langle\langle \cdot \rangle\rangle$ (артикуляции, соответствующей $S$), TH-Final справедлива.

**Ключевая лемма** (препринт Lemma `lem:SS-membership`): формальная определимость $X$ в $F \subseteq S$ ⇒ $X \in \mathcal{S}_S$ (класс $S$-определимых объектов).

Связь с внутренней Diakrisis-структурой:

- $\alpha_\mathrm{math}$ не привилегирована (T-α): обобщается до любого $\alpha_S$.
- Gauge-группа $G$ автоэквивалентностей $\langle\langle \cdot \rangle\rangle$ транзитивно действует на R-S-индексированной фибрации $\rho$.

### Вертикальная — 59.T.1, 66.T

Независимость TH-Final от категорного уровня $n$. Прямое доказательство на уровне $(\infty, \infty)$ (препринт Theorem `thm:direct-infty`, соответствует Diakrisis 66.T «$(\infty,\infty)$-Lawvere fixed-point») использует Lawvere FP в $(\infty, \infty)$-cartesian closed category $\mathcal{C}_S := \colim_n \mathrm{Syn}^{(\infty,n)}(S)$.

**Важное ограничение** (препринт Remark `rem:direct-infty-scope`): прямое доказательство на $(\infty, \infty)$ работает только для **классических** $S$ (Boolean internal logic). Для конструктивных $S$ (HoTT, MLTT, CIC, CZF) используется основная Theorem `thm:afnt` через Lambek-Scott reflection.

Diakrisis-аналог: для $\alpha_\mathrm{hott}, \alpha_\mathrm{cic}, \alpha_\mathrm{int}$ применяется [T-α_c](/02-canonical-primitive/02-axiomatics#t-alpha-spec) (конструктивный вариант).

### Мета-вертикальная — 69.T

Замкнутость относительно meta-итераций $\mu$: $(\infty, \infty + 1)$-Cat $\simeq (\infty, \infty)$-Cat (Barwick–Schommer-Pries 2021 через $\Theta_n$ Rezk 2010). Meta-иерархия не порождает структурной новизны за пределами $(\infty, \infty)$.

Diakrisis-аналог: iterated $\mathsf{M}^k(\alpha)$ не эскалирует до Level-6 через мета-orbit.

### Латеральная — 84.T

Альтернативные категорные порядки (operadic, globular, cubical, opetopic, double) редуцируются к $(\infty, n)$-Cat. Diakrisis-следствие: $\rho$-проекция инвариантна к выбору categorical ordering.

### Полноты — 87.T (Lawvere-scope)

Полная характеризация: любая foundational-theoretic вариация сводится к одной из четырёх осей в пределах Lawvere-scope $\mathcal{L}\mathcal{S}$. Пятая ось $\pi$ закрывает вопрос «есть ли незамеченная ось?» формально.

**Формальное определение $\mathcal{L}\mathcal{S}$** — препринт Definition `def:law-scope`. Условия (L1)-(L4): syntactic category + semantic 2-category + адъюнкция $\mathrm{Syn} \dashv \mathrm{Mod}$ + $(\infty, n)$-realization.

## Структурная связь с TH-Final

ABSOLUTA_TOTALIS — это *комбинированное* утверждение: TH-Final + 5 осей = AFN-T (Absolute Foundation No-Go Theorem). Диаграмма зависимостей пяти осей в препринте — Figure `fig:five-axis`.

## Следующие теоремы

После установления ABSOLUTA_TOTALIS (пять осей) — три стандартных bypass-paths должны быть формально закрыты ([`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement), препринт §8) и мета-классификация Level 5+ должна быть стабилизирована ([`/06-limits/09-meta-classification`](/06-limits/09-meta-classification), препринт §9).

## Ссылки

- **Препринт §7** — основное изложение пяти осей;
- **Препринт §10** — positioning против Ernst 2015, Hamkins multiverse, BSP 2021;
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — полная таблица номеров.
