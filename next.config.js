const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    config.resolve.extensions.push('.ts', '.tsx');
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
