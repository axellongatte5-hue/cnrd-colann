import CampPageLayout from '../components/CampPageLayout';

const buchenwaldData = {
  dates: "1937 — 1945",
  title: "Buchenwald",
  subtitle: "L'un des plus grands camps de concentration nazis, sur les hauteurs de Weimar, au cœur de l'Allemagne.",
  
  introTitle: "Sur la colline de l'Ettersberg",
  introText: [
    "Buchenwald fut établi en 1937 sur la colline de l'Ettersberg, près de Weimar, ville symbole de la culture allemande. Cette proximité entre la barbarie et la culture illustre tragiquement la dualité de l'Allemagne nazie.",
    "Plus de 250 000 personnes furent internées à Buchenwald. Parmi elles, des résistants de toute l'Europe, des Juifs, des prisonniers politiques, des homosexuels et des « asociaux » selon la terminologie nazie.",
  ],
  
  timeline: [
    {
      date: "Juillet 1937",
      title: "Ouverture du camp",
      description: "Les premiers prisonniers arrivent pour construire le camp. Buchenwald devient rapidement l'un des plus grands camps du Reich.",
    },
    {
      date: "Novembre 1938",
      title: "Nuit de Cristal",
      description: "Après les pogroms, près de 10 000 Juifs sont internés à Buchenwald dans des conditions atroces.",
    },
    {
      date: "1943",
      title: "Travail forcé industriel",
      description: "Le camp devient un centre majeur de production d'armement. Des milliers de détenus meurent d'épuisement.",
    },
    {
      date: "Avril 1945",
      title: "Auto-libération",
      description: "Le 11 avril, les détenus du comité clandestin international se soulèvent et prennent le contrôle du camp avant l'arrivée des Américains.",
    },
  ],
  
  structureTitle: "Organisation du camp",
  structureSubtitle: "Structure",
  structureText: [
    "Buchenwald était organisé selon le modèle concentrationnaire nazi, avec une hiérarchie stricte parmi les détenus et un système de terreur permanent.",
  ],
  structureBlocks: [
    {
      title: "Le camp principal",
      text: "Zone d'hébergement des détenus avec les baraquements, la place d'appel et les installations administratives SS.",
    },
    {
      title: "Le Petit Camp",
      text: "Zone de quarantaine et d'hébergement des détenus les plus faibles. Les conditions y étaient particulièrement mortelles.",
    },
    {
      title: "Les kommandos extérieurs",
      text: "Plus de 130 sous-camps fournissaient une main-d'œuvre esclave à l'industrie de guerre allemande.",
    },
  ],
  
  processTitle: "Le travail forcé",
  processSubtitle: "L'extermination par le travail",
  processText: [
    "À Buchenwald, les nazis appliquèrent systématiquement la politique d'« extermination par le travail ». Les détenus étaient exploités jusqu'à l'épuisement total.",
  ],
  processList: [
    "Journées de travail de 12 heures minimum dans les carrières et les usines.",
    "Rations alimentaires volontairement insuffisantes pour survivre.",
    "Punitions corporelles et exécutions arbitraires.",
    "Expériences médicales sur les détenus.",
    "Les malades et les faibles étaient régulièrement « sélectionnés » pour l'élimination.",
  ],
  
  conditionsTitle: "Conditions de vie",
  conditionsSubtitle: "L'enfer quotidien",
  conditionsCards: [
    {
      title: "Les appels",
      subtitle: "Debout pendant des heures",
      text: "Matin et soir, les détenus devaient rester immobiles sur la place d'appel, parfois pendant des heures, par tous les temps.",
    },
    {
      title: "La faim",
      subtitle: "La mort lente",
      text: "Les rations étaient calculées pour affaiblir progressivement. Les « Muselmanners » (squelettes vivants) étaient condamnés.",
    },
    {
      title: "Les hiérarchies",
      subtitle: "Diviser pour régner",
      text: "Les nazis exploitaient les différences entre groupes de détenus. Les triangles de couleur marquaient les catégories de prisonniers.",
    },
    {
      title: "La résistance",
      subtitle: "L'espoir secret",
      text: "Un comité clandestin international organisa la résistance, cacha des enfants et prépara la libération du camp.",
    },
  ],
  
  stats: [
    { value: "280 000", label: "Détenus", description: "Internés entre 1937 et 1945" },
    { value: "56 000", label: "Morts", description: "Dans le camp et ses kommandos" },
    { value: "21 000", label: "Libérés", description: "Le 11 avril 1945" },
  ],
  statsSecondary: [
    { value: "130+", label: "Kommandos" },
    { value: "50+", label: "Nationalités" },
    { value: "8", label: "Années" },
    { value: "904", label: "Enfants libérés" },
  ],
  
  deportes: [
    {
      nom: "Jorge Semprún",
      date: "Janvier 1944",
      statut: "Survécu",
      details: "Résistant espagnol, écrivain et homme politique. Son œuvre littéraire témoigne de l'expérience concentrationnaire.",
    },
    {
      nom: "Elie Wiesel",
      date: "Janvier 1945",
      statut: "Survécu",
      details: "Transféré d'Auschwitz lors des marches de la mort. Prix Nobel de la paix 1986, auteur de « La Nuit ».",
    },
  ],
  
  liberationTitle: "L'auto-libération",
  liberationText: [
    "Le 11 avril 1945, alors que les SS commençaient l'évacuation du camp, le comité clandestin international déclencha l'insurrection. Les détenus prirent le contrôle du camp.",
    "C'est l'un des rares cas d'auto-libération dans l'histoire des camps nazis. Les troupes américaines arrivèrent quelques heures plus tard.",
    "Les survivants prononcèrent le Serment de Buchenwald : « La destruction du nazisme avec ses racines est notre mot d'ordre. La construction d'un monde nouveau de paix et de liberté est notre idéal. »",
  ],
  
  memorialQuote: "La destruction du nazisme avec ses racines est notre mot d'ordre.",
  memorialAuthor: "Serment de Buchenwald, 19 avril 1945",
  memorialStat: "56 000",
  memorialStatLabel: "morts à Buchenwald",
  
  otherCamps: [
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Compiègne", country: "France", path: "/camp/compiegne" },
  ],
};

export default function Buchenwald() {
  return <CampPageLayout {...buchenwaldData} />;
}
