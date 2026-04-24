---
sidebar_position: 8
title: Интенсиональное уточнение (путь 3)
---

# Интенсиональное уточнение — формальное закрытие

## Статус

**[Т]** — последний исторически-открытый обходной путь вокруг AFN-T формально закрыт: теоремы **98.T** (существование функтора $\mathbf{I}$) и **99.T** (slice-locality — AFN-T не затронута).

**Каноническое изложение** — препринт [*MSFS*](/10-reference/04-afn-t-correspondence) §8.3:

- **98.T** = MSFS Theorem `thm:I-existence` (construction of $\II : \cF^\mathrm{op} \to \Sint$).
- **99.T** = MSFS Theorem `thm:slice-locality` (projection to existing points of $\fM$).

После закрытия этого пути три стандартных обход-пути вокруг AFN-T — ✅ формально закрыто (MSFS Theorem `thm:обход-summary`).

## Почему этот слой нужен

Доказательство AFN-T α-части (MSFS Lemma `lem:interp-is-morita`) использует Morita-эквивалентность как критерий редукции: $\rho(\alpha) \simeq X^{\mathcal{M}_F}$ ⇒ $X$ сводится к известной структуре. Morita — **экстенсиональный** инвариант: он отождествляет артикуляции, имеющие изоморфные $\rho$-проекции, независимо от конкретных proof-term-конструкций или identity-type-семантики.

Гипотетический обходной путь: если интенсиональный-level структура $F_\mathrm{int}$ над $F$ производит различие, *не видимое* Morita-эквивалентности, и это различие позволяет артикулировать новое уровня 6 основание на интенсиональный-уровне — тогда AFN-T можно было бы «обойти».

## Формальное содержание 98.T / 99.T

### 98.T: Существование $\mathbf{I}$

MSFS Theorem `thm:I-existence`: существует контравариантный $2$-функтор

$$
\mathbf{I} : \langle\langle \cdot \rangle\rangle^{\mathrm{op}} \longrightarrow \mathcal{S}_\mathrm{int}
$$

со свойствами (I-1)–(I-4) (MSFS Definition `def:Sint` для целевой 2-категории):

- **(I-1) Homotopy invariance**: 2-эквивалентность в $\langle\langle \cdot \rangle\rangle$ ⇒ 2-эквивалентность в $\mathcal{S}_\mathrm{int}$.
- **(I-2) Gauge covariance**: gauge-transformation $\tau$ ⇒ 1-морфизм $\mathbf{I}(\tau)$.
- **(I-3) Strict refinement of Morita**: существуют $F_1 \sim_M F_2$ с $\mathbf{I}(F_1) \not\simeq \mathbf{I}(F_2)$.
- **(I-4) Morita as 2-localization**: $\cU \circ \mathbf{I} \simeq \rho$; Morita = $\Sint[\mathcal{W}_\cU^{-1}]$ (Пронк 1996).

**Ключевой concrete пример** (MSFS §8.3, Step 7): MLTT vs ETT — Morita-эквивалентны по [Хофман 1995], но $\tau(\mathbf{I}(\mathrm{MLTT})) = 1 \neq 0 = \tau(\mathbf{I}(\mathrm{ETT}))$ через typing-invariant $\tau$ (effective normalization в effective topos $\mathrm{Eff}$ по Хайленд 1982).

**Вычислительная рамка** (препринт уточнение): инвариант $\tau$ определён на $\Sint^{\mathrm{eff}} \subseteq \Sint$ — подкатегории, где все 2-эквивалентности computable в $\mathrm{Eff}$. Без этого ограничения $\tau$ не был бы 2-инвариантом (не-вычислимая эквивалентность могла бы идентифицировать normalizing и non-normalizing классы).

### 99.T: Slice-locality

MSFS Theorem `thm:slice-locality`: существует 2-функтор $\widetilde{\pi} : \mathcal{S}_\mathrm{int} \to \mathfrak{M}_\mathrm{Fnd}$ с 2-коммутирующей диаграммой:

$$
\begin{array}{ccc}
\langle\langle \cdot \rangle\rangle & \xrightarrow{\;\mathbf{I}\;} & \mathcal{S}_\mathrm{int} \\
{\scriptstyle \pi} \downarrow & & \downarrow {\scriptstyle \widetilde{\pi}} \\
\mathfrak{M}_\mathrm{Fnd} & = & \mathfrak{M}_\mathrm{Fnd}
\end{array}
$$

**Следствие** (MSFS Corollary `cor:slice-level`): интенсиональное уточнение не добавляет новую структурную ось в AFN-T. База $\fM$ не затронута; TH-absoluteness не меняется.

## Закрытие обходного пути

Путь 3 (интенсиональное уточнение) был последним open gap вокруг AFN-T. После MSFS §8 (формальное построение $\mathbf{I}$ + доказательство slice-locality через 2-Гротендик fibration):

| Путь | Статус до | Статус |
|---|---|---|
| полиморфизм универсумов | closed (57.T, 56.C1, 61.T, 94.T) | closed |
| Reflective tower | closed (19.T1, 31.T3, 68.T, 69.T, 90.T) | closed |
| **Интенсиональное уточнение** | research-programme (open) | **closed (98.T, 99.T)** |

## Следствия

- **98.C1–98.C3** — соответствуют препринт-следствиям `cor:slice-level` и замечаниям о нетривиальности, cohesion-совместимости, gauge-factoring.
- **99.C1** — AFN-T абсолютность не требует пересмотра;
- **99.C2** — N-04b gap (интенсиональность/экстенсиональность) формально закрыт;
- **99.C3** — все три обход-пути закрыты одновременно;
- **99.C4** — пятиосевая абсолютность AFN-T сохраняет структурную полноту.

## Diakrisis-specific контекст

Интенсиональное уточнение в Diakrisis — это **внутреннее уточнение артикуляций** через display-map 2-категории: артикуляции $F_1 \sim_\mathrm{gauge} F_2$ с различной proof-term-структурой (MLTT vs ETT, HoTT vs cubical HoTT, Coq vs Agda vs Lean) различимы по $\mathbf{I}$, но neutralize $\pi$-проекцию на $\mathfrak{M}_\mathrm{Fnd}$ (MSFS Corollary `cor:slice-level`).

Связь с [T-2f\*](/02-canonical-primitive/02-axiomatics) (locally stratified completion): display-map filtration — частный случай T-2f\*-подобной depth-стратификации, необходимой для (Max-3) MSFS. **Универсальное обоснование (Max-3) для Diakrisis** — теорема 105.T ([`/06-limits/10-maximality-theorems`](/06-limits/10-maximality-theorems)): T-2f\* блокирует *все* Яновский-сводимые парадоксы, не только 5 именных семейств. В связке 98.T + 99.T (Max-4) + 105.T (Max-3) Diakrisis закрывает оба интенсиональный+depth уровня формальной защиты.

## Диаграммы и Конкретные примеры

MSFS §8.3 содержит:

1. **MLTT vs ETT** — типичный extensional collapse; $\tau$-invariant: decidable vs undecidable typechecking.
2. **HoTT vs cubical HoTT** — propositional vs computational univalence; одинаковый $\infty$-topos class, разные computational content.
3. **Proof-assistants (Coq, Agda, Lean)** — интенсиональный slices над shared CIC-zone.

## Ссылки

- **MSFS §8.3** — full construction + proofs;
- **MSFS `def:Sint`** — формальное определение $\Sint$ (display 2-classes, (D1)-(D4));
- **MSFS `lem:pronk`** — Пронк bicategory-of-fractions, основание для (I-4);
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — таблица соответствия.
