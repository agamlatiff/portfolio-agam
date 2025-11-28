
import React, { useState } from 'react';
import { Mail, Calendar, Send, Check, Loader2, AlertCircle, Sparkles, Phone, ChevronDown, Linkedin, Github, Instagram, Video, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from '../ui/Toast';
import { useLanguage } from '../../context/LanguageContext';

interface ContactProps {
  onOpenChat: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenChat }) => {
  const { t, translations } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showToast, setShowToast] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: translations.contact.form.service.options[0],
    message: ''
  });

  // Validation State
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false
  });

  const validate = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value.trim()) error = t('contact.form.name.error.required');
        else if (value.trim().length < 2) error = t('contact.form.name.error.min');
        break;
      case 'phone':
        if (!value.trim()) error = t('contact.form.phone.error.required');
        else if (!/^[0-9+\-\s]{9,}$/.test(value)) error = t('contact.form.phone.error.format');
        break;
      case 'email':
        if (!value.trim()) error = t('contact.form.email.error.required');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t('contact.form.email.error.format');
        break;
      case 'message':
        if (!value.trim()) error = t('contact.form.message.error.required');
        else if (value.trim().length < 10) error = t('contact.form.message.error.min');
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    // Special handling for phone to only allow numbers/symbols
    if (id === 'phone' && !/^[0-9+\-\s]*$/.test(value)) return;

    setFormData(prev => ({ ...prev, [id]: value }));

    // Validate immediately if already touched to clear errors
    if (touched[id as keyof typeof touched]) {
      const error = validate(id, value);
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    const error = validate(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = validate('name', formData.name);
    const phoneError = validate('phone', formData.phone);
    const emailError = validate('email', formData.email);
    const messageError = validate('message', formData.message);

    setErrors({
      name: nameError,
      phone: phoneError,
      email: emailError,
      message: messageError
    });

    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true
    });

    if (nameError || phoneError || emailError || messageError) {
      return;
    }

    setStatus('submitting');

    try {
      // Integration with FormSubmit.co for real email sending
      const response = await fetch("https://formsubmit.co/ajax/agam.latiff@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service_type: formData.type,
          _subject: `New Lead: ${formData.type} - ${formData.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus('success');
        setShowToast(true);

        // Reset form
        setFormData({ name: '', phone: '', email: '', type: translations.contact.form.service.options[0], message: '' });
        setTouched({ name: false, phone: false, email: false, message: false });

        setTimeout(() => setStatus('idle'), 3000);
        setTimeout(() => setShowToast(false), 5000);
      } else {
        console.error("Failed to send message");
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getInputClasses = (fieldId: keyof typeof errors) => {
    const hasError = errors[fieldId] && touched[fieldId];
    const baseClasses = "w-full px-4 py-3 rounded-xl border outline-none transition-all";
    const defaultClasses = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm";
    const errorClasses = "bg-red-50 dark:bg-red-900/10 border-red-300 dark:border-red-800 text-slate-900 dark:text-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 placeholder:text-red-300";

    return `${baseClasses} ${hasError ? errorClasses : defaultClasses}`;
  };

  const SOCIAL_LINKS = [
    { icon: Instagram, href: "https://instagram.com/agamlatiff" },
    { icon: Video, href: "https://tiktok.com/@agamlatiff" },
    { icon: Linkedin, href: "https://linkedin.com/in/agamlatiff" },
    { icon: Github, href: "https://github.com/agamlatiff" },
    { icon: Youtube, href: "https://youtube.com/@agamlatiff" }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200/60 dark:border-slate-800">
      <Toast
        message={t('contact.form.toast.success.title')}
        subMessage={t('contact.form.toast.success.message')}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <Toast
        message={t('contact.form.toast.error.title')}
        subMessage={t('contact.form.toast.error.message')}
        isVisible={status === 'error'}
        onClose={() => { }}
      />

      <div
        className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t('contact.title')}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t('contact.subtitle')}</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row">

          {/* Info Side */}
          <div className="bg-primary dark:bg-slate-800 p-10 lg:p-12 lg:w-2/5 text-white flex flex-col justify-between transition-colors duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{t('contact.info.title')}</h3>
              <p className="text-indigo-100 dark:text-slate-400 mb-10 leading-relaxed text-sm">
                {t('contact.info.description')}
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-indigo-500/40 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-white dark:text-primary backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">{t('contact.info.email')}</div>
                    <a href="mailto:agam.latiff@gmail.com" className="text-lg font-medium hover:text-indigo-100 dark:hover:text-white transition-colors">agam.latiff@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-indigo-500/40 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-white dark:text-primary backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">{t('contact.info.status')}</div>
                    <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-green-500/20 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-sm font-medium">{t('contact.info.open')}</span>
                    </div>
                  </div>
                </div>

                {/* Chat Widget Trigger */}
                <button onClick={onOpenChat} className="flex items-center gap-4 group w-full text-left">
                  <div className="w-12 h-12 bg-indigo-500/40 dark:bg-slate-700/50 rounded-xl flex items-center justify-center text-white dark:text-primary backdrop-blur-sm group-hover:scale-110 transition-transform relative">
                    <Sparkles size={22} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-primary dark:border-slate-800 animate-pulse"></span>
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200 dark:text-slate-500 uppercase tracking-wider font-semibold mb-1">{t('contact.info.ai')}</div>
                    <div className="text-lg font-medium hover:text-indigo-100 dark:hover:text-white transition-colors">{t('contact.info.chat')} &rarr;</div>
                  </div>
                </button>

              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative z-10">
              <div className="text-sm text-indigo-200 dark:text-slate-500 mb-4 font-medium">{t('contact.info.findMe')}</div>
              <div className="flex gap-4 flex-wrap">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-indigo-500/40 dark:bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 lg:p-12 lg:w-3/5 bg-slate-50/50 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('contact.form.name.label')}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('name')}
                    placeholder={t('contact.form.name.placeholder')}
                  />
                  {errors.name && touched.name && (
                    <div className="flex items-center gap-1 text-red-500 text-xs mt-2 animate-scale-up">
                      <AlertCircle size={12} /> {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('contact.form.phone.label')}</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone size={16} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${getInputClasses('phone')} pl-10`}
                      placeholder={t('contact.form.phone.placeholder')}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <div className="flex items-center gap-1 text-red-500 text-xs mt-2 animate-scale-up">
                      <AlertCircle size={12} /> {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Email (Full width) */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('contact.form.email.label')}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses('email')}
                  placeholder={t('contact.form.email.placeholder')}
                />
                {errors.email && touched.email && (
                  <div className="flex items-center gap-1 text-red-500 text-xs mt-2 animate-scale-up">
                    <AlertCircle size={12} /> {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('contact.form.service.label')}</label>
                <div className="relative">
                  <select
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all cursor-pointer appearance-none pr-10 shadow-sm"
                  >
                    {translations.contact.form.service.options.map((option: string, idx: number) => (
                      <option key={idx} value={option} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{option}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 transition-colors">{t('contact.form.message.label')}</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClasses('message')} resize-none`}
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
                {errors.message && touched.message && (
                  <div className="flex items-center gap-1 text-red-500 text-xs mt-2 animate-scale-up">
                    <AlertCircle size={12} /> {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all relative overflow-hidden shadow-lg shadow-primary/20 ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary-hover'
                  } ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {status === 'submitting' ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={20} className="animate-spin" />
                      <span>{t('contact.form.submit.sending')}</span>
                    </motion.div>
                  ) : status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={20} />
                      <span>{t('contact.form.submit.success')}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <span>{t('contact.form.submit.idle')}</span>
                      <Send size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
