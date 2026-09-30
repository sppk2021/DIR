import React from 'react';
import { PageId } from '../types';
import { DIRLogo } from './DIRLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1728] text-slate-300 text-xs border-t border-[#162A45]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-14 space-y-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-4 space-y-3">
            <button
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <DIRLogo size="sm" textColor="white" showText={true} />
            </button>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Digital Information Resources Co., Ltd. provides integrated educational solutions, global curricula, STEM robotics, and institutional consultancy across Myanmar.
            </p>
            <div className="pt-2 text-slate-400 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Myaing Hay Wun Condo, 8 Miles, Mayangone Township, Yangon</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>+95 186 510 49 / +95 9 797 007 881</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>info@dir.com.mm</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (No Impact, No Resources) */}
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-8">
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Navigation
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('courseware')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    Business Units
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('partners')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer text-slate-300"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Key Divisions
              </span>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <button
                    onClick={() => onNavigate('courseware')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    DIR Courseware (B2B)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('digital-hub')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Win Digital Learning Hub
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('bookstore')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    U Book Store (UBS)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Teacher Development & TOT
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Social & Connect */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1E4592] hover:bg-[#1E4592]/20 transition-colors"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0284C7] hover:bg-[#0284C7]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-xs">in</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#E11D48] hover:bg-[#E11D48]/20 transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xs">▶</span>
              </a>
            </div>
            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#1E4592] hover:bg-[#153472] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 Digital Information Resources Co., Ltd. (DIR). All rights reserved.</p>
          <p>Member of Myint Thukha Nadi (MTKN) Group</p>
        </div>
      </div>
    </footer>
  );
};
