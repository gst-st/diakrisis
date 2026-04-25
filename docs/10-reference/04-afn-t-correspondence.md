---
sidebar_position: 4
title: Соответствие MSFS
---

# Соответствие теорем Diakrisis ↔ MSFS

## Назначение документа

**MSFS** (*The **M**oduli **S**pace of **F**ormal **S**ystems: Classification, Stabilization, and a No-Go Theorem for Absolute Foundations*, Sereda 2026) — самодостаточный препринт, формальная версия структурного ядра Diakrisis, независимая от Diakrisis-нотации. MSFS развивает структурную теорию $(\infty, n)$-классифицирующего $2$-стека $\fM$ Rich-оснований: (i) плюрализм уровень 5+ ($\infty$-cosmoi / UF / cohesive попарно $2$-неэквивалентны), (ii) условную мета-категоричность через Гротендик–Люри straightening, (iii) slice-локальное интенсиональное уточнение через эффективный топос Хайланда, (iv) theory-level meta-стабилизация с universe-ascent по $\kappa_1 < \kappa_2 < \cdots$. В качестве граничной леммы закрывается stratum уровня 6 (AFN-T), унифицируя классическую no-go серию Кантор–Рассел–Гёдель–Тарский–Ловер–Эрнст.

Этот документ фиксирует **точное соответствие** между теоремами Diakrisis (внутренняя нумерация `N.T`, `N.C`) и labelled results MSFS (`\ref{thm:...}` и т.п.). Каждая дублируемая теорема имеет **каноническое место** в MSFS; Diakrisis-корпус ссылается на MSFS, не воспроизводя доказательства.

**MSFS:** 57 стр., 54+ theorem-like environments, 64 bib-entries; включает §11 AC/OC Morita Duality и Example `ex:ac-preformal` для pre-формальной AC-практики.

**Опубликованная версия:** [Zenodo (DOI: 10.5281/zenodo.19755781)](https://zenodo.org/records/19755781) — каноническая публикационная ссылка для внешнего цитирования.

---

## Ключевые теоремы

### Граничная лемма (AFN-T) и её части

| Diakrisis | MSFS | Название | Комментарий |
|---|---|---|---|
| **AFN-T (α-часть)** (α-часть) | Theorem~
ef{thm:afnt-alpha} | Boundary Lemma: Emptiness of уровень 6 ((α)-Part) | Синтаксис-семантический мост: $(F_S) \Rightarrow X \in \cS_S^{\mathrm{global}}$, $\id_X$ нарушает $(\Pi_4)$ |
| **AFN-T (β-часть)** (β-часть) | Theorem~
ef{thm:afnt-beta} | Boundary Lemma: No Limit-Based Escape ((β)-Part) | Трансфинитные приближения остаются в $\cS_S^{\mathrm{global}}$; proper-class-башни через Proposition~\ref{prop:proper-class} |
| **AFN-T** | Theorem~
ef{thm:afnt-alpha} | Combined AFN-T | $\mathcal{L}_{\mathrm{Abs}}$ структурно пуст как следствие |
| **пятиосевая абсолютность AFN-T** | Theorem~
ef{thm:horizontal–thm:completeness} | Five-Axis Absoluteness | Пять осей абсолютности граничной леммы |

### Пять осей абсолютности

| Diakrisis | MSFS | Название |
|---|---|---|
| **55.T** | Theorem~
ef{thm:horizontal} | Горизонтальная (по $S \in \RS$) |
| **59.T.1** | Theorem~
ef{thm:vertical} | Вертикальная (по $n \in \mathbb{N} \cup \{\infty\}$) |
| **69.T** | Theorem~
ef{thm:meta-vertical} | Мета-вертикальная (по $\mu$-итерациям) |
| **84.T** | Theorem~
ef{thm:lateral} | Латеральная (альтернативные порядки) |
| **87.T** | Theorem~
ef{thm:completeness} | Полнота (Ловер-scope) |
| (вспом.) | Lemma~\ref{lem:lawvere-inf} | $(\infty,\infty)$-Ловер fixed-point |

### Три пути обхода

| Diakrisis | MSFS | Путь |
|---|---|---|
| **57.T + 56.C1 + 61.T + 94.T** | Theorem~
ef{thm:universe} | Полиморфизм универсумов (через straightening) |
| **19.T1 + 31.T3 + 68.T + 69.T + 90.T** | Theorem~
ef{thm:reflective} | Рефлексивные башни (в пределах одного недостижимого) |
| **98.T** | Theorem~
ef{thm:I-existence} | Построение функтора интенсионального уточнения $\II$ |
| **99.T** | Theorem~
ef{thm:slice-locality} | Slice-локальность $\II$ (через топос $\mathrm{Eff}$ Хайланда) |

### Структура уровень 5+ — основной математический вклад

| Diakrisis | MSFS | Название |
|---|---|---|
| **100.T** | Theorem~
ef{thm:meta-cat} | Условная мета-категоричность (через Гротендик–Люри straightening) |
| **101.T** | Theorem~
ef{thm:meta-mult} | Структурный плюрализм ($\infty$-cosmoi / UF / cohesive попарно $2$-неэквивалентны) |
| **102.T** | Theorem~
ef{thm:meta-stab} | Theory-level meta-стабилизация с universe-ascent ($\kappa_1 < \kappa_2 < \ldots$) |
| **68.T** | Theorem~
ef{thm:bergner-lurie-stab} | $(\infty,\infty)$-стабилизация (Барвик–Schommer-Pries) |

### Diakrisis и MSFS Q1 — статус внутренней работы

Внутренний Diakrisis-корпус содержит проект доказательств четырёх условий максимальности (Max-1)..(Max-4) как теорем 103.T–106.T (подробности — [`/06-limits/10-maximality-theorems`](/06-limits/10-maximality-theorems)):

| Max-условие | Diakrisis-теорема | Содержание |
|---|---|---|
| (Max-1) universal articulation | **103.T** | $\mathrm{Artic}: \mathcal{F} \to \langle\!\langle \cdot \rangle\!\rangle$ существенно сюръективен |
| (Max-2) gauge-fullness | **104.T** | $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\fM_\mathrm{Fnd})$ |
| (Max-3) парадокс-иммунность | **105.T** | Универсальный Яновский-блокировщик через T-2f\* |
| (Max-4) slice-locality | **99.T** (MSFS `thm:slice-locality`); сводная теорема **106.T** | Интенсиональное уточнение fibres, не экспандирует базу |

**Статус по академическим стандартам**: MSFS-препринт оставляет Open Question Q1 о не-пустоте $\Meta_\mathrm{Cls}^\top$ **открытой** и ссылается на кандидата только как на *готовящийся work in preparation* (Remark rem:diakrisis-свидетель). Внутренние Diakrisis-проработки служат подготовительной базой для будущей отдельной рецензируемой публикации; их использование как установленного свидетельства в MSFS-претензиях запрещено. Diakrisis-корпус сохраняет внутреннюю полноту, но MSFS остаётся самодостаточным и не зависит от Diakrisis-ссылок.

### Maximality proofs (Diakrisis-only, не в MSFS)

| Diakrisis | Соответствие в MSFS | Название |
|---|---|---|
| **103.T** | (Max-1) в Definition `def:maximality` | Universal articulation: $\mathrm{Artic}: \mathcal{F} \to \langle\!\langle \cdot \rangle\!\rangle$ существенно-сюръективен |
| **104.T** | (Max-2) в Definition `def:maximality` | Gauge-fullness: $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$ |
| **105.T** | (Max-3) в Definition `def:maximality` | Универсальная парадокс-иммунность через Яновский 2003 |
| **106.T** | Ответ на открытый вопрос после Theorem~
ef{thm:meta-cat} («$\mathcal{L}_{\mathrm{Cls}}^{\top}$ non-empty?») | Сводная: $\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}$ |

**Граница**: MSFS намеренно оставляет непустоту $\mathcal{L}_{\mathrm{Cls}}^{\top}$ открытым вопросом для рецензионной чистоты (теорема о существовании представителя — внешняя по отношению к классификации). Diakrisis даёт свидетеля (саму себя) через явную конструкцию 103.T–106.T. Это — пример Diakrisis > MSFS: расширение за счёт специфической аксиоматики (T-2f\*) и внутренней метакатегории ⟪⟫, которых в MSFS нет.

### Diakrisis-only расширения Актика (110.T–127.T)

Теоремы **110.T–127.T** — Diakrisis-specific extensions. Они используют конструкции, отсутствующие в MSFS ($\mathsf{A}$-эндофунктор, $\sqsupset_\bullet$-предшествование, ε-инвариант, ОКА-стратификация), и опираются на Diakrisis-specific аксиоматику A-0..A-9 + T-ε + T-2a\*. Все 18 теорем имеют статус **[Т·L3·Diakrisis-only]**: формальное доказательство в ZFC+2-inacc при условии принятия Diakrisis-аксиоматики, лежащей за пределами MSFS.

| Diakrisis | Источник полного proof | Краткое содержание |
|---|---|---|
| 110.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §1 | Классифицирующее пространство $\mathfrak{E}_\mathrm{Fnd}$ |
| 111.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §2 | UFH для перформансов через Гротендик-конструкцию |
| 112.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §3 | Универсальный перформанс Актика-во-Актике |
| 113.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §4 | Автопоэзис как $\mathsf{A}$-фиксточка уровня $\omega^2$ |
| 114.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §5 | CPTP-дуал для перформансов |
| 115.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §6 | ε-версия самосогласованной рефлексии |
| 116.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §7 | ДЦ-TPM для квантового измерения |
| 117.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §8 | СМД Щедровицкого как $\mathsf{A}^{\omega^2}$-фиксточка |
| 118.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §9 | Энактивизм Варелы как функтор $\mathsf{Enact}$ |
| 119.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §10 | Goldilocks-зона для $\mathsf{A}$-итерации |
| 120.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §11 | Ludics Жирара как ДЦ-сетевая семантика |
| 121.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §12 | BHK-интерпретация как $\varepsilon$-семантика |
| 122.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §13 | Двумерная индексация знания |
| 123.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §14.1 | Композиция не увеличивает $\mathsf{A}$-глубину |
| 124.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §14.2 | Сопряжение $\mathsf{M} \dashv \mathsf{A}$ через 108.T |
| 125.T | [`/12-actic/07-beyond-metastemology`](/12-actic/07-beyond-metastemology) §3 | Метастемология Чурилова: $\mathsf{e} = \omega \cdot 2 + 1$ |
| 126.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §14.4 | Формальный диалог Лоренцена: $\mathsf{e} = \omega + k$ |
| 127.T | [`/12-actic/06-actic-theorems`](/12-actic/06-actic-theorems) §14.5 | Замкнутость формально-логической ДЦ-подкатегории |

**Граница**: MSFS документирует 107.T–109.T как формальный minimum AC/OC-дуальности. Всё сверх — Diakrisis-specific. Эти теоремы не могут быть процитированы в MSFS-контексте без перевода в MSFS-язык (который потребует добавления $\mathsf{A}$-функтора, ε-инварианта и Diakrisis-аксиоматики).

### AC/OC-дуальность и дуальная граничная лемма (MSFS §10)

MSFS §10 «AC/OC Duality and the Dual Boundary Lemma» — формальная версия Актика-слоя Diakrisis. Содержит восемь labelled results:

| Diakrisis | MSFS | Название |
|---|---|---|
| **107.T** | Corollary~\ref{cor:ac-oc-conservativity} | Актика-консистентность: $\mathrm{Con}(\cF \cup \cE) = \mathrm{Con}(\ZFC + 2\text{-inacc})$ |
| **108.T** | Theorem~
ef{thm:ac-oc-duality} | AC/OC Морита-дуальность: $\fM \simeq_{(\infty, \infty)} \fM_\cE$ через adjoint pair $\varepsilon \dashv \alpha$ |
| (вспом.) | Definition~\ref{def:enactments} | $2$-категория pointed reflective enactments $\cE$ — объекты как квадруплы $(F, \cC, \iota, r)$ с чётко выбранным reflector'ом $r$ |
| (вспом.) | Remark~\ref{rem:E-size} | Size bound: $\cE$ — $\mathbf{U}_2$-small в $\ZFC + 2\text{-inacc}$ |
| (вспом.) | Definition~\ref{def:SSE} | Класс $\SSE$ — $\cE$-аналог $\cS_S$ через componentwise closure |
| (вспом.) | Lemma~\ref{lem:SS-membership-E} | Enactment syntax-semantics lemma (дуал Lemma~\ref{lem:SS-membership}) |
| **109.T** | Theorem~
ef{thm:dual-afnt} | Dual Boundary Lemma: $\LAbsE = \emptyset$ двумя независимыми путями |
| (вспом.) | Theorem~
ef{thm:dual-five-axis} | Dual five-axis absoluteness (дуал Theorem~
ef{thm:horizontal–thm:completeness}) |
| (вспом.) | Figure~\ref{fig:ac-oc-duality} | Диаграмма AC/OC-дуальности с бijекцией стратов |

### Соответствие Актика-объектов

| Diakrisis | MSFS | Комментарий |
|---|---|---|
| $\rangle\!\rangle \cdot \langle\!\langle$ (метакатегория актов) | $\cE$ (Definition~\ref{def:enactments}) | В MSFS объекты — квадруплы $(F, \cC, \iota, r)$ с reflector'ом $r$ как частью данных; Diakrisis-абстрактное $\varepsilon$ ∈ $\rangle\!\rangle \cdot \langle\!\langle$ инстанциируется как такой квадрупл |
| $\mathsf{A}$ (активация) | (не используется в MSFS §10) | Diakrisis-specific. MSFS не нуждается в endo-функторе $\mathsf{A}$ — дуальность прямо через $\varepsilon \dashv \alpha$ |
| $\varepsilon_\mathrm{math}$ | $\varepsilon(\alpha_\mathrm{math}) = (F_{\mathrm{math}}, \Syn, \id, \id)$ | Каноническая syntactic self-enactment |
| $\sqsupset_\bullet$ (активационное предшествование) | (не используется в MSFS §10) | Diakrisis-specific; заменяется стандартным $(\infty, n)$-Morita-reducibility |
| A-0..A-9 + T-ε + T-2a\* + T-ε_c | (не используются в MSFS) | Diakrisis-специфическая параллельная аксиоматика |
| $\mathfrak{E}_\mathrm{Fnd}$ | $\fM_\cE$ (Theorem~
ef{thm:ac-oc-duality}) | Classifying $2$-stack of $\cE$ |
| $\varepsilon : \langle\!\langle \cdot \rangle\!\rangle \to \rangle\!\rangle \cdot \langle\!\langle$ | $\varepsilon : \cF \to \cE$ syntactic self-enactment | То же (функтор) |
| $\alpha : \rangle\!\rangle \cdot \langle\!\langle \to \langle\!\langle \cdot \rangle\!\rangle$ | $\alpha : \cE \to \cF$ forgetful | То же (функтор) |
| $\mathrm{Perf}(\alpha) \simeq \mathrm{Mod}(\alpha)$ | $(\cC, \iota)$-component of $\varepsilon(F)$ | Категория перформансов в Diakrisis = модель-категория в MSFS |
| $\varepsilon$-инвариант (7 уровней) | (не формализован в MSFS) | Diakrisis-only ординальная стратификация (слои 0..6: событие → апейрон) |

### Ключевые структурные требования $\cE$

1. **Reflector как часть данных**: $\cE$-объект — квадрупл $(F, \cC, \iota, r)$, где $r : \cC \to \Syn(F)$ — левый adjoint к $\iota$ с тождествами треугольника. Уникальность $r$ по $\iota$ up to unique invertible 2-cell (Рил–Верити 2022, Адамек–Росицкий 1994) обеспечивает canonicity essential-surjective части 108.T.

2. **Dual-AFN-T — два независимых пути**: Theorem~
ef{thm:dual-afnt} доказывается (Route 1) прямым syntax-semantics bridge через Lemma~\ref{lem:SS-membership-E}, либо (Route 2) редукцией к $F \in \LAbs$ через $\varepsilon$-лифтинг $\cF$-координаций в $\cE$. Route 1 не требует 108.T.

3. **Ловер-scope $\mathrm{LS}(\cE)$**: $\{(F, \cC, \iota, r) : F \in \mathrm{LS}(\cF) \wedge \cC \text{ closed symmetric monoidal}\}$. Покрывает Cartesian-closed, SMC и $*$-autonomous — через универсальную диагональ Яновский; включает линейную логику, ludics Жирара, resource-sensitive type theories, квантовые enactments.

4. **Класс $\SSE$**: componentwise замыкание базы $\SSE^{\mathrm{base}} = \{(F', \cM, \iota_\cM, r_\cM) : \cM \models S, \iota_\cM := \ev_\cM, r_\cM := (\ev_\cM)^L\}$ под операциями Definition~\ref{def:SS}.

### Вспомогательные

| Diakrisis | MSFS | Содержание |
|---|---|---|
| **29.T–30.T** (universal foundation, reconstruction) | основа §3 (R-S), §5 (лемма $S$-definability) | Переформулированы как Definition~\ref{def:rs}, Lemma~\ref{lem:SS-membership} |
| **43.T1** (classifying space) | Convention~\ref{conv:notation} ($\fM$ через Гротендик construction) | $\mathfrak{M}_\mathrm{Fnd}$ = $\fM$ |
| **45.T** (derivable structures) | Охвачено общей $\cS_S^{\mathrm{global}}$ | Def~\ref{def:SS} |
| **76.T** ($(\Pi_3\text{-max})$ предикативная форма) | Remark~\ref{rem:direct-infty-scope} (для constructive $S$) | Restriction |
| **88.T** (internal categoricity) | Охватывается Theorem~
ef{thm:meta-cat} | Частный случай |
| **90.T** (proof-theoretic strength) | Abstract + Convention~\ref{conv:zfc-inacc} ($\Con(\ZFC + 2\text{-inacc})$) | Константа |

---

## Соответствие определений

| Diakrisis | MSFS | Объект |
|---|---|---|
| $\langle\langle \cdot \rangle\rangle$ (метакатегория артикуляций) | $\cF$ (Convention~\ref{conv:notation}) | $2$-категория Rich-оснований |
| $\mathsf{M}$ (мета-функтор) | `reflection operator` $R_\mathbf{F}$ (в (M3)) | Аккессибельный эндофунктор |
| $\alpha_\mathrm{math}$ | (не используется) | Diakrisis-specific |
| $\sqsubset_\bullet$ (доминирование) | (не используется) | Diakrisis-specific |
| $\rho$ (реализация) | $\rho$ (Convention~\ref{conv:notation}) | Классификационный функтор |
| $\mathfrak{M}_\mathrm{Fnd}$ | $\fM$ (Convention~\ref{conv:notation}) | Classifying $2$-stack |
| gauge-transformation | `gauge transformation` (Convention~\ref{conv:notation}) | То же |
| R-S условия (R1)–(R5) | Definition~\ref{def:rs} | То же |
| M1–M5 | Definition~\ref{def:meta} | То же |
| Max-1..Max-4 | Definition~\ref{def:maximality} | Max-3 формализована как depth-filtration (Remark~\ref{rem:max3-парадокс-иммунность}) |
| $\mathfrak{Meta}_{5+}$ | $\mathfrak{Meta}_{\mathrm{Cls}} = \mathcal{L}_{\mathrm{Cls}}$ | Мнемоническое соответствие |
| $\mathfrak{Meta}_{5+}^{\max}$ | $\mathfrak{Meta}_{\mathrm{Cls}}^{\top} = \mathcal{L}_{\mathrm{Cls}}^{\top}$ | Мнемоническое соответствие |
| T-2f\* (locally stratified completion) | (Max-3) depth filtration | Эквивалентная формулировка |

---

## Иерархия уровней

**MSFS** формализует **четыре страты** через мнемонические индексы (Definition~\ref{def:hierarchy}):

- $\mathcal{L}_{\mathrm{Fnd}}$ — Rich-foundations (формально через (R1)–(R5))
- $\mathcal{L}_{\mathrm{Cls}}$ — классификаторы (формально через (M1)–(M5))
- $\mathcal{L}_{\mathrm{Cls}}^{\top}$ — максимальные классификаторы ((Max-1)–(Max-4))
- $\mathcal{L}_{\mathrm{Abs}} = \emptyset$ — по AFN-T (forbidden абсолютное основание)

**Diakrisis** использует внутреннюю расширенную шкалу $\mathcal{L}_0, \mathcal{L}_1, \mathcal{L}_2, \mathcal{L}_3, \mathcal{L}_4, \mathcal{L}_5, \mathcal{L}_{5+}, \mathcal{L}_{5+}^{\max}, \mathcal{L}_6$ через $\nu$-инвариант ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy)). Соответствие:

| Diakrisis | MSFS | Комментарий |
|---|---|---|
| $\mathcal{L}_5$ | $\mathcal{L}_{\mathrm{Fnd}}$ | Rich-основание |
| $\mathcal{L}_{5+}$ | $\mathcal{L}_{\mathrm{Cls}}$ | Classifier |
| $\mathcal{L}_{5+}^{\max}$ | $\mathcal{L}_{\mathrm{Cls}}^{\top}$ | Maximal классификатор |
| $\mathcal{L}_6$ | $\mathcal{L}_{\mathrm{Abs}}$ | Forbidden абсолютное основание |
| $\mathcal{L}_0, \mathcal{L}_1, \mathcal{L}_2, \mathcal{L}_3, \mathcal{L}_4$ | (отсутствуют в MSFS) | Diakrisis-only, через $\nu$-инвариант |

**Обоснование мнемонической нотации**: MSFS §2.3 даёт формальное обоснование через Proposition~\ref{prop:no-collapse} (non-collapse of the horizontal meta at $\mathcal{L}_{\mathrm{Fnd}}$) и theory-level стабилизация (Theorem~
ef{thm:meta-stab}). Мнемонические subscripts ($\mathrm{Fnd}$, $\mathrm{Cls}$, $\top$, $\mathrm{Abs}$) устраняют социологическую нумерацию «5/5+/6» в пользу категорно-прозрачных обозначений.

---

## Позиционирование относительно предшествующих работ

MSFS §10.5 явно фиксирует позиционирование относительно:

- **Эрнст 2015** «The Prospects of Unlimited Category Theory» — ближайший формальный предшественник; Эрнст — специальный случай граничной леммы при ограничении на категорные R-S с (R1)–(R3) Фефермана.
- **Хэмкинс 2012** set-theoretic multiverse — комплементарная позиция (методологический плюрализм); мультивселенная как кандидат на уровня 6 исключена граничной леммой.
- **Барвик–Schommer-Pries 2021** unicity — совместима (одно-парадигмальная единственность внутри $(\infty, n)$-Cat; используется как техническая лемма Theorem~
ef{thm:bergner-lurie-stab}, критична для (iv) — theory-level стабилизация).

Diakrisis **не дублирует** это позиционирование; отсылает к §10.5 препринта.

## Архитектурное соответствие препринта

Препринт построен по принципу **«moduli space primary, граничная лемма secondary»**: основной математический вклад — классификация структуры $\fM$ (четыре результата (i)–(iv) в Abstract), AFN-T — граничное следствие. Diakrisis следует тому же принципу: центральные результаты — плюрализм уровень 5+ (101.T), условная мета-категоричность (100.T), slice-локальность $\II$ (99.T), theory-level meta-стабилизация (102.T), UFH (85.T); AFN-T — структурная граница этой архитектуры.

---

## Что остаётся в Diakrisis (не дублируется)

После реконструкции в Diakrisis-документах сохраняется:

1. **Канонический примитив** $(\langle\langle \cdot \rangle\rangle, \mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\bullet)$ — специфическая нотация и аксиоматика Diakrisis ([`/canonical-primitive`](/canonical-primitive)).
2. **13 аксиом (Axi-0..Axi-9, T-α, T-α_c, T-2f\*)** — внутренняя аксиоматика ([`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics)).
3. **Gauge-теоретические аспекты** — автоэквивалентности $\langle\langle \cdot \rangle\rangle$, $\alpha_\mathrm{Apeiron}$ ([`/formal-architecture`](/formal-architecture)).
4. **Конкретные articulations** $\alpha_\mathrm{zfc}, \alpha_\mathrm{hott}, \alpha_\mathrm{ncg}, \alpha_\mathrm{uhm}$ и их сравнение ([`/extractions`](/extractions)).
5. **Диагностика уровней для Diakrisis** — почему Diakrisis ∈ $\mathfrak{Meta}_{5+}^{\max}$ ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy)).
6. **Методология и исторический контекст** ([`/methodology`](/methodology), [`/historical-context`](/historical-context)).
7. **Applications** — Verum-formalization, Noesis ([`/applications`](/applications), [`/noesis`](/noesis)).

---

## Использование этого документа

**При чтении Diakrisis-доков:** встретив теорему вида **55.T**, **100.T**, **AFN-T** и т.п., см. соответствующую строку таблицы выше → перейти к препринту за полным доказательством.

**При цитировании:** для внешних публикаций предпочитаемая ссылка — MSFS (self-contained, рецензируем); Diakrisis-документы ссылаются как source-материал корпуса.

**При разработке:** изменения в формальных теоремах иерархии уровней, AFN-T абсолютности, обход closures, или meta-классификации должны вноситься **сначала в препринт**, затем отражаться в Diakrisis через обновление этой таблицы (в случае переопределения labels).
