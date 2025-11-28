
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SeoObserver: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { translations } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Trigger when section is near center
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections defined in SEO_DATA
    const sectionIds = Object.keys(translations.seo);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [translations.seo]);

  useEffect(() => {
    // @ts-ignore - Dynamic key access
    const data = translations.seo[activeSection];
    if (data) {
      // Update Title
      document.title = data.title;

      // Update Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.desc);
    }
  }, [activeSection, translations.seo]);

  return null;
};

export default SeoObserver;
