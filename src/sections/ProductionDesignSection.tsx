'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { productionDesignSteps, ProcessStep } from '@/data/productionDesign';
import { Compass, Sparkles, BookOpen, Layers, Hammer, Camera } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

export function ProductionDesignSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = productionDesignSteps[activeStepIndex];

  const handleStepChange = (idx: number) => {
    soundEngine.playMechanicalClick();
    setActiveStepIndex(idx);
  };

  return (
    <section 
      id="production-design"
      className="relative w-full section-ivory text-[#0D0D0C] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#0D0D0C]/10 overflow-hidden"
    >
      {/* Editorial Watermark / Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1720px] mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#0D0D0C]/10 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono-film text-[#8F4832]">
            <Compass className="w-4 h-4" />
            <span>[ 03 // PRODUCTION DESIGN & SPATIAL ARCHITECTURE ]</span>
            <span>•</span>
            <span>OPENING THE ART DIRECTOR’S NOTEBOOK</span>
          </div>
          
          <h2 className="film-title-lg text-[#0D0D0C] font-black tracking-tighter uppercase leading-none max-w-5xl">
            WE BUILD THE WORLD <br />
            <span className="text-[#8F4832]">BEFORE THE CAMERA DOES.</span>
          </h2>

          <p className="text-base sm:text-xl font-editorial text-[#66635B] max-w-3xl">
            From the initial script breakdown to full-scale soundstage construction in Mumbai, we create environments that breathe authentic life into narrative cinema.
          </p>

          {/* Workflow Sequence Ribbon */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono-film text-[#0D0D0C]/60 pt-4 overflow-x-auto pb-2">
            <span className="font-bold text-[#8F4832]">IDEA</span>
            <span>→</span>
            <span className="font-bold text-[#0D0D0C]">RESEARCH</span>
            <span>→</span>
            <span className="font-bold text-[#D89B37]">VISUAL DEV</span>
            <span>→</span>
            <span className="font-bold text-[#8F4832]">MATERIALITY</span>
            <span>→</span>
            <span className="font-bold text-[#0D0D0C]">SOUNDSTAGE BUILD</span>
            <span>→</span>
            <span className="font-bold text-[#0D0D0C] bg-[#0D0D0C] text-[#F4EFE6] px-2 py-0.5 rounded">THE SHOOT</span>
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {productionDesignSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => handleStepChange(idx)}
              data-cursor-action={`STAGE ${step.step}`}
              className={`p-4 rounded-xs border text-left transition-all relative overflow-hidden ${
                activeStepIndex === idx
                  ? 'bg-[#0D0D0C] text-[#F4EFE6] border-[#0D0D0C] shadow-lg -translate-y-1'
                  : 'bg-[#F3EDE2] text-[#0D0D0C]/80 border-[#0D0D0C]/10 hover:border-[#8F4832]/50 hover:bg-[#EBE3D5]'
              }`}
            >
              <span className={`text-[10px] font-mono-film block ${activeStepIndex === idx ? 'text-[#D89B37]' : 'text-[#8F4832]'}`}>
                STAGE {step.step}
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mt-1">
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Stage Deep-Dive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 p-8 sm:p-12 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/15 shadow-sm">
          
          {/* Left 6 Cols: Stage Imagery & Blueprint Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-cinema lg:aspect-[4/3] w-full overflow-hidden rounded-xs border border-[#0D0D0C]/20 bg-[#E5DCD0]">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 bg-[#0D0D0C]/85 text-[#F4EFE6] text-[10px] font-mono-film px-2.5 py-1 rounded backdrop-blur-xs">
                PROCESS PHASE // {activeStep.step} — {activeStep.title}
              </div>
            </div>

            {/* Director's Notebook Handwritten Memo Style */}
            <div className="p-5 rounded border border-[#8F4832]/30 bg-[#FFFDF9] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[10px] font-mono-film text-[#8F4832] font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>DIRECTOR’S NOTEBOOK ENTRY</span>
              </div>
              <p className="text-xs sm:text-sm italic font-editorial text-[#0D0D0C]/90 leading-relaxed">
                “{activeStep.notebookSnippet}”
              </p>
            </div>
          </div>

          {/* Right 6 Cols: Architectural Details & Deliverables */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono-film text-[#8F4832]">
                <span className="px-2 py-0.5 rounded bg-[#8F4832]/10 font-bold">
                  {activeStep.discipline}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#0D0D0C] leading-none">
                {activeStep.subtitle}
              </h3>

              <p className="text-sm sm:text-base font-editorial text-[#66635B] leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Focus Items Checklist */}
            <div className="space-y-3 pt-4 border-t border-[#0D0D0C]/10">
              <span className="text-[11px] font-mono-film text-[#0D0D0C]/70 uppercase tracking-widest block">
                [ KEY WORLD-BUILDING DELIVERABLES ]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-film">
                {activeStep.focusItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#EAE2D4] border border-[#0D0D0C]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F4832]" />
                    <span className="text-[#0D0D0C]/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="pt-4 border-t border-[#0D0D0C]/10">
              <p className="text-sm italic font-editorial text-[#0D0D0C] font-medium">
                “{activeStep.quote}”
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
