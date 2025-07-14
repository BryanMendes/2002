import React, { useState } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

  const fecharMenu = (e) => {
    if (e) e.preventDefault();
    setMenuAberto(false);
  }

  const handleLinkClick = (path) => {
    setMenuAberto(false);
  }

  return (
    <header className={`header-container ${menuAberto ? 'aberto' : 'fechado'}`}>
      <div className="header-fechado-content">
        <div className="logo-cd-group">
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="logo-2002">2002.</div>
          </Link>
          {isDesktop && (
            <Link to="/puro-som" className="cd-button">
              <img src="/gif-1.gif" alt="Ícone de CD animado" />
            </Link>
          )}
        </div>
        <div className="controles">
          {/* Em telas pequenas, mostrar CD e menu hamburguer lado a lado */}
          {!isDesktop && (
            <>
              <Link to="/puro-som" className="cd-button">
                <img src="/gif-1.gif" alt="Ícone de CD animado" />
              </Link>
              <div className="menu-hamburguer" onClick={() => setMenuAberto(true)}>
                <div className="linha"></div>
                <div className="linha"></div>
                <div className="linha"></div>
              </div>
            </>
          )}
        </div>
        {/* Menu horizontal só aparece no desktop */}
        {isDesktop && (
          <nav className="navbar-desktop">
            <ul>
              <li><Link to="/">INÍCIO</Link></li>
              <li><Link to="/artigos">ARTIGOS</Link></li>
              <li><Link to="/apoia-se">APOIA-SE</Link></li>
              <li className="action-item">
                <ActionButton />
              </li>
            </ul>
          </nav>
        )}
      </div>
      {/* Menu hamburguer aberto no mobile */}
      {!isDesktop && (
        <div className="header-aberto-content" style={{ display: menuAberto ? 'block' : 'none' }}>
          <nav className="navbar-aberta">
            <ul>
              <li><Link to="/" onClick={() => handleLinkClick('/')}>INÍCIO</Link></li>
              <li><Link to="/artigos" onClick={() => handleLinkClick('/artigos')}>ARTIGOS</Link></li>
              <li><Link to="/apoia-se" onClick={() => handleLinkClick('/apoia-se')}>APOIA-SE</Link></li>
              <li className="action-item">
                <ActionButton onClick={() => handleLinkClick('/venha-fazer-parte')} />
              </li>
              <li className="close-item">
                <button className="close-button" onClick={fecharMenu}></button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;