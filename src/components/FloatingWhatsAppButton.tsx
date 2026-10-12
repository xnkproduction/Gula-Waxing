import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const purwokerto = businessConfig.branches.purwokerto;
  const purwokertoWA = createWhatsAppUrl(purwokerto.whatsapp, purwokerto.name);

  return (
    <aside aria-label="WhatsApp Quick Booking" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Info Bubble if toggled or hovered */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-xl border border-neutral-300 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#BE123C]">
                Official WhatsApp
              </span>
              <h3 className="text-sm font-extrabold text-neutral-950">
                GULA Waxing Purwokerto
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-neutral-700 hover:text-black hover:bg-neutral-100 -mr-2 -mt-2 cursor-pointer"
              aria-label="Tutup info WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-950 mb-3 leading-relaxed font-medium">
            Butuh info harga, jadwal konsultasi, atau booking di cabang UNSOED? Chat admin kami sekarang.
          </p>

          <a
            href={purwokertoWA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#E11D74] hover:bg-[#c41563] transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Kirim Pesan WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-4.5 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-extrabold shadow-md border border-neutral-300 hover:bg-neutral-50 transition-all hover:scale-102 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>WhatsApp Purwokerto</span>
        </button>

        <a
          href={purwokertoWA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Booking GULA Waxing Purwokerto"
          className="w-13 h-13 rounded-full bg-[#E11D74] hover:bg-[#c41563] text-white flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};
