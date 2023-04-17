const fs = require('fs');
const globby = require('globby');
function addPage(page) {
  const path = page
    .replace('pages', '')
    .replace('.js', '')
    .replace('.mdx', '')
    .replace('.jsx', '');
  const route = path;
  return `  <url>
    <loc>${`https://www.unicon-soft.uz${route}`}</loc>
    <lastmod>${new Date().toUTCString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx,.jsx,.ts}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/about',
    '!pages/about/*.js',
    '!pages/admin',
    '!pages/api',
    '!pages/index.js',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();
