import { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { Users, MapPin, X, Filter, Eye, EyeOff, Home, Map } from 'lucide-react';
import { deportees, camps } from '../data/deportees';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const createIcon = (color, size = 24) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

const createCampIcon = (color, type) => {
  const size = type === 'extermination' ? 32 : 28;
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${type === 'transit' ? '4px' : '50%'};
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2">
        ${type === 'extermination' 
          ? '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>'
          : '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
        }
      </svg>
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

// Component to handle map fitting
function MapFitter({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, map]);
  return null;
}

export default function CartePage() {
  const [searchParams] = useSearchParams();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [showPersons, setShowPersons] = useState(true);
  const [showCamps, setShowCamps] = useState(true);
  const [showPaths, setShowPaths] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Initialize from URL params
  useEffect(() => {
    const personId = searchParams.get('person');
    const campId = searchParams.get('camp');
    
    if (personId) {
      const person = deportees.find(d => d.id === personId);
      if (person) setSelectedPerson(person);
    }
    if (campId) {
      const camp = camps.find(c => c.id === campId);
      if (camp) setSelectedCamp(camp);
    }
  }, [searchParams]);

  // Calculate bounds for map
  const bounds = useMemo(() => {
    const points = [];
    
    if (selectedPerson) {
      selectedPerson.path.forEach(p => points.push([p.lat, p.lng]));
    } else if (selectedCamp) {
      points.push([selectedCamp.lat, selectedCamp.lng]);
      // Add nearby points
      deportees.forEach(d => {
        d.path.forEach(p => {
          if (Math.abs(p.lat - selectedCamp.lat) < 5 && Math.abs(p.lng - selectedCamp.lng) < 5) {
            points.push([p.lat, p.lng]);
          }
        });
      });
    } else {
      camps.forEach(c => points.push([c.lat, c.lng]));
      deportees.forEach(d => d.path.forEach(p => points.push([p.lat, p.lng])));
    }
    
    return points.length > 0 ? points : [[48.8566, 2.3522]];
  }, [selectedPerson, selectedCamp]);

  return (
    <div className="h-screen flex flex-col bg-slate-900">
      {/* Navigation */}
      <nav className="h-16 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="font-semibold text-lg text-white hidden sm:block">Mémoire de la Déportation</span>
              <span className="font-semibold text-lg text-white sm:hidden">CNRD</span>
            </Link>
            <div className="flex items-center gap-1">
              <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all">
                <Home className="w-4 h-4" />
                Accueil
              </Link>
              <Link to="/personnages" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all">
                <Users className="w-4 h-4" />
                Personnages
              </Link>
              <Link to="/camps" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all">
                <MapPin className="w-4 h-4" />
                Camps
              </Link>
              <Link to="/carte" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-amber-500/20 text-amber-400 transition-all">
                <Map className="w-4 h-4" />
                Carte
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex relative" data-testid="carte-page">
      {/* Sidebar */}
      <div className={`absolute top-0 left-0 h-full z-[1000] transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">Carte Interactive</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Filters */}
            <div className="space-y-2">
              <button
                onClick={() => setShowPersons(!showPersons)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  showPersons ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Personnages
                </span>
                {showPersons ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setShowCamps(!showCamps)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  showCamps ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Camps
                </span>
                {showCamps ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setShowPaths(!showPaths)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  showPaths ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Parcours
                </span>
                {showPaths ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Persons list */}
          <div className="flex-1 overflow-y-auto p-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Personnages ({deportees.length})
            </h3>
            <div className="space-y-2">
              {deportees.map((person) => (
                <button
                  key={person.id}
                  onClick={() => {
                    setSelectedPerson(selectedPerson?.id === person.id ? null : person);
                    setSelectedCamp(null);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedPerson?.id === person.id
                      ? 'bg-slate-700 ring-2 ring-amber-500'
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: person.color }}
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{person.name}</div>
                      <div className="text-xs text-slate-500">{person.dates}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 mt-6">
              Camps ({camps.length})
            </h3>
            <div className="space-y-2">
              {camps.map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => {
                    setSelectedCamp(selectedCamp?.id === camp.id ? null : camp);
                    setSelectedPerson(null);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedCamp?.id === camp.id
                      ? 'bg-slate-700 ring-2 ring-amber-500'
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: camp.color }}
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{camp.name}</div>
                      <div className="text-xs text-slate-500">{camp.country}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected info */}
          {(selectedPerson || selectedCamp) && (
            <div className="p-4 border-t border-slate-700 bg-slate-800">
              {selectedPerson && (
                <div>
                  <h4 className="font-bold text-white mb-1">{selectedPerson.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">{selectedPerson.summary}</p>
                  <Link
                    to={`/personnage/${selectedPerson.id}`}
                    className="text-xs text-amber-400 hover:text-amber-300"
                  >
                    Voir la fiche complète →
                  </Link>
                </div>
              )}
              {selectedCamp && (
                <div>
                  <h4 className="font-bold text-white mb-1">{selectedCamp.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">{selectedCamp.description}</p>
                  <Link
                    to={`/camp/${selectedCamp.id}`}
                    className="text-xs text-amber-400 hover:text-amber-300"
                  >
                    Voir la fiche complète →
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Toggle sidebar button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-4 left-4 z-[1000] p-3 bg-slate-900/95 backdrop-blur-md text-white rounded-lg border border-slate-700 shadow-lg hover:bg-slate-800 transition-colors"
        >
          <Filter className="w-5 h-5" />
        </button>
      )}

      {/* Map */}
      <div className="flex-1">
        <MapContainer
          center={[48.8566, 5.0]}
          zoom={5}
          className="h-full w-full"
          style={{ background: '#1e293b' }}
          zoomControl={false}
        >
          <ZoomControl position="topright" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          
          <MapFitter bounds={bounds} />

          {/* Camp markers */}
          {showCamps && camps.map((camp) => (
            <Marker
              key={camp.id}
              position={[camp.lat, camp.lng]}
              icon={createCampIcon(camp.color, camp.type)}
              eventHandlers={{
                click: () => {
                  setSelectedCamp(camp);
                  setSelectedPerson(null);
                },
              }}
            >
              <Popup>
                <div className="text-center min-w-[150px]">
                  <h3 className="font-bold text-lg">{camp.name}</h3>
                  <p className="text-sm text-gray-600">{camp.country}</p>
                  <p className="text-xs text-gray-500 mt-1">{camp.dates}</p>
                  <p className="text-xs text-red-600 font-medium mt-1">{camp.victims} victimes</p>
                  <Link
                    to={`/camp/${camp.id}`}
                    className="text-xs text-blue-600 hover:underline mt-2 block"
                  >
                    Voir la fiche →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Person paths - show all as dashed when no selection, only selected when clicked */}
          {showPaths && deportees.map((person) => {
            const isSelected = selectedPerson?.id === person.id;
            const pathCoords = person.path.map(p => [p.lat, p.lng]);
            
            // Si un personnage est sélectionné, n'afficher que son parcours
            if (selectedPerson && !isSelected) return null;
            
            return (
              <Polyline
                key={`path-${person.id}`}
                positions={pathCoords}
                pathOptions={{
                  color: person.color,
                  weight: isSelected ? 4 : 2,
                  opacity: isSelected ? 1 : 0.6,
                  dashArray: isSelected ? null : '5, 10',
                }}
              />
            );
          })}
        
           {/* Person markers - only show when person is selected */}
          {showPersons && selectedPerson && deportees.map((person) => {
            const isSelected = selectedPerson?.id === person.id;
            
            if (!isSelected) return null;

            return person.path.map((point, idx) => (
              <Marker
                key={`${person.id}-${idx}`}
                position={[point.lat, point.lng]}
                icon={createIcon(person.color, isSelected ? 20 : 14)}
                eventHandlers={{
                  click: () => {
                    setSelectedPerson(person);
                    setSelectedCamp(null);
                  },
                }}
              >
                <Popup>
                  <div className="min-w-[180px]">
                    <h3 className="font-bold">{person.name}</h3>
                    <p className="text-sm font-medium" style={{ color: person.color }}>
                      {point.label}
                    </p>
                    <p className="text-sm">{point.location}</p>
                    <p className="text-xs text-gray-500">{point.date}</p>
                    <p className="text-xs mt-1">{point.description}</p>
                    <Link
                      to={`/personnage/${person.id}`}
                      className="text-xs text-blue-600 hover:underline mt-2 block"
                    >
                      Voir la fiche →
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ));
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-700 p-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Légende</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
            <span className="text-slate-300">Camp d'extermination</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white" />
            <span className="text-slate-300">Camp de concentration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500 border-2 border-white" />
            <span className="text-slate-300">Camp de transit</span>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-700">
            <div className="w-3 h-3 rounded-full bg-slate-400 border-2 border-white" />
            <span className="text-slate-300">Étape de parcours</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
