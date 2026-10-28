import React from 'react';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  FileCheck2, 
  DownloadCloud, 
  Activity, 
  CheckCircle2,
  KeyRound
} from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityPillars = [
    {
      title: 'Kedaulatan Data di Indonesia',
      description: 'Pusat data cloud berlokasi secara fisik di Tier 3/4 Data Center Jakarta, memenuhi seluruh regulasi UU PDP No. 27/2022 dan PP No. 71/2019.',
      icon: Server,
    },
    {
      title: 'Enkripsi Data In-Transit & At-Rest',
      description: 'Komunikasi jaringan dilindungi protokol TLS 1.3 enkripsi 256-bit, serta media penyimpanan fisik dienkripsi dengan standar AES-256 kelas perbankan.',
      icon: Lock,
    },
    {
      title: 'Pencatatan Audit Trail Abadi',
      description: 'Setiap entri, pengubahan nilai, dan persetujuan transaksi tercatat permanen dengan jejak audit forensik lengkap (identitas pengguna, IP, dan timestamp).',
      icon: KeyRound,
    },
    {
      title: 'Jaminan Hak Ekspor Data 100%',
      description: 'Data keuangan dan operasional adalah hak milik mutlak perusahaan Anda. Anda memiliki hak ekspor basis data menyeluruh kapan pun tanpa biaya.',
      icon: DownloadCloud,
    },
  ];

  return (
    <section id="kepatuhan" className="py-20 bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kepatuhan Regulasi & Tata Kelola Keamanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perlindungan Data Finansial Bisnis dengan Standar Keamanan Tertinggi
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Menjamin kerahasiaan formula HPP, margin harga, data nasabah, dan dokumen pembukuan korporasi Anda secara terukur dan bergaransi hukum.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors duration-150 space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 text-emerald-400 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dual Statement Strip: Tax & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                Regulasi Pajak Indonesia
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {VERIFIED_CONTACTS.taxStatement}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Terus diperbarui secara teratur mengikuti regulasi Direktorat Jenderal Pajak dan Kementerian Keuangan RI (PPh 21 skema TER 2024, e-Faktur, PPh 23, PPh 4(2)).
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-mono text-orange-400 uppercase tracking-wider block">
                Dukungan Berkelanjutan
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {VERIFIED_CONTACTS.supportStatement}
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Kanal komunikasi terdedikasi, pelatihan ulang saat pergantian staf, serta bantuan konsultasi alur operasional langsung dari tim ahli lokal PT. Shan Informasi Sistem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
