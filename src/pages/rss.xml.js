import rss from '@astrojs/rss';
import { getAllArticles } from '../data/articles';

export async function GET(context) {
  const posts = getAllArticles().slice(0, 20);

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
