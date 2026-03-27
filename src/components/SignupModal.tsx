import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useWaitlist } from '../hooks/useWaitlist';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const { submitToWaitlist, isSubmitting, isSuccess, error, setIsSuccess, hasAlreadyJoined } = useWaitlist();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: '',
    whatsappNumber: '',
    mainProblem: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitToWaitlist(formData);
  };

  const handleClose = () => {
    onClose();
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          businessName: '',
          businessType: '',
          whatsappNumber: '',
          mainProblem: '',
          notes: '',
        });
      }, 300);
    }
  };

  const businessTypes = t('signup.businessTypes', { returnObjects: true }) as { id: string; label: string }[];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
          >
            <button
              onClick={handleClose}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors`}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8 sm:p-10">
              {isSuccess || hasAlreadyJoined ? (
                <div className="flex flex-col items-center text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {hasAlreadyJoined ? t('signup.alreadyJoinedTitle') : t('signup.successTitle')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {hasAlreadyJoined 
                      ? t('signup.alreadyJoinedDesc') 
                      : t('signup.successDesc')}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 w-full rounded-xl bg-brand-600 py-4 font-semibold text-white transition-all hover:bg-brand-700 active:scale-95"
                  >
                    {t('signup.close')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                      {t('signup.title')}
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {t('signup.description')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('signup.fullName')}</label>
                        <input
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                          placeholder={t('signup.fullNamePlaceholder')}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('signup.businessName')}</label>
                        <input
                          required
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                          placeholder={t('signup.businessNamePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('signup.whatsapp')}</label>
                      <input
                        required
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all"
                        placeholder={t('signup.whatsappPlaceholder')}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('signup.businessType')}</label>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all appearance-none"
                      >
                        <option value="">{t('signup.selectType')}</option>
                        {businessTypes.map((type) => (
                          <option key={type.id} value={type.id}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('signup.problem')}</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.mainProblem}
                        onChange={(e) => setFormData({ ...formData, mainProblem: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none transition-all resize-none"
                        placeholder={t('signup.problemPlaceholder')}
                      />
                    </div>

                    {error && (
                      <p className="text-sm font-medium text-red-500">{error}</p>
                    )}

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-xl bg-brand-600 py-4 font-semibold text-white transition-all hover:bg-brand-700 active:scale-[0.98] disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            {t('signup.submitting')}
                          </>
                        ) : (
                          t('signup.submit')
                        )}
                      </span>
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      {t('signup.privacy')}
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
