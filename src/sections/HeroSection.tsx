'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowDown, Film, Clapperboard } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function HeroSection({ onOpenReel }: { onOpenReel?: () => void }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoBgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Intro opening title animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-line',
        { y: 120, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.4, stagger: 0.18, delay: 0.2 }
      );

      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      );

      // Scroll-driven zoom & fade effect
      if (heroRef.current && videoBgRef.current) {
        gsap.to(videoBgRef.current, {
          scale: 1.15,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });

        gsap.to(headlineRef.current, {
          y: -120,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 bg-[#090908] text-[#F4EFE6] overflow-hidden select-none"
    >
      {/* Background Cinematic Atmosphere / Video Reel Loop */}
      <div 
        ref={videoBgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45"
      >
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400&auto=format&fit=crop"
          alt="Amusemac Studio Film Canvas"
          fill
          priority
          className="object-cover scale-105 filter brightness-75 contrast-125 saturate-75"
          sizes="100vw"
        />
        {/* Film vignetting & gradient masks */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,#090908_95%]" />
        <div className="absolute inset-0 bg-linear-to-b from-[#090908]/80 via-transparent to-[#090908]" />
      </div>

      {/* Top 35mm Slate Bar */}
      <div className="relative z-10 max-w-[1720px] mx-auto w-full flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/60 border-b border-[#F4EFE6]/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-[#D89B37]/15 text-[#D89B37] border border-[#D89B37]/30 font-bold">
            PROD NO. 09
          </span>
          <span className="hidden sm:inline">AMUSEMAC STUDIO // MUMBAI</span>
        </div>

        <div className="flex items-center gap-4 text-right">
          <span className="hidden md:inline">35MM / 2.39:1 ANAMORPHIC</span>
          <span className="text-[#D89B37] font-semibold">24 FPS SOUND SPEED</span>
        </div>
      </div>

      {/* Center: Massive Hero Typography (Oversized Editorial) */}
      <div 
        ref={headlineRef}
        className="relative z-10 max-w-[1720px] mx-auto w-full my-auto py-12"
      >
        <div className="overflow-hidden">
          <h1 className="hero-line film-title-huge text-[#F4EFE6] tracking-tighter m-0 font-black">
            MAD ABOUT
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line film-title-huge text-[#F4EFE6] tracking-tighter m-0 font-black flex items-baseline gap-4 sm:gap-8">
            <span className="text-[#D89B37]">CINEMA</span>
            <span className="text-[#F4EFE6]">.</span>
          </h1>
        </div>
      </div>

      {/* Bottom Metadata & Scroll Direction */}
      <div 
        ref={metaRef}
        className="relative z-10 max-w-[1720px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-end gap-8 pt-6 border-t border-[#F4EFE6]/10 text-xs font-mono-film"
      >
        {/* Left: Studio Mission */}
        <div className="space-y-1">
          <span className="text-[#D89B37] block">[ STUDIO ORIGIN ]</span>
          <p className="text-sm font-editorial text-[#F4EFE6]/90 max-w-sm">
            A Mumbai-based film production & creative studio working across narrative cinema, world-building, and commercial storytelling.
          </p>
        </div>

        {/* Center: Disciplines Tagline */}
        <div className="text-center hidden md:block">
          <span className="text-[#F4EFE6]/40 tracking-widest block text-[10px] uppercase mb-1">DISCIPLINES</span>
          <p className="text-[#F4EFE6]/80 font-mono-film text-xs tracking-wider">
            FILMS / ADS / STORIES / WORLDS
          </p>
        </div>

        {/* Right: Scroll Prompt */}
        <div className="flex md:justify-end items-center gap-4">
          <a
            href="#intro"
            onClick={() => soundEngine.playMechanicalClick()}
            data-cursor-action="SCROLL"
            className="group flex items-center gap-3 text-xs font-mono-film text-[#F4EFE6]/80 hover:text-[#D89B37] transition-colors"
          >
            <span className="tracking-widest uppercase">[ SCROLL TO ENTER THE WORLD ]</span>
            <div className="w-8 h-8 rounded-full border border-[#F4EFE6]/20 group-hover:border-[#D89B37] flex items-center justify-center group-hover:translate-y-1 transition-all">
              <ArrowDown className="w-4 h-4 text-[#D89B37]" />
            </div>
          </a>
        </div>
      </div>

    </section>
  );
}
