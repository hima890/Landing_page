import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Users, BarChart3, Package } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-50/50 blur-3xl dark:bg-brand-900/10" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-white"
          >
            {t('hero.title')} <br />
            <span className="text-gradient">{t('hero.titleGradient')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <button
              onClick={onJoinClick}
              className="group relative flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/20 active:scale-95"
            >
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </button>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-slate-900 dark:text-white"
            >
              {t('hero.learnMore')} <span aria-hidden="true" className="rtl:hidden">→</span><span aria-hidden="true" className="hidden rtl:inline">←</span>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24"
        >
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-950">
              {/* Mock Dashboard UI */}
              <div className="flex h-[500px] sm:h-[750px] flex-col">
                <div className="flex h-14 items-center border-b border-slate-100 px-6 dark:border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-8 h-6 w-32 rounded-md bg-slate-100 dark:bg-slate-800" />
                </div>
                <div className="flex flex-1 overflow-hidden">
                  <div className="hidden w-64 border-r border-slate-100 p-6 md:block dark:border-slate-800">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 w-full rounded-lg bg-slate-50 dark:bg-slate-900" />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {[
                        { label: t('stats.sales'), icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
                        { label: t('stats.inventory'), icon: Package, color: 'text-purple-600', bg: 'bg-purple-50' },
                        { label: t('stats.staff'), icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
                      ].map((stat, i) => (
                        <div key={i} className="rounded-2xl border border-slate-100 p-6 dark:border-slate-800">
                          <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                            {i === 0 ? '$12,482' : i === 1 ? `842 ${t('stats.units')}` : `12 ${t('stats.active')}`}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 h-64 w-full rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                      <BarChart3 className="h-12 w-12 text-slate-200 dark:text-slate-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
