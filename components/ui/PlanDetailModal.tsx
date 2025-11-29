import React, { useEffect } from 'react';
import { PricingPlan } from '../../constants/pricing';
import { X, Check, Zap, HelpCircle, Lightbulb, TrendingUp, ShieldCheck, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { WA_LINKS } from '@/constants/whatsapp';

interface PlanDetailModalProps {
  plan: PricingPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

const PlanDetailModal: React.FC<PlanDetailModalProps> = ({ plan, isOpen, onClose }) => {
  const { t, translations } = useLanguage();

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const PlanIcon = plan.icon;

  // Get translated plan details
  // @ts-ignore - ignoring type check for dynamic key access
  const translatedPlan = translations.pricing[plan.id] || plan;

  // Fallback if translation is missing (use original plan data)
  const planName = translatedPlan.name || plan.name;
  const planDesc = translatedPlan.description || plan.description;
  const planFeatures = translatedPlan.features || plan.features;
  const planDetails = translatedPlan.details || plan.details;
  const planCta = translatedPlan.cta || plan.cta;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="relative p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow-sm'
                    }`}>
                    <PlanIcon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{planName}</h3>
                      {plan.isPopular && (
                        <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Zap size={10} fill="currentColor" /> {t('modal.popular')}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg">
                      {planDesc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Left Column: Feature Breakdown */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Lightbulb size={20} className="text-yellow-500" />
                        {t('modal.featureBreakdown')}
                      </h4>

                      <div className="space-y-4">
                        {planDetails && planDetails.length > 0 ? (
                          planDetails.map((detail: any, idx: number) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-primary/20 transition-colors">
                              <h5 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">
                                {detail.feature}
                              </h5>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                  <HelpCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-0.5">{t('modal.problem')}</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail.problem}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-0.5">{t('modal.solution')}</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{detail.solution}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/10 p-3 rounded-xl">
                                  <TrendingUp size={18} className="text-blue-500 mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-0.5">{t('modal.benefit')}</span>
                                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{detail.benefit}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-slate-500 italic">{t('modal.detailsPreparing')}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Summary & CTA */}
                  <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sticky top-0">
                      <div className="mb-6">
                        <span className="text-sm text-slate-500 dark:text-slate-400">Investasi Terbaik</span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                        </div>
                        {plan.originalPrice && (
                          <span className="text-sm text-slate-400 line-through decoration-slate-400/80">{plan.originalPrice}</span>
                        )}
                      </div>

                      <div className="space-y-3 mb-8">
                        {planFeatures.slice(0, 8).map((feat: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check size={16} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feat}</span>
                          </div>
                        ))}
                        {planFeatures.length > 8 && (
                          <div className="text-xs text-slate-400 pl-6 italic">+ {planFeatures.length - 8} fitur lainnya...</div>
                        )}
                      </div>

                      <a
                        href={WA_LINKS.pricing(planName)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center py-4 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:-translate-y-1 transition-all mb-4"
                      >
                        {t('modal.getPromo')}
                      </a>

                      <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <ShieldCheck size={14} className="text-green-500" />
                          <span>{t('modal.bugWarranty')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <Code2 size={14} className="text-blue-500" />
                          <span>{t('modal.sourceCode')}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlanDetailModal;
