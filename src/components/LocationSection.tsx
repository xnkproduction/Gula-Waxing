import React, { useState } from 'react';
import { MapPin, Navigation, MessageCircle, Copy, Check, ExternalLink, Compass } from 'lucide-react';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const purwokerto = businessConfig.branches.purwokerto;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(purwokerto.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const purwokertoWA = createWhatsAppUrl(purwokerto.whatsapp, purwokerto.name);

  return (
    <section id="location-purwokerto" className="py-20 md:py-28 bg-[#FAFAF9] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Purwokerto Flagship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Lokasi GULA Waxing Purwokerto
          </h2>
          <p className="text-base text-neutral-900 font-medium leading-relaxed">
            Berada tepat di depan pintu gerbang utama Universitas Jenderal Soedirman (UNSOED), memudahkan Anda yang berada di Purwokerto Utara dan sekitarnya untuk berkunjung.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details & Directions Card (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-neutral-300 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-[#BE123C] text-xs font-extrabold tracking-wide mb-3 border border-pink-300">
                  <span>UNSOED Purwokerto Branch</span>
                </div>
                <h3 className="text-2xl font-extrabold text-neutral-950">
                  {purwokerto.name}
                </h3>
                <p className="text-sm font-extrabold text-[#BE123C] mt-1">
                  Patokan: {purwokerto.landmark}
                </p>
              </div>

              {/* Address with Copy Button */}
              <div className="p-4.5 rounded-2xl bg-neutral-50 border border-neutral-300 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#BE123C] shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-950 font-semibold leading-relaxed">
                    {purwokerto.address}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-900 font-semibold">
                    Kabupaten Banyumas, Jawa Tengah 53121
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-neutral-950 hover:text-black transition-colors px-2.5 py-2 min-h-[44px] rounded-md hover:bg-neutral-200 border border-neutral-300 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-emerald-800">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-900" />
                        <span>Salin Alamat</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Helpful transport notes */}
              <div className="space-y-2 text-xs text-neutral-950 font-medium">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  <span>Akses kendaraan roda dua &amp; empat mudah dengan area parkir ruko.</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  <span>Dekat dengan area kuliner mahasiswa dan fasilitas kampus UNSOED.</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
              <a
                href={purwokerto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-extrabold text-white bg-neutral-950 hover:bg-[#BE123C] active:scale-98 transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-pink-300" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>

              <a
                href={purwokertoWA}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-extrabold text-neutral-950 bg-white hover:bg-neutral-100 border border-neutral-300 active:scale-98 transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-[#BE123C]" />
                <span>Hubungi Admin</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed / Preview Container (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-neutral-300 shadow-md bg-white min-h-[380px] flex flex-col">
            <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span className="font-bold text-neutral-950">Google Maps Preview</span>
                <span className="text-neutral-500 font-bold">·</span>
                <span className="font-bold text-neutral-950">Gula Waxing Purwokerto</span>
              </div>
              <a
                href={purwokerto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-[#BE123C] hover:underline inline-flex items-center gap-1"
              >
                <span>Buka Penuh</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full bg-neutral-100 min-h-[340px]">
              <iframe
                title="Peta Lokasi GULA Waxing Purwokerto"
                src="https://maps.google.com/maps?q=Gula+Waxing+Purwokerto+Profesor+DR+HR+Bunyamin+UNSOED&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
