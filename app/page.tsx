'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Invierte en el Futuro con Roig Investments
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Tu socio de confianza en inversiones inmobiliarias de alto rendimiento
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/propiedades"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Ver Propiedades
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-700 transition-colors duration-300"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Roig Investments?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu inversión?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos de inversión
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contacta con Nosotros
            </Link>
          </div>
        </section>
      </main>
    </main>
  )
} 