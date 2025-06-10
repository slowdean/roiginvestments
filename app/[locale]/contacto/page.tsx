'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-light-gray">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            {t('contact.title')}
          </h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                {t('contact.form.name.label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder={t('contact.form.name.placeholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                {t('contact.form.email.label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder={t('contact.form.email.placeholder')}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">
                {t('contact.form.phone.label')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder={t('contact.form.phone.placeholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                {t('contact.form.message.label')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder={t('contact.form.message.placeholder')}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              {t('contact.form.submit')}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              {t('contact.info.title')}
            </h2>
            <div className="space-y-4">
              <p className="text-muted">
                <strong className="text-primary">{t('contact.info.address.label')}:</strong> {t('contact.info.address.value')}
              </p>
              <p className="text-muted">
                <strong className="text-primary">{t('contact.info.phone.label')}:</strong> {t('contact.info.phone.value')}
              </p>
              <p className="text-muted">
                <strong className="text-primary">{t('contact.info.email.label')}:</strong> {t('contact.info.email.value')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 