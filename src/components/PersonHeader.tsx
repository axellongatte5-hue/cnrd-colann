import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NavSection {
  id: string;
  label: string;
}

interface PersonHeaderProps {
  sections: NavSection[];
  personName?: string;
}

export default function PersonHeader({ sections, personName }: PersonHeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
      data-testid="person-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Bouton retour à gauche */}
          <Link 
            to="/personnages" 
            className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors shrink-0"
            data-testid="back-to-characters-btn"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Retour</span>
          </Link>

          {/* Séparateur */}
          <div className="h-6 w-px bg-slate-700 hidden sm:block" />

          {/* Logo/Titre au centre */}
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <span className="font-semibold text-white hidden md:block">Mémoire de la Déportation</span>
          </Link>

          {/* Barre de navigation - sections */}
          <div className="flex-1 flex items-center justify-end gap-1 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all whitespace-nowrap"
                data-testid={`nav-section-${section.id}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
