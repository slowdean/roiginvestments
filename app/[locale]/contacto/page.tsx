import React from 'react'
import ContactClient from './ContactClient'

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'ca' }
  ]
}

export default function Contact() {
  return <ContactClient />
} 