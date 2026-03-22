import CampPageLayout from '../components/CampPageLayout';

const drancyData = {
  dates: "1941 — 1944",
  title: "Drancy",
  subtitle: "Principal camp d'internement et de transit français. L'antichambre de la mort pour les Juifs de France.",
  
  introTitle: "La Cité de la Muette",
  introText: [
    "Le camp de Drancy fut installé dans un ensemble d'immeubles HLM inachevés de la Cité de la Muette, en banlieue parisienne. De 1941 à 1944, il servit de principal centre d'internement et de transit pour les Juifs de France.",
    "Plus de 67 000 Juifs passèrent par Drancy avant d'être déportés vers les camps d'extermination nazis, principalement Auschwitz-Birkenau. Moins de 2 000 revinrent.",
  ],
  
  timeline: [
    {
      date: "Août 1941",
      title: "Ouverture du camp",
      description: "Après la rafle du 20 août, Drancy devient camp d'internement pour Juifs. Les conditions sont déjà catastrophiques.",
    },
    {
      date: "Juillet 1942",
      title: "Rafle du Vel d'Hiv",
      description: "Les 16 et 17 juillet, 13 152 Juifs sont arrêtés à Paris. Des milliers sont envoyés à Drancy, dont 4 115 enfants.",
    },
    {
      date: "Juillet 1943",
      title: "Prise en main par les SS",
      description: "Aloïs Brunner prend le commandement du camp. La répression s'intensifie, les déportations s'accélèrent.",
    },
    {
      date: "Août 1944",
      title: "Libération",
      description: "Le 17 août, le dernier convoi part pour Buchenwald. Le camp est libéré le 18 août par la Résistance.",
    },
  ],
  
  structureTitle: "Un camp improvisé",
  structureSubtitle: "Organisation",
  structureText: [
    "Drancy n'était pas conçu comme un camp. Les bâtiments en U de la Cité de la Muette offraient des conditions de détention inhumaines.",
  ],
  structureBlocks: [
    {
      title: "Les bâtiments en U",
      text: "Cinq étages sans ascenseur, fenêtres sans vitres, pas de chauffage. Les internés dormaient sur des paillasses à même le sol.",
    },
    {
      title: "La cour centrale",
      text: "Espace de rassemblement pour les appels et les départs en déportation. Lieu d'attente angoissée des convois.",
    },
    {
      title: "L'administration",
      text: "Initialement gérée par les Français, puis par les SS. Fichage méticuleux de tous les internés.",
    },
  ],
  
  processTitle: "Les convois",
  processSubtitle: "La déportation",
  processText: [
    "De Drancy partirent 64 convois de déportation vers les camps de la mort. La plupart des déportés ignoraient leur destination finale.",
  ],
  processList: [
    "Convois de 1 000 personnes en moyenne dans des wagons à bestiaux.",
    "Voyage de trois jours sans eau, nourriture ni sanitaires.",
    "Séparation brutale des familles au moment du départ.",
    "Les enfants furent souvent déportés seuls après l'arrestation de leurs parents.",
    "À l'arrivée à Auschwitz, 70% étaient gazés immédiatement.",
  ],
  
  conditionsTitle: "La vie à Drancy",
  conditionsSubtitle: "L'internement",
  conditionsCards: [
    {
      title: "La faim",
      subtitle: "Rations de famine",
      text: "Les premiers mois, les rations étaient de 900 calories par jour. Plus de 40 personnes moururent de faim en 1941.",
    },
    {
      title: "L'attente",
      subtitle: "L'angoisse permanente",
      text: "Les internés vivaient dans la terreur des listes de déportation, affichées sans préavis.",
    },
    {
      title: "Les enfants",
      subtitle: "L'innocence brisée",
      text: "Des milliers d'enfants passèrent par Drancy, souvent seuls. Leurs dessins témoignent de l'horreur vécue.",
    },
    {
      title: "Les exemptions",
      subtitle: "Faux espoirs",
      text: "Certains croyaient échapper à la déportation grâce à leur statut. Presque tous furent finalement déportés.",
    },
  ],
  
  stats: [
    { value: "67 400", label: "Internés", description: "Passés par Drancy" },
    { value: "63 000", label: "Déportés", description: "Vers les camps de la mort" },
    { value: "61", label: "Convois", description: "Vers Auschwitz" },
  ],
  statsSecondary: [
    { value: "4 000+", label: "Enfants" },
    { value: "3", label: "Années" },
    { value: "2 000", label: "Survivants" },
    { value: "3%", label: "Taux de retour" },
  ],
  
  deportes: [
    {
      nom: "Max Jacob",
      date: "24 février 1944",
      statut: "Décédé",
      details: "Poète et peintre français, ami de Picasso. Mort d'une pneumonie à Drancy quelques jours avant sa déportation prévue.",
    },
    {
      nom: "Tristan Bernard",
      date: "Octobre 1943",
      statut: "Libéré",
      details: "Écrivain et dramaturge célèbre. Libéré grâce à des interventions, il mourut peu après la guerre.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le 17 août 1944, le dernier convoi quitte Drancy pour Buchenwald avec 51 détenus. Le lendemain, des résistants et la Croix-Rouge libèrent le camp.",
    "Ils trouvent environ 1 500 internés, dont beaucoup de malades. Parmi eux, des enfants qui avaient été cachés dans le camp.",
    "Le commandant SS Aloïs Brunner avait fui Paris. Il ne fut jamais jugé et mourut probablement en Syrie.",
  ],
  
  memorialQuote: "Je vous fais une dernière fois mes adieux, peut-être éternels, et vous embrasse de tout mon cœur.",
  memorialAuthor: "Lettre d'un déporté de Drancy, 1942",
  memorialStat: "63 000",
  memorialStatLabel: "déportés depuis Drancy",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
  ],
};

export default function Drancy() {
  return <CampPageLayout {...drancyData} />;
}
