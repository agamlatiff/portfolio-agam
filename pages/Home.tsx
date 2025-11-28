
import React from 'react';
import Hero from '../components/sections/Hero';
import PainPoints from '../components/sections/PainPoints';
import RoiCalculator from '../components/sections/RoiCalculator';
import TrustFactors from '../components/sections/TrustFactors';
import Testimonials from '../components/sections/Testimonials';
import SeoObserver from '../components/utils/SeoObserver';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface HomeProps {
  onOpenChat: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenChat }) => {
  const { t } = useLanguage();

  return (
    <>
      <SeoObserver />
      <div className="w-full">
        <Hero />
        {/* TechStack section removed as requested */}
        <PainPoints />
        <RoiCalculator />
        <TrustFactors />
        <Testimonials />

        {/* Simple CTA Section for Home */}
        <section className="py-20 bg-primary dark:bg-indigo-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">{t('cta.title')}</h2>
            <p className="text-indigo-100 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
            >
              {t('cta.button')} <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
