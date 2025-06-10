'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={`/${locale}`} className="text-2xl font-serif font-bold text-primary">
                Roig Investments
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent"
              >
                {t('nav.home')}
              </Link>
              <Link
                href={`/${locale}/propiedades`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent"
              >
                {t('nav.properties')}
              </Link>
              <Link
                href={`/${locale}/contacto`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-primary hover:text-accent"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href={`/${locale}`} className="block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium text-blue-700 bg-blue-50">
              {t('nav.home')}
            </Link>
            <Link href={`/${locale}/propiedades`} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              {t('nav.properties')}
            </Link>
            <Link href={`/${locale}/contacto`} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 