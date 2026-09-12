'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import { ProjectModal } from '@/components/ProjectModal';
import { ArrowUpRight, Film, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function FeaturedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Advertisement', 'Corporate Films', 'Documentaries'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleOpenProject = (project: Project) => {
    soundEngine.playClapperSnap();
    setSelectedProject(project);
  };

  return (
    <section id="work" className="relative w-full bg-[#121210] text-[#F4EFE6] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#F4EFE6]/10">
      
      <div className="max-w-[1720px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F4EFE6]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-film text-[#D89B37]">
              <Film className="w-3.5 h-3.5" />
              <span>[ 01 // OUR CANVAS • PORTFOLIO ]</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              OUR CANVAS<span className="text-[#D89B37]">.</span>
            </h2>
            <p className="text-sm sm:text-base font-editorial text-[#F4EFE6]/60">
              “Stories that don’t just play — they linger.”
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-film">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundEngine.playMechanicalClick();
                  setFilter(cat);
                }}
                data-cursor-action="FILTER"
                className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider ${
                  filter === cat
                    ? 'bg-[#D89B37] text-[#090908] font-bold'
                    : 'bg-[#1E1E1C] text-[#F4EFE6]/70 hover:text-[#F4EFE6] hover:bg-[#2A2926] border border-[#F4EFE6]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Project 1 (Full Width Feature - 12 Cols) */}
          {filteredProjects[0] && (
            <div 
              onClick={() => handleOpenProject(filteredProjects[0])}
              data-cursor-text="VIEW FILM"
              className="lg:col-span-12 group cursor-pointer space-y-4"
            >
              <div className="relative w-full aspect-cinema overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                <Image
                  src={filteredProjects[0].heroImage}
                  alt={filteredProjects[0].title}
                  fill
                  priority
                  className="object-cover film-image group-hover:scale-102 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Technical Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 text-xs font-mono-film text-[#F4EFE6] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-[#F4EFE6]/15">
                  <span className="w-2 h-2 rounded-full bg-[#D89B37] animate-pulse" />
                  <span>FEATURED // {filteredProjects[0].category}</span>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 px-4 py-2 bg-[#D89B37] text-[#090908] rounded font-mono-film text-xs font-bold uppercase tracking-wider">
                  <span>EXPLORE PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Metadata Strip */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2 border-b border-[#F4EFE6]/10 pb-6">
                <div>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono-film text-[#F4EFE6]/60">
                    {filteredProjects[0].subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono-film text-[#F4EFE6]/60">
                  <span className="px-2 py-0.5 rounded bg-[#F4EFE6]/10">{filteredProjects[0].category}</span>
                  {filteredProjects[0].client && <span>CLIENT: {filteredProjects[0].client}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Project 2 (7 Cols Asymmetric Left) */}
          {filteredProjects[1] && (
            <div 
              onClick={() => handleOpenProject(filteredProjects[1])}
              data-cursor-text="VIEW FILM"
              className="lg:col-span-7 group cursor-pointer space-y-4"
            >
              <div className="relative w-full aspect-cinema lg:aspect-[16/10] overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                <Image
                  src={filteredProjects[1].heroImage}
                  alt={filteredProjects[1].title}
                  fill
                  className="object-cover film-image group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 text-[10px] font-mono-film bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[#D89B37] border border-[#F4EFE6]/10">
                  {filteredProjects[1].category}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F4EFE6]/10 pb-4">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                    {filteredProjects[1].title}
                  </h3>
                  <p className="text-xs font-mono-film text-[#F4EFE6]/60">
                    {filteredProjects[1].subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono-film text-[#D89B37] group-hover:translate-x-1 transition-transform">
                  [ VIEW DOSSIER → ]
                </span>
              </div>
            </div>
          )}

          {/* Project 3 (5 Cols Asymmetric Right) */}
          {filteredProjects[2] && (
            <div 
              onClick={() => handleOpenProject(filteredProjects[2])}
              data-cursor-text="EXPLORE"
              className="lg:col-span-5 group cursor-pointer space-y-4 lg:pt-12"
            >
              <div className="relative w-full aspect-portrait-film sm:aspect-standard lg:aspect-[4/5] overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                <Image
                  src={filteredProjects[2].heroImage}
                  alt={filteredProjects[2].title}
                  fill
                  className="object-cover film-image group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 text-[10px] font-mono-film bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[#D89B37] border border-[#F4EFE6]/10">
                  {filteredProjects[2].category}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F4EFE6]/10 pb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                    {filteredProjects[2].title}
                  </h3>
                  <p className="text-xs font-mono-film text-[#F4EFE6]/60">
                    {filteredProjects[2].subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono-film text-[#D89B37] group-hover:translate-x-1 transition-transform">
                  [ DOSSIER → ]
                </span>
              </div>
            </div>
          )}

          {/* Project 4 & 5 (Split 6/6) */}
          {filteredProjects.slice(3, 5).map((proj) => (
            <div 
              key={proj.id}
              onClick={() => handleOpenProject(proj)}
              data-cursor-text="VIEW FILM"
              className="lg:col-span-6 group cursor-pointer space-y-4"
            >
              <div className="relative w-full aspect-cinema overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                <Image
                  src={proj.heroImage}
                  alt={proj.title}
                  fill
                  className="object-cover film-image group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 text-[10px] font-mono-film bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-[#D89B37] border border-[#F4EFE6]/10">
                  {proj.category}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F4EFE6]/10 pb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F4EFE6] group-hover:text-[#D89B37] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono-film text-[#F4EFE6]/60">
                    {proj.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono-film text-[#D89B37]">
                  {proj.client || proj.year}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Project Deep-Dive Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}