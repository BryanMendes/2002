import React, { useState } from 'react';

function ApoiaSe() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#1E392A', color: '#F0F0C0', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '32px' }}>Apoia-se</h1>
      <p style={{ maxWidth: 600, fontSize: '1.2rem', textAlign: 'center', lineHeight: 1.5 }}>
        Como uma plataforma independente e agregadora, também precisamos de investimentos e ajuda financeira para conseguir entregar o máximo que a arte pode construir. Por isso contamos com uma aba Apoia-se para você que quiser contribuir com o nosso projeto de maneira rápida e fundamental.<br /><br />
        <span
          style={{ color: '#9DFF70', cursor: 'pointer', textDecoration: 'underline', fontWeight: 700 }}
          onClick={() => setModalOpen(true)}
        >
          Clique para saber mais.
        </span>
        <br /><br />
        Pra que você estará contribuindo?<br /><br />
        Esse dinheiro investido será revertido em pagamentos à artistas, fotógrafos, designers, produção de futuros eventos da plataforma, no podcast Puro Som, produção da nossa loja oficial 2002, DJ’s, lançamentos musicais e de audiovisual como um todo. Portanto, você estará contribuindo com todo cenário de arte independente brasileira, bem como com seus representantes.
      </p>
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#1E392A',
            color: '#F0F0C0',
            padding: '32px 24px',
            borderRadius: '12px',
            maxWidth: 400,
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '18px', color: '#9DFF70' }}>Como funciona o Apoia-se?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
              Você pode contribuir com o valor que desejar. Todo apoio é fundamental para mantermos a 2002 viva e expandindo a arte independente no Brasil!
            </p>
            <img src="/qrcode.jpeg" alt="QR Code Apoia-se" style={{ width: '180px', height: '180px', margin: '0 auto 12px auto', display: 'block', borderRadius: '8px', background: '#fff' }} />
            <div style={{ fontSize: '1.1rem', color: '#9DFF70', fontWeight: 700, marginBottom: '18px' }}>
              chave: platfrm.2002@gmail.com
            </div>
            <button
              style={{
                background: '#9DFF70',
                color: '#1E392A',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 24px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                marginTop: '8px'
              }}
              onClick={() => setModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApoiaSe; 