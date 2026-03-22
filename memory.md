"# PRD - Mémoire de la Déportation (CNRD)

## Contexte
Site web créé pour le **Concours National de la Résistance et de la Déportation** (CNRD 2025) en hommage aux résistants et déportés qui ont combattu pour la liberté.

## Source
- **Repo GitHub original**: https://github.com/axellongatte5-hue/CNRD.git
- **Date de migration**: 20 janvier 2026
- **Date d'audit**: 28 janvier 2026

## Audit réalisé

### Bugs corrigés (28 janvier 2026)

#### Bugs Critiques (5)
1. ✅ **CampsPage.jsx** - Structure de fichier cassée
   - Le composant CampCard était défini en haut du fichier sans déclaration
   - Les imports étaient au milieu du fichier
   - Code incomplet à la fin
   
2. ✅ **Feigelson.tsx** - Guillemets échappés corrompus (`\\"` au lieu de `\"`)
   
3. ✅ **Nieto.tsx** - Mêmes guillemets corrompus

4. ✅ **Seguy.tsx** - Mêmes guillemets corrompus

5. ✅ **Lestage.tsx** - Mêmes guillemets corrompus

#### Bugs Majeurs (4)
6. ✅ **angele-rouzaud.tsx** - Design incohérent (fond blanc vs thème sombre)
   - Converti vers le design système avec Tailwind classes
   
7. ✅ **Rolland.tsx** - Styles inline JavaScript au lieu de Tailwind
   - Converti vers le design système avec Tailwind classes
   
8. ✅ **deportees.js** - Données incomplètes pour les personnages `les-abs` et `angele-rouzaud`
   - Ajout des entrées avec parcours et coordonnées

9. ✅ **data-testid** - Ajout des identifiants de test manquants sur les éléments interactifs

### Points vérifiés
- ✅ Build TypeScript réussi (0 erreurs)
- ✅ Build Vite production réussi
- ✅ Toutes les routes fonctionnelles
- ✅ Design cohérent sur toutes les pages (thème sombre slate-900)

## Architecture technique
- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Build**: Vite 5.4
- **Carte interactive**: Leaflet + react-leaflet
- **Routing**: react-router-dom v7

## Fonctionnalités implémentées

### Pages principales
- ✅ **Accueil** - Hero section, aperçu des personnages et camps
- ✅ **Personnages** - Liste des 8 résistants/déportés
- ✅ **Camps** - Liste des 7 camps par catégorie
- ✅ **Carte interactive** - Visualisation géographique avec Leaflet

### Pages de personnages (8)
- ✅ Raphaël Feigelson (1926-2021) - Auschwitz
- ✅ Jaime Nieto López (1913-1951) - Buchenwald
- ✅ Robert Bouteille (1904-?) - Buchenwald
- ✅ Georges Séguy (1927-2016) - Mauthausen
- ✅ Suzanne Lestage - Ravensbrück/Mauthausen
- ✅ Yves Rolland - Neuengamme/Buchenwald
- ✅ Angèle Rouzaud - Ravensbrück
- ✅ Jeanne & Jean (les-abs) - Ravensbrück

### Pages de camps (7)
- ✅ Auschwitz-Birkenau (Extermination)
- ✅ Buchenwald (Concentration)
- ✅ Mauthausen (Concentration)
- ✅ Ravensbrück (Concentration)
- ✅ Neuengamme (Concentration)
- ✅ Drancy (Transit)
- ✅ Compiègne-Royallieu (Transit)

### Carte interactive
- ✅ Affichage des camps avec markers colorés par type
- ✅ Parcours de déportation (lignes pointillées)
- ✅ Sélection de personnages pour voir leurs trajets
- ✅ Filtres (personnages, camps, parcours)
- ✅ Légende complète
- ✅ Popups informatifs

## Améliorations possibles (Backlog)
- P1: Ajouter des photos historiques des personnages
- P1: Timeline interactive globale
- P2: Mode offline avec Service Worker
- P2: Version anglaise du site
- P2: Améliorer l'accessibilité (aria-labels, focus management)
- P3: Audit SEO et meta tags
"
