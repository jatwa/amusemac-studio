'use client';

import React from 'react';
import Link from 'next/link';
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
            <p>18.9220° N, 72.8346° E</p>
            <p className="text-[#D89B37]">FILM PRODUCTION & CREATIVE STUDIO</p>
          </div>
        </div>

        {/* Middle Links & Coordinates */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono-film text-[#F4EFE6]/70">
          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ DISPATCH ]</span>
            <ul className="space-y-2">
              <li><a href="mailto:hello@amusemac.com" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">hello@amusemac.com</a></li>
              <li><a href="mailto:production@amusemac.com" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">production@amusemac.com</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ CHANNELS ]</span>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D89B37] transition-colors">Instagram ↗</a></li>
              <li><a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D89B37] transition-colors">Vimeo ↗</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D89B37] transition-colors">LinkedIn ↗</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D89B37] transition-colors">YouTube ↗</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ NAVIGATION ]</span>
            <ul className="space-y-2">
              <li><a href="#work" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Selected Work</a></li>
              <li><a href="#production-design" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">World-Building Process</a></li>
              <li><a href="#behind-the-lens" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Behind The Lens</a></li>
              <li><a href="#services" onClick={() => soundEngine.playMechanicalClick()} className="hover:text-[#D89B37] transition-colors">Disciplines</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[#D89B37] block">[ ARCHIVE SYSTEM ]</span>
            <p className="text-[11px] text-[#F4EFE6]/50 leading-relaxed">
              Designed & developed for 35mm celluloid & modern digital cinema screens.
            </p>
            <p className="text-[10px] text-[#D89B37]">
              24 FPS / DCI-P3 CALIBRATED
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-film text-[#F4EFE6]/40 pt-8 border-t border-[#F4EFE6]/10">
          <p>© {currentYear} AMUSEMAC STUDIO LLP. ALL RIGHTS RESERVED.</p>
          <p>MUMBAI // WORLDWIDE</p>
        </div>

      </div>
    </footer>
  );
}
