---
sidebar_position: 5
title: Соответствие корпусов MSFS/Diakrisis/Актика/УГМ/Noesis
---

# Единое соответствие корпусов

## Назначение

Единая карта ссылок между пятью корпусами программы — **MSFS**, **Diakrisis**, **Актика**, **УГМ**, **Noesis**. Для каждой теоремы указано: каноническое место, статус, тип утверждения, зависимости, и соответствия в других корпусах. Решает G5 из внутреннего аудита 2026-04-24 (отсутствие theorem-to-theorem correspondence между корпусами).

## Архитектурная позиция корпусов

```
                      MSFS (paper)
                      Sereda 2026, 57 pp
                      single-source для AFN-T, 108.T, 109.T
                              │
              ┌───────────────┼───────────────┐
              │               │               │
        Diakrisis          Актика          (Verum
        docs/*             docs/12-actic/   companion paper,
        RU-primary         §12              §3 host theorems)
        1.T–106.T          107.T–127.T
              │               │
              └───────┬───────┘
                      │
              ┌───────┴───────┐
              │               │
          УГМ            Noesis
          website/docs/  docs/11-noesis/
          T-1..T-223+    NO-1..NO-18
          α_uhm ∈ L_Cls  NO ⊂ Diakrisis-full
          ν = ω·3+1
```

**Режим single-source**: MSFS — first source для всего, что там формализовано (107.T–109.T, 100.T–102.T, AFN-T, пять осей, три bypass). Diakrisis-specific (110.T–127.T, canonical primitive, ν/ε-инварианты) — only in Diakrisis. УГМ (T-1..T-223+) — only in УГМ. Noesis (NO-1..NO-18) — factor через Diakrisis.

## Таблица соответствия

### Уровень L_Fnd (Rich-foundations)

| Тема | MSFS | Diakrisis | Актика | УГМ | Noesis |
|---|---|---|---|---|---|
| R-S conditions (R1)–(R5) | Definition~\ref{def:rs} | 03-formal-architecture | A-0..A-9 (дуал. R*1..R*5) | — | NO-8 (Rich-F агностичность) |
| ZFC как L_Fnd-точка | §3 Examples | 04-extractions/01-zfc | — | — | — |
| HoTT как L_Fnd-точка | §3 Examples | 04-extractions/04-hott | — | — | — |
| MLTT как L_Fnd-точка | §3 Examples | 04-extractions/03-mltt | — | — | — |
| CIC как L_Fnd-точка | §13 consequences | 04-extractions/05-cic | — | — | — |
| NCG как L_Fnd-точка | §13 consequences | 04-extractions/06-ncg | — | — | — |
| УГМ как L_Cls-точка | — | 05-assemblies/01-uhm (ν=ω·3+1) | 111.T (UFH-дуал) | 05-assemblies/01-uhm-docs + T-190 | — |

### Уровень L_Cls (Classifiers)

| Тема | MSFS | Diakrisis | Актика | УГМ | Noesis |
|---|---|---|---|---|---|
| M1–M5 классификаторы | Definition~\ref{def:meta} | 06-limits/09-мета-классификация | (дуал. через 108.T) | — | NO-12 (structural superiority) |
| Meta-categoricity | Theorem~
ef{thm:meta-cat} | 100.T | — | — | NO-1 (Noesis.Core уникальность) |
| Meta-multiplicity | Theorem~
ef{thm:meta-mult} | 101.T | — | — | — |
| Meta-stabilisation | Theorem~
ef{thm:meta-stab} | 102.T | 108.C5 (дуал) | — | — |
| $\infty$-cosmoi Рил–Верити | §3 examples | 04-extractions/07-cosmoi | — | — | — |
| Univalent Foundations Воеводский | §3 examples | 04-extractions/04-hott | — | — | — |
| Cohesive Шрайбер | §3 examples | 04-extractions/08-cohesive | — | — | — |

### Уровень L_Cls^⊤ (Maximal classifiers)

| Тема | MSFS | Diakrisis | Актика | УГМ | Noesis |
|---|---|---|---|---|---|
| (Max-1) universal articulation | (Max-1) в def:maximality | 103.T | (Diakrisis-only) | — | — |
| (Max-2) gauge-fullness | (Max-2) в def:maximality | 104.T | (Diakrisis-only) | — | — |
| (Max-3) парадокс-иммунность | (Max-3) в def:maximality | 105.T | 113.T (дуал. T-2a*) | — | NO-10 (Ловер-bound) |
| (Max-4) slice-locality | Theorem~
ef{thm:slice-locality} | 99.T | (Diakrisis-only) | — | — |
| Diakrisis ∈ L_Cls^⊤ | Q1 open | 106.T (свидетель, Diakrisis-only) | — | — | NO-12 |

### Уровень L_Abs (AFN-T граница)

| Тема | MSFS | Diakrisis | Актика | УГМ | Noesis |
|---|---|---|---|---|---|
| (F_S) formally definable | §4 | 06-limits/02-th-final | — | — | — |
| (Π_4) non-reducibility | §4 | 06-limits/02-th-final | — | — | — |
| (Π_3-max) maximal generativity | §4 | 06-limits/02-th-final | — | — | — |
| AFN-T (α)-part | Theorem~
ef{thm:afnt-alpha} | 06-limits/02-th-final | — | — | NO-3, NO-9, NO-17 (AFN-T filter) |
| AFN-T (β)-part | Theorem~
ef{thm:afnt-beta} | 06-limits/02-th-final | — | — | — |
| Combined AFN-T | Theorem~
ef{thm:afnt-alpha} | 06-limits/02-th-final | — | — | — |
| Five-axis absoluteness | Theorem~
ef{thm:horizontal--thm:completeness} | 55.T, 59.T.1, 69.T, 84.T, 87.T | — | — | — |
| Three bypass paths | Theorems~\ref{thm:universe}, \ref{thm:reflective}, \ref{thm:slice-locality} | 57.T, 68.T, 98.T+99.T | — | — | — |

### AC/OC Morita duality (MSFS §10)

| Тема | MSFS | Diakrisis | Актика | УГМ | Noesis |
|---|---|---|---|---|---|
| 2-категория $\cE$ | Definition~\ref{def:enactments} | $\rangle\!\rangle \cdot \langle\!\langle$ | 02-dual-primitive | — | NO-15 (Verum двойной stdlib) |
| AC/OC Morita duality | Theorem~
ef{thm:ac-oc-duality} | 108.T | 04-ac-oc-duality | ε_uhm через 108.T (05-assemblies/01-uhm §ДЦ-дуал) | — |
| Dual-AFN-T | Theorem~
ef{thm:dual-afnt} | 109.T | 05-dual-afn-t | граница амбиций УГМ (05-assemblies/01-uhm §ДЦ-дуал) | — |
| Conservativity | Corollary~\ref{cor:ac-oc-conservativity} | 107.T | 04-ac-oc-duality | — | — |
| Dual five-axis | Theorem~
ef{thm:dual-five-axis} | (вспом.) | 04-ac-oc-duality §6 | — | — |

### Diakrisis-specific Актика-теоремы (110.T–127.T, Diakrisis-only)

| Теорема | Основное место | ν/ε | Связь с MSFS | Связь с УГМ | Noesis |
|---|---|---|---|---|---|
| 110.T | 12-actic/06-actic-theorems §1 | — | дуал 43.T1 | — | — |
| 111.T | 12-actic/06-actic-theorems §2 | — | дуал 85.T | UFH-дуал | — |
| 112.T | 12-actic/06-actic-theorems §3 | ε_actic = ω·3 | дуал 103.T | — | NO-15 |
| 113.T | 12-actic/06-actic-theorems §4 | ω² | Рассел-act-immunity | — | — |
| 114.T | 12-actic/06-actic-theorems §5 | — | дуал 62.T | T-62 (CPTP) | — |
| 115.T | 12-actic/06-actic-theorems §6 | — | дуал T-96 | T-96 (ρ*=φ(Γ)) | — |
| 116.T | 12-actic/06-actic-theorems §7 | ω | дуал T-217 | T-217 (TPM) | — |
| 117.T | 12-actic/06-actic-theorems §8 | ω² | — | — | — |
| 118.T | 12-actic/06-actic-theorems §9 | — | — | — | — |
| 119.T | 12-actic/06-actic-theorems §10 | ω≤κ≤ω·3 | дуал T-124 | T-124 (Goldilocks P) | — |
| 120.T | 12-actic/06-actic-theorems §11 | — | — | — | NO-15 (formal-logic ДЦ stdlib) |
| 121.T | 12-actic/06-actic-theorems §12 | ω | — | — | — |
| 122.T | 12-actic/06-actic-theorems §13 | — | — | — | **NO-фундамент** (двумерная индексация) |
| 123.T | 12-actic/06-actic-theorems §14.1 | — | — | — | — |
| 124.T | 12-actic/06-actic-theorems §14.2 | — | $\mathsf{M} \dashv \mathsf{A}$ через 108.T | — | — |
| 125.T | 12-actic/07-beyond-metastemology §3 | ω·2+1 | — | — | — |
| 126.T | 12-actic/06-actic-theorems §14.4 | ω+k | Хинтикка–Abramsky параллель | — | — |
| 127.T | 12-actic/06-actic-theorems §14.5 | — | — | — | NO-15 (core.action.formal-logic.*) |

### УГМ-теоремы и их Diakrisis-образы

| УГМ-теорема | Статус | Diakrisis-образ | Актика-образ | Noesis-образ |
|---|---|---|---|---|
| T-96 (ρ*=φ(Γ)) | [Т] | Axi-7 на α_uhm (04.T2) | 115.T | — |
| T-58 (7D ↔ 42D Morita) | [Т] | gauge-экв. α_7D ∼ α_42D | — | — |
| T-62 (CPTP эволюции) | [Т] | Axi-2 функториальность | 114.T | — |
| T-39a (примитивность) | [Т] | отсутствие подартикуляций | — | — |
| T-124 (Goldilocks) | [Т] | нормировочный gauge | 119.T | NO-11 (когнитивное расшир.) |
| T-129 (Φ_th = 1) | [Т] | нормировочный gauge | — | NO-11 |
| T-151 (D_min = 2) | [Т] | следствие Fano | — | — |
| T-190 (axiomatic closure A1-A5 ≡ AP+PH+QG+V+MaxEnt) | [Т] | формальное замыкание α_uhm через 04.T1-T2 | — | — |
| T-217 (TPM в Standard Model) | [Т] | — | 116.T | — |
| T-222 (MRQT-Ловер, 23 монотона) | [Т] | G₂-ковариантность на α_uhm | — | — |
| T-223 (Lerchner closure, Putnam-triviality) | [Т] | three-level ontology L1/L2/L3 | — | — |
| T-193..T-197 (AGI-sufficiency) | [Т] | — | — | NO-15 (Verum-реализация) |
| T-198..T-205 (Creative ASI) | [Т]/[С] | T-205 → [С] 2026-04-17 | — | — |
| T-206..T-209 (Operational closure) | [Т] | — | — | NO-3, NO-9 |
| T-210 (Φ strict monotonicity) | [Т] | — | — | — |

### Noesis-теоремы и их Diakrisis-фундамент

| NO | Формулировка | Зависит от Diakrisis | УГМ-связь | Актика-связь |
|---|---|---|---|---|
| NO-1 | Noesis.Core существование | 88.T, 90.T | — | — |
| NO-2 | Сохранение Diakrisis-127 теорем | все | — | — |
| NO-3 | Корректность агента | A-0..A-9 + AFN-T | — | — |
| NO-4 | Замкнутость ⟪⟫_comp | Axi-4, 62.T | — | — |
| NO-5 | Полиномиальная масштабируемость | accessibility-границы | — | — |
| NO-6 | Федерация (Пронк BF1-BF5) | 43.T1 + спуск | — | — |
| NO-7 | Независимость монетизации | инвариантность инфраструктуры | — | — |
| NO-8 | Rich-F агностичность | 29.T, 97.T | — | — |
| NO-9 | Иммунитет к галлюцинациям | корректность SMT + Axi | — | — |
| NO-10 | Ловер-bound самореференции | 19.T, 87.T | — | — |
| NO-11 | Когнитивное расширение | UFH, T-129 | T-129 | — |
| NO-12 | Структурное превосходство | 43.T1 univ. property | — | — |
| NO-13 | Дефинициональная корректность | NO-3, NO-9 | — | — |
| NO-14 | Сохранение инженерного слоя | ортогональность | — | — |
| NO-15 | Verum универсальность | 29.T, 43.T1, 89.T | — | 127.T (ДЦ-stdlib) |
| NO-16 | Полнота рецензирования | NO-9, Axi-проверка | — | — |
| NO-17 | Ограниченность LLM через Giry | NO-9, монада Giry | — | — |
| NO-18 | Эквивалентность Verum ↔ Diakrisis | 89.T, Ламбек–Скотт | — | — |

## Использование этой таблицы

### При цитировании

- **Внешние публикации**: первоисточник — **MSFS** (self-contained, рецензируемый).
- **Внутренняя работа с Diakrisis**: цитируется Diakrisis-тема с cross-ref на MSFS.
- **Актика-специфика**: цитируется Diakrisis-раздел `12-actic/*` как single-source.
- **УГМ-специфика**: цитируется УГМ website/docs с cross-ref на статус-registry.
- **Noesis-специфика**: цитируется NO-теорема с Diakrisis-factorization-chain.

### При аудите

Каждая строка таблицы — потенциальный audit-check:
1. Существует ли cited label в обеих сторонах?
2. Согласован ли статус ([Т]/[С]/[Г]) через все упоминания?
3. Есть ли одно-стороннее упоминание (одна сторона ссылается, другая нет)?

### При разработке

Расширение любого корпуса (добавление теоремы, изменение статуса, переименование):
1. Изменить в каноническом месте (MSFS для MSFS-теорем, Diakrisis для Diakrisis-теорем, etc.).
2. Обновить эту таблицу, если появилась новая cross-связь.
3. Запустить Diakrisis build (`npx docusaurus build`) и MSFS build (`bun scripts/build-paper.ts`) — verifying clean rebuild.
4. Зафиксировать коммитом с описанием какие строки таблицы затронуты.

## Следующий документ

[/10-reference/00-glossary](/10-reference/00-glossary) — глоссарий терминов.
