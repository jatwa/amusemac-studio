'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Compass } from 'lucide-react';
import { AudioAmbiance } from './AudioAmbiance';
import { soundEngine } from '@/lib/audio';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mumbaiTime, setMumbaiTime] = useState('');
  const [frameCounter, setFrameCounter] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
      setMumbaiTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const frameInterval = setInterval(() => {
      setFrameCounter((prev) => (prev + 1) % 24);
    }, 1000 / 24);

    return () => {
      clearInterval(interval);
      clearInterval(frameInterval);
    };
  }, []);

  const toggleMobileMenu = () => {
    soundEngine.playMechanicalClick();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'OUR CANVAS', href: '#work', tag: '01' },
    { name: 'SCRIPT TO SCREEN', href: '#production-design', tag: '02' },
    { name: 'SERVICES', href: '#services', tag: '03' },
    { name: 'BEHIND THE LENS', href: '#behind-the-lens', tag: '04' },
    { name: 'SHOWREEL', href: '#showreel', tag: '05' },
    { name: 'CINEMATIC TIMES', href: '#cinematic-times', tag: '06' },
    { name: "LET'S CONNECT", href: '#contact', tag: '07' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between">
          
          {/* Logo & Studio Identifier */}
          <Link 
            href="/"
            onClick={() => soundEngine.playMechanicalClick()}
            data-cursor-action="HOME"
            className="group flex flex-col items-start focus:outline-hidden"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                AMUSEMAC
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89B37] animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono-film tracking-widest text-[#F4EFE6]/60 group-hover:text-[#F4EFE6]/90 transition-colors uppercase">
              MAD ABOUT CINEMA.
            </span>
          </Link>

          {/* Desktop Center: Technical Status & Location */}
          <div className="hidden xl:flex items-center gap-6 px-5 py-2 rounded-full border border-[#F4EFE6]/10 bg-[#121210]/70 backdrop-blur-md text-[11px] font-mono-film text-[#F4EFE6]/70">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#D89B37]" />
              <span className="text-[#F4EFE6]/50">MALAD WEST, MUMBAI</span>
              <span className="text-[#F4EFE6]/90">19.1860° N, 72.8485° E</span>
            </div>
            <div className="w-px h-3 bg-[#F4EFE6]/15" />
            <div className="flex items-center gap-2">
              <span className="text-[#F4EFE6]/50">IST</span>
              <span className="text-[#D89B37] font-semibold">{mumbaiTime || '00:00:00'}</span>
              <span className="text-[#F4EFE6]/40 text-[9px]">:{frameCounter.toString().padStart(2, '0')}F</span>
            </div>
            <div className="w-px h-3 bg-[#F4EFE6]/15" />
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-ping" />
              <span className="text-[#F4EFE6]/80">STUDIO ACTIVE</span>
            </div>
          </div>

          {/* Desktop Right: Nav Links & Audio Control */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => soundEngine.playMechanicalClick()}
                  data-cursor-action={link.name}
                  className="group relative text-xs font-mono-film tracking-wider text-[#F4EFE6]/75 hover:text-[#D89B37] transition-colors py-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D89B37] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <AudioAmbiance />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <AudioAmbiance />
            
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full border border-[#F4EFE6]/20 bg-[#121210]/80 text-[#F4EFE6] hover:text-[#D89B37] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#090908]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-5">
            <div className="text-[11px] font-mono-film text-[#D89B37] tracking-widest uppercase border-b border-[#F4EFE6]/10 pb-3">
              [ DIRECTORY / SECTIONS ]
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundEngine.playMechanicalClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-baseline justify-between text-2xl sm:text-3xl font-black tracking-tighter text-[#F4EFE6] hover:text-[#D89B37] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-sm font-mono-film text-[#F4EFE6]/40">{link.tag}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-[#F4EFE6]/10 pt-6 space-y-2 font-mono-film text-xs text-[#F4EFE6]/60">
            <div className="flex justify-between items-center text-[#F4EFE6]/80">
              <span>MUMBAI STUDIO</span>
              <span className="text-[#D89B37]">{mumbaiTime}</span>
            </div>
            <p className="text-[11px] text-[#F4EFE6]/40">
              C 304 Shiv Sadan Apartment, Malad West, Mumbai - 400064
            </p>
          </div>
        </div>
      )}
    </>
  );
}