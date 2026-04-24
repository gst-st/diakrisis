---
sidebar_position: 4
title: ∞-Topos Lurie
---

# ∞-Topos как извлечение

## Статус

**[Т-набр]**.

## Обзор

∞-Топосы (Lurie HTT, 2009) — обобщение теории топосов на (∞,1)-категорный контекст. Объединяют high-level category theory с homotopy theory. В Diakrisis: α_∞topos.

### Значение ∞-топосов

- **Универсальная структура**: включает HoTT, классические топосы, derived algebraic geometry.
- **Homotopy-когерентный**: все структуры «до гомотопии».
- **Современный стандарт**: основное средство higher category theory.
- **Физические приложения**: supergeometry, quantum field theory.

## α_∞topos

ν_{α_∞topos} = ω·2.

### Почему ω·2

- **ω**: базовая категорная структура.
- **+ω**: (∞,1)-расширение — «всё до гомотопии».
- **Равно α_NCG по ν**: обе имеют двойную структуру.

### Конструкция α_∞topos

- **Ob(α_∞topos)**: ∞-топосы.
- **Hom**: геометрические морфизмы ∞-топосов.
- **Высшие морфизмы**: естественные ∞-преобразования.
- **α_math**: выделенный ∞-топос (например, ∞Grpd).

## Lurie HTT conditions (6.1.0.6)

(∞,1)-категория ℰ — ∞-топос ⇔:
1. Presentability.
2. Все малые колимиты.
3. Descent.
4. Effective unions.
5. Coproduct disjointness.

Эти 5 условий — в Diakrisis — часть Axi-1..Axi-9 при специализации.

### Детализация условий

**Presentability**:
- ℰ — presentable (∞,1)-category.
- Аналог locally presentable category в 1-категорном случае.
- В Diakrisis: соответствует Axi-4 (accessibility).

**Все малые колимиты**:
- ℰ кокомплетна.
- В Diakrisis: частично — Axi-9 (достаточность).

**Descent**:
- Условие, что глобальные объекты склеиваются из локальных.
- В Diakrisis: связано с функториальностью ρ.

**Effective unions**:
- Quotients по equivalence relations — корректно образуются.
- В Diakrisis: связано с 2-категорной структурой Hom.

**Coproduct disjointness**:
- A ⊔ B ← A и A ⊔ B ← B — независимы.
- Стандартное условие.

### Соответствие в Diakrisis

| Lurie условие | В Diakrisis |
|---|---|
| Presentability | Axi-4 (accessibility) |
| Small colimits | Структурное свойство ⟪⟫ |
| Descent | Функториальность ρ |
| Effective unions | Axi-9 (достаточность) |
| Coproduct disjointness | Стандарт 2-категории |

Эта биекция показывает: α_∞topos естественно извлекается из общей Diakrisis-структуры.

## Descent = ρ-функториальность

**05.T2**: Lurie-descent ≡ ρ-функториальность при ω-колимитах.

### Детализация

**Descent в ∞-топосе**:
- Для covering family {U_i → U}, объект X над U восстанавливается из {X|_{U_i}} с condition.
- Это — обобщение sheaf condition на ∞-случай.

**ρ-функториальность**:
- ρ: ⟪⟫ → End(⟪⟫) — 2-функтор.
- При ω-колимитах: ρ(colim α_i) ≃ colim ρ(α_i).
- Это — **descent для ρ** на α-уровне.

Соответствие: descent в ∞-топосе ⟺ ρ-функториальность в Diakrisis.

## Truncation = Π^n

**05.T3**: n-усечение τ_{≤n} — n-кратная Π (когезивная модальность).

### Truncation

- **τ_{≤n}**: функтор, отбрасывающий информацию выше уровня n.
- τ_{≤0}: Set (дискретные).
- τ_{≤1}: обычные 1-категории.
- τ_{≤2}: 2-категории.
- И т.д.

### Соответствие

- **Π**: когезивный функтор «компонент».
- **Π^n**: n-кратное применение.
- **τ_{≤n} ≃ Π^n** (с соответствующей нормализацией).

Это — формальная связь когезии и усечение — две точки зрения на одну структуру.

## ∞-sheaves

**05.T4**: ∞-sheaf theory — специализация АПЕЙРОН-шефной структуры при α_math = α_∞topos.

### ∞-sheaf

- Обобщение обычного sheaf на ∞-топосы.
- Функтор из site в ∞-groupoids, удовлетворяющий descent.

### В Diakrisis

- Sheaf-структура — естественное следствие когезии + fibration.
- α_∞topos — специфическая α_math, где sheaf-теория работает.

## Когезивный ∞-topos Шрайбер (DCCT)

**05.T5**: Шрайбер-когезия — конкретизация АПЕЙРОН-когезии.

### DCCT

**Differential Cohomology in a Cohesive ∞-Topos** (Шрайбер 2013):
- Книга о гомотопически-когерентной математике физики.
- Систематически разрабатывает Π ⊣ ♭ ⊣ ♯ ⊣ ι структуру.
- Применения: геометрическая квантизация, supergeometry.

### Связь с Diakrisis

- Наша cohesion ([/03-formal-architecture/02-cohesion](/03-formal-architecture/02-cohesion)) — **adapted** версия Шрайбер.
- В 2-категорном контексте (не ∞-топосе).
- Совместима с gauge + fibration + modality.

## Высшие стэки

**05.T6**: higher stacks через fibration-структуру.

### Высшие стэки

- **1-stack**: обобщение sheaf для категорных данных.
- **n-stack**: для n-категорных данных.
- **∞-stack**: для ∞-категорных.

### В Diakrisis

- Наша fibration-структура ([/03-formal-architecture/03-fibration](/03-formal-architecture/03-fibration)) — базовая для stacks.
- 2-fibration + gauge → 2-stacks.
- ∞-обобщение — программа.

## HoTT как внутренний язык

**05.T7**: α_HoTT ⊏_κ α_∞topos.

### Детализация

- HoTT — внутренний язык ∞-топоса (с univalent universe).
- Каждый ∞-топос с univalent universe даёт модель HoTT.
- Не все ∞-топосы — HoTT (нужна univalence).

### В Diakrisis

- α_HoTT ⊏_κ α_∞topos для некоторого κ (HoTT — частный случай ∞-topos).
- Но: α_HoTT **не** Морита-эквивалентен α_∞topos (HoTT строже).

## Признанные редукции

- Lurie HTT — подробная известная теория.
- Шрайбер DCCT — известна.

### Источники

- **Lurie (2009)**: Higher Topos Theory (HTT).
- **Lurie (2017+)**: Higher Algebra.
- **Шрайбер (2013)**: DCCT.
- **Rezk (2010)**: n-topoi.
- **Toën-Vezzosi (2005)**: Segal topoi.

### Что **не** стандартно

- Применение ∞-topos theory к анализу оснований (не физики).
- Интеграция с gauge + fibration + modality одновременно.
- Связь с УГМ (физический аспект).

## Специфика α_∞topos в Diakrisis

### Техническая мощь

- ∞-topoi — **одна из самых мощных** структур современной математики.
- Позволяют работать с «derived» объектами (derived categories, derived functors).
- Естественны для homotopical algebra.

### Связь с физикой

- Через DCCT: physics в cohesive ∞-topos.
- Gauge theory, general relativity, QFT — формализуемы.
- УГМ — специфический вариант.

### Ограничения для Diakrisis

- ∞-topos theory — **слишком** богата для базового Diakrisis.
- Мы работаем в 2-категории ⟪⟫, не в ∞-категории.
- Расширение до ∞-Diakrisis — программа.

## Программы расширения

### ∞-Diakrisis

- Переход от 2-категории ⟪⟫ к (∞,1)-категории.
- Все аксиомы — с гомотопической когерентность.
- Ожидаемый результат: более богатая теория, с связью к Lurie.

### HoTT-based Diakrisis

- Формализация в HoTT вместо 2-category theory.
- Univalence как центральная gauge-симметрия.
- Путь к полной HoTT-формализации.

Эти программы — открытые, зарезервированы для будущих сессий.

## Связь с другими извлечениями

| Извлечение | Отношение к α_∞topos |
|---|---|
| α_ZFC | α_ZFC ⊏ α_∞topos (через 1-topos) |
| α_HoTT | α_HoTT ⊏ α_∞topos (univalent) |
| α_NCG | Частично (через derived NCG) |
| α_uhm | Не включается (разная структура) |
| α_cohesion | α_cohesion ⊏ α_∞topos (Шрайбер) |

α_∞topos — **центральная** артикуляция для modern mathematical foundations.

## Следующий документ

[/04-extractions/05-cic](/04-extractions/05-cic).
