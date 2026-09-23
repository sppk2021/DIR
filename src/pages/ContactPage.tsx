import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/dirData';
import { PageId } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  Building,
  School,
  Store,
  Bot
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [unitInterest, setUnitInterest] = useState('DIR Courseware (School B2B)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields so our team can follow up with you.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* Header Banner - Corporate Navy with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-12 bottom-0 w-80 h-80 bg-orange-400/15 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold uppercase tracking-wider text-orange-400">Direct Inquiries</span>
              <span aria-hidden="true">·</span>
              <span>Yangon Headquarters & Institutional Advisory</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Get in Touch with Digital Information Resources
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Our academic consultants, book distributors, and STEM educators are ready to assist you. Visit our Mayangone headquarters, schedule a curriculum demo, or request a wholesale quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Headquarters Information (Slide 21) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-display font-bold text-xl text-slate-900 pb-4 border-b border-slate-100">
                Yangon Central Headquarters
              </h2>

              <div className="space-y-5 text-xs text-slate-600">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-semibold text-sm">Corporate Office</strong>
                    <p className="leading-relaxed text-slate-600">
                      {COMPANY_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-400 block">Near 8 Miles Junction, Mayangone</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-semibold text-sm">Official Inquiry Email</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-blue-600 hover:underline font-medium text-xs block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block">Monitored during business hours</span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <strong className="block text-slate-900 font-semibold text-sm">Direct Phone Hotlines</strong>
                    {COMPANY_INFO.phones.map((phone, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="font-mono font-medium text-slate-800 hover:text-blue-600"
                        >
                          {phone}
                        </a>
                        <span className="text-[10px] text-slate-400">Line {i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-slate-900 font-semibold text-sm">Business Hours</strong>
                    <p className="leading-relaxed text-slate-600">
                      Monday – Friday: 9:00 AM – 5:30 PM<br />
                      Saturday – Sunday: 9:00 AM – 4:00 PM (Win Digital Learning Hub Sessions)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Department Shortcuts */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Connect by Department
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <button
                    onClick={() => setUnitInterest('DIR Courseware (School B2B)')}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium transition-colors"
                  >
                    Courseware
                  </button>
                  <button
                    onClick={() => setUnitInterest('U Book Store (Wholesale & Retail)')}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 font-medium transition-colors"
                  >
                    U Bookstore
                  </button>
                  <button
                    onClick={() => setUnitInterest('Win Digital Learning Hub (STEM)')}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-700 font-medium transition-colors"
                  >
                    STEM Hub
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{fullName}</strong>. Your inquiry regarding <strong className="text-slate-900">{unitInterest}</strong> has been transmitted to our office in Mayangone, Yangon.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-600">
                    <div><strong>Email:</strong> {email}</div>
                    <div><strong>Phone:</strong> {phone}</div>
                    <div><strong>Response SLA:</strong> Within 1 business day</div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      Send an Official Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Request inspection copies, teacher training, retail terms, or trial STEM classes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. U Kyaw Zayar"
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / School Name
                      </label>
                      <input
                        type="text"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="e.g. Apex International Academy"
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contact@school.com"
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-rose-500">*</span>
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Unit / Inquiry Area
                    </label>
                    <select
                      value={unitInterest}
                      onChange={(e) => setUnitInterest(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      <option>DIR Courseware (School B2B)</option>
                      <option>Jolly Classroom Phonics Whiteboard Demo</option>
                      <option>National Geographic Learning Inspection Copy</option>
                      <option>Binary Logic Digital Kids & Teens (ISTE Seal)</option>
                      <option>Rainbow KG Series Preschool Order</option>
                      <option>U Book Store (Wholesale & Retail)</option>
                      <option>Win Digital Learning Hub (STEM & Robotics Trial)</option>
                      <option>Teacher Training & Workshop Booking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Requirements <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify grade levels, student counts, delivery timeline, or questions..."
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[11px] text-slate-400">
                      Response directly to your email & phone
                    </span>
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
