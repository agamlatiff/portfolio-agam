
import React, { useState } from 'react';
import { POS_PACKAGES, PricingPlan } from '../../constants/pricing';
import { Check, Zap, Eye, Star } from 'lucide-react';
import PlanDetailModal from '../ui/PlanDetailModal';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { WA_LINKS } from '@/constants/whatsapp';

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const { t, translations } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t('pricingSection.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('pricingSection.subtitle') }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {POS_PACKAGES.map((plan, index) => {
            const Icon = plan.icon;
            // @ts-ignore
            const planTrans = translations.pricing[plan.id] || plan;
            const planName = planTrans.name || plan.name;
            const planDesc = planTrans.description || plan.description;
            const planFeatures = planTrans.features || plan.features;
            const planCta = planTrans.cta || plan.cta;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${plan.isPopular
                    ? 'bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl shadow-primary/10 scale-105 z-10'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl'
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Zap size={14} fill="currentColor" /> {t('pricingSection.popular')}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{planName}</h3>

                  <div className="flex flex-col mb-3">
                    {plan.originalPrice && (
                      <span className="text-sm text-slate-400 line-through decoration-slate-400/80 mb-1">{plan.originalPrice}</span>
                    )}
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{plan.price}</div>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {planDesc}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {planFeatures.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mt-auto">
                  <a
                    href={WA_LINKS.pricing(planName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-3.5 rounded-xl font-bold transition-all hover:-translate-y-1 ${plan.isPopular
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                  >
                    {planCta}
                  </a>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-xs text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group/eye"
                  >
                    <Eye size={14} className="group-hover/eye:scale-110 transition-transform" />
                    {t('pricingSection.viewDetails')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

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

export default Pricing;
