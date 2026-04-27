import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { CATEGORIES, getCategory } from '~/lib/categories';

export async function getStaticPaths() {
  return CATEGORIES.map((c) => ({ params: { slug: c.slug } }));
}

export async function GET(context: { site: URL; params: { slug: string } }) {
  const cat = getCategory(context.params.slug)!;
  const items = (await getCollection('blog', ({ data }) => !data.draft && data.category === cat.slug))
    .sort((a, b) => +b.data.date - +a.data.date);

  return rss({
    title: `Blog Victory Auto — ${cat.name}`,
    description: cat.desc,
    site: context.site!.toString(),
    items: items.map((a) => {
      const slugOnly = a.slug.split('/').pop();
      return {
        title: a.data.title,
        pubDate: a.data.date,
        description: a.data.excerpt,
        link: `/blog/${a.data.category}/${slugOnly}/`,
      };
    }),
    customData: '<language>cs-cz</language>',
  });
}
