import React from 'react';
import { CASE_STUDIES } from '../data/synergyData';
import { PageId } from '../types';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
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
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Enterprise Success Stories
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight">
              Proven Impact Across Financial Services, SaaS & Retail
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore how our integration architecture empowered leading organizations to eliminate data silos, automate workflows, and achieve lightning-fast data pipelines.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#0EA5E9] uppercase tracking-wider">
                  {cs.industry}
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                  {cs.clientName}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-mono font-bold text-xs border border-emerald-200">
                  {cs.metrics}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-sky-50 text-[#0EA5E9] font-mono font-bold text-xs border border-sky-200">
                  {cs.platform}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-base text-slate-800">
                  Integration Challenge & Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900">
                  Measured Business Results:
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {cs.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Verified Enterprise Deployment
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-[#0EA5E9] text-white rounded-xl text-xs font-bold hover:bg-[#0284C7] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
