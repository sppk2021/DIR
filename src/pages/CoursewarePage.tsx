import React, { useState } from 'react';
import { CURRICULA_LIST } from '../data/dirData';
import { CurriculumItem, PageId, QuoteItem } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Layers,
  Search,
  Check,
  Plus,
  BookOpen,
  Award,
  Sparkles,
  MonitorCheck,
  FileCheck,
  GraduationCap,
  Info
} from 'lucide-react';

interface CoursewarePageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const CoursewarePage: React.FC<CoursewarePageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<CurriculumItem | null>(null);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const categories = [
    { id: 'all', label: 'All Curricula' },
    { id: 'phonics', label: 'Phonics & Literacy' },
    { id: 'english', label: 'Core English (NatGeo)' },
    { id: 'ict-robotics', label: 'ICT & Computing (ISTE)' },
    { id: 'early-years', label: 'Early Years (Rainbow KG)' }
  ];

  const filteredItems = CURRICULA_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetAudience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddInspection = (item: CurriculumItem) => {
    onAddToQuote({
      id: item.id,
      title: item.title,
      type: 'curriculum',
      publisherOrCategory: item.publisher
    });
    setAddedIds((prev) => new Set(prev).add(item.id));
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        {/* Parallax Background Glow Elements */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-12 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <span className="font-bold uppercase tracking-wider text-orange-400">
                Institutional Courseware
              </span>
              <span aria-hidden="true">·</span>
              <span>B2B Curriculum Adoptions</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              International Courseware for Pre-Schools, Private & K-12 Schools
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Empowering Myanmar educators with globally recognized curricula from Jolly Learning, National Geographic Learning, and Binary Logic. Complete with interactive whiteboard software (CPT), teacher training, and physical inspection copies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Courseware Matcher Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-bold uppercase tracking-wider text-[#1E4592]">
                  Curriculum Filter
                </span>
                <span aria-hidden="true">·</span>
                <span>Match Grade Levels & Syllabi</span>
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                Explore Programs for Your School
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Select your student age group or subject discipline below to filter internationally vetted curricula, complete with interactive whiteboard software (CPT) and teacher resources.
              </p>
            </div>

            {/* Quick Match Badges (unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1 text-emerald-700">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>ISTE SEAL Certified</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-[#1E4592]">
                <FileCheck className="w-4 h-4 text-[#1E4592]" />
                <span>CEFR Aligned (A1–C1)</span>
              </span>
            </div>
          </div>

          {/* Filter and Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none bg-slate-100 p-1 rounded-xl border border-slate-200">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-[#1E4592] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search title, level, or publisher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E4592] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curricula Cards Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={selectedCategory + searchQuery}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((curr) => {
            const isAdded = addedIds.has(curr.id);
            const isJolly = curr.publisher.includes('Jolly');
            const isNatGeo = curr.publisher.includes('National Geographic');

            return (
              <motion.div
                key={curr.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
                }}
                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Card Header & Publisher */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg border ${
                        isJolly
                          ? 'text-[#F15A24] bg-orange-50 border-orange-200'
                          : isNatGeo
                          ? 'text-[#1E4592] bg-blue-50 border-blue-200'
                          : 'text-purple-700 bg-purple-50 border-purple-200'
                      }`}
                    >
                      {curr.publisher}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md font-semibold">
                      {curr.ageRange}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#1E4592] transition-colors">
                    {curr.title}
                  </h3>

                  {/* Badges / CEFR / Levels */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
                    {curr.cefrLevel && (
                      <span className="font-mono font-bold text-[#1E4592] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                        {curr.cefrLevel}
                      </span>
                    )}
                    <span className="font-semibold text-slate-600">{curr.levelsCount} Series Levels</span>
                    {curr.accreditation && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-bold truncate max-w-[140px]">
                          {curr.accreditation}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {curr.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {curr.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveItem(curr)}
                    className="text-xs font-bold text-slate-700 hover:text-[#1E4592] flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#1E4592]" />
                    <span>View Scope</span>
                  </button>

                  <button
                    onClick={() => handleAddInspection(curr)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-[#F15A24] text-white hover:bg-[#D44512] shadow-sm shadow-orange-950/20'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to List</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Request Inspection</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600 font-medium">No curricula matched your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        )}
      </section>

      {/* Teacher Training & Institutional Support Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white p-8 sm:p-12 space-y-8 border border-[#2B4B75] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Institutional Partnership
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Robust Teacher Training & Digital Whiteboard Software
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Adopting a new curriculum requires certified pedagogical support. DIR conducts in-service teacher workshops, provides Classroom Presentation Tools (CPT), and offers continuous academic consultation for private and international schools across Myanmar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <MonitorCheck className="w-4 h-4 text-blue-300 mb-1" />
                  <h4 className="text-xs font-bold text-white">Whiteboard Software</h4>
                  <p className="text-[11px] text-blue-100/80 mt-0.5">Interactive lesson animations & digital audio</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <GraduationCap className="w-4 h-4 text-emerald-300 mb-1" />
                  <h4 className="text-xs font-bold text-white">Certified Workshops</h4>
                  <p className="text-[11px] text-blue-100/80 mt-0.5">Phonics, CEFR methodology & lesson planning</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                  <FileCheck className="w-4 h-4 text-amber-300 mb-1" />
                  <h4 className="text-xs font-bold text-white">Free Inspection Sets</h4>
                  <p className="text-[11px] text-blue-100/80 mt-0.5">Evaluation copies for school academic boards</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-5 bg-white hover:bg-blue-50 text-[#1E3A5F] rounded-xl text-xs font-bold transition-all text-center shadow-xs cursor-pointer"
              >
                Request Free School Inspection Copy
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-all text-center border border-white/20 cursor-pointer"
              >
                Schedule Teacher Training
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Details Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E33]/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {activeItem.publisher}
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto flex-1 text-xs">
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Curriculum Overview
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {activeItem.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Key Features & Methodology
                </h4>
                <ul className="space-y-1.5">
                  {activeItem.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Series Components & Materials
                </h4>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  {activeItem.components.map((comp, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeItem.accreditation && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900">
                  <strong className="block text-[11px] uppercase tracking-wider">Accreditation / Framework:</strong>
                  <span>{activeItem.accreditation}</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleAddInspection(activeItem);
                  setActiveItem(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                Add to Inspection Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
