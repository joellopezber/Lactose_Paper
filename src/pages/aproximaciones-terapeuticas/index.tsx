import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { aproximacionesTerapeuticas, AproximacionTerapeutica } from '@/data/terapeutica/aproximacionesTerapeuticas';

const AproximacionesTerapeuticasPage = () => {
  const [activeAproximacion, setActiveAproximacion] = useState<AproximacionTerapeutica>(aproximacionesTerapeuticas[0]);

  // Función para obtener el color de fondo según el nivel de evidencia
  const getEvidenceBadgeColor = (level: string) => {
    switch (level) {
      case 'Alta':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Moderada':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Preliminar':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Emergente':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout
      title="Aproximaciones Terapéuticas | Intolerancia a la Lactosa"
      description="Estrategias terapéuticas avanzadas para el manejo de la intolerancia a la lactosa basadas en el modelo comprensivo multinivel."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Aproximaciones Terapéuticas para la Intolerancia a la Lactosa
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Estrategias innovadoras basadas en la ciencia más reciente que abordan 
            múltiples niveles del espectro de la intolerancia a la lactosa.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Navegación lateral */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Aproximaciones</h2>
                <nav>
                  <ul className="space-y-3">
                    {aproximacionesTerapeuticas.map(aproximacion => (
                      <li key={aproximacion.id}>
                        <button
                          onClick={() => setActiveAproximacion(aproximacion)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                            activeAproximacion.id === aproximacion.id
                              ? 'bg-primary-100 text-primary-800 font-medium shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-3 inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                          {aproximacion.title}
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Mecanismos fisiológicos
                      </Link>
                    </li>
                    <li>
                      <Link href="/microbiota" className="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Microbiota intestinal
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
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h2 className="text-3xl font-bold text-gray-800">{activeAproximacion.title}</h2>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full border ${getEvidenceBadgeColor(activeAproximacion.evidenceLevel)}`}>
                        Evidencia: {activeAproximacion.evidenceLevel}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600">{activeAproximacion.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  <div className="md:col-span-7">
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: activeAproximacion.content }} />
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                      <Image 
                        src={activeAproximacion.image} 
                        alt={activeAproximacion.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 hover:scale-105"
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
                        {activeAproximacion.keyPoints.map((point, idx) => (
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
                    {activeAproximacion.relatedTerms.map(term => (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-primary-800">Aproximación Terapéutica Integral</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El modelo comprensivo multinivel sugiere que las mejores estrategias terapéuticas son aquellas que 
                  abordan múltiples niveles del espectro de intolerancia a la lactosa. La combinación sinérgica de 
                  diferentes aproximaciones, personalizadas según el perfil individual, ofrece los mejores resultados 
                  en términos de eficacia y calidad de vida.
                </p>
                <Link 
                  href="/modelo"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Explorar el modelo completo
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Consideraciones para la Práctica Clínica</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                  La implementación de estas aproximaciones terapéuticas en la práctica clínica requiere consideraciones específicas:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Evaluación Completa</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El diagnóstico debe incorporar pruebas genéticas, evaluación de la microbiota y medición de 
                      biomarcadores inflamatorios para una caracterización completa en el espectro de intolerancia.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Personalización Terapéutica</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Las intervenciones deben adaptarse al perfil individual, considerando factores genéticos, 
                      microbianos, dietéticos y psicológicos para optimizar resultados.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Monitoreo Longitudinal</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      El seguimiento regular permite ajustar estrategias según la evolución, adaptación colónica 
                      y cambios en la microbiota intestinal a lo largo del tiempo.
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
                      La comprensión de la naturaleza espectral de la condición empodera al paciente para 
                      participar activamente en el manejo, mejorando la adherencia y resultados a largo plazo.
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

export default AproximacionesTerapeuticasPage; 