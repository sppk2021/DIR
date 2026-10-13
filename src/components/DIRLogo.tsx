import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'white';
  logoSrc?: string;
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
 * Official DIR Logo:
 * - Square rounded logo container with emblem or uploaded image
 * - Beside logo: "Digital Information Resources Co., Ltd." in a single line with all same fonts
 * - Responsive across mobile, web, desktops, and computers
 */
export const DIRLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'dark',
  logoSrc
}) => {
  const isWhite = textColor === 'white';
  const targetLogoSrc = logoSrc || '';

  const boxSize =
    size === 'sm'
      ? 'w-9 h-9'
      : size === 'lg'
      ? 'w-12 h-12'
      : size === 'xl'
      ? 'w-14 h-14'
      : 'w-10 h-10';

  const emblemSize =
    size === 'sm' ? 24 : size === 'lg' ? 34 : size === 'xl' ? 40 : 28;

  const textSize =
    size === 'sm'
      ? 'text-xs sm:text-sm'
      : size === 'lg'
      ? 'text-base sm:text-lg'
      : size === 'xl'
      ? 'text-lg sm:text-xl'
      : 'text-sm sm:text-base';

  const textColorClass = isWhite ? 'text-white' : 'text-slate-900';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Square Rounded Logo Container */}
      <div
        className={`${boxSize} rounded-xl overflow-hidden bg-white shadow-xs border ${
          isWhite ? 'border-white/25 bg-white/10 backdrop-blur-xs' : 'border-slate-200/80'
        } flex items-center justify-center shrink-0 p-1`}
      >
        {targetLogoSrc ? (
          <img
            src={targetLogoSrc}
            alt="Digital Information Resources Co., Ltd."
            className="w-full h-full object-contain rounded-lg"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <DIREmblem size={emblemSize} />
        )}
      </div>

      {/* Company Name on One Single Line with All Same Fonts */}
      {showText && (
        <div className="flex items-center">
          <span
            className={`font-display font-bold tracking-tight ${textSize} ${textColorClass} whitespace-nowrap`}
          >
            Digital Information Resources Co., Ltd.
          </span>
        </div>
      )}
    </div>
  );
};

export const DIRImageLogo: React.FC<{
  className?: string;
  height?: number | string;
  alt?: string;
}> = ({
  className = '',
  height = 42,
  alt = 'Digital Information Resources Co., Ltd.'
}) => (
  <div className="flex items-center gap-3 select-none">
    <div
      style={{ width: height, height }}
      className="rounded-xl overflow-hidden bg-white shadow-xs border border-slate-200/80 flex items-center justify-center shrink-0 p-1"
    >
      <img
        src="/assets/DIR-LOGO-Confirm.jpg"
        alt={alt}
        className="w-full h-full object-contain rounded-lg"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/assets/dir-logo.svg';
        }}
      />
    </div>
    <span className="font-display font-bold text-base sm:text-lg text-slate-900 tracking-tight whitespace-nowrap">
      Digital Information Resources Co., Ltd.
    </span>
  </div>
);

export const DIR_CONFIRMED_LOGO_PATH = '/assets/DIR-LOGO-Confirm.jpg';
export const DIR_CONFIRMED_SVG_PATH = '/assets/dir-logo.svg';
