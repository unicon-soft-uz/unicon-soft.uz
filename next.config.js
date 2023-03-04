const nextConfig = {
  reactStrictMode: true,
  basePath: '/uz',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }
    return config;
  },
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL || process.env.DOMEN_URL,
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
