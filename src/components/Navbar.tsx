import React, { useState, useEffect, useRef } from 'react';
import { PageId, QuoteItem } from '../types';
import { Menu, X, ChevronDown, ShoppingBag, BookOpen, Store, Bot, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { DIRLogo } from './DIRLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  quoteItems: QuoteItem[];
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  quoteItems,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgrammesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProgrammesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isProgrammesActive =
    currentPage === 'courseware' ||
    currentPage === 'bookstore' ||
    currentPage === 'digital-hub' ||
    currentPage === 'services';

  const programmeOptions = [
    {
      id: 'courseware' as PageId,
      title: 'DIR Courseware (School B2B)',
      description: 'Jolly Phonics, National Geographic & Binary Logic',
      icon: <BookOpen className="w-4 h-4 text-blue-600" />
    },
    {
      id: 'bookstore' as PageId,
      title: 'U Book Store',
      description: 'Kids books, graphic novels & activity tools',
      icon: <Store className="w-4 h-4 text-amber-600" />
    },
    {
      id: 'digital-hub' as PageId,
      title: 'Win Digital Learning Hub',
      description: 'Weekend robotics, coding & STEM labs',
      icon: <Bot className="w-4 h-4 text-rose-600" />
    },
    {
      id: 'services' as PageId,
      title: 'Services Overview',
      description: 'Institutional courseware & teacher training',
      icon: <Layers className="w-4 h-4 text-purple-600" />
    }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl h-14 shadow-md border-slate-200/80 py-0'
          : 'bg-white/95 backdrop-blur-md h-18 border-slate-200 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-none group text-left cursor-pointer"
            aria-label="DIR Home"
          >
            <DIRLogo size={scrolled ? 'sm' : 'md'} showText={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                  : 'text-slate-700 hover:text-[#1E4592]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                  : 'text-slate-700 hover:text-[#1E4592]'
              }`}
            >
              About
            </button>

            {/* Programmes Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProgrammesDropdownOpen(true)}
              onMouseLeave={() => setProgrammesDropdownOpen(false)}
            >
              <button
                onClick={() => setProgrammesDropdownOpen(!programmesDropdownOpen)}
                className={`text-sm font-semibold transition-colors py-1 flex items-center gap-1 cursor-pointer ${
                  isProgrammesActive
                    ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                    : 'text-slate-700 hover:text-[#1E4592]'
                }`}
              >
                <span>Programmes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programmesDropdownOpen ? 'rotate-180 text-[#1E4592]' : 'text-slate-500'}`} />
              </button>

              {programmesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 z-50 animate-in fade-in-50 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E4592] px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>DIR Educational Units</span>
                    <Sparkles className="w-3 h-3 text-[#F15A24]" />
                  </div>
                  <div className="space-y-1 pt-1.5">
                    {programmeOptions.map((prog, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavClick(prog.id)}
                        className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === prog.id
                            ? 'bg-orange-50 text-[#F15A24] font-bold'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-slate-100 mt-0.5 shrink-0">
                          {prog.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            {prog.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {prog.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('infographics')}
              className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                currentPage === 'infographics'
                  ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                  : 'text-slate-700 hover:text-[#1E4592]'
              }`}
            >
              Infographics
            </button>

            <button
              onClick={() => handleNavClick('partners')}
              className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                currentPage === 'partners'
                  ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                  : 'text-slate-700 hover:text-[#1E4592]'
              }`}
            >
              Partners
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#1E4592] border-b-2 border-[#1E4592] font-bold'
                  : 'text-slate-700 hover:text-[#1E4592]'
              }`}
            >
              Contact
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('courseware')}
              className="px-4 py-2 rounded-xl bg-[#F15A24] hover:bg-[#D44512] text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Explore Curricula</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Quote Basket */}
            {quoteItems.length > 0 && (
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1E4592] bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200 cursor-pointer shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#F15A24]" />
                <span>Quote ({quoteItems.length})</span>
              </button>
            )}
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {quoteItems.length > 0 && (
              <button
                onClick={onOpenQuoteModal}
                className="p-2 text-slate-700 bg-slate-100 rounded-lg relative"
              >
                <ShoppingBag className="w-4 h-4 text-[#F15A24]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F15A24] text-white text-[10px] font-bold flex items-center justify-center">
                  {quoteItems.length}
                </span>
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-2 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'home' ? 'text-[#1E4592] bg-blue-50 font-bold' : 'text-slate-800'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'about' ? 'text-[#1E4592] bg-blue-50 font-bold' : 'text-slate-800'
            }`}
          >
            About Us
          </button>
          <div className="pt-2 pb-1 border-y border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
              Programmes & Units
            </span>
            {programmeOptions.map((p, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(p.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-2.5 ${
                  currentPage === p.id ? 'text-[#F15A24] bg-orange-50 font-semibold' : 'text-slate-700'
                }`}
              >
                {p.icon}
                <span>{p.title}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNavClick('infographics')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'infographics' ? 'text-[#1E4592] bg-blue-50' : 'text-slate-800'
            }`}
          >
            Infographics
          </button>
          <button
            onClick={() => handleNavClick('partners')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'partners' ? 'text-[#1E4592] bg-blue-50' : 'text-slate-800'
            }`}
          >
            School & Retail Partners
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800"
          >
            Contact & Consultation
          </button>
        </div>
      )}
    </header>
  );
};
