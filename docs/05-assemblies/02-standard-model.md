---
sidebar_position: 2
title: Стандартная модель физики
---

# Стандартная модель физики как сборка

## Статус

**[Т] + [Программа]** — α_SM теоретически установлена через α_NCG + Connes-Chamseddine spectral action (91.T + 92.T аналог). Детали SM-деривации (Gap N-04) — программа П3.

## Обзор

Стандартная Модель (SM) — экспериментально подтверждённая теория элементарных частиц и их взаимодействий. В Diakrisis: α_SM — сборка, параллельная α_uhm.

### Значение SM для Diakrisis

- **Экспериментальная валидация**: SM — одна из наиболее проверенных теорий физики.
- **Connes-Chamseddine модель**: SM выводится из NCG, что связывает её с α_NCG.
- **Связь с УГМ**: есть гипотеза эмерджентности УГМ из SM.
- **Gauge-структура**: классический пример gauge-симметрий.

## α_SM

**ν_SM ≈ ω·4** (параллельно α_uhm).

### Почему ω·4

- **Слой 1 (ω)**: базовая QFT (поля на пространстве-времени).
- **Слой 2 (ω·2)**: gauge-симметрии (U(1) × SU(2) × SU(3)).
- **Слой 3 (ω·3)**: массовый механизм (Higgs).
- **Слой 4 (ω·4)**: renormalization, unification.

### Конструкция α_SM

- **Ob(α_SM)**: фермионные + бозонные поля.
- **Hom**: gauge-преобразования, Lorentz-трансформации.
- **2-морфизмы**: natural transformations полевых конфигураций.
- **α_math**: specific spectral triple (Connes-Chamseddine).

## Структурные инварианты

- I_1: Фермионные поля (3 поколения кварков + лептонов).
- I_2: Бозонные поля (W, Z, фотон, глюоны, Хиггс).
- I_3: Gauge-группа U(1) × SU(2) × SU(3).
- I_4: Электрослабый механизм (Higgs, SSB).
- I_5: QCD (асимптотическая свобода).
- I_6: Лагранжиан SM.
- I_7: Ренормализуемость.

### Детализация

**I_1 — Фермионные поля**:
- Три поколения: (u, d, e, ν_e), (c, s, μ, ν_μ), (t, b, τ, ν_τ).
- Кварки: в представлении фундаментальном SU(3), с электрическими зарядами ±1/3, ±2/3.
- Лептоны: без цвета, заряды 0, ±1.

**I_2 — Бозонные поля**:
- **Фотон γ** (U(1)): безмассовый.
- **W±, Z⁰** (SU(2) × U(1)): massive, electroweak.
- **Глюоны** (SU(3)): 8 штук, colour charges.
- **Хиггс H**: one scalar, Higgs mechanism.

**I_3 — Gauge-группа**:
- **U(1)_Y** (hypercharge).
- **SU(2)_L** (weak isospin, left-handed).
- **SU(3)_C** (colour).
- **Полная**: U(1)_Y × SU(2)_L × SU(3)_C.

**I_4 — Электрослабый механизм**:
- SU(2) × U(1) → U(1)_em через SSB.
- Higgs vev v ≈ 246 GeV.
- W, Z получают массы через Higgs.
- Photon остаётся безмассовым.

**I_5 — QCD**:
- Strong interaction SU(3).
- Asymptotic freedom: coupling → 0 at high energy.
- Confinement: colour-singlet states only at low energy.

**I_6 — Лагранжиан SM**:
- Полный Lagrangian ℒ_SM с ~19 параметрами.
- Kinetic + gauge + Yukawa + Higgs terms.

**I_7 — Ренормализуемость**:
- SM — renormalizable.
- Divergences absorbed in parameters.
- Delicate hierarchy problem (Higgs mass).

## Gauge-структура SM.T1

**SM.T1**: 𝐆_gauge^{SM} ≅ U(1) × SU(2) × SU(3). Физические наблюдаемые = gauge-инварианты α_SM.

### Детализация

- **Gauge transformations**: локальные преобразования ψ(x) → U(x)ψ(x).
- **Gauge fields**: A_μ transforming as connection.
- **Gauge invariance**: Lagrangian инвариантен.

**В Diakrisis**:
- Gauge-группа SM — подгруппа общей gauge-группы ⟪⟫ для α_SM.
- Физические наблюдаемые ↔ gauge-инварианты ⟪⟫.

### Значение SM.T1

- **Подтверждает** общую gauge-структуру Diakrisis.
- **Конкретизирует** gauge-симметрии в SM-случае.
- **Связывает** физическую gauge-теорию с нашей формализацией.

## Связь с УГМ

**SM.T3** (из `/apeiron/04-assemblies/standard-model-progress.md`): α_SM и α_uhm связаны через общую подструктуру α_underlying.

**Гипотеза SM.H1**: УГМ эмерджентна из SM в специфическом пределе (decoherence + measurement + 7D-редукция).

### Детализация SM.H1

**Эмерджентность**:
- УГМ содержит 7D-структуру.
- SM имеет богатую структуру фермионов (3 поколения × 4 частицы = 12 массивных фермионов + 12 нейтрино + ...).
- Гипотеза: 7D УГМ — эффективное описание specific subsystem of SM.

**Конкретные шаги**:
1. Идентифицировать 7-мерное подпространство в SM.
2. Показать, что квантовая эволюция SM → CPTP на ℂ⁷.
3. Связать ℒ_Ω УГМ с ℒ_SM в пределе.

**Статус**: программа, не закрыта.

### Связь через α_NCG

- Обе сборки основаны на α_NCG.
- Но ν_NCG = ω·2 < ν_SM, ν_uhm = ω·3+1.
- Разница: SM и УГМ добавляют дополнительную структуру.

## Connes-Chamseddine подход

SM реализуется через специфическую спектральную тройку NCG с A = ℂ ⊕ ℍ ⊕ M_3(ℂ).

В Diakrisis: α_SM ⊂ α_NCG-подклассе (по 04.T2 раздел 4 extractions).

### Детализация Connes-Chamseddine модели

**Алгебра A**:
- A_F = ℂ ⊕ ℍ ⊕ M_3(ℂ).
- ℂ: trivial representation (hypercharge U(1)).
- ℍ (кватернионы): SU(2)_L structure.
- M_3(ℂ) (3×3 complex matrices): SU(3)_C.
- **Пространственная часть**: C^∞(M) — функции на пространстве-времени.
- **Полная**: A = A_F ⊗ C^∞(M).

**Dirac-оператор D**:
- D = D_F + D_M, где D_M — standard Dirac on M.
- D_F — finite part, содержит Yukawa matrices (fermion masses).

**Spectral action**:
- S(D) = Tr(f(D/Λ)).
- Разложение: Einstein-Hilbert + Yang-Mills + Higgs + Yukawa.
- **Выводит** SM + gravity из geometric spectral action.

### Значение для Diakrisis

- SM **не** постулируется, а **выводится** из geometric data.
- α_SM — специфическая gauge-class в α_NCG.
- Это — пример **производного** основания.

## Параметры SM

SM имеет **19 свободных параметров** (не выводимых из структуры):

- 9 масс фермионов.
- 4 CKM параметра (mixing).
- 2 Higgs параметра (mass, coupling).
- 3 gauge couplings.
- 1 θ_QCD.

### Проблема параметров

- Почему **именно** эти значения?
- Theoretical prediction? — programme.
- В УГМ: потенциал для выведения через 7-инвариантов.

## Известные ограничения SM

- **Не включает** gravity.
- **Не объясняет** dark matter, dark energy.
- **Не решает** strong CP problem.
- **Не объясняет** neutrino masses (добавленные ad hoc).
- **Иерархия масс**: не объяснена.

Это — открытые проблемы современной физики.

## Статус работы

Частичный прогресс. Полная формализация — открытая программа.

### Что есть

- Формулировка α_SM.
- Связь с α_NCG.
- Гипотеза SM.H1 (УГМ из SM).
- Таблица соответствий SM-Diakrisis.

### Что нужно

- Полная формализация Lagrangian SM в α_SM.
- Доказательство SM.H1 (или её опровержение).
- Связь с α_uhm детально.
- Verum-формализация (после УГМ).

### Программа работ

1. **Завершить** каталогизацию SM-структуры в Diakrisis.
2. **Формализовать** spectral action в 2-категорном контексте.
3. **Исследовать** гипотезу SM.H1.
4. **Связать** с УГМ-формализацией.

## Связь с другими физическими теориями

### General Relativity

- GR — gauge-теория Lorentz-group.
- В Diakrisis: α_GR — отдельная сборка (не разработана).
- Объединение с SM: quantum gravity — open problem.

### Quantum Gravity (various)

- Loop quantum gravity.
- String theory.
- Asymptotic safety.
- В Diakrisis: отдельные сборки, разной степени разработанности.

### BSM (Beyond Standard Model)

- SUSY, GUT, extra dimensions.
- В Diakrisis: extensions α_SM.
- Некоторые (SUSY) — close to УГМ через S₇-structure.

## Следующий документ

[/05-assemblies/03-consciousness-theories](/05-assemblies/03-consciousness-theories).
