import React from 'react';

export interface SocialIcon3DProps {
  platform: 'facebook' | 'linkedin' | 'youtube' | 'instagram' | 'twitter' | 'website';
  href: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface PlatformConfig {
  name: string;
  brandColor: string; // Hex color for lighting/glow
  hoverBg: string; // Tailwind bg for hovered pill
  hoverBorder: string; // Tailwind border
  hoverShadow: string; // Tailwind box-shadow
  iconColor: string; // Default or active color
  renderIcon: (sizeClass: string) => React.ReactNode;
}

const PLATFORM_CONFIGS: Record<SocialIcon3DProps['platform'], PlatformConfig> = {
  facebook: {
    name: 'Facebook',
    brandColor: '#1877F2',
    hoverBg: 'hover:bg-[#1877F2]',
    hoverBorder: 'hover:border-[#1877F2]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(24,119,242,0.6),0_4px_8px_rgba(24,119,242,0.4)]',
    iconColor: '#1877F2',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  linkedin: {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    hoverBg: 'hover:bg-[#0A66C2]',
    hoverBorder: 'hover:border-[#0A66C2]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(10,102,194,0.6),0_4px_8px_rgba(10,102,194,0.4)]',
    iconColor: '#0A66C2',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63z" />
      </svg>
    )
  },
  youtube: {
    name: 'YouTube',
    brandColor: '#FF0000',
    hoverBg: 'hover:bg-[#FF0000]',
    hoverBorder: 'hover:border-[#FF0000]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(255,0,0,0.6),0_4px_8px_rgba(255,0,0,0.4)]',
    iconColor: '#FF0000',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  instagram: {
    name: 'Instagram',
    brandColor: '#E1306C',
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#F56040] hover:via-[#E1306C] hover:to-[#833AB4]',
    hoverBorder: 'hover:border-[#E1306C]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(225,48,108,0.6),0_4px_8px_rgba(225,48,108,0.4)]',
    iconColor: '#E1306C',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  twitter: {
    name: 'X / Twitter',
    brandColor: '#1DA1F2',
    hoverBg: 'hover:bg-[#0F1419]',
    hoverBorder: 'hover:border-[#1DA1F2]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(29,161,242,0.6),0_4px_8px_rgba(29,161,242,0.4)]',
    iconColor: '#1DA1F2',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  website: {
    name: 'Website',
    brandColor: '#1E4592',
    hoverBg: 'hover:bg-[#1E4592]',
    hoverBorder: 'hover:border-[#1E4592]',
    hoverShadow: 'hover:shadow-[0_8px_20px_-4px_rgba(30,69,146,0.6),0_4px_8px_rgba(30,69,146,0.4)]',
    iconColor: '#1E4592',
    renderIcon: (sizeClass) => (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  }
};

export const SocialIcon3D: React.FC<SocialIcon3DProps> = ({
  platform,
  href,
  label,
  size = 'md',
  className = ''
}) => {
  const config = PLATFORM_CONFIGS[platform] || PLATFORM_CONFIGS.website;
  const accessibleLabel = label || config.name;

  // Size specifications with tactile 3D proportions
  const sizeStyles = {
    sm: {
      container: 'w-8 h-8 rounded-xl',
      icon: 'w-4 h-4',
      shadowBase: 'shadow-[0_3px_0_0_#1e293b,0_4px_6px_rgba(0,0,0,0.4)]',
      shadowActive: 'active:shadow-[0_1px_0_0_#1e293b,0_1px_2px_rgba(0,0,0,0.4)]'
    },
    md: {
      container: 'w-10 h-10 rounded-2xl',
      icon: 'w-5 h-5',
      shadowBase: 'shadow-[0_4px_0_0_#1e293b,0_6px_10px_rgba(0,0,0,0.45)]',
      shadowActive: 'active:shadow-[0_1px_0_0_#1e293b,0_2px_3px_rgba(0,0,0,0.45)]'
    },
    lg: {
      container: 'w-12 h-12 rounded-2xl',
      icon: 'w-6 h-6',
      shadowBase: 'shadow-[0_5px_0_0_#1e293b,0_8px_14px_rgba(0,0,0,0.5)]',
      shadowActive: 'active:shadow-[0_1px_0_0_#1e293b,0_2px_4px_rgba(0,0,0,0.5)]'
    }
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel}
      title={accessibleLabel}
      className={`group relative inline-flex items-center justify-center cursor-pointer select-none
        ${sizeStyles.container}
        bg-gradient-to-b from-slate-800 to-slate-900
        border border-slate-700/80
        text-slate-300
        ${sizeStyles.shadowBase}
        transition-all duration-200 ease-out
        hover:-translate-y-1 hover:brightness-110
        ${config.hoverBg} ${config.hoverBorder} ${config.hoverShadow}
        hover:text-white
        active:translate-y-0.5 ${sizeStyles.shadowActive}
        overflow-hidden
        ${className}`}
    >
      {/* 3D Top Specular Highlight / Bevel Glare */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/25 via-white/5 to-transparent rounded-t-[inherit]"
        aria-hidden="true"
      />

      {/* Subtle Inner Reflection Bevel */}
      <span
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] border-t border-white/20 border-b border-black/40"
        aria-hidden="true"
      />

      {/* Dynamic 3D Center Icon with Emboss & Subtle Depth */}
      <span
        className="relative z-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-active:scale-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
      >
        {config.renderIcon(sizeStyles.icon)}
      </span>

      {/* Ambient Radial Flare on Hover */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-radial from-white/20 via-transparent to-transparent"
        aria-hidden="true"
      />
    </a>
  );
};

export const SocialMediaBar3D: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabels?: boolean;
}> = ({ size = 'md', className = '', showLabels = false }) => {
  const socials: Array<{
    platform: SocialIcon3DProps['platform'];
    href: string;
    label: string;
  }> = [
    {
      platform: 'facebook',
      href: 'https://facebook.com/dir.education',
      label: 'Follow DIR on Facebook'
    },
    {
      platform: 'linkedin',
      href: 'https://linkedin.com/company/dir-myanmar',
      label: 'Connect with DIR on LinkedIn'
    },
    {
      platform: 'youtube',
      href: 'https://youtube.com/@dirlearningmyanmar',
      label: 'Watch DIR Educational Videos on YouTube'
    }
  ];

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {socials.map((item) => (
        <div key={item.platform} className="flex items-center gap-2">
          <SocialIcon3D
            platform={item.platform}
            href={item.href}
            label={item.label}
            size={size}
          />
          {showLabels && (
            <span className="text-xs font-semibold text-slate-300">
              {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
