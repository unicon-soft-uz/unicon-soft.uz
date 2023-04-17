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
