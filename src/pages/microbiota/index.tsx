import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { microbiotaFactors, MicrobiotaFactor } from '@/data/microbiota/microbiotaData';

const MicrobiotaPage = () => {
  const [activeFactor, setActiveFactor] = useState<MicrobiotaFactor>(microbiotaFactors[0]);

  return (
    <Layout
      title="Microbiota Intestinal | Intolerancia a la Lactosa"
      description="Análisis del papel de la microbiota intestinal en la intolerancia a la lactosa, desde la fermentación bacteriana hasta la adaptación al consumo regular."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Microbiota Intestinal e Intolerancia a la Lactosa
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            La microbiota intestinal juega un papel fundamental en el procesamiento de la lactosa no digerida 
            y en la modulación de los síntomas de intolerancia.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Navegación lateral */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Aspectos Microbianos</h2>
                <nav>
                  <ul className="space-y-3">
                    {microbiotaFactors.map(factor => (
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
                    <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                      {activeFactor.image ? (
                        <img 
                          src={process.env.NODE_ENV === 'production' ? `/Lactose_Paper/images/microbiota/${activeFactor.id}.webp` : `/images/microbiota/${activeFactor.id}.webp`}
                          alt={activeFactor.title}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-primary-800">Microbiota como Modulador Terapéutico</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  La microbiota intestinal no solo contribuye a la patofisiología de la intolerancia a la lactosa, 
                  sino que también representa un objetivo terapéutico prometedor. Estrategias como la suplementación 
                  con probióticos específicos, el uso de prebióticos y la modulación de la dieta pueden optimizar el 
                  perfil microbiano para mejorar la tolerancia a la lactosa.
                </p>
                <Link 
                  href="/aproximaciones-terapeuticas"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Explorar aproximaciones terapéuticas
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Implicaciones del Ecosistema Microbiano</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                  La comprensión del papel de la microbiota en la intolerancia a la lactosa ofrece nuevas perspectivas:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Biomarcadores Microbianos</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Perfiles específicos de la microbiota podrían servir como biomarcadores para predecir
                      la susceptibilidad a la intolerancia y la respuesta a intervenciones terapéuticas.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Personalización de Tratamientos</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Considerando la individualidad del ecosistema microbiano, las estrategias de manejo
                      pueden personalizarse según el perfil microbiano específico de cada persona.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Intervenciones Dietéticas</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dietas ricas en fibras específicas pueden promover selectivamente el crecimiento de bacterias
                      beneficiosas que mejoran el metabolismo de la lactosa y reducen los síntomas.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-orange-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Terapias Futuras</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El desarrollo de consorcios microbianos específicos o productos de bacterias modificadas
                      podría ofrecer nuevas soluciones terapéuticas para la intolerancia a la lactosa.
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

export default MicrobiotaPage; 