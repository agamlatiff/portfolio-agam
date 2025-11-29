
import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, XCircle, CheckCircle, RefreshCcw, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { WA_LINKS } from '@/constants/whatsapp';

const RoiCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [dailyRevenue, setDailyRevenue] = useState(2000000);
  const [isDigital, setIsDigital] = useState(false); // False = Manual, True = Digital

  // State Kalkulasi
  const [valueCalculation, setValueCalculation] = useState(0);

  useEffect(() => {
    // Logic: 
    // Manual = Kehilangan 5% (Shrinkage + Error)
    // Digital = Hemat 5% + Efisiensi Waktu (Valued at +10% Productivity/Growth potential)

    const monthlyRevenue = dailyRevenue * 30;

    if (!isDigital) {
      // Mode Manual: Menghitung Kerugian (5% rata-rata industri)
      setValueCalculation(monthlyRevenue * 0.05);
    } else {
      // Mode Digital: Menghitung Penghematan + Potensi Growth (Total impact ~15%)
      // 5% Saved from shrinkage + 10% opportunity cost saved (time)
      setValueCalculation(monthlyRevenue * 0.15);
    }
  }, [dailyRevenue, isDigital]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section id="roi-calculator" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 dark:bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 dark:bg-accent rounded-full blur-3xl"></div>
      </div>

      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE: Narrative & Case Study Switcher */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-indigo-500/20 border border-slate-200 dark:border-indigo-500/30 text-primary dark:text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Calculator size={14} />
              <span>{t('roiCalculator.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900 dark:text-white transition-colors">
              {t('roiCalculator.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed transition-colors">
              {t('roiCalculator.subtitle')}
            </p>

            {/* Case Study Cards */}
            <div className="space-y-4">
              {/* Manual Case */}
              <div
                onClick={() => setIsDigital(false)}
                className={`cursor-pointer p-5 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${!isDigital
                    ? 'border-red-400 bg-red-50/50 dark:bg-red-900/10 shadow-lg'
                    : 'border-slate-100 dark:border-slate-800 opacity-60 hover:opacity-100'
                  }`}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-full flex-shrink-0 ${!isDigital ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-400'}`}>
                    <XCircle size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg mb-1 ${!isDigital ? 'text-red-700 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {t('roiCalculator.cases.manual.title')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t('roiCalculator.cases.manual.description')}
                      <br /><strong className="text-red-500 mt-1 block">{t('roiCalculator.cases.manual.effect')}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Case */}
              <div
                onClick={() => setIsDigital(true)}
                className={`cursor-pointer p-5 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${isDigital
                    ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10 shadow-lg'
                    : 'border-slate-100 dark:border-slate-800 opacity-60 hover:opacity-100'
                  }`}
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-full flex-shrink-0 ${isDigital ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg mb-1 ${isDigital ? 'text-green-700 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {t('roiCalculator.cases.digital.title')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t('roiCalculator.cases.digital.description')}
                      <br /><strong className="text-green-600 dark:text-green-400 mt-1 block">{t('roiCalculator.cases.digital.effect')}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE: The Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-3xl shadow-2xl p-6 md:p-8 border transition-all duration-500 relative overflow-hidden ${!isDigital
                ? 'bg-white dark:bg-slate-800 border-red-100 dark:border-red-900/30'
                : 'bg-slate-900 dark:bg-slate-800 border-green-500/30'
              }`}>

            {/* Header Simulator */}
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${!isDigital ? 'bg-red-100 text-red-600' : 'bg-green-500/20 text-green-500'}`}>
                  {!isDigital ? <AlertTriangle size={24} /> : <TrendingUp size={24} />}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-60 text-slate-500 dark:text-slate-400">{t('roiCalculator.calculator.checkPotentialLoss')}</div>
                  <div className={`font-bold text-lg ${!isDigital ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                    {!isDigital ? t('roiCalculator.calculator.manualRisk') : t('roiCalculator.calculator.digitalPotential')}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsDigital(!isDigital)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-400"
                title={t('roiCalculator.calculator.switchMode')}
              >
                <RefreshCcw size={18} />
              </button>
            </div>

            {/* Input Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-3 text-sm font-medium">
                <label className={isDigital ? 'text-slate-500 dark:text-slate-300' : 'text-slate-600 dark:text-slate-300'}>
                  {t('roiCalculator.calculator.averageRevenue')}
                </label>
                <span className={`font-bold px-3 py-1 rounded-lg ${!isDigital ? 'bg-red-50 text-red-600' : 'bg-green-500/20 text-green-500'
                  }`}>
                  {formatCurrency(dailyRevenue * 30)}
                </span>
              </div>
              <input
                type="range" min="1000000" max="10000000" step="500000"
                value={dailyRevenue}
                onChange={(e) => setDailyRevenue(parseInt(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${!isDigital ? 'bg-red-200 accent-red-500' : 'bg-slate-700 accent-green-500'
                  }`}
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                <span>{t('roiCalculator.calculator.smallBusiness')}</span>
                <span>{t('roiCalculator.calculator.growingBusiness')}</span>
              </div>
            </div>

            {/* Result Display */}
            <div className={`p-6 rounded-2xl border transition-all duration-300 ${!isDigital
                ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20'
                : 'bg-slate-800 dark:bg-slate-900 border-slate-700'
              }`}>
              <div className="text-center">
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${!isDigital ? 'text-red-500' : 'text-green-400'
                  }`}>
                  {!isDigital ? t('roiCalculator.calculator.moneyLost') : t('roiCalculator.calculator.potentialProfit')}
                </div>

                <div
                  className={`text-3xl sm:text-4xl font-extrabold mb-1 ${!isDigital ? 'text-red-600 dark:text-red-500' : 'text-white dark:text-green-400'
                    }`}
                >
                  {formatCurrency(valueCalculation * 12)}
                </div>

                <p className={`text-xs mt-2 ${!isDigital ? 'text-red-400' : 'text-slate-400'}`}>
                  {!isDigital
                    ? t('roiCalculator.calculator.manualNote')
                    : t('roiCalculator.calculator.digitalNote')}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={WA_LINKS.roi}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden relative ${!isDigital
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20'
                  }`}
              >
                <span className="relative z-10">
                  {!isDigital ? t('roiCalculator.calculator.ctaManual') : t('roiCalculator.calculator.ctaDigital')}
                </span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
