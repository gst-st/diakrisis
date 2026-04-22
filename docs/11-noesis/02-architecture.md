---
sidebar_position: 2
title: Архитектура — три слоя
---

# Архитектура Noesis

## Обзор

Noesis построен как **трёхслойная** система с чётким разделением ответственности. Каждый слой имеет конкретную роль, стабильный интерфейс, и independent'но реализуется.

```
┌──────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                     │
│  Editors · Graph viz · Status tables · Agent dialog      │
└────────────────────────────┬─────────────────────────────┘
                             │ NP (Noesis Protocol, JSON-RPC)
┌────────────────────────────┴─────────────────────────────┐
│                      NOESIS.Core                         │
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

## Presentation Layer

### Панели

**5 канонических панелей** как проекции единого объекта Noesis.Core:

#### 1. Editor Panel
- Markdown editor с live-validation.
- Auto-complete для claim references.
- Syntax highlighting для YAML frontmatter.
- Inline статус badges ([Т·L1], [П·L3], etc.).
- Real-time dependency check.

#### 2. Graph Panel
- Hypergraph visualization.
- Nodes colored по status.
- Edge types distinguished (requires, entails, translates, contradicts).
- Zoom: claim-level → theory-level → domain-level → federation-level.
- Interactive navigation.

#### 3. Status Panel
- Table view с filters.
- Column per attribute (status, rigor level, type, dependencies count).
- Sortable, searchable.
- Direct-link to editor.
- Audit history per claim.

#### 4. Federation Panel
- Map of knowledge-domains (theories as blocks).
- Functors между ними (arrows, thickness = confidence).
- Obstruction heatmap.
- Morita-equivalence clustering.
- Cross-domain search.

#### 5. Agent Panel
- Chat interface с LLM agent.
- Context window показывает текущий focus graph.
- Agent suggestions с inline SMT-verification badges.
- Proposal preview + accept/reject buttons.
- History of accepted operations.

### Клиенты

- **Web client** (SolidJS): основной, deployed as SPA.
- **VSCode extension**: for developer workflows.
- **Claude Code plugin**: for researchers using Claude's CLI.
- **CLI tool** (`noesis` command): terminal-based operations.
- **MCP client**: generic AI assistant integration.

Все клиенты говорят с Core через **NP** (Noesis Protocol).

## NOESIS.Core

### Primitive Engine

**Назначение**: реализация Diakrisis canonical primitive (⟪⟫, 𝖬, α_math, ⊏_•).

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
- `iterate_metaization(α: Articulation, k: Ordinal) -> Articulation` — 𝖬^k-applications
- `project_rho(α: Articulation) -> ConcreteCategory` — ρ-proекция.
- `check_th_final(α: Articulation) -> TH_Final_Compliance`

### Category Engine

**Назначение**: реализация категорных операций Diakrisis.

**Модули**:

#### Morita-equivalence checker

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

#### Kan extension computation

По 85.T (UFH Grothendieck-конструкция) + pointwise formula (HTT 4.3.2.7):

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

#### Descent condition checker

Coherence как sheaf-condition (по 43.T1).

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

### Agent Engine

**Назначение**: LLM-based generative operations, formalized как Giry-monadic oracle (по NO-3).

**Архитектура**:

```
User Query
    ↓
Context builder (graph subset)
    ↓
Embedding (LLM internal)
    ↓
Candidate generation (LLM API)
    ↓
Softmax distribution p(op | context)
    ↓
SMT gate (categorical laws)
    ↓
Diakrisis axiom check
    ↓
TH-Final + 97.T bounds check
    ↓
Accepted operations (with certificates)
```

Подробно в [05 — Agent](./05-agent).

### Federation Engine (Phase 4)

**Назначение**: распределённый Noesis — federated noosphere.

**Принципы**:
- Каждый node — independent Noesis instance.
- Sync через gauge-preserving protocol.
- Consensus через descent-condition.
- Privacy-preserving cross-domain queries.

Подробно в [15 — Federation](./15-federation).

## Storage Layer

### Markdown + YAML

Primary storage — **human-readable markdown с YAML frontmatter**:

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
- Human-editable.
- Git-trackable.
- Docusaurus-compatible.
- Backup trivial.
- Migration simple.

### SQLite index

Для быстрых queries — SQLite каталог:

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

Rebuilt from markdown on startup or on-demand.

### Git versioning

Вся history в Git:
- Per-claim history.
- Per-theory history.
- Branching для exploratory changes.
- Merging с conflict detection.
- Audit trail for enterprise compliance.

### Distributed sheaf (Phase 4)

Federation storage:
- Each node maintains local markdown+SQLite.
- Cross-node sync через NP protocol.
- Descent condition для consistency.
- Encryption at rest + in transit.
- Privacy zones (public / private / federation-shared).

## Язык реализации: Verum

### Почему Verum

| Требование | Rust | Lean4 | Agda | **Verum** |
|---|---|---|---|---|
| Dependent types | ✗ | ✓ | ✓ | ✓ |
| SMT verification | FFI | FFI | ✗ | **native** |
| Systems performance | ✓ | ✗ | ✗ | ✓ |
| GPU compute | FFI | ✗ | ✗ | ✓ |
| LLM inference | bindings | ✗ | ✗ | ✓ |
| HoTT primitives | ✗ | ✗ | ✓ | ✓ |
| Proof certificates | ✗ | Lean only | ✗ | 5 formats |

**Verum — единственный** stack, покрывающий все требования simultaneous.

### Verum std components используемые в Noesis

- `core/math/category.vr` — Functor, Monad, Adjunction, Yoneda, Kan extensions.
- `core/math/infinity_category.vr` — QuasiCategory, InfinityFunctor.
- `core/math/infinity_topos.vr` — Site, GrothendieckTopology, InfinityTopos.
- `core/math/hott.vr` — Equiv, Fiber, univalence.
- `core/math/fibration.vr` — GrothendieckFibration, Straightening.
- `core/math/kan_extension.vr` — InfLeftKanExtension, InfRightKanExtension.

### Noesis-specific modules (to be added to Verum)

- `core/math/quantum_logic.vr` — OrthomodularLattice, EpistemicState (для Phase 6).
- `core/math/giry.vr` — Giry monad, LlmOracle, functor_density.
- `core/math/epistemic.vr` — Theory type, epistemic functor, propagation.
- `core/math/day_convolution.vr` — для cognitive extension (Phase 6).
- `core/math/morita.vr` — Morita-equivalence computations.

## Scalability

### Complexity

Для N knowledge-objects, M claims per object, D max dependency depth, K functors:

| Operation | Complexity | Example (N=30, M=100, D=5, K=100) |
|---|---|---|
| Status propagation (BFS) | O(N·M·D) | 15K ops, <1ms |
| Single-theory audit | O(M²·D) | 50K ops, <10ms |
| Full cross-coherence | O(K·M²) | 1M ops, <100ms |
| Single Kan extension | O(M³·D) | 50M ops, ~5s |
| All pairwise Kan | O(K·M³·D) | 5G ops, ~8min, parallel |
| Descent check (covering) | O(K²·M) | 1M ops, <100ms |

Всё polynomial; все parallelizable. Lazy evaluation: Kan extensions computed on-demand.

### Формальные границы сложности (доказательство NO-5)

Обоснование polynomial bounds для каждой операции:

**Status propagation** — BFS в DAG зависимостей:
$$T_\text{prop} = O(|V| + |E|) = O(N \cdot M + N \cdot M \cdot D) = O(N \cdot M \cdot D)$$
(edges bounded by D·M per node, V = N·M.)

**Single-theory audit** — pairwise consistency checks среди M claims + depth-D dependency traversal:
$$T_\text{audit} = O\left(\binom{M}{2} \cdot D\right) = O(M^2 D)$$

**Kan extension (pointwise)** — для каждой точки target, compute comma category colimit:
$$T_\text{Kan} = O\left(|B| \cdot T_\text{comma} \cdot T_\text{colim}\right) = O(M \cdot M \cdot M \cdot D) = O(M^3 D)$$

**Descent check** — Čech cosimplicial limit до triple overlaps:
$$T_\text{descent} = O\left(\sum_{k=1}^{3} \binom{|\text{cover}|}{k} \cdot M\right) = O(K^3 M) = O(K^2 M)$$
при $K \ll$ size.

**Результат (NO-5 formal)**: все operations в Noesis.Core polynomial в (N, M, D, K), что критически отличает её от **exponential** alternatives:

- Full proof search (raw Lean/Coq): $O(2^\text{depth})$ в worst case.
- SAT-based consistency: NP-complete в general.
- Model checking: PSPACE.

Noesis keeps operations **tractable** за счёт Diakrisis 2-categorical structure — proof obligations локализованы в finite comma categories, not global search.

### Memory

Для 1000 knowledge-objects × 100 claims × avg 5 dependencies:
- Markdown storage: ~500 MB.
- SQLite index: ~50 MB.
- Memory working set: ~100 MB.

Scalability до 10⁶ claims за счёт:
- Lazy loading.
- Pagination в UI.
- Sharded storage.
- Federation для distributed load.

### Performance engineering

**Hot paths**:
- Status propagation: BFS с memoization.
- Coherence audit: incremental, не full-rescan.
- Kan extension: cached per functor.
- Graph queries: SQLite с indices.

**GPU offload** (optional):
- Embedding computation.
- Similarity search.
- Some Morita-equivalence detection.

## Security

### Multi-tenancy

- Organization-level isolation.
- User-level permissions.
- Claim-level access control (read/write/admin).
- Audit trails per operation.

### Cryptographic guarantees

- Signed commits (GPG).
- SMT certificate signatures.
- Federation protocol — mutual authentication.
- At-rest encryption для sensitive domains.

### Compliance

- GDPR, CCPA compliance для user data.
- SOC2 Type II for enterprise deployments.
- FedRAMP for government deployments.
- HIPAA для healthcare applications.

## Deployment topologies

### Topology 1: Single-user local

- CLI + local storage.
- Embedded LLM (Ollama, local Claude).
- Single-machine SQLite.
- Use case: individual researcher.

### Topology 2: Team

- Shared server.
- Team-scoped workspaces.
- Shared storage (Git + SQLite).
- LLM: cloud API or self-hosted.
- Use case: research group, small consulting firm.

### Topology 3: Enterprise

- On-premises cluster.
- Multi-tenant isolation.
- Dedicated LLM (fine-tuned на domain corpus).
- Storage: distributed filesystem.
- Backup + disaster recovery.
- Use case: Big Pharma, financial institution, aerospace.

### Topology 4: Federation

- Multiple organizations as nodes.
- Cross-node sync.
- Shared knowledge-graph с privacy zones.
- Consensus on shared claims.
- Use case: academic consortia, industry alliances.

## Следующий шаг

Для понимания модели данных: [03 — Модель знаний](./03-knowledge-model).

Для детального NP: [04 — Операции](./04-operations).

Для агент-layer: [05 — Агент](./05-agent).
