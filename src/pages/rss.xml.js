import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = [
    { slug: 'liu-zhang-wang-deep', title: '六张网规划实施方案深度解读：7万亿投资的底层逻辑与投资主线', date: '2026-05-25', category: '政策解读' },
    { slug: 'liu-zhang-wang', title: '>7万亿！六张网同时开建，这波基建红利对普通人意味着什么？', date: '2026-05-22', category: '政策解读' },
    { slug: 'suan-dian-xie-tong-2', title: '算电协同产业链拆解：利润池在哪里？', date: '2026-05-18', category: '算电协同' },
    { slug: 'suan-dian-xie-tong-1', title: '算电协同：为什么这是未来五年确定性很高的投资主题', date: '2026-05-15', category: '算电协同' },
    { slug: 'impossible-triangle', title: '不可能铁三角与战略分层定价：华为思路对投资的启示', date: '2026-05-12', category: '投资方法论' },
    { slug: 'ppt-quality-lessons', title: 'PPT 布局质量迭代：从 57 个问题到零缺陷', date: '2026-05-10', category: 'AI 协作' },
  ];

  return rss({
    title: '陈道雷 | 算电协同 · 电力交易 · 新能源',
    description: '算力与电力协同、电力市场改革、新能源基础设施投资的深度分析与投资框架。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      link: `/blog/${post.slug}/`,
      categories: [post.category],
    })),
    customData: '<language>zh-cn</language>',
  });
}
