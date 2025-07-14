import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import './ArchivesSection.css';

function ArchivesSection() {
  return (
    <section className="archives-section section-card">
      {/* Bloco com o vídeo de fundo */}
      <div className="archives-video-block">
        <video autoPlay loop muted playsInline className="archives-video">
          {/* Usamos o mesmo vídeo da Hero Section */}
          <source src="/video-1.mp4" type="video/mp4" />
        </video>
        <div className="archives-overlay">
          <h2>ARQUIVOS</h2>
          <button>ACESSAR</button>
        </div>
      </div>
      {/* Bloco com o conteúdo de texto e botões */}
      <div className="archives-cta-block">
        <ActionButton />
        <p className="archives-paragraph">
          EM UM MUNDO SATURADO DE ARTE DE MASSA, A 2002 É O ESPAÇO ONDE ARTISTAS INDEPENDENTES GANHAM VOZ E RECONHECIMENTO. AQUI, A CRIATIVIDADE NÃO TEM LIMITES, E CADA OBRA TEM UM ESPAÇO ÚNICO PARA BRILHAR. SE VOCÊ É UM ARTISTA QUE DESEJA SE CONECTAR COM UMA AUDIÊNCIA APAIXONADA, OU ALGUÉM EM BUSCA DE ARTE AUTÊNTICA E INOVADORA, VOCÊ ESTÁ NO LUGAR CERTO.
        </p>
        <Link to="/apoia-se" className="saiba-mais-button">SAIBA MAIS</Link>
      </div>
    </section>
  );
}

export default ArchivesSection;