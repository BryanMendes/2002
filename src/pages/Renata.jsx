import React from 'react';
import { Link } from 'react-router-dom';

const imagens = [
  { src: '/renata/0.png', legenda: 'Obra 0' },
  { src: '/renata/1 (2).png', legenda: `Miragem\nAquarela sobre papel\n20,9x 29,6\n2023` },
  { src: '/renata/2 (2).png', legenda: `Julia\nAquarela sobre papel\n1,7 x 29,7\n2020` },
  { src: '/renata/3 (2).png', legenda: `Maria José\nAquarela sobre papel\n30,5 x 40,6\n2025` },
  { src: '/renata/4 (2).png', legenda: `Grão\nAquarela sobre papel\n29,7 x 21\n2022` },
];

function Renata() {
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
      {/* Imagem principal com "pintura" */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
        <img src="/renata/0.png" alt="Pintura Renata" style={{ width: '100vw', maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', display: 'block' }} />
        <h3 className="info-image-text" style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#F0F0F0', margin: 0, lineHeight: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>PINTURA</h3>
      </div>
      {/* Título */}
      <h1 style={{fontSize: '2.5rem', margin: '24px 0 0 0', color: '#F0F0F0', fontWeight: 900, letterSpacing: '-0.04em'}}>Renata</h1>
      <h1 style={{fontSize: '2.5rem', margin: '0 0 24px 0', color: '#F0F0F0', fontWeight: 900, letterSpacing: '-0.04em'}}>Martinelli</h1>
      {/* Texto descritivo */}
      <div style={{ maxWidth: '600px', margin: '0 auto 32px auto', lineHeight: 1.6, color: '#F0F0F0', fontSize: '1.1rem', textAlign: 'justify', fontWeight: 500 }}>
        <p style={{marginBottom: '20px'}}>
          Renata Martinelli é Artista Visual e Curadora Independente, Historiadora da Arte e Pesquisadora. Desenvolve pesquisas relacionadas ao corpo feminino, memória, território e processos criativos. Sua produção artística inclui obras em aquarela, guache, gravura, papelaria artesanal e outras linguagens. Participou da exposição Portas Abertas (2021), onde expôs as obras Origem (2021) e Infinito Particular - Insônia (2021).
          Participou como curadora do projeto Curadoria de Vida (2020), exposição virtual, e também no Projeto Planeta.Doc - Festival de Filmes Socioambientais, em Santa Catarina (2022).
          Atualmente reside e trabalha na cidade de São Paulo.
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
      <Link to="/bianca" style={{
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
      <Link to="/" style={{
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

export default Renata; 