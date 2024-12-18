// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'fr', 'hi', 'it','pt','bn','ru','ko','ta','ml','ar','de'],
    defaultLocale: 'en', 
    localeDetection: true, 
  },
};

export default nextConfig;
