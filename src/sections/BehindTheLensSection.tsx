'use client';

import React, { useState } from 'react';
import { teamMembers, TeamMember } from '@/data/team';
import { Camera, Sparkles, UserCheck, Film } from 'lucide-react';
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => {
                soundEngine.playMechanicalClick();
                setSelectedMember(member);
              }}
              data-cursor-text="CREW"
              className={`p-6 sm:p-8 rounded-xs border transition-all duration-300 space-y-4 cursor-pointer flex flex-col justify-between ${
                selectedMember.id === member.id
                  ? 'bg-[#181816] border-[#D89B37]'
                  : 'bg-[#121210] border-[#F4EFE6]/10 hover:border-[#F4EFE6]/30'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono-film">
                  <span className="text-[#D89B37] font-bold">MEMBER 0{idx + 1}</span>
                  {member.credential && (
                    <span className="px-2 py-0.5 rounded bg-[#D89B37]/15 text-[#D89B37] border border-[#D89B37]/30 text-[10px]">
                      {member.credential}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F4EFE6]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono-film text-[#D89B37] pt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs italic font-editorial text-[#F4EFE6]/80 pt-1">
                  “{member.tagline}”
                </p>

                <p className="text-xs font-editorial text-[#F4EFE6]/60 leading-relaxed pt-2">
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