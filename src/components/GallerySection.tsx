import React, { useState } from 'react';
import { X, Sparkles, Eye } from 'lucide-react';
import studioImg from '../assets/images/waxing_treatment_studio_1791779340069.jpg';
import sugarImg from '../assets/images/sugar_waxing_detail_1791779351773.jpg';
import loungeImg from '../assets/images/purwokerto_salon_lounge_1791779366238.jpg';
import modelImg from '../assets/images/hero_model_smooth_skin_1791779327729.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

export const GallerySection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "treatment-suite",
      title: "Ruang Treatment Bersih & Privat",
      category: "Studio Interior",
      image: studioImg,
      aspect: "col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-[16/10]"
    },
    {
      id: "sugar-detail",
      title: "Formula Waxing Alami Lembut",
      category: "Perawatan Kulit",
      image: sugarImg,
      aspect: "col-span-1 md:col-span-1 lg:col-span-1 aspect-[4/3] md:aspect-[4/5]"
    },
    {
      id: "lounge-reception",
      title: "Lounge & Resepsionis Hangat",
      category: "Suasana Salon",
      image: loungeImg,
      aspect: "col-span-1 md:col-span-1 lg:col-span-1 aspect-[4/3]"
    },
    {
      id: "skin-journey",
      title: "Kulit Mulus Percaya Diri",
      category: "Self-Care",
      image: modelImg,
      aspect: "col-span-1 md:col-span-2 lg:col-span-2 aspect-[16/9] md:aspect-[16/10]"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ambiance &amp; Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Galeri Suasana Salon
            </h2>
            <p className="text-base text-neutral-900 font-medium leading-relaxed">
              Kenyamanan, kebersihan, dan privasi adalah prioritas kami dalam menghadirkan pengalaman self-care terbaik bagi Anda.
            </p>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-neutral-300 bg-neutral-100 ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Scrim & Info with high contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-95 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-extrabold tracking-wider uppercase text-pink-200 drop-shadow-sm">
                  {item.category}
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 bg-neutral-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                  {activeModalImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {activeModalImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
