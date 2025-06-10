/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'en', 'ca'],
    defaultLocale: 'es',
    localeDetection: true
  },
  images: {
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig 