import React, { useState } from 'react';
import { ViewType } from '../types';
import { PRODUCTS, INDUSTRIES, CASE_STUDIES, PRICING_TIERS, FAQS, VERIFIED_CONTACTS } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Clock, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  ChevronRight, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  Phone,
  HardHat,
  Truck,
  Factory,
  Store,
  Calculator,
  Lock,
  Headphones,
  Check,
  FileText
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeModuleTab, setActiveModuleTab] = useState<'contractor' | 'distribution' | 'manufacturing' | 'accounting'>('contractor');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [quickLead, setQuickLead] = useState({ name: '', phone: '', industry: 'Kontraktor & Konstruksi' });
  const [quickLeadSubmitted, setQuickLeadSubmitted] = useState(false);

  const handleHeroDemoClick = () => {
    analytics.track('cta_click', { cta_label: 'Jadwalkan Demo 30 Menit', location: 'hero' });
    onOpenDemo();
  };

  const handleHeroPricingClick = () => {
    analytics.track('cta_click', { cta_label: 'Lihat Estimasi Harga', location: 'hero' });
    onNavigate('pricing');
  };

  const handleQuickLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickLead.name || !quickLead.phone) return;
    analytics.track('form_submit', {
      form_name: 'homepage_closing_quick_lead',
      ...quickLead,
    });
    setQuickLeadSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-16">
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-16 overflow-hidden bg-gradient-to-b from-slate-100/70 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* 3 Diferensiator Fold Pertama Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                Custom Alur Tanpa Biaya Tambahan di MSC
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                Support 7 Hari 08.30 - 22.00 WIB
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Cloud / On-Premise & 100% Pajak ID
              </span>
            </div>

            {/* H1 (Single H1 on page, maximum 12 words) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              ERP Lokal yang Dikustomisasi Sesuai Alur Bisnis Anda, Didampingi Sampai Go Live
            </h1>

            {/* Sub-headline with measurable results */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Terbukti memangkas waktu closing keuangan hingga 65% dan mengontrol stok multi-cabang tanpa biaya tersembunyi.
            </p>

            {/* Dual Consistent CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleHeroDemoClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-base shadow-xl shadow-orange-600/25 active:scale-95 transition flex items-center justify-center gap-2.5"
              >
                <span>Jadwalkan Demo 30 Menit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleHeroPricingClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition flex items-center justify-center gap-2"
              >
                <span>Lihat Estimasi Harga</span>
              </button>
            </div>

            {/* Interactive Real Product Visual (Dashboard Interface) */}
            <div className="mt-12 relative mx-auto max-w-5xl rounded-3xl p-2 bg-gradient-to-b from-slate-300 to-slate-200 shadow-2xl border border-slate-200">
              <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
                {/* Window Chrome Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-3 text-xs font-mono text-slate-400">SISCOM ERP Enterprise Suite — Live Control Panel</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[10px] border border-emerald-800">
                      ● Database Terkoneksi (ACID Validated)
                    </span>
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => setActiveModuleTab('contractor')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeModuleTab === 'contractor' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Kontraktor: Kontrol RAB & RAP
                  </button>
                  <button
                    onClick={() => setActiveModuleTab('distribution')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeModuleTab === 'distribution' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Distributor: Multi-Gudang & Piutang
                  </button>
                  <button
                    onClick={() => setActiveModuleTab('manufacturing')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeModuleTab === 'manufacturing' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Manufaktur: BOM & HPP Aktual
                  </button>
                  <button
                    onClick={() => setActiveModuleTab('accounting')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeModuleTab === 'accounting' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Akuntansi: Jurnal & e-Faktur
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="p-5 sm:p-6 text-left bg-slate-950 text-slate-100 font-sans">
                  {activeModuleTab === 'contractor' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <p className="text-xs text-slate-400">Proyek Aktif #PRJ-2024-089</p>
                          <h4 className="text-base font-bold text-white">Pembangunan Gedung Kantor Tower Sudirman</h4>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-400">Realisasi Fisik: <strong className="text-emerald-400">68,4%</strong></span>
                          <span className="text-slate-400">Realisasi RAP: <strong className="text-amber-400">64,2%</strong></span>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-900/60 text-emerald-300 font-semibold border border-emerald-700/60">
                            Status: On-Budget (Margin Aman)
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Nilai Kontrak (RAB Klien)</span>
                          <span className="text-lg font-bold text-white">Rp 14.850.000.000</span>
                          <span className="text-[10px] text-slate-500 block mt-0.5">Termin Terbayar: 60%</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Batas Plafon RAP Internal</span>
                          <span className="text-lg font-bold text-amber-400">Rp 11.200.000.000</span>
                          <span className="text-[10px] text-emerald-400 block mt-0.5">Sisa Kuota PO: Rp 4.009.600.000</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Deviasi Anggaran Proyek</span>
                          <span className="text-lg font-bold text-emerald-400">+1,8% vs Standar</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Nol Overbudget Tanpa Approval</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-x-auto">
                        <table className="w-full text-xs text-slate-300">
                          <thead>
                            <tr className="border-b border-slate-800 text-slate-400 text-left bg-slate-900">
                              <th className="p-2.5">Item Pekerjaan</th>
                              <th className="p-2.5">Volume RAP</th>
                              <th className="p-2.5">PO Material Terbit</th>
                              <th className="p-2.5">Opname Fisik</th>
                              <th className="p-2.5">Status Proteksi</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60">
                            <tr>
                              <td className="p-2.5 font-medium text-white">Pekerjaan Struktur Beton Lt. 4-6</td>
                              <td className="p-2.5">1.450 m³</td>
                              <td className="p-2.5">1.420 m³ (97%)</td>
                              <td className="p-2.5 text-emerald-400">95% Selesai</td>
                              <td className="p-2.5"><span className="text-emerald-400 font-mono text-[10px]">● Terkunci RAP</span></td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-medium text-white">Instalasi Pipa & Ducting AC</td>
                              <td className="p-2.5">3.200 m</td>
                              <td className="p-2.5">2.100 m (65%)</td>
                              <td className="p-2.5 text-blue-400">62% Terpasang</td>
                              <td className="p-2.5"><span className="text-emerald-400 font-mono text-[10px]">● Terkunci RAP</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeModuleTab === 'distribution' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <p className="text-xs text-slate-400">Distribusi FMCG & Bahan Bangunan</p>
                          <h4 className="text-base font-bold text-white">Monitoring 3 Gudang Terpadu & Plafon Piutang 1.200 Toko</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-blue-900/60 text-blue-300 font-semibold text-xs border border-blue-700/60">
                          Akurasi Stok: 99,4%
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Total Nilai Stok Fisik</span>
                          <span className="text-lg font-bold text-white">Rp 8.420.000.000</span>
                          <span className="text-[10px] text-slate-500 block">Selisih Opname: 0,12%</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Piutang Toko Overdue &gt; 60 Hari</span>
                          <span className="text-lg font-bold text-emerald-400">Turun 62%</span>
                          <span className="text-[10px] text-slate-400 block">Sales Order Auto-Block saat Overlimit</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Waktu Pemrosesan Surat Jalan</span>
                          <span className="text-lg font-bold text-blue-400">18 Jam (Sameday)</span>
                          <span className="text-[10px] text-slate-400 block">Tracking Rute Kirim Terhubung</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeModuleTab === 'manufacturing' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <p className="text-xs text-slate-400">Pabrik & Manufaktur Presisi</p>
                          <h4 className="text-base font-bold text-white">Kalkulasi HPP Aktual Per Batch Produksi & Pantauan Scrap</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-amber-900/60 text-amber-300 font-semibold text-xs border border-amber-700/60">
                          HPP Real-time
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">HPP Aktual Produk Botol 500ml</span>
                          <span className="text-lg font-bold text-white">Rp 482 / pcs</span>
                          <span className="text-[10px] text-emerald-400 block">Termasuk Bahan, Listrik & Mesin</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Penurunan Waste Bahan Baku</span>
                          <span className="text-lg font-bold text-emerald-400">22% Penghematan</span>
                          <span className="text-[10px] text-slate-400 block">Monitoring Scrap Tiap SPK</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Tutup Buku Akuntansi Pabrik</span>
                          <span className="text-lg font-bold text-blue-400">2 Hari Kerja</span>
                          <span className="text-[10px] text-slate-400 block">Otomatisasi Jurnal Produksi WIP</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeModuleTab === 'accounting' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <p className="text-xs text-slate-400">Standar Akuntansi Keuangan (SAK) Indonesia</p>
                          <h4 className="text-base font-bold text-white">General Ledger, e-Faktur, PPh 21 TER, & Laba Rugi Multi Cabang</h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-900/60 text-emerald-300 font-semibold text-xs border border-emerald-700/60">
                          Pajak Indonesia Terintegrasi
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Jurnal Transaksi Operasional</span>
                          <span className="text-lg font-bold text-white">100% Otomatis</span>
                          <span className="text-[10px] text-slate-500 block">Nol Double Input Akuntan</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Ekspor Dokumen e-Faktur</span>
                          <span className="text-lg font-bold text-emerald-400">1 Klik CSV/API</span>
                          <span className="text-[10px] text-slate-400 block">Format Resmi DJP Terkini</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Payroll PPh 21 TER 2024</span>
                          <span className="text-lg font-bold text-blue-400">Bawaan Sistem</span>
                          <span className="text-[10px] text-slate-400 block">Kategori A, B, C & BPJS Terhitung</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Proof Numbers & Trust Bar */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl font-black text-slate-900 tracking-tight">1994</span>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Berdiri & Melayani di Indonesia</p>
              </div>
              <div>
                <span className="text-3xl font-black text-blue-900 tracking-tight">{VERIFIED_CONTACTS.verifiedClientsCount}</span>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Klien Bisnis Terverifikasi</p>
              </div>
              <div>
                <span className="text-3xl font-black text-emerald-600 tracking-tight">7 Hari</span>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">08.30 - 22.00 WIB Support WA</p>
              </div>
              <div>
                <span className="text-3xl font-black text-amber-600 tracking-tight">100%</span>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Kepatuhan Regulasi Pajak RI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PILIH BISNIS ANDA (7 SEGMENTS TO REDUCE BOUNCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Spesialisasi Vertikal</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Pilih Industri Bisnis Anda untuk Solusi yang Relevan
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Kami memahami alur bisnis spesifik tiap sektor, bukan software seragam yang dipaksakan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.slice(0, 4).map((ind) => (
            <div
              key={ind.id}
              onClick={() => {
                if (ind.id === 'contractor') onNavigate('product-contractor');
                else onNavigate('solutions');
              }}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-lg transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  {ind.id === 'contractor' && <HardHat className="w-5 h-5" />}
                  {ind.id === 'distributor' && <Truck className="w-5 h-5" />}
                  {ind.id === 'manufacturing' && <Factory className="w-5 h-5" />}
                  {ind.id === 'retail' && <Store className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition">{ind.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{ind.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {ind.subIndustries.slice(0, 2).map((sub, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>Lihat Alur & Studi Kasus</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        {/* 3 Remaining Niche/Regulated Industries */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {INDUSTRIES.slice(4, 7).map((ind) => (
            <div
              key={ind.id}
              onClick={() => onNavigate('solutions')}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition cursor-pointer flex items-center justify-between"
            >
              <div>
                <span className="font-bold text-slate-900 text-sm block">{ind.name}</span>
                <span className="text-xs text-slate-500 block">{ind.tagline}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MASALAH BISNIS -> HASIL TERUKUR */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Dari Masalah ke Hasil Nyata</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Hentikan Kebocoran Kas & Kehilangan Kontrol Operasional
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Empat tantangan utama yang paling sering dialami direksi perusahaan menengah di Indonesia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase">Tantangan #1: Stok Tidak Akurat</span>
                <span className="text-xs text-slate-400">Distribusi & Retail</span>
              </div>
              <h3 className="text-base font-bold text-white">Stok di sistem berbeda dengan di rak gudang fisik</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sales tetap menjual barang yang sebenarnya sudah habis, atau barang tertimbun hingga kedaluwarsa karena tidak ada sistem batch & FEFO.
              </p>
              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Hasil Terukur SISCOM: Akurasi stok naik hingga 99,4%</span>
                <button onClick={() => onNavigate('case-studies')} className="text-blue-400 hover:underline">
                  Studi Kasus &rarr;
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase">Tantangan #2: Laporan Keuangan Lambat</span>
                <span className="text-xs text-slate-400">Keuangan & Direksi</span>
              </div>
              <h3 className="text-base font-bold text-white">Laba rugi baru keluar tanggal 20-25 bulan berikutnya</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manajemen mengambil keputusan bisnis penting dalam kegelapan data keuangan karena staf sibuk rekap manual dari ratusan lembar nota.
              </p>
              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Hasil Terukur SISCOM: Tutup buku selesai dalam 2 hari kerja</span>
                <button onClick={() => onNavigate('case-studies')} className="text-blue-400 hover:underline">
                  Studi Kasus &rarr;
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase">Tantangan #3: Piutang Pelanggan Macet</span>
                <span className="text-xs text-slate-400">Cashflow & Penjualan</span>
              </div>
              <h3 className="text-base font-bold text-white">Sales terus buka order baru untuk customer yang menunggak</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tidak ada sistem auto-lock plafon kredit piutang. Uang perusahaan tersandera di pasar dan tagihan telat tertagih hingga macet permanen.
              </p>
              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Hasil Terukur SISCOM: Piutang overlimit turun 62%</span>
                <button onClick={() => onNavigate('case-studies')} className="text-blue-400 hover:underline">
                  Studi Kasus &rarr;
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase">Tantangan #4: Gagal Implementasi Software Lama</span>
                <span className="text-xs text-slate-400">Investasi IT</span>
              </div>
              <h3 className="text-base font-bold text-white">Beli software impor mahal tetapi staf menyerah karena tidak didampingi</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Software ditinggalkan menjadi beban biaya tahunan, staf kembali memakai spreadsheet Excel yang rapuh dan rawan manipulasi.
              </p>
              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Hasil Terukur SISCOM: Pendampingan langsung sampai BAST Go Live</span>
                <button onClick={() => onNavigate('comparison')} className="text-blue-400 hover:underline">
                  Bandingkan vs Odoo &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MODUL TERINTEGRASI (DIAGRAM INTERAKTIF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Satu Database Terpadu</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Ekosistem 8 Modul yang Saling Terhubung Tanpa Sekat
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Setiap transaksi di lapangan otomatis menjurnal ke buku besar akuntansi tanpa input ulang.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { title: 'Persediaan Stok', desc: 'Multi gudang, barcode, batch & expiry FEFO, mutasi antar cabang', icon: Layers },
            { title: 'Penjualan & Piutang', desc: 'Plafon kredit otomatis, canvas order, surat jalan, harga bertingkat', icon: TrendingUp },
            { title: 'Pembelian (Procurement)', desc: 'Purchase Request (PR), Purchase Order (PO), approval bertingkat', icon: FileText },
            { title: 'Akuntansi & Keuangan', desc: 'General ledger, neraca laba rugi, kas bank, e-Faktur pajak', icon: Calculator },
            { title: 'Kontraktor & Proyek', desc: 'Locking budget RAP, progress fisik opname, kurva S, subkon', icon: HardHat },
            { title: 'Manufaktur & Pabrik', desc: 'BOM multi level, SPK terjadwal, kalkulasi HPP aktual, scrap', icon: Factory },
            { title: 'HRIS & Payroll', desc: 'PPh 21 skema TER 2024, BPJS TK & KS, absensi mobile GPS, cuti', icon: Users },
            { title: 'Regulasi DJBC & BI', desc: 'IT Inventory Bea Cukai BC 2.3 & 4.0, software Valas resmi BI', icon: ShieldCheck },
          ].map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-md transition">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{mod.title}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: BUKTI KEPERCAYAAN & 6 STUDI KASUS TEASER */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Bukti Hasil Nyata</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Studi Kasus Terverifikasi Lintas 6 Sektor Industri
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                *Studi kasus disusun berdasarkan data performa nyata implementasi SISCOM di klien Indonesia.
              </p>
            </div>
            <button
              onClick={() => onNavigate('case-studies')}
              className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1 self-start"
            >
              Lihat Detail 6 Studi Kasus Lengkap <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((cs) => (
              <div key={cs.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-900">{cs.industry}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Terverifikasi</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{cs.companyName}</h3>
                  <p className="text-xs text-slate-500 mt-1">{cs.scale}</p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 block">Metrik Hasil Kunci:</span>
                    {cs.measurableResults.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{m.label}</span>
                        <strong className="text-emerald-700 font-bold">{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-slate-600 italic">
                    "{cs.testimonialQuote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-xs">
                  <p className="font-bold text-slate-800">{cs.clientPerson.name}</p>
                  <p className="text-[11px] text-slate-500">{cs.clientPerson.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CARA KERJA IMPLEMENTASI & ESTIMASI DURASI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Metodologi Teruji</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Tahapan Implementasi Sampai Serah Terima Go Live
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Bukan sekadar kirim link login. Konsultan SISCOM hadir langsung membimbing alur sampai staf Anda lancar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { step: '01', title: 'Kick Off & SOP', desc: 'Pemetaan proses bisnis riil, aturan approval, dan penetapan PIC proyek.' },
            { step: '02', title: 'Konfigurasi & Migrasi', desc: 'Import master data barang, customer, supplier, saldo awal & template form.' },
            { step: '03', title: 'Training Pengguna', desc: 'Pelatihan hands-on staf lapangan, gudang, kasir, dan akuntan kantor.' },
            { step: '04', title: 'Go Live (BAST)', desc: 'Sistem mulai beroperasi aktif untuk transaksi harian disupervisi konsultan.' },
            { step: '05', title: 'Hypercare & MSC', desc: 'Pendampingan intensif 30 hari + grup WA khusus 7 hari 08.30-22.00 WIB.' },
          ].map((st, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 relative">
              <span className="text-2xl font-black text-slate-200 block">{st.step}</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1">{st.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Estimation banner per business scale */}
        <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-800 shrink-0" />
            <div>
              <strong className="text-blue-950 font-bold block">Estimasi Waktu Go Live Rata-rata:</strong>
              <span className="text-blue-900">
                Retail/Toko: <strong>2 - 3 Minggu</strong> • Distributor/Kontraktor: <strong>4 - 6 Minggu</strong> • Pabrik Manufaktur: <strong>8 - 12 Minggu</strong>
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('pricing')}
            className="px-4 py-2 rounded-xl bg-blue-900 text-white font-bold text-xs shrink-0 hover:bg-blue-800 transition"
          >
            Hitung Estimasi Durasi Proyek Anda &rarr;
          </button>
        </div>
      </section>

      {/* SECTION 7: HARGA RINGKAS TEASER */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Transparansi Biaya</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Investasi Terukur Sesuai Kapasitas Bisnis
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Model lisensi dan langganan transparan. Dilengkapi kalkulator estimasi biaya mandays implementasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between ${
                  tier.isPopular ? 'bg-slate-800/90 border-blue-500 shadow-xl shadow-blue-950/50' : 'bg-slate-950/70 border-slate-800'
                }`}
              >
                <div>
                  {tier.isPopular && (
                    <span className="px-3 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                      Paling Banyak Dipilih
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{tier.targetSegment}</p>

                  <div className="my-5 pb-5 border-b border-slate-700/60">
                    <span className="text-2xl sm:text-3xl font-black text-white">{tier.priceMonthly}</span>
                    <span className="text-xs text-slate-400 block mt-1">{tier.idealFor}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {tier.features.slice(0, 5).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('pricing')}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      tier.isPopular ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LAYANAN SISCOM (MSC, ACCOUNTING SERVICE, IMPLEMENTASI, CLOUD) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Ekosistem Layanan</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Layanan Pendamping Berkelanjutan (MSC & Jasa Terkelola)
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Perjelas batas layanan: apa yang gratis pada masa Go Live dan apa yang dicakup dalam Maintenance Support Contract.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Maintenance Support (MSC)</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Dukungan grup WhatsApp 7 hari (08.30-22.00 WIB), update gratis regulasi pajak baru, dan penyesuaian format cetak bebas biaya.
            </p>
            <span className="mt-3 block text-[11px] font-semibold text-emerald-700">Untuk: Klien aktif pasca Go Live</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Custom Alur Implementasi</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Penyesuaian proses persetujuan (approval flow), logika kalkulasi komisi, dan integrasi API ke sistem pihak ketiga.
            </p>
            <span className="mt-3 block text-[11px] font-semibold text-blue-700">Untuk: Bisnis dengan alur unik</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Accounting Service</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Jasa supervisi tutup buku bulanan, audit saldo persediaan awal, dan review kepatuhan pajak oleh akuntan tersertifikasi.
            </p>
            <span className="mt-3 block text-[11px] font-semibold text-amber-700">Untuk: Tim finance yang butuh asistensi</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Private Cloud & On-Premise</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Infrastruktur server terisolasi di Data Center Tier 3 Indonesia, backup harian otomatis, dan opsi server on-premise gedung Anda.
            </p>
            <span className="mt-3 block text-[11px] font-semibold text-violet-700">Untuk: Perusahaan dengan regulasi ketat</span>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ (8-10 QUESTIONS WITH SCHEMA READY ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Pertanyaan yang Sering Diajukan</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            FAQ Seputar SISCOM ERP & Implementasi
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Jawaban transparan untuk membantu Anda mengevaluasi kesesuaian solusi kami.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-900"
                aria-expanded={openFaqIndex === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <div className="px-4.5 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: CLOSING CTA + QUICK FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                Konsultasi & Demonstrasi Gratis
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 tracking-tight">
                Siap Mengendalikan Operasional Bisnis Anda dengan Lebih Presisi?
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Diskusikan tantangan alur bisnis Anda bersama konsultan senior kami. Dapatkan analisis kesesuaian sistem dan simulasi demonstrasi 30 menit.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Respon cepat dalam &lt; 1 jam kerja oleh konsultan lokal berpengalaman.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tanpa kewajiban pembelian, demonstrasi disesuaikan dengan data contoh industri Anda.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kerahasiaan data dijamin dan dilindungi UU PDP No. 27/2022.</span>
                </div>
              </div>
            </div>

            {/* Quick 2-Field Lead Capture Box */}
            <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
              {quickLeadSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Permintaan Diterima!</h3>
                  <p className="text-xs text-slate-600">
                    Tim konsultan kami akan menghubungi WhatsApp <strong>{quickLead.phone}</strong> dalam &lt; 1 jam kerja.
                  </p>
                  <button
                    onClick={() => setQuickLeadSubmitted(false)}
                    className="text-xs text-blue-900 font-semibold underline mt-2 block mx-auto"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickLeadSubmit} className="space-y-3 text-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Konsultasi Cepat (1 Jam Respons)</h3>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={quickLead.name}
                      onChange={(e) => setQuickLead({ ...quickLead, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nomor WhatsApp Aktif</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812XXXXXXXX"
                      value={quickLead.phone}
                      onChange={(e) => setQuickLead({ ...quickLead, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Industri Perusahaan</label>
                    <select
                      value={quickLead.industry}
                      onChange={(e) => setQuickLead({ ...quickLead, industry: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                    >
                      <option value="Kontraktor & Konstruksi">Kontraktor & Konstruksi</option>
                      <option value="Distributor & FMCG">Distributor & FMCG</option>
                      <option value="Manufaktur & Pabrik">Manufaktur & Pabrik</option>
                      <option value="Retail & Toko Modern">Retail & Toko Modern</option>
                      <option value="Kawasan Berikat">Kawasan Berikat (DJBC)</option>
                      <option value="Valas / Money Changer">Valas / Money Changer (BI)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition flex items-center justify-center gap-1.5"
                  >
                    <span>Hubungi Saya via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">Bebas SPAM • Tim lokal Indonesia</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
