---
sidebar_position: 15
title: Non-classical артикуляции
---

# Non-classical артикуляции

## Статус

**[Т-набр]** — новый раздел, добавлен после аудита (2026-04-22). Детальный ответ на критику — `internal/audit1-response.md`.

## Мотивация

Каталог оснований Diakrisis (раздел 04-extractions) сосредоточен на классических: ZFC, HoTT, NCG, ∞-topoi, CIC. Аудит показал, что Rich-метатеория S — **параметр** теории; 𝒮_S-класс структур меняется с S.

Этот раздел каталогизирует **non-classical** точки в 𝓜_Fnd:
- **α_linear** / **α_affine**: linear/affine logic.
- **α_AFA-coalg**: non-well-founded coalgebra (Aczel).
- **α_coinductive**: финальная коалгебра как α.

Каждая — gauge-класс в 𝓜_Fnd для соответствующей метатеории S.

## α_linear — линейная логика

### Определение

α_linear ∈ ⟪⟫ — артикуляция, реализующая Girard-linear logic с exponential `!`.

### Структура

- ρ(α_linear) ≅ symmetric monoidal closed category (SMCC).
- `!`-modality: !A ⊢ !A ⊗ !A (контракция для `!A`).
- `?`-modality: дуальна `!`.
- Quantum-like интерпретация: resources-as-states.

### Ординальная позиция

**Теорема 53.T**: ν(α_linear) = ω+1 (рядом с α_hott).

*Обоснование*: линейная логика с `!` — classical-equivalent через Girard-translation. Выразительна как HoTT+UA уровень. ∎

### Связь с TH-Final

По 50.T (S-relative): TH-Final применима к linear+! через translation. α_linear — **не** уровень 6.

### Применения

- **Quantum computing**: resources как linear types.
- **Concurrency**: linear channels (π-calculus).
- **Memory management**: ownership types (Rust, Linear Haskell).

## α_affine — аффинная логика без `!`

### Определение

α_affine ∈ ⟪⟫ — артикуляция, реализующая affine logic без exponential modality. Допускает weakening (A ⊢ ⊤), но не contraction.

### Структура

- ρ(α_affine) ≅ SMCC без `!`.
- Resources can be discarded, but not duplicated.
- Нет восстановления PA без !-operator.

### Ординальная позиция

**Теорема 54.T**: ν(α_affine) ≤ ω.

*Обоснование*: без `!` невозможна неограниченная индукция; α_affine слабее PA. ∎

**Следствие**: α_affine не Rich (не удовлетворяет R1 в сильном смысле).

### TH-Final тривиально

Для α_affine **нет** проблемы TH-Final: Π_3-max (max-генеративность Rich-оснований) недостижимо. **Тривиально** выполнено.

### Значение

α_affine — **ограничительное** основание. Полезна для:
- Формализации ресурс-чувствительных вычислений.
- Sub-recursive systems.
- Complexity-bounded formal theories (Light Linear Logic).

## α_AFA-coalg — неосновательные коалгебры

### Определение

α_AFA-coalg ∈ ⟪⟫ — артикуляция, реализующая финальную коалгебру 𝖬 в метатеории NBG + AFA (Aczel 1988).

### Структура

- S = NBG + AFA (Anti-Foundation Axiom заменяет Foundation).
- Допускаются non-well-founded sets: x = {x}, циклические графы.
- ρ(α_AFA-coalg) ≅ final coalgebra для подходящего эндо-функтора.

### Ординальная позиция

**Теорема 52.T**: ν(α_AFA-coalg) = ω·2, и Morita-редуцируема к Aczel's M-types (стандартная coalgebra theory).

*Обоснование*:
- AFA даёт coalgebraic ordinals (Aczel 1988, Barwise-Moss 1996).
- Соответствующая coalgebra определима как стандартный объект.
- Результат — в классе 𝒮_{NBG+AFA}. ∎

### Self-reference без парадоксов

**Ключевое свойство**: α_AFA-coalg поддерживает X = F(X) без Russell-парадоксов.

Это — **частный случай** T-2f\*-иммунитета в AFA-контексте. Не выход за TH-Final, а расширение каталога.

### Применения

- **Process algebra**: CCS, π-calculus.
- **Streams и infinite data**: lazy structures.
- **Modal logic**: coalgebraic semantics.

## α_coinductive — коиндуктивные типы

### Определение

α_coinductive ∈ ⟪⟫ — артикуляция, реализующая coinductive types (CoInd) в теории типов.

### Структура

- ρ(α_coinductive) ≅ category of coalgebras.
- `cofix`-combinator для бесконечных структур.
- Примеры: streams, infinite trees, processes.

### Отличие от α_AFA-coalg

- α_AFA-coalg: в set-theoretic контексте (NBG + AFA).
- α_coinductive: в type-theoretic контексте (CIC, Agda, Coq).
- **Связь**: α_coinductive Morita-эквивалентна α_AFA-coalg при подходящем gauge (связь CIC ↔ NBG+AFA через Aczel's M-types).

### Ординальная позиция

ν(α_coinductive) = ω+2 (аналогично α_CIC, с дополнительной coinductive structure).

### TH-Final

Аналогично α_AFA-coalg: Morita-редуцируема, не уровень 6.

## S-зависимость каталога

Каждая артикуляция определена при конкретной метатеории S:

| α | S | ν | 𝒮_S |
|---|---|---|---|
| α_zfc | ZFC | ω | ZFC-структуры |
| α_hott | ZFC + HoTT | ω+1 | univalent types |
| α_linear | linear + ! | ω+1 | SMCC + exponentials |
| α_affine | affine без ! | ≤ ω | SMCC без !, слабее PA |
| α_AFA-coalg | NBG + AFA | ω·2 | non-well-founded sets |
| α_coinductive | CIC / type theory | ω+2 | coalgebras в types |
| α_uhm | NBG + AFA или ZFC+inacc | ω·4 | 7D CPTP |

## 𝓜_Fnd при разных S

Классифицирующее пространство 𝓜_Fnd зависит от метатеории S:

- **𝓜_Fnd[ZFC]**: «классическая» карта (α_zfc, α_etcs, α_hott, α_ncg, ...).
- **𝓜_Fnd[NBG+AFA]**: расширяет классическую, добавляет α_AFA-coalg.
- **𝓜_Fnd[HoTT]**: centered на α_hott.
- **𝓜_Fnd[linear]**: организует α_linear, α_affine + linear translates other α.

**Открытая программа**: сравнение 𝓜_Fnd при разных S — гомеоморфно ли? Какие α инвариантны между S?

## Связь с TH-Final

По уточнённой формулировке (50.T):
> TH-Final выполняется для всех Rich-метатеорий S с contraction (или достаточным `!`).

Все α из этого раздела — **внутри** Trace(𝖠) при соответствующем S, не выход за 𝓜_Fnd.

## Открытые вопросы

- **Q-A** (audit-prompted): существует ли Rich S', в которой TH-Final опровергается?
- **Q-B**: какова структура 𝓜_Fnd при variably S?
- **Q-C**: связь α_uhm с α_AFA-coalg через UHM-coalgebra?
- **Q-D**: можно ли формализовать Диакрисис как α_linear с дополнительной структурой?

## Признанные редукции

- **Girard (1987)**: linear logic.
- **Lafont (1988)**: Light Linear Logic.
- **Aczel (1988)**: Non-Well-Founded Sets (AFA).
- **Barwise-Moss (1996)**: Vicious Circles.
- **Jacobs (2016)**: Introduction to Coalgebra.
- **Abadi-Cardelli (1996)**: foundations of objects через coalgebra.

## Итог

Non-classical артикуляции — **расширение** каталога, **не** выход за TH-Final. Они:
- Демонстрируют S-зависимость 𝓜_Fnd.
- Дают новые точки для сравнения оснований.
- Связывают Diakrisis с process algebra, concurrency, resource-sensitive computation.
- Обогащают программу Пути Б (УГМ ↔ AFA-coalg?).

TH-Final сохраняет силу для всех проверенных S. Открытая программа: поиск S, в которой TH-Final не работает (Q-A).

## Следующий раздел

[/04-extractions/00-overview](/04-extractions/00-overview).
