
import React from 'react';
import { Check, X, Info, Star, ShieldCheck, Zap, Layout } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Comparison: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <section id="comparison" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden border-y border-slate-200/60 dark:border-slate-800">
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('comparison.title')}
          </h2>
          <p
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('comparison.subtitle') }}
          />
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block relative">
          {/* Glow Effect behind the 'Me' column */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950">
                  <th className="p-6 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">{t('comparison.headers.criteria')}</th>
                  <th className="p-6 text-lg font-bold text-slate-400 dark:text-slate-500 w-1/4 text-center">{t('comparison.headers.saas')}</th>
                  <th className="p-6 text-lg font-bold text-slate-600 dark:text-slate-300 w-1/4 text-center">{t('comparison.headers.agency')}</th>
                  <th className="p-0 w-1/4 relative">
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 border-b-4 border-primary"></div>
                    <div className="relative p-6">
                      <div className="flex items-center justify-center gap-2 text-xl font-extrabold text-primary text-center">
                        <Star size={20} fill="currentColor" />
                        {t('comparison.headers.custom')}
                      </div>
                      <div className="text-xs text-center text-primary/80 font-bold mt-1 uppercase tracking-wide">{t('comparison.headers.bestValue')}</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {translations.comparison.list.map((row: any, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-6 font-semibold text-slate-700 dark:text-slate-300 border-r border-slate-100 dark:border-slate-800">
                      {row.criteria}
                    </td>
                    <td className="p-6 text-center text-slate-500 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col items-center gap-2">
                        <Layout size={20} className="text-slate-300" />
                        <span className="text-sm">{row.saas}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-slate-600 dark:text-slate-300 border-r border-slate-100 dark:border-slate-800">
                      <div className="flex flex-col items-center gap-2">
                        <Info size={20} className="text-blue-400/70" />
                        <span className="text-sm">{row.agency}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-primary/5 dark:bg-primary/10 relative">
                      <div className="flex flex-col items-center gap-2 relative z-10">
                        <div className="p-1.5 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-primary/20">
                          <Check size={20} className="text-primary stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{row.custom}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View Cards */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Agam Card (Featured First) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-primary/10 border-2 border-primary overflow-hidden relative transform scale-105">
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-xl text-xs font-bold">{t('comparison.mobile.winner')}</div>
            <div className="bg-primary/5 p-6 border-b border-primary/10">
              <div className="text-xl font-extrabold text-primary flex items-center gap-2 mb-1">
                <Star size={20} fill="currentColor" /> {t('comparison.headers.custom')}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t('comparison.mobile.description')}
              </p>
            </div>
            <div className="p-6 space-y-5">
              {translations.comparison.list.map((row: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 last:border-0 pb-3 last:pb-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase w-1/3">{row.criteria}</div>
                  <div className="text-right text-sm font-bold text-slate-900 dark:text-white flex-1 pl-4">{row.custom}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="grid grid-cols-1 gap-4 opacity-90">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-500 text-center mb-4 flex items-center justify-center gap-2"><Layout size={16} /> {t('comparison.mobile.saas')}</h3>
              {translations.comparison.list.map((row: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start mb-3 text-xs">
                  <span className="text-slate-400 font-medium">{row.criteria}:</span>
                  <span className="text-slate-500 text-right max-w-[60%]">{row.saas}</span>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-500 text-center mb-4 flex items-center justify-center gap-2"><Info size={16} /> {t('comparison.mobile.agency')}</h3>
              {translations.comparison.list.map((row: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start mb-3 text-xs">
                  <span className="text-slate-400 font-medium">{row.criteria}:</span>
                  <span className="text-slate-500 text-right max-w-[60%]">{row.agency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
