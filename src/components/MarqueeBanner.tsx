import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ShieldCheck, Heart, Clock } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    { text: "GULA WAXING PURWOKERTO", icon: Sparkles },
    { text: "RUKO DEPAN PINTU UNSOED", icon: MapPin },
    { text: "100% HYGIENIC & PRIVATE SUITE", icon: ShieldCheck },
    { text: "FORMULA LEMBUT & KULIT MULUS", icon: Heart },
    { text: "WHATSAPP: 0889-8957-5099", icon: Clock },
    { text: "RESERVASI MUDAH & CEPAT", icon: Sparkles },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 py-3.5 border-y border-neutral-800 text-white select-none">
      {/* Ambient gradient glow on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-widest uppercase">
              <span className="text-[#FF2A85]">
                <Icon className="w-3.5 h-3.5 animate-pulse" />
              </span>
              <span className="text-white">{item.text}</span>
              <span className="text-neutral-400 font-bold">/</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
