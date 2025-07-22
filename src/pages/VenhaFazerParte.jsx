import React from 'react';
import { Link } from 'react-router-dom';

function VenhaFazerParte() {
  return (
    <div style={{ minHeight: '100vh', background: '#1E392A', color: '#F0F0C0', position: 'relative', padding: '40px 20px', paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Seta de voltar */}
      <button onClick={() => window.location.href = '/'} style={{ position: 'absolute', top: '48px', left: '32px', color: '#F0F0C0', background: 'none', border: 'none', outline: 'none', boxShadow: 'none', textDecoration: 'none', fontSize: '4rem', fontWeight: 900, zIndex: 10 }}>&lt;</button>
      
      {/* Título grande com 'PARTE' na vertical */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', marginTop: '80px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '4rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.04em' }}>VENHA</span>
          <span style={{ fontSize: '4rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-0.04em' }}>FAZER</span>
        </div>
        <span style={{ fontSize: '2.2rem', fontWeight: 900, textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginLeft: '12px', letterSpacing: '0.1em', lineHeight: 1 }}>PARTE</span>
      </div>
      {/* Texto principal */}
      <div style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.15rem', textAlign: 'left', fontWeight: 700, lineHeight: 1.6 }}>
        <p style={{ marginBottom: '24px', textAlign: 'left' }}>Mostre pro mundo seu potencial!</p>
        <p style={{ marginBottom: '24px', textAlign: 'left' }}>
          É artista independente e tem algum projeto artístico que gostaria de trabalhar conosco? Faça parte do nosso banco de artistas!
        </p>
        <p style={{ marginBottom: '24px', textAlign: 'left' }}>
          Nosso único requisito é que você seja artista independente e queira contribuir para nossa plataforma e propósito. É super simples, nos escrever um email detalhando:<br />
          Quem você é (de que lugar do Brasil, idade, interesses e obras);<br />
          Do que se trata seu projeto;<br />
          Qual ajuda você necessita (divulgação, produção, profissionais, artigos sobre seu lançamento, rede de apoio financeiro, entre outros)
        </p>
        <p style={{ marginBottom: '24px', textAlign: 'left' }}>
          É fundamental que o seu projeto esteja ciente e alinhado com os direitos humanos e com os impactos sociais que a 2002 representa. ESTAMOS ANSIOSOS PRA TE OUVIR!
        </p>
        <p style={{ marginBottom: '12px', textAlign: 'left' }}>Mande seu portfólio para nosso email:</p>
        <p style={{ marginBottom: '24px', textAlign: 'left', fontWeight: 900, letterSpacing: '0.04em' }}>platfrm.2002@gmail.com</p>
        <p style={{ marginBottom: 0, textAlign: 'left', fontWeight: 900 }}>2002, ARTE NÃO É HOBBIE.</p>
      </div>
    </div>
  );
}

export default VenhaFazerParte; 