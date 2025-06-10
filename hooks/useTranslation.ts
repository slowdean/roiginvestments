'use client'

import { usePathname } from 'next/navigation'
import { translations } from '../translations'

export function useTranslation() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'es'

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations]

    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }

    return value || key
  }

  return { t, locale }
} 