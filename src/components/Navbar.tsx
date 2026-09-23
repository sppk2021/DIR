import React, { useState, useRef, useEffect } from 'react';
import { PageId, QuoteItem } from '../types';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  BookOpen,
  Store,
  Bot,
  Layers,
  ArrowRight,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink
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
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);
  const [mobileProgrammesExpanded, setMobileProgrammesExpanded] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll position to shrink navbar & apply blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
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

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside (desktop)
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
      title: 'Courseware Solutions (B2B)',
      description: 'Jolly Phonics, NatGeo & Binary Logic for schools',
      icon: <BookOpen className="w-4 h-4 text-[#1E4592]" />
    },
    {
      id: 'bookstore' as PageId,
      title: 'U Book Store',
      description: 'Kids books, graphic novels & activity tools',
      icon: <Store className="w-4 h-4 text-[#F15A24]" />
    },
    {
      id: 'digital-hub' as PageId,
      title: 'Win Digital Learning Hub',
      description: 'Weekend hands-on robotics, coding & STEM labs',
      icon: <Bot className="w-4 h-4 text-emerald-600" />
    },
    {
      id: 'services' as PageId,
      title: 'Services Overview',
      description: 'Teacher training masterclasses & institutional audits',
      icon: <Layers className="w-4 h-4 text-indigo-600" />
    }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl h-14 shadow-xs border-slate-200 py-0'
            : 'bg-white/98 backdrop-blur-md h-18 border-slate-200 py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Official DIR Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none group text-left cursor-pointer"
              aria-label="DIR Home"
            >
              <DIRLogo size={scrolled ? 'sm' : 'md'} showText={true} />
            </button>

            {/* Clean Desktop Navigation */}
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
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      programmesDropdownOpen ? 'rotate-180 text-[#1E4592]' : 'text-slate-500'
                    }`}
                  />
                </button>

                {programmesDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-2.5 z-50 animate-in fade-in-50 duration-150">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E4592] px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>DIR Educational Units</span>
                      <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
                    </div>
                    <div className="space-y-1 pt-1.5">
                      {programmeOptions.map((prog) => (
                        <button
                          key={prog.id}
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
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900">
                              {prog.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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

              {/* Quotation Basket Indicator */}
              {quoteItems.length > 0 && (
                <button
                  onClick={onOpenQuoteModal}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1E4592] bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors border border-blue-200 cursor-pointer shadow-xs"
                  title="View Inspection Copy & Quotation Basket"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Quote ({quoteItems.length})</span>
                </button>
              )}
            </nav>

            {/* Mobile Navigation Trigger Bar */}
            <div className="flex items-center gap-2 lg:hidden">
              {quoteItems.length > 0 && (
                <button
                  onClick={onOpenQuoteModal}
                  className="p-2 text-slate-700 bg-blue-50 border border-blue-200 rounded-lg relative cursor-pointer"
                  title="Inquiry List"
                  aria-label={`Inquiry List (${quoteItems.length} items)`}
                >
                  <ShoppingBag className="w-4 h-4 text-[#1E4592]" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F15A24] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {quoteItems.length}
                  </span>
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none cursor-pointer transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6 text-slate-900" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Hamburger Menu Drawer for Mobile & Tablet */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Overlay with Soft Blur */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close navigation drawer"
        />

        {/* Slide-out Drawer Panel */}
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <DIRLogo size="sm" showText={false} />
              <div>
                <div className="font-display font-extrabold text-sm text-[#1E4592] tracking-tight">
                  DIR Services
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Digital Information Resources
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Primary Nav Links */}
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-blue-50 text-[#1E4592] font-bold border border-blue-200/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>Home</span>
                {currentPage === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E4592]" />}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === 'about'
                    ? 'bg-blue-50 text-[#1E4592] font-bold border border-blue-200/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>About Corporate Heritage</span>
                {currentPage === 'about' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E4592]" />}
              </button>
            </div>

            {/* Programmes Collapsible / Structured Section */}
            <div className="pt-2 border-t border-slate-150">
              <div className="flex items-center justify-between px-3 py-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Educational Units & Curricula
                </span>
                <button
                  onClick={() => setMobileProgrammesExpanded(!mobileProgrammesExpanded)}
                  className="text-xs text-[#1E4592] font-semibold cursor-pointer"
                >
                  {mobileProgrammesExpanded ? 'Collapse' : 'Expand'}
                </button>
              </div>

              {mobileProgrammesExpanded && (
                <div className="space-y-1 mt-1">
                  {programmeOptions.map((prog) => (
                    <button
                      key={prog.id}
                      onClick={() => handleNavClick(prog.id)}
                      className={`w-full text-left p-2.5 rounded-xl flex items-start gap-3 transition-colors cursor-pointer ${
                        currentPage === prog.id
                          ? 'bg-orange-50 text-[#F15A24] font-bold border border-orange-200/80'
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="p-1.5 rounded-lg bg-slate-100 mt-0.5 shrink-0">
                        {prog.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900">
                          {prog.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {prog.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Secondary Nav Links */}
            <div className="pt-2 border-t border-slate-150 space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 px-3 block mb-1">
                Institutional Resources
              </span>

              <button
                onClick={() => handleNavClick('infographics')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === 'infographics'
                    ? 'bg-blue-50 text-[#1E4592] font-bold border border-blue-200/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>Architectural Infographics</span>
                {currentPage === 'infographics' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E4592]" />}
              </button>

              <button
                onClick={() => handleNavClick('partners')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === 'partners'
                    ? 'bg-blue-50 text-[#1E4592] font-bold border border-blue-200/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>Partner Schools & Bookstores</span>
                {currentPage === 'partners' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E4592]" />}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                  currentPage === 'contact'
                    ? 'bg-blue-50 text-[#1E4592] font-bold border border-blue-200/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>Contact & Yangon HQ</span>
                {currentPage === 'contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E4592]" />}
              </button>
            </div>

            {/* Quick Contact Badge */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-[#1E4592]" />
                <span>Mayangone Headquarters</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-5.5">
                No. 123, Thamine Railway Station Rd, Yangon
              </p>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
            <button
              onClick={() => handleNavClick('courseware')}
              className="w-full py-3 px-4 rounded-xl bg-[#F15A24] hover:bg-[#D44512] text-white text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Courseware Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {quoteItems.length > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#1E4592] text-xs font-bold border border-blue-200 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <ShoppingBag className="w-4 h-4 text-[#F15A24]" />
                <span>View Quotation Basket ({quoteItems.length} items)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

