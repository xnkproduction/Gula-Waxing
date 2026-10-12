import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageSquare, ShieldCheck, Store, Sparkles } from 'lucide-react';

export const WhyGulaSection: React.FC = () => {
  const features = [
    {
      metric: "Depan UNSOED",
      subMetric: "3 Menit dari Gerbang",
      title: "Lokasi Strategis Kampus",
      desc: "Ruko Jl. HR Bunyamin No. 702E, sangat mudah dijangkau dengan akses parkir luas.",
      icon: MapPin,
      color: "bg-pink-100 text-[#E11D74]",
      point: "01",
    },
    {
      metric: "100% Privat",
      subMetric: "Sanitasi Terjaga",
      title: "Ruang Perawatan Tenang",
      desc: "Setiap sesi dilakukan di ruangan tertutup yang higienis, bersih, dan nyaman.",
      icon: ShieldCheck,
      color: "bg-emerald-100 text-emerald-700",
      point: "02",
    },
    {
      metric: "Langsung Chat",
      subMetric: "Tanpa Registrasi Akun",
      title: "Booking WhatsApp Cepat",
      desc: "Cukup hubungi admin resmi Purwokerto di 0889-8957-5099 untuk konfirmasi jadwal.",
      icon: MessageSquare,
      color: "bg-purple-100 text-purple-700",
      point: "03",
    },
    {
      metric: "Multi-Cabang",
      subMetric: "Purwokerto & Yogyakarta",
      title: "Brand Terpercaya",
      desc: "Dipercaya ribuan pelanggan setia dengan standar pelayanan ramah dan profesional.",
      icon: Store,
      color: "bg-amber-100 text-amber-700",
      point: "04",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F8] border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The GULA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Kenapa Memilih GULA Waxing?
          </h2>
          <p className="text-base text-neutral-900 font-medium leading-relaxed">
            Kenyamanan Anda adalah prioritas kami dalam setiap sesi perawatan.
          </p>
        </div>

        {/* 4 Feature Cards with Motion and Visual Metric Anchors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.point}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-300 hover:border-pink-400 hover:shadow-xl transition-all flex flex-col justify-between group shadow-xs"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-neutral-800 group-hover:text-[#BE123C] transition-colors">
                      {item.point}
                    </span>
                  </div>

                  <div>
                    {/* Visual Metric Callout */}
                    <span className="block text-xl font-extrabold text-neutral-950 tracking-tight">
                      {item.metric}
                    </span>
                    <span className="block text-xs font-extrabold text-[#BE123C]">
                      {item.subMetric}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-neutral-200">
                    <h3 className="text-base font-extrabold text-neutral-950 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
