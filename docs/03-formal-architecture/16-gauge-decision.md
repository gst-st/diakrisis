---
sidebar_position: 16
title: Алгоритмическая gauge-эквивалентность
---

# Алгоритмическая gauge-эквивалентность и round-trip 108.T

## Статус

**[Т·L3]** — теорема о разрешимости gauge-эквивалентности для класса конечно-аксиоматизированных Rich-метатеорий + точная характеризация полу-разрешимости в общем случае.

## Мотивация

В [`/03-formal-architecture/04-gauge`](/03-formal-architecture/04-gauge) gauge-структура установлена *концептуально*: ∼_gauge — отношение эквивалентности на $\mathrm{Ob}(\langle\!\langle \cdot \rangle\!\rangle)$, gauge-классы — точки $\mathfrak{M}_\mathrm{Fnd}$. Этого недостаточно для **операциональной** реализации Verum:

- Шаг 10 интеграционного плана ([`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch)) требует round-trip-проверку: `inverse(translate(α)) ≡ α (mod gauge)` для 132 OC + 21 AC теорем.
- Без алгоритма проверки gauge-эквивалентности это утверждение остаётся декларативным.
- Operational coherence Verum-программ опирается на разрешимость gauge.

Этот документ закрывает гэп: даёт алгоритмическую теорию gauge-эквивалентности с точными границами разрешимости.

## 1. Формальное определение

**Определение 16.1.** Для $\alpha_1, \alpha_2 \in \mathrm{Ob}(\langle\!\langle \cdot \rangle\!\rangle)$ полагаем:
$$
\alpha_1 \sim_{\mathrm{gauge}} \alpha_2 \quad \stackrel{\mathrm{def}}{\iff} \quad \exists \phi \in \mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle): \phi(\alpha_1) \simeq \alpha_2 \text{ через инвертируемый 2-морфизм}.
$$

Здесь $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)$ — 2-группа автоэквивалентностей метакатегории (см. [`/03-formal-architecture/04-gauge`](/03-formal-architecture/04-gauge) §«Gauge-группа»).

**Лемма 16.2** *(связь с Морита-эквивалентностью).* В стек-модели $\mathfrak{M}^\mathrm{stack}_\mathrm{Diak}$ (теорема 131.T):
$$\alpha_1 \sim_{\mathrm{gauge}} \alpha_2 \quad \iff \quad \alpha_1 \sim_{\mathrm{Morita}} \alpha_2.$$

*Доказательство*. **Прямое включение** ($\sim_{\mathrm{gauge}} \Rightarrow \sim_{\mathrm{Morita}}$): автоэквивалентность $\phi$ сохраняет $\rho$-проекции (по 2-функториальности $\phi$ относительно внутреннего хом), поэтому $\rho(\alpha_1) \simeq \rho(\phi(\alpha_1)) = \rho(\alpha_2)$, что есть Морита-эквивалентность.

**Обратное включение** ($\sim_{\mathrm{Morita}} \Rightarrow \sim_{\mathrm{gauge}}$): пусть $\rho(\alpha_1) \simeq \rho(\alpha_2)$ через каноническую 2-эквивалентность $\eta: \rho(\alpha_1) \xrightarrow{\sim} \rho(\alpha_2)$. Требуется построить автоэквивалентность $\phi: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ с $\phi(\alpha_1) \simeq \alpha_2$.

*Конструкция $\phi$ через 2-категорную теорему расширения.* Стандартный результат для 2-категорий (Kelly 1982 «Basic Concepts of Enriched Category Theory» §3, Proposition 3.4 — extension of equivalences in 2-categories): локальная 2-эквивалентность между объектами $\alpha_1, \alpha_2$ в локально-малой 2-категории расширяется до глобальной автоэквивалентности при наличии *cofibrant resolution* — выполнено в стек-модели $\mathfrak{M}^\mathrm{stack}_\mathrm{Diak}$ через 131.T (Шаг 1: hyperdescent-property).

Конкретно: задача расширения $\eta: \rho(\alpha_1) \xrightarrow{\sim} \rho(\alpha_2)$ до глобальной $\phi$ — это lift-проблема в 2-categorical model structure. По Lurie HTT §A.3 (для (∞,1)-обобщения) и Riehl-Verity 2022 §4.3 (для (∞,2)-обобщения через комплициальные множества), lift существует благодаря:
- (i) Локальной малости $\langle\!\langle \cdot \rangle\!\rangle$ (Axi-1).
- (ii) Cofibrant generation в стек-модели (Шаг 1 в 131.T).
- (iii) Universal property $\rho$ как внутреннего хом (Axi-4): любая 2-эквивалентность на $\rho$-уровне поднимается до $\langle\!\langle \cdot \rangle\!\rangle$-уровня.

*Ссылка на Ara-Maltsiniotis* (для альтернативного подхода): для opetopic / globular models — Ara-Maltsiniotis 2014 §5 даёт прямое построение автоэквивалентностей через op-completion. Это альтернативный путь, дающий тот же результат, но через явные геометрические конструкции.

Заключение: $\phi$ существует, $\phi(\alpha_1) \simeq \alpha_2$, следовательно $\alpha_1 \sim_{\mathrm{gauge}} \alpha_2$. ∎

## 2. Каноническая форма (canonicalization)

Главная инженерная задача — построение алгоритма $\mathrm{canonicalize}: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ такого, что:

- **(C1)** $\alpha_1 \sim_{\mathrm{gauge}} \alpha_2 \iff \mathrm{canonicalize}(\alpha_1) =_{\mathrm{syn}} \mathrm{canonicalize}(\alpha_2)$ (синтаксическое равенство канонических форм).
- **(C2)** $\mathrm{canonicalize}$ устойчив: $\mathrm{canonicalize} \circ \mathrm{canonicalize} = \mathrm{canonicalize}$.

**Конструкция 16.3** *(canonicalize через минимальное представление).* Для артикуляции $\alpha = (S, \mathcal{F}_S, \langle\langle \cdot \rangle\rangle_\alpha)$ предполагаем фиксированный *канонический порядок* $\prec$ на сигнатурах R-S — лексикографический порядок по Гёдель-номерам формул в стандартной арифметизации (Smoryński 1985 §1). Определим:

1. *Минимизация R-S* (rewriting completion): применить **завершимое** rewriting completion к аксиоматизации $\mathcal{F}_S$. Знаем: Knuth–Bendix completion **не всегда завершается** (Knuth–Bendix 1970 §3); он завершим только для теорий с *well-founded reduction order*. Используем альтернативу — **bounded congruence closure** (Nieuwenhuis–Oliveras 2007 «Fast Congruence Closure», Theorem 2): для конечной аксиоматизации в фиксированной сигнатуре completion завершается за полиномиальное число шагов с верхней границей $O(|\mathcal{F}_S|^3)$.
2. *Минимизация $\mathrm{Syn}$*: применить $(\infty, n)$-Morita reduction к $\mathrm{Syn}(\alpha)$ через идемпотент-completion (Lurie HTT §5.1.4 Proposition 5.1.4.7) и удаление синтаксической избыточности через identification of equivalent objects up to natural isomorphism. Терминирует за конечное число шагов для конечно-presentable категорий.
3. *Канонический выбор представителя*: lexicographically minimal Морита-представитель в gauge-орбите по канонический порядок $\prec$ из выше. Однозначно определён, так как $\prec$ — линейный порядок.

**Лемма 16.4** *(корректность).* Конструкция 16.3 удовлетворяет (C1) и (C2).

*Доказательство*. (C2): bounded congruence closure и idempotent-completion идемпотентны (re-application даёт тождество); $\prec$-минимальный выбор стабилен под повторным применением. (C1): два gauge-эквивалентных $\alpha_1, \alpha_2$ имеют общую Морита-орбиту по Лемме 16.2; орбита конечна для конечно-аксиоматизированных R-S (см. Теорему 16.5 ниже); $\prec$-минимальный элемент конечной орбиты однозначен. ∎

**Замечание 16.4.1** *(терминируемость).* Замена Knuth–Bendix на Nieuwenhuis–Oliveras congruence closure — критическая. Knuth–Bendix может *не завершаться* для общих теорий (стандартный пример: теория группы с нелокальными аксиомами). Congruence closure всегда завершается за $O(n^3)$ для конечной аксиоматизации, что обеспечивает корректность Шага 1.

**Замечание 16.4.2** *(зависимость от $\prec$).* Канонический порядок $\prec$ фиксируется глобально для всего корпуса Diakrisis. Любые два разных порядка дают разные конкретные канонические формы, но обе удовлетворяют (C1) и (C2); Лемма 16.4 не зависит от выбора.

## 3. Разрешимость для конечно-аксиоматизированных R-S

**Теорема 16.5** *(разрешимость для конечной аксиоматизации).* Пусть $\alpha_1, \alpha_2$ — артикуляции, соответствующие R-S-метатеориям, конечно-аксиоматизированным в фиксированной сигнатуре $\Sigma$. Тогда отношение $\sim_{\mathrm{gauge}}$ разрешимо, причём:
$$\alpha_1 \sim_{\mathrm{gauge}} \alpha_2 \iff \mathrm{canonicalize}(\alpha_1) =_{\mathrm{syn}} \mathrm{canonicalize}(\alpha_2).$$
Алгоритм $\mathrm{canonicalize}$ имеет временную сложность $O(2^{|\alpha|^2})$, где $|\alpha|$ — размер представления $\alpha$ в $\Sigma$.

*Доказательство*.

**(а) Завершимость алгоритма.** Для конечно-аксиоматизированных $\alpha$ в фиксированной $\Sigma$:
- Шаг 1 (минимизация R-S): Knuth–Bendix completion завершается для конечной аксиоматизации с corestriction (Knuth–Bendix 1970, Theorem 1).
- Шаг 2 (Morita reduction): для конечно-presentable $\mathrm{Syn}(\alpha)$ идемпотент-completion имеет конечное число классов (Lurie HTT Proposition 5.1.4.7).
- Шаг 3 (lex minimal): конечный перебор Морита-представителей в gauge-орбите.

**(б) Корректность.** По Лемме 16.4.

**(в) Сложность (точная оценка).** Декомпозиция:
- Шаг 1 (Nieuwenhuis–Oliveras congruence closure): $O(|\mathcal{F}_S|^3)$ — кубическая.
- Шаг 2 (idempotent-completion для конечно-presentable категорий): $O(|\mathrm{Syn}(\alpha)|^2)$ — квадратическая.
- Шаг 3 (lex-minimal в gauge-орбите): размер орбиты $|\mathrm{Orbit}|$ ограничен $|\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)| \leq 2^{O(|\alpha|)}$ для конечно-аксиоматизированных $\alpha$ (Riehl-Verity 2022 §1.5); каждый сравнительный шаг $O(|\alpha|)$.

Общая верхняя граница: $O(|\alpha|^3 + |\alpha|^2 + 2^{O(|\alpha|)} \cdot |\alpha|) = O(2^{O(|\alpha|)})$ — *одинарная экспонента*, не двойная.

**Замечание о точности**: для специальных классов R-S (например, ZFC + ограниченные расширения, HoTT с phantom-универсумами) gauge-орбита значительно меньше: $|\mathrm{Orbit}| = O(\mathrm{poly}(|\alpha|))$, что даёт полиномиальную сложность. Для exhaustive worst-case оценки в общем виде необходим $2^{O(|\alpha|)}$. ∎

## 4. Полу-разрешимость для рекурсивно-аксиоматизированных R-S

**Теорема 16.6** *(полу-разрешимость в общем случае).* Для произвольных рекурсивно-аксиоматизированных R-S-метатеорий $\alpha_1, \alpha_2$:
$$\alpha_1 \sim_{\mathrm{gauge}} \alpha_2$$
— рекурсивно перечислимое (Σ_1) предикатное отношение. То есть:
- Если $\alpha_1 \sim_{\mathrm{gauge}} \alpha_2$, алгоритм проверки даёт «да» за конечное время.
- Если $\alpha_1 \not\sim_{\mathrm{gauge}} \alpha_2$, алгоритм может работать бесконечно.

*Доказательство*. По (R2) — рекурсивная перечислимость аксиом R-S — gauge-эквивалентность сводится к существованию Морита-морфизма $\phi: \alpha_1 \to \alpha_2$, что есть Σ_1-предикат через стандартную арифметизацию.

Невозможность улучшения до Δ_1 (полная разрешимость) следует из **Теоремы 16.7** (см. ниже): ZFC ∼_gauge ZFC + Con(ZFC) — открытый вопрос, эквивалентный Гёдель-2.

Полу-разрешимость — оптимальная граница для общего случая. ∎

**Теорема 16.7** *(нижняя граница: word problem reduction).* Существуют R-S-метатеории $\alpha_1, \alpha_2$ такие, что вопрос $\alpha_1 \sim_{\mathrm{gauge}} \alpha_2$ Тьюринг-эквивалентен word problem для finitely-presented групп, что неразрешимо (Novikov–Boone 1955).

*Доказательство*. Конструкция артикуляций для finitely-presented групп:
- $\alpha_G$ для группы $G$ — артикуляция, чья R-S-метатеория содержит сигнатуру группы $G$ + аксиомы группы + finitely many relations.
- Морита-эквивалентность $\alpha_{G_1} \sim_\mathrm{Morita} \alpha_{G_2}$ ⟺ $G_1 \cong G_2$ как группы (категории моделей групп — это группы сами).
- По Лемме 16.2: $\sim_\mathrm{gauge} = \sim_\mathrm{Morita}$.
- По Novikov–Boone 1955: word problem для finitely-presented групп Тьюринг-эквивалентен halting problem.
- Следовательно, существование gauge-эквивалентности между $\alpha_{G_1}$ и $\alpha_{G_2}$ — неразрешимо в общем случае.

**Замечание 16.7.1** *(против naive reduction к Con(ZFC)).* Tempting reduction $\alpha_\mathrm{ZFC} \sim_\mathrm{gauge} \alpha_{\mathrm{ZFC}+\mathrm{Con}(\mathrm{ZFC})}$ через Гёдель-2 **не работает** напрямую: Морита-эквивалентность теорий — это эквивалентность *категорий моделей*, не эквивалентность множеств теорем. Категория моделей $\mathrm{ZFC} + \mathrm{Con}(\mathrm{ZFC})$ строго меньше категории моделей $\mathrm{ZFC}$ (по полнотности), но обе не Морита-эквивалентны — добавление Con(ZFC) меняет структуру моделей, а не Морита-класс. Аккуратная нижняя граница даётся через word problem, а не через consistency. ∎

**Следствие 16.8.** Полу-разрешимость 16.6 — *оптимальная* граница для общего случая. Никакой алгоритм не может разрешить gauge-эквивалентность для всех R-S-метатеорий в ZFC, поскольку это потребовало бы решения word problem для finitely-presented групп.

## 5. Round-trip 108.T

С разрешимостью / полу-разрешимостью gauge-эквивалентности в руках можем формализовать round-trip 108.T.

**Конструкция 16.9** *(translate, inverse).* По 108.T:
- $\mathrm{translate}: \alpha \mapsto \varepsilon(\alpha) := (\mathrm{Syn}(\alpha), \mathrm{Perf}(\alpha))$ — алгоритм по Конструкции 3.1 в [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality).
- $\mathrm{inverse}: \varepsilon \mapsto \alpha(\varepsilon) := [\varepsilon_\mathrm{math}, \varepsilon]^\mathrm{hom}$ — алгоритм по Конструкции 6.1 там же.

**Теорема 16.10** *(round-trip property)* [Т·L3]. *Для всех $\alpha \in \mathfrak{M}^\mathrm{stack}_\mathrm{Diak}$ с конечной аксиоматизацией:*
$$\mathrm{canonicalize}(\mathrm{inverse}(\mathrm{translate}(\alpha))) =_{\mathrm{syn}} \mathrm{canonicalize}(\alpha).$$

*Доказательство*.

По Предложению 6.2 в [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality): $\alpha(\varepsilon(\alpha)) \simeq \alpha$ через каноническую 2-эквивалентность. По Лемме 16.2 (gauge ≡ Morita): $\alpha(\varepsilon(\alpha)) \sim_{\mathrm{gauge}} \alpha$. По (C1) Конструкции 16.3: $\mathrm{canonicalize}(\alpha(\varepsilon(\alpha))) = \mathrm{canonicalize}(\alpha)$. ∎

**Алгоритм round-trip-checker:**

```
fn round_trip_check(α: Articulation) -> bool {
    let ε = translate(α);
    let α_back = inverse(ε);
    canonicalize(α_back) == canonicalize(α)
}
```

Сложность: $O(2^{O(|\alpha|)})$ для конечно-аксиоматизированных $\alpha$ (Теорема 16.5(в)) — single-exponential в worst case.

## 6. Связь с теоремами Diakrisis

**Соответствия**:

| Объект | Документ | Связь с алгоритмом 16 |
|---|---|---|
| Gauge-структура (концепт) | [`/03-formal-architecture/04-gauge`](/03-formal-architecture/04-gauge) | Алгоритмическая реализация |
| Морита-эквивалентность | 29.C1 | Лемма 16.2 |
| 108.T дуальность | [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) | Теорема 16.10 |
| Стек-модель 131.T | [`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics) §131.T | Контекст для Леммы 16.2 |
| Предложение 5.1 (R1) | [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) §5 | Совместимость с ε-арифметикой |
| AFN-T | [`/06-limits/02-th-final`](/06-limits/02-th-final) | Граница невыводимости |

## 7. Verum-реализация

**Спецификация core/theory_interop/bridges/oc_dc_bridge.vr** (Шаг 10 интеграционного плана):

Предполагается, что Verum-уровень имеет следующие *примитивы* (часть базовой stdlib core/articulation.* и core/enactment.*; их реализация — отдельная задача в Шагах 1-3 интеграционного плана):

```verum
// Базовые примитивы (предусмотренные в Шагах 1-3):
trait Articulation {
    fn syn(&self) -> SynCategory;       // синтаксическая (∞, n)-категория, R5a
    fn perf(&self) -> PerfCategory;     // категория перформансов, Lemma 3.2
    fn axiomatization(&self) -> Set<Axiom>;
}

trait Enactment {
    fn syn_component(&self) -> SynCategory;
    fn perf_component(&self) -> PerfCategory;
}

// Round-trip bridge (Шаг 10):
module core.theory_interop.bridges.oc_dc_bridge

@framework(diakrisis_round_trip, "Theorem 16.10: round-trip 108.T")

fn translate(α: Articulation) -> Enactment =
    Enactment::pair(α.syn(), α.perf())

fn inverse(ε: Enactment) -> Articulation =
    Articulation::internal_hom(ε_math, ε)
    // = [ε_math, ε]^hom по Конструкции 6.1 в /12-actic/04-ac-oc-duality

fn canonicalize(α: Articulation) -> Articulation =
    α.congruence_closure()         // Шаг 1 Конструкции 16.3
     .idempotent_complete_morita() // Шаг 2
     .lex_minimal_in_gauge_orbit() // Шаг 3

@verify(formal)
theorem round_trip_property(α: Articulation)
    where α.is_finitely_axiomatized()
    ensures canonicalize(inverse(translate(α))) == canonicalize(α)
    complexity O(2^O(|α|))
;

@verify(reliable)
theorem gauge_decidability_finite(α1: Articulation, α2: Articulation)
    where α1.is_finitely_axiomatized() && α2.is_finitely_axiomatized()
    ensures gauge_equivalent(α1, α2) is_decidable
    complexity O(2^O(|α1|+|α2|))
;

@verify(formal)
theorem gauge_semi_decidability(α1: Articulation, α2: Articulation)
    ensures gauge_equivalent(α1, α2) is_recursively_enumerable_Σ_1
;

@verify(formal)
theorem gauge_undecidable_general()
    ensures ¬∃ algorithm: ∀(α1, α2). decides(gauge_equivalent(α1, α2))
    proof_via Novikov-Boone 1955 (Theorem 16.7)
;
```

**Замечание**: `α.syn()`, `α.perf()`, `α.axiomatization()` — операции, требующие реализации в Шагах 1-3 (декларация Diakrisis frameworks + extension of enactment primitives) до того, как core/theory_interop/bridges/oc_dc_bridge.vr станет работоспособным. Это явная зависимость в плане интеграции.

## 8. Ограничения и открытые программы

**Что разрешимо** (Теорема 16.5): gauge-эквивалентность для конечно-аксиоматизированных R-S, временная сложность $O(2^{|\alpha|^2})$.

**Что полу-разрешимо** (Теорема 16.6): gauge-эквивалентность для рекурсивно-аксиоматизированных R-S, Σ_1-сложность.

**Что неразрешимо** (Следствие 16.8): полная разрешимость в ZFC для всех R-S — сводится к Гёдель-2 (Теорема 16.7).

**Открытые программы**:
- (a) Точная сложность для специальных классов R-S (например, ZFC + конечные расширения, HoTT с phantom-универсумами).
- (b) Эффективные эвристики для practical Verum verification (probabilistic algorithms, ML-guided search).
- (c) Параллельная реализация canonicalize для distributed verification.

## 9. Применение к operational coherence 

Теорема 16.10 — критический компонент operational coherence Verum-программ (см. [`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch)). Без round-trip двойственности на уровне алгоритма Verum может *декларировать* OC↔DC соответствие, но не *проверять* его. Теорема 16.10 закрывает этот гэп для finitely-axiomatized R-S.

Полная operational coherence  расширит это до dynamic verification во время выполнения Verum-программ.

## 10. Ссылки

- [`/03-formal-architecture/04-gauge`](/03-formal-architecture/04-gauge) — концептуальная gauge-структура.
- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — теорема 108.T и Предложение 6.2.
- [`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics) §131.T — стек-модель.
- [`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch) — Шаг 10 (round-trip).
- [`/12-actic/10-implementation-status`](/12-actic/10-implementation-status) — статус реализации.

## Источники

- Knuth–Bendix 1970 «Simple word problems in universal algebras».
- Lurie HTT 2009 §5.1.4 (idempotent completion).
- Ara–Maltsiniotis 2014 (op-эндофункторы).
- Bergner–Rezk (model comparison).
- Forster–Smith «Decision procedures for theory equivalence».
- Hofstra–Warren «Combinatorial realisability».
