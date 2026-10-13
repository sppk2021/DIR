import React, { useState, useEffect, useRef } from 'react';
import { PageId, QuoteItem } from '../types';
import {
  Heart,
  Share2,
  Plus,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Laptop,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  Check,
  ExternalLink,
  X,
  Play,
  Pause,
  ArrowRight,
  Building2,
  Globe2,
  ImagePlus,
  Upload,
  Link as LinkIcon,
  RotateCcw,
  Info
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export interface PartnerSlide {
  id: string;
  name: string;
  shortName: string;
  category: 'publisher' | 'school';
  categoryLabel: string;
  tag: string;
  accentBg: string; // Pastel header matching current UI
  accentBorder: string;
  accentText: string;
  headline: string;
  description: string;
  adoptedPrograms: string[];
  keyHighlights: string[];
  accreditationBadge: string;
  visualType: 'phonics' | 'natgeo' | 'binary' | 'scholastic' | 'kbtc' | 'cambridge' | 'ulight';
  targetPage?: PageId;
  logoImage: string; // Official brand logo image URL/data URI
  websiteUrl: string; // Official partner website URL
}

// Crisp official partner logo image SVGs matching official corporate identities
// 1. Jolly Learning: Authentic playful rainbow typography (Jolly in Red, O in Amber, L in Green, L in Cyan, Y in Violet) + "Learning" in deep navy + smiling mascot emblem
const JOLLY_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23FFFFFF"/><circle cx="28" cy="30" r="16" fill="%23FEF2F2"/><path d="M19 28c3 7 15 7 18 0" stroke="%23DC2626" stroke-width="2.6" stroke-linecap="round" fill="none"/><circle cx="23" cy="23" r="2.5" fill="%23DC2626"/><circle cx="33" cy="23" r="2.5" fill="%23DC2626"/><path d="M28 13l2-3 2 3" stroke="%23F59E0B" stroke-width="2" stroke-linecap="round"/><g font-family="system-ui,-apple-system,sans-serif" font-weight="900" font-size="19" letter-spacing="-0.5"><text x="50" y="29" fill="%23DC2626">J</text><text x="61" y="29" fill="%23F59E0B">o</text><text x="73" y="29" fill="%2310B981">l</text><text x="80" y="29" fill="%2306B6D4">l</text><text x="87" y="29" fill="%238B5CF6">y</text></g><text x="50" y="47" font-family="system-ui,-apple-system,sans-serif" font-weight="800" font-size="13" fill="%231E4592" letter-spacing="0.5">Learning</text></svg>`;

// 2. National Geographic Learning: Official yellow portal frame + bold sans-serif
const NATGEO_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23FFFFFF"/><rect x="12" y="10" width="22" height="40" fill="none" stroke="%23FBBF24" stroke-width="5" rx="1.5"/><g font-family="system-ui,-apple-system,sans-serif" font-weight="900" letter-spacing="0.5"><text x="42" y="23" font-size="8.5" fill="%23111827">NATIONAL</text><text x="42" y="34" font-size="8.5" fill="%23111827">GEOGRAPHIC</text><text x="42" y="47" font-size="8.5" fill="%23D97706" font-weight="800">LEARNING</text></g></svg>`;

// 3. Binary Logic: Vibrant cyan infinity node loop + tech wordmark
const BINARY_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23FFFFFF"/><path d="M19 36c-5 0-9-4-9-9s4-9 9-9c6 0 9 18 16 18s7-4 7-9-4-9-7-9c-7 0-10 18-16 18z" stroke="%2306B6D4" stroke-width="4" fill="none" stroke-linecap="round"/><text x="48" y="29" font-family="system-ui,-apple-system,sans-serif" font-weight="900" font-size="16" fill="%230891B2" letter-spacing="-0.5">binary</text><text x="48" y="46" font-family="system-ui,-apple-system,sans-serif" font-weight="800" font-size="14" fill="%231E3A5F">logic</text></svg>`;

// 4. Scholastic: Iconic red banner & flying open pages
const SCHOLASTIC_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23E11D48"/><path d="M16 38l8-15 8 15z" fill="%23FFFFFF" opacity="0.95"/><text x="38" y="37" font-family="system-ui,-apple-system,sans-serif" font-weight="900" font-size="16" letter-spacing="1" fill="%23FFFFFF">SCHOLASTIC</text></svg>`;

// 5. KBTC International School: Official golden crest with royal navy shield
const KBTC_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%230F2444"/><circle cx="28" cy="30" r="16" fill="%231E3A5F" stroke="%23F59E0B" stroke-width="2"/><text x="28" y="35" font-family="serif" font-weight="900" font-size="14" fill="%23F59E0B" text-anchor="middle">K</text><text x="52" y="28" font-family="system-ui,-apple-system,sans-serif" font-weight="900" font-size="15" fill="%23FFFFFF">KBTC</text><text x="52" y="43" font-family="system-ui,-apple-system,sans-serif" font-weight="700" font-size="9" fill="%2393C5FD" letter-spacing="0.5">INTERNATIONAL</text></svg>`;

// 6. Cambridge Assessment: Crimson academic seal & golden heraldic cross
const CAMBRIDGE_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23FFFFFF"/><rect x="12" y="11" width="28" height="38" rx="4" fill="%23991B1B"/><path d="M26 14v32M15 30h22" stroke="%23FBBF24" stroke-width="3"/><circle cx="26" cy="30" r="3" fill="%23FFFFFF"/><text x="46" y="27" font-family="serif" font-weight="900" font-size="11.5" fill="%231E293B" letter-spacing="0.5">CAMBRIDGE</text><text x="46" y="42" font-family="system-ui,-apple-system,sans-serif" font-weight="700" font-size="8.5" fill="%2364748B" letter-spacing="0.5">ASSESSMENT</text></svg>`;

// 7. ULight International School: Deep burgundy with golden academic star
const ULIGHT_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60" width="160" height="60"><rect width="160" height="60" rx="12" fill="%23FFFFFF"/><circle cx="26" cy="30" r="16" fill="%23881337"/><path d="M26 19l2 5h5l-4 3 1.5 5-4.5-3-4.5 3 1.5-5-4-3h5z" fill="%23FBBF24"/><text x="48" y="28" font-family="system-ui,-apple-system,sans-serif" font-weight="900" font-size="15" fill="%23881337">ULIGHT</text><text x="48" y="43" font-family="system-ui,-apple-system,sans-serif" font-weight="700" font-size="8.5" fill="%2364748B">INTERNATIONAL</text></svg>`;

const PARTNER_SLIDES: PartnerSlide[] = [
  {
    id: 'jolly-learning',
    name: 'Jolly Learning UK',
    shortName: 'Jolly Learning',
    category: 'publisher',
    categoryLabel: 'UK Curriculum',
    tag: 'United Kingdom · Synthetic Phonics',
    accentBg: 'bg-[#F4EEFE]', // Matching Solutions Teacher Development
    accentBorder: 'border-purple-200',
    accentText: 'text-[#7C3AED]',
    headline: 'World’s #1 Synthetic Phonics & Grammar Curriculum',
    description: 'Empowering children across Myanmar to read and write fluently through multi-sensory synthetic phonics, decodable readers, and Jolly Classroom interactive software.',
    adoptedPrograms: ['Jolly Phonics (Ages 4-7)', 'Jolly Grammar (Ages 7-12)', 'Jolly Classroom Whiteboard CPT', 'Decodable Readers Series'],
    keyHighlights: ['42 Letter Sounds', 'Blending & Tricky Words', 'Interactive Whiteboard Software', 'Teacher TOT Certification'],
    accreditationBadge: 'UK DfE Benchmark',
    visualType: 'phonics',
    targetPage: 'courseware',
    logoImage: JOLLY_LOGO_SVG,
    websiteUrl: 'https://www.jollylearning.co.uk'
  },
  {
    id: 'natgeo-learning',
    name: 'National Geographic Learning',
    shortName: 'NatGeo Learning',
    category: 'publisher',
    categoryLabel: 'Global Publisher',
    tag: 'USA / UK · CEFR Pre-A1 to C1',
    accentBg: 'bg-[#FFF9E6]', // Matching Solutions Educational Resources
    accentBorder: 'border-amber-200',
    accentText: 'text-[#D97706]',
    headline: 'Bringing the Real World into Every Myanmar Classroom',
    description: 'Premier global English language and science series featuring world-class National Geographic photography, Explorers in the field, and 21st-century critical thinking.',
    adoptedPrograms: ['Look Series (Primary 1-6)', 'Explore Our World (Pre-K to Gr 6)', 'New Close-up (B1-C1 Teens)', 'Time Zones & Reach Higher'],
    keyHighlights: ['Authentic Global Photography', 'CEFR Benchmarked Standards', 'Real Explorers Videos', 'Classroom Presentation Tools'],
    accreditationBadge: 'CEFR Standard',
    visualType: 'natgeo',
    targetPage: 'courseware',
    logoImage: NATGEO_LOGO_SVG,
    websiteUrl: 'https://eltngl.com'
  },
  {
    id: 'binary-logic',
    name: 'Binary Logic Computing',
    shortName: 'Binary Logic',
    category: 'publisher',
    categoryLabel: 'EdTech & ICT',
    tag: 'Greece / UK · ISTE SEAL · Coding & AI',
    accentBg: 'bg-[#EBF3FE]', // Matching Solutions Curriculum & Learning
    accentBorder: 'border-blue-200',
    accentText: 'text-[#1E4592]',
    headline: 'Computing, Robotics & Artificial Intelligence for Schools',
    description: 'Award-winning computing curricula validated by the international ISTE SEAL, providing hands-on block coding, Python programming, cybersecurity, and robotics.',
    adoptedPrograms: ['Digital Kids (Starter to Gr 6)', 'Digital Teens (Python & Cloud)', 'ICT Lab Activity Guides', 'ISTE Validated Assessments'],
    keyHighlights: ['Official ISTE SEAL of Alignment', 'Python & Block Programming', 'Cybersecurity & Ethics', 'Cloud LMS Auto-Grader'],
    accreditationBadge: 'ISTE SEAL',
    visualType: 'binary',
    targetPage: 'digital-hub',
    logoImage: BINARY_LOGO_SVG,
    websiteUrl: 'https://www.binarylogic.net'
  },
  {
    id: 'scholastic-edu',
    name: 'Scholastic Education',
    shortName: 'Scholastic',
    category: 'publisher',
    categoryLabel: 'Global Literacy',
    tag: 'United States · Guided Reading',
    accentBg: 'bg-[#FEF3EE]', // Matching DIR Orange Pastel
    accentBorder: 'border-orange-200',
    accentText: 'text-[#F15A24]',
    headline: 'Igniting a Lifelong Love for Reading & Literacy',
    description: 'World’s most beloved children’s book publisher, supplying guided reading corner libraries, Dav Pilkey graphic novels, and leveled literacy intervention.',
    adoptedPrograms: ['Guided Reading Leveled Packs', 'Dav Pilkey Dog Man Series', 'Classroom Book Corner Collections', 'Early Literacy Phonics Boxed Sets'],
    keyHighlights: ['Guided Reading Levels A-Z', 'World’s #1 Graphic Novels', 'Classroom Library Management', 'Social-Emotional Learning'],
    accreditationBadge: 'Guided Reading',
    visualType: 'scholastic',
    targetPage: 'bookstore',
    logoImage: SCHOLASTIC_LOGO_SVG,
    websiteUrl: 'https://www.scholastic.com'
  },
  {
    id: 'kbtc-school',
    name: 'KBTC International School',
    shortName: 'KBTC School',
    category: 'school',
    categoryLabel: 'Cambridge School',
    tag: 'Yangon · 1,500+ Students',
    accentBg: 'bg-[#E8FAF4]', // Matching Solutions Digital Learning
    accentBorder: 'border-emerald-200',
    accentText: 'text-[#059669]',
    headline: 'Cambridge International Excellence Across Yangon',
    description: 'Flagship British international school in Yangon operating multi-campus primary, secondary, and sixth-form programs with full DIR courseware integration.',
    adoptedPrograms: ['NatGeo Look (Levels 1-6)', 'Jolly Classroom Whiteboard CPT', 'In-Service Teacher Masterclasses', 'Digital Library Setup'],
    keyHighlights: ['1,500+ Enrolled Students', 'Multi-Campus Yangon Network', 'Annual In-Service Masterclasses', 'High Cambridge Checkpoint Pass Rates'],
    accreditationBadge: 'Cambridge Registered',
    visualType: 'kbtc',
    targetPage: 'partners',
    logoImage: KBTC_LOGO_SVG,
    websiteUrl: 'https://kbtcschools.com'
  },
  {
    id: 'cambridge-assessment',
    name: 'Cambridge Assessment',
    shortName: 'Cambridge',
    category: 'publisher',
    categoryLabel: 'Assessment',
    tag: 'United Kingdom · International Exams',
    accentBg: 'bg-[#EFF4FC]', // DIR Pale Blue
    accentBorder: 'border-blue-200',
    accentText: 'text-[#1E4592]',
    headline: 'Global Qualifications & Rigorous Academic Pathways',
    description: 'Authorized distribution of Cambridge Primary, Secondary, and checkpoint examination preparation materials for international and private schools.',
    adoptedPrograms: ['Cambridge Checkpoint Test Prep', 'Global English Stage 1-9', 'Secondary Science Framework', 'Teacher Lesson Guides'],
    keyHighlights: ['Global Benchmark Recognition', 'Scaffolded Primary & Secondary', 'Exam Preparation Packs', 'Diagnostic Assessment Tools'],
    accreditationBadge: 'Cambridge Standard',
    visualType: 'cambridge',
    targetPage: 'courseware',
    logoImage: CAMBRIDGE_LOGO_SVG,
    websiteUrl: 'https://www.cambridgeenglish.org'
  },
  {
    id: 'ulight-school',
    name: 'ULight International School',
    shortName: 'ULight Academy',
    category: 'school',
    categoryLabel: 'Int’l Academy',
    tag: 'Yangon · 900+ Students',
    accentBg: 'bg-[#FEEFF4]', // Matching Solutions Creative
    accentBorder: 'border-rose-200',
    accentText: 'text-[#E11D48]',
    headline: 'Modern Academic Rigor & CEFR Language Mastery',
    description: 'Leading Yangon private academic academy recognized for outstanding academic achievements, bilingual excellence, and certified teacher development.',
    adoptedPrograms: ['NatGeo Time Zones Series', 'New Close-up B1-B2 Series', 'Teacher CPD Workshop Certificates', 'Annual Student Competitions'],
    keyHighlights: ['900+ Enrolled Students', 'CEFR Tested Progression', 'Certified Teacher CPD Workshops', 'Interactive Multimedia Labs'],
    accreditationBadge: 'Bilingual Excellence',
    visualType: 'ulight',
    targetPage: 'partners',
    logoImage: ULIGHT_LOGO_SVG,
    websiteUrl: 'https://ulightacademy.org'
  }
];

interface PartnerCoverSliderProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote?: (item: QuoteItem) => void;
  onOpenQuoteModal?: () => void;
}

export const PartnerCoverSlider: React.FC<PartnerCoverSliderProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'publisher' | 'school'>('all');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const { config } = useSiteConfig();

  // Dynamic / Custom Partner Logo image state (allows adding logo images without impacting card layout)
  const [partnerLogos, setPartnerLogos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('dir_custom_partner_logos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Partner logo editing modal state
  const [editingLogoPartner, setEditingLogoPartner] = useState<PartnerSlide | null>(null);
  const [inputLogoUrl, setInputLogoUrl] = useState('');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Filter slides based on category
  const filteredSlides = PARTNER_SLIDES.filter((s) => {
    if (filterCategory === 'all') return true;
    return s.category === filterCategory;
  });

  const total = filteredSlides.length;

  // Auto-play timer
  useEffect(() => {
    if (isAutoPlaying && total > 1 && !editingLogoPartner) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, total, editingLogoPartner]);

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filterCategory]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = (partner: PartnerSlide, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `Check out ${partner.name} - official educational partner of DIR Myanmar!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText} https://dir.com.mm`);
      setCopiedId(partner.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else {
      // Direct navigation with no pop-up
      const slide = filteredSlides[index];
      if (slide?.websiteUrl) {
        window.open(slide.websiteUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Save new partner logo
  const handleSaveLogo = (partnerId: string, newUrl: string) => {
    if (!newUrl.trim()) return;
    const updated = { ...partnerLogos, [partnerId]: newUrl.trim() };
    setPartnerLogos(updated);
    try {
      localStorage.setItem('dir_custom_partner_logos', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save logo to localStorage', e);
    }
    setEditingLogoPartner(null);
    setInputLogoUrl('');
    setUploadError(null);
  };

  // Reset partner logo back to default
  const handleResetLogo = (partnerId: string) => {
    const updated = { ...partnerLogos };
    delete updated[partnerId];
    setPartnerLogos(updated);
    try {
      localStorage.setItem('dir_custom_partner_logos', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save logo to localStorage', e);
    }
    setEditingLogoPartner(null);
    setInputLogoUrl('');
    setUploadError(null);
  };

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, SVG, WebP)');
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setUploadError('Image size exceeds 3MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setInputLogoUrl(reader.result);
        setUploadError(null);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  // Render floating visual asset inside each card, styled cleanly to match DIR UI
  const renderVisual = (type: PartnerSlide['visualType']) => {
    switch (type) {
      case 'phonics':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            {/* Whiteboard screen device */}
            <div className="relative w-44 sm:w-48 h-26 sm:h-30 bg-white rounded-2xl p-2.5 shadow-lg border border-purple-100 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between border-b border-purple-50 pb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[9px] font-extrabold tracking-wider text-purple-700 uppercase">
                  Jolly Classroom
                </span>
              </div>
              {/* Phonics Letter Tiles */}
              <div className="grid grid-cols-4 gap-1.5 py-1">
                {['s', 'a', 't', 'i', 'p', 'n', 'c', 'k'].map((letter, i) => (
                  <div
                    key={i}
                    className="h-5 sm:h-6 rounded-lg bg-purple-50/80 text-purple-900 font-extrabold text-xs flex items-center justify-center border border-purple-200/60 shadow-2xs"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[8px] text-purple-600 font-semibold pt-1 border-t border-purple-50">
                <span>Multi-Sensory Synthetic</span>
                <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded text-[7.5px] font-bold">
                  42 Sounds
                </span>
              </div>
            </div>
            {/* Decodable Book floating in front */}
            <div className="absolute -bottom-2 -right-1 w-18 sm:w-20 h-22 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-md p-1.5 text-white flex flex-col justify-between border border-white/40 transform rotate-6">
              <span className="text-[7.5px] font-bold tracking-tight uppercase">Jolly Readers</span>
              <div className="text-center font-black text-xs leading-none">
                Level 1 <br />
                <span className="text-[8px] font-medium opacity-90">Inky Mouse</span>
              </div>
              <span className="text-[7px] text-amber-100 text-center">Decodable</span>
            </div>
          </div>
        );

      case 'natgeo':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            {/* Yellow National Geographic Bordered Textbook */}
            <div className="relative w-36 sm:w-40 h-28 sm:h-32 bg-slate-900 rounded-xl p-2 shadow-lg border-3 border-[#F59E0B] flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-4 border-2 border-[#F59E0B] bg-transparent" />
                  <span className="text-[8.5px] font-black tracking-wider uppercase text-amber-400">
                    NatGeo
                  </span>
                </div>
                <span className="text-[8px] bg-amber-500/20 text-amber-300 px-1 rounded font-bold">
                  CEFR
                </span>
              </div>
              <div className="space-y-0.5 text-center my-auto">
                <span className="font-display font-black text-xl text-white tracking-tight block">
                  LOOK
                </span>
                <span className="text-[9px] text-amber-200 block font-medium">
                  Primary English 1–6
                </span>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-300 pt-1 border-t border-slate-700">
                <span>World Explorers</span>
                <span className="text-amber-400 font-bold">Cengage</span>
              </div>
            </div>
            {/* Real World badge */}
            <div className="absolute top-1 -right-2 w-13 h-13 rounded-full bg-white p-1 shadow-md flex flex-col items-center justify-center border border-amber-300 transform rotate-12">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-[6.5px] font-black text-slate-800 leading-none mt-0.5">
                EXPLORERS
              </span>
            </div>
          </div>
        );

      case 'binary':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            {/* Laptop with Python Code */}
            <div className="relative w-44 sm:w-48 h-26 sm:h-30 bg-[#0F172A] rounded-xl p-2.5 shadow-lg border border-sky-300/40 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-1">
                <span className="text-[9px] font-mono font-bold text-sky-400">
                  main.py · Digital Kids
                </span>
                <span className="text-[8px] bg-sky-500/20 text-sky-300 px-1 rounded font-bold">
                  Python 3
                </span>
              </div>
              <div className="font-mono text-[8.5px] text-emerald-400 space-y-0.5 leading-tight py-1">
                <div>
                  <span className="text-pink-400">def</span>{' '}
                  <span className="text-sky-300">futureSkills</span>():
                </div>
                <div className="pl-3 text-slate-300">
                  return [<span className="text-amber-300">&quot;Coding&quot;</span>, <span className="text-amber-300">&quot;AI&quot;</span>]
                </div>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-400 pt-1 border-t border-slate-700/80">
                <span>ISTE Standard Lab</span>
                <span className="text-emerald-400 font-bold">✓ Executed</span>
              </div>
            </div>
            {/* ISTE SEAL Golden Medal Floating */}
            <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 p-1 shadow-md flex flex-col items-center justify-center text-slate-900 border-2 border-white transform -rotate-12">
              <Award className="w-4 h-4 text-amber-900" />
              <span className="text-[6px] font-black tracking-tighter uppercase leading-none mt-0.5">
                ISTE SEAL
              </span>
            </div>
          </div>
        );

      case 'scholastic':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            {/* Stack of Story Books */}
            <div className="relative w-36 sm:w-42 h-26 sm:h-30 bg-white rounded-2xl p-2.5 shadow-lg border border-orange-200 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black tracking-wider text-[#F15A24] uppercase">
                  SCHOLASTIC
                </span>
                <span className="text-[7.5px] bg-red-50 text-red-700 px-1.5 rounded-full font-bold">
                  Guided Reading
                </span>
              </div>
              <div className="text-center py-0.5">
                <div className="font-display font-black text-sm sm:text-base text-slate-900 leading-tight">
                  DOG MAN
                </div>
                <span className="text-[8px] text-slate-500 font-medium">Dav Pilkey Series</span>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-orange-600 font-bold pt-1 border-t border-orange-100">
                <span>Leveled Readers</span>
                <span className="bg-[#F15A24] text-white px-1.5 py-0.5 rounded text-[7px]">
                  Levels A-Z
                </span>
              </div>
            </div>
            {/* Literacy Corner Floating */}
            <div className="absolute -top-1 -right-2 w-11 h-11 rounded-2xl bg-[#F15A24] text-white p-1 shadow-md flex flex-col items-center justify-center transform rotate-12 border border-white/50">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="text-[6.5px] font-bold mt-0.5">LITERACY</span>
            </div>
          </div>
        );

      case 'kbtc':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            {/* Academic School Crest Card */}
            <div className="relative w-40 sm:w-44 h-26 sm:h-30 bg-[#0F2444] rounded-2xl p-2.5 shadow-lg border border-emerald-400/30 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                <span className="text-[8.5px] font-bold text-emerald-400 uppercase tracking-wider">
                  Cambridge K-12
                </span>
                <span className="text-[7.5px] bg-amber-400/20 text-amber-300 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                  KBTC
                </div>
                <div className="text-[8px] text-emerald-300 font-medium">
                  International School
                </div>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-300 pt-1 border-t border-slate-700">
                <span>1,500+ Students</span>
                <span className="text-emerald-400 font-bold">Look Adopted</span>
              </div>
            </div>
            {/* Graduation Cap Floating */}
            <div className="absolute -bottom-2 -right-1 w-11 h-11 rounded-full bg-white text-[#0F2444] shadow-md flex flex-col items-center justify-center border-2 border-emerald-500 transform rotate-6">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        );

      case 'cambridge':
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            <div className="relative w-38 sm:w-42 h-26 sm:h-30 bg-[#1E293B] rounded-2xl p-2.5 shadow-lg border border-blue-400/30 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                <span className="text-[8.5px] font-bold text-blue-300 uppercase tracking-wider">
                  Cambridge Assessment
                </span>
                <span className="text-[7.5px] bg-blue-500/20 text-blue-300 px-1 rounded font-bold">
                  UK
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-sm sm:text-base text-white tracking-tight">
                  CAMBRIDGE
                </div>
                <div className="text-[8px] text-blue-300 font-medium">
                  Primary & Checkpoint
                </div>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-300 pt-1 border-t border-slate-700">
                <span>International Exams</span>
                <span className="text-blue-400 font-bold">Standard</span>
              </div>
            </div>
          </div>
        );

      case 'ulight':
      default:
        return (
          <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
            <div className="relative w-38 sm:w-44 h-26 sm:h-30 bg-[#881337] rounded-2xl p-2.5 shadow-lg border border-rose-400/30 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-rose-900 pb-1">
                <span className="text-[8.5px] font-bold text-rose-300 uppercase tracking-wider">
                  Private Academy
                </span>
                <span className="text-[7.5px] bg-rose-500/20 text-rose-200 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                  ULIGHT
                </div>
                <div className="text-[8px] text-rose-200 font-medium">
                  International School
                </div>
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-rose-200 pt-1 border-t border-rose-900">
                <span>900+ Learners</span>
                <span className="text-white font-bold">CEFR Close-up</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-10 select-none">
      {/* 1. TOP HEADER & CATEGORY FILTER TABS (Consistent with DIR UI) */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
            Our Partners
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Global Collaboration for Educational Excellence
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
            Working with trusted international publishers and premier school networks to elevate learning standards across Myanmar.
          </p>
        </div>

        {/* Filter Tabs & AutoPlay Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="p-1 bg-white rounded-full flex items-center gap-1 border border-slate-200 shadow-2xs">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({PARTNER_SLIDES.length})
            </button>
            <button
              onClick={() => setFilterCategory('publisher')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'publisher'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Publishers
            </button>
            <button
              onClick={() => setFilterCategory('school')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'school'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Schools
            </button>
          </div>

          {/* Autoplay Pause / Play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs transition-colors cursor-pointer ${
              isAutoPlaying
                ? 'bg-blue-50 border-blue-200 text-[#1E4592]'
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
            }`}
            title={isAutoPlaying ? 'Pause Carousel' : 'Play Carousel'}
            aria-label="Toggle auto-play"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* 2. 3D COVERFLOW STAGE - ON-THEME DIR AESTHETICS */}
      <div className="relative w-full h-[470px] sm:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-[#1E4592] hover:text-white hover:border-[#1E4592] transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Previous partner"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-[#1E4592] hover:text-white hover:border-[#1E4592] transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Next partner"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Card Stage Container */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-[1200px]">
          {filteredSlides.map((slide, index) => {
            // Distance calculation with circular wrapping
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isFavorite = favorites[slide.id];
            const isCopied = copiedId === slide.id;
            const dynamicPartner = config.partners?.find((p) => p.id === slide.id);
            const currentLogo = partnerLogos[slide.id] || dynamicPartner?.logoImage || slide.logoImage;
            const partnerDisplayName = dynamicPartner?.name || slide.name;
            const partnerDisplayUrl = dynamicPartner?.websiteUrl || slide.websiteUrl;
            const partnerDisplayTag = dynamicPartner?.tag || slide.tag;

            // Geometry transformation math for true 3D coverflow
            let transformStyle = '';
            let opacityStyle = 1;
            let zIndexStyle = 10;
            let pointerEvents = 'auto';

            if (isCenter) {
              transformStyle = 'translateX(0%) scale(1.06) rotateY(0deg)';
              zIndexStyle = 30;
              opacityStyle = 1;
            } else if (diff === -1) {
              transformStyle = 'translateX(-50%) scale(0.92) rotateY(10deg)';
              zIndexStyle = 20;
              opacityStyle = 0.9;
            } else if (diff === 1) {
              transformStyle = 'translateX(50%) scale(0.92) rotateY(-10deg)';
              zIndexStyle = 20;
              opacityStyle = 0.9;
            } else if (diff === -2) {
              transformStyle = 'translateX(-88%) scale(0.8) rotateY(18deg)';
              zIndexStyle = 10;
              opacityStyle = 0.6;
            } else if (diff === 2) {
              transformStyle = 'translateX(88%) scale(0.8) rotateY(-18deg)';
              zIndexStyle = 10;
              opacityStyle = 0.6;
            } else {
              transformStyle = diff < 0 ? 'translateX(-120%) scale(0.65)' : 'translateX(120%) scale(0.65)';
              zIndexStyle = 0;
              opacityStyle = 0;
              pointerEvents = 'none';
            }

            return (
              <div
                key={slide.id}
                onClick={() => handleCardClick(index)}
                style={{
                  transform: transformStyle,
                  zIndex: zIndexStyle,
                  opacity: opacityStyle,
                  pointerEvents: pointerEvents as any
                }}
                className={`absolute w-[280px] sm:w-[320px] h-[390px] sm:h-[420px] rounded-3xl bg-white border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden select-none group/card hover:-translate-y-2 hover:scale-[1.02] ${
                  isCenter
                    ? 'border-[#1E4592]/30 shadow-xl hover:shadow-2xl ring-2 ring-[#1E4592]/10 hover:ring-[#1E4592]/25'
                    : 'border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {/* 1. TOP DUAL BADGES: ENHANCED & SYMMETRICAL (SINGLE-LINE, NO WRAPPING) */}
                <div className="px-4 sm:px-5 pt-3.5 sm:pt-4 flex items-center justify-between gap-2">
                  {/* Category Pill with Icon */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-2xs whitespace-nowrap shrink-0 ${slide.accentBg} ${slide.accentText} ${slide.accentBorder}`}
                  >
                    {slide.category === 'publisher' ? (
                      <Globe2 className="w-3 h-3 shrink-0" />
                    ) : (
                      <Building2 className="w-3 h-3 shrink-0" />
                    )}
                    <span>{slide.categoryLabel}</span>
                  </span>

                  {/* Verified Accreditation Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-700 bg-slate-50/90 border border-slate-200/90 shadow-2xs whitespace-nowrap shrink-0">
                    <Award className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>{slide.accreditationBadge}</span>
                  </span>
                </div>

                {/* 2. ONE BIG LOGO */}
                <div className="flex-1 flex items-center justify-center p-6 mx-4 my-2 rounded-2xl bg-slate-50/70 border border-slate-100 group-hover/card:bg-slate-50 group-hover/card:border-slate-200 transition-all relative">
                  <img
                    src={currentLogo}
                    alt={`${slide.name} Logo`}
                    className="max-h-24 sm:max-h-28 max-w-[210px] w-auto object-contain transition-transform duration-300 group-hover/card:scale-105 select-none"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== slide.logoImage) {
                        target.src = slide.logoImage;
                      }
                    }}
                  />

                  {/* Discrete Change Logo Button on Card Hover */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingLogoPartner(slide);
                      setInputLogoUrl(currentLogo);
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-[#1E4592] border border-slate-200 shadow-2xs opacity-0 group-hover/card:opacity-100 transition-opacity cursor-pointer"
                    title="Change partner logo"
                    aria-label="Change partner logo"
                  >
                    <ImagePlus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 3. PARTNER NAME */}
                <div className="px-5 text-center">
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-900 tracking-tight leading-snug group-hover/card:text-[#1E4592] transition-colors">
                    {partnerDisplayName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 truncate">
                    {partnerDisplayTag}
                  </p>
                </div>

                {/* 4. LINK (NO POP-UP) */}
                <div className="p-5 pt-3">
                  <a
                    href={partnerDisplayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer ${
                      isCenter
                        ? 'bg-[#1E4592] hover:bg-[#153472] text-white hover:scale-[1.02]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                    title={`Visit ${partnerDisplayName} official website`}
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {partnerDisplayUrl && (
                    <span className="text-[10px] text-slate-400 font-medium truncate block text-center mt-1.5 opacity-80">
                      {partnerDisplayUrl.replace(/^https?:\/\/(www\.)?/, '')}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PAGINATION DOT INDICATORS */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {filteredSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === activeIndex
                ? 'w-7 h-2 bg-[#1E4592]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>



      {/* 5. ADD / CUSTOMIZE PARTNER LOGO MODAL (Strictly bounded so it cannot impact card layout) */}
      {editingLogoPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in-50 duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-[#1E4592] to-[#153472] text-white flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs font-medium">
                  <ImagePlus className="w-4 h-4" />
                  <span>Partner Logo Customization</span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  Add Logo for {editingLogoPartner.name}
                </h3>
                <p className="text-xs text-blue-100/90">
                  Logo images are contained in fixed dimensions and will not impact card styling.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingLogoPartner(null);
                  setInputLogoUrl('');
                  setUploadError(null);
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm text-slate-700">
              {/* Preview Comparison */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-2xs p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={inputLogoUrl || editingLogoPartner.logoImage}
                    alt="Logo Preview"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = editingLogoPartner.logoImage;
                    }}
                  />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <span className="font-bold text-xs text-slate-800 block">
                    Card Preview (Strict Fixed Container)
                  </span>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Standard 48x48 rounded box with <code className="text-[#1E4592] bg-blue-50 px-1 rounded">object-contain</code>. Your image will display cleanly without stretching the card.
                  </p>
                </div>
              </div>

              {/* Unified Partner Logo Configuration Hub */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#1E4592]/10 flex items-center justify-center text-[#1E4592]">
                      <ImagePlus className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 tracking-wide">
                      Upload, Link or Choose Official Brand Logo
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">
                    Auto-fitted · 48×48px
                  </span>
                </div>

                {/* Combined Input Row: Direct Upload Button + URL Input */}
                <div className="space-y-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-2xs shrink-0 cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-[#1E4592]" />
                      <span>Upload Image</span>
                    </button>

                    <div className="relative flex-1">
                      <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        value={inputLogoUrl}
                        onChange={(e) => setInputLogoUrl(e.target.value)}
                        placeholder="Or paste image URL (https://...)"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1E4592] focus:ring-1 focus:ring-[#1E4592]"
                      />
                    </div>
                  </div>

                  {uploadError && (
                    <p className="text-xs text-rose-600 font-medium">{uploadError}</p>
                  )}
                </div>

                {/* Quick Official Logo Presets Selector in the same card section */}
                <div className="pt-2 border-t border-slate-200/70 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Quick-Select Official Partner Logo:
                  </span>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                    {[
                      { name: 'DiR Logo', logo: '/assets/DIR-LOGO-Confirm.jpg' },
                      { name: 'Jolly Phonics', logo: JOLLY_LOGO_SVG },
                      { name: 'NatGeo', logo: NATGEO_LOGO_SVG },
                      { name: 'Binary Logic', logo: BINARY_LOGO_SVG },
                      { name: 'Scholastic', logo: SCHOLASTIC_LOGO_SVG },
                      { name: 'KBTC School', logo: KBTC_LOGO_SVG },
                      { name: 'Cambridge', logo: CAMBRIDGE_LOGO_SVG },
                      { name: 'ULight', logo: ULIGHT_LOGO_SVG }
                    ].map((preset, idx) => {
                      const isSelected = inputLogoUrl === preset.logo;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setInputLogoUrl(preset.logo)}
                          className={`p-1.5 rounded-xl border bg-white shadow-2xs transition-all flex flex-col items-center justify-center gap-1 cursor-pointer group ${
                            isSelected
                              ? 'border-[#1E4592] ring-2 ring-[#1E4592]/20 bg-blue-50/50'
                              : 'border-slate-200 hover:border-[#1E4592] hover:bg-slate-50'
                          }`}
                          title={preset.name}
                        >
                          <div className="w-7 h-7 flex items-center justify-center overflow-hidden">
                            <img
                              src={preset.logo}
                              alt={preset.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <span className="text-[8px] font-medium text-slate-600 truncate max-w-full text-center">
                            {preset.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => handleResetLogo(editingLogoPartner.id)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditingLogoPartner(null);
                    setInputLogoUrl('');
                    setUploadError(null);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveLogo(editingLogoPartner.id, inputLogoUrl)}
                  disabled={!inputLogoUrl.trim()}
                  className="px-5 py-2 bg-[#1E4592] hover:bg-[#153472] disabled:opacity-50 text-white rounded-full text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  Apply Logo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
