import React, { useState } from 'react';
import { COMPANY_INFO, CURRICULA_LIST } from '../data/dirData';
import { PageId, QuoteItem } from '../types';
import { MTKNOfficialLogo, DIREmblemLogo } from '../components/OfficialLogos';
import { SynergyFlowSection } from '../components/SynergyFlowSection';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  TrendingUp,
  Layers,
  Award,
  Sparkles,
  Bot,
  BookOpen,
  Building2,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Compass,
  GraduationCap,
  Cpu,
  BarChart3
} from 'lucide-react';

interface InfographicsPageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const InfographicsPage: React.FC<InfographicsPageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [activeEcosystemUnit, setActiveEcosystemUnit] = useState<'dir' | 'ubs' | 'wdlh'>('dir');
  const [selectedCurriculumAge, setSelectedCurriculumAge] = useState<'preschool' | 'primary' | 'secondary'>('primary');
  const [schoolMatcherRole, setSchoolMatcherRole] = useState<'preschool' | 'international' | 'bookstore'>('international');

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner - Corporate Navy with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-12 bottom-0 w-80 h-80 bg-orange-400/15 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <BarChart3 className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold uppercase tracking-wider text-orange-400">Architectural Schematics</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Data & Educational Architecture</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              DIR Modern Infographics & Educational Roadmaps
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Explore the complete architectural blueprint of Digital Information Resources: from corporate synergy and K-12 CEFR learning pathways to nationwide distribution metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Synergy Flow Animation Section (Consulting Flow Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <SynergyFlowSection />
      </section>

      {/* Infographic 1: Group Synergy Ecosystem Tree */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Corporate Topology & Synergy Flow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            The DIR Group Ecosystem
          </h2>
          <p className="text-sm text-slate-600">
            Click on any strategic business unit below to inspect operational responsibilities, targets, and official distribution channels.
          </p>
        </div>

        {/* Visual Architecture Tree */}
        <div className="bg-gradient-to-b from-white via-slate-50/60 to-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Parent Node - Light Dark Corporate Navy */}
          <div className="max-w-lg mx-auto text-center p-6 rounded-3xl bg-gradient-to-br from-[#1E3A5F] via-[#1A3356] to-[#12243F] text-white border border-[#2B4B75] shadow-2xl relative group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
              Parent Holding Group
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                <MTKNOfficialLogo size={36} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  Est. April 28th, 2005
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                  MYINT THUKA NADI CO., LTD
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-xs text-blue-200 mt-4 pt-3 border-t border-white/10 font-medium">
              <span className="flex items-center gap-1">✨ 21+ Years Excellence</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">👥 500+ Staff</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">🌐 4+ Countries</span>
            </div>
          </div>

          {/* Connecting Glowing Trunk Line */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-1 h-10 bg-gradient-to-b from-[#1E3A5F] to-blue-600 rounded-full animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm -mt-1" />
          </div>

          {/* Intermediate Core Node: DIR */}
          <div className="max-w-xl mx-auto text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-900/90 to-[#1E4592] text-white border-2 border-blue-400/50 shadow-2xl relative group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest shadow-sm">
              Central Educational Entity · Est. 2018
            </div>
            <div className="flex flex-col items-center mt-2">
              <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-inner flex items-center justify-center mb-3">
                <DIREmblemLogo size={42} />
              </div>
              <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                Digital Information Resources Co., Ltd (DIR)
              </h4>
              <p className="text-xs text-blue-100 mt-2 max-w-md mx-auto leading-relaxed">
                Delivering international curriculum standards, digital whiteboard solutions, and comprehensive educational operations across Myanmar.
              </p>
            </div>
          </div>

          {/* 3 Branch Connector Lines with Gradient Pulse */}
          <div className="hidden md:flex justify-center items-center py-2">
            <div className="w-3/4 h-1 bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 rounded-full relative shadow-sm">
              <div className="absolute left-0 -top-3 w-1 h-6 bg-blue-600 rounded-full" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-1 h-6 bg-orange-500 rounded-full" />
              <div className="absolute right-0 -top-3 w-1 h-6 bg-amber-500 rounded-full" />
            </div>
          </div>

          {/* Interactive Unit Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Unit A: DIR Courseware */}
            <button
              onClick={() => setActiveEcosystemUnit('dir')}
              className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                activeEcosystemUnit === 'dir'
                  ? 'border-blue-600 bg-gradient-to-b from-blue-50/80 to-white shadow-xl ring-4 ring-blue-600/10 scale-[1.02]'
                  : 'border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700">
                    Business Unit 01
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    B2B
                  </span>
                </div>
                <h4 className="font-display font-black text-lg text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                  DIR Courseware
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Dedicated B2B institutional provider for Pre-schools, Private & International Schools.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                <span>Jolly · NatGeo · Binary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Unit B: U Book Store */}
            <button
              onClick={() => setActiveEcosystemUnit('ubs')}
              className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                activeEcosystemUnit === 'ubs'
                  ? 'border-amber-500 bg-gradient-to-b from-amber-50/80 to-white shadow-xl ring-4 ring-amber-500/10 scale-[1.02]'
                  : 'border-slate-200/90 bg-white hover:border-amber-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-amber-100 text-amber-700">
                    Business Unit 02
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    B2B & B2C
                  </span>
                </div>
                <h4 className="font-display font-black text-lg text-slate-900 mt-4 group-hover:text-amber-600 transition-colors">
                  U Book Store (UBS)
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  One-stop kids books and activities tools distributor to families and 50+ retail bookstores.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Dog Man · Stories · Dominoes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Unit C: Win Digital Learning Hub */}
            <button
              onClick={() => setActiveEcosystemUnit('wdlh')}
              className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                activeEcosystemUnit === 'wdlh'
                  ? 'border-rose-500 bg-gradient-to-b from-rose-50/80 to-white shadow-xl ring-4 ring-rose-500/10 scale-[1.02]'
                  : 'border-slate-200/90 bg-white hover:border-rose-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-rose-100 text-rose-700">
                    Business Unit 03
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    Academy
                  </span>
                </div>
                <h4 className="font-display font-black text-lg text-slate-900 mt-4 group-hover:text-rose-600 transition-colors">
                  Win Digital Learning Hub
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Empowering children with essential STEM, robotics, and coding skills in practical weekend sessions.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-700">
                <span>Robotics · Scratch · Python</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Unit Deep-Dive Drawer - Sleek Glassmorphism */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
                <h4 className="font-display font-bold text-sm text-white">
                  {activeEcosystemUnit === 'dir' && 'Unit Focus: DIR Courseware Co., Ltd (B2B Institutional)'}
                  {activeEcosystemUnit === 'ubs' && 'Unit Focus: U Book Store (B2B Wholesale & Retail Distribution)'}
                  {activeEcosystemUnit === 'wdlh' && 'Unit Focus: Win Digital Learning Hub (Weekend STEM & Coding Labs)'}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Active Focus</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="space-y-1">
                <strong className="block text-amber-400 font-bold uppercase tracking-wider text-[10px]">Primary Objective</strong>
                <p className="leading-relaxed text-slate-200">
                  {activeEcosystemUnit === 'dir' && 'Empower client institutions with reliable, vetted curricula, teacher training, and interactive smart whiteboards.'}
                  {activeEcosystemUnit === 'ubs' && 'Curate and distribute high-engagement reading books, comic novels, and tactile activity tools to families.'}
                  {activeEcosystemUnit === 'wdlh' && 'Bridge the STEM skill gap and provide practical hands-on pathways for 21st-century technological fluency.'}
                </p>
              </div>
              <div className="space-y-1">
                <strong className="block text-amber-400 font-bold uppercase tracking-wider text-[10px]">Key Beneficiaries</strong>
                <p className="leading-relaxed text-slate-200">
                  {activeEcosystemUnit === 'dir' && 'Private Schools, International Academies, Preschools, and Teachers.'}
                  {activeEcosystemUnit === 'ubs' && '50+ Bookstore Partners, Toy Centers, Parents, and Young Readers.'}
                  {activeEcosystemUnit === 'wdlh' && 'Students Ages 5–17 in Yangon seeking hands-on STEM and coding expertise.'}
                </p>
              </div>
              <div className="space-y-1">
                <strong className="block text-amber-400 font-bold uppercase tracking-wider text-[10px]">Flagship Series</strong>
                <p className="leading-relaxed text-slate-200">
                  {activeEcosystemUnit === 'dir' && 'Jolly Classroom CPT, NatGeo Look, Digital Kids & Teens (ISTE Accredited).'}
                  {activeEcosystemUnit === 'ubs' && 'Dav Pilkey Dog Man, 101 Crafty Stories, Science Weather Safari.'}
                  {activeEcosystemUnit === 'wdlh' && 'Mechanical Robotics, Scratch Game Design, Python Data Science Labs.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic 2: CEFR & K-12 Curricular Progression Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Infographic 02 · Pedagogical Architecture
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Complete K-12 Curricular Progression & CEFR Mapping
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            DIR provides a seamless educational pathway from early childhood fine-motor readiness to senior secondary Cambridge & IELTS examination readiness.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-6 sm:p-10 border border-[#2B4B75] shadow-sm space-y-8">
          {/* Level Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'preschool', label: '1. Preschool & Kindergarten (Ages 3–6)' },
              { id: 'primary', label: '2. Primary School (Ages 6–12)' },
              { id: 'secondary', label: '3. Secondary & Teens (Ages 12–18)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCurriculumAge(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedCurriculumAge === tab.id
                    ? 'bg-white text-[#1E3A5F] font-bold shadow-md'
                    : 'bg-white/10 text-blue-100 hover:text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Display Stage Content */}
          {selectedCurriculumAge === 'preschool' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-300">Foundation Stage · Ages 3–6</span>
                <h3 className="font-display font-bold text-xl text-white">Rainbow KG Series</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Proven curriculum specifically developed for Asian preschools covering English, Mathematics, and Science across three tiers: Rainbow Nursery (12 books), Rainbow K1, and Rainbow K2.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">English 4 Books</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Math 4 Books</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Science 4 Books</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-orange-300">Synthetic Phonics · Ages 4–7</span>
                <h3 className="font-display font-bold text-xl text-white">Jolly Classroom Software</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Interactive multi-sensory phonics platform for touchscreens and tablets. Teaches 42 letter sounds, actions, and sound blending with audio-visual pronunciation guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">42 Letter Sounds</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">CEFR Pre-A1</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Whiteboard Suite</span>
                </div>
              </div>
            </div>
          )}

          {selectedCurriculumAge === 'primary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-blue-200">Core English · Ages 6–12</span>
                <h3 className="font-display font-bold text-xl text-white">National Geographic Look & Explore</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  A 7-level communicative series from Starter to Level 6 (CEFR Pre-A1 to B1) connecting young learners with world cultures, wildlife photography, and global citizenship.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">7 Progressive Levels</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">CEFR Pre-A1 to B1</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Video Documentaries</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-300">Computing & ICT · Grades 1–6</span>
                <h3 className="font-display font-bold text-xl text-white">Digital Kids (Binary Logic)</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  6 scaffolded stages (Starter, Explorer, Racer, Flyer, Genius, Expert) accredited with the official ISTE SEAL. Covers computer literacy, typing, block programming, and cyber safety.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">ISTE SEAL Certified</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">6 Stages</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Scratch & Lab LMS</span>
                </div>
              </div>
            </div>
          )}

          {selectedCurriculumAge === 'secondary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-300">Secondary English · Ages 12–18</span>
                <h3 className="font-display font-bold text-xl text-white">New Close-up (NatGeo)</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  A 5-level series (A2 to B2+) specifically engineered for adolescent critical thinking, global awareness, Cambridge English examinations, and academic IELTS success.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">CEFR A2 to B2+</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Cambridge & IELTS Ready</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Exam Test Packs</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                <span className="text-xs font-mono font-bold text-indigo-300">Computer Science · Grades 7–12</span>
                <h3 className="font-display font-bold text-xl text-white">Digital Teens (Binary Logic)</h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Comprehensive 6-level computing course (Teens 1 to 6) with ISTE SEAL certification. Deep dive into Python code, database management, algorithms, web design, and cybersecurity.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">ISTE SEAL Certified</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Python & Web Dev</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-blue-100">Teens 1 to 6</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Infographic 3: STEM Skills Matrix (ISTE Standards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Infographic 03 · STEM Competency Framework
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            21st-Century Tech & Robotics Competency Matrix
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Aligned with the International Society for Technology in Education (ISTE) standards to bridge Myanmar&apos;s youth digital divide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Robotics & Mechanics
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gear ratios, pneumatic actuators, infrared proximity sensors, and micro-controller assembly.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              1-to-1 Physical Hardware Kits
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Algorithmic Logic
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Decomposition, pattern recognition, conditional loops, variables, and iterative code debugging.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Scratch & Blockly Foundations
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Authentic Python
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real syntax, object-oriented principles, data structures, and algorithmic automation tools.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Secondary Computing Mastery
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Digital Citizenship
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cybersecurity protocols, data privacy, responsible digital media usage, and ethics.
            </p>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Official ISTE SEAL Framework
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Institution Bundle Matcher Tool - Light Dark Corporate Navy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-8 sm:p-12 border border-[#2B4B75] shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Interactive Recommendation Tool
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                Curriculum Recommendation Engine
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-lg">
                Select your institution profile to immediately preview the recommended curriculum bundle with component checklists.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-white/10 rounded-xl border border-white/15">
              {[
                { id: 'preschool', label: 'Preschool / Nursery' },
                { id: 'international', label: 'K-12 School' },
                { id: 'bookstore', label: 'Retail Bookstore' }
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSchoolMatcherRole(role.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    schoolMatcherRole === role.id
                      ? 'bg-white text-[#1E3A5F] font-bold shadow-xs'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-white/10 rounded-2xl p-6 border border-white/15 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Recommended Package
                </span>
                <h4 className="font-display font-bold text-xl text-white mt-0.5">
                  {schoolMatcherRole === 'preschool' && 'Complete Early Years Literacy & Math Bundle'}
                  {schoolMatcherRole === 'international' && 'K-12 Integrated English, ICT & STEM Suite'}
                  {schoolMatcherRole === 'bookstore' && 'U Book Store High-Velocity Retail Distribution Pack'}
                </h4>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 bg-white hover:bg-blue-50 text-[#1E3A5F] text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer self-start sm:self-auto"
              >
                Request Quotation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
                <span className="font-bold text-white block">Core Component 1</span>
                <div className="text-blue-200 font-semibold text-sm">
                  {schoolMatcherRole === 'preschool' && 'Rainbow Nursery & KG Workbooks'}
                  {schoolMatcherRole === 'international' && 'NatGeo Look / New Close-up'}
                  {schoolMatcherRole === 'bookstore' && 'Dog Man Graphic Novels Series'}
                </div>
                <p className="text-blue-100 text-[11px] leading-relaxed">
                  {schoolMatcherRole === 'preschool' && '12-book foundational set for English, Math, and Science.'}
                  {schoolMatcherRole === 'international' && '7-level communicative CEFR courseware with video docs.'}
                  {schoolMatcherRole === 'bookstore' && '#1 bestselling series by Dav Pilkey with high customer turnover.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
                <span className="font-bold text-white block">Core Component 2</span>
                <div className="text-blue-200 font-semibold text-sm">
                  {schoolMatcherRole === 'preschool' && 'Jolly Classroom Phonics Software'}
                  {schoolMatcherRole === 'international' && 'Digital Kids & Teens (ISTE Seal)'}
                  {schoolMatcherRole === 'bookstore' && 'Hands-On Dominoes & Math Sums'}
                </div>
                <p className="text-blue-100 text-[11px] leading-relaxed">
                  {schoolMatcherRole === 'preschool' && 'Interactive whiteboard app with songs, actions and blending.'}
                  {schoolMatcherRole === 'international' && 'Accredited computing syllabus from Primary 1 to Grade 12.'}
                  {schoolMatcherRole === 'bookstore' && 'Tactile activity packs for preschool readiness & early math.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 space-y-2">
                <span className="font-bold text-white block">Support & Services</span>
                <div className="text-emerald-300 font-semibold text-sm">
                  Full DIR Institutional Support
                </div>
                <p className="text-blue-100 text-[11px] leading-relaxed">
                  Includes teacher lesson planners, teacher training workshops, inspection copies, and Mayangone local stock delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
