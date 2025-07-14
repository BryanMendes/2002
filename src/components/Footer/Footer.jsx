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
            <li><a href="#">INÍCIO</a></li>
            <li><a href="#">PROJETOS</a></li>
            <li><a href="#">INSPIRE-SE</a></li>
            <li><a href="#">2002</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>COMECE POR AQUI</h5>
          <ul>
            <li><a href="#">QUEM SOMOS</a></li>
            <li><a href="#">NOSSA ARTE</a></li>
            <li><a href="#">NOVIDADE SEMANAL</a></li>
            <li><a href="#">ARTIGOS</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>REDES SOCIAIS</h5>
          <ul>
            <li><a href="#">INSTA</a></li>
            <li><a href="#">TIKTOK</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;