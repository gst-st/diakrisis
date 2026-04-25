---
sidebar_position: 3
title: Operational coherence — двусторонняя верификация Verum
---

# Operational coherence через 108.T-сертификаты

## Статус

**[Т·L3]** — операциональное замыкание теории Diakrisis в operational coherence theorem для Verum-программ.

## Мотивация

Verum имеет два аспекта верификации программы $P$:
- **α-аспект**: статическая проверка через типы и framework-axioms (`@verify(formal)`).
- **ε-аспект**: операциональное поведение в runtime через эффекты и монадическое выполнение (`@enact(epsilon)`).

108.T (теорема 108.T) даёт *теоретическую* двойственность ОЦ/ДЦ. *операциональная* реализация: алгоритмически гарантированное соответствие между α-доказанными свойствами и ε-наблюдаемым поведением.

Без operational coherence theorem:
- Verum может *декларировать* OC↔DC соответствие (через 108.T), но не *проверять* его.
- Невозможна полная operational verification distributed/concurrent программ.
- Нет **runtime guarantee** что проверенное статически соответствует наблюдаемому динамически.

## 1. Operational coherence theorem

**Теорема 18.T1** [Т·L3] . *Для Verum-программы $P$ с finitely-axiomatized α-семантикой и terminating runtime semantics:*

$$
\mathrm{cert}_\alpha(P, \phi) \quad \iff \quad \mathrm{cert}_\varepsilon(P, \phi^\sharp),
$$

*где:*
- *$\mathrm{cert}_\alpha(P, \phi)$ — α-сертификат (boolean): «P статически доказан удовлетворяющим $\phi$»;*
- *$\mathrm{cert}_\varepsilon(P, \phi^\sharp)$ — ε-сертификат (boolean): «P операционально проявляет $\phi^\sharp$ во всех corrected runtime traces»;*
- *$\phi^\sharp = \varepsilon_\mathrm{property}(\phi)$ — дуальное свойство по 108.T.*

*Эквивалентность вычислима за $O(2^{O(|P| + |\phi|)})$ для конечно-аксиоматизированных α-семантик и terminating runtime (через Теорему 16.10 round-trip).*

**Условия применимости**:
- (i) **Finitely-axiomatized**: программа имеет конечное число framework axioms (через `@framework`).
- (ii) **Terminating runtime**: для concurrent/async программ требуется bounded execution (timeout / fairness assumption). Для unbounded execution coherence — semi-decidable.
- (iii) **Pure α/ε**: оба сертификата — boolean (не probabilistic, не fuzzy). Расширения на probabilistic — open question 7.3.

**Failure cases**: если программа $P$ некорректна (т.е. $\neg \mathrm{cert}_\alpha(P, \phi)$):
- α-сертификат возвращает false.
- ε-сертификат возвращает false (если runtime detection terminates).
- Эквивалентность всё ещё выполнена (false ↔ false).
- Для unbounded executions: ε-сертификат может быть undefined; теорема ограничена terminating cases.

## 2. Архитектура

### 2.1 Static checker $\pi_\alpha$

$\pi_\alpha: \mathrm{Programs} \to \alpha\text{-Properties}$:
- Тип-проверка через Verum kernel rules (K-Refine, K-Adj-Unit, K-Adj-Counit).
- Framework-axioms (`@framework`).
- Все теоремы Diakrisis 1.T–142.T как доступные framework axioms.

### 2.2 Runtime monitor $\pi_\varepsilon$

$\pi_\varepsilon: \mathrm{Executions} \to \varepsilon\text{-Properties}$:
- Effect tracking через монады (Теорема 17.T1).
- ε-координата выполнения через `verum audit --epsilon`.
- Runtime-bisim для autopoietic processes (R4 + Lemma 141.L2).

### 2.3 Bridge $T_{108}$

$T_{108}: \alpha\text{-Properties} \leftrightarrow \varepsilon\text{-Properties}$:
- Прямо: α → ε через 108.T (Шаг A в /12-actic/04-ac-oc-duality).
- Обратно: ε → α через 108.T inverse (Шаг B).
- Round-trip канонизация: Теорема 16.10 + cut-elimination (Lemma 120.L3).

### 2.4 Coherence verifier

```verum
@verify(certified)
fn coherence_check<P: Program, φ: Property>(prog: P, prop: φ) -> Bool {
    let alpha_cert = static_check(prog, prop);
    let epsilon_cert = runtime_monitor(execute(prog), T_108(prop));
    alpha_cert == epsilon_cert
}
```

## 3. Доказательство 18.T1

### 3.1 Шаг A: α → ε direction

Допустим $\mathrm{cert}_\alpha(P, \phi)$. По 108.T (Шаг A в /12-actic/04-ac-oc-duality): существует канонический ε-translate:
$$
\varepsilon(\phi) := \phi^\sharp \in \rangle\!\rangle\cdot\langle\!\langle.
$$

**Случай 1 (интуиционистские $\phi$)**: применима Теорема 121.T напрямую. ε-перевод даёт BHK-конструкцию = realizable witness в Eff. По Лемме 121.L3 (BHK ↔ Eff-realizability): свойство $\phi^\sharp$ имеет realizable witness в эффективном топосе.

**Замечание о связи Verum runtime ↔ Eff**. Verum-runtime реализует Eff-семантику через **higher-type computability layer** (см. §15.4.6 в /12-actic/06-actic-theorems — Hyland's effective topos as Verum runtime semantics). Конкретно:
- Verum runtime = Тьюринг-вычисление **+** Eff-realizers для higher-type конструкций.
- BHK-witness получает реализацию как Eff-объект; runtime-выполнение его — как partial recursive function (для finite-type) или higher-type computation (для transfinite-type, через Лемму 141.L1).
- Соответствие *gauge-correct*: разные realization detail Verum-runtime сводятся к canonical form через canonicalize (Теорема 16.10).

Без этой связи Verum мог бы выполнять программу Тьюринг-полным способом, но без guarantee Eff-realization для BHK-witness'а — это критический gap, закрытый через explicit Eff-семантику Verum runtime.

**Случай 2 (классические $\phi$ с LEM)**: для свойств, требующих LEM (закон исключённого третьего), используется **Гёдель-Genzen translation**: $\phi \mapsto \phi^\mathrm{int} := \phi^*$ (Гёдель-Genzen negative translation: $\neg\neg$-добавление вокруг atomic + ∀, $(\to)^* = (\to)$, $(\wedge)^* = (\wedge)$, $(\vee)^* = \neg(\neg \cdot \wedge \neg \cdot)$).

**Лемма 18.L_GG** *(соответствие Гёдель-Genzen ↔ ε_LEM)*. Гёдель-Genzen translation $\phi \mapsto \phi^\mathrm{int}$ соответствует ε-композиции с $\varepsilon_\mathrm{LEM}$:
$$
\varepsilon(\phi) = \varepsilon(\phi^\mathrm{int}) \otimes \varepsilon_\mathrm{LEM},
$$
с $\mathsf{e}(\varepsilon_\mathrm{LEM}) = \omega + 1$ (по Замечанию 121.R1).

*Доказательство Леммы 18.L_GG*. Negative translation $\phi^*$ — функториальная операция $\mathrm{Prop}_\mathrm{CL} \to \mathrm{Prop}_\mathrm{IPL}$, сохраняющая выводимость. Через 108.T (применённое к $\mathrm{IPL}+\mathrm{CL}$): $\varepsilon(\phi)^\mathrm{cl} = \varepsilon(\phi^*)^\mathrm{int} \otimes \varepsilon_\mathrm{LEM}$, где LEM-акт фиксирован с $\mathsf{e} = \omega + 1$ как «один шаг $\mathsf{A}$ над интуиционистской базой» (см. §121.R1).

ε-аддитивность ($\otimes$): для коммутативного monoid-action $\varepsilon_\mathrm{LEM}$, общая ε-координата $= \omega \cdot 1 + 1 = \omega + 1$ (max + LEM). ∎

Это даёт ε-сертификат для классических свойств с явной ε-координатой $\omega + 1$.

**Случай 3 (свойства вне IPL+LEM)**: например, свойства, требующие сильных модальностей или паранепротиворечивых аргументов. Эти свойства покрываются T-2f*** (Теорема 136.T) для трансфинитных модальностей. ε-перевод определён в более сложной семантике с md^ω-стратификацией.

Все три случая дают canonical ε-translation; coherence работает покомпонентно.

### 3.2 Шаг B: ε → α direction

Симметрично. Допустим $\mathrm{cert}_\varepsilon(P, \phi^\sharp)$. По 108.T inverse (Шаг B Конструкция 6.1):
$$
\alpha(\phi^\sharp) := \phi \in \langle\!\langle \cdot \rangle\!\rangle.
$$

Через round-trip Теорему 16.10: $\mathrm{canonicalize}(\alpha(\varepsilon(\phi))) = \mathrm{canonicalize}(\phi)$. По static type-checking + framework axioms: $\mathrm{cert}_\alpha(P, \phi)$.

### 3.3 Шаг C: bisimulation на уровне выполнения

Для concurrent/distributed программ нужна дополнительная проверка: $\pi_\varepsilon(\mathrm{execute}(P))$ не зависит от scheduler-выбора.

**Подслучай 3.3.1 (commutative effects)**: По Следствию 17.C2 (concurrent correctness через ⊗-коммутативность): для commutative effects (Reader, Writer, List, Probability) параллельная композиция корректна и scheduler-independent. Coherence работает напрямую.

**Подслучай 3.3.2 (non-commutative effects: State, IO, Exception)**: для non-commutative monads порядок применения важен. Coherence требует **fairness assumption** на scheduler (eventually все процессы выполняются). При fairness:
- Все runtime traces содержат одинаковую *множественность* effects (хотя порядок отличается).
- Caнonicalization работает на уровне *bisimulation*, не на уровне *equality*.

**Подслучай 3.3.3 (cut-elimination как trace-canonicalization)**: по Лемме 120.L3, cut-elimination в Ludics соответствует canonical reduction в Perf(α_linear). Через Curry-Howard: cut-elimination = β-reduction в linear λ-calculus = canonical trace reduction для concurrent программ. Это даёт unique normal form для traces commutative программ; bisimulation-уникальность для non-commutative.

### 3.4 Шаг D: вычислимость coherence-check

**Уточнение зависимости сложности от input vs program size**:

Для программы $P$ со входом $x$ длины $|x|$:
- Static check (Шаг A): $O(|P| \cdot |\phi|)$ — зависит только от программы и свойства, не от input.
- Runtime monitor (Шаг B): $O(|\mathrm{trace}(P, x)| \cdot |\phi^\sharp|)$ — зависит от длины trace, которая может расти с input.
- Bridge T_{108}: $O(|\phi|)$ через 108.T-functor.
- Round-trip canonicalize (Теорема 16.10): $O(2^{O(|\phi|)})$.

**Общая верхняя граница**: $O(2^{O(|P| + |\phi|)} + |\mathrm{trace}(P, x)| \cdot |\phi|)$.

Для **bounded execution** (timeout / fixed input bound): $|\mathrm{trace}(P, x)| \leq B(|x|)$ для функции $B$. Coherence decidable за $O(2^{O(|P| + |\phi|)} + B(|x|) \cdot |\phi|)$.

Для **unbounded execution** (general concurrent without timeout): coherence — semi-decidable через limit construction.

∎ 18.T1

## 4. Применения

### 4.1 УГМ-программа

Тестовый случай: УГМ-практика `live_by_uhm` (см. /12-actic/09-verum-stdlib-sketch §8):

```verum
@enact(epsilon = "omega_3_plus_1")
@framework(α_uhm, "UHM articulation, ν = ω·3+1")
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

**α-сертификат**: программа реализует УГМ-теорию через framework $\alpha_\mathrm{uhm}$.

**ε-сертификат**: выполнение `live_by_uhm` имеет ε-координату $\omega \cdot 3 + 1$ (цивилизационная сборка).

**Coherence**: оба сертификата эквивалентны через 108.T (R1 Следствие 5.10): $\nu(\alpha_\mathrm{uhm}) = \mathsf{e}(\varepsilon_\mathrm{uhm}) = \omega \cdot 3 + 1$.

### 4.2 Concurrent system

Distributed actor system с message-passing:

```verum
@effect(Concurrent)
@enact(epsilon = "omega_plus_2")
fn distributed_consensus(actors: Vec<Actor<Message>>) -> Consensus {
    parallel {
        for actor in actors {
            actor.send(Propose(value));
            actor.collect_responses();
        }
    }
    aggregate_consensus()
}
```

**α-сертификат**: linearizability + safety (через linear types в $\alpha_\mathrm{linear}$).

**ε-сертификат**: concurrent execution без deadlock (через 17.C2 commutative monads).

**Coherence**: linearizability ↔ ⊗-commutativity в Perf(α_linear) через 120.T + 17.T1.

### 4.3 Quantum computation

Квантовый алгоритм с unitary эволюцией. **Уточнение**: $\alpha_\mathrm{quantum}$ — это $\alpha_\mathrm{linear}$ + аксиомы квантовой механики (через категориальные quantum semantics Abramsky-Coecke 2004 «A categorical semantics of quantum protocols»). Формально $\alpha_\mathrm{quantum} \in \langle\!\langle \cdot \rangle\!\rangle$ — артикуляция в подкатегории SMCC с †-структурой ([`/03-formal-architecture/15-non-classical-articulations`](/03-formal-architecture/15-non-classical-articulations) §quantum extension).

```verum
@framework(α_quantum, "Quantum articulation: SMCC with †-compact structure")
@effect(Probability)  // commutative monad для quantum measurements
@enact(epsilon = "omega")
fn quantum_search(oracle: Oracle, n: u32) -> Distr<Result> {
    let qubits = init_qubits(n);
    apply_hadamard(qubits);
    for _ in 0..sqrt(2^n) {
        oracle(qubits);
        apply_grover_diffusion(qubits);
    }
    measure(qubits)  // returns probability distribution
}
```

**α-сертификат**: unitarity (программа сохраняет норму через †-compact structure α_quantum).

**ε-сертификат**: probabilistic correctness через Probability-monad (commutative — поэтому coherence работает по подслучаю 3.3.1).

**Coherence**: unitarity ↔ ε-сохранение через 108.T + 17.T1 (Probability как commutative monad).

**Замечание о α_quantum**: формальное добавление к каталогу артикуляций — open question 7.3 (probabilistic coherence). Базовая структура — α_linear + †-compact (quantum-categorical extension), что согласуется с УГМ артикуляцией α_uhm = (α_linear, α_AFA, α_!) в УГМ-сборке (см. /05-assemblies/01-uhm).

## 5. Спецификация core/verum/coherence.vr

```verum
@framework(operational_coherence_18T1, "Theorem 18.T1: α/ε coherence via 108.T")

// Свойства как объекты α-категории
type AlphaProperty = ...

// Свойства как объекты ε-категории
type EpsilonProperty = ...

// 108.T-bridge
fn alpha_to_epsilon(prop: AlphaProperty) -> EpsilonProperty
    proof_via Theorem_108T_Step_A
;

fn epsilon_to_alpha(prop: EpsilonProperty) -> AlphaProperty
    proof_via Theorem_108T_Step_B
;

// Static checker
fn static_check<P: Program>(prog: P, prop: AlphaProperty) -> Certificate
    @verify(formal)
;

// Runtime monitor
fn runtime_monitor<P: Program>(execution: Execution<P>, prop: EpsilonProperty) -> Certificate
    @verify(reliable)
;

// Coherence verifier
@verify(certified)
fn coherence_check<P: Program, φ: AlphaProperty>(prog: P, prop: φ) -> Bool
    ensures result == (static_check(prog, prop) == runtime_monitor(execute(prog), alpha_to_epsilon(prop)))
    proof_via Theorem_18T1
;

// Round-trip property
@verify(certified)
theorem round_trip_coherence<P: Program, φ: AlphaProperty>(prog: P, prop: φ)
    where prog.is_finitely_axiomatized()
    ensures static_check(prog, prop) ⟺
            runtime_monitor(execute(prog), alpha_to_epsilon(prop))
    proof_via Theorem_18T1 + Theorem_16_10
;

// Concurrent coherence
@verify(certified)
theorem concurrent_coherence<P1, P2>(p1: P1, p2: P2)
    where P1.commutes_with(P2)
    ensures coherence_check(parallel(p1, p2), property) ⟺
            coherence_check(p1, property) ∧ coherence_check(p2, property)
    proof_via Theorem_17_T1 + Lemma_120_L3
;
```

## 6. Связь с теоремами Diakrisis

| Теорема / документ | Роль в 18.T1 |
|---|---|
| **Предложение 5.1** | Корневое утверждение: ν = e ∘ ε, обеспечивает Шаг A α→ε. |
| **140.T** ((∞,∞)-семантика) | Полное расширение coherence на (∞,∞)-уровень для cosmological-scale программ. |
| **136.T** (T-2f***) | Парадокс-иммунность для трансфинитно-модальных свойств. |
| **141.T** (автопоэзис) | Биологические/эволюционные программы — operationally coherent через ω²-итерацию. |
| **Теорема 16.10** (round-trip 108.T) | Алгоритмическая разрешимость coherence-check (Шаг D). |
| **Теорема 17.T1** (effects) | Operational interpretation через Kleisli-категории (Шаг C). |
| **121.T** (BHK) | Proof-extraction даёт witness для ε-сертификата (Шаг A). |
| **120.T** (Ludics) | Cut-elimination как canonicalization (Шаг C). |
| **124.T** (𝖬⊣𝖠) | Biadjunction даёт двустороннюю трансляцию свойств. |
| **131.T** (стек-модель) | Consistency для всех 13 аксиом, на которых строится coherence. |
| **137.T** (weak-стратум) | Complexity-bounded coherence для bounded-arithmetic programs. |
| **18.T1** (настоящая теорема) | Финальный синтез — operationally coherent Verum. |

## 7. Open questions для V2 и далее

### 7.1 Автоматическая инференция coherence

Можно ли автоматически выводить $\phi^\sharp$ из $\phi$ без явного 108.T-функтора? Связано с gauge-decision (Теорема 16.6) полу-разрешимостью.

### 7.2 Distributed coherence

Coherence для federated Verum-systems (multi-instance), где разные ноды имеют разные α-семантики. Требует расширения 108.T до multi-base case.

### 7.3 Probabilistic coherence

Расширение на probabilistic programs (через Giry monad). Связь с УГМ T-217 (TPM).

### 7.4 Weak-stratum coherence

Для программ с bounded-arithmetic α-семантикой ($\mathcal{L}_\mathrm{Fnd}^\mathrm{weak}$, см. /06-limits/05-what-remains-possible §137.T) coherence-check имеет **усиленные** complexity bounds:

- Static check: $O(|P| \cdot |\phi|^{\nu^\mathrm{weak}})$ — полиномиально по weak-уровню.
- Runtime monitor: $O(|P|^{\nu^\mathrm{weak}})$ — полиномиально (для P ⊂ NP программ).
- Bridge T_{108}: $O(1)$ для конечно-аксиоматизированных weak-теорий.

Общая coherence для weak-стратума: **полиномиальная** (не экспоненциальная) сложность. Это делает Verum operational coherence практичным для cryptography, embedded systems, real-time verification (R11 Следствие 137.C4).

**Теорема 18.T1_weak** [Т·L3] *(weak-стратум следствие)*. Для программы $P$ с $\mathcal{L}_\mathrm{Fnd}^\mathrm{weak}$ α-семантикой: $\mathrm{cert}_\alpha(P, \phi) \iff \mathrm{cert}_\varepsilon(P, \phi^\sharp)$ за полиномиальное время.

*Доказательство.* Прямое следствие 18.T1 + 137.T weak-AFN-T + bounded complexity $\nu^\mathrm{weak}$. ∎

## 8. Источники

- Plotkin 1977 «LCF considered as a programming language» (operational vs denotational).
- Milner 1999 «Communicating and mobile systems».
- Abramsky-Jagadeesan-Malacaria 2000 «Full abstraction for PCF».
- Harper 2016 «Practical Foundations for Programming Languages».
- Pitts 2005 «Typed operational reasoning».

## 9. Ссылки

- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — Теорема 108.T (Предложение 5.1 + Теорема 124.T).
- [`/03-formal-architecture/16-gauge-decision`](/03-formal-architecture/16-gauge-decision) — R5.
- [`/03-formal-architecture/17-effects-and-linear`](/03-formal-architecture/17-effects-and-linear) — Теорема 17.T1 (эффекты).
- [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §11–12 — Теоремы 120.T (Ludics), 121.T (BHK).
- [`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch) — план интеграции.
- [`/12-actic/10-implementation-status`](/12-actic/10-implementation-status) — статус реализации.
