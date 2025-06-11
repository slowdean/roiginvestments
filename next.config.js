/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  i18n: {
    locales: ['es', 'en', 'ca'],
    defaultLocale: 'es',
    localeDetection: true
  }
}

module.exports = nextConfig 