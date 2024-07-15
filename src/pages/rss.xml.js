import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Ученик Astro | Блог',
    description: 'Мое путешествие по изучению Astro',
    site: 'https://lively-twilight-4ed67d.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ru-ru</language>`,
  });
}