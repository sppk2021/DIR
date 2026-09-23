import React from 'react';

export const HomePageSkeleton: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden animate-pulse">
      {/* 1. Main Visual Gallery Carousel Skeleton */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8">
        <div className="w-full h-[320px] sm:h-[440px] lg:h-[500px] rounded-xl bg-slate-200 animate-shimmer" />
      </div>

      {/* 2. Hero Section Skeleton */}
      <div className="bg-slate-100/70 border-y border-slate-200 py-12 sm:py-20">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Skeleton */}
            <div className="lg:col-span-7 space-y-6">
              <div className="h-4 w-64 bg-slate-200 rounded-md animate-shimmer" />
              <div className="space-y-3">
                <div className="h-10 sm:h-12 w-11/12 bg-slate-200 rounded-lg animate-shimmer" />
                <div className="h-10 sm:h-12 w-4/5 bg-slate-200 rounded-lg animate-shimmer" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 rounded-md animate-shimmer" />
                <div className="h-4 w-5/6 bg-slate-200 rounded-md animate-shimmer" />
              </div>

              {/* Search Bar Skeleton */}
              <div className="h-12 w-full max-w-xl bg-slate-200 rounded-xl animate-shimmer" />

              {/* Buttons Skeleton */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="h-11 w-44 bg-slate-200 rounded-xl animate-shimmer" />
                <div className="h-11 w-40 bg-slate-200 rounded-xl animate-shimmer" />
              </div>

              {/* Stats Skeleton */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 max-w-lg">
                <div className="space-y-2">
                  <div className="h-7 w-16 bg-slate-200 rounded-md animate-shimmer" />
                  <div className="h-3 w-20 bg-slate-200 rounded-sm animate-shimmer" />
                </div>
                <div className="space-y-2">
                  <div className="h-7 w-16 bg-slate-200 rounded-md animate-shimmer" />
                  <div className="h-3 w-20 bg-slate-200 rounded-sm animate-shimmer" />
                </div>
                <div className="space-y-2">
                  <div className="h-7 w-16 bg-slate-200 rounded-md animate-shimmer" />
                  <div className="h-3 w-20 bg-slate-200 rounded-sm animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Right Column Card Skeleton */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-white p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex justify-between pb-3 border-b border-slate-100">
                  <div className="h-5 w-32 bg-slate-200 rounded-md animate-shimmer" />
                  <div className="h-4 w-20 bg-slate-200 rounded-md animate-shimmer" />
                </div>
                <div className="space-y-3">
                  <div className="h-18 w-full bg-slate-100 rounded-xl animate-shimmer" />
                  <div className="h-18 w-full bg-slate-100 rounded-xl animate-shimmer" />
                  <div className="h-18 w-full bg-slate-100 rounded-xl animate-shimmer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Educational Pathways 4-Grid Skeleton */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
        <div className="space-y-2 max-w-md">
          <div className="h-4 w-28 bg-slate-200 rounded-md animate-shimmer" />
          <div className="h-8 w-72 bg-slate-200 rounded-lg animate-shimmer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 h-64">
              <div className="w-10 h-10 rounded-xl bg-slate-200 animate-shimmer" />
              <div className="h-5 w-3/4 bg-slate-200 rounded-md animate-shimmer" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-100 rounded-md animate-shimmer" />
                <div className="h-3 w-4/5 bg-slate-100 rounded-md animate-shimmer" />
              </div>
              <div className="h-9 w-full bg-slate-100 rounded-xl animate-shimmer mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. 3 Core Business Units Skeleton */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
        <div className="space-y-2 max-w-md">
          <div className="h-4 w-28 bg-slate-200 rounded-md animate-shimmer" />
          <div className="h-8 w-80 bg-slate-200 rounded-lg animate-shimmer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 space-y-4 h-72">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-slate-200 rounded-md animate-shimmer" />
                <div className="h-4 w-20 bg-slate-200 rounded-md animate-shimmer" />
              </div>
              <div className="h-6 w-3/4 bg-slate-200 rounded-md animate-shimmer" />
              <div className="space-y-2">
                <div className="h-3.5 w-full bg-slate-100 rounded-md animate-shimmer" />
                <div className="h-3.5 w-5/6 bg-slate-100 rounded-md animate-shimmer" />
                <div className="h-3.5 w-2/3 bg-slate-100 rounded-md animate-shimmer" />
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <div className="h-4 w-28 bg-slate-200 rounded-md animate-shimmer" />
                <div className="h-4 w-16 bg-slate-200 rounded-md animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Parent Heritage Skeleton */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-xl bg-slate-200 h-64 w-full animate-shimmer" />
      </div>
    </div>
  );
};
