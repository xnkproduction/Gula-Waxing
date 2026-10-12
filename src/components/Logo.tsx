import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'badge' | 'text' | 'badge-with-text';
  showSubtitle?: boolean;
  isDark?: boolean;
}

export const GulaLogo: React.FC<LogoProps> = ({
  className = "h-9",
  variant = "badge-with-text",
  showSubtitle = true,
  isDark = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official GULA Brand Icon Mark (faithfully rendered with the black base & glowing magenta/violet typography matching uploaded logo waxing.jpg) */}
      <div className="relative h-full aspect-square shrink-0 rounded-xl bg-black flex items-center justify-center p-1.5 shadow-xs border border-white/10 group-hover:border-pink-500/40 transition-colors">
        {/* Ambient magenta glow inside the badge */}
        <div className="absolute inset-0 bg-radial from-[#E11D74]/30 via-transparent to-transparent rounded-xl pointer-events-none" />

        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 select-none overflow-visible"
          aria-label="Gula Waxing Brand Mark"
        >
          <defs>
            <linearGradient id="gulaBrandGrad" x1="10%" y1="20%" x2="90%" y2="85%">
              <stop offset="0%" stopColor="#FF1493" />
              <stop offset="35%" stopColor="#F43F5E" />
              <stop offset="65%" stopColor="#DF1B7E" />
              <stop offset="100%" stopColor="#A824B8" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#FF1493" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Authentic fluid letterforms for "gula" matching uploaded logo waxing.jpg */}
          <g fill="url(#gulaBrandGrad)" filter="url(#softGlow)">
            {/* Letter 'g' with curly bottom loop */}
            <path d="M 33 46 C 33 38 27.5 32 19.5 32 C 11.5 32 6 38 6 46 C 6 54 11.5 60 19.5 60 C 22.5 60 25.2 59 27.2 57.2 L 27.2 65 C 27.2 74 21.5 78.5 14 78.5 C 9.5 78.5 6.5 76.5 5 74 C 4 72.5 2.5 72 1 73.5 C -0.2 74.8 0 76.8 1.2 78.5 C 3.8 82 8.5 85 15 85 C 25.5 85 33 78.5 33 65 L 33 46 Z M 19.5 53.5 C 15 53.5 12 49.8 12 46 C 12 42.2 15 38.5 19.5 38.5 C 24 38.5 27 42.2 27 46 C 27 49.8 24 53.5 19.5 53.5 Z" />

            {/* Letter 'u' with soft droplet curvature */}
            <path d="M 39 42 C 39 39.5 41 38 43.5 38 C 46 38 48 39.5 48 42 L 48 53 C 48 57.5 51 60 55.5 60 C 60 60 63 57.5 63 53 L 63 42 C 63 39.5 65 38 67.5 38 C 70 38 72 39.5 72 42 L 72 58.5 C 72 61 70 62.5 67.5 62.5 C 65 62.5 63.5 61 63 59 C 60.5 61.8 56.5 63.5 51.5 63.5 C 43 63.5 39 57.8 39 51 L 39 42 Z" />

            {/* Letter 'l' with iconic tall curved droplet flourish at top */}
            <path d="M 76 21 C 76 17.5 79.5 15 83.5 16 C 88 17.2 92.5 20.5 94 25.5 C 94.8 28 92.5 30 89.8 29.5 C 87.2 29 85.5 27 84 25 C 83.5 32 83.5 45 83.5 56.5 C 83.5 59 86 60.5 88.5 59.8 C 90.5 59.2 92 60.8 91.5 62.8 C 90.5 65 87 66.5 83 66 C 78.5 65.5 76 62 76 56 L 76 21 Z" />

            {/* Letter 'a' with fluid circular hook and terminal */}
            <path d="M 116 46 C 116 43 113.8 41 111 41 C 108.5 41 106.8 42.5 105.8 44 C 103.2 40 98.8 38 93.5 38 C 85.5 38 80 43.5 80 52 C 80 60.5 86 65.5 94 65.5 C 98.8 65.5 103 63.2 105.5 59.5 L 105.5 62 C 105.5 64.5 107.5 66 110 66 C 112.5 66 114.5 64.5 114.5 62 L 114.5 52 C 114.5 47 116 46.5 116 46 Z M 96.5 58.5 C 92 58.5 89 55.2 89 51.8 C 89 48.2 92 45 96.5 45 C 101 45 104.5 48.2 104.5 51.8 C 104.5 55.2 101 58.5 96.5 58.5 Z" />
          </g>
        </svg>
      </div>

      {/* Typographic companion brand name */}
      {showSubtitle && (
        <div className="flex flex-col justify-center leading-none text-left">
          <span className={`font-extrabold text-[15px] tracking-tight flex items-center gap-1 ${isDark ? 'text-white' : 'text-neutral-950'}`}>
            <span>gula</span>
            <span className="text-[#BE123C] text-xs font-extrabold">waxing</span>
          </span>
          <span className={`text-[10px] font-extrabold tracking-[0.2em] uppercase mt-0.5 ${isDark ? 'text-neutral-200' : 'text-neutral-900'}`}>
            Purwokerto &bull; UNSOED
          </span>
        </div>
      )}
    </div>
  );
};
