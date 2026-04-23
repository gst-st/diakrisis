---
sidebar_position: 2
title: Архитектура — три слоя
---

# Архитектура Noesis

## Обзор

Noesis построен как **трёхслойная** система с чётким разделением ответственности. Каждый слой имеет конкретную роль, стабильный интерфейс, и реализуется независимо.

```
┌──────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                     │
│  Editors · Graph viz · Status tables · Agent dialog      │
└────────────────────────────┬─────────────────────────────┘
                             │ NP (Noesis Protocol, JSON-RPC)
┌────────────────────────────┴─────────────────────────────┐
│                      Noesis.Core                         │
│  ┌──────────┬──────────┬──────────┬──────────────────┐   │
│  │ Primitive│ Category │ Agent    │ Federation       │   │
│  │ Engine   │ Engine   │ Engine   │ Engine (phase 4) │   │
│  └──────────┴──────────┴──────────┴──────────────────┘   │
│       Language: Verum (dependent types + SMT + GPU)      │
└────────────────────────────┬─────────────────────────────┘
                             │
┌────────────────────────────┴─────────────────────────────┐
│                    STORAGE LAYER                         │
│  Markdown+YAML · SQLite index · Git versioning           │
│  Optional: distributed sheaf (federation)                │
└──────────────────────────────────────────────────────────┘
```

## Слой представления (Presentation Layer)

### Панели

**5 канонических панелей** как проекции единого объекта Noesis.Core:

#### 1. Панель редактора
- Markdown-редактор с валидацией в реальном времени.
- Автодополнение для ссылок на утверждения.
- Подсветка синтаксиса для YAML-фронтматтера.
- Встроенные статус-метки ([Т·L1], [П·L3], и т.д.).
- Проверка зависимостей в реальном времени.

#### 2. Панель графа
- Визуализация гиперграфа.
- Узлы окрашены по статусу.
- Типы рёбер различимы (requires, entails, translates, contradicts).
- Масштабирование: уровень утверждения → уровень теории → уровень домена → уровень федерации.
- Интерактивная навигация.

#### 3. Панель статусов
- Табличное представление с фильтрами.
- Столбец на каждый атрибут (статус, уровень строгости, тип, число зависимостей).
- Сортируемые, с поиском.
- Прямая ссылка в редактор.
- Аудит-история на каждое утверждение.

#### 4. Панель федерации
- Карта доменов знаний (теории как блоки).
- Функторы между ними (стрелки, толщина = уверенность).
- Тепловая карта препятствий.
- Кластеризация по Морита-эквивалентности.
- Кросс-доменный поиск.

#### 5. Панель агента
- Чат-интерфейс с LLM-агентом.
- Контекстное окно показывает текущий фокусный граф.
- Предложения агента с встроенными метками SMT-верификации.
- Предпросмотр предложений + кнопки принять/отклонить.
- История принятых операций.

### Клиенты

- **Web-клиент** (SolidJS): основной, развёртывается как SPA.
- **Расширение VSCode**: для сценариев разработчика.
- **Плагин Claude Code**: для исследователей, использующих CLI от Claude.
- **CLI-инструмент** (команда `noesis`): операции в терминале.
- **MCP-клиент**: интеграция с произвольным ИИ-ассистентом.

Все клиенты говорят с Core через **NP** (Noesis Protocol).

## Noesis.Core

### Primitive Engine (движок примитивов)

**Назначение**: реализация канонического примитива Diakrisis (⟪⟫, 𝖬, α_math, ⊏_•).

**Структуры данных**:

```verum
type Articulation = {
    id: ArticulationId,
    claims: Set<Claim>,
    dependencies: Set<Dependency>,
    metatheory: R_S,
    rigor_levels: Map<Claim, RigorLevel>,
    gauge_class: GaugeEquivalence,
    ordinal_invariant: Ordinal,
};

type Claim = {
    id: ClaimId,
    articulation: ArticulationId,
    type: ClaimType,
    status: Status,
    rigor_level: RigorLevel,
    content: String,
    semantic_tags: Set<Tag>,
};

type Dependency = {
    source: ClaimId,
    target: ClaimId,
    type: DependencyType,
    witness: Option<Proof>,
};
```

**Операции**:
- `create_articulation(R-S, axioms) -> Articulation`
- `add_claim(articulation, claim) -> Result<Articulation, AxiomViolation>`
- `add_dependency(articulation, source, target, type) -> Result<Articulation, AcyclicityViolation>`
- `iterate_metaization(α: Articulation, k: Ordinal) -> Articulation` — применения 𝖬^k
- `project_rho(α: Articulation) -> ConcreteCategory` — ρ-проекция.
- `check_th_final(α: Articulation) -> TH_Final_Compliance`

### Category Engine (движок категорий)

**Назначение**: реализация категорных операций Diakrisis.

**Модули**:

#### Проверка Морита-эквивалентности

```verum
fn morita_check(α: Articulation, β: Articulation) -> MoritaResult {
    // Compute gauge-classes
    let g_α = compute_gauge_class(α);
    let g_β = compute_gauge_class(β);
    
    // Check equivalence
    if g_α == g_β {
        return MoritaResult::Equivalent(witness);
    }
    
    // Search for Morita-bridge
    let bridge = search_morita_bridge(α, β);
    match bridge {
        Some(b) => MoritaResult::EquivalentViaBridge(b),
        None => MoritaResult::NotEquivalent(obstruction),
    }
}
```

#### Вычисление расширения Кана

По 85.T (UFH Grothendieck-конструкция) + поточечная формула (HTT 4.3.2.7):

```verum
fn compute_lan(f: Functor, X: Presheaf) -> Presheaf {
    for b in target_category {
        let comma_cat = compute_comma(f, b);
        let restricted = restrict_to_comma(X, comma_cat);
        result[b] = colimit(restricted);
    }
    result
}
```

#### Проверка условия спуска

Когерентность как условие пучка (по 43.T1).

```verum
fn check_descent(covering: Covering, data: Data) -> DescentResult {
    // Cosimplicial limit verification
    let n = covering.size();
    for i in 0..n {
        for j in 0..n {
            check_cocycle(data[i], data[j], overlap[i,j]);
        }
    }
    // ... higher coherences
}
```

### Agent Engine (движок агента)

**Назначение**: порождающие операции на базе LLM, формализованные как Giry-монадный оракул (по NO-3).

**Архитектура**:

```
Запрос пользователя
    ↓
Сборщик контекста (подмножество графа)
    ↓
Эмбеддинг (внутренний LLM)
    ↓
Порождение кандидатов (LLM API)
    ↓
Softmax-распределение p(op | context)
    ↓
SMT-фильтр (категорные законы)
    ↓
Проверка аксиом Diakrisis
    ↓
Проверка границ TH-Final + 97.T
    ↓
Принятые операции (с сертификатами)
```

Подробно в [05 — Агент](./05-agent).

### Federation Engine (Фаза 4)

**Назначение**: распределённый Noesis — федеративная ноосфера.

**Принципы**:
- Каждый узел — независимый экземпляр Noesis.
- Синхронизация через gauge-сохраняющий протокол.
- Консенсус через условие спуска.
- Кросс-доменные запросы с сохранением конфиденциальности.

Подробно в [15 — Федерация](./15-federation).

## Слой хранения (Storage Layer)

### Markdown + YAML

Основное хранилище — **читаемый человеком markdown с YAML-фронтматтером**:

```yaml
---
id: T-96
knowledge: uhm
type: theorem
status: "T·L1"
rigor_level: L1
title: "Self-model convergence ρ* = φ(Γ)"
dependencies:
  - { id: A-Omega7, type: requires }
dependents:
  - { id: T-62, type: entails }
translations:
  - target: diakrisis:Axi-7
    functor: F_UHM_Diakrisis
    status: verified
gauge_class: "S_7 × U(1)"
---

# T-96: Self-model convergence

**Statement**: For Γ ∈ D(ℂ⁷)...
```

**Преимущества**:
- Редактируется человеком.
- Отслеживается в Git.
- Совместим с Docusaurus.
- Тривиальное резервное копирование.
- Простая миграция.

### SQLite-индекс

Для быстрых запросов — SQLite-каталог:

```sql
CREATE TABLE claims (
    id TEXT PRIMARY KEY,
    articulation TEXT,
    type TEXT,
    status TEXT,
    rigor_level TEXT,
    title TEXT,
    content TEXT,
    md_path TEXT,
    last_modified TIMESTAMP
);

CREATE TABLE dependencies (
    source TEXT,
    target TEXT,
    type TEXT,
    witness TEXT,
    PRIMARY KEY (source, target, type)
);

CREATE TABLE translations (
    source_claim TEXT,
    target_claim TEXT,
    functor TEXT,
    confidence REAL,
    obstruction REAL
);

CREATE INDEX idx_dependencies_source ON dependencies(source);
CREATE INDEX idx_dependencies_target ON dependencies(target);
```

Перестраивается из markdown при запуске или по требованию.

### Версионирование в Git

Вся история в Git:
- История на каждое утверждение.
- История на каждую теорию.
- Ветвление для исследовательских изменений.
- Слияние с обнаружением конфликтов.
- Аудит-след для корпоративного соответствия.

### Распределённый пучок (Фаза 4)

Хранилище федерации:
- Каждый узел поддерживает локальный markdown + SQLite.
- Межузловая синхронизация через NP-протокол.
- Условие спуска для согласованности.
- Шифрование при хранении и в транзите.
- Зоны конфиденциальности (публичная / приватная / разделяемая в федерации).

## Язык реализации: Verum

### Почему Verum

| Требование | Rust | Lean4 | Agda | **Verum** |
|---|---|---|---|---|
| Зависимые типы | ✗ | ✓ | ✓ | ✓ |
| SMT-верификация | FFI | FFI | ✗ | **нативно** |
| Системная производительность | ✓ | ✗ | ✗ | ✓ |
| Вычисления на GPU | FFI | ✗ | ✗ | ✓ |
| LLM-инференс | привязки | ✗ | ✗ | ✓ |
| HoTT-примитивы | ✗ | ✗ | ✓ | ✓ |
| Сертификаты доказательств | ✗ | только Lean | ✗ | 5 форматов |

**Verum — единственный** стек, одновременно покрывающий все требования.

### Стандартные компоненты Verum, используемые в Noesis

- `core/math/category.vr` — Functor, Monad, Adjunction, Yoneda, расширения Кана.
- `core/math/infinity_category.vr` — QuasiCategory, InfinityFunctor.
- `core/math/infinity_topos.vr` — Site, GrothendieckTopology, InfinityTopos.
- `core/math/hott.vr` — Equiv, Fiber, унивалентность.
- `core/math/fibration.vr` — GrothendieckFibration, Straightening.
- `core/math/kan_extension.vr` — InfLeftKanExtension, InfRightKanExtension.

### Noesis-специфичные модули (будут добавлены в Verum)

- `core/math/quantum_logic.vr` — OrthomodularLattice, EpistemicState (для Фазы 6).
- `core/math/giry.vr` — Giry-монада, LlmOracle, functor_density.
- `core/math/epistemic.vr` — тип Theory, эпистемический функтор, распространение.
- `core/math/day_convolution.vr` — для когнитивного расширения (Фаза 6).
- `core/math/morita.vr` — вычисления Морита-эквивалентности.

## Масштабируемость

### Сложность

Для N объектов знания, M утверждений на объект, D максимальной глубины зависимостей, K функторов:

| Операция | Сложность | Пример (N=30, M=100, D=5, K=100) |
|---|---|---|
| Распространение статусов (BFS) | O(N·M·D) | 15K операций, <1 мс |
| Аудит одной теории | O(M²·D) | 50K операций, <10 мс |
| Полная кросс-когерентность | O(K·M²) | 1M операций, <100 мс |
| Одно расширение Кана | O(M³·D) | 50M операций, ~5 с |
| Все попарные Кан-расширения | O(K·M³·D) | 5G операций, ~8 мин, параллельно |
| Проверка спуска (покрытие) | O(K²·M) | 1M операций, <100 мс |

Всё полиномиально; всё распараллеливается. Ленивое вычисление: расширения Кана вычисляются по требованию.

### Формальные границы сложности (доказательство NO-5)

Обоснование полиномиальных границ для каждой операции:

**Распространение статусов** — BFS в DAG зависимостей:
$$T_\text{prop} = O(|V| + |E|) = O(N \cdot M + N \cdot M \cdot D) = O(N \cdot M \cdot D)$$
(число рёбер ограничено D·M на узел, V = N·M.)

**Аудит одной теории** — попарные проверки согласованности среди M утверждений + обход зависимостей глубины D:
$$T_\text{audit} = O\left(\binom{M}{2} \cdot D\right) = O(M^2 D)$$

**Расширение Кана (поточечное)** — для каждой точки цели вычисляется копредел запятой-категории:
$$T_\text{Kan} = O\left(|B| \cdot T_\text{comma} \cdot T_\text{colim}\right) = O(M \cdot M \cdot M \cdot D) = O(M^3 D)$$

**Проверка спуска** — косимплициальный предел Чеха до тройных пересечений:
$$T_\text{descent} = O\left(\sum_{k=1}^{3} \binom{|\text{cover}|}{k} \cdot M\right) = O(K^3 M) = O(K^2 M)$$
при $K \ll$ размера.

**Результат (NO-5 формально)**: все операции в Noesis.Core полиномиальны по (N, M, D, K), что критически отличает её от **экспоненциальных** альтернатив:

- Полный поиск доказательств (сырой Lean/Coq): $O(2^\text{depth})$ в худшем случае.
- SAT-согласованность: NP-полная в общем случае.
- Проверка моделей: PSPACE.

Noesis сохраняет операции **вычислимыми** за счёт 2-категорной структуры Diakrisis — обязательства доказательств локализованы в конечных запятых-категориях, а не в глобальном поиске.

### Память

Для 1000 объектов знания × 100 утверждений × в среднем 5 зависимостей:
- Markdown-хранилище: ~500 МБ.
- SQLite-индекс: ~50 МБ.
- Рабочий набор в памяти: ~100 МБ.

Масштабируемость до 10⁶ утверждений за счёт:
- Ленивой загрузки.
- Пагинации в интерфейсе.
- Шардированного хранилища.
- Федерации для распределения нагрузки.

### Инженерия производительности

**Горячие пути**:
- Распространение статусов: BFS с мемоизацией.
- Аудит когерентности: инкрементальный, не полный пересчёт.
- Расширение Кана: кэшируется на каждый функтор.
- Запросы к графу: SQLite с индексами.

**Разгрузка на GPU** (опционально):
- Вычисление эмбеддингов.
- Поиск по сходству.
- Часть детекции Морита-эквивалентности.

## Безопасность

### Мультиарендность

- Изоляция на уровне организации.
- Права доступа на уровне пользователя.
- Контроль доступа на уровне утверждения (чтение/запись/админ).
- Аудит-следы на каждую операцию.

### Криптографические гарантии

- Подписанные коммиты (GPG).
- Подписи SMT-сертификатов.
- Протокол федерации — взаимная аутентификация.
- Шифрование при хранении для чувствительных доменов.

### Соответствие требованиям

- Соответствие GDPR, CCPA для пользовательских данных.
- SOC2 Type II для корпоративных развёртываний.
- FedRAMP для государственных развёртываний.
- HIPAA для приложений в здравоохранении.

## Топологии развёртывания

### Топология 1: Локальный одиночный пользователь

- CLI + локальное хранилище.
- Встроенный LLM (Ollama, локальный Claude).
- SQLite на одной машине.
- Случай применения: индивидуальный исследователь.

### Топология 2: Команда

- Общий сервер.
- Рабочие пространства уровня команды.
- Общее хранилище (Git + SQLite).
- LLM: облачный API или самостоятельное размещение.
- Случай применения: исследовательская группа, небольшая консалтинговая фирма.

### Топология 3: Корпоративное развёртывание

- Кластер на собственных серверах.
- Мультиарендная изоляция.
- Выделенный LLM (дообучен на доменном корпусе).
- Хранилище: распределённая файловая система.
- Резервное копирование + аварийное восстановление.
- Случай применения: крупная фарма, финансовое учреждение, аэрокосмическая отрасль.

### Топология 4: Федерация

- Несколько организаций как узлы.
- Межузловая синхронизация.
- Разделяемый граф знаний с зонами конфиденциальности.
- Консенсус по разделяемым утверждениям.
- Случай применения: академические консорциумы, промышленные альянсы.

## Следующий шаг

Для понимания модели данных: [03 — Модель знаний](./03-knowledge-model).

Для детального NP: [04 — Операции](./04-operations).

Для слоя агента: [05 — Агент](./05-agent).
