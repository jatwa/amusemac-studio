'use client';

import React from 'react';
import { CinematicPlayer } from '@/components/CinematicPlayer';
import { Film } from 'lucide-react';
import { amusemacMedia } from '@/lib/media';

export function ShowreelSection() {
  return (
    <section 
      id="showreel"
      className="relative w-full bg-[#080808] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-12">
        
        {/* Massive Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F4EFE6]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#D89B37]">
              <Film className="w-3.5 h-3.5" />
              <span>[ 06 // SHOWREEL • CANVAS COMPILATION ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
              WATCH THE REEL<span className="text-[#D89B37]">.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-film text-[#F4EFE6]/60 space-y-1 text-right">
            <p className="text-[#D89B37]">AMUSEMAC STUDIO SHOWCASE</p>
            <p>ADVERTISING • FILMS • MUSIC VIDEOS</p>
            <p>MAD ABOUT CINEMA</p>
          </div>
        </div>

        {/* Anamorphic Player Component with Real Amusemac Video/Poster */}
        <div className="w-full">
          <CinematicPlayer
            posterUrl={amusemacMedia.projects.musicVideos}
            embedUrl="https://www.youtube.com/embed/NeBcPlOF57Q"
            title="AMUSEMAC STUDIO // MAD ABOUT CINEMA"
          />
        </div>

        {/* Bottom Technical Slate Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono-film text-[#F4EFE6]/60 border-t border-[#F4EFE6]/10">
          <div>
            <span className="text-[#D89B37] block">[ PRINCIPAL CANVAS ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Featuring commercial work, corporate films, documentaries, and music visuals produced by Amusemac Studio.
            </p>
          </div>
          <div>
            <span className="text-[#D89B37] block">[ SOUND DESIGN ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Sync sound capture & acoustic layering crafted by FTII sound alumni.
            </p>
          </div>
          <div className="md:text-right">
            <span className="text-[#D89B37] block">[ STUDIO LOCATION ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Malad West, Mumbai, Maharashtra, India.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}