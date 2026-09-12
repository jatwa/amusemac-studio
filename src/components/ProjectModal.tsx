'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Film, Sparkles, MapPin, Calendar, Clock, Tag } from 'lucide-react';
import { Project } from '@/data/projects';
import { soundEngine } from '@/lib/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundEngine.playMechanicalClick();
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={() => {
          soundEngine.playMechanicalClick();
          onClose();
        }}
      />

      {/* Slide-out Drawer Canvas */}
      <div className="relative w-full max-w-4xl h-full bg-[#0D0D0C] border-l border-[#F4EFE6]/15 overflow-y-auto z-10 flex flex-col justify-between text-[#F4EFE6] shadow-2xl">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#0D0D0C]/95 backdrop-blur-md border-b border-[#F4EFE6]/10">
          <div className="flex items-center gap-3 font-mono-film text-xs text-[#D89B37]">
            <Film className="w-4 h-4 text-[#D89B37]" />
            <span>ARCHIVE // {project.id}</span>
            <span className="text-[#F4EFE6]/40">•</span>
            <span className="text-[#F4EFE6]/70 uppercase">{project.category}</span>
          </div>

          <button
            onClick={() => {
              soundEngine.playMechanicalClick();
              onClose();
            }}
            data-cursor-action="CLOSE"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F4EFE6]/20 hover:border-[#D89B37] text-xs font-mono-film text-[#F4EFE6]/80 hover:text-[#D89B37] transition-all"
          >
            <span className="tracking-wider">CLOSE</span>
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-12">
          
          {/* Title & Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-film text-[#F4EFE6]/60">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#D89B37]" />{project.year}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#D89B37]" />{project.location}</span>
              {project.duration && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#D89B37]" />{project.duration}</span>}
              <span className="px-2 py-0.5 rounded bg-[#F4EFE6]/10 text-[#F4EFE6]/90 border border-[#F4EFE6]/15">{project.aspectRatio}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-[#F4EFE6] leading-none">
              {project.title}
            </h1>
            
            <p className="text-lg sm:text-xl font-light text-[#D89B37] tracking-tight">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Still with 35mm Frame Border */}
          <div className="relative aspect-cinema w-full overflow-hidden rounded-sm border border-[#F4EFE6]/20 shadow-xl bg-[#18181A]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 900px"
            />
            <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-xs rounded text-[10px] font-mono-film text-[#F4EFE6]/80">
              KEYFRAME STILL // {project.aspectRatio}
            </div>
          </div>

          {/* Logline & Synopsis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-y border-[#F4EFE6]/10">
            <div className="md:col-span-1 space-y-2">
              <span className="text-[11px] font-mono-film text-[#D89B37] uppercase tracking-wider block">
                [ LOGLINE ]
              </span>
              <p className="text-sm italic font-editorial text-[#F4EFE6]/90 leading-relaxed">
                “{project.logline}”
              </p>
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <span className="text-[11px] font-mono-film text-[#D89B37] uppercase tracking-wider block">
                [ PRODUCTION SYNOPSIS ]
              </span>
              <p className="text-sm font-light text-[#F4EFE6]/80 leading-relaxed">
                {project.synopsis}
              </p>
            </div>
          </div>

          {/* Palette Swatches */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono-film text-[#F4EFE6]/50 uppercase tracking-widest block">
              PRODUCTION COLOR SCRIPT // DCI-P3 EMULATION
            </span>
            <div className="flex items-center gap-2 h-10 w-full rounded overflow-hidden border border-[#F4EFE6]/15">
              {project.palette.map((color, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 h-full relative group transition-transform hover:scale-105"
                  style={{ backgroundColor: color }}
                  title={color}
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-[10px] font-mono-film text-white bg-black/60 transition-opacity">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery / Production Stills */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#F4EFE6]/10 pb-3">
              <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-wider">
                [ VISUAL DEVELOPMENT & PRODUCTION STILLS ]
              </span>
              <span className="text-xs font-mono-film text-[#F4EFE6]/40">
                {project.gallery.length} ASSETS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="relative aspect-standard w-full overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                    <Image
                      src={item.url}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    {item.type && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 rounded text-[9px] font-mono-film uppercase text-[#D89B37]">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono-film text-[#F4EFE6]/70 leading-normal">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Credits Table */}
          <div className="space-y-4 pt-4">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-wider block border-b border-[#F4EFE6]/10 pb-2">
              [ CREW & KEY HEADS OF DEPARTMENT ]
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-film">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="flex justify-between py-1.5 border-b border-[#F4EFE6]/5">
                  <span className="text-[#F4EFE6]/40">{credit.role}</span>
                  <span className="text-[#F4EFE6]/90 font-medium">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote if available */}
          {project.quote && (
            <div className="p-6 rounded border border-[#D89B37]/30 bg-[#D89B37]/5 space-y-2">
              <p className="text-sm italic font-editorial text-[#F4EFE6]/90">
                “{project.quote.text}”
              </p>
              <p className="text-xs font-mono-film text-[#D89B37] text-right">
                — {project.quote.author}
              </p>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#F4EFE6]/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((d, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-[#F4EFE6]/5 text-[#F4EFE6]/70 text-[11px] font-mono-film border border-[#F4EFE6]/10">
                  {d}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                soundEngine.playMechanicalClick();
                onClose();
              }}
              className="px-6 py-2.5 bg-[#D89B37] hover:bg-[#E5AD45] text-[#090908] text-xs font-mono-film font-bold uppercase tracking-wider transition-colors rounded"
            >
              RETURN TO WORK
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
