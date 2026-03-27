import { Link } from 'react-router-dom';
import { MapPin, Calendar, User, Shield, Clock, AlertTriangle, Scale, BookOpen, Download } from 'lucide-react';

function Bouteille() {
  const timelineEvents = [
    { year: '1904', event: 'Naissance', detail: 'Auchy-la-Montagne, fils de Désiré Bouteille, ancien député' },
    { year: '1930s', event: 'Premiers internements', detail: 'Troubles psychiatriques documentés avant la guerre' },
    { year: '1940', event: 'Entrée en résistance', detail: 'Rejoint le réseau Buckmaster / SOE britannique' },
    { year: 'Nov. 1943', event: 'Arrestation', detail: 'Arrêté pour fabrication de faux papiers' },
    { year: 'Jan. 1944', event: 'Déportation', detail: 'Transféré à Buchenwald, matricule inconnu' },
    { year: 'Avr. 1945', event: 'Libération', detail: 'Survivant, amputé de la jambe droite' },
    { year: '1955', event: 'Rapport Sûreté', detail: 'Qualifié officiellement de mythomane' },
  ];

  const reseaux = [
    'Réseau Buckmaster (SOE)',
    'Special Operations Executive',
    'Résistance française',
  ];

  const mythomanieElements = [
    'Se présente comme héros mutilé de guerre',
    'Revendique un statut de philosophe reconnu',
    'Prétend détenir des documents secrets explosifs',
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
            <span className="text-sm">Retour aux personnages</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
                1904 — ?
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Robert Bouteille
              </h1>
              <p className="mt-4 text-lg text-slate-300">Résistant, déporté à Buchenwald, survivant</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Auchy-la-Montagne, France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Né en 1904</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>Professeur de Philosophie</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                  <AlertTriangle className="w-12 h-12 text-slate-500" />
                </div>
              </div>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic">
                  "13 novembre 1943 : je quittais le capitole enchaîné, par la Gestapo. Aujourd'hui nous somes vivants."
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

      {/* FRAGILITÉ PSYCHIQUE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Contexte
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Fragilité Psychique
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Fils de Désiré Bouteille, ancien député, Robert Bouteille appartient à un milieu social politisé et cultivé.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Toutefois, son parcours est profondément structuré par une instabilité psychique durable, qui traverse l'ensemble de sa vie et brouille la portée de sa parole après la guerre.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Interné à plusieurs reprises avant 1939, ses archives administratives attestent d'une fragilité antérieure à la déportation. Le traumatisme concentrationnaire a pu aggraver ces troubles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                Réseaux
              </h3>
              <ul className="space-y-2">
                {reseaux.map((reseau, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500">•</span>
                    {reseau}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                Détention
              </h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">15</div>
                <div className="text-slate-400 text-sm">mois à Buchenwald</div>
              </div>
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
            Buchenwald
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">L'expérience concentrationnaire</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Déporté en janvier 1944, Bouteille survit quinze mois à Buchenwald. Amputé de la jambe droite, il est affecté au Bloc des Invalides, secteur réservé aux détenus inaptes au travail.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Faim permanente, violence quotidienne, disparition des compagnons et mort omniprésente marquent cette période de sa vie.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 border border-amber-500/50">
                <span className="text-4xl font-serif font-bold text-amber-400">55K</span>
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Victimes de Buchenwald</h3>
              <p className="text-slate-300">
                Plus de 55 000 détenus sont morts dans ce camp de concentration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MYTHOMANIE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Après-guerre
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Mythomanie & Rapport de 1955
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Dès 1945, son discours s'amplifie. En 1955, la Sûreté nationale le qualifie officiellement de mythomane.
            </p>
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                Affabulations documentées
              </h3>
              <ul className="space-y-3">
                {mythomanieElements.map((element, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500">•</span>
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-slate-700 bg-slate-900 p-8">
            <h3 className="text-amber-400 font-serif font-bold text-xl mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conclusion
            </h3>
            <blockquote className="border-l-2 border-amber-500 pl-4">
              <p className="text-slate-300 italic leading-relaxed">
                "Robert Bouteille n'est ni un faux déporté ni un héros oublié. Il est un survivant psychiquement fragile, dont la parole est brouillée par un besoin de reconnaissance mal maîtrisé."
              </p>
            </blockquote>
            <div className="mt-6 text-sm text-slate-500">
              Analyse croisée des sources administratives, médicales et judiciaires.
            </div>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/402yrfv4_Bouteille_p31-34_conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage de Robert Bouteille</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En mémoire de Robert Bouteille
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Et de tous les survivants dont le témoignage reste complexe à interpréter.
            </p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <div className="text-xs text-slate-500 space-y-1">
              <p>Sources : Lalieu Olivier — "La zone grise"</p>
              <p>Archives de la Sûreté nationale — Rapport 1955</p>
            </div>
            <p className="text-xs text-slate-600 mt-4">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bouteille;
