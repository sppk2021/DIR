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
  Globe2
} from 'lucide-react';

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
}

const PARTNER_SLIDES: PartnerSlide[] = [
  {
    id: 'jolly-learning',
    name: 'Jolly Learning UK',
    shortName: 'Jolly Learning',
    category: 'publisher',
    categoryLabel: 'Global Curriculum Publisher',
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
    targetPage: 'courseware'
  },
  {
    id: 'natgeo-learning',
    name: 'National Geographic Learning',
    shortName: 'NatGeo Learning',
    category: 'publisher',
    categoryLabel: 'Global Publisher & Cengage',
    tag: 'USA / UK · CEFR Pre-A1 to C1',
    accentBg: 'bg-[#FFF9E6]', // Matching Solutions Educational Resources
    accentBorder: 'border-amber-200',
    accentText: 'text-[#D97706]',
    headline: 'Bringing the Real World into Every Myanmar Classroom',
    description: 'Premier global English language and science series featuring world-class National Geographic photography, Explorers in the field, and 21st-century critical thinking.',
    adoptedPrograms: ['Look Series (Primary 1-6)', 'Explore Our World (Pre-K to Gr 6)', 'New Close-up (B1-C1 Teens)', 'Time Zones & Reach Higher'],
    keyHighlights: ['Authentic Global Photography', 'CEFR Benchmarked Standards', 'Real Explorers Videos', 'Classroom Presentation Tools'],
    accreditationBadge: 'CEFR Benchmarked',
    visualType: 'natgeo',
    targetPage: 'courseware'
  },
  {
    id: 'binary-logic',
    name: 'Binary Logic Computing',
    shortName: 'Binary Logic',
    category: 'publisher',
    categoryLabel: 'EdTech & Computing Curriculum',
    tag: 'Greece / UK · ISTE SEAL · Coding & AI',
    accentBg: 'bg-[#EBF3FE]', // Matching Solutions Curriculum & Learning
    accentBorder: 'border-blue-200',
    accentText: 'text-[#1E4592]',
    headline: 'Computing, Robotics & Artificial Intelligence for Schools',
    description: 'Award-winning computing curricula validated by the international ISTE SEAL, providing hands-on block coding, Python programming, cybersecurity, and robotics.',
    adoptedPrograms: ['Digital Kids (Starter to Gr 6)', 'Digital Teens (Python & Cloud)', 'ICT Lab Activity Guides', 'ISTE Validated Assessments'],
    keyHighlights: ['Official ISTE SEAL of Alignment', 'Python & Block Programming', 'Cybersecurity & Ethics', 'Cloud LMS Auto-Grader'],
    accreditationBadge: 'Official ISTE SEAL',
    visualType: 'binary',
    targetPage: 'digital-hub'
  },
  {
    id: 'scholastic-edu',
    name: 'Scholastic Education',
    shortName: 'Scholastic',
    category: 'publisher',
    categoryLabel: 'Children’s Literacy & Literature',
    tag: 'United States · Guided Reading',
    accentBg: 'bg-[#FEF3EE]', // Matching DIR Orange Pastel
    accentBorder: 'border-orange-200',
    accentText: 'text-[#F15A24]',
    headline: 'Igniting a Lifelong Love for Reading & Literacy',
    description: 'World’s most beloved children’s book publisher, supplying guided reading corner libraries, Dav Pilkey graphic novels, and leveled literacy intervention.',
    adoptedPrograms: ['Guided Reading Leveled Packs', 'Dav Pilkey Dog Man Series', 'Classroom Book Corner Collections', 'Early Literacy Phonics Boxed Sets'],
    keyHighlights: ['Guided Reading Levels A-Z', 'World’s #1 Graphic Novels', 'Classroom Library Management', 'Social-Emotional Learning'],
    accreditationBadge: 'Guided Reading A–Z',
    visualType: 'scholastic',
    targetPage: 'bookstore'
  },
  {
    id: 'kbtc-school',
    name: 'KBTC International School',
    shortName: 'KBTC School',
    category: 'school',
    categoryLabel: 'Cambridge K-12 Partner',
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
    targetPage: 'partners'
  },
  {
    id: 'cambridge-assessment',
    name: 'Cambridge Assessment',
    shortName: 'Cambridge',
    category: 'publisher',
    categoryLabel: 'International Examinations',
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
    targetPage: 'courseware'
  },
  {
    id: 'ulight-school',
    name: 'ULight International School',
    shortName: 'ULight Academy',
    category: 'school',
    categoryLabel: 'Private International Institution',
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
    targetPage: 'partners'
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
  const [activeModalPartner, setActiveModalPartner] = useState<PartnerSlide | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Filter slides based on category
  const filteredSlides = PARTNER_SLIDES.filter((s) => {
    if (filterCategory === 'all') return true;
    return s.category === filterCategory;
  });

  const total = filteredSlides.length;

  // Auto-play timer
  useEffect(() => {
    if (isAutoPlaying && total > 1) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, total]);

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
      setActiveModalPartner(filteredSlides[index]);
    }
  };

  // Render floating visual asset inside each card, styled cleanly to match DIR UI
  const renderVisual = (type: PartnerSlide['visualType']) => {
    switch (type) {
      case 'phonics':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            {/* Whiteboard screen device */}
            <div className="relative w-44 sm:w-50 h-28 sm:h-32 bg-white rounded-2xl p-2.5 shadow-lg border border-purple-100 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
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
                    className="h-6 sm:h-7 rounded-lg bg-purple-50/80 text-purple-900 font-extrabold text-xs flex items-center justify-center border border-purple-200/60 shadow-2xs"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[8.5px] text-purple-600 font-semibold pt-1 border-t border-purple-50">
                <span>Multi-Sensory Synthetic</span>
                <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded text-[7.5px] font-bold">
                  42 Sounds
                </span>
              </div>
            </div>
            {/* Decodable Book floating in front */}
            <div className="absolute -bottom-2 -right-1 w-20 sm:w-22 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-md p-1.5 text-white flex flex-col justify-between border border-white/40 transform rotate-6">
              <span className="text-[7.5px] font-bold tracking-tight uppercase">Jolly Readers</span>
              <div className="text-center font-black text-xs leading-none">
                Level 1 <br />
                <span className="text-[8.5px] font-medium opacity-90">Inky Mouse</span>
              </div>
              <span className="text-[7px] text-amber-100 text-center">Decodable</span>
            </div>
          </div>
        );

      case 'natgeo':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            {/* Yellow National Geographic Bordered Textbook */}
            <div className="relative w-38 sm:w-42 h-30 sm:h-34 bg-slate-900 rounded-xl p-2 shadow-lg border-3 border-[#F59E0B] flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
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
            <div className="absolute top-1 -right-2 w-14 h-14 rounded-full bg-white p-1 shadow-md flex flex-col items-center justify-center border border-amber-300 transform rotate-12">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-[7px] font-black text-slate-800 leading-none mt-0.5">
                EXPLORERS
              </span>
            </div>
          </div>
        );

      case 'binary':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            {/* Laptop with Python Code */}
            <div className="relative w-44 sm:w-50 h-28 sm:h-32 bg-[#0F172A] rounded-xl p-2.5 shadow-lg border border-sky-300/40 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-1">
                <span className="text-[9px] font-mono font-bold text-sky-400">
                  main.py · Digital Kids
                </span>
                <span className="text-[8px] bg-sky-500/20 text-sky-300 px-1 rounded font-bold">
                  Python 3
                </span>
              </div>
              <div className="font-mono text-[9px] text-emerald-400 space-y-0.5 leading-tight py-1">
                <div>
                  <span className="text-pink-400">def</span>{' '}
                  <span className="text-sky-300">futureSkills</span>():
                </div>
                <div className="pl-3 text-slate-300">
                  return [<span className="text-amber-300">&quot;Coding&quot;</span>, <span className="text-amber-300">&quot;AI&quot;</span>]
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-400 pt-1 border-t border-slate-700/80">
                <span>ISTE Standard Lab</span>
                <span className="text-emerald-400 font-bold">✓ Executed</span>
              </div>
            </div>
            {/* ISTE SEAL Golden Medal Floating */}
            <div className="absolute -bottom-2 -left-2 w-13 h-13 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 p-1 shadow-md flex flex-col items-center justify-center text-slate-900 border-2 border-white transform -rotate-12">
              <Award className="w-5 h-5 text-amber-900" />
              <span className="text-[6.5px] font-black tracking-tighter uppercase leading-none mt-0.5">
                ISTE SEAL
              </span>
            </div>
          </div>
        );

      case 'scholastic':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            {/* Stack of Story Books */}
            <div className="relative w-38 sm:w-44 h-28 sm:h-32 bg-white rounded-2xl p-2.5 shadow-lg border border-orange-200 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black tracking-wider text-[#F15A24] uppercase">
                  SCHOLASTIC
                </span>
                <span className="text-[7.5px] bg-red-50 text-red-700 px-1.5 rounded-full font-bold">
                  Guided Reading
                </span>
              </div>
              <div className="text-center py-1">
                <div className="font-display font-black text-base text-slate-900 leading-tight">
                  DOG MAN
                </div>
                <span className="text-[8.5px] text-slate-500 font-medium">Dav Pilkey Series</span>
              </div>
              <div className="flex items-center justify-between text-[8px] text-orange-600 font-bold pt-1 border-t border-orange-100">
                <span>Leveled Readers</span>
                <span className="bg-[#F15A24] text-white px-1.5 py-0.5 rounded text-[7.5px]">
                  Levels A-Z
                </span>
              </div>
            </div>
            {/* Literacy Corner Floating */}
            <div className="absolute -top-1 -right-2 w-12 h-12 rounded-2xl bg-[#F15A24] text-white p-1 shadow-md flex flex-col items-center justify-center transform rotate-12 border border-white/50">
              <BookOpen className="w-4 h-4" />
              <span className="text-[7px] font-bold mt-0.5">LITERACY</span>
            </div>
          </div>
        );

      case 'kbtc':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            {/* Academic School Crest Card */}
            <div className="relative w-42 sm:w-46 h-28 sm:h-32 bg-[#0F2444] rounded-2xl p-2.5 shadow-lg border border-emerald-400/30 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                <span className="text-[8.5px] font-bold text-emerald-400 uppercase tracking-wider">
                  Cambridge K-12
                </span>
                <span className="text-[7.5px] bg-amber-400/20 text-amber-300 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-lg text-white tracking-tight">
                  KBTC
                </div>
                <div className="text-[8.5px] text-emerald-300 font-medium">
                  International School
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-300 pt-1 border-t border-slate-700">
                <span>1,500+ Students</span>
                <span className="text-emerald-400 font-bold">Look Adopted</span>
              </div>
            </div>
            {/* Graduation Cap Floating */}
            <div className="absolute -bottom-2 -right-1 w-12 h-12 rounded-full bg-white text-[#0F2444] shadow-md flex flex-col items-center justify-center border-2 border-emerald-500 transform rotate-6">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
        );

      case 'cambridge':
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            <div className="relative w-40 sm:w-44 h-28 sm:h-32 bg-[#1E293B] rounded-2xl p-2.5 shadow-lg border border-blue-400/30 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1">
                <span className="text-[8.5px] font-bold text-blue-300 uppercase tracking-wider">
                  Cambridge Assessment
                </span>
                <span className="text-[7.5px] bg-blue-500/20 text-blue-300 px-1 rounded font-bold">
                  UK
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-base text-white tracking-tight">
                  CAMBRIDGE
                </div>
                <div className="text-[8.5px] text-blue-300 font-medium">
                  Primary & Checkpoint
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-300 pt-1 border-t border-slate-700">
                <span>International Exams</span>
                <span className="text-blue-400 font-bold">Standard</span>
              </div>
            </div>
          </div>
        );

      case 'ulight':
      default:
        return (
          <div className="relative w-full h-34 sm:h-38 flex items-center justify-center">
            <div className="relative w-40 sm:w-46 h-28 sm:h-32 bg-[#881337] rounded-2xl p-2.5 shadow-lg border border-rose-400/30 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-rose-900 pb-1">
                <span className="text-[8.5px] font-bold text-rose-300 uppercase tracking-wider">
                  Private Academy
                </span>
                <span className="text-[7.5px] bg-rose-500/20 text-rose-200 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-lg text-white tracking-tight">
                  ULIGHT
                </div>
                <div className="text-[8.5px] text-rose-200 font-medium">
                  International School
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-rose-200 pt-1 border-t border-rose-900">
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
                className={`absolute w-[280px] sm:w-[320px] h-[410px] sm:h-[440px] rounded-3xl bg-white border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between overflow-hidden select-none ${
                  isCenter
                    ? 'border-[#1E4592]/30 shadow-xl ring-2 ring-[#1E4592]/10'
                    : 'border-slate-200 shadow-md hover:border-slate-300'
                }`}
              >
                {/* 1. TOP HEADER STRIPE WITH SUBTLE PASTEL TINT MATCHING SITE SOLUTIONS */}
                <div
                  className={`px-4 py-3 border-b flex items-center justify-between ${slide.accentBg} ${slide.accentBorder}`}
                >
                  <div className="flex items-center gap-1.5">
                    {slide.category === 'publisher' ? (
                      <Globe2 className={`w-3.5 h-3.5 ${slide.accentText}`} />
                    ) : (
                      <Building2 className={`w-3.5 h-3.5 ${slide.accentText}`} />
                    )}
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${slide.accentText}`}
                    >
                      {slide.categoryLabel}
                    </span>
                  </div>

                  {/* Actions: Favorite & Share */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleFavorite(slide.id, e)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-colors cursor-pointer"
                      aria-label="Add to favorites"
                      title={isFavorite ? 'Bookmarked' : 'Bookmark partner'}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-transform active:scale-125 ${
                          isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    <button
                      onClick={(e) => handleShare(slide, e)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-colors cursor-pointer"
                      aria-label="Share partner"
                      title="Copy link"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* 2. CENTER GRAPHIC STAGE */}
                <div className="px-4 py-2 my-auto flex items-center justify-center">
                  {renderVisual(slide.visualType)}
                </div>

                {/* 3. CARD CONTENT INFO & ACTION BUTTON */}
                <div className="p-4 pt-1 space-y-3 bg-white">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="font-display font-black text-base text-slate-900 leading-snug truncate">
                        {slide.name}
                      </h4>
                      <span className="text-[10px] font-bold text-[#1E4592] bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                        {slide.accreditationBadge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      {slide.tag}
                    </p>
                  </div>

                  {/* Clean DIR Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalPartner(slide);
                    }}
                    className={`w-full py-2 px-3 text-xs font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                      isCenter
                        ? 'bg-[#1E4592] hover:bg-[#153472] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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

      {/* 4. ACTIVE PARTNER QUICK PREVIEW MODAL */}
      {activeModalPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in-50 duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className={`p-6 border-b ${activeModalPartner.accentBg} ${activeModalPartner.accentBorder}`}>
              <button
                onClick={() => setActiveModalPartner(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1 max-w-md">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${activeModalPartner.accentText} block`}
                >
                  {activeModalPartner.categoryLabel} · {activeModalPartner.tag}
                </span>
                <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight">
                  {activeModalPartner.name}
                </h3>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  {activeModalPartner.headline}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-800 text-xs sm:text-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Institutional Scope & Collaboration
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {activeModalPartner.description}
                </p>
              </div>

              {/* Adopted Programs */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592] block">
                  Adopted Curricula & Offerings
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalPartner.adoptedPrograms.map((prog, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#1E4592] shrink-0" />
                      <span className="font-semibold text-slate-800 text-xs">{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Key Institutional Strengths
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalPartner.keyHighlights.map((hl, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-blue-50 text-[#1E4592] text-xs font-semibold"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveModalPartner(null);
                  if (activeModalPartner.targetPage) {
                    onNavigate(activeModalPartner.targetPage);
                  } else {
                    onNavigate('partners');
                  }
                }}
                className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                View Full Curriculum
              </button>

              <button
                onClick={() => {
                  setActiveModalPartner(null);
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal();
                  } else {
                    onNavigate('contact');
                  }
                }}
                className="px-6 py-2.5 bg-[#1E4592] hover:bg-[#153472] text-white rounded-full text-xs font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Sample & Terms</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
