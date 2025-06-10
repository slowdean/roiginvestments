/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en', 'ca'],
    defaultLocale: 'es',
    localeDetection: false
  }
}

module.exports = nextConfig 