import React from 'react';
import { Instagram, ExternalLink, MapPin, Phone } from 'lucide-react';
import { GulaLogo } from './Logo.tsx';
import { businessConfig, branchList } from '../config/business.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-200 border-t border-neutral-800 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & About (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <GulaLogo className="h-9" showSubtitle={true} isDark={true} />
            </div>

            <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Your smooth skin journey starts here. Nikmati pengalaman perawatan waxing yang bersih, nyaman, dan higienis untuk kecantikan dan percaya diri Anda.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#E11D74] hover:text-[#E11D74] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram @gulawaxing"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>

              <a
                href={businessConfig.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-white text-xs font-bold text-white hover:text-white transition-colors"
              >
                <span>Linktree Official</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#services" className="text-neutral-200 hover:text-white transition-colors">
                  Menu Layanan
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-200 hover:text-white transition-colors">
                  Tentang GULA Waxing
                </a>
              </li>
              <li>
                <a href="#locations" className="text-neutral-200 hover:text-white transition-colors">
                  Daftar Cabang
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-neutral-200 hover:text-white transition-colors">
                  Galeri Salon
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-200 hover:text-white transition-colors">
                  FAQ & Panduan
                </a>
              </li>
            </ul>
          </div>

          {/* Purwokerto Flagship Detail */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white">
              Cabang Purwokerto
            </h4>
            <div className="space-y-2 text-xs leading-relaxed text-neutral-200 font-medium">
              <p className="text-white font-bold">
                Ruko Depan Pintu Masuk UNSOED
              </p>
              <p>
                Jl. Prof. DR. HR Bunyamin No. 702E, Grendeng, Purwokerto Utara, Banyumas 53121
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-pink-300 font-bold">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: 0889-8957-5099</span>
              </div>
            </div>
          </div>

          {/* Yogyakarta Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white">
              Cabang Yogyakarta
            </h4>
            <ul className="space-y-2 text-xs text-neutral-200 font-medium">
              <li>
                <strong className="text-white">Gejayan:</strong> 08.00–20.00 WIB
              </li>
              <li>
                <strong className="text-white">Jambon:</strong> 09.00–19.00 WIB
              </li>
              <li>
                <strong className="text-white">Tambakbayan:</strong> 10.00–19.00 WIB
              </li>
              <li className="pt-1">
                <a
                  href={businessConfig.linktreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Info cabang Jogja via Linktree</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <p className="font-medium text-neutral-200">
            &copy; {currentYear} {businessConfig.brandName}. All rights reserved.
          </p>

          <p className="text-center sm:text-right text-xs text-neutral-300 font-medium">
            Pemesanan melalui WhatsApp memerlukan konfirmasi ketersediaan jadwal dari admin resmi cabang.
          </p>
        </div>

      </div>
    </footer>
  );
};
