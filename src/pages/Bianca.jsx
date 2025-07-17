import React from 'react';
import { Link } from 'react-router-dom';

const imagens = [
  { src: '/bianca/0.jpg', legenda: 'Foto 0' },
  { src: '/bianca/1.jpg', legenda: `Coisa de gente grande\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
  { src: '/bianca/2.jpg', legenda: `Sem título\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
  { src: '/bianca/3.jpg', legenda: `Adilon\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
  { src: '/bianca/4.jpg', legenda: `Conversas\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
  { src: '/bianca/5.jpg', legenda: `Chorojô\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
  { src: '/bianca/6.jpg', legenda: `Chorojô II\nFotografia analógica digitalizada\n3024 X 2005 px\nTupaciguara, MG, 2025` },
];

function Bianca() {
  return (
    <div style={{ minHeight: '100vh', background: '#1E392A', color: '#F0F0F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.2rem', textAlign: 'center', position: 'relative', padding: '40px', paddingTop: '100px' }}>
      {/* Botão de voltar */}
      <Link to="/" style={{
        position: 'absolute',
        top: '80px',
        left: '20px',
        color: '#F0F0F0',
        textDecoration: 'none',
        fontSize: '2rem',
        zIndex: 10
      }}>
        ←
      </Link>
      {/* Imagem principal com "fotografia" */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
        <img src="/bianca/0.jpg" alt="Fotografia Bianca" style={{ width: '100vw', maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', display: 'block' }} />
        <div style={{ position: 'absolute', bottom: '32px', left: '20px', textAlign: 'left', width: 'auto' }}>
          <span style={{ display: 'block', fontSize: '3.2rem', fontWeight: 900, textTransform: 'uppercase', color: '#F0F0F0', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>FOTO</span>
          <span style={{ display: 'block', fontSize: '3.2rem', fontWeight: 900, textTransform: 'uppercase', color: '#F0F0F0', lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginTop: '0.1em' }}>GRAFIA</span>
        </div>
      </div>
      {/* Título */}
      <h1 style={{fontSize: '2.5rem', margin: '24px 0 0 0', color: '#F0F0F0', fontWeight: 900, letterSpacing: '-0.04em'}}>Bianca</h1>
      
      {/* Texto descritivo */}
      <div style={{ maxWidth: '600px', margin: '0 auto 32px auto', lineHeight: 1.6, color: '#F0F0F0', fontSize: '1.1rem', textAlign: 'justify', fontWeight: 500 }}>
        <p style={{marginBottom: '20px'}}>
          Bianca é uma artista periférica de São Mateus, Zona Leste de São Paulo, nascida em 2001. Em seu trabalho, ela procura traduzir em fotografia suas experiências pessoais, reflexões acerca da vida e atualmente pesquisa as relações culturais entre natureza e arte, estudo que também influencia seu olhar/produção artística.
        </p>
      </div>
      {/* Galeria de imagens */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', marginTop: '16px', width: '100%' }}>
        {imagens.slice(1).map((img, idx) => (
          <div key={idx} style={{ maxWidth: '100vw', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', boxShadow: 'none' }}>
            <img src={img.src} alt={img.legenda} style={{ width: '100vw', maxWidth: '100%', borderRadius: '8px', marginBottom: '8px', objectFit: 'cover', display: 'block' }} />
            <span style={{ fontSize: '1rem', color: '#F0F0F0', marginTop: '4px', whiteSpace: 'pre-line' }}>{img.legenda}</span>
          </div>
        ))}
      </div>
      {/* Botão de próximo artista */}
      <Link to="/" style={{
        position: 'absolute',
        bottom: '32px',
        right: '20px',
        color: '#F0F0F0',
        textDecoration: 'none',
        fontSize: '1rem',
        textAlign: 'center',
        zIndex: 10
      }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>próximo</span>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
          <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&rarr;</span>
        </div>
      </Link>
      {/* Botão de artista anterior */}
      <Link to="/renata" style={{
        position: 'absolute',
        bottom: '32px',
        left: '20px',
        color: '#F0F0F0',
        textDecoration: 'none',
        fontSize: '1rem',
        textAlign: 'center',
        zIndex: 10
      }}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0'}}>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>artista</span>
          <span style={{display: 'block', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '0.05em'}}>anterior</span>
          <span style={{fontSize: '1.5rem', marginTop: '2px'}}>&larr;</span>
        </div>
      </Link>
    </div>
  );
}

export default Bianca; 