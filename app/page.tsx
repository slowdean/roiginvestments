'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-light-gray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="Propiedad de lujo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Invierte en el Futuro con Roig Investments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Tu socio de confianza en inversiones inmobiliarias de alto rendimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/propiedades"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
              >
                Ver Propiedades
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué elegir Roig Investments?
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Ofrecemos soluciones de inversión personalizadas con un enfoque en la excelencia y el rendimiento
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Inversión Global",
                description: "Accede a oportunidades inmobiliarias en los mercados más prometedores del mundo",
                icon: "🌍"
              },
              {
                title: "Rendimiento Optimizado",
                description: "Maximiza tus retornos con estrategias de inversión probadas y eficientes",
                icon: "📈"
              },
              {
                title: "Seguridad Garantizada",
                description: "Tu inversión está protegida con las mejores prácticas y estándares del mercado",
                icon: "🔒"
              },
              {
                title: "Asesoramiento Personal",
                description: "Recibe atención personalizada y asesoramiento experto en cada paso",
                icon: "👥"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-light-gray p-8 rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar tu inversión?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos de inversión
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-base font-medium rounded-lg text-white bg-accent hover:bg-accent/90 transition-colors duration-300"
          >
            Contacta con Nosotros
          </Link>
        </div>
      </section>
    </main>
  )
} 