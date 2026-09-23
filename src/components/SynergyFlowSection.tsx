import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Layers, BookOpen, Bot, Store, Activity, CheckCircle2 } from 'lucide-react';
import { MTKNOfficialLogo, DIREmblemLogo, UBookStoreOfficialLogo, WinLearningHubOfficialLogo } from './OfficialLogos';

/**
 * Synergy Flow Interactive Component inspired by high-end consulting workflows (SynergyFlow style).
 * Features animated pulse nodes, interactive step inspection, and sleek corporate navy light-dark styling.
 */
export const SynergyFlowSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'holding',
      phase: 'Phase 01 · Strategic Holding',
      title: 'Myint Thukha Nadi Group HQ',
      subtitle: 'Established 2005 · 21+ Years Excellence · 500+ Staff',
      description: 'Group-wide capital allocation, nationwide logistics corridors via MTKN Express, and strategic governance spanning 4 countries.',
      icon: <MTKNOfficialLogo size={36} />,
      color: 'from-amber-500/20 to-[#1E3A5F]',
      badgeColor: 'bg-amber-500 text-slate-950',
      metrics: ['21+ Years Heritage', '500+ Employees', 'Nationwide Logistics'],
      deliverable: 'Corporate Governance & Infrastructure'
    },
    {
      id: 'dir',
      phase: 'Phase 02 · Institutional EdTech',
      title: 'Digital Information Resources (DIR)',
      subtitle: 'Central Educational Entity · Est. 2018',
      description: 'Exclusive Myanmar master distributor for Jolly Phonics, National Geographic Learning, and Binary Logic digital computer science courseware.',
      icon: <DIREmblemLogo size={36} />,
      color: 'from-blue-600/20 to-[#1E4592]',
      badgeColor: 'bg-blue-600 text-white',
      metrics: ['50+ Partner Schools', '15,000+ Students', 'Certified CPD Training'],
      deliverable: 'B2B Curriculum Licensing & Whiteboards'
    },
    {
      id: 'retail',
      phase: 'Phase 03 · Retail & Wholesale',
      title: 'U Book Store (UBS)',
      subtitle: 'Consumer & Bookstore Distribution Network',
      description: 'Curated children’s literature, bestselling Dav Pilkey graphic novels, preschool activity kits, and math dominoes supplied to 50+ retail bookstores.',
      icon: <UBookStoreOfficialLogo size={42} showSubtitle={false} />,
      color: 'from-orange-500/20 to-[#F15A24]',
      badgeColor: 'bg-[#F15A24] text-white',
      metrics: ['50+ Bookstore Partners', 'Bestseller Comics', 'Family Home Packs'],
      deliverable: 'B2B2C Literacy & Retail Fulfillment'
    },
    {
      id: 'academy',
      phase: 'Phase 04 · Practical Academy',
      title: 'Win Digital Learning Hub',
      subtitle: 'Weekend Robotics, Coding & STEM Labs',
      description: 'Hands-on weekend technology academy empowering children ages 5–17 with physical robotics, Scratch game design, and Python programming.',
      icon: <WinLearningHubOfficialLogo size={42} showSubtitle={false} />,
      color: 'from-rose-600/20 to-[#DC2626]',
      badgeColor: 'bg-rose-600 text-white',
      metrics: ['Weekend STEM Labs', 'Ages 5–17 Enrolled', 'ISTE Tech Foundations'],
      deliverable: 'Future-Ready Tech Literacy'
    }
  ];

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#12243F] via-[#1E3A5F] to-[#162D4A] p-6 sm:p-12 text-white shadow-2xl border border-[#2B4B75] ${className}`}>
      {/* Background Ambient Particles & Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>Synergy Flow Architecture</span>
        </div>
        <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          The End-to-End Educational Value Chain
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Explore how our 4 synergistic operating units seamlessly connect capital holding, institutional courseware, retail distribution, and practical student academies.
        </p>
      </div>

      {/* Interactive Flow Nodes Navigation Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 relative z-10">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                isActive
                  ? 'bg-white/15 border-orange-400 shadow-xl ring-2 ring-orange-400/30 scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${s.badgeColor}`}>
                  Step 0{idx + 1}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white">
                  {isActive ? <CheckCircle2 className="w-4 h-4 text-orange-400" /> : <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-display font-bold text-sm sm:text-base text-white line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-1 font-medium">
                  {s.subtitle}
                </p>
              </div>

              {/* Active Glow Indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-400 rounded-full shadow-lg" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Inspector Box */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center animate-in fade-in duration-300">
        {/* Left: Icon & Phase */}
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-mono font-bold uppercase tracking-wider border border-orange-500/30">
            {steps[activeStep].phase}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-xl flex items-center justify-center shrink-0 border border-white/20">
              {steps[activeStep].icon}
            </div>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs text-orange-300 font-medium mt-0.5">
                {steps[activeStep].subtitle}
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            {steps[activeStep].description}
          </p>
        </div>

        {/* Middle: Deliverable & Key Metrics */}
        <div className="space-y-4 lg:border-x lg:border-white/10 lg:px-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Core Deliverable Output
          </div>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{steps[activeStep].deliverable}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            {steps[activeStep].metrics.map((m, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="font-mono font-bold text-xs text-orange-300 block">Active</span>
                <span className="text-[10px] text-slate-300 font-medium leading-tight mt-0.5 block">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Flow Controls & Next Action */}
        <div className="flex flex-col justify-center space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
          <div className="text-xs text-slate-300 font-medium">
            Seamlessly synchronized with nationwide logistics and digital software support.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Next Synergy Step (0{((activeStep + 1) % steps.length) + 1})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
