import React, { useState } from 'react';
import { ShieldCheck, Calendar, Building2, BookOpen, Store, Bot, ExternalLink, ArrowRight } from 'lucide-react';
import { MTKNOfficialLogo, DIREmblemLogo, UBookStoreOfficialLogo, WinLearningHubOfficialLogo } from './OfficialLogos';

interface CorporateUnit {
  id: string;
  year: string;
  fullDate: string;
  name: string;
  shortName: string;
  unitType: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  themeColor: string;
  borderActive: string;
  badgeStyle: string;
  role: string;
  target: string;
  flagshipOfferings: string[];
  metrics: { label: string; value: string }[];
}

export const SynergyFlowSection: React.FC<{ className?: string; onNavigateUnit?: (pageId: string) => void }> = ({
  className = '',
  onNavigateUnit
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>('dir');

  const units: CorporateUnit[] = [
    {
      id: 'mtkn',
      year: '2005',
      fullDate: 'April 28th, 2005',
      name: 'Myint Thuka Nadi Co., Ltd (MTKN)',
      shortName: 'MTKN Group HQ',
      unitType: 'Parent Holding Company',
      tagline: '21+ Years of Corporate Excellence & Nationwide Logistics Corridors',
      description: 'Strategic parent holding enterprise providing corporate governance, capital infrastructure, and nationwide freight distribution via MTKN Express across Myanmar and 4 international markets.',
      icon: <MTKNOfficialLogo size={36} />,
      themeColor: '#D97706',
      borderActive: 'border-amber-500',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
      role: 'Group Governance, Logistics & Infrastructure',
      target: 'Conglomerate divisions, national freight clients, and institutional enterprises',
      flagshipOfferings: ['MTKN Express Logistics', 'Corporate Governance', 'Capital Infrastructure'],
      metrics: [
        { label: 'Founded', value: '2005' },
        { label: 'Experience', value: '21+ Years' },
        { label: 'Group Staff', value: '500+' }
      ]
    },
    {
      id: 'dir',
      year: '2018',
      fullDate: 'Established 2018',
      name: 'Digital Information Resources Co., Ltd (DIR)',
      shortName: 'DIR Courseware',
      unitType: 'B2B Educational Courseware',
      tagline: 'Leading Master Courseware & Interactive Solutions Provider for Schools',
      description: 'Exclusive Myanmar master distributor delivering international curriculum standards (Jolly Phonics UK, National Geographic Learning, Binary Logic Computing) along with certified teacher training masterclasses.',
      icon: <DIREmblemLogo size={36} />,
      themeColor: '#1E4592',
      borderActive: 'border-[#1E4592]',
      badgeStyle: 'bg-blue-50 text-[#1E4592] border-blue-200',
      role: 'Institutional Curriculum Licensing & Teacher CPD',
      target: 'Preschools, Private Academies, International K-12 Schools, and Teachers',
      flagshipOfferings: ['Jolly Classroom Phonics', 'NatGeo Look & Close-up', 'Digital Kids/Teens (ISTE SEAL)'],
      metrics: [
        { label: 'Founded', value: '2018' },
        { label: 'Partner Schools', value: '50+' },
        { label: 'Enrolled Pupils', value: '15,000+' }
      ]
    },
    {
      id: 'ubs',
      year: '2020',
      fullDate: 'Established 2020',
      name: 'U Book Store (UBS)',
      shortName: 'U Book Store',
      unitType: 'Wholesale & Retail Bookstore',
      tagline: 'One-Stop Kids Books and Educational Activity Tools Distributor',
      description: 'Curated wholesale supplier and retailer of high-engagement children’s literature, bestselling Dav Pilkey graphic novels, early learning STEM kits, and supplementary readers to 50+ bookstore networks.',
      icon: <UBookStoreOfficialLogo size={40} showSubtitle={false} />,
      themeColor: '#F15A24',
      borderActive: 'border-[#F15A24]',
      badgeStyle: 'bg-orange-50 text-[#F15A24] border-orange-200',
      role: 'Children’s Literacy & Activity Tools Distribution (B2B & B2C)',
      target: 'Retail Bookstores, Toy Centers, School Libraries, Parents & Young Readers',
      flagshipOfferings: ['Dav Pilkey Dog Man Series', 'Math & Logic Domino Kits', 'Early Reader Storybooks'],
      metrics: [
        { label: 'Founded', value: '2020' },
        { label: 'Retail Stores', value: '50+' },
        { label: 'Major Cities', value: '3+' }
      ]
    },
    {
      id: 'wdlh',
      year: '2022',
      fullDate: 'Established 2022',
      name: 'Win Digital Learning Hub (WDLH)',
      shortName: 'Win Digital Hub',
      unitType: 'Youth STEM & Robotics Academy',
      tagline: 'Innovative ICT, Robotics and Programming Learning Hub for Kids',
      description: 'Practical weekend and evening technology academy in Mayangone, Yangon equipping students ages 5–17 with mechanical robotics assembly, Scratch game algorithms, and authentic Python coding.',
      icon: <WinLearningHubOfficialLogo size={40} showSubtitle={false} />,
      themeColor: '#E11D48',
      borderActive: 'border-rose-500',
      badgeStyle: 'bg-rose-50 text-rose-700 border-rose-200',
      role: 'Hands-on Weekend STEM, Coding & Robotics Education',
      target: 'Young Learners Ages 5–17 seeking computational fluency and robotics mastery',
      flagshipOfferings: ['Mechanical Robotics Labs', 'Scratch Game Logic', 'Python Data Science Courses'],
      metrics: [
        { label: 'Founded', value: '2022' },
        { label: 'Student Ages', value: '5–17 Yrs' },
        { label: 'Weekly Labs', value: '100% Hands-on' }
      ]
    }
  ];

  const activeUnit = units.find((u) => u.id === selectedUnitId) || units[1];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="font-bold uppercase tracking-wider text-[#1E4592]">
              Corporate Organization & Heritage
            </span>
            <span aria-hidden="true">·</span>
            <span>Established Timeline & Strategic Operating Units</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            DIR Group Units & Established Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Explore our parent holding company and specialized educational entities across Myanmar, established to serve schools, bookstores, and students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
          <Calendar className="w-3.5 h-3.5 text-[#1E4592]" />
          <span>Timeline: 2005 – Present</span>
        </div>
      </div>

      {/* Established Years & Unit Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {units.map((unit) => {
          const isSelected = unit.id === selectedUnitId;
          return (
            <button
              key={unit.id}
              onClick={() => setSelectedUnitId(unit.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between bg-white relative ${
                isSelected
                  ? `${unit.borderActive} ring-2 ring-blue-600/15 shadow-sm border-2`
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs'
              }`}
            >
              {/* Year & Unit Type Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl text-slate-900 tracking-tight">
                    {unit.year}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono font-medium">
                    (Est.)
                  </span>
                </div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${unit.badgeStyle}`}>
                  {unit.unitType}
                </span>
              </div>

              {/* Unit Title & Icon */}
              <div className="my-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 shrink-0">
                  {unit.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 line-clamp-1">
                    {unit.shortName}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">
                    {unit.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-medium text-slate-500">{unit.fullDate}</span>
                <span className="font-bold text-[#1E4592]">
                  {isSelected ? 'Active Unit' : 'Select Unit'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Unit Deep-Dive Specification Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-2xs">
              {activeUnit.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${activeUnit.badgeStyle}`}>
                  Est. {activeUnit.year} · {activeUnit.unitType}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                {activeUnit.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeUnit.id === 'dir' && onNavigateUnit && (
              <button
                onClick={() => onNavigateUnit('courseware')}
                className="px-4 py-2 bg-[#1E4592] hover:bg-[#132E66] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>View Courseware</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeUnit.id === 'ubs' && onNavigateUnit && (
              <button
                onClick={() => onNavigateUnit('bookstore')}
                className="px-4 py-2 bg-[#F15A24] hover:bg-[#D44512] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>Visit U Book Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeUnit.id === 'wdlh' && onNavigateUnit && (
              <button
                onClick={() => onNavigateUnit('digital-hub')}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>Explore STEM Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3 Columns Description, Offerings, and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Unit Mandate & Purpose */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Operational Mandate
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeUnit.description}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-700 block">Primary Target:</span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {activeUnit.target}
              </p>
            </div>
          </div>

          {/* Column 2: Flagship Curricula & Offerings */}
          <div className="space-y-3 lg:border-x lg:border-slate-200 lg:px-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Flagship Curricula & Operations
            </span>
            <div className="space-y-2">
              {activeUnit.flagshipOfferings.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Verified Established Metrics */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Verified Metrics
            </span>
            <div className="grid grid-cols-3 gap-2">
              {activeUnit.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="font-display font-bold text-sm sm:text-base text-[#1E4592]">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-[11px] text-slate-600">
              <span className="font-bold text-[#1E4592]">Unit Role: </span>
              <span>{activeUnit.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
