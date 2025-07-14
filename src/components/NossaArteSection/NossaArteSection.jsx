import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel'; // Importamos o nosso carrossel
import './NossaArteSection.css';

// Estes são os dados específicos para ESTE carrossel
const nossaArteSlides = [
  {
    imageSrc: '/imagem-nossa-arte-1.png',
    link: '/ake',
    // Este carrossel não tem overlay nem caption, então deixamos em branco ou removemos
  },
  {
    imageSrc: '/imagem-nossa-arte-2.png',
    link: '/rfmees',
    // Este carrossel não tem overlay nem caption, então deixamos em branco ou removemos
  },
  {
    imageSrc: '/imagem-nossa-arte-3.png',
    link: '/gui-romana',
    // Este carrossel não tem overlay nem caption, então deixamos em branco ou removemos
  },
  // Se tivesse mais imagens, adicionaria aqui...
  // { imageSrc: '/imagem-nossa-arte-2.jpg' } 
];

function NossaArteSection() {
  return (
    <section className="nossa-arte-section section-card">
      <h2 className="nossa-arte-title">
        <div>NOSSA</div>
        <div>ARTE</div>
      </h2>
      {/* Usamos o componente ImageCarousel, passando os dados que ele precisa */}
      <ImageCarousel slides={nossaArteSlides} />
    </section>
  );
}

export default NossaArteSection;