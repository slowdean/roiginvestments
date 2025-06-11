import React from 'react'
import HomeClient from './HomeClient'

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'ca' }
  ]
}

export default function Home() {
  return <HomeClient />
} 