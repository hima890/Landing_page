import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Users, BarChart3, Download, ArrowLeft, FileText, Table, Eye, Lock, Mail, Loader2, LogOut } from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { useTranslation } from 'react-i18next';

interface Submission {
  id: number;
  fullName: string;
  businessName: string;
  businessType: string;
  whatsappNumber: string;
  mainProblem: string;
  notes: string;
  timestamp: string;
}

interface Stats {
  total: number;
  visitors: number;
  byType: { businessType: string; count: number }[];
}

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [data, setData] = useState<{ submissions: Submission[]; stats: Stats } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const fetchStats = async () => {
    const token = localStorage.getItem('admin_token');
    if (!token) return;

    setLoading(true);
    try {
      const res = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        const d = await res.json();
        setData(d);
        setIsAuthenticated(true);
      } else {
        handleLogout();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      fetchStats();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const result = await res.json();
      if (result.success) {
        localStorage.setItem('admin_token', result.token);
        setIsAuthenticated(true);
        fetchStats();
      } else {
        setLoginError(t('admin.login.error'));
      }
    } catch (err) {
      setLoginError(t('admin.login.genericError'));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setData(null);
  };

  const handleBack = () => {
    handleLogout();
    onBack();
  };

  const exportPDF = () => {
    if (!data) return;
    const doc = new jsPDF('l', 'mm', 'a4');
    
    doc.setFontSize(20);
    doc.text('Aventa Waitlist Submissions', 14, 20);
    
    const tableData = data.submissions.map(s => [
      s.fullName,
      s.businessName,
      s.businessType,
      s.whatsappNumber,
      s.mainProblem,
      new Date(s.timestamp).toLocaleDateString()
    ]);

    autoTable(doc, {
      startY: 30,
      head: [[t('admin.dashboard.table.name'), t('admin.dashboard.table.business'), t('admin.dashboard.table.type'), t('admin.dashboard.table.whatsapp'), t('admin.dashboard.table.problem'), t('admin.dashboard.table.date')]],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [79, 70, 229] }, // brand-600
      styles: { fontSize: 9, cellPadding: 3 },
      columnStyles: {
        4: { cellWidth: 60 } // problem column
      }
    });

    doc.save('aventa-waitlist.pdf');
  };

  const exportExcel = () => {
    if (!data) return;
    // Format data for excel to include all fields and better headers
    const excelData = data.submissions.map(s => ({
      [t('admin.dashboard.table.name')]: s.fullName,
      [t('admin.dashboard.table.business')]: s.businessName,
      [t('admin.dashboard.table.type')]: s.businessType,
      [t('admin.dashboard.table.whatsapp')]: s.whatsappNumber,
      [t('admin.dashboard.table.problem')]: s.mainProblem,
      'Notes': s.notes,
      [t('admin.dashboard.table.date')]: new Date(s.timestamp).toLocaleString()
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Submissions');
    XLSX.writeFile(wb, 'aventa-waitlist.xlsx');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-900/30">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{t('admin.login.title')}</h2>
            <p className="mt-2 text-slate-500">{t('admin.login.desc')}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('admin.login.email')}</label>
              <div className="relative">
                <Mail className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400`} />
                <input
                  required
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-3 ${isRTL ? 'pr-11 pl-4' : 'pl-11 pr-4'} text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white`}
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('admin.login.password')}</label>
              <div className="relative">
                <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400`} />
                <input
                  required
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className={`w-full rounded-xl border border-slate-200 bg-slate-50 py-3 ${isRTL ? 'pr-11 pl-4' : 'pl-11 pr-4'} text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {loginError && (
              <p className="text-sm font-medium text-red-500">{loginError}</p>
            )}

            <button
              disabled={isLoggingIn}
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-brand-600 py-4 font-semibold text-white transition-all hover:bg-brand-700 active:scale-95 disabled:opacity-70"
            >
              {isLoggingIn ? <Loader2 className="h-5 w-5 animate-spin" /> : t('admin.login.button')}
            </button>
            
            <button
              type="button"
              onClick={onBack}
              className="w-full py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              {t('admin.login.back')}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading && !data) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button onClick={handleBack} className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white">
              <ArrowLeft className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t('admin.dashboard.title')}</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={exportPDF}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:flex-none"
            >
              <FileText className="h-4 w-4" />
              {t('admin.dashboard.actions.pdf')}
            </button>
            <button
              onClick={exportExcel}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:flex-none"
            >
              <Table className="h-4 w-4" />
              {t('admin.dashboard.actions.excel')}
            </button>
            <button
              onClick={handleLogout}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 sm:flex-none"
            >
              <LogOut className="h-4 w-4" />
              {t('admin.dashboard.actions.logout')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/30">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{t('admin.dashboard.stats.signups')}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{data?.stats.total}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{t('admin.dashboard.stats.visitors')}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{data?.stats.visitors}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-500">{t('admin.dashboard.stats.categories')}</p>
                <div className="mt-1 flex gap-2">
                  {data?.stats.byType.slice(0, 2).map((type, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {type.businessType}: {type.count}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-left rtl:text-right">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
                  <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{t('admin.dashboard.table.name')}</th>
                  <th className="hidden px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white md:table-cell">{t('admin.dashboard.table.business')}</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{t('admin.dashboard.table.whatsapp')}</th>
                  <th className="hidden px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white lg:table-cell">{t('admin.dashboard.table.problem')}</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{t('admin.dashboard.table.date')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {data?.submissions.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{s.fullName}</div>
                      <div className="text-xs text-slate-500 md:hidden">{s.businessName}</div>
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-slate-600 dark:text-slate-400 md:table-cell">{s.businessName}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{s.whatsappNumber}</td>
                    <td className="hidden px-6 py-4 text-sm text-slate-600 dark:text-slate-400 lg:table-cell max-w-xs truncate">{s.mainProblem}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{new Date(s.timestamp).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
