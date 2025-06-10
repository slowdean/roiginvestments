import { useRouter } from 'next/router'
import { translations } from '../translations'

export function useTranslation() {
  const router = useRouter()
  const { locale = 'es' } = router

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