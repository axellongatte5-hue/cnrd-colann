import CampPageLayout from '../components/CampPageLayout';

const compiegneData = {
  dates: "1941 — 1944",
  title: "Compiègne",
  subtitle: "Camp de Royallieu. Principal camp de transit en France pour les résistants et les prisonniers politiques.",
  
  introTitle: "L'antichambre de la déportation",
  introText: [
    "Le camp de Royallieu, à Compiègne, fut le principal centre de transit pour les résistants, prisonniers politiques et otages destinés à la déportation vers les camps nazis.",
    "Contrairement à Drancy réservé aux Juifs, Compiègne était le point de départ des convois de déportés politiques vers Buchenwald, Mauthausen, Dachau et d'autres camps de concentration.",
  ],
  
  timeline: [
    {
      date: "Juin 1941",
      title: "Ouverture du camp",
      description: "L'ancienne caserne de Royallieu devient le Frontstalag 122, camp d'internement allemand.",
    },
    {
      date: "Décembre 1941",
      title: "Premiers otages fusillés",
      description: "95 otages internés à Compiègne sont fusillés au Mont-Valérien en représailles à des attentats.",
    },
    {
      date: "Juillet 1942",
      title: "Premier convoi vers Auschwitz",
      description: "Le convoi du 6 juillet emporte 1 175 détenus vers Auschwitz. Seuls 119 survivront.",
    },
    {
      date: "Août 1944",
      title: "Dernier convoi",
      description: "Le 17 août, le dernier convoi quitte Compiègne. Le camp est libéré quelques jours plus tard.",
    },
  ],
  
  structureTitle: "Le camp de Royallieu",
  structureSubtitle: "Organisation",
  structureText: [
    "Installé dans une ancienne caserne militaire, le camp était divisé en plusieurs sections selon les catégories de détenus.",
  ],
  structureBlocks: [
    {
      title: "Le camp A",
      text: "Réservé aux prisonniers politiques français, résistants et otages. C'était le plus important des camps.",
    },
    {
      title: "Le camp B",
      text: "Destiné aux ressortissants britanniques et américains, traités selon les conventions de Genève.",
    },
    {
      title: "Le camp C",
      text: "Pour les Juifs avant leur transfert vers Drancy. Des femmes et enfants y furent également internés.",
    },
  ],
  
  processTitle: "Les convois",
  processSubtitle: "Vers les camps nazis",
  processText: [
    "De Compiègne partirent des dizaines de convois vers les camps de concentration allemands. Les détenus ignoraient leur destination.",
  ],
  processList: [
    "Environ 54 000 personnes furent déportées depuis Compiègne.",
    "Les convois partaient généralement de nuit, dans le secret.",
    "Les détenus voyageaient dans des wagons à bestiaux pendant plusieurs jours.",
    "Beaucoup mouraient pendant le transport, de soif, de faim ou d'asphyxie.",
    "Les destinations principales étaient Buchenwald, Mauthausen, Dachau et Auschwitz.",
  ],
  
  conditionsTitle: "L'internement",
  conditionsSubtitle: "La vie au camp",
  conditionsCards: [
    {
      title: "L'attente",
      subtitle: "L'angoisse des listes",
      text: "Les internés vivaient dans l'attente terrifiante de leur nom sur les listes de déportation.",
    },
    {
      title: "Les otages",
      subtitle: "Exécutions de représailles",
      text: "Des centaines d'otages furent fusillés en représailles aux actions de la Résistance.",
    },
    {
      title: "La solidarité",
      subtitle: "Résistance intérieure",
      text: "Les résistants organisèrent des réseaux d'entraide et maintinrent le moral malgré les conditions.",
    },
    {
      title: "Les évasions",
      subtitle: "Tentatives désespérées",
      text: "Quelques évasions réussirent, notamment grâce à des complicités extérieures et des tunnels.",
    },
  ],
  
  stats: [
    { value: "54 000", label: "Déportés", description: "Depuis Compiègne" },
    { value: "50 000", label: "Internés", description: "Passés par le camp" },
    { value: "1 000", label: "Fusillés", description: "Otages exécutés" },
  ],
  statsSecondary: [
    { value: "3", label: "Années" },
    { value: "100+", label: "Convois" },
    { value: "40%", label: "Non-retour" },
    { value: "28", label: "Nationalités" },
  ],
  
  deportes: [
    {
      nom: "Charlotte Delbo",
      date: "Janvier 1943",
      statut: "Survécu",
      details: "Résistante et écrivaine, déportée à Auschwitz puis Ravensbrück. Son œuvre témoigne de l'expérience concentrationnaire.",
    },
    {
      nom: "Robert Desnos",
      date: "Mars 1944",
      statut: "Décédé",
      details: "Poète surréaliste et résistant. Déporté à Buchenwald puis Theresienstadt où il mourut du typhus.",
    },
  ],
  
  liberationTitle: "La libération",
  liberationText: [
    "Le dernier convoi quitta Compiègne le 17 août 1944, emportant 1 250 détenus vers Buchenwald. Le camp fut libéré quelques jours plus tard.",
    "À la libération, le camp était presque vide. Les Allemands avaient accéléré les déportations dans les dernières semaines.",
    "Aujourd'hui, le Mémorial de l'Internement et de la Déportation de Compiègne occupe les lieux et perpétue la mémoire des victimes.",
  ],
  
  memorialQuote: "Nous partons vers l'inconnu. Gardez confiance. Nous reviendrons.",
  memorialAuthor: "Message d'un déporté de Compiègne, 1944",
  memorialStat: "54 000",
  memorialStatLabel: "déportés depuis Compiègne",
  
  otherCamps: [
    { name: "Drancy", country: "France", path: "/camp/drancy" },
    { name: "Auschwitz", country: "Pologne", path: "/camp/auschwitz" },
    { name: "Buchenwald", country: "Allemagne", path: "/camp/buchenwald" },
    { name: "Mauthausen", country: "Autriche", path: "/camp/mauthausen" },
    { name: "Ravensbrück", country: "Allemagne", path: "/camp/ravensbruck" },
    { name: "Neuengamme", country: "Allemagne", path: "/camp/neuengamme" },
  ],
};

export default function Compiegne() {
  return <CampPageLayout {...compiegneData} />;
}
