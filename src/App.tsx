/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageId, QuoteItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SampleQuoteModal } from './components/SampleQuoteModal';

// Code-split page components with React.lazy to optimize initial bundle size & load times
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const CoursewarePage = lazy(() => import('./pages/CoursewarePage').then((m) => ({ default: m.CoursewarePage })));
const BookstorePage = lazy(() => import('./pages/BookstorePage').then((m) => ({ default: m.BookstorePage })));
const DigitalHubPage = lazy(() => import('./pages/DigitalHubPage').then((m) => ({ default: m.DigitalHubPage })));
const InfographicsPage = lazy(() => import('./pages/InfographicsPage').then((m) => ({ default: m.InfographicsPage })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').then((m) => ({ default: m.PartnersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

// Professional, lightweight fallback loader matching brand palette
const PageLoadingFallback = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-slate-200 border-t-[#1E4592] rounded-full animate-spin" />
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
        Loading...
      </span>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Initialize and synchronize with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'courseware',
        'bookstore',
        'digital-hub',
        'infographics',
        'partners',
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToQuote = (item: QuoteItem) => {
    setQuoteItems((prev) => {
      if (prev.some((p) => p.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const handleRemoveQuoteItem = (id: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearQuoteItems = () => {
    setQuoteItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        quoteItems={quoteItems}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Multi-Page Content with Suspense Code-Splitting */}
      <main className="flex-1">
        <Suspense fallback={<PageLoadingFallback />}>
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'courseware' && (
            <CoursewarePage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'bookstore' && (
            <BookstorePage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'digital-hub' && (
            <DigitalHubPage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'infographics' && (
            <InfographicsPage
              onNavigate={handleNavigate}
              onAddToQuote={handleAddToQuote}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'partners' && (
            <PartnersPage
              onNavigate={handleNavigate}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}
        </Suspense>
      </main>

      {/* Global Inspection Copy / Quotation Basket Modal */}
      <SampleQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveQuoteItem}
        onClearItems={handleClearQuoteItems}
      />

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
