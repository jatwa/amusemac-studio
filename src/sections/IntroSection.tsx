'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Film, Compass } from 'lucide-react';

export function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.intro-char', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="intro"
      ref={containerRef}
      className="relative w-full section-ivory text-[#0D0D0C] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden select-none border-b border-[#0D0D0C]/10"
    >
      {/* Top Editorial Film Margin */}
      <div className="max-w-[1720px] mx-auto flex items-center justify-between text-xs font-mono-film text-[#66635B] border-b border-[#0D0D0C]/10 pb-6 mb-16 sm:mb-24">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#0D0D0C]">[ WHO WE ARE // 01 ]</span>
          <span>MAD ABOUT CREATION</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>CINEMATIC CRAFT • BUSINESS OUTCOMES</span>
          <span>•</span>
          <span>MUMBAI, INDIA</span>
        </div>
      </div>

      {/* Massive Asymmetrical Typography Layout */}
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left 8 Cols: Giant Headline & Verified Manifesto */}
        <div className="lg:col-span-8 space-y-2">
          <div className="overflow-hidden">
            <span className="text-xs sm:text-sm font-mono-film text-[#8F4832] font-bold uppercase tracking-widest block mb-2">
              [ THE PHILOSOPHY ]
            </span>
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#0D0D0C] m-0">
              TURNING IDEAS INTO
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#8F4832] m-0">
              CINEMATIC
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#D89B37] m-0">
              REALITY<span className="text-[#0D0D0C]">.</span>
            </h2>
          </div>

          <div className="pt-8 max-w-2xl space-y-4 text-base sm:text-xl font-editorial text-[#0D0D0C] leading-relaxed">
            <p className="font-semibold text-xl sm:text-2xl text-[#0D0D0C]">
              “We’re not just a studio; we’re obsessed with crafting visuals that live beyond the screen.”
            </p>
            <p className="text-sm sm:text-base font-editorial text-[#66635B]">
              Old-school storytelling with modern production — built to move hearts and metrics. From ads that cut through the noise to films that move people, our work makes audiences stop, feel, and remember.
            </p>
          </div>
        </div>

        {/* Right 4 Cols: Studio Pillars from amusemacstudio.in */}
        <div className="lg:col-span-4 space-y-6 lg:pt-8">
          
          <div className="p-8 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/10 space-y-4 shadow-xs">
            <span className="text-xs font-mono-film text-[#8F4832] uppercase tracking-wider block font-bold">
              [ DESIGN MEETS STORYTELLING ]
            </span>
            <p className="text-sm font-editorial text-[#0D0D0C] leading-relaxed">
              Every frame we build balances art direction, detail, and emotion — because style only matters if it serves the story.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/10 space-y-4 shadow-xs">
            <span className="text-xs font-mono-film text-[#0D0D0C] uppercase tracking-wider block font-bold">
              [ TRUSTED BY BRANDS & FILMMAKERS ]
            </span>
            <p className="text-sm font-editorial text-[#66635B] leading-relaxed">
              From scripting your next binge-worthy web series to capturing the raw honesty of a documentary, we take on every project like it’s our own.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}