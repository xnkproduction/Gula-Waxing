import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';

interface FinalCTAProps {
  selectedService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ selectedService }) => {
  const purwokertoWA = createWhatsAppUrl(
    businessConfig.branches.purwokerto.whatsapp,
    businessConfig.branches.purwokerto.name,
    selectedService
  );

  return (
    <section className="py-20 md:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D74]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold tracking-wide text-pink-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GULA Waxing Purwokerto</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Your Next Self-Care Appointment Starts Here.
        </h2>

        <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed">
          Explore our services and contact GULA Waxing Purwokerto to ask about current pricing and available appointment times.
        </p>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={purwokertoWA}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#E11D74] hover:bg-[#c41563] active:scale-98 transition-all shadow-lg hover:shadow-pink-500/25 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all cursor-pointer"
          >
            Lihat Menu Layanan
          </a>
        </div>

        <p className="text-xs text-neutral-200 font-medium">
          WhatsApp Resmi Cabang Purwokerto:{' '}
          <span className="font-mono text-white font-extrabold">0889-8957-5099</span> (Depan Pintu Masuk UNSOED)
        </p>

      </div>
    </section>
  );
};
