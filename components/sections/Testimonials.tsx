import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, translations } = useLanguage();

  // Merge translations with avatars from constants
  const testimonialsList = translations.testimonials.list.map((item: any, idx: number) => ({
    ...item,
    avatar: TESTIMONIALS[idx].avatar
  }));

  // Duplicate the items to ensure the list is long enough for a smooth loop.
  const baseSet = [...testimonialsList, ...testimonialsList];
  const loopItems = [...baseSet, ...baseSet];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden border-y border-slate-200/60 dark:border-slate-800">
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 transition-colors">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div
        className="relative hover-pause group w-full"
      >
        {/* Gradient Overlays for smooth fade effect at edges - matched to bg-slate-50 */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee w-max">
          {loopItems.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative group/card hover:shadow-xl hover:-translate-y-1 dark:hover:bg-slate-800 transition-all duration-300 mr-5 md:mr-8"
            >
              <Quote size={40} className="text-indigo-100 dark:text-primary/20 absolute top-6 right-6 transition-colors group-hover/card:text-primary/20 scale-75 md:scale-100 origin-top-right" />

              <div className="flex gap-1 mb-5 md:mb-6">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className={`${starIndex < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 dark:text-slate-700'}`}
                  />
                ))}
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 italic transition-colors line-clamp-4">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-100 dark:border-slate-800 object-cover" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white transition-colors text-sm md:text-base">{t.name}</div>
                  <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 transition-colors">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;