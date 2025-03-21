// Datos para la sección de Factores Genéticos
export interface FactorGenetico {
  id: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  image?: string;
  relatedTerms: string[];
}

export const factoresGeneticos: FactorGenetico[] = [
  {
    id: 'gen-lct',
    title: 'Gen LCT y Regulación de la Expresión',
    description: 'Estudio del gen LCT responsable de codificar la enzima lactasa y los mecanismos que regulan su expresión.',
    content: `
      <p>El gen LCT, localizado en el cromosoma 2q21.3, codifica la enzima lactasa-florizina hidrolasa (LPH), comúnmente conocida como lactasa. Esta enzima es crucial para la digestión de la lactosa en el intestino delgado. La estructura del gen LCT abarca aproximadamente 50 kb y contiene 17 exones.</p>
      
      <p>La expresión del gen LCT está altamente regulada durante el desarrollo. En humanos, la actividad de la lactasa alcanza su máximo nivel alrededor del nacimiento y permanece alta durante la infancia, permitiendo la digestión eficiente de la lactosa presente en la leche materna. Sin embargo, en la mayoría de los humanos, esta expresión disminuye después del destete, un fenómeno conocido como hipolactasia primaria o no persistencia de lactasa (LNP).</p>
      
      <p>La regulación de la expresión del gen LCT es compleja e involucra múltiples mecanismos moleculares, incluyendo factores de transcripción específicos del desarrollo, modificaciones epigenéticas y elementos reguladores cis y trans. La expresión está principalmente controlada a nivel transcripcional, con importantes elementos reguladores ubicados tanto en la región promotora proximal como en secuencias enhancer distantes.</p>
    `,
    keyPoints: [
      'Localizado en el cromosoma 2q21.3 con 17 exones',
      'Codifica la enzima lactasa-florizina hidrolasa (LPH)',
      'Expresión máxima durante la infancia',
      'Regulación transcripcional compleja'
    ],
    image: 'gen-lct.webp',
    relatedTerms: ['lactasa', 'gen-lct', 'transcripcion-genica', 'desarrollo-intestinal']
  },
  {
    id: 'polimorfismos-persistencia',
    title: 'Polimorfismos de Persistencia de Lactasa',
    description: 'Variantes genéticas asociadas con la persistencia de lactasa en la edad adulta en diferentes poblaciones humanas.',
    content: `
      <p>La persistencia de lactasa (LP) es la capacidad de mantener altos niveles de actividad de lactasa durante la edad adulta, permitiendo la digestión continua de lactosa. Este rasgo adaptativo está asociado con varios polimorfismos de un solo nucleótido (SNPs) ubicados principalmente en una región enhancer a aproximadamente 14 kb upstream del gen LCT, dentro del intrón 13 del gen MCM6 adyacente.</p>
      
      <p>El polimorfismo más estudiado y prevalente en poblaciones europeas es la variante C/T-13910 (rs4988235), donde el alelo T confiere persistencia de lactasa. Esta mutación altera un sitio de unión para el factor de transcripción Oct-1, aumentando la actividad transcripcional del promotor LCT. En individuos homocigotos para el alelo T (T/T) o heterocigotos (C/T), la lactasa se expresa a niveles significativamente más altos en comparación con los homocigotos para el alelo C (C/C).</p>
      
      <p>Interesantemente, diferentes poblaciones han desarrollado variantes distintas para la persistencia de lactasa. En África, se han identificado múltiples polimorfismos independientes que confieren LP, como G/C-14010, T/G-13915 y C/G-13907. Estas variantes representan un notable ejemplo de evolución convergente, donde diferentes poblaciones desarrollaron adaptaciones similares bajo la presión selectiva del consumo de lácteos, pero a través de mutaciones distintas.</p>
    `,
    keyPoints: [
      'Variante europea C/T-13910 (rs4988235) en el gen MCM6',
      'Múltiples variantes africanas (G/C-14010, T/G-13915, C/G-13907)',
      'Ejemplo clásico de evolución convergente',
      'Alta correlación con historia de pastoreo lácteo'
    ],
    image: 'polimorfismos-persistencia.webp',
    relatedTerms: ['persistencia-lactasa', 'snp', 'evolución-convergente', 'adaptacion-genetica']
  },
  {
    id: 'seleccion-natural',
    title: 'Selección Natural y Adaptación Cultural',
    description: 'Estudio de cómo la domesticación de animales lecheros ejerció presión selectiva favoreciendo la persistencia de lactasa.',
    content: `
      <p>La persistencia de lactasa representa uno de los ejemplos más claros de evolución humana reciente y adaptación genético-cultural. Los análisis genéticos indican que la variante europea de persistencia de lactasa (T-13910) surgió hace aproximadamente 7,500-10,000 años, coincidiendo con la domesticación de animales lecheros y el desarrollo de prácticas ganaderas en el Neolítico.</p>
      
      <p>La extraordinaria presión selectiva que favoreció este rasgo fue impulsada por las ventajas nutricionales del consumo de leche en poblaciones que dependían de productos lácteos. En entornos donde los recursos alimenticios eran limitados, la capacidad de obtener calorías, proteínas y calcio de la leche representaba una ventaja significativa. Estudios genómicos muestran que el coeficiente de selección para la persistencia de lactasa es uno de los más altos documentados en humanos, estimado entre 0.02 y 0.19.</p>
      
      <p>La distribución geográfica actual de la persistencia de lactasa refleja claramente esta co-evolución genético-cultural. Existe una fuerte correlación entre las frecuencias de alelos asociados con LP y la historia de pastoreo lechero en diferentes poblaciones. Este fenómeno ejemplifica cómo las prácticas culturales humanas pueden crear nichos que alteran las presiones selectivas y moldean nuestro genoma.</p>
    `,
    keyPoints: [
      'Surgimiento hace 7,500-10,000 años, coincidiendo con domesticación animal',
      'Ventaja adaptativa por valor nutricional de la leche',
      'Coeficiente de selección extremadamente alto (0.02-0.19)',
      'Co-evolución genético-cultural evidente en distribución geográfica'
    ],
    image: 'seleccion-natural.webp',
    relatedTerms: ['seleccion-natural', 'neolitico', 'domesticacion-animal', 'adaptacion-cultural']
  },
  {
    id: 'regulacion-epigenetica',
    title: 'Regulación Epigenética',
    description: 'Mecanismos epigenéticos que modulan la expresión de lactasa independientemente de la secuencia genética.',
    content: `
      <p>Más allá de las variantes genéticas, los mecanismos epigenéticos juegan un papel crucial en la regulación de la expresión de lactasa. Estos mecanismos, que incluyen metilación del ADN, modificaciones de histonas y ARN no codificantes, pueden modular la expresión génica sin alterar la secuencia de ADN subyacente.</p>
      
      <p>Estudios recientes han demostrado patrones diferenciales de metilación en la región promotora del gen LCT y en el enhancer dentro del gen MCM6. En individuos con no persistencia de lactasa, se observa un mayor grado de metilación en sitios CpG específicos, correlacionado con la disminución en la expresión de lactasa. Además, se han identificado estados específicos de la cromatina y modificaciones de histonas que influyen en la accesibilidad de los factores de transcripción a estas regiones reguladoras.</p>
      
      <p>La regulación epigenética representa un nivel adicional de complejidad que contribuye al espectro de expresión de lactasa observado en humanos. Estos mecanismos pueden explicar parcialmente la variabilidad en los fenotipos de digestión de lactosa que no se correlacionan perfectamente con los genotipos conocidos. Además, factores ambientales como la dieta, el microbioma intestinal y las condiciones inflamatorias pueden influir en estos marcadores epigenéticos, creando una interfaz dinámica entre el ambiente y la expresión génica.</p>
    `,
    keyPoints: [
      'Metilación diferencial del ADN en promotor LCT y enhancer MCM6',
      'Modificaciones de histonas y accesibilidad de la cromatina',
      'Explica variabilidad no atribuible solo a genotipos',
      'Influenciada por factores ambientales y microbioma'
    ],
    image: 'regulacion-epigenetica.webp',
    relatedTerms: ['epigenetica', 'metilacion-adn', 'modificacion-histonas', 'expresion-genica']
  },
  {
    id: 'factores-geneticos-secundarios',
    title: 'Factores Genéticos Secundarios',
    description: 'Genes adicionales que influyen en la digestión de lactosa y la manifestación de síntomas de intolerancia.',
    content: `
      <p>Aunque el gen LCT y sus elementos reguladores son los principales determinantes genéticos de la digestión de lactosa, estudios genómicos han identificado múltiples loci adicionales que pueden influir en el metabolismo de la lactosa y la expresión clínica de la intolerancia. Estos factores genéticos secundarios contribuyen a la naturaleza espectral de la condición.</p>
      
      <p>Se han identificado variantes en genes relacionados con la función de barrera intestinal (como MUC1, MUC2, TJP1) que pueden influir en la permeabilidad intestinal y la respuesta a la lactosa no digerida. Asimismo, polimorfismos en genes relacionados con la señalización del dolor visceral y la sensibilidad, como TRPV1 y diversos receptores de serotonina, pueden modular la percepción de los síntomas.</p>
      
      <p>Además, variantes genéticas que afectan la composición y función del microbioma intestinal, como los receptores de reconocimiento de patrones (PRRs) y defensinas, pueden influir en la capacidad de la microbiota para metabolizar la lactosa. Genes involucrados en la respuesta inmune intestinal, como IL10, TNF e IL6, también pueden modular la respuesta inflamatoria a los productos de fermentación bacteriana.</p>
    `,
    keyPoints: [
      'Genes de barrera intestinal (MUC1, MUC2, TJP1)',
      'Genes de señalización del dolor visceral (TRPV1, receptores de serotonina)',
      'Variantes que modulan el microbioma intestinal (PRRs, defensinas)',
      'Genes de respuesta inmune e inflamatoria (IL10, TNF, IL6)'
    ],
    image: 'factores-geneticos-secundarios.webp',
    relatedTerms: ['genetica-compleja', 'barrera-intestinal', 'dolor-visceral', 'inmunidad-mucosal']
  }
]; 