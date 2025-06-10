import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['es', 'en', 'ca']
const defaultLocale = 'es'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')?.[0].split('-')[0] || defaultLocale
    const finalLocale = locales.includes(locale) ? locale : defaultLocale

    return NextResponse.redirect(
      new URL(`/${finalLocale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
} 