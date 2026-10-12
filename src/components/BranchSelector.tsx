import React from 'react';
import { MapPin, Clock, MessageCircle, ExternalLink, Check, AlertCircle, Sparkles } from 'lucide-react';
import { Branch, branchList, businessConfig, createWhatsAppUrl } from '../config/business.ts';

interface BranchSelectorProps {
  selectedBranchId: string;
  onSelectBranch: (branch: Branch) => void;
}

export const BranchSelector: React.FC<BranchSelectorProps> = ({
  selectedBranchId,
  onSelectBranch,
}) => {
  return (
    <section id="locations" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
            <span>Our Branches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Pilih Lokasi Cabang GULA Waxing
          </h2>
          <p className="text-base text-neutral-900 leading-relaxed font-medium">
            Prioritas utama kami adalah cabang <strong className="text-neutral-950 font-extrabold">Purwokerto (depan UNSOED)</strong> dengan kontak WhatsApp terverifikasi, didukung oleh cabang-cabang kami di Yogyakarta.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PURWOKERTO BRANCH - Visual Spotlight / Marquee Hero Card (7 columns) */}
          {(() => {
            const purwokerto = branchList.find(b => b.id === 'purwokerto')!;
            const isSelected = selectedBranchId === purwokerto.id;
            const waUrl = createWhatsAppUrl(purwokerto.whatsapp!, purwokerto.name);

            return (
              <div
                className={`lg:col-span-7 rounded-3xl p-7 md:p-9 border-2 transition-all relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30 ${
                  isSelected
                    ? 'border-[#E11D74] shadow-xl ring-4 ring-pink-100'
                    : 'border-pink-200 shadow-md hover:border-[#E11D74]/70'
                }`}
              >
                {/* Visual badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D74] text-white text-xs font-extrabold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CABANG UTAMA / PRIORITAS</span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    <Check className="w-3.5 h-3.5" />
                    <span>Kontak WhatsApp Terverifikasi</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                      {purwokerto.name}
                    </h3>
                    <p className="text-sm font-extrabold text-[#BE123C] mt-1">
                      {purwokerto.landmark}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-sm text-neutral-950 font-semibold border-t border-neutral-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#BE123C] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        {purwokerto.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#BE123C] shrink-0" />
                      <p className="text-neutral-950 font-bold">
                        {purwokerto.hours}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp contact banner for Purwokerto */}
                  <div className="p-4 rounded-xl bg-white border border-neutral-300 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-xs text-neutral-900 font-bold">
                      <span>Nomor WhatsApp Resmi Purwokerto:</span>
                      <span className="font-mono font-extrabold text-neutral-950 text-sm tracking-tight">0889-8957-5099</span>
                    </div>
                    <p className="text-xs text-neutral-950 leading-relaxed font-medium">
                      Pesan otomatis sudah disiapkan untuk menanyakan jadwal dan pricelist terupdate.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#E11D74] hover:bg-[#c41563] active:scale-98 transition-all shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat WhatsApp Purwokerto</span>
                    </a>

                    <a
                      href={purwokerto.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-neutral-950 bg-white hover:bg-neutral-100 border border-neutral-300 active:scale-98 transition-all shadow-2xs"
                    >
                      <MapPin className="w-4 h-4 text-[#BE123C]" />
                      <span>Buka Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-900" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* OTHER BRANCHES (Yogyakarta) - Stacked Cards (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-1">
              <h4 className="text-base font-extrabold text-neutral-950">
                Cabang Yogyakarta
              </h4>
              <p className="text-xs text-neutral-900 font-medium">
                Informasi jadwal operasional dan reservasi cabang Yogyakarta melalui Linktree resmi.
              </p>
            </div>

            {branchList
              .filter(b => b.id !== 'purwokerto')
              .map((branch) => {
                const isSelected = selectedBranchId === branch.id;

                return (
                  <div
                    key={branch.id}
                    className={`rounded-2xl p-5 border transition-all bg-white shadow-xs ${
                      isSelected
                        ? 'border-neutral-950 shadow-md ring-2 ring-neutral-300'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider">
                          {branch.city}
                        </span>
                        <h4 className="text-base font-extrabold text-neutral-950">
                          {branch.name}
                        </h4>
                      </div>

                      <span className="text-[11px] font-extrabold text-amber-950 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full shrink-0">
                        {branch.hours}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-950 font-medium mb-3 leading-relaxed">
                      {branch.address}
                    </p>

                    <div className="pt-3 border-t border-neutral-200 flex items-center justify-between gap-2">
                      <a
                        href={businessConfig.linktreeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-extrabold text-neutral-950 hover:text-black inline-flex items-center gap-1 transition-colors min-h-[44px] py-2 px-1"
                      >
                        <span>Cek Kontak via Linktree</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-900" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onSelectBranch(branch)}
                        className={`text-xs px-3.5 py-2 min-h-[44px] inline-flex items-center justify-center rounded-lg font-extrabold transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-950 text-white'
                            : 'bg-neutral-100 text-neutral-950 hover:bg-neutral-200 border border-neutral-300'
                        }`}
                      >
                        {isSelected ? 'Terpilih' : 'Pilih Cabang'}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>

      </div>
    </section>
  );
};
