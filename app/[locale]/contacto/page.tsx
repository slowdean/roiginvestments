'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false })

    try {
      await emailjs.send(
        'service_lemywb7', // Reemplaza con tu Service ID de EmailJS
        'template_u5lpgdq', // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Roig Investments'
        },
        'Ph3vDfn-CMzvL7nFlEY' // Reemplaza con tu Public Key de EmailJS
      )

      setStatus({ loading: false, success: true, error: false })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({ loading: false, success: false, error: true })
    }
  }

  return (
    <main className="min-h-screen bg-light-gray">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            {t('contact.title')}
          </h1>
          
          {status.success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              {t('contact.form.success')}
            </div>
          )}

          {status.error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {t('contact.form.error')}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                {t('contact.form.name.label')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                placeholder={t('contact.form.message.placeholder')}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? t('contact.form.sending') : t('contact.form.submit')}
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