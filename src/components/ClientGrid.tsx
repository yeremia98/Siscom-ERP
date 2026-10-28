import React from 'react';
import { CLIENT_STORIES } from '../content/clients';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ClientGridProps {
  onNavigate: (route: string) => void;
}

export function ClientGrid({ onNavigate }: ClientGridProps) {
  return (
    <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Bukti Penerapan Nyata
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Digunakan perusahaan lintas sektor di Indonesia.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Daftar referensi terverifikasi dengan izin publikasi resmi atau profil industri anonim untuk melindungi kerahasiaan data operasional klien.
            </p>
          </div>

          <a
            href="/klien"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/klien');
            }}
            className="text-xs font-semibold text-[#0B2447] dark:text-amber-400 hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            Lihat semua studi kasus
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENT_STORIES.map((client) => (
            <div
              key={client.companyName}
              className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {client.industry}
                  </span>
                  {client.permission ? (
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Terverifikasi
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-400">
                      Profil Industri
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {client.companyName}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                    Skala: {client.operationalScale}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-mono text-[#0B2447] dark:text-amber-400 font-semibold block mb-1">
                    Modul: {client.implementedModule}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {client.businessOutcome}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                Penerapan operasional riil
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
