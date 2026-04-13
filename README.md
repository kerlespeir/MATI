# MATI: Mathematical Archetype Type Indicator

> **高维心智映射测试 / High-Dimensional Mind Mapping**
> 
> Discover your mathematical manifold. 寻找你的数学物理原型。

[中文版](#中文介绍) | [English Version](#english-introduction)

---

## 🇨🇳 中文介绍

**MATI** (Mathematical Archetype Type Indicator) 是一个基于纯前端构建的交互式测试项目。它摒弃了传统 MBTI 的日常标签，通过 28 道学术与生活情境题，将受测者的潜意识投影到四个正交的数学/物理维度上，最终将个人的思维模式“坍缩”为 16 种高阶数学物理流形之一（如：同伦、卡拉比-丘流形、奇异吸引子、康托尔集等）。

### 📐 核心维度 (The 4 Axes)

测试由四组对立且互补的认知基底构成：
1. **感知方式：代数 (A) vs 几何 (G)** —— 偏好抽象符号的代数结构，还是直观空间的空间拓扑。
2. **存在形态：静态 (S) vs 动力 (D)** —— 关注事物永恒不变的实体，还是研究系统演化的动力学法则。
3. **世界颗粒度：离散 (F) vs 连续 (C)** —— 认为世界是由清晰边界的量子/像素组成，还是不可分割的平滑流形。
4. **认识论偏好：直觉 (I) vs 严密 (R)** —— 追求启发式的物理洞察与跳跃，还是绝对严丝合缝的公理化推演。

### ⚙️ 计分规则 (Continuous Spectrum Scoring)

MATI 摒弃了非黑即白的“二元选择法”，采用**连续光谱与多维张量计分**。
* **隐蔽式情境**：测试题（如“重构复杂代码的瞬间”、“面对深刻的悖论”）的选项不直接暴露维度。
* **张量加权**：每一个选项不仅对单一维度产生影响，而是施加一组带权重的“推力”。例如，某个倾向于“系统化解构”的选项，会在后台触发 `scores: {A: 2, R: 1}`，同时增加代数与严密的分值。
* **基础平衡态**：系统初始状态设定为 `rawScores = { A: 10, G: 10... }` 以避免极端情况下的除零错误，随着 28 道题的推进，心智坐标逐渐向某一极点偏移。
* **原型生成**：最终比较四组对抗维度的净得分（如 A > G, D > S），生成四位字母代码（如 `ADCI`），并映射到对应的数学实体（同伦 Homotopy）。

### 💻 技术实现 (Implementation Details)

本项目采用 **Pure Web Stack (HTML5 / CSS3 / Vanilla JS)**，零依赖，极度轻量。适合直接部署于 GitHub Pages 等静态托管平台。

* **UI/UX 设计**：采用“深空量子”暗黑主题（Deep Space Dark Mode），结合 CSS 玻璃拟物化（Glassmorphism）和渐变发光球体，营造前沿科学的沉浸感。字体排版混合使用了 `JetBrains Mono`（代码终端感）与 `Cormorant Garamond`（数学论文感）。
* **参数化 Canvas 渲染引擎**：这是本项目的视觉核心。在结果页中，左侧的“拓扑投影动画”和右侧的“心智雷达图”均由原生 Canvas 实时计算绘制。
    * 动画并非随机生成，而是**基于用户的最终得分参数化**的：
        * `Speed` (运动速度) 取决于 **S/D** 维度（动力学 D 则粒子运动更快）。
        * `Hue` (色相) 取决于 **A/G** 维度（代数 A 为冷色电光蓝，几何 G 为暖色）。
        * `Connectivity` (连通距离) 取决于 **F/C** 维度（连续 C 则连线更密集成网）。
        * `Density/Rigidity` 取决于 **F** 和 **R** 维度的结合。

### 🚀 如何运行

本项目无须 Node.js 或任何构建工具。
1. `git clone` 本仓库。
2. 使用浏览器直接双击打开 `index.html`。
3. （推荐）使用 VS Code 的 Live Server 插件打开以获得最佳本地体验。

---

## 🇬🇧 English Introduction

**MATI** (Mathematical Archetype Type Indicator) is an interactive, pure-frontend web application. It transcends traditional personality tests by using 28 scenario-based questions (blending academia and daily life) to project the user's subconscious onto four orthogonal mathematical/physical dimensions. Ultimately, your thought pattern "collapses" into one of 16 high-order manifolds (e.g., Homotopy, Calabi-Yau, Strange Attractor, Cantor Set).

### 📐 Core Dimensions (The 4 Axes)

The indicator is built upon four opposing yet complementary cognitive foundations:
1. **Perception: Algebra (A) vs Geometry (G)** — Preference for abstract, symbolic algebraic structures vs. intuitive, spatial topological visualization.
2. **State of Being: Static (S) vs Dynamic (D)** — Focus on eternal, unchanging entities vs. the dynamical laws of system evolution.
3. **Granularity: Finite/Discrete (F) vs Continuous (C)** — Viewing the world as quantifiable, distinct elements vs. an indivisible, smooth manifold.
4. **Epistemology: Intuition (I) vs Rigor (R)** — Relying on heuristic physical insights and leaps vs. strictly axiomatic, airtight deductions.

### ⚙️ Scoring Mechanism (Continuous Spectrum Scoring)

MATI abandons the rigid "binary choice" approach in favor of a **Continuous Spectrum and Tensor-weighted scoring system**.
* **Concealed Scenarios**: Questions (e.g., "Refactoring complex code," "Facing a deep paradox") mask their underlying dimensions.
* **Tensor Weighting**: A single chosen option doesn't just add +1 to a trait. It applies a weighted vector. For instance, an analytical choice might apply `scores: {A: 2, R: 1}`, simultaneously pushing the user towards Algebra and Rigor.
* **Baseline Equilibrium**: The system initializes at a balanced state (`rawScores = { A: 10, G: 10... }`) to prevent zero-division. Across 28 questions, the user's mental coordinates gradually drift towards specific poles.
* **Archetype Generation**: The net scores of the opposing axes are compared (e.g., A > G, D > S) to generate a 4-letter code (like `ADCI`), which maps exactly to a specific mathematical entity (e.g., Homotopy).

### 💻 Implementation Details

This project is built on the **Pure Web Stack (HTML5 / CSS3 / Vanilla JS)**. It requires zero dependencies and is extremely lightweight, perfect for static hosting like GitHub Pages.

* **UI/UX Design**: Features a "Deep Space Quantum" dark mode theme, combining CSS Glassmorphism with glowing gradient orbs to create an immersive, cutting-edge science vibe. Typography blends `JetBrains Mono` (for a terminal aesthetic) with `Cormorant Garamond` (reminiscent of LaTeX academic papers).
* **Parametric Canvas Rendering Engine**: The visual core of the project. On the results page, both the "Topological Projection Animation" and the "Mind Radar Chart" are rendered in real-time using the native HTML5 Canvas API.
    * The animation is NOT random; it is **parameterized by the user's final score**:
        * `Speed` depends on the **S/D** axis (Dynamic 'D' yields faster particles).
        * `Hue` depends on the **A/G** axis (Algebra 'A' yields cold cyan, Geometry 'G' yields warm colors).
        * `Connectivity` depends on the **F/C** axis (Continuous 'C' results in longer distance connections, forming a web).
        * `Density/Rigidity` is influenced by the combination of **F** and **R** axes.

### 🚀 How to Run

No Node.js or build tools required.
1. `git clone` this repository.
2. Simply open `index.html` in any modern web browser.
3. (Recommended) Use the Live Server extension in VS Code for the best local testing experience.

---
*Generated by the collision of Human Intuition and Artificial Formalism.*
