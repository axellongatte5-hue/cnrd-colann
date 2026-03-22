import CampPageLayout from '../components/CampPageLayout';

const ravensbruckData = {
  dates: "1939 — 1945",
  title: "Ravensbrück",
  subtitle: "Le plus grand camp de concentration pour femmes du Troisième Reich, au nord de Berlin.",
  
  introTitle: "Le camp des femmes",
  introText: [
    "Ravensbrück fut le principal camp de concentration nazi réservé aux femmes. Situé à 80 km au nord de Berlin, il accueillit plus de 130 000 détenues de toute l'Europe.",
    "Les femmes y furent soumises au travail forcé, aux expériences médicales et à l'extermination. Ce fut aussi le seul camp où des femmes SS servirent comme gardiennes.",
  ],
  
  timeline: [
    {
      date: "Mai 1939",
      title: "Ouverture du camp",
      description: "Les premières détenues arrivent à Ravensbrück : des prisonnières politiques allemandes et des « asociales ».",
    },
    {
      date: "1942",
      title: "Expériences médicales",
      description: "Les médecins SS commencent des expériences sur les détenues : greffes osseuses, infections. Les victimes sont appelées « Lapins ».",
    },
    {
      date: "1944",
      title: "Chambre à gaz",
      description: "Une chambre à gaz est construite. Des milliers de femmes y seront assassinées dans les derniers mois du camp.",
    },
    {
      date: "Avril 1945",
      title: "Libération",
      description: "L'Armée rouge libère le camp le 30 avril. Des milliers de détenues avaient été évacuées lors des marches de la mort.",
    },
  ],
  
  structureTitle: "Organisation du camp",
  structureSubtitle: "Structure",
  structureText: [
    "Ravensbrück comprenait le camp principal pour femmes, un camp annexe pour hommes, et le camp de Uckermark pour les jeunes filles.",
  ],
  structureBlocks: [
    {
      title: "Le camp principal",
      text: "32 baraques pour les détenues, ateliers de travail, un bunker disciplinaire et le « Revier » (infirmerie), lieu de souffrances.",
    },
    {
      title: "Le Jugendlager",
      text: "Camp pour les jeunes filles considérées comme « délinquantes ». En 1945, il devint un camp d'extermination.",
    },
    {
      title: "Les ateliers Siemens",
      text: "Les détenues travaillaient pour l'industrie de guerre, notamment dans les usines Siemens adjacentes au camp.",
    },
  ],
  
  processTitle: "Les expériences médicales",
  processSubtitle: "La barbarie scientifique",
  processText: [
    "Ravensbrück fut le théâtre d'expériences médicales atroces menées sur des détenues polonaises. Les victimes furent surnommées « Lapins ».",
  ],
  processList: [
    "Greffes osseuses et musculaires sans anesthésie.",
    "Infections volontaires de blessures pour tester des traitements.",
    "Stérilisations forcées de femmes tziganes et juives.",
    "Expériences sur la régénération des os et des nerfs.",
    "La plupart des victimes restèrent invalides ou moururent.",
  ],
  
  conditionsTitle: "La vie quotidienne",
  conditionsSubtitle: "Conditions",
  conditionsCards: [
    {
      title: "Le travail forcé",
      subtitle: "Usure systématique",
      text: "Les détenues travaillaient 12 heures par jour dans les ateliers, souvent dans des conditions dangereuses.",
    },
    {
      title: "Les gardiennes SS",
      subtitle: "La cruauté féminine",
      text: "Les Aufseherinnen (surveillantes) étaient formées à Ravensbrück. Certaines, comme Irma Grese, devinrent tristement célèbres.",
    },
    {
      title: "Les sélections",
      subtitle: "L'élimination des faibles",
      text: "Les détenues malades ou épuisées étaient régulièrement sélectionnées pour le transport vers des centres d'euthanasie.",
    },
    {
      title: "La solidarité",
      subtitle: "L'entraide pour survivre",
      text: "Malgré la terreur, les détenues organisèrent une résistance et une solidarité qui permirent à certaines de survivre.",
    },
  ],
  
  stats: [
    { value: "130 000", label: "Détenues", description: "Femmes de toute l'Europe" },
    { value: "50 000", label: "Mortes", description: "Dans le camp" },
    { value: "20 000", label: "Hommes", description: "Dans le camp annexe" },
  ],
  statsSecondary: [
    { value: "40+", label: "Nationalités" },
    { value: "70+", label: "Kommandos" },
    { value: "74", label: "Lapins" },
    { value: "6", label: "Années" },
  ],
  
  deportes: [
    {
      nom: "Geneviève de Gaulle-Anthonioz",
      date: "Février 1944",
      statut: "Survécu",
      details: "Nièce du général de Gaulle, résistante. Devint présidente d'ATD Quart Monde et entra au Panthéon en 2015.",
    },
    {
      nom: "Germaine Tillion",
      date: "Octobre 1943",
      statut: "Survécu",
      details: "Ethnologue et résistante française. Écrivit une opérette satirique dans le camp. Entrée au Panthéon en 2015.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Dans les derniers mois, les SS intensifièrent l'extermination. La chambre à gaz fonctionna jour et nuit. Des milliers de femmes furent assassinées.",
    "En avril 1945, la Croix-Rouge suédoise évacua environ 7 500 détenues dans les « bus blancs » du comte Bernadotte.",
    "L'Armée rouge libéra le camp le 30 avril 1945. Elle trouva environ 3 500 détenues malades, abandonnées par les SS.",
  ],
  
  memorialQuote: "Nous les femmes de Ravensbrück, nous avons appris que l'être humain est capable du pire comme du meilleur.",
  memorialAuthor: "Germaine Tillion",
  memorialStat: "50 000",
  memorialStatLabel: "femmes mortes à Ravensbrück",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Ravensbruck() {
  return <CampPageLayout {...ravensbruckData} />;
}
