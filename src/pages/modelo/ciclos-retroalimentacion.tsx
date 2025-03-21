import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import FeedbackCycleVisualization, { FeedbackNode, FeedbackLink } from '@/components/visualizations/FeedbackCycleVisualization';
import feedbackCycles from '@/data/feedbackCycles';

const CiclosRetroalimentacionPage = () => {
  const [selectedCycleId, setSelectedCycleId] = useState<string>(feedbackCycles[0].id);

  const selectedCycle = feedbackCycles.find(cycle => cycle.id === selectedCycleId);

  return (
    <Layout 
      title="Ciclos de Retroalimentación | Modelo Intolerancia Lactosa"
      description="Visualización interactiva de los ciclos de retroalimentación identificados en el modelo comprensivo multinivel de la intolerancia a la lactosa."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Ciclos de Retroalimentación en el Modelo Multinivel
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Visualización interactiva de los ciclos de retroalimentación que explican la dinámica compleja 
            de la intolerancia a la lactosa como un espectro, más allá del modelo binario tradicional.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Navegación lateral */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Ciclos</h2>
                <nav>
                  <ul className="space-y-3">
                    {feedbackCycles.map(cycle => (
                      <li key={cycle.id}>
                        <button
                          onClick={() => setSelectedCycleId(cycle.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                            selectedCycleId === cycle.id
                              ? 'bg-primary-100 text-primary-800 font-medium shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-3 inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                          {cycle.name}
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
                        Ver modelo completo
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
              {selectedCycle && (
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-2 h-16 bg-primary-500 rounded-full mr-4"></div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCycle.name}</h2>
                      <p className="text-lg text-gray-600">{selectedCycle.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-8">
                    <h3 className="text-primary-700 text-xl font-semibold mb-2">Instrucciones de Visualización</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Arrastra los nodos para reorganizar la visualización</li>
                      <li>Pasa el cursor sobre los nodos para ver información detallada</li>
                      <li>Los colores representan diferentes categorías de factores</li>
                      <li>Las líneas muestran las relaciones entre componentes</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mb-8 bg-white rounded-lg p-4 shadow-inner">
                    <FeedbackCycleVisualization 
                      cycle={selectedCycle}
                      width={800}
                      height={600}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-primary-500">
                      <h4 className="font-bold text-xl text-primary-700 mb-4">Nodos Principales</h4>
                      <ul className="space-y-3">
                        {selectedCycle.nodes.map((node: FeedbackNode) => (
                          <li key={node.id} className="p-3 bg-gray-50 rounded-lg">
                            <span className="font-bold block text-gray-800">{node.name}</span>
                            <span className="text-gray-600">{node.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-secondary-500">
                      <h4 className="font-bold text-xl text-secondary-700 mb-4">Relaciones Importantes</h4>
                      <ul className="space-y-3">
                        {selectedCycle.links.map((link: FeedbackLink, index: number) => {
                          const sourceNode = selectedCycle.nodes.find((n: FeedbackNode) => n.id === link.source);
                          const targetNode = selectedCycle.nodes.find((n: FeedbackNode) => n.id === link.target);
                          return (
                            <li key={index} className="p-3 bg-gray-50 rounded-lg">
                              <span className="font-bold block text-gray-800">
                                {sourceNode?.name} → {targetNode?.name}
                              </span>
                              <span className="text-gray-600">{link.description}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h2 className="text-2xl font-bold text-primary-800">Implicaciones Clínicas</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      La comprensión de este ciclo de retroalimentación es fundamental para desarrollar 
                      aproximaciones terapéuticas personalizadas. Al identificar los puntos de intervención 
                      específicos dentro del ciclo, podemos diseñar estrategias más efectivas que consideren 
                      la naturaleza dinámica y compleja de la intolerancia a la lactosa.
                    </p>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Consideraciones para la Investigación</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Validación Experimental</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Los ciclos de retroalimentación identificados requieren validación experimental 
                      mediante estudios longitudinales que examinen las interacciones dinámicas entre 
                      los diferentes componentes.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Aplicación Clínica</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      La identificación de puntos de intervención específicos dentro de cada ciclo 
                      puede guiar el desarrollo de nuevas estrategias terapéuticas más efectivas y 
                      personalizadas.
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

export default CiclosRetroalimentacionPage; 