import { ModelLevel } from '../components/visualizations/MultilevelModelVisualization';

/**
 * Datos de los seis niveles del modelo multinivel de intolerancia a la lactosa
 */

export const multilevelModelData: ModelLevel[] = [
  {
    id: 'evolutionary-genetic',
    name: 'Nivel Genético-Evolutivo',
    description: 'Comprende los determinantes genéticos de la persistencia/no persistencia de lactasa y el contexto evolutivo de su selección en diferentes poblaciones humanas.',
    color: '#4299E1', // Azul
    factors: [
      {
        id: 'lct-polymorphisms',
        name: 'Polimorfismos del gen LCT',
        description: 'Variantes genéticas asociadas con la persistencia de lactasa en adultos, como -13910C>T en poblaciones europeas y -14010G>C en poblaciones africanas.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'mct-polymorphisms',
        name: 'Variantes de MCT1',
        description: 'Polimorfismos en el transportador de monocarboxilato 1 que afectan el transporte intestinal de metabolitos derivados de la fermentación de lactosa.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'evolutionary-selection',
        name: 'Selección evolutiva',
        description: 'Procesos de selección positiva que favorecieron la persistencia de lactasa en poblaciones con tradición de pastoralismo y consumo de lácteos.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'geographical-distribution',
        name: 'Distribución geográfica',
        description: 'Variabilidad en la prevalencia de persistencia de lactasa según regiones geográficas, con mayor frecuencia en poblaciones europeas y algunas africanas.',
        impactLevel: 'medium',
        evidenceLevel: 'strong'
      },
      {
        id: 'congenital-factors',
        name: 'Factores congénitos',
        description: 'Mutaciones raras que causan deficiencia congénita de lactasa, distinta de la no persistencia de lactasa del adulto.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      }
    ]
  },
  {
    id: 'epigenetic-regulatory',
    name: 'Nivel Epigenético-Regulatorio',
    description: 'Abarca los mecanismos de regulación epigenética que modulan la expresión del gen LCT, incluyendo metilación del ADN y modificaciones de histonas.',
    color: '#9F7AEA', // Púrpura
    factors: [
      {
        id: 'dna-methylation',
        name: 'Metilación del ADN',
        description: 'Patrones de metilación en el promotor del gen LCT que regulan su expresión y pueden ser modulados por factores ambientales y dietéticos.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'histone-modifications',
        name: 'Modificaciones de histonas',
        description: 'Modificaciones postraduccionales de histonas que afectan la estructura de la cromatina y la accesibilidad del promotor del gen LCT.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'transcription-factors',
        name: 'Factores de transcripción',
        description: 'Proteínas reguladoras como Oct-1 que interactúan con el polimorfismo -13910C>T y modulan la expresión del gen LCT.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'chromatin-structure',
        name: 'Estructura de la cromatina',
        description: 'Organización tridimensional de la cromatina que influye en la accesibilidad de los factores de transcripción al promotor del gen LCT.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'aging-related-silencing',
        name: 'Silenciamiento asociado a la edad',
        description: 'Cambios epigenéticos progresivos relacionados con la edad que contribuyen al declive en la expresión de lactasa en algunas personas.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      }
    ]
  },
  {
    id: 'microbiome-interaction',
    name: 'Nivel Microbioma-Interacciones',
    description: 'Engloba las interacciones bidireccionales entre la microbiota intestinal y el metabolismo de la lactosa, incluyendo adaptación microbiana y producción de metabolitos.',
    color: '#48BB78', // Verde
    factors: [
      {
        id: 'microbial-adaptation',
        name: 'Adaptación microbiana',
        description: 'Capacidad de la microbiota intestinal para adaptarse al consumo regular de lactosa, seleccionando poblaciones bacterianas con capacidad lactolítica.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'scfa-production',
        name: 'Producción de AGCC',
        description: 'Generación de ácidos grasos de cadena corta a partir de la fermentación de lactosa no digerida, con efectos en la fisiología intestinal y salud sistémica.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'gas-production',
        name: 'Producción de gases',
        description: 'Formación de hidrógeno, metano y dióxido de carbono durante la fermentación de lactosa, relacionada con síntomas de distensión y flatulencia.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'microbial-enzymes',
        name: 'Enzimas microbianas',
        description: 'Beta-galactosidasas bacterianas que hidrolizan la lactosa en el colon, compensando parcialmente la deficiencia de lactasa intestinal.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'microbiome-diversity',
        name: 'Diversidad del microbioma',
        description: 'Composición y diversidad de la microbiota intestinal que influye en la capacidad de metabolizar la lactosa y en la sintomatología.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'epigenetic-modulation',
        name: 'Modulación epigenética',
        description: 'Capacidad de metabolitos microbianos para influir en los patrones epigenéticos que regulan la expresión del gen LCT.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      }
    ]
  },
  {
    id: 'physiopathological',
    name: 'Nivel Fisiopatológico',
    description: 'Comprende los mecanismos fisiológicos alterados en la intolerancia a la lactosa y la manifestación de síntomas clínicos, incluyendo procesos inflamatorios y motilidad intestinal.',
    color: '#F56565', // Rojo
    factors: [
      {
        id: 'osmotic-effect',
        name: 'Efecto osmótico',
        description: 'Atracción de agua al lumen intestinal causada por la lactosa no digerida, contribuyendo a diarrea y aumento de la motilidad intestinal.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'intestinal-motility',
        name: 'Motilidad intestinal',
        description: 'Alteraciones en los patrones de contracción del intestino en respuesta a productos de fermentación de la lactosa no digerida.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'inflammation',
        name: 'Inflamación',
        description: 'Respuesta inflamatoria de bajo grado en la mucosa intestinal que puede exacerbar los síntomas y alterar la permeabilidad intestinal.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'visceral-sensitivity',
        name: 'Sensibilidad visceral',
        description: 'Umbral individual de percepción de molestias abdominales que influye en la manifestación y severidad de los síntomas.',
        impactLevel: 'high',
        evidenceLevel: 'moderate'
      },
      {
        id: 'intestinal-permeability',
        name: 'Permeabilidad intestinal',
        description: 'Alteraciones en la integridad de la barrera intestinal que pueden contribuir a la translocalización de antígenos y bacterias.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'nutrient-absorption',
        name: 'Absorción de nutrientes',
        description: 'Impacto en la absorción de calcio y otros nutrientes relacionado con el tránsito intestinal acelerado y alteraciones en el pH.',
        impactLevel: 'low',
        evidenceLevel: 'moderate'
      }
    ]
  },
  {
    id: 'systemic-integration',
    name: 'Nivel de Integración Sistémica',
    description: 'Contempla las interacciones entre la intolerancia a la lactosa y otros sistemas corporales, incluyendo el eje intestino-cerebro y efectos metabólicos sistémicos.',
    color: '#ED8936', // Naranja
    factors: [
      {
        id: 'gut-brain-axis',
        name: 'Eje intestino-cerebro',
        description: 'Comunicación bidireccional entre el sistema digestivo y el sistema nervioso central que influye en la percepción de síntomas y comportamiento alimentario.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'psychosomatic-factors',
        name: 'Factores psicosomáticos',
        description: 'Influencia de factores psicológicos como el estrés y la ansiedad en la expresión y severidad de los síntomas de intolerancia a la lactosa.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'systemic-inflammation',
        name: 'Inflamación sistémica',
        description: 'Potencial contribución a estados inflamatorios sistémicos de bajo grado a través de la activación inmune intestinal y translocación de metabolitos bacterianos.',
        impactLevel: 'low',
        evidenceLevel: 'weak'
      },
      {
        id: 'metabolic-impact',
        name: 'Impacto metabólico',
        description: 'Efectos en el metabolismo energético y lipídico relacionados con la producción de AGCC y otras moléculas bioactivas derivadas de la fermentación de lactosa.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'hormonal-modulation',
        name: 'Modulación hormonal',
        description: 'Interacción con hormonas gastrointestinales y regulación del apetito a través de la producción de metabolitos microbianos.',
        impactLevel: 'low',
        evidenceLevel: 'weak'
      }
    ]
  },
  {
    id: 'therapeutic-approaches',
    name: 'Nivel de Aproximaciones Terapéuticas',
    description: 'Abarca las estrategias de intervención para el manejo de la intolerancia a la lactosa, basadas en la comprensión de los niveles anteriores del modelo.',
    color: '#667EEA', // Índigo
    factors: [
      {
        id: 'dietary-management',
        name: 'Manejo dietético',
        description: 'Estrategias personalizadas de restricción o modulación del consumo de lácteos según la tolerancia individual y necesidades nutricionales.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'enzyme-supplementation',
        name: 'Suplementación enzimática',
        description: 'Uso de preparados de β-galactosidasa (lactasa) para facilitar la digestión de lactosa, con formulaciones y dosificaciones optimizadas.',
        impactLevel: 'high',
        evidenceLevel: 'strong'
      },
      {
        id: 'probiotic-intervention',
        name: 'Intervención probiótica',
        description: 'Administración de cepas bacterianas específicas con capacidad lactolítica para mejorar la tolerancia a la lactosa a través de la adaptación del microbioma.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'prebiotic-modulation',
        name: 'Modulación prebiótica',
        description: 'Uso de sustratos fermentables que favorecen el crecimiento de poblaciones bacterianas beneficiosas para el metabolismo de la lactosa.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'pharmacological-approaches',
        name: 'Abordajes farmacológicos',
        description: 'Medicamentos dirigidos a mecanismos específicos como la motilidad intestinal, la inflamación o la sensibilidad visceral para controlar síntomas.',
        impactLevel: 'medium',
        evidenceLevel: 'moderate'
      },
      {
        id: 'precision-nutrition',
        name: 'Nutrición de precisión',
        description: 'Enfoque personalizado basado en el perfil genético, epigenético y microbiano del individuo para optimizar la tolerancia a la lactosa.',
        impactLevel: 'high',
        evidenceLevel: 'moderate'
      }
    ]
  }
]; 