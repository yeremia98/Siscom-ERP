import React, { useState } from 'react';
import { PRODUCT_SUITES } from '../content/products';
import { ArrowRight, Layers, FileCheck, Check, Building2, Store } from 'lucide-react';

interface ModulesBentoProps {
  onNavigate: (route: string) => void;
}

export function ModulesBento({ onNavigate }: ModulesBentoProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ERP Industri' | 'POS dan Retail'>('all');

  const filteredSuites = PRODUCT_SUITES.filter((suite) => {
    if (activeFilter === 'all') return true;
    return suite.track === activeFilter;
  });

  return (
    <section id="produk" className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Arsitektur Modul Terpadu
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Modul industri spesifik dan sistem kasir ritel.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Dirancang untuk mengatasi hambatan operasional nyata: pembengkakan RAP konstruksi, piutang macet distributor, perhitungan HPP pabrik, hingga pelaporan dokumen pabean Kawasan Berikat.
            </p>
          </div>

          {/* Track Filter Tabs */}
          <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800/80 rounded-lg text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Semua modul (7)
            </button>
            <button
              onClick={() => setActiveFilter('ERP Industri')}
              className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeFilter === 'ERP Industri'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              ERP Industri (6)
            </button>
            <button
              onClick={() => setActiveFilter('POS dan Retail')}
              className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeFilter === 'POS dan Retail'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              POS dan Retail (1)
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSuites.map((suite, idx) => {
            // First two cards take 1 col each, but can have prominent visual treatment
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={suite.id}
                className={`bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all ${
                  isFeatured ? 'lg:col-span-1 border-t-4' : 'border-t-2'
                }`}
                style={{ borderTopColor: suite.accentHex }}
              >
                <div className="space-y-4">
                  {/* Card Header & Track */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {suite.category}
                    </span>
                    <span
                      className="text-[11px] font-mono font-semibold"
                      style={{ color: suite.accentHex }}
                    >
                      {suite.track}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {suite.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {suite.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {suite.summary}
                  </p>

                  {/* Key Documents Badge Strip */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1.5 uppercase">
                      Dokumen Kunci & Standar:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {suite.keyDocuments.slice(0, 3).map((doc) => (
                        <span
                          key={doc}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    {suite.features.slice(0, 2).map((feat) => (
                      <div key={feat.name} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-slate-100">
                            {feat.name}:
                          </span>{' '}
                          <span className="text-slate-500 dark:text-slate-400">
                            {feat.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link to /produk/:slug */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={`/produk/${suite.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/produk/${suite.slug}`);
                    }}
                    className="text-xs font-semibold text-[#0B2447] dark:text-amber-400 hover:underline flex items-center gap-1 group"
                  >
                    Pelajari modul
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="/demo"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/demo');
                    }}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Jadwalkan demo &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
