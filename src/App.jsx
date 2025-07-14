import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Home from './pages/Home.jsx';
import ApoiaSe from './pages/ApoiaSe.jsx';
import VenhaFazerParte from './pages/VenhaFazerParte.jsx';
import Artigos from './pages/Artigos.jsx';
import Ake from './pages/Ake.jsx';
import Rfmees from './pages/Rfmees.jsx';
import GuiRomana from './pages/GuiRomana.jsx';
import Fotografia from './pages/Fotografia.jsx';
import Pintura from './pages/Pintura.jsx';
import DoisMilEDois from './pages/DoisMilEDois.jsx';
import PuroSomPage from './pages/PuroSomPage.jsx';

function App() {
  const location = useLocation();
  const scrollPositions = useRef(new Map());
  
  // Pages that should not have header and footer
  const noHeaderFooterPages = ['/ake', '/rfmees', '/gui-romana', '/puro-som'];
  const shouldShowHeaderFooter = !noHeaderFooterPages.includes(location.pathname);

  // Scroll restoration logic
  useEffect(() => {
    const currentPath = location.pathname;
    const isNoHeaderFooterPage = noHeaderFooterPages.includes(currentPath);
    
    if (isNoHeaderFooterPage) {
      // Always scroll to top for artist pages
      window.scrollTo(0, 0);
    } else {
      // For other pages, use saved scroll position or scroll to top
      const savedPosition = scrollPositions.current.get(currentPath);
      
      if (savedPosition !== undefined) {
        // Restore saved scroll position
        window.scrollTo(0, savedPosition);
      } else {
        // New page, scroll to top
        window.scrollTo(0, 0);
      }
    }

    // Save scroll position when leaving the page (only for non-artist pages)
    const handleBeforeUnload = () => {
      if (!isNoHeaderFooterPage) {
        scrollPositions.current.set(currentPath, window.scrollY);
      }
    };

    // Save scroll position when navigating away (only for non-artist pages)
    const handleScroll = () => {
      if (!isNoHeaderFooterPage) {
        scrollPositions.current.set(currentPath, window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apoia-se" element={<ApoiaSe />} />
        <Route path="/venha-fazer-parte" element={<VenhaFazerParte />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/ake" element={<Ake />} />
        <Route path="/rfmees" element={<Rfmees />} />
        <Route path="/gui-romana" element={<GuiRomana />} />
        <Route path="/fotografia" element={<Fotografia />} />
        <Route path="/pintura" element={<Pintura />} />
        <Route path="/2002" element={<DoisMilEDois />} />
        <Route path="/puro-som" element={<PuroSomPage />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  )
}

export default App