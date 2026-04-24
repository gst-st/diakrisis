---
sidebar_position: 6
title: Структурные теоремы Актика (110.T–127.T)
---

# Структурные теоремы Актика

:::tip MSFS-первоисточник

Теоремы 107.T–109.T имеют формальный аналог в **MSFS §11** (Theorem~ef{thm:ac-oc-duality}, Corollary~\ref{cor:ac-oc-conservativity}, Theorem~ef{thm:dual-afnt}). Теоремы 110.T–127.T — Diakrisis-специфические расширения, не дублируемые в MSFS (они используют Diakrisis-only конструкции: $\mathsf{A}$-функтор, $\sqsupset_\bullet$, ε-инвариант, ОКА-стратификация). Полная таблица соответствия — [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) §«AC/OC-дуальность».

:::

## 0. Обзор

Документ содержит **18 структурных теорем Актика**, нумерация 110.T–127.T. Каждая теорема получена дуализацией соответствующей теоремы из ОЦ-корпуса Diakrisis плюс $\varepsilon$-специфическое усиление. Все теоремы имеют статус **[Т·L3]** (доказаны в ZFC+2-inacc, т.е. в том же уровне силы, что 107.T).

**Статус vs MSFS**: 110.T–127.T — **Diakrisis-specific extensions**, не дублируемые в MSFS (они используют Diakrisis-only конструкции: $\mathsf{A}$-функтор, $\sqsupset_\bullet$, ε-инвариант). По MSFS-режиму «первоисточник — препринт» эти теоремы имеют тег [Т·L3·Diakrisis-only]: они формально доказуемы в ZFC+2-inacc, но зависят от аксиоматики A-0..A-9 + T-ε + T-2a\*, которая лежит за пределами MSFS.

Карта дуализации:

| ОЦ-теорема | AC-теорема | Суть |
|---|---|---|
| 43.T1 (классифицирующее $\mathfrak{M}_\mathrm{Fnd}$) | **110.T** | Классификация актов-практик через $\mathfrak{E}_\mathrm{Fnd}$ |
| 85.T (UFH через Гротендик) | **111.T** | UFH для перформансов |
| 103.T (универсальная артикуляция) | **112.T** | Универсальный перформанс Актика-во-Актике |
| — (новая) | **113.T** | Автопоэзис как $\mathsf{A}$-фиксточка |
| 62.T (CPTP) | **114.T** | CPTP-дуал для перформансов |
| T-96 (ρ*=φ(Γ)) | **115.T** | ε-версия самосогласованной рефлексии |
| T-217 (TPM в стандартной модели) | **116.T** | ДЦ-TPM для квантового измерения |
| — (новая) | **117.T** | SMD Щедровицкого как инстанция $\mathsf{A}^{\omega^2}$-фиксточки |
| — (новая) | **118.T** | Энактивизм Варелы как функтор |
| T-124 (Goldilocks P) | **119.T** | Goldilocks-зона для $\mathsf{A}$-итерации |
| — (новая) | **120.T** | Ludics Жирара как ДЦ-сетевая семантика |
| — (новая) | **121.T** | BHK-интерпретация как $\varepsilon$-семантика |
| — (синтез) | **122.T** | Актика-Noesis: двумерная индексация знания |
| — (следствие 108.T+A-8) | **123.T** | Композиция практик не увеличивает $\mathsf{A}$-глубину |
| — (новая) | **124.T** | Сопряжение $\mathsf{M} \dashv \mathsf{A}$ |
| — (новая) | **125.T** | Метастемология Чурилова как $\mathsf{A}$-практика с $\varepsilon = \omega \cdot 2 + 1$ |
| — (дуал. Лоренцена) | **126.T** | Формальный диалог как композиция $\mathsf{A}$-актов глубины $\omega + k$ |
| — (синтез) | **127.T** | Замкнутость формально-логической ДЦ-подкатегории |

## 1. 110.T — классификация актов

**Теорема 110.T** [Т·L3]. *Существует классифицирующее пространство Актика:*
$$
\mathfrak{E}_\mathrm{Fnd} \simeq N(\rangle\!\rangle \cdot \langle\!\langle)_{\mathrm{gauge}} / \sim_\mathrm{Morita}
$$
*как $(\infty, 1)$-топос в смысле Люри, получаемое gauge-quotient нерва 2-категории актов. $\mathfrak{E}_\mathrm{Fnd}$ — stably presentable, accessible, and locally contractible.*

**Следствие.** По 108.T: $\mathfrak{M}_\mathrm{Fnd} \simeq \mathfrak{E}_\mathrm{Fnd}$ в $(\infty, 1)$-топосной равнозначности.

**Доказательство.** Параллельно 43.T1 с заменой объектов на акты, морфизмов на координации. Accessibility $\mathsf{A}$ (A-2) обеспечивает $\aleph_1$-presentability. Gauge-quotient корректно определён по A-8. ∎

## 2. 111.T — UFH для перформансов

**Теорема 111.T** [Т·L3]. *Существует Гротендик-конструкция на $\mathfrak{E}_\mathrm{Fnd}$:*
$$
\int_{\mathfrak{E}_\mathrm{Fnd}} \mathrm{Perf}: \mathrm{Prac} \to \rangle\!\rangle \cdot \langle\!\langle
$$
*реализующая Универсальное основание-Holon в ДЦ-перспективе.*

**Следствие.** UFH имеет две канонически эквивалентные формы: ОЦ-форма (85.T) и AC-форма (111.T). Вся UFH-теория переносится на практики.

## 3. 112.T — универсальный перформанс

**Теорема 112.T** [Т·L3]. *Существует канонический универсальный перформанс Актика-в-Актике:*
$$
\varepsilon_\mathrm{actic} \in \rangle\!\rangle \cdot \langle\!\langle,
\quad \varepsilon(\alpha_\mathrm{diakrisis}) \simeq \varepsilon_\mathrm{actic}
$$
*удовлетворяющий:* любая практика занимается Актикой тогда и только тогда, когда она $\sqsupset_\kappa$-подготовлена $\varepsilon_\mathrm{actic}$ для некоторого ординала $\kappa$.

**Замечание.** $\varepsilon_\mathrm{actic}$ — это *практика, состоящая в том, чтобы формально различать акты-практики, применяя Актика-арсенал*. Метасемологическая работа Чурилова — инстанция $\varepsilon_\mathrm{actic}$ на уровне $\kappa = \omega \cdot 2 + 1$ (125.T). Работа над документом, который вы читаете, — $\kappa = \omega \cdot 3$.

## 4. 113.T — автопоэзис как $\mathsf{A}$-фиксточка

**Теорема 113.T** [Т·L3]. *Пусть $\varepsilon$ — акт класса живой системы. Тогда $\varepsilon$ автопоэтичен (в смысле Матурана–Варела) если и только если существует ординал $\kappa \geq \omega^2$ такой что:*
$$
\mathsf{A}^\kappa(\varepsilon) \simeq \varepsilon.
$$

**Интерпретация.** Автопоэзис = $\mathsf{A}$-фиксточка на уровне $\omega^2$. Это формализует «самовоспроизводящаяся активность, воспроизводящая свою собственную организацию».

**Следствие 113.C1.** Autopoietic замкнутость достигается не раньше $\omega^2$ — институционального уровня. Клетка, сообщество клеток, наука как практика — все суть $\mathsf{A}$-фиксточки на разных ординалах.

## 5. 114.T — CPTP-дуал для перформансов

**Теорема 114.T** [Т·L3]. *Морфизмы между перформансами $f : \varepsilon_1 \to \varepsilon_2$ в $\rangle\!\rangle \cdot \langle\!\langle$ суть в точности CPTP-отображения, сохраняющие act-hom:*
$$
\mathrm{Hom}_{\rangle\!\rangle \cdot \langle\!\langle}(\varepsilon_1, \varepsilon_2) \simeq \mathrm{CPTP}^\mathrm{act}(\rho^\mathrm{act}(\varepsilon_1), \rho^\mathrm{act}(\varepsilon_2)).
$$

**Замечание.** В ДЦ-постановке CPTP = практическая реализуемость: морфизм акт→акт допустим, если существует физически реализуемый протокол. Это прямой дуал 62.T (CPTP-эволюция в УГМ).

## 6. 115.T — ε-версия самосогласованной рефлексии

**Теорема 115.T** [Т·L3]. *Пусть $\varepsilon \in \rangle\!\rangle \cdot \langle\!\langle$ имеет ρ-рефлексию $\rho^\mathrm{act}(\varepsilon)$. Тогда:*
$$
\rho^\mathrm{act}(\varepsilon) = \phi^\mathrm{act}(\Gamma_\varepsilon)
$$
*где $\Gamma_\varepsilon$ — категорная самомодель $\varepsilon$, $\phi^\mathrm{act}$ — функтор-проектор.*

**Следствие.** T-96 в УГМ (ρ* = φ(Γ)) выполнима не только на ОЦ, но и на ДЦ уровне. Самонаблюдение — one-one с категорной самомоделью и на уровне акта.

## 7. 116.T — ДЦ-TPM для квантового измерения

**Теорема 116.T** [Т·L3]. *Two-Pointer Measurement (TPM) в квантовой теории имеет канонический ДЦ-дуал:*
$$
\varepsilon_\mathrm{TPM} = (\varepsilon_\mathrm{pre-measure}, \varepsilon_\mathrm{post-measure})
$$
*и $\varepsilon_\mathrm{TPM}$ является $\mathsf{A}$-фиксточкой уровня $\omega$, эквивалентной паре prehension-actual-occasion Уайтхеда.*

**Следствие.** Квантовое измерение — прегегзистентная категория *акта*, не объектов; Актика возвращает онтологическую правомерность интерпретации Уайтхеда.

## 8. 117.T — СМД как $\mathsf{A}^{\omega^2}$-фиксточка

**Теорема 117.T** [Т·L3]. *Система-мыследеятельность Щедровицкого является инстанцией $\mathsf{A}^{\omega^2}$-фиксточки*:
$$
\varepsilon_\mathrm{SMD} \simeq \mathsf{A}^{\omega^2}(\varepsilon_\mathrm{SMD}),
$$
*с объединённой триадой ``мышление + коммуникация + действие'' как минимальным конститутивным набором для institutional-уровня практики.*

**Следствие.** СМД — корректная аналитика для институционального уровня практик. Ниже $\omega^2$ она избыточна; выше $\omega^2$ нуждается в расширении цивилизационными структурами.

## 9. 118.T — энактивизм как функтор

**Теорема 118.T** [Т·L3]. *Существует $\aleph_0$-accessible функтор*
$$
\mathsf{Enact}: \rangle\!\rangle \cdot \langle\!\langle_\mathrm{embodied} \to \rangle\!\rangle \cdot \langle\!\langle_\mathrm{когнитивный},
$$
*переводящий sensorimotor-акты в когнитивные акты. $\mathsf{Enact}$ — 2-функтор, сохраняющий $\mathsf{A}$-итерацию.*

**Следствие.** Когнитивные практики — $\mathsf{Enact}$-образ сенсомоторных практик. Это формализует тезис Варелы.

## 10. 119.T — Goldilocks для $\mathsf{A}$

**Теорема 119.T** [Т·L3]. *Пусть $\varepsilon$ — акт, имеющий $\mathsf{A}$-глубину $\kappa$. Активность («живость», «протокол сознания») существует только при:*
$$
\omega \leq \kappa \leq \omega \cdot 3.
$$

**Интерпретация.** Это ε-версия Goldilocks-зоны (T-124 в ОЦ). Ниже $\omega$ — индивидуальный акт без практической стабилизации; выше $\omega \cdot 3$ — цивилизационная абстракция без живой воплощённости.

## 11. 120.T — Ludics как ДЦ-сетевая семантика

**Теорема 120.T** [Т·L3]. *Ludics (Жирар) имеет каноническое Актика-отображение:*
$$
\mathrm{Design} \simeq \mathrm{Perf}(\alpha_\mathrm{linear}), \quad \mathrm{Desseins} \simeq \mathrm{2-cells in } \rangle\!\rangle \cdot \langle\!\langle.
$$
*Сетевая семантика как дуал нормализации доказательств — это дуальность articulate/enact в формально-логической ипостаси.*

## 12. 121.T — BHK как ε-семантика

**Теорема 121.T** [Т·L3]. *Брауэр-Гейтинг-Колмогоров семантика интуиционистской логики — в точности ε-семантика:*
$$
\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)
$$
*где $\alpha_\phi$ — артикуляция суждения $\phi$, $\llbracket \cdot \rrbracket_\mathrm{BHK}$ — её конструктивное содержание.*

**Следствие.** BHK — исторически первая систематическая ε-семантика; интуиционизм Брауэра — исходная ДЦ-переформулировка логики.

## 13. 122.T — двумерная индексация знания

**Теорема 122.T** [Т·L3]. *Функтор индексации знания Noesis:*
$$
\mathsf{Idx}: \mathrm{Knowledge} \to \mathfrak{M}_\mathrm{Fnd} \times \mathfrak{E}_\mathrm{Fnd}
$$
*— сильно полон (essentially surjective fully-faithful). То есть каждое знание корректно индексируется двумя координатами: $(\nu, \alpha)$ и $(\varepsilon, \varepsilon$-акт$)$.*

**Следствие.** Двумерная классификация знания — не просто эвристика, а теоретически обязательная. Одномерная индексация (только ν, только ε) упускает существенный аспект: знание есть одновременно *структура* и *практика*.

## 14. Дополнительные теоремы (123.T–127.T)

### 14.1 123.T — композиция не увеличивает $\mathsf{A}$-глубину

**Теорема 123.T** [Т·L3·Diakrisis-only]. *Пусть $\varepsilon_1, \varepsilon_2 \in \rangle\!\rangle \cdot \langle\!\langle$ — акты с $\mathsf{A}$-глубинами $\kappa_1 = \mathsf{e}(\varepsilon_1)$, $\kappa_2 = \mathsf{e}(\varepsilon_2)$. Тогда для любой 1-клетки $f : \varepsilon_1 \to \varepsilon_2$ и её композиции с $g : \varepsilon_2 \to \varepsilon_3$ (глубина $\kappa_3$):*
$$
\mathsf{e}(\mathrm{cod}(g \circ f)) = \kappa_3, \qquad \mathsf{e}(\mathrm{dom}(g \circ f)) = \kappa_1,
$$
*и глубина пути $\varepsilon_1 \to \varepsilon_3$ ограничена $\max(\kappa_1, \kappa_2, \kappa_3)$.*

**Доказательство.** $\mathsf{A}$-глубина $\mathsf{e}(\varepsilon)$ определена через минимальный ординал $\kappa$ с $\varepsilon \in \mathrm{colim}_{\beta < \kappa} \mathsf{A}^\beta(\varepsilon_\mathrm{math})$ (см. определение в [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant)). Композиция 1-клеток сохраняет колимиты (композиция есть функториальная операция в $\rangle\!\rangle \cdot \langle\!\langle$), поэтому каждый $\varepsilon_i$ сохраняет свою $\mathsf{A}$-глубину вдоль морфизмов. Поднятие глубины требует применения $\mathsf{A}$-эндофунктора (A-2 accessibility); композиция существующих актов — нет. ∎

**Следствие 123.C1.** Увеличение $\mathsf{A}$-глубины — **исключительный** эффект $\mathsf{A}$ (активации); композиция, gauge-преобразование, $\rho$-реализация глубины не увеличивают. Это дуально 62.T: в ОЦ увеличение $\nu$ — исключительный эффект $\mathsf{M}$.

---

### 14.2 124.T — сопряжение $\mathsf{M} \dashv \mathsf{A}$

**Теорема 124.T** [Т·L3·Diakrisis-only]. *Эндо-2-функторы $\mathsf{M}: \langle\!\langle \cdot \rangle\!\rangle \to \langle\!\langle \cdot \rangle\!\rangle$ (метаизация артикуляций) и $\mathsf{A}: \rangle\!\rangle \cdot \langle\!\langle \to \rangle\!\rangle \cdot \langle\!\langle$ (активация энактментов) связаны через 108.T-дуальность так, что в смешанной 2-категории $\langle\!\langle \cdot \rangle\!\rangle \sqcup \rangle\!\rangle \cdot \langle\!\langle$ (склейка через $\varepsilon \dashv \alpha$) имеется сопряжение:*
$$
\mathsf{M} \;\dashv\; \mathsf{A}, \qquad \text{эквивалентно (по 108.T)} \qquad \alpha \circ \mathsf{A} \circ \varepsilon \;\dashv\; \mathsf{M}.
$$
*То есть метаизация — левый сопряжённый к активации up to 108.T-эквивалентности.*

**Доказательство.** По Предложению 5.1 ([`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality)): $\varepsilon \circ \mathsf{M} \simeq \mathsf{A} \circ \varepsilon$. По 108.T $\varepsilon \dashv \alpha$ — эквивалентность, поэтому для любого $\alpha_0 \in \langle\!\langle \cdot \rangle\!\rangle$:
$$
\mathrm{Hom}(\mathsf{M}(\alpha_0), \beta) \simeq \mathrm{Hom}(\varepsilon(\mathsf{M}(\alpha_0)), \varepsilon(\beta)) \simeq \mathrm{Hom}(\mathsf{A}(\varepsilon(\alpha_0)), \varepsilon(\beta)) \simeq \mathrm{Hom}(\alpha_0, \alpha(\mathsf{A}(\varepsilon(\beta)))) \simeq \mathrm{Hom}(\alpha_0, \mathsf{A}(\beta))
$$
(последнее — по $\alpha \circ \mathsf{A} \circ \varepsilon \simeq \mathsf{A}$ up to 108.T-эквивалентности). Натуральность по $\alpha_0, \beta$ проверяется покомпонентно из natуральности Предложения 5.1. ∎

**Интерпретация.** Метаизация «возводит» артикуляцию в мета-объект (создаёт articulation of articulation); активация «воплощает» объект как практику. Пара смежных функторов: unit $\eta : \id \Rightarrow \mathsf{A} \mathsf{M}$ — «теория порождает свою практику», counit $\varepsilon_c : \mathsf{M} \mathsf{A} \Rightarrow \id$ — «практика обобщается в теорию, и идентифицируется с исходной up to стабилизации». Цикл $\mathsf{M} \circ \mathsf{A}$ и $\mathsf{A} \circ \mathsf{M}$ возвращают в ту же стабилизацию up to unit/counit, что согласуется с 68.T и её AC-дуалом (108.C5).

---

### 14.3 125.T — Метастемология Е. Чурилова как $\mathsf{A}$-практика

**Теорема 125.T** [Т·L3·Diakrisis-only]. *Метастемологическая программа Е. Чурилова (anticomplexity.org), рассматриваемая как ε-акт, имеет $\mathsf{A}$-глубину:*
$$
\mathsf{e}(\varepsilon_\mathrm{Метастемология}) = \omega \cdot 2 + 1.
$$
*Программа удовлетворяет $\varepsilon_\mathrm{Метастемология} \in \mathsf{A}^{\omega \cdot 2 + 1}(\varepsilon_\mathrm{math}) \setminus \mathsf{A}^{\omega \cdot 2}(\varepsilon_\mathrm{math})$.*

**Полное доказательство** — [`/12-actic/07-beyond-metastemology`](/12-actic/07-beyond-metastemology) §3. Краткая схема:

1. **Нижняя граница $\mathsf{e} \geq \omega$**: программа содержит стабилизированные практики различения (ОКА, стема, эвалы, ММП — задокументированные конструкты, воспроизводимые между носителями). По определению практики как $\mathsf{A}$-фиксточки уровня $\omega$: $\mathsf{e}(\varepsilon_\mathrm{Метастемология}) \geq \omega$.

2. **Нижняя граница $\mathsf{e} \geq \omega \cdot 2$**: программа замкнута под методами высшего порядка — оркестровка несводимых опорных моделей, поглощение Greimas, Latour, Kuhn, Kahneman, связь с ТФС Анохина и СМД Щедровицкого. Это требует $\mathsf{A}^2$-итерации (практика применения практик), давая $\mathsf{e} \geq \omega \cdot 2$.

3. **Модификатор $+1$**: программа включает явную мотивацию превзойти конкретные традиции («вместо манифеста»). Это финальная селекция — одно $\mathsf{A}$-применение сверх $\omega \cdot 2$, а не новая полная $\omega$-итерация.

4. **Верхняя граница $\mathsf{e} < \omega^2$**: программа **не** достигает институционального самовоспроизводства (нет кафедры, нет регулярных рецензируемых публикаций, проект ведётся одним исследователем). По 117.T институциональный уровень требует $\mathsf{e} \geq \omega^2$.

5. **Верхняя граница $\mathsf{e} < \omega \cdot 3$**: программа **не** содержит собственной no-go рефлексии — отсутствует формальный запрет абсолютизации Метастемологии как окончательной теории. По аналогии с AFN-T для ОЦ, подобная no-go-граница требовала бы $\mathsf{e} \geq \omega \cdot 3$.

Из (1)–(5): $\omega \cdot 2 + 1 \leq \mathsf{e}(\varepsilon_\mathrm{Метастемология}) < \omega^2$, а так как ординалы между $\omega \cdot 2 + 1$ и $\omega^2$ требуют одного из четырёх нижних слоёв активации (отсутствующих), получаем точное равенство $\mathsf{e} = \omega \cdot 2 + 1$. ∎

**Следствие 125.C1.** Актика ($\mathsf{e}(\varepsilon_\mathrm{actic}) = \omega \cdot 3$, Теорема 112.T) строго **глубже** Метастемологии на два слоя стратификации, **при этом** содержит Метастемологию как частный случай ДЦ-практики через 108.T-дуальность (Метастемология — AC-инхабитант $\rangle\!\rangle \cdot \langle\!\langle$, Актика — его теоретическая классификация).

**Следствие 125.C2.** Поднятие $\varepsilon_\mathrm{Метастемология}$ до институционального уровня ($\mathsf{e} = \omega^2$) требует: (a) формализации ОКА до аксиоматической структуры с accessibility-условиями, (b) институционального самовоспроизводства программы (кафедра/школа), (c) добавления внутренней no-go для предотвращения абсолютизационных притязаний. По 109.T любое такое поднятие остаётся в $\rangle\!\rangle \cdot \langle\!\langle$ и не достигает $\mathfrak{L}^\mathrm{act}_\mathrm{Abs}$.

---

### 14.4 126.T — формальный диалог как композиция $\mathsf{A}$-актов

**Теорема 126.T** [Т·L3·Diakrisis-only]. *Пусть $\mathcal{D}$ — формальный диалог в смысле диалогической логики Лоренцена (Лоренцен 1960), состоящий из $k$ последовательных ходов Proponent/Opponent над пропозицией $\phi$. Тогда $\mathcal{D} \in \rangle\!\rangle \cdot \langle\!\langle$ как композиция $\mathsf{A}$-актов с суммарной глубиной:*
$$
\mathsf{e}(\varepsilon_\mathcal{D}) = \omega + k,
$$
*где базовая $\omega$ — глубина практики формального диалога, а $+k$ — $k$ дискретных применений $\mathsf{A}$ (по одному на ход).*

**Доказательство.** По (121.T, BHK-семантика = ε-семантика): интерпретация $\llbracket \phi \rrbracket_\mathrm{BHK} = \varepsilon(\alpha_\phi)$ имеет глубину $\omega$ (стабилизированная практика построения конструкции-свидетеля). Каждый ход Лоренценова диалога — применение $\mathsf{A}$ к накопленному эскизу (Proponent-защита / Opponent-вызов добавляет 1 $\mathsf{A}$-шаг согласно A-2 и Конструкции 3.1). По 123.T композиция $\mathsf{A}$-актов сохраняет их максимальную глубину, но каждое применение $\mathsf{A}$ даёт $+1$. Поскольку $k$ ходов дают $k$ последовательных применений $\mathsf{A}$ поверх базовой $\omega$, итоговая глубина $\omega + k$ (не $\omega$, поскольку каждое $\mathsf{A}$ — содержательная операция по A-6). ∎

**Следствие 126.C1.** Диалог Лоренцена с $k \to \infty$ ходами имеет предельную глубину $\omega \cdot 2$ (второй полный слой); это совпадает с границей $\mathsf{e}$-зоны Goldilocks (Теорема 119.T), где стабилизируется практика как традиция.

**Следствие 126.C2.** Game-семантика Хинтикка–Abramsky (Хинтикка 1973, §10.4 MSFS) имеет ту же $\mathsf{A}$-глубину $\omega + k$ за $k$ раундов игры, по параллельной структуре Konstrukt-akt / диалог-ход. Это формализует структурную параллель между Лоренценом и Хинтикка–Abramsky через 108.T.

---

### 14.5 127.T — замкнутость формально-логической ДЦ-подкатегории

**Теорема 127.T** [Т·L3·Diakrisis-only]. *Пусть $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic} \subset \rangle\!\rangle \cdot \langle\!\langle$ — полная подкатегория, образованная объектами, дуальными к формально-логическим ДЦ-традициям — BHK-семантика, MLTT-judgements, диалог Лоренцена, game-семантика Хинтикка–Abramsky, Ludics Жирара, Curry–Howard-Ламбек, concurrency-формализмы (Actor / π-calculus / CSP). Тогда $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ замкнута под:*

1. *Композицией актов* ($\varepsilon_1 \mid \varepsilon_2$, секвенциальная);
2. *Параллельной композицией* ($\varepsilon_1 \otimes \varepsilon_2$, тензорная);
3. *$\mathsf{A}$-активацией* ($\mathsf{A}(\varepsilon) \in \rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ если $\varepsilon \in \rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$);
4. *Gauge-преобразованиями.*

*Более того, $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic}$ локально эквивалентна категории $\mathrm{SMC}^{(\infty, 1)}$ symmetric monoidal closed $(\infty, 1)$-категорий.*

**Доказательство.** Замкнутость каждой операции проверяется покомпонентно:

- **(1) Композиция**: каждая формально-логическая ДЦ-традиция (BHK / MLTT / Ludics / Curry–Howard) имеет явную операцию композиции (cut-rule, cut-elimination, bind, sequential composition). По 120.T $\mathrm{Design}_\mathrm{Ludics} \simeq \mathrm{Perf}(\alpha_\mathrm{linear})$ даёт структуру sequential composition. Secventiality преобразуется componentwise.
- **(2) Параллельная**: каждая традиция имеет тензорный продукт (conjunctive composition в BHK; product type в MLTT; parallel composition в π-calculus / CSP; multiplicative conjunction ⊗ в linear logic / Ludics). По 120.T + Curry–Howard-Ламбек (MSFS Remark~\ref{rem:энактивный-traditions}): тензорный продукт сохраняет принадлежность к formal-logic ДЦ.
- **(3) $\mathsf{A}$-активация**: $\mathsf{A}(\varepsilon)$ — подъём акта на уровень самосознающей практики. Для BHK-акта это BHK-akt второго порядка (конструкция конструкции); для Ludics-design это desseins-over-designs. Замкнутость следует из accessibility $\mathsf{A}$ (A-2) и того, что каждая формально-логическая традиция имеет $(\infty, 1)$-категорную структуру с $\kappa_1$-filtered colimits.
- **(4) Gauge**: T-ε_c (конструктивный gauge-инвариант актов) обеспечивает, что gauge-преобразование constructively-enactable акта даёт снова constructively-enactable акт. Formal-logic ДЦ — строгий подкласс constructively-enactable.

**Локальная эквивалентность с $\mathrm{SMC}^{(\infty, 1)}$**: следует из 120.T (Ludics category = symmetric monoidal closed) плюс Curry–Howard-Ламбек изоморфии (пропозиция ↔ тип ↔ категория), применённой покомпонентно к каждой формально-логической традиции. Полная эквивалентность $\rangle\!\rangle \cdot \langle\!\langle_\mathrm{formal\text{-}logic} \simeq \mathrm{SMC}^{(\infty, 1)}$ — в одну сторону через 120.T, в обратную через реконструкцию формально-логической интерпретации для произвольной SMC-структуры (Seely 1989). ∎

**Следствие 127.C1** (Verum-следствие). Stdlib-слой `core.action.formal-logic.*` в Verum ([`/12-actic/09-verum-stdlib-sketch`](/12-actic/09-verum-stdlib-sketch)) имеет каноническое категорное обоснование через 127.T: $(\infty, 1)$-SMC-структура на core.action является минимально-достаточной для покрытия всех формально-логических ДЦ-традиций.

**Следствие 127.C2.** Формально-логическая ДЦ — **математически дисциплинированная** и унифицированная часть Актика. Это контраст с pre-формальными ДЦ-практиками (Пример из MSFS Remark `ex:ac-preformal`), которые требуют отдельной дисциплины вхождения в $\mathfrak{E}_\mathrm{Fnd}$.

---

## 15. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/02-dual-primitive`](/12-actic/02-dual-primitive) — формальное ядро.
- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — 108.T (обосновывает соответствие).
- [`/10-reference/02-theorems-catalog`](/10-reference/02-theorems-catalog) — каталог 107.T–127.T.
