---
sidebar_position: 9
title: Эскиз stdlib Verum для ядра Актика (core.action.*)
---

# Эскиз stdlib Verum для core.action.*

## 0. Мотивация

**Verum** — прувер-ассистирующий язык проекта. Его стандартная библиотека содержит:

- `core.math.frameworks` — артикуляции (ZFC, HoTT, CIC, LinLogic, etc.)
- `core.theory_interop` — межартикуляционные редукции
- `core.proof` — доказательственные стратегии
- `core.verify` — верификация

По 108.T каждой артикуляции $\alpha$ соответствует акт $\varepsilon(\alpha)$. Полный интерфейс Verum должен содержать **параллельный** слой:

- `core.action.primitives` — базовые акты ($\varepsilon_\mathrm{math}, \varepsilon_\mathrm{compute}$, etc.)
- `core.action.enactments` — практики и их композиция
- `core.action.gauge` — gauge-свобода координаций
- `core.action.verify` — верификация практик (дуал `core.verify`)

Этот документ — **эскиз** этого слоя.

## 1. core.action.primitives

Базовые примитивы, соответствующие $\varepsilon$-актам уровня $\omega$ (атомарные практики).

```verum
module core.action.primitives

// Базовый акт различения — дуал α_math
primitive ε_math : Act
  @epsilon(omega)
  @dual(α_math)

// Акт доказательства
primitive ε_prove : (prop: Prop) -> Act
  @epsilon(omega)

// Акт вычисления
primitive ε_compute : (f: Func) -> Act
  @epsilon(omega)

// Акт наблюдения (первично в кв. теории)
primitive ε_observe : (s: System) -> Act
  @epsilon(omega)

// Акт решения
primitive ε_decide : (alts: Set<Alternative>) -> Act
  @epsilon(omega)

// Акт перевода между артикуляциями (= gauge-переход)
primitive ε_translate : (source: α, target: α) -> Act
  @epsilon(omega + 1)
  @gauge

// Акт конструкции по Брауэр
primitive ε_construct : (spec: Spec) -> Act
  @epsilon(omega)
  @intuitionistic

// Акт классификации онтологий (расширение каталога с поставкой Verum
// OWL 2 V1 — VUVA §11.2 + §21). Покрывает subsumption (C ⊑ D),
// instance-check (a : C), и DL-классификационную иерархию,
// дispатчируемую через `core.theory_interop` + Noesis NP
// `ontology/*` endpoints (`11-noesis/24-owl2-integration.md`).
primitive ε_classify : (ontology: Ontology) -> Act
  @epsilon(omega)
  @ontology
```

## 2. core.action.enactments

Композиция, итерация, стабилизация актов.

```verum
module core.action.enactments

// Последовательная композиция (A затем B)
fn enact_then<A: Act, B: Act>(a: A, b: B) -> Act
  @preserves(max(ε(A), ε(B)))

// Параллельная композиция (A || B)
fn enact_par<A: Act, B: Act>(a: A, b: B) -> Act
  @preserves(max(ε(A), ε(B)))

// Активация — A-оператор
fn activate<E: Act>(e: E) -> Act
  @epsilon(ε(E) + 1)
  @preserves(gauge)

// Трансфинитная активация
fn activate_n<E: Act>(e: E, n: Ordinal) -> Act
  @epsilon(ε(E) + n)
  @requires(n < Omega)

// Autopoietic замыкание (A-фикс. точка)
fn автопоэзис<E: Act>(e: E) -> Act
  @requires(ε(e) >= ω^2)
  @ensures(A^ω²(e) ≃ e)
```

## 3. core.action.gauge

Gauge-свобода: способы исполнять тот же акт.

```verum
module core.action.gauge

// Gauge-transformation между эквивалентными перформансами
type GaugeXform = (e1: Act, e2: Act) -> Equiv
  @requires(Perf(e1) ≃ Perf(e2))

// Canonicalization: выбор канонического gauge
fn canonicalize(e: Act) -> (canonical: Act, gauge_morphism: GaugeXform)

// Gauge-preserving morphism
fn gauge_morph<A: Act, B: Act>(f: A -> B) -> A -> B
  @preserves(gauge)
```

## 4. core.action.verify

Верификация практик — дуал `core.verify` для теорем.

```verum
module core.action.verify

// Верификация достижения акта
@verify_action
fn verify_achieves(practice: Act, target: Goal) -> Proof<practice ⊢ target>

// Проверка эпсилон-координаты
@epsilon_audit(file: "corpus.vrm")
fn audit_epsilon() -> Map<Name, Ordinal>

// Проверка gauge-согласованности
@verify_gauge
fn verify_gauge(practice: Act) -> Proof<gauge_compatible(practice)>

// Проверка autopoietic-замкнутости
@verify_autopoiesis
fn verify_autopoiesis(practice: Act) -> Proof<A^ω²(practice) ≃ practice>
```

## 5. Синтаксические сахара

Пользовательский уровень — аннотации в источниках.

```verum
// Функция обьявляется с эпсилон-координатой
@enact(epsilon = "omega")
fn solve_equation(eq: Equation) -> Solution {
  // ...
}

// Агрегат на уровне tradition (omega * k)
@enact(epsilon = "omega_2")
fn apply_mathematical_method(method: Method) -> Result {
  // ...
}

// Институциональная практика
@enact(epsilon = "omega_squared")
fn run_scientific_programme(programme: Programme) -> Outcome {
  // ...
}
```

## 6. Интеграция с `core.theory_interop`

Каждая артикуляция имеет парный акт. Verum должен автоматически индуцировать:

```verum
// Автоматически индуцируется для каждой α в core.math.frameworks
fn α_to_ε<α: Articulation>(art: α) -> Act = ε_dual(art)

// Инверсия: от практики к артикуляции (тоже автоматически)
fn ε_to_α<ε: Act>(act: ε) -> Articulation = α_dual(act)
```

Это прямая реализация 108.T в кодовой форме.

## 7. Инструменты CLI

Новые подкоманды `verum` для Актика:

```bash
# Аудит ε-координаты корпуса
verum audit --epsilon src/

# Проверка практики
verum verify_action src/my_act.vrm

# Сравнительный анализ ε vs ν
verum compare_invariants src/

# Генерация Актика-отчёта
verum actic_report src/
```

## 8. Пример: UHM-практика

```verum
import core.action.*
import core.math.frameworks.UHM

// УГМ как артикуляция — из ОЦ-слоя
let α_uhm = UHM::articulation()
// ν(α_uhm) = ω · 3 + 1

// УГМ как практика — через α_to_ε
let ε_uhm = α_to_ε(α_uhm)
// ε(ε_uhm) = ω · 3 + 1 (по 108.T пункт 4)

// Верификация, что УГМ-практика — корректный цивилизационный уровень
#[test]
fn test_uhm_civilizational() {
  assert_eq!(ε(ε_uhm), ordinal!(ω · 3 + 1));
  assert!(is_civilizational_assembly(ε_uhm));
}

// Практика «жить по УГМ»
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

## 9. Статус реализации

| Компонент | Статус | Приоритет |
|---|---|---|
| `core.action.primitives` | Эскиз | P1 |
| `core.action.enactments` | Эскиз | P1 |
| `core.action.gauge` | Эскиз | P2 |
| `core.action.verify` | Эскиз | P1 |
| CLI `verum audit --epsilon` | Дизайн | P1 |
| Автогенерация `α_to_ε` для каркасы | Дизайн | P2 |
| Примеры в `examples/actic/` | TBD | P3 |

## 10. Значимость для Verum-проекта

Эскиз `core.action.*` — это ключевая дифференциация Verum от Coq / Lean / Agda:

1. **Нативный ДЦ-слой** — ни один другой прувер не имеет его.
2. **Дуальность** с теоретическим слоём — верифицируемо, не просто аннотации.
3. **ε-аудит** — количественная метрика практики параллельно количественной метрике теории.
4. **Бесшовная интеграция УГМ** через 108.T-дуализацию.

Это делает Verum **единственным прувером с каноническим ДЦ-ассистированием**. Ни Coq, ни Lean, ни Agda не имеют подобного слоя.

## 11. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/08-formal-logical-dc`](/12-actic/08-formal-logical-dc) — формально-логическое основание.
- [`/09-applications/01-verum-integration`](/09-applications/01-verum-integration) — текущий Verum-интерфейс Diakrisis.
