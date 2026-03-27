import { motion } from 'motion/react';
import { 
  ShoppingCart, 
  Boxes, 
  PieChart, 
  UserPlus, 
  MessageSquareHeart,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [ShoppingCart, Boxes, PieChart, UserPlus, MessageSquareHeart];

export default function Features() {
  const { t } = useTranslation();
  const featureList = t('features.list', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="features" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">{t('features.badge')}</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t('features.title')} <br />
            <span className="text-slate-500">{t('features.titleSecondary')}</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            {t('features.description')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {featureList.map((feature, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-slate-800"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <dt className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400">
                    <p className="flex-auto">{feature.desc}</p>
                  </dd>
                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all group-hover:opacity-100">
                    {t('features.learnMore')} <ArrowUpRight className="h-4 w-4 rtl:rotate-270" />
                  </div>
                </motion.div>
              );
            })}
            
            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col rounded-3xl border-2 border-dashed border-slate-200 p-8 dark:border-slate-800"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 dark:bg-slate-900">
                <Sparkles className="h-6 w-6" />
              </div>
              <dt className="text-xl font-bold text-slate-400 dark:text-slate-600">
                {t('features.comingSoon')}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400 dark:text-slate-600">
                <p className="flex-auto">{t('features.comingSoonDesc')}</p>
              </dd>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
