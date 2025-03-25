import React, { useState } from 'react';

export interface BibReference {
  id?: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  pmid?: string;
  pubmedId?: string;
  abstract?: string;
  tags?: string[];
  type?: string;
  population?: string;
  keyPoints?: string[];
}

interface ReferenciasProps {
  references: BibReference[];
  showFilter?: boolean;
  initialTag?: string;
}

const Referencias: React.FC<ReferenciasProps> = ({ 
  references, 
  showFilter = true,
  initialTag = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [expandedRef, setExpandedRef] = useState<string | null>(null);
  
  // Extraer todas las etiquetas únicas de las referencias
  const allTags = Array.from(
    new Set(
      references
        .flatMap(ref => ref.tags || [])
        .filter(tag => tag)
    )
  ).sort();
  
  // Filtrar referencias según búsqueda y etiqueta seleccionada
  const filteredRefs = references.filter(ref => {
    const matchesSearch = searchTerm === '' || 
      ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.journal.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || 
      (ref.tags && ref.tags.includes(selectedTag));
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="referencias-component">
      {showFilter && (
        <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Buscar referencias..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {allTags.length > 0 && (
              <div className="sm:w-1/3">
                <select
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">Todas las etiquetas</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {selectedTag && (
            <div className="mt-2 flex">
              <span className="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded flex items-center">
                {selectedTag}
                <button 
                  className="ml-1 text-primary-600 hover:text-primary-900"
                  onClick={() => setSelectedTag('')}
                >
                  &times;
                </button>
              </span>
            </div>
          )}
        </div>
      )}
      
      {filteredRefs.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No se encontraron referencias que coincidan con tu búsqueda.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRefs.map(ref => (
            <div 
              key={ref.id} 
              className={`bg-white rounded-lg shadow-sm p-4 transition ${
                expandedRef === ref.id ? 'ring-2 ring-primary-500' : 'hover:shadow-md'
              }`}
            >
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{ref.title}</h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setExpandedRef(expandedRef === ref.id ? null : ref.id || null)}
                >
                  {expandedRef === ref.id ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
              
              <p className="text-gray-600 mt-1">
                {ref.authors} ({ref.year}).{' '}
                <span className="italic">{ref.journal}</span>
                {ref.volume && `, ${ref.volume}`}
                {ref.issue && `, ${ref.issue}`}
                {ref.pages && `: ${ref.pages}`}.
                {ref.type && <span className="ml-2 text-primary-600">• {ref.type}</span>}
                {ref.population && <span className="ml-2 text-primary-600">• {ref.population}</span>}
              </p>
              
              {expandedRef === ref.id && (
                <div className="mt-4 space-y-3">
                  {ref.abstract && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Resumen</h4>
                      <p className="text-gray-600 text-sm">{ref.abstract}</p>
                    </div>
                  )}
                  
                  {ref.keyPoints && ref.keyPoints.length > 0 && (
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-700 mb-2">Puntos Clave</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {ref.keyPoints.map((point, index) => (
                          <li key={index} className="text-gray-600 text-sm">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-3 border-t border-gray-100">
                    {ref.doi && (
                      <a 
                        href={`https://doi.org/${ref.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 text-sm inline-flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver artículo (DOI)
                      </a>
                    )}
                    
                    {(ref.pmid || ref.pubmedId) && (
                      <a 
                        href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid || ref.pubmedId}/`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 text-sm inline-flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Ver en PubMed
                      </a>
                    )}
                    
                    {ref.tags && ref.tags.length > 0 && (
                      <div className="sm:ml-auto mt-2 sm:mt-0 flex flex-wrap gap-1">
                        {ref.tags.map(tag => (
                          <button
                            key={tag}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded hover:bg-gray-200"
                            onClick={() => setSelectedTag(tag)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="text-sm text-gray-500 mt-4">
        Mostrando {filteredRefs.length} de {references.length} referencias
      </div>
    </div>
  );
};

export default Referencias; 