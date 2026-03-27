import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-slate-900/90 backdrop-blur-lg shadow-xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <LayoutGrid className="h-6 w-6" />
            </div>
            <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}>
              Aventa
            </span>
          </div>

          <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${
            isScrolled ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors">{t('nav.features')}</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors">{t('nav.testimonials')}</a>
            <a href="#why" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors">{t('nav.why')}</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-slate-100 dark:hover:bg-slate-800 ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
            <button
              onClick={onJoinClick}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                isScrolled 
                  ? 'bg-brand-600 text-white hover:bg-brand-700' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
              }`}
            >
              {t('nav.join')}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-brand-600 transition-colors">{t('nav.features')}</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-brand-600 transition-colors">{t('nav.testimonials')}</a>
              <a href="#why" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-brand-600 transition-colors">{t('nav.why')}</a>
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-4 text-lg font-medium text-slate-900 dark:border-slate-800 dark:text-white"
              >
                <Globe className="h-5 w-5" />
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="w-full rounded-xl bg-brand-600 py-4 font-semibold text-white hover:bg-brand-700 transition-all active:scale-95"
              >
                {t('nav.join')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
