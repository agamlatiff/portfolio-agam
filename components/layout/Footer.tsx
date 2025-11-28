
import React from 'react';
import { Hexagon, ArrowRight, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaTiktok, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES, WA_LINKS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

// Social media links with modern icons
const SOCIALS = [
  { icon: FaInstagram, href: "https://www.instagram.com/agam.latiff/", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@agam.latiff", label: "TikTok" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/agam-latifullah", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/agamlatiff", label: "GitHub" },
  { icon: FaYoutube, href: "https://www.youtube.com/@AgamLatifullah-p5j7d", label: "YouTube" }
];

const Footer: React.FC = () => {
  const { t, translations } = useLanguage();

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">

      {/* Top Banner CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-primary to-indigo-600 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('footer.cta.title')}</h3>
              <p className="text-indigo-100 max-w-lg">{t('footer.cta.description')}</p>
            </div>
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold text-base hover:bg-indigo-50 transition-all shadow-lg transform hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap"
            >
              {t('footer.cta.button')} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary text-white p-2 rounded-xl transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20">
                <Hexagon size={24} fill="currentColor" />
              </div>
              <span className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">agamlatiff</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
              {t('footer.brandDescription')}
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:from-primary hover:to-primary-hover hover:text-white dark:hover:from-primary dark:hover:to-primary-hover dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t('footer.menus.main')}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></span>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Updated with Query Params */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t('footer.menus.services')}</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => {
                const tService = translations.services[service.id as keyof typeof translations.services];
                return (
                  <li key={service.id}>
                    <Link
                      to={`/services?tab=${service.id}`}
                      className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm hover:underline decoration-primary/30 underline-offset-4"
                    >
                      {tService?.shortTitle || tService?.title || service.shortTitle || service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info - Updated */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">{t('footer.menus.contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5" />
                <span className="text-slate-500 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: t('footer.location') }} />
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <a href="mailto:agam.latiff@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">agam.latiff@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Agam Latifullah. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
