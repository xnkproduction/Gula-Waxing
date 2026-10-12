import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GulaLogo } from './Logo.tsx';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const purwokertoWA = createWhatsAppUrl(
    businessConfig.branches.purwokerto.whatsapp,
    businessConfig.branches.purwokerto.name
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-300 py-3.5'
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element / Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 select-none group shrink-0"
            aria-label="GULA Waxing Home"
          >
            <GulaLogo className="h-8.5" />
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-neutral-900">
            <a
              href="#services"
              className="hover:text-[#BE123C] transition-colors whitespace-nowrap shrink-0"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#BE123C] transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#locations"
              className="hover:text-[#BE123C] transition-colors whitespace-nowrap shrink-0"
            >
              Locations
            </a>
            <a
              href="#faq"
              className="hover:text-[#BE123C] transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
            <a
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#BE123C] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700 group-hover:text-[#BE123C]" />
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={purwokertoWA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2 text-xs font-bold tracking-wide text-white bg-neutral-950 hover:bg-[#BE123C] active:scale-98 rounded-full transition-all shadow-xs whitespace-nowrap"
            >
              <span>Book in Purwokerto</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-neutral-900 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-5 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-sm font-semibold text-neutral-900 pt-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 min-h-[44px] flex items-center hover:text-neutral-950 border-b border-neutral-100"
            >
              Services & Treatments
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 min-h-[44px] flex items-center hover:text-neutral-950 border-b border-neutral-100"
            >
              Why GULA Waxing
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 min-h-[44px] flex items-center hover:text-neutral-950 border-b border-neutral-100"
            >
              Branch Locations
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 min-h-[44px] flex items-center hover:text-neutral-950 border-b border-neutral-100"
            >
              Frequently Asked Questions
            </a>
            <a
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 min-h-[44px] flex items-center justify-between hover:text-neutral-950 border-b border-neutral-100"
            >
              <span>Follow @gulawaxing</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>

            <div className="pt-3">
              <a
                href={purwokertoWA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-sm"
              >
                Book Appointment (Purwokerto)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
