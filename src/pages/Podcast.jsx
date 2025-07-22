import React, { useRef, useState } from 'react';
import LazyImage from '../components/LazyImage/LazyImage';

const audioSrc = '/trailer%20puro%20som%205.wav';
const coverImg = '/capa-trailer.jpeg'; // Nova imagem de capa

function Podcast() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ 
      maxWidth: 280, 
      margin: '20px auto', 
      background: 'rgba(0,0,0,0.3)', 
      borderRadius: 20, 
      padding: 20, 
      color: '#F0F0C0', 
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(240,240,192,0.1)'
    }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: 12, 
        fontWeight: 700, 
        letterSpacing: '0.05em', 
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>trailer</h3>
      
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <LazyImage 
          src={coverImg} 
          alt="Capa do Podcast" 
          style={{ 
            width: '100%', 
            borderRadius: 12, 
            aspectRatio: '1/1',
            objectFit: 'cover'
          }} 
        />
        
        {/* Play button overlay */}
        <button 
          onClick={handlePlayPause} 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(240,240,192,0.9)',
            border: 'none',
            color: '#1E392A',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
            e.target.style.background = 'rgba(240,240,192,1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translate(-50%, -50%) scale(1)';
            e.target.style.background = 'rgba(240,240,192,0.9)';
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      />
      
      {/* Progress bar */}
      <div style={{ marginBottom: 12 }}>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          step={0.1}
          style={{ 
            width: '100%',
            height: 4,
            background: 'rgba(240,240,192,0.2)',
            borderRadius: 2,
            outline: 'none',
            cursor: 'pointer'
          }}
        />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '0.75rem', 
          marginTop: 4,
          opacity: 0.7
        }}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      {/* Volume control - compact */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 8,
        opacity: showControls ? 1 : 0.6,
        transition: 'opacity 0.3s ease'
      }}>
        <button
          onClick={() => setShowControls(!showControls)}
          style={{
            background: 'none',
            border: 'none',
            color: '#F0F0C0',
            cursor: 'pointer',
            padding: 4,
            borderRadius: 4,
            opacity: 0.7
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9v6h4l5 5V4L7 9H3z" fill="currentColor"/>
            <path d="M16.5 12c0-1.77-1-3.29-2.5-4.03v8.06A4.978 4.978 0 0016.5 12z" fill="currentColor"/>
          </svg>
        </button>
        {showControls && (
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            style={{ 
              flex: 1,
              height: 3,
              background: 'rgba(240,240,192,0.2)',
              borderRadius: 2,
              outline: 'none',
              cursor: 'pointer'
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Podcast; 