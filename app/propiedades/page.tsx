'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useTranslation } from '../hooks/useTranslation'

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Casa Modernista Avinguda Tibidabo',
    location: 'Barcelona',
    price: '6.900.000 €',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Magnífica casa modernista en una de las zonas más exclusivas de Barcelona.',
    features: ['8 habitaciones', '6 baños', '500m²', 'Jardín privado']
  },
  {
    id: 2,
    title: 'Edificio Caballero 79',
    location: 'Barcelona',
    price: '9.500.000 €',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
    description: 'Edificio histórico completamente reformado en el corazón de Barcelona.',
    features: ['12 apartamentos', 'Ascensor', '800m²', 'Zona comercial']
  },
  {
    id: 3,
    title: 'Casa Ciudad Diagonal',
    location: 'Barcelona',
    price: '4.500.000 €',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Elegante residencia en una de las zonas más prestigiosas de la ciudad.',
    features: ['6 habitaciones', '4 baños', '350m²', 'Terraza']
  },
  {
    id: 4,
    title: 'Finca Carrer Sant Miquel 51',
    location: 'Barceloneta',
    price: '1.000.000 €',
    description: 'Propiedad en venta en el corazón de la Barceloneta.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: ['4 habitaciones', '2 baños', '120m²', 'Terraza']
  },
  {
    id: 5,
    title: 'Nau Industrial Polígon Francolí',
    location: 'Tarragona',
    price: '900.000 €',
    description: 'Nave industrial en una ubicación estratégica.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80',
    features: ['1000m²', 'Zona de carga', 'Oficinas', 'Parking']
  },
  {
    id: 6,
    title: 'Edificio Residencial Pere IV',
    location: 'Barcelona',
    price: '1.800.000 €',
    description: 'Edificio residencial con superficie construida de 816 m².',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    features: ['8 apartamentos', 'Ascensor', '816m²', 'Zona común']
  }
]

export default function Properties() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-light-gray">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="Propiedades de lujo"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('properties.hero.title')}
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl">
            {t('properties.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-soft overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-hover">
              <div className="relative h-64 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={property.id <= 3}
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">{property.title}</h3>
                <p className="text-muted mb-4">{property.location}</p>
                <p className="text-2xl font-bold text-accent mb-4">{property.price}</p>
                <p className="text-muted mb-4">{property.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300">
                  {t('properties.card.requestInfo')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{t('properties.cta.title')}</span>
            <span className="block">{t('properties.cta.subtitle')}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            {t('properties.cta.description')}
          </p>
          <button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border-2 border-accent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent/90 transition-colors duration-300 sm:w-auto">
            {t('properties.cta.button')}
          </button>
        </div>
      </div>
    </main>
  )
} 