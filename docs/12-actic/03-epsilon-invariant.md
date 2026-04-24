---
sidebar_position: 3
title: ε-инвариант и каталог актов
---

# ε-инвариант — активационная ординальная арифметика

## 1. Определение

**Определение 3.1.** Для акта $\varepsilon \in \rangle\!\rangle \cdot \langle\!\langle$ **активационной глубиной** называется наименьший ординал $\varepsilon^\sharp$ такой, что $\varepsilon$ принадлежит $\mathrm{ActTrace}(\mathsf{A})_{\varepsilon^\sharp}$ — $\varepsilon^\sharp$-й стадии трансфинитной итерации $\mathsf{A}$:

$$
\varepsilon^\sharp = \min\bigl\{\; \kappa \in \mathrm{Ord} \;\big|\; \varepsilon \in \mathrm{colim}_{\beta < \kappa} \mathsf{A}^\beta(\varepsilon_0) \;\bigr\},
$$

где $\varepsilon_0 = \varepsilon_\mathrm{math}$ — стартовый выделенный акт.

По соглашению: ε-инвариант $\varepsilon^\sharp$ обозначается той же буквой $\varepsilon$, что и сам акт, где это не вызывает путаницы; в каталогах ниже используется нотация $\varepsilon(\text{акт}) = \kappa$.

## 2. Семь порядковых уровней

Параллельно 23.T1 (стратификация артикуляций) для актов имеется стратификация по величине активационной глубины:

| Слой | Значение $\varepsilon$ | Эпистемологический статус |
|---|---|---|
| **Слой 0: событие** | $\varepsilon = 0$ | Однократное атомарное событие; не имеет внутренней структуры |
| **Слой 1: реакция** | $0 < \varepsilon < \omega$ | Конечный шаг от атомарного события; обученная или врождённая реакция |
| **Слой 2: практика** | $\varepsilon = \omega$ | Повторяемый устойчивый паттерн; требует полной индуктивной глубины |
| **Слой 3: традиция** | $\varepsilon = \omega \cdot k$, $2 \leq k < \omega$ | Замкнутая под методами область практик; методы применимы к самим себе конечно |
| **Слой 4: институция** | $\varepsilon = \omega^2$ | Самовоспроизводящаяся метапрактика над традициями |
| **Слой 5: цивилизационная сборка** | $\varepsilon \geq \omega \cdot 3 + 1$ | Масштаб всей научно-практической парадигмы |
| **Слой 6: апейрон-акт** | $\varepsilon = \Omega$ | Недостижимый предел; дуал $\alpha_\mathrm{Apeiron}$ |

Эта шкала дуально согласована со шкалой ν в [`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy).

## 3. Полный каталог актов с $\varepsilon$-значениями

Каталог параллелен каталогу артикуляций из [`/intro`](/intro) §Каталог артикуляций. Каждая артикуляция имеет парного акта-энактмента по теореме 108.T:

| Акт | Дуал артикуляции $\alpha$ | $\varepsilon$ | Описание практики |
|---|---|---|---|
| $\varepsilon_\mathrm{zfc}$ | $\alpha_\mathrm{zfc}$ | $\omega$ | «Делать теорию множеств» — практика построения теоретико-множественных доказательств |
| $\varepsilon_\mathrm{hott}$ | $\alpha_\mathrm{hott}$ | $\omega + 1$ | Практика гомотопически-типовых доказательств через пути и высшие тождества |
| $\varepsilon_\mathrm{cic}$ | $\alpha_\mathrm{cic}$ | $\omega + 2$ | Практика построения конструктивных доказательств (Coq, Rocq) |
| $\varepsilon_\mathrm{linear}$ | $\alpha_\mathrm{linear}$ | $\omega + 1$ | Ресурсное рассуждение — каждая предпосылка используется ровно один раз |
| $\varepsilon_\mathrm{afa}$ | $\alpha_\mathrm{AFA-coalg}$ | $\omega \cdot 2$ | Работа с неподфундированными объектами через коалгебры |
| $\varepsilon_\mathrm{ncg}$ | $\alpha_\mathrm{ncg}$ | $\omega \cdot 2$ | Программа некоммутативной геометрии — спектральные тройки |
| $\varepsilon_{\infty\mathrm{-topos}}$ | $\alpha_{\infty\mathrm{-topos}}$ | $\omega \cdot 2$ | Работа в $(\infty, 1)$-топосах по Люри |
| $\varepsilon_\mathrm{cohesion}$ | $\alpha_\mathrm{cohesion}$ | $\omega \cdot 2$ | Когезивный подход к дифференциальной геометрии (Шрайбер) |
| $\varepsilon_\mathrm{motivic}$ | $\alpha_\mathrm{motivic}$ | $\omega \cdot 2 + 1$ | Программа мотивной гомотопической теории (Воеводский) |
| $\varepsilon_\mathrm{Д\text{-}hybrid}$ | $\alpha_\mathrm{Д\text{-}hybrid}$ | $\omega \cdot 2 + 1$ | Диакрисисова гибридная практика (linear + AFA + !) |
| $\varepsilon_\mathrm{uhm}$ | $\alpha_\mathrm{uhm}$ | $\omega \cdot 3 + 1$ | **Перформанс УГМ** — жить в рамке теории |
| $\varepsilon_{\infty\text{-}\mathrm{cat}}$ | $\alpha_{\infty\text{-}\mathrm{cat}}$ | $\Omega$ | Практика $(\infty, \infty)$-рассуждения |
| $\varepsilon_\mathrm{Apeiron}$ | $\alpha_\mathrm{Apeiron}$ | $\Omega$ | Апейрон-акт — предел активационной иерархии |

## 4. Акты без прямого $\alpha$-дуала — новые акты Актика

Некоторые акты не имеют очевидного парного объекта-артикуляции. Они существуют в $\rangle\!\rangle \cdot \langle\!\langle$, но их $\alpha$-дуал (образ по 108.T) тоже является «объектом-практикой», а не классической математической структурой.

| Акт | $\varepsilon$ | Комментарий |
|---|---|---|
| $\varepsilon_\mathrm{compute}$ | $\omega$ | Акт вычисления — фундаментальная практика |
| $\varepsilon_\mathrm{observe}$ | $\omega$ | Акт наблюдения — первичен в квантовой теории |
| $\varepsilon_\mathrm{decide}$ | $\omega$ | Акт решения между альтернативами |
| $\varepsilon_\mathrm{translate}$ | $\omega + 1$ | Акт перевода между артикуляциями (= gauge-переход) |
| $\varepsilon_\mathrm{prehend}$ | $\omega$ | Акт схватывания по Уайтхеду — квантовое измерение |
| $\varepsilon_\mathrm{разл}$ | $\omega$ | Базовый акт различения = $\varepsilon_\mathrm{math}$ |
| $\varepsilon_\mathrm{construct}$ | $\omega$ | Конструктивный акт по Брауэру — основа интуиционизма |
| $\varepsilon_\mathrm{enact}$ | $\omega + 1$ | Акт энактивации по Вареле |
| $\varepsilon_\mathrm{автопоэзис}$ | $\omega^2$ | Самовоспроизведение (Матурана–Варела); $\mathsf{A}$-фиксточка |
| $\varepsilon_\mathrm{SMD}$ | $\omega^2$ | Система-мыследеятельность Щедровицкого |
| $\varepsilon_\mathrm{верификация}$ | $\omega \cdot 2$ | Практика формальной верификации (Verum) |
| $\varepsilon_\mathrm{доказательство}$ | $\omega$ | Единичный акт доказательства |

## 5. Арифметика $\varepsilon$

### 5.1 Сложение

Для актов $\varepsilon_1, \varepsilon_2$ с глубинами $\kappa_1, \kappa_2$:
- Последовательная композиция ($\varepsilon_1$ затем $\varepsilon_2$): $\varepsilon_1 \circ \varepsilon_2$ имеет глубину $\max(\kappa_1, \kappa_2)$ при совместимости.
- Активация внешним действием: $\mathsf{A}(\varepsilon)$ имеет глубину $\kappa + 1$ (точный на единицу прирост).

### 5.2 Умножение

Для композитной практики из $k$ координированных актов: $\varepsilon = \omega \cdot k$, если каждый из $k$ актов является $\omega$-глубиной и координация требует внешнего метауровня.

### 5.3 Предельные ординалы

При $\kappa = \omega^2 = \omega \cdot \omega$: это институциональный уровень, где бесконечное семейство традиций достигает co-limit-стабильности. Этот предел требует $\aleph_1$-accessibility $\mathsf{A}$ (по A-2).

### 5.4 Движение к $\Omega$

$\Omega$ — наименьший недостижимый кардинал-ординал, при котором все ниже приведённые акты определены. Это граница Актика-универсума; за ней — $\varepsilon_\mathrm{Apeiron}$, формально вне $\rangle\!\rangle \cdot \langle\!\langle$ (по аналогу 19.T1).

## 6. Соответствие с $\nu$-инвариантом

**Теорема 3.2** (из 108.T пункт (4)). Для каждой артикуляции $\alpha$:

$$
\nu(\alpha) = \varepsilon\bigl(\varepsilon(\alpha)\bigr),
$$

где $\varepsilon(\alpha) \in \rangle\!\rangle \cdot \langle\!\langle$ — дуал-акт артикуляции $\alpha$ по 108.T. **ε- и ν-глубины совпадают** как ординалы.

*Следствие.* Каталог актов из §3 имеет те же $\varepsilon$-значения, что и $\nu$-значения парных артикуляций. Они — две проекции одного ординального инварианта.

## 7. Практическое значение для Verum

$\varepsilon$-инвариант даёт новую ось для Verum-стратегий (дуал `@verify(strategy)`):

```verum
@enact(epsilon = "omega")    // практика уровня theorem
@enact(epsilon = "omega_2")  // практика уровня area / tradition
@enact(epsilon = "omega_squared")  // институциональная практика
```

Проверка `verum audit --epsilon` даёт ε-координату любого корпуса, параллельно $\nu$-координате. Это делает практики, а не только теоремы, first-class гражданами системы.

## 8. Связь с Noesis и УГМ

Noesis-платформа должна уметь индексировать знание и по $\alpha$-координате (структура), и по $\varepsilon$-координате (практика). Это даёт **двумерную классификацию знания**:

```
                      Знание
                     /      \
          Как артикуляция   Как практика
             (ν, α)            (ε, ε-акт)
```

Обе координаты для одного знания определяются теоремой 108.T.

УГМ как $\alpha_\mathrm{uhm}$ имеет $\nu = \omega \cdot 3 + 1$. Соответствующий $\varepsilon_\mathrm{uhm}$ имеет $\varepsilon = \omega \cdot 3 + 1$: практика жить-по-УГМ — цивилизационная сборка, включающая активное соблюдение 7 инвариантов, порогов сознания и всех связанных практик.

## 9. Ссылки

- [`/12-actic/00-foundations`](/12-actic/00-foundations) — обзор.
- [`/12-actic/02-dual-primitive`](/12-actic/02-dual-primitive) — формальное ядро.
- [`/12-actic/04-ac-oc-duality`](/12-actic/04-ac-oc-duality) — доказательство 108.T.
- [`/03-formal-architecture/08-cardinal-analysis`](/03-formal-architecture/08-cardinal-analysis) — $\nu$-стратификация (ОЦ-дуал).
- [`/00-foundations/05-level-hierarchy`](/00-foundations/05-level-hierarchy) — иерархия уровней (ν через 0..6).
