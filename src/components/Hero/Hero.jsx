// src/components/Hero/Hero.jsx
import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Otimizar carregamento do vídeo
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="hero-container">
      {/* O vídeo de fundo */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video"
        preload="auto"
        poster="/video-poster.jpg" // Adicionar poster se disponível
      >
        <source src="/video-1.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* O conteúdo que fica sobre o vídeo */}
      <div className="hero-content">
        <h1 className="hero-title">2002.</h1>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
}

export default Hero;