import { motion } from 'motion/react';
import { CheckCircle2, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Zap, HeartHandshake, CheckCircle2, ShieldCheck];

export default function Solution() {
  const { t } = useTranslation();
  const solutionList = t('solution.list', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="solution" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-brand-600">{t('solution.badge')}</h2>
            <p className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {t('solution.title')} <br />
              <span className="text-gradient">{t('solution.titleGradient')}</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {t('solution.description')}
            </p>
            
            <div className="mt-10 space-y-8">
              {solutionList.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="relative pl-12 rtl:pl-0 rtl:pr-12">
                    <dt className="inline font-semibold text-slate-900 dark:text-white">
                      <div className="absolute left-0 rtl:left-auto rtl:right-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      {item.title}
                    </dt>
                    <dd className="mt-1 text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </dd>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-1 shadow-2xl">
              <div className="h-full w-full rounded-[1.4rem] bg-white dark:bg-slate-950 overflow-hidden flex items-center justify-center">
                <div className="p-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-900/20">
                    <Zap className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{t('solution.simplicityTitle')}</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    {t('solution.simplicityDesc')}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-400/20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-brand-600/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
