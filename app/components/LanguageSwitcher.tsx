'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

const languages = {
  es: 'Español',
  en: 'English',
  ca: 'Català'
}

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'es'

  const handleLanguageChange = useCallback((newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }, [pathname, router])

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentLocale}
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