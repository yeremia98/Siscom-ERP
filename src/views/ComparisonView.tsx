import React from 'react';
import { ViewType } from '../types';
import { COMPARISON_DATA } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  Check, 
  X as CloseIcon, 
  ArrowRight, 
  Calendar, 
  HelpCircle, 
  ShieldCheck, 
  AlertCircle,
  TrendingUp,
  Layers
} from 'lucide-react';

interface ComparisonViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Bandingkan SISCOM vs Odoo vs SAP vs Accurate</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Matriks Evaluasi Objektif • Diperbarui Oktober 2024</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Perbandingan Objektif: SISCOM vs Odoo vs Software Lain
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Evaluasi berimbang untuk membantu CFO, IT Manager, dan Business Owner memilih solusi yang paling rasional untuk operasi di Indonesia.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-900 text-white divide-x divide-slate-800">
                  <th className="p-4 sm:p-5 w-1/4 font-bold text-sm">Dimensi Penilaian</th>
                  <th className="p-4 sm:p-5 w-1/4 bg-blue-900 text-white font-black text-sm">
                    <div className="flex items-center justify-between">
                      <span>SISCOM ERP</span>
                      <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-extrabold">ERP Lokal ID</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 w-1/4 font-bold text-slate-300">Odoo (Enterprise/Community)</th>
                  <th className="p-4 sm:p-5 w-1/4 font-bold text-slate-300">Accurate / Jurnal / SAP B1</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition divide-x divide-slate-100">
                    <td className="p-4 sm:p-5 align-top">
                      <strong className="text-slate-900 text-sm block mb-1">{row.dimension}</strong>
                      <span className="text-[11px] text-slate-500 leading-relaxed block">{row.description}</span>
                    </td>
                    <td className="p-4 sm:p-5 align-top bg-blue-50/30 font-medium text-slate-900">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.siscom}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 align-top text-slate-600 leading-relaxed">
                      {row.odoo}
                    </td>
                    <td className="p-4 sm:p-5 align-top text-slate-600 leading-relaxed">
                      {row.accurateJurnal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Credibility Box: When competitors are better */}
        <div className="mt-8 p-6 rounded-3xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <h3 className="font-bold text-sm text-slate-900">
              Prinsip Integritas SISCOM: Kapan Anda Lebih Cocok Memilih Software Lain?
            </h3>
          </div>
          <p className="leading-relaxed text-slate-700">
            Kami tidak ingin menjual software yang tidak sesuai kebutuhan Anda. Bila perusahaan Anda adalah korporasi global yang wajib melakukan konsolidasi multi-negara dengan 50+ mata uang asing di Eropa dan Amerika, <strong>SAP S/4HANA atau Oracle NetSuite</strong> adalah pilihan yang tepat. Bila bisnis Anda toko retail mikro 1 staf yang hanya butuh mencetak struk sederhana, software kasir gratisan sudah memadai. Namun, bila Anda adalah perusahaan menengah di Indonesia (20-500 karyawan) yang membutuhkan kontrol alur operasional nyata (proyek, pabrik, gudang, kepatuhan regulasi lokal) dengan biaya wajar dan pendampingan lokal, <strong>SISCOM ERP dirancang khusus untuk Anda</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenDemo()}
            className="px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-600/25 transition inline-flex items-center gap-2"
          >
            <span>Jadwalkan Sesi Uji Kelayakan 30 Menit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
