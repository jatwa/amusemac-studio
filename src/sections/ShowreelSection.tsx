'use client';

import React from 'react';
import { CinematicPlayer } from '@/components/CinematicPlayer';
import { Film, Play, Sparkles } from 'lucide-react';

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
              <span>[ 06 // 2024–2025 COMPILATION ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-none">
              WATCH THE REEL<span className="text-[#D89B37]">.</span>
            </h2>
          </div>

          <div className="text-xs font-mono-film text-[#F4EFE6]/60 space-y-1 text-right">
            <p className="text-[#D89B37]">DURATION: 02:45 MIN</p>
            <p>35MM ANAMORPHIC // 2.39:1 / 24 FPS</p>
            <p>ORIGINAL SCORE BY AMUSEMAC AUDIO</p>
          </div>
        </div>

        {/* Anamorphic Player Component */}
        <div className="w-full">
          <CinematicPlayer
            posterUrl="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400&auto=format&fit=crop"
            videoUrl="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-in-front-of-a-fire-41557-large.mp4"
            title="AMUSEMAC CINEMATIC CUT 2024"
          />
        </div>

        {/* Bottom Technical Slate Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-mono-film text-[#F4EFE6]/60 border-t border-[#F4EFE6]/10">
          <div>
            <span className="text-[#D89B37] block">[ PRINCIPAL REEL ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Featuring scenes from Bandhishein, Mirage, Nettle / Nagaland, and select commissioned commercial works.
            </p>
          </div>
          <div>
            <span className="text-[#D89B37] block">[ SOUNDTRACK ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Live acoustic foley captured on Mumbai soundstages blended with traditional instruments.
            </p>
          </div>
          <div className="md:text-right">
            <span className="text-[#D89B37] block">[ FORMAT ]</span>
            <p className="text-sm font-editorial text-[#F4EFE6]/80 pt-1">
              Color timed in DaVinci Resolve with custom Kodak 5219 film profile.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
