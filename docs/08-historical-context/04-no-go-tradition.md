---
sidebar_position: 4
title: Gödel / Tarski / Cantor / Russell — традиция no-go
---

# Традиция no-go теорем — Gödel, Tarski, Cantor, Russell

## Статус

**[И]** — историческое позиционирование AFN-T.

## Обзор

No-go теоремы — **структурные ограничения** на формализацию. Все пять классических + AFN-T образуют **серию**. Этот документ — **историческое** позиционирование.

### Значение traditions

- **Легитимация AFN-T**: не одиночное утверждение, а продолжение серии.
- **Историческая преемственность**: связь с major results.
- **Структурное обобщение**: одна natur, разные аспекты.
- **Образовательно**: understanding of formal limits.

## Пять классических no-go теорем

### Cantor (1899) — нет множества всех множеств

Если бы существовало U = {x : x — множество}, то |U| ≥ |𝒫(U)| > |U| (диагональ Кантора). Противоречие.

**Содержание**: абсолютный максимум в set-theory не существует.

#### Детализация Cantor

**Cantor's theorem (1891)**: |𝒫(X)| > |X| для любого X.

**Следствие для U**:
- Если U = set of all sets, то 𝒫(U) ⊂ U.
- Значит |𝒫(U)| ≤ |U|.
- Но по Cantor: |𝒫(U)| > |U|.
- Противоречие.

**Значение**:
- Запрещает naive «universe of all sets».
- Мотивирует class-theoretic расширения (NBG, MK).
- Grothendieck universes как частичный «обход» через иерархию.

### Russell paradox (1901)

R = {x : x ∉ x}. Тогда R ∈ R ⇔ R ∉ R. Противоречие.

**Содержание**: неограниченная comprehension не работает.

**Решение**: типизация (Russell-Whitehead), ZFC (ограниченная comprehension).

#### Детализация Russell

**Paradox**: Let R = {x : x ∉ x}.

- Case 1: R ∈ R. Then by definition, R ∉ R. Contradiction.
- Case 2: R ∉ R. Then R satisfies predicate «x ∉ x». So R ∈ R. Contradiction.

Неограниченная comprehension → inconsistency.

**Решения**:

- **Type theory** (Russell-Whitehead 1910-1913): hierarchical types avoid self-reference.
- **ZFC** (Zermelo 1908, Fraenkel 1922): axiom of restricted comprehension.
- **NBG**: classes vs sets distinction.
- **Quine NF**: stratification.

### Gödel I (1931) — неполнота

Если T — достаточно сильная консистентная формальная теория (включая ℕ-арифметику), то ∃ утверждение G, такое что ни G, ни ¬G не доказуемы в T.

#### Детализация Gödel I

**Формулировка**:

Если T удовлетворяет:
- **Rekursively enumerable**: аксиомы computable.
- **Consistency**: T ⊬ ⊥.
- **Expressive enough**: contains Robinson arithmetic Q.

То существует sentence G_T с T ⊬ G_T и T ⊬ ¬G_T.

**Доказательство** (contours):
- Arithmetize syntax (Gödel numbering).
- Diagonal lemma: construct sentence saying «I am not provable».
- If provable — contradiction; if refutable — contradiction. So undecidable.

**Значение**:
- No sufficient formal system is complete.
- Hilbert's program (complete + consistent формализация) — невозможно.

### Gödel II (1931) — невозможность само-подтверждения

Con(T) — утверждение о консистентности T — **не** доказуемо в T (при условии Con(T)).

#### Детализация Gödel II

**Формулировка**:

Пусть T удовлетворяет условиям Gödel I. Тогда если T консистентна, T ⊬ Con(T).

**Доказательство**:
- Применение Gödel I к специальному sentence Con(T).
- Формальная reflection: T cannot prove its own консистентность.

**Значение**:
- No system justifies itself.
- Fundamental limit of self-reference в formal systems.

### Tarski (1936) — truth-undefinability

В достаточно сильной теории T, truth-предикат True_T не определим в T.

#### Детализация Tarski

**Формулировка**:

Let L be a formal language, 𝕯 — term denotation. Truth-predicate Tr(𝕯(φ)) ⇔ φ is true cannot be defined in L itself (if L is sufficiently rich).

**Доказательство**:
- Semantic paradox version of Liar: «This sentence is not true».
- If Tr is definable → contradiction through diagonal construction.

**Значение**:
- Truth requires metalanguage.
- Hierarchy of languages L_0, L_1, ... for truth predicates.
- **No language contains its own truth**.

### Бонус: Lawvere fixed-point theorem (1969)

Хотя не всегда в классическом списке из 5, Lawvere FPT — **категорное обобщение**:

**Формулировка**: В cartesian closed category, если существует «weakly surjective» e: A → Y^A, то любой f: Y → Y имеет fixed point.

**Следствия**:
- Обобщает Cantor, Russell, Gödel, Tarski.
- Показывает, что все эти — инстанции **одной** категорной структуры.

## Общий паттерн

Все пять — **самореферентные** ограничения:

- **Cantor**: нет «max себя» в set-теории.
- **Russell**: нет «само-отрицающего себя».
- **Gödel I**: нет «само-полного себя».
- **Gödel II**: нет «само-доказывающего себя».
- **Tarski**: нет «само-определяющего истину».

### Структурный анализ

Все no-go — проявления **одного** principle:

> **Формальная система не может полностью описать саму себя.**

#### Конкретные аспекты

- **Cantor**: cannot contain all of itself as element.
- **Russell**: cannot have unrestricted self-description.
- **Gödel I**: cannot prove all true self-statements.
- **Gödel II**: cannot prove own консистентность.
- **Tarski**: cannot define own truth.
- **Lawvere FP**: various categorical incarnations.

Единый принцип: **self-reference** создаёт **fundamental limits**.

## AFN-T как 6-й член

**AFN-T (2026)**: нет «само-основывающего себя» (предельное основание).

Продолжает традицию. **Обобщает**: не **один** аспект ограниченности, а **множество** одновременно (через пять условий Π-1..Π-5).

### Сравнительная таблица

| No-go | Отрицаемое | Аспект self-reference |
|---|---|---|
| Cantor | max set | self-containment |
| Russell | self-negating set | self-negation |
| Gödel I | completeness | self-completeness |
| Gödel II | self-proof | self-justification |
| Tarski | self-truth | self-definability |
| Lawvere FP | fixed points of certain maps | categorical self-ref |
| **AFN-T** | **predel osnovanie** | **self-foundation** |

### Отличие AFN-T

AFN-T **не** касается одного специфического свойства. Она касается **всей** претензии на foundation.

- Cantor: о max element.
- Gödel: о specific property (completeness, консистентность).
- **AFN-T**: о возможности быть **foundation** вообще.

Более **обобщающая**.

## Что общее

**Структурный факт**: формальные системы **не содержат** собственное основание целиком.

Это — **характеристика** формальности, не её дефект.

### Детализация

- **Не случайность**: no-go не «случилось» по исторической причине.
- **Структурно**: следует из **природы** формальности.
- **Универсально**: применимо ко **всем** достаточно сильным системам.
- **Positive**: гарантирует **открытость** математики.

## Мораль

Математика **принципиально открыта** — не из-за нашей недоразработки, а из-за природы формальности.

Работать с этим фактом — **зрелость** математики.

### Практические следствия

- **Не ищите** final system.
- **Используйте** hierarchies (universes, topoi).
- **Работайте** across levels.
- **Принимайте** openness как feature, не bug.

### Философские следствия

- **Математика vs мета-математика**: разные levels.
- **Truth vs provability**: not equivalent.
- **Completeness**: impossible for rich systems.
- **Self-understanding**: limited in formal terms.

## Связь с П-0.0

По П-0.0: различение — акт, формальные структуры — его следы.

No-go теоремы **подтверждают** этот принцип формально:
- Акт не может быть полностью своим следом.
- Формализация не схватывает саму себя.
- Всё, что мы формализуем — **внутри** некоторой системы; сама система — не в себе.

## Будущее традиции

### Возможные новые no-go

- **Computational no-go**: pro specific types of computation.
- **Quantum no-go**: specific to quantum systems.
- **Physical no-go**: о формализации физики.

### Открытые вопросы

- Есть ли «последний» no-go? (По AFN-T-подобному аргументу — нет).
- Могут ли no-go теоремы **сами** иметь no-go на них?
- Связь с Church-Turing thesis.

## Следующий раздел

[/09-applications/00-path-B-uhm-formalization](/09-applications/00-path-B-uhm-formalization).
