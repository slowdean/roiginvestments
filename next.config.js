/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en', 'ca'],
    defaultLocale: 'es',
    localeDetection: true
  }
}

module.exports = nextConfig 