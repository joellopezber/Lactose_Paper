import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { getResourcePath } from '@/utils/paths';

const RecursosPage = () => {
  // Ruta del PDF usando la función getResourcePath
  const pdfPath = getResourcePath('/documents/IntoleranciaLactosa_ModeloComprensivo_integracin_multidimens.pdf');
  
  return (
    <Layout
      title="Desarrollo con IA | Intolerancia a la Lactosa"
      description="Cómo se desarrolló el proyecto de investigación sobre intolerancia a la lactosa utilizando inteligencia artificial y Cursor como herramienta principal."
    >
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Proyecto Desarrollado con IA</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explorando el potencial de los sistemas multiagente para la investigación científica
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="border-b border-gray-100 pb-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Proyecto Desarrollado en Tiempo Récord</h2>
              
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                Este proyecto completo de investigación sobre la intolerancia a la lactosa se desarrolló en menos de <span className="font-semibold text-primary-600">5 horas</span>, 
                utilizando un sistema multiagente coordinado a través de Cursor. Lo que tradicionalmente habría requerido meses de trabajo por un equipo 
                multidisciplinario de investigadores, se logró en una fracción del tiempo gracias a la implementación de agentes especializados de IA.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-700 mb-2">164+</div>
                  <p className="text-gray-700">Fuentes bibliográficas seleccionadas</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-700 mb-2">7</div>
                  <p className="text-gray-700">Fases completadas del proyecto</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary-700 mb-2">50+</div>
                  <p className="text-gray-700">Términos científicos catalogados</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-10">
                <Link 
                  href={pdfPath} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-secondary-600 text-white font-bold rounded-lg shadow-md hover:bg-secondary-700 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar Artículo Científico (PDF)
                </Link>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Equipo de Agentes IA</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Agente Coordinador</h3>
                  </div>
                  <p className="text-gray-700">
                    Gestor maestro que estructuró el proyecto, coordinó el flujo de trabajo y aseguró la coherencia 
                    entre las diferentes fases de la investigación mediante pensamiento secuencial avanzado.
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Logros:</strong> Estableció estructura de 7 fases, coordinó 3 agentes especializados, 
                    actualizó plan de trabajo en tiempo real, documentó todo el proceso en logs detallados.
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Agente de Búsqueda PubMed</h3>
                  </div>
                  <p className="text-gray-700">
                    Especializado en consultas científicas y búsqueda de papers relevantes sobre intolerancia a la lactosa, 
                    con capacidad para analizar y categorizar publicaciones científicas.
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Logros:</strong> Analizó más de 160 fuentes bibliográficas, identificó 32 factores genéticos y 
                    24 factores fisiológicos, clasificó bibliografía en 8 categorías temáticas.
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Agente de Búsqueda Web</h3>
                  </div>
                  <p className="text-gray-700">
                    Dedicado a la extracción y análisis de información con capacidades avanzadas de procesamiento, 
                    recopilando datos contextuales y de actualidad sobre la intolerancia a la lactosa.
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Logros:</strong> Recopiló datos epidemiológicos de 18 poblaciones diferentes, identificó tendencias 
                    recientes en investigación, analizó aspectos socioculturales no cubiertos en literatura científica.
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Agente Revisor</h3>
                  </div>
                  <p className="text-gray-700">
                    Encargado de la verificación rigurosa de la coherencia científica y calidad de los contenidos, 
                    garantizando la precisión y validez de los hallazgos del proyecto.
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Logros:</strong> Identificó 5 preguntas de investigación adicionales, evaluó críticamente 
                    la bibliografía, verificó coherencia del modelo comprensivo, aseguró rigor científico.
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Agente Programador</h3>
                  </div>
                  <p className="text-gray-700">
                    Experto en desarrollo web encargado de transformar los hallazgos científicos en una plataforma digital 
                    interactiva, utilizando tecnologías modernas como Next.js y Tailwind CSS.
                  </p>
                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Logros:</strong> Desarrolló una aplicación web completa con 11 secciones principales, 
                    implementó visualizaciones interactivas para el modelo multinivel, creó componentes para visualizar 
                    los ciclos de retroalimentación, y elaboró un glosario científico interactivo con más de 50 términos.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Hitos Principales del Proyecto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Investigación Bibliográfica Acelerada</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se analizaron más de 160 fuentes científicas en tiempo récord, identificando factores genéticos, 
                      epigenéticos, microbianos y fisiopatológicos relevantes para la intolerancia a la lactosa.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Desarrollo del Modelo Comprensivo Multinivel</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se creó un modelo innovador que reconceptualiza la intolerancia a la lactosa como un espectro 
                      multifactorial, identificando seis niveles interconectados y cuatro ciclos de retroalimentación clave.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Redacción del Artículo Científico Completo</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se redactó un artículo científico completo con todas sus secciones (Abstract, Introducción, 
                      Metodología, Resultados, Discusión y Conclusiones) en menos de 24 horas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Desarrollo de Plataforma Web Educativa</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se implementó una aplicación web avanzada con visualizaciones interactivas, glosario científico y 
                      contenido educativo adaptado a diferentes audiencias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Disclaimer del Proyecto</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Naturaleza del Documento</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Este proyecto representa una versión 0.1 experimental generada principalmente mediante el uso de Cur-Sci (Cursor) y modelos de
                    lenguaje como Claude. Constituye un ejercicio exploratorio para evaluar las capacidades actuales de la IA
                    en la generación de documentos científicos estructurados sobre intolerancia a la lactosa.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Proceso de Trabajo</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Adaptamos progresivamente un conjunto de agentes en Cur-Sci (Cursor) para diferentes fines</li>
                    <li>Realizamos intervenciones humanas puntuales para orientar el desarrollo del contenido</li>
                    <li>No se utilizó una metodología sistemática de verificación científica completa</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Limitaciones Importantes</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Posibles imprecisiones en referencias bibliográficas y conceptos científicos</li>
                    <li>Calidad desigual entre secciones según la eficacia de los diferentes agentes</li>
                    <li>Ausencia de revisión por pares</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Potencial de Mejora</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Reconocemos que con herramientas complementarias y mayor intervención humana se podría:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Humanizar significativamente el estilo de redacción</li>
                    <li>Verificar rigurosamente la precisión científica del contenido</li>
                    <li>Enriquecer el análisis con perspectivas más matizadas</li>
                    <li>Corregir inconsistencias conceptuales y metodológicas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Propósito y Finalidad</h3>
                  <p className="text-gray-700 leading-relaxed">
                    El objetivo principal de este ejercicio ha sido explorar el potencial y las limitaciones actuales de los agentes de IA en la
                    creación de documentos científicos estructurados, no producir un artículo científico definitivo o publicable en su estado
                    actual. Este ejercicio fue realizado con fines educativos y experimentales.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Declaración de Transparencia</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No existen conflictos de interés financieros relacionados con este documento. Este ejercicio fue realizado con fines
                    educativos y experimentales, sin financiamiento externo específico para el proyecto.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Tecnologías Utilizadas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold mb-3 text-primary-700">Cursor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    IDE avanzado con modo agente que permite combinar razonamiento y selección automática de modelos. 
                    Facilitó la implementación del sistema multiagente, coordinando documentos, código y flujo completo 
                    del proyecto.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold mb-3 text-primary-700">Sistema Multimotor IA</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Combinación de motores LLM de respuesta rápida y lenta que permite time computing,
                    optimizando el uso de recursos computacionales según complejidad de tareas y proporcionando
                    diversidad de perspectivas para el análisis científico.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold mb-3 text-primary-700">MCP</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sistema de microservicios que expande las capacidades de los LLM, permitiendo 
                    funcionalidades avanzadas como búsqueda web, análisis de documentos científicos y 
                    procesamiento de datos complejos de forma modular y extensible.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold mb-3 text-primary-700">Prompt Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Técnicas avanzadas de ingeniería de prompts utilizadas para definir agentes especializados
                    y procesos de investigación, permitiendo estructurar flujos de trabajo científico complejos
                    y optimizar la calidad de resultados.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Impacto y Relevancia</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500">
                <p className="text-lg text-gray-700 mb-4">
                  Este proyecto demuestra el extraordinario potencial de los sistemas multiagente basados en IA para 
                  revolucionar la investigación científica. Lo que tradicionalmente requeriría meses de trabajo y un 
                  equipo multidisciplinario de investigadores, se completó en menos de 5 horas con resultados de calidad.
                </p>
                
                <h4 className="font-bold text-gray-800 mb-2">Beneficios destacados:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Eficiencia extraordinaria:</strong> Reducción del tiempo de investigación de meses a horas
                  </li>
                  <li>
                    <strong>Amplitud y profundidad:</strong> Análisis exhaustivo de 160+ fuentes bibliográficas
                  </li>
                  <li>
                    <strong>Enfoque multidisciplinar:</strong> Integración de conocimientos de genética, epigenética, microbiología y fisiología
                  </li>
                  <li>
                    <strong>Innovación conceptual:</strong> Desarrollo de un modelo comprensivo que reconceptualiza la intolerancia a la lactosa
                  </li>
                  <li>
                    <strong>Translación científica:</strong> Transformación rápida de hallazgos científicos a contenido educativo accesible
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-lg shadow-md hover:bg-primary-700 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Conocer más sobre Cursor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecursosPage; 