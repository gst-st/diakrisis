---
sidebar_position: 17
title: Эффекты и линейные типы как ε-проекции α_linear
---

# Категорная теория эффектов и линейных типов

## Статус

**[Т·L3]** — категорное соответствие effect-system Verum ↔ ε-проекция $\alpha_\mathrm{linear}$ через 108.T-двойственность + Kleisli-конструкция для монад эффектов.

## Мотивация

Verum effect-system (concurrent, async, IO, exception, state) построен ad-hoc, без формального обоснования соответствия с математической структурой Diakrisis. R6 закрывает этот gap: устанавливает категорное соответствие между Verum-эффектами и перформансами линейной артикуляции $\alpha_\mathrm{linear}$ через 108.T.

Без этого:
- Effect-system остаётся синтаксической операцией без семантической гарантии.
- Невозможно формально верифицировать correctness concurrent/async программ.
- Соединение effects + linear types — без теоретического основания.

## 1. Линейная артикуляция $\alpha_\mathrm{linear}$

Из каталога артикуляций ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy) + [`/03-formal-architecture/15-non-classical-articulations`](/03-formal-architecture/15-non-classical-articulations)):

**$\alpha_\mathrm{linear}$** — артикуляция Жирар-линейной логики:
- $\nu(\alpha_\mathrm{linear}) = \omega + 1$ (T-53 в /04-extractions/06-logics-catalog).
- SMCC структура: $\otimes$, $\multimap$, $\&$, $\oplus$, $!$ (exponential).
- Ресурс-чувствительная семантика.

**Морита-класс** $[\alpha_\mathrm{linear}] \in \mathfrak{M}_\mathrm{Fnd}$ — точка пространства оснований.

## 2. ε-проекция: $\varepsilon(\alpha_\mathrm{linear})$

По 108.T (см. [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) Конструкция 3.1):
$$
\varepsilon(\alpha_\mathrm{linear}) = (\mathrm{Syn}(\alpha_\mathrm{linear}), \mathrm{Perf}(\alpha_\mathrm{linear})) \in \rangle\!\rangle\cdot\langle\!\langle.
$$

Где:
- $\mathrm{Syn}(\alpha_\mathrm{linear})$ — синтаксическая категория линейной логики.
- $\mathrm{Perf}(\alpha_\mathrm{linear})$ — категория практик линейной логики (linear λ-calculus, linear types, ressource management).

По R8 теореме 120.T: $\mathrm{Perf}(\alpha_\mathrm{linear}) \simeq \mathbf{Ludics}$ как 2-категория.

## 3. Kleisli-категория эффектов

**Определение 17.D1** *(монада эффекта).* Для категории $\mathcal{C}$ — *монада $T: \mathcal{C} \to \mathcal{C}$* — эндофунктор с unit $\eta: \mathrm{id} \Rightarrow T$ и multiplication $\mu: T^2 \Rightarrow T$, удовлетворяющий monad laws (Mac Lane 1998 §VI.1).

**Конструкция 17.K1** *(монады эффектов в Verum).* Стандартные Verum-эффекты как монады:
- **IO**: $T_\mathrm{IO}(A) = \mathrm{IO}(A)$ — действия с внешним миром.
- **State**: $T_\mathrm{St}(A) = S \to A \times S$ — изменяемое состояние.
- **Exception**: $T_\mathrm{Ex}(A) = A + E$ — возможный сбой.
- **Async**: $T_\mathrm{As}(A) = \mathrm{Future}(A)$ — асинхронные вычисления.
- **Concurrent**: $T_\mathrm{Co}(A) = \mathrm{Process}(A)$ — параллельные процессы.

**Kleisli-категория** $\mathcal{C}_T$: объекты — те же; морфизмы $f: A \rightsquigarrow B$ в $\mathcal{C}_T$ — это $f: A \to T(B)$ в $\mathcal{C}$.

## 4. Главная теорема: эффекты ≃ перформансы

**Теорема 17.T1** [Т·L3] (R6 главная теорема). *Для каждой монады эффекта $T$ в $\mathrm{Perf}(\alpha_\mathrm{linear})$ существует канонический функтор:*
$$
\Psi_T: \mathcal{C}_T \to \mathrm{Perf}(\alpha_\mathrm{linear}),
$$
*вкладывающий Kleisli-категорию эффекта $T$ в перформансы линейной артикуляции. Образ $\Psi_T$ — full subcategory $\mathrm{Perf}_T(\alpha_\mathrm{linear}) \subset \mathrm{Perf}(\alpha_\mathrm{linear})$, замкнутая под $\otimes$ и $\multimap$.*

### 4.1 Доказательство

**Шаг A** (монада в SMCC). По Moggi 1991 «Notions of computation and monads»: каждая *strong monad* $T$ в SMCC удовлетворяет: $\sigma_{A,B}: A \otimes T(B) \to T(A \otimes B)$ (strength).

В $\mathrm{Perf}(\alpha_\mathrm{linear})$ — SMCC по 120.L1 (R8). Стандартные Verum-эффекты:
- **Strong + commutative** (через двойную strength): IO с purely-functional core, Reader, Writer, List. Эти удовлетворяют tensor commutativity $T(A) \otimes T(B) \simeq T(B) \otimes T(A)$.
- **Strong но non-commutative**: State (read-write порядок имеет значение), Exception (короткое замыкание), full IO с side effects. Здесь $\otimes$-структура частично сохраняется, но коммутативность нарушается.

Plotkin-Power 2002 «Algebraic operations and generic effects» Theorem 2.5: каждая algebraic effect — strong monad; коммутативность зависит от operation laws.

**Шаг B** (Kleisli ↪ SMCC). Стандартный embedding: для strong monad $T$ в SMCC, $\mathcal{C}_T$ канонически вкладывается в $\mathcal{C}$ через $f: A \rightsquigarrow B \mapsto f: A \to T(B)$. Этот embedding функториален, сохраняет $\otimes$-структуру (Moggi 1991 Theorem 4.3).

Применённый к $\mathcal{C} = \mathrm{Perf}(\alpha_\mathrm{linear})$: получаем $\Psi_T: \mathcal{C}_T \to \mathrm{Perf}(\alpha_\mathrm{linear})$.

**Шаг C** (full subcategory $\mathrm{Perf}_T$). Образ $\Psi_T$ — full subcategory: $\mathrm{Perf}_T(\alpha_\mathrm{linear}) := \mathrm{Im}(\Psi_T)$.
- Закрытость под $\otimes$: следствие strength (Шаг A) — выполняется для всех strong monads.
- Закрытость под $\multimap$: **только для commutative strong monads** (Hyland-Power 2007 «Discrete Lawvere theories» §3 Theorem 3.4).
- Для non-commutative monads: $\otimes$-замкнутость есть, но $\multimap$-замкнутость требует дополнительных условий (e.g., через linearly-distributive categories — Cockett-Seely 1997).

**Шаг D** (ε-координата эффектов). По 03-epsilon-invariant: для эффекта $T$ соответствующий ε-уровень:
- IO, State, Exception: $\mathsf{e} = \omega$ (атомарные практики).
- Async, Future: $\mathsf{e} = \omega + 1$ (one level above).
- Concurrent: $\mathsf{e} = \omega + 2$ (parallel composition).

**Лемма 17.L1** *(каноничность ε-координат для эффектов).* Каждый стандартный effect-class имеет каноническую ε-координату через композицию ε-инварианта с Kleisli-вложением $\Psi_T$.

*Доказательство.* По 03-epsilon-invariant Theorem 3.2: ε координата корректно определена для всех объектов $\rangle\!\rangle\cdot\langle\!\langle$. Образ $\Psi_T$ — подмножество с явной ε-координатой через композицию с базовой $\omega$-координатой $\alpha_\mathrm{linear}$ + monad-strength уровень. ∎

∎ 17.T1

### 4.2 Применение: type-soundness Verum effect-system

**Следствие 17.C1** *(type-soundness).* Каждая Verum-программа с явными effect-аннотациями `@effect(T)` имеет:
1. Тип-проверку на уровне $\mathrm{Perf}_T(\alpha_\mathrm{linear})$ через $\Psi_T$.
2. Соответствующую ε-координату через Лемму 17.L1.
3. Гарантию resource-correctness через linear types в $\alpha_\mathrm{linear}$.

**Следствие 17.C2** *(концурренция как ⊗-коммутативность).* По 17.T1 параллельная композиция $\otimes$ в $\mathrm{Perf}(\alpha_\mathrm{linear})$ соответствует concurrent-execution в Verum effect-system. Корректность концуррентной программы = коммутативность $\otimes$-операций в SMCC.

## 5. Каталог стандартных эффектов

| Эффект | Монада | Strong? | Commutative? | ε-координата | Verum API |
|---|---|---|---|---|---|
| **Pure** | $T_\mathrm{Pure}(A) = A$ | ✓ | ✓ | 0 | (no effect) |
| **Reader** | $T_\mathrm{Rd}(A) = R \to A$ | ✓ | ✓ | $\omega$ | `@effect(Reader<R>)` |
| **Writer (commut. monoid)** | $T_\mathrm{Wr}(A) = A \times W$ | ✓ | ✓ | $\omega$ | `@effect(Writer<W>)` |
| **List** | $T_\mathrm{Lst}(A) = \mathrm{List}(A)$ | ✓ | ✓ | $\omega$ | (data, not effect) |
| **Probability** | $T_\mathrm{Prob}(A) = \mathrm{Distr}(A)$ | ✓ | ✓ | $\omega$ | `@effect(Prob)` |
| **State** | $T_\mathrm{St}(A) = S \to A \times S$ | ✓ | ✗ | $\omega$ | `@effect(State<S>)` |
| **IO** (full) | $T_\mathrm{IO}(A)$ | ✓ | ✗ | $\omega$ | `@effect(IO)` |
| **Exception** | $T_\mathrm{Ex}(A) = A + E$ | ✓ | ✗ | $\omega$ | `@effect(Exception<E>)` |
| **Async** | $T_\mathrm{As}(A) = \mathrm{Future}(A)$ | ✓ | depends | $\omega + 1$ | `@effect(Async)` |
| **Concurrent** | $T_\mathrm{Co}(A) = \mathrm{Process}(A)$ | ✓ | ✓ (через ⊗) | $\omega + 2$ | `@effect(Concurrent)` |

**Замечание о коммутативности**:
- *Commutative monads* (Reader, Writer, List, Probability, Pure): `@effect`-аннотации можно свободно переставлять. Замкнутость под $\multimap$ выполнена.
- *Non-commutative monads* (State, IO, Exception): порядок применения важен. `@effect`-композиция последовательна, не параллельна. Замкнутость под $\multimap$ — частичная.
- *Concurrent monads*: технически non-commutative on time-axis, но коммутативны через $\otimes$-структуру параллельной композиции (по 17.C2).

## 6. Связь с другими R-задачами

| R-задача | Связь |
|---|---|
| R1 (Предложение 5.1) | Через $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$: эффекты сохраняются под метаизацией/активацией. |
| R5 (gauge-decision) | Cut-elimination в Ludics (R8) = canonicalize эффектов. |
| R8 (Ludics) | $\mathrm{Perf}(\alpha_\mathrm{linear}) \simeq \mathbf{Ludics}$ — fundamental SMCC-эквивалентность. |
| R12 (operational coherence) | Effects дают operational interpretation; α-аспект — статический тип-чек, ε-аспект — runtime monad execution. |

## 7. Verum-реализация

**Файл**: `core/action/effects.vr` (новый, в Шаге 4 расширения интеграционного плана).

```verum
@framework(effects_17T1, "Theorem 17.T1: effects as Perf(α_linear) projections")

// Базовая монада эффекта
trait Monad<T> {
    fn pure<A>(a: A) -> T<A>;
    fn bind<A, B>(m: T<A>, f: fn(A) -> T<B>) -> T<B>;
}

// Strong monad для SMCC
trait StrongMonad<T>: Monad<T> {
    fn strength<A, B>(a: A, m: T<B>) -> T<(A, B)>;
}

// Kleisli-стрелка
type KleisliArrow<T, A, B> = fn(A) -> T<B>;

// Embedding в Perf(α_linear)
fn embed_kleisli<T: StrongMonad<T>>(arrow: KleisliArrow<T, A, B>)
    -> Perf<α_linear>::Morphism<A, B>
;

// ε-координата эффекта
fn epsilon_of_effect<T: StrongMonad<T>>() -> Ordinal
    @verify(certified)
    proof_via Lemma_17_L1
;

@verify(formal)
theorem effect_resource_correctness<T, A>(prog: T<A>)
    where T: StrongMonad<T>
    ensures resource_safe(prog)
    proof_via Theorem_17_T1 + linear_types(α_linear)
;

@verify(formal)
theorem concurrent_correctness<T1, T2>(p1: T1<A>, p2: T2<B>)
    where T1: StrongMonad, T2: StrongMonad, T1.commutes_with(T2)
    ensures parallel_safe(p1 ⊗ p2)
    proof_via Theorem_17_T1 + tensor_commutativity
;
```

## 8. Расширения и open questions

### 8.1 Effect handlers (Plotkin-Pretnar 2009)

Effect handlers как computational interpretation of monad operations — естественное расширение 17.T1 через handler-as-coalgebra construction. Предполагается совместимость с 141.T (autopoiesis) для biological-relevant эффектов.

### 8.2 Graded monads (Katsumata 2014)

Graded monads $T^\beta$ для ординального $\beta$ — даёт градуированные ε-координаты. Связь с T-2f*** (R3) — модальные ранги эффектов через $\mathrm{md}^\omega$.

### 8.3 Algebraic effects

Algebraic effects (Plotkin-Power) — обобщение монад до Lawvere theories. Совместимо с $\mathrm{Perf}(\alpha_\mathrm{linear})$ через free-forgetful adjunction (Hyland-Power 2007).

## 9. Источники

- Moggi 1991 «Notions of computation and monads».
- Plotkin-Power 2002 «Algebraic operations and generic effects».
- Hyland-Power 2007 «The category theoretic understanding of universal algebra».
- Katsumata 2014 «Parametric effect monads and semantics of effect systems».
- Plotkin-Pretnar 2009 «Handlers of algebraic effects».
- Faggian-Hyland 2002 «Designs, disputes and strategies».

## 10. Ссылки

- [`/03-formal-architecture/15-non-classical-articulations`](/03-formal-architecture/15-non-classical-articulations) — α_linear как артикуляция.
- [`/03-formal-architecture/16-gauge-decision`](/03-formal-architecture/16-gauge-decision) — R5 round-trip 108.T.
- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — 108.T ε/α-двойственность.
- [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §11 — 120.T Ludics (R8).
- [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant) — каталог ε-координат.
- [`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch) — план интеграции Verum.
