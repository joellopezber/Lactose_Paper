import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const InvestigacionPage = () => {
  return (
    <Layout
      title="Investigación | Intolerancia a la Lactosa"
      description="Información sobre el proyecto de investigación 'Un Modelo Comprensivo Multinivel de la Intolerancia a la Lactosa' y sus resultados científicos."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">El Proyecto de Investigación</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Desarrollando un nuevo paradigma para comprender la intolerancia a la lactosa como un espectro multifactorial
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="border-b border-gray-100 pb-6 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Un Modelo Comprensivo Multinivel de la Intolerancia a la Lactosa</h2>
              
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                Este proyecto de investigación surgió de la necesidad de superar el paradigma binario tradicional de la intolerancia 
                a la lactosa, proponiendo en su lugar un modelo comprensivo que reconceptualiza esta condición como un <span className="font-semibold text-primary-600">espectro 
                multifactorial</span> determinado por interacciones complejas entre factores genéticos, epigenéticos, microbianos y fisiopatológicos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-primary-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary-800 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Objetivos
                </h3>
                <ul className="space-y-3 pl-8 list-disc marker:text-primary-600">
                  <li className="text-gray-700">Desarrollar un modelo comprensivo multinivel que explique la naturaleza espectral de la intolerancia a la lactosa</li>
                  <li className="text-gray-700">Identificar los mecanismos subyacentes que explican la variabilidad en la expresión clínica</li>
                  <li className="text-gray-700">Caracterizar los factores moduladores y sus interacciones</li>
                  <li className="text-gray-700">Proponer aproximaciones terapéuticas basadas en el modelo</li>
                  <li className="text-gray-700">Difundir el conocimiento científico de manera accesible</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-primary-800 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Metodología
                </h3>
                <ul className="space-y-3 pl-8 list-disc marker:text-primary-600">
                  <li className="text-gray-700">Revisión sistemática de literatura científica</li>
                  <li className="text-gray-700">Análisis crítico e integrador de evidencia</li>
                  <li className="text-gray-700">Desarrollo de modelos conceptuales</li>
                  <li className="text-gray-700">Validación por revisión de expertos</li>
                  <li className="text-gray-700">Traducción del conocimiento científico a formatos accesibles</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Resultados Principales</h3>
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary-500 shadow-sm">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-700 mb-1">Reconceptualización como espectro</h4>
                      <p className="text-gray-700 leading-relaxed">Evidencia que respalda la comprensión de la intolerancia a la lactosa como una condición espectral, no binaria, con diversos grados de expresión clínica y fisiopatológica.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-700 mb-1">Modelo multinivel</h4>
                      <p className="text-gray-700 leading-relaxed">Desarrollo de un modelo de seis niveles interconectados que explican la fisiopatología y manifestación clínica de la condición desde lo molecular hasta lo sistémico.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-700 mb-1">Ciclos de retroalimentación</h4>
                      <p className="text-gray-700 leading-relaxed">Identificación de cuatro ciclos que modulan la expresión clínica y explican fenómenos como la adaptación y variabilidad individual en la presentación sintomática.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <span className="text-primary-700 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary-700 mb-1">Aproximaciones terapéuticas</h4>
                      <p className="text-gray-700 leading-relaxed">Propuestas basadas en el modelo comprensivo que abordan múltiples niveles fisiopatológicos para un manejo personalizado y efectivo.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link href="/modelo" className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                Explorar el Modelo
              </Link>
              <Link href="/aproximaciones-terapeuticas" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Ver Aproximaciones Terapéuticas
              </Link>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Artículo Científico</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 font-serif">Un Modelo Comprensivo Multinivel de la Intolerancia a la Lactosa</h3>
              
              <div className="mb-8 text-center text-gray-600 italic">
                <p>Autor(es), Afiliación(es)</p>
                <p>Publicación: <span className="font-semibold">Revista de Gastroenterología y Nutrición</span></p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-8 mb-8 bg-gray-50 shadow-sm">
                <h4 className="text-xl font-bold mb-4 text-primary-700 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Resumen
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La intolerancia a la lactosa ha sido tradicionalmente conceptualizada como una condición binaria determinada principalmente por la deficiencia de lactasa. Sin embargo, evidencia acumulada sugiere que representa un espectro complejo influido por múltiples factores. Este artículo propone un modelo comprensivo multinivel que integra factores genéticos, epigenéticos, microbianos, inmunológicos, neurológicos y psicológicos que interactúan para determinar la expresión clínica individual de la intolerancia a la lactosa. El modelo identifica cuatro ciclos de retroalimentación clave que modulan la manifestación de síntomas y explican fenómenos como la adaptación colónica y la variabilidad en la respuesta sintomática. Esta reconceptualización tiene importantes implicaciones para el diagnóstico, tratamiento y manejo de la condición, sugiriendo aproximaciones personalizadas basadas en el perfil individual dentro del espectro. El modelo ofrece un nuevo paradigma para comprender la intolerancia a la lactosa y potencialmente otros trastornos gastrointestinales funcionales.
                </p>
              </div>
              
              <div className="mb-12">
                <h4 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">Secciones del Artículo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Introducción
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Contextualización de la intolerancia a la lactosa, limitaciones de paradigmas previos y justificación del nuevo modelo.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Metodología
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Proceso de revisión sistemática, análisis y síntesis de evidencia para el desarrollo del modelo multinivel.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Resultados
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Presentación del modelo multinivel, caracterización de los seis niveles interconectados y ciclos de retroalimentación.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Discusión
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Implicaciones clínicas, para investigación y socioeconómicas del nuevo modelo comprensivo.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      Conclusiones
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Síntesis de los hallazgos e implicaciones para la reconceptualización de la intolerancia a la lactosa.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <h5 className="font-bold mb-3 text-primary-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Referencias
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Literatura científica citada como base para el desarrollo del modelo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="/documents/modelo_comprensivo_lactosa.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-secondary-600 text-white font-semibold rounded-lg shadow-md hover:bg-secondary-700 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar Artículo Completo (PDF)
                </a>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contribuciones a la Ciencia</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-primary-700">Paradigma Innovador</h3>
                <p className="text-center text-gray-700 leading-relaxed">
                  Superación del modelo binario tradicional con una comprensión espectral que mejor refleja la realidad clínica de la intolerancia a la lactosa.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-primary-700">Medicina Personalizada</h3>
                <p className="text-center text-gray-700 leading-relaxed">
                  Base científica para aproximaciones terapéuticas personalizadas según el perfil individual en el espectro de la intolerancia a la lactosa.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm transform transition-transform hover:scale-105">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-primary-700">Modelo Traslacional</h3>
                <p className="text-center text-gray-700 leading-relaxed">
                  Potencial aplicación a otros trastornos gastrointestinales con fisiopatología compleja y multifactorial similar a la intolerancia a la lactosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestigacionPage; 