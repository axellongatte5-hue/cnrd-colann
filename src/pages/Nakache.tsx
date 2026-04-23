import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, AlertTriangle, Medal, Heart, Flame, Download } from 'lucide-react';

export default function Nakache() {
  const timelineEvents = [
    { year: '1915', event: 'Naissance', detail: 'Naissance à Constantine, Algérie française', type: 'life' },
    { year: '1936', event: 'Jeux Olympiques de Berlin', detail: '4e au relais 4 × 200 m nage libre', type: 'sport' },
    { year: '1939', event: 'Carrière professionnelle', detail: 'Devient professeur d\'éducation physique', type: 'life' },
    { year: '1942', event: 'Champion de France', detail: 'Remporte cinq titres de champion de France en natation', type: 'sport' },
    { year: 'Mars 1943', event: 'Déchu de nationalité', detail: 'En tant que juif d\'Algérie, il est déchu de sa nationalité française. Il s\'installe avec sa femme et leur fille à Toulouse, en zone libre.', type: 'persecution' },
    { year: '20 Déc 1943', event: 'Arrestation', detail: 'Dénoncé, arrêté par la Gestapo, interné à la prison Saint-Michel à Toulouse, puis au camp de Drancy.', type: 'persecution' },
    { year: '20 Jan 1944', event: 'Déportation', detail: 'Déporté avec sa famille par le convoi n°66 à Auschwitz.', type: 'deportation' },
    { year: '23 Jan 1944', event: 'Tragédie', detail: 'Sa femme Paule et sa fille Annie sont immédiatement assassinées à leur arrivée dans le complexe concentrationnaire.', type: 'death' },
    { year: '18 Jan 1945', event: 'Évacuation d\'Auschwitz', detail: 'Les Allemands évacuent le camp devant la progression des Soviétiques. Survit aux marches de la mort.', type: 'deportation' },
    { year: 'Avr 1945', event: 'Libération', detail: 'Libération de Buchenwald par l\'armée américaine.', type: 'liberation' },
    { year: '28 Avr 1945', event: 'Retour', detail: 'Après avoir été annoncé mort, les journaux confirment qu\'il est bien vivant.', type: 'liberation' },
    { year: '1983', event: 'Décès', detail: 'Décès à Cerbère, France', type: 'life' },
  ];

  const palmares = [
    '5 fois champion de France de natation (1942)',
    'Participation aux JO de Berlin 1936',
    '4e au relais 4 × 200 m nage libre',
    'Professeur d\'éducation physique',
    'Record du monde du 200 m brasse',
  ];

  const keyNumbers = [
    { number: '1936', label: 'Jeux Olympiques de Berlin' },
    { number: '5', label: 'Titres de champion de France' },
    { number: '66', label: 'Numéro du convoi de déportation' },
    { number: '1945', label: 'Année de libération' },
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
                1915 — 1983
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Alfred Nakache
              </h1>
              <p className="mt-4 text-lg text-slate-300">Champion de natation, déporté à Auschwitz, survivant</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Constantine, Algérie française</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>18 novembre 1915</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Medal className="w-4 h-4 text-amber-400" />
                  <span>Champion de France de natation</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/50">
                  <Medal className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic">
                  "Ne croyez pas que ce soit de l'imagination. Ici nous n'avons pas beaucoup de preuves de ces abominations parce que les Boches ont tout supprimé avant leur départ."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATION VISUELLE */}
      <div className=\relative\>
        <div className=\absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent\ />
        <div className=\bg-slate-900 py-8\>
          <div className=\mx-auto flex justify-center\>
            <div className=\flex items-center gap-4\>
              <div className=\h-px w-12 bg-slate-700\ />
              <div className=\h-2 w-2 rotate-45 border border-amber-500/50\ />
              <div className=\h-px w-12 bg-slate-700\ />
            </div>
          </div>
        </div>
      </div>

      {/* VIDÉO YOUTUBE */}
      <section className=\mx-auto max-w-4xl px-6 py-16\ data-testid=\nakache-video-section\>
        <div className=\text-center mb-8\>
          <p className=\text-sm font-medium uppercase tracking-[0.3em] text-amber-400\>
            Témoignage
          </p>
          <h2 className=\mt-3 font-serif text-3xl font-bold text-white md:text-4xl\>
            Portrait en vidéo
          </h2>
          <div className=\mx-auto mt-4 h-px w-16 bg-amber-500\ />
        </div>
        <div
          className=\relative w-full overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl\
          style={{ paddingBottom: '56.25%' }}
          data-testid=\nakache-youtube-wrapper\
        >
          <iframe
            className=\absolute inset-0 h-full w-full\
            src=\https://www.youtube.com/embed/bfK24CVQaNw\
            title=\Alfred Nakache - Vidéo\
            frameBorder=\0\
            allow=\accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\
            referrerPolicy=\strict-origin-when-cross-origin\
            allowFullScreen
            data-testid=\nakache-youtube-iframe\
          />
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
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
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-red-500 to-green-500 md:left-1/2 md:-translate-x-px" />
            
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
                      event.type === 'sport' ? 'border-blue-500' :
                      event.type === 'life' ? 'border-amber-500' :
                      event.type === 'persecution' ? 'border-orange-500' :
                      event.type === 'deportation' ? 'border-red-500' :
                      event.type === 'death' ? 'border-red-700' :
                      'border-green-500'
                    } bg-slate-900 md:top-1 ${
                      index % 2 === 0
                        ? "md:left-auto md:-right-1.5"
                        : "md:-left-1.5"
                    }`}
                  />
                  <p className={`text-sm font-semibold uppercase tracking-widest ${
                    event.type === 'sport' ? 'text-blue-400' :
                    event.type === 'life' ? 'text-amber-400' :
                    event.type === 'persecution' ? 'text-orange-400' :
                    event.type === 'deportation' ? 'text-red-400' :
                    event.type === 'death' ? 'text-red-500' :
                    'text-green-400'
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

      {/* CARRIÈRE SPORTIVE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Champion
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Une carrière exceptionnelle
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Alfred Nakache est l'un des plus grands nageurs français de l'histoire. En 1936, à seulement 21 ans, il représente la France aux Jeux Olympiques de Berlin, terminant 4e au relais 4 × 200 m nage libre.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Malgré les lois antisémites de Vichy qui lui interdisent progressivement l'accès aux compétitions, il remporte encore cinq titres de champion de France en 1942, démontrant sa détermination face à l'adversité.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Surnommé "le nageur d'Auschwitz", il continue même à nager clandestinement dans le camp, dans un bassin de rétention d'eau, défiant ainsi ses bourreaux et gardant son humanité.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Medal className="w-5 h-5 text-blue-400" />
                Palmarès
              </h3>
              <ul className="space-y-2">
                {palmares.map((item, i) => (
                  <li key={i} className="flex gap-2 text-slate-300 text-sm">
                    <span className="text-blue-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAGÉDIE FAMILIALE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            Tragédie
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            La perte de sa famille
          </h2>
          <div className="mt-4 h-px w-16 bg-red-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-red-500/30 bg-slate-900 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-400" />
                <h3 className="text-red-400 font-serif font-bold text-xl">Paule et Annie Nakache</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Le 20 janvier 1944, Alfred Nakache est déporté avec sa femme Paule et leur fille Annie par le convoi n°66 vers Auschwitz.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Trois jours plus tard, le 23 janvier 1944, sa femme et sa fille sont immédiatement assassinées à leur arrivée dans le complexe concentrationnaire. Alfred apprendra leur sort tragique plus tard.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/50">
                <Flame className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Convoi n°66</h3>
              <p className="text-slate-300">
                Ce convoi de déportation a transporté des centaines de Juifs de France vers les camps d'extermination nazis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SURVIE À AUSCHWITZ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Survie
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Le "Nageur d'Auschwitz"
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 border-l-2 border-amber-500 pl-6">
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Reconnu par un officier nazi qui connaissait sa réputation de champion, Alfred Nakache est affecté à l'infirmerie. Cette place lui permet d'échapper aux travaux les plus pénibles et d'obtenir plus de nourriture.
          </p>
          <p className="text-lg leading-relaxed text-slate-300 mb-6">
            Avec ses camarades de détention, il improvise des séances de baignade clandestines dans un bassin de rétention d'eau prévu pour les incendies, à l'insu des SS. Ces moments lui permettent de garder son humanité et de survivre psychologiquement.
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            Le 18 janvier 1945, face à l'avancée de l'Armée Rouge, les nazis évacuent Auschwitz. Alfred survit aux terribles "marches de la mort", puis est transféré à Buchenwald, où il est finalement libéré en avril 1945 par l'armée américaine.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border border-slate-700 bg-slate-900 p-8 md:p-12 text-center">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <blockquote className="font-serif text-xl md:text-2xl italic text-white leading-relaxed mb-6">
              "Ne croyez pas que ce soit de l'imagination. Ici nous n'avons pas beaucoup de preuves de ces abominations parce que les Boches ont tout supprimé avant leur départ."
            </blockquote>
            <p className="text-amber-400">
              — Alfred Nakache, témoignage sur les camps
            </p>
          </div>
        </div>
      </section>

      {/* LE RETOUR */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
          Renaissance
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Le Retour à la vie
        </h2>
        <div className="mt-4 h-px w-16 bg-green-500" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="border border-slate-700 bg-slate-800 p-8">
            <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Annoncé mort...</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Dans un premier temps, la presse française annonce sa mort. En hommage, le conseil municipal de Toulouse donne même son nom au bassin d'hiver de la piscine de l'île du Ramier.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Le 28 avril 1945, les journaux annoncent finalement qu'il est bien vivant, créant une immense émotion dans le monde sportif français.
            </p>
          </div>

          <div className="border border-green-500/30 bg-slate-900 p-8">
            <h3 className="text-green-400 font-serif font-bold text-xl mb-6">...Mais bien vivant</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Malgré les traumatismes subis et la perte de sa famille, Alfred Nakache reprend la compétition après la guerre. Il participe même aux Jeux Olympiques de Londres en 1948.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Son courage et sa résilience font de lui un symbole de la résistance humaine face à la barbarie.
            </p>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/5cz42f1b_Nakache_p19%20-%2022%20conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage d'Alfred Nakache</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En hommage à Alfred Nakache
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Champion de France, survivant d'Auschwitz, symbole de résilience.
            </p>
            <p className="text-xs text-slate-500">
              Et en mémoire de Paule et Annie Nakache, assassinées à Auschwitz.
            </p>
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
