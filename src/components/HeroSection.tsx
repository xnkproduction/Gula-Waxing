import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';
import modelCutout from '../assets/images/model_isolated_smooth_skin_cutout.webp';
import sugarDetail from '../assets/images/sugar_waxing_detail_1791779351773.jpg';

interface HeroSectionProps {
  onSelectPurwokerto: () => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectPurwokerto,
  onOpenBookingModal,
}) => {
  const [selectedQuickService, setSelectedQuickService] = useState<string>('Underarm Waxing');

  const quickServices = ['Underarm Waxing', 'Brazilian Waxing', 'Full Legs Waxing', 'Facial & Brow'];

  const dynamicWAUrl = createWhatsAppUrl(
    businessConfig.branches.purwokerto.whatsapp,
    businessConfig.branches.purwokerto.name,
    selectedQuickService
  );

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FAF9F8] to-[#FAFAF9]">
      
      {/* Background Animated Floating Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.35, 0.5, 0.35],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-rose-200/40 to-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Editorial backdrop lettering */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] font-extrabold tracking-widest text-[16vw] uppercase leading-none whitespace-nowrap text-neutral-900 z-0"
        aria-hidden="true"
      >
        GULA WAXING
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Staggered Scroll/View Entrance */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-6 space-y-6 text-left z-20"
          >
            
            {/* Animated Location Kicker */}
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-neutral-300 shadow-xs text-xs font-semibold text-neutral-900"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D74] animate-pulse" />
              <span className="font-bold text-neutral-950">GULA Waxing Purwokerto</span>
              <span className="text-neutral-400 font-bold">·</span>
              <span className="text-neutral-800 font-semibold">Depan Pintu Gerbang UNSOED</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] text-balance"
            >
              Your Smooth Skin Journey Starts Here.
            </motion.h1>

            {/* Punchy, Concise Subtitle */}
            <motion.p
              variants={fadeUpItem}
              className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed max-w-lg"
            >
              Perawatan waxing higienis dengan formula lembut alami. Nikmati ruang privat yang tenang, terapis ramah, dan lokasi strategis di area kampus UNSOED.
            </motion.p>

            {/* Interactive Quick Service Chips with Micro-interactions */}
            <motion.div
              variants={fadeUpItem}
              className="space-y-2 pt-1"
            >
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-800 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#E11D74]" />
                <span>Pilih Layanan Cepat:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickServices.map((service) => {
                  const isSelected = selectedQuickService === service;
                  return (
                    <motion.button
                      key={service}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setSelectedQuickService(service)}
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#E11D74] text-white shadow-md ring-2 ring-pink-300'
                          : 'bg-white text-neutral-900 hover:bg-neutral-100 border border-neutral-300 shadow-2xs'
                      }`}
                    >
                      <span>{service}</span>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Primary Action Buttons with Micro-interactions */}
            <motion.div
              variants={fadeUpItem}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={dynamicWAUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onSelectPurwokerto}
                className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#E11D74] hover:bg-[#c41563] transition-all shadow-lg hover:shadow-pink-500/25 group cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5 mr-2" />
                <span>Chat &amp; Booking via WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300 shadow-xs transition-all cursor-pointer"
              >
                <span>Lihat Semua Layanan</span>
              </motion.a>
            </motion.div>

            {/* Graphic Trust Badges Strip */}
            <motion.div
              variants={fadeUpItem}
              className="pt-4 border-t border-neutral-300 grid grid-cols-3 gap-2 text-center"
            >
              <div className="p-2.5 rounded-xl bg-white border border-neutral-300 shadow-2xs">
                <span className="block font-extrabold text-sm text-neutral-950">0889-8957-5099</span>
                <span className="text-xs text-neutral-900 font-bold">WhatsApp Resmi</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-neutral-300 shadow-2xs">
                <span className="block font-extrabold text-sm text-neutral-950">100% Privat</span>
                <span className="text-xs text-neutral-900 font-bold">Ruang Nyaman</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-neutral-300 shadow-2xs">
                <span className="block font-extrabold text-sm text-neutral-950">Depan UNSOED</span>
                <span className="text-xs text-neutral-900 font-bold">Jl. HR Bunyamin</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Editorial Cutout Model with Scroll Entrance & Continuous Float */}
          <div className="lg:col-span-6 relative flex justify-center items-end min-h-[490px] sm:min-h-[580px] lg:min-h-[640px]">
            
            {/* Ambient Aura Background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-pink-200/50 via-rose-100/40 to-amber-100/30 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Giant Graphic Editorial Wordmark behind model */}
            <div
              className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 select-none pointer-events-none font-extrabold tracking-tight text-neutral-900/[0.08] text-[22vw] sm:text-[15vw] lg:text-[11vw] uppercase leading-none z-0 text-center whitespace-nowrap"
              aria-hidden="true"
            >
              G U L A
            </div>

            {/* Model Cutout Image with Scroll-Triggered Entrance and Gentle Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 35 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex justify-center"
            >
              <motion.img
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={modelCutout}
                alt="GULA Waxing - Kulit Mulus Bercahaya"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[580px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(225,29,116,0.12)] select-none pointer-events-auto"
              />
            </motion.div>

            {/* Floating Graphic Badge 1 with Micro-interaction */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="hidden sm:flex absolute top-16 -left-4 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-lg border border-neutral-300 z-20 cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-pink-100 text-[#E11D74] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-neutral-950 leading-tight">Formula Lembut</span>
                <span className="block text-[11px] text-neutral-900 font-bold">Nyaman di Kulit</span>
              </div>
            </motion.div>

            {/* Floating Graphic Badge 2 with Micro-interaction */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="hidden sm:flex absolute top-28 right-0 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-lg border border-neutral-300 z-20 cursor-default"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-extrabold text-neutral-950 leading-tight">100% Higienis</span>
                <span className="block text-[11px] text-neutral-900 font-bold">Alat Steril &amp; Bersih</span>
              </div>
            </motion.div>

            {/* Floating Frosted Glassmorphic WhatsApp Booking Simulator Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              animate={{ y: [0, -5, 0] }}
              className="absolute bottom-2 left-4 right-4 sm:left-auto sm:right-0 sm:bottom-4 sm:w-88 glass-panel rounded-2xl p-4.5 shadow-2xl border border-neutral-350 z-20"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-neutral-300 bg-rose-50 shadow-xs relative">
                  <img
                    src={sugarDetail}
                    alt="Sugar Wax Natural Treatment"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-pink-500/10 pointer-events-none" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider uppercase text-[#BE123C]">
                    <span>Flagship UNSOED</span>
                    <span className="text-neutral-500 font-bold">·</span>
                    <span className="text-emerald-800 font-extrabold">Tersedia</span>
                  </div>
                  
                  {/* Dynamic Service Title based on chip click */}
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={selectedQuickService}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-extrabold text-neutral-950 truncate"
                    >
                      {selectedQuickService}
                    </motion.h2>
                  </AnimatePresence>

                  <p className="text-xs text-neutral-950 font-semibold truncate">
                    Chat otomatis siap dikirim ke WhatsApp
                  </p>
                </div>

                {/* Direct Action Link with spring hover */}
                <motion.a
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  href={dynamicWAUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0 -mr-1 cursor-pointer"
                  title="Direct WhatsApp Booking Purwokerto"
                >
                  <span className="w-9 h-9 rounded-full bg-[#E11D74] hover:bg-[#c41563] text-white flex items-center justify-center shadow-md">
                    <MessageCircle className="w-4.5 h-4.5" />
                  </span>
                </motion.a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
