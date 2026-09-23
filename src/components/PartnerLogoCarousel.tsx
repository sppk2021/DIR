import React, { useState } from 'react';
import { SCHOOL_PARTNERS, RETAIL_PARTNERS } from '../data/dirData';
import { Partner, PageId } from '../types';
import { MasterPartnerLogo } from './OfficialLogos';
import { Building2, Store, MapPin, CheckCircle2, X, ArrowRight, Info, Sparkles } from 'lucide-react';

interface PartnerLogoCarouselProps {
  onNavigate?: (page: PageId) => void;
  className?: string;
}

export const PartnerLogoCarousel: React.FC<PartnerLogoCarouselProps> = ({
  onNavigate,
  className = ''
}) => {
  const allPartners: Partner[] = [...SCHOOL_PARTNERS, ...RETAIL_PARTNERS];
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'school' | 'retail'>('all');

  const filteredPartners = allPartners.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className={`space-y-10 py-8 ${className}`}>
      {/* Header exactly matching Image 2 reference style */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
          Expert <span className="text-[#0EA5E9]">Integration Services</span> Across Leading <br className="hidden sm:inline" />
          Academic & Retail Platforms
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Delivering reliable curriculum licensing, smart whiteboards, and nationwide retail fulfillment across Myanmar&apos;s premier educational networks.
        </p>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#1E3A5F] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Partners ({allPartners.length})
          </button>
          <button
            onClick={() => setActiveCategory('school')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'school'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Schools ({SCHOOL_PARTNERS.length})</span>
          </button>
          <button
            onClick={() => setActiveCategory('retail')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeCategory === 'retail'
                ? 'bg-[#F15A24] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>Bookstores ({RETAIL_PARTNERS.length})</span>
          </button>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Ticker (Image 2 style) */}
      <div className="relative w-full overflow-hidden py-4 bg-slate-50/80 border-y border-slate-200/80">
        {/* Gradient Fade Masks for Marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center px-8 hover:[animation-play-state:paused]">
          {[...filteredPartners, ...filteredPartners].map((partner, idx) => (
            <button
              key={`${partner.id}-${idx}`}
              onClick={() => setSelectedPartner(partner)}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0EA5E9] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0 grayscale hover:grayscale-0 hover:scale-105"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <MasterPartnerLogo partnerId={partner.id} category={partner.category} size={32} />
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-xs text-slate-800 group-hover:text-[#1E4592] transition-colors block max-w-[160px] truncate">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  {partner.city} · {partner.category === 'school' ? 'School' : 'Retail'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Pop-Up Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E33]/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 bg-[#1E3A5F] text-white flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-lg flex items-center justify-center shrink-0">
                  <MasterPartnerLogo partnerId={selectedPartner.id} category={selectedPartner.category} size={42} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB923C]">
                      {selectedPartner.category === 'school' ? 'Educational Partner' : 'Retail Distributor'}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-xs text-slate-300">{selectedPartner.city}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                    {selectedPartner.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">{selectedPartner.type}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto flex-1 text-xs sm:text-sm text-slate-700">
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#1E4592]" />
                  <span>What is this Institution / Retailer?</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedPartner.description ||
                    `${selectedPartner.name} is a leading ${selectedPartner.type.toLowerCase()} located in ${selectedPartner.city}.`}
                </p>
                {selectedPartner.foundedOrScale && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium mt-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Scale: {selectedPartner.foundedOrScale}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>Collaboration with Digital Information Resources (DIR)</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedPartner.collaboration ||
                    `Partners with DIR for curriculum supply, teacher masterclasses, and educational resource distribution.`}
                </p>

                {selectedPartner.programsAdopted && selectedPartner.programsAdopted.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Curricula & Solutions in Use:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedPartner.programsAdopted.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-orange-50 text-[#F15A24] border border-orange-200/60 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                {onNavigate && (
                  <button
                    onClick={() => {
                      setSelectedPartner(null);
                      onNavigate('contact');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#F15A24] hover:bg-[#D44512] rounded-lg transition-colors cursor-pointer"
                  >
                    Partner Inquiries
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
