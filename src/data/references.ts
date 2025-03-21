import { BibReference } from '@/components/Referencias';

/**
 * Referencias bibliográficas clave para el modelo comprensivo multinivel
 * de intolerancia a la lactosa
 */

const references: BibReference[] = [
  // Genética y Evolución
  {
    authors: "Friedrich DC, et al.",
    year: 2012,
    title: "Several different lactase persistence associated alleles and high diversity of the lactase gene in the admixed Brazilian population",
    journal: "PLoS ONE",
    doi: "10.1371/journal.pone.0046520",
    pmid: "23029545",
    tags: ["genética", "evolución", "epidemiología"],
    type: "Estudio genético poblacional",
    population: "Brasileña (mezcla étnica)",
    keyPoints: [
      "Alta diversidad de alelos asociados a la persistencia de lactasa en población brasileña",
      "Identificación de varios haplotipos distintos asociados con la persistencia de lactasa"
    ]
  },
  {
    authors: "Itan Y, et al.",
    year: 2010,
    title: "A worldwide correlation of lactase persistence phenotype and genotypes",
    journal: "BMC Evolutionary Biology",
    doi: "10.1186/1471-2148-10-36",
    pmid: "20144208",
    tags: ["genética", "evolución", "epidemiología"],
    type: "Correlación genético-fenotípica",
    keyPoints: [
      "Correlación mundial entre fenotipos y genotipos de persistencia de lactasa",
      "Mapeo de la distribución global de alelos asociados con persistencia de lactasa"
    ]
  },
  {
    authors: "Feliciano CP & Gonzales-Aspera AD",
    year: 2021,
    title: "Genetics of Lactose Intolerance: An Updated Review and Online Interactive World Maps of Phenotype and Genotype Frequencies",
    journal: "Genes",
    doi: "10.3390/genes12091466",
    pmid: "32899182",
    tags: ["genética", "evolución", "epidemiología", "revisión sistemática"],
    type: "Revisión y análisis geográfico",
    population: "Mundial",
    keyPoints: [
      "Revisión actualizada de la genética de la intolerancia a la lactosa",
      "Mapas interactivos de frecuencias de fenotipos y genotipos a nivel mundial"
    ]
  },
  {
    authors: "Segurel L & Bon C",
    year: 2017,
    title: "On the Evolution of Lactase Persistence in Humans",
    journal: "Annual Review of Genomics and Human Genetics",
    doi: "10.1146/annurev-genom-091416-035340",
    pmid: "28426286",
    tags: ["genética", "evolución", "revisión sistemática"],
    type: "Revisión evolutiva",
    keyPoints: [
      "Evolución de la persistencia de lactasa en humanos",
      "Análisis de la selección positiva que actuó sobre los alelos de persistencia de lactasa"
    ]
  },
  {
    authors: "Liebert A, et al.",
    year: 2017,
    title: "World-wide distributions of lactase persistence alleles and the complex effects of recombination and selection",
    journal: "Human Genetics",
    doi: "10.1007/s00439-017-1847-y",
    pmid: "29063188",
    tags: ["genética", "evolución", "epidemiología"],
    type: "Estudio genético poblacional",
    population: "Mundial",
    keyPoints: [
      "Distribución mundial de alelos de persistencia de lactasa",
      "Efectos complejos de recombinación y selección en la evolución de la persistencia de lactasa"
    ]
  },
  // Mecanismos Fisiológicos e Inflamatorios
  {
    authors: "Deng Y, et al.",
    year: 2015,
    title: "Lactose Intolerance in Adults: Biological Mechanism and Dietary Management",
    journal: "Nutrients",
    doi: "10.3390/nu7095380",
    pmid: "26393648",
    tags: ["fisiopatología", "manejo", "revisión sistemática"],
    type: "Revisión",
    keyPoints: [
      "Mecanismos biológicos de la intolerancia a la lactosa",
      "Estrategias de manejo dietético"
    ]
  },
  {
    authors: "Fassio F, et al.",
    year: 2018,
    title: "Lactose Maldigestion, Malabsorption, and Intolerance: A Comprehensive Review with a Focus on Current Management and Future Perspectives",
    journal: "Nutrients",
    doi: "10.3390/nu10111599",
    pmid: "30400151",
    tags: ["fisiopatología", "diagnóstico", "tratamiento", "revisión sistemática"],
    type: "Revisión comprensiva",
    keyPoints: [
      "Diferenciación entre maldigestión, malabsorción e intolerancia a la lactosa",
      "Manejo actual y perspectivas futuras para estas condiciones"
    ]
  },
  {
    authors: "Seidita A, et al.",
    year: 2023,
    title: "Fecal Calprotectin in Self-Reported Milk Intolerance: Not Only Lactose Intolerance",
    journal: "Nutrients",
    doi: "10.3390/nu15041048",
    tags: ["fisiopatología", "diagnóstico", "biomarcadores"],
    type: "Estudio clínico",
    keyPoints: [
      "Estudio de calprotectina fecal en pacientes con intolerancia a la leche auto-reportada",
      "Más del 50% de los pacientes mostraron valores de calprotectina fecal por encima del límite normal",
      "Evidencia de inflamación intestinal en pacientes considerados tolerantes a la lactosa"
    ]
  },
  {
    authors: "Şimşek I",
    year: 2011,
    title: "Irritable bowel syndrome and other functional gastrointestinal disorders",
    journal: "Journal of Clinical Gastroenterology",
    doi: "10.1097/MCG.0b013e31821fbd6f",
    tags: ["fisiopatología", "comorbilidades"],
    type: "Revisión",
    keyPoints: [
      "Interrelación entre trastornos gastrointestinales funcionales e intolerancia a la lactosa",
      "Papel de la interacción entre células inmunes intestinales y alteraciones en motilidad",
      "Importancia de la actividad de citocinas e inflamación en la fisiopatología"
    ]
  },
  // Microbiota y Fermentación Bacteriana
  {
    authors: "Carbonero F, et al.",
    year: 2012,
    title: "Contributions of the microbial hydrogen economy to colonic homeostasis",
    journal: "Nature Reviews Gastroenterology & Hepatology",
    doi: "10.1038/nrgastro.2012.85",
    tags: ["microbioma", "fermentación bacteriana", "fisiopatología"],
    type: "Revisión",
    keyPoints: [
      "Caracterización de gases colónicos como productos de la interacción entre bacterias fermentativas",
      "Relación entre niveles de H₂, metano y sulfuro de hidrógeno con trastornos intestinales",
      "Papel del H₂ como antioxidante y protector de la mucosa colónica"
    ]
  },
  {
    authors: "Perdijk O, et al.",
    year: 2019,
    title: "Sialyllactose and Galactooligosaccharides Promote Epithelial Barrier Functioning and Distinctly Modulate Microbiota Composition and Short Chain Fatty Acid Production",
    journal: "Frontiers in Immunology",
    doi: "10.3389/fimmu.2019.00094",
    tags: ["microbioma", "prebióticos", "barrera intestinal"],
    type: "Estudio experimental",
    keyPoints: [
      "Efectos de los oligosacáridos en el funcionamiento de la barrera epitelial intestinal",
      "Modulación de la composición microbiana y producción de ácidos grasos de cadena corta",
      "Impacto en la comunicación inmune-epitelio"
    ]
  },
  {
    authors: "Xue H, et al.",
    year: 2024,
    title: "Gut microbiome and serum metabolome alterations associated with lactose intolerance (LI): a case‐control study and paired‐sample study based on the American Gut Project (AGP)",
    journal: "mSystems",
    doi: "10.1128/msystems.00686-23",
    tags: ["microbioma", "metabolómica", "estudio caso-control"],
    type: "Estudio observacional",
    keyPoints: [
      "Alteraciones en microbioma intestinal y metaboloma sérico",
      "Estudio caso-control basado en el American Gut Project"
    ]
  },
  {
    authors: "Shen J, et al.",
    year: 2025,
    title: "Rotavirus regulates the gut microhabitat immune response through the IL-22/pSTAT3/RegIIIγ signaling pathway, leading to lactose intolerance",
    journal: "International immunopharmacology",
    doi: "10.1016/j.intimp.2025.114275",
    tags: ["microbioma", "inmunología", "fisiopatología"],
    type: "Estudio experimental",
    keyPoints: [
      "Rol del rotavirus en la regulación de la respuesta inmune del microhábitat intestinal",
      "Vía de señalización IL-22/pSTAT3/RegIIIγ en intolerancia a la lactosa"
    ]
  },
  {
    authors: "Cohen A, et al.",
    year: 2024,
    title: "The intestinal microbiome, but not clinical aspects of inflammatory bowel disease, is impacted by lactose malabsorption compared to lactose digestion in children",
    journal: "The American journal of clinical nutrition",
    doi: "10.1016/j.ajcnut.2023.12.029",
    tags: ["microbioma", "pediatría", "enfermedad inflamatoria intestinal"],
    type: "Estudio clínico",
    population: "Pediátrica",
    keyPoints: [
      "Impacto de la malabsorción de lactosa en el microbioma intestinal en niños",
      "Comparación entre malabsorción de lactosa y digestión normal"
    ]
  },
  {
    authors: "Heianza Y, et al.",
    year: 2018,
    title: "Gut-microbiome related LCT genotype and 2-year changes in body composition and fat distribution: the POUNDS Lost Trial",
    journal: "International journal of obesity",
    doi: "10.1038/s41366-018-0048-7",
    tags: ["microbioma", "genética", "composición corporal"],
    type: "Estudio longitudinal",
    keyPoints: [
      "Relación entre genotipo LCT y microbioma intestinal",
      "Cambios en la composición corporal durante 2 años"
    ]
  },
  {
    authors: "Maaskant A, et al.",
    year: 2024,
    title: "Microbiome signature suggestive of lactose-intolerance in rhesus macaques (Macaca mulatta) with intermittent chronic diarrhea",
    journal: "Animal microbiome",
    doi: "10.1186/s42523-024-00269-9",
    tags: ["microbioma", "modelo animal", "diarrea crónica"],
    type: "Estudio experimental",
    keyPoints: [
      "Firma microbiana en macacos rhesus con intolerancia a la lactosa",
      "Modelo animal para estudio de diarrea crónica intermitente"
    ]
  },
  // Aspectos Epigenéticos
  {
    authors: "Anatskaya OV, et al.",
    year: 2023,
    title: "Long-Term Transcriptomic Changes and Cardiomyocyte Hyperpolyploidy after Lactose Intolerance in Neonatal Rats",
    journal: "International Journal of Molecular Sciences",
    doi: "10.3390/ijms24087063",
    tags: ["epigenética", "fisiopatología"],
    type: "Estudio experimental",
    keyPoints: [
      "Modelo de intolerancia a la lactosa neonatal en ratas",
      "Alteraciones epigenéticas adquiridas en período neonatal",
      "Extensos reordenamientos transcriptómicos asociados con intolerancia a la lactosa"
    ]
  },
  {
    authors: "Carlberg C",
    year: 2023,
    title: "Nutrigenomics in the context of evolution",
    journal: "Redox Biology",
    doi: "10.1016/j.redox.2023.102656",
    tags: ["epigenética", "evolución", "nutrigenómica"],
    type: "Revisión",
    keyPoints: [
      "Interacción entre nutrientes y genoma humano en contexto evolutivo",
      "Presiones evolutivas relacionadas con la transición de cazadores-recolectores a agricultores",
      "Programación de epigenomas en fases pre y posnatales de la vida"
    ]
  },
  {
    authors: "Yang J, et al.",
    year: 2020,
    title: "The Chromosome-Scale Genome of Melon Dissects Genetic Architecture of Important Agronomic Traits",
    journal: "iScience",
    doi: "10.1016/j.isci.2020.101422",
    tags: ["epigenética", "genómica", "metabolismo"],
    type: "Estudio genómico",
    keyPoints: [
      "Identificación de genes relacionados con el metabolismo de oligosacáridos",
      "Análisis de la asociación entre transcriptoma y patrones de metilación del ADN",
      "Regulación epigenética de la acumulación de sacarosa"
    ]
  },
  // Interacciones Gen-Ambiente
  {
    authors: "Zhang Z, et al.",
    year: 2021,
    title: "Genetically Predicted Milk Intake and Risk of Neurodegenerative Diseases",
    journal: "Nutrients",
    doi: "10.3390/nu13082893",
    tags: ["genética", "nutrición", "enfermedades neurodegenerativas"],
    type: "Estudio de aleatorización mendeliana",
    keyPoints: [
      "Asociación causal entre ingesta de leche y enfermedades neurodegenerativas",
      "Uso de polimorfismos del gen LCT como instrumentos genéticos"
    ]
  },
  {
    authors: "Vissers LET, et al.",
    year: 2019,
    title: "Dairy Product Intake and Risk of Type 2 Diabetes in EPIC-InterAct: A Mendelian Randomization Study",
    journal: "Diabetes Care",
    doi: "10.2337/dc18-2034",
    tags: ["genética", "nutrición", "diabetes"],
    type: "Estudio de aleatorización mendeliana",
    keyPoints: [
      "Asociación entre ingesta de productos lácteos y diabetes tipo 2",
      "Uso de variantes genéticas relacionadas con la persistencia de lactasa"
    ]
  },
  // Aproximaciones Terapéuticas
  {
    authors: "Deng L, et al.",
    year: 2024,
    title: "Effects of Konjac Glucomannan and Its Oligosaccharides on Improvement of Lactose Intolerance as Gut Prebiotics",
    journal: "ACS Omega",
    doi: "10.1021/acsomega.4c02768",
    tags: ["tratamiento", "prebióticos", "microbioma"],
    type: "Estudio experimental",
    keyPoints: [
      "Evaluación del potencial prebiótico del glucomanano de konjac",
      "Estudios in vitro e in vivo sobre el efecto en la fermentación colónica",
      "Aumento de bacterias beneficiosas tras la administración"
    ]
  },
  {
    authors: "Angima G, et al.",
    year: 2024,
    title: "Prebiotic Strategies to Manage Lactose Intolerance Symptoms",
    journal: "Nutrients",
    doi: "10.3390/nu16071002",
    tags: ["tratamiento", "prebióticos", "manejo"],
    type: "Revisión",
    keyPoints: [
      "Revisión de estrategias prebióticas para manejar síntomas",
      "Análisis del potencial de galactooligosacáridos (GOS)",
      "Efecto del consumo regular de pequeñas dosis de lactosa como estrategia prebiótica"
    ]
  },
  {
    authors: "Sa'aid N & Tan JS",
    year: 2025,
    title: "From probiotic fermentation to functional drinks: a review on fruit juices with lactic acid bacteria and prebiotics",
    journal: "Preparative Biochemistry & Biotechnology",
    doi: "10.1080/10826068.2025.2467441",
    tags: ["tratamiento", "probióticos", "prebióticos", "alimentos funcionales"],
    type: "Revisión",
    keyPoints: [
      "Bebidas no lácteas funcionales como alternativas",
      "Incorporación de prebióticos en jugos de frutas",
      "Sinergia entre prebióticos y bacterias ácido lácticas"
    ]
  },
  {
    authors: "Oliveira LS, et al.",
    year: 2022,
    title: "The use of probiotics and prebiotics can enable the ingestion of dairy products by lactose intolerant individuals",
    journal: "Clinical Nutrition",
    doi: "10.1016/j.clnu.2022.10.003",
    tags: ["tratamiento", "probióticos", "prebióticos", "revisión sistemática"],
    type: "Revisión sistemática",
    keyPoints: [
      "Eficacia clínica de suplementos probióticos y prebióticos",
      "Modificación de la microbiota para mejorar tolerancia",
      "Recomendaciones para aplicación clínica"
    ]
  },
  {
    authors: "Mysore Saiprasad S, et al.",
    year: 2023,
    title: "A Narrative Review of Human Clinical Trials to Improve Lactose Digestion and Tolerance by Feeding Bifidobacteria or Galacto-Oligosacharides",
    journal: "Nutrients",
    doi: "10.3390/nu15163559",
    tags: ["tratamiento", "probióticos", "prebióticos", "revisión"],
    type: "Revisión narrativa",
    keyPoints: [
      "Eficacia de diferentes cepas de Bifidobacteria",
      "Evaluación de galactooligosacáridos como prebióticos",
      "Mecanismos de acción y consideraciones clínicas"
    ]
  },
  {
    authors: "He M, et al.",
    year: 1999,
    title: "Effect of exogenous lactase on the absorption of lactose and its intolerance symptoms",
    journal: "Wei Sheng Yan Jiu = Journal of Hygiene Research",
    tags: ["tratamiento", "enzimas", "eficacia clínica"],
    type: "Estudio clínico",
    keyPoints: [
      "Efecto de lactasa exógena en malabsorción de lactosa",
      "Reducción significativa en excreción anormal de H₂",
      "Disminución marcada en síntomas de intolerancia"
    ]
  },
  // Suplementación Enzimática
  {
    authors: "Fraile-Gutiérrez I, et al.",
    year: 2024,
    title: "Chitosan-based oral hydrogel formulations of β-galactosidase to improve enzyme supplementation therapy for lactose intolerance",
    journal: "International Journal of Biological Macromolecules",
    doi: "10.1016/j.ijbiomac.2023.127755",
    tags: ["tratamiento", "enzimas", "innovación terapéutica"],
    type: "Estudio experimental",
    keyPoints: [
      "Desarrollo de hidrogeles híbridos de quitosano-PEG como formulación oral",
      "Protección de la enzima en medio gástrico",
      "Modificación de superficie para aumentar adhesión intestinal"
    ]
  },
  {
    authors: "Turner KM, et al.",
    year: 2011,
    title: "Stabilization of a supplemental digestive enzyme by post-translational engineering using chemically-activated polyethylene glycol",
    journal: "Biotechnology Letters",
    doi: "10.1007/s10529-010-0474-7",
    tags: ["tratamiento", "enzimas", "innovación terapéutica"],
    type: "Estudio experimental",
    keyPoints: [
      "Primera aplicación de PEGilación para estabilizar una enzima digestiva",
      "La conjugación con PEG ramificado incrementa la actividad a pH bajo",
      "Protección significativa contra pepsina y componentes proteolíticos"
    ]
  }
];

export default references; 