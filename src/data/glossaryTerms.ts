export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'genética' | 'epigenética' | 'microbioma' | 'fisiología' | 'clínica' | 'general';
  relatedTerms?: string[]; // IDs de términos relacionados
}

/**
 * Glosario de términos científicos relacionados con la intolerancia a la lactosa
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'lactosa',
    term: 'Lactosa',
    definition: 'Disacárido compuesto por glucosa y galactosa, presente en la leche y productos lácteos. Es el principal carbohidrato en la leche de los mamíferos, incluida la humana.',
    category: 'general',
    relatedTerms: ['lactasa', 'galactosa', 'glucosa']
  },
  {
    id: 'lactasa',
    term: 'Lactasa',
    definition: 'Enzima intestinal (β-galactosidasa) producida por los enterocitos del intestino delgado que hidroliza la lactosa en sus monosacáridos constituyentes: glucosa y galactosa, para su absorción.',
    category: 'fisiología',
    relatedTerms: ['lactosa', 'hidrolisis-lactosa', 'enterocitos']
  },
  {
    id: 'intolerancia-lactosa',
    term: 'Intolerancia a la lactosa',
    definition: 'Condición espectral caracterizada por la incapacidad parcial o total de digerir la lactosa debido a niveles insuficientes de la enzima lactasa, resultando en síntomas gastrointestinales de intensidad variable.',
    category: 'clínica',
    relatedTerms: ['lactasa', 'malabsorcion-lactosa', 'hipolactasia']
  },
  {
    id: 'hipolactasia',
    term: 'Hipolactasia',
    definition: 'Deficiencia o reducción en la producción de la enzima lactasa en el intestino delgado, que puede ser primaria (genética) o secundaria (adquirida por daño intestinal).',
    category: 'clínica',
    relatedTerms: ['lactasa', 'alactasia', 'no-persistencia-lactasa']
  },
  {
    id: 'alactasia',
    term: 'Alactasia',
    definition: 'Ausencia total de la enzima lactasa en el intestino, generalmente una condición congénita extremadamente rara causada por mutaciones en el gen LCT.',
    category: 'clínica',
    relatedTerms: ['hipolactasia', 'lactasa', 'gen-lct']
  },
  {
    id: 'malabsorcion-lactosa',
    term: 'Malabsorción de lactosa',
    definition: 'Incapacidad de absorber completamente la lactosa en el intestino delgado, resultando en el paso de lactosa no digerida al colon donde es fermentada por la microbiota intestinal.',
    category: 'fisiología',
    relatedTerms: ['lactosa', 'intolerancia-lactosa', 'fermentacion-bacteriana']
  },
  {
    id: 'persistencia-lactasa',
    term: 'Persistencia de lactasa',
    definition: 'Continuación de la expresión del gen LCT en la edad adulta, permitiendo la producción de lactasa y la digestión de lactosa a lo largo de toda la vida.',
    category: 'genética',
    relatedTerms: ['lactasa', 'gen-lct', 'polimorfismo-13910ct', 'no-persistencia-lactasa']
  },
  {
    id: 'no-persistencia-lactasa',
    term: 'No persistencia de lactasa',
    definition: 'Disminución natural y programada de la expresión del gen LCT después del destete, resultando en reducción de los niveles de lactasa en la edad adulta. Es el estado ancestral y predominante en la población mundial.',
    category: 'genética',
    relatedTerms: ['lactasa', 'gen-lct', 'hipolactasia']
  },
  {
    id: 'gen-lct',
    term: 'Gen LCT',
    definition: 'Gen que codifica para la enzima lactasa-florizina hidrolasa (LPH), localizado en el cromosoma 2. Variantes en regiones reguladoras de este gen determinan la persistencia o no persistencia de lactasa en adultos.',
    category: 'genética',
    relatedTerms: ['lactasa', 'persistencia-lactasa', 'polimorfismo-13910ct']
  },
  {
    id: 'polimorfismo-13910ct',
    term: 'Polimorfismo -13910C>T',
    definition: 'Variante genética localizada 13,910 pares de bases anterior al gen LCT, en el intrón 13 del gen MCM6. El alelo T está asociado con persistencia de lactasa en poblaciones europeas.',
    category: 'genética',
    relatedTerms: ['gen-lct', 'persistencia-lactasa', 'mcm6']
  },
  {
    id: 'mcm6',
    term: 'MCM6',
    definition: 'Gen vecino al gen LCT que contiene elementos reguladores críticos para la expresión de lactasa, incluyendo el sitio donde se encuentra el polimorfismo -13910C>T asociado con persistencia de lactasa.',
    category: 'genética',
    relatedTerms: ['gen-lct', 'polimorfismo-13910ct']
  },
  {
    id: 'metilacion-adn',
    term: 'Metilación del ADN',
    definition: 'Proceso epigenético que involucra la adición de grupos metilo a la citosina en regiones CpG del ADN, asociado con la regulación de la expresión génica. La metilación en el promotor del gen LCT influye en la expresión de lactasa.',
    category: 'epigenética',
    relatedTerms: ['epigenetica', 'expresion-genica', 'gen-lct']
  },
  {
    id: 'epigenetica',
    term: 'Epigenética',
    definition: 'Estudio de cambios en la expresión génica que no implican alteraciones en la secuencia del ADN. Incluye mecanismos como metilación del ADN, modificaciones de histonas y ARN no codificante.',
    category: 'epigenética',
    relatedTerms: ['metilacion-adn', 'modificaciones-histonas', 'expresion-genica']
  },
  {
    id: 'modificaciones-histonas',
    term: 'Modificaciones de histonas',
    definition: 'Alteraciones químicas en las proteínas histonas que afectan la estructura de la cromatina y la accesibilidad del ADN, influyendo en la expresión génica. Incluyen acetilación, metilación, fosforilación, entre otras.',
    category: 'epigenética',
    relatedTerms: ['epigenetica', 'cromatina', 'expresion-genica']
  },
  {
    id: 'expresion-genica',
    term: 'Expresión génica',
    definition: 'Proceso por el cual la información codificada en un gen se utiliza para sintetizar productos génicos funcionales, como proteínas. La expresión del gen LCT determina la producción de lactasa.',
    category: 'genética',
    relatedTerms: ['gen-lct', 'epigenetica', 'lactasa']
  },
  {
    id: 'microbiota-intestinal',
    term: 'Microbiota intestinal',
    definition: 'Comunidad compleja de microorganismos que habitan el tracto gastrointestinal, principalmente el colon. Incluye bacterias, arqueas, hongos, virus y protozoos, con funciones importantes en la salud del huésped.',
    category: 'microbioma',
    relatedTerms: ['microbioma', 'fermentacion-bacteriana', 'agcc']
  },
  {
    id: 'microbioma',
    term: 'Microbioma',
    definition: 'Conjunto de genomas de los microorganismos que habitan un nicho ecológico específico, como el intestino. El término también se usa para referirse a la comunidad microbiana junto con su ambiente.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'disbiosis']
  },
  {
    id: 'fermentacion-bacteriana',
    term: 'Fermentación bacteriana',
    definition: 'Proceso metabólico realizado por bacterias intestinales en el que sustratos no digeridos, como la lactosa, son degradados anaeróbicamente, produciendo ácidos grasos de cadena corta, gases y otros metabolitos.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'agcc', 'lactosa', 'gases-intestinales']
  },
  {
    id: 'agcc',
    term: 'Ácidos grasos de cadena corta (AGCC)',
    definition: 'Productos del metabolismo bacteriano de carbohidratos no digeridos en el colon, principalmente acetato, propionato y butirato. Tienen funciones importantes en la fisiología intestinal y la salud general.',
    category: 'microbioma',
    relatedTerms: ['fermentacion-bacteriana', 'butirato', 'microbiota-intestinal']
  },
  {
    id: 'butirato',
    term: 'Butirato',
    definition: 'Ácido graso de cadena corta producido por la fermentación bacteriana de carbohidratos en el colon. Tiene efectos antiinflamatorios, regula la barrera intestinal y influye en la expresión génica epigenética.',
    category: 'microbioma',
    relatedTerms: ['agcc', 'fermentacion-bacteriana', 'epigenetica']
  },
  {
    id: 'disbiosis',
    term: 'Disbiosis',
    definition: 'Desequilibrio en la composición y función de la microbiota intestinal, asociado con diversas condiciones de salud. Puede afectar la capacidad de metabolizar la lactosa y exacerbar síntomas de intolerancia.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'microbioma', 'barrera-intestinal']
  },
  {
    id: 'barrera-intestinal',
    term: 'Barrera intestinal',
    definition: 'Estructura compleja formada por componentes físicos, bioquímicos e inmunológicos que separa el contenido luminal del medio interno. Su integridad es esencial para prevenir la translocación de antígenos y bacterias.',
    category: 'fisiología',
    relatedTerms: ['permeabilidad-intestinal', 'uniones-estrechas', 'microbiota-intestinal']
  },
  {
    id: 'permeabilidad-intestinal',
    term: 'Permeabilidad intestinal',
    definition: 'Propiedad de la barrera intestinal que regula el paso de moléculas entre el lumen intestinal y la circulación. Alteraciones en la permeabilidad están implicadas en múltiples condiciones gastrointestinales.',
    category: 'fisiología',
    relatedTerms: ['barrera-intestinal', 'uniones-estrechas', 'translocacion-bacteriana']
  },
  {
    id: 'uniones-estrechas',
    term: 'Uniones estrechas',
    definition: 'Complejos de proteínas de membrana que sellan el espacio intercelular entre células epiteliales intestinales adyacentes, regulando la permeabilidad paracelular y la integridad de la barrera intestinal.',
    category: 'fisiología',
    relatedTerms: ['barrera-intestinal', 'permeabilidad-intestinal', 'enterocitos']
  },
  {
    id: 'enterocitos',
    term: 'Enterocitos',
    definition: 'Células epiteliales que revisten el intestino delgado, responsables de la digestión final y absorción de nutrientes. Son las células que producen la enzima lactasa en sus microvellosidades apicales.',
    category: 'fisiología',
    relatedTerms: ['lactasa', 'barrera-intestinal', 'vellosidades-intestinales']
  },
  {
    id: 'vellosidades-intestinales',
    term: 'Vellosidades intestinales',
    definition: 'Proyecciones digitiformes de la mucosa del intestino delgado que aumentan su superficie de absorción. En sus laterales se encuentran los enterocitos que expresan lactasa y otras enzimas digestivas.',
    category: 'fisiología',
    relatedTerms: ['enterocitos', 'microvellosidades', 'intestino-delgado']
  },
  {
    id: 'microvellosidades',
    term: 'Microvellosidades',
    definition: 'Extensiones filamentosas de la membrana apical de los enterocitos que forman el borde en cepillo intestinal, donde se localizan numerosas enzimas digestivas, incluida la lactasa.',
    category: 'fisiología',
    relatedTerms: ['enterocitos', 'lactasa', 'vellosidades-intestinales']
  },
  {
    id: 'intestino-delgado',
    term: 'Intestino delgado',
    definition: 'Sección del tracto gastrointestinal responsable de la mayor parte de la digestión y absorción de nutrientes, dividida en duodeno, yeyuno e íleon. Principal sitio de expresión y actividad de la lactasa.',
    category: 'fisiología',
    relatedTerms: ['enterocitos', 'vellosidades-intestinales', 'lactasa']
  },
  {
    id: 'colon',
    term: 'Colon',
    definition: 'Parte final del tracto gastrointestinal, donde reside la mayor parte de la microbiota intestinal. Lugar donde ocurre la fermentación de la lactosa no digerida en personas con intolerancia.',
    category: 'fisiología',
    relatedTerms: ['microbiota-intestinal', 'fermentacion-bacteriana', 'agcc']
  },
  {
    id: 'galactosa',
    term: 'Galactosa',
    definition: 'Monosacárido producido junto con la glucosa a partir de la hidrólisis de la lactosa por acción de la lactasa. Después de su absorción, se metaboliza principalmente en el hígado.',
    category: 'fisiología',
    relatedTerms: ['lactosa', 'glucosa', 'hidrolisis-lactosa']
  },
  {
    id: 'glucosa',
    term: 'Glucosa',
    definition: 'Monosacárido resultante de la hidrólisis de la lactosa, junto con la galactosa. Es la principal fuente de energía para las células del cuerpo y se absorbe rápidamente en el intestino delgado.',
    category: 'fisiología',
    relatedTerms: ['lactosa', 'galactosa', 'hidrolisis-lactosa']
  },
  {
    id: 'hidrolisis-lactosa',
    term: 'Hidrólisis de lactosa',
    definition: 'Reacción enzimática catalizada por la lactasa que rompe el enlace glucosídico de la lactosa, liberando sus dos componentes: glucosa y galactosa, que pueden ser absorbidos por los enterocitos.',
    category: 'fisiología',
    relatedTerms: ['lactosa', 'lactasa', 'glucosa', 'galactosa']
  },
  {
    id: 'gases-intestinales',
    term: 'Gases intestinales',
    definition: 'Productos de la fermentación bacteriana en el colon, incluyen hidrógeno, metano y dióxido de carbono. Su producción excesiva durante la fermentación de lactosa no digerida causa distensión y flatulencia.',
    category: 'clínica',
    relatedTerms: ['fermentacion-bacteriana', 'distension-abdominal', 'flatulencia']
  },
  {
    id: 'distension-abdominal',
    term: 'Distensión abdominal',
    definition: 'Aumento del volumen abdominal causado por acumulación de gases o líquidos en el tracto gastrointestinal. Síntoma común en la intolerancia a la lactosa debido a la fermentación bacteriana.',
    category: 'clínica',
    relatedTerms: ['gases-intestinales', 'fermentacion-bacteriana', 'sintomas-intolerancia']
  },
  {
    id: 'flatulencia',
    term: 'Flatulencia',
    definition: 'Expulsión de gases intestinales a través del ano, frecuentemente aumentada en personas con intolerancia a la lactosa debido a la producción excesiva de gases durante la fermentación de lactosa no digerida.',
    category: 'clínica',
    relatedTerms: ['gases-intestinales', 'fermentacion-bacteriana', 'sintomas-intolerancia']
  },
  {
    id: 'diarrea',
    term: 'Diarrea',
    definition: 'Aumento en el volumen, frecuencia y/o fluidez de las evacuaciones intestinales. En la intolerancia a la lactosa se debe al efecto osmótico de la lactosa no digerida y los productos de su fermentación.',
    category: 'clínica',
    relatedTerms: ['efecto-osmotico', 'fermentacion-bacteriana', 'sintomas-intolerancia']
  },
  {
    id: 'efecto-osmotico',
    term: 'Efecto osmótico',
    definition: 'Fenómeno por el cual la lactosa no digerida y otros solutos en el lumen intestinal atraen agua, aumentando el contenido líquido intestinal y contribuyendo a la diarrea en la intolerancia a la lactosa.',
    category: 'fisiología',
    relatedTerms: ['diarrea', 'lactosa', 'malabsorcion-lactosa']
  },
  {
    id: 'dolor-abdominal',
    term: 'Dolor abdominal',
    definition: 'Sensación dolorosa en la región abdominal que puede variar en intensidad y localización. En la intolerancia a la lactosa se asocia con distensión, aumento de la motilidad y sensibilidad visceral.',
    category: 'clínica',
    relatedTerms: ['distension-abdominal', 'hipersensibilidad-visceral', 'sintomas-intolerancia']
  },
  {
    id: 'hipersensibilidad-visceral',
    term: 'Hipersensibilidad visceral',
    definition: 'Umbral reducido para la percepción de estímulos dolorosos en el tracto gastrointestinal. Contribuye a la variabilidad en la manifestación y severidad de síntomas en personas con intolerancia a la lactosa.',
    category: 'clínica',
    relatedTerms: ['dolor-abdominal', 'sistema-nervioso-enterico', 'eje-intestino-cerebro']
  },
  {
    id: 'eje-intestino-cerebro',
    term: 'Eje intestino-cerebro',
    definition: 'Sistema bidireccional de comunicación entre el sistema nervioso central y el tracto gastrointestinal, involucrando vías neurales, endocrinas e inmunes. Influye en la percepción de síntomas gastrointestinales.',
    category: 'fisiología',
    relatedTerms: ['sistema-nervioso-enterico', 'hipersensibilidad-visceral', 'factores-psicosomaticos']
  },
  {
    id: 'sistema-nervioso-enterico',
    term: 'Sistema nervioso entérico',
    definition: 'Red de neuronas que gobiernan las funciones del tracto gastrointestinal, a menudo denominado "segundo cerebro". Regula la motilidad, secreción, flujo sanguíneo y respuestas inmunes locales.',
    category: 'fisiología',
    relatedTerms: ['eje-intestino-cerebro', 'motilidad-intestinal', 'hipersensibilidad-visceral']
  },
  {
    id: 'factores-psicosomaticos',
    term: 'Factores psicosomáticos',
    definition: 'Aspectos psicológicos como estrés, ansiedad y expectativas que pueden influir en la percepción y expresión de síntomas gastrointestinales, incluyendo aquellos asociados con la intolerancia a la lactosa.',
    category: 'clínica',
    relatedTerms: ['eje-intestino-cerebro', 'hipersensibilidad-visceral', 'nocebo']
  },
  {
    id: 'motilidad-intestinal',
    term: 'Motilidad intestinal',
    definition: 'Movimientos contráctiles coordinados del tracto gastrointestinal que mezclan y propulsan su contenido. Puede estar alterada en la intolerancia a la lactosa por productos de fermentación bacteriana.',
    category: 'fisiología',
    relatedTerms: ['sistema-nervioso-enterico', 'distension-abdominal', 'diarrea']
  },
  {
    id: 'test-hidrogeno-espirado',
    term: 'Test de hidrógeno espirado',
    definition: 'Prueba diagnóstica que mide el hidrógeno en el aliento después de ingerir lactosa, indicando fermentación bacteriana de lactosa no digerida en el colon. Método estándar para diagnosticar malabsorción de lactosa.',
    category: 'clínica',
    relatedTerms: ['malabsorcion-lactosa', 'gases-intestinales', 'diagnostico-intolerancia']
  },
  {
    id: 'diagnostico-intolerancia',
    term: 'Diagnóstico de intolerancia a la lactosa',
    definition: 'Proceso de identificación de la intolerancia a la lactosa basado en historia clínica, síntomas tras consumo de lácteos, pruebas como test de hidrógeno espirado, test genético y/o biopsia intestinal.',
    category: 'clínica',
    relatedTerms: ['test-hidrogeno-espirado', 'sintomas-intolerancia', 'test-genetico-lactosa']
  },
  {
    id: 'test-genetico-lactosa',
    term: 'Test genético de lactosa',
    definition: 'Análisis del ADN para detectar polimorfismos asociados con persistencia/no persistencia de lactasa, como -13910C>T. No confirma síntomas clínicos pero determina predisposición genética.',
    category: 'genética',
    relatedTerms: ['polimorfismo-13910ct', 'gen-lct', 'diagnostico-intolerancia']
  },
  {
    id: 'sintomas-intolerancia',
    term: 'Síntomas de intolerancia a la lactosa',
    definition: 'Manifestaciones clínicas tras consumo de lactosa en personas con deficiencia de lactasa, que incluyen: distensión abdominal, flatulencia, dolor abdominal, diarrea, náuseas y borborigmos.',
    category: 'clínica',
    relatedTerms: ['distension-abdominal', 'flatulencia', 'dolor-abdominal', 'diarrea']
  },
  {
    id: 'suplementacion-lactasa',
    term: 'Suplementación de lactasa',
    definition: 'Uso de preparados enzimáticos que contienen lactasa (β-galactosidasa) para facilitar la digestión de lactosa. Se toman antes o durante el consumo de productos lácteos.',
    category: 'clínica',
    relatedTerms: ['lactasa', 'manejo-intolerancia', 'productos-deslactosados']
  },
  {
    id: 'productos-deslactosados',
    term: 'Productos deslactosados',
    definition: 'Alimentos lácteos procesados con la enzima lactasa para hidrolizar previamente la lactosa, haciéndolos adecuados para personas con intolerancia a la lactosa.',
    category: 'clínica',
    relatedTerms: ['lactosa', 'lactasa', 'manejo-intolerancia']
  },
  {
    id: 'probioticos-lactoliticos',
    term: 'Probióticos lactolíticos',
    definition: 'Microorganismos vivos que, administrados en cantidades adecuadas, pueden mejorar la digestión de lactosa mediante producción de β-galactosidasa bacteriana o modulación de la microbiota intestinal.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'manejo-intolerancia', 'adaptacion-colonica']
  },
  {
    id: 'prebioticos',
    term: 'Prebióticos',
    definition: 'Ingredientes alimentarios no digeribles que estimulan selectivamente el crecimiento y/o actividad de microorganismos intestinales beneficiosos, potencialmente mejorando la tolerancia a la lactosa.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'probioticos-lactoliticos', 'manejo-intolerancia']
  },
  {
    id: 'adaptacion-colonica',
    term: 'Adaptación colónica',
    definition: 'Proceso por el cual el consumo regular de lactosa puede mejorar la tolerancia a través de adaptaciones en la microbiota intestinal, seleccionando poblaciones bacterianas con mayor capacidad lactolítica.',
    category: 'microbioma',
    relatedTerms: ['microbiota-intestinal', 'probioticos-lactoliticos', 'manejo-intolerancia']
  },
  {
    id: 'manejo-intolerancia',
    term: 'Manejo de la intolerancia a la lactosa',
    definition: 'Conjunto de estrategias para controlar los síntomas de intolerancia, incluyendo modificación dietética, suplementación enzimática, probióticos, consumo gradual y adaptación individual.',
    category: 'clínica',
    relatedTerms: ['suplementacion-lactasa', 'productos-deslactosados', 'probioticos-lactoliticos', 'adaptacion-colonica']
  }
];

// Ordenar alfabéticamente para facilitar la consulta
export const sortedGlossaryTerms = [...glossaryTerms].sort((a, b) => 
  a.term.localeCompare(b.term, 'es')
);

export default sortedGlossaryTerms; 