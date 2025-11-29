import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { PROCESS_STEPS } from '@/constants/process';
import { WA_LINKS } from '@/constants/whatsapp';

const Process: React.FC = () => {
  const { t, translations } = useLanguage();
  const processSteps = translations.process.steps;

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200/60 dark:border-slate-800 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            {t('process.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
            <span dangerouslySetInnerHTML={{ __html: t('process.description').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line (Desktop) - Absolutely centered */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-primary/30 to-slate-200 dark:from-slate-800 dark:via-primary/30 dark:to-slate-800 -translate-x-1/2 rounded-full z-0"></div>

          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-primary/30 to-slate-200 dark:from-slate-800 dark:via-primary/30 dark:to-slate-800 rounded-full z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const tStep = processSteps[index];

              // Determine layout side: Even index (0, 2, 4) -> Left Side (Normal), Odd index (1, 3, 5) -> Right Side (Reverse)
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row gap-8 items-center w-full ${isLeft ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full pl-20 md:pl-0">
                    {/* Desktop: If Left, padding right. If Right, padding left. */}
                    <div className={`w-full ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>

                      <div className="relative p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group z-10">

                        {/* Connector Arrow (Desktop Only) */}
                        <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white dark:bg-slate-900 border-t border-r border-slate-200 dark:border-slate-800 transform rotate-45 ${isLeft ? '-right-2.5' : '-left-2.5 border-r-0 border-t-0 border-b border-l'}`}></div>

                        <div className={`flex flex-col gap-1 mb-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                          <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/5 px-2 py-1 rounded">Langkah 0{step.id}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {tStep?.title || step.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                          {tStep?.description || step.description}
                        </p>

                        {/* Deliverables Box */}
                        <div className={`bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800/50`}>
                          <h4 className={`text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>Output / Deliverables:</h4>
                          <div className={`flex flex-col gap-2.5 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                            {(tStep?.deliverables || step.deliverables).map((item, idx) => (
                              <div key={idx} className={`flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                                <span className="text-left md:text-inherit">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon Marker */}
                  {/* Position: Absolute on Mobile (Left), Absolute Center on Desktop */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-8 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-slate-400 dark:text-slate-500" />

                      {/* Active Ring on Scroll */}
                      <div
                        className="absolute inset-0 rounded-full border-2 border-primary opacity-100"
                      ></div>
                    </div>

                    {/* Connecting Line Horizontal (Mobile Only) to connect marker to card */}
                    <div className="md:hidden absolute top-1/2 left-10 w-6 h-0.5 bg-slate-200 dark:bg-slate-800"></div>
                  </div>

                  {/* Empty Side for Balancing (Desktop Only) */}
                  <div className="flex-1 hidden md:block"></div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-20 md:mt-32 text-center"
        >
          <div className="inline-block p-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
            <div className="bg-white dark:bg-slate-900 rounded-full px-6 py-2 text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              {t('process.cta.ready')} <strong className="text-primary">{t('process.cta.time')}</strong> {t('process.cta.condition')}
            </div>
          </div>
          <br />
          <a
            href={WA_LINKS.process}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 transition-all hover:-translate-y-1"
          >
            {t('process.cta.button')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;