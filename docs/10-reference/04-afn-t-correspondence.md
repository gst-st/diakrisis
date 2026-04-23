---
sidebar_position: 4
title: Соответствие AFN-T препринта
---

# Соответствие теорем Diakrisis ↔ AFN-T препринт

## Назначение документа

**AFN-T препринт** (*A No-Go Theorem for Absolute Foundations of Mathematics*, Sereda 2026) — самодостаточная формальная версия структурного ядра Diakrisis, независимая от Diakrisis-нотации. Препринт содержит формально строгое доказательство невозможности абсолютного основания математики (TH-Final, level 5+ meta-classification, три bypass-paths).

Этот документ фиксирует **точное соответствие** между теоремами Diakrisis (внутренняя нумерация `N.T`, `N.C`) и labelled results препринта (`\ref{thm:...}` и т.п.). Каждая дублируемая теорема имеет **каноническое место** в препринте; Diakrisis-корпус ссылается на препринт, не воспроизводя доказательства.

**Препринт:** `paper-en/paper.tex` (версия 1.0, 52 стр., 71 theorem-like environment, 48 bib-entries).

**Сборка:** `bun scripts/build-paper.ts` → `paper-en/afn-t-paper.pdf`.

---

## Ключевые теоремы

### TH-Final и её части

| Diakrisis | Препринт | Название | Комментарий |
|---|---|---|---|
| **TH-Neg** (α-часть) | Theorem~\ref{thm:afnt-alpha} | AFN-T $(\alpha)$-part | Формальная определимость $\Rightarrow$ Morita-редуцируемость |
| **TH-Neg-Extended** (β-часть) | Theorem~\ref{thm:afnt-beta} | AFN-T $(\beta)$-part | Transfinite limit approach закрыт; proper-class towers foreclosed via Proposition~\ref{prop:proper-class} |
| **TH-Final** | Theorem~\ref{thm:afnt} | Combined AFN-T | $\mathcal{L}_6$ структурно пуст |
| **TH-Final ABSOLUTA_TOTALIS** | Theorem~\ref{thm:five-axis} | Five-Axis Absoluteness | Пять осей абсолютности |

### Пять осей (абсолютность)

| Diakrisis | Препринт | Название |
|---|---|---|
| **55.T** | Theorem~\ref{thm:horizontal} | Horizontal (по $S \in \RS$) |
| **59.T.1** | Theorem~\ref{thm:vertical} | Vertical (по $n \in \mathbb{N} \cup \{\infty\}$) |
| **66.T** | Theorem~\ref{thm:direct-infty} + Lemma~\ref{lem:lawvere-inf} | Direct $(\infty,\infty)$ Lawvere FP (classical $S$) |
| **69.T** | Theorem~\ref{thm:meta-vertical} | Meta-vertical (по $\mu$-iterations) |
| **84.T** | Theorem~\ref{thm:lateral} | Lateral (альтернативные orderings) |
| **87.T** | Theorem~\ref{thm:completeness} | Completeness (Lawvere-scope) |

### Три bypass-paths

| Diakrisis | Препринт | Путь |
|---|---|---|
| **57.T + 56.C1 + 61.T + 94.T** | Theorem~\ref{thm:universe} | Universe polymorphism (straightening) |
| **19.T1 + 31.T3 + 68.T + 69.T + 90.T** | Theorem~\ref{thm:reflective} | Reflective towers (bounded by 1 inaccessible) |
| **98.T** | Theorem~\ref{thm:I-existence} | Intensional refinement functor $\II$ (construction) |
| **99.T** | Theorem~\ref{thm:slice-locality} | Slice-locality of $\II$ (closure) |

### Level 5+ meta-classification

| Diakrisis | Препринт | Название |
|---|---|---|
| **100.T** | Theorem~\ref{thm:meta-cat} | Conditional meta-categoricity (Lair–Makkai–Paré) |
| **101.T** | Theorem~\ref{thm:meta-mult} | Structural multiplicity ($\infty$-cosmoi, UF, cohesive) |
| **102.T** | Theorem~\ref{thm:meta-stab} | Meta-classification stabilization |
| **68.T** | Theorem~\ref{thm:bergner-lurie-stab} | $(\infty,\infty)$-stabilization (Barwick–Schommer-Pries) |

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

## Positioning против prior work

Препринт §10.5 явно fix позиционирование AFN-T относительно:

- **Ernst 2015** «The Prospects of Unlimited Category Theory» — ближайший formal precedent; Ernst — special case AFN-T restricted to categorical R-S c (R1)–(R3) Feferman.
- **Hamkins 2012** set-theoretic multiverse — complementary (methodological pluralism); multiverse как Level-6 candidate foreclosed by AFN-T.
- **Barwick–Schommer-Pries 2021** unicity — compatible (single-paradigm unicity within $(\infty, n)$-Cat; used as technical lemma Theorem~\ref{thm:bergner-lurie-stab}).

Diakrisis **не дублирует** это positioning; отсылает к §10.5 препринта.

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

**При чтении Diakrisis-доков:** встретив теорему вида **55.T**, **100.T**, **TH-Final** и т.п., см. соответствующую строку таблицы выше → перейти к препринту за полным доказательством.

**При цитировании:** для внешних публикаций предпочитаемая ссылка — AFN-T препринт (self-contained, рецензируем); Diakrisis-документы ссылаются как source-материал корпуса.

**При разработке:** изменения в формальных теоремах иерархии уровней, AFN-T абсолютности, bypass closures, или meta-классификации должны вноситься **сначала в препринт**, затем отражаться в Diakrisis через обновление этой таблицы (в случае переопределения labels).
