---
sidebar_position: 5
title: Иерархия уровней (0..5+, 6)
---

# Иерархия уровней математической новизны

## Статус

**[О]** Определительная шкала. **[Т]** — статус уровня 5+ и невозможность уровня 6 доказуемы (через AFN-T).

**Формальное изложение** — препринт [*MSFS*](/10-reference/04-afn-t-correspondence) §2, Definition `def:hierarchy`:

$$
\mathcal{L}_k \text{ для } k \in \{0, 1, 2, 3, 4, 5, 5+, 5+^{\max}, 6\}.
$$

Настоящий документ содержит:

1. **Diakrisis-интерпретацию** каждого уровня (мотивация, язык Различения).
2. **Exhaustive карту** известных математических корпусов по уровням.
3. **Диагностику** конкретно для Diakrisis: почему Diakrisis $\in \mathcal{L}_{5+}^{\max}$.

Формальные критерии membership, структурные свойства уровней (препринт Proposition `prop:level-structure`), обоснование нотации «5+» vs «6» (препринт §2.3 «On the Indexing Scheme», Propositions `prop:collapse` + `prop:no-collapse`), и intersection pattern (препринт Proposition `prop:strata-disjointness`) — в препринте.

## Зачем нужна иерархия

В мат-сообществе статус математических результатов обсуждается **неформально**: «глубокая теорема», «прорыв», «новая парадигма». Эти оценки не стандартизированы, что создаёт проблемы:

- Риторическая инфляция: результат среднего уровня объявляется «прорывом».
- Ложные притязания: работа уровня 5 маркируется как уровень 6.
- Несоразмерность ожиданий: новые проекты обещают то, что формально невозможно.
- Отсутствие общего языка для сравнения mathematical programmes.

**Иерархия уровней** — систематическая шкала, в которой каждая ступень имеет явный математический смысл, стандартный аппарат, объективные критерии и классифицирует известный мат-корпус exhaustively.

## Краткая шкала

| Уровень | Diakrisis-интерпретация | Препринт |
|---|---|---|
| **0** | Рабочие заметки, интуиции (неформальные) | $\mathcal{L}_0$ |
| **1** | Техническое уточнение в рамках теории (лемма) | $\mathcal{L}_1$ |
| **2** | Самостоятельный формальный результат (теорема) | $\mathcal{L}_2$ |
| **3** | Область математики (group theory, AG, …) | $\mathcal{L}_3$ |
| **4** | Парадигма, реорганизующая математику (schemes, HoTT, …) | $\mathcal{L}_4$ |
| **5** | Rich-foundation (R1)–(R5): ZFC, HoTT, NCG, … | $\mathcal{L}_5$ |
| **5+** | Meta-framework (M1)–(M5) классифицирующий Level-5 | $\mathcal{L}_{5+}$ |
| **5+^max** | Maximal sub-class с (Max-1)–(Max-4) | $\mathcal{L}_{5+}^{\max}$ |
| **6** | Абсолютное основание — **формально пуст** (AFN-T) | $\mathcal{L}_6 = \emptyset$ |

**Важное уточнение** (препринт Remark `rem:formality-spectrum`): уровни 0–4 определены *descriptively* (не математически — нет формального критерия отличающего «лемму» от «теоремы»). Уровни 5, 5+, 5+^max, 6 определены *formally* через (R1)–(R5), (M1)–(M5), (Max-1)–(Max-4), (F_S) ∧ (Π_4) ∧ (Π_{3-max}). Препринт работает только с формальными уровнями.

## Обоснование нотации (почему «5+», а не «6»)

Препринт §2.3 даёт формальное обоснование:

- **Операция Cls** (horizontal meta-operation) — образует класс frameworks, классифицирующих, но не генерирующих объекты Level $k$.
- **Операция Gen** (vertical meta-operation) — образует класс frameworks, максимально генерирующих Level $k$.

Propositions `prop:collapse` и `prop:no-collapse` показывают:

- $\mathrm{Cls}(\mathcal{L}_k) \hookrightarrow \mathcal{L}_{k+m}$ для $k \leq 4$ (**коллапс**): классификатор лемм уже содержится в областях/парадигмах; классификатор парадигм — это основание.
- $\mathrm{Cls}(\mathcal{L}_5)$ НЕ коллапсирует: genuinely новый тип объекта (meta-framework), требующий свежего символа $\mathcal{L}_{5+}$.
- $\mathrm{Cls}(\mathcal{L}_{5+})$ стабилизируется: $\mathrm{Cls}(\mathcal{L}_{5+}) \simeq \mathcal{L}_{5+}$ (Theorem `thm:meta-stab`). Нет Level $5{+}{+}$.
- $\mathrm{Gen}(\mathcal{L}_5) = \mathcal{L}_6$ — вертикальный шаг (generative universality), требующий integer 6. Пуст по AFN-T.

Итого логическая цепь:

$$
\mathcal{L}_0 \to \mathcal{L}_1 \to \mathcal{L}_2 \to \mathcal{L}_3 \to \mathcal{L}_4 \to \underbrace{\mathcal{L}_5}_\text{foundations} \xrightarrow{\mathrm{Cls}} \underbrace{\mathcal{L}_{5+}}_\text{classifiers} \xrightarrow{\mathrm{Gen}} \underbrace{\mathcal{L}_6 = \emptyset}_\text{AFN-T}
$$

## Exhaustive карта корпусов

### Уровень 0 — Working notes

- Preprint drafts до первого публичного выпуска.
- Private math blogs, Grothendieck's Récoltes et Semailles, MathOverflow-вопросы в открытой форме.
- Мат-экспериментирование в Jupyter/Mathematica до формализации.

### Уровень 1 — Лемма

Примеры: Zorn's Lemma (ZFC + AC); König's Lemma; Yoneda's Lemma; Beck's Monadicity Lemma; Five/Snake Lemmas; Schanuel's Lemma; Hensel's Lemma. Полный список — препринт §2.2.

### Уровень 2 — Теорема

Примеры: Gödel Incompleteness I & II (1931); Tarski Undefinability (1936); Atiyah-Singer Index (1963); Fermat's Last Theorem (Wiles 1994); Poincaré Conjecture (Perelman 2003); Cobordism Hypothesis (Lurie 2009). Полный список — препринт §2.2.

### Уровень 3 — Области (13 групп)

- Алгебраические структуры (group, ring, module, homological, representation).
- Геометрические (differential, algebraic, arithmetic, symplectic, non-commutative).
- Топологические (algebraic, differential, low-dimensional).
- Аналитические (real, complex, functional, harmonic, PDE, stochastic).
- Логические (model, proof, recursion, set, categorical, reverse).
- Теоретико-числовые (analytic, algebraic, class field, automorphic).
- Комбинаторные (graph, enumerative, algebraic, extremal).
- Категорно-теоретические (1-Cat, 2-Cat, $(\infty, n)$-Cat, enriched, operadic, higher algebra).
- Теоретико-представленческие (finite group, Lie group, geometric).
- Физико-математические (TQFT, CFT, integrable systems).
- Вероятностные (probability, stochastic, ergodic, information theory).
- Числовые (числе numerical analysis, approximation theory).
- Дискретная / Вычислительная (discrete math, computational, statistics).

### Уровень 4 — Парадигмы (25+)

Из препринта §2.2: categorical turn (Eilenberg-Mac Lane 1945), sheaf theory, scheme theory, homological algebra, K-theory, topos theory, motives, NCG (Connes), SDG, Gromov-Witten, mirror symmetry, $(\infty, 1)$-categories (Joyal-Lurie), higher algebra (Lurie), HoTT (Awodey-Voevodsky), Univalent Foundations, perfectoid spaces (Scholze), condensed mathematics (Clausen-Scholze), Langlands, geometric Langlands, $\infty$-cosmoi (Riehl-Verity), cohesive higher topos theory (Schreiber), operadic foundations, higher topos theory, reverse mathematics, algorithmic information theory.

### Уровень 5 — Foundations (30+)

Полная таблица — препринт §2.2. Классические: Z, ZF, ZFC, ZFC+inacc, NBG, MK, KP, ETCS, ETCC, NFU, NF, CZF, IZF, PA, Z₂. Тип-теоретические: MLTT, CIC, ECC, HoTT, cubical HoTT, universe-polymorphic HoTT. Substructural: Linear logic + !. Продвинутые: AFA, $(\infty, 1)$-topos theory, NCG, cohesive $(\infty, 1)$-topos, motivic SH(k), realizability (Eff), SDG, elementary higher topos.

Характерная черта: основание — **само** объект математики. Можно изучать модели ZFC, морфизмы между HoTT-моделями, эквивалентности NCG ↔ spin geometry.

### Уровень 5+ — Meta-frameworks

| Проект | Авторы | Год | Scope | $\in \mathfrak{Meta}_{5+}^{\max}$? |
|---|---|---|---|---|
| **Diakrisis** | — | 2025+ | Всё $\mathfrak{M}_\mathrm{Fnd}$ | ✅ Да |
| $\infty$-cosmoi | Riehl–Verity | 2022 | $(\infty, 1)$-theories | ❌ Нет |
| Univalent Foundations (programme) | Awodey, Voevodsky | 2010+ | HoTT-расширения | ❌ Нет |
| Cohesive framework (DCCT) | Schreiber | 2013 | Cohesive $\infty$-topoi | ❌ Нет |
| Higher Algebra (Lurie HA) | Lurie | 2017+ | Stable $\infty$-cat + operadic | ❌ Нет |
| Synthetic mathematics | Taylor, Shulman et al. | 2000+ | Axiomatic synthetic | ❌ Нет |

**Структурная плюральность** (препринт Theorem `thm:meta-mult`, Diakrisis 101.T): $\mathcal{L}_{5+}$ плюралистичен в complement $\mathcal{L}_{5+} \setminus \mathcal{L}_{5+}^{\max}$. Diakrisis — единственная в $\mathcal{L}_{5+}^{\max}$ (conditional meta-categoricity: препринт Theorem `thm:meta-cat`, Diakrisis 100.T).

Meta-classification stabilization (препринт Theorem `thm:meta-stab`, Diakrisis 102.T): $\mathfrak{M}^{(5+ \cdot 2)} \simeq_2 \mathfrak{M}^{(5+)}$ — iterative classification не эскалирует в Level 6.

### Уровень 6 — пуст по AFN-T

Никакой мат-корпус не может находиться здесь. Препринт Theorem `thm:afnt` + Proposition `prop:level-structure`(iv): $\mathcal{L}_6 = \emptyset$.

## Уровни как функциональные роли

**Важно** (препринт Remark `rem:level-as-role`): уровни лучше читать как *functional roles*, а не строго-партиционированные классы. Один и тот же объект может играть несколько ролей:

- Motivic theory $\mathrm{SH}(k)$ ∈ $\mathcal{L}_4$ (парадигма) ∩ $\mathcal{L}_5$ (foundation).
- HoTT ∈ $\mathcal{L}_5$ (foundation) — Univalent Foundations programme ∈ $\mathcal{L}_{5+}$ (meta-framework классифицирующий HoTT-расширения).
- Diakrisis $\in \mathcal{L}_{5+}^{\max}$ + выводит внутренние теоремы из 13 аксиом (generative qua theory).

Единственное строгое ограничение — $\mathcal{L}_6 = \emptyset$ (AFN-T), поэтому $\mathcal{L}_k \cap \mathcal{L}_6 = \emptyset$ для всех $k$ trivially.

## Почему Diakrisis — на уровне 5+^max

### Диагностика

**Diakrisis не на уровне 6**:

- Не создаёт новую формальную основу — работает с существующими через $\langle\langle \cdot \rangle\rangle$.
- Каждая «новая» конструкция редуцируется к известному аналогу (moduli-stack, accessible endofunctor, internal language).
- Подпадает под AFN-T (препринт Theorem `thm:afnt`).

**Diakrisis не на уровне 5** (не является самостоятельным generator-ом):

- Не имеет собственной foundation-ой аксиоматики типа ZFC.
- Канонический примитив $(\langle\langle \cdot \rangle\rangle, \mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\bullet)$ + 13 аксиом — метаструктура над foundations, не генеративное основание.
- Параметризована по R-S (требует $\mathcal{L}_5$ как параметра).

**Diakrisis на уровне 5+**:

- Работает с основаниями как с объектами.
- Классифицирует через $\mathfrak{M}_\mathrm{Fnd} = \mathrm{Trace}(\mathsf{A})/\mathrm{gauge}$.
- Даёт формальный язык для сравнения: ZFC ↔ ETCS (Morita), HoTT ↔ MLTT, CIC ↔ Coq.
- Формализует пределы формализации (AFN-T).

**Diakrisis на уровне 5+^max** (препринт (Max-1)–(Max-4)):

- **(Max-1)** Full classification: $\mathrm{image}(\mathrm{Cl}_\mathrm{Diakrisis}) = \mathfrak{M}_\mathrm{Fnd}$.
- **(Max-2)** Gauge-fullness через автоэквивалентности ⟪⟫.
- **(Max-3)** Depth-stratification через T-2f\* ([`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics)) — блокирует 5 семейств парадоксов.
- **(Max-4)** Intensional completeness через 98.T / 99.T ([`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement)).

### Редукции к известному аппарату

| Конструкция Diakrisis | Редукция | Источник |
|---|---|---|
| ⟪⟫ как 2-категория | Accessible 2-category | Adámek-Rosický 1994 |
| 𝖬 | Accessible endofunctor | Adámek 1974 |
| Trace(𝖠) | Initial 𝖬-algebra | Adámek 1974 |
| ι: End(⟪⟫) ↪ ⟪⟫ | 2-topos-like inclusion | Shulman 2008 |
| $\mathfrak{M}_\mathrm{Fnd}$ | Classifying 2-stack | Lurie HTT 2009 §3.2 |
| Gauge-группа G | Automorphism 2-group | Kelly 1982 |
| Intensional refinement $\mathbf{I}$ | Display 2-classes | Jacobs-Streicher, Gambino-Garner 2008 |

Все конструкции — **стандартный** $(\infty, \infty)$-категорный аппарат. Никакой новой foundational механики Diakrisis не вводит, только *синтезирует* известное в meta-framework.

## Связь с препринтом

| Diakrisis-термин | Препринт label |
|---|---|
| Иерархия уровней 0..6 | Definition `def:hierarchy` |
| Структурные свойства уровней | Proposition `prop:level-structure` |
| Formality spectrum (L0-L4 descriptive, L5+ formal) | Remark `rem:formality-spectrum` |
| Intersection pattern $\mathcal{L}_k$ | Proposition `prop:strata-disjointness` |
| «5+» vs «6» обоснование | §2.3 + Propositions `prop:collapse`, `prop:no-collapse` |
| Уровень 5+ формальные условия (M1)–(M5) | Definition `def:meta` |
| Уровень 5+^max условия (Max-1)–(Max-4) | Definition `def:maximality` |
| Уровень 6 условия (F), (Π_4), (Π_{3-max}) | Definitions `def:F`, `def:pi4`, `def:pi3max` |
| Уровень 6 пуст | Theorem `thm:afnt` |

## Ссылки

- **Препринт §2** — formal development of hierarchy;
- **Препринт §9** — Level 5+ meta-classification;
- [`/06-limits/02-th-final`](/06-limits/02-th-final) — AFN-T detail;
- [`/06-limits/06-absoluteness`](/06-limits/06-absoluteness) — пять осей;
- [`/06-limits/09-meta-classification`](/06-limits/09-meta-classification) — meta-структура 100.T–102.T;
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — полная таблица.
