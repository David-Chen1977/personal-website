export interface Article {
  slug: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  series?: { name: string; order: number; total: number };
}

export const categories: string[] = [
  '政策解读',
  '算电协同',
  '电力交易',
  '新能源',
  '虚拟电厂',
  'AI+电力',
  'AI 应用层',
  'AI+能源',
  '电力市场',
  '售电公司',
  '投资方法论',
  '个人投资',
  'AI 协作',
  '氢能',
];

export const articles: Article[] = [
  // ── 投资方法论 ──
  { slug: 'structured-data-tfm-investment-analysis', title: '结构化数据基础模型：AI下半场的6000亿美元叙事', desc: '全球TFM赛道全景扫描，Fundamental $255M A轮到SAP超€1B收购Prior Labs，稳准智能以20亿估值锚定中国唯一入场券。', date: '2026-06-12', readTime: '约 20 分钟阅读', category: '投资方法论', tags: ['AI', '投资分析', '结构化数据', '基础模型', '稳准智能', 'TFM'], series: { name: 'AI 产业投资系列', order: 1, total: 1 } },
  { slug: 'impossible-triangle', title: '不可能铁三角与战略分层定价：华为思路对投资的启示', desc: '质量、成本、低价不可兼得。华为的解法不是三选二，而是市场分层。对基础设施投资的启示。', date: '2026-05-12', readTime: '约 5 分钟阅读', category: '投资方法论', tags: ['投资框架', '定价策略', '华为'], series: { name: '投资方法论', order: 1, total: 3 } },
  { slug: 'zu-he-tou-zi-yin-zi-tou-zi', title: '组合投资和因子投资对房地产投资策略的启示', desc: '经典投资策略能否应用到房地产投资决策？', date: '2020-07-28', readTime: '约 8 分钟阅读', category: '投资方法论', tags: ['组合投资', '因子投资', '房地产'], series: { name: '投资方法论', order: 2, total: 3 } },

  // ── 算电协同 ──
  { slug: '算电协同进入落地期_从算力用户需求倒推投资机会', title: '算电协同进入落地期-从算力用户需求倒推投资机会', desc: '从算力用户的实际需求出发，倒推算电协同的落地路径与投资机会。', date: '2026-06-12', readTime: '约 1 分钟阅读', category: '算电协同', tags: ['算电协同', '算力', '投资分析'], series: { name: '算电协同系列', order: 5, total: 5 } },
  { slug: '算电协同2026_ai时代的能源基础设施', title: '算电协同2026：AI时代的能源基础设施', desc: '算电协同2026：算电协同作为 AI 基础设施的最新进展与前景展望。', date: '2026-06-12', readTime: '约 1 分钟阅读', category: '算电协同', tags: ['算电协同', 'AI', '基础设施'] },
  { slug: 'suan-dian-xie-tong-deep-analysis', title: '算电协同深度分析：当算力遇上电力的结构性机会', desc: '底层逻辑从"电随算动"到"算随电动"，五大落地模式与四条投资主线的全面拆解。', date: '2026-05-29', readTime: '约 12 分钟阅读', category: '算电协同', tags: ['算电协同', '投资分析', '深度分析', '产业链'], series: { name: '算电协同系列', order: 4, total: 5 } },
  { slug: 'suan-dian-xie-tong-AI', title: '算电协同：AI 下半场，电比芯片更稀缺', desc: '算力遇到电力瓶颈，中美两套体制给出了完全不同的应对逻辑。三层投资优先级和六个商业模式拆解。', date: '2026-05-28', readTime: '约 10 分钟阅读', category: '算电协同', tags: ['算电协同', 'AI', '投资分析'], series: { name: '算电协同系列', order: 3, total: 5 } },
  { slug: 'suan-dian-xie-tong-2', title: '算电协同产业链拆解：利润池在哪里？', desc: '上游绿电供给、中游智算基建、下游算力服务——三层的利润分布、竞争格局和卡位策略。', date: '2026-05-18', readTime: '约 10 分钟阅读', category: '算电协同', tags: ['算电协同', '产业链', '投资分析'], series: { name: '算电协同系列', order: 2, total: 5 } },
  { slug: 'suan-dian-xie-tong-1', title: '算电协同：为什么这是未来五年确定性很高的投资主题', desc: 'AI 算力集群用电已进入 500MW 级，算力正在成为新的电力需求。', date: '2026-05-15', readTime: '约 8 分钟阅读', category: '算电协同', tags: ['算电协同', '投资主题'], series: { name: '算电协同系列', order: 1, total: 5 } },

  // ── 政策解读 ──
  { slug: 'liu-zhang-wang-deep', title: '六张网规划实施方案深度解读：7万亿投资的底层逻辑', desc: '从政治局定调到发改委落地，六张网的投资逻辑、产业链拆解、多网协同效应与时间窗口。', date: '2026-05-25', readTime: '约 15 分钟阅读', category: '政策解读', tags: ['六张网', '基础设施', '政策分析'], series: { name: '六张网系列', order: 2, total: 2 } },
  { slug: 'liu-zhang-wang', title: '>7万亿！六张网同时开建，这波基建红利对普通人意味着什么？', desc: '政治局定调、发改委落地——六张网不是重复建设，是"组网"。七个投资方向和一个算电协同的单独机会。', date: '2026-05-22', readTime: '约 6 分钟阅读', category: '政策解读', tags: ['六张网', '基础设施', '投资机会'], series: { name: '六张网系列', order: 1, total: 2 } },
  { slug: 'carbon-electric-compute-synergy', title: '双碳考核收紧 × 碳市场扩容 × 算力出海：2026年碳电算协同深度分析', desc: '2026年4月碳排放双控首次纳入党内法规，碳市场覆盖排放量达80亿吨，算力中心用电量逼近2000亿千瓦时。三条主线同时收紧下的投资判断。', date: '2026-06-01', readTime: '约 15 分钟阅读', category: '政策解读', tags: ['双碳', '碳市场', '算力', '政策分析'] },

  // ── AI 应用层 ──
  { slug: 'ai-ying-yong-ceng-tou-zi', title: 'AI 应用层投资机会：一级市场最活跃的赛道', desc: 'Cursor三个月$500M→$2B，Devin从$500/月降到$20/月。89%的AI Agent从未上线生产环境。五个子赛道深度拆解，一个投资框架，五个配置建议。', date: '2026-06-11', readTime: '约 10 分钟阅读', category: 'AI 应用层', tags: ['AI', '投资机会', 'AI Agent', '应用层'] },

  // ── AI 协作 ──
  { slug: 'wechat-auto-publish', title: '微信公众号配图自动化：从 Playwright 挣扎到 API 闭环', desc: '用 Pollinations.ai 免费生图 + WeChat API 实现公众号图文自动配图，含 Playwright 自动化失败的踩坑实录。', date: '2026-05-29', readTime: '5 分钟', category: 'AI 协作', tags: ['WeChat', '自动化', 'Playwright', '配图'] },
  { slug: 'huihong-ppt-dev-journey', title: 'HUIIHONG PPT 模版开发：从AI协作到可复用技能的全记录', desc: '十轮迭代从测量模版到 Pillow 自绘图标，最终封装为 OpenCode 可复用技能的完整过程。', date: '2026-05-29', readTime: '约 10 分钟阅读', category: 'AI 协作', tags: ['PPT', '自动化', 'Pillow', '技能开发'] },
  { slug: 'ppt-quality-lessons', title: 'PPT 布局质量迭代：从 57 个问题到零缺陷', desc: '用 python-pptx 自动生成投资报告 PPT 的过程中遇到的布局问题及其系统化修复方法。', date: '2026-05-10', readTime: '约 5 分钟阅读', category: 'AI 协作', tags: ['PPT', '质量审查', 'python-pptx'] },
  { slug: 'ai-content-pipeline-experiment', title: '一个主题，4个产出：我用AI搭了一条从研究到交付的内容管线', desc: '同一份研究，同时产出PPT、网站文章、公众号文章、视频。技术栈对比和实战避坑记录。', date: '2026-05-30', readTime: '约 12 分钟阅读', category: 'AI 协作', tags: ['内容管线', 'AI', '自动化', '多平台'], series: { name: '内容管线系列', order: 1, total: 4 } },
  { slug: 'content-pipeline-system-design', title: '内容管线2.0：从一次实验到自动化生产系统', desc: '选题感知、外部信号扫描、QC门禁支撑的自动化管线系统设计总结与优化路线图。', date: '2026-05-31', readTime: '约 15 分钟阅读', category: 'AI 协作', tags: ['内容管线', '系统设计', 'QC'], series: { name: '内容管线系列', order: 2, total: 4 } },
  { slug: 'wechat-pipeline-iteration', title: '公众号发布管线迭代实录：从「基本能用」到「不必盯着」', desc: '一条公众号发布脚本从最初能跑，到六七轮迭代后变成自动排版、配图、质检、草稿一体化管线——六轮迭代实录与AI协作模式反思。', date: '2026-06-01', readTime: '约 10 分钟阅读', category: 'AI 协作', tags: ['内容管线', 'WeChat', '迭代', 'QC'], series: { name: '内容管线系列', order: 3, total: 4 } },
  { slug: 'article-to-ppt-pipeline', title: '别人还在手动排版时，我已经用AI秒出PPT了', desc: '一份2000字的文章，AI自动拆结构、提炼重点、匹配模板、生成PPT。30秒搞定——这是 Sisyphus 管线自动编排的真实结果。', date: '2026-06-03', readTime: '约 8 分钟阅读', category: 'AI 协作', tags: ['内容管线', 'PPT', '自动化'], series: { name: '内容管线系列', order: 4, total: 4 } },
  { slug: 'ai-pipeline-cross-verification', title: 'AI 管线分析报告乌龙记：交叉验证缺失引发的自我修复', desc: 'Sisyphus 误报个人网站"不可用"，实际一切正常。根因分析、修复过程和一条新确立的交叉验证规则。这篇文章本身就是管线验收。', date: '2026-06-01', readTime: '约 8 分钟阅读', category: 'AI 协作', tags: ['内容管线', '交叉验证', 'QA'] },

  // ── 电力交易 ──
  { slug: 'dian-li-xian-huo-di-ceng-luo-ji', title: '电力现货交易底层逻辑及核心竞争力', desc: '五大关键维度拆解电力现货交易的核心竞争力。', date: '2025-08-11', readTime: '约 8 分钟阅读', category: '电力交易', tags: ['电力现货', '交易策略', '核心竞争力'] },
  { slug: 'huo-dian-ling-huo-xing-gai-zao', title: '电力现货市场新规落地，火电灵活性改造迎风口', desc: '现货电价波动加大是确定性趋势，火电调峰价值正在重估。', date: '2026-02-28', readTime: '约 3 分钟阅读', category: '电力交易', tags: ['电力现货', '火电', '调峰'] },

  // ── 新能源 ──
  { slug: 'ya-zhou-li-yao-dai', title: '"亚洲锂腰带"横空出世：中国如何重塑全球新能源权力版图', desc: '横跨川青藏新的亚洲锂腰带已探明锂资源超3000万吨。', date: '2025-09-11', readTime: '约 5 分钟阅读', category: '新能源', tags: ['锂资源', '新能源', '供应链'] },
  { slug: 'guang-chu-chong-yi-ti-hua', title: '光储充一体化：新能源时代电力系统的"破局之钥"', desc: '光伏、储能、充电三大模块通过集成释放系统级价值。', date: '2025-06-14', readTime: '约 5 分钟阅读', category: '新能源', tags: ['光伏', '储能', '充电', '一体化'] },

  // ── 虚拟电厂 ──
  { slug: 'zhi-neng-ti-dian-wang', title: '智能体电网：虚拟电厂的终极革命', desc: '分布式自治如何重构14亿人的用电安全——从神经科学到Agent Grid架构。', date: '2025-07-17', readTime: '约 7 分钟阅读', category: '虚拟电厂', tags: ['虚拟电厂', '智能电网', '分布式'] },

  // ── AI+电力 ──
  { slug: 'AI-miao-sha-xian-huo', title: 'AI秒杀现货交易！电力市场惊现12%收益暴增', desc: 'AI正化身电力现货交易的核心引擎，从预测到风控再到交易决策全面重构。', date: '2025-06-21', readTime: '约 5 分钟阅读', category: 'AI+电力', tags: ['AI', '电力现货', '交易'] },

  // ── AI+能源 ──
  { slug: 'AI-neng-yuan-gao-jia-zhi-chang-jing', title: '51个高价值场景揭榜挂帅：AI+能源的iPhone时刻到了', desc: '国家能源局首次用"场景开放+揭榜挂帅"发布51个AI+能源商机入口，7月30日首轮截止。三类人的行动指南。', date: '2026-05-29', readTime: '约 8 分钟阅读', category: 'AI+能源', tags: ['AI', '能源', '场景', '政策'] },

  // ── 电力市场 ──
  { slug: 'di-di-sha-ru-dian-li-shi-chang', title: '滴滴杀入电力市场：巨头入局背后的底层逻辑与未来格局', desc: '68,000座充电站×17亿次充电数据×百万辆网约车V2G=一张新型电力市场的入场券。从滴滴到全球巨头的能源军备竞赛深度分析。', date: '2026-05-29', readTime: '约 12 分钟阅读', category: '电力市场', tags: ['滴滴', '电力市场', 'V2G', '巨头'], series: { name: '巨头入局电力市场系列', order: 1, total: 2 } },
  { slug: 'giants-power-market-opportunities', title: '巨头入局电力市场：五类投资机会与从业者行动指南', desc: '滴滴、阿里、宁德时代同时盯上卖电。纯价差模式正在消亡，虚拟电厂从可选项变为必选项。五类投资标的和三张入场券。', date: '2026-05-29', readTime: '约 8 分钟阅读', category: '电力市场', tags: ['电力市场', '投资机会', '虚拟电厂'], series: { name: '巨头入局电力市场系列', order: 2, total: 2 } },

  // ── 售电公司 ──
  { slug: 'shou-dian-gong-si-sheng-cun-zhi-nan', title: '2025年售电公司生存指南：三类公司如何强行续命？', desc: '电改57号文后售电行业大洗牌，三类公司存活路线。', date: '2025-06-10', readTime: '约 4 分钟阅读', category: '售电公司', tags: ['售电', '电改', '生存策略'] },

  // ── 个人投资 ──
  { slug: 'tou-zi-ben-zhi-qi-ye-xian-jin-liu', title: '投资的本质就是投资企业未来现金流', desc: '买股票就是买公司，买公司就是买其未来现金流的折现。个人投资专栏的开篇，也是整个投资体系的基石信念。', date: '2026-05-30', readTime: '约 15 分钟阅读', category: '个人投资', tags: ['投资', '现金流', '价值投资'] },

  // ── 氢能 ──
  { slug: '氢能投资的拐点到了吗', title: '氢能投资的拐点到了吗？', desc: '2026年上半年，一边是50亿项目停摆，一边是17家氢能企业拿到融资。氢能产业到底是冷是热？我的判断：真正的拐点不是政策拐点，而是经济性拐点。', date: '2026-06-12', readTime: '约 15 分钟阅读', category: '氢能', tags: ['氢能', '投资分析', '深度分析', '政策解读'] },

  // ── 三件套：AI能源基础设施 ──
  { slug: 'ai-infrastructure-three-investment-tracks', title: 'AI基础设施投资的三条主线：算电协同、钠电储能与液冷系统', desc: '当GPU单芯片功耗突破2300W、全球数据中心用电量将在2030年逼近1万亿kWh时，AI的瓶颈早已不是算力本身，而是支撑算力的能源基础设施。本文从PE/VC视角，拆解算电协同、钠电储能与液冷系统三条赛道的投资逻辑与落地节奏。', date: '2026-06-14', readTime: '约 12 分钟阅读', category: '投资方法论', tags: ['算电协同', '钠电', '液冷', 'AI基础设施', 'PE投资'] },
  { slug: 'liquid-cooling-pe-investment-map', title: '液冷赛道PE投资地图：千亿市场的六大主题与全球标的矩阵', desc: '本文定位一级市场股权投资视角，聚焦未上市公司、产业整合机会、技术壁垒评估和商业模式闭环。液冷赛道处于基础设施范式转移早期阶段，渗透率从14%到50%+的跨越将在3年内完成。', date: '2026-06-14', readTime: '约 12 分钟阅读', category: '投资方法论', tags: ['液冷', 'PE投资', '冷却液', 'AI基础设施', '数据中心'] },
  { slug: 'aidc-two-strong-comparison', title: 'AIDC赛道两强对比：润泽科技狂奔、数据港追赶，算电协同谁主沉浮？', desc: '本文基于2026年6月最新财报与公开数据，对算电协同赛道两家核心A股标的进行深度对比分析，供PE/VC及行业研究参考。', date: '2026-06-14', readTime: '约 8 分钟阅读', category: '算电协同', tags: ['算电协同', 'AIDC', '润泽科技', '数据港', 'IDC'] },

  // ── 三件套扩展：冷却液材料 ──
  { slug: 'coolant-material-pe-investment', title: '液冷赛道PE投资地图：冷却液材料的百亿国产替代机会', desc: '3M Novec系列占全球冷却液35-40%的市场份额，2025年底正式停产。留下的结构性供给缺口至少需要3-5年填补。PE最应关注的液冷耗材级赛道。', date: '2026-06-14', readTime: '约 10 分钟阅读', category: '投资方法论', tags: ['液冷', '冷却液', 'PE投资', '数据中心', '国产替代'] },
  { slug: 'aidc-green-electricity-pe-investment', title: 'AIDC绿电一体化：算电协同政策落地下的PE/VC机会图谱', desc: '2026年5月PUE≤1.15硬约束全面生效，算电协同从概念进入执行阶段。PE的核心机会不在IDC运营本身，而在配套的能源数字化、绿电聚合、储能运维和微电网四个子方向。', date: '2026-06-14', readTime: '约 10 分钟阅读', category: '投资方法论', tags: ['算电协同', 'AIDC', '绿电', 'PE投资', '储能运维'] },

  // ── 算随电动 ──
  { slug: 'compute-follows-electricity-virtual-power-plant', title: '算随电动：数据中心虚拟电厂首单交易的商业逻辑', desc: '2026年5月14日，国内首次实现大型数据中心以虚拟电厂形式参与电力现货交易。数据中心从用电巨兽变身电网柔性资源，虚拟电厂平台成为算电协同时代最确定的管道型机会。', date: '2026-06-15', readTime: '约 12 分钟阅读', category: '虚拟电厂', tags: ['算电协同', '虚拟电厂', '数据中心', '电力现货', '算随电动'] },
];

// ── Helper functions ──

const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export function getAllArticles(): Article[] {
  return sorted;
}

export function getArticlesByCategory(cat: string): Article[] {
  return sorted.filter(a => a.category === cat);
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 6
): Article[] {
  return sorted
    .filter(a => a.category === category && a.slug !== currentSlug)
    .slice(0, limit);
}

export function getFeaturedArticles(limit = 8): Article[] {
  return sorted.slice(0, limit);
}

export function getAdjacentArticles(slug: string): {
  prev: Article | null;
  next: Article | null;
} {
  const idx = sorted.findIndex(a => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < sorted.length - 1 ? sorted[idx + 1] : null,
    next: idx > 0 ? sorted[idx - 1] : null,
  };
}

export function getSeriesArticles(slug: string): Article[] | null {
  const article = articles.find(a => a.slug === slug);
  if (!article?.series?.name) return null;
  return articles
    .filter(a => a.series?.name === article.series?.name)
    .sort((a, b) => (a.series?.order ?? 0) - (b.series?.order ?? 0));
}
