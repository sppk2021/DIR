import React, { useState, useRef, useEffect } from 'react';
import { PageId, QuoteItem } from '../types';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  BookOpen,
  Laptop,
  GraduationCap,
  Library,
  Landmark,
  Palette,
  Bot,
  Store,
  Building2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Mail,
  CheckCircle2
} from 'lucide-react';
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
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [businessUnitsDropdownOpen, setBusinessUnitsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const solutionsRef = useRef<HTMLDivElement>(null);
  const unitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
      if (unitsRef.current && !unitsRef.current.contains(e.target as Node)) {
        setBusinessUnitsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setBusinessUnitsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    const q = searchInput.toLowerCase();
    if (q.includes('robot') || q.includes('stem') || q.includes('code') || q.includes('hub')) {
      handleNavClick('digital-hub');
    } else if (q.includes('book') || q.includes('store') || q.includes('comic') || q.includes('toy')) {
      handleNavClick('bookstore');
    } else if (q.includes('service') || q.includes('training') || q.includes('library')) {
      handleNavClick('services');
    } else if (q.includes('partner') || q.includes('school')) {
      handleNavClick('partners');
    } else if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone')) {
      handleNavClick('contact');
    } else {
      handleNavClick('courseware');
    }
    setSearchOpen(false);
    setSearchInput('');
  };

  // 6 Solutions matching the uploaded design
  const solutionsList = [
    {
      title: 'Curriculum & Learning',
      desc: 'ICT, Coding, Robotics, STEM, Languages',
      icon: <BookOpen className="w-4 h-4 text-[#1E4592]" />,
      page: 'courseware' as PageId
    },
    {
      title: 'Digital Learning & Technology',
      desc: 'LMS, Online Learning, Digital Resources',
      icon: <Laptop className="w-4 h-4 text-[#059669]" />,
      page: 'digital-hub' as PageId
    },
    {
      title: 'Teacher Development',
      desc: 'Training, TOT, Professional Growth',
      icon: <GraduationCap className="w-4 h-4 text-[#7C3AED]" />,
      page: 'services' as PageId
    },
    {
      title: 'Educational Resources',
      desc: 'Books, Teaching Materials, Publishing',
      icon: <Library className="w-4 h-4 text-[#D97706]" />,
      page: 'bookstore' as PageId
    },
    {
      title: 'Library Solutions',
      desc: 'Library Management, Equipment, Setup',
      icon: <Landmark className="w-4 h-4 text-[#0891B2]" />,
      page: 'services' as PageId
    },
    {
      title: 'Creative & Digital Services',
      desc: 'Content, Design, Marketing Support',
      icon: <Palette className="w-4 h-4 text-[#E11D48]" />,
      page: 'services' as PageId
    }
  ];

  // 7 Business Units matching the uploaded design
  const businessUnitsList = [
    {
      title: 'DIR Courseware',
      desc: 'Master B2B school solutions & global curricula',
      icon: <BookOpen className="w-4 h-4 text-[#1E4592]" />,
      page: 'courseware' as PageId
    },
    {
      title: 'Win Digital Learning Hub (WDLH)',
      desc: 'Hands-on robotics, coding & STEM academy',
      icon: <Bot className="w-4 h-4 text-[#059669]" />,
      page: 'digital-hub' as PageId
    },
    {
      title: 'U Book Store (UBS)',
      desc: 'Wholesale & retail children’s books & learning tools',
      icon: <Store className="w-4 h-4 text-[#F15A24]" />,
      page: 'bookstore' as PageId
    },
    {
      title: 'U Book Publishing House',
      desc: 'Curriculum publishing & local learning editions',
      icon: <Building2 className="w-4 h-4 text-[#7C3AED]" />,
      page: 'courseware' as PageId
    },
    {
      title: 'Win Creative Agency',
      desc: 'Educational brand design, multimedia & learning content',
      icon: <Sparkles className="w-4 h-4 text-[#E11D48]" />,
      page: 'services' as PageId
    },
    {
      title: 'U Library Solution',
      desc: 'Modern cataloging, digital repository & school setups',
      icon: <Landmark className="w-4 h-4 text-[#0891B2]" />,
      page: 'services' as PageId
    },
    {
      title: 'U Educational Consultancy',
      desc: 'Curriculum accreditation & institutional audits',
      icon: <GraduationCap className="w-4 h-4 text-[#D97706]" />,
      page: 'services' as PageId
    }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 border-b bg-white ${
          scrolled ? 'shadow-xs border-slate-200/90 py-2.5' : 'border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* 1. BRAND LOGO */}
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none text-left cursor-pointer select-none"
              aria-label="DIR Home"
            >
              <DIRLogo size="sm" showText={true} />
            </button>

            {/* 2. DESKTOP NAVIGATION LINKS (No Impact, No Resources) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                    : 'text-slate-700 hover:text-[#1E4592]'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                  currentPage === 'about'
                    ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                    : 'text-slate-700 hover:text-[#1E4592]'
                }`}
              >
                About Us
              </button>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                ref={solutionsRef}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                  className={`text-sm font-semibold transition-colors py-1 flex items-center gap-1 cursor-pointer ${
                    currentPage === 'services' || currentPage === 'solutions'
                      ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                      : 'text-slate-700 hover:text-[#1E4592]'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      solutionsDropdownOpen ? 'rotate-180 text-[#1E4592]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {solutionsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in-50 duration-150">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E4592] px-3 py-1.5 border-b border-slate-100">
                      Our Integrated Solutions
                    </div>
                    <div className="space-y-1 pt-1.5">
                      {solutionsList.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(item.page)}
                          className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 cursor-pointer"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-100 shrink-0 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{item.title}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Business Units Dropdown */}
              <div
                className="relative"
                ref={unitsRef}
                onMouseEnter={() => setBusinessUnitsDropdownOpen(true)}
                onMouseLeave={() => setBusinessUnitsDropdownOpen(false)}
              >
                <button
                  onClick={() => setBusinessUnitsDropdownOpen(!businessUnitsDropdownOpen)}
                  className={`text-sm font-semibold transition-colors py-1 flex items-center gap-1 cursor-pointer ${
                    currentPage === 'courseware' ||
                    currentPage === 'bookstore' ||
                    currentPage === 'digital-hub'
                      ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                      : 'text-slate-700 hover:text-[#1E4592]'
                  }`}
                >
                  <span>Business Units</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      businessUnitsDropdownOpen ? 'rotate-180 text-[#1E4592]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {businessUnitsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in-50 duration-150">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E4592] px-3 py-1.5 border-b border-slate-100">
                      Seven Business Units
                    </div>
                    <div className="space-y-1 pt-1.5">
                      {businessUnitsList.map((unit, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(unit.page)}
                          className="w-full text-left p-2 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 cursor-pointer"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-100 shrink-0 mt-0.5">
                            {unit.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{unit.title}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{unit.desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('partners')}
                className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                  currentPage === 'partners'
                    ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                    : 'text-slate-700 hover:text-[#1E4592]'
                }`}
              >
                Partners
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-semibold transition-colors py-1 cursor-pointer ${
                  currentPage === 'contact'
                    ? 'text-[#1E4592] font-bold border-b-2 border-[#1E4592]'
                    : 'text-slate-700 hover:text-[#1E4592]'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* 3. RIGHT CONTROLS: SEARCH & GET IN TOUCH */}
            <div className="flex items-center gap-3">
              {/* Search Toggle Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-[#1E4592] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Search website"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Sample / Consultation Request Count (if items selected) */}
              {quoteItems.length > 0 && (
                <button
                  onClick={onOpenQuoteModal}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#1E4592] hover:bg-blue-100 rounded-full text-xs font-semibold border border-blue-200 transition-colors cursor-pointer"
                  title="View Sample & Consultation Request List"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1E4592]" />
                  <span>Request List ({quoteItems.length})</span>
                </button>
              )}

              {/* Primary CTA: "Get in Touch" (Exact match to uploaded design!) */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E4592] hover:bg-[#153472] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Expandable Search Input Row */}
          {searchOpen && (
            <form onSubmit={handleSearchSubmit} className="mt-3 pt-3 border-t border-slate-100">
              <div className="relative max-w-lg mx-auto">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search curricula, robotics, bookstore, partnerships..."
                  className="w-full pl-10 pr-20 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:border-[#1E4592] focus:bg-white transition-all"
                  autoFocus
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1E4592] text-white text-xs font-medium rounded-full cursor-pointer hover:bg-[#153472]"
                >
                  Search
                </button>
              </div>
            </form>
          )}
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER (No Impact, No Resources) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <DIRLogo size="sm" showText={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              <div className="space-y-1">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                    currentPage === 'home'
                      ? 'bg-blue-50 text-[#1E4592]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                    currentPage === 'about'
                      ? 'bg-blue-50 text-[#1E4592]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  About Us
                </button>
              </div>

              {/* Solutions section */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
                  Solutions
                </div>
                <div className="space-y-1">
                  {solutionsList.map((sol, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(sol.page)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="p-1 rounded-md bg-slate-100">{sol.icon}</div>
                      <span>{sol.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Business Units section */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
                  Business Units
                </div>
                <div className="space-y-1">
                  {businessUnitsList.map((unit, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(unit.page)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 cursor-pointer"
                    >
                      <div className="p-1 rounded-md bg-slate-100">{unit.icon}</div>
                      <span>{unit.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Partners & Contact */}
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <button
                  onClick={() => handleNavClick('partners')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                    currentPage === 'partners'
                      ? 'bg-blue-50 text-[#1E4592]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Partners
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-semibold transition-colors cursor-pointer ${
                    currentPage === 'contact'
                      ? 'bg-blue-50 text-[#1E4592]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 bg-[#1E4592] hover:bg-[#153472] text-white text-xs font-semibold rounded-full shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <a href="tel:+9518651049" className="flex items-center gap-1 hover:text-[#1E4592]">
                  <PhoneCall className="w-3 h-3 text-[#1E4592]" />
                  <span>+95 186 510 49</span>
                </a>
                <a href="mailto:info@dir.com.mm" className="flex items-center gap-1 hover:text-[#1E4592]">
                  <Mail className="w-3 h-3 text-[#1E4592]" />
                  <span>info@dir.com.mm</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
