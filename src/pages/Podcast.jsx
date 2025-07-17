import React, { useRef, useState } from 'react';

const audioSrc = '/trailer%20puro%20som%205.wav';
const coverImg = '/imagem-nossa-arte-1.png'; // Nova imagem de capa

function Podcast() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

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
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#222', borderRadius: 16, padding: 24, color: '#fff', boxShadow: '0 2px 16px #0004' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16, fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase' }}>trailer</h2>
      <img src={coverImg} alt="Capa do Podcast" style={{ width: '100%', borderRadius: 12, marginBottom: 16 }} />
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={handlePlayPause} style={{ fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {isPlaying ? '❚❚' : '►'}
        </button>
        <div style={{ flex: 1 }}>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            step={0.1}
            style={{ width: '100%' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginTop: 4 }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="Volume">🔊</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
}

export default Podcast; 