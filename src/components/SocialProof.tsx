import { useTranslation } from 'react-i18next';

export default function SocialProof() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex -space-x-3 rtl:space-x-reverse overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                className="inline-block h-12 w-12 rounded-full ring-4 ring-white dark:ring-slate-950"
                src={`https://picsum.photos/seed/user${i}/100/100`}
                alt={`User ${i}`}
                referrerPolicy="no-referrer"
              />
            ))}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 ring-4 ring-white dark:bg-brand-900/30 dark:text-brand-300 dark:ring-slate-950">
              <span className="text-xs font-bold">+472</span>
            </div>
          </div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
            {t('socialProof.text')} <span className="font-bold text-slate-900 dark:text-white">{t('socialProof.businesses')}</span> {t('socialProof.suffix')}
          </p>
        </div>
      </div>
    </section>
  );
}
