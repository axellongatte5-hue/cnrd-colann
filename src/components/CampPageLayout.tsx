import { Link } from 'react-router-dom';

// Types
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface Deporte {
  nom: string;
  date: string;
  statut: string;
  details: string;
}

interface CampLink {
  name: string;
  country: string;
  path: string;
}

interface CampPageProps {
  // Hero
  heroImage?: string;
  dates: string;
  title: string;
  subtitle: string;
  
  // Introduction
  introTitle: string;
  introText: string[];
  
  // Timeline
  timeline: TimelineEvent[];
  
  // Structure
  structureTitle: string;
  structureSubtitle: string;
  structureText: string[];
  structureBlocks?: { title: string; text: string }[];
  
  // Process / Details
  processTitle?: string;
  processSubtitle?: string;
  processText?: string[];
  processList?: string[];
  
  // Conditions
  conditionsTitle?: string;
  conditionsSubtitle?: string;
  conditionsCards?: { title: string; subtitle: string; text: string }[];
  
  // Statistics
  stats: Stat[];
  statsSecondary?: Stat[];
  
  // Deportes
  deportes?: Deporte[];
  
  // Liberation
  liberationTitle: string;
  liberationText: string[];
  
  // Memorial
  memorialQuote: string;
  memorialAuthor: string;
  memorialStat: string;
  memorialStatLabel: string;
  
  // Navigation
  otherCamps: CampLink[];
}

export default function CampPageLayout({
  heroImage,
  dates,
  title,
  subtitle,
  introTitle,
  introText,
  timeline,
  structureTitle,
  structureSubtitle,
  structureText,
  structureBlocks,
  processTitle,
  processSubtitle,
  processText,
  processList,
  conditionsTitle,
  conditionsSubtitle,
  conditionsCards,
  stats,
  statsSecondary,
  deportes,
  liberationTitle,
  liberationText,
  memorialQuote,
  memorialAuthor,
  memorialStat,
  memorialStatLabel,
  otherCamps,
}: CampPageProps) {
  return (
    <main className="bg-slate-900 min-h-screen">
      {/* HERO */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-slate-800 to-slate-900">
        {heroImage && (
          <>
            <img
              src={heroImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          </>
        )}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <Link 
            to="/camps" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors mb-8"
          >
            <span>←</span>
            <span className="text-sm">Retour aux camps</span>
          </Link>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            {dates}
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 h-px w-24 bg-amber-500" />
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl text-balance">
              {introTitle}
            </h2>
            <div className="mt-4 h-px w-16 bg-amber-500" />
          </div>
          <div className="md:w-2/3">
            {introText.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-300 mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-slate-800 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Chronologie
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            Les dates clés
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="relative mt-16">
            {/* Ligne verticale */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-600 md:left-1/2 md:-translate-x-px" />
            
            <div className="flex flex-col gap-12">
              {timeline.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right md:self-start"
                      : "md:pl-12 md:self-end"
                  }`}
                >
                  {/* Point sur la ligne */}
                  <div
                    className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-900 md:top-1 ${
                      index % 2 === 0
                        ? "md:left-auto md:-right-1.5"
                        : "md:-left-1.5"
                    }`}
                  />
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
          {structureSubtitle}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
          {structureTitle}
        </h2>
        <div className="mt-4 h-px w-16 bg-amber-500" />

        <div className="mt-12 space-y-6">
          {structureText.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>

        {structureBlocks && structureBlocks.length > 0 && (
          <div className="mt-12 space-y-8">
            {structureBlocks.map((block, i) => (
              <div key={i} className="border-l-2 border-slate-600 pl-6 hover:border-amber-500 transition-colors">
                <h3 className="font-serif text-xl font-bold text-white">
                  {block.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PROCESS / DETAILS (optional) */}
      {processTitle && (
        <section className="bg-slate-800 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-col gap-12 md:flex-row md:gap-16">
              <div className="md:w-1/3">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
                  {processSubtitle}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
                  {processTitle}
                </h2>
                <div className="mt-4 h-px w-16 bg-amber-500" />
              </div>
              <div className="md:w-2/3">
                {processText && processText.map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-slate-300 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {processList && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {processList.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONDITIONS (optional) */}
      {conditionsTitle && conditionsCards && (
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            {conditionsSubtitle}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            {conditionsTitle}
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {conditionsCards.map((card, i) => (
              <div key={i} className="border border-slate-700 bg-slate-800 p-8 hover:border-amber-500/50 transition-colors">
                <h3 className="font-serif text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {card.subtitle}
                </p>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STATISTICS */}
      <section className="bg-slate-800 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            En chiffres
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            L'ampleur du crime
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          {/* Stats principales */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-amber-400">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-2 text-sm text-slate-400">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Stats secondaires */}
          {statsSecondary && statsSecondary.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statsSecondary.map((stat, i) => (
                <div key={i} className="border border-slate-700 bg-slate-900 p-6 text-center">
                  <p className="font-serif text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-amber-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DEPORTES (optional) */}
      {deportes && deportes.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
              Destins brisés
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              Des vies fauchées
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-amber-500" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {deportes.map((d, i) => (
              <div key={i} className="border border-slate-700 bg-slate-800 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {d.nom}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Déporté le {d.date}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    d.statut === "Évadé" || d.statut === "Libéré" || d.statut === "Survécu"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-slate-700 text-slate-400"
                  }`}>
                    {d.statut}
                  </span>
                </div>
                <div className="mt-6 h-px w-full bg-slate-700" />
                <p className="mt-6 leading-relaxed text-slate-300">
                  {d.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LIBERATION */}
      <section className="bg-slate-800 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            La fin
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            {liberationTitle}
          </h2>
          <div className="mt-4 h-px w-16 bg-amber-500" />

          <div className="mt-12 space-y-6">
            {liberationText.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORIAL */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
            Devoir de mémoire
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            Ne jamais oublier
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-amber-500" />

          <blockquote className="mx-auto mt-12 max-w-2xl border-l-2 border-amber-500 py-4 pl-6 text-left">
            <p className="font-serif text-xl italic leading-relaxed text-white">
              "{memorialQuote}"
            </p>
            <p className="mt-4 text-sm text-slate-400">
              — {memorialAuthor}
            </p>
          </blockquote>

          <div className="mt-16 border-t border-slate-700 pt-12">
            <p className="font-serif text-4xl font-bold text-white">
              {memorialStat}
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-amber-400">
              {memorialStatLabel}
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION INTER-CAMPS */}
      <section className="border-t border-slate-700 bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
              Autres lieux de mémoire
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold text-white md:text-3xl">
              Découvrir les autres camps
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-amber-500" />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {otherCamps.map((camp, i) => (
              <Link
                key={i}
                to={camp.path}
                className="group border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-amber-500/50"
              >
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
                  {camp.country}
                </p>
                <h3 className="mt-1 font-serif text-base font-bold text-white">
                  {camp.name}
                </h3>
                <p className="mt-3 text-xs font-medium text-amber-400 group-hover:underline">
                  Voir →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-700 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-lg font-bold text-white">
              Concours National de la Résistance et de la Déportation
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Ce site a été réalisé dans le cadre du Concours de la Résistance.
              <br />
              En mémoire de toutes les victimes.
            </p>
            <div className="mt-4 h-px w-16 bg-amber-500" />
            <p className="text-xs text-slate-500">
              © 2025 — Devoir de Mémoire
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
