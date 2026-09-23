import React from 'react';

/**
 * Official SVG Logos for Digital Information Resources Company Limited (DIR)
 * Reconstructed with 1:1 precision from official corporate identity & presentation slides:
 * - Slide 1 & 21: DIR, U Book Store, Win Digital Learning Hub
 * - Slide 3: Myint Thukha Nadi Co., Ltd (Parent Holding Group) & Sister Entities
 * - Slide 7-14: Jolly Classroom, NatGeo Look, Explore Our World, New Close-up, Binary Logic, ISTE SEAL, Rainbow KG
 * - Slide 15: All 14 Official School Partner Logos
 * - Slide 18: All 18 Official Retail Partner Logos
 */

// ==========================================
// 1. BUSINESS UNIT & CORPORATE BRAND LOGOS
// ==========================================

export const DIREmblemLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 40
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-label="Digital Information Resources Company Limited Emblem"
  >
    {/* Digital Pixels */}
    <rect x="18" y="16" width="9" height="9" rx="1.5" fill="#1E4592" />
    <rect x="31" y="16" width="9" height="9" rx="1.5" fill="#F15A24" />

    {/* Orange Vertical Stem */}
    <rect x="31" y="29" width="15" height="52" rx="2" fill="#F15A24" />

    {/* Blue "R" Upper Loop */}
    <path
      d="M 48 29 H 68 C 84 29 97 38 97 53 C 97 67 85 76 68 76 H 48 V 61 H 66 C 74 61 80 57 80 52.5 C 80 47.5 74 44 66 44 H 48 V 29 Z"
      fill="#1E4592"
    />

    {/* Orange Dynamic Upper Wave */}
    <path
      d="M 16 67 C 28 60 42 56 58 56 C 68 56 78 60 84 57 C 81 64 72 71 58 71 C 42 71 28 77 15 80 C 14 76 14 71 16 67 Z"
      fill="#F15A24"
    />

    {/* Royal Blue Dynamic Lower Wave & "R" Leg */}
    <path
      d="M 14 79 C 28 70 46 69 61 74 C 71 78 79 86 85 96 L 98 116 H 79 L 71 99 C 66 89 57 85 47 85 C 34 85 24 90 12 94 C 11 89 12 84 14 79 Z"
      fill="#1E4592"
    />
  </svg>
);

export const UBookStoreOfficialLogo: React.FC<{ className?: string; size?: number; showSubtitle?: boolean }> = ({
  className = '',
  size = 48,
  showSubtitle = true
}) => (
  <div className={`flex flex-col items-center select-none ${className}`} style={{ width: size ? size * 1.8 : 86 }}>
    {/* Two Cartoon Reading Kids */}
    <svg width={size} height={size * 0.72} viewBox="0 0 120 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Boy on Left with Round Glasses reading green book */}
      <g id="boy">
        {/* Hair */}
        <path d="M15 32C15 20 22 10 35 10C48 10 55 20 55 32C55 35 52 42 50 42C46 42 44 38 40 38C36 38 34 42 30 42C26 42 24 38 20 38C16 38 15 35 15 32Z" fill="#292524" />
        {/* Face */}
        <ellipse cx="35" cy="36" rx="16" ry="15" fill="#FED7AA" />
        {/* Round Glasses */}
        <circle cx="28" cy="35" r="7" stroke="#1C1917" strokeWidth="2.5" fill="none" />
        <circle cx="42" cy="35" r="7" stroke="#1C1917" strokeWidth="2.5" fill="none" />
        <line x1="35" y1="35" x2="35" y2="35" stroke="#1C1917" strokeWidth="2.5" />
        {/* Eyes inside glasses */}
        <circle cx="28" cy="35" r="2" fill="#1C1917" />
        <circle cx="42" cy="35" r="2" fill="#1C1917" />
        {/* Happy Smile */}
        <path d="M31 43C33 46 37 46 39 43" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" />
        {/* Yellow Shirt */}
        <path d="M22 51C22 51 26 48 35 48C44 48 48 51 48 51L53 66H17L22 51Z" fill="#FACC15" />
        {/* Green Book held by boy */}
        <path d="M12 60L35 66L35 84L12 78Z" fill="#22C55E" />
        <path d="M58 60L35 66L35 84L58 78Z" fill="#16A34A" />
        <path d="M35 66L35 84" stroke="#15803D" strokeWidth="1.5" />
      </g>

      {/* Girl on Right with Pigtails reading orange book */}
      <g id="girl">
        {/* Pigtails */}
        <ellipse cx="64" cy="28" rx="7" ry="11" fill="#292524" />
        <ellipse cx="106" cy="28" rx="7" ry="11" fill="#292524" />
        {/* Hair bangs */}
        <path d="M68 30C68 18 76 8 85 8C94 8 102 18 102 30C102 34 98 37 94 37C90 37 88 34 85 34C82 34 80 37 76 37C72 37 68 34 68 30Z" fill="#292524" />
        {/* Face */}
        <ellipse cx="85" cy="36" rx="15" ry="15" fill="#FED7AA" />
        {/* Cute Eyes */}
        <ellipse cx="79" cy="34" rx="2.5" ry="3.5" fill="#1C1917" />
        <ellipse cx="91" cy="34" rx="2.5" ry="3.5" fill="#1C1917" />
        {/* Rosy Cheeks */}
        <ellipse cx="74" cy="40" rx="3" ry="1.5" fill="#FCA5A5" />
        <ellipse cx="96" cy="40" rx="3" ry="1.5" fill="#FCA5A5" />
        {/* Smile */}
        <path d="M81 42C83 45 87 45 89 42" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" />
        {/* Teal/White Collar Top */}
        <path d="M72 50C72 50 77 47 85 47C93 47 98 50 98 50L103 66H67L72 50Z" fill="#0EA5E9" />
        {/* Yellow/Orange Book held by girl */}
        <path d="M62 60L85 66L85 84L62 78Z" fill="#F97316" />
        <path d="M108 60L85 66L85 84L108 78Z" fill="#EA580C" />
        <path d="M85 66L85 84" stroke="#C2410C" strokeWidth="1.5" />
      </g>
    </svg>

    {/* Colorful "BOOK" Letters */}
    <div className="flex items-center justify-center font-display font-black tracking-wider text-center mt-0.5 leading-none">
      <span className="text-[#22C55E] text-xs sm:text-sm font-extrabold mr-1">U</span>
      <span className="text-[#3B82F6] text-xs sm:text-sm">B</span>
      <span className="text-[#F97316] text-xs sm:text-sm">O</span>
      <span className="text-[#EF4444] text-xs sm:text-sm">O</span>
      <span className="text-[#10B981] text-xs sm:text-sm">K</span>
    </div>

    {showSubtitle && (
      <span className="font-display font-bold text-[9px] tracking-widest text-[#1E3A5F] uppercase mt-0.5">
        STORE
      </span>
    )}
  </div>
);

export const WinLearningHubOfficialLogo: React.FC<{ className?: string; size?: number; showSubtitle?: boolean }> = ({
  className = '',
  size = 48,
  showSubtitle = true
}) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <div className="relative flex items-center justify-center" style={{ width: size, height: size * 0.9 }}>
      {/* Red Hexagonal Outline Border */}
      <svg width={size} height={size * 0.88} viewBox="0 0 100 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="50,4 94,26 94,62 50,84 6,62 6,26"
          stroke="#DC2626"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="#FEF2F2"
        />
        {/* Graduation Cap on top of 'I' */}
        <path d="M50 16L64 22L50 28L36 22Z" fill="#1E3A5F" />
        <path d="M43 25V31C43 33 46 35 50 35C54 35 57 33 57 31V25" fill="#1E3A5F" />
        <line x1="62" y1="22" x2="62" y2="32" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="62" cy="33" r="1.5" fill="#F59E0B" />

        {/* Stylized WIN Text inside Hexagon */}
        <text
          x="50"
          y="59"
          textAnchor="middle"
          fill="#1E3A5F"
          fontFamily="system-ui, sans-serif"
          fontWeight="900"
          fontSize="29"
          letterSpacing="0.5"
        >
          WIN
        </text>
      </svg>
    </div>

    {showSubtitle && (
      <span className="font-display font-semibold text-[9px] tracking-wider text-slate-800 uppercase mt-1 text-center whitespace-nowrap">
        Digital Learning Hub
      </span>
    )}
  </div>
);

export const MTKNOfficialLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-label="MTKN Co., Ltd Official Group Logo"
  >
    {/* Outer Golden Oval */}
    <ellipse cx="50" cy="50" rx="46" ry="46" stroke="#D97706" strokeWidth="4" fill="#FEF3C7" />
    <ellipse cx="50" cy="50" rx="42" ry="42" stroke="#B45309" strokeWidth="1.5" fill="none" />

    {/* Globe Meridians in Gold */}
    <ellipse cx="50" cy="50" rx="28" ry="40" stroke="#F59E0B" strokeWidth="1.2" fill="none" />
    <line x1="8" y1="50" x2="92" y2="50" stroke="#F59E0B" strokeWidth="1.2" />
    <line x1="14" y1="32" x2="86" y2="32" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="14" y1="68" x2="86" y2="68" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />

    {/* Bold Navy "MTKN" Letters */}
    <text
      x="50"
      y="57"
      textAnchor="middle"
      fill="#1E3A5F"
      fontFamily="system-ui, sans-serif"
      fontWeight="900"
      fontSize="22"
      letterSpacing="1"
    >
      MTKN
    </text>

    {/* Laurel Leaves at Bottom */}
    <path
      d="M30 74C38 78 44 80 50 80C56 80 62 78 70 74"
      stroke="#B45309"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ==========================================
// 2. PRODUCT & CURRICULUM LOGOS (SLIDES 7–14)
// ==========================================

export const JollyClassroomLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 52 }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex flex-col">
      <div className="flex items-center font-display font-black text-lg sm:text-xl tracking-tight leading-none">
        <span className="text-[#DC2626]">J</span>
        <span className="text-[#F59E0B]">o</span>
        <span className="text-[#10B981]">l</span>
        <span className="text-[#06B6D4]">l</span>
        <span className="text-[#8B5CF6]">y</span>
      </div>
      <span className="font-display font-bold text-xs tracking-wider text-[#1E3A5F]">Classroom</span>
    </div>
  </div>
);

export const NatGeoLookLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-4 h-6 border-2 border-[#FACC15] bg-transparent shrink-0" />
    <div className="flex flex-col leading-none">
      <span className="text-[8px] font-bold tracking-widest text-slate-800 uppercase">NATIONAL GEOGRAPHIC</span>
      <span className="text-xl font-display font-black text-[#EAB308] tracking-tight">Look</span>
    </div>
  </div>
);

export const NatGeoExploreLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <div className={`flex flex-col leading-none ${className}`}>
    <span className="text-[7px] font-bold tracking-widest text-[#0284C7] uppercase">EXPLORE OUR</span>
    <span className="text-base font-display font-black text-[#DC2626] tracking-tight">WORLD</span>
  </div>
);

export const NatGeoCloseupLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <span className="px-1.5 py-0.5 bg-[#84CC16] text-white text-[9px] font-black rounded-xs">NEW</span>
    <span className="font-display font-black text-base text-[#CA8A04] tracking-tight">Close-up</span>
  </div>
);

export const BinaryLogicLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 40 }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <path d="M12 28C8 28 4 24 4 20C4 16 8 12 12 12C18 12 22 28 28 28C32 28 36 24 36 20C36 16 32 12 28 12C22 12 18 28 12 28Z" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <span className="font-display font-black text-sm text-[#0891B2] tracking-tight">binarylogic</span>
  </div>
);

export const IsteSealOfficialBadge: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 44 }) => (
  <div className={`inline-flex flex-col items-center select-none ${className}`}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Outer Blue Triangle */}
      <polygon points="50,10 90,85 10,85" fill="#0284C7" stroke="#0369A1" strokeWidth="3" />
      {/* Inner White Cutout */}
      <polygon points="50,28 78,80 22,80" fill="#FFFFFF" />
      {/* Cyan Inner Triangle */}
      <polygon points="50,42 70,78 30,78" fill="#0EA5E9" />
      {/* Banner */}
      <rect x="15" y="80" width="70" height="15" rx="3" fill="#047857" />
      <text x="50" y="91" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">
        ISTE SEAL
      </text>
    </svg>
    <span className="text-[8px] font-mono text-emerald-700 font-bold tracking-tight mt-0.5">2023-2025</span>
  </div>
);

export const RainbowKGBadge: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 40 }) => (
  <div className={`flex flex-col items-center select-none leading-none ${className}`}>
    <svg width={size * 1.5} height={size * 0.75} viewBox="0 0 90 45" fill="none">
      <path d="M10 40C10 20 25 8 45 8C65 8 80 20 80 40" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 40C16 24 29 14 45 14C61 14 74 24 74 40" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 40C22 28 32 20 45 20C58 20 68 28 68 40" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 40C28 32 36 26 45 26C54 26 62 32 62 40" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <span className="font-display font-black text-xs text-[#DC2626] tracking-tight -mt-1">Rainbow KG</span>
  </div>
);

// ==========================================
// 3. ALL 14 SCHOOL PARTNER LOGOS (SLIDE 15)
// ==========================================

export const SchoolPartnerOfficialLogo: React.FC<{ partnerId: string; className?: string; size?: number }> = ({
  partnerId,
  className = '',
  size = 48
}) => {
  switch (partnerId) {
    // 1. KBTC International School (Slide 15 - top row 1)
    case 'kbtc':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="KBTC International School">
          <circle cx="50" cy="50" r="46" fill="#0F2444" stroke="#CBD5E1" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="41" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 2" fill="none" />
          {/* 8 White Stars */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
            <circle
              key={i}
              cx={50 + 36 * Math.cos((deg * Math.PI) / 180)}
              cy={50 + 36 * Math.sin((deg * Math.PI) / 180)}
              r="1.8"
              fill="#FFFFFF"
            />
          ))}
          {/* Inner Shield & Open Book */}
          <polygon points="50,24 68,34 68,54 50,68 32,54 32,34" fill="#1E3A8A" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M38 46C44 42 50 44 50 44C50 44 56 42 62 46V54C56 50 50 52 50 52C50 52 44 50 38 54Z" fill="#FFFFFF" />
          <text x="50" y="42" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            KBTC
          </text>
          {/* Bottom Banner */}
          <path d="M22 74C32 78 50 80 50 80C50 80 68 78 78 74V82C68 86 50 87 50 87C50 87 32 86 22 82Z" fill="#F59E0B" />
          <text x="50" y="81" textAnchor="middle" fill="#0F2444" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">
            INTERNATIONAL SCHOOL
          </text>
        </svg>
      );

    // 2. ULight International School (Slide 15 - top row 2)
    case 'ulight':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="ULight International School">
          {/* Red Crest with Torch & Graduation Cap */}
          <path d="M20 22C20 22 35 15 50 15C65 15 80 22 80 22V60C80 75 50 88 50 88C50 88 20 75 20 60Z" fill="#991B1B" stroke="#B91C1C" strokeWidth="2" />
          {/* Torch & Flame */}
          <path d="M50 34C46 38 46 43 50 48C54 43 54 38 50 34Z" fill="#FACC15" />
          <path d="M47 48H53L51 60H49L47 48Z" fill="#E2E8F0" />
          {/* Graduation Cap */}
          <path d="M35 30L50 24L65 30L50 36Z" fill="#FFFFFF" />
          {/* Banner */}
          <rect x="18" y="70" width="64" height="14" rx="3" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1" />
          <text x="50" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">
            ULight
          </text>
          <text x="50" y="83" textAnchor="middle" fill="#FEE2E2" fontSize="4" fontWeight="700" fontFamily="sans-serif">
            International School
          </text>
        </svg>
      );

    // 3. Edu-Light High School (Slide 15 - top row 3)
    case 'edulight':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Edu-Light High School">
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" stroke="#0284C7" strokeWidth="1.2" fill="none" />
          {/* Globe Lines */}
          <ellipse cx="50" cy="50" rx="18" ry="30" stroke="#BAE6FD" strokeWidth="1" fill="none" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#BAE6FD" strokeWidth="1" />
          {/* Open Book & Quill */}
          <path d="M32 50C40 46 50 48 50 48C50 48 60 46 68 50V62C60 58 50 60 50 60C50 60 40 58 32 62Z" fill="#0284C7" />
          <line x1="62" y1="36" x2="48" y2="58" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          {/* Outer Curved Labels */}
          <text x="50" y="24" textAnchor="middle" fill="#0369A1" fontSize="8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            EDU-LIGHT
          </text>
          <text x="50" y="80" textAnchor="middle" fill="#0369A1" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            HIGH SCHOOL
          </text>
        </svg>
      );

    // 4. Synergy / S-Academy International School (Slide 15 - top row 4)
    case 'synergy':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Synergy International School">
          <circle cx="50" cy="50" r="46" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
          {/* Intertwined Blue & Red Flame Ribbons forming 'S' */}
          <path d="M50 20C40 20 34 26 34 34C34 44 66 42 66 56C66 66 56 72 46 72C38 72 32 68 30 62" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" />
          <path d="M54 20C64 20 70 26 70 34C70 44 38 42 38 56C38 66 48 72 58 72" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
          {/* Open Book Base */}
          <path d="M34 76C42 73 50 75 50 75C50 75 58 73 66 76" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 5. Blossom Private School (Slide 15 - top row 5)
    case 'blossom':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Blossom Private School">
          <rect x="6" y="6" width="88" height="88" rx="8" fill="#881337" stroke="#BE123C" strokeWidth="2.5" />
          {/* Pink Lotus Blossom */}
          <path d="M50 26C45 35 40 48 50 56C60 48 55 35 50 26Z" fill="#FDA4AF" />
          <path d="M50 56C42 52 32 44 35 34C42 38 46 48 50 56Z" fill="#F43F5E" />
          <path d="M50 56C58 52 68 44 65 34C58 38 54 48 50 56Z" fill="#F43F5E" />
          {/* Text Labels */}
          <text x="50" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            BLOSSOM
          </text>
          <text x="50" y="80" textAnchor="middle" fill="#FECDD3" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">
            PRIVATE SCHOOL
          </text>
        </svg>
      );

    // 6. Pegu International School (Slide 15 - top row 6)
    case 'pegu':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Pegu International School">
          <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="2.5" />
          {/* Graduation Cap on top of 'G' */}
          <path d="M28 28L50 20L72 28L50 36Z" fill="#1E3A8A" />
          <line x1="70" y1="28" x2="70" y2="40" stroke="#F59E0B" strokeWidth="2" />
          {/* Blue 'G' Monogram */}
          <path d="M68 42C64 36 56 34 48 34C35 34 26 43 26 56C26 69 35 78 48 78C62 78 68 68 68 58H48V50H76V60C76 74 65 86 48 86C29 86 16 72 16 56C16 38 30 26 48 26C58 26 68 31 74 38L68 42Z" fill="#2563EB" />
          <text x="50" y="93" textAnchor="middle" fill="#1E3A8A" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
            PEGU INT. SCHOOL
          </text>
        </svg>
      );

    // 7. Aung Htet Private School (Slide 15 - mid row 1)
    case 'aung-htet':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Aung Htet Private School">
          {/* Bold Navy 'A' with person/torch silhouette */}
          <path d="M50 14L22 72H36L44 54H56L64 72H78L50 14ZM50 36L53 44H47L50 36Z" fill="#1E3A8A" />
          {/* Torch in Center */}
          <path d="M50 40C48 43 48 47 50 50C52 47 52 43 50 40Z" fill="#EF4444" />
          <text x="50" y="82" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            AUNG HTET
          </text>
          <text x="50" y="91" textAnchor="middle" fill="#64748B" fontSize="6" fontWeight="700" fontFamily="sans-serif">
            PRIVATE SCHOOL
          </text>
        </svg>
      );

    // 8. MEC Education Center (Slide 15 - mid row 2)
    case 'mec':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="MEC Education Center">
          {/* Grey Graduation Cap & Red Ribbon Monogram */}
          <path d="M18 36L50 20L82 36L50 50Z" fill="#64748B" />
          <path d="M50 50L82 36L82 46L50 60Z" fill="#475569" />
          <path d="M30 46V62L50 72L62 66V54" stroke="#DC2626" strokeWidth="4" fill="none" strokeLinejoin="round" />
          <text x="50" y="88" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            MEC
          </text>
        </svg>
      );

    // 9. Noble Star Private School (Slide 15 - mid row 3)
    case 'noble-star':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Noble Star Private School">
          {/* Gold Star */}
          <polygon points="50,16 61,38 85,42 68,58 72,82 50,70 28,82 32,58 15,42 39,38" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
          {/* Black Graduation Cap on Star Head */}
          <path d="M38 18L50 12L62 18L50 24Z" fill="#18181B" />
          <rect x="36" y="48" width="28" height="12" rx="2" fill="#1E293B" />
          <text x="50" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="900" fontFamily="sans-serif">
            Noble Star
          </text>
          <text x="50" y="93" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="800" fontFamily="sans-serif">
            Private School
          </text>
        </svg>
      );

    // 10. Pyinnyar Tazaung Private School (Slide 15 - mid row 4)
    case 'pyinnyar-tazaung':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Pyinnyar Tazaung Private School">
          {/* Green Dome with Rising Sun Rays */}
          <rect x="8" y="14" width="84" height="72" rx="6" fill="#14532D" stroke="#166534" strokeWidth="2" />
          <circle cx="50" cy="56" r="24" fill="#FACC15" />
          {/* Sun Rays */}
          {[15, 35, 55, 75, 95, 115, 135, 155, 175].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="56"
              x2={50 + 32 * Math.cos((angle * Math.PI) / 180)}
              y2={56 - 32 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FACC15"
              strokeWidth="2.5"
            />
          ))}
          <path d="M8 56H92V86H8V56Z" fill="#14532D" />
          {/* Burmese Script: ပညာတန်ဆောင် */}
          <text x="50" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">
            ပညာတန်ဆောင်
          </text>
        </svg>
      );

    // 11. Myanmar Ephraim Academy (Slide 15 - mid row 5)
    case 'myanmar-ephraim':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Myanmar Ephraim Academy">
          {/* Crest with Laurel & 3 Stars */}
          <circle cx="36" cy="18" r="3" fill="#F59E0B" />
          <circle cx="50" cy="14" r="3.5" fill="#F59E0B" />
          <circle cx="64" cy="18" r="3" fill="#F59E0B" />
          {/* Open Book & Torch */}
          <path d="M32 46C40 42 50 44 50 44C50 44 60 42 68 46V64C60 60 50 62 50 62C50 62 40 60 32 64Z" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
          <path d="M50 26V44M48 26C46 30 46 34 50 36C54 34 54 30 52 26" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          {/* Laurel Wreath */}
          <path d="M22 40C18 52 24 68 34 76M78 40C82 52 76 68 66 76" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <text x="50" y="88" textAnchor="middle" fill="#0F172A" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">
            MYANMAR EPHRAIM ACADEMY
          </text>
        </svg>
      );

    // 12. Monastic Foundation / Sasana School (Slide 15 - mid row 6)
    case 'monastic-foundation':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Monastic Education Foundation">
          <circle cx="50" cy="50" r="46" fill="#166534" stroke="#4ADE80" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="38" stroke="#FACC15" strokeWidth="1" fill="none" />
          {/* Golden Lotus Flower in Center */}
          <ellipse cx="50" cy="52" rx="10" ry="16" fill="#FACC15" />
          <ellipse cx="40" cy="54" rx="8" ry="12" fill="#EAB308" />
          <ellipse cx="60" cy="54" rx="8" ry="12" fill="#EAB308" />
          <path d="M30 68C42 64 58 64 70 68" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          {/* Burmese Circular Script */}
          <text x="50" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
            ပညာဗိမာန်ကျောင်း
          </text>
        </svg>
      );

    // 13. Royal Smile Pre School Mandalay (Slide 15 - bottom row 1)
    case 'royal-smile':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Royal Smile Pre School Mandalay">
          <rect x="8" y="10" width="84" height="80" rx="14" fill="#EA580C" />
          {/* White Infinity Eyeglasses Smiley */}
          <path
            d="M32 40C25 40 20 45 20 52C20 59 25 64 32 64C42 64 46 40 56 40C63 40 68 45 68 52C68 59 63 64 56 64C46 64 42 40 32 40Z"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="none"
          />
          <circle cx="28" cy="52" r="2.5" fill="#FFFFFF" />
          <circle cx="60" cy="52" r="2.5" fill="#FFFFFF" />
          <text x="50" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            ROYAL SMILE
          </text>
          <text x="50" y="85" textAnchor="middle" fill="#FED7AA" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">
            PRE SCHOOL MANDALAY
          </text>
        </svg>
      );

    // 14. Brown International Academy (Slide 15 - bottom row 2)
    case 'brown':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Brown International Academy">
          {/* Brown Watchtower / Lighthouse Pavilion */}
          <path d="M44 18H56L54 36H46L44 18Z" fill="#78350F" />
          <polygon points="50,8 38,18 62,18" fill="#B45309" />
          {/* Base Pavilion Pillars */}
          <path d="M34 36H66L72 62H28L34 36Z" fill="#92400E" />
          <line x1="42" y1="36" x2="40" y2="62" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="50" y1="36" x2="50" y2="62" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="58" y1="36" x2="60" y2="62" stroke="#FFFFFF" strokeWidth="2" />
          {/* Text: BROWN */}
          <text x="50" y="84" textAnchor="middle" fill="#78350F" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
            BROWN
          </text>
        </svg>
      );

    default:
      return null;
  }
};

// ==========================================
// 4. ALL 18 RETAIL PARTNER LOGOS (SLIDE 18)
// ==========================================

export const RetailPartnerOfficialLogo: React.FC<{ partnerId: string; className?: string; size?: number }> = ({
  partnerId,
  className = '',
  size = 48
}) => {
  switch (partnerId) {
    // 1. STAR GUIDE Educational Toys (Slide 18 - row 1, #1)
    case 'star-guide':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Star Guide">
          <circle cx="50" cy="50" r="46" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.5" />
          {/* 4-Pointed Compass Star */}
          <polygon points="50,14 56,38 80,44 56,50 50,74 44,50 20,44 44,38" fill="#0284C7" />
          <polygon points="50,22 54,40 72,44 54,48 50,66 46,48 28,44 46,40" fill="#38BDF8" />
          <text x="50" y="78" textAnchor="middle" fill="#0369A1" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            STAR GUIDE
          </text>
          <text x="50" y="85" textAnchor="middle" fill="#64748B" fontSize="4" fontWeight="600" fontFamily="sans-serif">
            Educational Learning Toys
          </text>
        </svg>
      );

    // 2. Kay's Album (Slide 18 - row 1, #2)
    case 'kays-album':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Kay's Album">
          <circle cx="50" cy="50" r="46" fill="#FDF2F8" stroke="#EC4899" strokeWidth="1.5" />
          {/* Stylized Girl with Glasses/Headphones */}
          <circle cx="48" cy="40" r="16" fill="#FBCFE8" />
          <circle cx="42" cy="38" r="3.5" stroke="#831843" strokeWidth="1.5" fill="none" />
          <circle cx="52" cy="38" r="3.5" stroke="#831843" strokeWidth="1.5" fill="none" />
          <line x1="45.5" y1="38" x2="48.5" y2="38" stroke="#831843" strokeWidth="1.5" />
          <text x="50" y="68" textAnchor="middle" fill="#BE185D" fontSize="10" fontWeight="900" fontFamily="cursive, sans-serif">
            Kay&apos;s Album
          </text>
          <text x="50" y="77" textAnchor="middle" fill="#64748B" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">
            Intellectual Online Bookstore
          </text>
        </svg>
      );

    // 3. TAB BOOKCENTRE (Slide 18 - row 1, #3)
    case 'tab-bookcentre':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Tab Bookcentre">
          {/* Green Pagoda / Lotus Spire Outline */}
          <path d="M50 14L54 28H46L50 14Z" fill="#16A34A" />
          <path d="M50 28C42 36 34 46 34 56C34 66 42 70 50 70C58 70 66 66 66 56C66 46 58 36 50 28Z" stroke="#16A34A" strokeWidth="4" fill="none" />
          <text x="50" y="78" textAnchor="middle" fill="#15803D" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            TAB
          </text>
          <text x="50" y="87" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
            BOOKCENTRE
          </text>
        </svg>
      );

    // 4. BEST GIFT FOR KIDS (Slide 18 - row 1, #4)
    case 'best-gift':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Best Gift For Kids">
          {/* Colorful 5-Petal Flower */}
          <circle cx="50" cy="34" r="8" fill="#EC4899" />
          <circle cx="62" cy="42" r="8" fill="#EAB308" />
          <circle cx="58" cy="54" r="8" fill="#22C55E" />
          <circle cx="42" cy="54" r="8" fill="#06B6D4" />
          <circle cx="38" cy="42" r="8" fill="#A855F7" />
          <circle cx="50" cy="44" r="6" fill="#F97316" />
          <text x="50" y="74" textAnchor="middle" fill="#9333EA" fontSize="7" fontWeight="900" fontFamily="sans-serif">
            BEST GIFT FOR KIDS
          </text>
          <text x="50" y="82" textAnchor="middle" fill="#64748B" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">
            EDUCATIONAL TOYS & BOOKS
          </text>
        </svg>
      );

    // 5. Strawberry Sky (Slide 18 - row 1, #5)
    case 'strawberry-sky':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Strawberry Sky">
          <circle cx="50" cy="50" r="46" fill="#FCE7F3" stroke="#F43F5E" strokeWidth="1.5" />
          {/* Ripe Red Strawberry */}
          <path d="M50 32C42 32 36 40 38 52C40 64 50 72 50 72C50 72 60 64 62 52C64 40 58 32 50 32Z" fill="#E11D48" />
          {/* Green Calyx / Leaves */}
          <path d="M50 32L46 24L50 26L54 24L50 32Z" fill="#16A34A" />
          {/* Seeds */}
          <circle cx="46" cy="46" r="1" fill="#FDE047" />
          <circle cx="54" cy="46" r="1" fill="#FDE047" />
          <circle cx="50" cy="54" r="1" fill="#FDE047" />
          <text x="50" y="84" textAnchor="middle" fill="#BE123C" fontSize="6.5" fontWeight="800" fontFamily="cursive, sans-serif">
            strawberry sky
          </text>
        </svg>
      );

    // 6. Glory Children Books (Slide 18 - row 1, #6)
    case 'glory-children':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Glory Children Books">
          {/* Purple Smiling Baby Mascot */}
          <circle cx="50" cy="42" r="18" fill="#C084FC" />
          <path d="M50 24L62 14L54 26Z" fill="#9333EA" />
          <ellipse cx="44" cy="42" rx="2" ry="3" fill="#3B0764" />
          <ellipse cx="56" cy="42" rx="2" ry="3" fill="#3B0764" />
          <path d="M46 50C48 53 52 53 54 50" stroke="#3B0764" strokeWidth="2" strokeLinecap="round" />
          <text x="50" y="74" textAnchor="middle" fill="#6B21A8" fontSize="12" fontWeight="900" fontFamily="sans-serif">
            Glory
          </text>
          <text x="50" y="84" textAnchor="middle" fill="#7E22CE" fontSize="6" fontWeight="700" fontFamily="sans-serif">
            Children Books
          </text>
        </svg>
      );

    // 7. Book Line / Red Ribbon Books (Slide 18 - row 1, #7)
    case 'book-line':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Book Line">
          <rect x="12" y="12" width="76" height="76" rx="8" fill="#18181B" />
          {/* White Page Waves */}
          <path d="M34 28C42 26 50 30 50 30C50 30 58 26 66 28V68C58 66 50 70 50 70C50 70 42 66 34 68V28Z" fill="#FFFFFF" />
          {/* Red Bookmark Ribbon */}
          <path d="M26 22H32V52L29 48L26 52V22Z" fill="#DC2626" />
        </svg>
      );

    // 8. AUGUST Children's Book (Slide 18 - row 2, #1)
    case 'august':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="August Children's Book">
          {/* 4 Colored Squares: Cyan, Yellow, Green, Pink */}
          <rect x="26" y="20" width="22" height="22" rx="4" fill="#0EA5E9" />
          <rect x="52" y="20" width="22" height="22" rx="4" fill="#EAB308" />
          <rect x="26" y="46" width="22" height="22" rx="4" fill="#22C55E" />
          <rect x="52" y="46" width="22" height="22" rx="4" fill="#EC4899" />
          {/* Camera/Bulb/Book/Smile icons simplified */}
          <circle cx="37" cy="31" r="5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <circle cx="63" cy="31" r="4" fill="#FFFFFF" />
          <text x="50" y="80" textAnchor="middle" fill="#0F172A" fontSize="9" fontWeight="900" fontFamily="sans-serif">
            AUGUST
          </text>
          <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="5" fontWeight="700" fontFamily="sans-serif">
            Children&apos;s Book
          </text>
        </svg>
      );

    // 9. INNWA Books & cafe (Slide 18 - row 2, #2)
    case 'innwa':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Innwa Books & Cafe">
          {/* Black Aster Sunburst Emblem */}
          <circle cx="50" cy="38" r="5" fill="#18181B" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <ellipse
              key={i}
              cx={50 + 12 * Math.cos((deg * Math.PI) / 180)}
              cy={38 + 12 * Math.sin((deg * Math.PI) / 180)}
              rx="3"
              ry="5"
              fill="#18181B"
              transform={`rotate(${deg + 90}, ${50 + 12 * Math.cos((deg * Math.PI) / 180)}, ${38 + 12 * Math.sin((deg * Math.PI) / 180)})`}
            />
          ))}
          <text x="50" y="68" textAnchor="middle" fill="#18181B" fontSize="13" fontWeight="900" fontFamily="serif" letterSpacing="1">
            INNWA
          </text>
          <text x="50" y="78" textAnchor="middle" fill="#52525B" fontSize="6" fontWeight="600" fontFamily="sans-serif">
            Books &amp; cafe
          </text>
        </svg>
      );

    // 10. WE DISTRIBUTION (Slide 18 - row 2, #3)
    case 'we-distribution':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="WE Distribution">
          {/* Bold Graphic Black W, Red E with Triangle */}
          <text x="28" y="58" textAnchor="middle" fill="#18181B" fontSize="42" fontWeight="900" fontFamily="sans-serif">
            W
          </text>
          <text x="68" y="58" textAnchor="middle" fill="#DC2626" fontSize="42" fontWeight="900" fontFamily="sans-serif">
            E
          </text>
          <polygon points="56,36 68,36 62,48" fill="#DC2626" />
          <text x="50" y="78" textAnchor="middle" fill="#18181B" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            DISTRIBUTION
          </text>
        </svg>
      );

    // 11. SHINE (Slide 18 - row 2, #4)
    case 'shine':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Shine Educational Toys">
          {/* Boy Running with Balloon */}
          <circle cx="38" cy="30" r="6" fill="#16A34A" />
          <path d="M38 36L44 48L52 52M44 48L36 60M36 44L28 40" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="58" cy="22" r="8" fill="#F97316" />
          <line x1="44" y1="42" x2="58" y2="30" stroke="#F97316" strokeWidth="1.5" />
          <rect x="20" y="68" width="60" height="15" rx="3" fill="#15803D" />
          <text x="50" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900" fontFamily="sans-serif">
            SHINE
          </text>
          <text x="50" y="90" textAnchor="middle" fill="#64748B" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">
            Since 2022
          </text>
        </svg>
      );

    // 12. BM Book Villa (Slide 18 - row 2, #5)
    case 'bm-book-villa':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="BM Book Villa">
          {/* Modern Cyan-Blue Interconnected BM Monogram */}
          <path d="M24 30V66H42C48 66 52 62 52 56C52 52 48 48 42 48C48 48 50 44 50 38C50 32 46 30 40 30H24ZM32 38H38C42 38 44 40 44 43C44 46 42 48 38 48H32V38ZM32 54H40C44 54 46 56 46 59C46 62 44 64 40 64H32V54Z" fill="#0284C7" />
          <path d="M54 30H62L70 52L78 30H86V66H78V44L72 60H68L62 44V66H54V30Z" fill="#0369A1" />
          <text x="50" y="82" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">
            BM Book Villa
          </text>
        </svg>
      );

    // 13. BUDGET MOMMY (Slide 18 - row 2, #6)
    case 'budget-mommy':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Budget Mommy Children's Bookstore">
          <rect x="6" y="10" width="88" height="80" rx="8" fill="#FEF9C3" stroke="#FACC15" strokeWidth="1.5" />
          {/* Open Hardcover Book with Pencils */}
          <path d="M28 36C38 32 50 34 50 34C50 34 62 32 72 36V56C62 52 50 54 50 54C50 54 38 52 28 56Z" fill="#F59E0B" />
          <line x1="44" y1="24" x2="48" y2="34" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="56" y1="24" x2="52" y2="34" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          <text x="50" y="70" textAnchor="middle" fill="#92400E" fontSize="7" fontWeight="900" fontFamily="sans-serif">
            BUDGET MOMMY
          </text>
          <text x="50" y="78" textAnchor="middle" fill="#B45309" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">
            CHILDREN&apos;S BOOKSTORE
          </text>
        </svg>
      );

    // 14. Yar Pyae Bookshop (Slide 18 - row 3, #1)
    case 'yar-pyae':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Yar Pyae Bookshop">
          <rect x="8" y="18" width="84" height="64" rx="6" fill="#14532D" stroke="#166534" strokeWidth="2" />
          <circle cx="50" cy="40" r="10" fill="#FFFFFF" />
          <path d="M50 34C48 37 48 41 50 44C52 41 52 37 50 34Z" fill="#F59E0B" />
          <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="bold" fontFamily="sans-serif">
            စာပေချစ်သူတိုင်းအတွက်
          </text>
          <text x="50" y="70" textAnchor="middle" fill="#FACC15" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            Yar Pyae Bookshop
          </text>
        </svg>
      );

    // 15. Toon (Slide 18 - row 3, #2)
    case 'toon':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Toon Bookstore">
          {/* Friendly Bubbly Lowercase "toon" */}
          <g transform="translate(18, 28)">
            <text x="0" y="32" fill="#EF4444" fontSize="32" fontWeight="900" fontFamily="system-ui, sans-serif">
              t
            </text>
            <text x="14" y="32" fill="#F97316" fontSize="32" fontWeight="900" fontFamily="system-ui, sans-serif">
              o
            </text>
            <text x="32" y="32" fill="#EAB308" fontSize="32" fontWeight="900" fontFamily="system-ui, sans-serif">
              o
            </text>
            <text x="50" y="32" fill="#22C55E" fontSize="32" fontWeight="900" fontFamily="system-ui, sans-serif">
              n
            </text>
          </g>
        </svg>
      );

    // 16. YANGON BOOK PLAZA (Slide 18 - row 3, #3)
    case 'yangon-book-plaza':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Yangon Book Plaza">
          {/* 3D Grey Industrial Block Letters */}
          <rect x="10" y="16" width="80" height="68" rx="4" fill="#475569" stroke="#334155" strokeWidth="2" />
          <text x="50" y="38" textAnchor="middle" fill="#F8FAFC" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
            YANGON
          </text>
          <text x="50" y="54" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            BOOK
          </text>
          <text x="50" y="70" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            PLAZA
          </text>
        </svg>
      );

    // 17. LITTLE EINSTEIN (Slide 18 - row 3, #4)
    case 'little-einstein':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Little Einstein Educational Toys">
          {/* Lime Brain on Orange Letter 'E' */}
          <path d="M22 24C16 24 16 32 20 36C14 40 18 50 24 50C20 54 26 62 34 60C40 64 48 60 48 54C52 48 48 40 44 38C46 32 40 24 34 26C30 22 24 22 22 24Z" fill="#84CC16" />
          <path d="M46 32H78V40H54V46H72V54H54V60H78V68H46V32Z" fill="#EA580C" />
          <text x="50" y="80" textAnchor="middle" fill="#1E293B" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">
            LITTLE EINSTEIN
          </text>
          <text x="50" y="88" textAnchor="middle" fill="#64748B" fontSize="4.5" fontWeight="600" fontFamily="sans-serif">
            EDUCATIONAL TOYS
          </text>
        </svg>
      );

    // 18. MERCURY BOOK STORE (Slide 18 - row 3, #5)
    case 'mercury':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-label="Mercury Book Store">
          {/* Minimalist Line-art Open Book */}
          <path d="M24 40C34 34 50 36 50 36C50 36 66 34 76 40V62C66 56 50 58 50 58C50 58 34 56 24 62Z" stroke="#18181B" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="36" x2="50" y2="58" stroke="#18181B" strokeWidth="2" />
          <text x="50" y="74" textAnchor="middle" fill="#18181B" fontSize="8" fontWeight="900" fontFamily="serif" letterSpacing="0.5">
            MERCURY
          </text>
          <text x="50" y="83" textAnchor="middle" fill="#71717A" fontSize="5" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">
            BOOK STORE
          </text>
        </svg>
      );

    default:
      return null;
  }
};

/**
 * Universal Partner Logo Dispatcher
 */
export const MasterPartnerLogo: React.FC<{
  partnerId: string;
  category: 'school' | 'retail';
  className?: string;
  size?: number;
}> = ({ partnerId, category, className = '', size = 48 }) => {
  if (category === 'school') {
    return <SchoolPartnerOfficialLogo partnerId={partnerId} className={className} size={size} />;
  }
  return <RetailPartnerOfficialLogo partnerId={partnerId} className={className} size={size} />;
};
