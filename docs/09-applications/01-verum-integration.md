---
sidebar_position: 1
title: Verum-интеграция
---

# Интеграция с Verum

## Статус

**[И]** активная программа.

## Обзор

Verum — central technical инструмент Пути Б. Этот документ описывает:

- Что такое Verum.
- Что мы ожидаем от Verum.
- План интеграции Verum с Diakrisis.
- Открытые вопросы.

## Verum

Системный язык со встроенной формальной верификацией, refinement-типами и proof-assistance, разрабатываемый командой УГМ. См. [verum-lang.org](https://verum-lang.org/).

### Архитектура Verum

- **Ядро**: теория типов + quantum-specific constructions.
- **Библиотеки**: linear algebra, spectral theory, category theory.
- **Тактики**: proof automation для УГМ-specific tasks.
- **Интерфейс**: command-line + potentially IDE.

### Состояние разработки

- **Active development**: команда УГМ.
- **Basic features**: доступны.
- **Advanced features**: в development.
- **Production-ready**: через ~год.

## Что мы ожидаем от Verum

### Базовые типы

- ℂ (комплексные числа).
- Hilbert spaces (ℂⁿ, в частности ℂ⁷).
- Density operators D(H).
- CPTP maps.
- Lindblad generators.

#### Детализация базовых типов

**ℂ (комплексные числа)**:
- Аксиоматизация как field.
- Complex conjugation, modulus.
- Exponential, trigonometric functions.
- Основа всего остального.

**Hilbert spaces**:
- ℂⁿ с inner product.
- Банах- и гильберт-пространства.
- Operators: bounded, compact, self-adjoint.
- Для УГМ: специфический случай n=7.

**Density operators D(H)**:
- Positive semi-definite, trace 1 operators.
- Пространство состояний.
- Операции: partial trace, tensor product.

**CPTP maps**:
- Completely positive, trace preserving maps.
- Структура: Kraus representation.
- Swinkles: channels.

**Lindblad generators**:
- Формализация ℒ_0.
- Структура: H (hamiltonian) + {L_k} (Lindblad operators).
- Evolution equation: dΓ/dt = ℒ_Ω(Γ).

### Расширенная формализация

- 2-categorical structures.
- Spectral triples (NCG).
- Cohomology groups.

#### Детализация

**2-categorical structures**:
- Objects, 1-morphisms, 2-morphisms.
- Vertical/horizontal composition.
- Coherence conditions.
- 2-functors, 2-natural transformations.

**Spectral triples (NCG)**:
- (A, H, D) — A — C\*-algebra, H — Hilbert, D — Dirac.
- KO-dimension.
- J (real structure), γ (grading).

**Cohomology groups**:
- Chain complexes.
- Homology/cohomology.
- Spectral sequences (если feasible).

### Proof tactics

- Автоматика базовых шагов.
- Поддержка diagram chases.
- Интеграция с CAS (для вычислений).

#### Детализация tactics

**Базовая автоматика**:
- Simplification.
- Линейная алгебра manipulations.
- Standard identities.

**Diagram chases**:
- Для category-theoretic аргументов.
- 2-categorical когерентность.
- Chasing commutative diagrams.

**CAS integration**:
- Для specific computations (e.g., specific spectra).
- Sage, Mathematica, или Computer Algebra в Verum.
- Verification of computational results.

## Двойной stdlib: артикуляции + энактменты

По 108.T (AC/OC Морита-дуальность) Verum-stdlib симметрично распадается на ОЦ и ДЦ-слои:

### ОЦ-слой (артикуляции)

- `core.math.frameworks` — артикуляции (ZFC, HoTT, CIC, LinLogic, ...).
- `core.theory_interop` — межартикуляционные редукции (Морита-эквивалентности).
- `core.proof` — доказательственные стратегии.
- `core.verify` — верификация теорем.

### ДЦ-слой (энактменты, Актика)

- `core.action.primitives` — базовые акты ($\varepsilon_\mathrm{math}, \varepsilon_\mathrm{compute}, \varepsilon_\mathrm{observe}, \ldots$).
- `core.action.enactments` — композиция, активация $\mathsf{A}$, autopoietic-замыкание.
- `core.action.gauge` — gauge-свобода координаций; canonicalization.
- `core.action.verify` — верификация практик; ε-аудит; gauge-согласованность.

### Мост через 108.T

Для каждой артикуляции $\alpha$ Verum автоматически индуцирует дуальный акт $\varepsilon(\alpha) = (F, \Syn(F), \id, \id)$:

```verum
fn α_to_ε<α: Articulation>(art: α) -> Act = ε_dual(art)
fn ε_to_α<ε: Act>(act: ε) -> Articulation = α_dual(act)
```

Аннотация `@enact(epsilon = ...)` устанавливает ε-координату функции; команда `verum audit --epsilon src/` даёт ε-распределение корпуса, параллельно ν-распределению теорем.

Детальный эскиз stdlib — [`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch). Дифференциация Verum: ни один другой прувер (Coq, Lean, Agda) не имеет нативного ДЦ-слоя с сертифицированной дуальностью ОЦ/ДЦ через 108.T.

### Пример: УГМ-практика

```verum
import core.action.*
import core.math.frameworks.UHM

let α_uhm = UHM::articulation()       // ν(α_uhm) = ω · 3 + 1
let ε_uhm = α_to_ε(α_uhm)             // ε(ε_uhm) = ω · 3 + 1 (по 108.T)

@enact(epsilon = "omega_3_plus_1")
fn live_by_uhm() -> Practice {
  let γ = init_gamma_state();
  while alive {
    γ = evolve_lindblad(γ);
    if reflection_threshold_crossed(γ) {
      γ = apply_replacement(γ);
    }
    verify_consciousness_invariants(γ);
  }
}
```

## План интеграции

### Сессия 1 (следующая): инвентаризация Verum

Что уже реализовано, что в разработке, что планируется. Результат — `/09-applications/NN-verum-inventory` (будущий файл).

#### Детали сессии 1

**Inventory items**:

1. **Core type system**: typechecker, normalization.
2. **Basic libraries**: arithmetic, logic.
3. **Линейная алгебра**: vectors, matrices, operators.
4. **Quantum specifics**: density, CPTP, Lindblad.
5. **Category theory**: functors, natural transformations.
6. **2-category theory**: partial или full.
7. **NCG features**: spectral triples.
8. **Tactics**: available proof automation.
9. **Documentation**: user manuals, examples.
10. **Performance**: time/space for typical proofs.

**Output**: comprehensive inventory document.

### Сессии 2+: постепенная формализация

По плану Пути Б (см. [/09-applications/00-path-B-uhm-formalization](/09-applications/00-path-B-uhm-formalization)).

#### Последовательность

- **Session 2-3**: базовые объекты УГМ.
- **Session 4-6**: operations.
- **Session 7-10**: first theorems.
- **Session 11+**: advanced theorems, инварианты.

### Интеграция с Diakrisis-корпусом

- Каждая формализованная теорема получает отметку «Verum-verified».
- Глоссарий [/10-reference/00-glossary](/10-reference/00-glossary) указывает Verum-статус каждого объекта.

#### Процедура

1. **Теорема в Diakrisis**: статус [Т-набр] или [Т].
2. **Formalization в Verum**: создаётся .verum file.
3. **Успех формализация**: добавляется отметка «Verum ✓».
4. **Provali формализация**: задокументировано в gap-статусе.

## Открытые вопросы

### Q-V-1: Verum capability

Достаточна ли current Verum для полной формализации 223 теорем УГМ?

**Текущая оценка**: частично. Base cases — yes. Advanced theorems (higher category theory, non-commutative geometry) — may require development.

### Q-V-2: Performance

Сколько времени требует верификация типичной УГМ-теоремы?

**Текущая оценка**: unknown без эксперимента. Estimate: минуты-часы на теорему.

### Q-V-3: Tooling

Есть ли подходящий IDE, debugger, etc.?

**Текущая оценка**: basic. May need development.

### Q-V-4: Альтернативы

Если Verum оказывается неподъёмным — какие альтернативы?

**Опции**:
- **Lean 4 + mathlib**: modern, powerful, but quantum/NCG нет built-in.
- **Coq + libraries**: proven, но 2-cat theory incomplete.
- **Agda + HoTT libs**: для HoTT approach.
- **Isabelle/HOL**: классический, но higher-order может быть issue.

**Рекомендация**: держать Lean 4 как fallback.

## Расписание integration

### Immediate (Сессии 1-3)

- Verum inventory.
- Install & verify.
- Basic types формализация.

### Short-term (Сессии 4-10)

- Core operations.
- First УГМ theorems.
- Establish процесс.

### Medium-term (Сессии 11-30)

- Structural инварианты.
- Most of 223 theorems.
- Documentation.

### Long-term (Сессии 30+)

- Advanced theorems.
- Extensions (AGI/ASI, Lerchner).
- Full integration + документация.

## Связь с внешним миром

### Publications

- Papers о Verum формализация of УГМ.
- Demonstrating methodology.
- Contributing to formal methods community.

### Community

- Sharing Verum code (if open source).
- Documentation for external contributors.
- Integration with other formal methods projects.

### Legacy

- Complete Verum формализация — долгосрочный результат.
- Proof objects — reusable.
- Methodology — applicable to other assemblies.

## Следующий раздел

[/10-reference/00-glossary](/10-reference/00-glossary).
