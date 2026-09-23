import React from 'react';

/**
 * Modern SVG Wave / Gradient Section Divider for layered professional flow.
 */
export const SectionDivider: React.FC<{ type?: 'wave' | 'curve' | 'gradient'; className?: string }> = ({
  type = 'wave',
  className = ''
}) => {
  if (type === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`}>
        <svg
          className="relative block w-full h-10 sm:h-16 text-slate-100"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0.0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }

  if (type === 'curve') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`}>
        <svg
          className="relative block w-full h-8 sm:h-12 text-blue-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full h-6 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent ${className}`} />
  );
};
