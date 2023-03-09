const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    return config;
  },
  i18n: {
    locales: ['uz'],
    defaultLocale: 'uz',
  },
  env: {
    DOMEN_URL: process.env.WEBSITE_URL || process.env.DOMEN_URL,
    DATA_URL: process.env.DATA_URL,
    GIT_SOFT: process.env.GIT_SOFT,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
