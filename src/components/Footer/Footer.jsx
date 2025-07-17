// Em: src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      {/* O logo agora está sozinho no topo */}
      <div className="footer-logo">
        2002.
      </div>
      
      {/* As colunas estão agrupadas no seu próprio container */}
      <div className="footer-columns-container">
        <div className="footer-column">
          <h5>ALGUMA AJUDA?</h5>
          <ul>
            <li><a href="/">INÍCIO</a></li>
            <li><span style={{color: '#F0F0F0', cursor: 'default'}}>PROJETOS</span></li>
            <li><span style={{color: '#F0F0F0', cursor: 'default'}}>INSPIRE-SE</span></li>
            <li><a href="/2002">2002</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>COMECE POR AQUI</h5>
          <ul>
            <li><a href="/#quem-somos">QUEM SOMOS</a></li>
            <li><a href="/#nossa-arte">NOSSA ARTE</a></li>
            <li><a href="/#novidade-semanal">NOVIDADE SEMANAL</a></li>
            <li><a href="/#artigos">ARTIGOS</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>REDES SOCIAIS</h5>
          <ul>
            <li><a href="https://www.instagram.com/2002_pltfrm/" target="_blank" rel="noopener noreferrer">INSTA</a></li>
            <li><a href="#">TIKTOK</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;