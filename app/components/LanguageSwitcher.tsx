'use client'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

const languages = {
  es: 'Español',
  en: 'English',
  ca: 'Català'
}

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const handleLanguageChange = useCallback((newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }, [pathname, query, asPath, router])

  return (
    <div className="relative inline-block text-left">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="block w-full px-4 py-2 text-sm text-primary bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
} 