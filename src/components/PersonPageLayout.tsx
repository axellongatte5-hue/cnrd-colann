import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface PersonPageLayoutProps {
  children: ReactNode;
}

export default function PersonPageLayout({ children }: PersonPageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="font-semibold text-lg hidden sm:block">Mémoire de la Déportation</span>
              <span className="font-semibold text-lg sm:hidden">CNRD</span>
            </Link>
            <Link 
              to="/personnages" 
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Retour aux personnages</span>
              <span className="sm:hidden">Retour</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-semibold">Mémoire de la Déportation</span>
          </div>
          <p className="text-slate-500 text-sm">
            Projet CNRD — En mémoire de tous les résistants et déportés
          </p>
          <p className="text-slate-600 text-xs mt-2">
            © 2025 — Devoir de Mémoire
          </p>
        </div>
      </footer>
    </div>
  );
}
