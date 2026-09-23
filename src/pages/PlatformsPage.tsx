import React from 'react';
import { ENTERPRISE_PLATFORMS } from '../data/synergyData';
import { PageId } from '../types';
import { motion } from 'motion/react';
import { Cpu, Cloud, Workflow, Database, Server, Network, ArrowRight } from 'lucide-react';

interface PlatformsPageProps {
  onNavigate: (page: PageId) => void;
}

export const PlatformsPage: React.FC<PlatformsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section className="bg-gradient-to-br from-[#0F1E33] to-[#1E3A5F] text-white py-16 sm:py-24 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#0EA5E9] uppercase tracking-wider">
              Integration Platforms Ecosystem
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
              Certified Expertise Across Leading iPaaS & Cloud Platforms
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our certified architecture capabilities across SnapLogic, Workato, AWS, Boomi, Celigo, and MuleSoft.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Platforms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENTERPRISE_PLATFORMS.map((plt) => (
            <div
              key={plt.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 space-y-6 hover:border-[#0EA5E9] hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-[#0EA5E9]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0EA5E9] bg-sky-50 px-3 py-1 rounded-full">
                    {plt.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900">
                  {plt.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {plt.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Core Expertise:
                  </span>
                  <p className="text-xs text-slate-500 font-medium">
                    {plt.expertise}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Typical Enterprise Use Case:
                  </span>
                  <p className="text-xs text-slate-500 italic">
                    &ldquo;{plt.useCase}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-[#0EA5E9] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Platform Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
