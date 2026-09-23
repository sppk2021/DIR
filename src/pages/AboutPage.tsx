import React, { useState } from 'react';
import {
  COMPANY_INFO,
  PARENT_GROUP_ENTITIES,
  COMPANY_TIMELINE,
  LEADERSHIP_TEAM
} from '../data/dirData';
import { PageId, TeamMember, TimelineEvent } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Building2,
  Calendar,
  Users,
  Globe2,
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
  ChevronRight,
  GraduationCap,
  Quote,
  X,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -25]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.4]);

  // Timeline interactive state
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number>(2); // Default to 2018 (DIR founding)
  const activeTimelineEvent: TimelineEvent = COMPANY_TIMELINE[selectedTimelineIndex];

  // Team pop-up modal state
  const [activeTeamMember, setActiveTeamMember] = useState<TeamMember | null>(null);

  // Group portfolio filter state
  const [entityFilter, setEntityFilter] = useState<'all' | 'education' | 'logistics' | 'trade'>('all');

  const filteredEntities = PARENT_GROUP_ENTITIES.filter((ent) => {
    if (entityFilter === 'all') return true;
    if (entityFilter === 'education') {
      return ent.sector.toLowerCase().includes('educational') ||
        ent.sector.toLowerCase().includes('edtech') ||
        ent.sector.toLowerCase().includes('stem') ||
        ent.sector.toLowerCase().includes('learning');
    }
    if (entityFilter === 'logistics') {
      return ent.sector.toLowerCase().includes('logistics') || ent.sector.toLowerCase().includes('distribution');
    }
    if (entityFilter === 'trade') {
      return ent.sector.toLowerCase().includes('trading') ||
        ent.sector.toLowerCase().includes('commercial') ||
        ent.sector.toLowerCase().includes('travel');
    }
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner - Light Dark Corporate Navy with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        {/* Parallax Background Glow Element */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-10 bottom-0 w-72 h-72 bg-orange-400/10 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <Building2 className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold uppercase tracking-wider text-orange-400">Corporate Heritage</span>
              <span aria-hidden="true">·</span>
              <span>Leadership & Institutional Governance</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
              Pioneering 21st-Century Education Across Myanmar
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Established in 2018 under the 21-year legacy of Myint Thuka Nadi Co., Ltd, DIR is dedicated to closing Myanmar&apos;s educational gap with world-class curricula, hands-on STEM robotics, and inspiring children&apos;s literature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parent Group Heritage & Dynamic Stat Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
                  Group Overview & Heritage
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500">Established April 28th, 2005</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Myint Thuka Nadi Co., Ltd (A Group of Companies)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded on <strong className="text-slate-900">April 28th, 2005</strong>, Myint Thuka Nadi Co., Ltd has grown into one of Myanmar&apos;s most reliable industrial and educational partners. The group commands proven reliability across diverse industries: chemicals, food & beverage, education, animal health, and logistics.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our growing regional network, diverse services, and deep-rooted values drive our long-term commitment to sustainable partnerships across Myanmar and Southeast Asia.
              </p>
            </div>

            {/* Infographic Metric Pillars */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600 tabular-nums">
                  21+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Years of</div>
                <div className="text-xs text-slate-500">Excellence</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600 tabular-nums">
                  500+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Dedicated</div>
                <div className="text-xs text-slate-500">Employees</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600 tabular-nums">
                  4+
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Regional</div>
                <div className="text-xs text-slate-500">Countries</div>
              </div>
            </div>
          </div>

          {/* Group Sister Companies Filterable Infographic */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  MTKN Group Multidisciplinary Portfolio
                </h3>
                <p className="text-xs text-slate-500">Cross-industry synergy powering educational distribution</p>
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs self-start sm:self-auto">
                <button
                  onClick={() => setEntityFilter('all')}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                    entityFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  All Entities
                </button>
                <button
                  onClick={() => setEntityFilter('education')}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                    entityFilter === 'education' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Education & EdTech
                </button>
                <button
                  onClick={() => setEntityFilter('logistics')}
                  className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                    entityFilter === 'logistics' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Logistics & Retail
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              {filteredEntities.map((ent, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200 flex items-center gap-3 text-xs hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-slate-800 block truncate">{ent.name}</span>
                    <span className="text-slate-500 text-[11px] block truncate">{ent.sector}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature 01: Milestone Journey Timeline (2005 - 2026) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Interactive Timeline · 21 Years of Excellence
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            The Historical Evolution of DIR & MTKN Group
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click on any milestone year to reveal key historical breakthroughs, distribution milestones, and metrics.
          </p>
        </div>

        {/* Timeline Horizontal Year Scroller - Light Dark Corporate Navy */}
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-6 sm:p-10 border border-[#2B4B75] shadow-sm space-y-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/10">
            {COMPANY_TIMELINE.map((event, index) => {
              const isSelected = selectedTimelineIndex === index;
              return (
                <button
                  key={event.year}
                  onClick={() => setSelectedTimelineIndex(index)}
                  className={`px-4 py-2.5 rounded-xl text-left transition-all shrink-0 flex items-center gap-3 border cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#1E3A5F] border-white font-bold shadow-md'
                      : 'bg-white/10 border-white/15 text-blue-100 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <span className="font-mono font-extrabold text-sm sm:text-base">
                    {event.year}
                  </span>
                  <span className="text-xs font-medium hidden sm:inline-block max-w-[120px] truncate">
                    {event.title.split(' ')[0]}...
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  {activeTimelineEvent.milestone}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">Category: {activeTimelineEvent.category.toUpperCase()}</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {activeTimelineEvent.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeTimelineEvent.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {activeTimelineEvent.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-blue-100 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/10 border border-white/15 text-center space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold block">
                Impact Benchmark
              </span>
              <div className="font-display font-bold text-xl text-white">
                {activeTimelineEvent.impactMetrics}
              </div>
              <p className="text-xs text-blue-200/80 pt-2 border-t border-white/10">
                Verified milestone from the official corporate presentation profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature 02: Leadership & Academic Team Showcase with Pop-Up Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Interactive Team Showcase · Click For Detailed Profiles
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Meet the Academic & Operational Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our directors, linguists, and robotics engineers bring over two decades of combined expertise to Myanmar&apos;s schools. Click any profile to inspect qualifications and key quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveTeamMember(member)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all p-6 text-left flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl text-white font-display font-extrabold text-base flex items-center justify-center shadow-xs ${member.avatarBg}`}
                  >
                    {member.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                    <span>Inspect Bio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {member.department}
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-[11px]">
                {member.specialization.slice(0, 2).map((s, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Pop-up Details Modal for Team Member */}
      {activeTeamMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E33]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header - Light Dark Corporate Navy */}
            <div className="p-6 sm:p-8 bg-[#1E3A5F] text-white relative flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl text-white font-display font-extrabold text-xl flex items-center justify-center shadow-lg ${activeTeamMember.avatarBg}`}
                >
                  {activeTeamMember.name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {activeTeamMember.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-blue-400">
                    {activeTeamMember.role}
                  </div>
                  <div className="text-xs text-slate-400">{activeTeamMember.department}</div>
                </div>
              </div>

              <button
                onClick={() => setActiveTeamMember(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-xs sm:text-sm text-slate-600">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Professional Biography
                </h4>
                <p className="leading-relaxed text-slate-700">{activeTeamMember.bio}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Academic Credentials</span>
                  </div>
                  <p className="text-xs text-slate-700">{activeTeamMember.education}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span>Core Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {activeTeamMember.specialization.map((spec, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-blue-100/70 text-blue-800">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Leadership Quote */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 space-y-2">
                <div className="flex items-center gap-1 text-blue-700">
                  <Quote className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">
                    Guiding Perspective
                  </span>
                </div>
                <p className="italic text-xs sm:text-sm text-blue-900 leading-relaxed">
                  &ldquo;{activeTeamMember.keyQuote}&rdquo;
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveTeamMember(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close Profile
              </button>
              <button
                onClick={() => {
                  setActiveTeamMember(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                Connect With Academic Office
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Strategic Mission & Institutional Commitments - Light Dark Corporate Navy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-8 sm:p-12 space-y-8 border border-[#2B4B75] shadow-sm">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Institutional Guiding Principles
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Empowering Client Institutions & Future Generations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    DIR B2B Institutional Mission
                  </h3>
                  <span className="text-xs text-blue-200 font-semibold">Institutional Curriculum Pillar</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                DIR&apos;s core mission is to empower client institutions by delivering reliable, vetted curricula, implementing robust teacher training, and providing the best result-proven curricula for Kids, Pre-Schools, Private Schools, and International Bodies.
              </p>
              <ul className="space-y-2 text-xs text-blue-100/90 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Annual Teacher In-Service Training & Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Free inspection sample copies for curriculum committees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Complete classroom presentation software & audio-visual assets</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Win Digital Learning Hub Mission
                  </h3>
                  <span className="text-xs text-orange-200 font-semibold">STEM & Digital Academy Pillar</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                WDLH&apos;s core mission is to actively bridge the STEM skills gap, ensuring every student is equipped with the competitive advantage necessary for success in the rapidly evolving era, providing a direct pathway for advanced learning beyond the core curriculum.
              </p>
              <ul className="space-y-2 text-xs text-blue-100/90 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Hands-on robotic assembly with real circuit micro-controllers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Progression from visual blocks to text-based Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Accredited curriculum with official ISTE SEAL certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="font-display font-bold text-xl text-slate-900">
          Partner with Myanmar&apos;s Leading Educational Network
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Whether you are an international school principal, preschool administrator, or bookstore owner, DIR is your committed partner in educational excellence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('services')}
            className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
          >
            Explore Services Overview
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            Contact Mayangone Headquarters
          </button>
        </div>
      </section>
    </div>
  );
};
