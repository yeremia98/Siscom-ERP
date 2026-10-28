import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HardHat, 
  Building2, 
  Users, 
  Store, 
  Factory, 
  Truck, 
  Sparkles,
  Lock,
  Activity,
  Calendar,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileCheck2
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (sector?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<
    'kontraktor' | 'exhibition' | 'property' | 'hris' | 'retail' | 'manufaktur' | 'rental'
  >('kontraktor');

  const tabs = [
    { id: 'kontraktor', label: 'Kontraktor & Konstruksi', icon: HardHat },
    { id: 'exhibition', label: 'Exhibition Contractor', icon: Sparkles },
    { id: 'property', label: 'Property Management', icon: Building2 },
    { id: 'hris', label: 'HRIS & Payroll TER', icon: Users },
    { id: 'retail', label: 'Retail & POS', icon: Store },
    { id: 'manufaktur', label: 'Manufaktur & BOM', icon: Factory },
    { id: 'rental', label: 'Rental & Alat Berat', icon: Truck },
  ] as const;

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-radial-[at_50%_0%] from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-orange-600/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Typographic Hero Stack */}
        <div className="text-center max-w-4xl mx-auto">
          {/* AstroWind Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/25 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>Enterprise Resource Planning • Standar Industri Indonesia</span>
          </div>

          {/* Master H1: Clean, Authoritative, No AI Slop */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Kendali Penuh Operasional Bisnis Terintegrasi Tanpa Kompromi
          </h1>

          {/* Executive Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Platform ERP enterprise lokal Indonesia yang menyatukan alur proyek, rantai pasok, kepatuhan perpajakan, dan pembukuan finansial ke dalam satu ekosistem data yang terpercaya.
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

            <a
              href="#modul"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm sm:text-base border border-slate-700/80 shadow-sm transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>Eksplorasi Modul Industri</span>
            </a>
          </div>

          {/* 3 Pillars Micro-Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dukungan Standar Akuntansi & Perpajakan RI</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pilihan Private Cloud atau On-Premise Sovereign</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pendampingan Langsung Sampai Serah Terima Go-Live</span>
            </span>
          </div>
        </div>

        {/* Interactive AstroWind Live Preview & 3D Mascot Advisor Integration */}
        <div className="mt-12 max-w-5xl mx-auto space-y-4">
          {/* Mascot Advisory Bar with Minimalist Corporate Speech Bubble */}
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800/90 p-3 sm:p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
              {/* 3D Mascot Avatar Frame */}
              <div className="relative shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 p-1 border border-blue-500/30 shadow-lg group">
                <picture className="w-full h-full block">
                  <source type="image/webp" srcSet="/assets/aistudio/mascot_sis.webp" />
                  <img
                    src="/assets/aistudio/image_4abc3d15.png"
                    alt="Maskot Robot 3D SISCOM ERP Advisor"
                    width="194"
                    height="285"
                    className="w-full h-full object-cover object-top rounded-xl drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                    loading="eager"
                  />
                </picture>
                <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" title="SISCOM Advisor Aktif"></span>
              </div>

              {/* Minimalist Corporate Speech Bubble */}
              <div className="relative bg-slate-950/95 border border-slate-800 rounded-2xl px-4 py-3 shadow-md max-w-md">
                {/* Speech Bubble Arrow */}
                <div className="hidden sm:block absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-slate-800"></div>
                <div className="hidden sm:block absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-r-[7px] border-r-slate-950"></div>
                
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    SISCOM Enterprise Advisor
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 font-mono">
                    Siap Membantu
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  “Halo! Ada yang bisa saya bantu jelajahi mengenai modul ERP SISCOM?”
                </p>
              </div>
            </div>

            {/* Quick Interactive Module Triggers */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-[11px] text-slate-400 font-medium hidden lg:inline mr-1">
                Eksplorasi Langsung:
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('kontraktor')}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${
                  activeTab === 'kontraktor' 
                    ? 'bg-orange-500/15 border-orange-500/40 text-orange-300 font-semibold' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                RAP Kontraktor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hris')}
                className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition ${
                  activeTab === 'hris' 
                    ? 'bg-orange-500/15 border-orange-500/40 text-orange-300 font-semibold' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                PPh 21 TER
              </button>
              <button
                type="button"
                onClick={() => onOpenConsultation()}
                className="text-xs px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <span>Tanya Solusi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* AstroWind Framed Enterprise Live Preview Interface */}
          <div className="rounded-3xl p-2 bg-gradient-to-b from-slate-800 via-slate-800/60 to-slate-900/40 shadow-2xl border border-slate-700/80">
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-inner">
            {/* Window Chrome Header */}
            <div className="bg-slate-900/95 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-3 text-xs font-mono text-slate-400">
                  SISCOM Enterprise Control Center • Live Operational Dashboard
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 font-mono text-[11px] border border-emerald-800/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ACID Architecture Verified
                </span>
              </div>
            </div>

            {/* Interactive Module Navigation Strip */}
            <div className="bg-slate-900/60 px-3 py-2 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-orange-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Tab Panels */}
            <div className="p-5 sm:p-7 text-left bg-slate-950 text-slate-100 font-sans">
              {activeTab === 'kontraktor' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Proyek #PRJ-SUD-2024 • Kontraktor Sipil & MEP
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Tower Perkantoran Sudirman Central Business District
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 font-semibold border border-emerald-800">
                        Status Anggaran: On-Budget
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Nilai Kontrak RAB Klien</span>
                      <span className="text-lg font-bold text-white mt-0.5 block font-mono">Rp 32.450.000.000</span>
                      <span className="text-[10px] text-slate-500">Termin Cair: 60%</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Batas Plafon RAP Internal</span>
                      <span className="text-lg font-bold text-amber-400 mt-0.5 block font-mono">Rp 25.800.000.000</span>
                      <span className="text-[10px] text-emerald-400">Sisa Kuota PO: Rp 8.120.000.000</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Kurva S: Progres Fisik vs Biaya</span>
                      <span className="text-lg font-bold text-emerald-400 mt-0.5 block font-mono">+2,4% Ahead Schedule</span>
                      <span className="text-[10px] text-slate-400">Opname Subkon Terverifikasi</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>RAP Budget Locking Aktif:</strong> Purchase Request Besi Beton Ulir D16 melebihi kuota RAP Pekerjaan Kolom Lantai 8. Penerbitan PO otomatis ditahan hingga diotorisasi Direktur Proyek.
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'exhibition' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Event #EVT-GIIAS-2024 • Exhibition Contractor
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Pabrikasi & Instalasi Paviliun Otomotif ICE BSD
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 font-semibold text-xs border border-blue-800">
                      Tahap: Loading & Finishing
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">SPK Workshop Material</span>
                      <span className="text-lg font-bold text-white mt-0.5 block">100% Selesai Produksi</span>
                      <span className="text-[10px] text-slate-400">Rangka Besi, Multiplek & Akrilik</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Inventaris Aset Sewa Booth</span>
                      <span className="text-lg font-bold text-emerald-400 mt-0.5 block">142 Item Terpasang</span>
                      <span className="text-[10px] text-slate-400">Barstool, Showcase, Spotlight</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Pengawasan Biaya Lembur</span>
                      <span className="text-lg font-bold text-blue-400 mt-0.5 block">Terkontrol Otomatis</span>
                      <span className="text-[10px] text-slate-400">Jurnal Langsung ke Biaya Event</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'property' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Estate Management • Perkantoran & Apartemen
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Billing Tenancy & Service Charge Menara Palma
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-violet-950 text-violet-300 font-semibold text-xs border border-violet-800">
                      Okupansi Sewa: 94,8%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Otomatisasi Tagihan IPL</span>
                      <span className="text-lg font-bold text-white mt-0.5 block font-mono">340 Unit Terbit Massal</span>
                      <span className="text-[10px] text-emerald-400">PPN 11% & e-Faktur Otomatis</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Pencatatan Utilitas Listrik & Air</span>
                      <span className="text-lg font-bold text-amber-400 mt-0.5 block">Sub-Meter Real-Time</span>
                      <span className="text-[10px] text-slate-400">Formula Tarif Bertingkat</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Work Order Perawatan Gedung</span>
                      <span className="text-lg font-bold text-emerald-400 mt-0.5 block">99,1% SLA Selesai</span>
                      <span className="text-[10px] text-slate-400">Preventif AC, Genset & Lift</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hris' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        SDM & Payroll • PMK No. 168/2023 & BPJS RI
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Kalkulasi Pajak Gaji PPh 21 TER (Kategori A, B, C)
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 font-semibold text-xs border border-emerald-800">
                      SAK & Fiskal Terverifikasi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Kalkulasi PPh 21 TER 2024</span>
                      <span className="text-lg font-bold text-white mt-0.5 block">100% Otomatis Presisi</span>
                      <span className="text-[10px] text-slate-400">Slip Gaji & Bukti Potong 1721-A1</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">BPJS Ketenagakerjaan & Kesehatan</span>
                      <span className="text-lg font-bold text-emerald-400 mt-0.5 block">Sesuai Regulasi Berlaku</span>
                      <span className="text-[10px] text-slate-400">JKK, JKM, JHT, JP Terpisah Rinci</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Absensi GPS & Geofencing</span>
                      <span className="text-lg font-bold text-blue-400 mt-0.5 block">Portal Mobile ESS</span>
                      <span className="text-[10px] text-slate-400">Koreksi Kehadiran & Lembur Terpantau</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'retail' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Omnichannel Retail • 48 Gerai Aktif
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Point of Sale Modern, Multi-Satuan & Stok Multi-Cabang
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 font-semibold text-xs border border-emerald-800">
                      Offline-Online Engine
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Kecepatan Kasir POS</span>
                      <span className="text-lg font-bold text-white mt-0.5 block">&lt; 3 Detik / Transaksi</span>
                      <span className="text-[10px] text-emerald-400">QRIS, EDC & Tunai Terpadu</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Manajemen Satuan Bertingkat</span>
                      <span className="text-lg font-bold text-amber-400 mt-0.5 block">Karton / Lusin / Pcs</span>
                      <span className="text-[10px] text-slate-400">Konversi Otomatis Saat Penjualan</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Integrasi Pajak e-Faktur</span>
                      <span className="text-lg font-bold text-blue-400 mt-0.5 block">1 Klik Sinkronisasi</span>
                      <span className="text-[10px] text-slate-400">Ekspor Format Resmi DJP</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'manufaktur' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Pabrikasi & Produksi • 24 Mesin Cetak Presisi
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Kalkulasi Harga Pokok Penjualan (HPP) Aktual Per Batch
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-950 text-amber-300 font-semibold text-xs border border-amber-800">
                      HPP Aktual Presisi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Bill of Materials (BOM)</span>
                      <span className="text-lg font-bold text-white mt-0.5 block">Multi-Level Rinci</span>
                      <span className="text-[10px] text-slate-400">Bahan Baku, Penolong & Listrik Mesin</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">HPP Aktual Produk Riil</span>
                      <span className="text-lg font-bold text-emerald-400 mt-0.5 block">Terkalkulasi Real-Time</span>
                      <span className="text-[10px] text-slate-400">Bukan Estimasi Akhir Bulan</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Monitoring Sisa Bahan Scrap</span>
                      <span className="text-lg font-bold text-blue-400 mt-0.5 block">Terdata Akurat</span>
                      <span className="text-[10px] text-slate-400">Kontrol Mutu & Kualitas QC</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'rental' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono">
                        Heavy Equipment & Fleet Rental • 85 Unit Alat Berat
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        Penjadwalan Sewa, Monitoring Hour Meter & Log Servis
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-950 text-blue-300 font-semibold text-xs border border-blue-800">
                      Fleet Utilization Engine
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Kalender Reservasi Armada</span>
                      <span className="text-lg font-bold text-white mt-0.5 block">Zero Schedule Clash</span>
                      <span className="text-[10px] text-slate-400">Crane, Excavator, Genset</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Log Pemeliharaan Preventif</span>
                      <span className="text-lg font-bold text-amber-400 mt-0.5 block">Pengingat Servis Rutin</span>
                      <span className="text-[10px] text-emerald-400">Cegah Downtime Mesin Rusak</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Billing Kontrak Sewa Proyek</span>
                      <span className="text-lg font-bold text-blue-400 mt-0.5 block">Sistem Jam / Hari / Bulan</span>
                      <span className="text-[10px] text-slate-400">Kalkulasi Otomatis BBM & Operator</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
