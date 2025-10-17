import type { APIRoute } from 'astro';

const SITE_URL = 'https://mytinyceo.com';

// Define all pages that should be included in the sitemap
const pages = [
  { url: '', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/product', changefreq: 'monthly', priority: 0.9 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.9 },
  { url: '/resources', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog/sba-loan-requirements', changefreq: 'monthly', priority: 0.7 },
  { url: '/use-cases', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
