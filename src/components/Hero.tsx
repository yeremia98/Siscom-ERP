import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  Users, 
  Store, 
  Factory, 
  Truck, 
  Sparkles,
  Lock,
  Calendar,
  FileCheck2,
  ShieldCheck,
  Award
} from 'lucide-react';
import { AnimatedMascot } from './AnimatedMascot';

interface HeroProps {
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<
    'kontraktor' | 'exhibition' | 'property' | 'hris' | 'retail' | 'manufaktur' | 'rental'
  >('kontraktor');

  const tabs = [
    { id: 'kontraktor', label: 'Kontraktor & Konstruksi', icon: HardHat, route: '/product/kontraktor' },
    { id: 'hris', label: 'HRIS & Payroll TER', icon: Users, route: '/product/corehr' },
    { id: 'retail', label: 'Retail & POS', icon: Store, route: '/product/smartpos' },
    { id: 'exhibition', label: 'Exhibition Contractor', icon: Sparkles, route: '/product/kontraktor' },
    { id: 'property', label: 'Property Management', icon: Building2, route: '/product/kontraktor' },
    { id: 'manufaktur', label: 'Manufaktur & BOM', icon: Factory, route: '/product/berikat' },
    { id: 'rental', label: 'Rental & Alat Berat', icon: Truck, route: '/product/distribution' },
  ] as const;

  return (
    <section className="relative pt-10 sm:pt-16 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-orange-500/10 via-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Typographic Hero Stack */}
        <div className="text-center max-w-4xl mx-auto">
          {/* AstroWind Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>Enterprise Resource Planning • Standar Industri Indonesia</span>
          </div>

          {/* Master H1: Clean, Authoritative, No AI Slop */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Kendali Penuh Operasional Bisnis Terintegrasi Tanpa Kompromi
          </h1>

          {/* Executive Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Platform ERP enterprise lokal Indonesia yang menyatukan alur proyek, rantai pasok, kepatuhan perpajakan (PPh 21 TER & e-Faktur), dan pembukuan finansial ke dalam satu ekosistem data yang terpercaya.
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-orange-600/25 active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Konsultasi Solusi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/product/kontraktor')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-200 dark:border-slate-700/80 shadow-sm transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>Eksplorasi Modul Industri</span>
            </button>
          </div>

          {/* 3 Pillars Micro-Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Dukungan Standar Akuntansi & Perpajakan RI</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Pilihan Private Cloud atau On-Premise Sovereign</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Pendampingan Langsung Sampai Serah Terima Go-Live</span>
            </span>
          </div>
        </div>

        {/* Hero Interactive Split: 3D Animated Mascot & Live Enterprise Console */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Mascot Character with Interactive Speech Bubble (4 cols) */}
          <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
            <AnimatedMascot onNavigate={onNavigate} onOpenConsultation={onOpenConsultation} />
          </div>

          {/* Right Column: Live Operational ERP Dashboard Preview (8 cols) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="rounded-3xl p-2 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-800/60 dark:to-slate-900/40 shadow-2xl border border-slate-200 dark:border-slate-700/80">
              <div className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
                {/* Window Chrome Header */}
                <div className="bg-slate-100 dark:bg-slate-900/95 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                      SISCOM Enterprise Control Center • Live Operational Dashboard
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] border border-emerald-300 dark:border-emerald-800/60 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      ACID Architecture Verified
                    </span>
                  </div>
                </div>

                {/* Interactive Module Navigation Strip */}
                <div className="bg-slate-50 dark:bg-slate-900/60 px-3 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-orange-500 text-white font-bold shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Tab Panels */}
                <div className="p-5 sm:p-6 text-left bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
                  {activeTab === 'kontraktor' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-mono">
                            Proyek #PRJ-SUD-2024 • Kontraktor Sipil & MEP
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                            Tower Perkantoran Sudirman Central Business District
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-300 dark:border-emerald-800">
                            Status Anggaran: On-Budget
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Nilai Kontrak RAB Klien</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 block font-mono">Rp 32.450.000.000</span>
                          <span className="text-[10px] text-slate-500">Termin Cair: 60%</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Batas Plafon RAP Internal</span>
                          <span className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mt-0.5 block font-mono">Rp 25.800.000.000</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Sisa Kuota PO: Rp 8.120.000.000</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Kurva S: Progres Fisik vs Biaya</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block font-mono">+2,4% Ahead Schedule</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Opname Subkon Terverifikasi</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                        <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>
                          <strong>RAP Budget Locking Aktif:</strong> Purchase Request Besi Beton Ulir D16 melebihi kuota RAP Pekerjaan Kolom Lantai 8. Penerbitan PO otomatis ditahan hingga diotorisasi Direktur Proyek.
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'hris' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-mono">
                            SDM & Payroll • PMK No. 168/2023 & BPJS RI
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                            Kalkulasi Pajak Gaji PPh 21 TER (Kategori A, B, C)
                          </h3>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold text-xs border border-emerald-300 dark:border-emerald-800">
                          SAK & Fiskal Terverifikasi
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Kalkulasi PPh 21 TER 2024</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 block">100% Otomatis Presisi</span>
                          <span className="text-[10px] text-slate-500">Slip Gaji & Bukti Potong 1721-A1</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">BPJS Ketenagakerjaan & Kesehatan</span>
                          <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">Sesuai Regulasi Berlaku</span>
                          <span className="text-[10px] text-slate-500">JKK, JKM, JHT, JP Terpisah Rinci</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Absensi GPS & Geofencing</span>
                          <span className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mt-0.5 block">Portal Mobile ESS</span>
                          <span className="text-[10px] text-slate-500">Koreksi Kehadiran & Lembur Terpantau</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'retail' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-mono">
                            Omnichannel Retail • 48 Gerai Aktif
                          </span>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                            Point of Sale Modern, Multi-Satuan & Stok Multi-Cabang
                          </h3>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold text-xs border border-emerald-300 dark:border-emerald-800">
                          Offline-Online Engine
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Kecepatan Kasir POS</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 block">&lt; 3 Detik / Transaksi</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">QRIS, EDC & Tunai Terpadu</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Manajemen Satuan Bertingkat</span>
                          <span className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mt-0.5 block">Karton / Lusin / Pcs</span>
                          <span className="text-[10px] text-slate-500">Konversi Otomatis Saat Penjualan</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                          <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Integrasi Pajak e-Faktur</span>
                          <span className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mt-0.5 block">1 Klik Sinkronisasi</span>
                          <span className="text-[10px] text-slate-500">Ekspor Format Resmi DJP</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab !== 'kontraktor' && activeTab !== 'hris' && activeTab !== 'retail' && (
                    <div className="p-6 text-center text-slate-600 dark:text-slate-400 text-sm">
                      <p>Sistem ERP spesifik industri ini dilengkapi tata kelola alur native dan laporan laba rugi konsolidasian.</p>
                      <button
                        onClick={() => onOpenConsultation(`Modul ${activeTab}`)}
                        className="mt-3 px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs"
                      >
                        Lihat Spesifikasi Teknis
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
