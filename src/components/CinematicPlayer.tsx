'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

interface CinematicPlayerProps {
  videoUrl?: string;
  posterUrl: string;
  title?: string;
}

export function CinematicPlayer({
  videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-in-front-of-a-fire-41557-large.mp4',
  posterUrl,
  title = 'AMUSEMAC 2024 SHOWREEL // MAD ABOUT CINEMA'
}: CinematicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00:00:00');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const cur = video.currentTime;
      const dur = video.duration || 1;
      setProgress((cur / dur) * 100);

      const mins = Math.floor(cur / 60);
      const secs = Math.floor(cur % 60);
      const frames = Math.floor((cur % 1) * 24);
      setCurrentTime(`00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    soundEngine.playMechanicalClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      soundEngine.playReelHum();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playMechanicalClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundEngine.playMechanicalClick();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    videoRef.current.currentTime = ratio * (videoRef.current.duration || 1);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-cinema bg-[#060606] overflow-hidden rounded-xs border border-[#F4EFE6]/15 group select-none shadow-2xl"
      onClick={togglePlay}
      data-cursor-action={isPlaying ? 'PAUSE' : 'PLAY REEL'}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* 2.39:1 Anamorphic Framing Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-6 opacity-80 transition-opacity group-hover:opacity-100">
        
        {/* Top Info Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/80 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded w-fit border border-[#F4EFE6]/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="tracking-wider uppercase">{title}</span>
          </div>
        </div>

        {/* Center Play Button Overlay when Paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0D0D0C]/90 text-[#F4EFE6] border border-[#D89B37]/60 backdrop-blur-md shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <Play className="w-5 h-5 text-[#D89B37] fill-[#D89B37]" />
              <span className="text-xs font-mono-film font-bold tracking-widest uppercase">
                WATCH THE REEL [24 FPS]
              </span>
            </div>
          </div>
        )}

        {/* Bottom Control Bar */}
        <div 
          className="flex flex-col gap-2 pt-2 bg-linear-to-t from-black/90 via-black/40 to-transparent p-4 rounded-b"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrubber Bar */}
          <div 
            className="w-full h-1.5 bg-[#F4EFE6]/20 rounded-full cursor-pointer relative overflow-hidden group/scrub"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-[#D89B37] transition-all duration-75 relative"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono-film text-[#F4EFE6]/80 pt-1">
            <div className="flex items-center gap-4">
              <button 
                onClick={togglePlay}
                className="hover:text-[#D89B37] transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <span className="text-[#D89B37] font-semibold">{currentTime}</span>
              <span className="hidden sm:inline text-[#F4EFE6]/40">35MM ANAMORPHIC // 2.39:1</span>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleMute}
                className="hover:text-[#D89B37] transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button 
                onClick={toggleFullscreen}
                className="hover:text-[#D89B37] transition-colors"
                aria-label="Toggle Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
