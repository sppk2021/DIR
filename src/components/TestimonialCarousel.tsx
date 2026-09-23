import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS_DATA } from '../data/dirData';
import { Testimonial } from '../types';
import {
  Building2,
  GraduationCap,
  Store,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Layers,
  BookOpen,
  CheckCircle,
  FileCheck
} from 'lucide-react';

interface TestimonialCarouselProps {
  title?: string;
  subtitle?: string;
  categoryFilter?: 'all' | 'school' | 'student' | 'bookstore';
  className?: string;
  autoPlayInterval?: number;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  title = 'Partner School Implementations & Academic Outcomes',
  subtitle = 'Documented curriculum deployments, teacher training outcomes, and operational feedback across Myanmar institutions.',
  categoryFilter: initialFilter = 'all',
  className = '',
  autoPlayInterval = 8000
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'school' | 'student' | 'bookstore'>(
    initialFilter
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Touch handling state for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const totalItems = filteredTestimonials.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (totalItems || 1));
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % (totalItems || 1));
  }, [totalItems]);

  // Gentle auto-sliding timer (can be paused on hover)
  useEffect(() => {
    if (isHovered || totalItems <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, autoPlayInterval, totalItems, handleNext]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem: Testimonial | undefined = filteredTestimonials[currentIndex];

  if (!currentItem) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Executive Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="font-bold uppercase tracking-wider text-[#1E4592]">
              Institutional Case Studies
            </span>
            <span aria-hidden="true">·</span>
            <span>Myanmar School Deployments</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">{subtitle}</p>
        </div>

        {/* Segmented Category Filter */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Case Studies
          </button>
          <button
            onClick={() => setActiveCategory('school')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'school'
                ? 'bg-white text-[#1E4592] shadow-xs border border-slate-200/80 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>K-12 & Private Schools</span>
          </button>
          <button
            onClick={() => setActiveCategory('student')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'student'
                ? 'bg-white text-[#1E4592] shadow-xs border border-slate-200/80 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>STEM & Learning Hubs</span>
          </button>
          <button
            onClick={() => setActiveCategory('bookstore')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'bookstore'
                ? 'bg-white text-[#1E4592] shadow-xs border border-slate-200/80 font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>Retail & Wholesalers</span>
          </button>
        </div>
      </div>

      {/* Main Case Study Dossier Card */}
      <div
        className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dossier Top Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1E4592]" />
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">
              Case Study Reference #{currentItem.id.toUpperCase()}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              {currentItem.organization}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {currentItem.location}
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Cycle {currentItem.year}
            </span>
          </div>
        </div>

        {/* Dossier Body: Structured 2-Column Split */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Academic Coordinator Profile & Implementation Spec */}
          <div className="lg:col-span-4 space-y-5 lg:border-r lg:border-slate-100 lg:pr-8">
            {/* Person & Role */}
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                Academic Representative
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {currentItem.author}
              </h4>
              <p className="text-xs font-medium text-[#1E4592]">
                {currentItem.role}
              </p>
              <p className="text-xs text-slate-600 font-normal">
                {currentItem.organization}
              </p>
            </div>

            {/* Adopted Solution Spec Box */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                <BookOpen className="w-3.5 h-3.5 text-[#1E4592]" />
                <span>Adopted Curriculum</span>
              </div>
              <p className="text-xs font-semibold text-slate-900 leading-snug">
                {currentItem.programAdopted}
              </p>
            </div>

            {/* Operational Verification Highlights */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                Verified Deliverables
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Teacher In-Service Workshops Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Official Interactive Software Deployed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Yangon Warehouse Stock Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Implementation Report & Impact */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#1E4592]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4592]">
                  Implementation Report & Academic Impact
                </span>
              </div>

              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200/60">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {currentItem.quote}
                </p>
              </div>
            </div>

            {/* Pagination and Navigation Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <span>Case Study</span>
                <span className="font-bold text-slate-900">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span>of</span>
                <span className="font-bold text-slate-900">{String(totalItems).padStart(2, '0')}</span>
              </div>

              {/* Progress Dots & Nav Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx
                          ? 'w-6 bg-[#1E4592]'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Jump to case study ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Next case study"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

