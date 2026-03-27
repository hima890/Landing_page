import { motion } from 'motion/react';
import { Target, Heart, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Target, Zap, Heart];

export default function WhyAventa() {
  const { t } = useTranslation();
  const cards = t('why.cards', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="why" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">{t('why.badge')}</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('why.title')} <br />
            <span className="text-gradient">{t('why.titleGradient')}</span>
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800 pt-1">
                  <Icon className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
