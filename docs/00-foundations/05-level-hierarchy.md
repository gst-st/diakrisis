---
sidebar_position: 5
title: Иерархия уровней (0..5+, 6)
---

# Иерархия уровней математической новизны

## Статус

**[Т]** Формальная стратификация — строгая на всех уровнях. Для уровней $\mathcal{L}_0$..$\mathcal{L}_4$ — через Diakrisis-native инвариант $\nu$ и 𝖬-глубину (ниже §3). Для уровней $\mathcal{L}_5$, $\mathcal{L}_{5+}$, $\mathcal{L}_{5+}^{\max}$, $\mathcal{L}_6$ — через структурные условия, формально изложенные в препринте [*MSFS*](/10-reference/04-afn-t-correspondence).

**Граница с препринтом**: MSFS намеренно формализует только $\{\mathcal{L}_5, \mathcal{L}_{5+}, \mathcal{L}_{5+}^{\max}, \mathcal{L}_6\}$ (структурная рецензионно-чистая часть). Diakrisis использует полную шкалу $\mathcal{L}_0$..$\mathcal{L}_6$ для классификации *всей* математической деятельности (леммы, теоремы, области, парадигмы, основания, мета-структуры). Уровни 0–4 — Diakrisis-локальное уточнение, не фигурируют в препринте.

## Зачем нужна иерархия

В математическом сообществе статус результатов обсуждается **неформально**: «глубокая теорема», «прорыв», «новая парадигма». Эти оценки не стандартизированы, что создаёт проблемы:

- Риторическая инфляция: результат среднего уровня объявляется «прорывом».
- Ложные притязания: работа уровня 5 маркируется как уровень 6.
- Несоразмерность ожиданий: новые проекты обещают то, что формально невозможно (AFN-T).
- Отсутствие общего языка для сравнения mathematical programmes.

**Иерархия уровней Diakrisis** — *строгая формальная* шкала, в которой каждая ступень имеет:

1. **Ординальный критерий** через $\nu$-инвариант (глубина от $\alpha_0$).
2. **Структурный критерий** через закрытость под 𝖬, категорную стратификацию.
3. **Объективные примеры** — каноническая классификация известного мат-корпуса.
4. **Тотальное упорядочение**: $\mathcal{L}_k \prec \mathcal{L}_{k+1}$ строго возрастает по $\nu$.

## 1. Инвариант $\nu$: формальная основа

**Определение** (`/03-formal-architecture/08-cardinal-analysis` §Стратификация глубины): для артикуляции $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ инвариант $\nu(\alpha)$ — минимальный ординал такой, что $\alpha \in \mathsf{Trace}(\mathsf{A})_{\nu(\alpha)}$, где

$$
\mathsf{Trace}(\mathsf{A})_\lambda = \mathrm{colim}_{\beta < \lambda} \mathsf{M}^\beta(\alpha_0).
$$

Аналогично, для *внутреннего* результата $\sigma$ (утверждения, объекта) внутри артикуляции $\alpha$ определён $\nu_\alpha(\sigma)$ — минимальная 𝖬-глубина вывода $\sigma$ в $\alpha$.

**Центральная теорема** (23.T1): $\nu$ стратифицирует артикуляции по трём регионам:

| Регион | Значения $\nu$ | Интерпретация |
|---|---|---|
| Малый | $\nu < \kappa_1$ | Элементы универсума Гротендика $\mathbf{U}_1$ |
| Большой | $\kappa_1 \leq \nu < \kappa_2$ | Между двумя инаксессибалами |
| Проперный класс | $\nu \geq \kappa_2$ | Только категориально |

**Факт**: для практических артикуляций (α_zfc, α_hott, α_cic, α_ncg, α_uhm) $\nu$ — счётный ординал в канторовой нормальной форме (см. каталог в `intro.md`).

## 2. Строгая шкала: уровни 0–6

| Уровень | Формальный критерий | $\nu$-значение | Примеры |
|---|---|---|---|
| **$\mathcal{L}_0$** | $\alpha \notin \langle\!\langle \cdot \rangle\!\rangle$: пред-артикуляция (вне формальной метакатегории) | не определено | Математические наброски, приватные блокноты, открытые вопросы |
| **$\mathcal{L}_1$** | $\sigma$ с $\nu_\alpha(\sigma) < \omega$ при $\alpha \in \mathcal{L}_5$: конечная 𝖬-глубина | $0 \leq \nu_\alpha(\sigma) < \omega$ | Ёнеда, Zorn, König, Snake, Five, Schanuel, Hensel |
| **$\mathcal{L}_2$** | $\sigma$ с $\nu_\alpha(\sigma) = \omega$: требует полной индуктивной мощности $\alpha$ | $\nu_\alpha(\sigma) = \omega$ | Гёдель I/II (1931), Тарский (1936), Atiyah–Singer (1963), Wiles (1994), Perelman (2003), Cobordism Hypothesis (2009) |
| **$\mathcal{L}_3$** | 2-подкатегория $\mathcal{C} \subset \alpha_\Vert$, закрытая под $\mathsf{M}\vert_\mathcal{C}$ (область методов) | $\nu_\mathcal{C} = \omega \cdot k$, $2 \leq k < \omega$ | Group theory, algebraic geometry, homological algebra, probability, $(\infty, n)$-categories |
| **$\mathcal{L}_4$** | 2-функтор $\Phi: \mathcal{C} \to \mathcal{D}$ между $\mathcal{L}_3$-классами, сохраняющий 𝖬 (парадигма) | $\nu(\Phi) = \omega^2$ (= $\omega \cdot \omega$) | Sheaves, schemes, HoTT-парадигма, motivic programme, condensed, Langlands, higher algebra |
| **$\mathcal{L}_5^\mathrm{weak}$** | $\alpha$ удовлетворяет (R2)–(R5) и ограниченной форме (R1): слабая Rich-метатеория с ограниченной категорной глубиной $n_S$ | $\nu(\alpha) < \kappa_1$ | I∆₀, Buss $\mathsf{S}_2^i$/$\mathsf{T}_2^i$, $\mathsf{V}_0$, полиномиально-ограниченная арифметика, исчисления осуществимости (MSFS §3.4 Boundary cases; Q5). |
| **$\mathcal{L}_5$** | $\alpha$ удовлетворяет (R1)–(R5): Rich formal system | $\kappa_1 \leq \nu(\alpha) < \kappa_2$ (как объект $\mathbf{StrCat}_{S, n}$) | ZFC, HoTT, CIC, ECC, NCG, MLTT, Eff, ∞-topos theory, Markov-конструктивизм, Bishop-конструктивизм, Феферман-предикативизм |
| **$\mathcal{L}_{5+}$** | meta-articulation $\mathfrak{A}$, удовлетворяет (M1)–(M5) | $\nu(\mathfrak{A}) \geq \kappa_2$ | Diakrisis, $\infty$-cosmoi (Риль–Верити), Univalent Foundations, cohesive higher topos (Шрайбер), Higher Algebra (Люри) |
| **$\mathcal{L}_{5+}^{\max}$** | $\mathfrak{A} \in \mathcal{L}_{5+}$ + (Max-1)–(Max-4) | $\nu(\mathfrak{A}) \geq \kappa_2$ + full image $\mathfrak{M}_\mathrm{Fnd}$ | **Diakrisis** (единственная, 100.T условная категоричность) |
| **$\mathcal{L}_6$** | $(F_S) \wedge (\Pi_{4, S, n}) \wedge (\Pi_{3\text{-max}, S, n})$: абсолютное основание | $\nu$ выходит за Mahlo-иерархию R-S | **Пусто** по AFN-T (препринт теорема `thm:afnt`) |

### Тотальное упорядочение

$$
\underbrace{\mathcal{L}_0}_{\nu\,\text{не определена}} \prec \underbrace{\mathcal{L}_1}_{\nu < \omega} \prec \underbrace{\mathcal{L}_2}_{\nu = \omega} \prec \underbrace{\mathcal{L}_3}_{\omega \cdot 2 \leq \nu < \omega^2} \prec \underbrace{\mathcal{L}_4}_{\nu = \omega^2} \prec \underbrace{\mathcal{L}_5}_{\kappa_1 \leq \nu < \kappa_2} \prec \underbrace{\mathcal{L}_{5+}}_{\nu \geq \kappa_2} \preceq \underbrace{\mathcal{L}_{5+}^{\max}}_{+(M_i)} \prec \underbrace{\mathcal{L}_6 = \emptyset}_{\text{AFN-T}}.
$$

**Предложение**: отношение $\prec$ — строгий тотальный порядок на $\{\mathcal{L}_k\}$. Следствие: классификация любого мат-объекта однозначна (с точностью до функциональной роли — ниже §4).

## 3. Структурное свойство каждого уровня

### $\mathcal{L}_0$ — пред-артикуляция

**Структурно**: объект $x$ (формула, идея, конструкция), для которого не существует эмбеддинга $x \hookrightarrow \alpha_\Vert$ ни в одну $\alpha \in \mathcal{L}_5$.

**Причины**:

- *Не формализовано*: математическая интуиция до её артикуляции (записи Римана о ζ, черновики Гротендик до SGA).
- *Не формализуемо в принципе*: феноменологические акты (сам Διάκρισις, §1.5 интроспективный доступ).
- *Открытый вопрос*: гипотеза без пути доказательства (Коллатц до установления status).

**Связь с Diakrisis**: уровень 0 — граница формального универсума Diakrisis. Никакое свойство $\nu$ не определено. Материал уровня 0 *предшествует* вхождению в ⟪⟫ или *избегает* его структурно (второй случай — предмет §1.5 «Нулевая граница Z»).

### $\mathcal{L}_1$ — лемма

**Структурно**: утверждение $\sigma$ в языке $L_\alpha$ артикуляции $\alpha \in \mathcal{L}_5$ + дерево вывода глубины $n < \omega$ от аксиом $\alpha$.

**𝖬-картина**: $\sigma \in \mathsf{M}^n(\mathrm{Axi}_\alpha)$ для фиксированного $n$. Переход $\mathsf{M}$ интерпретируется как «метаизация» — добавление одного уровня категорного абстрагирования.

**Идентификационный тест**: лемма замкнута в одном $\alpha$ и не требует переходов между артикуляциями. Морфизм $\sigma_1 \to \sigma_2$ между двумя леммами — стандартная импликация.

**Примеры** (полный список в препринте §2.2, но без строгих $\nu$-значений):

- *Ёнеда* ($\nu = 2$ в α_cat): $\mathrm{Hom}(h_a, F) \simeq F(a)$.
- *Zorn* ($\nu = 3$ в α_zfc + AC): эквивалент AC через частичные порядки.
- *Snake*, *Five*, *Nine* ($\nu = 4$ в α_homalg): диаграммные леммы.
- *Hensel* ($\nu = 5$ в α_p-adic): подъём корней.
- *Beck monadicity* ($\nu = 7$ в α_cat): характеризация monadic functors.

### $\mathcal{L}_2$ — теорема

**Структурно**: $\sigma$ с $\nu_\alpha(\sigma) = \omega$. Достижение $\omega$ означает: вывод требует *неограниченного* количества шагов из конечных ступеней — то есть полной индуктивной мощности $\alpha$ (по сути, всей арифметической силы).

**𝖬-картина**: $\sigma \in \mathsf{M}^\omega(\mathrm{Axi}_\alpha) = \bigcup_n \mathsf{M}^n(\mathrm{Axi}_\alpha)$.

**Эпистемологический смысл**: теорема — предел конечных лемм; содержит существенное «новое» утверждение, не сводимое к одному конечному пути.

**Примеры**:

- *Гёдель I/II* (в α_zfc): $\mathrm{PA}$ не полна; $\mathrm{Con}(\mathrm{PA})$ не доказуема в $\mathrm{PA}$.
- *Тарский* (в α_zfc): неопределимость истины.
- *Atiyah–Singer* (в α_diff_geo): index $= \hat A$-genus.
- *Fermat Last* (Wiles в α_arith): $x^n + y^n = z^n$ без нетривиальных решений.
- *Poincaré* (Perelman в α_diff_topo): симплициально-связные 3-многообразия $\sim S^3$.
- *Cobordism Hypothesis* (Lurie в α_∞_cat): $(\infty, n)$-TQFT = fully dualizable object.

### $\mathcal{L}_3$ — область методов

**Структурно**: 2-подкатегория $\mathcal{C} \subset \alpha_\Vert$, удовлетворяющая:

1. $\mathcal{C}$ замкнута под $\mathsf{M}\vert_\mathcal{C}: \mathcal{C} \to \mathcal{C}$ (методы применимы к объектам самой области);
2. $\nu_\mathcal{C} = \omega \cdot k$ для $2 \leq k < \omega$ (конечная мета-глубина);
3. $\mathcal{C}$ порождается конечным набором $\mathcal{L}_2$-теорем и $\mathcal{L}_1$-лемм.

**𝖬-картина**: $k$-я итерация $\mathsf{M}^{\omega \cdot k}$ даёт ту же категорию методов — область *само-замкнута* в пределах $k$ шагов внутренней рефлексии.

**Операция Cls**: $\mathrm{Cls}(\mathcal{L}_3)$ (классификатор областей) редуцируется обратно в $\mathcal{L}_3$ или $\mathcal{L}_4$ (коллапс — препринт §2.3 sketch, здесь формально доказывается через идемпотентность 𝖬 после $k$ итераций).

**Классическая карта 13 основных областей**:

- **Алгебраические**: group, ring, module, homological, representation.
- **Геометрические**: differential, algebraic, arithmetic, symplectic, non-commutative.
- **Топологические**: algebraic, differential, low-dimensional.
- **Аналитические**: real, complex, functional, harmonic, PDE, stochastic.
- **Логические**: model, proof, recursion, set, categorical, reverse.
- **Теоретико-числовые**: analytic, algebraic, class field, automorphic.
- **Комбинаторные**: graph, enumerative, algebraic, extremal.
- **Категорно-теоретические**: 1-Cat, 2-Cat, $(\infty, n)$-Cat, enriched, operadic, higher algebra.
- **Теоретико-представленческие**: finite group, Lie group, geometric.
- **Физико-математические**: TQFT, CFT, integrable systems.
- **Вероятностные**: probability, stochastic, ergodic, information theory.
- **Численные**: numerical analysis, approximation theory.
- **Дискретная / Вычислительная**: discrete math, computational, statistics.

### $\mathcal{L}_4$ — парадигма

**Структурно**: 2-функтор $\Phi: \mathcal{C} \to \mathcal{D}$ между $\mathcal{L}_3$-классами, удовлетворяющий:

1. $\Phi \circ \mathsf{M}_\mathcal{C} \cong \mathsf{M}_\mathcal{D} \circ \Phi$ (natural transformation — перенос методов);
2. $\Phi$ не редуцируется к морфизмам внутри одного $\mathcal{L}_3$;
3. $\nu(\Phi) = \omega^2$ — глубина $\omega \cdot \omega$ отражает двойной limit (предел по $k$ из $\omega \cdot k$).

**𝖬-картина**: парадигма — фикс-точка $\mathsf{M}^\omega$-итерации на уровне 2-функторов. Из двух $\mathcal{L}_3$-областей $\mathsf{M}^{\omega}$ производит «функториальный мост», устанавливающий изоморфизм на уровне методов.

**Эпистемологический смысл**: парадигма *реорганизует* мат-ландшафт — после её введения мат-деятельность перераспределяется по новым осям.

**25+ канонических парадигм** (препринт §2.2):

- Eilenberg–Mac Lane (1945): **categorical turn** — всё есть категория.
- Leray–Гротендик–Godement: **sheaf theory**.
- Гротендик: **scheme theory**, **K-theory**, **motives**, **topos theory**.
- Cartan–Eilenberg: **homological algebra**.
- Конн: **non-commutative geometry** (NCG).
- Ловер–Kock: **synthetic differential geometry** (SDG).
- Gromov–Witten–Kontsevich: **mirror symmetry**.
- Joyal–Lurie: **$(\infty, 1)$-categories**, **higher algebra**.
- Awodey–Воеводский: **HoTT**, **univalent foundations**.
- Scholze: **perfectoid spaces**.
- Clausen–Scholze: **condensed mathematics**.
- Langlands: **Langlands programme**, **geometric Langlands**.
- Рил–Verity: **$\infty$-cosmoi**.
- Шрайбер: **cohesive higher topos theory**.
- Lurie: **higher topos theory**.
- Reverse mathematics; algorithmic information theory.

**Замечание**: парадигма *сама* ещё не является Rich-системой (R-S) — она *использует* уровень 5 как параметр. Пример: HoTT как **формальная система** $\in \mathcal{L}_5$; HoTT как **парадигма рассуждения** $\in \mathcal{L}_4$. Функциональная двойственность отражает переход от теории к мета-теории.

### $\mathcal{L}_5$ — основание (Rich formal system)

**Структурно**: артикуляция $\alpha \in \mathcal{L}_5$ — объект в $\mathbf{StrCat}_{S, n}$, удовлетворяющий (R1)–(R5):

- **(R1)** PA-кодируемость: $\alpha$ интерпретирует арифметику Пеано.
- **(R2)** Соответствие парам Куратовского и наличие impredicative comprehension схемы (или эквивалент).
- **(R3)** Существование внутренней метатеории достаточной силы для самореференции.
- **(R4)** Тотальная рекурсия: типы рекурсивных функций полные.
- **(R5)** Морита-устойчивость: класс моделей $\alpha$ стабилен под Morita-эквивалентностью.

**𝖬-картина**: $\alpha \in \mathcal{L}_5$ удовлетворяет $\nu(\alpha) \geq \kappa_1$ в кардинальной стратификации 23.T1 (большой объект). Артикуляции могут иметь счётные $\nu$-значения (ω, ω+1, ω·2, …) в теоретико-доказательственной глубине, оставаясь большими как *объекты* $\mathbf{StrCat}_{S, n}$.

**Классический каталог** (расширенный):

- Классические: Z, ZF, ZFC, ZFC+inacc, NBG, MK, KP, ETCS, ETCC.
- Альтернативные: NFU, NF, CZF, IZF.
- Арифметические: PA, $\mathrm{Z}_2$.
- Тип-теоретические: MLTT, CIC, ECC, HoTT, cubical HoTT, universe-polymorphic HoTT.
- Substructural: Linear logic + !.
- Продвинутые: AFA (Aczel), $(\infty, 1)$-topos theory (Lurie), NCG (Конн), cohesive $(\infty, 1)$-topos (Шрайбер), motivic $\mathrm{SH}(k)$ (Воеводский), realizability (Хайленд Eff), SDG (Ловер–Kock), elementary higher topos (Shulman).

### $\mathcal{L}_{5+}$ — мета-каркас

**Структурно**: meta-articulation $\mathfrak{A}$, удовлетворяющее (M1)–(M5) — см. препринт Definition `def:meta`:

- **(M1)** $\mathfrak{A}$ классифицирует нетривиальный подкласс $\mathcal{L}_5$ через функтор $\mathrm{Cl}_\mathfrak{A}: \mathcal{L}_5 \supset \mathcal{D}_\mathfrak{A} \to \mathfrak{A}$.
- **(M2)** $\mathfrak{A}$ имеет Gauge-группу — автоморфизмы классификации.
- **(M3)** Intensional refinement: есть функтор $\mathbf{I}_\mathfrak{A}$ в категорию интенсиональных слоёв.
- **(M4)** Stabilization: $\mathrm{Cls}(\mathfrak{A}) \simeq \mathfrak{A}$ на уровне $(\infty, \infty)$-категорий (препринт теорема `thm:meta-stab`).
- **(M5)** Depth-стратификация: различает уровни 5, 5+, 5+^max внутри себя.

**Structurnaya плюральность** (препринт теорема `thm:meta-mult`, Diakrisis 101.T):

| Проект | Авторы | Год | Scope | $\in \mathcal{L}_{5+}^{\max}$? |
|---|---|---|---|---|
| **Diakrisis** | — | 2025+ | Всё $\mathfrak{M}_\mathrm{Fnd}$ | ✅ Да |
| $\infty$-cosmoi | Рил–Verity | 2022 | $(\infty, 1)$-theories | ❌ Нет |
| Univalent Foundations | Awodey, Воеводский | 2010+ | HoTT-расширения | ❌ Нет |
| Cohesive каркас (DCCT) | Шрайбер | 2013 | Cohesive $\infty$-topoi | ❌ Нет |
| Higher Algebra (Lurie HA) | Lurie | 2017+ | Stable $\infty$-cat + operadic | ❌ Нет |
| Synthetic mathematics | Taylor, Shulman et al. | 2000+ | Axiomatic synthetic | ❌ Нет |

### $\mathcal{L}_{5+}^{\max}$ — максимальный подкласс

**Структурно**: $\mathfrak{A} \in \mathcal{L}_{5+}$, дополнительно удовлетворяющее (Max-1)–(Max-4) (препринт Definition `def:maximality`):

- **(Max-1)** Полная классификация: $\mathrm{image}(\mathrm{Cl}_\mathfrak{A}) = \mathfrak{M}_\mathrm{Fnd}$.
- **(Max-2)** Gauge-полнота: все автоэквивалентности ⟪⟫ учтены.
- **(Max-3)** Depth-стратификация через T-2f\* (пять семейств парадоксов заблокированы).
- **(Max-4)** Intensional completeness (98.T / 99.T).

**Conditional мета-категоричность** (препринт теорема `thm:meta-cat`, Diakrisis 100.T): любые два представителя $\mathcal{L}_{5+}^{\max}$ над одной и той же R-S $(\infty, \infty)$-эквивалентны через Гротендик–Lurie straightening.

**Meta-classification стабилизация** (препринт теорема `thm:meta-stab`, Diakrisis 102.T): итерированная мета-классификация воспроизводит ту же $(\infty, \infty)$-теорию на каждом шаге (theory-level invariance); теоретико-множественная инстанциация поднимается по иерархии Гротендика $\kappa_1 < \kappa_2 < \ldots$ — **universe-ascent**.

### $\mathcal{L}_6$ — формально пустой уровень

**Структурно**: объект $X$, удовлетворяющий одновременно:

- **$(F_S)$** — формальная определимость в некоторой R-S $S$;
- **$(\Pi_{4, S, n})$** — $\infty$-нередуцируемость (нет Morita-эквивалентности к Level-5);
- **$(\Pi_{3\text{-max}, S, n})$** — максимальная генеративность (5-уровневая абсолютность).

**Теорема AFN-T** (препринт `thm:afnt`, Diakrisis как граничная лемма $\mathcal{L}_6 = \emptyset$).

**Пятиосевая абсолютность** (препринт §6 + `/06-limits/06-absoluteness`):

| Ось | Переменная | Теорема Diakrisis |
|---|---|---|
| Горизонтальная | $S \in \text{R-S}$ | 55.T |
| Вертикальная | $n \in \mathbb{N} \cup \{\infty\}$ | 59.T.1 |
| Мета-вертикальная | $\mu$-итерации | 69.T |
| Латеральная | $\xi$ (альтернативные порядки) | 84.T |
| Полнота | (нет 5-й оси) | 87.T |

**$\nu$-картина**: $\mathcal{L}_6$ потребовал бы $\nu > \mathrm{sup}_{S \in R\text{-}S} \nu(\mathsf{A}_S)$, что эквивалентно точке *вне* всей $(\infty, \infty)$-структуры $\mathfrak{M}_\mathrm{Fnd}$. Такая точка разрушила бы (R5) Морита-устойчивость → противоречие.

## 4. Уровни как функциональные роли

**Важное уточнение** (препринт Proposition `prop:level-structure`(ii)): уровни лучше читать как *functional roles*, а не строго-партиционированные классы. Один и тот же математический объект может играть несколько ролей:

- $\mathrm{SH}(k)$ (motivic) $\in \mathcal{L}_4$ (парадигма) $\cap$ $\mathcal{L}_5$ (foundation) — двойная функция.
- HoTT $\in \mathcal{L}_5$ (formal system) ∧ *Univalent Foundations programme* $\in \mathcal{L}_{5+}$ (meta-каркас над HoTT-расширениями).
- Diakrisis $\in \mathcal{L}_{5+}^{\max}$ + порождает внутренние теоремы из 13 аксиом (generative qua theory, но не R-S).

**Единственное строгое ограничение**: $\mathcal{L}_6 = \emptyset$ (AFN-T). Все пересечения с $\mathcal{L}_6$ тривиально пусты. Между $\mathcal{L}_0$ и $\mathcal{L}_{5+}^{\max}$ объект *может* играть несколько функциональных ролей, но его $\nu$-инвариант фиксирован единственным образом в зависимости от представления.

### Пример двойственной роли: HoTT

- Как **articulation** $\alpha_\mathrm{hott}$: $\nu = \omega + 1$ (счётный ординал), $\in \mathcal{L}_5$.
- Как **paradigm** (univalent turn): $\Phi_\mathrm{UF}: \alpha_\mathrm{cat} \to \alpha_\mathrm{hott}$ с $\nu(\Phi_\mathrm{UF}) = \omega^2$, $\in \mathcal{L}_4$.

Эта двойственность — не противоречие, а отражение богатой структуры: HoTT одновременно *объект* изучения и *инструмент* переорганизации.

## 5. Операции Cls и Gen

**Operation $\mathrm{Cls}$** (horizontal meta-operation): для уровня $\mathcal{L}_k$ образует класс каркасы, классифицирующих (но не генерирующих) объекты $\mathcal{L}_k$.

**Operation $\mathrm{Gen}$** (vertical meta-operation): образует класс каркасы, максимально генерирующих $\mathcal{L}_k$.

**Коллапс-лемма** (Diakrisis-внутренняя; препринт сохраняет только non-collapse в `prop:no-collapse`):

- $\mathrm{Cls}(\mathcal{L}_k) \hookrightarrow \mathcal{L}_{k+m}$ для $k \leq 4$: классификатор лемм уже содержится в областях/парадигмах.
- $\mathrm{Cls}(\mathcal{L}_5) = \mathcal{L}_{5+}$ НЕ коллапсирует: genuinely новый тип объекта (meta-каркас).
- $\mathrm{Cls}(\mathcal{L}_{5+}) \simeq \mathcal{L}_{5+}$ (102.T): стабилизация, нет $5{+}{+}$.
- $\mathrm{Gen}(\mathcal{L}_5) = \mathcal{L}_6 = \emptyset$: вертикальный шаг блокирован AFN-T.

**Итоговая цепь**:

$$
\mathcal{L}_0 \xhookrightarrow{\text{артикуляция}} \mathcal{L}_1 \xhookrightarrow{\omega} \mathcal{L}_2 \xhookrightarrow{\omega \cdot k} \mathcal{L}_3 \xhookrightarrow{\omega^2} \mathcal{L}_4 \xhookrightarrow{\text{(R1)-(R5)}} \underbrace{\mathcal{L}_5}_\text{foundations} \xrightarrow{\mathrm{Cls}} \underbrace{\mathcal{L}_{5+}}_\text{классификаторы} \xrightarrow{\mathrm{Cls}} \underbrace{\mathcal{L}_{5+}}_\text{stabilizes} \xrightarrow{\mathrm{Gen}} \underbrace{\mathcal{L}_6 = \emptyset}_\text{AFN-T}
$$

## 6. Почему Diakrisis — на уровне 5+^max

### Диагностика

**Diakrisis не на уровне 6**:

- Не создаёт новую формальную основу — работает с существующими через $\langle\langle \cdot \rangle\rangle$.
- Каждая «новая» конструкция редуцируется к известному аналогу (moduli-stack, accessible endofunctor, internal language).
- Подпадает под AFN-T (препринт теорема `thm:afnt`).

**Diakrisis не на уровне 5** (не является самостоятельным generator-ом):

- Не имеет собственной foundation-ой аксиоматики типа ZFC.
- Канонический примитив $(\langle\langle \cdot \rangle\rangle, \mathsf{M}, \alpha_\mathrm{math}, \sqsubset_\bullet)$ + 13 аксиом — метаструктура над foundations, не генеративное основание.
- Параметризована по R-S (требует $\mathcal{L}_5$ как параметра).

**Diakrisis на уровне 5+**:

- Работает с основаниями как с объектами.
- Классифицирует через $\mathfrak{M}_\mathrm{Fnd} = \mathrm{Trace}(\mathsf{A})/\mathrm{gauge}$.
- Даёт формальный язык для сравнения: ZFC ↔ ETCS (Morita), HoTT ↔ MLTT, CIC ↔ Coq.
- Формализует пределы формализации (AFN-T).

**Diakrisis на уровне 5+^max** (MSFS (Max-1)–(Max-4), **все четыре доказаны как 103.T–106.T**, см. [`/06-limits/10-maximality-theorems`](/06-limits/10-maximality-theorems)):

- **(Max-1)** [Т] Full classification: $\mathrm{image}(\mathrm{Cl}_\mathrm{Diakrisis}) = \mathfrak{M}_\mathrm{Fnd}$ — Теорема **103.T** через универсальную конструкцию $S \mapsto \alpha_S = (\mathrm{Syn}(S), \mathsf{M}_S)$ (Seely 1984 + Hofmann 1997 + Адамек–Росицкий 1994).
- **(Max-2)** [Т] Gauge-fullness через автоэквивалентности ⟪⟫: $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$ — Теорема **104.T** через поднятие Морита-эквивалентностей R-S.
- **(Max-3)** [Т] Depth-stratification через T-2f\* ([`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics)) — блокирует *универсально* (не только 5 семейств) все Яновский-сводимые самореферентные парадоксы — Теорема **105.T** через Яновский 2003 + глубину экспоненциалов.
- **(Max-4)** [Т] Intensional completeness через 98.T / 99.T ([`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement)): slice-локальность $\mathbf{I}_\mathrm{Diakrisis}$ над $\mathfrak{M}_\mathrm{Fnd}$ через эффективный топос Хайланда.

**Сводная теорема 106.T**: $\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}$ — **теорема, а не программа**. Следствие 106.C2: $\mathcal{L}_{\mathrm{Cls}}^{\top} \neq \emptyset$ (утвердительный ответ на открытый вопрос MSFS после Theorem `thm:meta-cat`).

### Редукции к известному аппарату

| Конструкция Diakrisis | Редукция | Источник |
|---|---|---|
| ⟪⟫ как 2-категория | Accessible 2-category | Адамек-Росицкий 1994 |
| 𝖬 | Accessible endofunctor | Адамек 1974 |
| Trace(𝖠) | Initial 𝖬-algebra | Адамек 1974 |
| ι: End(⟪⟫) ↪ ⟪⟫ | 2-topos-like inclusion | Shulman 2008 |
| $\mathfrak{M}_\mathrm{Fnd}$ | Classifying 2-stack | Lurie HTT 2009 §3.2 |
| Gauge-группа G | Automorphism 2-group | Kelly 1982 |
| Intensional refinement $\mathbf{I}$ | Display 2-classes | Jacobs-Streicher, Gambino-Garner 2008 |

Все конструкции — **стандартный** $(\infty, \infty)$-категорный аппарат. Никакой новой foundational механики Diakrisis не вводит, только *синтезирует* известное в meta-каркас.

## 7. Дуальная ε-шкала (Актика)

Каждый уровень $\nu$-шкалы имеет ε-дуал через 108.T (AC/OC Морита-дуальность). Дуальная ε-стратификация — ε-инвариант (активационная глубина акта), 7 уровней:

| Слой | ε-инвариант $\mathsf{e}(\varepsilon)$ | Содержание |
|---|---|---|
| 0: событие | $\mathsf{e} = 0$ | Атомарный акт, не имеет внутренней структуры |
| 1: реакция | $0 < \mathsf{e} < \omega$ | Обученная/врождённая реакция, конечные шаги |
| 2: практика | $\mathsf{e} = \omega$ | Устойчивый паттерн; полная индуктивная глубина |
| 3: традиция | $\mathsf{e} = \omega \cdot k$, $k \geq 2$ | Замкнутая под методами область практик |
| 4: институция | $\mathsf{e} = \omega^2$ | Самовоспроизводящаяся метапрактика |
| 5: цивилизация | $\mathsf{e} \geq \omega \cdot 3 + 1$ | Масштаб всей научно-практической парадигмы |
| 6: апейрон-акт | $\mathsf{e} = \Omega$ | Недостижимый предел; дуал $\alpha_\mathrm{Apeiron}$ |

**Связь с $\nu$-шкалой**. Для любой артикуляции $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ и её дуального акта $\varepsilon(\alpha) \in \rangle\!\rangle \cdot \langle\!\langle$ (по 108.T):

$$
\nu(\alpha) = \mathsf{e}(\varepsilon(\alpha)).
$$

ε- и ν-инварианты — две проекции одного ординального инварианта (Предложение 7.2 в [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality)).

**Примеры параллельной стратификации**:

- $\alpha_\mathrm{uhm}$ (ν = ω·3+1) ↔ $\varepsilon_\mathrm{uhm}$ (ε = ω·3+1, цивилизация).
- $\alpha_\mathrm{ZFC}$ (ν = ω) ↔ $\varepsilon_\mathrm{zfc}$ (ε = ω, практика).
- $\alpha_\mathrm{Apeiron}$ (ν = Ω) ↔ $\varepsilon_\mathrm{Apeiron}$ (ε = Ω, апейрон-акт).

Полный каталог — [`/12-actic/03-epsilon-invariant`](/12-actic/03-epsilon-invariant).

## 8. Граница с препринтом

Препринт MSFS формализует **только**:

- $\mathcal{L}_5$ через (R1)–(R5) (Definition `def:R`).
- $\mathcal{L}_{5+}$ через (M1)–(M5) (Definition `def:meta`).
- $\mathcal{L}_{5+}^{\max}$ через (Max-1)–(Max-4) (Definition `def:maximality`).
- $\mathcal{L}_6$ через $(F_S) \wedge (\Pi_4) \wedge (\Pi_{3\text{-max}})$ (Theorem `thm:afnt`).

Уровни $\mathcal{L}_0$..$\mathcal{L}_4$ **не вводятся в препринте** — они являются Diakrisis-локальным уточнением для внутренней классификации мат-деятельности.

Причина такого разделения:

- Препринт оптимизирован под рецензионную чистоту: каждая формальная дефиниция должна иметь категорно-теоретический status. Уровни 0–4 апеллируют к внутренней рефлексии методов (через 𝖬 внутри конкретной $\alpha$), что не добавляет силы главной теореме AFN-T.
- Diakrisis, как полная мета-структурная теория, использует L_0–L_4 для структурного описания математической активности (лемма / теорема / область / парадигма) на языке 𝖬-глубины.

**Эффект**: препринт остаётся минимально-достаточным для AFN-T; Diakrisis получает полное описание мат-ландшафта.

## 9. Связь с препринтом (таблица)

| Diakrisis-термин | Препринт MSFS label |
|---|---|
| Иерархия уровней 0..6 (строгая в Diakrisis) | Definition `def:hierarchy` (только $\mathcal{L}_{\mathrm{Fnd}}, \mathcal{L}_{\mathrm{Cls}}, \mathcal{L}_{\mathrm{Cls}}^{\top}, \mathcal{L}_{\mathrm{Abs}}$) |
| Структурные свойства страт | Proposition `prop:level-structure` |
| Horizontal $\mathrm{Cls}$ vs vertical $\mathrm{Gen}$ | §2.3 + Proposition `prop:no-collapse` |
| $\mathcal{L}_5$ условия (R1)–(R5) | $\mathcal{L}_{\mathrm{Fnd}}$ через Definition `def:rs` |
| $\mathcal{L}_{5+}$ условия (M1)–(M5) | $\mathcal{L}_{\mathrm{Cls}}$ через Definition `def:meta` |
| $\mathcal{L}_{5+}^{\max}$ условия (Max-1)–(Max-4) | $\mathcal{L}_{\mathrm{Cls}}^{\top}$ через Definition `def:maximality` |
| $\mathcal{L}_6$ условия $(F), (\Pi_4), (\Pi_{3\text{-max}})$ | $\mathcal{L}_{\mathrm{Abs}}$ через Definitions `def:F`, `def:pi4`, `def:pi3max` |
| $\mathcal{L}_6 = \emptyset$ | $\mathcal{L}_{\mathrm{Abs}} = \emptyset$ по Theorem `thm:afnt` |
| $\nu$-инвариант и его стратификация | *Diakrisis-only* (23.T1, `/03-formal-architecture/08-cardinal-analysis`) |
| Уровни 0, 1, 2, 3, 4 | *Diakrisis-only* (настоящий документ) |

## 10. Ссылки

- **Препринт §2** — formal development of levels 5, 5+, 5+^max, 6;
- **Препринт §9** — уровень 5+ мета-классификация;
- [`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics) — 13 аксиом + T-2f\* depth-stratification;
- [`/03-formal-architecture/08-cardinal-analysis`](/03-formal-architecture/08-cardinal-analysis) — $\nu$-стратификация и 23.T1;
- [`/06-limits/02-th-final`](/06-limits/02-th-final) — AFN-T detail;
- [`/06-limits/06-absoluteness`](/06-limits/06-absoluteness) — пять осей;
- [`/06-limits/09-meta-classification`](/06-limits/09-meta-classification) — meta-структура 100.T–102.T;
- [`/10-reference/04-afn-t-correspondence`](/10-reference/04-afn-t-correspondence) — полная таблица соответствия Diakrisis ↔ MSFS.
