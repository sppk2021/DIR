import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO } from '../data/dirData';
import { PageId, QuoteItem } from '../types';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { HomeImageCarousel } from '../components/HomeImageCarousel';
import { PartnerLogoCarousel } from '../components/PartnerLogoCarousel';
import { SynergyFlowSection } from '../components/SynergyFlowSection';
import { SectionDivider } from '../components/SectionDivider';
import { HomePageSkeleton } from '../components/HomePageSkeleton';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Bot,
  Layers,
  Award,
  ChevronRight,
  Building2,
  ShieldCheck,
  Search,
  GraduationCap,
  Store,
  Users,
  CheckCircle2,
  FileText,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 500], [0, 30]);
  const heroBgY = useTransform(scrollY, [0, 500], [0, -40]);
  const heroCardY = useTransform(scrollY, [0, 500], [0, 20]);

  useEffect(() => {
    // Smooth skeleton reveal transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    if (q.includes('robot') || q.includes('code') || q.includes('python') || q.includes('scratch') || q.includes('stem')) {
      onNavigate('digital-hub');
    } else if (q.includes('dog') || q.includes('man') || q.includes('book') || q.includes('toy') || q.includes('domino')) {
      onNavigate('bookstore');
    } else {
      onNavigate('courseware');
    }
  };

  const quickSearchTags = [
    { label: 'Jolly Phonics', page: 'courseware' as PageId },
    { label: 'NatGeo Look', page: 'courseware' as PageId },
    { label: 'Binary Logic Computing', page: 'courseware' as PageId },
    { label: 'STEM Robotics Lab', page: 'digital-hub' as PageId },
    { label: 'Dav Pilkey Books', page: 'bookstore' as PageId },
    { label: 'Teacher Training', page: 'services' as PageId }
  ];

  if (isLoading) {
    return (
      <div className="animate-in fade-in duration-300">
        <HomePageSkeleton />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 sm:space-y-24 pb-16 overflow-hidden"
    >
      {/* 1. Main Visual Gallery Carousel (Education in Action) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8">
          <HomeImageCarousel onNavigate={onNavigate} />
        </section>
      </motion.div>

      <SectionDivider type="wave" />

      {/* 2. Hero Section: Clean, Authoritative & Useful with Multi-Layer Parallax */}
      <div className="relative overflow-hidden">
        {/* Parallax background ambient glow elements */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-20 bottom-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"
        />

        <section className="bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 border-y border-slate-200 py-12 sm:py-20 relative z-10">
          <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Mission, Value & Direct Search */}
              <motion.div
                style={{ y: heroContentY }}
                className="lg:col-span-7 space-y-6"
              >
                {/* Unboxed Header Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1E4592] font-bold">DIR Education Group</span>
                  <span aria-hidden="true">·</span>
                  <span>Established 2018</span>
                  <span aria-hidden="true">·</span>
                  <span>Member of Myint Thuka Nadi Group (Est. 2005)</span>
                  <span aria-hidden="true">·</span>
                  <span>Yangon, Myanmar</span>
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] text-balance">
                  International Curricula, Children&apos;s Books & STEM Education in Myanmar
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Digital Information Resources (DIR) provides world-standard curricula from Jolly Learning, National Geographic Learning, and Binary Logic, operates nationwide distribution through U Book Store, and runs hands-on robotics education at Win Digital Learning Hub.
                </p>

                {/* Instant Search Bar for High Everyday Utility */}
                <form onSubmit={handleSearchSubmit} className="space-y-2 max-w-xl">
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Jolly Phonics, NatGeo Look, Dav Pilkey, STEM courses..."
                      className="w-full pl-10 pr-28 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E4592] focus:border-[#1E4592] shadow-2xs transition-all"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 px-3.5 py-2 bg-[#1E4592] hover:bg-[#163570] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-500">
                    <span className="font-medium text-slate-400">Popular:</span>
                    {quickSearchTags.map((t, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onNavigate(t.page)}
                        className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#1E4592] hover:border-slate-300 transition-colors cursor-pointer text-xs"
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </form>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('courseware')}
                    className="px-5 py-3 bg-[#F15A24] hover:bg-[#D44512] text-white font-semibold text-sm rounded-xl transition-all shadow-xs hover:shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Courseware Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="px-5 py-3 bg-white text-slate-800 hover:text-[#1E4592] font-semibold text-sm rounded-xl transition-all border border-slate-300 hover:border-slate-400 shadow-2xs flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#1E4592]" />
                    <span>Request Inspection Copy</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-3 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
                  >
                    Contact Yangon Office
                  </button>
                </div>

                {/* Key Quantitative Proof (Tabular figures, clean unboxed presentation) */}
                <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg">
                  <div>
                    <div className="font-mono font-bold text-2xl text-slate-900 tabular-nums">21+</div>
                    <div className="text-xs text-slate-500 mt-0.5">Years Group Heritage</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-2xl text-slate-900 tabular-nums">50+</div>
                    <div className="text-xs text-slate-500 mt-0.5">School & Retail Partners</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-2xl text-slate-900 tabular-nums">100+</div>
                    <div className="text-xs text-slate-500 mt-0.5">Teachers Trained / Year</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Clean Corporate Directory Card with Parallax Depth */}
              <motion.div
                style={{ y: heroCardY }}
                className="lg:col-span-5"
              >
                <div className="rounded-xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
                        Integrated Structure
                      </h2>
                      <h3 className="font-display font-bold text-lg text-slate-900 mt-0.5">
                        Three Specialized Divisions
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Yangon Hub</span>
                  </div>

                  <div className="space-y-3">
                    {/* Division 1 */}
                    <div
                      onClick={() => onNavigate('courseware')}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-[#1E4592] hover:bg-blue-50/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-blue-50 text-[#1E4592] group-hover:bg-[#1E4592] group-hover:text-white transition-colors">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1E4592] transition-colors">
                              DIR Courseware
                            </h4>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E4592] group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Institutional partner for Jolly Phonics, NatGeo & Binary Logic with CPT software.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Division 2 */}
                    <div
                      onClick={() => onNavigate('bookstore')}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-[#F15A24] hover:bg-orange-50/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-orange-50 text-[#F15A24] group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
                          <Store className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#F15A24] transition-colors">
                              U Book Store (UBS)
                            </h4>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F15A24] group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Distributor of kids books, Dav Pilkey Dog Man & educational activity packs.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Division 3 */}
                    <div
                      onClick={() => onNavigate('digital-hub')}
                      className="p-3.5 rounded-xl border border-slate-200/80 hover:border-indigo-600 hover:bg-indigo-50/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              Win Digital Learning Hub
                            </h4>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Weekend hands-on STEM robotics, Scratch & Python classes for ages 5–17.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Parent Group: Myint Thuka Nadi</span>
                    <button
                      onClick={() => onNavigate('about')}
                      className="text-[#1E4592] hover:text-[#F15A24] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>View Corporate History</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <SectionDivider type="curve" />

      {/* 3. User Needs Navigator: Modern, Concrete & Useful for All Stakeholders */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
            Educational Pathways
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
            How Can DIR Support You Today?
          </h2>
          <p className="text-slate-600 text-sm mt-1.5">
            Select your role to quickly find relevant resources, curricula, and services tailored to your goals.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Pathway 1: School Leaders */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#1E4592] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E4592] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                School Principals & Directors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adopt international curricula (Jolly Phonics, NatGeo, Binary Logic), arrange school-wide teacher training, and test Jolly Classroom software.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Curriculum adoption audits</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free inspection sample sets</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('courseware')}
              className="mt-5 w-full py-2.5 px-3 bg-blue-50 hover:bg-[#1E4592] text-[#1E4592] hover:text-white font-semibold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Explore Curricula</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Pathway 2: Teachers */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#1E4592] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Teachers & Educators
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access certified phonics articulation workshops, lesson pacing guides, teacher manuals, and interactive whiteboard digital tools.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>In-service masterclasses</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Teacher guides & flashcards</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-5 w-full py-2.5 px-3 bg-purple-50 hover:bg-purple-700 text-purple-700 hover:text-white font-semibold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Teacher Training</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Pathway 3: Parents & Students */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#1E4592] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F15A24] flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Parents & Students
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enroll in Saturday and Sunday hands-on STEM classes in Yangon. Mechanical robotics kits, Scratch coding, and Python computer science.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Ages 5–17 progressive levels</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1-to-1 physical robotics kits</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('digital-hub')}
              className="mt-5 w-full py-2.5 px-3 bg-orange-50 hover:bg-[#F15A24] text-[#F15A24] hover:text-white font-semibold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Weekend STEM Hub</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Pathway 4: Retailers */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#1E4592] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Bookstores & Retailers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wholesale distribution of bestselling children&apos;s fiction (Dav Pilkey), tactile math toys, and activity sets with direct Yangon fulfillment.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dav Pilkey official supply</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Fast shipping across 50+ stores</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('bookstore')}
              className="mt-5 w-full py-2.5 px-3 bg-amber-50 hover:bg-amber-600 text-amber-700 hover:text-white font-semibold text-xs rounded-xl transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Bookstore Catalog</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Three Core Business Units: Clean Editorial Deep Dive */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-t border-slate-200 pt-12 sm:pt-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
              Corporate Divisions
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Three Specialized Units Under DIR Group
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">
              Operating with unified standards across B2B curriculum publishing, national book logistics, and student STEM training.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.05 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {COMPANY_INFO.businessUnits.map((unit) => {
              return (
                <motion.div
                  key={unit.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        {unit.shortName}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {unit.role.includes('B2B') ? 'B2B Institutional' : unit.role.includes('B2C') ? 'Wholesale & Retail' : 'Weekend Academy'}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#1E4592] transition-colors">
                      {unit.tagline}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {unit.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <strong className="text-slate-700 block mb-0.5">Primary Audience:</strong>
                      <span>{unit.target}</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">
                      {unit.metrics}
                    </span>
                    <button
                      onClick={() => {
                        if (unit.id === 'dir-courseware') onNavigate('courseware');
                        else if (unit.id === 'u-book-store') onNavigate('bookstore');
                        else onNavigate('digital-hub');
                      }}
                      className="text-xs font-bold text-[#1E4592] group-hover:text-[#F15A24] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. Parent Company Heritage: Myint Thuka Nadi Group (2005) - Light Dark Corporate Navy */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-xl bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white p-8 sm:p-12 border border-[#2B4B75] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Parent Conglomerate Heritage · MTKN Group</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Backed by Myint Thuka Nadi Co., Ltd (MTKN Group)
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
                Founded on April 28th, 2005, Myint Thuka Nadi Co., Ltd is one of Myanmar&apos;s most established trading and logistics groups. Operating across chemicals, food & beverage, animal health, and educational resources, MTKN provides DIR with resilient financial standing, nationwide logistics warehouses, and institutional governance across Myanmar and Southeast Asia.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-100">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>21+ Years Experience</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">
                  <Award className="w-4 h-4 text-blue-200" />
                  <span>500+ Group Staff</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15">
                  <span>Yangon Headquartered · 4+ Country Partnerships</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-start lg:justify-end gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-3 bg-white hover:bg-blue-50 text-[#1E3A5F] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Group Background</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner Network: Institutional Logos & Verification */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <PartnerLogoCarousel onNavigate={onNavigate} />
      </section>

      {/* 7. Testimonials Carousel */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <TestimonialCarousel
          title="What Schools, Teachers & Students Say"
          subtitle="Real outcomes from educators adopting Jolly Phonics, English language programs, and hands-on STEM robotics classes."
        />
      </section>

      {/* 8. Bottom Action Banner: Clear Inspection Request & Contact */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-slate-50 rounded-xl p-8 sm:p-10 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              Request Inspection Copies or Plan Curriculum Review
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide complimentary examination copies to school principals, academic coordinators, and department heads across Myanmar. Contact our Yangon office or request a sample directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-[#F15A24] hover:bg-[#D44512] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Request Inspection Copy
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              Contact Head Office
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

