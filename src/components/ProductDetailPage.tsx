import React from 'react';
import { MEGA_MENU_SUITES, EnterpriseSuite } from '../data/erpData';
import { 
  Building2, 
  ShoppingBag, 
  Users, 
  Truck, 
  ShieldAlert, 
  Coins, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck2, 
  TrendingUp, 
  Layers 
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug, onNavigate, onOpenConsultation }) => {
  const suite = MEGA_MENU_SUITES.find((s) => s.slug === slug) || MEGA_MENU_SUITES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-orange-500" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-blue-500" />;
      case 'Users': return <Users className="w-8 h-8 text-emerald-500" />;
      case 'Truck': return <Truck className="w-8 h-8 text-indigo-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8 text-amber-500" />;
      case 'Coins': return <Coins className="w-8 h-8 text-cyan-500" />;
      default: return <Layers className="w-8 h-8 text-orange-500" />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-orange-600 dark:hover:text-orange-400 font-medium flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
          <span>/</span>
          <span>Solusi ERP Spesifik</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">{suite.title}</span>
        </div>

        {/* Product Hero */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider">
              {getIcon(suite.iconName)}
              <span>{suite.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {suite.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-snug">
              {suite.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {suite.summary}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation(suite.title)}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 flex items-center gap-2 active:scale-95 transition-all"
              >
                <span>Jadwalkan Demo Teknis {suite.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/')}
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
              >
                Lihat Modul Lainnya
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Architectural Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Key Workflows */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-orange-500" />
                <span>Alur Kerja Operasional & Kontrol Sistem (Workflows)</span>
              </h2>

              <ul className="space-y-3.5">
                {suite.keyWorkflows.map((workflow, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{workflow}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <span>Nilai Strategis & Dampak Finansial Bagi Korporasi</span>
              </h2>

              <ul className="space-y-3">
                {suite.businessValue.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Compliance & Ideal Audience */}
          <div className="space-y-6">
            {/* Kepatuhan Regulasi Indonesia */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Kepatuhan Standar Indonesia</span>
              </h3>

              <div className="space-y-2.5 pt-2">
                {suite.complianceHighlights.map((comp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {comp}
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industri yang Ideal */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Sangat Ideal Untuk
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {suite.idealFor.map((target, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {target}
                  </span>
                ))}
              </div>
            </div>

            {/* Support Guarantee */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Jaminan Implementasi
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Didampingi langsung oleh konsultan senior berbasis di Jakarta sampai tahap Serah Terima Berita Acara (BAST) dan periode Hypercare 30 hari.
              </p>
            </div>
          </div>
        </div>

        {/* Switch Between Other Suites */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Jelajahi Solusi ERP Spesialis Lainnya
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {MEGA_MENU_SUITES.map((item) => (
              <button
                key={item.slug}
                onClick={() => onNavigate(`/product/${item.slug}`)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  item.slug === suite.slug
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-700'
                }`}
              >
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.title}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">{item.category}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
