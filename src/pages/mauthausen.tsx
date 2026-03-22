import CampPageLayout from '../components/CampPageLayout';

const mauthausenData = {
  dates: "1938 — 1945",
  title: "Mauthausen",
  subtitle: "Camp de catégorie III, le plus brutal du système concentrationnaire nazi, en Autriche.",
  
  introTitle: "L'escalier de la mort",
  introText: [
    "Mauthausen fut classé par les SS comme camp de catégorie III, réservé aux détenus considérés comme « irrécupérables ». C'était le camp le plus dur du système nazi.",
    "Construit près d'une carrière de granit, le camp est tristement célèbre pour son « escalier de la mort » : 186 marches que les détenus devaient gravir en portant des blocs de pierre de 25 à 50 kg.",
  ],
  
  timeline: [
    {
      date: "Août 1938",
      title: "Création du camp",
      description: "Après l'Anschluss, les premiers détenus arrivent pour construire le camp près de la carrière de Wiener-Graben.",
    },
    {
      date: "1939",
      title: "Camp de catégorie III",
      description: "Mauthausen est classé camp d'extermination par le travail. Les conditions y sont les plus dures du système nazi.",
    },
    {
      date: "1943",
      title: "Développement industriel",
      description: "Les tunnels souterrains de Gusen sont creusés pour la production d'armement. Des milliers de détenus y mourront.",
    },
    {
      date: "Mai 1945",
      title: "Libération",
      description: "Le 5 mai, les troupes américaines libèrent le camp. Ils découvrent des scènes d'horreur indescriptibles.",
    },
  ],
  
  structureTitle: "Un système de mort",
  structureSubtitle: "Organisation",
  structureText: [
    "Mauthausen contrôlait un vaste réseau de sous-camps à travers l'Autriche. Le complexe de Gusen était presque aussi meurtrier que le camp principal.",
  ],
  structureBlocks: [
    {
      title: "Le camp principal",
      text: "Situé sur un plateau dominant le Danube, entouré de murs de granit. L'entrée fortifiée et les tours de guet en faisaient une forteresse.",
    },
    {
      title: "La carrière de Wiener-Graben",
      text: "Les détenus extrayaient le granit dans des conditions mortelles. L'escalier de la mort reliait la carrière au camp.",
    },
    {
      title: "Les tunnels de Gusen",
      text: "Vastes galeries souterraines où des milliers de détenus travaillaient et mouraient pour l'industrie de guerre nazie.",
    },
  ],
  
  processTitle: "L'extermination",
  processSubtitle: "Méthodes",
  processText: [
    "À Mauthausen, les SS développèrent des méthodes particulièrement cruelles pour éliminer les détenus, souvent présentées comme des « accidents ».",
  ],
  processList: [
    "Précipitation depuis le haut de la carrière (le « mur des parachutistes »).",
    "Épuisement dans les escaliers sous le poids des blocs de granit.",
    "Chambre à gaz et camions à gaz.",
    "Exécutions par balles et pendaisons.",
    "Expériences médicales mortelles.",
    "Noyades dans les bassins du camp.",
  ],
  
  conditionsTitle: "La terreur quotidienne",
  conditionsSubtitle: "Conditions",
  conditionsCards: [
    {
      title: "Le travail de la carrière",
      subtitle: "L'escalier de la mort",
      text: "186 marches irrégulières à gravir en portant des blocs de granit. Une chute entraînait souvent la mort de plusieurs détenus.",
    },
    {
      title: "Le froid",
      subtitle: "L'hiver autrichien",
      text: "Les hivers rigoureux à plus de 400 mètres d'altitude tuaient les détenus affaiblis par malnutrition.",
    },
    {
      title: "Les SS de Mauthausen",
      subtitle: "Sadisme organisé",
      text: "Les gardes SS de Mauthausen étaient réputés pour leur cruauté exceptionnelle, même selon les standards nazis.",
    },
    {
      title: "Les « Muselmanners »",
      subtitle: "Les condamnés",
      text: "Les détenus arrivés au stade d'épuisement total étaient systématiquement éliminés.",
    },
  ],
  
  stats: [
    { value: "190 000", label: "Détenus", description: "Passés par le camp" },
    { value: "90 000", label: "Morts", description: "Dans le complexe" },
    { value: "47%", label: "Mortalité", description: "Taux effroyable" },
  ],
  statsSecondary: [
    { value: "49", label: "Sous-camps" },
    { value: "186", label: "Marches" },
    { value: "30+", label: "Nationalités" },
    { value: "7", label: "Années" },
  ],
  
  deportes: [
    {
      nom: "Francisco Boix",
      date: "1941",
      statut: "Survécu",
      details: "Photographe espagnol qui réussit à sauver et cacher des milliers de photos documentant les atrocités. Témoin clé à Nuremberg.",
    },
    {
      nom: "Simon Wiesenthal",
      date: "1945",
      statut: "Survécu",
      details: "Transféré à Mauthausen en janvier 1945. Devint après-guerre le plus célèbre chasseur de nazis.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le 5 mai 1945, les troupes américaines de la 11e division blindée libèrent Mauthausen. Ils découvrent environ 16 000 survivants dans un état de délabrement extrême.",
    "Les photographies prises par les libérateurs constituent un témoignage accablant des crimes nazis. Certaines furent utilisées lors des procès de Nuremberg.",
    "Le camp de Gusen avait été libéré deux jours plus tôt. Au total, près de 40 000 détenus furent libérés dans le complexe de Mauthausen.",
  ],
  
  memorialQuote: "Passant, va dire à Sparte que nous sommes morts ici en obéissant à ses lois.",
  memorialAuthor: "Inscription sur le monument espagnol de Mauthausen",
  memorialStat: "90 000",
  memorialStatLabel: "victimes à Mauthausen",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Mauthausen() {
  return <CampPageLayout {...mauthausenData} />;
}
