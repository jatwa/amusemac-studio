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

      {/* 02: Selected Work (Dark Charcoal) */}
      <FeaturedWorkSection />

      {/* 03: Horizontal Cinema Contact Sheet */}
      <HorizontalReelSection />

      {/* 04: Production Design & World-Building (Light Ivory) */}
      <ProductionDesignSection />

      {/* 05: Disciplines & Services (Dark Charcoal) */}
      <DisciplinesSection />

      {/* 06: Behind The Lens (Documentary Studio Wall) */}
      <BehindTheLensSection />

      {/* 07: Watch The Reel (Anamorphic Player) */}
      <ShowreelSection />

      {/* 08: About Amusemac (Light Ivory) */}
      <AboutSection />

      {/* 09: Collaborators & Honors */}
      <CollaboratorsSection />

      {/* 10: End Credits & Dispatch */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
