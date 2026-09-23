import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS_DATA } from '../data/dirData';
import { Testimonial } from '../types';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  Pause,
  GraduationCap,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  MapPin
} from 'lucide-react';

interface TestimonialCarouselProps {
  title?: string;
  subtitle?: string;
  categoryFilter?: 'all' | 'school' | 'student' | 'bookstore';
  className?: string;
  autoPlayInterval?: number; // default 5000ms
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  title = 'Verified Institutional & Student Voices',
  subtitle = 'Trusted by Myanmar’s leading international schools, preschool networks, and young innovators.',
  categoryFilter: initialFilter = 'all',
  className = '',
  autoPlayInterval = 5500
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'school' | 'student' | 'bookstore'>(
    initialFilter
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Touch handling state for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45; // in px

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const totalItems = filteredTestimonials.length;

  // Ensure index stays in range when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (totalItems || 1));
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % (totalItems || 1));
  }, [totalItems]);

  // Auto-sliding timer
  useEffect(() => {
    if (!isPlaying || isHovered || totalItems <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, autoPlayInterval, totalItems, handleNext]);

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentItem: Testimonial | undefined = filteredTestimonials[currentIndex];

  if (!currentItem) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="font-bold uppercase tracking-wider text-[#1E4592]">
              Verified Feedback
            </span>
            <span aria-hidden="true">·</span>
            <span>Myanmar School & Student Experiences</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">{subtitle}</p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#1E4592] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Feedback
          </button>
          <button
            onClick={() => setActiveCategory('school')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'school'
                ? 'bg-[#1E4592] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1E4592]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Schools & Principals</span>
          </button>
          <button
            onClick={() => setActiveCategory('student')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'student'
                ? 'bg-[#1E4592] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1E4592]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Students & Parents</span>
          </button>
          <button
            onClick={() => setActiveCategory('bookstore')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'bookstore'
                ? 'bg-[#1E4592] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Bookstores</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Carousel Stage with Touch Support */}
      <div
        className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        {/* Dynamic Card Content with Fade-In Animation */}
        <div
          key={currentItem.id}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300"
        >
          {/* Left Column: Author Badge & Institutional Metadata */}
          <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl overflow-hidden ${
                  currentItem.photoUrl ? 'bg-slate-100 border border-slate-200' : (currentItem.avatarBg || 'bg-[#1E4592]')
                } text-white font-display font-extrabold text-xl flex items-center justify-center shadow-xs shrink-0`}
              >
                {currentItem.photoUrl ? (
                  <img
                    src={currentItem.photoUrl}
                    alt={currentItem.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  currentItem.author
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                )}
              </div>

              <div>
                <h4 className="font-display font-bold text-lg text-slate-900 leading-snug">
                  {currentItem.author}
                </h4>
                <div className="text-xs font-bold text-[#F15A24] mt-0.5">
                  {currentItem.role}
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{currentItem.organization}</span>
                </div>
              </div>
            </div>

            {/* Program Adopted Tag */}
            <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/60 space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-[#F15A24] tracking-wider block">
                Adopted Curriculum / Solution
              </span>
              <div className="text-xs font-semibold text-slate-800 flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{currentItem.programAdopted}</span>
              </div>
            </div>

            {/* Location & Year */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentItem.location}</span>
              </span>
              <span className="font-mono text-slate-400">Academic Year {currentItem.year}</span>
            </div>
          </div>

          {/* Right Column: Verified Quote & Rating */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Star Rating & Category Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">5.0 / 5.0</span>
                </div>

                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Educational Partner</span>
                </span>
              </div>

              {/* Quotation text */}
              <div className="relative">
                <Quote className="w-8 h-8 text-orange-200 absolute -top-3 -left-3 pointer-events-none opacity-80" />
                <p className="font-display font-normal text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed pl-5 italic">
                  &ldquo;{currentItem.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Carousel Navigation Bottom Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
              {/* Progress & Auto-Play Status */}
              <div className="flex items-center gap-3">
                {/* Play/Pause Toggle */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                  aria-label={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-[#1E4592]" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-[#F15A24]" />
                  )}
                </button>

                {/* Dot indicators */}
                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx
                          ? 'w-6 bg-[#F15A24]'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-xs font-mono text-slate-500 ml-1">
                  {currentIndex + 1} / {totalItems}
                </span>
              </div>

              {/* Prev / Next Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Touch Swipe Hint for Mobile */}
        <div className="lg:hidden text-center mt-4 pt-2 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-medium">
            Swipe left or right to switch testimonials
          </span>
        </div>
      </div>
    </div>
  );
};
