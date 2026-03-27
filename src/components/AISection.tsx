import { motion } from 'motion/react';
import { BrainCircuit, Bot, Zap, MessageSquare, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AISection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
            <BrainCircuit className="h-4 w-4" />
            <span>{t('ai.badge')}</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {t('ai.title')} <span className="text-gradient">{t('ai.titleGradient')}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            {t('ai.description')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12">
              <Bot className="h-32 w-32" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('ai.customerAssistant.title')}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t('ai.customerAssistant.desc')}
              </p>
              <ul className="mt-8 space-y-4">
                {(t('ai.customerAssistant.points', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <Zap className="h-4 w-4 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 sm:p-12 text-slate-900 shadow-xl border border-slate-100 dark:bg-slate-800 dark:text-white dark:border-slate-700 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-110 group-hover:-rotate-12">
              <Users className="h-32 w-32" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('ai.hrHelper.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t('ai.hrHelper.desc')}
              </p>
              <ul className="mt-8 space-y-4">
                {(t('ai.hrHelper.points', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Zap className="h-4 w-4 text-brand-600 dark:text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
