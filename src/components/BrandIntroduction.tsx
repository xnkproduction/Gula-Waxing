import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const BrandIntroduction: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Pilih Area & Jadwal",
      desc: "Tentukan area treatment yang Anda inginkan serta waktu luang yang paling nyaman.",
      icon: Clock,
      color: "from-pink-500/10 to-rose-500/10",
      accent: "text-[#E11D74]",
    },
    {
      num: "02",
      title: "Chat WhatsApp Cepat",
      desc: "Admin cabang Purwokerto langsung mengonfirmasi ketersediaan slot tanpa perlu registrasi.",
      icon: Sparkles,
      color: "from-purple-500/10 to-pink-500/10",
      accent: "text-purple-600",
    },
    {
      num: "03",
      title: "Ruang Privat & Mulus",
      desc: "Nikmati perawatan bersih, nyaman, dan higienis dengan formula alami di ruang tertutup.",
      icon: ShieldCheck,
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-600",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-neutral-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Clean Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Self-Care Made Simple</span>
        </div>

        {/* Punchy Heading */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Perawatan Nyaman, Hasil Maksimal.
          </h2>
          <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed">
            Tiga langkah mudah untuk kulit mulus dan percaya diri bersama GULA Waxing Purwokerto.
          </p>
        </div>

        {/* 3 Interactive Graphic Step Cards with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-7 bg-white border border-neutral-300 hover:border-pink-400 hover:shadow-xl transition-all group flex flex-col justify-between shadow-xs"
              >
                {/* Background ambient corner blur */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-bl-full pointer-events-none -z-10`} />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-50 shadow-xs border border-neutral-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${step.accent}`} />
                    </div>
                    <span className="font-mono text-xl font-extrabold text-neutral-800 group-hover:text-[#BE123C] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-extrabold text-neutral-950 mb-2 group-hover:text-[#BE123C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-900 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Micro Badge */}
                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-extrabold text-neutral-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Proses Cepat &amp; Praktis</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
