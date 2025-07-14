import Hero from '../components/Hero/Hero.jsx';
import QuemSomosSection from '../components/QuemSomosSection/QuemSomosSection.jsx';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel.jsx';
import PuroSomSection from '../components/PuroSomSection/PuroSomSection.jsx';
import NossaArteSection from '../components/NossaArteSection/NossaArteSection.jsx';
import InfoSection from '../components/InfoSection/InfoSection.jsx';
import ArchivesSection from '../components/ArchivesSection/ArchivesSection.jsx';
import NewsletterSection from '../components/NewsletterSection/NewsletterSection.jsx';

// Dados para o primeiro carrossel (Idealizadores)
const creatorSlides = [
  {
    imageSrc: '/imagem-carrossel-1.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/ake',
  },
  {
    imageSrc: '/imagem-carrossel-2.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/rfmees',
  },
  {
    imageSrc: '/imagem-carrossel-3.png',
    captionText: 'AKÉ, RUBENS E GUI DOS IDEALIZADORES DO PROJETO.',
    link: '/gui-romana',
  },
];

function Home() {
  return (
    <>
      <Hero />
      <hr className="section-separator" />
      <QuemSomosSection />
      <hr className="section-separator" />
      <ImageCarousel slides={creatorSlides} />
      <hr className="section-separator" />
      <PuroSomSection />
      <hr className="section-separator" />
      {/* Não adicionar <hr> após NossaArteSection pois ela já tem linha interna */}
      <NossaArteSection />
      {/* <hr className="section-separator" /> REMOVIDO */}
      <InfoSection 
        title="NOVIDADE SEMANAL"
        imageSrc="/image-2.png"
        imageText="AKÉ"
        paragraphText="EM UM MUNDO SATURADO DE ARTE DE MASSA, A 2002 É O ESPAÇO ONDE ARTISTAS INDEPENDENTES GANHAM VOZ E RECONHECIMENTO. AQUI, A CRIATIVIDADE NÃO TEM LIMITES..."
      />
      <hr className="section-separator" />
      <InfoSection 
        title="ARTIGOS"
        imageSrc="/imagem-3.png"
        imageText="ARTE"
        paragraphText="RENATA MARTINELLI É ARTISTA VISUAL E CURADORA INDEPENDENTE, MOTORIZADORA DA ARTE E PSICOCULTURA. DESENVOLVE PESQUISAS RELACIONADAS AO CORPO FEMININO..."
      />
      <hr className="section-separator" />
      <ArchivesSection />
      <hr className="section-separator" />
      <NewsletterSection />
      {/* <hr className="section-separator" /> REMOVIDO do final */}
    </>
  );
}

export default Home; 