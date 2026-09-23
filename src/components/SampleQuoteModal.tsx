import React, { useState } from 'react';
import { QuoteItem } from '../types';
import { X, Trash2, CheckCircle, Send, School, BookOpen, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/dirData';

interface SampleQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onRemoveItem: (id: string) => void;
  onClearItems: () => void;
}

export const SampleQuoteModal: React.FC<SampleQuoteModalProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearItems
}) => {
  const [institutionName, setInstitutionName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('School Principal / Academic Director');
  const [inquiryType, setInquiryType] = useState<'inspection-copy' | 'wholesale' | 'stem-batch'>('inspection-copy');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please provide your full name, email, and contact phone number.');
      return;
    }
    // Simple email regex validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClearItems();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E33]/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              {submitted ? 'Inquiry Submitted' : 'Request Inspection Copy & Quotation'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Digital Information Resources Co., Ltd (DIR) Institutional Desk
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xl text-slate-900">
                  Thank You, {contactName}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your inquiry has been logged with DIR’s Educational Consultation team. We will contact you at <strong className="text-slate-800">{email}</strong> or <strong className="text-slate-800">{phone}</strong> within 1 business day.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-slate-600">
                  <span>Inquiry Ref:</span>
                  <span className="font-mono font-bold text-slate-900">DIR-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Institution:</span>
                  <span className="font-medium text-slate-800">{institutionName || 'Private Educator / Family'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Selected Resources:</span>
                  <span className="font-medium text-slate-800">{items.length} item(s)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>DIR Hotline:</span>
                  <span className="font-medium text-slate-800">{COMPANY_INFO.phones[0]}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close & Continue Exploring
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Selected Resources ({items.length})
                  </span>
                  {items.length > 0 && (
                    <button
                      onClick={onClearItems}
                      className="text-xs text-rose-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      Clear list
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="p-4 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-500 bg-slate-50">
                    No items selected yet. You can click &quot;Request Inspection Sample&quot; or &quot;Add to Quote&quot; on any Courseware, Book, or STEM class across the website.
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden max-h-48 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-white text-xs">
                        <div className="flex items-center gap-2 min-w-0 pr-2">
                          {item.type === 'curriculum' && <Layers className="w-4 h-4 text-blue-600 shrink-0" />}
                          {item.type === 'book' && <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />}
                          {item.type === 'course' && <School className="w-4 h-4 text-rose-600 shrink-0" />}
                          <div className="truncate">
                            <span className="font-semibold text-slate-800 block truncate">{item.title}</span>
                            <span className="text-[11px] text-slate-500">{item.publisherOrCategory}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Daw Thida Win"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      School / Institution / Store Name
                    </label>
                    <input
                      type="text"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="e.g. Horizon International School"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="principal@school.edu.mm"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+95 9..."
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Role / Designation
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      <option>School Principal / Academic Director</option>
                      <option>Curriculum Coordinator / Head of English</option>
                      <option>IT / STEM Teacher</option>
                      <option>Preschool Administrator</option>
                      <option>Bookstore Owner / Retail Dealer</option>
                      <option>Parent / Private Tutor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Objective
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as any)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      <option value="inspection-copy">Physical Inspection Sample for School</option>
                      <option value="wholesale">B2B Wholesale / Bulk Purchase</option>
                      <option value="stem-batch">Win Digital Learning Hub Enrollment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your grade levels, student count, or specific teacher training requirements..."
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">
                    Fast response via Yangon Head Office
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
