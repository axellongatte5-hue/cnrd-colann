import CampPageLayout from '../components/CampPageLayout';

const auschwitzData = {
  dates: "1940 — 1945",
  title: "Auschwitz",
  subtitle: "Le plus grand camp de concentration et d'extermination nazi. Un lieu de mémoire pour l'humanité.",
  
  introTitle: "Un symbole de l'horreur",
  introText: [
    "Auschwitz-Birkenau est devenu le symbole universel de la Shoah et de la barbarie nazie. Situé en Pologne occupée, ce complexe concentrationnaire fut le théâtre du plus grand génocide industrialisé de l'histoire.",
    "Entre 1940 et 1945, plus d'un million de personnes y furent assassinées, dont 90% de Juifs venus de toute l'Europe. Le camp incarne la mise en œuvre systématique de la « Solution finale ».",
  ],
  
  timeline: [
    {
      date: "Avril 1940",
      title: "Création du camp",
      description: "Auschwitz I est établi comme camp de concentration pour prisonniers politiques polonais. Le premier transport arrive le 14 juin 1940.",
    },
    {
      date: "Octobre 1941",
      title: "Construction de Birkenau",
      description: "Auschwitz II-Birkenau est construit pour devenir le principal centre d'extermination. Les premières chambres à gaz sont installées.",
    },
    {
      date: "Janvier 1942",
      title: "Conférence de Wannsee",
      description: "La « Solution finale » est officiellement organisée. Auschwitz devient le centre principal de l'extermination des Juifs d'Europe.",
    },
    {
      date: "Mai 1944",
      title: "Déportation des Juifs hongrois",
      description: "En 56 jours, 437 000 Juifs hongrois sont déportés à Auschwitz. La majorité est gazée dès l'arrivée.",
    },
    {
      date: "Janvier 1945",
      title: "Libération",
      description: "L'Armée rouge libère le camp le 27 janvier. Environ 7 000 survivants sont retrouvés. Cette date est devenue la Journée internationale de la mémoire de l'Holocauste.",
    },
  ],
  
  structureTitle: "Un complexe de la mort",
  structureSubtitle: "Organisation",
  structureText: [
    "Le complexe d'Auschwitz comprenait trois camps principaux et plus de 40 sous-camps. Cette organisation industrielle de la mort était unique dans l'histoire de l'humanité.",
  ],
  structureBlocks: [
    {
      title: "Auschwitz I — Le camp souche",
      text: "Premier camp établi, servant de centre administratif. Le tristement célèbre portail « Arbeit macht frei » marquait son entrée. Les premières expérimentations au Zyklon B y furent menées.",
    },
    {
      title: "Auschwitz II-Birkenau — Le centre d'extermination",
      text: "Le plus grand des camps, conçu spécifiquement pour l'extermination de masse. Quatre crématoriums avec chambres à gaz pouvaient assassiner jusqu'à 6 000 personnes par jour.",
    },
    {
      title: "Auschwitz III-Monowitz — Le camp de travail",
      text: "Camp de travail forcé au service de l'industrie allemande, notamment l'usine IG Farben. Les détenus y étaient littéralement travaillés jusqu'à la mort.",
    },
  ],
  
  processTitle: "La sélection",
  processSubtitle: "L'arrivée",
  processText: [
    "À leur arrivée sur la rampe de Birkenau, les déportés subissaient une « sélection » immédiate par les médecins SS. En quelques secondes, leur sort était décidé.",
  ],
  processList: [
    "Les convois arrivaient de toute l'Europe après des jours de voyage dans des wagons à bestiaux.",
    "Les familles étaient brutalement séparées sur le quai.",
    "Environ 75% des arrivants étaient envoyés directement aux chambres à gaz.",
    "Les « aptes au travail » recevaient un numéro tatoué sur l'avant-bras.",
    "Leurs effets personnels étaient triés au « Canada », le secteur de stockage.",
  ],
  
  conditionsTitle: "Conditions de détention",
  conditionsSubtitle: "La vie quotidienne",
  conditionsCards: [
    {
      title: "Les appels",
      subtitle: "Torture quotidienne",
      text: "Les détenus devaient se tenir debout pendant des heures, parfois toute la nuit, pour des appels interminables. Beaucoup mouraient d'épuisement ou de froid.",
    },
    {
      title: "Le travail forcé",
      subtitle: "Extermination par le travail",
      text: "Les journées de 11 heures de travail harassant, combinées à la malnutrition, tuaient les détenus en quelques semaines ou mois.",
    },
    {
      title: "Les expériences médicales",
      subtitle: "La barbarie scientifique",
      text: "Le Dr Mengele et d'autres médecins SS pratiquaient des expériences atroces sur les détenus, notamment sur les jumeaux et les personnes handicapées.",
    },
    {
      title: "Les Sonderkommandos",
      subtitle: "L'indicible",
      text: "Des détenus juifs étaient forcés de travailler dans les crématoriums. Ils étaient régulièrement assassinés pour effacer les traces.",
    },
  ],
  
  stats: [
    { value: "1,1M", label: "Victimes", description: "Dont 1 million de Juifs" },
    { value: "90%", label: "Juifs", description: "Parmi les victimes" },
    { value: "232 000", label: "Enfants", description: "Assassinés dans le camp" },
  ],
  statsSecondary: [
    { value: "1,3M", label: "Déportés" },
    { value: "4", label: "Crématoriums" },
    { value: "6 000", label: "Morts/jour" },
    { value: "7 000", label: "Survivants" },
  ],
  
  deportes: [
    {
      nom: "Primo Levi",
      date: "22 février 1944",
      statut: "Survécu",
      details: "Chimiste italien, déporté à Monowitz. Son témoignage « Si c'est un homme » est devenu un texte fondamental de la littérature de la Shoah.",
    },
    {
      nom: "Anne Frank",
      date: "3 septembre 1944",
      statut: "Décédée",
      details: "Transférée d'Auschwitz à Bergen-Belsen où elle mourut du typhus. Son journal est devenu le symbole du destin des enfants juifs.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le 27 janvier 1945, les troupes soviétiques de la 60e armée du 1er Front ukrainien libèrent le camp d'Auschwitz. Ils découvrent environ 7 000 survivants, dont 500 enfants.",
    "Les SS avaient évacué la majorité des détenus lors des « marches de la mort » quelques jours plus tôt. Des dizaines de milliers moururent d'épuisement ou furent abattus en chemin.",
    "Les soldats soviétiques découvrirent également les preuves du crime : 7 tonnes de cheveux humains, des milliers de chaussures d'enfants, et les ruines des chambres à gaz que les nazis avaient tenté de détruire.",
  ],
  
  memorialQuote: "Celui qui ne se souvient pas de l'histoire est condamné à la revivre.",
  memorialAuthor: "George Santayana",
  memorialStat: "1,1 million",
  memorialStatLabel: "de vies fauchées",
  
  otherCamps: [
    { name: "Birkenau", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Auschwitz() {
  return <CampPageLayout {...auschwitzData} />;
}

