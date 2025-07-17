import React from 'react';
import { Link } from 'react-router-dom';

function GuiRomana() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
<<<<<<< HEAD
      position: 'relative',
=======
      backgroundImage: 'url(/gui-back.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transform: 'scaleX(-1)',
>>>>>>> 801a3d679366ccc2fc9c2a690e3a49e48e3b7d82
      color: '#F0F0C0', 
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '40px',
      overflow: 'hidden',
    }}>
      {/* Imagem de fundo invertida */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundImage: 'url(/gui-back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'scaleX(-1)',
        pointerEvents: 'none',
        filter: 'brightness(0.7)',
      }} />
      {/* Back button */}
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '2rem',
        zIndex: 10,
        transform: 'scaleX(-1)'
      }}>
        ←
      </Link>

      {/* Content */}
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        lineHeight: '1.6',
        transform: 'scaleX(-1)'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>gui romana</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Guilherme Romana, é um artista multi-instrumentista de 23 anos da zona leste de São Paulo, em Itaquera, e começou sua história na música em meados de 2013, apenas com um violão e suas ambições em mente, e hoje vai se integrando ao mundo do audiovisual cada vez mais.
        </p>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Atualmente é Arte-Educador no CCBB de São Paulo, além de músico com várias apresentações em sua recente e promissora carreira, tocando com artistas como: Whitney Marjorie, estranhos costumes, Peu entre outros.
        </p>
      </div>

      {/* Next artist button */}
      <Link to="/ake" style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '1rem',
        textAlign: 'right',
        zIndex: 10,
        transform: 'scaleX(-1)'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span>próximo</span>
          <span>artista</span>
          <span style={{fontSize: '1.5rem'}}>→</span>
        </div>
      </Link>
    </div>
  );
}

export default GuiRomana; 