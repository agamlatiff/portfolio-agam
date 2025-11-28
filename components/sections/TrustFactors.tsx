
import React from 'react';
import { ShieldCheck, BookOpen, Server, MonitorPlay, Lock, Code2, CheckCircle, FileJson, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const TrustFactors: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <section id="trust-factors" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100 dark:border-emerald-800/50"
          >
            <ShieldCheck size={14} className="animate-pulse" />
            <span>{t('trustFactors.header.badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('trustFactors.header.title') }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {t('trustFactors.header.subtitle')}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Card 1: Source Code (Large) - col-span-7 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-transparent text-slate-900 dark:text-white shadow-xl dark:shadow-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
          >
            {/* Background blobs - adapted for light/dark */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-500/5 dark:bg-purple-500/20 rounded-full blur-[60px] -ml-10 -mb-10 pointer-events-none"></div>

            {/* Texture Overlay - subtle on both */}
            <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-50 dark:bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Database size={28} className="text-primary dark:text-indigo-300" />
                </div>
                <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 rounded-full text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                  {t('trustFactors.cards.sourceCode.tag')}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-indigo-200 transition-colors">
                {t('trustFactors.cards.sourceCode.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg text-base md:text-lg">
                {t('trustFactors.cards.sourceCode.description')}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              <Badge icon={Code2} text={translations.trustFactors.cards.sourceCode.badges[0]} />
              <Badge icon={Lock} text={translations.trustFactors.cards.sourceCode.badges[1]} />
              <Badge icon={FileJson} text={translations.trustFactors.cards.sourceCode.badges[2]} />
            </div>
          </motion.div>

          {/* Card 2: Warranty (Tall/Side) - col-span-5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 relative group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-center hover:border-green-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-green-500/5"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:rotate-12 transition-transform duration-300">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t('trustFactors.cards.warranty.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('trustFactors.cards.warranty.description')}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px]">⭐</div>
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('trustFactors.cards.warranty.support')}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Demo - col-span-4 */}
          <SmallCard
            delay={0.2}
            icon={MonitorPlay}
            title={t('trustFactors.cards.demo.title')}
            desc={t('trustFactors.cards.demo.description')}
            color="blue"
          />

          {/* Card 4: Server - col-span-4 */}
          <SmallCard
            delay={0.3}
            icon={Server}
            title={t('trustFactors.cards.server.title')}
            desc={t('trustFactors.cards.server.description')}
            color="purple"
          />

          {/* Card 5: Training - col-span-4 */}
          <SmallCard
            delay={0.4}
            icon={BookOpen}
            title={t('trustFactors.cards.tutorial.title')}
            desc={t('trustFactors.cards.tutorial.description')}
            color="orange"
          />

        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 opacity-70 hover:opacity-100 transition-opacity"
        >
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <CheckCircle size={16} className="text-primary" />
            <span>{translations.trustFactors.bottomBadges[0]}</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <CheckCircle size={16} className="text-primary" />
            <span>{translations.trustFactors.bottomBadges[1]}</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <CheckCircle size={16} className="text-primary" />
            <span>{translations.trustFactors.bottomBadges[2]}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Badge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/10 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-default">
    <Icon size={14} className="text-slate-500 dark:text-slate-300" />
    <span>{text}</span>
  </div>
);

const SmallCard = ({ icon: Icon, title, desc, color, delay }: { icon: any, title: string, desc: string, color: string, delay: number }) => {
  const colors: Record<string, string> = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
    orange: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors[color]}`}>
        <Icon size={24} />
      </div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default TrustFactors;
