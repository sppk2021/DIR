import React, { useState } from 'react';
import { PageId, QuoteItem } from '../types';
import { SynergyFlowSection } from '../components/SynergyFlowSection';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  TrendingUp,
  Award,
  Bot,
  Cpu,
  CheckCircle2,
  Sparkles,
  BookOpen
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
  const [selectedCurriculumAge, setSelectedCurriculumAge] = useState<'preschool' | 'primary' | 'secondary'>('primary');
  const [schoolMatcherRole, setSchoolMatcherRole] = useState<'preschool' | 'international' | 'bookstore'>('international');

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner - Clean Strategy First Style Academic Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="font-bold uppercase tracking-wider text-[#1E4592]">Architectural Schematics</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Data & Educational Architecture</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              DIR Modern Infographics & Educational Roadmaps
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the complete architectural blueprint of Digital Information Resources: from corporate synergy and K-12 CEFR learning pathways to nationwide distribution metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infographic 1: Corporate Organization & Established Units */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SynergyFlowSection onNavigateUnit={onNavigate} />
      </section>

      {/* Infographic 2: CEFR & K-12 Curricular Progression Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="font-bold uppercase tracking-wider text-[#1E4592]">
                Pedagogical Architecture
              </span>
              <span aria-hidden="true">·</span>
              <span>CEFR Pre-A1 to C1 Continuum</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              K-12 Curricular Progression & CEFR Mapping
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              DIR provides a seamless educational pathway from early childhood fine-motor readiness to senior secondary Cambridge & IELTS examination readiness.
            </p>
          </div>

          <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            CEFR Aligned Roadmaps
          </div>
        </div>

        <div className="bg-slate-50 text-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {/* Level Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-slate-200/70 rounded-xl max-w-xl mx-auto border border-slate-300/80">
            {[
              { id: 'preschool', label: '1. Preschool & Kindergarten (Ages 3–6)' },
              { id: 'primary', label: '2. Primary School (Ages 6–12)' },
              { id: 'secondary', label: '3. Secondary & Teens (Ages 12–18)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCurriculumAge(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCurriculumAge === tab.id
                    ? 'bg-white text-[#1E4592] font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Display Stage Content */}
          {selectedCurriculumAge === 'preschool' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Foundation Stage · Ages 3–6
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  Rainbow KG Series
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proven curriculum specifically developed for Asian preschools covering English, Mathematics, and Science across three tiers: Rainbow Nursery (12 books), Rainbow K1, and Rainbow K2.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">English 4 Books</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Math 4 Books</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Science 4 Books</span>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-[#F15A24] bg-orange-50 px-2.5 py-1 rounded border border-orange-200">
                  Synthetic Phonics · Ages 4–7
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  Jolly Classroom Software & Readers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive multi-sensory phonics platform for touchscreens and tablets. Teaches 42 letter sounds, actions, and sound blending with audio-visual pronunciation guides.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">42 Letter Sounds</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">CEFR Pre-A1</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Whiteboard Suite</span>
                </div>
              </div>
            </div>
          )}

          {selectedCurriculumAge === 'primary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-[#1E4592] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Core English · Ages 6–12
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  National Geographic Look & Explore
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 7-level communicative series from Starter to Level 6 (CEFR Pre-A1 to B1) connecting young learners with world cultures, wildlife photography, and global citizenship.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">7 Progressive Levels</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">CEFR Pre-A1 to B1</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Video Documentaries</span>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Computing & ICT · Grades 1–6
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  Digital Kids (Binary Logic)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  6 scaffolded stages (Starter, Explorer, Racer, Flyer, Genius, Expert) accredited with the official ISTE SEAL. Covers computer literacy, typing, block programming, and cyber safety.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">ISTE SEAL Certified</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">6 Stages</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Scratch & Lab LMS</span>
                </div>
              </div>
            </div>
          )}

          {selectedCurriculumAge === 'secondary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-[#1E4592] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Secondary English · Ages 12–18
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  New Close-up (NatGeo)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A 5-level series (A2 to B2+) specifically engineered for adolescent critical thinking, global awareness, Cambridge English examinations, and academic IELTS success.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">CEFR A2 to B2+</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Cambridge & IELTS Ready</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Exam Test Packs</span>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-200">
                  Computer Science · Grades 7–12
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  Digital Teens (Binary Logic)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive 6-level computing course (Teens 1 to 6) with ISTE SEAL certification. Deep dive into Python code, database management, algorithms, web design, and cybersecurity.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">ISTE SEAL Certified</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Python & Web Dev</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">Teens 1 to 6</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Infographic 3: STEM Skills Matrix (ISTE Standards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="font-bold uppercase tracking-wider text-[#1E4592]">
                STEM Competency Framework
              </span>
              <span aria-hidden="true">·</span>
              <span>ISTE SEAL Verification</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              21st-Century Tech & Robotics Competency Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Aligned with the International Society for Technology in Education (ISTE) standards to bridge Myanmar&apos;s youth digital divide.
            </p>
          </div>

          <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            4 Core Domains
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E4592] flex items-center justify-center font-bold">
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

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
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

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
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

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
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

      {/* Infographic 4: Interactive Institution Recommendation Engine */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 text-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
                Interactive Recommendation Tool
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                Curriculum Recommendation Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg">
                Select your institution profile to immediately preview the recommended curriculum bundle with component checklists.
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl border border-slate-300/80">
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
                      ? 'bg-white text-[#1E4592] font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-150">
              <div>
                <span className="text-xs font-mono font-bold text-[#1E4592] uppercase tracking-wider block">
                  Recommended Package
                </span>
                <h4 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                  {schoolMatcherRole === 'preschool' && 'Complete Early Years Literacy & Math Bundle'}
                  {schoolMatcherRole === 'international' && 'K-12 Integrated English, ICT & STEM Suite'}
                  {schoolMatcherRole === 'bookstore' && 'U Book Store High-Velocity Retail Distribution Pack'}
                </h4>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 bg-[#1E4592] hover:bg-[#132E66] text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
              >
                Request Quotation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Core Component 1</span>
                <div className="text-[#1E4592] font-semibold text-sm">
                  {schoolMatcherRole === 'preschool' && 'Rainbow Nursery & KG Workbooks'}
                  {schoolMatcherRole === 'international' && 'NatGeo Look / New Close-up'}
                  {schoolMatcherRole === 'bookstore' && 'Dog Man Graphic Novels Series'}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {schoolMatcherRole === 'preschool' && '12-book foundational set for English, Math, and Science.'}
                  {schoolMatcherRole === 'international' && '7-level communicative CEFR courseware with video docs.'}
                  {schoolMatcherRole === 'bookstore' && '#1 bestselling series by Dav Pilkey with high customer turnover.'}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Core Component 2</span>
                <div className="text-[#1E4592] font-semibold text-sm">
                  {schoolMatcherRole === 'preschool' && 'Jolly Classroom Phonics Software'}
                  {schoolMatcherRole === 'international' && 'Digital Kids & Teens (ISTE Seal)'}
                  {schoolMatcherRole === 'bookstore' && 'Hands-On Dominoes & Math Sums'}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {schoolMatcherRole === 'preschool' && 'Interactive whiteboard app with songs, actions and blending.'}
                  {schoolMatcherRole === 'international' && 'Accredited computing syllabus from Primary 1 to Grade 12.'}
                  {schoolMatcherRole === 'bookstore' && 'Tactile activity packs for preschool readiness & early math.'}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 block">Support & Services</span>
                <div className="text-emerald-700 font-semibold text-sm">
                  Full DIR Institutional Support
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
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
