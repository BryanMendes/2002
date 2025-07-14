import React from 'react';
import { Link } from 'react-router-dom';

function Rfmees() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundImage: 'url(/rmfees-back.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#F0F0C0', 
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '40px',
      position: 'relative'
    }}>
      {/* Back button */}
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '2rem',
        zIndex: 10
      }}>
        ←
      </Link>

      {/* Content */}
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>rmfees</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Rfmees, originario do Bairro dos Pimentas em Guarulhos, tem 23 anos e está cursando História da Arte, ele está interessado em trazer análises e resenhas sobre assuntos diversos desde da arte tradicional até os fenômenos artísticos pós-Internet. Além das críticas de arte, rfmees ainda conta com produções de sua própria autoria que vão de poemas a artes visuais.
        </p>
      </div>

      {/* Next artist button */}
      <Link to="/gui-romana" style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        color: '#F0F0C0',
        textDecoration: 'none',
        fontSize: '1rem',
        textAlign: 'right',
        zIndex: 10
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

export default Rfmees; 