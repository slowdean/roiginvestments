import React from 'react'
import PropertiesClient from './PropertiesClient'

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'ca' }
  ]
}

export default function Properties() {
  return <PropertiesClient />
} 