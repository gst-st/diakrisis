---
sidebar_position: 4
title: Соответствие MSFS
---

# Соответствие теорем Diakrisis ↔ MSFS

## Назначение документа

**MSFS** (*The **M**oduli **S**pace of **F**ormal **S**ystems: Classification, Stabilization, and a No-Go Theorem for Absolute Foundations*, Sereda 2026) — самодостаточный препринт, формальная версия структурного ядра Diakrisis, независимая от Diakrisis-нотации. MSFS развивает структурную теорию $(\infty, n)$-классифицирующего $2$-стека $\fM$ Rich-оснований: (i) плюрализм Level 5+ ($\infty$-cosmoi / UF / cohesive попарно $2$-неэквивалентны), (ii) условную мета-категоричность через Grothendieck–Lurie straightening, (iii) slice-локальное интенсиональное уточнение через эффективный топос Хайланда, (iv) theory-level meta-stabilization с universe-ascent по $\kappa_1 < \kappa_2 < \cdots$. В качестве граничной леммы закрывается Level-6 stratum (AFN-T), унифицируя классическую no-go серию Cantor–Russell–Gödel–Tarski–Lawvere–Ernst.

Этот документ фиксирует **точное соответствие** между теоремами Diakrisis (внутренняя нумерация `N.T`, `N.C`) и labelled results MSFS (`\ref{thm:...}` и т.п.). Каждая дублируемая теорема имеет **каноническое место** в MSFS; Diakrisis-корпус ссылается на MSFS, не воспроизводя доказательства.

**MSFS:** `internal/math-msfs/paper-en/paper.tex` (версия 2.0, 47 стр., 54 theorem-like environment, 47 bib-entries).

**Сборка:** `bun internal/math-msfs/scripts/build-paper.ts` → `paper-en/afn-t-paper.pdf`.

---

## Ключевые теоремы

### Граничная лемма (AFN-T) и её части

| Diakrisis | MSFS | Название | Комментарий |
|---|---|---|---|
| **AFN-T (α-часть)** (α-часть) | Theorem~\ref{thm:afnt-alpha} | Boundary Lemma: Emptiness of Level 6 ((α)-Part) | Синтаксис-семантический мост: $(F_S) \Rightarrow X \in \cS_S^{\mathrm{global}}$, $\id_X$ нарушает $(\Pi_4)$ |
| **AFN-T (β-часть)** (β-часть) | Theorem~\ref{thm:afnt-beta} | Boundary Lemma: No Limit-Based Escape ((β)-Part) | Трансфинитные приближения остаются в $\cS_S^{\mathrm{global}}$; proper-class-башни через Proposition~\ref{prop:proper-class} |
| **AFN-T** | Theorem~\ref{thm:afnt} | Combined AFN-T | $\mathcal{L}_{\mathrm{Abs}}$ структурно пуст как следствие |
| **пятиосевая абсолютность AFN-T** | Theorem~\ref{thm:five-axis} | Five-Axis Absoluteness | Пять осей абсолютности граничной леммы |

### Пять осей абсолютности

| Diakrisis | MSFS | Название |
|---|---|---|
| **55.T** | Theorem~\ref{thm:horizontal} | Горизонтальная (по $S \in \RS$) |
| **59.T.1** | Theorem~\ref{thm:vertical} | Вертикальная (по $n \in \mathbb{N} \cup \{\infty\}$) |
| **69.T** | Theorem~\ref{thm:meta-vertical} | Мета-вертикальная (по $\mu$-итерациям) |
| **84.T** | Theorem~\ref{thm:lateral} | Латеральная (альтернативные порядки) |
| **87.T** | Theorem~\ref{thm:completeness} | Полнота (Lawvere-scope) |
| (вспом.) | Lemma~\ref{lem:lawvere-inf} | $(\infty,\infty)$-Lawvere fixed-point |

### Три пути обхода

| Diakrisis | MSFS | Путь |
|---|---|---|
| **57.T + 56.C1 + 61.T + 94.T** | Theorem~\ref{thm:universe} | Полиморфизм универсумов (через straightening) |
| **19.T1 + 31.T3 + 68.T + 69.T + 90.T** | Theorem~\ref{thm:reflective} | Рефлексивные башни (в пределах одного недостижимого) |
| **98.T** | Theorem~\ref{thm:I-existence} | Построение функтора интенсионального уточнения $\II$ |
| **99.T** | Theorem~\ref{thm:slice-locality} | Slice-локальность $\II$ (через топос $\mathrm{Eff}$ Хайланда) |

### Структура Level 5+ — основной математический вклад

| Diakrisis | MSFS | Название |
|---|---|---|
| **100.T** | Theorem~\ref{thm:meta-cat} | Условная мета-категоричность (через Grothendieck–Lurie straightening) |
| **101.T** | Theorem~\ref{thm:meta-mult} | Структурный плюрализм ($\infty$-cosmoi / UF / cohesive pairwise $2$-неэквивалентны) |
| **102.T** | Theorem~\ref{thm:meta-stab} | Theory-level meta-stabilization с universe-ascent ($\kappa_1 < \kappa_2 < \ldots$) |
| **68.T** | Theorem~\ref{thm:bergner-lurie-stab} | $(\infty,\infty)$-стабилизация (Barwick–Schommer-Pries) |

### Maximality proofs (Diakrisis-only, не в MSFS)

| Diakrisis | Соответствие в MSFS | Название |
|---|---|---|
| **103.T** | (Max-1) в Definition `def:maximality` | Universal articulation: $\mathrm{Artic}: \mathcal{F} \to \langle\!\langle \cdot \rangle\!\rangle$ существенно-сюръективен |
| **104.T** | (Max-2) в Definition `def:maximality` | Gauge-fullness: $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$ |
| **105.T** | (Max-3) в Definition `def:maximality` | Универсальная парадокс-иммунность через Yanofsky 2003 |
| **106.T** | Ответ на открытый вопрос после Theorem~\ref{thm:meta-cat} («$\mathcal{L}_{\mathrm{Cls}}^{\top}$ non-empty?») | Сводная: $\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}$ |

**Граница**: MSFS намеренно оставляет непустоту $\mathcal{L}_{\mathrm{Cls}}^{\top}$ открытым вопросом для рецензионной чистоты (теорема о существовании представителя — внешняя по отношению к классификации). Diakrisis даёт свидетеля (саму себя) через явную конструкцию 103.T–106.T. Это — пример Diakrisis > MSFS: расширение за счёт специфической аксиоматики (T-2f\*) и внутренней метакатегории ⟪⟫, которых в MSFS нет.

### Вспомогательные

| Diakrisis | MSFS | Содержание |
|---|---|---|
| **29.T–30.T** (universal foundation, reconstruction) | основа §3 (R-S), §5 (лемма $S$-definability) | Переформулированы как Definition~\ref{def:rs}, Lemma~\ref{lem:SS-membership} |
| **43.T1** (classifying space) | Convention~\ref{conv:notation} ($\fM$ через Grothendieck construction) | $\mathfrak{M}_\mathrm{Fnd}$ = $\fM$ |
| **45.T** (derivable structures) | Охвачено общей $\cS_S^{\mathrm{global}}$ | Def~\ref{def:SS} |
| **76.T** ($(\Pi_3\text{-max})$ предикативная форма) | Remark~\ref{rem:direct-infty-scope} (для constructive $S$) | Restriction |
| **88.T** (internal categoricity) | Охватывается Theorem~\ref{thm:meta-cat} | Частный случай |
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
| Max-1..Max-4 | Definition~\ref{def:maximality} | Max-3 формализована как depth-filtration (Remark~\ref{rem:max3-paradox-immunity}) |
| $\mathfrak{Meta}_{5+}$ | $\mathfrak{Meta}_{\mathrm{Cls}} = \mathcal{L}_{\mathrm{Cls}}$ | То же (переименовано в MSFS audit14) |
| $\mathfrak{Meta}_{5+}^{\max}$ | $\mathfrak{Meta}_{\mathrm{Cls}}^{\top} = \mathcal{L}_{\mathrm{Cls}}^{\top}$ | То же (переименовано в MSFS audit14) |
| T-2f\* (locally stratified completion) | (Max-3) depth filtration | Эквивалентная формулировка |

---

## Иерархия уровней

**MSFS** формализует **четыре страты** через мнемонические индексы (Definition~\ref{def:hierarchy}, post-audit14):

- $\mathcal{L}_{\mathrm{Fnd}}$ — Rich-foundations (формально через (R1)–(R5))
- $\mathcal{L}_{\mathrm{Cls}}$ — классификаторы (формально через (M1)–(M5))
- $\mathcal{L}_{\mathrm{Cls}}^{\top}$ — максимальные классификаторы ((Max-1)–(Max-4))
- $\mathcal{L}_{\mathrm{Abs}} = \emptyset$ — по AFN-T (forbidden absolute foundation)

**Diakrisis** использует внутреннюю расширенную шкалу $\mathcal{L}_0, \mathcal{L}_1, \mathcal{L}_2, \mathcal{L}_3, \mathcal{L}_4, \mathcal{L}_5, \mathcal{L}_{5+}, \mathcal{L}_{5+}^{\max}, \mathcal{L}_6$ через $\nu$-инвариант ([`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy)). Соответствие:

| Diakrisis | MSFS (audit14) | Комментарий |
|---|---|---|
| $\mathcal{L}_5$ | $\mathcal{L}_{\mathrm{Fnd}}$ | Rich-foundation |
| $\mathcal{L}_{5+}$ | $\mathcal{L}_{\mathrm{Cls}}$ | Classifier |
| $\mathcal{L}_{5+}^{\max}$ | $\mathcal{L}_{\mathrm{Cls}}^{\top}$ | Maximal classifier |
| $\mathcal{L}_6$ | $\mathcal{L}_{\mathrm{Abs}}$ | Forbidden absolute foundation |
| $\mathcal{L}_0, \mathcal{L}_1, \mathcal{L}_2, \mathcal{L}_3, \mathcal{L}_4$ | (отсутствуют в MSFS) | Diakrisis-only, через $\nu$-инвариант |

**Обоснование мнемонической нотации** (audit14 response): MSFS §2.3 даёт формальное обоснование через Proposition~\ref{prop:no-collapse} (non-collapse of the horizontal meta at $\mathcal{L}_{\mathrm{Fnd}}$) и theory-level stabilization (Theorem~\ref{thm:meta-stab}). Мнемонические subscripts ($\mathrm{Fnd}$, $\mathrm{Cls}$, $\top$, $\mathrm{Abs}$) устраняют социологическую нумерацию «5/5+/6» в пользу категорно-прозрачных обозначений.

---

## Позиционирование относительно предшествующих работ

MSFS §10.5 явно фиксирует позиционирование относительно:

- **Ernst 2015** «The Prospects of Unlimited Category Theory» — ближайший формальный предшественник; Ernst — специальный случай граничной леммы при ограничении на категорные R-S с (R1)–(R3) Фефермана.
- **Hamkins 2012** set-theoretic multiverse — комплементарная позиция (методологический плюрализм); мультивселенная как кандидат на Level-6 исключена граничной леммой.
- **Barwick–Schommer-Pries 2021** unicity — совместима (одно-парадигмальная единственность внутри $(\infty, n)$-Cat; используется как техническая лемма Theorem~\ref{thm:bergner-lurie-stab}, критична для (iv) — theory-level stabilization).

Diakrisis **не дублирует** это позиционирование; отсылает к §10.5 препринта.

## Архитектурное соответствие препринта

Препринт построен по принципу **«moduli space primary, boundary lemma secondary»**: основной математический вклад — классификация структуры $\fM$ (четыре результата (i)–(iv) в Abstract), AFN-T — граничное следствие. Diakrisis следует тому же принципу: центральные результаты — плюрализм Level 5+ (101.T), условная мета-категоричность (100.T), slice-локальность $\II$ (99.T), theory-level meta-stabilization (102.T), UFH (85.T); AFN-T — структурная граница этой архитектуры.

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

**При разработке:** изменения в формальных теоремах иерархии уровней, AFN-T абсолютности, bypass closures, или meta-классификации должны вноситься **сначала в препринт**, затем отражаться в Diakrisis через обновление этой таблицы (в случае переопределения labels).
