import { SiteConfig, ManagedPartner, SocialLinkConfig } from '../types/siteConfig';
import {
  JOLLY_LOGO_SVG,
  NATGEO_LOGO_SVG,
  BINARY_LOGO_SVG,
  UBS_LOGO_SVG,
  WIN_DIGITAL_LOGO_SVG,
  KBTC_LOGO_SVG,
  ULIGHT_LOGO_SVG,
  EDULIGHT_LOGO_SVG,
  SYNERGY_LOGO_SVG,
  YANGON_BOOK_PLAZA_LOGO,
  LITTLE_EINSTEIN_LOGO,
  MERCURY_BOOKSTORE_LOGO
} from './partnerAssets';

export const DEFAULT_PARTNERS: ManagedPartner[] = [
  {
    id: 'dir-official',
    name: 'DiR (Education Group)',
    logoImage: '/assets/DIR-LOGO-Confirm.jpg',
    websiteUrl: 'https://dir.com.mm',
    tag: 'Digital Information Resources Co., Ltd',
    accreditationBadge: 'Founding Entity · 2018',
    category: 'internal',
    isActive: true,
    order: 0
  },
  {
    id: 'jolly-learning',
    name: 'Jolly Learning UK',
    logoImage: JOLLY_LOGO_SVG,
    websiteUrl: 'https://www.jollylearning.com',
    tag: 'Synthetic Phonics & Grammar Program',
    accreditationBadge: 'Official Sole Distributor',
    category: 'publisher',
    isActive: true,
    order: 1
  },
  {
    id: 'natgeo-learning',
    name: 'National Geographic Learning',
    logoImage: NATGEO_LOGO_SVG,
    websiteUrl: 'https://eltngl.com',
    tag: 'Cengage Learning Global ELT Curricula',
    accreditationBadge: 'Exclusive Myanmar Partner',
    category: 'publisher',
    isActive: true,
    order: 2
  },
  {
    id: 'binary-logic',
    name: 'Binary Logic',
    logoImage: BINARY_LOGO_SVG,
    websiteUrl: 'https://www.binarylogic.net',
    tag: 'Digital Kids & Teens · Computing & AI',
    accreditationBadge: 'ISTE Seal Valid 2026',
    category: 'publisher',
    isActive: true,
    order: 3
  },
  {
    id: 'u-book-store',
    name: 'U Book Store (UBS)',
    logoImage: UBS_LOGO_SVG,
    websiteUrl: '#bookstore',
    tag: 'Retail & Wholesale Educational Bookstore',
    accreditationBadge: '50+ Partner Retailers',
    category: 'retail',
    isActive: true,
    order: 4
  },
  {
    id: 'win-digital-hub',
    name: 'Win Digital Learning Hub',
    logoImage: WIN_DIGITAL_LOGO_SVG,
    websiteUrl: '#digital-hub',
    tag: 'Hands-on ICT, Coding & Robotics Academy',
    accreditationBadge: 'Flagship STEM Hub',
    category: 'internal',
    isActive: true,
    order: 5
  },
  {
    id: 'kbtc',
    name: 'KBTC International School',
    logoImage: KBTC_LOGO_SVG,
    websiteUrl: 'https://kbtcinternationalschools.com',
    tag: 'Cambridge Curricula & Phonics Partner',
    accreditationBadge: '1,500+ Students',
    category: 'school',
    isActive: true,
    order: 6
  },
  {
    id: 'ulight',
    name: 'ULight International School',
    logoImage: ULIGHT_LOGO_SVG,
    websiteUrl: 'https://ulightschool.com',
    tag: 'NatGeo Look & Close-up Adoption',
    accreditationBadge: '900+ Students',
    category: 'school',
    isActive: true,
    order: 7
  },
  {
    id: 'edulight',
    name: 'Edu-Light High School',
    logoImage: EDULIGHT_LOGO_SVG,
    websiteUrl: 'https://edulightschool.com',
    tag: 'College Prep & STEM Partner',
    accreditationBadge: '600+ Students',
    category: 'school',
    isActive: true,
    order: 8
  },
  {
    id: 'synergy',
    name: 'Synergy International Academy',
    logoImage: SYNERGY_LOGO_SVG,
    websiteUrl: 'https://synergyacademy.edu.mm',
    tag: 'Full Phonics & Computing Suite',
    accreditationBadge: '450+ Learners',
    category: 'school',
    isActive: true,
    order: 9
  },
  {
    id: 'yangon-book-plaza',
    name: 'Yangon Book Plaza',
    logoImage: YANGON_BOOK_PLAZA_LOGO,
    websiteUrl: '#bookstore',
    tag: 'Flagship Cultural & Readers Partner',
    accreditationBadge: 'Myanmar\'s Largest Plaza',
    category: 'retail',
    isActive: true,
    order: 10
  },
  {
    id: 'little-einstein',
    name: 'Little Einstein Kindergarten',
    logoImage: LITTLE_EINSTEIN_LOGO,
    websiteUrl: '#partners',
    tag: 'Early Years STEM & Phonics Center',
    accreditationBadge: 'Early Years Accredited',
    category: 'school',
    isActive: true,
    order: 11
  },
  {
    id: 'mercury',
    name: 'Mercury Bookstore & Education',
    logoImage: MERCURY_BOOKSTORE_LOGO,
    websiteUrl: '#bookstore',
    tag: 'Authorized Courseware Retailer',
    accreditationBadge: 'Nationwide Delivery',
    category: 'retail',
    isActive: true,
    order: 12
  }
];

export const DEFAULT_SOCIAL_LINKS: SocialLinkConfig[] = [
  {
    platform: 'facebook',
    label: 'Facebook',
    url: 'https://facebook.com/dir.education',
    enabled: true
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/dir-myanmar',
    enabled: true
  },
  {
    platform: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com/@dirlearningmyanmar',
    enabled: true
  },
  {
    platform: 'telegram',
    label: 'Telegram',
    url: 'https://t.me/dir_education_myanmar',
    enabled: true
  },
  {
    platform: 'viber',
    label: 'Viber Community',
    url: 'viber://chat?number=+959977814290',
    enabled: true
  },
  {
    platform: 'email',
    label: 'Email Inquiries',
    url: 'mailto:cs@dir.com.mm',
    enabled: true
  }
];

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  branding: {
    headerLogoUrl: '/assets/DIR-LOGO-Confirm.jpg',
    headerLogoType: 'image',
    brandName: 'DIR',
    brandSubtitle: 'Digital Information Resources',
    tagline: 'Integrated Education Solutions',
    footerLogoUrl: '/assets/dir-logo.svg',
    partnerCardFallbackLogo: '/assets/DIR-LOGO-Confirm.jpg',
    showSubtitleInHeader: true
  },
  hero: {
    badgeText: 'Integrated Education Solutions',
    headline: 'Building Future-Ready Learners, Together',
    subheadline:
      'DIR provides integrated education solutions for schools, educators, students, libraries and education organizations through curriculum, technology, learning resources, teacher development and more.',
    heroImageUrl: '/src/assets/images/myanmar_classroom_learning_1790172148897.jpg',
    // Default video link - YouTube story video or demo link
    videoUrl: 'https://www.youtube.com/watch?v=kYJ3i_g3sYs',
    videoTitle: 'Our Story: Digital Information Resources (DIR)',
    videoSubtitle: 'Empowering Myanmar\'s Learners Since 2018',
    videoDescription:
      'Watch how DIR brings world-class curricula from Jolly Learning and National Geographic, teacher masterclasses, and hands-on robotics to schools and students across Myanmar.',
    videoPosterUrl: '/src/assets/images/myanmar_classroom_learning_1790172148897.jpg',
    videoButtonText: 'Watch Our Story',
    primaryCtaText: 'Explore Our Solutions',
    primaryCtaTarget: 'courseware',
    secondaryCtaText: 'About DIR',
    secondaryCtaTarget: 'about'
  },
  partners: DEFAULT_PARTNERS,
  socialLinks: DEFAULT_SOCIAL_LINKS,
  announcement: {
    enabled: true,
    badge: "What's New",
    text: '🌱 Welcome to DIR 2026 Academic Catalog & Teacher Masterclass Registrations Open!',
    linkUrl: '#courseware',
    accentColor: '#1E4592'
  },
  contact: {
    phone: '+95 186 510 49 / +959 977 814 290',
    email: 'cs@dir.com.mm',
    address: 'No-408, Tower (B), Myaing Hay Wun Condo, 8 Miles, Mayangone Township, Yangon, Myanmar',
    hours: 'Mon – Sat: 9:00 AM – 5:30 PM (Closed on Sundays)'
  },
  lastUpdated: new Date().toISOString(),
  updatedBy: 'System Default'
};
