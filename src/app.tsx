import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import PersonnagesPage from "./pages/PersonnagesPage";
import CampsPage from "./pages/CampsPage";
import CartePage from "./pages/CartePage";

// Pages des personnages
import Feigelson from "./pages/Feigelson";
import Nieto from "./pages/Nieto";
import Bouteille from "./pages/Bouteille";
import Seguy from "./pages/Seguy";
import Lestage from "./pages/Lestage";
import Rolland from "./pages/Rolland";
import LesAbs from "./pages/les-abs";
import AngeleRouzaud from "./pages/angele-rouzaud";
import Nakache from "./pages/Nakache";

// Pages des camps
import Auschwitz from "./pages/Auschwitz";
import Drancy from "./pages/Drancy";
import Buchenwald from "./pages/buchenwald";
import Mauthausen from "./pages/mauthausen";
import Ravensbruck from "./pages/Ravensbruck";
import Neuengamme from "./pages/neuengamme";
import Compiegne from "./pages/Campiegne";

// Composant pour remettre le scroll à 0 lors du changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Pages avec Layout unifié */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/personnages" element={<Layout><PersonnagesPage /></Layout>} />
        <Route path="/camps" element={<Layout><CampsPage /></Layout>} />
        
        {/* Carte sans footer */}
        <Route path="/carte" element={<CartePage />} />
        
        {/* Pages de personnages */}
        <Route path="/personnage/feigelson" element={<Feigelson />} />
        <Route path="/personnage/nieto" element={<Nieto />} />
        <Route path="/personnage/bouteille" element={<Bouteille />} />
        <Route path="/personnage/seguy" element={<Seguy />} />
        <Route path="/personnage/lestage" element={<Lestage />} />
        <Route path="/personnage/rolland" element={<Rolland />} />
        <Route path="/personnage/angele-rouzaud" element={<AngeleRouzaud />} />
        <Route path="/personnage/les-abs" element={<LesAbs />} />
        <Route path="/personnage/nakache" element={<Nakache />} />
        
        {/* Pages de camps */}
        <Route path="/camp/auschwitz" element={<Auschwitz />} />
        <Route path="/camp/drancy" element={<Drancy />} />
        <Route path="/camp/buchenwald" element={<Buchenwald />} />
        <Route path="/camp/mauthausen" element={<Mauthausen />} />
        <Route path="/camp/ravensbruck" element={<Ravensbruck />} />
        <Route path="/camp/neuengamme" element={<Neuengamme />} />
        <Route path="/camp/compiegne" element={<Compiegne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
