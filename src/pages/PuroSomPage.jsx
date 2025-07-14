import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PuroSomPage.css';

function PuroSomPage() {
  const navigate = useNavigate();

  return (
    <div className="puro-som-page-container">
      <header className="puro-som-page-header">
        <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Voltar">
          &#60;
        </button>
      </header>
      <main className="puro-som-page-main">
        <h1 className="puro-som-page-title">
          <div>PURO</div>
          <div>SOM<span className="green-dot">.</span></div>
        </h1>
        <p className="puro-som-page-subtitle">A NOSTALGIA DA RÁDIO FM...</p>
        <div className="puro-som-page-body">
          <p>O projeto PURO SOM é uma celebração à era de ouro do rádio FM, trazendo de volta a magia das playlists cuidadosamente selecionadas, das vozes marcantes dos locutores e da emoção de descobrir novas músicas a cada sintonia.</p>
          <p>Inspirado nas rádios que marcaram gerações, nosso objetivo é proporcionar uma experiência sonora nostálgica, mas com um toque contemporâneo, conectando passado e presente através da música.</p>
          <p>Prepare-se para embarcar em uma viagem musical única, onde cada faixa conta uma história e cada programa é feito com paixão e dedicação.</p>
        </div>
      </main>
      <button className="play-button-footer" aria-label="Play">
        &#9654;
      </button>
    </div>
  );
}

export default PuroSomPage; 