
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { SERVICE_PRICING, PricingPlan } from '../../constants/pricing';
import { Code, Layout, Smartphone, Check, Zap, Sparkles, MousePointer2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { WA_LINKS } from '../../constants';
import PlanDetailModal from '../ui/PlanDetailModal';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  code: Code,
  layout: Layout,
  smartphone: Smartphone,
  consulting: MousePointer2
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}

// Spotlight Card Component for internal use
const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", isPopular = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border rounded-3xl transition-all duration-500 ${isPopular
        ? 'border-primary/50 bg-slate-900/5 dark:bg-white/5 shadow-2xl shadow-primary/20 scale-105 z-20'
        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary dark:hover:border-primary z-10'
        } ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${isPopular ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)'},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full rounded-3xl">{children}</div>
    </div>
  );
};

const Services: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(SERVICES[0]?.id);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Scroll management
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check URL params on mount and change
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      const foundService = SERVICES.find(s => s.id === tabFromUrl);
      if (foundService) {
        setActiveTabId(foundService.id);
      }
    }
  }, [searchParams]);

  const handleTabClick = (id: string) => {
    setActiveTabId(id);
    setSearchParams({ tab: id }, { replace: true });
  };

  // Check scroll position to enable/disable buttons
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Using a small buffer (1px) for floating point inaccuracies
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    // Re-check on window resize
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Get pricing plans for the active tab
  const activePricingPlans = SERVICE_PRICING[activeTabId] || [];
  const activeServiceInfo = SERVICES.find(s => s.id === activeTabId) || null;

  const { translations, t } = useLanguage();
  const tService = translations.services[activeTabId as keyof typeof translations.services];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles size={12} />
            <span>{translations.services.general.categoryLabel}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
          >
            {translations.services.general.mainTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {translations.services.general.mainSubtitle}
          </motion.p>
        </div>

        {/* SLIDER FILTER TABS (Normal Scroll) */}
        <div className="relative max-w-4xl mx-auto mb-12 group/slider px-8 md:px-12">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all md:-translate-x-2 ${!canScrollLeft
              ? 'opacity-50 cursor-not-allowed text-slate-300 dark:text-slate-600'
              : 'hover:bg-primary hover:text-white hover:border-primary'
              }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* List Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div className="flex gap-3 py-2 px-1">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon];
                const isActive = activeTabId === service.id;
                const tSvc = translations.services[service.id as keyof typeof translations.services];
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(service.id)}
                    className={`flex-shrink-0 relative flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap ${isActive
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/50 hover:text-primary dark:hover:text-primary'
                      }`}
                  >
                    <Icon size={16} className={isActive ? "text-white" : "currentColor"} />
                    <span className="relative z-10">{tSvc?.shortTitle || tSvc?.title || service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all md:translate-x-2 ${!canScrollRight
              ? 'opacity-50 cursor-not-allowed text-slate-300 dark:text-slate-600'
              : 'hover:bg-primary hover:text-white hover:border-primary'
              }`}
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fade Indicators for aesthetics */}
          <div className={`absolute top-0 bottom-0 left-8 md:left-12 w-8 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none transition-opacity duration-300 ${!canScrollLeft ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`absolute top-0 bottom-0 right-8 md:right-12 w-8 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none transition-opacity duration-300 ${!canScrollRight ? 'opacity-0' : 'opacity-100'}`}></div>
        </div>

        {/* Content Area */}
        <div>
          {/* Context Description */}
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            {/* NEW: Dynamic Title based on selection */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Paket {tService?.shortTitle || tService?.title || activeServiceInfo?.title}
            </h3>

            <div className="inline-flex flex-col items-center gap-3 bg-blue-50/50 dark:bg-blue-900/10 px-6 py-4 rounded-2xl border border-blue-100 dark:border-blue-800/30">
              <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                💡 {tService?.description || activeServiceInfo?.description}
              </p>
            </div>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
            <AnimatePresence mode="popLayout">
              {activePricingPlans.map((plan, index) => {
                const PlanIcon = plan.icon;
                // @ts-ignore
                const planTrans = translations.pricing[plan.id] || plan;
                const planName = planTrans.name || plan.name;
                const planDesc = planTrans.description || plan.description;
                const planFeatures = planTrans.features || plan.features;
                const planCta = planTrans.cta || plan.cta;

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SpotlightCard
                      isPopular={plan.isPopular}
                      className="flex flex-col h-full"
                    >
                      <div className="p-6 sm:p-8 flex flex-col h-full relative overflow-hidden rounded-3xl">

                        {/* Popular Badge Ribbon */}
                        {plan.isPopular && (
                          <div className="absolute top-0 right-0">
                            <div className="bg-gradient-to-l from-primary to-indigo-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-bl-2xl shadow-lg flex items-center gap-1.5 tracking-wide uppercase">
                              <Zap size={10} fill="currentColor" /> {translations.services.general.bestChoice}
                            </div>
                          </div>
                        )}

                        {/* Header & Price */}
                        <div className="mb-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors ${plan.isPopular
                            ? 'bg-primary/10 text-primary'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}>
                            <PlanIcon size={24} />
                          </div>

                          <h3 className={`text-lg font-bold mb-2 ${plan.isPopular ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                            {planName}
                          </h3>

                          <div className="flex flex-col mb-4">
                            {/* Discount Strikethrough Logic */}
                            {plan.originalPrice && (
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-slate-400 decoration-slate-400/80 line-through decoration-1">
                                  {plan.originalPrice}
                                </span>
                                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                                  {translations.services.general.promo}
                                </span>
                              </div>
                            )}
                            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                              {plan.price}
                            </span>
                            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wide">
                              {translations.services.general.oneTimePayment}
                            </span>
                          </div>

                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[3rem]">
                            {planDesc}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-6"></div>

                        {/* Features List */}
                        <div className="flex-1 space-y-3 mb-8">
                          {planFeatures.map((feat: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3 group/feat">
                              <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${plan.isPopular
                                ? 'bg-green-500 text-white shadow-sm shadow-green-500/30'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover/feat:text-green-500 group-hover/feat:bg-green-50 dark:group-hover/feat:bg-green-900/20'
                                }`}>
                                <Check size={12} strokeWidth={3} />
                              </div>
                              <span className={`text-sm font-medium transition-colors ${plan.isPopular ? 'text-slate-700 dark:text-slate-200' : 'text-slate-600 dark:text-slate-400'
                                }`}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-auto space-y-3">
                          <a
                            href={WA_LINKS.pricing(planName)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group/btn ${plan.isPopular
                              ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 hover:bg-primary-hover'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary'
                              }`}
                          >
                            {plan.isPopular && (
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                            )}
                            <span>{planCta}</span>
                          </a>

                          <button
                            onClick={() => setSelectedPlan(plan)}
                            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-xs text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group/eye"
                          >
                            <Eye size={14} className="group-hover/eye:scale-110 transition-transform" />
                            {translations.services.general.viewFeatures}
                          </button>
                        </div>

                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Custom App CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-2xl mx-auto hover:border-primary/20 transition-colors">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: t('pricingSection.customApp') }} /> <br />
                <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1 mt-2">
                  {t('pricingSection.contactMe')} &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Detail Paket */}
        <PlanDetailModal
          plan={selectedPlan}
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />

      </div>
    </section>
  );
};

export default Services;
