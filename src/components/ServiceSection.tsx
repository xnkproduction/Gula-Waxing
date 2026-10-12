import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Clock, MessageCircle, ArrowUpRight, Sparkles, HelpCircle } from 'lucide-react';
import { servicesData, ServiceItem, businessConfig, createWhatsAppUrl } from '../config/business.ts';

interface ServiceSectionProps {
  selectedBranchPhone?: string;
  selectedBranchName?: string;
  onBookService?: (serviceName: string) => void;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  selectedBranchPhone = businessConfig.branches.purwokerto.whatsapp,
  selectedBranchName = businessConfig.branches.purwokerto.name,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Body', 'Arms & Legs', 'Intimate', 'Face'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Scroll-Triggered Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/70 border border-pink-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Menu &amp; Treatment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Layanan Waxing GULA
            </h2>
            <p className="text-base text-neutral-900 font-medium leading-relaxed">
              Pilihan perawatan waxing higienis dari area wajah hingga kaki dengan formula lembut alami.
            </p>
          </div>

          {/* Quick Notice Pill Card with Micro-interaction */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-2xl bg-white border border-pink-300 shadow-xs max-w-sm flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-pink-100 text-[#BE123C] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4.5 h-4.5" />
            </div>
            <p className="text-xs text-neutral-950 font-semibold leading-snug">
              Tarif resmi &amp; promo paket update dapat langsung ditanyakan via WhatsApp admin.
            </p>
          </motion.div>
        </motion.div>

        {/* Category Filter Tabs with Micro-interactions */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[44px] px-5 py-2.5 text-xs font-bold rounded-full transition-all whitespace-nowrap shrink-0 inline-flex items-center justify-center cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white shadow-md'
                  : 'bg-white text-neutral-950 hover:text-black border border-neutral-300 hover:border-neutral-400 shadow-2xs'
              }`}
            >
              {cat === 'All' ? 'Semua Layanan' : cat}
            </motion.button>
          ))}
        </div>

        {/* Scroll-Triggered Staggered Services Grid */}
        <motion.div
          key={selectedCategory}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service: ServiceItem) => {
            const bookingUrl = createWhatsAppUrl(
              selectedBranchPhone,
              selectedBranchName,
              service.name
            );

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 350, damping: 25 },
                }}
                className="bg-white rounded-2xl p-6.5 border border-neutral-300 hover:border-pink-400 hover:shadow-xl transition-all flex flex-col justify-between group relative cursor-pointer shadow-xs"
                onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
              >
                {/* Popularity badge with pulsing icon */}
                {service.isPopular && (
                  <div className="absolute top-5 right-5 text-[11px] font-extrabold text-[#BE123C] bg-pink-100/90 px-3 py-1 rounded-full flex items-center gap-1 border border-pink-300 shadow-2xs">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    <span>Favorit</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Category and Treatment Area */}
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                    <span className="font-extrabold text-neutral-950">{service.category}</span>
                    <span aria-hidden="true" className="text-neutral-500 font-bold">·</span>
                    <span>{service.treatmentArea}</span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-extrabold text-neutral-950 group-hover:text-[#BE123C] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-neutral-900 font-medium leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Duration Pill Tag */}
                  <div className="pt-2 flex items-center justify-between text-xs text-neutral-900 border-t border-neutral-200">
                    {service.duration && (
                      <div className="flex items-center gap-1.5 font-bold text-neutral-950">
                        <Clock className="w-3.5 h-3.5 text-[#BE123C]" />
                        <span>Estimasi: {service.duration}</span>
                      </div>
                    )}
                    <span className="text-xs text-[#BE123C] font-extrabold">
                      Cek Promo via WA
                    </span>
                  </div>
                </div>

                {/* Card Action Button with Micro-interaction */}
                <div className="pt-5 mt-5 border-t border-neutral-200">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-extrabold text-neutral-950 bg-neutral-100 hover:bg-[#E11D74] hover:text-white border border-neutral-300 hover:border-transparent transition-all shadow-2xs group-hover:bg-[#E11D74] group-hover:text-white"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tanya Jadwal &amp; Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
