'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { behindTheLensMoments, BehindTheLensMoment } from '@/data/behindTheLens';
import { Camera, Film, MapPin, Eye } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function BehindTheLensSection() {
  const [activeMoment, setActiveMoment] = useState<BehindTheLensMoment>(behindTheLensMoments[0]);

  return (
    <section 
      id="behind-the-lens"
      className="relative w-full bg-[#090908] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F4EFE6]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#D89B37]">
              <Camera className="w-3.5 h-3.5" />
              <span>[ 05 // FIELD LOGS & STUDIO LIFE ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              BEHIND THE LENS<span className="text-[#D89B37]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-editorial text-[#F4EFE6]/60 max-w-md">
            No corporate headshots. Real sets, dusty 3 AM soundstage calls, high-altitude field audio, and the human obsession that breathes into every frame.
          </p>
        </div>

        {/* Documentary Photo Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {behindTheLensMoments.map((moment, idx) => (
            <div
              key={moment.id}
              onClick={() => {
                soundEngine.playMechanicalClick();
                setActiveMoment(moment);
              }}
              data-cursor-text="LOG"
              className={`group cursor-pointer p-4 rounded-xs border transition-all duration-300 space-y-4 ${
                activeMoment.id === moment.id
                  ? 'bg-[#181816] border-[#D89B37]'
                  : 'bg-[#121210] border-[#F4EFE6]/10 hover:border-[#F4EFE6]/30'
              }`}
            >
              {/* Image Frame with 35mm Slate Info */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs bg-[#1A1A1A]">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover film-image group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Slate Overlay */}
                <div className="absolute top-2 left-2 px-2 py-1 bg-black/75 rounded text-[9px] font-mono-film text-[#D89B37]">
                  {moment.rollNumber}
                </div>

                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/75 rounded text-[9px] font-mono-film text-[#F4EFE6]/80">
                  {moment.slateData.fps} • {moment.slateData.lens}
                </div>
              </div>

              {/* Slate Metadata & Field Note */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/50">
                  <span className="text-[#D89B37] font-semibold">{moment.projectRef}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{moment.location}</span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                  {moment.title}
                </h3>

                <p className="text-xs font-editorial text-[#F4EFE6]/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {moment.notes}
                </p>
              </div>

              {/* Technical Slate Box */}
              <div className="pt-2 border-t border-[#F4EFE6]/5 grid grid-cols-3 gap-1 text-[10px] font-mono-film text-[#F4EFE6]/40">
                <div>ROLL: <span className="text-[#F4EFE6]/80">{moment.slateData.roll}</span></div>
                <div>SCENE: <span className="text-[#F4EFE6]/80">{moment.slateData.scene}</span></div>
                <div>TAKE: <span className="text-[#F4EFE6]/80">{moment.slateData.take}</span></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
