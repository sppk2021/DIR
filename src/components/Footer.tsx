import React from 'react';
import { PageId } from '../types';
import { DIRLogo } from './DIRLogo';
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

          {/* Quick Navigation Links */}
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

          {/* Right Social & Connect with Clean Modern Icons */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Connect With Us
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {config.socialLinks
                .filter((s) => s.enabled)
                .map((item) => {
                  const p = item.platform as string;
                  return (
                    <a
                      key={item.platform}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-xs"
                    >
                      {p === 'facebook' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      )}
                      {p === 'linkedin' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63z" />
                        </svg>
                      )}
                      {p === 'youtube' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      )}
                      {p === 'instagram' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {(p === 'twitter' || p === 'tiktok' || p === 'telegram' || p === 'viber' || p === 'email' || p === 'website') && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                        </svg>
                      )}
                    </a>
                  );
                })}
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

        {/* Bottom Hairline & Copyright (MTKN Group removed) */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 Digital Information Resources Co., Ltd. (DIR). All rights reserved.</p>
          <div className="flex items-center gap-4">
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
