import { Link } from 'react-router-dom';
import { AlertTriangle, Download } from 'lucide-react';

function Feigelson() {
  const timelineEvents = [
    { year: '1926', event: 'Naissance à Paris (6ᵉ arrondissement)' },
    { year: '1940', event: 'Entrée en Résistance à 14 ans' },
    { year: '1944', event: 'Arrestation à Toulouse (14 mai)' },
    { year: '1944', event: 'Déportation à Auschwitz (convoi 77, 31 juillet)' },
    { year: '1945', event: 'Évasion et libération (22 janvier)' },
    { year: '1948-1950', event: `Fondateur des Cahiers du cinéma et de l'AGIR` },
    { year: '2021', event: 'Décès à Paris, à 95 ans' },
  ];

  const deportationStages = [
    {
      title: 'Arrestation et torture',
      content: 'Arrêté à Toulouse le 14 mai 1944. Torturé par la Milice et la Gestapo : coups, électrocution, brûlures.',
    },
    {
      title: 'Camps de transit',
      content: 'Internés à Compiègne, puis Drancy. Conditions inhumaines. Attente de la déportation.',
    },
    {
      title: 'Transport vers Auschwitz',
      content: 'Wagon à bestiaux, 60 personnes par wagon, 4 jours, sans eau ni nourriture. Mort et folie pendant le trajet.',
    },
    {
      title: 'Sélection et arrivée',
      content: '80 % des déportés envoyés directement aux chambres à gaz. Raphaël devient matricule B-3747.',
    },
    {
      title: 'Déshumanisation',
      content: `Rasé, tatoué. Vêtements ôtés. Perte d'identité systématique. Travail forcé à l'extérieur du camp.`,
    },
    {
      title: 'Vie au camp',
      content: `Cruauté permanente des SS. Violences arbitraires. Témoignage de l'extermination de 20 000 hongrois en une journée.`,
    },
  ];

  const keyNumbers = [
    { number: '14', label: `ans à l'entrée en Résistance` },
    { number: '1944', label: `année d'arrestation et déportation` },
    { number: '80%', label: `des déportés exterminés à l'arrivée` },
    { number: '19', label: 'ans à la libération du camp' },
  ];

  const postWarWork = [
    { year: '1948', title: 'Co-fondateur des Cahiers du cinéma', desc: 'Engagé dans la transmission culturelle' },
    { year: '1949', title: 'Président du Club du 27 janvier 1945', desc: 'Mémoire et transmission' },
    { year: '1950', title: `Fondateur de l'AGIR`, desc: 'Association générale des Israélites de la Résistance' },
    { year: '1950+', title: 'Écrivain et militant', desc: 'Lutte contre toutes les formes de discrimination' },
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
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400 mb-4">
              1926 — 2021
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl text-white">
              Raphaël Feigelson
            </h1>
            <p className="mt-6 text-lg italic text-slate-300 max-w-2xl mx-auto border-l-2 border-amber-500 pl-6 text-left">
              « Vous êtes ici pour travailler comme des chiens ou pour mourir. Ici, il n'y a qu'une seule porte de sortie : la cheminée. »
            </p>
            <p className="text-slate-400 mt-6">Résistant à 14 ans • Déporté à Auschwitz • Rescapé et témoin</p>
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

      {/* PARCOURS */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Chronologie
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Parcours
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 space-y-6">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-900"></div>
                <div className="w-px flex-1 bg-slate-700"></div>
              </div>
              <div className="pb-6 flex-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-1">{event.year}</p>
                <p className="text-slate-300 leading-relaxed">{event.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RÉSISTANCE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Engagement
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Une entrée précoce dans la Résistance
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 border-l-2 border-amber-500 pl-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Raphaël Feigelson naît le 17 février 1926 à Paris dans une famille juive française. À seulement 14 ans, il refuse la défaite de 1940 et s'engage immédiatement dans la Résistance aux côtés de ses parents. Il devient rapidement chef militaire régional des Forces Unies de la Jeunesse Patriotique (F.U.J.P.), puis officier des Forces Françaises de l'Intérieur (F.F.I.).
            </p>
          </div>
        </div>
      </section>

      {/* DÉPORTATION */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          L'horreur
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Les étapes de la déportation
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {deportationStages.map((stage, idx) => (
            <div
              key={idx}
              className="border border-slate-700 bg-slate-800 p-6 hover:border-amber-500/50 transition-colors"
            >
              <h3 className="font-serif text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-amber-500">■</span>
                {stage.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{stage.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border border-slate-700 bg-slate-900 p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Témoignage direct
            </h3>
            <blockquote className="border-l-2 border-amber-500 pl-6 mb-6">
              <p className="text-xl italic text-white leading-relaxed">
                « On peut dire que c'était une exécution lente que cette torture perpétuelle. »
              </p>
            </blockquote>
            <p className="text-slate-300 leading-relaxed mb-4">
              Sur l'arrivée à Auschwitz : « Environ 80 % des déportés étaient aussitôt exterminés. »
            </p>
            <p className="text-slate-300 leading-relaxed">
              Sur la vie au camp : « On se croyait à l'époque féodale. » Il est témoin de l'extermination massive de déportés hongrois à l'été 1944, où 20 000 personnes sont assassinées en une seule journée.
            </p>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            En chiffres
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Chiffres clés
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

      {/* LIBÉRATION */}
      <section className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            La fin du cauchemar
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Évasion et libération
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 border-l-2 border-amber-500 pl-6">
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              Le 22 janvier 1945, Raphaël Feigelson parvient à s'évader d'Auschwitz. Il rejoint l'Armée soviétique, avec laquelle il participe à la libération du camp et empêche sa destruction totale par les SS en fuite.
            </p>
            <blockquote className="border-l-2 border-slate-600 pl-6 my-6">
              <p className="text-xl italic text-white leading-relaxed">
                « Sans son offensive victorieuse, je ne sais pas si un seul de nous serait revenu vivant de cet enfer. »
              </p>
            </blockquote>
            <p className="text-slate-300 leading-relaxed">
              Rescapé en avril 1945 à seulement 19 ans, il rentre à Paris.
            </p>
          </div>
        </div>
      </section>

      {/* APRÈS-GUERRE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          L'héritage
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          Après la guerre : une vie de transmission
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {postWarWork.map((work, idx) => (
            <div
              key={idx}
              className="border border-slate-700 bg-slate-800 p-6 hover:border-amber-500/50 transition-colors"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">{work.year}</p>
              <h3 className="font-serif text-xl font-bold text-white mb-2">{work.title}</h3>
              <p className="text-slate-400">{work.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-amber-500 pl-6">
          <p className="text-lg leading-relaxed text-slate-300">
            Après la guerre, Raphaël Feigelson consacre sa vie à la mémoire, à la culture et à la lutte contre toutes les formes de discrimination. Il est également écrivain et membre de la Société des gens de lettres. Raphaël Feigelson s'éteint en 2021 à Paris, à l'âge de 95 ans. Son témoignage constitue une source essentielle pour comprendre la Résistance, la déportation et l'horreur des camps nazis.
          </p>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/xkufrljw_Fiegelson_p14-19_%20conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage de Raphaël Feigelson</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              En hommage à Raphaël Feigelson
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Et à tous les résistants et déportés qui ont lutté pour notre liberté.
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

export default Feigelson;
