'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Clapperboard, Compass } from 'lucide-react';

export function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

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
          <span className="font-bold text-[#0D0D0C]">[ MANIFESTO // 01 ]</span>
          <span>THE AMUSEMAC PREMISE</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>CINEMA AS SPATIAL REALITY</span>
          <span>•</span>
          <span>EST. MUMBAI</span>
        </div>
      </div>

      {/* Massive Asymmetrical Typography Layout */}
      <div 
        ref={textBlockRef}
        className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        {/* Left 8 Cols: Giant Headline */}
        <div className="lg:col-span-8 space-y-2">
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#0D0D0C] m-0">
              WE DON&apos;T JUST
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#66635B] m-0">
              MAKE FILMS.
            </h2>
          </div>
          <div className="overflow-hidden pt-4 sm:pt-8">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#8F4832] m-0">
              WE BUILD
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#0D0D0C] m-0">
              WORLDS
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="intro-char film-title-xl tracking-tighter font-black text-[#D89B37] m-0">
              FOR THEM.
            </h2>
          </div>
        </div>

        {/* Right 4 Cols: Editorial Notes & Studio Ethos */}
        <div className="lg:col-span-4 space-y-8 lg:pt-16">
          <div className="p-8 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/10 space-y-6 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono-film text-[#8F4832]">
              <span>[ STUDIO IDENTITY ]</span>
              <span>2024 / 2025</span>
            </div>

            <p className="text-base sm:text-lg font-editorial text-[#0D0D0C] leading-relaxed">
              Amusemac Studio is a Mumbai-based production and creative studio working across narrative feature films, advertising, documentaries, music videos, and immersive visual storytelling.
            </p>

            <div className="w-full h-px bg-[#0D0D0C]/10" />

            <p className="text-sm font-mono-film text-[#66635B] leading-relaxed">
              Cinema is not just our business. It is our obsession. We design the physical rooms, the light temperatures, and the tactile materials before the first camera roll is called.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-film text-[#66635B] pl-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8F4832]" />
            <span>PRODUCTION • DESIGN • DIRECTION • CRAFT</span>
          </div>
        </div>

      </div>

    </section>
  );
}
