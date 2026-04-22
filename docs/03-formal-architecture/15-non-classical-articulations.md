---
sidebar_position: 15
title: Non-classical артикуляции
---

# Non-classical артикуляции

## Статус

**[Т-набр]** — каталог non-classical точек в 𝓜_Fnd.

## Мотивация

Классический каталог оснований Diakrisis (раздел 04-extractions) сосредоточен на ZFC, HoTT, NCG, ∞-topoi, CIC. Rich-метатеория S — **параметр** теории; 𝒮_S-класс структур меняется с S.

Этот раздел каталогизирует **non-classical** точки в 𝓜_Fnd:
- **α_linear** / **α_affine**: linear/affine logic.
- **α_AFA-coalg**: non-well-founded coalgebra (Aczel).
- **α_coinductive**: финальная коалгебра как α.
- **α_Д-linear, α_Д-AFA, α_Д-hybrid**: артикуляции Διάкрисіς (см. [/01-diakrisis-phenomenon/04-formal-correspondences](/01-diakrisis-phenomenon/04-formal-correspondences)).

Каждая — gauge-класс в 𝓜_Fnd для соответствующей метатеории S.

### Ключевое уточнение

По теореме 55.T (Absoluteness of TH-Final), все non-classical артикуляции:
- **В пределах R-S** → не уровень 6.
- Не являются обходом TH-Final.
- Являются **валидными точками** 𝓜_Fnd при соответствующих R-S.

Это делает non-classical каталог **комплементом** классического, не альтернативой.

## α_linear — линейная логика

### Определение

α_linear ∈ ⟪⟫ — артикуляция, реализующая Girard-linear logic с exponential `!`.

### Структура

- ρ(α_linear) ≅ symmetric monoidal closed category (SMCC).
- `!`-modality: !A ⊢ !A ⊗ !A (контракция для `!A`).
- `?`-modality: дуальна `!`.
- Quantum-like интерпретация: resources-as-states.

### Детали формализма

**SMCC структура**:
- Tensor product: ⊗ (симметричный, ассоциативный до изо).
- Unit: I (tensor identity).
- Internal hom: A ⊸ B (linear implication).
- Дуальность: (⊗, I) ↔ (⅋, ⊥) в full linear logic.

**Exponentials**:
- `!A` — промотирование A до классического (дублируемого) ресурса.
- Правила: promotion, dereliction, contraction, weakening для `!`.

**Классическая эквивалентность**:
По Girard (1987): `!A → B` ≅ `A → B` в classical/intuitionistic logic. Translation preserves все важные свойства (Gödel's theorems, etc.).

### Ординальная позиция

**Теорема 53.T**: ν(α_linear) = ω+1 (рядом с α_hott).

*Обоснование*: линейная логика с `!` — classical-equivalent через Girard-translation. Выразительна как HoTT+UA уровень. ∎

### Связь с TH-Final

По 50.T (S-relative): TH-Final применима к linear+! через translation. По 55.T (абсолютность): α_linear — **не** уровень 6, что согласуется с R-S_linear+! ∈ R-S.

### Применения

- **Quantum computing**: resources как linear types.
- **Concurrency**: linear channels (π-calculus).
- **Memory management**: ownership types (Rust, Linear Haskell).

### Связь с Διάκрисіς

α_linear — **основа** для α_Д-linear (см. [/01-diakrisis-phenomenon/04-formal-correspondences](/01-diakrisis-phenomenon/04-formal-correspondences)). 

## α_affine — аффинная логика без `!`

### Определение

α_affine ∈ ⟪⟫ — артикуляция, реализующая affine logic без exponential modality. Допускает weakening (A ⊢ ⊤), но не contraction.

### Структура

- ρ(α_affine) ≅ SMCC без `!`.
- Resources can be discarded, but not duplicated.
- Нет восстановления PA без !-operator.

### Ординальная позиция

**Теорема 54.T**: ν(α_affine) ≤ ω.

*Обоснование*: без `!` невозможна неограниченная индукция; α_affine слабее PA. ∎

**Следствие**: α_affine не Rich (не удовлетворяет R1 в сильном смысле).

### TH-Final тривиально

Для α_affine **нет** проблемы TH-Final: Π_3-max (max-генеративность Rich-оснований) недостижимо. **Тривиально** выполнено.

По 55.T (R-S условия): α_affine ∉ R-S (не удовлетворяет R1). Следовательно, абсолютность не применима — но и **не нужна**, т.к. Π_3-max тривиально нарушается.

### Значение

α_affine — **ограничительное** основание. Полезна для:
- Формализации ресурс-чувствительных вычислений.
- Sub-recursive systems.
- Complexity-bounded formal theories (Light Linear Logic).

### Связь с Διάкрисіс

α_affine **не достаточна** для формализации Διάкрисіс — недостаточная expressivity. Альтернатива — α_linear + AFA (см. α_Д-hybrid).

## α_AFA-coalg — неосновательные коалгебры

### Определение

α_AFA-coalg ∈ ⟪⟫ — артикуляция, реализующая финальную коалгебру 𝖬 в метатеории NBG + AFA (Aczel 1988).

### Структура

- S = NBG + AFA (Anti-Foundation Axiom заменяет Foundation).
- Допускаются non-well-founded sets: x = {x}, циклические графы.
- ρ(α_AFA-coalg) ≅ final coalgebra для подходящего эндо-функтора.

### Aczel's AFA детально

**Anti-Foundation Axiom (AFA)**: каждый graph имеет уникальный decoration, в котором узлы — sets (возможно non-well-founded).

**Следствия**:
- x = {x} — легальное множество.
- x = y, y = {x} — циклические sets.
- Bisimulation = identity.

**Замена Foundation**: Foundation запрещает infinite descending chains ∈. AFA допускает bisimilar cycles.

### Ординальная позиция

**Теорема 52.T**: ν(α_AFA-coalg) = ω·2, и Morita-редуцируема к Aczel's M-types (стандартная coalgebra theory).

*Обоснование*:
- AFA даёт coalgebraic ordinals (Aczel 1988, Barwise-Moss 1996).
- Соответствующая coalgebra определима как стандартный объект.
- Результат — в классе 𝒮_{NBG+AFA}. ∎

### Self-reference без парадоксов

**Ключевое свойство**: α_AFA-coalg поддерживает X = F(X) без Russell-парадоксов.

Это — **частный случай** T-2f\*-иммунитета в AFA-контексте. Не выход за TH-Final, а расширение каталога.

### Связь с 55.T

По 55.T: TH-Final выполняется в R-S_{NBG+AFA}. Self-reference не помогает обойти TH-Final, поскольку:
- α_AFA-coalg Morita-редуцируема (52.T) → (Π_4) нарушено.
- Следовательно, α_AFA-coalg — не уровень 6.

### Применения

- **Process algebra**: CCS, π-calculus.
- **Streams и infinite data**: lazy structures.
- **Modal logic**: coalgebraic semantics.

## α_coinductive — коиндуктивные типы

### Определение

α_coinductive ∈ ⟪⟫ — артикуляция, реализующая coinductive types (CoInd) в теории типов.

### Структура

- ρ(α_coinductive) ≅ category of coalgebras.
- `cofix`-combinator для бесконечных структур.
- Примеры: streams, infinite trees, processes.

### Отличие от α_AFA-coalg

- α_AFA-coalg: в set-theoretic контексте (NBG + AFA).
- α_coinductive: в type-theoretic контексте (CIC, Agda, Coq).
- **Связь**: α_coinductive Morita-эквивалентна α_AFA-coalg при подходящем gauge (связь CIC ↔ NBG+AFA через Aczel's M-types).

### Ординальная позиция

ν(α_coinductive) = ω+2 (аналогично α_CIC, с дополнительной coinductive structure).

### TH-Final

Аналогично α_AFA-coalg: Morita-редуцируема, не уровень 6. По 55.T: в R-S_{CIC+CoInd}.

## α_poly-HoTT — универсум-полиморфная артикуляция

### Определение

α_poly-HoTT ∈ ⟪⟫ — артикуляция в R-S_{Poly-HoTT} с cumulative universe polymorphism.

### Структура

- **Иерархия универсумов**: `𝒰_0 : 𝒰_1 : 𝒰_2 : ...`.
- **Cumulativity**: `A : 𝒰_i ⇒ A : 𝒰_{i+1}` (с coercion).
- **Universe-polymorphic terms**: `∏_{ℓ:Level} Body(ℓ)`.
- **Предикативная стратификация**: нет `Type : Type` (блокировка Girard's paradox).

### Formal basis

- **Awodey (2013)**: «Structuralism, invariance, and univalence» — основы.
- **Voevodsky** (UniMath project): implementation.
- **Lean 4, Coq, Agda**: practical universe polymorphism.
- **Lurie HTT (2009)**: ∞-topos semantics с universe hierarchies.

### Категорная семантика

Universe-polymorphic term `X : ∏_ℓ 𝒰_ℓ → 𝒰_ℓ` реализуется как объект в derived category:

$$X \in \lim_\ell \mathrm{Fun}(\mathcal{U}_\ell, \mathcal{U}_\ell).$$

Это — стандартная indexed limit конструкция (Lurie HTT §4.2). X — **объект** в derived category, а не «между категориями» (распространённое заблуждение при наивной интерпретации universe polymorphism).

### Ординальная позиция

**Теорема 57.T**: ν(α_poly-HoTT) = ω·2 + 1.

**Обоснование**:
- Baseline HoTT: ω+1.
- Cumulativity: +0 (derivable).
- Polymorphism across universes: +ω (дополнительный transfinite слой).
- Total: ω·2+1.

Эквивалентно α_derived по ординалу (ω·2+1): оба — derived constructions над базовыми категориями.

### Связь с TH-Final

По 55.T и 56.T: α_poly-HoTT — **не** уровень 6.

**Причины**:
1. По 56.T: X ∈ 𝒮_{S'}^{global} (polymorphic term — объект в derived category).
2. Morita-редуцируется к `lim_ℓ Fun(𝒰_ℓ, 𝒰_ℓ)`.
3. Predicativity (58.T): Π_3-max_{poly-HoTT} strictly weaker чем classical Π_3-max.

### Структурная трансцендентность vs derived

Частое заблуждение: universe-polymorphic terms кажутся «структурно трансцендентными», выходящими за пределы любой конкретной категории.

**Формальный факт**: такие term'ы — **derived** объекты (natural transformations / sections of Grothendieck fibration). Это — стандартная категорная конструкция, Morita-редуцируется к derived category.

Следовательно, universe polymorphism **не** обходит TH-Final.

### Применения

- **Современные proof-assistants**: Lean 4, Coq с universe polymorphism — практические инстанции α_poly-HoTT.
- **Univalent Mathematics** (UniMath): Voevodsky's Coq-library работает в α_poly-HoTT.
- **(∞,1)-topos theory**: Lurie HTT использует hierarchy.
- **Cubical type theory**: расширение α_poly-HoTT с computational content.

### Связь с α_Д-*

- α_poly-HoTT + AFA → возможная общая структура для Διάκрисίс.
- Гипотеза: α_Д-hybrid в Poly-HoTT ведёт к усиленной формализации UFH (см. [/01-diakrisis-phenomenon/04-formal-correspondences](/01-diakrisis-phenomenon/04-formal-correspondences)).
- Открытая программа.

### Детальная семантика α_poly-HoTT

**Семантическая модель** (Lurie HTT + cumulative extension):

1. **Category of levels**: `Level` — natural numbers ℕ с фильтр-порядком.
2. **Universe functor**: `𝒰 : Level → Cat`, `𝒰(ℓ) = 𝒰_ℓ` (небольшая (∞,1)-категория).
3. **Cumulativity**: natural transformation `ι : 𝒰_ℓ → 𝒰_{ℓ+1}` для каждого ℓ.
4. **Total space**: `∫ 𝒰` — Grothendieck construction over Level.
5. **Polymorphic terms**: sections of projection `π : ∫ 𝒰 → Level`.

### Сравнение с классическими foundations

| Foundation | Polymorphism | Predicativity | Impredicativity |
|---|---|---|---|
| ZFC | implicit (через classes) | нет | да (powerset, replacement) |
| ETCS | functorial | нет | да |
| HoTT (basic) | стратификация | да | нет |
| Poly-HoTT | explicit universe polymorphism | да | частично (через poly) |
| System F | parametric polymorphism | impredicative (II) | да |
| Girard's paradox | — | — | нарушена стратификация |

### Технические аспекты

**Правила Poly-HoTT** (упрощённо):

```
Level-form: ⊢ Level : Type
Level-intro: ⊢ ℓ_i : Level для каждого i ∈ ℕ
U-form: ⊢ ℓ : Level ⟹ ⊢ 𝒰_ℓ : 𝒰_{ℓ+1}
Cumulativity: ⊢ A : 𝒰_ℓ ⟹ ⊢ A : 𝒰_{ℓ+1}
Polymorphism-intro: (ℓ : Level) ⊢ t(ℓ) : 𝒰_ℓ ⟹ ⊢ λℓ.t(ℓ) : ∏_{ℓ:Level} 𝒰_ℓ
```

**Ключевое свойство**: polymorphism **не смешивает** уровни (no `Type : Type`). Это сохраняет консистентность (блокирует Girard).

### Применения в современных системах

**Coq**: `Polymorphic Definition` с universe variables.

**Lean 4**: `universe` declarations, полностью integrated.

**Agda**: `--universe-polymorphism` flag.

**UniMath** (Воеводский): библиотека Coq, полностью в полиморфной универсумной структуре.

### Применения к Diakrisis

α_poly-HoTT даёт:
- **Более точную формализацию** 𝖬 как polymorphic endofunctor.
- **Cleaner treatment** category-theoretic constructions.
- **Возможность** формализовать некоторые Diakrisis-теоремы в Verum-подобных системах с universe polymorphism.

### Ограничения

Несмотря на expressivity:
- **Predicativity**: не достигает classical impredicative strength (58.T).
- **Consistency strength**: ≈ ZFC + inacc (как HoTT + univalence).
- **Не уровень 6** (55.T + 56.T).

### Связь с другими разделами

- **Absoluteness (55.T, 56.T)**: polymorphic terms покрыты уточнённой 𝒮_S.
- **04-extractions**: α_poly-HoTT — extension α_hott.
- **04-formal-correspondences**: возможная связь с α_Д-* через α_Д-poly.

### α_Д-poly: программа усиленной формализации

Открытая программа: α_poly-HoTT + AFA → усиленная формализация Διάкрисіς.

**Мотивация**: 
- α_Д-hybrid требует linear + AFA + !.
- Poly-HoTT добавляет universe hierarchy.
- Комбинация может дать более точную формализацию UFH.

**Кандидат**: `α_Д-poly := ν X. (X ⊗ X ⊸ ∏_ℓ X × X)`.

Если существует — это могло бы быть **базой** для Verum-формализации Пути Б.

## α_Д-linear, α_Д-AFA, α_Д-hybrid — артикуляции Διάκрисίς

### Обзор

Специализированные артикуляции для формализации феноменологического акта Διάкрисіς. Полная детализация: [/01-diakrisis-phenomenon/04-formal-correspondences](/01-diakrisis-phenomenon/04-formal-correspondences).

### α_Д-linear

**Def α_Д-linear**: `α_Д-linear := ν X. (X ⊗ X ⊸ !X)`.

- Фиксирует resource-aspect Διάкрисіς.
- ν = ω+1 (70.T).
- S = R-S_{linear+!}.
- По 55.T: не уровень 6.

### α_Д-AFA

**Def α_Д-AFA**: `α_Д-AFA := ν X. (X × X)` в NBG+AFA.

- Фиксирует reflexive-aspect Διάкрисіς.
- ν = ω·2 (71.T).
- S = R-S_{NBG+AFA}.
- По 55.T: не уровень 6.

### α_Д-hybrid

**Def α_Д-hybrid**: `α_Д-hybrid := ν X. (X ⊗ X ⊸ X × X)` в R-S_{linear+AFA+!}.

- Наиболее адекватная формализация Διάкрисіς.
- ν = ω·2+1.
- По 55.T: не уровень 6.
- **Гипотеза UFH** (UHM Factorization Hypothesis): α_uhm ≅ α_Д-hybrid ⊗ 7D-quantum.

### Структурная роль α_Д-*

Эти артикуляции:
- Формально представляют акт Διάκρисίς (частично).
- Связывают феноменологический слой (раздел 01) с формальным (разделы 02-06).
- Дают основу для программы Пути Б (Verum-формализация).

## S-зависимость каталога

Каждая артикуляция определена при конкретной метатеории S:

| α | S | ν | 𝒮_S |
|---|---|---|---|
| α_zfc | ZFC | ω | ZFC-структуры |
| α_hott | ZFC + HoTT | ω+1 | univalent types |
| α_linear | linear + ! | ω+1 | SMCC + exponentials |
| α_affine | affine без ! | ≤ ω | SMCC без !, слабее PA |
| α_AFA-coalg | NBG + AFA | ω·2 | non-well-founded sets |
| α_coinductive | CIC / type theory | ω+2 | coalgebras в types |
| α_Д-linear | linear + ! | ω+1 | resource-articulations |
| α_Д-AFA | NBG + AFA | ω·2 | reflexive-articulations |
| α_Д-hybrid | linear + AFA + ! | ω·2+1 | hybrid articulations |
| α_uhm | NBG + AFA или ZFC+inacc | ω·4 | 7D CPTP |

### Абсолютность применима ко всем

По 55.T: все α из этой таблицы (кроме α_affine, который не R-S) — **в пределах R-S**, следовательно:
- Каждая — не уровень 6.
- TH-Final применима к каждой.
- Все — валидные точки 𝓜_Fnd.

## 𝓜_Fnd при разных S

Классифицирующее пространство 𝓜_Fnd зависит от метатеории S:

- **𝓜_Fnd[ZFC]**: «классическая» карта (α_zfc, α_etcs, α_hott, α_ncg, ...).
- **𝓜_Fnd[NBG+AFA]**: расширяет классическую, добавляет α_AFA-coalg, α_Д-AFA.
- **𝓜_Fnd[HoTT]**: centered на α_hott.
- **𝓜_Fnd[linear]**: организует α_linear, α_affine + linear translates other α.
- **𝓜_Fnd[linear+AFA+!]**: включает α_Д-hybrid и потенциально α_uhm.

### Инварианты между 𝓜_Fnd[S]

**Открытая программа**: какие α инвариантны между S?

**Предположение**: "core" структура α_ZFC, α_HoTT, α_NCG — инвариантна (Morita-сохраняется). Non-classical расширения — S-специфичны.

### Структурные отношения

Между разными 𝓜_Fnd[S] существуют **функторы**:
- Inclusion: 𝓜_Fnd[ZFC] ↪ 𝓜_Fnd[NBG+AFA] (AFA расширяет).
- Translation: 𝓜_Fnd[classical] → 𝓜_Fnd[linear+!] (Girard translation).
- Equivalence: 𝓜_Fnd[CIC+CoInd] ≃ 𝓜_Fnd[NBG+AFA] на coalgebraic part.

Полная карта — программа последующих исследований.

## Связь с TH-Final

По уточнённой формулировке (50.T + 55.T):
> TH-Final выполняется для всех Rich-метатеорий S ∈ R-S.

Все α из этого раздела — **внутри** Trace(𝖠) при соответствующем S, не выход за 𝓜_Fnd.

### Не опровергают, а расширяют

Важное методологическое уточнение:

**НЕ**: «non-classical артикуляции опровергают TH-Final».

**ДА**: «non-classical артикуляции — расширение каталога в пределах TH-Final».

Это согласуется с П-0.6 (честное признание): каждая non-classical α Morita-сводима к существующим структурам в своей S.

## Применения

### К программе Пути Б

α_Д-hybrid — формальная основа гипотезы UFH:
> α_uhm ≅ α_Д-hybrid ⊗ 7D-quantum.

Если верна: Verum-формализация УГМ упрощается через формализацию α_Д-hybrid отдельно.

### К philosophy

Non-classical артикуляции дают формальные аналоги для:
- Process philosophy (via coinductive).
- Phenomenology of distinction (via α_Д-hybrid).
- Resource-based ontology (via linear).

### К computer science

- Concurrency: π-calculus ↔ α_linear.
- Lazy evaluation: streams ↔ α_coinductive.
- Self-modifying code: cyclic processes ↔ α_AFA-coalg.

### К physics

- Quantum channels: linear resources ↔ α_linear.
- Holographic principle: self-reference ↔ α_AFA-coalg.
- УГМ: все три аспекта через α_uhm ≅ α_Д-hybrid ⊗ 7D (UFH).

## Открытые программы

- Абсолютность TH-Final для paraconsistent R-S'.
- Доказательство UFH в Verum.
- Иерархия R-S, R-S², R-S³, ... — расширение класса метатеорий.

## Признанные редукции

- **Girard (1987)**: linear logic.
- **Lafont (1988)**: Light Linear Logic.
- **Aczel (1988)**: Non-Well-Founded Sets (AFA).
- **Barwise-Moss (1996)**: Vicious Circles.
- **Jacobs (2016)**: Introduction to Coalgebra.
- **Abadi-Cardelli (1996)**: foundations of objects через coalgebra.

### Специфические редукции α_Д-*

- **α_Д-linear** ↔ linear-coinductive extension (Mazza 2020).
- **α_Д-AFA** ↔ Aczel M-types for F(X) = X × X.
- **α_Д-hybrid** ↔ linear-AFA hybrid (программа 2026+).

## Итог

Non-classical артикуляции — **расширение** каталога, **не** выход за TH-Final. Они:
- Демонстрируют S-зависимость 𝓜_Fnd.
- Дают новые точки для сравнения оснований.
- Связывают Diakrisis с process algebra, concurrency, resource-sensitive computation.
- Обогащают программу Пути Б (α_Д-hybrid ⊗ 7D ≅ α_uhm?).

TH-Final сохраняет силу для всех проверенных S (55.T абсолютность). Открытые программы: paraconsistent случай, hierarchy of R-S.

### Общая картина

Структурная карта non-classical артикуляций Diakrisis:
- **Формальный статус**: TH-Final абсолютна в R-S.
- **Каталог артикуляций**: классические + non-classical + Διάκрисіς-specific.
- **Программа Пути Б**: конкретный план через UFH.
- **Открытые программы**: paraconsistent абсолютность, доказательство UFH в Verum, иерархия R-S.

Это — **согласованная**, многоуровневая карта 𝓜_Fnd.

## Следующий раздел

[/04-extractions/00-overview](/04-extractions/00-overview).
