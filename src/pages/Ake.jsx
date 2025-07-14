import React from 'react';
import { Link } from 'react-router-dom';

function Ake() {
  const imagens = [
    {
      src: '/ake/c4f1a41002a2edad741eee96aabe3f7e617f253f (1).png',
      legenda: 'Aké em momento de criação artística',
    },
    {
      src: '/ake/0490eb6edd19ffc72b995491476beea78feedf45 (1).png',
      legenda: 'Detalhe do processo de pintura',
    },
    {
      src: '/ake/73e460fae82568bcbc54cca5ce126addff842700 (1).png',
      legenda: 'Obra finalizada por Aké',
    },
    {
      src: '/ake/fe710f0d908967b148fbc3c354fdb1f761e4d61d (1).png',
      legenda: 'Aké em exposição coletiva',
    },
    {
      src: '/ake/9660a2589b5d2c1521104bcf8dbf3bf4e71fe4ad (1).png',
      legenda: 'Trabalho em andamento no ateliê',
    },
    {
      src: '/ake/b2d1239dcb021f62b7c2af35aed6e5c382480b91 (1).png',
      legenda: 'Aké e sua paleta de cores',
    },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundImage: 'url(/ake-back.jpg)',
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
        <h1 style={{fontSize: '3rem', marginBottom: '30px', color: '#F0F0C0'}}>ake</h1>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Nascido em 2002 na capital de São Paulo, AKÉ usa a música e o audiovisual em geral como sua forma principal de expressão. Atualmente trabaLha como arte educador no CCBB São Paulo tendo participado de inúmeros movimentos sociais dentro e fora da instituição, como por exemplo, a criação do primeiro protocolo anti discriminação da história do Banco do Brasil e do movimento que pede a federalização das investigações de chacinas policiais ocorridas no Brasil.
        </p>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          O nome AKÉ vem do termo "arché" que na filosofia significa o elemento primordial de todas as coisas (ex: água). Originalmente o nome é norueguês e muda totalmente de conceito na proposta do artista.
        </p>
        <p style={{marginBottom: '20px', textAlign: 'justify'}}>
          Em sua concepção "AKÉ" é a representação da arte como elemento primordial em seu universo, além de soar forte e tribal, nos remetendo à África, berço da civilização, criatividade e inteligência humana. AKÉ significa criatividade e reconhecimento ancestral a partir da arte.
        </p>
        {/* Galeria de imagens */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          marginTop: '32px',
        }}>
          {imagens.map((img, idx) => (
            <div key={idx} style={{
              background: 'rgba(30,57,42,0.95)',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              padding: '16px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <img src={img.src} alt={img.legenda} style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '12px',
              }} />
              <span style={{ fontSize: '1rem', color: '#F0F0C0', marginTop: '4px' }}>{img.legenda}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next artist button */}
      <Link to="/rfmees" style={{
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

export default Ake; 