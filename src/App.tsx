import React, { useState, useEffect } from 'react';
import { PageId, QuoteItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SampleQuoteModal } from './components/SampleQuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CoursewarePage } from './pages/CoursewarePage';
import { BookstorePage } from './pages/BookstorePage';
import { DigitalHubPage } from './pages/DigitalHubPage';
import { InfographicsPage } from './pages/InfographicsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        quoteItems={quoteItems}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToQuote={handleAddToQuote}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
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
        {currentPage === 'infographics' && <InfographicsPage onNavigate={handleNavigate} />}
        {currentPage === 'partners' && <PartnersPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <SampleQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveQuoteItem}
        onClear={handleClearQuoteItems}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
