---
sidebar_position: 4
title: Соответствие препринта Moduli Space of Formal Systems
---

# Соответствие теорем Diakrisis ↔ препринт

## Назначение документа

**Препринт** (*The Moduli Space of Formal Systems: Classification, Stabilization, and a No-Go Theorem for Absolute Foundations*, Sereda 2026) — самодостаточная формальная версия структурного ядра Diakrisis, независимая от Diakrisis-нотации. Препринт развивает структурную теорию $(\infty, n)$-классифицирующего $2$-стека $\fM$ Rich-оснований: (i) плюрализм Level 5+ ($\infty$-cosmoi / UF / cohesive pairwise non-$2$-эквивалентны), (ii) условную meta-категоричность через Grothendieck-Lurie straightening, (iii) slice-local intensional refinement через эффективный топос Hyland, (iv) theory-level meta-stabilization с universe-ascent по $\kappa_1 < \kappa_2 < \cdots$. В качестве boundary corollary закрывается Level-6 stratum (AFN-T), унифицируя классическую no-go серию Cantor–Russell–Gödel–Tarski–Lawvere–Ernst.

Этот документ фиксирует **точное соответствие** между теоремами Diakrisis (внутренняя нумерация `N.T`, `N.C`) и labelled results препринта (`\ref{thm:...}` и т.п.). Каждая дублируемая теорема имеет **каноническое место** в препринте; Diakrisis-корпус ссылается на препринт, не воспроизводя доказательства.

**Препринт:** `paper-en/paper.tex` (версия 2.0, 47 стр., 54 theorem-like environment, 47 bib-entries).

**Сборка:** `bun scripts/build-paper.ts` → `paper-en/afn-t-paper.pdf`.

---

## Ключевые теоремы

### Граничная лемма (AFN-T) и её части

| Diakrisis | Препринт | Название | Комментарий |
|---|---|---|---|
| **AFN-T (α-часть)** (α-часть) | Theorem~\ref{thm:afnt-alpha} | Boundary Lemma: Emptiness of Level 6 ((α)-Part) | Синтаксис-семантический мост: $(F_S) \Rightarrow X \in \cS_S^{\mathrm{global}}$, $\id_X$ нарушает $(\Pi_4)$ |
| **AFN-T (β-часть)** (β-часть) | Theorem~\ref{thm:afnt-beta} | Boundary Lemma: No Limit-Based Escape ((β)-Part) | Трансфинитные приближения остаются в $\cS_S^{\mathrm{global}}$; proper-class-башни через Proposition~\ref{prop:proper-class} |
| **AFN-T** | Theorem~\ref{thm:afnt} | Combined AFN-T | $\mathcal{L}_6$ структурно пуст как следствие |
| **пятиосевая абсолютность AFN-T** | Theorem~\ref{thm:five-axis} | Five-Axis Absoluteness | Пять осей абсолютности граничной леммы |

### Пять осей абсолютности

| Diakrisis | Препринт | Название |
|---|---|---|
| **55.T** | Theorem~\ref{thm:horizontal} | Горизонтальная (по $S \in \RS$) |
| **59.T.1** | Theorem~\ref{thm:vertical} | Вертикальная (по $n \in \mathbb{N} \cup \{\infty\}$) |
| **69.T** | Theorem~\ref{thm:meta-vertical} | Мета-вертикальная (по $\mu$-итерациям) |
| **84.T** | Theorem~\ref{thm:lateral} | Латеральная (альтернативные порядки) |
| **87.T** | Theorem~\ref{thm:completeness} | Полнота (Lawvere-scope) |
| (вспом.) | Lemma~\ref{lem:lawvere-inf} | $(\infty,\infty)$-Lawvere fixed-point |

### Три пути обхода

| Diakrisis | Препринт | Путь |
|---|---|---|
| **57.T + 56.C1 + 61.T + 94.T** | Theorem~\ref{thm:universe} | Полиморфизм универсумов (через straightening) |
| **19.T1 + 31.T3 + 68.T + 69.T + 90.T** | Theorem~\ref{thm:reflective} | Рефлексивные башни (в пределах одного недостижимого) |
| **98.T** | Theorem~\ref{thm:I-existence} | Построение функтора интенсионального уточнения $\II$ |
| **99.T** | Theorem~\ref{thm:slice-locality} | Slice-локальность $\II$ (через топос $\mathrm{Eff}$ Хайланда) |

### Структура Level 5+ — основной математический вклад

| Diakrisis | Препринт | Название |
|---|---|---|
| **100.T** | Theorem~\ref{thm:meta-cat} | Условная мета-категоричность (через Grothendieck–Lurie straightening) |
| **101.T** | Theorem~\ref{thm:meta-mult} | Структурный плюрализм ($\infty$-cosmoi / UF / cohesive pairwise $2$-неэквивалентны) |
| **102.T** | Theorem~\ref{thm:meta-stab} | Theory-level meta-stabilization с universe-ascent ($\kappa_1 < \kappa_2 < \ldots$) |
| **68.T** | Theorem~\ref{thm:bergner-lurie-stab} | $(\infty,\infty)$-стабилизация (Barwick–Schommer-Pries) |

### Вспомогательные

| Diakrisis | Препринт | Содержание |
|---|---|---|
| **29.T–30.T** (universal foundation, reconstruction) | основа §3 (R-S), §5 (лемма $S$-definability) | Переформулированы как Definition~\ref{def:rs}, Lemma~\ref{lem:SS-membership} |
| **43.T1** (classifying space) | Convention~\ref{conv:notation} ($\fM$ через Grothendieck construction) | $\mathfrak{M}_\mathrm{Fnd}$ = $\fM$ |
| **45.T** (derivable structures) | Охвачено общей $\cS_S^{\mathrm{global}}$ | Def~\ref{def:SS} |
| **76.T** ($(\Pi_3\text{-max})$ предикативная форма) | Remark~\ref{rem:direct-infty-scope} (для constructive $S$) | Restriction |
| **88.T** (internal categoricity) | Охватывается Theorem~\ref{thm:meta-cat} | Частный случай |
| **90.T** (proof-theoretic strength) | Abstract + Convention~\ref{conv:zfc-inacc} ($\Con(\ZFC + 2\text{-inacc})$) | Константа |

---

## Соответствие определений

| Diakrisis | Препринт | Объект |
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
| $\mathfrak{Meta}_{5+}$ | $\Meta_{5+} = \mathcal{L}_{5+}$ | То же |
| $\mathfrak{Meta}_{5+}^{\max}$ | $\Meta_{5+}^{\max} = \mathcal{L}_{5+}^{\max}$ | То же |
| T-2f\* (locally stratified completion) | (Max-3) depth filtration | Эквивалентная формулировка |

---

## Иерархия уровней

Формальные уровни препринта (Definition~\ref{def:hierarchy}):

- $\mathcal{L}_0, \mathcal{L}_1, \mathcal{L}_2, \mathcal{L}_3, \mathcal{L}_4$ — descriptive (Remark~\ref{rem:formality-spectrum})
- $\mathcal{L}_5$ — Rich-foundations (формально через (R1)–(R5))
- $\mathcal{L}_{5+}$ — meta-frameworks (формально через (M1)–(M5))
- $\mathcal{L}_{5+}^{\max}$ — максимальные meta-frameworks ((Max-1)–(Max-4))
- $\mathcal{L}_6 = \emptyset$ — по AFN-T

**Соответствие с Diakrisis-терминологией**: уровни 0–5+ в точности совпадают. $\mathcal{L}_{5+}^{\max}$ в препринте эквивалентен «максимальному подклассу $\mathfrak{Meta}_{5+}^{\max}$» Diakrisis.

**Обоснование нотации** (почему «5+», а не «6», и почему нет «1+, 2+, 3+, 4+»): препринт §2.3 «On the Indexing Scheme» даёт формальное обоснование через Proposition~\ref{prop:collapse} (collapse below Level 5) и Proposition~\ref{prop:no-collapse} (no collapse at Level 5).

---

## Позиционирование относительно предшествующих работ

Препринт §10.5 явно фиксирует позиционирование относительно:

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

**При цитировании:** для внешних публикаций предпочитаемая ссылка — AFN-T препринт (self-contained, рецензируем); Diakrisis-документы ссылаются как source-материал корпуса.

**При разработке:** изменения в формальных теоремах иерархии уровней, AFN-T абсолютности, bypass closures, или meta-классификации должны вноситься **сначала в препринт**, затем отражаться в Diakrisis через обновление этой таблицы (в случае переопределения labels).
