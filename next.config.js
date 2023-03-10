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
    DOMEN_URL: process.env.DOMEN_URL || process.env.local.DOMEN_URL,
    REDIS_URL: process.env.REDIS_URL || process.env.local.REDIS_URL,
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
