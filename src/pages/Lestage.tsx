import { Link } from 'react-router-dom';
import { MapPin, Users, Download } from 'lucide-react';

export default function Lestage() {
  const timelineEvents = [
    { year: '1944', event: 'Arrestation', detail: 'Arrêtée pour faits de résistance' },
    { year: '14 Oct 1944', event: 'Déportation à Ravensbrück', detail: 'Principal camp de concentration pour femmes' },
    { year: '1945', event: 'Transfert à Mauthausen', detail: 'Lors des évacuations de fin de guerre' },
    { year: '22 Avr 1945', event: 'Libération', detail: 'Libérée par la Croix-Rouge' },
  ];

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
          
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
              <Users className="w-16 h-16 text-slate-500" />
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
              Résistante française
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl text-white">
              Suzanne Lestage
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              Résistante française, déportée à Ravensbrück puis Mauthausen. Son courage témoigne de l'engagement des femmes dans la Résistance.
            </p>
            <div className="mt-8 h-px w-24 bg-amber-500 mx-auto" />
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

          <div className="mt-12 space-y-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-800"></div>
                  <div className="w-px flex-1 bg-slate-600"></div>
                </div>
                <div className="pb-6 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-1">{event.year}</p>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{event.event}</h3>
                  <p className="text-slate-300 leading-relaxed">{event.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAVENSBRÜCK */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Déportation
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Ravensbrück
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 border-l-2 border-amber-500 pl-6">
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Ravensbrück était le principal camp de concentration nazi réservé aux femmes. Plus de 130 000 femmes y furent internées entre 1939 et 1945.
          </p>
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Suzanne Lestage y est déportée le 14 octobre 1944. Elle y subit les conditions terribles du camp : travail forcé, malnutrition, maladies.
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            Dans les derniers mois de la guerre, elle est transférée à Mauthausen lors des évacuations chaotiques organisées par les SS.
          </p>
        </div>
      </section>

      {/* LIBÉRATION */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            La fin
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Libération
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 border-l-2 border-amber-500 pl-6">
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Le 22 avril 1945, Suzanne Lestage est libérée par la Croix-Rouge, quelques jours avant la fin de la guerre.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Son témoignage contribue à la mémoire de la déportation des femmes et de leur résistance face à la barbarie nazie.
            </p>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/bbv6azw4_Lestage_p22_conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage de Suzanne Lestage</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En hommage à Suzanne Lestage
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Et à toutes les femmes résistantes et déportées.
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
