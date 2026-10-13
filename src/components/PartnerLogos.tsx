import React from 'react';
import { MasterPartnerLogo } from './OfficialLogos';
import { getPartnerLogo } from '../data/partnerAssets';

interface PartnerBadgeProps {
  id?: string;
  name: string;
  category: 'school' | 'retail';
  type?: string;
  city?: string;
  collaboration?: string;
  programsAdopted?: string[];
  foundedOrScale?: string;
  logoUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const PartnerBadge: React.FC<PartnerBadgeProps> = ({
  id = '',
  name,
  category,
  type,
  city,
  collaboration,
  programsAdopted,
  foundedOrScale,
  logoUrl,
  size = 'md',
  onClick
}) => {
  const isSchool = category === 'school';
  const logoDimensions = size === 'lg' ? 64 : size === 'sm' ? 44 : 52;
  // Resolve logo dynamically from centralized library or prop
  const resolvedLogoUrl = logoUrl || (id ? getPartnerLogo(id) : undefined);

  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1E4592]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div>
        {/* Top Prominent Logo Banner Container */}
        <div className="w-full h-24 sm:h-28 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center p-3 sm:p-4 mb-3.5 group-hover:bg-slate-50 group-hover:border-slate-200/80 transition-all overflow-hidden relative">
          {resolvedLogoUrl ? (
            <img
              src={resolvedLogoUrl}
              alt={`${name} Official Logo`}
              className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src !== '/assets/DIR-LOGO-Confirm.jpg') {
                  target.src = '/assets/DIR-LOGO-Confirm.jpg';
                }
              }}
            />
          ) : (
            <div className="group-hover:scale-105 transition-transform">
              <MasterPartnerLogo
                partnerId={id}
                category={category}
                size={logoDimensions}
              />
            </div>
          )}

          {/* Category Micro-Badge Overlay at Top Right of Logo Container */}
          <span
            className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border shadow-2xs ${
              isSchool
                ? 'bg-blue-50 text-[#1E4592] border-blue-200'
                : 'bg-orange-50 text-[#F15A24] border-orange-200'
            }`}
          >
            {isSchool ? 'School' : 'Retailer'}
          </span>
        </div>

        {/* Institutional Title & Location */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
            {city && (
              <span className="text-slate-600 font-medium">📍 {city}</span>
            )}
            {type && (
              <>
                <span>·</span>
                <span className="truncate">{type}</span>
              </>
            )}
          </div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#1E4592] transition-colors mt-1">
            {name}
          </h4>
        </div>
      </div>

      {/* Collaboration / Programs snippet */}
      {(collaboration || (programsAdopted && programsAdopted.length > 0)) && (
        <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
          {programsAdopted && programsAdopted.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {programsAdopted.slice(0, 2).map((prog, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 text-slate-700 truncate max-w-full"
                >
                  {prog}
                </span>
              ))}
            </div>
          )}
          {collaboration && (
            <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
              {collaboration}
            </p>
          )}
        </div>
      )}

      {foundedOrScale && (
        <div className="mt-2 text-[10px] text-slate-400 font-medium">
          {foundedOrScale}
        </div>
      )}
    </div>
  );
};
