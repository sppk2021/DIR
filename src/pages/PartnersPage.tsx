import React, { useState } from 'react';
import { SCHOOL_PARTNERS, RETAIL_PARTNERS } from '../data/dirData';
import { PageId } from '../types';
import { PartnerBadge } from '../components/PartnerLogos';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Handshake,
  School,
  Store,
  MapPin,
  Search,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'school' | 'retail'>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const allPartners = [
    ...SCHOOL_PARTNERS.map((s) => ({ ...s, categoryText: 'School Partner' })),
    ...RETAIL_PARTNERS.map((r) => ({ ...r, categoryText: 'Retail Bookstore' }))
  ];

  const filteredPartners = allPartners.filter((p) => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesCity = selectedCity === 'all' || p.city === selectedCity;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.type && p.type.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesCity && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner - Corporate Navy with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-12 bottom-0 w-80 h-80 bg-orange-400/15 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <Handshake className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold uppercase tracking-wider text-orange-400">Institutional Alliances</span>
              <span aria-hidden="true">·</span>
              <span>National Academic & Retail Network</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Our Trusted School & Retail Partners Across Myanmar
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              From leading international schools and private academies in Yangon to flagship bookstores and children&apos;s hubs in Mandalay, DIR is proud to supply trusted educational resources nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({allPartners.length})
              </button>
              <button
                onClick={() => setActiveTab('school')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'school' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Schools ({SCHOOL_PARTNERS.length})
              </button>
              <button
                onClick={() => setActiveTab('retail')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'retail' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Retailers ({RETAIL_PARTNERS.length})
              </button>
            </div>

            {/* City Filter */}
            <div className="flex items-center gap-1 text-xs text-slate-500 pl-2">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent border-0 font-medium text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                <option value="Yangon">Yangon</option>
                <option value="Mandalay">Mandalay</option>
                <option value="Other Cities">Regional Hubs</option>
              </select>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search partner school or store..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* Partners Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPartners.map((partner) => (
            <PartnerBadge
              key={partner.id}
              id={partner.id}
              name={partner.name}
              category={partner.category}
              type={partner.type}
              city={partner.city}
              collaboration={partner.collaboration}
              programsAdopted={partner.programsAdopted}
              foundedOrScale={partner.foundedOrScale}
            />
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Handshake className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600 font-medium">No partners matched your filter criteria.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedCity('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Become a Partner Callout - Light Dark Corporate Navy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-[#2B4B75] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Join Our Network
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Interested in Becoming an Authorized Partner or Dealer?
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Whether you run an international school looking for accredited courseware with in-service teacher workshops, or a children&apos;s book retailer seeking wholesale consignment terms, DIR welcomes your partnership.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-5 bg-white hover:bg-blue-50 text-[#1E3A5F] text-xs font-bold rounded-xl transition-all shadow-xs text-center cursor-pointer"
              >
                Apply for Institutional Partnership
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 text-center transition-colors cursor-pointer"
              >
                Request Free Sample Package
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
