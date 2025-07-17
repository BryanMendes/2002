import React, { useState, useEffect } from 'react';
import ActionButton from '../ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BREAKPOINTS, NAV_ITEMS } from '../../utils/constants';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);
  const [showHeader, setShowHeader] = useState(!isDesktop);
  const [mouseY, setMouseY] = useState(0);

  // Atualizar showHeader quando isDesktop mudar
  useEffect(() => {
    setShowHeader(!isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      setShowHeader(true);
      return;
    }
    
    const handleMouseMove = (e) => {
      setMouseY(e.clientY);
      if (e.clientY < 60) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  const fecharMenu = (e) => {
    if (e) e.preventDefault();
    setMenuAberto(false);
  }

  const handleLinkClick = (path) => {
    setMenuAberto(false);
  }

  return (
    <header className={`header-container ${menuAberto ? 'aberto' : 'fechado'}${showHeader ? ' header-visible' : ' header-hidden'}`}>
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
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
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
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => handleLinkClick(item.path)}>
                    {item.label}
                  </Link>
                </li>
              ))}
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