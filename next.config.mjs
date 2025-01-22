// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'fr', 'hi', 'it','pt','bn','ru','ko','ta','ml','ar','de','ja'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/:path*.webmanifest',
        destination: '/favicon/site.webmanifest',
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json'
          }
        ]
      }
    ]
  }
};

export default nextConfig;