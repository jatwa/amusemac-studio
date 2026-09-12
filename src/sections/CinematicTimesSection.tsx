'use client';

import React from 'react';
import { cinematicArticles } from '@/data/cinematicTimes';
import { BookOpen, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function CinematicTimesSection() {
  return (
    <section 
      id="cinematic-times"
      className="relative w-full section-ivory text-[#0D0D0C] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#0D0D0C]/10"
    >
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#0D0D0C]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#8F4832]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>[ 09 // CINEMATIC TIMES • EDITORIAL & PERSPECTIVES ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#0D0D0C]">
              CINEMATIC TIMES<span className="text-[#8F4832]">.</span>
            </h2>
          </div>

          <span className="text-xs font-mono-film text-[#66635B]">
            FILM INDUSTRY INSIGHTS & TECHNIQUES
          </span>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cinematicArticles.map((article, idx) => (
            <div
              key={article.id}
              onClick={() => soundEngine.playMechanicalClick()}
              data-cursor-text="READ"
              className="group p-8 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/10 space-y-6 flex flex-col justify-between hover:border-[#8F4832] transition-colors cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono-film text-[#8F4832]">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0D0D0C] group-hover:text-[#8F4832] transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-sm font-editorial text-[#66635B] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0D0D0C]/10 flex items-center justify-between text-xs font-mono-film text-[#0D0D0C]/70 group-hover:text-[#8F4832] transition-colors">
                <span>AMUSEMAC JOURNAL</span>
                <span className="flex items-center gap-1">READ ESSAY <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}