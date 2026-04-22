---
sidebar_position: 4
title: Операции и Noesis Protocol
---

# Операции Noesis. Noesis Protocol (NP)

## Обзор

Все действия пользователей и agent'ов — через **NP** (Noesis Protocol), JSON-RPC-based протокол расширяющий MCP (Model Context Protocol).

**46 endpoint'ов** в 7 группах.

---

## 1. Navigation (10 endpoints)

Read-only операции для обзора и поиска.

### `knowledge/list`
**Описание**: Список всех knowledge-objects в workspace.

**Параметры**: `{ filter?: FilterSpec, domain?: DomainName }`

**Результат**: `Array<{ id, title, type, claims_count, last_modified }>`

**Пример**:
```json
{
  "method": "knowledge/list",
  "params": { "domain": "consciousness" }
}
```

### `knowledge/claims`
**Описание**: Все claims в заданном knowledge-object с фильтрами.

**Параметры**: `{ knowledge: string, status?: Status, type?: ClaimType, rigor_level?: L1|L2|L3 }`

### `knowledge/functors`
**Описание**: Функтор-граф — все functors между knowledge-objects.

**Результат**: Graph с obstruction heatmap.

### `claim/get`
**Описание**: Полный контент claim по ID.

### `claim/dependencies`
**Описание**: Dependency graph N уровней вверх.

**Параметры**: `{ claim: string, depth?: number, direction?: "up"|"down"|"both" }`

### `claim/dependents`
**Описание**: Что зависит от данного claim.

### `claim/translations`
**Описание**: Все translations claim в другие knowledge-objects.

### `claim/history`
**Описание**: Temporal evolution — audit history + previous versions.

### `query_graph`
**Описание**: Произвольный structural query на Cypher-like language.

**Пример**:
```
MATCH (c:Claim)-[:requires*1..3]->(d:Claim)
WHERE c.status = "T·L1" AND d.status = "Г"
RETURN c, d
```

### `graph/search`
**Описание**: Semantic + structural search (combines LLM embedding + graph structure).

---

## 2. Mutations (10 endpoints)

Операции изменения state.

### `claim/create`
**Описание**: Создать claim с type, status, dependencies.

**Параметры**:
```json
{
  "knowledge": "uhm",
  "type": "theorem",
  "title": "New theorem",
  "content": "...",
  "dependencies": [{ "id": "A-Omega7", "type": "requires" }],
  "status": "Т-набр",
  "rigor_level": "L2"
}
```

**Verification**: SMT-check + Axi-compliance + TH-Final-bounds → accepted/rejected.

### `claim/set_status`
**Описание**: Изменить status. Автоматическая propagation preview.

**Параметры**: `{ claim: string, new_status: Status, reason: string }`

**Workflow**:
1. Preview affected claims (via `propagation/preview`).
2. User confirms.
3. `propagation/apply` executes changes atomically.

### `claim/add_dependency`
**Описание**: Добавить dependency. SMT-check на acyclicity, consistency.

### `claim/remove`
**Описание**: Удалить claim. Блокируется если есть dependent'ы (требуется `--cascade` flag).

### `knowledge/create`
**Описание**: Создать новый knowledge-object.

**Параметры**: `{ id, title, metatheory: R_S, initial_axioms?: Array<Claim> }`

### `knowledge/import`
**Описание**: Импортировать knowledge-object из markdown+YAML.

Workflow:
1. Parse markdown files.
2. Validate schema.
3. Check axiom compliance per claim.
4. Build dependency graph.
5. SMT-verify structural consistency.
6. Commit atomically.

### `knowledge/export`
**Описание**: Экспорт в markdown+YAML (или другие форматы).

**Supported formats**: MD+YAML, LaTeX, Lean4, Coq, Agda, Dedukti.

### `functor/create`
**Описание**: Создать inter-knowledge functor.

### `functor/verify`
**Описание**: SMT-verify functoriality (F(id)=id, F(g∘h)=F(g)∘F(h)).

### `axiom/update`
**Описание**: Обновить axiom в knowledge. Блокируется если влечёт inconsistency.

---

## 3. Verification (6 endpoints)

Audit и coherence checking.

### `knowledge/audit`
**Описание**: Full coherence audit единичного knowledge-object.

**Что проверяется**:
- Status misalignment ([T]-claim depends on [H]).
- Circular dependencies.
- Dangling references.
- Contradictions (via `contradicts` edges).
- Functorial misalignment.
- Axiom violations.

### `coherence/check`
**Описание**: Cross-knowledge coherence (descent condition).

### `coherence/descent`
**Описание**: Descent condition для specific covering.

**Параметры**: `{ covering: Array<Functor>, target: string }`

### `propagation/preview`
**Описание**: Preview effects of status change без применения.

### `propagation/apply`
**Описание**: Применить propagation atomically.

### `axiom/check`
**Описание**: Axi-0..Axi-9 + T-α + T-2f\* compliance на специфическом claim.

---

## 4. Translation (6 endpoints)

Cross-knowledge operations.

### `translate/claim`
**Описание**: Перевод single claim в target knowledge.

**Параметры**: `{ source_claim: string, target_knowledge: string, functor?: string }`

**Результат**: `{ translated_claim?: Claim, obstruction: number, confidence: number }`

Если obstruction > 0.8 — помечается как untranslatable.

### `translate/knowledge`
**Описание**: Перевод whole knowledge-object.

Workflow:
1. Compute Kan extension (by 85.T formula).
2. Per-claim translate.
3. Aggregate obstructions.
4. SMT-verify functorial coherence.

### `translate/suggest`
**Описание**: Agent proposes possible translations.

### `obstruction/compute`
**Описание**: Compute Obs(f) — untranslatability measure.

### `morita/check`
**Описание**: Test Morita-equivalence между two knowledge-objects.

### `morita/construct`
**Описание**: Construct Morita-bridge (if exists).

---

## 5. Meta-reflection (5 endpoints)

Self-reference операции.

### `meta/audit`
**Описание**: Self-audit of Noesis.Core — check data model adequacy.

### `meta/boundaries`
**Описание**: Claims bounded by Lawvere (status ≤ [Г]).

### `meta/suggest_extension`
**Описание**: Agent predлагает structural extension (new dependency type, new status).

### `meta/patterns`
**Описание**: Pattern detection в recurring issues (L-II Double Loop).

### `meta/history`
**Описание**: Evolution log of Noesis.Core itself.

---

## 6. Computational (5 endpoints)

Heavy structural computations.

### `verum/compile`
**Описание**: Compile knowledge-object to Verum code (для SMT-verification).

### `verum/verify`
**Описание**: Full SMT proof-check on compiled artifact.

### `compute/kan`
**Описание**: Compute Kan extension (левый или правый).

**Параметры**: `{ functor: string, type: "left"|"right", target_claim: string }`

### `compute/descent`
**Описание**: Compute descent obstruction для specific covering.

### `compute/obstruction`
**Описание**: Quantify Obs(f) с per-claim deviation.

---

## 7. Agent (4 endpoints)

LLM-driven operations.

### `agent/query`
**Описание**: Natural language query → structural operations.

**Пример**:
```
User: "Show me all theorems in UHM that depend on T-96 and were changed last week"
→ Agent translates to:
   claim/dependents uhm:T-96 --transitive | filter modified > 2026-04-16
```

### `agent/propose`
**Описание**: Agent proposes operation with confidence.

**Возвращает**: Top-K candidates с SMT-certificates.

### `agent/explain`
**Описание**: Natural language explanation of structural finding.

**Пример**:
```
Input: coherence violation detected on claims c1, c2
Agent output: "C1 is marked [T·L1] but depends on c2 which is [Г]. 
              This violates status propagation rule. 
              Suggested fix: downgrade c1 to [С·L2] or strengthen c2."
```

### `agent/dialogue`
**Описание**: Multi-turn dialogue с context preservation.

---

## Transport layer

### JSON-RPC over stdio/TCP/WebSocket

**Example request**:
```json
{
  "jsonrpc": "2.0",
  "method": "claim/dependencies",
  "params": { "claim": "uhm:T-96", "depth": 3 },
  "id": 1
}
```

**Example response**:
```json
{
  "jsonrpc": "2.0",
  "result": {
    "graph": [
      { "source": "T-96", "target": "A-Omega7", "type": "requires" },
      { "source": "T-96", "target": "A-Bures", "type": "requires" }
    ],
    "meta": { "depth_reached": 3, "nodes": 12, "edges": 18 }
  },
  "id": 1
}
```

### MCP compatibility

NP — superset of MCP (Model Context Protocol). Каждый MCP client автоматически compatible.

### Rate limits

- Free tier: 100 req/min, 10K req/day.
- Pro: 1000 req/min, unlimited.
- Enterprise: configurable.

---

## Batch operations

Для bulk changes:

### `batch/claim/create`
**Описание**: Create multiple claims atomically.

### `batch/propagation/apply`
**Описание**: Apply multiple status changes atomically.

### `batch/import`
**Описание**: Import entire corpus (e.g., UHM documentation).

**Пример**: Import 400-page UHM corpus → ~185 claims + dependencies в одной atomic операции.

---

## Subscriptions & webhooks

### `subscribe/knowledge_changes`
**Описание**: Real-time уведомления об изменениях в knowledge-object.

### `webhook/register`
**Описание**: Register webhook для external systems.

Events:
- Claim created/modified/removed.
- Coherence violation detected.
- Meta-audit pattern discovered.
- Federation sync completed.

---

## Authentication & authorization

### Auth methods

- API key (per user).
- OAuth 2.0 (enterprise SSO).
- mTLS (for federation).

### Authorization

- Claim-level (read/write/admin).
- Knowledge-level (access control).
- Operation-level (some ops admin-only).

---

## Full endpoint summary

| Группа | Endpoints | Назначение |
|---|---|---|
| **Navigation** | 10 | Read-only exploration |
| **Mutations** | 10 | State changes |
| **Verification** | 6 | Audit & coherence |
| **Translation** | 6 | Cross-knowledge ops |
| **Meta-reflection** | 5 | Self-reference |
| **Computational** | 5 | Heavy computations |
| **Agent** | 4 | LLM-driven |
| **Total** | **46** | Complete API |

Plus batch operations + subscriptions + webhooks.

---

## Следующий шаг

Для understanding LLM agent в деталях: [05 — Агент](./05-agent).

Для self-reference layer: [06 — Meta-reflection](./06-meta-reflection).

Для formal theorems: [07 — Теоремы NO-\*](./07-theorems).
