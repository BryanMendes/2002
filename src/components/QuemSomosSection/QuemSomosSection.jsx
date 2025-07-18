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
        A nova plataforma de arte independente!
        <br /><br />
        Criada e desenvolvida em 2025 por três artistas pretos de São Paulo, a 2002 é uma enorme plataforma que estimula e aprecia a arte independente de suas mais variadas formas. A ideia é simples e complexa ao mesmo tempo, assim como produzir arte e trampar CLT ao mesmo tempo.
        <br /><br />
        A 2002 procura ajudar artistas com financiamento coletivo para projetos independentes que queiram trabalhar conosco. A capitalização encima desse trabalho será acordado entre ambas as partes fazendo com que a cena de artistas independente brasileira cresça com todos nós. Estamos aqui pela arte.
        <br /><br />
        Somos também um site estilo plataforma que está reunindo arte visual, literatura, jornalismo, música, podcast, moda, exposições online, além de contar com a loja oficial 2002 e outras marcas. Tudo isso contribui para conexões, amizades, inspirações e também profissionalização do processo artístico independente. 
        <br /><br />
        <span className="arte-nao-e-hobbie">ARTE NÃO É HOBBIE.</span>
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