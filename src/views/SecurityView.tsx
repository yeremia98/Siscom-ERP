import React from 'react';
import { ViewType } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Database, 
  KeyRound, 
  FileCheck2, 
  DownloadCloud, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

interface SecurityViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: () => void;
}

export const SecurityView: React.FC<SecurityViewProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Keamanan & Privasi Data</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Kepatuhan UU PDP No. 27/2022 & Standar Keamanan Data Perusahaan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Keamanan Tingkat Korporasi untuk Melindungi Data Finansial Bisnis Anda
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Data bisnis, margin harga, formula resep HPP, dan data nasabah Anda adalah aset paling berharga. SISCOM menjamin integritas, kerahasiaan, dan ketersediaan data secara terukur.
        </p>
      </section>

      {/* 6 Security Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Data Center Indonesia (Tier 3/4)</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh server cloud ditempatkan di data center bersertifikasi Tier 3 dan 4 di Jakarta, Indonesia. Menjamin kedaulatan data dan kepatuhan penuh terhadap regulasi PP No. 71/2019 dan UU PDP.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Enkripsi In-Transit & At-Rest</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Setiap komunikasi antar perangkat staf dan server dilindungi protokol TLS 1.3 dengan enkripsi 256-bit. Database penyimpanan fisik (at-rest) dienkripsi dengan standar AES-256 tingkat perbankan.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Kebijakan Backup Harian (H-1)</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sistem melakukan backup snapshot harian otomatis di luar jam kerja dengan salinan cadangan tersimpan di lokasi terpisah (geo-redundant). Klien dapat meminta pemulihan data (restore) sewaktu-waktu.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-800 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Role-Based Access & Audit Trail</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hak akses granuler hingga ke tingkat tombol: staf kasir tidak dapat melihat HPP, estimator tidak bisa mengubah harga tender. Setiap edit atau penghapusan tercatat di log audit (siapa, kapan, dan nilai asal).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-800 flex items-center justify-center">
              <DownloadCloud className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Jaminan Hak Ekspor Data Penuh</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Data adalah 100% milik perusahaan Anda. Bila sewaktu-waktu kontrak berakhir, SISCOM menjamin hak ekspor seluruh database dalam format terbuka (SQL, Excel, CSV) tanpa biaya tebusan data.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">SLA Uptime 99,8% Bergaransi</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ketersediaan layanan cloud dijamin dalam Service Level Agreement (SLA) resmi dengan kompensasi kredit layanan bila terjadi gangguan terencana di luar jadwal pemeliharaan berkala.
            </p>
          </div>
        </div>

        {/* Verification Note Regarding ISO */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 block">Catatan Integritas Standar Keamanan:</strong>
            <span>
              Arsitektur SISCOM menerapkan praktik kontrol keamanan berbasis ISO/IEC 27001 dan UU PDP No. 27/2022. Sertifikat akreditasi resmi pihak ketiga akan dilampirkan dalam dokumen tender resmi perusahaan. [PERLU DATA DARI SISCOM: Nomor registrasi audit ISO aktif].
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
