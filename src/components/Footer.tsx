import React from 'react';
import { PageId } from '../types';
import { DIRLogo } from './DIRLogo';
import { SocialIcon3D } from './SocialIcon3D';
import { Mail, Phone, MapPin, Lock } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config } = useSiteConfig();
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
                <span>{config.contact.address || 'Myaing Hay Wun Condo, 8 Miles, Mayangone Township, Yangon'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>{config.contact.phone || '+95 186 510 49 / +95 9 797 007 881'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>{config.contact.email || 'info@dir.com.mm'}</span>
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
            <div className="flex flex-wrap items-center gap-3">
              {config.socialLinks
                .filter((s) => s.enabled)
                .map((item) => (
                  <SocialIcon3D
                    key={item.platform}
                    platform={item.platform as any}
                    href={item.url}
                    label={item.label}
                    size="md"
                  />
                ))}
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
          <div className="flex items-center gap-4">
            <p>Member of Myint Thukha Nadi (MTKN) Group</p>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onNavigate('admin')}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
              title="Open Backend Admin Management"
            >
              <Lock className="w-3 h-3 text-[#0284C7]" />
              <span>Admin Login</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
