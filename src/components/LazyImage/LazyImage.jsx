import React, { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, className, style, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} style={{ width: '100%', height: '100%' }}>
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={className}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            width: '100%',
            height: 'auto',
            ...style
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
      {isInView && hasError && (
        <div
          className={className}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#222',
            color: '#fff',
            width: '100%',
            height: '300px',
            ...style
          }}
        >
          Imagem não encontrada
        </div>
      )}
    </div>
  );
}

export default LazyImage;