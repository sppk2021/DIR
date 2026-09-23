import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'white';
}

/**
 * Official Digital Information Resources Company Limited (DIR) Logo
 * Exact 1:1 Vector rendering based on confirmed corporate asset (DIR-LOGO-Confirm.jpg):
 * - Cobalt Blue: #1E4592
 * - Warm Vivid Orange: #F15A24
 * - Interlocking "i-D-R" monogram with digital pixel matrix and dynamic flame/swoosh
 */
export const DIREmblem: React.FC<{ className?: string; size?: number | string }> = ({
  className = '',
  size = 44
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Digital Information Resources Company Limited Logo Emblem"
    >
      {/* Top Left Pixels */}
      <rect x="18" y="16" width="9" height="9" rx="1.5" fill="#1E4592" />
      <rect x="31" y="16" width="9" height="9" rx="1.5" fill="#F15A24" />

      {/* Orange Vertical Stem ("i" & "R" Backbone) */}
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
};

export const DIRLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'dark'
}) => {
  const pixelSizeMap = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 72
  };

  const isWhite = textColor === 'white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <DIREmblem size={pixelSizeMap[size]} />

      {showText && (
        <div className="flex flex-col text-left select-none">
          <span
            className={`font-display font-extrabold tracking-tight text-xs sm:text-sm lg:text-base uppercase leading-tight ${
              isWhite ? 'text-white' : 'text-[#1E4592]'
            }`}
          >
            DIGITAL INFORMATION RESOURCES
          </span>
          <span
            className={`text-[11px] sm:text-xs font-semibold tracking-wide capitalize ${
              isWhite ? 'text-[#FB923C]' : 'text-[#F15A24]'
            }`}
          >
            Company Limited
          </span>
        </div>
      )}
    </div>
  );
};
