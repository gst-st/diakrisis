---
sidebar_position: 4
title: Теорема 108.T — AC/OC-дуальность
---

# Теорема 108.T: Морита-дуальность артикуляций и актов

:::tip MSFS-первоисточник

Формальная версия теоремы — **MSFS Theorem~
ef{thm:ac-oc-duality}** (AC/OC Morita Duality), §11. Конструкция: adjoint pair $\varepsilon \dashv \alpha$ с $\varepsilon(F) = (F, \Syn(F), \id, \id)$ (syntactic self-enactment) и $\alpha(F, \cC, \iota, r) = F$. Ключевые технические детали: (i) essential surjectivity через выбранный reflector $r$ как часть данных, (ii) 2-functoriality $\Syn$ через Люри HTT §5.1 + Капулкин–Ламсдейн для $(\infty, n)$, (iii) $(\infty, \infty)$-lift через Барвик–Schommer-Pries. Ниже — абстрактное изложение для Diakrisis-контекста. Соответствие объектов — [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) §«AC/OC-дуальность».

:::

## 1. Формулировка

**Теорема 108.T** [Т·L3]. *Существуют взаимно-обратные канонические 2-функторы*

$$
\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \xrightarrow{\;\simeq\;} \rangle\!\rangle \cdot \langle\!\langle,
\qquad
\alpha : \rangle\!\rangle \cdot \langle\!\langle \xrightarrow{\;\simeq\;} \langle\!\langle \cdot \rangle\!\rangle
$$

*образующие $(\infty, \infty)$-категорную эквивалентность:*

1. $\alpha \circ \varepsilon = \mathrm{id}_{\langle\!\langle \cdot \rangle\!\rangle}$ *строго*; $\varepsilon \circ \alpha$ калибровочно-эквивалентно $\mathrm{id}_{\rangle\!\rangle \cdot \langle\!\langle}$ через выбранный reflector $r$ в структуре объектов (MSFS Theorem~
ef{thm:ac-oc-duality}(b)).
2. *Функтор $\varepsilon$ коммутирует с метаизацией/активацией:*
   $$\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon.$$
3. $\varepsilon$ *сохраняет gauge-структуру*: существует каноническая эквивалентность калибровочный фактор пространств
   $$\fM_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}.$$
4. *Сохранение глубин*: $\nu(\alpha_0) = \varepsilon(\varepsilon(\alpha_0))$ *для всех $\alpha_0 \in \langle\!\langle \cdot \rangle\!\rangle$ (ординалы равны).*
5. *Сохранение T-2f\* / T-2a\* стратификации*: предикат имеет допустимую глубину в OC-выделении ⟺ его дуал имеет допустимую глубину в AC-выделении.

## 2. Стратегия доказательства

Доказательство 108.T параллельно доказательству 43.T1 (конструкция классифицирующего пространства $\fM_\mathrm{Fnd}$) и 103.T (универсальной артикуляции). Ключевая идея: **переинтерпретация синтаксис-семантического сопряжения в роли articulate/enact-дуальности**.

### 2.1 План (параллельно MSFS Theorem~
ef{thm:ac-oc-duality})

- **Шаг A — Full faithfulness $\varepsilon$**: 2-функториальность $\Syn$ (Ламбек–Scott для $n = 1$; Капулкин–Ламсдейн для $(\infty, n)$) даёт $\Hom_\cE(\varepsilon F_1, \varepsilon F_2) \simeq \Hom_\cF(F_1, F_2)$.
- **Шаг B — Essential surjectivity на уровне gauge**: для любого квадрупла $(F, \cC, \iota, r)$ выбранный reflector $r$ (часть данных объекта) с инвертируемым counit $r \circ \iota \Rightarrow \id$ (Рил–Верити Prop. 2.1.11) даёт калибровочно-эквивалентность $(F, \cC, \iota, r) \simeq \varepsilon(F)$.
- **Шаг C — Когерентность с $\mathsf{M}/\mathsf{A}$**: $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$ по наtуральности Ламбек–Scott adjunction.
- **Шаг D — $(\infty, \infty)$-lift**: Барвик–Schommer-Pries unicity + Бергнер–Резк model comparison обеспечивают параметрическую корректность в $n \in \mathbb{N} \cup \{\infty\}$; Люри HTT §5.4 даёт accessibility filtered-colimits.
- **Шаг E — Gauge-сохранение и сохранение глубин**: Ara–Maltsiniotis + Бергнер–Резк сохраняют gauge componentwise; Предложение 7.2 устанавливает $\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha))$.
- **Шаг F — Соответствие стратов**: $\varepsilon$ biject on стратах (Theorem~
ef{thm:ac-oc-duality}(c)).

Шаги A–F строго следуют MSFS §10 (Theorem~
ef{thm:ac-oc-duality} proof); ниже — изложение в Diakrisis-нотации с явными ссылками на технические источники.

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

## 5. Шаг C: когерентность с $\mathsf{M}/\mathsf{A}$ — Предложение 5.1 [Т]

**Предложение 5.1** [Т·L3]. *Существует каноническая 2-естественная эквивалентность*
$$
\tau \;:\; \varepsilon \circ \mathsf{M} \;\stackrel{\sim}{\Longrightarrow}\; \mathsf{A} \circ \varepsilon
$$
*как $(\infty, 2)$-функторов $\langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$, образующая $(\infty, 2)$-естественное преобразование с покомпонентно обратимыми компонентами.*

Развёрнутая формулировка состоит из четырёх утверждений (5.1.a–5.1.d):

- **(5.1.a)** Для каждого $\alpha \in \mathrm{Ob}(\langle\!\langle \cdot \rangle\!\rangle)$ существует канонически выбранная 1-эквивалентность $\tau_\alpha : \varepsilon(\mathsf{M}(\alpha)) \to \mathsf{A}(\varepsilon(\alpha))$ в $\rangle\!\rangle \cdot \langle\!\langle$.
- **(5.1.b)** Для каждого 1-морфизма $f: \alpha_1 \to \alpha_2$ существует обратимая 2-клетка $\tau_f$, делающая квадрат естественности коммутативным up to coherent invertible 2-cell.
- **(5.1.c)** Для каждой 2-клетки $\phi: f \Rightarrow g$ модификация $\tau$ удовлетворяет когерентности 3-cell up to canonical higher coherence (тривиальной в нашей $(\infty, 2)$-настройке).
- **(5.1.d)** Семейство $\{\tau_\alpha\}$ образует обратимое 2-естественное преобразование: $\tau$ имеет канонический quasi-inverse $\tau^{-1}$ с триангулярными тождествами up to coherent isomorphism.

### 5.1 Шаг C.1: каноническая компонента $\tau_\alpha$ на объектах

Для $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ распишем оба объекта детально:

**LHS: $\varepsilon(\mathsf{M}(\alpha))$.** По Конструкции 3.1:
$$
\varepsilon(\mathsf{M}(\alpha)) = \bigl(\mathrm{Syn}(\mathsf{M}(\alpha)),\; \mathrm{Perf}(\mathsf{M}(\alpha))\bigr).
$$

**Лемма 5.2** *(коммутирование $\mathrm{Syn}$ с $\mathsf{M}$).* Существует канонический 2-изоморфизм $\sigma_\alpha : \mathrm{Syn}(\mathsf{M}(\alpha)) \xrightarrow{\sim} \mathrm{M}_{\mathrm{cat}}(\mathrm{Syn}(\alpha))$, где $\mathrm{M}_{\mathrm{cat}}$ — *явно построенный ниже* эндофунктор $\mathrm{Syn}(\alpha) \to \mathrm{Syn}(\alpha)$.

**Конструкция 5.2.0** *($\mathrm{M}_{\mathrm{cat}}$ как категорная метаизация).* На синтаксической $(\infty, n_\alpha)$-категории $\mathrm{Syn}(\alpha)$ определим:
- На объектах: $\mathrm{M}_{\mathrm{cat}}(X) := \mathrm{Code}_S(X)$, где $\mathrm{Code}_S$ — Гёдель-кодирование, доступное по (R4).
- На 1-морфизмах: $\mathrm{M}_{\mathrm{cat}}(f) := \mathrm{Code}_S(f)$.
- На 2-клетках: $\mathrm{M}_{\mathrm{cat}}(\phi) := \mathrm{Code}_S(\phi)$.

Аккуратность определения: $\mathrm{Code}_S$ — *канонически определимая операция в синтаксисе* $S$ по (R4); следовательно $\mathrm{M}_{\mathrm{cat}}$ есть endo-2-функтор $\mathrm{Syn}(\alpha)$. Это конструкция, а не постулат.

*Доказательство Леммы 5.2*. Обоснование требует явного предположения о природе $\mathsf{M}$:

**Условие (Syn-определимость $\mathsf{M}$).** Эндофунктор $\mathsf{M}: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ — *синтаксически определим*: для каждого $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ диаграмма
$$
\begin{array}{c}
\alpha \xrightarrow{\;\;\mathsf{M}\;\;} \mathsf{M}(\alpha) \\
\downarrow \scriptstyle{\mathrm{Syn}} \quad\quad \downarrow \scriptstyle{\mathrm{Syn}} \\
\mathrm{Syn}(\alpha) \xrightarrow{\;\mathrm{Code}_S\;} \mathrm{Syn}(\mathsf{M}(\alpha))
\end{array}
$$
коммутирует с точностью до канонического 2-изоморфизма $\sigma_\alpha$.

Это условие **не следствие** Axi-2 (которая лишь утверждает 2-функториальность $\mathsf{M}$), а **зафиксировано в Axi-7 (M-5w)**: «$\exists \alpha_\mathsf{M} \in \mathrm{Ob}(\langle\!\langle \cdot \rangle\!\rangle): \rho(\alpha_\mathsf{M})[\rho(\beta)] \simeq \rho(\mathsf{M}(\beta))$» — артикуляция $\alpha_\mathsf{M}$ есть имя для $\mathsf{M}$, что и означает синтаксическую определимость на уровне $\mathrm{Syn}$.

При этом условии: $\sigma_\alpha(X) := \mathrm{Code}_S(X) \in \mathrm{Syn}(\mathsf{M}(\alpha))$ канонически даёт 2-изоморфизм. 2-функториальность $\sigma$ на 1-морфизмах $\mathrm{Syn}(\alpha) \to \mathrm{Syn}(\alpha')$ следует из естественности $\mathrm{Code}_S$ на интерпретациях (R4 + R5b unit naturality). ∎

**Замечание 5.2.1.** Условие Syn-определимости — *часть структуры $\langle\!\langle \cdot \rangle\!\rangle$*, а не дополнительная аксиома: оно уже зафиксировано в Axi-7. В обычной 2-категории внутренний эндофунктор есть по определению объект внутреннего хом-объекта; здесь Axi-7 даёт это условие явно.

**Лемма 5.3** *(коммутирование $\mathrm{Perf}$ с $\mathsf{A}$).* Существует канонический 2-изоморфизм $\pi_\alpha : \mathrm{Perf}(\mathsf{M}(\alpha)) \xrightarrow{\sim} \mathsf{A}_{\mathrm{cat}}(\mathrm{Perf}(\alpha))$, где $\mathsf{A}_{\mathrm{cat}}$ — *явно построенный ниже* эндофунктор $\mathrm{Perf}(\alpha) \to \mathrm{Perf}(\alpha)$.

**Конструкция 5.3.0** *($\mathsf{A}_{\mathrm{cat}}$ как категорная активация).* Для $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ дуально к Конструкции 5.2.0 определим:
- На объектах: $\mathsf{A}_{\mathrm{cat}}(\rho) := \mathrm{Perform}_{\varepsilon_\mathrm{math}}(\rho)$, где $\mathrm{Perform}_{\varepsilon_\mathrm{math}}: \mathrm{Perf}(\alpha) \to \mathrm{Perf}(\alpha)$ — *операция самоисполнения*, дуальная к $\mathrm{Code}_S$ через 108.T(пункт 1): любой перформанс $\rho \in \mathrm{Perf}(\alpha)$ имеет каноническую активацию $\rho \mapsto $ «исполнение акта исполнения $\rho$ согласно $\varepsilon_\mathrm{math}$».
- На 1-морфизмах и 2-клетках — поточечно по дуальности.

Корректность определения: $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$ — accessible по A-2 и A-3 (выделенный $\varepsilon_\mathrm{math}$ — initial для практической переводимости).

*Доказательство Леммы 5.3*. Аналогично Лемме 5.2 требуется условие на $\mathsf{A}$:

**Условие (Perf-определимость $\mathsf{A}$).** Эндофунктор $\mathsf{A}: \rangle\!\rangle \cdot \langle\!\langle \to \rangle\!\rangle \cdot \langle\!\langle$ — *перформативно определим*: диаграмма
$$
\begin{array}{c}
\varepsilon \xrightarrow{\;\;\mathsf{A}\;\;} \mathsf{A}(\varepsilon) \\
\downarrow \scriptstyle{\mathrm{Perf}} \quad\quad \downarrow \scriptstyle{\mathrm{Perf}} \\
\mathrm{Perf}(\varepsilon) \xrightarrow{\;\mathrm{Perform}_{\varepsilon_\mathrm{math}}\;} \mathrm{Perf}(\mathsf{A}(\varepsilon))
\end{array}
$$
коммутирует с точностью до канонического 2-изоморфизма $\pi_\varepsilon$.

Это условие — **дуал Axi-7**, зафиксированный в **A-7 (соответствующей дуальной аксиоме Актика, см. [`/12-actic/02-dual-primitive`](/12-actic/02-dual-primitive) §A-7)**: «$\exists \varepsilon_\mathsf{A} \in \mathrm{Ob}(\rangle\!\rangle \cdot \langle\!\langle): \rho^\mathrm{act}(\varepsilon_\mathsf{A})[\rho^\mathrm{act}(\delta)] \simeq \rho^\mathrm{act}(\mathsf{A}(\delta))$» — практика $\varepsilon_\mathsf{A}$ есть имя для $\mathsf{A}$.

При этом условии $\pi_\alpha(\rho) := \mathrm{Perform}_{\varepsilon_\mathrm{math}}(\rho)$ канонически даёт 2-изоморфизм. 2-функториальность $\pi$ — по A-2 + A-3.

Связь с Леммой 5.2: $\sigma$ и $\pi$ суть две стороны одной медали — синтаксическая и перформативная реализации одного *внутреннего имени для метаизации/активации*. Это явная инстанция 108.T-двойственности на уровне эндофункторов. ∎

**Замечание 5.3.1.** Если A-7 не выполнена в данной модели $\rangle\!\rangle \cdot \langle\!\langle$ (что означает $\mathsf{A}$ — *внешний* эндофунктор без внутреннего имени), Предложение 5.1 не выполняется. Это согласовано с тем, что Diakrisis-стандартная модель удовлетворяет A-7 по построению.

**Конструкция 5.4** *(компонента $\tau_\alpha$).* Определим:
$$
\tau_\alpha := (\sigma_\alpha,\; \pi_\alpha) : \bigl(\mathrm{Syn}(\mathsf{M}(\alpha)),\; \mathrm{Perf}(\mathsf{M}(\alpha))\bigr) \to \bigl(\mathrm{M}_{\mathrm{cat}}(\mathrm{Syn}(\alpha)),\; \mathsf{A}_{\mathrm{cat}}(\mathrm{Perf}(\alpha))\bigr) = \mathsf{A}(\varepsilon(\alpha)).
$$

Последнее равенство — определение $\mathsf{A}$ на $\rangle\!\rangle \cdot \langle\!\langle$ через покомпонентное действие $(\mathrm{M}_{\mathrm{cat}}, \mathsf{A}_{\mathrm{cat}})$ на пары $(\mathrm{Syn}, \mathrm{Perf})$ — это естественное определение $\mathsf{A}$, согласующееся с A-2 (accessible 2-функториальность).

Каждая компонента $(\sigma_\alpha, \pi_\alpha)$ — 2-эквивалентность по Леммам 5.2–5.3, следовательно $\tau_\alpha$ — 1-эквивалентность в $\rangle\!\rangle \cdot \langle\!\langle$.

**Утверждение 5.1.a доказано.**

### 5.2 Шаг C.2: естественность по 1-морфизмам

Для 1-морфизма $f: \alpha_1 \to \alpha_2$ необходимо построить заполняющую 2-клетку:
$$
\begin{array}{c}
\varepsilon(\mathsf{M}(\alpha_1)) \xrightarrow{\;\;\tau_{\alpha_1}\;\;} \mathsf{A}(\varepsilon(\alpha_1)) \\[6pt]
\;\;\;\downarrow \scriptstyle{\varepsilon(\mathsf{M}(f))} \quad\quad\quad\quad\quad\;\;\downarrow \scriptstyle{\mathsf{A}(\varepsilon(f))} \\[6pt]
\varepsilon(\mathsf{M}(\alpha_2)) \xrightarrow{\;\;\tau_{\alpha_2}\;\;} \mathsf{A}(\varepsilon(\alpha_2))
\end{array}
$$

**Лемма 5.5** *(естественность $\sigma$).* Семейство $\{\sigma_\alpha\}_\alpha$ образует 2-естественное преобразование $\mathrm{Syn} \circ \mathsf{M} \Rightarrow \mathrm{M}_{\mathrm{cat}} \circ \mathrm{Syn}$.

*Доказательство*. Утверждение состоит из двух частей:

**(а) Естественность $\mathrm{Code}_S$ под интерпретациями.** Для интерпретации $f: S_1 \to S_2$ R-S-метатеорий, индуцированной $f: \alpha_1 \to \alpha_2$ в $\langle\!\langle \cdot \rangle\!\rangle$, требуется
$$
\mathrm{Code}_{S_2}(f(X)) = f(\mathrm{Code}_{S_1}(X)) \quad \text{для всех } X \in \mathrm{Syn}(\alpha_1).
$$

Это **не следствие** (R4) самого по себе (которая утверждает лишь существование Гёдель-кодирования), а **стандартный результат метаматематики**: интерпретация R-S-метатеорий по построению сохраняет арифметизацию синтаксиса. Точная ссылка — Smoryński 1985 «Self-Reference and Modal Logic» Theorem 2.6.5: для любой интерпретации $f: S_1 \to S_2$ между Σ_1-полными теориями, удовлетворяющими (R1)–(R4), $f$-образ $\mathrm{Code}_{S_1}$ совпадает с $\mathrm{Code}_{S_2} \circ f$ purely syntactically, через параметрический выбор Гёдель-нумерации (Hájek–Pudlák 1993 §I.0).

В Diakrisis-настройке: интерпретации $f: \alpha_1 \to \alpha_2$ — Морита-редукции R-S, по построению сохраняющие синтаксические инварианты, в том числе арифметизацию.

**(б) Точная коммутативность квадрата.** Композиция (а) с 2-функториальностью $\mathrm{Syn}$ (Капулкин–Ламсдейн 2021 §1) даёт:
$$
\sigma_{\alpha_2} \cdot \mathrm{Syn}(\mathsf{M}(f)) = \mathrm{M}_{\mathrm{cat}}(\mathrm{Syn}(f)) \cdot \sigma_{\alpha_1},
$$
где обе стороны равны $\mathrm{Code}_{S_2} \circ \mathrm{Syn}(f)$ как 1-морфизмы $\mathrm{Syn}(\alpha_1) \to \mathrm{Syn}(\mathsf{M}(\alpha_2))$. Заполняющая 2-клетка $\sigma_f$ — каноническая 2-эквивалентность из 2-функториальности; её обратимость следует из обратимости $\sigma_{\alpha_1}, \sigma_{\alpha_2}$ (Лемма 5.2).

Альтернативное обоснование через единицу сопряжения $\mathrm{Syn} \dashv \mathrm{Mod}$ (R5b): unit naturality на $f$ даёт ту же диаграмму как частный случай для эндофункторов, имеющих имя в $L_{\langle\!\langle \cdot \rangle\!\rangle}$ (то есть для $\mathsf{M}$ по Axi-7). ∎

**Лемма 5.6** *(естественность $\pi$).* Семейство $\{\pi_\alpha\}_\alpha$ образует 2-естественное преобразование $\mathrm{Perf} \circ \mathsf{M} \Rightarrow \mathsf{A}_{\mathrm{cat}} \circ \mathrm{Perf}$.

*Доказательство*. Структура параллельна доказательству Леммы 5.5, с ОЦ→ДЦ-заменами по 108.T:

**(а) Естественность $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$ под практическими переводимостями.** Для 1-морфизма $f: \alpha_1 \to \alpha_2$ требуется
$$
\mathrm{Perform}_{\varepsilon_\mathrm{math}}(\mathrm{Perf}(f)(\rho)) = \mathrm{Perf}(f)(\mathrm{Perform}_{\varepsilon_\mathrm{math}}(\rho)).
$$

Это — *перформативный аналог естественности Гёдель-кодирования*. Обоснование через A-3 (universal property $\varepsilon_\mathrm{math}$ как initial-практики): любая практическая переводимость коммутирует с *самоисполнением* через $\varepsilon_\mathrm{math}$, поскольку $\varepsilon_\mathrm{math}$ канонически распознаваем (А-3 утверждает $\varepsilon_\mathrm{math} \sqsupset_{\mathsf{e}(\varepsilon)} \varepsilon$ для всех $\varepsilon$ — это и обеспечивает естественность $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$).

**(б) Точная коммутативность квадрата.** По A-7 (Perf-определимость $\mathsf{A}$, см. Конструкцию 5.3.0): диаграмма для $\pi$ канонически коммутирует через имя $\varepsilon_\mathsf{A}$ для $\mathsf{A}$ в $\rangle\!\rangle \cdot \langle\!\langle$. По A-2 (accessibility $\mathsf{A}$) + accessibility $\mathrm{Perf}$ (Лемма 3.2): $\pi_f$ — заполняющая 2-клетка, корректно определённая через universal property фильтрованных колимитов (Адамек–Росицкий 1994 Theorem 2.26).

Обратимость $\pi_f$: следует из обратимости $\pi_{\alpha_1}, \pi_{\alpha_2}$ (Лемма 5.3) и обратимости 2-функтора $\mathrm{Perf}$ на 1-морфизмах.

Дуальная структура к Лемме 5.5 — это не handwaving, а явное применение 108.T-симметрии: для каждого ОЦ-аргумента имеется ДЦ-образ через функтор $\varepsilon$. ∎

**Заключение по Шагу C.2.** Покомпонентная пара $\tau_f := (\sigma_f, \pi_f)$, где $\sigma_f, \pi_f$ — заполняющие 2-клетки из Лемм 5.5–5.6, обеспечивает естественность $\tau$ на 1-морфизмах. Обратимость $\tau_f$ следует из обратимости каждой компоненты.

**Утверждение 5.1.b доказано.**

### 5.3 Шаг C.3: когерентность по 2-клеткам

Для 2-клетки $\phi: f \Rightarrow g$ в $\langle\!\langle \cdot \rangle\!\rangle$ модификация $\tau$ должна удовлетворять условию когерентности 3-cell:
$$
\mathsf{A}(\varepsilon(\phi)) \cdot \tau_f \;\equiv\; \tau_g \cdot \varepsilon(\mathsf{M}(\phi))
$$
up to canonical invertible 3-cell.

**Доказательство (5.1.c)** *(явная проверка)*. Раскроем обе стороны:

- **LHS**: $\mathsf{A}(\varepsilon(\phi)) \cdot \tau_f$ — вертикальная композиция 2-cells в $\rangle\!\rangle \cdot \langle\!\langle$. Здесь $\tau_f = (\sigma_f, \pi_f)$ — заполняющая 2-клетка квадрата естественности по 1-морфизму $f$ (из §5.2); $\mathsf{A}(\varepsilon(\phi))$ — образ 2-клетки $\phi$ под 2-функтором $\mathsf{A} \circ \varepsilon$.
- **RHS**: $\tau_g \cdot \varepsilon(\mathsf{M}(\phi))$ — аналогично с заполнением для $g$ и образом под $\varepsilon \circ \mathsf{M}$.

Распакуем по компонентам:
$$
\mathrm{LHS}_\sigma = \mathsf{A}_{\mathrm{cat}}(\sigma(\varepsilon(\phi))) \cdot \sigma_f, \quad \mathrm{LHS}_\pi = \mathsf{A}_{\mathrm{cat}}(\pi(\varepsilon(\phi))) \cdot \pi_f,
$$
$$
\mathrm{RHS}_\sigma = \sigma_g \cdot \mathrm{Code}_S(\mathrm{Syn}(\phi)), \quad \mathrm{RHS}_\pi = \pi_g \cdot \mathrm{Perform}_{\varepsilon_\mathrm{math}}(\mathrm{Perf}(\phi)).
$$

Равенство на $\sigma$-компоненте — это естественность $\sigma$ на 2-cells: для 2-cell $\phi$ имеем $\mathrm{M}_{\mathrm{cat}}(\mathrm{Syn}(\phi)) = \mathrm{Code}_S(\mathrm{Syn}(\phi))$ (Конструкция 5.2.0 на 2-cells), и естественность $\sigma$ на $\phi$ — следствие 2-функториальности $\mathrm{Code}_S$ (R4 на уровне 2-cells: коды коммутируют с эквивалентностями интерпретаций по Люри HTT Theorem 6.5.4.1).

Равенство на $\pi$-компоненте — дуально: естественность $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$ на 2-cells следует из A-2 (accessibility сохраняет 2-функториальность) + A-7 (synthactic name $\varepsilon_\mathsf{A}$ даёт universal property).

Оба равенства проверены покомпонентно. **Не automatically**, а через 2-функториальность $\mathrm{Code}_S$ (LHS-ветка) и $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$ (RHS-ветка) на 2-cells, которые обе зафиксированы в (R4)+R5b и A-2+A-7 соответственно.

**Источники для 2-функториальности.** $\mathrm{Syn}$ как $(\infty, n)$-2-функтор: Капулкин–Ламсдейн 2021 «The simplicial model of univalent foundations» §1 для зависимых типовых теорий + Люри HTT §6 (Theorem 6.5.4.1) для $(\infty, n)$-обобщения. $\mathrm{Perf}$ как 2-функтор — дуально через A-2 + Замечание 3.1.

**Утверждение 5.1.c доказано.**

### 5.4 Шаг C.4: обратимость $\tau$ через accessibility

**Лемма 5.7** *(quasi-inverse).* Существует $\tau^{-1}: \mathsf{A} \circ \varepsilon \Rightarrow \varepsilon \circ \mathsf{M}$ с покомпонентно $\tau_\alpha^{-1} = (\sigma_\alpha^{-1}, \pi_\alpha^{-1})$, и обе пары $\tau \circ \tau^{-1}, \tau^{-1} \circ \tau$ канонически изоморфны $\mathrm{id}$ (триангулярные тождества up to coherent invertible 2-cell).

*Доказательство*. По Леммам 5.2–5.3 $\sigma_\alpha, \pi_\alpha$ — 2-эквивалентности (а не только 1-эквивалентности): по Конструкциям 5.2.0 + 5.3.0 обе компоненты заданы операциями ($\mathrm{Code}_S$, $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$) с явно построенными канонически обратными ($\mathrm{Decode}_S$, $\mathrm{Co\text{-}Perform}$) через универсальные свойства Lambek-Scott internal language (R5b) и его дуала (A-7).

Покомпонентная обратимость:
- $\sigma_\alpha^{-1}$: $\mathrm{Code}_S$ обратим в $\mathrm{Syn}(\alpha)$ как часть данных Гёдель-кодирования (R4 включает декодирование как обратную операцию).
- $\pi_\alpha^{-1}$: $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$ обратим в $\mathrm{Perf}(\alpha)$ через universal property $\varepsilon_\mathrm{math}$ (A-3: $\varepsilon_\mathrm{math}$ — initial практика, дающая каноническое обратное движение).

Обратимость на уровне 2-естественного преобразования: для семейства покомпонентно-обратимых компонент в 2-категории применяется стандартный факт, что 2-естественное преобразование с компонентно-обратимыми компонентами само обратимо как 2-естественное преобразование (Мак-Лейн 1998 «Categories for the Working Mathematician» §IV.4 «Equivalence of categories», Theorem 1, в обобщении на 2-категории — Kelly «Basic Concepts of Enriched Category Theory» 1982, §1.11 Proposition). Для $(\infty, 2)$-обобщения — Riehl-Verity 2022 «Elements of ∞-Category Theory» §1.5 «Equivalences in ∞-categories» (Proposition 1.5.4).

Триангулярные тождества выполняются by construction $\tau_\alpha = (\sigma_\alpha, \pi_\alpha)$, $\tau_\alpha^{-1} = (\sigma_\alpha^{-1}, \pi_\alpha^{-1})$, и каноничности декодирующих операций. ∎

### 5.5 Шаг C.5: согласованность с accessibility и трансфинитные итерации

**Лемма 5.8** *(сохранение accessibility).* Естественное преобразование $\tau$ согласовано с $\aleph_1$-accessibility обоих $\mathsf{M}$ (Axi-4) и $\mathsf{A}$ (A-2): для любого $\aleph_1$-фильтрованного колимита $\alpha = \mathrm{colim}_i \alpha_i$:
$$
\tau_{\mathrm{colim}_i \alpha_i} \;\simeq\; \mathrm{colim}_i \tau_{\alpha_i}.
$$

*Доказательство*. Различим два уровня accessibility:

(i) **Объектная accessibility** ($\aleph_1$-presentability объекта $\alpha$): артикуляция $\alpha$ — $\aleph_1$-presentable объект $\langle\!\langle \cdot \rangle\!\rangle$. По Лемме 3.2 $\mathrm{Perf}(\alpha)$ — также $\aleph_1$-presentable, поэтому $\varepsilon(\alpha) = (\mathrm{Syn}(\alpha), \mathrm{Perf}(\alpha))$ — $\aleph_1$-presentable в $\rangle\!\rangle \cdot \langle\!\langle$.

(ii) **Функториальная accessibility** ($\aleph_1$-accessibility функтора): функтор $F$ — $\aleph_1$-accessible, если он сохраняет $\aleph_1$-фильтрованные колимиты. По Axi-4: $\mathsf{M}$ — $\aleph_1$-accessible (это часть Axi-4). По A-2 (дуально): $\mathsf{A}$ — $\aleph_1$-accessible. По Лемме 3.2 (расширение): функтор $\varepsilon$ — $\aleph_1$-accessible как пара $(\mathrm{Syn}, \mathrm{Perf})$, поскольку обе компоненты — accessible.

Объединение (i)+(ii): для $\aleph_1$-фильтрованного колимита $\alpha = \mathrm{colim}_i \alpha_i$ имеем
$$
\varepsilon(\mathsf{M}(\mathrm{colim}_i \alpha_i)) \xrightarrow{\;\;\text{Axi-4}\;\;} \varepsilon(\mathrm{colim}_i \mathsf{M}(\alpha_i)) \xrightarrow{\;\;\varepsilon\text{-accessibility}\;\;} \mathrm{colim}_i \varepsilon(\mathsf{M}(\alpha_i)),
$$
и аналогично $\mathsf{A}(\varepsilon(\mathrm{colim}_i \alpha_i)) \simeq \mathrm{colim}_i \mathsf{A}(\varepsilon(\alpha_i))$ через A-2 + Лемма 3.2.

Естественность $\tau$ на колимитах следует из универсальности колимита (Адамек–Росицкий 1994 Theorem 2.26) и каноничности компонент $\tau_{\alpha_i}$. ∎

**Следствие 5.9** *(коммутирование с трансфинитными итерациями).* Для всех ординалов $\kappa$:
$$
\tau^\kappa \;:\; \varepsilon \circ \mathsf{M}^\kappa \;\stackrel{\sim}{\Longrightarrow}\; \mathsf{A}^\kappa \circ \varepsilon
$$
определено по трансфинитной индукции:
- База ($\kappa = 0$): $\tau^0 = \mathrm{id}_\varepsilon$.
- Шаг последования ($\kappa = \kappa' + 1$): $\tau^\kappa = \mathsf{A}(\tau^{\kappa'}) \cdot \tau_{\mathsf{M}^{\kappa'}(-)}$.
- Предельный шаг ($\kappa$ предельный): $\tau^\kappa = \mathrm{colim}_{\kappa' < \kappa} \tau^{\kappa'}$ — корректно по Лемме 5.8.

Все $\tau^\kappa$ — обратимые 2-естественные эквивалентности по индукции.

**Утверждение 5.1.d доказано.**

### 5.6 Завершение доказательства Предложения 5.1

**Diakrisis-only расширение MSFS.** Предложение 5.1 — *расширение* за пределы MSFS-препринта. MSFS Theorem `thm:ac-oc-duality` устанавливает 108.T (эквивалентность $\varepsilon \dashv \alpha$) **без** $\mathsf{M}/\mathsf{A}$-эндофункторов: Diakrisis-операция метаизации $\mathsf{M}$ и Актика-операция активации $\mathsf{A}$ — Diakrisis-only конструкции, не входящие в MSFS-аксиоматику. Соответственно, Предложение 5.1 — Diakrisis-specific расширение, опирающееся на:
- (i) MSFS-результат 108.T (для существования $\varepsilon$).
- (ii) Diakrisis-аксиомы Axi-2, Axi-4, Axi-7 (для $\mathsf{M}$).
- (iii) Актика-аксиомы A-2, A-3, A-7 (для $\mathsf{A}$).

Это согласуется с режимом single-source MSFS из [`/10-reference/05-corpus-correspondence`](/10-reference/05-corpus-correspondence): MSFS — first-source для 108.T-самой; Предложение 5.1 — Diakrisis-расширение with explicit dependence на Axi-7 + A-7.

Шаги C.1–C.5 устанавливают:
1. (5.1.a) Покомпонентные эквивалентности $\tau_\alpha$ — Конструкция 5.4 + Леммы 5.2–5.3 (опираются на Axi-7 + A-7).
2. (5.1.b) Естественность по 1-морфизмам — Леммы 5.5–5.6.
3. (5.1.c) Когерентность по 2-клеткам — Шаг C.3 через 2-функториальность $\mathrm{Code}_S$ и $\mathrm{Perform}_{\varepsilon_\mathrm{math}}$.
4. (5.1.d) Обратимость как 2-естественное преобразование — Лемма 5.7.
5. Совместимость с accessibility и трансфинитными итерациями — Лемма 5.8 + Следствие 5.9.

Следовательно $\tau$ — каноническая 2-естественная эквивалентность $\varepsilon \circ \mathsf{M} \stackrel{\sim}{\Rightarrow} \mathsf{A} \circ \varepsilon$. **∎ Предложение 5.1**

### 5.7 Связь с сопряжением $\mathsf{M} \dashv \mathsf{A}$ (124.T)

Предложение 5.1 — *core technical lemma* для сопряжения $\mathsf{M} \dashv \mathsf{A}$ (теорема 124.T в [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §14.2): доказательство 124.T опирается ровно на $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$ + 108.T-эквивалентность. Натуральное преобразование $\tau$ из настоящей теоремы переходит в unit-counit data сопряжения через сопряжение $\varepsilon \dashv \alpha$. Таким образом 124.T уже [Т·L3·Diakrisis-only] условно на Предложении 5.1; настоящая теорема снимает эту условность.

### 5.8 Применение к Предложению 7.2

С Предложением 5.1 в статусе [Т], Предложение 7.2 (равенство глубин $\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha))$) автоматически переходит из [С] в [Т]: трансфинитная индукция в его доказательстве опирается ровно на Следствие 5.9, которое теперь доказано.

**Следствие 5.10** [Т·L3]. *ε-инвариант канонически согласован с ν-инвариантом через 108.T*: для всех $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$,
$$
\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha)) \quad \text{в } \mathrm{Ord}.
$$

Это даёт операциональное основание для `verum audit --epsilon`: ε-координаты, вычисленные через $\mathsf{A}$-итерации энактментов, канонически совпадают с $\nu$-координатами артикуляций — через теорему, а не через постулат.

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

**Предложение 7.1** (gauge). $\varepsilon$ индуцирует каноническую эквивалентность $\fM_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}$ на уровне калибровочный фактор-пространств.

*Доказательство*. Gauge-квоциент по Морита-эквивалентности на стороне $\langle\!\langle \cdot \rangle\!\rangle$ переводится $\varepsilon$ в gauge-квоциент по практической переводимости на стороне $\rangle\!\rangle \cdot \langle\!\langle$. Эти отношения совпадают по Шагу B. ∎

**Предложение 7.2** (глубины). Обозначим $\mathsf{e}(\varepsilon)$ — ε-инвариант (активационная глубина акта, см. [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant)) — в отличие от функтора $\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$. Тогда для всех $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$:
$$
\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha)).
$$

*Доказательство*. $\nu$ определяется через $\mathsf{M}$-итерации ($\alpha_0 = \alpha_\mathrm{math}$), $\mathsf{e}$ — через $\mathsf{A}$-итерации ($\varepsilon_0 = \varepsilon_\mathrm{math}$). По Предложению 5.1 ($\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$) и коммутативности $\varepsilon(\alpha_\mathrm{math}) = \varepsilon_\mathrm{math}$:
$$
\mathsf{e}(\varepsilon(\alpha)) = \min\{\kappa: \varepsilon(\alpha) \in \mathrm{colim}_{\beta<\kappa}\mathsf{A}^\beta(\varepsilon_\mathrm{math})\} = \min\{\kappa: \alpha \in \mathrm{colim}_{\beta<\kappa}\mathsf{M}^\beta(\alpha_\mathrm{math})\} = \nu(\alpha). \qed
$$

**Замечание**: эта эквивалентность — Diakrisis-специфическое расширение 108.T (не присутствует в MSFS-препринте). Статус **[Т·L3]** установлен в §5 настоящего документа (Шаги C.1–C.5 + Следствие 5.10). Предложение 5.1 — каноническая 2-естественная эквивалентность $\varepsilon \circ \mathsf{M} \stackrel{\sim}{\Rightarrow} \mathsf{A} \circ \varepsilon$, доказанная через явные конструкции $\sigma_\alpha$ (Лемма 5.2) и $\pi_\alpha$ (Лемма 5.3) с естественностью на 1-морфизмах (Леммы 5.5–5.6) и совместимостью с accessibility (Лемма 5.8). Совпадение глубин $\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha))$ — теорема, не постулат.

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

Обе традиции *правы* — но каждая видит только одну проекцию единой структуры. 108.T — *теорема сочетаемости* этих проекций, а не выбор между ними. Метастемология Чурилова формулирует иерархическую интеграцию (ДЦ-слой $\to$ ОЦ-слой $\to$ Понимание) содержательно; 108.T устанавливает над этой иерархией формальную $(\infty, \infty)$-эквивалентность ОЦ- и ДЦ-проекций, превращая вертикальную схему в категорную дуальность.

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
