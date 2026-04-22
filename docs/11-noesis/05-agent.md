---
sidebar_position: 5
title: Агент — LLM как Giry-монадный оракул
---

# Noesis Agent

## Роль LLM в Noesis

**Принципиально**: LLM — **инструмент**, не источник истины.

Noesis разделяет три ответственности:

| Компонент | Что делает |
|---|---|
| **Diakrisis** | Устанавливает структурные пределы (axioms, TH-Final) |
| **SMT gate** | Формальная проверка каждой операции |
| **LLM agent** | Генерирует candidates + semantic understanding |

Agent **не** принимает решений — только **предлагает** structurally-valid candidates.

## Формализация: Giry-монадный оракул

### Теория

LLM формализуется как **стохастический оракул** через Giry monad (Giry 1982):

$$\mathcal{A}: \text{Context} \to \mathcal{G}(\text{Operations})$$

где 𝒢 — Giry monad (probability measures на measurable space operations).

### Почему Giry monad

- **Не deterministic**: LLM inherently non-deterministic.
- **Probability-based**: выходы имеют confidence.
- **Categorically natural**: monad laws satisfied.
- **Composable**: can chain LLM calls formally.
- **Measurable**: каждая операция — hedonic element of probability space.

### Giry monad laws

Пусть $(X, \Sigma_X)$ — measurable space. Обозначим $\mathcal{G}(X)$ — пространство всех probability measures на $(X, \Sigma_X)$, снабжённое σ-алгеброй порождённой evaluation-maps $\mathrm{ev}_A: \mathcal{G}(X) \to [0,1]$, $\mu \mapsto \mu(A)$ для $A \in \Sigma_X$.

**Unit** (Dirac embedding):
$$\delta_X: X \to \mathcal{G}(X), \quad \delta_X(x)(A) = \mathbf{1}_A(x) = \begin{cases} 1 & x \in A \\ 0 & x \notin A \end{cases}$$

**Multiplication** (Fubini integration):
$$\mu_X: \mathcal{G}(\mathcal{G}(X)) \to \mathcal{G}(X), \quad \mu_X(M)(A) = \int_{\mathcal{G}(X)} m(A) \, dM(m)$$

**Monad laws** (проверяются через стандартные теоремы измеримости, Giry 1982):

$$\mu_X \circ \mathcal{G}(\delta_X) = \mathrm{id}_{\mathcal{G}(X)} \quad \text{(left unit)}$$
$$\mu_X \circ \delta_{\mathcal{G}(X)} = \mathrm{id}_{\mathcal{G}(X)} \quad \text{(right unit)}$$
$$\mu_X \circ \mathcal{G}(\mu_X) = \mu_X \circ \mu_{\mathcal{G}(X)} \quad \text{(associativity)}$$

**Kleisli composition** (для composable stochastic agents): для $f: X \to \mathcal{G}(Y)$, $g: Y \to \mathcal{G}(Z)$:

$$(g \circ_\mathrm{Kl} f)(x)(C) = \int_Y g(y)(C) \, df(x)(y)$$

Это — **композиция stochastic операций**, используемая для цепочки LLM-calls (retrieval → embedding → generation → SMT-filter).

**Noesis-specific interpretation**:

- $X = \text{Context}$ — input contexts.
- $Y = \text{Operations}$ — proposed operations.
- $\mathcal{A}: \text{Context} \to \mathcal{G}(\text{Operations})$ — the agent as Kleisli morphism.
- SMT-gate $\gamma: \text{Operations} \to \mathcal{G}(\text{Operations}_\text{valid})$ — deterministic filter lifted to Kleisli (через Dirac с noise для near-valid candidates).
- Full pipeline: $\gamma \circ_\mathrm{Kl} \mathcal{A} \circ_\mathrm{Kl} \text{embed}$.

## Архитектура агента

```
╔══════════════════════════════════════╗
║       User query / system trigger    ║
╚══════════════════╤═══════════════════╝
                   ↓
┌──────────────────────────────────────┐
│      Context builder                  │
│  - Load relevant graph subset         │
│  - Add user history                   │
│  - Include current state              │
└──────────────────┬───────────────────┘
                   ↓
┌──────────────────────────────────────┐
│      LLM embedding                    │
│  - Convert claims to vectors          │
│  - Build candidate distribution       │
└──────────────────┬───────────────────┘
                   ↓
┌──────────────────────────────────────┐
│      Candidate generation             │
│  - LLM inference                      │
│  - Top-K candidates                   │
│  - Softmax probability                │
└──────────────────┬───────────────────┘
                   ↓
┌──────────────────────────────────────┐
│      SMT gate                         │
│  - Category laws check                │
│  - Functoriality                      │
│  - Naturality                         │
└──────────────────┬───────────────────┘
                   ↓
┌──────────────────────────────────────┐
│      Diakrisis compliance             │
│  - Axi-0..9 + T-α + T-2f*             │
│  - TH-Final ABSOLUTA_TOTALIS          │
│  - 97.T tradeoff                      │
└──────────────────┬───────────────────┘
                   ↓
┌──────────────────────────────────────┐
│      Accepted operations              │
│  - Confidence-ranked                  │
│  - SMT certificates                   │
│  - Presentation to user               │
└──────────────────────────────────────┘
```

## Five modes (Diakrisis-grounded extensions)

### Mode 1: Navigator

**Назначение**: navigational queries.

**Пример**:
```
User: "Где в UHM обсуждается связь φ и ρ*?"
Agent: 
  1. Search graph: find claims with tags [self-model, fixed-point].
  2. Filter: in UHM knowledge.
  3. Result: T-96, T-39, Axi-7 related.
  4. Natural language summary с references.
```

### Mode 2: Auditor

**Назначение**: coherence violation detection.

**Пример**:
```
Agent autonomously scans:
  - Status misalignment: claim X [T·L1] depends on Y [Г] → flag.
  - Circular dependencies: A→B→C→A → flag.
  - Contradictions: C1 contradicts C2, both [T] → flag.
  - Functorial misalignment: F12 ∘ F23 ≠ F13 → flag.
  - Empirical inconsistency: prediction vs experiment → flag.
```

### Mode 3: Translator

**Назначение**: cross-knowledge translation proposals.

Главная функция, невозможная без LLM.

**Пример**:
```
User: "Как перевести IIT Φ в UHM terms?"
Agent:
  1. Compute Kan extension approximation.
  2. Propose mapping: IIT:Φ → UHM:integration-measure (T-129).
  3. Confidence: 0.72.
  4. Obstruction: 0.28 (некоторые aspects lose).
  5. Alternative: IIT:Φ → UHM:Φ_th-threshold, confidence 0.45.
  6. Present both to user.
```

### Mode 4: Propagator

**Назначение**: анализ ripple effects.

**Пример**:
```
User changes: T-96 status from [T·L1] to [С·L2].
Agent:
  1. BFS-traverse dependents.
  2. Compute impact: 18 claims affected, 3 translations invalidated.
  3. Analyze: are alternative chains exist? 
     - For claim X: yes, via T-62 instead of T-96. No downgrade.
     - For claim Y: no. Downgrade required.
  4. Propose minimal set of changes.
  5. Preview for user confirmation.
```

### Mode 5: Meta-auditor (double loop, L-II)

**Назначение**: meta-level pattern detection.

**Пример**:
```
Agent observation over 6 months:
  "В 4 из 5 consciousness theories систематически отсутствует мост к empirical data."
  
Proposal: new dependency type `empirical_test` + associated status `[empirically-testable]`.

Recorded in T_meta with status [Г] (bounded by Lawvere, 87.T).
User confirms → structural extension applied.

Noesis itself evolves based on its own observations (autopoiesis, L-III).
```

## Конкретный алгоритм: functor_propose

Формализация в Verum:

```verum
fn propose_functor(
    source: Knowledge,
    target: Knowledge,
    context: Context
) -> ProbabilityDistribution<Functor> {
    // Step 1: Embed all claims
    let source_embeddings = llm.embed_all(source.claims);
    let target_embeddings = llm.embed_all(target.claims);
    
    // Step 2: Cosine similarity matrix
    let sim_matrix = cosine_matrix(source_embeddings, target_embeddings);
    
    // Step 3: Softmax over target candidates per source claim
    let mut functor_prob = ProbabilityDistribution::new();
    for src in source.claims {
        let candidates = top_k(sim_matrix[src], k=10);
        functor_prob.add_mapping(src, softmax(candidates, τ=0.3));
    }
    
    // Step 4: Structural filter — functor must preserve dependencies
    functor_prob.filter_by_functoriality();
    
    // Step 5: SMT verification on top candidates
    let top_candidates = functor_prob.top_k(5);
    for candidate in top_candidates {
        candidate.verify_with_smt();  // sets verified flag
    }
    
    // Step 6: Return verified distribution
    functor_prob.filter_verified_only()
}
```

## SMT gate: formal verification

Каждое agent-предложение проходит SMT-проверку.

**Verified properties**:

### Functoriality
```
∀F: A → B. F(id_A) = id_B
∀F: A → B, g, h: F(g ∘ h) = F(g) ∘ F(h)
```

### Naturality
```
∀natural transformation η: F ⇒ G, ∀f: A → B:
    η_B ∘ F(f) = G(f) ∘ η_A
```

### Descent condition
```
∀covering {f_i: T_i → T}:
    data on T ≅ limit of restricted data on T_i
```

### Epistemic monotonicity
```
∀interpretation functor F: T_1 → T_2, ∀claim a:
    status(F(a)) ≥ status(a)
```

### Diakrisis axioms
```
Axi-0..Axi-9 + T-α + T-2f*
```

SMT backend: **Z3** + **CVC5** с Verum's native tactic DSL.

Compilation time: ~100ms per candidate, ~5s для whole functor.

## Hallucination handling

### Classical view
LLM hallucinations — bug, требующий mitigation.

### Noesis view (по NO-9)
Hallucinations — **fluctuations в path space ∞-groupoid**. Не bug, а feature — обеспечивает exploration.

### Формальная модель hallucination

Определим **hallucination event** для output $o$ при context $c$:

$$H(o \mid c) := o \in \mathrm{supp}(\mathcal{A}(c)) \setminus \text{Operations}_\text{valid}(c)$$

где Operations_valid(c) ⊂ Operations — the set of structurally-correct operations относительно Axi-0..9 + TH-Final + context constraints.

**Naive LLM**: $\mathbb{P}(H \mid c) > 0$ для всех non-trivial $c$ (no filter).

**Noesis-gated LLM**: операция проходит pipeline $\gamma$ с SMT + Axi + TH-Final stages. Определим accepted output set:

$$\text{Accepted}(c) = \gamma^{-1}([\text{pass}]) \subseteq \mathrm{supp}(\mathcal{A}(c))$$

По конструкции γ (deterministic sound filter):

$$\text{Accepted}(c) \subseteq \text{Operations}_\text{valid}(c)$$

Следовательно:

$$\mathbb{P}(H(o) \mid o \in \text{Accepted}(c)) = 0 \quad (\text{NO-9})$$

### Контроль
1. **SMT gate** отбрасывает structurally-invalid (soundness of Z3/CVC5).
2. **Confidence threshold** фильтрует low-probability candidates (reduces false-negative на валидных).
3. **Human-in-the-loop** для final acceptance (value judgments remain external).

**Теорема NO-9**: Post-SMT, probability of accepting invalid operation = 0 (при корректном SMT backend).

**Важно**: NO-9 гарантирует **отсутствие false-positive** (invalid accepted). Не гарантирует **отсутствие false-negative** (valid rejected) — это допустимая цена soundness.

## Context management

### Context window

Agent нуждается в relevant graph subset как context.

**Strategy**:
1. Query pre-analysis (semantic extraction).
2. Initial graph pull (1-hop neighborhood).
3. Iterative expansion (if agent needs more).
4. Cap at configurable size (typical: 100 claims + dependencies).

### Context compression

Для large knowledge-bases:
- Summarize peripheral claims.
- Keep core claims in full detail.
- Include cross-theory translations.
- LLM-assisted compression.

### Memory

Agent maintains:
- Session-level: current dialogue state.
- User-level: preferences, history.
- Organization-level: shared context.
- Never: private/restricted information в cross-organization federation.

## LLM choice

### Supported models

- **Claude Opus**: primary default (Anthropic).
- **GPT-5**: alternative (OpenAI).
- **Gemini Ultra**: alternative (Google).
- **Mistral Large**: OSS alternative.
- **Local fine-tuned**: domain-specific (e.g., bio-trained LLM для pharma domain).

### Model selection strategy

- Default: Claude Opus for general queries.
- Domain-specific: fine-tuned model для specialized domains.
- Privacy-critical: local inference (Ollama, vLLM).
- Cost-optimized: lighter models для simple navigation.

### Multi-model ensemble

Для critical operations:
- Query 3 models independently.
- SMT-verify each.
- Vote on final recommendation.
- Increase confidence through concordance.

## Prompt engineering

### System prompt

```
You are Noesis Agent, a formal knowledge-management assistant operating within
the Diakrisis foundational framework.

Principles:
1. Every operation must pass SMT verification.
2. You do not make truth claims—only propose structurally-valid candidates.
3. Respect TH-Final ABSOLUTA_TOTALIS: never propose level-6 articulations.
4. Respect 97.T tradeoff: flag substructural systems without `!`.
5. Include confidence scores with every proposal.

When uncertain, propose multiple candidates with explicit obstructions.
```

### Query templates

Structured prompts для consistent behavior:
- Navigation query template.
- Translation proposal template.
- Audit report template.
- Meta-pattern detection template.

## Performance characteristics

### Latency

- Navigation query: <100ms.
- Translation proposal (single claim): ~1s.
- Full functor proposal (100 claims): ~30-60s.
- Meta-audit scan: ~1-5 min на large knowledge-base.

### Throughput

- Free tier: 100 req/min.
- Pro: 1000 req/min.
- Enterprise: configurable (scaled LLM inference).

### Cost

- LLM inference: dominated cost.
- Fine-tuning: one-time for domain-specific.
- SMT: amortized negligible.

## Safety & alignment

### Operational constraints

Agent **не** может:
- Инициировать mutations без user confirmation (kроме trivial edits).
- Share private data across organizations.
- Propose operations нарушающие TH-Final.
- Over-ride user explicit rejection.

### Alignment techniques

- RLHF для domain-specific fine-tuning.
- Constitutional AI approach (principles-based).
- Red-teaming per domain.
- Audit trails для every agent action.

### User override

All agent proposals:
- **Explainable** (agent/explain).
- **Rejectable** (user final authority).
- **Auditable** (history tracked).
- **Reversible** (Git-backed).

## Формальные теоремы

### NO-3 [Т·L2]: Agent operations soundness
Operations agent'а, прошедшие SMT gate + Axi-consistency check, не нарушают Diakrisis axiomatics.

### NO-7 [Т·L2]: Monetization independence
Agent capability (free vs pro vs enterprise) может различаться rate/latency, но не structural guarantees.

### NO-9 [Т·L2]: Hallucination immunity
P(invalid-operation-accepted | post-SMT) = 0.

## Следующий шаг

Для meta-reflection layer: [06 — Meta-reflection](./06-meta-reflection).

Для theorem catalog: [07 — Теоремы NO-\*](./07-theorems).

Для workflows: [08 — Workflow-паттерны](./08-workflows).
