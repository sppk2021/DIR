import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'white';
}

/**
 * Official DIR Emblem reconstructed with 1:1 precision from DIR brand identity
 * Features the signature pixel blocks, orange vertical stem, and dynamic wave curves
 */
export const DIREmblem: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 36
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-label="Digital Information Resources Emblem"
  >
    {/* Top Pixels */}
    <rect x="18" y="16" width="10" height="10" rx="2" fill="#1E4592" />
    <rect x="32" y="16" width="10" height="10" rx="2" fill="#F15A24" />

    {/* Orange Vertical Stem */}
    <rect x="32" y="30" width="16" height="52" rx="2.5" fill="#F15A24" />

    {/* Blue "R" Upper Loop */}
    <path
      d="M 48 30 H 70 C 86 30 98 40 98 54 C 98 68 86 77 70 77 H 48 V 62 H 67 C 75 62 81 58 81 53.5 C 81 48.5 75 45 67 45 H 48 V 30 Z"
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

/**
 * Official DiR Logo matching the uploaded design:
 * - Brand emblem in royal blue & orange
 * - Distinctive "DiR" wordmark with capital D, orange dot on 'i', and capital R
 * - Stacked "Digital Information Resources Co., Ltd." with clean divider
 */
export const DIRLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'dark'
}) => {
  const isWhite = textColor === 'white';

  const emblemSize =
    size === 'sm' ? 30 : size === 'lg' ? 44 : size === 'xl' ? 52 : 36;
  const titleClass =
    size === 'sm'
      ? 'text-xl'
      : size === 'lg'
      ? 'text-3xl'
      : size === 'xl'
      ? 'text-4xl'
      : 'text-2xl sm:text-[25px]';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Emblem */}
      <DIREmblem size={emblemSize} />

      {/* Wordmark "DiR" */}
      <div className="flex items-center">
        <span
          className={`font-display font-black tracking-tight leading-none ${titleClass} ${
            isWhite ? 'text-white' : 'text-[#1E4592]'
          }`}
        >
          D<span className="text-[#F15A24]">i</span>R
        </span>
      </div>

      {/* Subtitle stacked */}
      {showText && (
        <div
          className={`flex flex-col text-left leading-tight pl-2.5 border-l ${
            isWhite ? 'border-white/20' : 'border-slate-300'
          }`}
        >
          <span
            className={`font-display font-bold text-[11px] tracking-tight uppercase ${
              isWhite ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            Digital Information
          </span>
          <span
            className={`text-[9.5px] font-semibold tracking-wide ${
              isWhite ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Resources Co., Ltd.
          </span>
        </div>
      )}
    </div>
  );
};
