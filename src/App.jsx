import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, Suspense, lazy } from 'react';
import { NO_HEADER_FOOTER_PAGES } from './utils/constants';
import Home from './pages/Home.jsx';

// Lazy loading das páginas menos críticas
const ApoiaSe = lazy(() => import('./pages/ApoiaSe.jsx'));
const VenhaFazerParte = lazy(() => import('./pages/VenhaFazerParte.jsx'));
const Artigos = lazy(() => import('./pages/Artigos.jsx'));
const Ake = lazy(() => import('./pages/Ake.jsx'));
const Rfmees = lazy(() => import('./pages/Rfmees.jsx'));
const GuiRomana = lazy(() => import('./pages/GuiRomana.jsx'));
const Fotografia = lazy(() => import('./pages/Fotografia.jsx'));
const Pintura = lazy(() => import('./pages/Pintura.jsx'));
const DoisMilEDois = lazy(() => import('./pages/DoisMilEDois.jsx'));
const PuroSomPage = lazy(() => import('./pages/PuroSomPage.jsx'));
const Loja = lazy(() => import('./pages/Loja.jsx'));
const Bianca = lazy(() => import('./pages/Bianca.jsx'));
const Renata = lazy(() => import('./pages/Renata.jsx'));
const Podcast = lazy(() => import('./pages/Podcast.jsx'));

// Loading component
function LoadingSpinner() {
  return (
    <div style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      color: '#F0F0C0', 
      fontSize: '1.5rem' 
    }}>
      Carregando...
    </div>
  );
}

function App() {
  const location = useLocation();
  const scrollPositions = useRef(new Map());
  
  // Pages that should not have header and footer
  const shouldShowHeaderFooter = !NO_HEADER_FOOTER_PAGES.includes(location.pathname);

  // Scroll restoration logic
  useEffect(() => {
    const currentPath = location.pathname;
    const isNoHeaderFooterPage = NO_HEADER_FOOTER_PAGES.includes(currentPath);
    
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
      <Suspense fallback={<LoadingSpinner />}>
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
          <Route path="/loja" element={<Loja />} />
          <Route path="/bianca" element={<Bianca />} />
          <Route path="/renata" element={<Renata />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
      </Suspense>
      {shouldShowHeaderFooter && <Footer />}
    </>
  )
}

export default App