import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLIENT_STORIES } from '../content/clients';

interface KlienPageProps {
  onNavigate: (route: string) => void;
}

export function KlienPage({ onNavigate }: KlienPageProps) {
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
            <ShieldCheck className="w-5 h-5 text-[#0B2447] dark:text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Referensi & Pengalaman
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Portofolio klien dan hasil penerapan operasional nyata.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Studi kasus implementasi modul akuntansi, persediaan, dan ERP di perusahaan kontraktor, distributor, manufaktur, dan ritel Indonesia.
          </p>
        </div>

        {/* Client Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_STORIES.map((client) => (
            <div
              key={client.companyName}
              className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {client.industry}
                  </span>
                  {client.permission ? (
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Terverifikasi
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      Profil Industri (Anonim)
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {client.companyName}
                  </h2>
                  <span className="text-xs font-mono text-slate-500 block mt-0.5">
                    Skala: {client.operationalScale}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-semibold text-[#0B2447] dark:text-amber-400 block mb-1">
                    Modul Terpasang: {client.implementedModule}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {client.businessOutcome}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Status: Terverifikasi</span>
                <button
                  onClick={() => onNavigate('/demo')}
                  className="font-semibold text-[#0B2447] dark:text-amber-400 hover:underline"
                >
                  Jadwalkan demo &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
