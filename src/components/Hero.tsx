import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Building2, FileText, BarChart3, Database } from 'lucide-react';

interface HeroProps {
  onNavigate: (route: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'kurva-s' | 'aging-ar' | 'hpp-bom' | 'bea-cukai'>('kurva-s');

  const tabs = [
    { id: 'kurva-s', label: 'Kurva S & RAP Proyek' },
    { id: 'aging-ar', label: 'Aging Piutang & Limit Kredit' },
    { id: 'hpp-bom', label: 'HPP & Bill of Materials' },
    { id: 'bea-cukai', label: 'IT Inventory BC 2.3' },
  ] as const;

  return (
    <section className="relative pt-12 pb-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Badges / Proof Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            <Building2 className="w-3.5 h-3.5 text-[#0B2447] dark:text-amber-400" />
            PT Shan Informasi Sistem
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
            Pengembangan sistem sejak 1994 di Jakarta
          </span>
        </div>

        {/* Headline & Subhead */}
        <div className="max-w-4xl space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
            Kendali biaya proyek, piutang distribusi, dan pajak perusahaan dalam satu sistem ERP.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Sistem terintegrasi yang mengunci pembengkakan biaya lewat validasi pagu anggaran RAP,
            menghitung kurva S realisasi fisik, memantau batas kredit outlet, dan menerbitkan laporan pajak
            PPh 21 skema TER serta e-Faktur secara otomatis.
          </p>

          {/* Action CTAs: Exactly 1 High-contrast Primary Button + 1 Plain Link */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="/demo"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/demo');
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2447]"
            >
              Jadwalkan demo
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#produk"
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
            >
              Lihat modul industri
            </a>
          </div>
        </div>

        {/* Proof Strip Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B2447] dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">Sejak 1994</span>
              Pengalaman implementasi akuntansi dan ERP lokal di Indonesia.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B2447] dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">Regulasi Terkini</span>
              Sesuai skema PPh 21 TER, e-Faktur DJP, dan PER-02/BC/2019.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B2447] dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">Kedaulatan Data</span>
              Hosting private cloud di Jakarta tier 3/4 atau on-premise mandiri.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#0B2447] dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 dark:text-white block">Dukungan Langsung</span>
              Konsultan implementasi dari kantor pusat Cengkareng, Jakarta Barat.
            </div>
          </div>
        </div>

        {/* Swiss Mockup Section (Code-built, interactive, factual UI mockup) */}
        <div className="mt-12 bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Mockup Header Bar */}
          <div className="px-4 py-3 bg-slate-100/80 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              Ilustrasi antarmuka, data contoh
            </div>
          </div>

          {/* Mockup Canvas */}
          <div className="p-4 sm:p-6 bg-slate-50/50 dark:bg-[#0c152a]">
            {activeTab === 'kurva-s' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-slate-400">PROYEK ID: PRJ-2024-089</span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                      Pembangunan Gedung Logistik Cikarang Tahap 2
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                      STATUS RAP: TERKUNCI (0 DEVIASI)
                    </span>
                  </div>
                </div>

                {/* Kurva S SVG Chart */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-3 text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Kemajuan Fisik vs Rencana (Minggu 1 - 12)
                    </span>
                    <div className="flex items-center gap-4 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-0.5 bg-slate-400 inline-block"></span>
                        Rencana (Target)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-0.5 bg-[#E8792B] inline-block"></span>
                        Realisasi Fisik (Opname)
                      </span>
                    </div>
                  </div>

                  <svg viewBox="0 0 600 160" className="w-full h-40 overflow-visible">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="600" y2="20" stroke="#E5E7EB" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="600" y2="60" stroke="#E5E7EB" strokeDasharray="3 3" />
                    <line x1="0" y1="100" x2="600" y2="100" stroke="#E5E7EB" strokeDasharray="3 3" />
                    <line x1="0" y1="140" x2="600" y2="140" stroke="#E5E7EB" />

                    {/* S-Curve Target Line */}
                    <path
                      d="M 20 140 C 150 138, 250 80, 450 35 L 580 20"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* Realization Line */}
                    <path
                      d="M 20 140 C 140 139, 230 75, 400 48"
                      fill="none"
                      stroke="#E8792B"
                      strokeWidth="3"
                    />

                    {/* Current point */}
                    <circle cx="400" cy="48" r="5" fill="#E8792B" />
                    <text x="410" y="45" fontSize="11" fill="#E8792B" fontFamily="monospace" fontWeight="bold">
                      W9: Realisasi 68,4% (Target 65,0%)
                    </text>
                  </svg>
                </div>

                {/* Table Data Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 block">Pagu RAP Material</span>
                    <span className="text-base font-mono font-bold text-slate-900 dark:text-white block mt-0.5">
                      Rp 4.250.000.000
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Terpakai PO: Rp 2.890.000.000 (68%)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 block">Opname Subkontraktor</span>
                    <span className="text-base font-mono font-bold text-slate-900 dark:text-white block mt-0.5">
                      Rp 1.840.000.000
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Retensi 5% ditahan: Rp 92.000.000</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 block">Penagihan Owner (Termin)</span>
                    <span className="text-base font-mono font-bold text-slate-900 dark:text-white block mt-0.5">
                      Rp 4.600.000.000
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">Terbayar: Rp 3.500.000.000</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'aging-ar' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-slate-400">MODUL: DISTRIBUSI & PIUTANG USAHA</span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                      Buku Pembantu Piutang & Penguncian Limit Kredit
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-amber-100 text-amber-900 dark:bg-amber-900/60 dark:text-amber-300">
                    PENGUNCIAN OTOMATIS AKTIF
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <thead className="bg-slate-100 dark:bg-slate-800/80 font-semibold text-slate-700 dark:text-slate-300">
                      <tr>
                        <th className="p-2.5">Nama Toko / Outlet</th>
                        <th className="p-2.5 font-mono">Limit Kredit</th>
                        <th className="p-2.5 font-mono">Saldo Piutang</th>
                        <th className="p-2.5 font-mono">0-30 Hari</th>
                        <th className="p-2.5 font-mono">31-60 Hari</th>
                        <th className="p-2.5 font-mono">&gt;60 Hari</th>
                        <th className="p-2.5">Status Pengiriman</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-slate-900 dark:text-white">Toko Sinar Rejeki</td>
                        <td className="p-2.5">Rp 150.000.000</td>
                        <td className="p-2.5 font-bold">Rp 112.500.000</td>
                        <td className="p-2.5 text-emerald-600">Rp 112.500.000</td>
                        <td className="p-2.5">Rp 0</td>
                        <td className="p-2.5">Rp 0</td>
                        <td className="p-2.5 font-sans text-emerald-700 dark:text-emerald-400">Lolos DO</td>
                      </tr>
                      <tr className="bg-rose-50/50 dark:bg-rose-950/20">
                        <td className="p-2.5 font-sans font-medium text-slate-900 dark:text-white">PD Sumber Jaya Abadi</td>
                        <td className="p-2.5">Rp 80.000.000</td>
                        <td className="p-2.5 font-bold text-rose-600">Rp 84.200.000</td>
                        <td className="p-2.5">Rp 20.000.000</td>
                        <td className="p-2.5">Rp 34.200.000</td>
                        <td className="p-2.5 text-rose-600 font-bold">Rp 30.000.000</td>
                        <td className="p-2.5 font-sans text-rose-700 dark:text-rose-400 font-semibold">Terkunci (Lewat Limit)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-sans font-medium text-slate-900 dark:text-white">CV Makmur Distribusi</td>
                        <td className="p-2.5">Rp 200.000.000</td>
                        <td className="p-2.5 font-bold">Rp 95.000.000</td>
                        <td className="p-2.5 text-emerald-600">Rp 95.000.000</td>
                        <td className="p-2.5">Rp 0</td>
                        <td className="p-2.5">Rp 0</td>
                        <td className="p-2.5 font-sans text-emerald-700 dark:text-emerald-400">Lolos DO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'hpp-bom' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-slate-400">PRODUKSI ID: SPK-2024-1102</span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                      Kalkulasi HPP Aktual Bill of Materials (BOM)
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Target Output: 5.000 Botol Kemasan</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">Bahan Baku Utama (HDPE)</span>
                    <span className="font-mono font-bold text-sm text-slate-900 dark:text-white block mt-1">Rp 18.500.000</span>
                    <span className="text-[11px] text-slate-400 font-mono">1.250 kg @ Rp 14.800</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">Upah Kerja Langsung</span>
                    <span className="font-mono font-bold text-sm text-slate-900 dark:text-white block mt-1">Rp 3.200.000</span>
                    <span className="text-[11px] text-slate-400 font-mono">4 operator x 2 shift</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">Biaya Mesin & Listrik Pabrik</span>
                    <span className="font-mono font-bold text-sm text-slate-900 dark:text-white block mt-1">Rp 2.450.000</span>
                    <span className="text-[11px] text-slate-400 font-mono">16 jam mesin injection</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 bg-amber-50/40 dark:bg-amber-950/20">
                    <span className="text-slate-500 block">HPP Aktual Satuan</span>
                    <span className="font-mono font-bold text-base text-[#0B2447] dark:text-amber-400 block mt-1">Rp 4.830 / botol</span>
                    <span className="text-[11px] text-emerald-600 font-mono">Scrap tercatat: 1,8%</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bea-cukai' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-slate-400">BEA CUKAI REKOMENDASI: PER-02/BC/2019</span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                      Pertanggungjawaban Mutasi Bahan Baku Pabean (Dokumen BC 2.3)
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-indigo-100 text-indigo-900 dark:bg-indigo-900/60 dark:text-indigo-300">
                    PORTAL CEISA READY
                  </span>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div>No. Pendaftaran: <span className="font-bold text-slate-900 dark:text-white">040822/BC23/2024</span></div>
                    <div>Tgl Pendaftaran: <span className="font-bold text-slate-900 dark:text-white">18/09/2024</span></div>
                    <div>Valuta: <span className="font-bold text-slate-900 dark:text-white">USD 42,500.00</span></div>
                    <div>Fasilitas: <span className="font-bold text-slate-900 dark:text-white">Kawasan Berikat (KB)</span></div>
                  </div>
                  <div className="flex flex-wrap justify-between pt-1 text-[11px] text-slate-500">
                    <span>Audit Trail: Timestamp tercatat, saldo mutasi otomatis terkunci dari rekayasa manual.</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">Hak Akses Auditor Terverifikasi</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
