import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, AlertTriangle } from 'lucide-react';

export default function Seguy() {
  const timelineEvents = [
    { year: '1927', event: 'Naissance à Toulouse', detail: `Début d'apprentissage en imprimerie` },
    { year: '1940s', event: 'Engagement dans la Résistance', detail: 'Apprenti chez Henri Lion, imprimeur travaillant pour la Résistance. Adhésion aux Jeunesses communistes et aux FTP' },
    { year: '4 Fév 1944', event: 'Arrestation', detail: `Arrêté par la Gestapo sur dénonciation, avec tout le personnel de l'imprimerie` },
    { year: '1944', event: 'Déportation à Mauthausen', detail: 'Camp de catégorie III, le plus dur du système nazi' },
    { year: '5 Mai 1945', event: 'Libération', detail: 'Libération du camp par les troupes américaines' },
    { year: '1967-1982', event: 'Secrétaire général de la CGT', detail: 'Carrière syndicale au service des travailleurs' },
  ];

  const keyNumbers = [
    { number: '16', label: 'ans lors de son arrestation' },
    { number: '1944', label: 'année de déportation' },
    { number: '15', label: 'ans de secrétariat à la CGT' },
    { number: '89', label: 'ans au moment de son décès' },
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
                1927 — 2016
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Georges Séguy
              </h1>
              <p className="mt-4 text-lg text-slate-300">Résistant français, déporté à Mauthausen, Secrétaire général de la CGT</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Toulouse, France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Naissance : 1927</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Secrétaire général CGT (1967-1982)</span>
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
                  "Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts."
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
          Engagement
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Un jeune résistant
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 border-l-2 border-amber-500 pl-6">
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Georges Séguy entre très jeune dans la Résistance. Apprenti imprimeur chez Henri Lion, il participe à l'impression de tracts et de journaux clandestins pour la Résistance.
          </p>
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Il adhère aux Jeunesses communistes et rejoint les Francs-tireurs et partisans (FTP). À seulement 16 ans, il est arrêté par la Gestapo le 4 février 1944.
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            Cette arrestation fait suite à une dénonciation qui touche tout le personnel de l'imprimerie clandestine.
          </p>
        </div>
      </section>

      {/* DÉPORTATION */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            L'épreuve
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Mauthausen
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Camp de catégorie III</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Mauthausen était classé par les nazis comme camp de catégorie III, réservé aux détenus considérés comme « irrécupérables ». C'était le camp le plus dur du système concentrationnaire nazi.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Georges Séguy y survit grâce à la solidarité entre détenus et à sa détermination.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                Témoignage
              </h3>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic leading-relaxed">
                  "Nous n'avons jamais désespéré ; nous avons tous fait dans nos cœurs le serment de venger tous nos morts."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            En chiffres
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Repères
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-amber-500" />
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyNumbers.map((item, idx) => (
            <div key={idx} className="border border-slate-700 bg-slate-800 p-6 text-center">
              <p className="font-serif text-4xl font-bold text-amber-400 mb-2">{item.number}</p>
              <p className="text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APRÈS-GUERRE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            L'héritage
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Après la guerre
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 border-l-2 border-amber-500 pl-6">
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Après la libération du camp le 5 mai 1945, Georges Séguy rentre en France et s'engage dans le mouvement syndical. Il gravit les échelons de la CGT.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              De 1967 à 1982, il est secrétaire général de la Confédération générale du travail (CGT), l'un des syndicats les plus importants de France.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Son expérience de la déportation a profondément marqué son engagement pour la défense des droits des travailleurs et contre toutes les formes d'oppression.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En hommage à Georges Séguy
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Résistant, déporté et défenseur des droits des travailleurs.
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
