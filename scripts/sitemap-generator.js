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
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx, .jsx}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
generateSitemap();