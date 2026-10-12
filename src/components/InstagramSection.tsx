import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business.ts';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      id: "post-1",
      tag: "Self-Care Ritual",
      caption: "Momen tenang untuk merawat kelembutan kulitmu setiap bulan. Kulit halus, percaya diri maksimal.",
      likes: "240+",
      comments: "18"
    },
    {
      id: "post-2",
      tag: "UNSOED Purwokerto",
      caption: "Spot favorit dekat kampus! Lokasi strategis ruko depan pintu gerbang UNSOED untuk treatment praktis.",
      likes: "310+",
      comments: "34"
    },
    {
      id: "post-3",
      tag: "Sugar Waxing Tips",
      caption: "Kenapa bulu tidak boleh dicukur sebelum waxing? Temukan tips persiapan sebelum treatment di highlight kami.",
      likes: "195+",
      comments: "15"
    },
    {
      id: "post-4",
      tag: "Clean & Private",
      caption: "Privasi dan kebersihan adalah komitmen utama kami. Ruangan bersih, terapis ramah & profesional.",
      likes: "280+",
      comments: "22"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF9] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
              <Instagram className="w-3.5 h-3.5" />
              <span>Social Media</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Follow the GULA Experience.
            </h2>
            <p className="text-base text-neutral-900 font-medium leading-relaxed max-w-xl">
              Ikuti kabar terbaru, tips perawatan kulit, jadwal operasional, dan promo menarik di akun Instagram resmi kami{' '}
              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-[#BE123C] hover:underline"
              >
                {businessConfig.instagramHandle}
              </a>
              .
            </p>
          </div>

          <a
            href={businessConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-neutral-950 hover:bg-[#BE123C] transition-colors shadow-xs shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Kunjungi @gulawaxing</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
          </a>
        </div>

        {/* Curated Instagram Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={businessConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 border border-neutral-300 hover:border-pink-400 hover:shadow-xl transition-all flex flex-col justify-between group space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-800">
                  <span className="font-extrabold text-[#BE123C]">{post.tag}</span>
                  <Instagram className="w-4 h-4 text-neutral-600 group-hover:text-[#BE123C] transition-colors" />
                </div>
                <p className="text-sm text-neutral-900 leading-relaxed font-medium">
                  "{post.caption}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-900 font-bold">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-700" />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <span className="font-extrabold text-neutral-950 group-hover:text-[#BE123C] inline-flex items-center gap-0.5">
                  <span>Lihat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
