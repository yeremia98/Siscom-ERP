import React, { useState } from 'react';
import { ViewType } from '../types';
import { CASE_STUDIES } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  BarChart3, 
  FileSpreadsheet, 
  Layers, 
  Lock, 
  TrendingUp, 
  Building2, 
  Calendar, 
  Users, 
  Check, 
  ChevronDown, 
  ChevronRight,
  Phone,
  FileCheck2,
  DollarSign
} from 'lucide-react';

interface ProductContractorViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const ProductContractorView: React.FC<ProductContractorViewProps> = ({
  onNavigate,
  onOpenDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'budget' | 'kurvaS' | 'opname' | 'purchasing'>('budget');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contractorCase = CASE_STUDIES.find(cs => cs.id === 'cs-contractor')!;

  const handleDemoClick = () => {
    analytics.track('cta_click', { cta_label: 'Jadwalkan Demo ERP Kontraktor', location: 'contractor_page' });
    onOpenDemo('SIS Construction One (ERP Kontraktor)');
  };

  const contractorFaqs = [
    {
      q: 'Bagaimana SIS Construction One menghentikan kebocoran pembelian material di lapangan?',
      a: 'Sistem menerapkan RAP Budget Locking. Setiap Purchase Request (PR) yang diajukan oleh Site Manager atau tim logistik lapangan langsung divalidasi terhadap kuota item dalam Rencana Anggaran Pelaksanaan (RAP). Jika volume atau harga melebihi sisa plafon anggaran yang disetujui, Purchase Order (PO) otomatis terkunci dan tidak dapat diterbitkan tanpa persetujuan khusus (override approval) dari Direktur Operasional atau Project Manager.',
    },
    {
      q: 'Apakah Kurva S harus diisi manual atau terbentuk otomatis?',
      a: 'Kurva S terbentuk secara otomatis dan real-time. Garis rencana diambil dari timeline schedule WBS (Work Breakdown Structure) dan bobot biaya RAP yang diinput di awal. Garis realisasi bergerak secara otomatis dari transaksi harian: pengeluaran biaya aktual (cost curve) dan verifikasi progres opname fisik mingguan yang disetujui di lapangan.',
    },
    {
      q: 'Bagaimana penanganan retensi dan pajak final jasa konstruksi (PPh Final Pasal 4 Ayat 2)?',
      a: 'Modul Akuntansi Proyek SISCOM secara otomatis memisahkan tagihan termin kotor, potongan retensi (misalnya 5% yang ditahan sampai masa pemeliharaan selesai), dan perhitungan pemotongan PPh Final Pasal 4 Ayat 2 (1,75%, 2,65%, atau 4% sesuai kualifikasi LPJK/Kadin Anda). Hal ini menghilangkan selisih rekonsiliasi antara faktur pajak dan arus kas masuk.',
    },
    {
      q: 'Bagaimana jika lokasi proyek berada di area terpencil dengan sinyal internet minim?',
      a: 'SIS Construction One mendukung hybrid mode. Staf lapangan dapat mencatat penerimaan surat jalan material dan checklist opname fisik secara offline pada aplikasi mobile/tablet. Data akan tersimpan di memori lokal terenkripsi dan otomatis tersinkronisasi ke server pusat kantor saat perangkat terhubung kembali ke jaringan internet.',
    },
    {
      q: 'Berapa lama waktu yang dibutuhkan untuk migrasi master RAP proyek dari file Excel?',
      a: 'Sangat cepat. Kami menyediakan template import Excel berformat standar RAB/RAP. Konsultan SISCOM akan mendampingi tim estimator dan engineering Anda untuk memetakan WBS, satuan volume, dan analisa harga satuan (AHS) ke dalam sistem hanya dalam hitungan hari.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <button onClick={() => onNavigate('solutions')} className="hover:text-blue-900">Produk Operasional</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">SIS Construction One (ERP Kontraktor)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 mb-4">
              <HardHat className="w-4 h-4 text-amber-700" />
              <span>Solusi Khusus Kontraktor Sipil, MEP, & Interior</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Kendalikan Selisih Biaya RAB dan RAP Sebelum Kas Proyek Bocor
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Software ERP kontraktor terintegrasi: kunci anggaran pengadaan material, pantau kurva S real-time, verifikasi opname subkontraktor, dan otomatisasi laba rugi per proyek hingga BAST selesai.
            </p>

            <div className="mt-6 space-y-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Locking Budget RAP: PO material auto-block jika melebihi kuota RAP proyek.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kurva S Otomatis: Sinkronisasi progres fisik lapangan berbanding realisasi biaya.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>PPh Final 4(2) & Retensi: 100% kepatuhan pajak jasa konstruksi Indonesia.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleDemoClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-xl shadow-orange-600/25 transition flex items-center justify-center gap-2"
              >
                <span>Jadwalkan Demo ERP Kontraktor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition"
              >
                Kalkulator Biaya Proyek
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview: Proyek Monitor */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="font-bold">Project Command Center</span>
              </div>
              <span className="font-mono text-slate-400">#PRJ-TWR-04</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Nilai RAB Klien</span>
                <span className="text-base font-bold text-white">Rp 28.500.000.000</span>
                <span className="text-[10px] text-blue-400 block">Margin Target: 18,2%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Realisasi Biaya RAP</span>
                <span className="text-base font-bold text-emerald-400">Rp 17.890.000.000</span>
                <span className="text-[10px] text-emerald-400 block">Sisa Kuota: 23,8%</span>
              </div>
            </div>

            {/* Micro visual: Kurva S Preview */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="flex items-center justify-between mb-2 text-[11px]">
                <span className="font-semibold text-slate-300">Kurva S: Progres Rencana vs Aktual</span>
                <span className="text-emerald-400 font-mono">+1,2% Ahead of Schedule</span>
              </div>
              <div className="h-20 w-full flex items-end gap-1.5 pt-2">
                {[20, 28, 42, 54, 65, 78, 85, 92].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-blue-900/60 rounded-t h-full flex items-end">
                      <div className="w-full bg-emerald-500 rounded-t transition-all" style={{ height: `${val}%` }}></div>
                    </div>
                    <span className="text-[9px] text-slate-500">M{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 flex items-start gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Sistem Proteksi Aktif:</strong> Purchase Request Semen PC 50kg melebihi volume RAP Pekerjaan Lantai 5. PO ditahan menunggu otorisasi Direktur.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 MODUL UTAMA KONTRAKTOR */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Arsitektur Fungsional</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              5 Pilar Pengendalian Proyek Kontraktor Terpadu
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Setiap modul saling terhubung langsung ke buku besar akuntansi dan rekening kas bank kantor pusat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">RAB & RAP Budget Locking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Import RAB dari Excel dan buat turunan RAP operasional dengan analisa harga satuan (AHS). Sistem mengunci batas pembelian sehingga pembelian di site tidak bisa melampaui RAP tanpa persetujuan bertingkat.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-1">
                <li>• Breakdown per WBS & sub-pekerjaan</li>
                <li>• Notifikasi saat pengadaan mendekati 90% RAP</li>
                <li>• Riwayat Addendum RAB & Perubahan Desain (VO)</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Opname Fisik Lapangan Mobile</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verifikasi progres fisik riil pekerjaan subkontraktor dan mandor via aplikasi lapangan. Tagihan subkontraktor hanya bisa dicairkan setelah progres fisik disetujui oleh Site Manager.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-1">
                <li>• Foto bukti fisik geotagging lokasi</li>
                <li>• Validasi kumulatif progres fisik vs keuangan</li>
                <li>• Berita Acara Opname otomatis terbit</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Pengadaan & Logistik Proyek</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alur pengadaan disiplin: Purchase Request dari proyek &rarr; Approval PM &rarr; Purchase Order ke Supplier &rarr; Surat Jalan Masuk Gudang Proyek &rarr; Invoice matching otomatis 3 arah.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-1">
                <li>• Alokasi material spesifik per kode proyek</li>
                <li>• Transfer sisa material antar lokasi proyek</li>
                <li>• Pemantauan sewa alat berat & konsumsi BBM</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base">Kurva S Otomatis & Cashflow</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hilangkan pembuatan Kurva S manual di Excel yang memakan waktu dan rentan manipulasi data. Sistem menghasilkan Kurva S otomatis yang membandingkan rencana waktu vs realisasi biaya.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-1">
                <li>• Deteksi deviasi keterlambatan proyek sejak dini</li>
                <li>• Simulasi arus kas masuk termin vs keluar</li>
                <li>• Laporan mingguan/bulanan siap cetak untuk Owner</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="font-bold text-slate-900 text-base">Akuntansi Finansial Proyek</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laporan laba rugi spesifik per proyek secara komparatif. Pisahkan pendapatan termin, piutang retensi, biaya material, upah borongan, dan pemotongan PPh Final Pasal 4 Ayat 2 secara otomatis.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-1">
                <li>• Laba rugi kotor & bersih per masing-masing proyek</li>
                <li>• Manajemen retensi hingga masa FHO selesai</li>
                <li>• Jurnal otomatis saat penerimaan material di proyek</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Spesifikasi Deployment</span>
                <h3 className="font-bold text-white text-base mt-1">Multi-Proyek & Hak Akses Ketat</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Batasi akses tim: Site Manager hanya melihat proyeknya sendiri, Estimator melihat RAP, dan Finance Pusat memegang kontrol pembayaran kas bank.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-800/80">
                <button
                  onClick={handleDemoClick}
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <span>Coba Demo Interaktif</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDI KASUS KONTRAKTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Studi Kasus Pembuktian</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                {contractorCase.companyName}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{contractorCase.scale}</p>

              <div className="mt-4 space-y-3 text-xs text-slate-600 leading-relaxed">
                <p><strong className="text-slate-800">Tantangan:</strong> {contractorCase.challenge}</p>
                <p><strong className="text-slate-800">Solusi Modul:</strong> Menggunakan {contractorCase.solutionModules.join(', ')}.</p>
              </div>

              <blockquote className="mt-4 p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 text-xs italic text-slate-700">
                "{contractorCase.testimonialQuote}"
              </blockquote>

              <div className="mt-3 text-xs">
                <p className="font-bold text-slate-900">{contractorCase.clientPerson.name}</p>
                <p className="text-slate-500 text-[11px]">{contractorCase.clientPerson.role}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contractorCase.measurableResults.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-center">
                  <span className="text-xs text-slate-600 block">{m.label}</span>
                  <span className="text-2xl font-black text-blue-900 block my-1">{m.value}</span>
                  <div className="text-[10px] text-slate-500 space-y-0.5">
                    <span className="block line-through text-rose-500">Sebelum: {m.before}</span>
                    <span className="block text-emerald-700 font-bold">Sesudah: {m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ KONTRAKTOR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Tanya Jawab Teknis</span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
            FAQ Seputar SIS Construction One
          </h2>
        </div>

        <div className="space-y-3">
          {contractorFaqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-900"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4.5 pb-4.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL DEMO CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Ingin Mengontrol RAP dan Kurva S di Proyek Anda?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Lihat bagaimana SIS Construction One menyelaraskan site lapangan dengan kantor pusat. Sesi demo 30 menit gratis bersama konsultan spesialis konstruksi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleDemoClick}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition flex items-center gap-2"
            >
              <span>Jadwalkan Demo Proyek 30 Menit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              Lihat Paket Harga
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
