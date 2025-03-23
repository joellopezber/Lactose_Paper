import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import OptimizedImage from '@/components/OptimizedImage';

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary-50 to-white py-8 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
                Metaanálisis Multinivel de la Intolerancia a la Lactosa
              </h1>
              <p className="text-lg sm:text-xl mt-4 sm:mt-6 text-gray-700">
                Un nuevo paradigma que reconceptualiza la intolerancia a la lactosa como un espectro multifactorial determinado por interacciones complejas entre factores genéticos, epigenéticos, microbianos y fisiopatológicos.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link href="/modelo" className="btn">
                  Explorar el Modelo
                </Link>
                <Link href="/investigacion" className="btn bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                  Leer Investigación
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl mt-6 lg:mt-0">
              {/* Imagen principal */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px]">
                  <OptimizedImage 
                    src="/images/modelo/freepik__background__20580.png"
                    alt="Ilustración conceptual - Intolerancia a la Lactosa"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center text-2xl sm:text-3xl mb-8 sm:mb-12">Elementos Clave del Modelo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Condición Espectral</h3>
              <p className="text-gray-600 text-center">
                Reconceptualización de la intolerancia a la lactosa como una condición espectral, no binaria.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Ciclos de Retroalimentación</h3>
              <p className="text-gray-600 text-center">
                Identificación de cuatro ciclos de retroalimentación que modulan la expresión clínica.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Modelo Multinivel</h3>
              <p className="text-gray-600 text-center">
                Desarrollo de un modelo de seis niveles interconectados que explican la condición.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Adaptación a la Lactosa</h3>
              <p className="text-gray-600 text-center">
                Reinterpretación del fenómeno de adaptación a la lactosa desde una perspectiva ecológica.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center text-2xl sm:text-3xl mb-8 sm:mb-12">Explorar por Categoría</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Link href="/mecanismos-fisiologicos" className="block group">
              <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-400 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Mecanismos Fisiológicos</h3>
                </div>
              </div>
            </Link>
            
            <Link href="/genetica" className="block group">
              <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-200 to-secondary-400 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Factores Genéticos</h3>
                </div>
              </div>
            </Link>
            
            <Link href="/microbiota" className="block group">
              <div className="relative h-48 sm:h-60 rounded-lg overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-400 group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Microbiota Intestinal</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 