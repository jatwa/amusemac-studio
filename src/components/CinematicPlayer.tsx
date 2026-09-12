'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Maximize, Film } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

interface CinematicPlayerProps {
  embedUrl?: string;
  videoUrl?: string;
  posterUrl: string;
  title?: string;
  aspect?: 'cinema' | 'video';
}

export function CinematicPlayer({
  embedUrl,
  videoUrl,
  posterUrl,
  title = 'AMUSEMAC STUDIO // MAD ABOUT CINEMA',
  aspect = 'cinema'
}: CinematicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startPlayback = () => {
    soundEngine.playMechanicalClick();
    soundEngine.playReelHum();
    setIsPlaying(true);
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

  const getCleanEmbedUrl = () => {
    if (embedUrl) {
      return embedUrl.includes('?') 
        ? `${embedUrl}&autoplay=1&mute=0&rel=0` 
        : `${embedUrl}?autoplay=1&mute=0&rel=0`;
    }
    if (videoUrl && videoUrl.includes('youtube.com/watch?v=')) {
      const id = videoUrl.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&rel=0`;
    }
    return '';
  };

  const activeEmbed = getCleanEmbedUrl();

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspect === 'cinema' ? 'aspect-cinema' : 'aspect-video'} bg-[#060606] overflow-hidden rounded-xs border border-[#F4EFE6]/15 group select-none shadow-2xl`}
    >
      {/* If playing & embed exists, show iframe player */}
      {isPlaying && activeEmbed ? (
        <iframe
          src={activeEmbed}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        /* Poster / Interactive Cover */
        <div 
          onClick={startPlayback}
          className="relative w-full h-full cursor-pointer"
          data-cursor-action="PLAY REEL"
        >
          <Image
            src={posterUrl}
            alt={title}
            fill
            priority
            className="object-cover group-hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

          {/* Top Info Slate */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/80 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded border border-[#F4EFE6]/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="tracking-wider uppercase">{title}</span>
            </div>
          </div>

          {/* Center Cinematic Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0D0D0C]/90 text-[#F4EFE6] border border-[#D89B37]/60 backdrop-blur-md shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <Play className="w-5 h-5 text-[#D89B37] fill-[#D89B37]" />
              <span className="text-xs font-mono-film font-bold tracking-widest uppercase">
                WATCH VERIFIED REEL [24 FPS]
              </span>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs font-mono-film text-[#F4EFE6]/80 bg-black/60 backdrop-blur-xs px-4 py-2 rounded border border-[#F4EFE6]/10">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#D89B37]" />
              <span className="text-[#D89B37]">OFFICIAL AMUSEMAC STUDIO MEDIA</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="hover:text-[#D89B37] transition-colors"
              aria-label="Toggle Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
