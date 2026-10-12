/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeBanner } from './components/MarqueeBanner.tsx';
import { BrandIntroduction } from './components/BrandIntroduction.tsx';
import { TreatmentVisualSelector } from './components/TreatmentVisualSelector.tsx';
import { ServiceSection } from './components/ServiceSection.tsx';
import { WhyGulaSection } from './components/WhyGulaSection.tsx';
import { BranchSelector } from './components/BranchSelector.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { InstagramSection } from './components/InstagramSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { Branch, businessConfig } from './config/business.ts';

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(businessConfig.branches.purwokerto);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleSelectPurwokerto = () => {
    setSelectedBranch(businessConfig.branches.purwokerto);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1C1917] selection:bg-pink-100 selection:text-[#E11D74]">
      {/* Navbar with 3-zone contract */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      <main className="flex-1">
        {/* Hero Section with Motion Graphics & Live WhatsApp Simulator */}
        <HeroSection
          onSelectPurwokerto={handleSelectPurwokerto}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Infinite Animated Luxury Brand Marquee */}
        <MarqueeBanner />

        {/* 3-Step Visual Journey: "Self-Care, Made Simple." */}
        <BrandIntroduction />

        {/* Interactive Treatment Zones Graphic Diagram & Hotspots */}
        <TreatmentVisualSelector />

        {/* Services & Treatment Catalog with Motion Grid */}
        <ServiceSection
          selectedBranchPhone={selectedBranch.whatsapp || businessConfig.branches.purwokerto.whatsapp}
          selectedBranchName={selectedBranch.name}
          onBookService={handleOpenBookingModal}
        />

        {/* Why GULA Waxing: Visual Metric Cards */}
        <WhyGulaSection />

        {/* Branch Selector: Highlight Purwokerto vs Yogyakarta */}
        <BranchSelector
          selectedBranchId={selectedBranch.id}
          onSelectBranch={setSelectedBranch}
        />

        {/* Ambiance & Studio Gallery */}
        <GallerySection />

        {/* Instagram Integration: "Follow the GULA Experience." */}
        <InstagramSection />

        {/* Dedicated Purwokerto Location & Google Maps */}
        <LocationSection />

        {/* Accessible FAQ Accordion */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA selectedService={prefilledService} />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsAppButton />

      {/* Booking & WhatsApp Message Builder Dialog */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={prefilledService}
        initialBranchId={selectedBranch.id}
      />
    </div>
  );
}
