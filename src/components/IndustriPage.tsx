import React from 'react';
import { ArrowLeft, ArrowRight, Building2, Layers, CheckCircle2 } from 'lucide-react';
import { PRODUCT_SUITES } from '../content/products';

interface IndustriPageProps {
  onNavigate: (route: string) => void;
}

export function IndustriPage({ onNavigate }: IndustriPageProps) {
  return (
    <div className="py-12 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-screen transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#0B2447] dark:text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Sektor Industri
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Solusi ERP berbasis proses bisnis vertikal Indonesia.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Tidak ada dua industri dengan alur akuntansi yang identik. Kami merancang arsitektur modul spesifik sesuai kebutuhan regulasi dan operasional masing-masing vertikal.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="space-y-6">
          {PRODUCT_SUITES.map((suite) => (
            <div
              key={suite.id}
              className="bg-white dark:bg-[#111D38] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    {suite.category}
                  </span>
                  <span className="text-xs font-mono font-semibold" style={{ color: suite.accentHex }}>
                    {suite.track}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {suite.name}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {suite.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {suite.keyDocuments.map((doc) => (
                    <span
                      key={doc}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <button
                  onClick={() => onNavigate(`/produk/${suite.slug}`)}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#0B2447] text-white hover:bg-[#071930] dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5"
                >
                  Pelajari Rincian Modul
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('/demo')}
                  className="px-4 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-center"
                >
                  Jadwalkan demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
