// src/data/deportees.js
// Données des déportés et des camps

export const deportees = [
  {
    id: "feigelson",
    name: "Raphaël Feigelson",
    dates: "1926 - 2021",
    photo: "",
    summary: "Résistant à 14 ans, déporté à Auschwitz, rescapé et témoin",
    description: "Raphaël Feigelson naît le 17 février 1926 à Paris dans une famille juive française. À seulement 14 ans, il refuse la défaite de 1940 et s'engage immédiatement dans la Résistance.",
    path: [
      {
        id: "feigelson-toulouse",
        label: "Arrestation",
        location: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "14 mai 1944",
        type: "origin",
        description: "Arrêté à Toulouse. Torturé par la Milice et la Gestapo."
      },
      {
        id: "feigelson-compiegne",
        label: "Transit",
        location: "Compiègne (Royallieu)",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        type: "transit",
        description: "Camp de transit vers les camps de concentration."
      },
      {
        id: "feigelson-drancy",
        label: "Transit",
        location: "Drancy",
        lat: 48.9172,
        lng: 2.4513,
        date: "Juillet 1944",
        type: "transit",
        description: "Camp d'internement et de transit. Attente de la déportation."
      },
      {
        id: "feigelson-auschwitz",
        label: "Déportation",
        location: "Auschwitz-Birkenau",
        lat: 50.0343,
        lng: 19.1784,
        date: "31 juillet 1944",
        type: "camp",
        description: "Convoi 77. Devient matricule B-3747. 80% des déportés envoyés directement aux chambres à gaz."
      }
    ],
    color: "#dc2626",
    campId: "auschwitz",
    fate: "Évadé d'Auschwitz le 22 janvier 1945"
  },
  {
    id: "nieto",
    name: "Jaime Nieto López",
    dates: "1913 - 1951",
    photo: "",
    summary: "Résistant espagnol, déporté à Buchenwald, délégué des Espagnols",
    description: "Membre du Partido Comunista de España (PCE), engagé dans l'Union Nacional Española (UNE) et la résistance dans le Sud-Ouest de la France.",
    path: [
      {
        id: "nieto-albacete",
        label: "Naissance",
        location: "Albacete, Espagne",
        lat: 38.9942,
        lng: -1.8585,
        date: "14 août 1913",
        type: "origin",
        description: "Naissance à Albacete, Espagne. Membre du PCE."
      },
      {
        id: "nieto-toulouse",
        label: "Arrestation",
        location: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "Septembre 1942",
        type: "transit",
        description: "Arrêté sous le faux nom de José Matéos Martinez."
      },
      {
        id: "nieto-buchenwald",
        label: "Déportation",
        location: "Buchenwald",
        lat: 51.0217,
        lng: 11.2486,
        date: "31 juillet 1944",
        type: "camp",
        description: "Matricule n°69237. Délégué des Espagnols au comité international de Buchenwald."
      }
    ],
    color: "#f59e0b",
    campId: "buchenwald",
    fate: "Libéré en 1945, disparu en 1951 après l'opération Bolero-Paprika"
  },
  {
    id: "bouteille",
    name: "Robert Bouteille",
    dates: "1904 - ?",
    photo: "",
    summary: "Professeur de philosophie, résistant, déporté à Buchenwald",
    description: "Fils de Désiré Bouteille, ancien député. Engagé dans le réseau Buckmaster (SOE britannique), participant à la circulation de faux papiers.",
    path: [
      {
        id: "bouteille-auchy",
        label: "Naissance",
        location: "Auchy-la-Montagne",
        lat: 49.5333,
        lng: 2.1000,
        date: "1904",
        type: "origin",
        description: "Naissance à Auchy-la-Montagne."
      },
      {
        id: "bouteille-arrestation",
        label: "Arrestation",
        location: "France",
        lat: 48.8566,
        lng: 2.3522,
        date: "Novembre 1943",
        type: "transit",
        description: "Arrêté pour fabrication de faux papiers."
      },
      {
        id: "bouteille-buchenwald",
        label: "Déportation",
        location: "Buchenwald",
        lat: 51.0217,
        lng: 11.2486,
        date: "Janvier 1944",
        type: "camp",
        description: "Survit 15 mois à Buchenwald. Amputé de la jambe droite, affecté au Bloc des Invalides."
      }
    ],
    color: "#3b82f6",
    campId: "buchenwald",
    fate: "Survivant, libéré en avril 1945"
  },
  {
    id: "seguy",
    name: "Georges Séguy",
    dates: "1927 - 2016",
    photo: "",
    summary: "Résistant communiste, cheminot, déporté à Mauthausen",
    description: "Résistant communiste français, cheminot. Arrêté à 16 ans pour ses activités de résistance. Après la guerre, secrétaire général de la CGT (1967-1982).",
    path: [
      {
        id: "seguy-toulouse",
        label: "Arrestation",
        location: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "Février 1944",
        type: "origin",
        description: "Arrêté pour activités de résistance au sein des cheminots."
      },
      {
        id: "seguy-compiegne",
        label: "Transit",
        location: "Compiègne (Royallieu)",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        type: "transit",
        description: "Camp de Royallieu. Principal camp de transit pour les déportés politiques français."
      },
      {
        id: "seguy-mauthausen",
        label: "Déportation",
        location: "Mauthausen",
        lat: 48.2583,
        lng: 14.5122,
        date: "1944-1945",
        type: "camp",
        description: "Camp de catégorie III (le plus dur). Environ 90 000 détenus y périrent."
      }
    ],
    color: "#10b981",
    campId: "mauthausen",
    fate: "Survivant, libéré le 5 mai 1945"
  },
  {
    id: "lestage",
    name: "Suzanne Lestage",
    dates: "Inconnue",
    photo: "",
    summary: "Résistante française, déportée à Ravensbrück puis Mauthausen",
    description: "Résistante française déportée à Ravensbrück, le principal camp de concentration pour femmes, puis transférée à Mauthausen.",
    path: [
      {
        id: "lestage-france",
        label: "Arrestation",
        location: "France",
        lat: 46.6034,
        lng: 1.8883,
        date: "1944",
        type: "origin",
        description: "Arrêtée pour faits de résistance."
      },
      {
        id: "lestage-ravensbruck",
        label: "Déportation",
        location: "Ravensbrück",
        lat: 53.1903,
        lng: 13.1697,
        date: "14 octobre 1944",
        type: "camp",
        description: "Principal camp de concentration pour femmes. Plus de 130 000 femmes y furent détenues."
      },
      {
        id: "lestage-mauthausen",
        label: "Transfert",
        location: "Mauthausen",
        lat: 48.2583,
        lng: 14.5122,
        date: "1945",
        type: "camp",
        description: "Transférée lors des évacuations de fin de guerre."
      }
    ],
    color: "#8b5cf6",
    campId: "ravensbruck",
    fate: "Survivante, libérée le 22 avril 1945 par la Croix-Rouge"
  },
  {
    id: "rolland",
    name: "Yves Rolland",
    dates: "1913 - ?",
    photo: "",
    summary: "Marin-pêcheur breton, déporté à Neuengamme et Buchenwald",
    description: "Résistant français déporté au camp de concentration de Neuengamme, près de Hambourg, puis transféré à Buchenwald.",
    path: [
      {
        id: "rolland-crozon",
        label: "Naissance",
        location: "Crozon, Finistère",
        lat: 48.2478,
        lng: -4.4961,
        date: "31 août 1913",
        type: "origin",
        description: "Naissance à Crozon, marin-pêcheur breton."
      },
      {
        id: "rolland-compiegne",
        label: "Transit",
        location: "Compiègne (Royallieu)",
        lat: 49.4178,
        lng: 2.8262,
        date: "1944",
        type: "transit",
        description: "Camp de Royallieu, transit vers les camps de concentration."
      },
      {
        id: "rolland-neuengamme",
        label: "Déportation",
        location: "Neuengamme",
        lat: 53.4275,
        lng: 10.2317,
        date: "28 juillet 1944",
        type: "camp",
        description: "Matricule 40419. Affecté aux Kommandos Salzgitter et Husum-Schwesing."
      },
      {
        id: "rolland-buchenwald",
        label: "Transfert",
        location: "Buchenwald",
        lat: 51.0217,
        lng: 11.2486,
        date: "Mars 1945",
        type: "camp",
        description: "Transféré lors de l'évacuation de Neuengamme."
      }
    ],
    color: "#ec4899",
    campId: "neuengamme",
    fate: "Survivant, libéré le 12 avril 1945 à Hanovre"
  },
  {
    id: "angele-rouzaud",
    name: "Angèle Rouzaud",
    dates: "Inconnue",
    photo: "",
    summary: "Résistante française, déportée à Ravensbrück",
    description: "Angèle Rouzaud fait partie des nombreuses femmes françaises qui se sont engagées dans la Résistance pendant l'Occupation.",
    path: [
      
      {
        id: "rouzaud-ravensbruck",
        label: "Déportation",
        location: "Ravensbrück",
        lat: 53.1903,
        lng: 13.1697,
        date: "1944",
        type: "camp",
        description: "Principal camp de concentration pour femmes. Plus de 130 000 femmes y furent détenues."
      }
    ],
    color: "#f472b6",
    campId: "ravensbruck",
    fate: "Survivante, libérée en 1945"
  },
  {
    id: "les-abs",
    name: "Jeanne Verdier",
    dates: "1893-1961",
    photo: "",
    summary: "Une lutte contre l'oppression",
    description: "Jeanne Verdier une figure de la Résistance française dont le parcour témoigne de l'engagement contre l'occupation nazie.",
    path: [
      {
        id: "lesabs-france",
        label: "Résistance",
        location: "France",
        lat: 43.6047,
        lng: 1.4442,
        date: "1940-1943",
        type: "origin",
        description: "Engagement dans la Résistance française."
      },
      {
        id: "lesabs-ravensbruck",
        label: "Déportation (Jeanne)",
        location: "Ravensbrück",
        lat: 53.1903,
        lng: 13.1697,
        date: "1943-1945",
        type: "camp",
        description: "Jeanne Verdier déportée à Ravensbrück."
      }
    ],
    color: "#a855f7",
    campId: "ravensbruck",
    fate: "Jeanne libérée par la Croix-Rouge, Jean arrêté puis libéré"
  },
  {
    id: "nakache",
    name: "Alfred Nakache",
    dates: "1915 - 1983",
    photo: "",
    summary: "Champion de natation français, déporté à Auschwitz, survivant des marches de la mort",
    description: "Champion de France de natation, participant aux JO de Berlin 1936. Déporté avec sa famille à Auschwitz où sa femme et sa fille sont assassinées.",
    path: [
      {
        id: "nakache-constantine",
        label: "Naissance",
        location: "Constantine, Algérie",
        lat: 36.3650,
        lng: 6.6147,
        date: "18 novembre 1915",
        type: "origin",
        description: "Naissance à Constantine, Algérie française."
      },
      {
        id: "nakache-toulouse",
        label: "Arrestation",
        location: "Toulouse",
        lat: 43.6047,
        lng: 1.4442,
        date: "20 décembre 1943",
        type: "transit",
        description: "Dénoncé, arrêté par la Gestapo, interné à la prison Saint-Michel."
      },
      {
        id: "nakache-drancy",
        label: "Transit",
        location: "Drancy",
        lat: 48.9172,
        lng: 2.4513,
        date: "Janvier 1944",
        type: "transit",
        description: "Camp de Drancy, antichambre de la déportation."
      },
      {
        id: "nakache-auschwitz",
        label: "Déportation",
        location: "Auschwitz-Birkenau",
        lat: 50.0343,
        lng: 19.1784,
        date: "20 janvier 1944",
        type: "camp",
        description: "Convoi n°66. Sa femme Paule et sa fille Annie assassinées à l'arrivée."
      },
      {
        id: "nakache-buchenwald",
        label: "Transfert",
        location: "Buchenwald",
        lat: 51.0217,
        lng: 11.2486,
        date: "Janvier 1945",
        type: "camp",
        description: "Survit aux marches de la mort après l'évacuation d'Auschwitz."
      }
    ],
    color: "#0ea5e9",
    campId: "auschwitz",
    fate: "Survivant, libéré en avril 1945, reprend la compétition aux JO 1948"
  }
];

export const camps = [
  {
    id: "auschwitz",
    name: "Auschwitz-Birkenau",
    country: "Pologne",
    dates: "1940-1945",
    lat: 50.0343,
    lng: 19.1784,
    type: "extermination",
    victims: "1,1 million",
    description: "Plus grand camp de concentration et d'extermination nazi. Symbole mondial de la Shoah.",
    color: "#dc2626"
  },
  {
    id: "buchenwald",
    name: "Buchenwald",
    country: "Allemagne",
    dates: "1937-1945",
    lat: 51.0217,
    lng: 11.2486,
    type: "concentration",
    victims: "56 000",
    description: "Près de Weimar. Connu pour l'auto-libération des détenus le 11 avril 1945.",
    color: "#f59e0b"
  },
  {
    id: "mauthausen",
    name: "Mauthausen",
    country: "Autriche",
    dates: "1938-1945",
    lat: 48.2583,
    lng: 14.5122,
    type: "concentration",
    victims: "90 000",
    description: "Camp de catégorie III, le plus brutal. L'escalier de la mort (186 marches).",
    color: "#10b981"
  },
  {
    id: "ravensbruck",
    name: "Ravensbrück",
    country: "Allemagne",
    dates: "1939-1945",
    lat: 53.1903,
    lng: 13.1697,
    type: "concentration",
    victims: "50 000",
    description: "Le plus grand camp de concentration pour femmes du Troisième Reich.",
    color: "#8b5cf6"
  },
  {
    id: "neuengamme",
    name: "Neuengamme",
    country: "Allemagne",
    dates: "1938-1945",
    lat: 53.4275,
    lng: 10.2317,
    type: "concentration",
    victims: "42 900",
    description: "Près de Hambourg. Tragédie de la baie de Lübeck (3 mai 1945).",
    color: "#ec4899"
  },
  {
    id: "drancy",
    name: "Drancy",
    country: "France",
    dates: "1941-1944",
    lat: 48.9172,
    lng: 2.4513,
    type: "transit",
    victims: "70 000 transitées",
    description: "Camp d'internement et de transit. Antichambre de la mort pour les Juifs de France.",
    color: "#6366f1"
  },
  {
    id: "compiegne",
    name: "Compiègne (Royallieu)",
    country: "France",
    dates: "1941-1944",
    lat: 49.4178,
    lng: 2.8262,
    type: "transit",
    victims: "54 000 déportées",
    description: "Principal camp de transit en France occupée. Frontstalag 122.",
    color: "#14b8a6"
  }
];

export const timelineEvents = [
  { year: 1939, event: "Début de la Seconde Guerre mondiale", detail: "1er septembre — L'Allemagne envahit la Pologne" },
  { year: 1940, event: "Armistice et Régime de Vichy", detail: "Le gouvernement de Vichy collabore avec l'occupant nazi" },
  { year: 1941, event: "Premières rafles en France", detail: "Rafle du Billet vert, internement massif de Juifs étrangers" },
  { year: 1942, event: "Rafle du Vel d'Hiv", detail: "16-17 juillet — 13 152 Juifs arrêtés à Paris, dont 4 115 enfants" },
  { year: 1943, event: "Intensification des déportations", detail: "Convois réguliers depuis Drancy vers Auschwitz et autres camps" },
  { year: 1944, event: "Débarquement et Libération", detail: "6 juin — Débarquement en Normandie. Libération progressive de la France" },
  { year: 1945, event: "Libération des camps", detail: "Janvier–Mai — Découverte de l'horreur des camps par les Alliés" }
];
