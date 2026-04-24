---
sidebar_position: 2
title: AFN-T — граничная лемма
---

# AFN-T — граничная лемма пространства 𝓜_Fnd

## Статус и каноническая форма

**Граничная лемма** структурной архитектуры Diakrisis. Формализует внешнюю границу пространства 𝓜_Fnd: уровень 6 (одновременно формально определимое, нередуцируемое, максимально генеративное основание) — структурно пустой stratum. Основной математический вклад Diakrisis — не сама граница, а классификация **внутреннего устройства** 𝓜_Fnd (плюрализм уровень 5+, условная мета-категоричность, slice-локальное интенсиональное уточнение, theory-level meta-стабилизация, **maximality proofs 103.T–106.T устанавливающие Diakrisis ∈ $\mathcal{L}_{\mathrm{Cls}}^{\top}$ как теорему**).

**Каноническое изложение** находится в препринте (*The Moduli Space of Formal Systems: Classification, Stabilization, and a No-Go Theorem for Absolute Foundations*, Sereda 2026):

- **AFN-T (combined)** = MSFS Theorem `thm:afnt` (§5--§6).
- **AFN-T (α-часть)**: Boundary Lemma: The Emptiness of уровень 6 = MSFS Theorem `thm:afnt-alpha` (§5). Синтаксис-семантический мост: $(F_S) \Rightarrow X \in \cS_S^{\mathrm{global}}$, $\id_X$ нарушает $(\Pi_4)$.
- **AFN-T (β-часть)**: Boundary Lemma: No Limit-Based Escape = MSFS Theorem `thm:afnt-beta` (§6). Трансфинитные приближения остаются в $\cS_S^{\mathrm{global}}$; proper-class-башни через Proposition `prop:proper-class`.
- **пятиосевая абсолютность AFN-T** = MSFS Theorem `thm:five-axis` (§7).

Настоящий документ сохраняет Diakrisis-контекст (мотивация, канонический примитив, связь с внутренней аксиоматикой); формальные утверждения и доказательства — в препринте. Таблица соответствия номеров: [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence).

**Статус**: [Т] — структурно тавтологическое доказательство (Рассел-type self-contradiction через синтаксис-семантическое сопряжение). Формализация в proof-assistant — программа [Пути Б](/09-applications/00-path-B-uhm-formalization).

## Постановка (Diakrisis-контекст)

Формальная математика развивается через выбор **основания** — формальной системы $F$ (ZFC, HoTT, CIC, NCG, ...). Естественен вопрос: существует ли **предельное** основание — такое $F^*$, из которого выводится вся иерархия оснований, включая свою собственную метатеоретическую позицию?

**AFN-T** — структурный ответ: **нет**, и это не ограничение знания, а формальный инвариант, следующий из синтаксис-семантического сопряжения (R5). Лемма `lem:SS-membership` даёт $(F_S) \Rightarrow X \in \cS_S^{\mathrm{global}}$; тождественный автоморфизм $\id_X$ реализует тривиальную редукцию Мориты к $X \in \cS_S$, что противоречит нередуцируемости $(\Pi_4)$. Пара условий $(F_S) \wedge (\Pi_4)$ самопротиворечива; триплет уровня 6 условий ($(F_S) \wedge (\Pi_4) \wedge (\Pi_{3\text{-max}})$) — тем более. Максимальная генеративность $(\Pi_{3\text{-max}})$ играет дефиниционную роль (семантический маркер «максимальности»), а не доказательную: её роль в AFN-T субсумирована.

## Канонический контекст (с опорой на препринт)

### Reasonable Rich-Metatheory (R-S)

Формальное определение — MSFS Definition `def:rs` (условия (R1)--(R5)). В Diakrisis-нотации соответствие полное:

- (R1) арифметическая полнота через Robinson $\mathsf{Q}$;
- (R2) r.e. аксиоматизация;
- (R3) модельная непустота;
- (R4) Гёдель-кодирование;
- (R5) категорная семантика в $(\infty, n_S)$ для некоторого $n_S \in \mathbb{N} \cup \{\infty\}$.

**Класс $\mathcal{S}_S$ — $S$-определимых объектов** формально определён в в MSFS `def:SS`; соответствует понятию «S-определимых структур» в Diakrisis-корпусе без изменений.

### Три условия уровня 6 — (F), (Π_4), (Π_3-max)

Формальные определения: MSFS `def:F`, `def:pi4`, `def:pi3max`. Условие (F_S) уточнено в препринте через пару (subtheory inclusion $\iota_F$, model restriction $\iota_F^*$) — уточнение, устраняющее амбивалентность прежней формулировки "$F \subseteq S$".

**Diakrisis-инварианты** (сохраняются):

- $(F)$ — формальная определимость в некоторой R-S;
- $(\Pi_4)$ — не-редуцируемость к $\mathcal{S}_S$;
- $(\Pi_3\text{-max})$ — максимальная генеративность.

### AFN-T

**Утверждение** (MSFS `thm:afnt`): для любой $S \in \mathrm{R\text{-}S}$ и любого $n \in \mathbb{N} \cup \{\infty\}$ не существует объекта $X$, удовлетворяющего $(F_S) \wedge (\Pi_{4,S,n}) \wedge (\Pi_{3\text{-max},S,n})$.

**Следствие**: уровень 6 иерархии ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy)) формально пуст: $\mathcal{L}_6 = \emptyset$ (в препринте — $\mathcal{L}_{\mathrm{Abs}} = \emptyset$, мнемоническая нотация).

**Доказательство**: MSFS §5 (α-часть, 3 леммы) + §6 (β-часть, accessibility argument) + новая Proposition `prop:proper-class` (proper-class-башни нарушают (R2)).

## Связь с каноническим примитивом

AFN-T формулируется через объекты, но её содержательный смысл в Diakrisis — это утверждение о метакатегории $\langle\langle \cdot \rangle\rangle$:

- $\alpha_\mathrm{math}$ ∈ $\mathrm{Ob}(\langle\langle \cdot \rangle\rangle)$ — не-привилегированная артикуляция по [T-α](/02-canonical-primitive/02-axiomatics#t-alpha-spec); любой кандидат на уровня 6 артикуляцию $\alpha_6$ нарушает либо $(\Pi_4)$, либо $(\Pi_3\text{-max})$.
- Классифицирующее пространство $\mathfrak{M}_\mathrm{Fnd}$ (препринт $\fM$) — полное, но не эскалируемое до уровня 6.
- Оператор $\mathsf{M}$ (accessible endofunctor) не порождает уровня 6 fixed point в Fix($\mathsf{M}$).

Это связывает AFN-T с 18.T (Рассел-иммунитет) и 39.T (gauge-симметрия).

## Пять осей абсолютности — пятиосевая абсолютность AFN-T

См. [`/06-limits/06-absoluteness`](/06-limits/06-absoluteness) и MSFS §7 (Theorem `thm:five-axis` + Remark `rem:axes-dependence`).

**Короткая форма**:

| Ось | Diakrisis № | MSFS label |
|---|---|---|
| Горизонтальная ($S \in \mathrm{R\text{-}S}$) | 55.T | `thm:horizontal` |
| Вертикальная ($n \in \mathbb{N} \cup \{\infty\}$) | 59.T.1 | `thm:vertical` |
| Мета-вертикальная ($\mu$-итерации) | 69.T | `thm:meta-vertical` |
| Латеральная (альт.\ orderings) | 84.T | `thm:lateral` |
| Полноты (Ловер-scope) | 87.T | `thm:completeness` |

**Ключевое уточнение препринта** (`rem:axes-dependence`): пять осей логически зависимы — horizontal subsumes completeness; lateral ≡ vertical; meta-vertical = μ-closure of vertical. Минимальный логически независимый набор — **2 оси** (горизонтальная + вертикальная). Пятиосевая формулировка сохранена pedagogically для обзора обход-аргументов.

## Три обход-paths — формальное закрытие

См. [`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement) (путь 3) и MSFS §8.

**Taблица**:

| Путь | Diakrisis № | MSFS label |
|---|---|---|
| Universe polymorphism | 57.T + 56.C1 + 61.T + 94.T | `thm:universe` |
| Reflective tower | 19.T1 + 31.T3 + 68.T + 69.T + 90.T | `thm:reflective` |
| Intensional refinement | 98.T (construction) + 99.T (slice-locality) | `thm:I-existence` + `thm:slice-locality` |

Все три **формально закрыты**; сводная теорема — MSFS Theorem `thm:обход-summary`.

## Структурная характеризация AFN-T (MSFS §10)

- **Relation to no-go series** (Кантор, Рассел, Гёдель, Тарский, Ловер, Эрнст 2015) — MSFS `thm:subsumption`.
- **Relation to Хэмкинс multiverse** — complementary; multiverse как уровня 6 candidate foreclosed by AFN-T (MSFS `sec:ernst-multiverse`).
- **Relation to Барвик–Schommer-Pries 2021 unicity** — compatible; intra-paradigm unicity используется как технический аргумент `thm:bergner-lurie-stab`.

Diakrisis не воспроизводит это positioning — см. MSFS §10.5.

## Дуал: 109.T (Dual-AFN-T) через 108.T

AFN-T имеет симметричный ДЦ-дуал 109.T, устанавливаемый через 108.T (AC/OC Морита-дуальность, MSFS §11):

$$
\LAbs = \emptyset \quad \xleftrightarrow{\text{108.T}} \quad \LAbsE = \emptyset.
$$

109.T (Dual Boundary Lemma, MSFS Theorem~
ef{thm:dual-afnt}) формулирует ту же no-go на стороне энактментов: не существует $(F, \cC, \iota, r) \in \cE$, одновременно enactment-definable, non-coordinate, maximally receptive. Дуальная пятиосевая абсолютность (MSFS Theorem~
ef{thm:dual-five-axis}) покрывает ось performance-uniqueness через Ловер-scope LS($\cE$) = closed symmetric monoidal (включает линейную логику, ludics, квантовые enactments; универсальная диагональ Яновский).

**Значение**: no-go симметрично по артикуляциям и актам-практикам. Пятый уровень защиты корпуса — AC/OC-дуальность ([`/10-reference/03-gap-status`](/10-reference/03-gap-status) §5 уровней защиты). Подробнее — [`/12-actic/05-dual-afn-t`](/12-actic/05-dual-afn-t).

## Diakrisis-specific интерпретация

AFN-T внутри Diakrisis — **структурное утверждение о границах формализации Различения** (phenomenon of distinction). Различение как акт (см. [`/01-diakrisis-phenomenon/00-act-not-object`](/01-diakrisis-phenomenon/00-act-not-object)) не сводится к объекту; AFN-T — математическое отражение этой философской аксиомы.

Связь с П-0 принципами ([`/00-foundations/02-zero-principles`](/00-foundations/02-zero-principles)):

- **П-0.0** (Act vs. object): уровня 6 объект был бы объектификацией акта различения — запрещено;
- **П-0.4** (Internal/external): полнота уровня 5+ (classify) без эскалации в уровня 6 (generate) — формальное выражение того, что классификатор $\neq$ generator.

## Формализация и следующие шаги

1. **Verum-formalization** ([Путь Б](/09-applications/00-path-B-uhm-formalization)) — препринт остаётся normative source; Lean-формализация воспроизводит структуру препринта 1-к-1.
2. **Paraconsistent расширение** — препринт Appendix B (Theorem `thm:paraconsistent-afnt`).
3. **Русская версия препринта** — `paper-ru/paper.tex` (в разработке).

## Дальше

- [`03-no-go-series`](/06-limits/03-no-go-series) — AFN-T в классической серии no-go-теорем;
- [`06-absoluteness`](/06-limits/06-absoluteness) — Пять осей детальнее;
- [`08-intensional-refinement`](/06-limits/08-intensional-refinement) — Путь 3 (интенсиональный) формально;
- [`09-мета-классификация`](/06-limits/09-meta-classification) — уровень 5+ meta-классификация;
- [`10-maximality-theorems`](/06-limits/10-maximality-theorems) — полное обоснование Diakrisis ∈ $\mathcal{L}_{\mathrm{Cls}}^{\top}$ (103.T–106.T);
- [`/12-actic/05-dual-afn-t`](/12-actic/05-dual-afn-t) — 109.T Dual-AFN-T через 108.T;
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — полная таблица соответствия.
