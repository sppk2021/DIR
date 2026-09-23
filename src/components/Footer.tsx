import React from 'react';
import { DIRLogo } from './DIRLogo';
import { COMPANY_INFO } from '../data/dirData';
import { PageId } from '../types';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#13253B] text-slate-300 text-xs border-t border-[#1F395A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Parent Group */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <DIRLogo size="md" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Digital Information Resources Co., Ltd (DIR) empowers schools, educators, and young learners across Myanmar with world-standard curricula, STEM robotics, and curated educational resources.
            </p>
            <div className="pt-3 border-t border-white/10">
              <span className="text-[11px] font-bold text-[#FB923C] uppercase tracking-wider block">
                Parent Conglomerate
              </span>
              <p className="text-slate-100 text-xs mt-0.5 font-medium">
                {COMPANY_INFO.parentCompany} · Founded {COMPANY_INFO.parentFounded}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-1.5">
                <span className="text-orange-400 font-semibold">{COMPANY_INFO.parentYears} Years Excellence</span>
                <span aria-hidden="true">·</span>
                <span className="text-blue-300 font-semibold">{COMPANY_INFO.parentEmployees} Employees</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-300 font-semibold">{COMPANY_INFO.parentCountries} Countries</span>
              </div>
            </div>
          </div>

          {/* Column 2: 3 Business Units */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#F15A24] rounded-full" />
              <span>Business Units</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('courseware')}
                  className="hover:text-[#60A5FA] transition-colors text-left text-slate-300 cursor-pointer group"
                >
                  <span className="font-bold block text-slate-200 group-hover:text-blue-400">DIR Courseware</span>
                  <span className="text-[11px] text-slate-400">B2B Institutional Solutions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bookstore')}
                  className="hover:text-[#FB923C] transition-colors text-left text-slate-300 cursor-pointer group"
                >
                  <span className="font-bold block text-slate-200 group-hover:text-[#FB923C]">U Book Store</span>
                  <span className="text-[11px] text-slate-400">Kids Books & Activities</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('digital-hub')}
                  className="hover:text-purple-400 transition-colors text-left text-slate-300 cursor-pointer group"
                >
                  <span className="font-bold block text-slate-200 group-hover:text-purple-400">Win Digital Learning Hub</span>
                  <span className="text-[11px] text-slate-400">STEM, Robotics & Coding</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Navigation */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#1E4592] rounded-full" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  About Group & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  Services Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courseware')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  International Curricula
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('infographics')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  Interactive Infographics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  School & Retail Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F15A24] transition-colors cursor-pointer">
                  Contact & Inspection Copy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#F15A24] rounded-full" />
              <span>Headquarters</span>
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white underline-offset-2 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#FB923C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {COMPANY_INFO.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Digital Information Resources Co., Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium">Mayangone Township, Yangon</span>
            <span aria-hidden="true" className="text-orange-500">·</span>
            <span className="text-slate-400 font-medium">Myanmar Educational Courseware</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
