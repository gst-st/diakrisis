# AFN-T — A No-Go Theorem for Absolute Foundations of Mathematics

**Preprint** (English, self-contained): `paper.tex` → `afn-t-paper.pdf` (~52 pp, 71 theorem-like environments, 48 bibliography entries).

**Author**: Max Sereda (Independent researcher, `max@gst.st`).

**Status**: v1.0, finalized after multiple internal audits + 3-agent literature survey + 4-round rigor refinement (F1–F8, G1–G8, W1–W3, Z1–Z4 fixes). LaTeX build clean (0 warnings, 0 errors, 0 orphan/missing citations).

## What the preprint proves

> No mathematical object can simultaneously satisfy: formal definability within some Rich-metatheory, non-reducibility to existing $S$-definable structures, and maximal generativity over all Rich-foundations. Level 6 of the stratified hierarchy of mathematical novelty is structurally empty.

The result extends the classical no-go series (Cantor 1891, Russell 1901, Gödel 1931, Tarski 1936, Lawvere 1969, Ernst 2015) by a **five-axis absoluteness** statement and closes three standard bypass paths (universe polymorphism, reflective towers, intensional refinement).

## Structure

- **§1**: Introduction — motivation, main result, hierarchical classification, five-axis absoluteness summary, three bypass paths, Level 5+ meta-classification, contributions.
- **§2**: Stratified hierarchy $\mathcal{L}_0, \ldots, \mathcal{L}_5, \mathcal{L}_{5+}, \mathcal{L}_{5+}^{\max}, \mathcal{L}_6$ with formal definitions (§2.1–§2.2), formality-spectrum remark, disjointness pattern (Proposition 2.3), indexing-scheme justification (§2.3, Propositions 2.5–2.6).
- **§3**: Reasonable Rich-Metatheories — conditions (R1)–(R5), examples, class $\cS_S$, key lemma.
- **§4**: Level-6 conditions $(F_S)$, $(\Pi_4)$, $(\Pi_{3\text{-max}})$.
- **§5**: AFN-T $(\alpha)$-part (3 lemmas + main theorem).
- **§6**: AFN-T $(\beta)$-part + proper-class towers violation (Proposition 6.2).
- **§7**: Five-axis absoluteness + direct $(\infty, \infty)$-AFN-T for classical $S$ + axes-dependence remark.
- **§8**: Three bypass paths: universe polymorphism, reflective towers, intensional refinement (full construction of $\II : \cF^\mathrm{op} \to \Sint$, slice-locality, MLTT-vs-ETT example in $\mathrm{Eff}$).
- **§9**: Level 5+ meta-classification: conditional meta-categoricity, structural multiplicity, meta-classification stabilization.
- **§10**: No-go series placement, subsumption theorem, positioning against Ernst 2015, Hamkins multiverse, Barwick–Schommer-Pries 2021.
- **§11**: Consequences + 6 open questions.
- **Appendix A**: Categorical preliminaries (2-cats, $(\infty, n)$-cats, accessible functors, display maps, Pronk, Lawvere FP, Whitehead, Bergner–Schommer-Pries stabilization).
- **Appendix B**: Paraconsistent extension.

## Build

```bash
bun scripts/build-paper.ts              # PDF: afn-t-paper.pdf
bun scripts/build-paper.ts --arxiv      # arXiv tarball: afn-t-arxiv.tar.gz
bun scripts/build-paper.ts --zenodo     # Zenodo deposit folder: zenodo/
bun scripts/build-paper.ts --help
```

Requires `pdflatex` (TeX Live 2023+). Bibliography is inline (`\begin{thebibliography}`); no BibTeX pass required.

## Relationship to Diakrisis theory

The preprint is a **self-contained** formal version of the structural core of Diakrisis (`docs/`): it uses only standard categorical notation ($\cF$, $\rho$, $\fM$, $(\infty, n)$-Cat) and makes no reference to Diakrisis-specific primitives ($\langle\langle \cdot \rangle\rangle$, $\mathsf{M}$, $\alpha_\mathrm{math}$, $\sqsubset_\bullet$).

Correspondence between Diakrisis theorem numbers (`N.T`, `N.C`) and preprint labels (`\ref{thm:...}`, `\ref{lem:...}`, etc.) is documented at:

**[`docs/10-reference/04-afn-t-correspondence.md`](../docs/10-reference/04-afn-t-correspondence.md)**

Key correspondences:

| Diakrisis | Preprint |
|---|---|
| **TH-Final** (combined) | Theorem `thm:afnt` (§5–§6) |
| **TH-Final ABSOLUTA_TOTALIS** | Theorem `thm:five-axis` (§7) |
| 55.T (horizontal axis) | `thm:horizontal` |
| 59.T.1 (vertical axis) | `thm:vertical` |
| 66.T ($(\infty, \infty)$ Lawvere FP) | `thm:direct-infty` (classical $S$ only) + `lem:lawvere-inf` |
| 69.T (meta-vertical) | `thm:meta-vertical` |
| 84.T (lateral) | `thm:lateral` |
| 87.T (completeness) | `thm:completeness` |
| 98.T, 99.T (intensional refinement) | `thm:I-existence`, `thm:slice-locality` |
| 100.T (meta-categoricity) | `thm:meta-cat` |
| 101.T (structural multiplicity) | `thm:meta-mult` |
| 102.T (meta-classification stabilization) | `thm:meta-stab` |

Diakrisis documents reference the preprint; they retain Diakrisis-specific notation and internal-methodology content without duplicating preprint proofs.

## Russian translation

A 1-to-1 Russian version will be placed at `paper-ru/paper.tex` after the English version is finalized. The `build-paper.ts` script auto-detects the directory.

## Citation

```
Sereda, M. (2026). A No-Go Theorem for Absolute Foundations of Mathematics:
Hierarchical Classification, Five-Axis Absoluteness, and Meta-Stability.
Preprint.
```

## Licence

Creative Commons Attribution 4.0 International (CC-BY-4.0).
