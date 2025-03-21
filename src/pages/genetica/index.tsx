import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { factoresGeneticos, FactorGenetico } from '@/data/genetica/factoresGeneticos';
import OptimizedImage from '../../components/OptimizedImage';
import { getImagePath } from '../../utils/paths';

const GeneticaPage = () => {
  const [activeFactor, setActiveFactor] = useState<FactorGenetico>(factoresGeneticos[0]);

  return (
    <Layout
      title="Factores Genéticos | Intolerancia a la Lactosa"
      description="Análisis detallado de los factores genéticos implicados en la intolerancia a la lactosa, desde el gen LCT hasta mecanismos epigenéticos."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Factores Genéticos de la Intolerancia a la Lactosa
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Componentes génicos que determinan la capacidad de producir lactasa y modulan
            las respuestas fisiológicas a la intolerancia.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Navegación lateral */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Factores Genéticos</h2>
                <nav>
                  <ul className="space-y-3">
                    {factoresGeneticos.map(factor => (
                      <li key={factor.id}>
                        <button
                          onClick={() => setActiveFactor(factor)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                            activeFactor.id === factor.id
                              ? 'bg-primary-100 text-primary-800 font-medium shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-3 inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                          {factor.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-lg mb-4 text-gray-700">Recursos adicionales</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/modelo" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Ver modelo multinivel
                      </Link>
                    </li>
                    <li>
                      <Link href="/glosario" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Consultar glosario científico
                      </Link>
                    </li>
                    <li>
                      <Link href="/mecanismos-fisiologicos" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Mecanismos fisiológicos
                      </Link>
                    </li>
                    <li>
                      <Link href="/aproximaciones-terapeuticas" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Aproximaciones terapéuticas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contenido principal */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-16 bg-primary-500 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{activeFactor.title}</h2>
                    <p className="text-lg text-gray-600">{activeFactor.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  <div className="md:col-span-7">
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: activeFactor.content }} />
                  </div>
                  <div className="md:col-span-5">
                    <div className="col-md-10 mb-4">
                      <OptimizedImage 
                        src={getImagePath('genetica', 'genética-lactosa.webp')}
                        alt="Genética y metabolismo de la lactosa"
                        width={800}
                        height={500}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                    
                    <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-primary-500">
                      <h3 className="text-xl font-bold mb-4 text-primary-700 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Puntos Clave
                      </h3>
                      <ul className="space-y-3">
                        {activeFactor.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Términos Relacionados</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeFactor.relatedTerms.map(term => (
                      <Link 
                        href={`/glosario?term=${term}`} 
                        key={term}
                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                        {term.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-xl shadow-lg p-8 border border-primary-100 mb-12">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-primary-800">Interacción Genético-Ambiental</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Los factores genéticos no operan de forma aislada sino en constante interacción con factores ambientales, 
                  particularmente la dieta y el microbioma intestinal. Esta visión integrada es fundamental para comprender 
                  la naturaleza espectral de la intolerancia a la lactosa y sus manifestaciones clínicas variables.
                </p>
                <Link 
                  href="/modelo/ciclos-retroalimentacion"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Explorar ciclos de retroalimentación
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Implicaciones Clínicas y Terapéuticas</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                  La comprensión de los factores genéticos de la intolerancia a la lactosa permite:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Diagnóstico Personalizado</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El genotipado de variantes específicas, como C/T-13910, puede complementar las pruebas funcionales
                      tradicionales, permitiendo un diagnóstico más preciso y personalizado.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Medicina de Precisión</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El conocimiento de los factores genéticos facilita el desarrollo de estrategias terapéuticas
                      personalizadas, adaptadas al perfil genético específico de cada individuo.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Aproximaciones Epigenéticas</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      La comprensión de la regulación epigenética abre la puerta a intervenciones dirigidas a
                      modular la expresión génica de lactasa a través de factores dietéticos y ambientales.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Educación del Paciente</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El conocimiento del trasfondo genético ayuda a los pacientes a comprender la naturaleza de su
                      condición, promoviendo la adherencia a las recomendaciones dietéticas y terapéuticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneticaPage; 