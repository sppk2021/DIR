import React from 'react';
import { MasterPartnerLogo } from './OfficialLogos';

interface PartnerBadgeProps {
  id?: string;
  name: string;
  category: 'school' | 'retail';
  type?: string;
  city?: string;
  collaboration?: string;
  programsAdopted?: string[];
  foundedOrScale?: string;
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
  size = 'md',
  onClick
}) => {
  const isSchool = category === 'school';

  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-between p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1E4592]/50 hover:shadow-md transition-all group ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-start gap-3.5">
        {/* Official Vector Logo */}
        <div className="shrink-0 group-hover:scale-105 transition-transform">
          <MasterPartnerLogo
            partnerId={id}
            category={category}
            size={size === 'lg' ? 56 : size === 'sm' ? 40 : 48}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <span className={isSchool ? 'text-[#1E4592]' : 'text-[#F15A24]'}>
              {isSchool ? 'School' : 'Retailer'}
            </span>
            {city && (
              <>
                <span>·</span>
                <span>{city}</span>
              </>
            )}
          </div>
          <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#1E4592] transition-colors mt-0.5">
            {name}
          </h4>
          {type && <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{type}</p>}
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
