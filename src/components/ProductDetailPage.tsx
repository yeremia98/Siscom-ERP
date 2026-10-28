import React from 'react';
import { ArrowLeft, Check, ArrowRight, ShieldCheck, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { PRODUCT_SUITES } from '../content/products';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (route: string) => void;
}

export function ProductDetailPage({ slug, onNavigate }: ProductDetailPageProps) {
  const product = PRODUCT_SUITES.find((p) => p.slug === slug) || PRODUCT_SUITES[0];

  return (
    <div className="py-12 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-screen transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => onNavigate('/#produk')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Daftar Modul
        </button>

        {/* Product Hero Banner */}
        <div
          className="bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6 border-t-4"
          style={{ borderTopColor: product.accentHex }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {product.category}
            </span>
            <span
              className="text-xs font-mono font-bold"
              style={{ color: product.accentHex }}
            >
              {product.track}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-200 leading-snug">
              {product.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {product.summary}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="/demo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/demo');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors shadow-xs"
            >
              Jadwalkan demo {product.name}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/estimasi"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/estimasi');
              }}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-3"
            >
              Hitung estimasi implementasi &rarr;
            </a>
          </div>
        </div>

        {/* Key Documents Strip */}
        <div className="mt-8 bg-slate-100/70 dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
            Dokumen dan Laporan Kunci yang Dihasilkan
          </span>
          <div className="flex flex-wrap gap-2">
            {product.keyDocuments.map((doc) => (
              <span
                key={doc}
                className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
              >
                {doc}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Capabilities Grid */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Fitur dan Kendali Operasional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feat) => (
              <div
                key={feat.name}
                className="bg-white dark:bg-[#111D38] p-5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {feat.name}
                  </h3>
                  {feat.documentRef && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {feat.documentRef}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="mt-12 bg-white dark:bg-[#111D38] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Alur Kerja Standar di Sistem
          </h2>

          <div className="space-y-3">
            {product.workflowSteps.map((step, idx) => (
              <div
                key={step}
                className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-xs"
              >
                <span className="w-6 h-6 rounded-md bg-[#0B2447] text-white dark:bg-amber-400 dark:text-slate-950 font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                  0{idx + 1}
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed pt-0.5">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For Section */}
        <div className="mt-10 bg-slate-100/70 dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Karakteristik Perusahaan yang Cocok Menggunakan Modul Ini
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {product.idealFor.map((item) => (
              <div
                key={item}
                className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 bg-[#0B2447] dark:bg-[#111D38] rounded-xl text-white space-y-4 text-center">
          <h3 className="text-2xl font-bold">
            Ingin melihat simulasi data modul {product.name}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
            Jadwalkan sesi demo 45 menit bersama konsultan spesialis industri kami untuk mendiskusikan alur persetujuan dan format cetak perusahaan Anda.
          </p>
          <div className="pt-2">
            <a
              href="/demo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/demo');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[#0B2447] hover:bg-slate-100 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 transition-colors shadow-sm"
            >
              Jadwalkan demo sekarang
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
