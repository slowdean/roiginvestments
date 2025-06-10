import './globals.css'
import type { Metadata } from 'next'
import { Lato, Playfair_Display } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Roig Investments - Inversiones Inmobiliarias',
  description: 'Tu socio de confianza en inversiones inmobiliarias de alto rendimiento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${lato.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-light-gray font-sans">
        {children}
      </body>
    </html>
  )
}
