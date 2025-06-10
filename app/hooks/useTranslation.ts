'use client'
import { useParams } from 'next/navigation'
import { translations } from '../translations'

export function useTranslation() {
  const params = useParams()
  const locale = (params?.locale as string) || 'es'

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  return { t, locale }
} 