'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, Project } from '@/data/projects';
import { ProjectModal } from '@/components/ProjectModal';
import { Film, Eye, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function HorizontalReelSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const reelProjects = projects.filter(p => p.horizontalFeature !== false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate scroll distance
      const scrollDistance = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#080808] text-[#F4EFE6] overflow-hidden flex flex-col justify-between py-8 select-none"
    >
      {/* Top 35mm Perforated Edge */}
      <div className="w-full h-6 film-perforations-top opacity-30 shrink-0" />

      {/* Header Info */}
      <div className="max-w-[1720px] mx-auto w-full px-6 sm:px-12 flex items-center justify-between text-xs font-mono-film text-[#F4EFE6]/60 shrink-0">
        <div className="flex items-center gap-3">
          <Film className="w-4 h-4 text-[#D89B37]" />
          <span className="text-[#D89B37] font-bold">[ 02 // 35MM CONTACT SHEET ]</span>
          <span className="hidden sm:inline">ROLLING THROUGH THE WORK</span>
        </div>
        <div className="text-right text-[11px] text-[#D89B37]">
          [ SCROLL VERTICALLY TO PAN HORIZONTALLY ]
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full my-auto overflow-visible">
        <div 
          ref={trackRef}
          className="flex items-center gap-8 sm:gap-12 px-6 sm:px-12 w-max"
        >
          {/* Opening Typography Frame */}
          <div className="w-[320px] sm:w-[460px] shrink-0 space-y-4 pr-6 border-r border-[#F4EFE6]/10">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
              AMUSEMAC LAB ARCHIVE
            </span>
            <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none text-[#F4EFE6]">
              ROLLING THROUGH THE FRAMES<span className="text-[#D89B37]">.</span>
            </h3>
            <p className="text-sm font-editorial text-[#F4EFE6]/70 leading-relaxed">
              Every production is documented frame by frame. Raw stills, camera setups, and architectural lighting calibrations across India.
            </p>
          </div>

          {/* Project Contact Sheet Slides */}
          {reelProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                soundEngine.playClapperSnap();
                setActiveProject(project);
              }}
              data-cursor-text="INSPECT"
              className="group relative w-[320px] sm:w-[500px] lg:w-[620px] shrink-0 space-y-3 cursor-pointer"
            >
              {/* Slate Frame Header */}
              <div className="flex items-center justify-between text-[11px] font-mono-film text-[#F4EFE6]/50 px-1">
                <span className="text-[#D89B37]">FRAME {String(idx + 1).padStart(2, '0')} / {String(reelProjects.length).padStart(2, '0')}</span>
                <span>{project.aspectRatio}</span>
                <span>{project.year}</span>
              </div>

              {/* Still Frame */}
              <div className="relative aspect-cinema w-full overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A] shadow-xl group-hover:border-[#D89B37]/80 transition-colors">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover film-image group-hover:scale-105 transition-transform duration-700"
                  sizes="650px"
                />
                
                {/* Overlay film metadata on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-mono-film text-[#D89B37] uppercase">
                    LOC: {project.location}
                  </span>
                  <div>
                    <p className="text-xs font-editorial italic text-[#F4EFE6]">
                      “{project.logline}”
                    </p>
                    <span className="text-[11px] font-mono-film text-[#D89B37] mt-2 block">
                      [ CLICK TO OPEN FULL DOSSIER ]
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="flex items-baseline justify-between px-1">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono-film text-[#F4EFE6]/60">
                    {project.category}
                  </p>
                </div>
                <span className="text-xs font-mono-film text-[#F4EFE6]/40 group-hover:text-[#D89B37] transition-colors">
                  0{idx + 1} ↗
                </span>
              </div>
            </div>
          ))}

          {/* Ending Sequence Frame */}
          <div className="w-[300px] shrink-0 p-8 border border-[#F4EFE6]/15 rounded-xs space-y-4 bg-[#121210]">
            <span className="text-xs font-mono-film text-[#D89B37]">[ END OF REEL ]</span>
            <p className="text-lg font-black uppercase text-[#F4EFE6]">
              READY TO BUILD YOUR WORLD?
            </p>
            <a 
              href="#contact"
              onClick={() => soundEngine.playMechanicalClick()}
              className="inline-block text-xs font-mono-film text-[#D89B37] underline tracking-wider"
            >
              COMMISSION A PROJECT →
            </a>
          </div>

        </div>
      </div>

      {/* Bottom 35mm Perforated Edge */}
      <div className="w-full h-6 film-perforations-top opacity-30 shrink-0" />

      {/* Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
