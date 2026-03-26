import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, Map, Award, Download } from 'lucide-react';
import { deportees, camps } from '../data/deportees';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium mb-8">
            Projet CNRD 2026
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Les rescapés des camps de la mort<br />
            <span className="text-amber-400">vous parlent</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Un hommage aux résistants et déportés qui ont combattu pour notre liberté.
            Découvrez leurs parcours à travers l'Europe occupée.
          </p>
          <p className="text-lg text-amber-400 italic mb-12">
            "Ce que nous avons vécu ne doit jamais être oublié"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/carte"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all transform hover:scale-105"
              data-testid="explore-map-btn"
            >
              <Map className="w-5 h-5" />
              Explorer la carte interactive
            </Link>
            <Link
              to="/personnages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
              data-testid="view-characters-btn"
            >
              <Users className="w-5 h-5" />
              Voir les personnages
            </Link>
          </div>
        </div>
      </section>

      {/* Section Téléchargement PDF */}
      <section className="py-12 px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="https://customer-assets.emergentagent.com/job_cnrd-preview/artifacts/abby1f7b_Conf%C3%A9rence_13%20mai%201945_livret_DEF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 transition-all duration-300 group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">Télécharger le compte rendu de la conférence</span>
          </a>
        </div>
      </section>

      {/* Personnages Section */}
      <section className="py-20 px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Les Personnages</h2>
              <p className="text-slate-400">Découvrez les parcours individuels de résistants et déportés qqui ont témoignés le 13 mai 1945 à Toulouse</p>
            </div>
            <Link
              to="/personnages"
              className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Voir tous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deportees.slice(0, 6).map((person) => (
              <Link
                key={person.id}
                to={`/personnage/${person.id}`}
                className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02]"
                data-testid={`person-card-${person.id}`}
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
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {person.summary}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Award className="w-3 h-3" />
                  <span>{person.fate}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Camps Section */}
      <section className="py-20 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Les Camps</h2>
              <p className="text-slate-400">Lieux de mémoire à travers l'Europe</p>
            </div>
            <Link
              to="/camps"
              className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Voir tous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {camps.map((camp) => (
              <Link
                key={camp.id}
                to={`/camp/${camp.id}`}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 rounded-xl p-5 transition-all duration-300"
                data-testid={`camp-card-${camp.id}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: camp.color }}
                  />
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    camp.type === 'extermination' ? 'bg-red-500/20 text-red-400' :
                    camp.type === 'concentration' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {camp.type === 'extermination' ? 'Extermination' :
                     camp.type === 'concentration' ? 'Concentration' : 'Transit'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {camp.name}
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  {camp.country} • {camp.dates}
                </p>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {camp.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Carte */}
      <section className="py-20 px-8 bg-gradient-to-r from-amber-500/10 to-amber-600/5 border-y border-amber-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Carte Interactive
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Explorez les parcours de déportation à travers l'Europe.
            Suivez les itinéraires depuis l'arrestation jusqu'aux camps.
          </p>
          <Link
            to="/carte"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-all transform hover:scale-105"
          >
            <Map className="w-5 h-5" />
            Accéder à la carte
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Le Projet CNRD</h3>
            <p className="text-slate-300 leading-relaxed text-center">
              Ce site a été créé dans le cadre du Concours National de la Résistance et de la Déportation
              pour honorer la mémoire des résistants et déportés qui ont sacrifié leur vie pour notre liberté.
              Leur courage et leur détermination ne doivent jamais être oubliés.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
