/**
 * MATI - Mathematical Archetype Type Indicator
 * Core Engine v2.1 - Clean Layout Edition
 */

// ====== 1. 28道完整潜行测试题库 ======
const QUESTIONS = [
    // --- 维度一：A vs G (1-7) ---
    {
        text: "重构复杂代码或理论推导时，最让你感到安心的瞬间是：",
        options: [
            { text: "理清了所有核心变量的生命周期与转换逻辑。", scores: {A: 2, R: 1} },
            { text: "发现不同模块之间的调用呈现出某种对称规律。", scores: {A: 1, I: 1} },
            { text: "脑海中形成了数据在函数层级间流动的拓扑网络。", scores: {G: 1, C: 1} },
            { text: "能在纸上画出整个系统高屋建瓴的架构层次图。", scores: {G: 2, S: 1} }
        ]
    },
    {
        text: "整理个人庞大的知识库或文献笔记时，你最倾向于哪种方式：",
        options: [
            { text: "建立严密的标签系统与属性元数据，通过多条件组合检索。", scores: {A: 2, F: 1} },
            { text: "按照主题的大纲层级，将文件放入相互独立、嵌套的文件夹中。", scores: {A: 1, R: 1} },
            { text: "依靠双向链接，让笔记之间自然形成一张网状的知识图谱。", scores: {G: 1, D: 1} },
            { text: "使用类似“无限画布”的工具，将笔记在二维平面上摊开排布。", scores: {G: 2, I: 1} }
        ]
    },
    {
        text: "走进一个具有复杂哥特式穹顶的陌生建筑，你的视线最先被什么吸引：",
        options: [
            { text: "支撑柱的受力分布与节点力学逻辑。", scores: {A: 1, R: 1} },
            { text: "墙壁花窗图案的排列法则与对称性。", scores: {A: 2, F: 1} },
            { text: "光线切割空间形成的明暗体积感。", scores: {G: 2, S: 1} },
            { text: "空间向高处一点收缩坍缩的纵深感。", scores: {G: 1, C: 1} }
        ]
    },
    {
        text: "学习一个全新的物理公式时，你第一步通常是：",
        options: [
            { text: "检查量纲是否一致，观察变量间的比例关系。", scores: {A: 2, R: 1} },
            { text: "寻找这个公式在特殊或极限情况下的解析解。", scores: {A: 1, C: 1} },
            { text: "在头脑中构思这个公式对应的物理实体运动图像。", scores: {G: 1, I: 1} },
            { text: "思考这个公式所代表的场或空间如何变形。", scores: {G: 2, D: 1} }
        ]
    },
    {
        text: "你更倾向于如何形容“真理”：",
        options: [
            { text: "一串刻在宇宙底层的、绝对正确的源代码。", scores: {A: 2, F: 1} },
            { text: "一个能够解释所有现象的、简洁优美的公理。", scores: {A: 1, R: 1} },
            { text: "一种维持万物和谐运转的、隐秘的空间结构。", scores: {G: 1, S: 1} },
            { text: "一个多维、折叠且自洽的高维实体。", scores: {G: 2, C: 1} }
        ]
    },
    {
        text: "在解决数学难题遇到瓶颈时，你通常会：",
        options: [
            { text: "尝试引入新的变量或通过代数变换进行化简。", scores: {A: 2, D: 1} },
            { text: "寻找问题与已知经典模型之间的逻辑同构。", scores: {A: 1, R: 1} },
            { text: "试图画出问题的示意图，寻找直觉上的突破口。", scores: {G: 2, I: 1} },
            { text: "闭上眼，想象问题在不同坐标系下的表现。", scores: {G: 1, C: 1} }
        ]
    },
    {
        text: "如果要把你的大脑比作一种工具，它更接近：",
        options: [
            { text: "一台高效运行、逻辑严密的符号处理器。", scores: {A: 2, R: 1} },
            { text: "一个不断扩充、井然有序的分类数据库。", scores: {A: 1, F: 1} },
            { text: "一个实时渲染、视野广阔的 3D 模拟器。", scores: {G: 2, D: 1} },
            { text: "一块感光敏锐、捕捉整体构图的底片。", scores: {G: 1, I: 1} }
        ]
    },

    // --- 维度二：S vs D (8-14) ---
    {
        text: "欣赏艺术品时，哪种意象更让你心动：",
        options: [
            { text: "一座静穆、永恒的希腊大理石雕塑。", scores: {S: 2, G: 1} },
            { text: "一张捕捉瞬间平衡的精细静物写生。", scores: {S: 1, R: 1} },
            { text: "一幅笔触激荡、色彩流动的表现主义油画。", scores: {D: 1, I: 1} },
            { text: "一段展现生命演化、充满节奏感的延时摄影。", scores: {D: 2, C: 1} }
        ]
    },
    {
        text: "你如何理解“一个系统的稳定性”：",
        options: [
            { text: "结构坚实，任何外力都无法撼动其基石。", scores: {S: 2, A: 1} },
            { text: "处于最低能量状态，没有任何改变的动机。", scores: {S: 1, F: 1} },
            { text: "具有强大的修复能力，能在扰动后迅速回正。", scores: {D: 1, R: 1} },
            { text: "在高速旋转或演化中，通过动态反馈维持的平衡。", scores: {D: 2, C: 1} }
        ]
    },
    {
        text: "面对长途骑行后的身体疲劳，你更关注：",
        options: [
            { text: "肌肉当前的充血感与酸痛的具体分布。", scores: {S: 2, G: 1} },
            { text: "身体各部分机能此时的损耗程度。", scores: {S: 1, F: 1} },
            { text: "呼吸节奏从急促逐渐平复的演化曲线。", scores: {D: 1, C: 1} },
            { text: "意志力与体力耗尽过程中的那种能量流动感。", scores: {D: 2, I: 1} }
        ]
    },
    {
        text: "读史书时，让你印象最深的是：",
        options: [
            { text: "某个强盛王朝所留下的制度文化遗产。", scores: {S: 2, R: 1} },
            { text: "历史长河中那些恒定不变的人性底色。", scores: {S: 1, I: 1} },
            { text: "时代巨轮下社会阶层剧烈洗牌的过程。", scores: {D: 1, F: 1} },
            { text: "英雄人物在命运转折点上的决策动力。", scores: {D: 2, A: 1} }
        ]
    },
    {
        text: "你认为学习数学的终极意义在于：",
        options: [
            { text: "描述那些超越时间、永恒不变的真理结构。", scores: {S: 2, R: 1} },
            { text: "建立一套完美的分类学，把世界装进格子里。", scores: {S: 1, A: 1} },
            { text: "捕捉万事万物在时间轴上变化的深层律动。", scores: {D: 1, C: 1} },
            { text: "预测复杂系统在未来的走向与演化轨迹。", scores: {D: 2, I: 1} }
        ]
    },
    {
        text: "构思一个方案时，你最关注它的：",
        options: [
            { text: "逻辑是否严丝合缝，没有任何结构漏洞。", scores: {S: 2, R: 1} },
            { text: "各部分比例是否协调，是否符合审美直觉。", scores: {S: 1, G: 1} },
            { text: "方案实施过程中的反馈调节与应变能力。", scores: {D: 1, A: 1} },
            { text: "这个方案能给系统带来的长期演化动力。", scores: {D: 2, I: 1} }
        ]
    },
    {
        text: "如果把你的一生拍成电影，你希望它的基调是：",
        options: [
            { text: "一座宏伟建筑的延时摄影，记录结构的落成。", scores: {S: 2, G: 1} },
            { text: "一组宁静的特写镜头，捕捉生命中的永恒瞬间。", scores: {S: 1, I: 1} },
            { text: "一部充满了冲突与转折的硬核纪录片。", scores: {D: 1, F: 1} },
            { text: "一场持续不断的漂泊与寻找，重点在于“路”本身。", scores: {D: 2, C: 1} }
        ]
    },

    // --- 维度三：F vs C (15-21) ---
    {
        text: "当你凝视夜晚的星空，你的第一感触是：",
        options: [
            { text: "无数明亮的星星像钻石一样散落在黑幕上。", scores: {F: 2, G: 1} },
            { text: "每一个星系都是一个独立的、可观测的单元。", scores: {F: 1, R: 1} },
            { text: "银河像一条平滑、流动的光之河流。", scores: {C: 1, I: 1} },
            { text: "宇宙是一个无边无际、浑然一体的能量场。", scores: {C: 2, S: 1} }
        ]
    },
    {
        text: "你处理多任务的方式更接近：",
        options: [
            { text: "将时间切成半小时一块，每块只做一件事。", scores: {F: 2, A: 1} },
            { text: "设置几个明确的截止日期作为核心节点。", scores: {F: 1, R: 1} },
            { text: "设定优先级，让不同任务在时间里平滑交替。", scores: {C: 1, D: 1} },
            { text: "跟着当下的灵感和状态，顺势推行最顺手的事。", scores: {C: 2, I: 1} }
        ]
    },
    {
        text: "在辩论或博弈中，你的反击倾向于：",
        options: [
            { text: "寻找对方论证中的逻辑断层，进行定点爆破。", scores: {F: 2, R: 1} },
            { text: "拆解对方的证据链，证明其中某一点的虚假。", scores: {F: 1, A: 1} },
            { text: "寻找对方语境中的模糊地带，进行整体消解。", scores: {C: 1, G: 1} },
            { text: "顺着对方的逻辑势能，将其引向荒谬的极限。", scores: {C: 2, D: 1} }
        ]
    },
    {
        text: "对于“人类智慧”的本质，你更倾向于认为：",
        options: [
            { text: "它是由无数次离散的神经电冲动叠加而成的。", scores: {F: 2, A: 1} },
            { text: "它是通过一系列确定的逻辑判断进行决策的。", scores: {F: 1, R: 1} },
            { text: "它是一种连续、不可分割的意识流涌现。", scores: {C: 1, I: 1} },
            { text: "它是像流体一样，不断在环境干扰中寻找最优状态。", scores: {C: 2, D: 1} }
        ]
    },
    {
        text: "你对“完美”的定义是：",
        options: [
            { text: "没有任何多余的零件，每一部分都各司其职。", scores: {F: 2, S: 1} },
            { text: "符合某种黄金分割比例，具有离散的对称美。", scores: {F: 1, G: 1} },
            { text: "边缘圆润、过渡自然，没有任何突兀的棱角。", scores: {C: 1, I: 1} },
            { text: "像水滴一样，在各种力量平衡下达到的极致张力。", scores: {C: 2, D: 1} }
        ]
    },
    {
        text: "在学习“极限”概念时，你最初的心理映射是：",
        options: [
            { text: "一步步逼近、永无止境的离散阶梯。", scores: {F: 2, R: 1} },
            { text: "无穷多个极小的、可数的像素点。", scores: {F: 1, A: 1} },
            { text: "一条不断延伸、最终与边界融合的平滑曲线。", scores: {C: 1, G: 1} },
            { text: "一个不断收缩、最终坍缩成一点的空间场。", scores: {C: 2, S: 1} }
        ]
    },
    {
        text: "如果要在荒岛上生活，你最先考虑：",
        options: [
            { text: "制作一张详细的每日生存清单，分配物资。", scores: {F: 2, R: 1} },
            { text: "搭建一个稳固的避难所，划定安全领地。", scores: {F: 1, S: 1} },
            { text: "观察潮汐和阳光的规律，融入岛屿的节奏。", scores: {C: 1, I: 1} },
            { text: "保持一种开放的心态，随时准备应对未知的变化。", scores: {C: 2, D: 1} }
        ]
    },

    // --- 维度四：I vs R (22-28) ---
    {
        text: "当你在草稿纸上推导出一个极度简洁的公式时：",
        options: [
            { text: "我会立刻开始质疑，担心漏掉了某个负号或系数。", scores: {R: 2, A: 1} },
            { text: "我会从第一原理出发，反复验证每一步逻辑。", scores: {R: 1, S: 1} },
            { text: "我会感到一阵莫名的愉悦，觉得这种简洁感必有深意。", scores: {I: 1, G: 1} },
            { text: "我会下意识地相信它是对的，即使证明还没补齐。", scores: {I: 2, D: 1} }
        ]
    },
    {
        text: "你认为数学证明的本质是：",
        options: [
            { text: "一场不容许任何瑕疵的符号严密拼图。", scores: {R: 2, F: 1} },
            { text: "为了说服最挑剔的审阅者而进行的防御性工作。", scores: {R: 1, A: 1} },
            { text: "一种理顺思绪、将脑中的闪光点固定下来的过程。", scores: {I: 1, S: 1} },
            { text: "一种通向真理的仪式，让我们从模糊走向清晰。", scores: {I: 2, C: 1} }
        ]
    },
    {
        text: "对于“直觉”，你的态度是：",
        options: [
            { text: "它是危险的诱导，经常让人在细节上栽跟头。", scores: {R: 2, F: 1} },
            { text: "它是初步的猜想，必须经过严密的审视才有价值。", scores: {R: 1, S: 1} },
            { text: "它是思维的向导，能帮我从茫茫多的可能性中定位。", scores: {I: 1, G: 1} },
            { text: "它是最高级的认知形式，代表了对规律的底层洞察。", scores: {I: 2, C: 1} }
        ]
    },
    {
        text: "在听一场极高水平的学术讲座时，你更希望：",
        options: [
            { text: "讲者能列出所有前提假设，逻辑链条无懈可击。", scores: {R: 2, A: 1} },
            { text: "讲者能清晰定义每一个符号，不留任何模糊地带。", scores: {R: 1, F: 1} },
            { text: "讲者能提供一个惊艳的直觉隐喻，让我秒懂核心。", scores: {I: 1, G: 1} },
            { text: "讲者能展示出理论背后的美学结构，而非琐碎推导。", scores: {I: 2, S: 1} }
        ]
    },
    {
        text: "如果你发现一个规律在1000次实验中都成立，但理论上无法解释：",
        options: [
            { text: "极度焦虑，觉得这个系统处于一种随时可能崩溃的状态。", scores: {R: 2, S: 1} },
            { text: "废寝忘食地寻找反例，试图证伪这个“伪规律”。", scores: {R: 1, F: 1} },
            { text: "感到兴奋，认为这背后隐藏着某种尚未被形式化的新理。", scores: {I: 1, D: 1} },
            { text: "坦然接受并开始基于它进行下一步探索。", scores: {I: 2, C: 1} }
        ]
    },
    {
        text: "你如何看待“逻辑错误”：",
        options: [
            { text: "它是智力上的污点，是绝对不能被容忍的。", scores: {R: 2, A: 1} },
            { text: "它是系统中的Bug，必须通过彻底的重构来修复。", scores: {R: 1, D: 1} },
            { text: "它是通向正确路径过程中的必要干扰。", scores: {I: 1, F: 1} },
            { text: "它是某种“有益的突变”，有时能导向意想不到的灵感。", scores: {I: 2, G: 1} }
        ]
    },
    {
        text: "面对一个深刻的悖论（如罗素悖论），你的感受是：",
        options: [
            { text: "感到系统崩塌的绝望，必须通过修改公理来修补。", scores: {R: 2, S: 1} },
            { text: "感到一种智力上的挑战，急于理清其中的逻辑纠缠。", scores: {R: 1, A: 1} },
            { text: "感到一种奇妙的愉悦，悖论证明了理性的边界与深度。", scores: {I: 1, C: 1} },
            { text: "感到这是一种自然的暗示，说明我们理解世界的维度太低。", scores: {I: 2, G: 1} }
        ]
    }
];

// ====== 2. 16种高阶心智流形数据库 ======
const ARCHETYPES = {
    "ASFR": { name: "有限群 (Finite Group)", desc: "对称、封闭、极致的符号秩序。你在规则内寻求完美的闭环。" },
    "ASFI": { name: "素数 (Prime Number)", desc: "孤独、不可约、离散世界的直觉基石。看似简单却蕴含深刻直觉。" },
    "ASCR": { name: "巴拿赫空间 (Banach Space)", desc: "完备、线性、无限维的严谨度量。你追求理论的完备性与严密基底。" },
    "ASCI": { name: "谱序列 (Spectral Sequence)", desc: "逐层逼近、关联、抽象代数的洞察力。你擅长在抽象层级中穿梭。" },
    "ADFR": { name: "图灵机 (Turing Machine)", desc: "逻辑确定、可计算、离散变换的终极法则。你相信万物皆可被离散的步骤计算。" },
    "ADFI": { name: "渗流模型 (Percolation)", desc: "涌现、相变、动态演化中的临界直觉。你在简单的规则演化中寻找宏观的秩序涌现。" },
    "ADCR": { name: "微分算子 (Differential Operator)", desc: "连续变换、解析、精准切割时空的利刃。你是连续空间中寻找变化法则的改革者。" },
    "ADCI": { name: "同伦 (Homotopy)", desc: "连续变形、映射演化、代数与拓扑的桥梁。你在事物的演化与形变中寻找深层的不变量。" },
    "GSFR": { name: "超正方体 (Tesseract)", desc: "高维投影、刚性、离散几何的极致结构。你擅长建立跨越维度的严密结构。" },
    "GSFI": { name: "康托尔集 (Cantor Set)", desc: "零测度、不可数、挑战常识的几何基石。你在断裂与离散中看见无限深邃的自相似结构。" },
    "GSCR": { name: "卡拉比-丘流形 (Calabi-Yau)", desc: "紧致、深奥、隐藏在时空深处的严密褶皱。你追求宇宙底层那精妙且复杂的空间结构。" },
    "GSCI": { name: "克莱因瓶 (Klein Bottle)", desc: "升维、自包含、打破内外边界的空间直觉。你的思想没有绝对的内外之分，圆融且连通。" },
    "GDFR": { name: "编织群 (Braid Group)", desc: "纠缠、置换、离散轨迹交织出的动态严谨。你能在复杂的动态交互中理清严密的数学线索。" },
    "GDFI": { name: "奇异吸引子 (Strange Attractor)", desc: "混沌、相空间、动态系统中的优美分形轨迹。你在不可预测的混沌系统中寻找宿命般的轨迹。" },
    "GDCR": { name: "里奇流 (Ricci Flow)", desc: "演化、曲率耗散、消弭奇点的几何外科手术。你用动力学的思维去抚平空间中的一切褶皱与矛盾。" },
    "GDCI": { name: "极小曲面 (Minimal Surface)", desc: "优雅、能量最低、自然界最直觉的张力平衡。你顺应自然的势能，在连续的时空中寻找最优雅的解。" }
};

// ====== 3. 核心应用逻辑 ======
let currentQ = 0;
// 初始分值：提供一个基础平衡态，避免除数为 0
let rawScores = { A: 10, G: 10, S: 10, D: 10, F: 10, C: 10, I: 10, R: 10 };

const dom = {
    setup: document.getElementById('setupSection'),
    quiz: document.getElementById('quizSection'),
    results: document.getElementById('resultsSection'),
    startBtn: document.getElementById('startBtn'),
    restartBtn: document.getElementById('restartBtn'),
    qTitle: document.getElementById('questionTitle'),
    optList: document.getElementById('optionsList'),
    progFill: document.getElementById('progressFill'),
    progText: document.getElementById('progressText'),
    archTitle: document.getElementById('archetypeTitle'),
    archDesc: document.getElementById('archetypeDesc'),
    canvas: document.getElementById('constellationCanvas')
};

dom.startBtn.onclick = () => {
    dom.setup.classList.add('hidden');
    dom.quiz.classList.remove('hidden');
    renderQuestion();
};

dom.restartBtn.onclick = () => location.reload();

function renderQuestion() {
    if (currentQ >= QUESTIONS.length) {
        finishQuiz();
        return;
    }
    const q = QUESTIONS[currentQ];
    dom.qTitle.textContent = q.text;
    dom.optList.innerHTML = '';
    
    const progress = (currentQ / QUESTIONS.length) * 100;
    dom.progFill.style.width = `${progress}%`;
    dom.progText.textContent = `COMPUTING TENSOR [${currentQ + 1}/${QUESTIONS.length}]`;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt.text}`;
        btn.onclick = () => handleAnswer(opt.scores);
        dom.optList.appendChild(btn);
    });
}

function handleAnswer(scores) {
    for (let dim in scores) { rawScores[dim] += scores[dim]; }
    currentQ++;
    renderQuestion();
}

function finishQuiz() {
    dom.quiz.classList.add('hidden');
    dom.results.classList.remove('hidden');
    
    // 计算终态维度
    const resA = rawScores.A >= rawScores.G ? 'A' : 'G';
    const resS = rawScores.S >= rawScores.D ? 'S' : 'D';
    const resF = rawScores.F >= rawScores.C ? 'F' : 'C';
    const resI = rawScores.I >= rawScores.R ? 'I' : 'R';
    const code = resA + resS + resF + resI;

    const archetype = ARCHETYPES[code] || ARCHETYPES["ADCI"];
    dom.archTitle.textContent = `${code} / ${archetype.name}`;
    dom.archDesc.textContent = archetype.desc;

    // 启动投影动画与雷达图
    initResultsVisuals(code);
}

// ====== 4. 动态投影与雷达图渲染引擎 (排版优化版) ======
function initResultsVisuals(code) {
    const canvas = dom.canvas;
    const ctx = canvas.getContext('2d');
    
    // 解决高分屏模糊问题
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    ctx.scale(dpr, dpr);

    // 物理参数基于人格代码调整
    const params = {
        speed: code.includes('D') ? 1.2 : 0.4,
        hue: code.includes('A') ? 220 : 10,
        density: code.includes('F') ? 80 : 40,
        connectivity: code.includes('C') ? 120 : 60,
        rigidity: code.includes('R') ? 0.95 : 0.7
    };

    let particles = Array.from({length: params.density}, () => ({
        x: Math.random() * (cw * 0.6), // 初始生成在左侧 60% 区域
        y: Math.random() * ch,
        vx: (Math.random() - 0.5) * params.speed,
        vy: (Math.random() - 0.5) * params.speed,
        r: code.includes('F') ? 1.5 : 0.5
    }));

    function animate() {
        // 绘制半透明背景产生拖影效果
        ctx.fillStyle = 'rgba(5, 5, 8, 0.2)';
        ctx.fillRect(0, 0, cw, ch);

        // --- 1. 绘制左侧动态粒子投影 ---
        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            
            // 核心修改：让粒子的活动范围严格限制在左边 65% 的区域，避免撞击雷达图
            if(p.x < 0 || p.x > cw * 0.65) p.vx *= -1;
            if(p.y < 0 || p.y > ch) p.vy *= -1;

            ctx.fillStyle = `hsla(${params.hue}, 80%, 60%, 0.8)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            // 粒子之间的连线
            for(let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if(dist < params.connectivity) {
                    ctx.strokeStyle = `hsla(${params.hue + 20}, 70%, 50%, ${1 - dist/params.connectivity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });

        // --- 2. 绘制右上角雷达图 ---
        const radarRadius = Math.min(cw * 0.15, 80); // 根据屏幕自适应大小，最大80
        const radarX = cw - radarRadius - 50; // 靠右对齐，留出 50px 的 padding
        const radarY = radarRadius + 40;      // 靠上对齐，留出 40px 的 padding
        
        drawRadarChart(ctx, radarX, radarY, radarRadius);

        requestAnimationFrame(animate);
    }

    animate();
}

function drawRadarChart(ctx, x, y, radius) {
    const labels = ['A-代数', 'S-静态', 'F-离散', 'I-直觉', 'G-几何', 'D-动力', 'C-连续', 'R-严密'];
    
    // 计算 8 个维度的得分归一化
    const getVal = (v1, v2) => (v1 / (v1 + v2)) * radius * 1.5;
    const points = [
        getVal(rawScores.A, rawScores.G), // 顶
        getVal(rawScores.S, rawScores.D), // 右上
        getVal(rawScores.F, rawScores.C), // 右
        getVal(rawScores.I, rawScores.R), // 右下
        getVal(rawScores.G, rawScores.A), // 底
        getVal(rawScores.D, rawScores.S), // 左下
        getVal(rawScores.C, rawScores.F), // 左
        getVal(rawScores.R, rawScores.I)  // 左上
    ];

    // 绘制雷达图底层蜘蛛网格
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i=0; i<8; i++) {
        const angle = (i * Math.PI * 2) / 8 - Math.PI/2;
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    }
    // 绘制同心多边形
    for(let j=1; j<=3; j++) {
        const stepRadius = radius * (j/3);
        for(let i=0; i<8; i++) {
            const angle = (i * Math.PI * 2) / 8 - Math.PI/2;
            const px = x + Math.cos(angle) * stepRadius;
            const py = y + Math.sin(angle) * stepRadius;
            if(i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
    }
    ctx.stroke();

    // 绘制用户数据染色区域
    ctx.fillStyle = 'rgba(0, 240, 255, 0.3)';
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((val, i) => {
        // 防止数据溢出外框
        const clampedVal = Math.min(val, radius); 
        const angle = (i * Math.PI * 2) / 8 - Math.PI/2;
        const px = x + Math.cos(angle) * clampedVal;
        const py = y + Math.sin(angle) * clampedVal;
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 绘制周围文字标签
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px JetBrains Mono';
    ctx.textBaseline = 'middle';
    labels.forEach((label, i) => {
        const angle = (i * Math.PI * 2) / 8 - Math.PI/2;
        const lx = x + Math.cos(angle) * (radius + 20);
        const ly = y + Math.sin(angle) * (radius + 20);
        
        if (Math.cos(angle) > 0.1) ctx.textAlign = 'left';
        else if (Math.cos(angle) < -0.1) ctx.textAlign = 'right';
        else ctx.textAlign = 'center';
        
        ctx.fillText(label, lx, ly);
    });
}