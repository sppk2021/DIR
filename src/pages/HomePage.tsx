import React, { useState } from 'react';
import { PageId, QuoteItem } from '../types';
import {
  ArrowRight,
  Play,
  BookOpen,
  Laptop,
  GraduationCap,
  Library,
  Landmark,
  Palette,
  Users,
  Globe2,
  ShieldCheck,
  Compass,
  Cpu,
  Building2,
  Bot,
  Store,
  Sparkles,
  School,
  UserCheck,
  Award,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';

import heroClassroomImg from '../assets/images/myanmar_classroom_learning_1790172148897.jpg';
import campusImg from '../assets/images/modern_school_campus_1790752281948.jpg';
import libraryReadingImg from '../assets/images/library_teacher_students_1790752299661.jpg';
import partnersGlobeImg from '../assets/images/partners_globe_books_1790752316364.jpg';

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
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // 6 Solutions
  const solutions = [
    {
      id: 'curriculum',
      title: 'Curriculum & Learning',
      subtext: 'ICT, Coding, Robotics, STEM, Languages',
      bgClass: 'bg-[#EBF3FE] border-blue-100/80 hover:border-blue-300',
      iconClass: 'text-[#1E4592]',
      icon: <BookOpen className="w-6 h-6" />,
      targetPage: 'courseware' as PageId
    },
    {
      id: 'digital',
      title: 'Digital Learning & Technology',
      subtext: 'LMS, Online Learning, Digital Resources',
      bgClass: 'bg-[#E8FAF4] border-emerald-100/80 hover:border-emerald-300',
      iconClass: 'text-[#059669]',
      icon: <Laptop className="w-6 h-6" />,
      targetPage: 'digital-hub' as PageId
    },
    {
      id: 'teacher',
      title: 'Teacher Development',
      subtext: 'Training, TOT, Professional Growth',
      bgClass: 'bg-[#F4EEFE] border-purple-100/80 hover:border-purple-300',
      iconClass: 'text-[#7C3AED]',
      icon: <GraduationCap className="w-6 h-6" />,
      targetPage: 'services' as PageId
    },
    {
      id: 'resources',
      title: 'Educational Resources',
      subtext: 'Books, Teaching Materials, Publishing',
      bgClass: 'bg-[#FFF9E6] border-amber-100/80 hover:border-amber-300',
      iconClass: 'text-[#D97706]',
      icon: <Library className="w-6 h-6" />,
      targetPage: 'bookstore' as PageId
    },
    {
      id: 'library',
      title: 'Library Solutions',
      subtext: 'Library Management, Equipment, Setup',
      bgClass: 'bg-[#E9F7FA] border-teal-100/80 hover:border-teal-300',
      iconClass: 'text-[#0891B2]',
      icon: <Landmark className="w-6 h-6" />,
      targetPage: 'services' as PageId
    },
    {
      id: 'creative',
      title: 'Creative & Digital Services',
      subtext: 'Content, Design, Marketing Support',
      bgClass: 'bg-[#FEEFF4] border-rose-100/80 hover:border-rose-300',
      iconClass: 'text-[#E11D48]',
      icon: <Palette className="w-6 h-6" />,
      targetPage: 'services' as PageId
    }
  ];

  // 6 Why DIR Features
  const whyDirPoints = [
    {
      title: 'Integrated Solutions',
      desc: 'All your education needs, in one place',
      icon: <Layers className="w-4 h-4 text-white" />
    },
    {
      title: 'Experienced Team',
      desc: 'Education and industry professionals',
      icon: <Users className="w-4 h-4 text-white" />
    },
    {
      title: 'Global Partnerships',
      desc: 'Trusted international publishers and technology providers',
      icon: <Globe2 className="w-4 h-4 text-white" />
    },
    {
      title: 'Reliable Support',
      desc: 'From implementation to ongoing service',
      icon: <ShieldCheck className="w-4 h-4 text-white" />
    },
    {
      title: 'Local Expertise',
      desc: 'Understanding Myanmar’s education landscape',
      icon: <Compass className="w-4 h-4 text-white" />
    },
    {
      title: 'Future-Focused',
      desc: 'Preparing learners for a digital and AI-driven world',
      icon: <Cpu className="w-4 h-4 text-white" />
    }
  ];

  // 5 Stakeholders
  const stakeholders = [
    {
      title: 'Schools',
      desc: 'Integrated solutions for modern learning environments.',
      icon: <School className="w-6 h-6 text-[#1E4592]" />
    },
    {
      title: 'Teachers',
      desc: 'Training, resources and practical support.',
      icon: <UserCheck className="w-6 h-6 text-[#0284C7]" />
    },
    {
      title: 'Students',
      desc: 'Build future-ready skills and confidence.',
      icon: <Users className="w-6 h-6 text-[#0D9488]" />
    },
    {
      title: 'School Leaders',
      desc: 'Guidance and implementation support.',
      icon: <GraduationCap className="w-6 h-6 text-[#1E4592]" />
    },
    {
      title: 'Libraries & Institutions',
      desc: 'Modern library technology, resources and services.',
      icon: <Landmark className="w-6 h-6 text-[#0891B2]" />
    }
  ];

  // 7 Business Units
  const businessUnits = [
    {
      id: 'dir-courseware',
      name: 'DIR Courseware',
      bgClass: 'bg-[#EBF3FE] text-[#1E4592] border-blue-100',
      icon: <BookOpen className="w-5 h-5" />,
      targetPage: 'courseware' as PageId
    },
    {
      id: 'wdlh',
      name: 'Win Digital Learning Hub (WDLH)',
      bgClass: 'bg-[#E8FAF4] text-[#059669] border-emerald-100',
      icon: <Bot className="w-5 h-5" />,
      targetPage: 'digital-hub' as PageId
    },
    {
      id: 'ubs',
      name: 'U Book Store (UBS)',
      bgClass: 'bg-[#FFF9E6] text-[#D97706] border-amber-100',
      icon: <Store className="w-5 h-5" />,
      targetPage: 'bookstore' as PageId
    },
    {
      id: 'publishing',
      name: 'U Book Publishing House',
      bgClass: 'bg-[#F4EEFE] text-[#7C3AED] border-purple-100',
      icon: <Building2 className="w-5 h-5" />,
      targetPage: 'courseware' as PageId
    },
    {
      id: 'creative',
      name: 'Win Creative Agency',
      bgClass: 'bg-[#FEEFF4] text-[#E11D48] border-rose-100',
      icon: <Sparkles className="w-5 h-5" />,
      targetPage: 'services' as PageId
    },
    {
      id: 'library-sol',
      name: 'U Library Solution',
      bgClass: 'bg-[#E9F7FA] text-[#0891B2] border-teal-100',
      icon: <Landmark className="w-5 h-5" />,
      targetPage: 'services' as PageId
    },
    {
      id: 'consultancy',
      name: 'U Educational Consultancy',
      bgClass: 'bg-[#FEFCE8] text-[#CA8A04] border-yellow-100',
      icon: <GraduationCap className="w-5 h-5" />,
      targetPage: 'services' as PageId
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-0 bg-white">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-wider uppercase text-[#0284C7] block">
              Integrated Education Solutions
            </span>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] text-slate-900 tracking-tight leading-[1.12]">
              Building Future-Ready <br className="hidden sm:block" />
              Learners, Together
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              DIR provides integrated education solutions for schools, educators, students, libraries and education organizations through curriculum, technology, learning resources, teacher development and more.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('courseware')}
                className="px-6 py-3 bg-[#1E4592] hover:bg-[#153472] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                About DIR
              </button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="px-4 py-3 text-slate-700 hover:text-[#1E4592] text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1E4592] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image with Script Annotation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 aspect-4/3 sm:aspect-16/10">
              <img
                src={heroClassroomImg}
                alt="Asian elementary students learning together with laptop and robotics kit"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Handwritten Script Annotation "Learn Create Grow" */}
            <div className="absolute top-2 right-4 sm:-top-2 sm:right-6 select-none pointer-events-none text-right">
              <span className="font-script text-3xl sm:text-4xl text-slate-800 font-bold tracking-wide leading-tight block drop-shadow-xs rotate-2">
                Learn <br />
                Create <br />
                Grow
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SOLUTIONS: OUR INTEGRATED SCHOOL SOLUTIONS */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
            Our Solutions
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Our Integrated School Solutions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We bring together multiple education services under one platform to support the complete learning journey — from curriculum and digital learning to teacher development, resources and library solutions.
          </p>
        </div>

        {/* 6 Pastel Square Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {solutions.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.targetPage)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-center flex flex-col items-center justify-between group shadow-2xs hover:shadow-md hover:-translate-y-1 ${item.bgClass}`}
            >
              <div className="p-3 rounded-xl bg-white/90 shadow-2xs group-hover:scale-110 transition-transform">
                <span className={item.iconClass}>{item.icon}</span>
              </div>

              <div className="my-3 space-y-1">
                <h3 className="font-display font-bold text-sm text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {item.subtext}
                </p>
              </div>

              <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#1E4592] transition-colors mt-auto">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY DIR? ONE PARTNER. MULTIPLE EDUCATION SOLUTIONS. */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Description */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
              Why DIR?
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
              One Partner. Multiple <br />
              Education Solutions.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We combine global quality and local expertise to deliver practical, sustainable and customized solutions for every educational institution.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-full border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Middle 6 Key Features Grid (2 cols x 3 rows) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyDirPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#0284C7] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    {point.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Campus Curved Photo with Script Annotation */}
          <div className="lg:col-span-3 relative flex justify-center">
            <div className="relative w-full max-w-[280px] lg:max-w-none rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-lg border border-slate-200 aspect-3/4">
              <img
                src={campusImg}
                alt="Modern educational campus building in sunny daylight"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Script Text "Better Education Brighter Future" */}
            <div className="absolute -top-6 right-2 sm:right-6 select-none pointer-events-none text-right">
              <span className="font-script text-2xl sm:text-3xl text-slate-800 font-bold tracking-wide leading-tight block rotate-3">
                Better <br />
                Education <br />
                Brighter <br />
                Future
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOR EVERY STAKEHOLDER: CREATING VALUE ACROSS THE EDUCATION COMMUNITY */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
            For Every Stakeholder
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Creating Value Across the Education Community
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 5 Clean Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {stakeholders.map((sh, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 mb-2 text-[#1E4592]">
                  {sh.icon}
                </div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 mb-1">
                  {sh.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {sh.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Library Reading Photo */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
            <img
              src={libraryReadingImg}
              alt="Teacher and young students reading with a tablet in a bright library"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 5. OUR BUSINESS UNITS: SEVEN BUSINESS UNITS. ONE EDUCATION ECOSYSTEM. */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Heading & Description */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
              Our Business Units
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
              Seven Business Units. <br />
              One Education Ecosystem.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Each business unit brings specialized expertise, working together to give you a complete education solution — not just individual products.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('courseware')}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-full border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Explore Our Business Units</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center 7 Business Units Cards (Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {businessUnits.map((bu) => (
              <div
                key={bu.id}
                onClick={() => onNavigate(bu.targetPage)}
                className={`p-3.5 rounded-2xl border transition-all text-center flex flex-col items-center justify-center cursor-pointer hover:shadow-sm hover:scale-[1.02] ${bu.bgClass}`}
              >
                <div className="mb-2 p-1.5 rounded-lg bg-white/80 shadow-2xs">
                  {bu.icon}
                </div>
                <span className="font-display font-bold text-xs leading-tight">
                  {bu.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Circular Ecosystem Graphic */}
          <div className="lg:col-span-3 p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 text-center flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {/* Outer Orbit Circle */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#0284C7]/30 animate-[spin_60s_linear_infinite]" />

              {/* Orbiting Icons */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shadow-xs">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs shadow-xs">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs shadow-xs">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs shadow-xs">
                <Store className="w-3.5 h-3.5" />
              </div>
              <div className="absolute top-6 right-6 w-6 h-6 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center text-xs shadow-xs">
                <Landmark className="w-3 h-3" />
              </div>
              <div className="absolute bottom-6 left-6 w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-xs shadow-xs">
                <Sparkles className="w-3 h-3" />
              </div>

              {/* Center DiR Circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-[#1E4592] shadow-sm flex flex-col items-center justify-center z-10">
                <span className="font-display font-black text-xl text-[#1E4592]">DiR</span>
              </div>
            </div>

            <p className="font-display font-bold text-xs text-slate-700 mt-3">
              Different strengths. A shared goal.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR REACH & PARTNERS */}
      <section className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Institutional Reach & Scale */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
                Our Reach
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Proven Scale. Trusted Excellence.
              </h2>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0284C7] flex items-center justify-center shrink-0">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-slate-900 tabular-nums">
                    500+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Schools Supported
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-slate-900 tabular-nums">
                    50,000+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Students Reached
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-slate-900 tabular-nums">
                    2,000+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Teachers Trained
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-slate-900 tabular-nums">
                    100+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Partner Organizations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: OUR PARTNERS */}
          <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-6">
            <div className="space-y-4 flex-1">
              <span className="text-xs font-bold tracking-wider uppercase text-[#1E4592] block">
                Our Partners
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Global Collaboration <br />
                for Local Excellence
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We work with trusted international publishers, technology providers and education organizations to bring the best resources and opportunities to Myanmar&apos;s learners.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('partners')}
                  className="px-6 py-2.5 bg-[#1E4592] hover:bg-[#153472] text-white text-xs font-semibold rounded-full shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View Our Partners</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Globe & Books Photo with Script Annotation */}
            <div className="relative w-full max-w-[280px] shrink-0">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-square">
                <img
                  src={partnersGlobeImg}
                  alt="Desktop globe, stack of academic books and graduation cap"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Script Annotation */}
              <div className="absolute top-4 right-2 sm:right-4 select-none pointer-events-none text-right">
                <span className="font-script text-2xl sm:text-3xl text-slate-800 font-bold tracking-wide leading-tight block rotate-3">
                  Global <br />
                  Partnerships. <br />
                  Local <br />
                  Excellence.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH CTA BANNER: LET'S BUILD A BRIGHTER FUTURE IN EDUCATION */}
      <section className="bg-[#1E4592] text-white py-12 sm:py-16">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Let&apos;s Build a Brighter Future in Education
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Together, we can create modern learning environments that empower students, teachers and communities.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 rounded-full border-2 border-white hover:bg-white hover:text-[#1E4592] text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Our Story: Digital Information Resources (DIR)
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-900 aspect-16/9 flex items-center justify-center text-white relative">
              <img
                src={heroClassroomImg}
                alt="DIR Video Story preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#1E4592] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <div className="space-y-1">
                  <p className="font-display font-bold text-base text-white">
                    Empowering Myanmar&apos;s Learners Since 2018
                  </p>
                  <p className="text-xs text-slate-200 max-w-md">
                    Watch how DIR brings world-class curricula, teachers masterclasses, and hands-on robotics to schools across Myanmar.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
