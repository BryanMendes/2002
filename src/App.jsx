import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
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
  
  // Pages that should not have header and footer
  const shouldShowHeaderFooter = !NO_HEADER_FOOTER_PAGES.includes(location.pathname);

  // Force scroll to top on every route change
  useEffect(() => {
    // Use setTimeout to ensure it runs after React has updated the DOM
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);

    return () => clearTimeout(timer);
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