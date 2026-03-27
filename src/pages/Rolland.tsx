import { Link } from 'react-router-dom';
import { MapPin, Calendar, AlertTriangle, Users, BookOpen, FileText, Quote, Download } from 'lucide-react';
import PersonHeader from '../components/PersonHeader';

const rollandSections = [
  { id: 'hero', label: 'Présentation' },
  { id: 'biographie', label: 'Biographie' },
  { id: 'deportation', label: 'Déportation' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'sources', label: 'Sources' },
];

export default function Rolland() {
  const timelineEvents = [
    { year: '1913', event: 'Naissance', detail: '31 août à Crozon (Finistère). Marin-pêcheur breton.' },
    { year: '30 juin 1944', event: 'Arrestation', detail: 'Rafle à Crozon. Réquisitionné pour le STO dans le Finistère.' },
    { year: '28 juillet 1944', event: 'Déportation vers Neuengamme', detail: 'Départ de Compiègne. Matricule n°40419.' },
    { year: '1944', event: 'Kommandos', detail: 'Salzgitter (travail forcé) et Husum-Schwesing (tranchées anti-chars).' },
    { year: 'Mars 1945', event: 'Transfert à Buchenwald', detail: `Lors de l'évacuation du camp. Neuf mois de détention.` },
    { year: '12 avril 1945', event: 'Libération', detail: `À Hanovre, par la Résistance clandestine et groupes d'intervention.` },
  ];

  const campsTraverses = [
    'Compiègne (transit)',
    'Neuengamme (camp principal)',
    'Salzgitter (Kommando)',
    'Husum-Schwesing (Kommando)',
    'Buchenwald',
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <PersonHeader sections={rollandSections} />
      
      {/* Spacer pour le header fixe */}
      <div className="h-16" />

      {/* Hero Section */}
      <section id="hero" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <Link 
            to="/personnages" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-8"
            data-testid="back-to-characters-btn"
          >
            <span>←</span>
            <span className="text-sm">Retour aux personnages</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
                1913 — Libéré en 1945
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Yves Rolland
              </h1>
              <p className="mt-4 text-lg text-slate-300">Déporté à Neuengamme et Buchenwald, marin-pêcheur breton</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Crozon, Finistère, Bretagne</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>31 août 1913</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                  <Users className="w-12 h-12 text-slate-500" />
                </div>
              </div>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic">
                  "Nous voulons tenir le serment que nous avons fait à la libération lors de la commémoration des 151 000 morts à Buchenwald..."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATION VISUELLE */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="bg-slate-900 py-8">
          <div className="mx-auto flex justify-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-slate-700" />
              <div className="h-2 w-2 rotate-45 border border-amber-500/50" />
              <div className="h-px w-12 bg-slate-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Chronologie */}
      <section id="biographie" className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Parcours
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Chronologie
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-red-500 to-green-500 md:left-1/2 md:-translate-x-px" />
            
            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right md:self-start"
                      : "md:pl-12 md:self-end"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 ${
                      index < 2 ? 'border-amber-500' : index < 5 ? 'border-red-500' : 'border-green-500'
                    } bg-slate-900 md:top-1 ${
                      index % 2 === 0
                        ? "md:left-auto md:-right-1.5"
                        : "md:-left-1.5"
                    }`}
                  />
                  <p className={`text-sm font-semibold uppercase tracking-widest ${
                    index < 2 ? 'text-amber-400' : index < 5 ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {event.year}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {event.event}
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {event.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Déportation */}
      <section id="deportation" className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          L'épreuve
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Le Parcours de Déportation
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border border-slate-700 bg-slate-800 p-8">
            <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Neuengamme et ses Kommandos</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Yves Rolland est déporté le 28 juillet 1944 de Compiègne vers le camp de concentration de Neuengamme, où il reçoit le matricule 40419. Le camp de Neuengamme, situé près de Hambourg, était l'un des plus grands camps de concentration nazis en Allemagne.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Il est affecté à plusieurs Kommandos, notamment <strong className="text-white">Salzgitter</strong>, un camp de travailleurs civils situé au sud de Brunswick, où les détenus travaillaient pour les entreprises H. Göring à la fabrication d'armement.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Il passe également par <strong className="text-white">Husum-Schwesing</strong>, un Kommando du Schleswig-Holstein près de la Mer du Nord, fonctionnant de septembre à décembre 1944 pour creuser des tranchées anti-chars dans la zone côtière marécageuse. Plus de 1500 détenus y travaillaient dans des conditions inhumaines.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                Camps traversés
              </h3>
              <ul className="space-y-2">
                {campsTraverses.map((camp, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500">•</span>
                    {camp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-6 text-center">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Matricule
              </h3>
              <p className="text-4xl font-bold text-amber-400">40419</p>
              <p className="text-sm text-slate-400 mt-2">Camp de Neuengamme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Buchenwald */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Détention
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Buchenwald
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Le Camp de Buchenwald</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Yves Rolland est transféré à Buchenwald en mars 1945 lors de l'évacuation du camp de Neuengamme. Il y passe neuf mois avant d'être libéré le 12 avril 1945 à Hanovre.
              </p>
              <p className="text-slate-300 leading-relaxed">
                À Buchenwald, il existait ce que les détenus appelaient le "petit camp" et le "grand camp". Le petit camp recevait tous les nouveaux arrivants pour une sorte de quarantaine, tandis que le grand camp recevait ceux qui avaient déjà effectué un certain séjour.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/50">
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Le Serment de Buchenwald</h3>
              <p className="text-slate-300">
                À la libération du camp, les survivants ont prêté serment lors de la commémoration des 151 000 morts, s'engageant à témoigner et à poursuivre les responsables de ces crimes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="border border-slate-700 bg-slate-800 p-12 text-center">
          <Quote className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <blockquote className="font-serif text-xl italic text-white leading-relaxed mb-4">
            "Des convois entiers, des milliers de personnes sont envoyés dans des chambres à gaz, à Buchenwald, on les assassinait, on les fusillait, on les laissait mourir de froid en les laissant stationner durant des heures exposés à tous les vents par -15 ou -20 degrés."
          </blockquote>
          <p className="text-sm text-amber-400">
            — Témoignage sur les conditions à Buchenwald
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Mémoire
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Témoignages sur la Déportation
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="font-bold text-white">Le Travail Forcé</h3>
              </div>
              <p className="text-sm text-slate-300 italic">
                "La deuxième période d'extermination est celle qui fut conditionnée par des raisons de guerre, le besoin sans cesse accru de matériel humain pour la production de guerre allemande. C'est celle de l'extermination par le travail forcé dans les usines d'armement, dans les usines souterraines, pour la fabrication des fameuses armes secrètes: V1, V2, V3."
              </p>
            </div>

            <div className="border-l-2 border-amber-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-amber-400" />
                <h3 className="font-bold text-white">L'Arrivée au Camp</h3>
              </div>
              <p className="text-sm text-slate-300 italic">
                "Un convoi de 2 000 Polonais arrive à Buchenwald. On les parque sur la place d'appel. Ils doivent immédiatement se tenir au garde à vous, immobiles des heures durant. Ils n'avaient pas mangé depuis quelques jours et on les laisse ainsi debouts une douzaine d'heures par -15 degrés."
              </p>
            </div>

            <div className="border-l-2 border-green-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h3 className="font-bold text-white">Le Devoir de Mémoire</h3>
              </div>
              <p className="text-sm text-slate-300 italic">
                "Ce n'est pas de gaieté de cœur que nous le faisons ni par plaisir sadique, nous ne le faisons pas non plus pour nous ériger en martyre ou en héros, nous le faisons par devoir. Nous voulons tenir le serment que nous avons fait à la libération lors de la commémoration des 151 000 morts à Buchenwald."
              </p>
            </div>

            <div className="border-l-2 border-purple-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-purple-400" />
                <h3 className="font-bold text-white">La Mortalité</h3>
              </div>
              <p className="text-sm text-slate-300 italic">
                "Du 1er janvier au 28 janvier pour un effectif de 69 400 internés il y eut 1 614 morts. Du 29 janvier au 25 février sur un effectif de 96 400 internés il y eut 3 700 morts. Ce qui fait une moyenne de 175 morts par jour environ."
              </p>
            </div>
          </div>
        </div>
      </section>

          <div className="border border-slate-700 bg-slate-800 p-6">
            <h3 className="font-bold text-white mb-3">Livre Mémorial</h3>
            <p className="text-sm text-slate-400 mb-3">
              Fondation pour la Mémoire de la Déportation, 2006.
            </p>
            <a 
              href="http://www.bddm.org/liv/details.php?id=I.250.#ROLLAND" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:text-amber-300 underline"
            >
              Consulter le livre mémorial →
            </a>
          </div>

          <div className="border border-slate-700 bg-slate-800 p-6">
            <h3 className="font-bold text-white mb-3">Bibliographie</h3>
            <p className="text-sm text-slate-400">
              Lalieu, Olivier, <em>La zone grise ? La Résistance française à Buchenwald</em>, Paris, Tallandier, 2005.
            </p>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/eb7pmnok_Rolland_p5-13_conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage de Yves Rolland</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Mémoire de la Déportation</span>
            </div>
            <p className="text-sm text-slate-400">
              En mémoire de Yves Rolland et de tous les déportés.
            </p>
            <p className="text-xs text-slate-500">Né le 31 août 1913 à Crozon • Libéré le 12 avril 1945</p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <p className="text-xs text-slate-600">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
