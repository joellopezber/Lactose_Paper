import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import MultilevelModelVisualization from '@/components/visualizations/MultilevelModelVisualization';
import { multilevelModelData } from '@/data/multilevelModel';
import Link from 'next/link';

const ModeloPage = () => {
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(900);
  
  useEffect(() => {
    // Función para actualizar el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Establecer ancho inicial
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
    
    // Añadir event listener
    window.addEventListener('resize', handleResize);
    
    // Limpiar al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calcular el ancho adecuado para la visualización basado en el ancho de la ventana
  const getVisualizationWidth = () => {
    if (windowWidth > 1200) return 900;
    if (windowWidth > 768) return 600;
    return 400;
  };
  
  const selectedLevel = selectedLevelId 
    ? multilevelModelData.find(level => level.id === selectedLevelId) 
    : null;

  return (
    <Layout 
      title="Modelo Multinivel | Intolerancia a la Lactosa"
      description="Visualización interactiva del modelo comprensivo multinivel de la intolerancia a la lactosa que reconceptualiza esta condición como un espectro multifactorial."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="w-full">
              <h1 className="text-4xl font-bold mb-6">Modelo Multinivel de la Intolerancia a la Lactosa</h1>
              <p className="text-lg text-gray-700">
                Este modelo reconceptualiza la intolerancia a la lactosa como un <span className="text-primary-600 font-semibold">espectro multifactorial</span> determinado 
                por interacciones complejas entre factores genéticos, epigenéticos, microbianos y fisiopatológicos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <h2 className="text-2xl font-bold mb-4 text-primary-700">Instrucciones</h2>
                <div className="prose prose-primary">
                  <p className="mb-4">
                    Explora el primer modelo multinivel completo de la intolerancia a la lactosa, compuesto por seis niveles interconectados que representan diferentes dominios de factores.
                  </p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Visualiza el modelo multinivel completo
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Haz clic en un nivel para ver sus detalles
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Pasa el cursor sobre los niveles para obtener descripciones
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Características del Modelo</h3>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Enfoque Integrador</p>
                      <p className="text-sm text-gray-600">Integra múltiples niveles de análisis</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Ciclos de Retroalimentación</p>
                      <p className="text-sm text-gray-600">Identifica cuatro ciclos clave</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Base de Evidencia</p>
                      <p className="text-sm text-gray-600">Sustentado en investigación reciente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                  Visualización del Modelo Multinivel
                </h2>
                <div className="w-full">
                  <MultilevelModelVisualization 
                    levels={multilevelModelData}
                    width={getVisualizationWidth()}
                    onLevelSelect={(levelId) => setSelectedLevelId(levelId)}
                    selectedLevelId={selectedLevelId || undefined}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {selectedLevel && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transition-all duration-300 animate-fadeIn">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white text-xl font-bold"
                      style={{ backgroundColor: selectedLevel.color }}
                    >
                      {multilevelModelData.findIndex(level => level.id === selectedLevel.id) + 1}
                    </div>
                    <h2 className="text-3xl font-bold">{selectedLevel.name}</h2>
                  </div>
                  <button 
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setSelectedLevelId(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8" style={{ borderLeft: `6px solid ${selectedLevel.color}` }}>
                  <p className="text-lg text-gray-700">{selectedLevel.description}</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Factores Principales</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedLevel.factors.map(factor => (
                  <div 
                    key={factor.id} 
                    className="bg-white border rounded-xl p-5 hover:shadow-lg transition-shadow"
                    style={{ borderTop: `4px solid ${selectedLevel.color}` }}
                  >
                    <h4 className="font-bold text-lg mb-3">{factor.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{factor.description}</p>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Impacto:</span>
                        <span className={`px-2 py-0.5 rounded-full text-white font-medium text-xs
                          ${factor.impactLevel === 'high' ? 'bg-red-500' : 
                            factor.impactLevel === 'medium' ? 'bg-orange-500' : 'bg-yellow-500'}
                        `}>
                          {factor.impactLevel === 'high' ? 'Alto' : 
                            factor.impactLevel === 'medium' ? 'Medio' : 'Bajo'}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-2">Evidencia:</span>
                        <span className={`px-2 py-0.5 rounded-full text-white font-medium text-xs
                          ${factor.evidenceLevel === 'strong' ? 'bg-green-500' : 
                            factor.evidenceLevel === 'moderate' ? 'bg-blue-500' : 'bg-gray-500'}
                        `}>
                          {factor.evidenceLevel === 'strong' ? 'Fuerte' : 
                            factor.evidenceLevel === 'moderate' ? 'Moderada' : 'Débil'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800">Relevancia Clínica</h3>
                </div>
                <p className="text-gray-700">
                  Comprender los factores en este nivel del modelo permite un abordaje más preciso y personalizado 
                  de la intolerancia a la lactosa, reconociendo la complejidad de sus determinantes y las interacciones 
                  entre diferentes sistemas biológicos.
                </p>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Visión Integral del Modelo</h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Este modelo proporciona una comprensión más completa y matizada de la intolerancia a la lactosa 
              como una condición espectral, superando la visión binaria tradicional.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md" style={{ borderLeft: '4px solid #4299E1' }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <h3 className="font-bold text-xl">Ciclos de Retroalimentación</h3>
                </div>
                <p className="text-gray-600 mb-5">
                  El modelo identifica cuatro ciclos de retroalimentación clave que explican las dinámicas 
                  adaptativas y la variabilidad temporal en la expresión de la intolerancia.
                </p>
                <Link 
                  href="/modelo/ciclos-retroalimentacion" 
                  className="flex items-center text-primary-600 hover:text-primary-800 transition-colors font-medium"
                >
                  Ver ciclos de retroalimentación
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md" style={{ borderLeft: '4px solid #ED64A6' }}>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <h3 className="font-bold text-xl">Aplicaciones Clínicas</h3>
                </div>
                <p className="text-gray-600 mb-5">
                  Este modelo orienta hacia estrategias diagnósticas más precisas y aproximaciones 
                  terapéuticas personalizadas para el manejo de la intolerancia a la lactosa.
                </p>
                <Link 
                  href="/aproximaciones-terapeuticas" 
                  className="flex items-center text-secondary-600 hover:text-secondary-800 transition-colors font-medium"
                >
                  Explorar aproximaciones terapéuticas
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ModeloPage; 