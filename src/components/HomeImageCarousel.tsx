import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PageId } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  BookOpen,
  Bot,
  Store,
  GraduationCap,
  Layers,
  CheckCircle2
} from 'lucide-react';

import classroomImg from '../assets/images/myanmar_classroom_learning_1790172148897.jpg';
import roboticsImg from '../assets/images/stem_robotics_academy_1790172162021.jpg';
import bookstoreImg from '../assets/images/kids_bookstore_display_1790172174602.jpg';

interface HomeImageCarouselProps {
  onNavigate: (page: PageId) => void;
  className?: string;
}

interface ImageSlide {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  targetPage: PageId;
  ctaText: string;
  imageUrl: string;
  badgeIcon: React.ReactNode;
  highlights: string[];
}

export const HomeImageCarousel: React.FC<HomeImageCarouselProps> = ({
  onNavigate,
  className = ''
}) => {
  const slides: ImageSlide[] = [
    {
      id: 'classroom-interactive',
      title: 'Interactive Whiteboard Phonics & Early Literacy',
      tag: 'Jolly Learning UK · Official Myanmar Partner',
      category: 'Early Childhood & Primary',
      description:
        'Young learners in Yangon mastering synthetic phonics with the official Jolly Classroom touchscreen software, multi-sensory blending songs, and decodable readers.',
      targetPage: 'courseware',
      ctaText: 'Explore Phonics Curricula',
      imageUrl: classroomImg,
      badgeIcon: <BookOpen className="w-4 h-4 text-blue-400" />,
      highlights: ['Synthetic Phonics Software', 'Touchscreen CPT Integration', 'Audio-Visual Blending']
    },
    {
      id: 'stem-robotics-lab',
      title: 'Win Digital Learning Hub: Robotics & Code Lab',
      tag: 'WDLH Academy · Hands-on STEM',
      category: 'Hands-on STEM Academy',
      description:
        'Weekend STEM students assembling physical robotic chassis, connecting sensors and micro-controllers, and writing Python logic at our Mayangone training center.',
      targetPage: 'digital-hub',
      ctaText: 'Discover Robotics Courses',
      imageUrl: roboticsImg,
      badgeIcon: <Bot className="w-4 h-4 text-orange-400" />,
      highlights: ['1-to-1 Physical Robot Kits', 'Scratch to Python Continuum', 'ISTE Standardized Labs']
    },
    {
      id: 'natgeo-global-english',
      title: 'National Geographic Learning English Continuum',
      tag: 'Cengage Learning · Global Curricula',
      category: 'K-12 International Courseware',
      description:
        'Inspiring students to see the world through National Geographic Look and New Close-up series, combining breathtaking real-world exploration photography with CEFR mastery.',
      targetPage: 'courseware',
      ctaText: 'View NatGeo Curricula',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      badgeIcon: <Layers className="w-4 h-4 text-emerald-400" />,
      highlights: ['CEFR Benchmarked (Pre-A1 to C1)', 'Global Real-World Context', 'Interactive Whiteboard Software']
    },
    {
      id: 'u-bookstore-activities',
      title: 'U Book Store: Children’s Books & Tactile Toys',
      tag: 'UBS Nationwide Wholesale & Retail',
      category: 'Kids Books & Activities',
      description:
        'Vibrant retail book corners stocked with Dav Pilkey’s Dog Man, educational fraction dominoes, and interactive reading activity sets distributed to 50+ stores nationwide.',
      targetPage: 'bookstore',
      ctaText: 'Browse Bookstore Catalog',
      imageUrl: bookstoreImg,
      badgeIcon: <Store className="w-4 h-4 text-amber-400" />,
      highlights: ['Dav Pilkey Official Distributor', 'Montessori STEM Toys', 'Yangon Warehouse Inventory']
    },
    {
      id: 'teacher-training-workshops',
      title: 'Certified In-Service Teacher Masterclasses',
      tag: 'DIR Academic Support & Development',
      category: 'Professional Development',
      description:
        'Over 100 educators trained annually across Myanmar by DIR’s academic trainers in phonics articulation, classroom pacing, and interactive whiteboard digital pedagogy.',
      targetPage: 'services',
      ctaText: 'Review Teacher Training',
      imageUrl:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      badgeIcon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      highlights: ['Annual In-Service Masterclasses', 'Lesson Pacing & Worksheets', 'Teacher Certifications']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Touch gesture support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4800);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext]);

  // Touch events
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
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) handleNext();
    if (diff < -45) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = slides[currentIndex];

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Feature Image Carousel Viewport */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-[#162D4A] min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-end select-none group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Image with Smooth Cross-Fade Effect */}
        <div
          key={activeSlide.id}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-105 group-hover:scale-100 animate-in fade-in"
          style={{ backgroundImage: `url(${activeSlide.imageUrl})` }}
        />

        {/* Ambient Dark Gradient Overlay for High Readability - Corporate Navy */}
        <div className="absolute inset-0 bg-linear-to-t from-[#10243C] via-[#10243C]/75 to-[#10243C]/20 pointer-events-none" />

        {/* Top Floating Controls Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1B355A]/85 backdrop-blur-md border border-[#2B4B75] text-white text-xs font-semibold">
            {activeSlide.badgeIcon}
            <span>{activeSlide.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-[#1B355A]/85 backdrop-blur-md text-blue-100 font-mono text-xs border border-[#2B4B75]">
              {currentIndex + 1} / {totalSlides}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-[#1B355A]/85 backdrop-blur-md border border-[#2B4B75] text-white/90 hover:text-white hover:bg-[#22436F] transition-colors cursor-pointer"
              title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              aria-label={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-[#1B355A]/85 backdrop-blur-md border border-[#2B4B75] text-white/90 hover:text-white hover:bg-[#22436F] transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-[#1B355A]/85 backdrop-blur-md border border-[#2B4B75] text-white/90 hover:text-white hover:bg-[#22436F] transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Left / Right Side Floating Controls */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1B355A]/75 hover:bg-[#1B355A] text-white items-center justify-center backdrop-blur-md border border-[#2B4B75] transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#1B355A]/75 hover:bg-[#1B355A] text-white items-center justify-center backdrop-blur-md border border-[#2B4B75] transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Content Box */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 w-full max-w-4xl space-y-4 text-white">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#FB923C] uppercase tracking-wider block">
              {activeSlide.tag}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              {activeSlide.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl line-clamp-3">
              {activeSlide.description}
            </p>
          </div>

          {/* Highlights pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {activeSlide.highlights.map((h, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{h}</span>
              </span>
            ))}
          </div>

          {/* Action Button & Carousel Indicators */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              onClick={() => onNavigate(activeSlide.targetPage)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F15A24] hover:bg-[#D44512] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#F15A24]/30 transition-all cursor-pointer self-start sm:self-auto"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Thumbnail Navigation Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#F15A24] shadow-xs'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
