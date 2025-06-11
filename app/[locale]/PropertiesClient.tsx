'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useTranslation } from '@/hooks/useTranslation'

export default function PropertiesClient() {
  const { t, locale } = useTranslation()

  const properties = [
    {
      id: 1,
      title: t('properties.items.1.title'),
      description: t('properties.items.1.description'),
      price: t('properties.items.1.price'),
      location: t('properties.items.1.location'),
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [t('properties.items.1.features.0'), t('properties.items.1.features.1'), t('properties.items.1.features.2'), t('properties.items.1.features.3')]
    },
    {
      id: 2,
      title: t('properties.items.2.title'),
      description: t('properties.items.2.description'),
      price: t('properties.items.2.price'),
      location: t('properties.items.2.location'),
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [t('properties.items.2.features.0'), t('properties.items.2.features.1'), t('properties.items.2.features.2'), t('properties.items.2.features.3')]
    },
    {
      id: 3,
      title: t('properties.items.3.title'),
      description: t('properties.items.3.description'),
      price: t('properties.items.3.price'),
      location: t('properties.items.3.location'),
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
      features: [t('properties.items.3.features.0'), t('properties.items.3.features.1'), t('properties.items.3.features.2'), t('properties.items.3.features.3')]
    },
    {
      id: 4,
      title: t('properties.items.4.title'),
      description: t('properties.items.4.description'),
      price: t('properties.items.4.price'),
      location: t('properties.items.4.location'),
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      features: [t('properties.items.4.features.0'), t('properties.items.4.features.1'), t('properties.items.4.features.2'), t('properties.items.4.features.3')]
    },
    {
      id: 5,
      title: t('properties.items.5.title'),
      description: t('properties.items.5.description'),
      price: t('properties.items.5.price'),
      location: t('properties.items.5.location'),
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
      features: [t('properties.items.5.features.0'), t('properties.items.5.features.1'), t('properties.items.5.features.2'), t('properties.items.5.features.3')]
    },
    {
      id: 6,
      title: t('properties.items.6.title'),
      description: t('properties.items.6.description'),
      price: t('properties.items.6.price'),
      location: t('properties.items.6.location'),
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [t('properties.items.6.features.0'), t('properties.items.6.features.1'), t('properties.items.6.features.2'), t('properties.items.6.features.3')]
    }
  ]

  return (
    <main className="min-h-screen bg-light-gray">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
          {t('properties.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 overflow-hidden"
            >
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
                <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
                  {property.title}
                </h2>
                <p className="text-muted mb-4">{property.location}</p>
                <p className="text-lg font-semibold text-accent mb-4">
                  {property.price}
                </p>
                <p className="text-muted mb-4">{property.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-light-gray text-muted rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${locale}/contacto`}
                  className="block w-full text-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  {t('properties.cta')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 