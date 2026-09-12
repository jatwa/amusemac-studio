'use client';

import React from 'react';
import { collaboratorGroups } from '@/data/collaborators';
import { Sparkles, Award } from 'lucide-react';

export function CollaboratorsSection() {
  return (
    <section 
      id="collaborators"
      className="relative w-full bg-[#121210] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#F4EFE6]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#F4EFE6]/10 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono-film text-[#D89B37]">
            <Award className="w-3.5 h-3.5" />
            <span>[ 08 // COLLABORATORS & HONORS ]</span>
          </div>
          
          <h2 className="film-title-lg text-[#F4EFE6] font-black tracking-tighter uppercase leading-none max-w-5xl">
            TRUSTED BY BRANDS, <br />
            <span className="text-[#D89B37]">FILMMAKERS & CREATORS.</span>
          </h2>
        </div>

        {/* Minimal Typography Roster */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {collaboratorGroups.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block border-b border-[#F4EFE6]/10 pb-3">
                {group.category}
              </span>

              <ul className="space-y-3">
                {group.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    className="text-lg sm:text-xl font-editorial font-medium text-[#F4EFE6]/80 hover:text-[#D89B37] hover:translate-x-1.5 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div className="pt-8 border-t border-[#F4EFE6]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-film text-[#F4EFE6]/40">
          <p>CONFIDENTIAL SCRIPTS & NDA PRODUCTIONS ARCHIVED PRIVATELY.</p>
          <p className="text-[#D89B37]">AVAILABLE FOR COMMISSIONS WORLDWIDE</p>
        </div>

      </div>
    </section>
  );
}
