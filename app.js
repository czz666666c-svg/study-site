const SUBJECTS = {
  math: "高数",
  physics: "大物"
};

const VOLUMES = {
  math1: "高数上",
  math2: "高数下",
  physics1: "大物上",
  physics2: "大物下"
};

const STORAGE = {
  users: "studyAppUsers",
  current: "studyAppCurrentUser",
  progress: (name) => `studyAppProgress:${name}`
};

const videos = [
  {
    id: "v-math2-twohour",
    title: "高等数学下期末突击大串讲",
    subject: "math",
    volume: "math2",
    topic: "思维导图、考点公式梳理、押题串讲",
    duration: "约 4.8 小时",
    views: "181.2万播放",
    playValue: 181.2,
    purpose: "适合考前二刷，把高数下公式和大题套路集中串起来。",
    url: "https://www.bilibili.com/video/BV1zr421F7UN/"
  },
  {
    id: "v-math2-pass",
    title: "猴博士高等数学下 3小时不挂",
    subject: "math",
    volume: "math2",
    topic: "微积分下、高数下考前速成",
    duration: "约 1.6 小时",
    views: "1152.9万播放",
    playValue: 1152.9,
    purpose: "播放量很高的高数下压缩课，适合只剩短时间时快速保底。",
    url: "https://www.bilibili.com/video/BV1GW411A73u/"
  },
  {
    id: "v-math2-gaoshubang",
    title: "高数下 2小时期末速成",
    subject: "math",
    volume: "math2",
    topic: "高数下期末高频考点",
    duration: "2 小时",
    views: "187.7万播放",
    playValue: 187.7,
    purpose: "用于二刷和查漏，尤其适合只剩一两天时压缩复习。",
    url: "https://www.bilibili.com/video/BV1qCN4ziE5Y/"
  },
  {
    id: "v-math2-five",
    title: "框框老师高等数学下 6小时速成课",
    subject: "math",
    volume: "math2",
    topic: "高等数学下全册、期末考试、补考重修",
    duration: "约 7 小时",
    views: "1739.0万播放",
    playValue: 1739.0,
    purpose: "高数下第一优先视频，播放量最高，适合按章节扫完整本框架。",
    url: "https://www.bilibili.com/video/BV1Hu411s7J1/"
  },
  {
    id: "v-math2-honey",
    title: "蜂考高等数学下 4小时快速突击",
    subject: "math",
    volume: "math2",
    topic: "高数下全册重点、期末不挂科",
    duration: "约 3.5 小时",
    views: "141.8万播放",
    playValue: 141.8,
    purpose: "适合作为高数下第三套讲法，听不懂前两套时换老师补同一考点。",
    url: "https://www.bilibili.com/video/BV16CNTesEFN/"
  },
  {
    id: "v-math2-map",
    title: "高数下思维导图 + 考点公式梳理",
    subject: "math",
    volume: "math2",
    topic: "高数下公式、押题、考前冲刺",
    duration: "约 7.3 小时",
    views: "105.4万播放",
    playValue: 105.4,
    purpose: "适合考前最后一天用来过公式表和常见题型入口。",
    url: "https://www.bilibili.com/video/BV1qXN9z5E8V/"
  },
  {
    id: "v-math1-rush",
    title: "高数上期末考试突击速成",
    subject: "math",
    volume: "math1",
    topic: "极限、导数、积分",
    duration: "速成",
    views: "辅助",
    playValue: 20,
    purpose: "高数上只作辅助回看，不进入默认冲刺主线。",
    url: "https://www.bilibili.com/video/BV1o7kqY5E3i/"
  },
  {
    id: "v-math1-four",
    title: "高等数学上 4 小时速成课",
    subject: "math",
    volume: "math1",
    topic: "函数极限、导数、积分、微分方程",
    duration: "4 小时",
    views: "辅助",
    playValue: 18,
    purpose: "如果高数上基础影响高数下计算，再临时回看。",
    url: "https://www.bilibili.com/video/BV1SK4y1q7pY/"
  },
  {
    id: "v-phy-tsinghua-3h",
    title: "大学物理 3小时期末速成课",
    subject: "physics",
    volume: "all",
    topic: "力学、热学、光学、电磁学、相对论",
    duration: "约 11.7 小时",
    views: "1141.8万播放",
    playValue: 1141.8,
    purpose: "大物考前第一优先视频，用来快速建立答题框架。",
    url: "https://www.bilibili.com/video/BV1VS411A75c/"
  },
  {
    id: "v-phy-mavenyu",
    title: "东北大学马文蔚大学物理",
    subject: "physics",
    volume: "all",
    topic: "大学物理系统课",
    duration: "全程课",
    views: "2426.9万播放",
    playValue: 2426.9,
    purpose: "基础薄弱时补概念，优先看自己考试范围内的小节。",
    url: "https://www.bilibili.com/video/BV1qW411H7UX/"
  },
  {
    id: "v-phy-hou",
    title: "猴博士大学物理 3小时不挂",
    subject: "physics",
    volume: "all",
    topic: "大物考前速成、力热光电磁",
    duration: "约 1.6 小时",
    views: "1030.6万播放",
    playValue: 1030.6,
    purpose: "时间很紧时的大物保底课，适合先搭公式框架再刷题。",
    url: "https://www.bilibili.com/video/BV1L5411b7eB/"
  },
  {
    id: "v-phy-honey",
    title: "蜂考大学物理 3小时快速突击",
    subject: "physics",
    volume: "all",
    topic: "大学物理期末冲刺、力学、热学、光学、电磁学",
    duration: "约 11.1 小时",
    views: "824.7万播放",
    playValue: 824.7,
    purpose: "大物综合突击备用课，适合跟着章节补常考模型。",
    url: "https://www.bilibili.com/video/BV1KSPeeGE1q/"
  },
  {
    id: "v-phy-gaoshushu",
    title: "高数叔《大学物理》精讲课",
    subject: "physics",
    volume: "all",
    topic: "大物精讲、知识点串联",
    duration: "精讲",
    views: "381.9万播放",
    playValue: 381.9,
    purpose: "适合看完速成课后补薄弱概念。",
    url: "https://www.bilibili.com/video/BV1ez4y1179X/"
  },
  {
    id: "v-phy-em-honey",
    title: "蜂考大学物理电磁学 4小时快速突击",
    subject: "physics",
    volume: "physics2",
    topic: "静电场、磁场、电磁感应",
    duration: "4 小时",
    views: "380.6万播放",
    playValue: 380.6,
    purpose: "大物下电磁学专项补强，适合电磁感应和磁场题不会列式时看。",
    url: "https://www.bilibili.com/video/BV1XJCzYyEcp/"
  },
  {
    id: "v-phy-full",
    title: "大学物理力热光电磁期末速成",
    subject: "physics",
    volume: "all",
    topic: "力学、电磁学、振动、热力学、光学",
    duration: "约 7.2 小时",
    views: "134.1万播放",
    playValue: 134.1,
    purpose: "大物上下册都考时作为主线复习。",
    url: "https://www.bilibili.com/video/BV1kc411L7oh/"
  },
  {
    id: "v-phy-rush",
    title: "大学物理期末复习速成课",
    subject: "physics",
    volume: "all",
    topic: "力学、热学、光学、振动波动、电磁学",
    duration: "速成",
    views: "94.6万播放",
    playValue: 94.6,
    purpose: "按模块挑自己薄弱的部分看。",
    url: "https://www.bilibili.com/video/BV19x411d7Ka/"
  },
  {
    id: "v-phy-top2",
    title: "大学物理 Top2 学长期末速成",
    subject: "physics",
    volume: "all",
    topic: "考前重点",
    duration: "速成",
    views: "61.6万播放",
    playValue: 61.6,
    purpose: "离考试近时快速扫高频知识点。",
    url: "https://www.bilibili.com/video/BV19oCNYHE9B/"
  },
  {
    id: "v-phy2-special",
    title: "大学物理电磁学 3小时速成课",
    subject: "physics",
    volume: "physics2",
    topic: "静电场、磁场、电磁感应",
    duration: "约 2.8 小时",
    views: "93.2万播放",
    playValue: 93.2,
    purpose: "大物下电磁学补弱，适合静电场、磁场、电磁感应集中复习。",
    url: "https://www.bilibili.com/video/BV1sS411N7hC/"
  },
  {
    id: "v-phy-exercise",
    title: "大学物理期末习题讲解",
    subject: "physics",
    volume: "all",
    topic: "习题讲解",
    duration: "题目课",
    views: "题目补充",
    playValue: 15,
    purpose: "看完知识点后，用题目课校准解题步骤。",
    url: "https://www.bilibili.com/video/BV1jJ411x7Ap/"
  }
];

const topicSpecs = [
  {
    id: "m-limit",
    subject: "math",
    volume: "math1",
    title: "极限",
    videoId: "v-math1-rush",
    summary: "期末常考等价无穷小、洛必达、重要极限和左右极限。先判断型别，再选工具。",
    formulas: ["sin x ~ x", "(1+x)^(1/x) -> e", "洛必达: 0/0 或 ∞/∞"],
    problems: [
      ["基础", "求 lim(x→0) (sin 3x)/(2x)。", "看到 sin(kx) 先等价成 kx。", ["sin 3x ~ 3x。", "原式 ~ 3x/(2x)。", "约去 x 得 3/2。"], "3/2", "不要把 sin 3x 等价成 x，系数 3 不能丢。"],
      ["常考", "求 lim(x→0) (1-cos x)/x^2。", "用 1-cos x ~ x^2/2。", ["套等价无穷小。", "原式 ~ (x^2/2)/x^2。", "极限为 1/2。"], "1/2", "这题也可用洛必达两次，但考场更推荐等价替换。"],
      ["易错", "求 lim(x→0+) ln x。", "先看趋近方向和函数图像。", ["x 从正侧趋近 0。", "ln x 会不断减小。", "极限为 -∞。"], "-∞", "不能代入 x=0，ln 0 没有定义。"]
    ]
  },
  {
    id: "m-continuity",
    subject: "math",
    volume: "math1",
    title: "连续",
    videoId: "v-math1-four",
    summary: "重点是分段函数参数、间断点类型、闭区间连续函数性质。",
    formulas: ["连续: lim f(x)=f(a)", "可去间断: 极限存在值不等", "跳跃间断: 左右极限不同"],
    problems: [
      ["基础", "f(x)=x^2, x≠1; f(1)=2，判断 x=1 连续性。", "比较极限和函数值。", ["lim(x→1)x^2=1。", "f(1)=2。", "极限存在但不等于函数值。"], "不连续，可去间断", "极限存在不代表连续，还要等于函数值。"],
      ["常考", "f(x)=kx+1 (x<0), x^2+k (x≥0)，求在 0 连续的 k。", "左右极限等于 f(0)。", ["左极限为 1。", "右极限和 f(0) 都是 k。", "令 1=k。"], "k=1", "分段点处 f(0) 属于 x≥0 那段。"],
      ["易错", "判断 f(x)=1/x 在 x=0 是否连续。", "连续必须先有定义。", ["f(0) 无定义。", "左右趋近还发散。", "所以不连续。"], "不连续，无穷间断", "不能说函数在定义域外连续。"]
    ]
  },
  {
    id: "m-derivative",
    subject: "math",
    volume: "math1",
    title: "导数",
    videoId: "v-math1-four",
    summary: "重点是复合函数、隐函数、参数方程和高阶导数。考场先拆结构。",
    formulas: ["(uv)'=u'v+uv'", "(f(g(x)))'=f'(g)g'", "dy/dx=-(F_x/F_y)"],
    problems: [
      ["基础", "求 y=(x^2+1)^3 的导数。", "外层三次方，内层 x^2+1。", ["外层导数为 3(x^2+1)^2。", "内层导数为 2x。", "相乘。"], "y'=6x(x^2+1)^2", "链式法则不能漏乘内层导数。"],
      ["常考", "由 x^2+y^2=1 求 dy/dx。", "两边对 x 求导，y 看作 y(x)。", ["2x+2y y'=0。", "移项得 2y y'=-2x。", "解出 y'=-x/y。"], "dy/dx=-x/y", "对 y^2 求导是 2y y'，不是 2y。"],
      ["易错", "求 y=x^x 的导数。", "底和指数都含 x，先取对数。", ["ln y=x ln x。", "y'/y=ln x+1。", "代回 y=x^x。"], "y'=x^x(ln x+1)", "不要误用普通幂函数公式 nx^(n-1)。"]
    ]
  },
  {
    id: "m-monotonic",
    subject: "math",
    volume: "math1",
    title: "单调极值",
    videoId: "v-math1-rush",
    summary: "核心步骤是求导、找驻点、列表判断符号。极值点不等于最值点。",
    formulas: ["f'(x)>0 单调增", "f'(x)<0 单调减", "极值: f' 符号变号"],
    problems: [
      ["基础", "判断 f(x)=x^2-2x 的单调区间。", "求导后看符号。", ["f'(x)=2x-2。", "x<1 时 f'<0，x>1 时 f'>0。", "所以先减后增。"], "(-∞,1) 减，(1,∞) 增", "区间端点要由导数零点给出。"],
      ["常考", "求 f(x)=x^3-3x 的极值。", "找 f'=0 并做符号表。", ["f'=3x^2-3=3(x-1)(x+1)。", "符号为 +、-、+。", "x=-1 极大，x=1 极小。"], "极大值 2，极小值 -2", "极值要写函数值，不只写 x。"],
      ["易错", "f'(a)=0 是否一定有极值？", "用反例判断。", ["取 f(x)=x^3。", "f'(0)=0。", "但 0 两侧都单调增。"], "不一定", "驻点只是候选点，还要看符号是否变化。"]
    ]
  },
  {
    id: "m-concavity",
    subject: "math",
    volume: "math1",
    title: "凹凸拐点",
    videoId: "v-math1-rush",
    summary: "二阶导判断凹凸，拐点看二阶导符号变化。只令 f''=0 不够。",
    formulas: ["f''>0 凹向上", "f''<0 凹向下", "拐点: f'' 变号"],
    problems: [
      ["基础", "判断 f(x)=x^3 的拐点。", "求二阶导并看变号。", ["f'=3x^2。", "f''=6x。", "x=0 两侧符号由负到正。"], "(0,0) 是拐点", "拐点要写坐标。"],
      ["常考", "求 f(x)=x^4-2x^2 的凹凸区间。", "由 f'' 的符号划分。", ["f''=12x^2-4。", "f''=0 得 x=±1/√3。", "两侧正，中间负。"], "两侧凹向上，中间凹向下", "不要把一阶导零点当拐点。"],
      ["易错", "f''(a)=0 是否必为拐点？", "找不变号反例。", ["取 f(x)=x^4。", "f''=12x^2，f''(0)=0。", "但二阶导两侧都非负。"], "不一定", "拐点必须二阶导符号改变。"]
    ]
  },
  {
    id: "m-indefinite-integral",
    subject: "math",
    volume: "math1",
    title: "不定积分",
    videoId: "v-math1-four",
    summary: "先认基本公式，再选换元或分部。考场写 +C 是送分细节。",
    formulas: ["∫x^n dx=x^(n+1)/(n+1)+C", "∫e^x dx=e^x+C", "∫u dv=uv-∫v du"],
    problems: [
      ["基础", "求 ∫(3x^2+2x)dx。", "逐项积分。", ["∫3x^2dx=x^3。", "∫2xdx=x^2。", "加常数 C。"], "x^3+x^2+C", "不定积分最后别漏 +C。"],
      ["常考", "求 ∫2x cos(x^2)dx。", "看到内层 x^2 和外层 2x，用换元。", ["令 u=x^2。", "du=2x dx。", "积分变为 ∫cos u du。"], "sin(x^2)+C", "换元后要把 u 换回 x。"],
      ["易错", "求 ∫x e^x dx。", "乘积型，分部积分。", ["取 u=x, dv=e^x dx。", "du=dx, v=e^x。", "uv-∫vdu。"], "xe^x-e^x+C", "分部积分符号是减号。"]
    ]
  },
  {
    id: "m-definite-integral",
    subject: "math",
    volume: "math1",
    title: "定积分",
    videoId: "v-math1-four",
    summary: "常考牛顿莱布尼茨、奇偶性、面积和变上限函数求导。",
    formulas: ["∫a^b f dx=F(b)-F(a)", "奇函数对称积分为 0", "(∫a^x f(t)dt)'=f(x)"],
    problems: [
      ["基础", "求 ∫0^1 2x dx。", "找原函数并代上下限。", ["原函数为 x^2。", "代 1 得 1。", "代 0 得 0。"], "1", "定积分没有 +C。"],
      ["常考", "求 ∫-1^1 x^3 dx。", "利用奇函数对称性。", ["x^3 是奇函数。", "区间 [-1,1] 关于 0 对称。", "积分为 0。"], "0", "先看对称性可省很多计算。"],
      ["易错", "设 F(x)=∫0^(x^2) sin t dt，求 F'(x)。", "变上限是 x^2，要链式法则。", ["外层导数为 sin(x^2)。", "上限 x^2 的导数为 2x。", "相乘。"], "F'(x)=2x sin(x^2)", "不能只写 sin(x^2)。"]
    ]
  },
  {
    id: "m-ode",
    subject: "math",
    volume: "math1",
    title: "微分方程",
    videoId: "v-math1-four",
    summary: "期末常见可分离变量、一阶线性和简单二阶常系数。",
    formulas: ["dy/dx=g(x)h(y)", "y'+p(x)y=q(x)", "r^2+pr+q=0"],
    problems: [
      ["基础", "解 dy/dx=2x。", "直接积分。", ["dy=2x dx。", "两边积分。", "y=x^2+C。"], "y=x^2+C", "通解要带任意常数。"],
      ["常考", "解 dy/dx=xy。", "可分离变量。", ["dy/y=x dx。", "积分得 ln|y|=x^2/2+C。", "指数化。"], "y=Ce^(x^2/2)", "常数指数化后仍记为 C。"],
      ["易错", "解 y''-y=0。", "写特征方程。", ["特征方程 r^2-1=0。", "r=±1。", "通解线性组合。"], "y=C1e^x+C2e^-x", "二阶方程通常有两个任意常数。"]
    ]
  },
  {
    id: "m-partial",
    subject: "math",
    volume: "math2",
    title: "多元偏导",
    videoId: "v-math2-five",
    summary: "把另一个变量当常数。常考偏导、全微分、隐函数偏导。",
    formulas: ["z_x: y 当常数", "dz=z_x dx+z_y dy", "F_x+F_z z_x=0"],
    problems: [
      ["基础", "z=x^2y+sin y，求 z_x。", "对 x 求偏导时 y 是常数。", ["x^2y 对 x 求导为 2xy。", "sin y 与 x 无关。", "偏导为 2xy。"], "z_x=2xy", "不要把 sin y 对 x 求成 cos y。"],
      ["常考", "z=x^2+y^2，求 dz。", "全微分由两个偏导组成。", ["z_x=2x。", "z_y=2y。", "代入 dz=z_xdx+z_ydy。"], "dz=2x dx+2y dy", "dx、dy 都要写。"],
      ["易错", "F=x^2+y^2+z^2-1=0，求 z_x。", "隐函数求偏导。", ["F_x=2x。", "F_z=2z。", "z_x=-F_x/F_z。"], "z_x=-x/z", "y 对 x 偏导时视为常数。"]
    ]
  },
  {
    id: "m-space-geometry",
    subject: "math",
    volume: "math2",
    title: "空间解析几何",
    videoId: "v-math2-five",
    summary: "高数下开局常考向量、平面、直线、距离和夹角。先写法向量或方向向量，再套公式。",
    formulas: ["平面: Ax+By+Cz+D=0", "直线: (x-x0)/l=(y-y0)/m=(z-z0)/n", "a·b=|a||b|cosθ"],
    problems: [
      ["基础", "求过点 (1,0,0)，法向量 n=(2,-1,3) 的平面方程。", "点法式平面方程。", ["平面为 2(x-1)-1(y-0)+3(z-0)=0。", "展开得 2x-y+3z-2=0。", "检查点代入成立。"], "2x-y+3z-2=0", "法向量是平面的垂直方向，不是平面内方向。"],
      ["常考", "求向量 a=(1,2,2) 与 b=(2,0,1) 的夹角余弦。", "用点积公式。", ["a·b=1×2+2×0+2×1=4。", "|a|=3，|b|=√5。", "cosθ=4/(3√5)。"], "4/(3√5)", "点积不要漏掉每一维相乘再相加。"],
      ["易错", "直线方向向量 (1,-2,2) 是否能直接当平面法向量？", "看题目给的是直线还是平面条件。", ["方向向量表示沿直线走的方向。", "平面法向量表示垂直平面的方向。", "除非题目说直线垂直平面，否则不能混用。"], "不能直接混用", "空间题最容易把方向向量和法向量用反。"]
    ]
  },
  {
    id: "m-gradient-direction",
    subject: "math",
    volume: "math2",
    title: "方向导数与梯度",
    videoId: "v-math2-five",
    summary: "方向导数题先求梯度，再与单位方向向量点乘。最大方向导数就是梯度模。",
    formulas: ["∇f=(f_x,f_y)", "D_u f=∇f·u", "最大方向导数=|∇f|"],
    problems: [
      ["基础", "f=x^2+y^2，在点 (1,2) 求梯度。", "分别对 x、y 求偏导。", ["f_x=2x，f_y=2y。", "代入 (1,2)。", "梯度为 (2,4)。"], "∇f(1,2)=(2,4)", "梯度是向量，不要只写一个数。"],
      ["常考", "f=x^2+y^2，在 (1,2) 沿单位向量 u=(3/5,4/5) 的方向导数。", "梯度点乘单位方向。", ["∇f(1,2)=(2,4)。", "D_u f=(2,4)·(3/5,4/5)。", "结果为 6/5+16/5=22/5。"], "22/5", "方向向量必须是单位向量；不是单位向量要先归一化。"],
      ["易错", "方向导数最大方向一定沿 x 轴吗？", "最大方向沿梯度方向。", ["函数变化最快方向由梯度给出。", "只有梯度刚好平行 x 轴时才沿 x 轴。", "一般不能默认。"], "不一定，沿梯度方向", "不要把坐标轴方向当成默认最快方向。"]
    ]
  },
  {
    id: "m-extreme",
    subject: "math",
    volume: "math2",
    title: "多元极值与条件极值",
    videoId: "v-math2-pass",
    summary: "无条件极值找驻点和 Hessian；条件极值优先拉格朗日乘数法。",
    formulas: ["f_x=0, f_y=0", "D=AC-B^2", "∇f=λ∇g"],
    problems: [
      ["基础", "求 f=x^2+y^2 的驻点。", "令两个一阶偏导为 0。", ["f_x=2x=0。", "f_y=2y=0。", "得 (0,0)。"], "(0,0)", "驻点只是候选点，还要判断性质。"],
      ["常考", "在约束 x+y=1 下，求 f=x^2+y^2 的最小值。", "用代入或拉格朗日。", ["由 y=1-x。", "f=x^2+(1-x)^2。", "求导得 4x-2=0，所以 x=y=1/2。"], "最小值 1/2", "条件极值不能直接令 f_x=f_y=0。"],
      ["易错", "D=AC-B^2<0 时驻点是什么？", "二元函数二阶判别法。", ["D<0 表示 Hessian 不定。", "函数在该点附近有升有降。", "所以是鞍点。"], "鞍点", "D<0 不是极小值。"]
    ]
  },
  {
    id: "m-double-integral",
    subject: "math",
    volume: "math2",
    title: "二重积分",
    videoId: "v-math2-five",
    summary: "先画区域，再定积分次序。圆域常用极坐标。",
    formulas: ["∫∫D f dA", "极坐标: dA=r dr dθ", "矩形域可拆成累次积分"],
    problems: [
      ["基础", "D:0≤x≤1,0≤y≤2，求 ∫∫D 1 dA。", "积分 1 就是面积。", ["区域是 1×2 矩形。", "面积为 2。", "积分值为 2。"], "2", "被积函数为 1 时先想面积。"],
      ["常考", "D:x^2+y^2≤1，求 ∫∫D (x^2+y^2)dA。", "圆域加半径函数，用极坐标。", ["x^2+y^2=r^2。", "dA=rdrdθ。", "积分为 ∫0^{2π}∫0^1 r^3 dr dθ。"], "π/2", "极坐标雅可比 r 不能漏。"],
      ["易错", "D:0≤y≤x≤1，写出积分次序 dxdy。", "先把区域改为 y 外层。", ["0≤x≤1, 0≤y≤x。", "固定 y 后 x 从 y 到 1。", "y 从 0 到 1。"], "∫0^1∫y^1 f(x,y) dx dy", "换序时上下限会变。"]
    ]
  },
  {
    id: "m-triple-integral",
    subject: "math",
    volume: "math2",
    title: "三重积分",
    videoId: "v-math2-five",
    summary: "三重积分先看区域形状。柱体用直角坐标，球或圆柱对称区域优先柱坐标/球坐标。",
    formulas: ["∭Ω f dV", "柱坐标: dV=r dr dθ dz", "球坐标: dV=ρ^2 sinφ dρ dφ dθ"],
    problems: [
      ["基础", "Ω:0≤x≤1,0≤y≤1,0≤z≤2，求 ∭Ω 1 dV。", "积分 1 就是体积。", ["区域是长方体。", "体积为 1×1×2。", "积分值为 2。"], "2", "三重积分被积函数为 1 时先想体积。"],
      ["常考", "圆柱 Ω:x^2+y^2≤1,0≤z≤2，求体积。", "圆柱用柱坐标或底面积乘高。", ["底面面积为 π。", "高度为 2。", "体积为 2π。"], "2π", "若用柱坐标，r 的因子不能漏。"],
      ["易错", "球坐标体积元是否是 dρ dφ dθ？", "球坐标有雅可比因子。", ["球坐标变换会改变体积元。", "体积元为 ρ^2 sinφ dρ dφ dθ。", "少因子会导致结果错误。"], "不是，应为 ρ^2 sinφ dρ dφ dθ", "坐标变换题先写体积元。"]
    ]
  },
  {
    id: "m-line-surface",
    subject: "math",
    volume: "math2",
    title: "曲线曲面积分",
    videoId: "v-math2-pass",
    summary: "常考第一类曲线积分、格林公式和对称性。先判断曲线方向和区域。",
    formulas: ["ds=√(x'^2+y'^2)dt", "格林公式: ∮Pdx+Qdy=∫∫(Q_x-P_y)dA", "闭曲线方向通常取正向"],
    problems: [
      ["基础", "C: x=t,y=t,0≤t≤1，求 ∫C 1 ds。", "第一类曲线积分等于曲线长度。", ["x'=1,y'=1。", "ds=√2 dt。", "积分为 ∫0^1√2 dt。"], "√2", "第一类曲线积分没有方向符号。"],
      ["常考", "C 为单位圆正向，求 ∮C -y dx+x dy。", "用格林公式。", ["P=-y,Q=x。", "Q_x-P_y=1-(-1)=2。", "区域面积为 π。"], "2π", "正向是逆时针；反向会变号。"],
      ["易错", "C 为上半圆，∫C ds 与方向有关吗？", "区分第一类和第二类。", ["ds 表示弧长元。", "弧长不随方向改变。", "所以无关。"], "无关", "dx、dy 型曲线积分才通常与方向有关。"]
    ]
  },
  {
    id: "m-surface-integral",
    subject: "math",
    volume: "math2",
    title: "曲面积分",
    videoId: "v-math2-pass",
    summary: "曲面积分先分第一类还是第二类。第一类看面积元，第二类看方向和通量。",
    formulas: ["dS=√(1+z_x^2+z_y^2)dxdy", "通量: ∫∫Σ P dydz+Q dzdx+R dxdy", "高斯公式: ∫∫Σ F·n dS=∭ divF dV"],
    problems: [
      ["基础", "平面 z=0 上单位圆盘，求 ∫∫Σ 1 dS。", "第一类曲面积分等于面积。", ["曲面是单位圆盘。", "面积为 π。", "积分值为 π。"], "π", "平面区域的 dS 与投影面积相同。"],
      ["常考", "z=x+y 在 0≤x≤1,0≤y≤1 上，求 dS。", "用显式曲面面积元。", ["z_x=1，z_y=1。", "dS=√(1+1^2+1^2)dxdy。", "所以 dS=√3 dxdy。"], "√3 dxdy", "曲面面积元不是简单 dxdy。"],
      ["易错", "第二类曲面积分是否与曲面方向有关？", "第二类表示通量，方向会影响正负。", ["法向量反向时通量变号。", "题目若给外侧/上侧要照做。", "方向没写清要先判断。"], "有关", "第一类通常不看方向，第二类必须看方向。"]
    ]
  },
  {
    id: "m-series",
    subject: "math",
    volume: "math2",
    title: "级数判敛",
    videoId: "v-math2-five",
    summary: "先看必要条件，再用 p 级数、比较、比值和交错级数。不要上来就硬算和。",
    formulas: ["∑1/n^p: p>1 收敛", "必要条件: a_n→0", "比值判别: L<1 收敛"],
    problems: [
      ["基础", "判断 ∑1/n^2 是否收敛。", "识别 p 级数。", ["这是 p=2 的 p 级数。", "p>1。", "所以收敛。"], "收敛", "p 级数看指数，不是看 n 是否趋零。"],
      ["常考", "判断 ∑n/(n^2+1) 是否收敛。", "与 1/n 比较。", ["n/(n^2+1) ~ 1/n。", "∑1/n 发散。", "正项比较得发散。"], "发散", "通项趋零不代表级数收敛。"],
      ["易错", "判断 ∑(-1)^(n-1)/n 是否绝对收敛。", "先看绝对值级数。", ["绝对值为 1/n。", "调和级数发散。", "原级数交错收敛。"], "条件收敛，非绝对收敛", "交错收敛和绝对收敛是两件事。"]
    ]
  },
  {
    id: "p-kinematics",
    subject: "physics",
    volume: "physics1",
    title: "运动学",
    videoId: "v-phy-full",
    summary: "先选坐标，再写位移、速度、加速度。匀变速题要注意方向和单位。",
    formulas: ["v=v0+at", "x=x0+v0t+at^2/2", "v^2-v0^2=2aΔx"],
    problems: [
      ["基础", "物体从静止以 2 m/s^2 加速 3 s，求速度。", "匀加速直线运动。", ["v0=0。", "v=v0+at。", "v=0+2×3。"], "6 m/s", "速度单位是 m/s，不是 m。"],
      ["常考", "初速 10 m/s，减速度 2 m/s^2，多久停下？", "停止时 v=0，加速度取负。", ["0=10-2t。", "2t=10。", "t=5 s。"], "5 s", "减速时加速度方向与速度相反。"],
      ["易错", "自由落体 2 s 下落高度，g=10 m/s^2。", "初速为 0。", ["h=gt^2/2。", "h=10×4/2。", "h=20 m。"], "20 m", "不要忘记 1/2。"]
    ]
  },
  {
    id: "p-newton",
    subject: "physics",
    volume: "physics1",
    title: "牛顿定律",
    videoId: "v-phy-rush",
    summary: "先画受力图，再沿加速度方向列 ΣF=ma。摩擦力方向要按相对运动趋势判断。",
    formulas: ["ΣF=ma", "f=μN", "N=mgcosθ"],
    problems: [
      ["基础", "质量 2 kg 物体受 6 N 水平力，忽略摩擦，求加速度。", "直接用牛顿第二定律。", ["ΣF=6 N。", "m=2 kg。", "a=F/m=3。"], "3 m/s^2", "加速度单位要写 m/s^2。"],
      ["常考", "质量 m 在倾角 θ 光滑斜面上下滑，加速度？", "沿斜面方向分解重力。", ["沿斜面力为 mgsinθ。", "N 与运动方向垂直。", "a=gsinθ。"], "gsinθ", "不要把 mgcosθ 当下滑力。"],
      ["易错", "水平面上 N 是否一定等于 mg？", "看竖直方向是否还有其他力。", ["若只有重力和支持力，N=mg。", "若有拉力向上或向下，N 会变。", "所以不一定。"], "不一定", "受力图要完整。"]
    ]
  },
  {
    id: "p-momentum",
    subject: "physics",
    volume: "physics1",
    title: "动量",
    videoId: "v-phy-full",
    summary: "碰撞题先判断系统外力冲量是否可忽略。完全非弹性碰撞常用动量守恒。",
    formulas: ["p=mv", "I=Δp", "m1v1+m2v2=(m1+m2)v"],
    problems: [
      ["基础", "2 kg 物体速度 3 m/s，动量是多少？", "套 p=mv。", ["m=2。", "v=3。", "p=6。"], "6 kg·m/s", "动量有方向。"],
      ["常考", "1 kg 物体以 4 m/s 撞上静止 1 kg 物体后粘在一起，求共同速度。", "完全非弹性碰撞动量守恒。", ["初动量为 4。", "总质量为 2。", "v=4/2。"], "2 m/s", "机械能不守恒，但动量可守恒。"],
      ["易错", "冲量等于力吗？", "冲量是力对时间的积累。", ["恒力时 I=Ft。", "单位是 N·s。", "等于动量变化。"], "不等于", "不要把冲量和瞬时力混淆。"]
    ]
  },
  {
    id: "p-work-energy",
    subject: "physics",
    volume: "physics1",
    title: "功和能",
    videoId: "v-phy-full",
    summary: "保守力适合用机械能守恒；有摩擦则用动能定理或功能关系。",
    formulas: ["W=Fs cosθ", "Ek=mv^2/2", "W合=ΔEk"],
    problems: [
      ["基础", "10 N 力沿位移方向作用 3 m，做功多少？", "力和位移同向。", ["W=Fs cos0。", "W=10×3。", "W=30 J。"], "30 J", "功的单位是 J。"],
      ["常考", "质量 2 kg 物体速度由 1 到 3 m/s，合外力做功？", "用动能定理。", ["ΔEk=1/2 m(v2^2-v1^2)。", "=1×(9-1)。", "=8 J。"], "8 J", "不要只算末动能。"],
      ["易错", "支持力一定不做功吗？", "看力方向和位移方向。", ["若位移与支持力垂直，做功为 0。", "若电梯中支持力与位移同向，可做功。", "所以不一定。"], "不一定", "做功看夹角，不看力的名字。"]
    ]
  },
  {
    id: "p-rigid",
    subject: "physics",
    volume: "physics1",
    title: "刚体",
    videoId: "v-phy-full",
    summary: "转动题对应平动公式：力矩、转动惯量、角加速度、转动动能。",
    formulas: ["M=Iα", "L=Iω", "Ek=Iω^2/2"],
    problems: [
      ["基础", "转动惯量 2 kg·m^2，角速度 3 rad/s，转动动能？", "套转动动能。", ["Ek=1/2 Iω^2。", "=1/2×2×9。", "=9 J。"], "9 J", "角速度要平方。"],
      ["常考", "力 10 N 垂直作用在 0.2 m 力臂上，力矩？", "垂直时 M=Fr。", ["F=10。", "r=0.2。", "M=2。"], "2 N·m", "力矩单位不是 J，虽然量纲相同。"],
      ["易错", "角动量守恒条件是什么？", "看外力矩。", ["系统合外力矩为 0。", "角动量守恒。", "内力矩不改变系统总角动量。"], "合外力矩为 0", "不是外力为 0，而是外力矩为 0。"]
    ]
  },
  {
    id: "p-shm",
    subject: "physics",
    volume: "physics1",
    title: "简谐振动",
    videoId: "v-phy-rush",
    summary: "识别回复力 F=-kx。常考周期、振幅、相位和能量。",
    formulas: ["x=Acos(ωt+φ)", "ω=√(k/m)", "T=2π/ω"],
    problems: [
      ["基础", "弹簧 k=100 N/m，m=1 kg，求角频率。", "弹簧振子公式。", ["ω=√(k/m)。", "ω=√100。", "ω=10 rad/s。"], "10 rad/s", "角频率不是频率 f。"],
      ["常考", "角频率 5 rad/s，周期是多少？", "T=2π/ω。", ["T=2π/5。", "单位秒。", "约 1.26 s。"], "2π/5 s", "π 不要提前丢掉。"],
      ["易错", "位移最大时速度和加速度如何？", "用能量和回复力判断。", ["端点速度为 0。", "回复力最大。", "加速度大小最大且指向平衡位置。"], "v=0，|a| 最大", "位移最大不是加速度为 0。"]
    ]
  },
  {
    id: "p-wave",
    subject: "physics",
    volume: "physics1",
    title: "波动",
    videoId: "v-phy-rush",
    summary: "波动题抓住波速、频率、波长关系。写波函数时注意传播方向。",
    formulas: ["v=λf", "ω=2πf", "y=Acos(ωt-kx+φ)"],
    problems: [
      ["基础", "波长 2 m，频率 5 Hz，波速？", "套 v=λf。", ["λ=2。", "f=5。", "v=10。"], "10 m/s", "Hz 是 s^-1。"],
      ["常考", "频率 50 Hz，波速 100 m/s，波长？", "变形 λ=v/f。", ["λ=100/50。", "λ=2 m。", "写单位。"], "2 m", "不要写成 f/v。"],
      ["易错", "向 +x 传播的简谐波相位通常写什么号？", "向 +x 传播相位为 ωt-kx。", ["保持相位不变。", "x 增大时 t 也要增大。", "所以用 ωt-kx。"], "ωt-kx+φ", "向 -x 传播才常写 ωt+kx。"]
    ]
  },
  {
    id: "p-gas",
    subject: "physics",
    volume: "physics1",
    title: "气体动理论",
    videoId: "v-phy-full",
    summary: "理想气体题常用状态方程和平均平动动能。温度必须用 K。",
    formulas: ["pV=nRT", "E平均=3kT/2", "T(K)=t(℃)+273.15"],
    problems: [
      ["基础", "1 mol 理想气体，T=300 K，求 pV。R=8.31。", "状态方程。", ["pV=nRT。", "=1×8.31×300。", "=2493 J。"], "2493 J", "温度已经是 K，不用再加 273。"],
      ["常考", "温度从 300 K 升到 600 K，平均平动动能变几倍？", "平均动能正比于 T。", ["E平均=3kT/2。", "温度翻倍。", "平均动能翻倍。"], "2 倍", "只比较比例即可。"],
      ["易错", "27℃ 能直接代入 pV=nRT 吗？", "必须转为绝对温度。", ["T=27+273.15。", "约 300 K。", "再代入公式。"], "不能，需用约 300 K", "摄氏温度不能直接进状态方程。"]
    ]
  },
  {
    id: "p-thermo",
    subject: "physics",
    volume: "physics1",
    title: "热力学第一定律",
    videoId: "v-phy-full",
    summary: "先统一符号约定。这里采用 Q=ΔU+W，W 为系统对外做功。",
    formulas: ["Q=ΔU+W", "等容: W=0", "等温理想气体: ΔU=0"],
    problems: [
      ["基础", "系统吸热 100 J，对外做功 30 J，内能变化？", "套 Q=ΔU+W。", ["100=ΔU+30。", "ΔU=70。", "单位 J。"], "70 J", "先确认 W 的符号约定。"],
      ["常考", "理想气体等温膨胀吸热 Q，内能变化？", "理想气体内能只与温度有关。", ["等温表示温度不变。", "ΔU=0。", "吸收的热转化为对外做功。"], "ΔU=0", "等温不等于不吸热。"],
      ["易错", "等容过程系统对外做功是多少？", "体积不变。", ["W=∫p dV。", "dV=0。", "W=0。"], "0", "压强变化也不代表有体积功。"]
    ]
  },
  {
    id: "p-electric-field",
    subject: "physics",
    volume: "physics2",
    title: "静电场",
    videoId: "v-phy2-special",
    summary: "点电荷用库仑定律和叠加；对称分布优先高斯定理。",
    formulas: ["E=kq/r^2", "F=qE", "∮E·dS=Q内/ε0"],
    problems: [
      ["基础", "电荷 q 在电场 E 中受力？", "电场力公式。", ["F=qE。", "正电荷同向。", "负电荷反向。"], "F=qE", "方向取决于电荷正负。"],
      ["常考", "半径 r 球面对中心点电荷 q 的电通量？", "高斯定理。", ["闭合面包围 q。", "通量为 Q内/ε0。", "与球半径无关。"], "q/ε0", "通量不是 E 乘面积随便算。"],
      ["易错", "电场强度和电势是否同一个量？", "一个是矢量，一个是标量。", ["E 有方向。", "电势 V 是标量。", "E 与 V 的空间变化有关。"], "不是", "不要把电势高低当电场大小。"]
    ]
  },
  {
    id: "p-magnetic-field",
    subject: "physics",
    volume: "physics2",
    title: "磁场",
    videoId: "v-phy2-special",
    summary: "带电粒子在磁场中常考洛伦兹力和圆周运动。方向用右手定则。",
    formulas: ["F=qvBsinθ", "r=mv/(qB)", "T=2πm/(qB)"],
    problems: [
      ["基础", "电荷垂直进入磁场，磁力大小？", "θ=90°。", ["F=qvBsin90°。", "sin90°=1。", "F=qvB。"], "qvB", "若速度平行磁场，磁力为 0。"],
      ["常考", "质量 m、电荷 q、速度 v 垂直进入 B，圆轨道半径？", "磁力提供向心力。", ["qvB=mv^2/r。", "约去一个 v。", "r=mv/(qB)。"], "mv/(qB)", "半径与 v 成正比。"],
      ["易错", "磁场力是否做功？", "磁力总垂直于速度。", ["功 W=Fs cosθ。", "θ=90°。", "磁力不做功。"], "不做功", "磁力能改变方向，但不改变速率。"]
    ]
  },
  {
    id: "p-induction",
    subject: "physics",
    volume: "physics2",
    title: "电磁感应",
    videoId: "v-phy2-special",
    summary: "核心是磁通量变化。楞次定律判断感应电流方向：总是阻碍变化。",
    formulas: ["Φ=BS cosθ", "ε=-dΦ/dt", "ε=Blv"],
    problems: [
      ["基础", "B=2 T，S=3 m^2，垂直穿过，磁通量？", "垂直穿过表示 cosθ=1。", ["Φ=BS。", "=2×3。", "=6 Wb。"], "6 Wb", "角度是磁场与面积法线夹角。"],
      ["常考", "长 l 导体以速度 v 垂直切割磁感线，感应电动势？", "动生电动势公式。", ["速度、杆、磁场互相垂直。", "ε=Blv。", "方向用右手定则。"], "Blv", "不垂直时要乘 sinθ。"],
      ["易错", "感应电流方向是帮助磁通变化吗？", "楞次定律是阻碍变化。", ["磁通增加时感应场反向。", "磁通减少时感应场同向补偿。", "本质是能量守恒。"], "阻碍磁通变化", "不是阻碍运动本身，而是阻碍磁通变化。"]
    ]
  },
  {
    id: "p-optics",
    subject: "physics",
    volume: "physics2",
    title: "光学干涉",
    videoId: "v-phy2-special",
    summary: "杨氏双缝重点是光程差和条纹间距。薄膜干涉注意半波损失。",
    formulas: ["δ=d sinθ", "Δx=λL/d", "明纹: δ=kλ"],
    problems: [
      ["基础", "双缝干涉中 L=1 m，d=1 mm，λ=500 nm，条纹间距？", "统一单位后套公式。", ["λ=5×10^-7 m。", "d=1×10^-3 m。", "Δx=λL/d=5×10^-4 m。"], "0.5 mm", "单位换算最容易丢分。"],
      ["常考", "双缝明纹条件是什么？", "相干光明纹由光程差决定。", ["明纹相长。", "光程差为整数倍波长。", "δ=kλ。"], "δ=kλ", "暗纹是 (k+1/2)λ。"],
      ["易错", "光强最大处一定是中央明纹吗？", "看具体干涉装置和相位条件。", ["双缝理想情况下中央通常最亮。", "薄膜干涉可能有半波损失。", "条件不同，中心明暗可能不同。"], "不一定", "薄膜题要先判断半波损失。"]
    ]
  }
];

let currentUser = localStorage.getItem(STORAGE.current) || "";
let progress = loadProgress();

const els = {
  loginForm: document.getElementById("loginForm"),
  nameInput: document.getElementById("nameInput"),
  userBadge: document.getElementById("userBadge"),
  resetProgress: document.getElementById("resetProgress"),
  overallPercent: document.getElementById("overallPercent"),
  doneTopics: document.getElementById("doneTopics"),
  doneVideos: document.getElementById("doneVideos"),
  wrongCount: document.getElementById("wrongCount"),
  progressSummary: document.getElementById("progressSummary"),
  todayTasks: document.getElementById("todayTasks"),
  subjectMap: document.getElementById("subjectMap"),
  daysInput: document.getElementById("daysInput"),
  planDaysInput: document.getElementById("planDaysInput"),
  planGrid: document.getElementById("planGrid"),
  videoGrid: document.getElementById("videoGrid"),
  topicList: document.getElementById("topicList"),
  wrongList: document.getElementById("wrongList"),
  clearWrong: document.getElementById("clearWrong")
};

function createEmptyProgress() {
  return {
    videos: {},
    topics: {},
    problems: {},
    wrong: {},
    plan: {}
  };
}

function loadProgress() {
  if (!currentUser) return createEmptyProgress();
  try {
    return JSON.parse(localStorage.getItem(STORAGE.progress(currentUser))) || createEmptyProgress();
  } catch {
    return createEmptyProgress();
  }
}

function saveProgress() {
  if (!currentUser) return;
  localStorage.setItem(STORAGE.progress(currentUser), JSON.stringify(progress));
}

function rememberUser(name) {
  const users = JSON.parse(localStorage.getItem(STORAGE.users) || "[]");
  if (!users.includes(name)) {
    users.push(name);
    localStorage.setItem(STORAGE.users, JSON.stringify(users));
  }
  currentUser = name;
  localStorage.setItem(STORAGE.current, name);
  progress = loadProgress();
}

function requireUser() {
  if (currentUser) return true;
  alert("先输入昵称登录，就能保存进度。");
  els.nameInput.focus();
  return false;
}

function problemId(topicId, index) {
  return `${topicId}:p${index}`;
}

function getTopicVideo(topic) {
  return videos.find((video) => video.id === topic.videoId) || videos[0];
}

function optionLabel(value) {
  if (value === "all") return "全部";
  return SUBJECTS[value] || VOLUMES[value] || value;
}

function topicPriority(topic) {
  const weights = {
    math2: 0,
    physics1: 1,
    physics2: 2,
    math1: 3
  };
  return weights[topic.volume] ?? 9;
}

function getStudyOrder() {
  return topicSpecs.slice().sort((a, b) => topicPriority(a) - topicPriority(b));
}

function isFocusVolume(volume) {
  return volume === "math2" || volume === "physics1" || volume === "physics2" || volume === "all";
}

function setupFilters() {
  const selectConfigs = [
    ["videoSubjectFilter", ["all", "math", "physics"]],
    ["topicSubjectFilter", ["all", "math", "physics"]],
    ["videoVolumeFilter", ["all", "math1", "math2", "physics1", "physics2"]],
    ["topicVolumeFilter", ["all", "math1", "math2", "physics1", "physics2"]]
  ];

  selectConfigs.forEach(([id, values]) => {
    const select = document.getElementById(id);
    select.innerHTML = values.map((value) => `<option value="${value}">${optionLabel(value)}</option>`).join("");
    const defaults = {
      videoSubjectFilter: "all",
      topicSubjectFilter: "all",
      videoVolumeFilter: "all",
      topicVolumeFilter: "all"
    };
    select.value = defaults[id] || "all";
    select.addEventListener("change", renderAll);
  });

  ["videoSearch", "topicSearch"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderAll);
  });
}

function setupNavigation() {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(`view-${button.dataset.view}`).classList.add("active");
    });
  });
}

function setupEvents() {
  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = els.nameInput.value.trim();
    if (!name) return;
    rememberUser(name);
    els.nameInput.value = "";
    renderAll();
  });

  els.resetProgress.addEventListener("click", () => {
    if (!requireUser()) return;
    if (!confirm("确定重置当前昵称的所有进度吗？")) return;
    progress = createEmptyProgress();
    saveProgress();
    renderAll();
  });

  els.clearWrong.addEventListener("click", () => {
    if (!requireUser()) return;
    progress.wrong = {};
    saveProgress();
    renderAll();
  });

  els.daysInput.addEventListener("input", () => {
    els.planDaysInput.value = clampDays(els.daysInput.value);
    renderAll();
  });

  els.planDaysInput.addEventListener("input", () => {
    els.daysInput.value = clampDays(els.planDaysInput.value);
    renderAll();
  });
}

function clampDays(value) {
  const number = Number(value) || 10;
  return Math.max(7, Math.min(14, number));
}

function renderAll() {
  renderProgress();
  renderTodayTasks();
  renderSubjectMap();
  renderVideos();
  renderTopics();
  renderWrongList();
  renderPlan();
}

function renderProgress() {
  const doneTopics = Object.values(progress.topics).filter(Boolean).length;
  const doneVideos = Object.values(progress.videos).filter(Boolean).length;
  const wrongCount = Object.values(progress.wrong).filter(Boolean).length;
  const totalUnits = topicSpecs.length + videos.length;
  const percent = Math.round(((doneTopics + doneVideos) / totalUnits) * 100);

  els.userBadge.textContent = currentUser ? `当前：${currentUser}` : "未登录";
  els.doneTopics.textContent = doneTopics;
  els.doneVideos.textContent = doneVideos;
  els.wrongCount.textContent = wrongCount;
  els.overallPercent.textContent = `${percent}%`;
  els.overallPercent.closest(".ring").style.setProperty("--percent", percent);
  els.progressSummary.textContent = currentUser
    ? `已保存 ${currentUser} 的学习记录。当前策略：先完成高数下核心考点，再补高数上和大物。`
    : "登录昵称后开始保存学习记录。";
}

function renderTodayTasks() {
  const days = clampDays(els.daysInput.value);
  const unfinished = getStudyOrder().filter((topic) => !progress.topics[topic.id]);
  const pick = unfinished.slice(0, 4);
  const tasks = [
    {
      title: "看高数下视频",
      text: pick[0] ? `先看「${getTopicVideo(pick[0]).title}」中 ${pick[0].title} 相关段落。` : "高数下主线已完成，今天回看薄弱章节。"
    },
    {
      title: "背公式",
      text: pick[1] ? `默写 ${pick[1].title} 的 3 条核心公式，再打开例题。` : "把错题涉及公式重新默写一遍。"
    },
    {
      title: "刷例题",
      text: pick[2] ? `完成 ${pick[2].title} 的基础、常考、易错三题。` : "从错题本随机挑 3 题复刷。"
    },
    {
      title: "复盘错题",
      text: `剩余 ${days} 天，每天至少复盘 10 分钟；错题超过 8 道时优先清错题。`
    }
  ];

  els.todayTasks.innerHTML = tasks
    .map((task) => `<article class="task-card"><h3>${task.title}</h3><p>${task.text}</p></article>`)
    .join("");
}

function renderSubjectMap() {
  const groups = ["math2", "physics1", "physics2", "math1"].map((volume) => {
    const topics = topicSpecs.filter((topic) => topic.volume === volume);
    const done = topics.filter((topic) => progress.topics[topic.id]).length;
    const percent = Math.round((done / topics.length) * 100);
    return { volume, topics, done, percent };
  });

  els.subjectMap.innerHTML = groups
    .map(
      (group) => `
        <article class="map-card">
          <span class="tag blue">${VOLUMES[group.volume]}</span>
          <h3>${group.done}/${group.topics.length} 个考点完成</h3>
          <div class="progress-bar" aria-label="${VOLUMES[group.volume]}进度">
            <span style="--w:${group.percent}%"></span>
          </div>
          <p>${group.topics.map((topic) => topic.title).join("、")}</p>
        </article>
      `
    )
    .join("");
}

function renderVideos() {
  const subject = document.getElementById("videoSubjectFilter").value;
  const volume = document.getElementById("videoVolumeFilter").value;
  const search = document.getElementById("videoSearch").value.trim().toLowerCase();

  const filtered = videos.filter((video) => {
    const defaultFocus = subject === "all" && volume === "all";
    const subjectMatch = subject === "all" || video.subject === subject;
    const volumeMatch = volume === "all" || video.volume === volume || video.volume === "all";
    const focusMatch = !defaultFocus || isFocusVolume(video.volume);
    const searchText = `${video.title} ${video.topic} ${video.purpose}`.toLowerCase();
    return subjectMatch && volumeMatch && focusMatch && (!search || searchText.includes(search));
  }).sort((a, b) => (b.playValue || 0) - (a.playValue || 0));

  els.videoGrid.innerHTML = filtered
    .map(
      (video) => `
        <article class="video-card">
          <div>
            <div class="pill-row">
              <span class="tag green">${SUBJECTS[video.subject]}</span>
              <span class="tag blue">${video.volume === "all" ? "通用" : VOLUMES[video.volume]}</span>
              <span class="tag amber">${video.duration}</span>
              <span class="tag red">${video.views}</span>
            </div>
            <h3>${video.title}</h3>
            <p><strong>考点：</strong>${video.topic}</p>
            <p>${video.purpose}</p>
          </div>
          <div class="card-actions">
            <a href="${video.url}" target="_blank" rel="noopener">打开 B 站</a>
            <button class="${progress.videos[video.id] ? "is-done" : ""}" data-action="toggle-video" data-id="${video.id}">
              ${progress.videos[video.id] ? "已看" : "标记已看"}
            </button>
          </div>
        </article>
      `
    )
    .join("");

  bindDynamicActions();
}

function renderTopics() {
  const subject = document.getElementById("topicSubjectFilter").value;
  const volume = document.getElementById("topicVolumeFilter").value;
  const search = document.getElementById("topicSearch").value.trim().toLowerCase();
  const filtered = filterTopics(subject, volume, search);
  els.topicList.innerHTML = filtered.map(renderTopicCard).join("");
  bindDynamicActions();
}

function filterTopics(subject, volume, search) {
  return topicSpecs.filter((topic) => {
    const defaultFocus = subject === "all" && volume === "all";
    const subjectMatch = subject === "all" || topic.subject === subject;
    const volumeMatch = volume === "all" || topic.volume === volume;
    const focusMatch = !defaultFocus || isFocusVolume(topic.volume);
    const searchText = `${topic.title} ${topic.summary} ${topic.formulas.join(" ")}`.toLowerCase();
    return subjectMatch && volumeMatch && focusMatch && (!search || searchText.includes(search));
  }).sort((a, b) => topicPriority(a) - topicPriority(b));
}

function renderTopicCard(topic, onlyWrong = false) {
  const video = getTopicVideo(topic);
  const problems = onlyWrong
    ? topic.problems.filter((_, index) => progress.wrong[problemId(topic.id, index)])
    : topic.problems;

  return `
    <article class="topic-card">
      <div class="topic-head">
        <div>
          <div class="pill-row">
            <span class="tag green">${SUBJECTS[topic.subject]}</span>
            <span class="tag blue">${VOLUMES[topic.volume]}</span>
            <span class="tag amber">${topic.title}</span>
          </div>
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
        </div>
        <div class="topic-actions">
          <a href="${video.url}" target="_blank" rel="noopener">${video.title}</a>
          <button class="${progress.topics[topic.id] ? "is-done" : ""}" data-action="toggle-topic" data-id="${topic.id}">
            ${progress.topics[topic.id] ? "已完成" : "完成考点"}
          </button>
        </div>
      </div>
      <div class="formula-strip">
        ${topic.formulas.map((formula) => `<code>${formula}</code>`).join("")}
      </div>
      <div class="problem-grid">
        ${problems.map((problem, index) => renderProblem(topic, problem, topic.problems.indexOf(problem))).join("")}
      </div>
    </article>
  `;
}

function renderProblem(topic, problem, index) {
  const id = problemId(topic.id, index);
  const done = progress.problems[id];
  const wrong = progress.wrong[id];
  const diagramClass = topic.subject === "math" ? "diagram-math" : "diagram-physics";

  return `
    <section class="problem-card">
      <div class="mini-diagram ${diagramClass}" aria-hidden="true"></div>
      <span class="tag ${problem[0] === "易错" ? "red" : problem[0] === "常考" ? "amber" : "green"}">${problem[0]}</span>
      <h4>${topic.title}</h4>
      <p class="problem-title">${problem[1]}</p>
      <p><strong>思路：</strong>${problem[2]}</p>
      <div class="solution" id="solution-${id}">
        <ol>${problem[3].map((step) => `<li>${step}</li>`).join("")}</ol>
        <p><strong>答案：</strong>${problem[4]}</p>
        <p><strong>易错提醒：</strong>${problem[5]}</p>
        <p><strong>相似题：</strong>把题目中的数字或函数换成同类型表达式，再完整写一遍步骤。</p>
      </div>
      <div class="card-actions">
        <button data-action="toggle-solution" data-id="${id}">讲解</button>
        <button class="${done ? "is-done" : ""}" data-action="toggle-problem" data-id="${id}">${done ? "已会" : "标记会做"}</button>
        <button class="${wrong ? "is-wrong" : ""}" data-action="toggle-wrong" data-id="${id}">${wrong ? "错题中" : "加入错题"}</button>
      </div>
    </section>
  `;
}

function renderWrongList() {
  const wrongTopics = topicSpecs.filter((topic) =>
    topic.problems.some((_, index) => progress.wrong[problemId(topic.id, index)])
  );

  if (!wrongTopics.length) {
    els.wrongList.classList.add("empty-state");
    els.wrongList.innerHTML = "<p>还没有错题。刷题时点“加入错题”，这里会自动汇总。</p>";
    return;
  }

  els.wrongList.classList.remove("empty-state");
  els.wrongList.innerHTML = wrongTopics.map((topic) => renderTopicCard(topic, true)).join("");
  bindDynamicActions();
}

function renderPlan() {
  const days = clampDays(els.planDaysInput.value);
  const groups = Array.from({ length: days }, (_, index) => []);
  getStudyOrder().forEach((topic, index) => {
    groups[index % days].push(topic);
  });

  els.planGrid.innerHTML = groups
    .map((topics, index) => {
      const focus = topics.map((topic) => `${VOLUMES[topic.volume]} ${topic.title}`).join("、") || "错题复盘";
      const video = topics[0] ? getTopicVideo(topics[0]) : videos[0];
      return `
        <article class="plan-card">
          <span class="tag blue">第 ${index + 1} 天</span>
          <h3>${focus}</h3>
          <ul>
            <li>看视频：${video.title} 的对应考点。</li>
            <li>背公式：默写当天考点的公式卡。</li>
            <li>刷例题：每个考点至少完成 3 道原创题。</li>
            <li>复盘错题：睡前重做今天标记的题。</li>
          </ul>
        </article>
      `;
    })
    .join("");
}

function bindDynamicActions() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.onclick = () => {
      const action = button.dataset.action;
      const id = button.dataset.id;

      if (action === "toggle-solution") {
        const solution = document.getElementById(`solution-${id}`);
        if (solution) solution.classList.toggle("open");
        return;
      }

      if (!requireUser()) return;

      if (action === "toggle-video") {
        progress.videos[id] = !progress.videos[id];
      }
      if (action === "toggle-topic") {
        progress.topics[id] = !progress.topics[id];
      }
      if (action === "toggle-problem") {
        progress.problems[id] = !progress.problems[id];
      }
      if (action === "toggle-wrong") {
        progress.wrong[id] = !progress.wrong[id];
      }

      saveProgress();
      renderAll();
    };
  });
}

setupNavigation();
setupFilters();
setupEvents();
renderAll();
