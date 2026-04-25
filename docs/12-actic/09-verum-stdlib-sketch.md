---
sidebar_position: 9
title: Активный план интеграции Актика+Verum (core.action.*)
---

# Активный план интеграции Актика через Verum

## 0. Статус и контекст

**Статус**: активный план интеграции. Verum — системный язык со встроенной формальной верификацией, типами уточнения и поддержкой доказательств. Архитектура верификации построена на основаниях Diakrisis: правило ядра K-Refine реализует T-2f\* (стратификацию по глубине, парадокс-иммунность); девятиступенчатая лестница верификации даёт градации строгости от runtime до certified; декларации `@framework(name, citation)` — полноправный data, без модификации ядра. Сопряжение $\alpha \dashv \varepsilon$ обеспечено правилами ядра K-Adj-Unit/K-Adj-Counit, что делает Морита-двойственность из 108.T верифицируемой на уровне ядра.

Стандартная библиотека Verum уже содержит:

- `core.math.frameworks` — артикуляции (ZFC, HoTT, CIC, линейная логика и т. д.)
- `core.theory_interop` — межартикуляционные редукции
- `core.proof` — доказательственные стратегии
- `core.verify` — верификация
- **`core.action.*`** — *уже спроектирована* (см. ниже)

По 108.T каждой артикуляции $\alpha$ соответствует акт $\varepsilon(\alpha)$. Дуальный слой `core.action.*`:

- `core.action.primitives` — базовые акты ($\varepsilon_\mathrm{math}, \varepsilon_\mathrm{compute}$ и т. д.)
- `core.action.enactments` — практики и их композиция
- `core.action.gauge` — калибровочная свобода координаций
- `core.action.verify` — верификация практик (дуал `core.verify`)

21 теорема Актики (107.T–127.T) + 4 дуальных закрытия (138.T–141.T) формализуемы через декларации `@framework` как полноправный data. Этот документ — активный план реализации в 10 шагов.

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

`core.action.*` — это ключевая дифференциация Verum от Coq / Lean / Agda:

1. **Нативный ДЦ-слой** — ни один другой прувер не имеет его.
2. **Двойственность** с теоретическим слоём — верифицируемо через kernel-правила (K-Adj-Unit, K-Adj-Counit), не просто аннотации.
3. **ε-аудит** — количественная метрика практики параллельно количественной метрике теории.
4. **Бесшовная интеграция УГМ** через 108.T-двойственность.

Это делает Verum **единственным прувером с каноническим ДЦ-ассистированием**. Ни Coq, ни Lean, ни Agda не имеют подобного слоя.

## 11. Активный 10-шаговый план интеграции

На основе анализа архитектуры верификации Verum выработан конкретный план в 10 шагов с привязкой к существующим API стандартной библиотеки:

### Шаг 1 (нед. 1-2) — Декларация Diakrisis frameworks

Файл: `core/math/frameworks/diakrisis.vr`

```verum
@framework(diakrisis_con, "107.T: Con(Актика+Diakrisis) = Con(ZFC+2-inacc)")
@framework(diakrisis_morita, "108.T: AC/OC Морита-двойственность")
@framework(diakrisis_nogo, "109.T: дуал-AFN-T")
@framework(diakrisis_kernel, "138.T: ядро дуальной калибровочной сюръекции")
@framework(diakrisis_initial, "139.T: инициальность Актики в Meta_Cls^⊤,E")
```

**Приёмочный критерий**: `verum check core/math/frameworks/diakrisis.vr` без ошибок.

### Шаг 2 (нед. 2-3) — Расширение enactment primitives

Файл: `core/action/primitives.vr`

Добавляются примитивы:
- `ε_act: Action` — атомарный акт
- `ε_interact: Action × Action → Action` — интеракция (Жирар-style)
- `ε_compose_seq: Action → Action → Action` — последовательная композиция (cut-rule)
- `ε_compose_par: Action → Action → Action` — параллельная (тензорный продукт)

Тип `Action = (articulation: Articulation, epsilon: Enactment)`.

**Приёмочный критерий**: тестовые случаи композиции в `tests/action/primitives_test.vr`.

### Шаг 3 (нед. 3-4) — ε-индукция и ε-audit

Файл: `core/action/enactments.vr` + CLI `verum audit --epsilon`.

Авто-индукция $\varepsilon(\alpha)$ из 108.T:

```verum
fn epsilon(alpha: Articulation) -> Enactment =
    Enactment::syntactic_self(alpha)
```

CLI: `verum audit --epsilon src/` — печать ε-распределения корпуса.

**Приёмочный критерий**: `epsilon(Articulation::zfc) : Enactment` тип-проверяется; CLI работает на тестовом корпусе.

### Шаг 4 (нед. 4-5) — Actor-model encoding

Файл: `core/action/actor_model.vr` (пример, не stdlib built-in).

```verum
type Actor<M> = (
    identity: String,
    mailbox: Queue<M>,
    behavior: M → Action,
)

fn send(a: Actor<M>, m: M) -> Unit
fn receive(a: Actor<M>) -> M
```

Реализация через расширения `core.action.primitives` + `enact_par`.

**Приёмочный критерий**: actor-Hello-World пример проходит `@verify(formal)`.

### Шаг 5 (нед. 5-6) — Теоремы 110.T-127.T + 138.T-141.T как framework axioms

Файл: `core/math/frameworks/diakrisis_actic.vr`

Каждая теорема — `@framework(diakrisis_NNN, "...")` декларация с `ensures`-условием.

22 теоремы (110.T-127.T = 18 + 138.T-141.T = 4).

**Приёмочный критерий**: все теоремы под `@verify(formal)` или строже.

### Шаг 6 (нед. 6-7) — BHK-style proof encoding

Файл: `core/proof/bhk.vr`

```verum
type BHKConstruction<P: Prop> = (
    proof: P,
    witness: ConstructiveWitness,
)
```

`@enact(epsilon = "ε_prove")` proof-блоки авто-извлекают `ConstructiveWitness`.

**Приёмочный критерий**: BHK-коррелят для каждой инициальной алгебры в Verum runtime.

### Шаг 7 (нед. 7-8) — Ludics через orthogonality

Файл: `core/action/ludics.vr` (пример).

```verum
type Design<A> = (
    interactions: Set<Interaction>,
    orthogonal: Design<A> → Bool,
)
```

`orthogonal` через `gauge_equivalent` из Layer 1.

**Приёмочный критерий**: ludics cut-elimination проходит формальную проверку.

### Шаг 8 (нед. 8-9) — π-calculus types

Файл: `core/action/pi_calculus.vr`

```verum
enum Process =
    Name(String) |
    Send(Name, Value, Process) |
    Receive(Name, x: String, Process) |
    Parallel(Process, Process) |
    Restrict(Name, Process)
```

`Parallel` — синтаксический сахар над `enact_par`.

**Приёмочный критерий**: π-calculus reduction rules проходят `@verify(proof)`.

### Шаг 9 (нед. 9-10) — Verification-audit pipeline

`verum audit --epsilon` распределение по корпусу + `verum audit --coord` с Актика-координатами.

CI-тест: все 107.T-127.T + 138.T-141.T теоремы верифицированы под `@verify(formal)` или строже.

**Приёмочный критерий**: CI green; audit-отчёт в `audit-reports/actic-verum.json`.

### Шаг 10 (нед. 10+) — Morita-двойственность round-trip test

Файл: `core/theory_interop/bridges/oc_dc_bridge.vr`

```verum
fn translate(α: OC_Articulation) -> ε(α): DC_Enactment
fn inverse(ε: DC_Enactment) -> α: OC_Articulation
fn canonicalize(α: OC_Articulation) -> OC_Articulation
```

Свойство round-trip: `canonicalize(inverse(translate(α))) == canonicalize(α)`.

Алгоритмическая основа — **Теорема 16.10** (round-trip property) в [`/03-formal-architecture/16-gauge-decision`](/03-formal-architecture/16-gauge-decision):
- Для конечно-аксиоматизированных $\alpha$: разрешимо за $O(2^{O(|\alpha|)})$ (single-exponential).
- Для рекурсивно-аксиоматизированных: полу-разрешимо ($\Sigma_1$).
- Универсальной разрешимости НЕТ: Теорема 16.7 даёт нижнюю границу через word problem (Novikov–Boone 1955).

**Приёмочный критерий**: round-trip property для всех 132 OC-теорем + 21 AC-теоремы (все имеют конечную аксиоматизацию, поэтому Теорема 16.5 даёт разрешимость).

## 12. Зависимости между шагами

```
Шаг 1 (frameworks) ──┐
                     ├─→ Шаг 2 (primitives) ──→ Шаг 3 (ε-audit)
                     │                              │
                     │                              ├─→ Шаг 4 (actor) ──┐
                     │                              │                   │
Шаг 5 (theorems) ────┴─→ Шаг 6 (BHK) ──────────────┴─→ Шаг 7 (ludics) ─┤
                                                                       │
                                                Шаг 8 (π-calculus) ────┤
                                                                       │
                                                        Шаг 9 (audit) ─┴─→ Шаг 10 (round-trip)
```

## 13. Долгосрочные расширения

После Шага 10 — следующие исследовательские программы:

- **(∞,∞)-categories formalization**: расширение `core.math.infinity_category` до полных $(\infty, \infty)$, что покрывает 140.T (ε-инвариант на (∞,∞)-уровне).
- **Linear types enforcement (V2)**: переход от deklaration discipline к kernel-уровневой проверке для квантованных actions.
- **Effect system**: native effect-handling в Verum, поддерживающий concurrent / async / IO.
- **T-2f\*\*\* омега-modal stratification**: расширение K-Refine для трансфинитных модальных рангов (136.T).

## 14. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/08-formal-logical-dc`](/12-actic/08-formal-logical-dc) — формально-логическое основание.
- [`/09-applications/01-verum-integration`](/09-applications/01-verum-integration) — текущий Verum-интерфейс Diakrisis.
