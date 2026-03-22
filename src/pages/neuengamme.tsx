import CampPageLayout from '../components/CampPageLayout';

const neuengammeData = {
  dates: "1938 — 1945",
  title: "Neuengamme",
  subtitle: "Le plus grand camp de concentration du nord-ouest de l'Allemagne, près de Hambourg.",
  
  introTitle: "Le camp de la briqueterie",
  introText: [
    "Neuengamme fut créé en 1938 comme sous-camp de Sachsenhausen, près de Hambourg. Il devint rapidement un camp principal avec plus de 80 kommandos répartis dans tout le nord de l'Allemagne.",
    "Les détenus travaillaient principalement dans la briqueterie du camp et pour l'industrie de guerre allemande. Plus de 42 000 personnes y périrent.",
  ],
  
  timeline: [
    {
      date: "Décembre 1938",
      title: "Création du camp",
      description: "Les premiers détenus arrivent de Sachsenhausen pour construire une briqueterie destinée aux projets architecturaux nazis.",
    },
    {
      date: "1940",
      title: "Camp principal",
      description: "Neuengamme devient un camp de concentration indépendant avec sa propre administration.",
    },
    {
      date: "1944",
      title: "Expansion maximale",
      description: "Le camp atteint son extension maximale avec plus de 80 kommandos extérieurs et des dizaines de milliers de détenus.",
    },
    {
      date: "Mai 1945",
      title: "Évacuation tragique",
      description: "Les détenus sont évacués vers les navires Cap Arcona et Thielbek, qui seront bombardés par la RAF. Plus de 7 000 morts.",
    },
  ],
  
  structureTitle: "Un vaste réseau",
  structureSubtitle: "Organisation",
  structureText: [
    "Neuengamme contrôlait un réseau de plus de 80 sous-camps à travers le nord de l'Allemagne, fournissant une main-d'œuvre esclave à l'industrie de guerre.",
  ],
  structureBlocks: [
    {
      title: "Le camp principal",
      text: "Situé dans les marais de l'Elbe, le camp abritait la briqueterie SS et les baraquements des détenus.",
    },
    {
      title: "La briqueterie",
      text: "Les détenus y travaillaient dans des conditions mortelles, extrayant l'argile et fabriquant des briques pour les projets nazis.",
    },
    {
      title: "Les kommandos",
      text: "Plus de 80 sous-camps fournissaient des travailleurs esclaves aux usines d'armement, chantiers navals et mines.",
    },
  ],
  
  processTitle: "Le travail forcé",
  processSubtitle: "L'esclavage moderne",
  processText: [
    "Les détenus de Neuengamme furent exploités jusqu'à l'épuisement pour l'effort de guerre nazi. Les conditions de travail étaient particulièrement mortelles.",
  ],
  processList: [
    "Travail dans la briqueterie, les usines et les chantiers navals.",
    "Construction de bunkers et d'installations souterraines.",
    "Journées de 12 heures minimum, sept jours sur sept.",
    "Rations alimentaires insuffisantes pour survivre.",
    "Les malades et épuisés étaient « sélectionnés » pour l'élimination.",
  ],
  
  conditionsTitle: "Les conditions de détention",
  conditionsSubtitle: "L'enfer du Nord",
  conditionsCards: [
    {
      title: "Le climat",
      subtitle: "Le froid mortel",
      text: "Les hivers rigoureux du nord de l'Allemagne tuaient les détenus affaiblis par la faim et le travail.",
    },
    {
      title: "Les maladies",
      subtitle: "Épidémies",
      text: "Typhus, tuberculose et dysenterie décimaient la population du camp. L'infirmerie était un mouroir.",
    },
    {
      title: "Les expériences",
      subtitle: "La tuberculose",
      text: "Des expériences médicales sur la tuberculose furent menées sur des détenus, notamment des enfants.",
    },
    {
      title: "Les exécutions",
      subtitle: "Terreur permanente",
      text: "Des exécutions régulières maintenaient un climat de terreur. Des résistants de toute l'Europe y furent assassinés.",
    },
  ],
  
  stats: [
    { value: "100 000", label: "Détenus", description: "Passés par le camp" },
    { value: "42 900", label: "Morts", description: "Dans le complexe" },
    { value: "7 000", label: "Noyés", description: "Tragédie du Cap Arcona" },
  ],
  statsSecondary: [
    { value: "86", label: "Kommandos" },
    { value: "28", label: "Nationalités" },
    { value: "7", label: "Années" },
    { value: "20", label: "Enfants (expériences)" },
  ],
  
  deportes: [
    {
      nom: "Jean Moulin",
      date: "(Non déporté)",
      statut: "Décédé",
      details: "Le chef de la Résistance française mourut lors de son transfert vers l'Allemagne en 1943, probablement vers Neuengamme.",
    },
    {
      nom: "Pierre Brossolette",
      date: "(Non déporté)",
      statut: "Décédé",
      details: "Le résistant se suicida pour ne pas parler sous la torture. Il était destiné à la déportation.",
    },
  ],
  
  liberationTitle: "La tragédie du Cap Arcona",
  liberationText: [
    "En avril 1945, les SS évacuèrent le camp vers la baie de Lübeck. Environ 9 000 détenus furent entassés sur les navires Cap Arcona, Thielbek et Athen.",
    "Le 3 mai 1945, la Royal Air Force, ignorant la présence des détenus, bombarda les navires. Plus de 7 000 personnes périrent noyées ou brûlées vives.",
    "C'est l'une des plus grandes catastrophes maritimes de l'histoire, et une tragédie terrible à quelques jours de la fin de la guerre.",
  ],
  
  memorialQuote: "Nous avons survécu pour témoigner. Notre devoir est de parler pour ceux qui ne sont jamais revenus.",
  memorialAuthor: "Survivant de Neuengamme",
  memorialStat: "42 900",
  memorialStatLabel: "victimes de Neuengamme",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Neuengamme() {
  return <CampPageLayout {...neuengammeData} />;
}
