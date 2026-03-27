import { LayoutGrid } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onAdminClick?: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-12 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t('footer.company')}
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#features" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{t('nav.features')}</a>
            <a href="#testimonials" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{t('nav.testimonials')}</a>
            <a href="#why" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{t('nav.why')}</a>
            <a href="#faq" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{t('nav.faq')}</a>
            <button onClick={onAdminClick} className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{t('footer.admin')}</button>
          </nav>
          
          <div className="text-sm text-slate-400">
            {t('footer.tagline')}
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-100 pt-8 text-center dark:border-slate-900">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
