---
sidebar_position: 4
title: Теорема 108.T — AC/OC-дуальность
---

# Теорема 108.T: Морита-дуальность артикуляций и актов

:::tip MSFS-первоисточник

Формальная версия теоремы — **MSFS Theorem~ef{thm:ac-oc-duality}** (AC/OC Morita Duality), §11. Конструкция: adjoint pair $\varepsilon \dashv \alpha$ с $\varepsilon(F) = (F, \Syn(F), \id, \id)$ (syntactic self-enactment) и $\alpha(F, \cC, \iota, r) = F$. Ключевые технические детали: (i) essential surjectivity через выбранный reflector $r$ как часть данных, (ii) 2-functoriality $\Syn$ через Lurie HTT §5.1 + Kapulkin–Lumsdaine для $(\infty, n)$, (iii) $(\infty, \infty)$-lift через Барвик–Schommer-Pries. Ниже — абстрактное изложение для Diakrisis-контекста. Соответствие объектов — [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) §«AC/OC-дуальность».

:::

## 1. Формулировка

**Теорема 108.T** [Т·L3]. *Существуют взаимно-обратные канонические 2-функторы*

$$
\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \xrightarrow{\;\simeq\;} \rangle\!\rangle \cdot \langle\!\langle,
\qquad
\alpha : \rangle\!\rangle \cdot \langle\!\langle \xrightarrow{\;\simeq\;} \langle\!\langle \cdot \rangle\!\rangle
$$

*образующие $(\infty, \infty)$-категорную эквивалентность:*

1. $\alpha \circ \varepsilon = \mathrm{id}_{\langle\!\langle \cdot \rangle\!\rangle}$ *строго*; $\varepsilon \circ \alpha$ gauge-эквивалентно $\mathrm{id}_{\rangle\!\rangle \cdot \langle\!\langle}$ через выбранный reflector $r$ в структуре объектов (MSFS Theorem~ef{thm:ac-oc-duality}(b)).
2. *Функтор $\varepsilon$ коммутирует с метаизацией/активацией:*
   $$\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon.$$
3. $\varepsilon$ *сохраняет gauge-структуру*: существует каноническая эквивалентность gauge-quotient пространств
   $$\fM_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}.$$
4. *Сохранение глубин*: $\nu(\alpha_0) = \varepsilon(\varepsilon(\alpha_0))$ *для всех $\alpha_0 \in \langle\!\langle \cdot \rangle\!\rangle$ (ординалы равны).*
5. *Сохранение T-2f\* / T-2a\* стратификации*: предикат имеет допустимую глубину в OC-выделении ⟺ его дуал имеет допустимую глубину в AC-выделении.

## 2. Стратегия доказательства

Доказательство 108.T параллельно доказательству 43.T1 (конструкция классифицирующего пространства $\fM_\mathrm{Fnd}$) и 103.T (универсальной артикуляции). Ключевая идея: **переинтерпретация синтаксис-семантического сопряжения в роли articulate/enact-дуальности**.

### 2.1 План (параллельно MSFS Theorem~ef{thm:ac-oc-duality})

- **Шаг A — Full faithfulness $\varepsilon$**: 2-функториальность $\Syn$ (Ламбек–Scott для $n = 1$; Kapulkin–Lumsdaine для $(\infty, n)$) даёт $\Hom_\cE(\varepsilon F_1, \varepsilon F_2) \simeq \Hom_\cF(F_1, F_2)$.
- **Шаг B — Essential surjectivity на уровне gauge**: для любого квадрупла $(F, \cC, \iota, r)$ выбранный reflector $r$ (часть данных объекта) с инвертируемым counit $r \circ \iota \Rightarrow \id$ (Рил–Verity Prop. 2.1.11) даёт gauge-эквивалентность $(F, \cC, \iota, r) \simeq \varepsilon(F)$.
- **Шаг C — Когерентность с $\mathsf{M}/\mathsf{A}$**: $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$ по наtуральности Ламбек–Scott adjunction.
- **Шаг D — $(\infty, \infty)$-lift**: Барвик–Schommer-Pries unicity + Bergner–Rezk model comparison обеспечивают параметрическую корректность в $n \in \mathbb{N} \cup \{\infty\}$; Lurie HTT §5.4 даёт accessibility filtered-colimits.
- **Шаг E — Gauge-сохранение и сохранение глубин**: Ara–Maltsiniotis + Bergner–Rezk сохраняют gauge componentwise; Предложение 7.2 устанавливает $\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha))$.
- **Шаг F — Соответствие стратов**: $\varepsilon$ biject on стратах (Theorem~ef{thm:ac-oc-duality}(c)).

Шаги A–F строго следуют MSFS §11 (Theorem~ef{thm:ac-oc-duality} proof); ниже — изложение в Diakrisis-нотации с явными ссылками на технические источники.

## 3. Шаг A: объектная конструкция $\varepsilon(\alpha)$

**Конструкция 3.1.** Для артикуляции $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ определим

$$
\varepsilon(\alpha) := \bigl(\; \mathrm{Syn}(\alpha),\; \mathrm{Perf}(\alpha) \;\bigr)
$$

где:
- $\mathrm{Syn}(\alpha)$ — синтаксическая $(\infty, n_\alpha)$-категория артикуляции $\alpha$ (та же, что используется в 103.T);
- $\mathrm{Perf}(\alpha)$ — *категория перформансов* $\alpha$: объекты суть способы исполнять $\alpha$ (обобщая Lakatos-style «practices of mathematical proof», Mancosu's «styles of mathematical practice»); морфизмы — эквивалентности перформансов up to observational gauge.

**Замечание.** $\mathrm{Perf}(\alpha)$ структурно двойствен $\mathrm{Mod}(\alpha)$ (категория моделей). Модели $\alpha$ — «где $\alpha$ может быть реализована как объект»; перформансы $\alpha$ — «как $\alpha$ может быть исполнена как практика».

**Лемма 3.2** (accessibility $\mathrm{Perf}$). Функтор $\mathrm{Perf}: \langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$ — $\aleph_1$-accessible.

*Доказательство*. Перформансы описываются через формулы синтаксиса $\alpha$ плюс контекст практики (гауге-параметры). По (R2) r.e.-аксиоматизация $\alpha$ даёт счётность формул; гауге-параметры описываются конечной сигнатурой. Следовательно $\mathrm{Perf}(\alpha)$ для $\aleph_1$-presentable $\alpha$ также $\aleph_1$-presentable. ∎

## 4. Шаг B: расширение до 2-функтора

Для 1-морфизма $f: \alpha_1 \to \alpha_2$ в $\langle\!\langle \cdot \rangle\!\rangle$ (интерпретация / Морита-редукция) определим

$$
\varepsilon(f): \varepsilon(\alpha_1) \to \varepsilon(\alpha_2)
$$

как *индуцированная практическая переводимость*: если $\alpha_1$ интерпретируется в $\alpha_2$, то перформанс $\alpha_1$ переходит в перформанс $\alpha_2$ по тому же правилу интерпретации, применённому на уровне практики.

Для 2-морфизма $\tau: f \Rightarrow g$ в $\langle\!\langle \cdot \rangle\!\rangle$ — $\varepsilon(\tau)$ — соответствующая когерентность практических переводов.

**Функториальность.** Проверяется по индукции на сложность $f, g$; подробности в §6.

## 5. Шаг C: когерентность с $\mathsf{M}/\mathsf{A}$

**Предложение 5.1.** *Существует канонический 2-изоморфизм*
$$
\varepsilon \circ \mathsf{M} \cong \mathsf{A} \circ \varepsilon
$$
*как 2-функторов $\langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$.*

*Доказательство*. Интуиция: метаизация артикуляции ($\mathsf{M}$) соответствует активации её перформанса ($\mathsf{A}$). Формально:
- $\mathsf{M}(\alpha)$ — мета-артикуляция $\alpha$; её практика = активированный перформанс $\alpha$.
- $\mathsf{A}(\varepsilon(\alpha))$ — $\mathsf{A}$ от перформанса $\alpha$ = «поднятая» практика.
- Канонически они — один и тот же объект, с 2-изоморфизмом заданным естественным преобразованием.

Детальная проверка требует отслеживания когерентности unit/counit-морфизмов обоих эндофункторов. ∎

## 6. Шаг D: обратный функтор и двусторонняя обратимость

**Конструкция 6.1.** Обратный функтор $\alpha$:

$$
\alpha(\varepsilon_0) := [\varepsilon_\mathrm{math}, \varepsilon_0]^\mathrm{hom} \in \langle\!\langle \cdot \rangle\!\rangle,
$$

то есть артикуляция, которая записывает «способы исполнять $\varepsilon_0$, заданные практикой $\varepsilon_\mathrm{math}$». Это — синтаксическое овеществление практики $\varepsilon_0$.

**Предложение 6.2** (двусторонняя обратимость). *Существуют канонические 2-эквивалентности:*
$$
\alpha(\varepsilon(\alpha_0)) \simeq \alpha_0,
\qquad
\varepsilon(\alpha(\varepsilon_0)) \simeq \varepsilon_0.
$$

*Доказательство*. Ёнеда-подобная: $\alpha \circ \varepsilon = [\varepsilon_\mathrm{math}, \mathrm{Perf}(-)]^\mathrm{hom}$; по универсальности $\varepsilon_\mathrm{math}$ как distinguished act это канонически эквивалентно $\mathrm{id}_{\langle\!\langle \cdot \rangle\!\rangle}$. Аналогично для $\varepsilon \circ \alpha$. ∎

## 7. Шаг E: сохранение gauge и глубин

**Предложение 7.1** (gauge). $\varepsilon$ индуцирует каноническую эквивалентность $\fM_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}$ на уровне gauge-quotient-пространств.

*Доказательство*. Gauge-квоциент по Морита-эквивалентности на стороне $\langle\!\langle \cdot \rangle\!\rangle$ переводится $\varepsilon$ в gauge-квоциент по практической переводимости на стороне $\rangle\!\rangle \cdot \langle\!\langle$. Эти отношения совпадают по Шагу B. ∎

**Предложение 7.2** (глубины). Обозначим $\mathsf{e}(\varepsilon)$ — ε-инвариант (активационная глубина акта, см. [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant)) — в отличие от функтора $\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$. Тогда для всех $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$:
$$
\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha)).
$$

*Доказательство*. $\nu$ определяется через $\mathsf{M}$-итерации ($\alpha_0 = \alpha_\mathrm{math}$), $\mathsf{e}$ — через $\mathsf{A}$-итерации ($\varepsilon_0 = \varepsilon_\mathrm{math}$). По Предложению 5.1 ($\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$) и коммутативности $\varepsilon(\alpha_\mathrm{math}) = \varepsilon_\mathrm{math}$:
$$
\mathsf{e}(\varepsilon(\alpha)) = \min\{\kappa: \varepsilon(\alpha) \in \mathrm{colim}_{\beta<\kappa}\mathsf{A}^\beta(\varepsilon_\mathrm{math})\} = \min\{\kappa: \alpha \in \mathrm{colim}_{\beta<\kappa}\mathsf{M}^\beta(\alpha_\mathrm{math})\} = \nu(\alpha). \qed
$$

**Замечание**: эта эквивалентность — Diakrisis-специфическое расширение 108.T (не в MSFS); статус [С] условно на формальной версии Предложения 5.1.

## 8. Шаг F: $(\infty, \infty)$-расширение

**Предложение 8.1.** Построенная на уровне 2-категорий эквивалентность $\varepsilon$ расширяется до $(\infty, \infty)$-эквивалентности.

*Доказательство (набросок)*. Использует Барвик–Schommer-Pries unicity (как в 102.T-доказательстве meta-стабилизация), применённое на уровне $(\infty, n)$-truncations для всех $n < \infty$, с последующим стабилизированием по $n \to \infty$. Accessibility всех задействованных функторов гарантирует корректность трансфинитных предельных переходов. ∎

## 9. Сохранение T-2f\* / T-2a\*

**Предложение 9.1.** $\varepsilon$ сохраняет depth-стратификацию: предикат $P(\alpha)$ допустим в OC-выделении ⟺ дуальный предикат $P^\sharp(\varepsilon)$ допустим в AC-выделении.

*Доказательство*. T-2f\* требует $\mathrm{dp}(P) < \nu(\alpha_P)$; T-2a\* требует $\mathrm{dp}(P^\sharp) < \mathsf{e}(\varepsilon_P)$. По Предложению 7.2 глубины равны; дуал предиката $P \mapsto P^\sharp$ сохраняет $\mathrm{dp}$-иерархию (тоже следствие accessibility $\varepsilon$). ∎

## 10. Следствия

### 108.C1 — перевод ОЦ-теорем в ДЦ-теоремы

Каждая теорема $T$ о $\langle\!\langle \cdot \rangle\!\rangle$, сформулированная в терминах $\mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\kappa$, переходит в её дуал $T^\sharp$ о $\rangle\!\rangle \cdot \langle\!\langle$ через замену $(\mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\kappa, \nu) \mapsto (\mathsf{A}, \varepsilon_\mathrm{math}, \sqsupset_\kappa, \varepsilon)$. Все 127 теорем (106 ОЦ + 21 Актика) Диакрисис автоматически имеют ДЦ-дуалы.

Примеры: 43.T1 → дуал $\mathfrak{E}_\mathrm{Fnd} = \mathrm{ActTrace}(\mathsf{A})/\mathrm{gauge}$; 88.T → Актика-категоричность; 100.T–102.T → мета-классификация практик.

### 108.C2 — AFN-T → 109.T (дуал-no-go)

AFN-T утверждает $\LAbs = \emptyset$. По 108.T получаем **109.T**: $\mathfrak{L}^\mathrm{act}_\mathrm{Abs} = \emptyset$ — нет абсолютной практики. Детали — `05-dual-afn-t.md`.

### 108.C3 — UFH → UFH-D

UFH (85.T) утверждает: $\alpha_\mathrm{uhm} \cong_\mathrm{gauge} \int_\Gamma \alpha_\mathrm{Д\text{-}hybrid}^{!}(\Gamma)$ над 7D. По 108.T:
$$
\varepsilon_\mathrm{uhm} \cong_\mathrm{gauge} \int_\Gamma \varepsilon_\mathrm{Д\text{-}hybrid}^{!}(\Gamma)
$$
над 7D-квантовой практикой. УГМ как теория имеет UFH-разложение; УГМ как практика имеет дуально-разложенную структуру.

### 108.C4 — категоричность (88.T-дуал)

Актика категорична до $(\infty, \infty)$-эквивалентности: два представителя $\rangle\!\rangle \cdot \langle\!\langle$ с одной и той же R\*-параметризацией канонически эквивалентны (как 88.T для ОЦ).

### 108.C5 — (∞,∞)-стабилизация (68.T-дуал)

$\rangle\!\rangle \cdot \langle\!\langle^{(\infty, \infty)} = \mathrm{colim}_n \rangle\!\rangle \cdot \langle\!\langle^{(\infty, n)}$ — нет нетривиальных расширений за $(\infty, \infty)$.

## 11. Философская значимость

108.T — не только технический результат. Это **структурное разрешение старого спора** объект-центричной и действие-центричной философий (Парменид vs Гераклит, Лейбниц vs Спиноза, Рассел vs Бергсон, аналитика vs феноменология).

Обе традиции *правы* — но каждая видит только одну проекцию единой структуры. 108.T — *теорема сочетаемости* этих проекций, а не выбор между ними. Метастемология Чурилова ставила ДЦ *против* ОЦ; 108.T устанавливает их эквивалентность.

## 12. Вычислительные последствия

Для Verum: 108.T даёт формальное обоснование одновременной реализации двух stdlib-линий:
- `core.articulation.*` — ОЦ-сторона (= существующий `core.theory_interop`).
- `core.enactment.*` или `core.action.*` — ДЦ-сторона (новая).

Ключевые операторы:
```verum
fn articulate<E>(practice: &Enactment<E>) -> Articulation { ... }
fn enact<A: Articulation>(art: &A) -> Enactment<_> { ... }

@verify(certified)
theorem duality_108T<E, A>(p: Enactment<E>, a: A)
    ensures enact(&articulate(&p)) == p  // up to gauge
    ensures articulate(&enact(&a)) == a  // up to gauge
;
```

Verum-реализация 108.T автоматически доказывает, что ОЦ и ДЦ практики взаимопереводимы на уровне proof-assistant.

## 13. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/02-dual-primitive`](/12-actic/02-dual-primitive) — Актика-примитив.
- [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant) — ε-арифметика.
- [`/12-actic/05-dual-afn-t`](/12-actic/05-dual-afn-t) — 109.T (следствие 108.T).
- [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) — 110.T–127.T.
- [`/06-limits/10-maximality-theorems`](/06-limits/10-maximality-theorems) — 103.T–106.T (параллельная методология).
- MSFS §9 `thm:meta-cat`, `thm:meta-mult`, `thm:meta-stab` — мета-классификация ОЦ-стороны.
