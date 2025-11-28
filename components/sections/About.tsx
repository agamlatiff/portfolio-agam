
import React from 'react';
import { SKILLS } from '../../constants';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { CheckCircle2, Zap, Layout, ShieldCheck, BarChart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { t, translations } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const visualVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, x: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const DNA_VALUES = [
    { icon: Layout },
    { icon: Zap },
    { icon: ShieldCheck },
    { icon: CheckCircle2 },
    { icon: BarChart },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Content */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors"
            >
              {t('about.title')} <br />
              <span className="text-primary">{t('about.subtitle')}</span>
            </motion.h2>

            <motion.div
              variants={fadeInUpVariants}
              className="prose prose-slate prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 mb-8 transition-colors"
            >
              <p className="font-medium text-slate-800 dark:text-slate-200 italic border-l-4 border-primary pl-4">
                "{t('about.quote')}"
              </p>
              <p dangerouslySetInnerHTML={{ __html: t('about.description1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.description2') }} />
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 transition-colors">
                {t('about.whyChooseMe')}
              </h3>
              <div className="grid grid-cols-1 gap-3 not-prose mb-8">
                {translations.about.values.map((item: any, idx: number) => {
                  const Icon = DNA_VALUES[idx].icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{item.title}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <div className="flex flex-wrap gap-2 opacity-70">
                {SKILLS.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium border border-slate-200 dark:border-slate-700 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual decoration */}
          <motion.div
            className="flex-1 order-1 lg:order-2 flex justify-center"
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 border-2 border-slate-100 dark:border-slate-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-slate-50 dark:border-slate-800">
                  {/* Placeholder Avatar */}
                  <img src="https://picsum.photos/400/400?grayscale" alt="Agam Avatar" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-0 right-0 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-0 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700"
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="text-2xl">🤝</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
