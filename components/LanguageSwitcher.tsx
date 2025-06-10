'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'es'

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ca', name: 'Català' }
  ]

  const getPathWithNewLocale = (locale: string) => {
    const pathParts = pathname.split('/')
    pathParts[1] = locale
    return pathParts.join('/')
  }

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getPathWithNewLocale(lang.code)}
          className={`px-2 py-1 text-sm rounded ${
            currentLocale === lang.code
              ? 'bg-accent text-white'
              : 'text-primary hover:bg-gray-100'
          }`}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  )
} 