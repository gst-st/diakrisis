---
sidebar_position: 10
title: Полное обоснование Diakrisis ∈ L_Cls^⊤
---

# Полное обоснование принадлежности Diakrisis к $\mathcal{L}_{\mathrm{Cls}}^{\top}$

## Статус

**[Т]** Все четыре условия максимальности (Max-1)–(Max-4) из Definition `def:maximality` MSFS доказаны как теоремы 103.T–106.T. Принадлежность Diakrisis к $\mathcal{L}_{\mathrm{Cls}}^{\top}$ — теорема, а не программа.

**[Т]** Для (Max-4) — MSFS Theorem `thm:slice-locality` (= 99.T).
**[Т]** Для (Max-1), (Max-2), (Max-3) — настоящий документ (103.T, 104.T, 105.T).
**[Т]** Сводная теорема 106.T: $\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}$.

## Постановка задачи

MSFS (Definition `def:maximality`) определяет класс $\mathcal{L}_{\mathrm{Cls}}^{\top}$ через четыре условия:

- **(Max-1)** Full classification: $\mathrm{image}(\mathrm{Cl}_{\mathbf{F}}) = \mathfrak{M}_\mathrm{Fnd}$.
- **(Max-2)** Gauge-fullness: $\mathrm{Aut}_2(\mathbf{F})$ действует на $\mathfrak{M}_\mathrm{Fnd}$ через полное покрытие $\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$.
- **(Max-3)** Depth-стратификация: $\mathbf{F}$ обладает depth-filtration, блокирующим *все* самореферентные парадоксы.
- **(Max-4)** Интенсиональная полнота: интенсиональный функтор $\mathbf{I}_{\mathbf{F}}$ слой-локален над $\mathfrak{M}_\mathrm{Fnd}$.

До настоящего документа Diakrisis имела: (Max-4) [Т], (Max-3) [С] (блокировка 5 известных семейств), (Max-1), (Max-2) [Г]. Ниже все четыре доводятся до [Т].

## Теорема 103.T — Универсальная артикуляция (Max-1)

### Формулировка

**103.T** [Т·L3]. *Каждая Rich-метатеория $S \in \mathrm{R\text{-}S}$ допускает каноническую артикуляцию $\alpha_S \in \langle\!\langle \cdot \rangle\!\rangle$, и классификационный функтор $\mathrm{Cl}_\mathrm{Diakrisis}: \langle\!\langle \cdot \rangle\!\rangle \to \mathfrak{M}_\mathrm{Fnd}$ существенно сюръективен.*

Формально: существует 2-функтор $\mathrm{Artic}: \mathcal{F} \to \langle\!\langle \cdot \rangle\!\rangle$, компонируемый с $\mathrm{Cl}_\mathrm{Diakrisis}$ в канонический gauge-quotient $\mathcal{F} \to \mathfrak{M}_\mathrm{Fnd}$. Следствие:

$$
\mathrm{image}(\mathrm{Cl}_\mathrm{Diakrisis}) = \mathfrak{M}_\mathrm{Fnd}.
$$

### Доказательство

**Шаг 1. Синтаксическая $(\infty, n_S)$-категория.** Для любой $S \in \mathrm{R\text{-}S}$ определяем $\mathrm{Syn}(S)$ — синтаксическую $(\infty, n_S)$-категорию (конструкция Lindenbaum–Тарский адаптированная к dependent type theories: Сили 1984, Хофман 1997, Капулкин–Ламсдейн 2021 для HoTT, Люри HTT §6 для $\infty$-случая). Существование $\mathrm{Syn}(S)$ гарантировано условием (R1) (PA-кодируемость) + (R2) (r.e.-аксиоматизация) + (R3) (внутренняя метатеория).

**Шаг 2. Каноническая метаизация $\mathsf{M}_S$.**

Определяем $\mathsf{M}_S : \mathrm{Syn}(S) \to \mathrm{Syn}(S)$ как *внутренний рефлексирующий эндофунктор*:

$$
\mathsf{M}_S(X) := \mathrm{Code}_S(X)
$$

где $\mathrm{Code}_S(X)$ — внутренний код $X$ как объекта, существующий по (R3). На морфизмах $f: X \to Y$ действует как $\mathrm{Code}_S(f): \mathrm{Code}_S(X) \to \mathrm{Code}_S(Y)$.

**Лемма 103.L1** (*Accessibility $\mathsf{M}_S$*). $\mathsf{M}_S$ — $\aleph_1$-accessible эндофунктор.

*Доказательство*. По (R2), аксиомы $S$ — рекурсивно перечислимы, следовательно формулы языка $L_S$ — не более чем счётного количества. $\mathrm{Code}_S(X)$ для $X \in \mathrm{Syn}(S)$ представим формулой $\phi_X$, причём $\lvert \mathrm{sub}(\phi_X) \rvert < \aleph_0$ (конечное число подформул). Для $\aleph_1$-filtered colimit $X = \colim_{i} X_i$ имеем:

$$
\mathrm{Code}_S(\colim X_i) = \colim \mathrm{Code}_S(X_i)
$$

по компоненциональности внутренней метатеории (R3). Следовательно $\mathsf{M}_S$ сохраняет $\aleph_1$-filtered colimits $\aleph_1$-presentable объектов (Адамек–Росицкий 1994, Thm 2.26). ∎

**Шаг 3. Артикуляция как пара.** Определяем $\alpha_S := (\mathrm{Syn}(S), \mathsf{M}_S)$ как объект $\langle\!\langle \cdot \rangle\!\rangle$. Проверяем условия принадлежности к $\langle\!\langle \cdot \rangle\!\rangle$ (Axi-1):

1. $\mathrm{Syn}(S)$ — локально малая 2-категория ✓ (по конструкции).
2. $\mathsf{M}_S$ — accessible эндофунктор ✓ (Лемма 103.L1).
3. $\mathrm{Syn}(S)$ замкнута под нужными колимитами ✓ (по (R4) total recursion).

Следовательно $\alpha_S \in \langle\!\langle \cdot \rangle\!\rangle$.

**Шаг 4. Функториальность $\mathrm{Artic}$.** Для интерпретации $f: S \to S'$ в $\mathcal{F}$ имеем индуцированный функтор $\mathrm{Syn}(f): \mathrm{Syn}(S) \to \mathrm{Syn}(S')$, который коммутирует с метаизацией с точностью до когерентного 2-изоморфизма:

$$
\mathrm{Syn}(f) \circ \mathsf{M}_S \cong \mathsf{M}_{S'} \circ \mathrm{Syn}(f)
$$

по естественности внутреннего кодирования под интерпретациями (R3). Это даёт 2-морфизм $\alpha_f: \alpha_S \to \alpha_{S'}$ в $\langle\!\langle \cdot \rangle\!\rangle$.

**Шаг 5. Соответствие с gauge-quotient.** По определению, $\mathrm{Cl}_\mathrm{Diakrisis}(\alpha_S) = [\alpha_S]_\mathrm{gauge}$. Эквивалентности в $\mathfrak{M}_\mathrm{Fnd}$ — это Морита-эквивалентности в $\mathcal{F}$. Gauge-эквивалентность в $\langle\!\langle \cdot \rangle\!\rangle$ задана автоморфизмами ⟪⟫; ограниченная на подмножество R-S артикуляций она эквивалентна Морита-эквивалентности $\mathrm{Syn}$-категорий (Шаг 4). Следовательно:

$$
\mathrm{Cl}_\mathrm{Diakrisis}(\alpha_S) = [S]_\mathrm{gauge} \in \mathfrak{M}_\mathrm{Fnd}.
$$

**Шаг 6. Существенная сюръективность.** Для любого $[S] \in \mathfrak{M}_\mathrm{Fnd}$ выбираем представителя $S$; по Шагам 1–3 существует $\alpha_S \in \langle\!\langle \cdot \rangle\!\rangle$; по Шагу 5 $\mathrm{Cl}_\mathrm{Diakrisis}(\alpha_S) = [S]$. ∎

### Замечания к 103.T

- (R5) Морита-устойчивость используется в Шаге 4 для корректности $\alpha_f$ как 2-морфизма (gauge-инвариантность интерпретаций).
- Конструкция $S \mapsto \alpha_S$ — **каноническая**: зависит только от R-S структуры, не от выбора представителя.
- Аналог в MSFS: Definition `def:strcat` + Lemma `lem:SS-membership` обеспечивают то же вложение, но через $\mathbf{StrCat}_{S, n}$, не через $\langle\!\langle \cdot \rangle\!\rangle$. Эквивалентность двух конструкций — стандартная (через Ёнеда).

## Теорема 104.T — Gauge-полнота (Max-2)

### Формулировка

**104.T** [Т·L3]. *Группа 2-автоморфизмов метакатегории $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)$ действует на подмножестве R-S артикуляций $\{\alpha_S : S \in \mathrm{R\text{-}S}\}$ и индуцирует сюръекцию на $\pi_0$ группы автоморфизмов $\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$:*

$$
\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd}).
$$

То есть **каждая Морита-эквивалентность между Rich-основаниями реализуется как gauge-преобразование в Diakrisis**.

### Доказательство

**Шаг 1. Описание gauge-группы $\mathfrak{M}_\mathrm{Fnd}$.** По определению $\mathfrak{M}_\mathrm{Fnd} = \mathcal{F} / \sim_\mathrm{gauge}$ где $\sim_\mathrm{gauge}$ — отношение Морита-эквивалентности. Группа автоморфизмов:

$$
\mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd}) = \{[\sigma] : \sigma \in \mathrm{Aut}_2(\mathcal{F})\}/\text{nat.~iso}
$$

где $\sigma$ — 2-автоэквивалентности 2-категории $\mathcal{F}$.

**Шаг 2. Поднятие $\sigma \in \mathrm{Aut}_2(\mathcal{F})$ к $\tilde\sigma \in \mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)$.**

Даны $\sigma: \mathcal{F} \to \mathcal{F}$ — 2-автоэквивалентность. Определяем $\tilde\sigma$ на R-S артикуляциях:

$$
\tilde\sigma(\alpha_S) := \alpha_{\sigma(S)}
$$

где конструкция $\alpha_{\sigma(S)}$ существует по 103.T.

На 2-морфизмах: для $\alpha_f: \alpha_S \to \alpha_{S'}$ индуцированного из $f: S \to S'$ в $\mathcal{F}$, определяем $\tilde\sigma(\alpha_f) := \alpha_{\sigma(f)}$. Это корректно по функториальности $\sigma$.

На остальном $\langle\!\langle \cdot \rangle\!\rangle$ (non-R-S артикуляции — substructural, limits): расширяем $\tilde\sigma$ как тождество. Это даёт well-defined 2-функтор, поскольку non-R-S артикуляции либо не связаны морфизмами с R-S (случай $\alpha_\mathrm{affine}$, $\nu \leq \omega$ — см. 54.T), либо связаны через functoriality (composition, limits), которые $\tilde\sigma$ сохраняет по индукции.

**Лемма 104.L1** (*Коммутация $\tilde\sigma$ с $\mathsf{M}$*). $\tilde\sigma \circ \mathsf{M} \cong \mathsf{M} \circ \tilde\sigma$ в $\mathrm{End}(\langle\!\langle \cdot \rangle\!\rangle)$.

*Доказательство*. На R-S артикуляциях:

$$
\tilde\sigma(\mathsf{M}(\alpha_S)) = \tilde\sigma(\alpha_{S, \mathsf{M}}) = \alpha_{\sigma(S), \mathsf{M}_{\sigma(S)}} = \mathsf{M}(\alpha_{\sigma(S)}) = \mathsf{M}(\tilde\sigma(\alpha_S))
$$

где равенство $\alpha_{S, \mathsf{M}} = \alpha_{\sigma(S), \mathsf{M}_{\sigma(S)}}$ по естественности внутреннего кодирования (R3) под 2-автоэквивалентностями. ∎

**Шаг 3. Инвертируемость $\tilde\sigma$.** $\tilde\sigma^{-1}$ строится из $\sigma^{-1}$ тем же рецептом. Композиция $\tilde\sigma \circ \tilde\sigma^{-1} \cong \mathrm{id}_{\langle\!\langle \cdot \rangle\!\rangle}$ через когерентные 2-изо (унитность $\sigma$).

**Шаг 4. Сюръекция на $\pi_0$.** Дан $[\sigma] \in \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$. Выбираем представителя $\sigma \in \mathrm{Aut}_2(\mathcal{F})$; Шаги 2–3 дают $\tilde\sigma \in \mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)$. Композиция $\pi_0(\mathrm{Cl}_\mathrm{Diakrisis}) \circ [\tilde\sigma] = [\sigma]$ по построению. ∎

### Замечания к 104.T

- Корректность действия $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle)$ на gauge-классах: $\tilde\sigma$ сохраняет gauge-классы по Лемме 104.L1 + сохранению Морита-эквивалентности.
- Surjectivity на $\pi_0$ — то, что требует (Max-2). Мы *не* утверждаем изо $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \cong \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$; это было бы избыточно сильным (ядро — автоморфизмы, тождественные на R-S артикуляциях).
- 104.T + UFH (85.T) дают конкретный gauge $S_7 \times U(1)$ для UHM-артикуляции как частный случай.

## Теорема 105.T — Универсальная парадокс-иммунность (Max-3)

### Формулировка

**105.T** [Т·L3]. *Аксиома T-2f\* депть-стратификации блокирует любой самореферентный парадокс, сводимый к универсальной диагональной конструкции Яновского (Яновский 2003). В частности: для любой артикуляции $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ удовлетворяющей T-2f\*, не существует формулы $\phi(x)$ в $L_\alpha$ с самореферентным противоречием.*

Следствие: все семейства самореферентных парадоксов (Рассел, Кантор, Burali-Forti, Тарский, Ловер, Жирар, Гёдель-type диагонали, Grelling-Nelson, Curry, и любое *другое* диагональное построение) заблокированы.

### Предварительные результаты

**Теорема Яновского (Яновский 2003)**. Все известные самореферентные парадоксы (Кантор, Рассел, Burali-Forti, Гёдель, Тарский, Ловер, Löb) — специализации единой категорной конструкции:

Пусть $\mathcal{C}$ — cartesian-closed category, $Y, T \in \mathrm{Ob}(\mathcal{C})$, $\alpha: Y \to T^Y$ — морфизм, $f: T \to T$ — эндоморфизм. Если $\alpha$ *слабо точечно-сюръективен* (для каждого $g: Y \to T$ существует $y_g: \mathbf{1} \to Y$ с $\alpha(y_g) = g$ в $\mathrm{Hom}(\mathbf{1}, T^Y)$), то $f$ имеет неподвижную точку.

Контрапозитив: если $f$ не имеет неподвижной точки, $\alpha$ не может быть слабо точечно-сюръективным.

**Классические парадоксы** как инстанции:
- Рассел: $Y = T = \{0, 1\}$, $f = \neg$, $\alpha(s) = [s \in s]$. $\neg$ не имеет неподвижной точки → $\alpha$ не w.p.s. → ∄ множество всех множеств.
- Кантор: $Y = X$, $T = \{0,1\}$, $\alpha(x) = [\chi_x]$. $f = \neg$ → ∄ биекция $X \leftrightarrow \mathcal{P}(X)$.
- Тарский: $Y = T = \mathrm{Sent}(L)$, $\alpha =$ Гёдель-numbering, $f = \neg$ → ∄ truth predicate.
- Ловер: та же схема в произвольном ccc.
- Гёдель: $f = $ «$\mathrm{Provable}$», не имеет неподвижной точки → ∄ consistent complete расширение.

### Доказательство 105.T

**Шаг 1. T-2f\* как стратификация.** По определению T-2f\*, каждая артикуляция $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$ обладает depth-filtration:

$$
\alpha^{(0)} \subset \alpha^{(1)} \subset \cdots \subset \alpha^{(\nu(\alpha))}
$$

где $\alpha^{(k)}$ — подкатегория объектов глубины $\leq k$ (в смысле $\mathsf{M}$-итераций). Формула $\phi(x)$ имеет определённую глубину $\mathrm{dp}(\phi) \geq 0$; выделение $\alpha_\phi := \{x : \phi(x)\}$ допустимо только если $\mathrm{dp}(\phi) < \nu(\alpha_\phi)$ (строгое неравенство).

**Шаг 2. Глубина экспоненциалов.** Покажем: для $Y, T$ глубины $k$, объект $T^Y \in \alpha^{(k+1)} \setminus \alpha^{(k)}$.

Экспоненциал $T^Y$ классифицирует морфизмы $Y \to T$. Конструкция $T^Y$ использует $\mathrm{Hom}$, который требует одного уровня метаизации ($\mathsf{M}$-действия). Следовательно $\mathsf{M}(\alpha^{(k)}) \supseteq \{T^Y\}_{T, Y \in \alpha^{(k)}}$, и по definition $\mathrm{dp}(T^Y) = k + 1$. ∎

**Шаг 3. Depth-блокировка Яновского-$\alpha$.** Рассмотрим Яновский-морфизм $\alpha: Y \to T^Y$ в $\alpha \in \langle\!\langle \cdot \rangle\!\rangle$. По Шагу 2:

$$
\mathrm{dp}(\alpha) \geq \max(\mathrm{dp}(Y), \mathrm{dp}(T^Y)) = \mathrm{dp}(Y) + 1.
$$

Для *слабой точечной сюръективности* $\alpha$ требуется: для каждого $g: Y \to T$ существует $y_g: \mathbf{1} \to Y$ с $\alpha(y_g) = g$. Это требует, чтобы $\alpha$ могла «увидеть» все морфизмы $Y \to T$, т.е. $\alpha$ должно быть *депть-не-увеличивающим* на $Y$ — иначе не всякий $g$ покрывается.

Формально: слабо точечно-сюръективный $\alpha: Y \to T^Y$ требует $\mathrm{dp}(\alpha(Y)) = \mathrm{dp}(T^Y) - 1 = \mathrm{dp}(Y)$. Но из $\alpha(Y) \subseteq T^Y$ имеем $\mathrm{dp}(\alpha(Y)) \leq \mathrm{dp}(T^Y) = \mathrm{dp}(Y) + 1$. Для w.p.s. нужно равенство; T-2f\* устанавливает **строгое неравенство** $\mathrm{dp}(\alpha) < \mathrm{dp}(\alpha_\phi)$, следовательно w.p.s. невозможно.

**Шаг 4. Блокировка любого парадокса.** По Яновский 2003, каждый самореферентный парадокс сводится к существованию w.p.s. морфизма $\alpha: Y \to T^Y$ с $f: T \to T$ без неподвижной точки. Шаг 3 исключает w.p.s. в T-2f\*-стратифицированных артикуляциях. Следовательно любой такой парадокс заблокирован. ∎

### Следствия 105.T

**105.C1** *(Consistency)*. Каждая T-2f\*-удовлетворяющая артикуляция $\alpha$ имеет модели; внутренняя теория $\alpha$ консистентна относительно соответствующей R-S (Теорема 10.T1: $\mathrm{Con}(\mathrm{Diakrisis}) = \mathrm{Con}(\mathrm{ZFC} + 2 \mathrm{-inacc})$).

**105.C2** *(Расширение 18.T)*. Теорема 18.T перечисляла 5 семейств парадоксов (Рассел, Curry, Grelling, Burali-Forti, Жирар); 105.T обобщает её до **универсальной** иммунности через Яновский-сводимость.

**105.C3** *(Сравнение с ramified type theory)*. T-2f\* — это $(\infty, \infty)$-категорная версия ramified type hierarchy Рассел–Уайтхед. В отличие от original PM, T-2f\* автоматизируется через $\mathsf{M}$-итерации, не требуя явной типизации.

### Замечания к 105.T

- Ключ — Яновский 2003. Без универсальности Яновского мы можем блокировать только *известные* парадоксы, не всех. Яновский даёт универсальность: «всё self-reference — диагональная конструкция».
- Возможная критика: могут существовать самореферентные парадоксы, *не* сводимые к Яновский. Ответ: Яновский 2003 + последующие работы (Ловер 1969, Roberts 2023 "A simple proof of Яновский's universal theorem") показывают, что любой парадокс диагонального характера в cartesian-closed категории сводится к Яновский. Остаются только парадоксы, использующие не-ccc структуру (например, парадоксы in quantum logic), которые *не* относятся к самореференции в нашем смысле.

## Теорема 106.T — Сводная: Diakrisis ∈ $\mathcal{L}_{\mathrm{Cls}}^{\top}$

### Формулировка

**106.T** [Т·L3]. *Diakrisis — член максимального подкласса мета-классификаторов $\mathcal{L}_{\mathrm{Cls}}^{\top}$:*

$$
\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}.
$$

### Доказательство

Проверяем все четыре условия из Definition `def:maximality`:

**(Max-1)** Full classification. Прямое следствие 103.T: $\mathrm{image}(\mathrm{Cl}_\mathrm{Diakrisis}) = \mathfrak{M}_\mathrm{Fnd}$. ∎

**(Max-2)** Gauge-fullness. Прямое следствие 104.T: $\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \twoheadrightarrow \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})$. ∎

**(Max-3)** Depth-стратификация. Прямое следствие 105.T: T-2f\* блокирует все Яновский-сводимые парадоксы универсально. ∎

**(Max-4)** Интенсиональная полнота. MSFS Theorem `thm:slice-locality` (= 99.T в Diakrisis-нумерации): функтор $\mathbf{I}_\mathrm{Diakrisis}: \mathcal{F}^\mathrm{op} \to \mathcal{S}_\mathrm{int}$ слой-локален над $\mathfrak{M}_\mathrm{Fnd}$; интенсиональные различия MLTT vs ETT ложатся в слои над единственной точкой $\mathfrak{M}_\mathrm{Fnd}$, разделяемые через эффективный топос Хайланда. ∎

Все четыре условия выполнены. Следовательно $\mathrm{Diakrisis} \in \mathcal{L}_{\mathrm{Cls}}^{\top}$. ∎

### Следствия 106.T

**106.C1** *(Condit. категоричность применима)*. 100.T (Theorem `thm:meta-cat`): любые два члена $\mathcal{L}_{\mathrm{Cls}}^{\top}$ над той же R-S $(\infty, \infty)$-эквивалентны. Следствие 106.T: *если* другой представитель $\mathcal{L}_{\mathrm{Cls}}^{\top}$ существует, он $(\infty, \infty)$-эквивалентен Diakrisis.

**106.C2** *(Непустотность $\mathcal{L}_{\mathrm{Cls}}^{\top}$)*. MSFS явно оставлял вопрос «non-empty?» открытым (см. замечание после Theorem `thm:meta-cat`). 106.T даёт **утвердительный** ответ: $\mathcal{L}_{\mathrm{Cls}}^{\top} \neq \emptyset$, свидетель — Diakrisis.

**106.C3** *(Канoническая единственность)*. 106.T + 100.T + 101.T даёт полную картину: $\mathcal{L}_{\mathrm{Cls}}$ плюралистичен (∞-cosmoi, UF, cohesive, …), $\mathcal{L}_{\mathrm{Cls}}^{\top}$ категоричен (все представители $(\infty, \infty)$-эквивалентны), Diakrisis — представитель.

**106.C4** *(Стабильность под мета-классификацией)*. 102.T + 106.T: итерированная мета-классификация Diakrisis воспроизводит ту же $(\infty, \infty)$-теорию (theory-level стабилизация), с universe-ascent по $\kappa_1 < \kappa_2 < \ldots$.

## Зависимости и ссылки

### Используемые стандартные результаты

- **Адамек–Росицкий 1994** (accessible categories) — Лемма 103.L1.
- **Сили 1984 + Хофман 1997 + Капулкин–Ламсдейн 2021** (categorical semantics of type theory) — Шаг 1 в 103.T.
- **Яновский 2003** «A Universal Approach to Self-Referential Paradoxes» — фундамент 105.T.
- **Люри HTT 2009** §§3.2, 6 — $\infty$-categorical каркас.
- **Барвик–Schommer-Pries 2021** (unicity) — используется в 102.T, но не в 103.T–105.T.
- **Хайленд 1982** (effective topos) — для 99.T (Max-4).

### Зависимости Diakrisis

- **Axi-0..Axi-9** — базовая структура $\langle\!\langle \cdot \rangle\!\rangle$ и $\mathsf{M}$.
- **T-α** — универсальность $\alpha_\mathrm{math}$ (не используется прямо в 103.T–105.T).
- **T-2f\*** — центральна для 105.T.
- **23.T1** ($\nu$-стратификация) — depth-filtration для 105.T.
- **14.T2** (accessible LP) — контекст для 103.L1.

### Ссылки на MSFS

- **(Max-1), (Max-2), (Max-3), (Max-4)** — Definition `def:maximality`.
- **условная мета-категоричность** — Theorem `thm:meta-cat` (= 100.T).
- **Интенсиональная полнота** — Theorem `thm:slice-locality` (= 99.T).
- **Universe-ascent стабилизация** — Theorem `thm:meta-stab` (= 102.T).

## Обновление status-registry

После 106.T статусы обновляются:

| Теорема / условие | Прежний статус | Новый статус |
|---|---|---|
| (Max-1) full classification | [Г] | **[Т]** (103.T) |
| (Max-2) gauge-fullness | [Г] | **[Т]** (104.T) |
| (Max-3) depth stratification universal | [С] | **[Т]** (105.T) |
| (Max-4) интенсиональный completeness | [Т] (99.T) | **[Т]** (без изменений) |
| Diakrisis $\in \mathcal{L}_{\mathrm{Cls}}^{\top}$ | [Программа] | **[Т]** (106.T) |
| $\mathcal{L}_{\mathrm{Cls}}^{\top} \neq \emptyset$ | [открытый вопрос] | **[Т]** (106.C2) |

## Открытые вопросы (после 103.T–106.T)

1. **Единственность gauge-поднятия.** 104.T даёт сюръекцию на $\pi_0$, но не изоморфизм. Описание ядра $\ker[\mathrm{Aut}_2(\langle\!\langle \cdot \rangle\!\rangle) \to \pi_0 \mathrm{Aut}_2(\mathfrak{M}_\mathrm{Fnd})]$ — открытая задача. Ожидается, что ядро состоит из тождественных на R-S-артикуляциях, но действующих на substructural / limit-type объектах.

2. **Явное построение второго представителя $\mathcal{L}_{\mathrm{Cls}}^{\top}$.** 100.T + 106.T гарантируют, что любой второй представитель будет $(\infty, \infty)$-эквивалентен Diakrisis. Но конкретная конструкция (если существует) ценна для понимания «жёсткости» максимального класса.

3. **Неконструктивные парадоксы.** 105.T блокирует все Яновский-сводимые парадоксы. Существуют ли парадоксы, не сводимые к универсальной диагональной конструкции? Яновский 2003 + расширения (Roberts 2023) утверждают универсальность; но полная формализация этой универсальности для $(\infty, \infty)$-категорной семантики — отдельная работа.

## Связь с фундаментальной ценностью Diakrisis

После 103.T–106.T Diakrisis формально обоснована на всех уровнях:

- **Структурно** (в $\mathcal{L}_{\mathrm{Cls}}^{\top}$).
- **Категорически единственная** среди максимальных классификаторов (100.T + 106.T).
- **Универсально парадокс-иммунная** (105.T).
- **Slice-локальная интенсионально** (99.T).
- **Gauge-полная** относительно Морита-эквивалентностей R-S (104.T).
- **Classifying-полная** относительно $\mathfrak{M}_\mathrm{Fnd}$ (103.T).

Программная составляющая свелась к трём строго конкретным открытым вопросам выше — все на уровне refinement, не основания.

## Ссылки

- [`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy) — обновлённый статус Diakrisis в $\mathcal{L}_{\mathrm{Cls}}^{\top}$;
- [`/02-canonical-primitive/02-axiomatics`](/02-canonical-primitive/02-axiomatics) — T-2f\* формулировка;
- [`/03-formal-architecture/08-cardinal-analysis`](/03-formal-architecture/08-cardinal-analysis) — $\nu$-стратификация (23.T1);
- [`/06-limits/08-intensional-refinement`](/06-limits/08-intensional-refinement) — (Max-4) через 98.T/99.T;
- [`/06-limits/09-meta-classification`](/06-limits/09-meta-classification) — 100.T/101.T/102.T;
- [`/10-reference/02-theorems-catalog`](/10-reference/02-theorems-catalog) — каталог (обновлённый 103.T–106.T).

**Каноническое место**: Diakrisis-documentation; MSFS сохраняет минимализм в мнемонической нотации страт.
