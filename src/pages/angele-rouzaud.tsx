import { Link } from 'react-router-dom';
import { MapPin, Calendar, AlertTriangle, Users, Flame, Download } from 'lucide-react';

export default function AngeleRouzaud() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="font-semibold text-white">Mémoire de la Déportation</span>
            </Link>
            <div className="flex gap-6 items-center">
              <a href="#biographie" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">Biographie</a>
              <a href="#resistance" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">Résistance</a>
              <a href="#deportation" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">Déportation</a>
              <a href="#heritage" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">Héritage</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Hero Section */}
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
                Résistante française
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-6xl text-white">
                Angèle Rouzaud
              </h1>
              <p className="mt-4 text-lg text-slate-300">Déportée à Ravensbrück</p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>France</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Camp de Ravensbrück, Allemagne</span>
                </div>
              </div>
              <div className="mt-8 h-px w-24 bg-amber-500" />
            </div>
            <div className="bg-slate-800 p-8 border border-slate-700 rounded-lg">
              <div className="flex justify-center mb-6">
                </div>
              </div>
              <blockquote className="border-l-2 border-amber-500 pl-4">
                <p className="text-slate-300 italic">
                  "Nous avons poussé des wagons de cailloux pieds nus, cela était très dur."
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

            <div className="flex flex-col gap-12">
              {/* Engagement */}
              <div className="relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right md:self-start">
                <div className="absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-900 md:left-auto md:-right-1.5" />
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">1940-1943</p>
                <h3 className="font-serif text-xl font-bold text-white">Engagement dans la Résistance</h3>
                <p className="leading-relaxed text-slate-300">Participation active à la Résistance française. Lutte contre l'occupation nazie.</p>
              </div>

              {/* Arrestation */}
              <div className="relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-12 md:self-end">
                <div className="absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-red-500 bg-slate-900 md:-left-1.5" />
                <p className="text-sm font-semibold uppercase tracking-widest text-red-400">1943-1944</p>
                <h3 className="font-serif text-xl font-bold text-white">Arrestation</h3>
                <p className="leading-relaxed text-slate-300">Arrêtée pour faits de résistance. Internement avant déportation.</p>
              </div>

              {/* Déportation */}
              <div className="relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 md:pr-12 md:text-right md:self-start">
                <div className="absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-red-500 bg-slate-900 md:left-auto md:-right-1.5" />
                <p className="text-sm font-semibold uppercase tracking-widest text-red-400">1944</p>
                <h3 className="font-serif text-xl font-bold text-white">Déportation à Ravensbrück</h3>
                <p className="leading-relaxed text-slate-300">Transfert vers le camp de concentration réservé aux femmes, au nord de Berlin.</p>
              </div>

              {/* Libération */}
              <div className="relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-12 md:self-end">
                <div className="absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-green-500 bg-slate-900 md:-left-1.5" />
                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">1945</p>
                <h3 className="font-serif text-xl font-bold text-white">Libération</h3>
                <p className="leading-relaxed text-slate-300">Libération du camp par l'Armée Rouge le 30 avril 1945.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Résistance */}
      <section id="resistance" className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          Combat
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
          L'Engagement dans la Résistance
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border border-slate-700 bg-slate-800 p-8">
            <p className="text-slate-300 leading-relaxed mb-4">
              Angèle Rouzaud fait partie des nombreuses femmes françaises qui se sont engagées dans la Résistance pendant l'Occupation. Ces femmes ont joué un rôle crucial, souvent méconnu, dans la lutte contre le régime nazi.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Les résistantes accomplissaient des missions variées : transmission de messages, hébergement de réfugiés et de résistants recherchés, fabrication et distribution de tracts, collecte de renseignements, et parfois actions armées.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Leur engagement les exposait aux mêmes dangers que les hommes : arrestation, torture, déportation et mort. Pourtant, leur contribution est restée longtemps dans l'ombre de l'Histoire.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                Rôle des femmes
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Agents de liaison
                </li>
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Hébergement clandestin
                </li>
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Fabrication de faux papiers
                </li>
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Transmission de renseignements
                </li>
              </ul>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                Contexte
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  France occupée (1940-1944)
                </li>
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Régime de Vichy
                </li>
                <li className="flex gap-2 text-slate-300 text-sm">
                  <span className="text-amber-500">•</span>
                  Répression nazie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ravensbrück */}
      <section id="deportation" className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            L'épreuve
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Ravensbrück - L'Enfer des Femmes
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 bg-slate-900 p-8">
              <h3 className="text-amber-400 font-serif font-bold text-xl mb-6">Le Camp de Ravensbrück</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Ravensbrück, situé à 80 km au nord de Berlin, fut le plus grand camp de concentration nazi réservé aux femmes. Ouvert en mai 1939, il a vu passer plus de 130 000 femmes et enfants.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Les détenues y subissaient le travail forcé, les expériences médicales, la faim, le froid et les violences. On estime que 30 000 à 90 000 femmes y ont péri.
              </p>
            </div>

            <div className="border border-slate-700 bg-slate-800 p-8 flex flex-col justify-center items-center text-center">
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Solidarité féminine</h3>
              <p className="text-slate-300">
                Malgré les conditions inhumaines, les détenues ont développé des réseaux de solidarité et d'entraide qui ont permis à beaucoup de survivre.
              </p>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="border border-slate-700 bg-slate-900 p-6 text-center">
              <p className="font-serif text-3xl font-bold text-amber-400">130 000+</p>
              <p className="text-sm text-slate-400 mt-2">Femmes déportées</p>
            </div>
            <div className="border border-slate-700 bg-slate-900 p-6 text-center">
              <p className="font-serif text-3xl font-bold text-amber-400">1939-1945</p>
              <p className="text-sm text-slate-400 mt-2">Période d'activité</p>
            </div>
            <div className="border border-slate-700 bg-slate-900 p-6 text-center">
              <p className="font-serif text-3xl font-bold text-amber-400">40+</p>
              <p className="text-sm text-slate-400 mt-2">Nationalités</p>
            </div>
            <div className="border border-slate-700 bg-slate-900 p-6 text-center">
              <p className="font-serif text-3xl font-bold text-amber-400">8 000</p>
              <p className="text-sm text-slate-400 mt-2">Françaises déportées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="border border-slate-700 bg-slate-800 p-12 text-center">
          <blockquote className="font-serif text-2xl italic text-white leading-relaxed">
            "Les femmes de Ravensbrück ont montré un courage et une dignité extraordinaires face à l'horreur. Leur mémoire doit être préservée pour que jamais ces atrocités ne se reproduisent."
          </blockquote>
          <p className="mt-6 text-amber-400 text-sm">
            — En mémoire des déportées de Ravensbrück
          </p>
        </div>
      </section>

      {/* Section Héritage */}
      <section id="heritage" className="bg-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Mémoire
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Devoir de Mémoire
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="border-l-2 border-amber-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-bold text-white">Reconnaissance</h3>
              </div>
              <p className="text-sm text-slate-300">
                Les résistantes déportées ont été tardivement reconnues pour leur engagement et leur sacrifice pendant la Seconde Guerre mondiale.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-purple-400" />
                <h3 className="font-bold text-white">Commémoration</h3>
              </div>
              <p className="text-sm text-slate-300">
                Chaque année, des cérémonies commémoratives honorent la mémoire des victimes de Ravensbrück et de tous les camps de concentration.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 bg-slate-900 p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
                <h3 className="font-bold text-white">Transmission</h3>
              </div>
              <p className="text-sm text-slate-300">
                Transmettre cette histoire aux nouvelles générations est essentiel pour lutter contre l'oubli et prévenir la répétition de telles horreurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGEMENT TÉMOIGNAGE */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Télécharger son témoignage</h2>
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/oaz1zio5_Rouzaud_p29_conf%C3%A9rence%2013%20mai%201945.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le témoignage d'Angèle Rouzaud</span>
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
              En mémoire d'Angèle Rouzaud et de toutes les femmes déportées à Ravensbrück.
            </p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <p className="text-xs text-slate-500">Que leur courage et leur sacrifice ne soient jamais oubliés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
