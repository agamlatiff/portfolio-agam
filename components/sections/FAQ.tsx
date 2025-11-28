import React, { useState } from 'react';
import { FAQS } from '../../constants';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, translations } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div
        className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-slate-800 rounded-full mb-4">
            <MessageCircle size={24} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t('faq.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {translations.faq.list.map((faq: any, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-primary/30 shadow-lg shadow-primary/5'
                    : 'border-slate-200 dark:border-slate-800 hover:border-primary/20'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-slate-800 dark:text-slate-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;