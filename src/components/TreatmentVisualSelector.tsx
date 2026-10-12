import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Clock, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { businessConfig, createWhatsAppUrl } from '../config/business.ts';

interface Zone {
  id: string;
  name: string;
  category: string;
  iconCoord: { x: number; y: number };
  duration: string;
  benefit: string;
  popular?: boolean;
  tag: string;
}

export const TreatmentVisualSelector: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>('underarm');
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);

  const zones: Zone[] = [
    {
      id: 'face',
      name: 'Facial & Brow Waxing',
      category: 'Wajah & Alis',
      iconCoord: { x: 50, y: 12 },
      duration: '15-20 Menit',
      benefit: 'Merapikan alis, kumis tipis, & bulu halus wajah untuk tampilan makeup lebih glowing, halus, dan flawless.',
      popular: false,
      tag: 'Glow Facial',
    },
    {
      id: 'underarm',
      name: 'Underarm Waxing',
      category: 'Area Ketiak',
      iconCoord: { x: 38, y: 29 },
      duration: '15-20 Menit',
      benefit: 'Mencabut bulu ketiak hingga akar dengan pasta gula alami. Kulit lebih cerah, mulus, dan bebas iritasi mencukur.',
      popular: true,
      tag: 'Best Seller #1',
    },
    {
      id: 'arms',
      name: 'Full & Half Arms',
      category: 'Area Lengan',
      iconCoord: { x: 26, y: 44 },
      duration: '25-35 Menit',
      benefit: 'Lengan halus bersih tanpa bulu kasar atau stubble tajam. Sangat nyaman untuk aktivitas harian dan pakaian santai.',
      popular: false,
      tag: 'Silky Arms',
    },
    {
      id: 'bikini',
      name: 'Bikini & Brazilian',
      category: 'Intimate Area',
      iconCoord: { x: 50, y: 49 },
      duration: '30-45 Menit',
      benefit: 'Higienis maksimal di ruang privat 1-on-1 khusus wanita dengan terapis berpengalaman, lembut, dan bersertifikat.',
      popular: true,
      tag: '100% Private Room',
    },
    {
      id: 'legs',
      name: 'Full & Half Legs',
      category: 'Area Kaki',
      iconCoord: { x: 50, y: 72 },
      duration: '35-50 Menit',
      benefit: 'Kaki mulus jenjang bercahaya, bebas bulu tebal hingga berminggu-minggu tanpa rasa gatal pasca bercukur.',
      popular: true,
      tag: 'Smooth Legs',
    },
  ];

  const activeZone = zones.find((z) => z.id === activeZoneId) || zones[0];
  const bookingUrl = createWhatsAppUrl(
    businessConfig.branches.purwokerto.whatsapp,
    businessConfig.branches.purwokerto.name,
    activeZone.name
  );

  const isHighlighted = (zoneId: string) => activeZoneId === zoneId || hoveredZoneId === zoneId;

  return (
    <section id="treatment-zones" className="py-20 md:py-28 bg-[#FAFAF9] border-t border-neutral-200 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-pink-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-50/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-[#BE123C] uppercase px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Studio Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Pilih Area Perawatan Tubuh
          </h2>
          <p className="text-base text-neutral-900 font-medium leading-relaxed">
            Klik siluet manekin atau tombol area tubuh di bawah untuk melihat estimasi durasi, manfaat higienis, dan langsung reservasi WhatsApp.
          </p>
        </div>

        {/* Visual Graphic Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-neutral-300 shadow-xl relative">
          
          {/* Left: Interactive Aesthetic Studio Mannequin Container (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[490px] sm:min-h-[530px] bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EC] to-[#EFEAE2] rounded-2xl p-6 border border-neutral-300 shadow-inner overflow-hidden">
            
            {/* Top Studio Indicator Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-300 text-[11px] font-extrabold text-neutral-900 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#E11D74] animate-pulse" />
                <span>Studio Mannequin 3D Guide</span>
              </span>

              <span className="hidden sm:inline-flex items-center text-[11px] font-bold text-neutral-700 bg-white/70 px-2.5 py-1 rounded-full border border-neutral-200">
                Front Silhouette
              </span>
            </div>

            {/* Aesthetic Mannequin Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[1/1.6] flex items-center justify-center my-4">
              
              {/* Studio Backlight Aura */}
              <div
                className="absolute inset-0 rounded-full blur-2xl transition-all duration-500 opacity-60 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(225,29,116,0.22) 0%, rgba(251,113,133,0.08) 50%, transparent 75%)',
                }}
              />

              {/* High-Fidelity Aesthetic Mannequin SVG */}
              <svg
                viewBox="0 0 300 480"
                className="w-full h-full drop-shadow-md select-none transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle Ceramic Studio Mannequin Base Shading */}
                  <linearGradient id="bodyNeutralGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="45%" stopColor="#EDE6DE" />
                    <stop offset="100%" stopColor="#D8CEC2" />
                  </linearGradient>

                  {/* Active Glowing Rose/Magenta Accent */}
                  <linearGradient id="activeZoneGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF4D8B" />
                    <stop offset="60%" stopColor="#E11D74" />
                    <stop offset="100%" stopColor="#BE123C" />
                  </linearGradient>

                  {/* Hover Accent */}
                  <linearGradient id="hoverZoneGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FCE7F3" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>

                  {/* Pedestal Glow */}
                  <radialGradient id="daisGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E11D74" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#E11D74" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#E11D74" stopOpacity="0" />
                  </radialGradient>

                  {/* Pedestal Top Disc */}
                  <linearGradient id="daisTop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#D5CDC4" />
                  </linearGradient>

                  {/* Soft Drop Glow Filter */}
                  <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E11D74" floodOpacity="0.45" />
                  </filter>
                </defs>

                {/* Studio Platform / Pedestal */}
                <g id="studio-pedestal">
                  <ellipse cx="150" cy="456" rx="92" ry="18" fill="url(#daisGlow)" />
                  <ellipse cx="150" cy="454" rx="78" ry="12" fill="url(#daisTop)" stroke="#C8BFB4" strokeWidth="1.5" />
                  <ellipse cx="150" cy="452" rx="66" ry="8" fill="#F4EFEA" stroke="#E2DAD0" strokeWidth="1" />
                </g>

                {/* --- 1. HEAD & BROW (Zone: face) --- */}
                <g
                  id="zone-face"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveZoneId('face')}
                  onMouseEnter={() => setHoveredZoneId('face')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                >
                  {/* Hair Updo / Chic Topknot */}
                  <circle
                    cx="150"
                    cy="29"
                    r="13"
                    fill={isHighlighted('face') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('face') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('face') ? 'url(#softGlow)' : undefined}
                  />
                  <ellipse
                    cx="146"
                    cy="26"
                    rx="6"
                    ry="3.5"
                    fill="rgba(255,255,255,0.45)"
                  />

                  {/* Graceful Oval Head & Sculpted Jaw */}
                  <path
                    d="M 132 46 C 131 35, 169 35, 168 46 C 168 57, 165 67, 150 78 C 135 67, 132 57, 132 46 Z"
                    fill={isHighlighted('face') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('face') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('face') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Slender Graceful Neck */}
                  <path
                    d="M 143 76 C 143 85, 141 90, 137 96 L 163 96 C 159 90, 157 85, 157 76 Z"
                    fill={isHighlighted('face') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('face') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                  />

                  {/* Facial / Brow Indicator Accents */}
                  {isHighlighted('face') && (
                    <g stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.95">
                      {/* Stylized Eyebrow lines */}
                      <path d="M 141 48 Q 145 46 148 48" />
                      <path d="M 152 48 Q 155 46 159 48" />
                    </g>
                  )}
                </g>

                {/* Clavicle & Upper Chest Contour */}
                <g stroke="#C4B8A9" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8">
                  <path d="M 124 104 Q 138 109 146 104" />
                  <path d="M 154 104 Q 162 109 176 104" />
                </g>

                {/* --- 2. TORSO & WAIST BASE --- */}
                <g id="torso-base">
                  <path
                    d="M 137 96 L 105 108 C 104 116, 114 135, 118 138 C 122 147, 124 165, 126 178 C 128 195, 112 212, 108 222 L 150 248 L 192 222 C 188 212, 172 195, 174 178 C 176 165, 178 147, 182 138 C 186 135, 196 116, 195 108 L 163 96 Z"
                    fill="url(#bodyNeutralGrad)"
                    stroke="#BFB4A5"
                    strokeWidth="1.5"
                  />
                  {/* Subtle Elegant Waist & Rib Contours */}
                  <path
                    d="M 136 142 C 142 146, 148 146, 150 146 C 152 146, 158 146, 164 142"
                    stroke="#D0C4B4"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* --- 3. ARMS (Zone: arms) --- */}
                <g
                  id="zone-arms"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveZoneId('arms')}
                  onMouseEnter={() => setHoveredZoneId('arms')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                >
                  {/* Left Arm with Slender Contours */}
                  <path
                    d="M 105 108 C 96 116, 92 138, 91 168 C 90 196, 86 226, 84 252 C 83 264, 82 274, 84 278 C 86 280, 89 278, 91 268 C 94 250, 97 222, 100 192 C 103 168, 106 148, 118 138 C 114 135, 104 116, 105 108 Z"
                    fill={isHighlighted('arms') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('arms') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('arms') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Right Arm Symmetrical */}
                  <path
                    d="M 195 108 C 204 116, 208 138, 209 168 C 210 196, 214 226, 216 252 C 217 264, 218 274, 216 278 C 214 280, 211 278, 209 268 C 206 250, 203 222, 200 192 C 197 168, 194 148, 182 138 C 186 135, 196 116, 195 108 Z"
                    fill={isHighlighted('arms') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('arms') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('arms') ? 'url(#softGlow)' : undefined}
                  />
                </g>

                {/* --- 4. UNDERARMS (Zone: underarm) --- */}
                <g
                  id="zone-underarm"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveZoneId('underarm')}
                  onMouseEnter={() => setHoveredZoneId('underarm')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                >
                  {/* Left Underarm Radiance Disc */}
                  <ellipse
                    cx="114"
                    cy="138"
                    rx="11"
                    ry="15"
                    transform="rotate(-15 114 138)"
                    fill={isHighlighted('underarm') ? 'url(#activeZoneGrad)' : '#E8DFD5'}
                    stroke={isHighlighted('underarm') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.8"
                    filter={isHighlighted('underarm') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Right Underarm Radiance Disc */}
                  <ellipse
                    cx="186"
                    cy="138"
                    rx="11"
                    ry="15"
                    transform="rotate(15 186 138)"
                    fill={isHighlighted('underarm') ? 'url(#activeZoneGrad)' : '#E8DFD5'}
                    stroke={isHighlighted('underarm') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.8"
                    filter={isHighlighted('underarm') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Underarm Pulse Ring if active */}
                  {isHighlighted('underarm') && (
                    <>
                      <circle cx="114" cy="138" r="16" fill="none" stroke="#E11D74" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="186" cy="138" r="16" fill="none" stroke="#E11D74" strokeWidth="1.5" strokeDasharray="3 3" />
                    </>
                  )}
                </g>

                {/* --- 5. BIKINI & INTIMATE AREA (Zone: bikini) --- */}
                <g
                  id="zone-bikini"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveZoneId('bikini')}
                  onMouseEnter={() => setHoveredZoneId('bikini')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                >
                  <path
                    d="M 126 195 C 138 201, 162 201, 174 195 C 172 216, 161 238, 150 248 C 139 238, 128 216, 126 195 Z"
                    fill={isHighlighted('bikini') ? 'url(#activeZoneGrad)' : '#E4DAD0'}
                    stroke={isHighlighted('bikini') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.8"
                    filter={isHighlighted('bikini') ? 'url(#softGlow)' : undefined}
                  />
                  {isHighlighted('bikini') && (
                    <circle cx="150" cy="220" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.8" />
                  )}
                </g>

                {/* --- 6. LEGS (Zone: legs) --- */}
                <g
                  id="zone-legs"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveZoneId('legs')}
                  onMouseEnter={() => setHoveredZoneId('legs')}
                  onMouseLeave={() => setHoveredZoneId(null)}
                >
                  {/* Left Leg: Elegant feminine curves */}
                  <path
                    d="M 108 222 C 105 252, 106 288, 114 326 C 117 344, 116 372, 115 400 C 114 424, 122 444, 125 452 L 138 452 C 138 444, 136 422, 137 400 C 138 372, 139 344, 137 326 C 134 290, 136 266, 149 248 L 108 222 Z"
                    fill={isHighlighted('legs') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('legs') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('legs') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Right Leg: Symmetrical */}
                  <path
                    d="M 192 222 C 195 252, 194 288, 186 326 C 183 344, 184 372, 185 400 C 186 424, 178 444, 175 452 L 162 452 C 162 444, 164 422, 163 400 C 162 372, 161 344, 163 326 C 166 290, 164 266, 151 248 L 192 222 Z"
                    fill={isHighlighted('legs') ? 'url(#activeZoneGrad)' : 'url(#bodyNeutralGrad)'}
                    stroke={isHighlighted('legs') ? '#BE123C' : '#BFB4A5'}
                    strokeWidth="1.5"
                    filter={isHighlighted('legs') ? 'url(#softGlow)' : undefined}
                  />

                  {/* Subtle Knee Landmark Highlights */}
                  <g stroke="#C4B8A9" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.65">
                    <path d="M 122 334 Q 126 337 130 334" />
                    <path d="M 170 334 Q 174 337 178 334" />
                  </g>
                </g>
              </svg>

              {/* Glowing Interactive Hotspot Pins & Tooltips */}
              {zones.map((zone) => {
                const isActive = activeZoneId === zone.id;
                const isHovered = hoveredZoneId === zone.id;

                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZoneId(zone.id)}
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    style={{
                      left: `${zone.iconCoord.x}%`,
                      top: `${zone.iconCoord.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group min-w-[48px] min-h-[48px] flex items-center justify-center focus:outline-hidden z-30 cursor-pointer"
                    aria-label={`Pilih ${zone.name}`}
                  >
                    {/* Pulsing ring animation */}
                    {(isActive || isHovered) && (
                      <span className="absolute w-11 h-11 rounded-full bg-[#E11D74]/35 animate-ping pointer-events-none" />
                    )}

                    {/* Core pin */}
                    <div
                      className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center font-extrabold text-xs shadow-lg transition-all duration-300 ${
                        isActive
                          ? 'bg-[#E11D74] text-white scale-125 ring-4 ring-pink-300/80'
                          : isHovered
                          ? 'bg-[#BE123C] text-white scale-110 ring-2 ring-pink-200'
                          : 'bg-white text-neutral-950 hover:bg-[#E11D74] hover:text-white border-2 border-neutral-300'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>

                    {/* Tooltip on hover / active */}
                    <span
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-neutral-950 text-white text-[11px] font-extrabold py-1 px-3 rounded-lg whitespace-nowrap shadow-xl transition-all duration-200 pointer-events-none z-40 border border-neutral-700 ${
                        isActive || isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      {zone.name}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* Quick Helper Label */}
            <div className="flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-white/95 border border-neutral-300 shadow-2xs text-center">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <p className="text-xs text-neutral-950 font-bold">
                Klik bagian tubuh manekin atau pin untuk mengganti area treatment
              </p>
            </div>
          </div>

          {/* Right: Dynamic Treatment Card with Smooth Transitions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Horizontal pill navigation selector */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block">
                Katalog Pilihan Area:
              </span>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZoneId(zone.id)}
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-extrabold transition-all shrink-0 inline-flex items-center gap-2 cursor-pointer ${
                      activeZoneId === zone.id
                        ? 'bg-neutral-950 text-white shadow-md ring-2 ring-neutral-950 ring-offset-2'
                        : 'bg-white text-neutral-950 hover:bg-pink-50 hover:text-[#BE123C] border border-neutral-300 shadow-2xs'
                    }`}
                  >
                    <span>{zone.name}</span>
                    {zone.popular && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-[#E11D74] text-white font-bold">
                        Populer
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Animated Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-300 shadow-lg space-y-6 relative overflow-hidden"
              >
                {/* Accent top gradient stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E11D74] via-[#FB7185] to-[#BE123C]" />

                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold tracking-wider uppercase text-[#BE123C]">
                        {activeZone.category}
                      </span>
                      <span className="text-neutral-400">•</span>
                      <span className="text-xs font-bold text-neutral-700 bg-pink-50 border border-pink-200 px-2 py-0.5 rounded-md">
                        {activeZone.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 mt-1">
                      {activeZone.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-100/90 border border-pink-300 text-[#BE123C] text-xs font-extrabold shrink-0 shadow-2xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeZone.duration}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed">
                  {activeZone.benefit}
                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-neutral-950 font-bold">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F8] border border-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Gula Alami & Higienis</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F8] border border-neutral-300">
                    <ShieldCheck className="w-4 h-4 text-[#BE123C] shrink-0" />
                    <span>Ruang Privat Khusus Wanita</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F8] border border-neutral-300">
                    <HeartHandshake className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>Terapis Ramah & Lembut</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF9F8] border border-neutral-300">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Hasil Mulus Berminggu-minggu</span>
                  </div>
                </div>

                {/* Direct Action Booking Button */}
                <div className="pt-2">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[50px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#E11D74] hover:bg-[#BE123C] active:scale-98 transition-all shadow-md group cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Tanya Harga & Booking Area Ini</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <p className="text-[11px] text-neutral-600 text-center mt-2 font-medium">
                    Konsultasi gratis tanpa kewajiban • Respon cepat admin WhatsApp
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
