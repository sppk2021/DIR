import React, { useState } from 'react';
import { WIN_CLASSES } from '../data/dirData';
import { HubClass, PageId, QuoteItem } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Bot,
  Code2,
  Cpu,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Award,
  Plus,
  Check
} from 'lucide-react';

interface DigitalHubPageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const DigitalHubPage: React.FC<DigitalHubPageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'robotics' | 'coding' | 'stem' | 'language'>('all');
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const filteredClasses = WIN_CLASSES.filter((c) => {
    if (selectedFilter === 'all') return true;
    return c.category === selectedFilter;
  });

  const handleEnrollClass = (cls: HubClass) => {
    onAddToQuote({
      id: cls.id,
      title: cls.title,
      type: 'course',
      publisherOrCategory: cls.ageGroup
    });
    setAddedIds((prev) => new Set(prev).add(cls.id));
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner with Parallax */}
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
              <span className="font-bold uppercase tracking-wider text-orange-400">
                Win Digital Learning Hub (WDLH)
              </span>
              <span aria-hidden="true">·</span>
              <span>Weekend STEM & Robotics Academy</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Bridging the STEM & Robotics Skills Gap for Myanmar&apos;s Youth
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Equipping every student with competitive advantages for the digital era. Hands-on weekend classes in mechanical robotics, algorithmic Scratch & Python coding, and interactive STEM labs in Mayangone, Yangon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Mission Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
                Hands-on Pedagogy
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                A Direct Pathway for Practical Learning Beyond Textbooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Win Digital Learning Hub (WDLH) provides interactive and practical learning sessions in a safe, technologically advanced digital environment. Students build physical robots, write working code, and conduct real science inquiries rather than passively watching screens.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                  <Award className="w-4 h-4 text-[#F15A24]" />
                  <span>ISTE Seal Standardized Syllabus</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                  <Cpu className="w-4 h-4 text-[#1E4592]" />
                  <span>1-to-1 Robotic Kits for Every Student</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>Flexible Saturday & Sunday Batches</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-4 bg-[#F15A24] hover:bg-[#D44512] text-white rounded-xl text-xs font-semibold shadow-xs text-center transition-all cursor-pointer"
              >
                Register For Free Weekend Trial Class
              </button>
              <button
                onClick={() => onNavigate('infographics')}
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-semibold border border-slate-200 text-center transition-all cursor-pointer"
              >
                View STEM Skill Tree Infographic
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Class Category Filter & Class Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
              Academic Programs
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
              Explore Our Specialized Weekend Courses
            </h2>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto scrollbar-none self-start sm:self-auto">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'robotics', label: 'Robotics & ICT' },
              { id: 'coding', label: 'Coding (Scratch/Python)' },
              { id: 'stem', label: 'STEM Science Labs' },
              { id: 'language', label: 'Language & Speech' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-white text-[#1E4592] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={selectedFilter}
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
          {filteredClasses.map((cls) => {
            const isAdded = addedIds.has(cls.id);

            return (
              <motion.div
                key={cls.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
                }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Category icon and age */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200/50 uppercase tracking-wider">
                      {cls.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700">
                      {cls.ageGroup}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
                    {cls.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {cls.summary}
                  </p>

                  {/* Schedule & Duration */}
                  <div className="space-y-1.5 py-2 border-y border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="truncate">{cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{cls.duration}</span>
                    </div>
                  </div>

                  {/* Syllabus Points */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Modules
                    </span>
                    {cls.curriculumTopics.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="text-rose-500 font-bold">•</span>
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Level: <strong className="text-slate-800">{cls.level}</strong>
                  </span>
                  <button
                    onClick={() => handleEnrollClass(cls)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white hover:bg-rose-700 shadow-xs'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Registered</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Enroll / Trial</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3-Stage Progression Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-2xl p-8 sm:p-12 space-y-8 border border-[#2B4B75] shadow-sm">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Structured Skill Progression
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              From Curiosity to Code: The WDLH Pathway
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <span className="text-xs font-mono font-bold text-[#FB923C]">Stage 01 · Ages 5–8</span>
              <h3 className="font-display font-bold text-lg text-white">
                Mechanical Exploration & Visual Blocks
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Children assemble physical gears, motors, and track-wheels while learning logical sequences with block commands.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <span className="text-xs font-mono font-bold text-amber-300">Stage 02 · Ages 8–12</span>
              <h3 className="font-display font-bold text-lg text-white">
                Interactive Game Physics & Sensor Robotics
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Programming ultrasonic distance sensors, line-tracking bots, and designing full 2D arcade video games in Scratch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-300">Stage 03 · Ages 12–17</span>
              <h3 className="font-display font-bold text-lg text-white">
                Real Python Code & Computer Science Prep
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Writing authentic syntax, object-oriented concepts, algorithms, and preparing for international high school computing exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
