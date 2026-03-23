import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

function Nieto() {
  const timelineEvents = [
    { year: '1913', event: 'Naissance à Albacete, Espagne', detail: 'Membre du Partido Comunista de España (PCE)' },
    { year: '1933', event: 'Arrivée en France', detail: 'Après la victoire de Franco' },
    { year: '1941-42', event: 'Résistance', detail: `Engagement dans l'Union Nacional Española (UNE)` },
    { year: '1942', event: 'Arrestation', detail: 'Septembre à Toulouse, sous le faux nom de José Matéos Martinez' },
    { year: '1944', event: 'Déportation', detail: '31 juillet vers Buchenwald, matricule n°69237' },
    { year: '1945', event: 'Libération', detail: 'Retour à Toulouse, Serment de Buchenwald' },
    { year: '1951', event: 'Disparition', detail: 'Opération Bolero-Paprika' },
  ];

  const organisations = [
    'Partido Comunista de España (PCE)',
    'Unión Nacional Española (UNE)',
    'Agrupación de Guerrilleros Españoles (AGE)',
  ];

  const zones = ['Toulouse (Base)', 'Aude', 'Haute-Garonne', 'Ariège', 'Cantal'];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* HERO */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-800 to-slate-900">
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
                1913 — 1951
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Jaime Nieto López
              </h1>
              <p className="mt-4 text-lg text-slate-300">Résistant espagnol, déporté à Buchenwald</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Albacete, Espagne</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>14 août 1913</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                  <Users className="w-12 h-12 text-slate-500" />
                </div>
              </div>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic">
                  "Ce résistant partiellement remarquable semble tomber dans les oubliettes de l'Histoire..."
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

      {/* CHRONOLOGIE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Parcours
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Chronologie
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-600 md:left-1/2 md:-translate-x-px" />
            
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
                    className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-900 md:top-1 ${
                      index % 2 === 0
                        ? "md:left-auto md:-right-1.5"
                        : "md:-left-1.5"
                    }`}
                  />
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
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

      {/* RÉSISTANCE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Combat
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          L'Engagement dans la Résistance
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              A travers une liaison avec certaines compagnies de travailleurs étrangers (CTE), notamment en région toulousaine et certains camps de concentration.
            <p className="text-lg leading-relaxed text-slate-300">
              Dès octobre 1941, une filière clandestine se met en place pour aider les réfugiés. Il s'occupe un rôle très actif au sein de cette organisation clandestine.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                Organisations
              </h3>
              <ul className="space-y-2">
                {organisations.map((org, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500">•</span>
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                Zones d'action
              </h3>
              <ul className="space-y-2">
                {zones.map((zone, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500">•</span>
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BUCHENWALD */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Déportation
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Buchenwald et le Serment
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Le Serment de Buchenwald</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Déporté à Buchenwald le 31 juillet sous la matricule n°69237, Jaime Nieto devient rapidement l'une des figures importantes de la résistance clandestine au sein du camp.
              </p>
              <p className="text-slate-300 leading-relaxed">
                D'après des témoins, il récita le "Serment de Buchenwald" à la libération du camp devant 21 000 survivants le 19 avril 1945.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/50">
                <span className="text-4xl font-serif font-bold text-amber-400">69237</span>
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Délégué des Espagnols</h3>
              <p className="text-slate-300">
                Au sein du comité international de Buchenwald, il co-dirige le combat des témoins survivants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HÉRITAGE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Mémoire
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Un destin tragique
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 border-l-2 border-amber-500 pl-6">
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Après la libération, Jaime Nieto retourne à Toulouse où il poursuit son engagement politique au sein du PCE. 
          </p>
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            En 1951, il disparaît dans des circonstances mystérieuses lors de l'opération Bolero-Paprika, une vague de répression anticommuniste en France.
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            Son destin reste partiellement méconnu, mais son engagement et son courage témoignent de la contribution des républicains espagnols à la Résistance française.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En hommage à Jaime Nieto López
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Et à tous les républicains espagnols engagés dans la Résistance française.
            </p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <p className="text-xs text-slate-500">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Nieto;
