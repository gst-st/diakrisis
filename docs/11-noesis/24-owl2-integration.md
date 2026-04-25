---
sidebar_position: 24
title: Интеграция OWL 2 в Noesis
---

# Интеграция OWL 2 в Noesis

*Прескриптивная спецификация того, как Noesis потребляет экосистему OWL 2 V1, поставляемую Verum (VUVA §21 — `core.math.frameworks.owl2_fs`, семь типизированных атрибутов `Owl2*Attr`, квантификатор `count_o`, `audit --owl2-classify`, `export --to owl2-fs`). Этот документ закрывает пробел, выявленный кросс-аудитом Verum (рекомендация №1): до его появления модель знаний Noesis и контракты NP-протокола ничего не говорили об IRI-схемах OWL 2, дефолтах семантических допущений и требованиях к набору операторов; реализация Verum V1 работала без Noesis-сторонней прескрипции.*

---

## 1. Схема IRI / URI

Noesis принимает per-knowledge-object IRI-префикс:

```
http://noesis.local/k/<knowledge-object-id>#<local-name>
```

Для индивидуума OWL 2 `:alice`, объявленного внутри knowledge-объекта `k_42`, каноническая IRI: `http://noesis.local/k/k_42#alice`. Федерация между экземплярами Noesis (см. `15-federation.md`) сохраняет эту схему — слой федерации переписывает только хост, никогда суффикс `/k/<id>#<name>`.

Когда Noesis потребляет вывод `verum export --to owl2-fs` Verum (VUVA §21.8), базовая IRI по умолчанию `http://verum-lang.org/ontology/<package>` переписывается в `http://noesis.local/k/<knowledge-object-id>` во время импорта. Сегмент локального имени остаётся неизменным, поэтому раунд-трип (Verum-export → Noesis-import → Noesis-export → Verum-reimport) сохраняет каждое локальное имя побайтово.

**Анонимные индивидуумы.** Анонимные ID OWL 2 (`_:b1`, `_:b2`, …) отображаются в Noesis-локальные синтетические IRI вида `http://noesis.local/k/<id>#_anon_<sequence>`, где `<sequence>` детерминированно генерируется в порядке объявления, что обеспечивает устойчивость раунд-трипа.

---

## 2. Семантика CWA / OWA

Noesis принимает **VUVA §21.4 дословно**: closed-world по умолчанию, явный opt-in OWA через `@owl2_class(semantics = "OpenWorld")` на потребляющем классе.

Noesis-корпус хранит claims с эпистемическими статусами `[T]` (теорема), `[Г]` (гипотеза), `[O]` (наблюдение), `[R]` (опровергнуто), `[U]` (неизвестно). Opt-in OWA даёт OWL 2-запросу, который ни доказуем, ни опровержим, статус `[U]` — полностью совместимо с существующим эпистемическим словарём.

Композиция со смешанной семантикой (запрос OWA, скомпонованный по `И` с CWA-уточнением) требует явного использования трёхзначных коннективов `core.logic.kleene` согласно VUVA §21.4. Endpoint NP `query_graph` Noesis должен выдавать `Maybe<Bool>` для OWA-запросов; клиенты, не готовые к тризначной логике, видят это в схеме ответа.

---

## 3. Требуемое покрытие операторов

Noesis требует, чтобы Verum OWL 2 V1 распознавал **полный каталог Шкотина 2019** (64 оператора по 10 таблицам) плюс квантификатор `count_o`. Набор операторов:

| Таблица Шкотина | §X.Y | Модуль Verum | Требуется Noesis |
|---|---|---|---|
| Table 1 | §2.2.1 | `object_property` | `ObjectInverseOf` |
| Table 3 | §2.2.2 | `data_range` | 5 — Intersection / Union / Complement / OneOf / DatatypeRestriction |
| Table 4 | §2.2.3 | `class_expr` | 24 — полный булев + ограничения + отрицательный диапазон |
| Table 5 | §2.3.1 | `class_axiom` | 4 — SubClassOf / Equivalent / Disjoint / DisjointUnion |
| Table 6 | §2.3.2 | `object_property_axiom` | 14 — иерархия + цепочка + 7 характеристических флагов |
| Table 7 | §2.3.3 | `data_property_axiom` | 6 — Sub / Equivalent / Disjoint / Domain / Range / Functional |
| Table 8 | §2.3.4 | `datatype_definition` | 1 — DatatypeDefinition |
| Table 9 | §2.3.5 | `key` | 1 — HasKey (NAMED-ограничение) |
| Table 10 | §2.3.6 | `assertion` | 7 — Same/Different/ABox/NegativeABox |
| §Notation | §21.5 (VUVA) | `count` | 1 — count_o quantifier-of-quantity |

Это совпадает 1:1 с поставкой Verum V1. Когда V2 заменит placeholder-ы `ensures true` дословными HOL-телами (VUVA C7-V2), endpoints классификации / подсуммирования Noesis готовы потреблять усиленные аксиомы без изменений API.

---

## 4. Endpoints NP-протокола (`ontology/*`)

NP-протокол Noesis (см. `04-operations.md`) расширяется семейством endpoints `ontology/*`. Шесть новых endpoints; учёт по отношению к прежним 46 итого даёт публикуемую NP-поверхность из 52 endpoints.

| Endpoint | Метод | Тело | Возвращает | Соответствие VUVA |
|---|---|---|---|---|
| `ontology/import` | POST | `{ "format": "owl2-fs", "uri": "...", "knowledge_id": "..." }` | `{ "imported_axioms": <count>, "knowledge_id": "..." }` | `verum import --from owl2-fs` (B5 import — V2) |
| `ontology/export` | POST | `{ "knowledge_id": "...", "format": "owl2-fs" }` | `{ "ofn": "<base64-or-text>", "byte_hash": "..." }` | `verum export --to owl2-fs` (B5 export — поставлено) |
| `ontology/classify` | POST | `{ "knowledge_id": "..." }` | граф классификации (формат JSON `audit --owl2-classify`) | `verum audit --owl2-classify --format json` (F5) |
| `ontology/subsume` | POST | `{ "knowledge_id": "...", "sub": "C", "sup": "D" }` | `Maybe<Bool>` (Some(true)=⊑, Some(false)=¬⊑, None=неразрешимо) | обязательство `@verify(formal)` SubClassOf согласно §21.3 |
| `ontology/instance` | POST | `{ "knowledge_id": "...", "individual": "a", "class": "C" }` | `Maybe<Bool>` | проверка экземпляра `@verify(fast)` согласно §21.3 |
| `ontology/consistency` | POST | `{ "knowledge_id": "..." }` | `{ "consistent": Bool, "violations": [...] }` | `verum audit --owl2-classify` (циклы + disjoint-конфликты) |

Каждый endpoint ОБЯЗАН прокидывать соответствующий exit-код Verum: ненулевой выход из `audit --owl2-classify` (циклы или disjoint / subclass violations) распространяется как `consistent: false` с приложенными в теле массивами cycles / violations.

Маршрутизация внутри Noesis: `ontology/classify` и `ontology/subsume` делегируют функциям, декорированным `@enact(epsilon: "ε_classify")` в потребляющем knowledge-объекте — расширение каталога Diakrisis, поставленное вместе с примитивом ε_classify Verum (VUVA §11.2 + §21).

---

## 5. Расширение схемы knowledge-объекта

`core.math.noesis.knowledge_object::KnowledgeObject` получает опциональное поле:

```verum
public type KnowledgeObject is {
    ...,
    ontology: Maybe<OntologyHandle>,
};

public type OntologyHandle is {
    base_iri:        Text,
    cwa_default:     Bool,        // true ⇒ §21.4 CWA; false ⇒ OWA
    framework_lineage: Text,       // в настоящее время всегда "owl2_fs"
    operator_count:  Int,          // поставка V1 ⇒ 64; расширяется
};
```

Когда knowledge-объект несёт `OntologyHandle`, все шесть endpoints `ontology/*` маршрутизируемы против него. Без handle каждый endpoint возвращает HTTP 404 (онтология не привязана к этому knowledge-объекту).

---

## 6. Соображения о федерации

Федерация (см. `15-federation.md`) сохраняет семантику IRI OWL 2 через шаг Чеха-десцента: когда два федерированных экземпляра Noesis пересекаются на общем knowledge-объекте, их онтологические handle должны совпадать по `base_iri`, `cwa_default` и `framework_lineage`. Если экземпляры расходятся, слой десцента поверхностно показывает конфликт в ответе `coherence/check` с расходящейся парой, помеченной явно.

Кросс-инстансные OWL 2-рассуждения (например, SubClassOf-запрос, охватывающий два федерированных knowledge-объекта) ОБЯЗАНЫ верифицироваться через стандартный путь Чеха-двух-сайтов; не-Чеховские пути (короткое замыкание через один экземпляр) запрещены, потому что они тихо отбросили бы федеративную проверку соблюдения.

---

## 7. Ссылки

- Verum VUVA §21: экосистема OWL 2 V1 (C7 / C8 / C9 / B5 export / F5).
- Реализация Verum:
  - `core/math/frameworks/owl2_fs/*.vr` (64 аксиомы + count)
  - `crates/verum_ast/src/attr/typed.rs::Owl2*Attr` (7 типизированных атрибутов)
  - `crates/verum_cli/src/commands/audit.rs::audit_owl2_classify_*` (F5)
  - `crates/verum_cli/src/commands/export.rs::emit_owl2_fs` (B5 export)
- Diakrisis 12-actic §4.2: каталог ε с расширением `ε_classify`.
- Diakrisis 09-applications/02-canonical-nu-table.md: прескрипция ν=1, τ=intensional для `owl2_fs`.
- Noesis 04-operations.md: NP-протокол на 46 endpoints — расширен до 52 настоящим документом семейством `ontology/*`.
