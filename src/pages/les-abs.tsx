import { Link } from 'react-router-dom';
import { MapPin, Calendar, BookOpen } from 'lucide-react';

function LesAbs() {
  const timelineJeanne = [
    { year: '1893', event: 'Naissance', detail: '24 mars, France' },
    { year: '1920s', event: 'Mariage', detail: 'Épouse de François Verdier' },
    { year: '1940-43', event: 'Résistance', detail: 'Membre du réseau Gallia, agent de renseignement' },
    { year: '1943', event: 'Arrestation', detail: '18 décembre, capturée par l\'occupant' },
    { year: '1943-45', event: 'Déportation', detail: 'Camp de Ravensbrück' },
    { year: '1945', event: 'Libération', detail: '9 avril, libérée par la Croix-Rouge' },
    { year: 'Après 1945', event: 'Engagement civique', detail: 'Élue Maire de Saint-Orens dans le Gers' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* HERO */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <Link 
            to="/personnages" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-8"
          >
            <span>←</span>
            <span className="text-sm">Retour aux déportés</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
                Résistants & Survivants
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Jeanne Verdier
              </h1>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Saint-Orens-de-Gameville, Gers & Paris</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>1893-1961</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
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

      {/* JEANNE VERDIER - CHRONOLOGIE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Parcours
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Jeanne Verdier
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-600 md:left-1/2 md:-translate-x-px" />
            
            <div className="flex flex-col gap-12">
              {timelineJeanne.map((event, index) => (
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

      {/* CONTEXTE HISTORIQUE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Contexte
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Contexte Historique
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="border border-slate-700 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-amber-400" />
                <h3 className="font-serif font-bold text-white">Régime de Vichy</h3>
              </div>
              <p className="text-sm text-slate-300">
                Collaboration avec l'Allemagne nazie et persécution systématique des résistants et des minorités.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="font-serif font-bold text-white">Ravensbrück</h3>
              </div>
              <p className="text-sm text-slate-300">
                Camp pour femmes résistantes, l'un des plus terribles du Reich nazi.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-serif font-bold text-white">Libération 1945</h3>
              </div>
              <p className="text-sm text-slate-300">
                Retour à la vie civile et reconstruction pour les survivants, beaucoup gravement marqués.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="border border-slate-700 bg-slate-800 p-12 text-center">
          <blockquote className="font-serif text-2xl italic text-white leading-relaxed">
            "Le devoir de mémoire envers ceux qui ont résisté est de préserver leurs noms de l'oubli et de transmettre l'exemple de leur courage aux générations futures."
          </blockquote>
          <p className="mt-6 text-amber-400 text-sm">
            — Mémoire de la Déportation
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <p className="font-serif text-lg font-bold text-white">
                Mémoire de la Déportation
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              En mémoire de Jeanne Verdier et Jean Cassou, et de tous les résistants oubliés.
            </p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <p className="text-xs text-slate-500">
              Que leur sacrifice et leur courage ne soient jamais oubliés
            </p>
            <p className="text-xs text-slate-600 mt-2">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LesAbs;
