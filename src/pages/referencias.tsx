import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Referencias from '@/components/Referencias';
import references from '@/data/references';
import { BibReference } from '@/components/Referencias';

// Definir tipo para el objeto de grupos de referencias
type ReferenceGroups = {
  [key: string]: BibReference[];
};

// Función para agrupar las referencias por categorías basadas en etiquetas
const groupReferencesByTags = (refs: BibReference[]): ReferenceGroups => {
  const groups: ReferenceGroups = {
    'Genética y Epigenética': refs.filter(ref => 
      ref.tags && ref.tags.some(tag => ['genética', 'epigenética', 'evolución'].includes(tag))
    ),
    'Microbioma y Fermentación': refs.filter(ref => 
      ref.tags && ref.tags.some(tag => ['microbioma', 'fermentación bacteriana'].includes(tag))
    ),
    'Fisiopatología': refs.filter(ref => 
      ref.tags && ref.tags.includes('fisiopatología')
    ),
    'Diagnóstico': refs.filter(ref => 
      ref.tags && ref.tags.includes('diagnóstico')
    ),
    'Tratamiento y Manejo': refs.filter(ref => 
      ref.tags && ref.tags.some(tag => ['tratamiento', 'manejo', 'probióticos'].includes(tag))
    ),
    'Epidemiología': refs.filter(ref => 
      ref.tags && ref.tags.includes('epidemiología')
    ),
    'Revisiones Sistemáticas y Meta-análisis': refs.filter(ref => 
      ref.tags && ref.tags.some(tag => ['revisión sistemática', 'meta-análisis'].includes(tag))
    )
  };
  
  return groups;
};

const ReferenciasPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [tagFilter, setTagFilter] = useState('');
  const [refGroups, setRefGroups] = useState<ReferenceGroups>({});
  
  // Todas las etiquetas únicas disponibles en las referencias
  const allTags = Array.from(
    new Set(
      references.flatMap(ref => ref.tags || [])
    )
  ).sort();
  
  useEffect(() => {
    setRefGroups(groupReferencesByTags(references));
  }, []);

  return (
    <Layout
      title="Referencias Bibliográficas | Intolerancia a la Lactosa"
      description="Biblioteca de referencias científicas sobre intolerancia a la lactosa, incluyendo artículos sobre genética, microbioma, fisiopatología, diagnóstico y tratamiento."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Referencias Bibliográficas
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Biblioteca completa de referencias científicas utilizadas en el desarrollo del metaanálisis 
            multinivel de intolerancia a la lactosa. Incluye artículos sobre genética, epigenética, microbioma, 
            fisiopatología, diagnóstico y abordajes terapéuticos.
          </p>
          
          {/* Navegación por pestañas */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <nav className="flex flex-wrap gap-2 -mb-px border-b border-gray-200 pb-2">
              <button
                className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-primary-100 text-primary-800 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('all')}
              >
                Todas ({references.length})
              </button>
              
              {Object.keys(refGroups).map(group => (
                <button
                  key={group}
                  className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg transition-all ${
                    activeTab === group
                      ? 'bg-primary-100 text-primary-800 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(group)}
                >
                  {group} ({refGroups[group]?.length || 0})
                </button>
              ))}
              
              <button
                className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg transition-all ${
                  activeTab === 'tags'
                    ? 'bg-primary-100 text-primary-800 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('tags')}
              >
                Explorar por Etiquetas
              </button>
            </nav>
          
          
            {/* Etiquetas disponibles (solo visible cuando se selecciona la pestaña de etiquetas) */}
            {activeTab === 'tags' && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4 text-primary-700 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Etiquetas Disponibles
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                        tagFilter === tag
                          ? 'bg-primary-100 text-primary-800 shadow-sm'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => {
                        setTagFilter(tagFilter === tag ? '' : tag);
                        if (tagFilter !== tag) {
                          setActiveTab('all'); // Cambiar a "Todas" para mostrar los resultados filtrados
                        }
                      }}
                    >
                      {tag} ({references.filter(ref => ref.tags && ref.tags.includes(tag)).length})
                    </button>
                  ))}
                </div>
                
                {tagFilter && (
                  <div className="p-4 bg-blue-50 rounded-lg mb-6">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Filtro activo:</span>
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {tagFilter}
                      </span>
                      <button 
                        className="ml-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setTagFilter('')}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Contenido principal */}
            <div className="mt-6">
              {activeTab === 'all' ? (
                <Referencias 
                  references={tagFilter ? references.filter(ref => ref.tags && ref.tags.includes(tagFilter)) : references} 
                  initialTag={tagFilter}
                />
              ) : activeTab === 'tags' ? (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-gray-100">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <p className="text-lg font-medium">Selecciona una etiqueta para ver las referencias relacionadas.</p>
                </div>
              ) : (
                <Referencias 
                  references={refGroups[activeTab] || []} 
                  showFilter={refGroups[activeTab]?.length > 5}
                />
              )}
            </div>
          </div>
        
          <div className="bg-primary-50 rounded-xl shadow-lg p-8 border border-primary-100 mb-12">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h2 className="text-2xl font-bold text-primary-800">Recursos Adicionales</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Para profundizar en el modelo comprensivo multinivel de la intolerancia a la lactosa, 
              recomendamos explorar estos recursos complementarios:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="/modelo"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Modelo Completo</h3>
                  <p className="text-sm text-gray-600">Explora el modelo multinivel en detalle</p>
                </div>
              </a>
              <a 
                href="/glosario"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mr-4 bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Glosario de Términos</h3>
                  <p className="text-sm text-gray-600">Consulta los términos científicos clave</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReferenciasPage; 