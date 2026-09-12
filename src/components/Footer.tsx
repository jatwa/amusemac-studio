'use client';

import React from 'react';
import { soundEngine } from '@/lib/audio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] text-[#F4EFE6] border-t border-[#F4EFE6]/10 px-6 sm:px-12 py-16 sm:py-24">
      <div className="max-w-[1720px] mx-auto flex flex-col justify-between space-y-16">
        
        {/* Top Massive Studio Mark */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#F4EFE6]/10">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              AMUSEMAC
            </h2>
            <p className="text-lg sm:text-2xl font-mono-film text-[#D89B37] tracking-wider uppercase">
              MAD ABOUT CINEMA.
            </p>
          </div>

          <div className="text-sm font-mono-film text-[#F4EFE6]/60 space-y-1">
            <p className="text-[#F4EFE6]/90 font-medium">MUMBAI, INDIA</p>
            <p className="text-xs text-[#F4EFE6]/50">C 304 Shiv Sadan Apartment, Chincholi Bunder, Malad West, Mumbai - 400064</p>
            <p className="text-[#D89B37]">CREATIVE CONTENT PRODUCTION</p>
          </div>
        </div>

        {/* Middle Links & Coordinates */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono-film text-[#F4EFE6]/70">
          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ DISPATCH & DESK ]</span>
            <ul className="space-y-2">
              <li><a href="mailto:Contact@amusemacstudio.in" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Contact@amusemacstudio.in</a></li>
              <li><a href="mailto:Contact@amusemac.com" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Contact@amusemac.com</a></li>
              <li><a href="tel:+918770382125" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">+91 87703 82125</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ OUR CANVAS ]</span>
            <ul className="space-y-2">
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Advertisement</a></li>
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Corporate Films</a></li>
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Music Videos</a></li>
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Documentaries</a></li>
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Film & Webseries</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ NAVIGATION ]</span>
            <ul className="space-y-2">
              <li><a href="#production-design" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Script to Screen</a></li>
              <li><a href="#behind-the-lens" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Behind the Lens</a></li>
              <li><a href="#services" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Services</a></li>
              <li><a href="#cinematic-times" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Cinematic Times</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ STUDIO PHILOSOPHY ]</span>
            <p className="text-[11px] text-[#F4EFE6]/60 leading-relaxed">
              “Ads, films, and stories built the old school way — craft, grit, and a little obsession.”
            </p>
            <p className="text-[10px] text-[#D89B37]">
              MUMBAI • ACROSS INDIA • WORLDWIDE
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-film text-[#F4EFE6]/40 pt-8 border-t border-[#F4EFE6]/10">
          <p>© {currentYear} AMUSEMAC STUDIO. ALL RIGHTS RESERVED.</p>
          <p>MUMBAI, MAHARASHTRA, INDIA</p>
        </div>

      </div>
    </footer>
  );
}