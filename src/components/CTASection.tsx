import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CTASectionProps {
  onJoinClick: () => void;
}

export default function CTASection({ onJoinClick }: CTASectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-brand-600" />
      {/* Decorative patterns */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t('cta.badge')}</span>
          </motion.div>
          
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('cta.title')} <br />
            {t('cta.titleSecondary')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
            {t('cta.description')}
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onJoinClick}
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-600 transition-all hover:bg-brand-50 hover:shadow-xl active:scale-95"
            >
              {t('cta.button')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-brand-100">
            {(t('cta.points', { returnObjects: true }) as string[]).map((point, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
