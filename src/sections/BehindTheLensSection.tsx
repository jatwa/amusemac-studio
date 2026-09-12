'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { teamMembers, TeamMember } from '@/data/team';
import { Camera } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function BehindTheLensSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);

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
              <span>[ 05 // BEHIND THE LENS • THE JOURNEY ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              STORYTELLERS AT HEART<span className="text-[#D89B37]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base font-editorial text-[#F4EFE6]/70 max-w-md leading-relaxed">
            We’re a collective of passionate creators — filmmakers, writers, editors, producers, and FTII alumni — brought together by one belief: every story deserves to be told, and told well.
          </p>
        </div>

        {/* Team Grid with Real Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => {
                soundEngine.playMechanicalClick();
                setSelectedMember(member);
              }}
              data-cursor-text="CREW"
              className={`p-6 rounded-xs border transition-all duration-300 space-y-5 cursor-pointer flex flex-col justify-between ${
                selectedMember.id === member.id
                  ? 'bg-[#181816] border-[#D89B37]'
                  : 'bg-[#121210] border-[#F4EFE6]/10 hover:border-[#F4EFE6]/30'
              }`}
            >
              <div className="space-y-4">
                {/* Real Team Portrait */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#1A1A1A]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover film-image group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/75 rounded text-[9px] font-mono-film text-[#D89B37]">
                    CREW // 0{idx + 1}
                  </div>
                  {member.credential && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#D89B37] text-[#090908] font-bold rounded text-[9px] font-mono-film">
                      {member.credential}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#F4EFE6]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono-film text-[#D89B37] pt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs italic font-editorial text-[#F4EFE6]/80">
                  “{member.tagline}”
                </p>

                <p className="text-xs font-editorial text-[#F4EFE6]/60 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4EFE6]/10 flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/40">
                <span>AMUSEMAC STUDIO</span>
                <span className="text-[#D89B37]">{member.credential ? 'FTII ALUM' : 'CORE LEAD'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}