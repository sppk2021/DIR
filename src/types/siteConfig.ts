export interface ManagedPartner {
  id: string;
  name: string;
  logoImage: string;
  websiteUrl: string;
  tag: string;
  accreditationBadge: string;
  category: 'publisher' | 'school' | 'retail' | 'internal';
  isActive: boolean;
  order: number;
}

export interface SocialLinkConfig {
  platform: 'facebook' | 'linkedin' | 'youtube' | 'telegram' | 'viber' | 'tiktok' | 'instagram' | 'email';
  label: string;
  url: string;
  enabled: boolean;
}

export interface SiteConfig {
  // 1. Branding & Logo Settings
  branding: {
    headerLogoUrl: string;
    headerLogoType: 'image' | 'svg' | 'custom';
    brandName: string;
    brandSubtitle: string;
    tagline: string;
    footerLogoUrl: string;
    partnerCardFallbackLogo: string;
    showSubtitleInHeader: boolean;
  };

  // 2. Hero Section & Video Settings
  hero: {
    badgeText: string;
    headline: string;
    subheadline: string;
    heroImageUrl: string;
    // Video Link & Embed Info
    videoUrl: string; // YouTube, Vimeo, or MP4 link
    videoTitle: string;
    videoSubtitle: string;
    videoDescription: string;
    videoPosterUrl: string;
    videoButtonText: string;
    // Hero CTAs
    primaryCtaText: string;
    primaryCtaTarget: string;
    secondaryCtaText: string;
    secondaryCtaTarget: string;
  };

  // 3. Managed Partners (displayed in PartnerCoverSlider & PartnersPage)
  partners: ManagedPartner[];

  // 4. Social Links (3D Social Icons)
  socialLinks: SocialLinkConfig[];

  // 5. Contact & Announcement Info
  announcement: {
    enabled: boolean;
    badge: string;
    text: string;
    linkUrl: string;
    accentColor: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };

  // 6. Metadata
  lastUpdated: string;
  updatedBy?: string;
}
