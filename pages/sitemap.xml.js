// pages/sitemap.xml.js
const generateSitemap = () => {
    const baseUrl = 'https://salnet.xyz'; // Replace with your website URL
      // List of static pages
  const pages = [
    '/',
    '/xintent',
    '/privacy',
    '/refund',
    '/subscribe',
    '/support',
    '/terms'
    // Add more pages as needed
  ];
  
  // Generate sitemap content
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => `<url><loc>${baseUrl}${page}</loc></url>`).join('')}
    </urlset>`;

  return sitemapContent;
};

  
const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
