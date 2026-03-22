import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { deportees } from '../data/deportees';

export default function PersonnagesPage() {
  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Les Personnages
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            Découvrez les parcours individuels de résistants et déportés qui ont marqué l'histoire.
            Chaque histoire témoigne du courage face à l'adversité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deportees.map((person) => (
            <Link
              key={person.id}
              to={`/personnage/${person.id}`}
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02]"
              data-testid={`personnage-card-${person.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: person.color }}>
                    {person.dates}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {person.summary}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{person.fate}</span>
              </div>
              
              {/* Path preview */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-xs text-slate-500 mb-2">Parcours :</p>
                <div className="flex flex-wrap gap-1">
                  {person.path.slice(0, 3).map((point, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300"
                    >
                      {point.location}
                    </span>
                  ))}
                  {person.path.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-400">
                      +{person.path.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
