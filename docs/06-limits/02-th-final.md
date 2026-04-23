---
sidebar_position: 2
title: TH-Final — центральная теорема
---

# TH-Final — Иерархическая теорема о пределах формализации

## Статус и каноническая форма

**Центральный результат Diakrisis**. Формализует границу формальной математики относительно любой разумной Rich-метатеории на любом категорном уровне.

**Каноническое изложение** находится в препринте *AFN-T* (*A No-Go Theorem for Absolute Foundations of Mathematics*, Sereda 2026):

- **TH-Final (combined)** = препринт Theorem `thm:afnt` (§5--§6).
- **TH-Final α-часть** = препринт Theorem `thm:afnt-alpha` (§5).
- **TH-Final β-часть** = препринт Theorem `thm:afnt-beta` (§6).
- **TH-Final ABSOLUTA_TOTALIS** (пять осей) = препринт Theorem `thm:five-axis` (§7).

Настоящий документ сохраняет Diakrisis-контекст (мотивация, канонический примитив, связь с внутренней аксиоматикой); формальные утверждения и доказательства — в препринте. Таблица соответствия номеров: [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence).

**Статус**: [Т-набр] — строгость на уровне стандартных no-go-теорем Gödel/Tarski/Lawvere; формализация в proof-assistant (Verum/Lean) — программа [Пути Б](/09-applications/00-path-B-uhm-formalization).

## Постановка (Diakrisis-контекст)

Формальная математика развивается через выбор **основания** — формальной системы $F$ (ZFC, HoTT, CIC, NCG, ...). Естественен вопрос: существует ли **предельное** основание — такое $F^*$, из которого выводится вся иерархия оснований, включая свою собственную метатеоретическую позицию?

**TH-Final** — структурный ответ: **нет**, и это не ограничение знания, а формальный инвариант.

## Канонический контекст (с опорой на препринт)

### Reasonable Rich-Metatheory (R-S)

Формальное определение — препринт Definition `def:rs` (условия (R1)--(R5)). В Diakrisis-нотации соответствие полное:

- (R1) арифметическая полнота через Robinson $\mathsf{Q}$;
- (R2) r.e. аксиоматизация;
- (R3) модельная непустота;
- (R4) Gödel-кодирование;
- (R5) категорная семантика в $(\infty, n_S)$ для некоторого $n_S \in \mathbb{N} \cup \{\infty\}$.

**Класс $\mathcal{S}_S$ — $S$-определимых объектов** формально определён в препринте `def:SS`; соответствует понятию «S-определимых структур» в Diakrisis-корпусе без изменений.

### Три условия уровня 6 — (F), (Π_4), (Π_3-max)

Формальные определения: препринт `def:F`, `def:pi4`, `def:pi3max`. Условие (F_S) уточнено в препринте через пару (subtheory inclusion $\iota_F$, model restriction $\iota_F^*$) — уточнение, устраняющее амбивалентность прежней формулировки "$F \subseteq S$".

**Diakrisis-инварианты** (сохраняются):

- $(F)$ — формальная определимость в некоторой R-S;
- $(\Pi_4)$ — не-редуцируемость к $\mathcal{S}_S$;
- $(\Pi_3\text{-max})$ — максимальная генеративность.

### TH-Final

**Утверждение** (препринт `thm:afnt`): для любой $S \in \mathrm{R\text{-}S}$ и любого $n \in \mathbb{N} \cup \{\infty\}$ не существует объекта $X$, удовлетворяющего $(F_S) \wedge (\Pi_{4,S,n}) \wedge (\Pi_{3\text{-max},S,n})$.

**Следствие**: уровень 6 иерархии ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy)) формально пуст: $\mathcal{L}_6 = \emptyset$.

**Доказательство**: препринт §5 (α-часть, 3 леммы) + §6 (β-часть, accessibility argument) + новая Proposition `prop:proper-class` (proper-class-башни нарушают (R2)).

## Связь с каноническим примитивом

TH-Final формулируется через объекты, но её содержательный смысл в Diakrisis — это утверждение о метакатегории $\langle\langle \cdot \rangle\rangle$:

- $\alpha_\mathrm{math}$ ∈ $\mathrm{Ob}(\langle\langle \cdot \rangle\rangle)$ — не-привилегированная артикуляция по [T-α](/02-canonical-primitive/02-axiomatics#t-alpha-spec); любой кандидат на Level-6 артикуляцию $\alpha_6$ нарушает либо $(\Pi_4)$, либо $(\Pi_3\text{-max})$.
- Классифицирующее пространство $\mathfrak{M}_\mathrm{Fnd}$ (препринт $\fM$) — полное, но не эскалируемое до Level-6.
- Оператор $\mathsf{M}$ (accessible endofunctor) не порождает Level-6 fixed point в Fix($\mathsf{M}$).

Это связывает TH-Final с 18.T (Russell-иммунитет) и 39.T (gauge-симметрия).

## Пять осей абсолютности — TH-Final ABSOLUTA_TOTALIS

См. [`/06-limits/06-absoluteness`](/06-limits/06-absoluteness) и препринт §7 (Theorem `thm:five-axis` + Remark `rem:axes-dependence`).

**Короткая форма**:

| Ось | Diakrisis № | Препринт label |
|---|---|---|
| Горизонтальная ($S \in \mathrm{R\text{-}S}$) | 55.T | `thm:horizontal` |
| Вертикальная ($n \in \mathbb{N} \cup \{\infty\}$) | 59.T.1 | `thm:vertical` |
| Мета-вертикальная ($\mu$-итерации) | 69.T | `thm:meta-vertical` |
| Латеральная (альт.\ orderings) | 84.T | `thm:lateral` |
| Полноты (Lawvere-scope) | 87.T | `thm:completeness` |

**Ключевое уточнение препринта** (`rem:axes-dependence`): пять осей логически зависимы — horizontal subsumes completeness; lateral ≡ vertical; meta-vertical = μ-closure of vertical. Минимальный логически независимый набор — **2 оси** (горизонтальная + вертикальная). Пятиосевая формулировка сохранена pedagogically для обзора bypass-аргументов.

## Три bypass-paths — формальное закрытие

См. [`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement) (путь 3) и препринт §8.

**Taблица**:

| Путь | Diakrisis № | Препринт label |
|---|---|---|
| Universe polymorphism | 57.T + 56.C1 + 61.T + 94.T | `thm:universe` |
| Reflective tower | 19.T1 + 31.T3 + 68.T + 69.T + 90.T | `thm:reflective` |
| Intensional refinement | 98.T (construction) + 99.T (slice-locality) | `thm:I-existence` + `thm:slice-locality` |

Все три **формально закрыты**; сводная теорема — препринт Theorem `thm:bypass-summary`.

## Структурная характеризация AFN-T (препринт §10)

- **Relation to no-go series** (Cantor, Russell, Gödel, Tarski, Lawvere, Ernst 2015) — препринт `thm:subsumption`.
- **Relation to Hamkins multiverse** — complementary; multiverse как Level-6 candidate foreclosed by AFN-T (препринт `sec:ernst-multiverse`).
- **Relation to Barwick–Schommer-Pries 2021 unicity** — compatible; intra-paradigm unicity используется как технический аргумент `thm:bergner-lurie-stab`.

Diakrisis не воспроизводит это positioning — см. препринт §10.5.

## Diakrisis-specific интерпретация

TH-Final внутри Diakrisis — **структурное утверждение о границах формализации Различения** (phenomenon of distinction). Различение как акт (см. [`/01-diakrisis-phenomenon/00-act-not-object`](/01-diakrisis-phenomenon/00-act-not-object)) не сводится к объекту; TH-Final — математическое отражение этой философской аксиомы.

Связь с П-0 принципами ([`/00-foundations/02-zero-principles`](/00-foundations/02-zero-principles)):

- **П-0.0** (Act vs. object): Level-6 объект был бы объектификацией акта различения — запрещено;
- **П-0.4** (Internal/external): полнота Level-5+ (classify) без эскалации в Level-6 (generate) — формальное выражение того, что classifier $\neq$ generator.

## Формализация и следующие шаги

1. **Verum-formalization** ([Путь Б](/09-applications/00-path-B-uhm-formalization)) — препринт остаётся normative source; Lean-формализация воспроизводит структуру препринта 1-к-1.
2. **Paraconsistent расширение** — препринт Appendix B (Theorem `thm:paraconsistent-afnt`).
3. **Русская версия препринта** — `paper-ru/paper.tex` (в разработке).

## Дальше

- [`03-no-go-series`](/06-limits/03-no-go-series) — AFN-T в классической серии no-go-теорем;
- [`06-absoluteness`](/06-limits/06-absoluteness) — Пять осей детальнее;
- [`08-intensional-refinement`](/06-limits/08-intensional-refinement) — Путь 3 (intensional) формально;
- [`09-meta-classification`](/06-limits/09-meta-classification) — Level 5+ meta-классификация;
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — полная таблица соответствия.
