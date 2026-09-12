'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { disciplines, Discipline } from '@/data/disciplines';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function DisciplinesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const activeDiscipline = hoveredIndex !== null ? disciplines[hoveredIndex] : disciplines[0];

  return (
    <section 
      id="services"
      className="relative w-full bg-[#121210] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F4EFE6]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#D89B37]">
              <Layers className="w-3.5 h-3.5" />
              <span>[ 04 // STUDIO DISCIPLINES & SERVICES ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              WHAT WE CRAFT<span className="text-[#D89B37]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-editorial text-[#F4EFE6]/60 max-w-md">
            From monumental feature film soundstages to intimate character-driven documentaries and boundary-pushing music visuals.
          </p>
        </div>

        {/* Dynamic Editorial Split: Left List / Right Live Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 7 Cols: Massive Interactive Editorial List */}
          <div className="lg:col-span-7 divide-y divide-[#F4EFE6]/10">
            {disciplines.map((disc, idx) => (
              <div
                key={disc.id}
                onMouseEnter={() => {
                  soundEngine.playMechanicalClick(0.015);
                  setHoveredIndex(idx);
                }}
                data-cursor-action="EXPLORE"
                className={`group py-5 sm:py-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  hoveredIndex === idx ? 'pl-4 border-l-2 border-[#D89B37]' : 'hover:pl-2'
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs font-mono-film text-[#D89B37] opacity-60 group-hover:opacity-100">
                      {disc.number}
                    </span>
                    <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-colors ${
                      hoveredIndex === idx ? 'text-[#D89B37]' : 'text-[#F4EFE6] group-hover:text-[#F4EFE6]/90'
                    }`}>
                      {disc.name}
                    </h3>
                  </div>
                  
                  <span className="text-xs font-mono-film text-[#F4EFE6]/40 group-hover:text-[#D89B37] group-hover:translate-x-1 transition-all">
                    {disc.shortTag} ↗
                  </span>
                </div>

                {/* Mobile View / Expandable Detail on Hover */}
                {hoveredIndex === idx && (
                  <div className="pt-3 pr-4 space-y-2 lg:hidden animate-in fade-in duration-200">
                    <p className="text-xs font-editorial text-[#F4EFE6]/80 leading-relaxed">
                      {disc.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {disc.deliverables.map((d, dIdx) => (
                        <span key={dIdx} className="text-[10px] font-mono-film px-2 py-0.5 rounded bg-[#F4EFE6]/10 text-[#F4EFE6]/90">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right 5 Cols: Sticky Visual Preview Canvas */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-[#F4EFE6]/20 bg-[#18181A] shadow-2xl">
              <Image
                src={activeDiscipline.image}
                alt={activeDiscipline.name}
                fill
                className="object-cover transition-all duration-700 filter brightness-95 contrast-110"
                sizes="500px"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono-film text-[#D89B37] border border-[#F4EFE6]/15">
                DISCIPLINE // {activeDiscipline.number}
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0C]/90 backdrop-blur-md p-4 rounded border border-[#F4EFE6]/10">
                <span className="text-[10px] font-mono-film text-[#D89B37] uppercase block mb-1">
                  [ SCOPE & CAPABILITY ]
                </span>
                <p className="text-xs font-editorial text-[#F4EFE6]/90 leading-relaxed">
                  {activeDiscipline.description}
                </p>
              </div>
            </div>

            {/* Deliverables Chip Matrix */}
            <div className="p-6 rounded bg-[#1A1918] border border-[#F4EFE6]/10 space-y-3">
              <span className="text-[11px] font-mono-film text-[#F4EFE6]/50 uppercase tracking-widest block">
                DELIVERABLES FOR {activeDiscipline.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.deliverables.map((del, idx) => (
                  <span key={idx} className="text-xs font-mono-film px-3 py-1 rounded bg-[#F4EFE6]/5 text-[#F4EFE6]/90 border border-[#F4EFE6]/10">
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
