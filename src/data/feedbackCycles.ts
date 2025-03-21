import type { FeedbackNode, FeedbackLink } from '../components/visualizations/FeedbackCycleVisualization';

interface FeedbackCycle {
  id: string;
  name: string;
  description: string;
  nodes: FeedbackNode[];
  links: FeedbackLink[];
}

/**
 * Datos de los cuatro ciclos de retroalimentación identificados en el
 * modelo comprensivo multinivel de intolerancia a la lactosa
 */

export const feedbackCycles: FeedbackCycle[] = [
  {
    id: 'microbioma-epigenetica',
    name: 'Ciclo Microbioma-Epigenética',
    description: 'Este ciclo describe cómo la composición del microbioma intestinal influye en la regulación epigenética de la expresión del gen LCT, y cómo los cambios en la expresión de lactasa alteran el entorno intestinal, modificando a su vez el microbioma.',
    nodes: [
      {
        id: 'microbioma',
        name: 'Microbioma',
        description: 'Composición de la microbiota intestinal, especialmente las especies capaces de metabolizar lactosa.',
        category: 'microbiano'
      },
      {
        id: 'metabolitos-microbianos',
        name: 'Metabolitos microbianos',
        description: 'Ácidos grasos de cadena corta y otros metabolitos producidos por la microbiota que afectan la expresión génica.',
        category: 'microbiano'
      },
      {
        id: 'metilacion-lct',
        name: 'Metilación LCT',
        description: 'Estado de metilación del promotor del gen LCT que regula su expresión.',
        category: 'epigenetico'
      },
      {
        id: 'expresion-lactasa',
        name: 'Expresión de lactasa',
        description: 'Nivel de producción de la enzima lactasa en los enterocitos intestinales.',
        category: 'fisiopatologico'
      }
    ],
    links: [
      {
        source: 'microbioma',
        target: 'metabolitos-microbianos',
        description: 'La microbiota produce diversos metabolitos durante la fermentación.',
        strength: 'strong'
      },
      {
        source: 'metabolitos-microbianos',
        target: 'metilacion-lct',
        description: 'Los metabolitos microbianos influyen en los patrones de metilación del ADN.',
        strength: 'medium'
      },
      {
        source: 'metilacion-lct',
        target: 'expresion-lactasa',
        description: 'El estado de metilación regula directamente la expresión del gen LCT.',
        strength: 'strong'
      },
      {
        source: 'expresion-lactasa',
        target: 'microbioma',
        description: 'Los niveles de lactasa influyen en la disponibilidad de lactosa para la microbiota.',
        strength: 'medium'
      }
    ]
  },
  {
    id: 'inflamacion-permeabilidad',
    name: 'Ciclo Inflamación-Permeabilidad',
    description: 'Este ciclo destaca cómo la inflamación intestinal aumenta la permeabilidad de la barrera intestinal, permitiendo la translocación de metabolitos y bacterias, lo que exacerba la respuesta inflamatoria.',
    nodes: [
      {
        id: 'inflamacion',
        name: 'Inflamación',
        description: 'Estado inflamatorio de la mucosa intestinal.',
        category: 'fisiopatologico'
      },
      {
        id: 'citoquinas',
        name: 'Citoquinas',
        description: 'Moléculas de señalización del sistema inmune que modulan la respuesta inflamatoria.',
        category: 'fisiopatologico'
      },
      {
        id: 'permeabilidad',
        name: 'Permeabilidad intestinal',
        description: 'Integridad de la barrera epitelial intestinal que regula el paso de moléculas.',
        category: 'fisiopatologico'
      },
      {
        id: 'translocacion',
        name: 'Translocación bacteriana',
        description: 'Paso de bacterias o sus componentes a través de la barrera intestinal.',
        category: 'microbiano'
      }
    ],
    links: [
      {
        source: 'inflamacion',
        target: 'citoquinas',
        description: 'La inflamación induce la producción de citoquinas proinflamatorias.',
        strength: 'strong'
      },
      {
        source: 'citoquinas',
        target: 'permeabilidad',
        description: 'Las citoquinas proinflamatorias alteran las uniones estrechas entre células epiteliales.',
        strength: 'medium'
      },
      {
        source: 'permeabilidad',
        target: 'translocacion',
        description: 'El aumento de permeabilidad facilita la translocación bacteriana.',
        strength: 'medium'
      },
      {
        source: 'translocacion',
        target: 'inflamacion',
        description: 'La translocación bacteriana activa la respuesta inmune y exacerba la inflamación.',
        strength: 'strong'
      }
    ]
  },
  {
    id: 'adaptacion-microbiana',
    name: 'Ciclo de Adaptación Microbiana',
    description: 'Este ciclo explica cómo el consumo regular de lactosa selecciona poblaciones microbianas adaptadas a su metabolismo, reduciendo la sintomatología y favoreciendo la tolerancia.',
    nodes: [
      {
        id: 'consumo-lactosa',
        name: 'Consumo de lactosa',
        description: 'Cantidad y frecuencia de ingesta de productos lácteos.',
        category: 'fisiopatologico'
      },
      {
        id: 'bacterias-lactoliticas',
        name: 'Bacterias lactolíticas',
        description: 'Poblaciones bacterianas adaptadas al metabolismo de la lactosa.',
        category: 'microbiano'
      },
      {
        id: 'lactosa-no-digerida',
        name: 'Lactosa no digerida',
        description: 'Lactosa que llega al colon sin ser hidrolizada por la lactasa intestinal.',
        category: 'fisiopatologico'
      },
      {
        id: 'fermentacion',
        name: 'Fermentación',
        description: 'Proceso microbiano de metabolismo de la lactosa con producción de ácidos y gases.',
        category: 'microbiano'
      }
    ],
    links: [
      {
        source: 'consumo-lactosa',
        target: 'lactosa-no-digerida',
        description: 'Parte de la lactosa consumida no es digerida, especialmente en personas con baja expresión de lactasa.',
        strength: 'strong'
      },
      {
        source: 'lactosa-no-digerida',
        target: 'fermentacion',
        description: 'La lactosa no digerida llega al colon donde es fermentada por la microbiota.',
        strength: 'strong'
      },
      {
        source: 'fermentacion',
        target: 'bacterias-lactoliticas',
        description: 'La fermentación regular favorece el crecimiento de bacterias capaces de metabolizar la lactosa.',
        strength: 'medium'
      },
      {
        source: 'bacterias-lactoliticas',
        target: 'consumo-lactosa',
        description: 'La adaptación microbiana mejora la tolerancia a la lactosa, permitiendo mayor consumo.',
        strength: 'medium'
      }
    ]
  },
  {
    id: 'genetica-dieta-epigenetica',
    name: 'Ciclo Genética-Dieta-Epigenética',
    description: 'Este ciclo muestra la interacción entre la predisposición genética, los patrones dietéticos y la regulación epigenética, explicando la variabilidad en la expresión clínica de la intolerancia.',
    nodes: [
      {
        id: 'polimorfismos',
        name: 'Polimorfismos LCT',
        description: 'Variantes genéticas asociadas con la persistencia/no persistencia de lactasa.',
        category: 'genetico'
      },
      {
        id: 'exposicion-lactosa',
        name: 'Exposición a lactosa',
        description: 'Patrones de consumo de lactosa a lo largo de la vida.',
        category: 'fisiopatologico'
      },
      {
        id: 'regulacion-epigenetica',
        name: 'Regulación epigenética',
        description: 'Mecanismos de modificación de la expresión génica sin alterar la secuencia de ADN.',
        category: 'epigenetico'
      },
      {
        id: 'fenotipo-lactasa',
        name: 'Fenotipo lactasa',
        description: 'Nivel de actividad de la lactasa expresado en el intestino.',
        category: 'fisiopatologico'
      }
    ],
    links: [
      {
        source: 'polimorfismos',
        target: 'fenotipo-lactasa',
        description: 'Las variantes genéticas determinan la predisposición a mantener o perder expresión de lactasa.',
        strength: 'strong'
      },
      {
        source: 'fenotipo-lactasa',
        target: 'exposicion-lactosa',
        description: 'El nivel de actividad de lactasa influye en los patrones dietéticos y consumo de lácteos.',
        strength: 'medium'
      },
      {
        source: 'exposicion-lactosa',
        target: 'regulacion-epigenetica',
        description: 'Los patrones dietéticos modifican las marcas epigenéticas en genes relacionados.',
        strength: 'medium'
      },
      {
        source: 'regulacion-epigenetica',
        target: 'polimorfismos',
        description: 'La regulación epigenética modula el efecto de los polimorfismos genéticos.',
        strength: 'weak'
      }
    ]
  }
];

export default feedbackCycles; 