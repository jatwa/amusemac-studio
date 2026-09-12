import React from 'react';
import { HeroSection } from '@/sections/HeroSection';
import { IntroSection } from '@/sections/IntroSection';
import { FeaturedWorkSection } from '@/sections/FeaturedWorkSection';
import { HorizontalReelSection } from '@/sections/HorizontalReelSection';
import { ProductionDesignSection } from '@/sections/ProductionDesignSection';
import { DisciplinesSection } from '@/sections/DisciplinesSection';
import { BehindTheLensSection } from '@/sections/BehindTheLensSection';
import { ShowreelSection } from '@/sections/ShowreelSection';
import { AboutSection } from '@/sections/AboutSection';
import { CollaboratorsSection } from '@/sections/CollaboratorsSection';
import { CinematicTimesSection } from '@/sections/CinematicTimesSection';
import { ContactSection } from '@/sections/ContactSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#090908] text-[#F4EFE6]">
      <Header />
      
      {/* 00: Opening Title Sequence */}
      <HeroSection />

      {/* 01: Manifesto & Intro (Light Ivory) */}
      <IntroSection />

      {/* 02: Our Canvas - Selected Work (Dark Charcoal) */}
      <FeaturedWorkSection />

      {/* 03: Horizontal Cinema Contact Sheet */}
      <HorizontalReelSection />

      {/* 04: Script to Screen - Production Journey (Light Ivory) */}
      <ProductionDesignSection />

      {/* 05: Disciplines & Services (Dark Charcoal) */}
      <DisciplinesSection />

      {/* 06: Behind The Lens - The Creative Team & FTII Alumni */}
      <BehindTheLensSection />

      {/* 07: Watch The Reel (Anamorphic Player) */}
      <ShowreelSection />

      {/* 08: About Amusemac (Light Ivory) */}
      <AboutSection />

      {/* 09: Trusted by Brands & Collaborators */}
      <CollaboratorsSection />

      {/* 10: Cinematic Times - Journal & Insights (Light Ivory) */}
      <CinematicTimesSection />

      {/* 11: End Credits & Reach Us */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}