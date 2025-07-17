import React from 'react';
import './QuemSomosSection.css';

function QuemSomosSection({ id }) {
  return (
    <section id={id} className="quem-somos-section section-card">
      <div className="quem-somos-title-container">
        <div className="quem-somos-main-text">QUEM</div>
        <div className="quem-somos-rotated-text">SOMOS</div>
      </div>
      <p className="quem-somos-paragraph">
        EM UM MUNDO SATURADO DE ARTE DE MASSA, A 2002 É O ESPAÇO ONDE ARTISTAS INDEPENDENTES GANHAM VOZ E RECONHECIMENTO. AQUI, A CRIATIVIDADE NÃO TEM LIMITES, E CADA OBRA TEM UM ESPAÇO ÚNICO PARA BRILHAR. SE VOCÊ É UM ARTISTA QUE DESEJA SE CONECTAR COM UMA AUDIÊNCIA APAIXONADA, OU ALGUÉM EM BUSCA DE ARTE AUTÊNTICA E INOVADORA, VOCÊ ESTÁ NO LUGAR CERTO.
      </p>
      <div className="quem-somos-stats">
        <div className="stat-block">
          <p>{`NÚMERO DE ARTISTAS\nINDEPENDENTES`}</p>
          <span>5</span>
        </div>
        <div className="stat-block">
          <p>{`ARTIGOS E PROJETOS\nREALIZADOS`}</p>
          <span>1</span>
        </div>
      </div>
    </section>
  );
}

export default QuemSomosSection;