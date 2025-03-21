import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const DescargasPage = () => {
  return (
    <Layout
      title="Descargas | Intolerancia a la Lactosa"
      description="Recursos descargables del proyecto de investigación sobre el modelo comprensivo multinivel de la intolerancia a la lactosa."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Recursos Descargables
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Accede al artículo científico completo sobre el modelo comprensivo multinivel 
            de la intolerancia a la lactosa, con la metodología y resultados detallados.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-16 bg-primary-500 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">Artículo Científico</h2>
                    <p className="text-lg text-gray-600">Documento de investigación completo</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Este artículo presenta el modelo comprensivo multinivel de la intolerancia a la lactosa, 
                  incluyendo su justificación metodológica, análisis de los diferentes niveles de interacción 
                  (genético, epigenético, microbiano, fisiológico, clínico y psicosocial) y las implicaciones 
                  para el diagnóstico y tratamiento personalizado.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Formato</h3>
                    <p className="text-gray-600">PDF (accesible)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Actualizado</h3>
                    <p className="text-gray-600">Marzo 2025</p>
                  </div>
                </div>
                
                <a 
                  href="/documents/modelo_comprensivo_lactosa.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar Artículo Completo
                </a>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-xl shadow-lg p-6 border border-primary-100">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h2 className="text-xl font-bold text-primary-800 mb-2">Información de Uso</h2>
                  <p className="text-gray-700">
                    Este recurso está protegido por derechos de autor. Se permite su uso para fines educativos 
                    y de investigación, siempre que se cite adecuadamente la fuente.
                  </p>
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    <strong>Cita sugerida:</strong> "Modelo Comprensivo Multinivel de la Intolerancia a la Lactosa. (2025). Proyecto de Investigación."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">¿Buscas más recursos? Explora nuestras secciones de:</p>
            <div className="flex justify-center gap-4 mt-3">
              <Link 
                href="/modelo" 
                className="text-primary-600 hover:text-primary-800 transition font-medium"
              >
                Modelo Completo
              </Link>
              <Link 
                href="/aproximaciones-terapeuticas" 
                className="text-primary-600 hover:text-primary-800 transition font-medium"
              >
                Aproximaciones Terapéuticas
              </Link>
              <Link 
                href="/referencias" 
                className="text-primary-600 hover:text-primary-800 transition font-medium"
              >
                Referencias Bibliográficas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DescargasPage; 