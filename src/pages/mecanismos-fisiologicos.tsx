import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Estructura de los datos de los mecanismos fisiológicos
interface FisioMechanism {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  clinicalImplications: string[];
  relatedGlossaryTerms: string[];
}

const mechanisms: FisioMechanism[] = [
  {
    id: 'digestion-lactosa',
    title: 'Digestión de la Lactosa',
    description: 'Proceso normal de hidrólisis de la lactosa por la enzima lactasa en el intestino delgado.',
    image: process.env.NODE_ENV === 'production' ? '/lactose/images/mecanismos-fisiologicos/digestion_lactosa.webp' : '/images/mecanismos-fisiologicos/digestion_lactosa.webp',
    content: `
      <p>La lactosa, el principal carbohidrato presente en la leche de mamíferos, es un disacárido compuesto por una molécula de glucosa y una de galactosa. En condiciones normales, la enzima lactasa-florizina hidrolasa (LPH), conocida comúnmente como lactasa, hidroliza la lactosa en estos dos monosacáridos en el borde en cepillo de los enterocitos del intestino delgado.</p>
      
      <p>La expresión de lactasa está regulada por el gen LCT, localizado en el cromosoma 2. La actividad de esta enzima es alta durante la infancia, permitiendo la digestión eficiente de la lactosa presente en la leche materna. En la mayoría de los mamíferos, incluidos aproximadamente el 70% de los humanos adultos a nivel mundial, la actividad de la lactasa disminuye naturalmente después del destete, un fenómeno conocido como no persistencia de lactasa.</p>
      
      <p>Sin embargo, en poblaciones con tradición ancestral de consumo de lácteos, principalmente europeas y algunas africanas, se desarrolló una adaptación genética que permite mantener niveles altos de actividad de lactasa durante toda la vida, conocida como persistencia de lactasa.</p>
    `,
    clinicalImplications: [
      'La evaluación de la capacidad de digestión de lactosa es fundamental para el diagnóstico de intolerancia',
      'Existen variaciones significativas en la actividad enzimática entre individuos',
      'La digestión parcial puede permitir el consumo de pequeñas cantidades de lactosa sin síntomas'
    ],
    relatedGlossaryTerms: ['lactosa', 'lactasa', 'hidrolisis-lactosa', 'enterocitos', 'persistencia-lactasa']
  },
  {
    id: 'malabsorcion-fermentacion',
    title: 'Malabsorción y Fermentación Bacteriana',
    description: 'Procesos que ocurren cuando la lactosa no digerida llega al colon y es fermentada por bacterias intestinales.',
    image: process.env.NODE_ENV === 'production' ? '/lactose/images/mecanismos-fisiologicos/malabsorcion_fermentacion.webp' : '/images/mecanismos-fisiologicos/malabsorcion_fermentacion.webp',
    content: `
      <p>Cuando la actividad de lactasa es insuficiente para hidrolizar toda la lactosa ingerida, este disacárido no digerido pasa al colon. En el ambiente anaeróbico del colon, la microbiota intestinal fermenta la lactosa, produciendo ácidos grasos de cadena corta (AGCC), principalmente acetato, propionato y butirato, así como gases como hidrógeno, metano y dióxido de carbono.</p>
      
      <p>La fermentación bacteriana tiene efectos osmóticos y metabólicos que pueden desencadenar síntomas. Los productos de la fermentación acidifican el contenido intestinal, aumentan la osmolaridad intraluminal, y pueden alterar la motilidad intestinal. Los gases producidos contribuyen a la distensión abdominal y flatulencia.</p>
      
      <p>La composición y diversidad de la microbiota intestinal juega un papel crucial en la capacidad de adaptación al consumo regular de lactosa. Algunas bacterias tienen mayor capacidad lactolítica que otras, y el consumo regular puede seleccionar poblaciones bacterianas mejor adaptadas a metabolizar la lactosa, lo que explica parcialmente el fenómeno de adaptación colónica.</p>
    `,
    clinicalImplications: [
      'La producción de hidrógeno es la base del test de hidrógeno espirado para diagnóstico',
      'La adaptación de la microbiota puede mejorar la tolerancia con el consumo regular',
      'Los AGCC producidos pueden tener efectos beneficiosos en la salud colónica'
    ],
    relatedGlossaryTerms: ['malabsorcion-lactosa', 'fermentacion-bacteriana', 'microbiota-intestinal', 'agcc', 'gases-intestinales']
  },
  {
    id: 'efectos-osmosticos',
    title: 'Efectos Osmóticos y Motilidad Alterada',
    description: 'Cambios en el equilibrio hídrico y la motilidad intestinal causados por la lactosa no digerida y sus metabolitos.',
    image: process.env.NODE_ENV === 'production' ? '/lactose/images/mecanismos-fisiologicos/efectos_osmoticos.webp' : '/images/mecanismos-fisiologicos/efectos_osmoticos.webp',
    content: `
      <p>La lactosa no digerida y los productos de su fermentación tienen un efecto osmótico significativo, atrayendo agua hacia el lumen intestinal. Este aumento de líquido intraluminal contribuye a los síntomas de diarrea y urgencia fecal experimentados en la intolerancia a la lactosa.</p>
      
      <p>Además, los productos de la fermentación bacteriana, particularmente los ácidos grasos de cadena corta y gases, pueden alterar la motilidad intestinal. Estos metabolitos pueden estimular receptores entéricos y desencadenar reflejos neuromotores que aceleran el tránsito intestinal.</p>
      
      <p>La distensión abdominal causada por los gases y el aumento de volumen luminal activa mecanorreceptores en la pared intestinal, lo que puede contribuir al dolor y malestar abdominal a través de vías nociceptivas viscerales.</p>
    `,
    clinicalImplications: [
      'El efecto osmótico explica la diarrea característica de la intolerancia severa',
      'La aceleración del tránsito intestinal puede reducir la eficiencia de absorción de nutrientes',
      'Los efectos en la motilidad pueden atenuarse con dietas específicas'
    ],
    relatedGlossaryTerms: ['efecto-osmotico', 'diarrea', 'motilidad-intestinal', 'distension-abdominal']
  },
  {
    id: 'hipersensibilidad-visceral',
    title: 'Hipersensibilidad Visceral',
    description: 'Respuesta exagerada a estímulos intestinales normales que explica la variabilidad en la percepción de síntomas.',
    image: process.env.NODE_ENV === 'production' ? '/lactose/images/mecanismos-fisiologicos/hipersensibilidad_visceral.webp' : '/images/mecanismos-fisiologicos/hipersensibilidad_visceral.webp',
    content: `
      <p>La hipersensibilidad visceral es un factor clave para explicar la variabilidad en la percepción de síntomas entre individuos con niveles similares de malabsorción de lactosa. Se refiere a un umbral disminuido para la percepción de estímulos dolorosos o molestos en el tracto gastrointestinal.</p>
      
      <p>Esta hipersensibilidad puede estar mediada por alteraciones en la señalización desde el intestino al sistema nervioso central a través del eje intestino-cerebro. Implica factores neuroinmunológicos, incluyendo sensibilización de nociceptores viscerales, procesamiento central alterado de señales viscerales, y modulación por factores psicológicos como estrés y ansiedad.</p>
      
      <p>La influencia bidireccional entre el sistema nervioso entérico y central explica por qué algunos individuos experimentan síntomas más severos con niveles moderados de malabsorción, mientras que otros con malabsorción significativa pueden ser relativamente asintomáticos.</p>
    `,
    clinicalImplications: [
      'Explica la discordancia entre pruebas objetivas y síntomas reportados',
      'Justifica abordajes terapéuticos dirigidos a la modulación de la sensibilidad visceral',
      'Apoya la integración de factores psicológicos en el manejo de la intolerancia'
    ],
    relatedGlossaryTerms: ['hipersensibilidad-visceral', 'dolor-abdominal', 'eje-intestino-cerebro', 'factores-psicosomaticos']
  },
  {
    id: 'respuesta-inflamatoria',
    title: 'Respuesta Inflamatoria de Bajo Grado',
    description: 'Activación leve del sistema inmune mucosal en respuesta a productos de la fermentación bacteriana.',
    image: process.env.NODE_ENV === 'production' ? '/lactose/images/mecanismos-fisiologicos/respuesta_inflamatoria.webp' : '/images/mecanismos-fisiologicos/respuesta_inflamatoria.webp',
    content: `
      <p>La fermentación bacteriana de la lactosa no digerida puede desencadenar una respuesta inflamatoria de bajo grado en la mucosa intestinal. Esta respuesta implica la activación de células inmunes en la lámina propia, liberación de citocinas proinflamatorias y aumento de la permeabilidad paracelular.</p>
      
      <p>La inflamación, aunque típicamente de baja intensidad, puede contribuir a alterar la integridad de la barrera intestinal, exacerbando los síntomas y potencialmente permitiendo la translocación de antígenos y bacterias. Este proceso puede crear un ciclo de retroalimentación donde la inflamación altera la función intestinal, lo que a su vez puede promover más inflamación.</p>
      
      <p>Es importante destacar que esta respuesta inflamatoria es generalmente transitoria y se resuelve con la eliminación del estímulo (lactosa). Sin embargo, en algunos individuos con predisposición genética o disbiosis intestinal preexistente, estos episodios inflamatorios recurrentes podrían contribuir a una disfunción intestinal más persistente.</p>
    `,
    clinicalImplications: [
      'La inflamación recurrente puede contribuir a sensibilización visceral',
      'Constituye un posible mecanismo de superposición con otras condiciones gastrointestinales',
      'Explica parcialmente los beneficios de dietas antiinflamatorias en algunos pacientes'
    ],
    relatedGlossaryTerms: ['inflammation', 'barrera-intestinal', 'permeabilidad-intestinal', 'disbiosis']
  }
];

const MecanismosFisiologicosPage = () => {
  const [activeMechanism, setActiveMechanism] = useState<FisioMechanism>(mechanisms[0]);

  return (
    <Layout
      title="Mecanismos Fisiológicos | Intolerancia a la Lactosa"
      description="Explicación detallada de los mecanismos fisiológicos subyacentes a la intolerancia a la lactosa, desde la digestión normal hasta la génesis de síntomas."
    >
      <div className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Mecanismos Fisiológicos de la Intolerancia a la Lactosa
          </h1>
          
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Procesos biológicos interconectados que explican la variedad de síntomas y la naturaleza
            espectral de la intolerancia a la lactosa.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Navegación lateral */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-primary-700">Mecanismos</h2>
                <nav>
                  <ul className="space-y-3">
                    {mechanisms.map(mech => (
                      <li key={mech.id}>
                        <button
                          onClick={() => setActiveMechanism(mech)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                            activeMechanism.id === mech.id
                              ? 'bg-primary-100 text-primary-800 font-medium shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-3 inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                          {mech.title}
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{activeMechanism.title}</h2>
                    <p className="text-lg text-gray-600">{activeMechanism.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  <div className="md:col-span-7">
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: activeMechanism.content }} />
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                      <img 
                        src={activeMechanism.image} 
                        alt={activeMechanism.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-primary-500">
                      <h3 className="text-xl font-bold mb-4 text-primary-700 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Implicaciones Clínicas
                      </h3>
                      <ul className="space-y-3">
                        {activeMechanism.clinicalImplications.map((implication, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{implication}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Términos Relacionados</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeMechanism.relatedGlossaryTerms.map(term => (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <h2 className="text-2xl font-bold text-primary-800">Interrelación de Mecanismos</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Los mecanismos fisiológicos de la intolerancia a la lactosa no actúan de manera aislada, sino que se interrelacionan 
                  creando ciclos de retroalimentación. Esta visión integradora explica la variabilidad en la presentación clínica 
                  y respalda la conceptualización de la intolerancia a la lactosa como un espectro.
                </p>
                <Link 
                  href="/modelo/ciclos-retroalimentacion"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Explorar ciclos de retroalimentación
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">De la Fisiopatología a la Clínica</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                  Comprender los mecanismos fisiológicos que subyacen a la intolerancia a la lactosa permite:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Diagnóstico Preciso</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Identificar los mecanismos predominantes en cada caso permite un diagnóstico más preciso y detallado,
                      superando las limitaciones de los tests tradicionales.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Tratamiento Personalizado</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Enfocar las intervenciones terapéuticas hacia los mecanismos específicos que predominan en cada
                      paciente, optimizando la eficacia del tratamiento.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Abordaje Multidisciplinar</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      La comprensión integral de los mecanismos fisiopatológicos favorece la colaboración entre
                      gastroenterólogos, nutricionistas, microbiólogos y otros especialistas.
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
                      Proporcionar al paciente un conocimiento preciso de los mecanismos que subyacen a sus síntomas
                      facilita el autocuidado y mejora el cumplimiento terapéutico.
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

export default MecanismosFisiologicosPage; 