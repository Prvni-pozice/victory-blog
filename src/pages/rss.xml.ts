import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, CATEGORIES } from '~/lib/categories';

export async function GET(context: { site: URL }) {
  const all = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: 'Blog Victory Auto',
    description: 'Případové studie, srovnání a praxe z provozu elektrických užitkových vozů.',
    site: context.site!.toString(),
    items: all.map((a) => {
      const slugOnly = a.slug.split('/').pop();
      const cat = CATEGORIES.find((c) => c.slug === a.data.category)!;
      return {
        title: a.data.title,
        pubDate: a.data.date,
        description: a.data.excerpt,
        link: `/blog/${a.data.category}/${slugOnly}/`,
        categories: [cat.name],
      };
    }),
    customData: '<language>cs-cz</language>',
  });
}
