import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Users2, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Problem() {
  const { t } = useTranslation();
  
  const icons = [AlertCircle, Package, Users2, TrendingDown];
  const colors = [
    { color: 'text-red-600', bg: 'bg-red-50' },
    { color: 'text-amber-600', bg: 'bg-amber-50' },
    { color: 'text-blue-600', bg: 'bg-blue-50' },
    { color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const problemList = t('problem.list', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="problem" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">{t('problem.badge')}</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('problem.title')} <br />
            <span className="text-slate-500">{t('problem.titleSecondary')}</span>
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {problemList.map((problem, i) => {
              const Icon = icons[i];
              const style = colors[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {problem.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400">
                    <p className="flex-auto">{problem.desc}</p>
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
