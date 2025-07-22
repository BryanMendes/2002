import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage/LazyImage';

function GuiRomana() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
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
        pointerEvents: 'none',
        filter: 'brightness(0.7)',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <LazyImage src="/gui-back.png" alt="Fundo Gui Romana" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
      </div>
      {/* Back button */}
      <button onClick={() => window.history.back()} style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '2rem',
        zIndex: 2,
        background: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        cursor: 'default'
      }}>
        ←
      </button>

      {/* Content */}
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        lineHeight: '1.6',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>gui romana</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Guilherme Romana, é um artista multi-instrumentista de 23 anos da zona leste de São Paulo, em Itaquera, e começou sua história na música em meados de 2013, apenas com um violão e suas ambições em mente, e hoje vai se integrando ao mundo do audiovisual cada vez mais.
        </p>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Atualmente é Arte-Educador no CCBB de São Paulo, além de músico com várias apresentações em sua recente e promissora carreira, tocando com artistas como: Whitney Marjorie, estranhos costumes, Peu entre outros.
        </p>
      </div>

      {/* Next/Previous artist buttons */}
      <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 800, margin: '0 auto', padding: '0 20px', zIndex: 10 }}>
        <Link to="/rfmees" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'left', flex: 1 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
          </div>
        </Link>
        <Link to="/ake" style={{ color: '#F0F0C0', textDecoration: 'none', fontSize: '1rem', textAlign: 'right', flex: 1 }}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0}}>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
            <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
            <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default GuiRomana; 