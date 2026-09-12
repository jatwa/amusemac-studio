import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Film, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { CinematicPlayer } from '@/components/CinematicPlayer';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Amusemac Studio`,
    description: project.logline,
    openGraph: {
      title: `${project.title} — Amusemac Studio`,
      description: project.logline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#090908] text-[#F4EFE6] select-none">
      <Header />

      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 pt-32 pb-24 space-y-16">
        
        {/* Back link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono-film text-[#D89B37] hover:text-[#F4EFE6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO ARCHIVE</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 border-b border-[#F4EFE6]/10 pb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-film text-[#F4EFE6]/60">
            <span className="text-[#D89B37] font-bold">PROJECT // {project.id}</span>
            <span>•</span>
            {project.year && <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#D89B37]" />{project.year}</span>}
            {project.location && <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D89B37]" />{project.location}</span>}
            {project.aspectRatio && <span className="px-2 py-0.5 rounded bg-[#F4EFE6]/10 text-[#F4EFE6]/90 border border-[#F4EFE6]/15">{project.aspectRatio}</span>}
            {project.hasVerifiedVideo && (
              <span className="px-2.5 py-0.5 rounded bg-[#D89B37]/20 text-[#D89B37] font-bold border border-[#D89B37]/40">
                OFFICIAL VERIFIED VIDEO
              </span>
            )}
          </div>

          <h1 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter text-[#F4EFE6] leading-none">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-editorial text-[#D89B37] tracking-tight">
            {project.subtitle}
          </p>
        </div>

        {/* Primary Video or Hero Still Frame */}
        {project.hasVerifiedVideo && project.embedUrl ? (
          <div className="w-full">
            <CinematicPlayer
              posterUrl={project.heroImage}
              embedUrl={project.embedUrl}
              title={project.title}
              aspect="video"
            />
          </div>
        ) : (
          <div className="relative aspect-cinema w-full overflow-hidden rounded-xs border border-[#F4EFE6]/20 shadow-2xl bg-[#18181A]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded text-xs font-mono-film text-[#F4EFE6]/90">
              KEYFRAME STILL // {project.aspectRatio || '35MM'}
            </div>
          </div>
        )}

        {/* Logline & Synopsis */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-8 border-y border-[#F4EFE6]/10">
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
              [ LOGLINE ]
            </span>
            <p className="text-lg italic font-editorial text-[#F4EFE6] leading-relaxed">
              “{project.logline}”
            </p>
          </div>

          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono-film text-[#D89B37] uppercase tracking-widest block">
              [ PRODUCTION OVERVIEW ]
            </span>
            <p className="text-base font-light text-[#F4EFE6]/80 leading-relaxed">
              {project.synopsis}
            </p>
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-3">
          <span className="text-xs font-mono-film text-[#F4EFE6]/50 uppercase tracking-widest block">
            PRODUCTION COLOR SCRIPT // DCI-P3 CALIBRATED
          </span>
          <div className="flex items-center gap-2 h-12 w-full rounded overflow-hidden border border-[#F4EFE6]/15">
            {project.palette.map((color, idx) => (
              <div 
                key={idx} 
                className="flex-1 h-full relative group transition-transform hover:scale-105"
                style={{ backgroundColor: color }}
                title={color}
              >
                <span className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-xs font-mono-film text-white bg-black/60 transition-opacity">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center justify-between border-b border-[#F4EFE6]/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#F4EFE6]">
              PRODUCTION STILLS & SKETCHES
            </h2>
            <span className="text-xs font-mono-film text-[#D89B37]">
              {project.gallery.length} ASSETS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative aspect-standard w-full overflow-hidden rounded-xs border border-[#F4EFE6]/15 bg-[#18181A]">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {item.type && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 rounded text-[10px] font-mono-film uppercase text-[#D89B37]">
                      {item.type}
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono-film text-[#F4EFE6]/70">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className="space-y-6 pt-10 border-t border-[#F4EFE6]/10">
          <h2 className="text-2xl font-black uppercase text-[#F4EFE6]">
            HEADS OF DEPARTMENT & CREW
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono-film">
            {project.credits.map((credit, idx) => (
              <div key={idx} className="flex justify-between p-3 rounded bg-[#121210] border border-[#F4EFE6]/10">
                <span className="text-[#F4EFE6]/40">{credit.role}</span>
                <span className="text-[#F4EFE6]/90 font-medium">{credit.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
