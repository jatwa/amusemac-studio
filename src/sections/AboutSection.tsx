'use client';

import React from 'react';
import Image from 'next/image';
import { Film, Award, Heart, Sparkles } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      num: '01',
      title: 'OLD-SCHOOL STORYTELLING',
      text: 'Ads, films, and stories built the old school way — craft, grit, and a little obsession. If it doesn’t stop the scroll or stir the soul, we’re not shipping it.'
    },
    {
      num: '02',
      title: 'DESIGN MEETS DETAIL',
      text: 'Every frame we build balances art direction, detail, and emotion — because style only matters if it serves the story.'
    },
    {
      num: '03',
      title: 'MUMBAI ROOTS, NATIONWIDE IMPACT',
      text: 'Based in Mumbai, Maharashtra, we collaborate with leading brands, startups, agencies, and independent filmmakers across India and internationally.'
    }
  ];

  return (
    <section 
      id="about"
      className="relative w-full section-ivory text-[#0D0D0C] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#0D0D0C]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#0D0D0C]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#8F4832]">
              <Film className="w-3.5 h-3.5" />
              <span>[ 07 // ABOUT AMUSEMAC STUDIO ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#0D0D0C]">
              MAD ABOUT CREATION<span className="text-[#8F4832]">.</span>
            </h2>
          </div>

          <span className="text-xs font-mono-film text-[#66635B]">
            MUMBAI-BASED PRODUCTION HOUSE
          </span>
        </div>

        {/* Big Editorial Statement & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <p className="text-2xl sm:text-4xl font-editorial font-bold text-[#0D0D0C] leading-snug tracking-tight">
              “Amusemac Studio is where stories come alive.”
            </p>
            
            <p className="text-base sm:text-xl font-editorial text-[#66635B] leading-relaxed">
              From films and web series to music videos, corporate features, and branding content — we are your all-in-one creative powerhouse based in Mumbai. We bring stories to life with cinematic craft and meticulous attention to detail.
            </p>

            <div className="p-6 rounded bg-[#F3EDE2] border border-[#0D0D0C]/10 space-y-3">
              <span className="text-xs font-mono-film text-[#8F4832] font-bold block">
                [ THE AMUSEMAC PROMISE ]
              </span>
              <p className="text-sm font-mono-film text-[#0D0D0C]/80 leading-relaxed">
                Whether it’s a corporate project or an independent artist’s vision, we bring your ideas to life with end-to-end production support, delivering immersive brand experiences that make your stories shine.
              </p>
            </div>
          </div>

          {/* Right 5 Cols: Studio Still Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs border border-[#0D0D0C]/20 bg-[#E5DCD0]">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                alt="Amusemac Studio Craft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-[#0D0D0C]/80 backdrop-blur-xs text-[#F4EFE6] text-[10px] font-mono-film rounded">
                MALAD WEST, MUMBAI // HEADQUARTERS
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#0D0D0C]/10">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="space-y-3 p-6 rounded bg-[#F3EDE2] border border-[#0D0D0C]/5">
              <span className="text-xs font-mono-film text-[#8F4832] font-bold">
                {pillar.num}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#0D0D0C]">
                {pillar.title}
              </h3>
              <p className="text-xs font-editorial text-[#66635B] leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}