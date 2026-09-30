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
  Pause
} from 'lucide-react';

export interface PartnerSlide {
  id: string;
  name: string;
  shortName: string;
  category: 'publisher' | 'school';
  tag: string;
  cardColor: string; // Vibrant background matching image.png
  accentColor: string;
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
    name: 'JOLLY LEARNING',
    shortName: 'Jolly Learning UK',
    category: 'publisher',
    tag: 'UK · Synthetic Phonics',
    cardColor: '#8B5CF6', // Purple - matching center card in image.png
    accentColor: '#DDD6FE',
    headline: 'World’s #1 Synthetic Phonics & Grammar Curriculum',
    description: 'Empowering children across Myanmar to read and write fluently through multi-sensory synthetic phonics, decodable readers, and Jolly Classroom interactive software.',
    adoptedPrograms: ['Jolly Phonics (Ages 4-7)', 'Jolly Grammar (Ages 7-12)', 'Jolly Classroom Whiteboard CPT', 'Decodable Readers Series'],
    keyHighlights: ['42 Letter Sounds', 'Blending & Tricky Words', 'Interactive Whiteboard Software', 'Teacher TOT Certification'],
    accreditationBadge: 'UK DfE Benchmark Validated',
    visualType: 'phonics',
    targetPage: 'courseware'
  },
  {
    id: 'natgeo-learning',
    name: 'NATGEO LEARNING',
    shortName: 'National Geographic Learning',
    category: 'publisher',
    tag: 'USA · CEFR Pre-A1 to C1',
    cardColor: '#F59E0B', // Warm Amber Gold - matching card 1 in image.png
    accentColor: '#FEF3C7',
    headline: 'Bringing the Real World into Every Myanmar Classroom',
    description: 'Premier global English language and science series featuring world-class National Geographic photography, Explorers in the field, and 21st-century critical thinking.',
    adoptedPrograms: ['Look Series (Primary 1-6)', 'Explore Our World (Pre-K to Gr 6)', 'New Close-up (B1-C1 Teens)', 'Time Zones & Reach Higher'],
    keyHighlights: ['Authentic Global Photography', 'CEFR Benchmarked Standards', 'Real Explorers Videos', 'Classroom Presentation Tools'],
    accreditationBadge: 'CEFR Pre-A1 to C1 Certified',
    visualType: 'natgeo',
    targetPage: 'courseware'
  },
  {
    id: 'binary-logic',
    name: 'BINARY LOGIC',
    shortName: 'Binary Logic Computing',
    category: 'publisher',
    tag: 'ISTE SEAL · Coding & AI',
    cardColor: '#0EA5E9', // Sky Blue - matching far right card in image.png
    accentColor: '#BAE6FD',
    headline: 'Computing, Robotics & Artificial Intelligence for Schools',
    description: 'Award-winning computing curricula validated by the international ISTE SEAL, providing hands-on block coding, Python programming, cybersecurity, and robotics.',
    adoptedPrograms: ['Digital Kids (Starter to Gr 6)', 'Digital Teens (Python & Cloud)', 'ICT Lab Activity Guides', 'ISTE Validated Assessments'],
    keyHighlights: ['Official ISTE SEAL of Alignment', 'Python & Block Programming', 'Cybersecurity & Ethics', 'Cloud LMS Auto-Grader'],
    accreditationBadge: 'Official ISTE SEAL of Alignment',
    visualType: 'binary',
    targetPage: 'digital-hub'
  },
  {
    id: 'scholastic-edu',
    name: 'SCHOLASTIC',
    shortName: 'Scholastic Education',
    category: 'publisher',
    tag: 'USA · Guided Reading',
    cardColor: '#F97316', // Vibrant Orange - matching card 2 in image.png
    accentColor: '#FFEDD5',
    headline: 'Igniting a Lifelong Love for Reading & Literacy',
    description: 'World’s most beloved children’s book publisher, supplying guided reading corner libraries, Dav Pilkey graphic novels, and leveled literacy intervention.',
    adoptedPrograms: ['Guided Reading Leveled Packs', 'Dav Pilkey Dog Man Series', 'Classroom Book Corner Collections', 'Early Literacy Phonics Boxed Sets'],
    keyHighlights: ['Guided Reading Levels A-Z', 'World’s #1 Graphic Novels', 'Classroom Library Management', 'Social-Emotional Learning'],
    accreditationBadge: 'World’s Largest Children’s Publisher',
    visualType: 'scholastic',
    targetPage: 'bookstore'
  },
  {
    id: 'kbtc-school',
    name: 'KBTC INTERNATIONAL',
    shortName: 'KBTC International School',
    category: 'school',
    tag: 'Yangon · 1,500+ Students',
    cardColor: '#10B981', // Emerald Green - matching card 4 in image.png
    accentColor: '#D1FAE5',
    headline: 'Cambridge International Excellence Across Yangon',
    description: 'Flagship British international school in Yangon operating multi-campus primary, secondary, and sixth-form programs with full DIR courseware integration.',
    adoptedPrograms: ['NatGeo Look (Levels 1-6)', 'Jolly Classroom Whiteboard CPT', 'In-Service Teacher Masterclasses', 'Digital Library Setup'],
    keyHighlights: ['1,500+ Enrolled Students', 'Multi-Campus Yangon Network', 'Annual In-Service Masterclasses', 'High Cambridge Checkpoint Pass Rates'],
    accreditationBadge: 'Cambridge Registered School Partner',
    visualType: 'kbtc',
    targetPage: 'partners'
  },
  {
    id: 'cambridge-assessment',
    name: 'CAMBRIDGE',
    shortName: 'Cambridge University Press & Assessment',
    category: 'publisher',
    tag: 'UK · International Exams',
    cardColor: '#1E4592', // DIR Royal Navy
    accentColor: '#DBEAFE',
    headline: 'Global Qualifications & Rigorous Academic Pathways',
    description: 'Authorized distribution of Cambridge Primary, Secondary, and checkpoint examination preparation materials for international and private schools.',
    adoptedPrograms: ['Cambridge Checkpoint Test Prep', 'Global English Stage 1-9', 'Secondary Science Framework', 'Teacher Lesson Guides'],
    keyHighlights: ['Global Benchmark Recognition', 'Scaffolded Primary & Secondary', 'Exam Preparation Packs', 'Diagnostic Assessment Tools'],
    accreditationBadge: 'Cambridge Assessment Recognized',
    visualType: 'cambridge',
    targetPage: 'courseware'
  },
  {
    id: 'ulight-school',
    name: 'ULIGHT ACADEMY',
    shortName: 'ULight International School',
    category: 'school',
    tag: 'Yangon · 900+ Students',
    cardColor: '#E11D48', // Crimson Rose
    accentColor: '#FFE4E6',
    headline: 'Modern Academic Rigor & CEFR Language Mastery',
    description: 'Leading Yangon private academic academy recognized for outstanding academic achievements, bilingual excellence, and certified teacher development.',
    adoptedPrograms: ['NatGeo Time Zones Series', 'New Close-up B1-B2 Series', 'Teacher CPD Workshop Certificates', 'Annual Student Competitions'],
    keyHighlights: ['900+ Enrolled Students', 'CEFR Tested Progression', 'Certified Teacher CPD Workshops', 'Interactive Multimedia Labs'],
    accreditationBadge: 'Premier Academic School Network',
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
      }, 4500);
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

  // Render floating visual asset inside each card
  const renderVisual = (type: PartnerSlide['visualType'], cardColor: string) => {
    switch (type) {
      case 'phonics':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            {/* Soft backdrop glow */}
            <div className="absolute inset-2 bg-white/20 blur-xl rounded-full" />
            {/* Whiteboard screen device */}
            <div className="relative w-44 sm:w-50 h-28 sm:h-32 bg-white rounded-2xl p-2.5 shadow-2xl flex flex-col justify-between border-2 border-white/80 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between border-b border-purple-100 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-[9px] font-black tracking-wider text-purple-700 uppercase">
                  Jolly Classroom
                </span>
              </div>
              {/* Phonics Letter Tiles */}
              <div className="grid grid-cols-4 gap-1.5 py-1">
                {['s', 'a', 't', 'i', 'p', 'n', 'c', 'k'].map((letter, i) => (
                  <div
                    key={i}
                    className="h-6 sm:h-7 rounded-lg bg-purple-50 text-purple-900 font-extrabold text-xs flex items-center justify-center shadow-2xs border border-purple-200/60"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[8.5px] text-purple-600 font-semibold pt-1 border-t border-purple-100">
                <span>Multi-Sensory Phonics</span>
                <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded text-[8px] font-bold">
                  42 Sounds
                </span>
              </div>
            </div>
            {/* Floating Decodable Book in front */}
            <div className="absolute -bottom-2 -right-1 w-20 sm:w-24 h-26 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-xl p-1.5 text-white flex flex-col justify-between border border-white/40 transform rotate-6">
              <span className="text-[7.5px] font-bold tracking-tight uppercase">Jolly Phonics</span>
              <div className="text-center font-black text-xs leading-none">
                Reader <br />
                <span className="text-[9px] font-medium opacity-90">Level 1</span>
              </div>
              <span className="text-[7px] text-amber-100 text-center">Decodable</span>
            </div>
          </div>
        );

      case 'natgeo':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-amber-300/30 blur-xl rounded-full" />
            {/* Yellow National Geographic Bordered Textbook */}
            <div className="relative w-36 sm:w-42 h-32 sm:h-36 bg-[#111827] rounded-xl p-2 shadow-2xl border-4 border-[#F59E0B] flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-4.5 border-2 border-[#F59E0B] bg-transparent" />
                  <span className="text-[8.5px] font-black tracking-wider uppercase text-amber-400">
                    NatGeo
                  </span>
                </div>
                <span className="text-[8px] bg-amber-500/20 text-amber-300 px-1 rounded font-bold">
                  CEFR
                </span>
              </div>
              <div className="space-y-0.5 text-center my-auto">
                <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight block">
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
            {/* Floating Globe Badge */}
            <div className="absolute top-0 -right-2 w-16 h-16 rounded-full bg-white/95 p-1 shadow-xl flex flex-col items-center justify-center border border-amber-300 transform rotate-12">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-[7.5px] font-black text-slate-800 leading-none mt-0.5">
                REAL WORLD
              </span>
            </div>
          </div>
        );

      case 'binary':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-sky-300/30 blur-xl rounded-full" />
            {/* Laptop with Python Code */}
            <div className="relative w-46 sm:w-52 h-28 sm:h-32 bg-[#0F172A] rounded-xl p-2.5 shadow-2xl border border-sky-300/40 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
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
                  <span className="text-sky-300">buildFuture</span>():
                </div>
                <div className="pl-3 text-slate-300">
                  skills = [<span className="text-amber-300">&quot;Coding&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;AI&quot;</span>]
                </div>
                <div className="pl-3 text-sky-400">return skills</div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-400 pt-1 border-t border-slate-700/80">
                <span>ISTE Standard Lab</span>
                <span className="text-emerald-400 font-bold">✓ Executed</span>
              </div>
            </div>
            {/* ISTE SEAL Golden Medal Floating */}
            <div className="absolute -bottom-2 -left-2 w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-1 shadow-xl flex flex-col items-center justify-center text-slate-900 border-2 border-white transform -rotate-12">
              <Award className="w-5 h-5 text-amber-900" />
              <span className="text-[7px] font-black tracking-tighter uppercase leading-none mt-0.5">
                ISTE SEAL
              </span>
            </div>
          </div>
        );

      case 'scholastic':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-orange-300/30 blur-xl rounded-full" />
            {/* Stack of Story Books */}
            <div className="relative w-38 sm:w-44 h-32 sm:h-34 bg-white rounded-2xl p-2.5 shadow-2xl border-2 border-orange-200 flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black tracking-wider text-[#EA580C] uppercase">
                  SCHOLASTIC
                </span>
                <span className="text-[8px] bg-red-100 text-red-700 px-1.5 rounded-full font-bold">
                  Guided Reading
                </span>
              </div>
              <div className="text-center py-1">
                <div className="font-display font-black text-base sm:text-lg text-slate-900 leading-tight">
                  DOG MAN
                </div>
                <span className="text-[9px] text-slate-500 font-medium">Dav Pilkey Series</span>
              </div>
              <div className="flex items-center justify-between text-[8px] text-orange-600 font-bold pt-1 border-t border-orange-100">
                <span>Leveled Readers</span>
                <span className="bg-[#EA580C] text-white px-1.5 py-0.5 rounded text-[7.5px]">
                  Levels A-Z
                </span>
              </div>
            </div>
            {/* Heart Storybook Corner Floating */}
            <div className="absolute -top-1 -right-2 w-14 h-14 rounded-2xl bg-red-500 text-white p-1 shadow-lg flex flex-col items-center justify-center transform rotate-12 border border-white/50">
              <BookOpen className="w-5 h-5" />
              <span className="text-[7.5px] font-bold mt-0.5">LITERACY</span>
            </div>
          </div>
        );

      case 'kbtc':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-emerald-300/30 blur-xl rounded-full" />
            {/* Academic School Crest Card */}
            <div className="relative w-42 sm:w-48 h-30 sm:h-34 bg-[#0F2444] rounded-2xl p-3 shadow-2xl border-2 border-emerald-400/40 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
                <span className="text-[8.5px] font-bold text-emerald-400 uppercase tracking-wider">
                  Cambridge K-12
                </span>
                <span className="text-[8px] bg-amber-400/20 text-amber-300 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                  KBTC
                </div>
                <div className="text-[9px] text-emerald-300 font-medium">
                  International School
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-300 pt-1 border-t border-slate-700">
                <span>1,500+ Students</span>
                <span className="text-emerald-400 font-bold">Look Adopted</span>
              </div>
            </div>
            {/* Graduation Cap Floating */}
            <div className="absolute -bottom-2 -right-1 w-14 h-14 rounded-full bg-white text-[#0F2444] shadow-xl flex flex-col items-center justify-center border-2 border-emerald-500 transform rotate-6">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        );

      case 'cambridge':
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-blue-300/30 blur-xl rounded-full" />
            <div className="relative w-40 sm:w-46 h-30 sm:h-34 bg-[#1E293B] rounded-2xl p-3 shadow-2xl border-2 border-blue-400/40 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
                <span className="text-[8.5px] font-bold text-blue-300 uppercase tracking-wider">
                  Cambridge Assessment
                </span>
                <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1 rounded font-bold">
                  UK
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                  CAMBRIDGE
                </div>
                <div className="text-[9px] text-blue-300 font-medium">
                  Primary & Checkpoint
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] text-slate-300 pt-1 border-t border-slate-700">
                <span>International Exam</span>
                <span className="text-blue-400 font-bold">Standard</span>
              </div>
            </div>
          </div>
        );

      case 'ulight':
      default:
        return (
          <div className="relative w-48 h-36 sm:w-56 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-2 bg-rose-300/30 blur-xl rounded-full" />
            <div className="relative w-42 sm:w-48 h-30 sm:h-34 bg-[#881337] rounded-2xl p-3 shadow-2xl border-2 border-rose-400/40 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between border-b border-rose-900 pb-1.5">
                <span className="text-[8.5px] font-bold text-rose-300 uppercase tracking-wider">
                  Private Academy
                </span>
                <span className="text-[8px] bg-rose-500/20 text-rose-200 px-1 rounded font-bold">
                  Yangon
                </span>
              </div>
              <div className="text-center space-y-0.5 my-auto">
                <div className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                  ULIGHT
                </div>
                <div className="text-[9px] text-rose-200 font-medium">
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
    <div className="relative w-full overflow-hidden py-8 sm:py-12 select-none">
      {/* 1. TOP HEADER & CATEGORY FILTER TABS */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
            Partner Showcase Slider
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Our Global & Institutional Partners
          </h3>
        </div>

        {/* Filter Tabs & AutoPlay Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="p-1 bg-slate-100 rounded-full flex items-center gap-1 border border-slate-200/80">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Partners ({PARTNER_SLIDES.length})
            </button>
            <button
              onClick={() => setFilterCategory('publisher')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'publisher'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Global Publishers
            </button>
            <button
              onClick={() => setFilterCategory('school')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filterCategory === 'school'
                  ? 'bg-[#1E4592] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              School Partners
            </button>
          </div>

          {/* Autoplay Pause / Play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs transition-colors cursor-pointer ${
              isAutoPlaying
                ? 'bg-blue-50 border-blue-200 text-[#1E4592]'
                : 'bg-white border-slate-200 text-slate-500'
            }`}
            title={isAutoPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
            aria-label="Toggle auto-play"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* 2. 3D COVERFLOW STAGE (CSS SLIDER MATCHING UPLOADED IMAGE) */}
      <div className="relative w-full h-[470px] sm:h-[510px] flex items-center justify-center overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-[#1E4592] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous partner"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200/80 flex items-center justify-center hover:bg-[#1E4592] hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next partner"
        >
          <ChevronRight className="w-6 h-6" />
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
              transformStyle = 'translateX(0%) scale(1.08) rotateY(0deg)';
              zIndexStyle = 30;
              opacityStyle = 1;
            } else if (diff === -1) {
              transformStyle = 'translateX(-48%) scale(0.92) rotateY(12deg)';
              zIndexStyle = 20;
              opacityStyle = 0.9;
            } else if (diff === 1) {
              transformStyle = 'translateX(48%) scale(0.92) rotateY(-12deg)';
              zIndexStyle = 20;
              opacityStyle = 0.9;
            } else if (diff === -2) {
              transformStyle = 'translateX(-86%) scale(0.8) rotateY(22deg)';
              zIndexStyle = 10;
              opacityStyle = 0.65;
            } else if (diff === 2) {
              transformStyle = 'translateX(86%) scale(0.8) rotateY(-22deg)';
              zIndexStyle = 10;
              opacityStyle = 0.65;
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
                className="absolute w-[270px] sm:w-[310px] h-[400px] sm:h-[440px] rounded-[32px] sm:rounded-[38px] p-5 sm:p-6 text-white transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between shadow-2xl select-none"
              >
                {/* Background Solid Color matching image.png */}
                <div
                  className="absolute inset-0 rounded-[32px] sm:rounded-[38px] z-0 overflow-hidden shadow-2xl"
                  style={{ backgroundColor: slide.cardColor }}
                >
                  {/* Subtle top gloss highlight */}
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* 1. TOP BAR: HEART & SHARE ICONS (matching image.png) */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Heart / Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(slide.id, e)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                    aria-label="Add to favorites"
                    title={isFavorite ? 'Bookmarked' : 'Bookmark partner'}
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform active:scale-125 ${
                        isFavorite ? 'fill-red-500 text-red-500' : 'stroke-[2.2]'
                      }`}
                    />
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={(e) => handleShare(slide, e)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-colors cursor-pointer relative"
                    aria-label="Share partner"
                    title="Copy share link"
                  >
                    {isCopied ? (
                      <Check className="w-5 h-5 text-emerald-300 stroke-[3]" />
                    ) : (
                      <Share2 className="w-5 h-5 stroke-[2.2]" />
                    )}
                  </button>
                </div>

                {/* 2. CENTER FLOATING GRAPHIC ASSET */}
                <div className="relative z-10 my-auto flex items-center justify-center py-2">
                  {renderVisual(slide.visualType, slide.cardColor)}
                </div>

                {/* 3. BOTTOM INFO & WHITE PILL ACTION BUTTON */}
                <div className="relative z-10 space-y-3">
                  {/* Title & Tag Row */}
                  <div className="flex items-end justify-between gap-2">
                    <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase drop-shadow-xs truncate">
                      {slide.name}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white/90 tracking-tight shrink-0 drop-shadow-xs">
                      {slide.tag}
                    </span>
                  </div>

                  {/* White Pill Action Button with Plus Icon (Exact match to image.png!) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalPartner(slide);
                    }}
                    className="w-full py-2.5 sm:py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-slate-900 stroke-[2.5]" />
                    <span>Explore Programs</span>
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
                ? 'w-8 h-2.5 bg-[#1E4592]'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* 4. ACTIVE PARTNER QUICK PREVIEW MODAL */}
      {activeModalPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in-50 duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header with partner branding color */}
            <div
              className="p-6 text-white relative overflow-hidden"
              style={{ backgroundColor: activeModalPartner.cardColor }}
            >
              <button
                onClick={() => setActiveModalPartner(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 max-w-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                  {activeModalPartner.tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {activeModalPartner.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 pt-1 leading-relaxed">
                  {activeModalPartner.headline}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs sm:text-sm">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Collaboration Overview
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {activeModalPartner.description}
                </p>
              </div>

              {/* Adopted Programs */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592] block">
                  Flagship Curricula & Programs
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalPartner.adoptedPrograms.map((prog, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-[#1E4592] shrink-0" />
                      <span className="font-semibold text-slate-800 text-xs">{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Key Advantages & Benchmarks
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalPartner.keyHighlights.map((hl, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1E4592] text-xs font-semibold"
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
                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                View Full Catalog
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
                <span>Request Inspection / Partner Terms</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
