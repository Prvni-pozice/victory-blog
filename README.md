# Victory Blog

Astro static site for **blog.victoryauto.cz** — SEO-zaměřený podweb Victory Auto pro články o elektromobilitě, e-dodávkách a servisu.

## Stack

- **Astro 4** (static, content collections, MDX)
- **Pagefind** — statický fulltext index
- **@astrojs/sitemap**, **@astrojs/rss**

## Struktura

```
src/
  content/
    config.ts             # zod schema pro blog + authors
    blog/                 # MDX články
    authors/              # JSON autoři
  layouts/                # BaseLayout, BlogLayout, ArticleLayout
  components/             # SiteHeader, ArticleCard, TOC, ...
  pages/
    index.astro           # /
    blog/                 # /blog, /blog/[...page], /blog/kategorie/[slug]/...
    rss.xml.ts            # /rss.xml
  styles/global.css       # design tokens + base
  scripts/                # client-side JS (TOC scroll-spy, layout toggle)
public/                   # statická aktiva (logo, OG, favicon)
```

## Vývoj

```bash
npm install
npm run dev          # http://localhost:4323
```

## Build

```bash
npm run build        # astro build → dist/, pak pagefind index
npm run preview
```

## Design tokens

Viz `src/styles/global.css`. Akcent `#0171c0`, světlý theme `#F5F4F1`. Fonty: Inter + JetBrains Mono přes `@fontsource`.

## SEO checklist

- JSON-LD Article + BreadcrumbList na detailu
- OG + Twitter Card meta
- canonical URL
- sitemap.xml automatický
- RSS na /rss.xml
- robots.txt s odkazem na sitemap
- Pagefind statický fulltext
