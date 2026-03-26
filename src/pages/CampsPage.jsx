import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MapPin } from 'lucide-react';
import { camps } from '../data/deportees';

export default function CampsPage() {
  const campsByType = {
    extermination: camps.filter(c => c.type === 'extermination'),
    concentration: camps.filter(c => c.type === 'concentration'),
    transit: camps.filter(c => c.type === 'transit'),
  };

  return (
    <div className="min-h-screen py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-6 transition-colors"
            data-testid="back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Les Camps
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl">
            Lieux de mémoire à travers l'Europe. Ces sites témoignent de l'horreur 
            du système concentrationnaire nazi.
          </p>
        </div>

        {/* Camps d'extermination */}
        {campsByType.extermination.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              Centre de mise à mort
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campsByType.extermination.map((camp) => (
                <CampCard key={camp.id} camp={camp} />
              ))}
            </div>
          </section>
        )}

        {/* Camps de concentration */}
        {campsByType.concentration.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-amber-500" />
              Camps de concentration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campsByType.concentration.map((camp) => (
                <CampCard key={camp.id} camp={camp} />
              ))}
            </div>
          </section>
        )}

        {/* Camps de transit */}
        {campsByType.transit.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-blue-500" />
              Camps de transit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campsByType.transit.map((camp) => (
                <CampCard key={camp.id} camp={camp} />
              ))}
            </div>
          </section>
        )}

        {/* Link to map */}
        <div className="text-center mt-12 p-8 bg-slate-800/50 rounded-xl border border-slate-700">
          <MapPin className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Voir sur la carte</h3>
          <p className="text-slate-400 mb-4">
            Explorez l'emplacement géographique de tous les camps
          </p>
          <Link
            to="/carte"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all"
            data-testid="open-map-btn"
          >
            <MapPin className="w-4 h-4" />
            Ouvrir la carte
          </Link>
        </div>
      </div>
    </div>
  );
}

function CampCard({ camp }) {
  return (
    <Link
      to={`/camp/${camp.id}`}
      className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl p-5 transition-all duration-300"
      data-testid={`camp-page-card-${camp.id}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: camp.color }}
        />
        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
        {camp.name}
      </h3>
      <p className="text-sm text-slate-500 mb-2">
        {camp.country} • {camp.dates}
      </p>
      <p className="text-xs text-slate-400 mb-3 line-clamp-2">
        {camp.description}
      </p>
      <p className="text-xs font-medium text-red-400">
        {camp.victims} victimes
      </p>
    </Link>
  );
}
