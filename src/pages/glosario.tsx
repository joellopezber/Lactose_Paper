import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import glossaryTerms, { GlossaryTerm } from '@/data/glossaryTerms';
import { useRouter } from 'next/router';

const GlosarioPage = () => {
  const router = useRouter();
  const { term: termQuery } = router.query;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  
  // Array con las categorías disponibles
  const categories = [
    { id: 'genética', name: 'Genética', color: 'bg-blue-100 text-blue-800' },
    { id: 'epigenética', name: 'Epigenética', color: 'bg-purple-100 text-purple-800' },
    { id: 'microbioma', name: 'Microbioma', color: 'bg-green-100 text-green-800' },
    { id: 'fisiología', name: 'Fisiología', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'clínica', name: 'Clínica', color: 'bg-red-100 text-red-800' },
    { id: 'general', name: 'General', color: 'bg-gray-100 text-gray-800' }
  ];
  
  // Filtrar términos cuando cambie la búsqueda o categoría
  useEffect(() => {
    let results = glossaryTerms;
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(term => 
        term.term.toLowerCase().includes(searchLower) || 
        term.definition.toLowerCase().includes(searchLower)
      );
    }
    
    // Filtrar por categoría
    if (selectedCategory) {
      results = results.filter(term => term.category === selectedCategory);
    }
    
    setFilteredTerms(results);
  }, [searchTerm, selectedCategory]);
  
  // Efecto para seleccionar el término de la URL
  useEffect(() => {
    if (termQuery && typeof termQuery === 'string') {
      const term = glossaryTerms.find(t => t.id === termQuery);
      if (term) {
        setSelectedTerm(term);
      }
    }
  }, [termQuery]);
  
  // Obtener el color de la categoría
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-gray-100 text-gray-800';
  };
  
  // Buscar un término por su ID
  const findTermById = (id: string) => {
    return glossaryTerms.find(term => term.id === id);
  };

  // Manejar la selección de un término
  const handleTermClick = (term: GlossaryTerm) => {
    setSelectedTerm(term);
    // Actualizar la URL sin recargar la página
    router.push(`/glosario?term=${term.id}`, undefined, { shallow: true });
  };

  return (
    <Layout 
      title="Glosario | Intolerancia a la Lactosa"
      description="Glosario de términos científicos relacionados con la intolerancia a la lactosa, incluyendo conceptos genéticos, epigenéticos, microbianos y fisiopatológicos."
    >
      <div className="container-custom py-12">
        <h1 className="mb-8">Glosario de Términos Científicos</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          {/* Buscador y filtros */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Buscar términos..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-shrink-0">
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Filtros de categoría */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  !selectedCategory ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-800'
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category.id ? category.color : 'bg-gray-100 text-gray-800'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Resultados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.length > 0 ? (
              filteredTerms.map(term => (
                <button
                  key={term.id}
                  className={`text-left p-4 border rounded-lg hover:shadow-md transition-shadow ${
                    selectedTerm?.id === term.id ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-200'
                  }`}
                  onClick={() => handleTermClick(term)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(term.category)}`}>
                      {term.category}
                    </span>
                    <h3 className="font-bold">{term.term}</h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{term.definition}</p>
                </button>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-500">
                No se encontraron términos que coincidan con tu búsqueda.
              </div>
            )}
          </div>
        </div>
        
        {/* Detalle del término seleccionado */}
        {selectedTerm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedTerm.term}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedTerm.category)}`}>
                {selectedTerm.category}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">{selectedTerm.definition}</p>
            
            {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-2">Términos relacionados</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTerm.relatedTerms.map(relatedTermId => {
                    const relatedTerm = findTermById(relatedTermId);
                    return relatedTerm ? (
                      <button
                        key={relatedTermId}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(relatedTerm.category)}`}
                        onClick={() => handleTermClick(relatedTerm)}
                      >
                        {relatedTerm.term}
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Información adicional */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Acerca de este glosario</h2>
          <p className="text-gray-700 mb-4">
            Este glosario proporciona definiciones precisas y accesibles de términos científicos relacionados con la intolerancia a la lactosa, 
            abarcando aspectos genéticos, epigenéticos, microbianos, fisiológicos y clínicos. Ha sido desarrollado como parte del proyecto de 
            investigación sobre el modelo comprensivo multinivel de la intolerancia a la lactosa.
          </p>
          <p className="text-gray-700">
            Los términos están categorizados por área temática y conectados entre sí mediante términos relacionados, permitiendo explorar las 
            interconexiones entre diferentes conceptos y facilitando una comprensión integral del fenómeno de la intolerancia a la lactosa.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GlosarioPage; 