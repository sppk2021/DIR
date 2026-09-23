import React, { useState, useRef } from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/dirData';
import { PageId, QuoteItem, ServiceOffering } from '../types';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Store,
  Bot,
  GraduationCap,
  ShieldCheck,
  Clock,
  Workflow,
  Plus,
  Check,
  SlidersHorizontal,
  ChevronRight,
  BarChart,
  PackageCheck
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onAddToQuote: (item: QuoteItem) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onAddToQuote,
  onOpenQuoteModal
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('curriculum-courseware');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);
  const [addedServices, setAddedServices] = useState<Set<string>>(new Set());

  const { scrollY } = useScroll();
  const heroContentY = useTransform(scrollY, [0, 400], [0, 35]);
  const heroBgY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0.35]);

  const workflowSectionRef = useRef<HTMLElement>(null);

  // Interactive Scope Estimator State
  const [estimatorClientType, setEstimatorClientType] = useState<
    'international-school' | 'preschool' | 'bookstore' | 'stem-student'
  >('international-school');

  const activeService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setActiveWorkflowStep(0);
    setTimeout(() => {
      workflowSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleAddService = (service: ServiceOffering) => {
    onAddToQuote({
      id: service.id,
      title: service.title,
      type: 'service',
      publisherOrCategory: service.unit
    });
    setAddedServices((prev) => new Set(prev).add(service.id));
  };

  const getServiceIcon = (type: ServiceOffering['iconType']) => {
    switch (type) {
      case 'courseware':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'bookstore':
        return <Store className="w-5 h-5 text-amber-600" />;
      case 'stem':
        return <Bot className="w-5 h-5 text-rose-600" />;
      case 'training':
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 overflow-hidden">
      {/* Hero Banner - Corporate Navy with Parallax */}
      <section className="bg-[#1E4592] text-white py-14 sm:py-20 border-b border-blue-900 relative overflow-hidden">
        {/* Parallax Background Glow Elements */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: heroBgY }}
          className="absolute -left-12 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-2xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroContentY, opacity: heroOpacity }}
            className="max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200">
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-bold uppercase tracking-wider text-orange-400">Strategic Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>Comprehensive Educational Services</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Turnkey Educational & Distribution Services
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              DIR provides end-to-end educational infrastructure across Myanmar: from international curriculum licensing and certified teacher masterclasses to nationwide retail bookstore supply and weekend robotics labs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Infographic 01: The 4 Service Arenas Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Infographic Overview · Core Capabilities
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Four Pillars of Institutional Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any service to view its detailed value proposition, lifecycle workflow, and deliverables.
            </p>
          </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <motion.button
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
                }}
                onClick={() => handleSelectService(service.id)}
                className={`p-6 rounded-2xl border-2 text-left transition-all flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/40 shadow-md ring-2 ring-blue-600/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-100 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconType)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-blue-600' : 'text-slate-500'}>
                    {isSelected ? 'Active Service View' : 'Explore Workflow'}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      {/* Service Deep-Dive: Value Proposition & Interactive Workflow Infographic */}
      <section ref={workflowSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-10">
          {/* Active Service Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {activeService.slideRef}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-500">{activeService.unit}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                {activeService.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                {activeService.valueProposition}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={() => handleAddService(activeService)}
                className={`py-3 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs ${
                  addedServices.has(activeService.id)
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {addedServices.has(activeService.id) ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Consultation List</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Request Service Proposal</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="py-2.5 px-5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 transition-colors text-center"
              >
                View Consultation Basket
              </button>
            </div>
          </div>

          {/* Infographic 02: Interactive Service Lifecycle Workflow */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Infographic 02 · Service Lifecycle & Implementation
                </span>
                <h4 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                  How We Deliver This Service (Phase 01 to 04)
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Step {activeWorkflowStep + 1} of {activeService.workflowSteps.length}
              </span>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {activeService.workflowSteps.map((step, idx) => {
                const isActive = activeWorkflowStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveWorkflowStep(idx)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isActive
                        ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-1 ring-blue-600'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-blue-600 block">
                      Phase {step.step}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-slate-900 block mt-1 line-clamp-1">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Highlight Box - Light Dark Corporate Navy */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white space-y-3 border border-[#2B4B75] shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#F15A24] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {activeService.workflowSteps[activeWorkflowStep].step}
                </span>
                <h5 className="font-display font-bold text-lg text-white">
                  {activeService.workflowSteps[activeWorkflowStep].title}
                </h5>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed pl-11">
                {activeService.workflowSteps[activeWorkflowStep].detail}
              </p>
            </div>
          </div>

          {/* Two-Column Deliverables & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-blue-600" />
                <h5 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Guaranteed Deliverables
                </h5>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeService.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-600" />
                <h5 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                  Designed For Client Profiles
                </h5>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeService.targetClients.map((client, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{client}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-200 text-xs font-semibold text-blue-700 flex items-center justify-between">
                <span>Benchmark Metric:</span>
                <span className="text-slate-800">{activeService.metrics}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Infographic 03: Interactive Scope & Package Estimator Tool - Light Dark Corporate Navy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E3A5F] via-[#1B355A] to-[#162D4A] text-white rounded-3xl p-8 sm:p-12 border border-[#2B4B75] shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Interactive Estimator
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                Institutional Service Package Tailoring
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-lg">
                Select your institutional classification to preview the recommended service setup, implementation timeline, and SLA commitments.
              </p>
            </div>

            {/* Profile Selector */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/10 rounded-xl border border-white/15">
              {[
                { id: 'international-school', label: 'K-12 International School' },
                { id: 'preschool', label: 'Preschool & Early Childhood' },
                { id: 'bookstore', label: 'Bookstore Retailer' },
                { id: 'stem-student', label: 'Weekend STEM Student' }
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setEstimatorClientType(role.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    estimatorClientType === role.id
                      ? 'bg-white text-[#1E3A5F] font-bold shadow-xs'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estimator Dynamic Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-200 block font-bold">
                Recommended Service Suite
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                {estimatorClientType === 'international-school' && 'Full K-12 English & Computing Continuum'}
                {estimatorClientType === 'preschool' && 'Rainbow KG Series + Jolly Classroom Phonics'}
                {estimatorClientType === 'bookstore' && 'U Book Store Wholesale & Consignment Supply'}
                {estimatorClientType === 'stem-student' && 'WDLH Hands-On Weekend Robotics & Python'}
              </h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                {estimatorClientType === 'international-school' &&
                  'Complete integration with National Geographic Look/New Close-up and Binary Logic Digital Kids/Teens with ISTE SEAL.'}
                {estimatorClientType === 'preschool' &&
                  'Foundational Asian preschool 12-book set for English, Math, and Science plus touchscreen synthetic phonics software.'}
                {estimatorClientType === 'bookstore' &&
                  'Official Dav Pilkey Dog Man series, reading activity boxes, math dominoes, and branded POS display stands.'}
                {estimatorClientType === 'stem-student' &&
                  '1-to-1 robotic kit assembly, Scratch visual block coding, Python terminal tools, and term demonstration days.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block font-bold">
                Implementation SLA & Logistics
              </span>
              <div className="space-y-2 text-xs text-blue-100">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span>Inspection Copy Dispatch:</span>
                  <strong className="text-white">24 – 48 Hours</strong>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span>Teacher Training Workshop:</span>
                  <strong className="text-white">Full In-Service Day</strong>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span>Stock Buffer:</span>
                  <strong className="text-white">Yangon Warehouse Ready</strong>
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <span>Regional Delivery Corridors:</span>
                  <strong className="text-white">MTKN Express Network</strong>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 block font-bold">
                  Institutional Value Benefit
                </span>
                <p className="text-xs text-blue-100 leading-relaxed mt-2">
                  Zero customs hold-ups, certified teacher credentials, and direct local technical support from Mayangone Headquarters.
                </p>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-4 bg-white hover:bg-blue-50 text-[#1E3A5F] rounded-xl text-xs font-bold shadow-xs text-center transition-all cursor-pointer"
              >
                Inquire for This Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Infographic 04: DIR Ecosystem vs Traditional Fragmented Sourcing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Comparative Value Analysis
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Why Myanmar Educators Choose DIR Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A comprehensive institutional partnership vs fragmented book trading.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-12 bg-[#1E4592] text-white p-4 sm:p-5 text-xs font-semibold">
            <div className="col-span-5 sm:col-span-4">Service Feature & Dimension</div>
            <div className="col-span-3 sm:col-span-4 text-slate-400">Traditional Book Importers</div>
            <div className="col-span-4 sm:col-span-4 text-blue-400 font-bold">DIR Educational Ecosystem</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs text-slate-700">
            <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
              <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Teacher Training & In-Service Workshops
              </div>
              <div className="col-span-3 sm:col-span-4 text-slate-500">None / Self-study only</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified On-site & Digital Masterclasses</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center bg-slate-50/50">
              <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Interactive Whiteboard Software (CPT)
              </div>
              <div className="col-span-3 sm:col-span-4 text-slate-500">Print books only</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official Jolly Classroom & NatGeo CPT Software</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
              <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Local Stock Buffer in Yangon
              </div>
              <div className="col-span-3 sm:col-span-4 text-slate-500">6–12 weeks wait from overseas</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate Yangon Stock & Re-orders</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center bg-slate-50/50">
              <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Global Accreditation Standards
              </div>
              <div className="col-span-3 sm:col-span-4 text-slate-500">Unvetted regional reprints</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISTE SEAL Certified & CEFR Benchmarked</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 sm:p-5 items-center">
              <div className="col-span-5 sm:col-span-4 font-semibold text-slate-900">
                Sample Copies for School Boards
              </div>
              <div className="col-span-3 sm:col-span-4 text-slate-500">Must purchase full retail</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Evaluation & Inspection Copy Sets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Partner & School Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialCarousel
          title="Institutional Outcomes & Educator Feedback"
          subtitle="How school principals, teachers, and student coders benefit from DIR's structured curricula, in-service masterclasses, and certified robotics kits."
        />
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="font-display font-bold text-2xl text-slate-900">
          Ready to Upgrade Your Institution&apos;s Educational Capabilities?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Connect with our academic consultants at Mayangone Headquarters to request free sample materials, teacher training, or bookstore dealer pricing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
          >
            Contact Mayangone Office
          </button>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            Review Consultation List
          </button>
        </div>
      </section>
      </motion.div>
    </div>
  );
};
