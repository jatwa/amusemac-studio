'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, BookOpen, Layers, Camera, Clapperboard, Sparkles } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

interface ScriptToScreenStep {
  step: string;
  title: string;
  subtitle: string;
  discipline: string;
  description: string;
  deliverables: string[];
  snippet: string;
  image: string;
}

const scriptSteps: ScriptToScreenStep[] = [
  {
    step: '01',
    title: 'SCRIPT & PITCH',
    subtitle: 'TRANSFORMING RAW IDEAS INTO GREENLIT STORIES',
    discipline: 'Concept Development & Screenwriting',
    description: 'Every great production starts on paper. We help transform your raw idea into a compelling script, rich character worlds, and pitch decks that grab the attention of investors, producers, and platforms.',
    deliverables: [
      'Refining concepts into strong, structured stories',
      'Developing characters & worlds that feel alive',
      'Creating pitch decks for investors & platforms',
      'Blending creative vision with market awareness'
    ],
    snippet: '“In this industry, a good story is half the battle — the other half is telling it in a way that gets heard.”',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '02',
    title: 'SET DESIGN & ART',
    subtitle: 'BUILDING PHYSICAL WORLDS THAT BREATHE',
    discipline: 'Production Design & Spatial Architecture',
    description: 'We construct physical narrative universes. Every frame we build balances art direction, detail, and emotion — because style only matters if it serves the story.',
    deliverables: [
      'Soundstage builds & structural carpentry in Mumbai',
      'Period authenticity & textural scenic aging',
      'Hero prop sourcing & custom fabrication',
      'Atmospheric set dressing & practical fixtures'
    ],
    snippet: '“From the grandest set design to the smallest prop, we ensure stories don’t just look good — they live on screen.”',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '03',
    title: 'CINEMATOGRAPHY',
    subtitle: 'THE LANGUAGE OF LIGHT & FRAMING',
    discipline: 'Visual Language & Lens Selection',
    description: 'Led by FTII-trained cinematographers, our camera team captures the perfect interplay of light, framing, and motion to create visuals that feel both cinematic and authentic.',
    deliverables: [
      'Anamorphic & spherical optical packages',
      'High-speed & macro camera rigging',
      'Naturalistic & high-contrast lighting setups',
      'Dynamic Steadicam & tracking movements'
    ],
    snippet: '“For us, the lens is more than a tool — it’s a way to transform ideas into lasting visual experiences.”',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '04',
    title: 'SYNC SOUND',
    subtitle: 'SOUND AS AN EMOTION, NOT A BACKGROUND',
    discipline: 'FTII Sync Sound Recording & Mixing',
    description: 'Led by FTII graduates, we capture sync sound on set and craft rich audio layers so that every whisper, every echo, and every beat resonates with the audience.',
    deliverables: [
      'On-location multi-track sync sound recording',
      'Dialogue editing & acoustic spatial mixing',
      'Foley recording & atmospheric design',
      'Dolby & broadcast compliant delivery'
    ],
    snippet: '“Sound isn’t background — it’s the soul of the scene.”',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '05',
    title: 'THE SHOOT',
    subtitle: 'LOGISTICS, TIMELINES & ON-SET EXECUTION',
    discipline: 'Line Production & Executive Direction',
    description: 'From bustling locations in Mumbai to high-altitude field operations across India, our production management ensures seamless execution without losing the creative magic.',
    deliverables: [
      'Full line production & equipment logistics',
      'On-set coordination & department synergy',
      'Location permissions & safety protocols',
      'Rigorous schedule & budget discipline'
    ],
    snippet: '“Plan, Hustle, Retry, Perfect — turning ideas into visual masterpieces.”',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop'
  },
  {
    step: '06',
    title: 'POST & FINISH',
    subtitle: 'THE FINAL CUT & COLOR TIMING',
    discipline: 'FTII Editorial Precision & Color Grading',
    description: 'Every cut transforms raw footage into powerful narratives. We balance pacing, narrative tension, and film-grade color timing to deliver a final master that lingers.',
    deliverables: [
      'Narrative film & commercial editing',
      'Calibrated color grading & LUT timing',
      'Invisible clean-up & VFX finishing',
      'Master delivery for theatrical & OTT'
    ],
    snippet: '“Every cut pulls you deeper into the story.”',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop'
  }
];

export function ProductionDesignSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = scriptSteps[activeStepIndex];

  const handleStepChange = (idx: number) => {
    soundEngine.playMechanicalClick();
    setActiveStepIndex(idx);
  };

  return (
    <section 
      id="production-design"
      className="relative w-full section-ivory text-[#0D0D0C] py-24 sm:py-36 px-6 sm:px-12 select-none border-b border-[#0D0D0C]/10 overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 border-b border-[#0D0D0C]/10 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono-film text-[#8F4832]">
            <Compass className="w-4 h-4" />
            <span>[ 02 // SCRIPT TO SCREEN • THE PRODUCTION JOURNEY ]</span>
            <span>•</span>
            <span>END-TO-END CINEMATIC CRAFT</span>
          </div>
          
          <h2 className="film-title-lg text-[#0D0D0C] font-black tracking-tighter uppercase leading-none max-w-5xl">
            FROM THE FIRST SKETCH <br />
            <span className="text-[#8F4832]">TO THE FINAL FRAME.</span>
          </h2>

          <p className="text-base sm:text-xl font-editorial text-[#66635B] max-w-3xl">
            “From brainstorming the concept to the final cut, we take care of every detail. Your vision, brought to life — seamlessly.”
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {scriptSteps.map((step, idx) => (
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
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mt-1">
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Stage Deep-Dive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 p-8 sm:p-12 rounded-sm bg-[#F3EDE2] border border-[#0D0D0C]/15 shadow-sm">
          
          {/* Left 6 Cols: Stage Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-[#0D0D0C]/20 bg-[#E5DCD0]">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 bg-[#0D0D0C]/85 text-[#F4EFE6] text-[10px] font-mono-film px-2.5 py-1 rounded backdrop-blur-xs">
                SCRIPT TO SCREEN // {activeStep.step} — {activeStep.title}
              </div>
            </div>

            {/* Note Snippet */}
            <div className="p-5 rounded border border-[#8F4832]/30 bg-[#FFFDF9] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[10px] font-mono-film text-[#8F4832] font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>STUDIO CRAFT NOTE</span>
              </div>
              <p className="text-xs sm:text-sm italic font-editorial text-[#0D0D0C]/90 leading-relaxed">
                {activeStep.snippet}
              </p>
            </div>
          </div>

          {/* Right 6 Cols: Details & Deliverables */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono-film text-[#8F4832]">
                <span className="px-2 py-0.5 rounded bg-[#8F4832]/10 font-bold">
                  {activeStep.discipline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-[#0D0D0C] leading-tight">
                {activeStep.subtitle}
              </h3>

              <p className="text-sm sm:text-base font-editorial text-[#66635B] leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            {/* Focus Deliverables */}
            <div className="space-y-3 pt-4 border-t border-[#0D0D0C]/10">
              <span className="text-[11px] font-mono-film text-[#0D0D0C]/70 uppercase tracking-widest block">
                [ DELIVERABLES & EXPERTISE ]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-film">
                {activeStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#EAE2D4] border border-[#0D0D0C]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8F4832]" />
                    <span className="text-[#0D0D0C]/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#0D0D0C]/10">
              <a
                href="#contact"
                onClick={() => soundEngine.playMechanicalClick()}
                className="inline-flex items-center gap-2 text-xs font-mono-film text-[#8F4832] hover:text-[#0D0D0C] font-bold tracking-wider uppercase"
              >
                <span>COMMISSION A STAGE WITH AMUSEMAC →</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}