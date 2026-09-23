import React, { useState } from 'react';
import { BOOKS_CATALOG, RETAIL_PARTNERS } from '../data/dirData';
import { BookItem, PageId, QuoteItem } from '../types';
import { PartnerBadge } from '../components/PartnerLogos';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  BookOpen,
  Search,
  Check,
  Plus,
  ShoppingBag,
  Store,
  Layers,
  Sparkles,
  ArrowRight,
  PackageCheck
} from 'lucide-react';

interface BookstorePageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const BookstorePage: React.FC<BookstorePageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const [activeBook, setActiveBook] = useState<BookItem | null>(null);

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroMetricsY = useTransform(scrollY, [0, 400], [0, 48]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -35]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const categories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'comics', label: 'Graphic Novels (Dog Man)' },
    { id: 'preschool', label: 'Preschool Learning Kits' },
    { id: 'activity-kits', label: 'Activity & Dominoes' },
    { id: 'readers', label: 'Storybooks & Readers' },
    { id: 'knowledge', label: 'STEM & Knowledge Boosters' }
  ];

  const filteredBooks = BOOKS_CATALOG.filter((book) => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.recommendedAge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddBook = (book: BookItem) => {
    onAddToQuote({
      id: book.id,
      title: book.title,
      type: 'book',
      publisherOrCategory: book.recommendedAge
    });
    setAddedIds((prev) => new Set(prev).add(book.id));
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner with Parallax */}
      <section className="bg-linear-to-br from-[#0B1733] via-[#7C2D12] to-[#F15A24] text-white py-14 sm:py-20 border-b border-orange-500/40 relative overflow-hidden">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-16 -top-16 w-96 h-96 bg-orange-400/25 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-16 bottom-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              style={{ y: heroContentY, opacity: heroOpacity }}
              className="lg:col-span-8 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-200 text-xs font-bold shadow-2xs">
                <Store className="w-3.5 h-3.5 text-[#FB923C]" />
                <span>U Book Store (UBS) · Distribution & Retail</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
                One-Stop Kids Books & Educational Activity Tools
              </h1>
              <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
                U Book Store (UBS) operates as the kids&apos; books and activities tools distributor across Myanmar, focusing on curated sales of educational materials, supplementary reading, and specialized books to both B2B and B2C segments.
              </p>
            </motion.div>

            {/* Slide 16 Key Metrics with Parallax Depth */}
            <motion.div
              style={{ y: heroMetricsY, opacity: heroOpacity }}
              className="lg:col-span-4 grid grid-cols-3 gap-3"
            >
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xs">
                <div className="font-display font-black text-2xl text-[#FB923C] tabular-nums">50+</div>
                <div className="text-[11px] text-white mt-1 font-semibold">Books & Kits</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xs">
                <div className="font-display font-black text-2xl text-[#FB923C] tabular-nums">50+</div>
                <div className="text-[11px] text-white mt-1 font-semibold">Retail Stores</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center shadow-xs">
                <div className="font-display font-black text-2xl text-[#FB923C] tabular-nums">3+</div>
                <div className="text-[11px] text-white mt-1 font-semibold">Major Cities</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#F15A24] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#F15A24] hover:bg-orange-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search books, activity sets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:bg-white transition-all"
            />
          </div>
        </div>
      </section>

      {/* Book Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={selectedCategory + searchQuery}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.07, delayChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredBooks.map((book) => {
            const isAdded = addedIds.has(book.id);

            return (
              <motion.div
                key={book.id}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }
                }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Top Bar / Accent */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: book.coverAccent || '#F59E0B' }}
                  />

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        {book.recommendedAge}
                      </span>
                      {book.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60 uppercase">
                          {book.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {book.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Highlights */}
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      {book.highlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span className="w-1 h-1 rounded-full bg-amber-500" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveBook(book)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Quick View
                  </button>

                  <button
                    onClick={() => handleAddBook(book)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isAdded
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-[#F15A24] text-white hover:bg-[#D44512] shadow-xs cursor-pointer'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>In Inquiry</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to List</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Slide 18 Retail Distribution Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Slide 18 Profile Spotlight
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                Our Nationwide Retail Partners Network
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                U Book Store distributes through premier physical book centers, concept stores, and lifestyle cafes across Yangon, Mandalay, and regional hubs.
              </p>
            </div>
            <button
              onClick={() => onNavigate('partners')}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View Full Partner Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {RETAIL_PARTNERS.slice(0, 8).map((rp) => (
              <PartnerBadge
                key={rp.id}
                id={rp.id}
                name={rp.name}
                category={rp.category}
                type={rp.type}
                city={rp.city}
                collaboration={rp.collaboration}
                programsAdopted={rp.programsAdopted}
                foundedOrScale={rp.foundedOrScale}
              />
            ))}
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <PackageCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="text-slate-700">
                <strong>Interested in becoming an authorized retail dealer?</strong> Contact U Book Store for consignment terms and catalog dealer discounts.
              </span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 shrink-0 shadow-xs"
            >
              Apply as Retail Partner
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {activeBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E33]/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  U Book Store Featured Resource
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mt-0.5">
                  {activeBook.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveBook(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="flex items-center gap-4 text-slate-500">
                <span>Recommended: <strong className="text-slate-800">{activeBook.recommendedAge}</strong></span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">Available for Wholesale & Retail</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeBook.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Included Highlights
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeBook.highlights.map((h, i) => (
                    <div key={i} className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                      ✓ {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setActiveBook(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleAddBook(activeBook);
                  setActiveBook(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs"
              >
                Add to Wholesale / Retail Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
