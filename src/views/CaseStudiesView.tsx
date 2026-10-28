import React, { useState } from 'react';
import { ViewType, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Filter, 
  Quote, 
  Clock, 
  Calendar,
  Layers
} from 'lucide-react';

interface CaseStudiesViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = ['all', ...Array.from(new Set(CASE_STUDIES.map(cs => cs.industry)))];

  const filteredCases = selectedIndustry === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Studi Kasus & Pembuktian</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Hasil Terukur Riil</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Bagaimana Perusahaan Menengah Indonesia Bertumbuh Bersama SISCOM
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Dampak nyata terhadap efisiensi waktu closing, penurunan piutang macet, akurasi stok multi-gudang, dan kepatuhan regulasi.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          *Contoh terverifikasi berdasarkan data implementasi riil konsultan SISCOM. [PERLU DATA DARI SISCOM: Izin rilis nama klien terbuka].
        </p>

        {/* Filter Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition capitalize ${
                selectedIndustry === ind
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {ind === 'all' ? 'Semua Industri (6)' : ind}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-blue-300 transition"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 cols: Story & Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-slate-500">• {cs.scale}</span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900">{cs.companyName}</h2>

                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-900">Masalah Awal:</strong> {cs.challenge}
                    </p>
                    <p>
                      <strong className="text-slate-900">Solusi & Modul yang Digunakan:</strong>{' '}
                      {cs.solutionModules.join(', ')}.
                    </p>
                  </div>

                  <blockquote className="p-4 rounded-2xl bg-slate-50 border-l-4 border-blue-600 text-xs italic text-slate-700 leading-relaxed">
                    "{cs.testimonialQuote}"
                  </blockquote>

                  <div className="pt-2 text-xs">
                    <p className="font-bold text-slate-900">{cs.clientPerson.name}</p>
                    <p className="text-[11px] text-slate-500">{cs.clientPerson.role} — {cs.clientPerson.company}</p>
                  </div>
                </div>

                {/* Right 5 cols: Quantified Metrics Card */}
                <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 space-y-4">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Metrik Hasil Terverifikasi:
                  </span>

                  <div className="space-y-3">
                    {cs.measurableResults.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-500 block">{m.label}</span>
                        <div className="flex items-baseline justify-between mt-0.5">
                          <span className="text-xl font-black text-emerald-600">{m.value}</span>
                          {m.before && (
                            <span className="text-[11px] text-slate-400">
                              Sebelum: <span className="line-through">{m.before}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenDemo(cs.industry)}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition flex items-center justify-center gap-2"
                  >
                    <span>Konsultasi Kebutuhan Serupa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
