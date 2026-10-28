import React, { useState } from 'react';
import { ArrowRight, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

interface SegmentSelectorProps {
  onNavigate: (route: string) => void;
}

export function SegmentSelector({ onNavigate }: SegmentSelectorProps) {
  const [selectedSegment, setSelectedSegment] = useState<number>(0);

  const segments = [
    {
      title: 'Kontraktor & Konstruksi',
      accentColor: '#E8792B',
      slug: 'sis-construction-one',
      problemTitle: 'Pembengkakan Anggaran Proyek & Selisih Opname Lapangan',
      problemDesc:
        'Purchase order material diterbitkan melampaui RAB tender. Klaim progres fisik subkontraktor tidak cocok dengan realisasi di lapangan sehingga tagihan membengkak saat proyek berjalan.',
      solutionTitle: 'Penguncian Pagu RAP & Kurva S Otomatis',
      solutionDesc:
        'Sistem otomatis menolak PO jika volume melebihi pagu RAP yang disetujui. Progress fisik diikat dengan Berita Acara Opname fisik dan penagihan termin owner dipotong retensi 5%.',
      keyDocuments: ['RAP Kerja', 'Kurva S', 'BAP Opname Fisik', 'Laba Rugi SPK'],
    },
    {
      title: 'Distributor & Grosir',
      accentColor: '#C62828',
      slug: 'sis-distribution-suite',
      problemTitle: 'Piutang Macet Outlet & Selisih Stok Antar-Gudang',
      problemDesc:
        'Salesman tetap membuat order untuk outlet yang sudah jatuh tempo 60 hari. Barang keluar dari gudang pusat tidak tercatat di gudang cabang transit sehingga fisik hilang.',
      solutionTitle: 'Penguncian Plafon Kredit & Pelacakan Batch FEFO',
      solutionDesc:
        'Sistem mengunci penerbitan Surat Perintah Muat (SPM) untuk toko yang melewati plafon kredit atau batas hari jatuh tempo. Mutasi antar-gudang diverifikasi secara serial.',
      keyDocuments: ['Limit Kredit AR', 'Surat Perintah Muat', 'Kartu FEFO', 'e-Faktur PPN'],
    },
    {
      title: 'Pabrik & Manufaktur',
      accentColor: '#E3B617',
      slug: 'sis-manufacturing-suite',
      problemTitle: 'HPP Tidak Akurat & Scrap Tersembunyi di Lantai Pabrik',
      problemDesc:
        'Harga pokok dihitung dari estimasi awal, bukan realisasi bahan baku aktual dan jam mesin pabrik. Sisa bahan produksi (scrap) tidak tercatat sehingga merugikan margin laba.',
      solutionTitle: 'Bill of Materials Bertingkat & Jurnal HPP Aktual',
      solutionDesc:
        'Struktur BOM mengikat bahan baku, bahan pembantu, dan jam mesin. Sistem menghitung HPP aktual per batch Surat Perintah Kerja (SPK) serta memisahkan alokasi scrap.',
      keyDocuments: ['BOM Multi-Level', 'Surat Perintah Kerja', 'Kartu WIP', 'Jurnal HPP'],
    },
    {
      title: 'Kawasan Berikat & Bea Cukai',
      accentColor: '#4B2FBF',
      slug: 'sis-pusatberikat',
      problemTitle: 'Risiko Teguran Pabean & Selisih Laporan Saldo IT Inventory',
      problemDesc:
        'Pencatatan persediaan bahan baku impor berbeda dengan dokumen BC 2.3. Rekonsiliasi manual berhari-hari menjelang audit tim pemeriksa Bea Cukai.',
      solutionTitle: 'IT Inventory Bea Cukai Standar PER-02/BC/2019',
      solutionDesc:
        'Tujuh format laporan mutasi barang pabean dihasilkan otomatis dengan jejak audit mutlak tanpa manipulasi saldo. Petugas Bea Cukai dapat memeriksa secara langsung.',
      keyDocuments: ['Dokumen BC 2.3 / 2.5', 'Mutasi Bahan Baku', 'Mutasi Mesin', 'Audit Trail'],
    },
    {
      title: 'Valuta Asing & Money Changer',
      accentColor: '#1B7F4B',
      slug: 'sis-forexsuite',
      problemTitle: 'Ketidaksesuaian Fisik Brankas Valas & Regulasi APU PPT',
      problemDesc:
        'Pecahan uang kertas asing tidak terdata rapi per kasir. Pelaporan transaksi penukaran bernilai besar rawan sanksi dari Bank Indonesia dan PPATK.',
      solutionTitle: 'Pencatatan Denominasi Brankas & Laporan KUPVA Bank Indonesia',
      solutionDesc:
        'Penetapan kurs beli-jual bertingkat, opname brankas per lembar mata uang, pencatatan data nasabah KYC, dan ekspor laporan periodik siap unggah ke portal moneter.',
      keyDocuments: ['Nota Valas', 'KYC Nasabah', 'Laporan KUPVA BI', 'Opname Brankas'],
    },
    {
      title: 'Retail & Multi-Cabang',
      accentColor: '#0E7C93',
      slug: 'sis-smartpos',
      problemTitle: 'Kasir Macet Saat Internet Padam & Selisih Satuan Toko',
      problemDesc:
        'Aplikasi POS berbasis cloud murni mati total saat sinyal operator terputus di mal. Penjualan barang dalam satuan pcs dan dus membingungkan kartu persediaan toko.',
      solutionTitle: 'Sistem Kasir Offline-First & Multi-Satuan Bertingkat',
      solutionDesc:
        'Kasir terus mencetak struk transaksi tanpa koneksi internet. Saat jaringan pulih, data sinkron ke kantor pusat. Konversi pcs, lusin, dan karton terintegrasi otomatis.',
      keyDocuments: ['Struk Kasir Offline', 'Z-Report Harian', 'Multi-Satuan', 'Promo Terpusat'],
    },
  ];

  const current = segments[selectedSegment];

  return (
    <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-10 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Analisis Sektoral
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pilih sektor bisnis Anda untuk melihat penyelesaian masalah operasional.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Bandingkan titik kritis operasional di industri Anda dengan kapabilitas kontrol sistem ERP SISCOM.
          </p>
        </div>

        {/* 6 Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {segments.map((seg, idx) => (
            <button
              key={seg.title}
              onClick={() => setSelectedSegment(idx)}
              className={`p-3 rounded-lg text-left text-xs font-medium border transition-all ${
                selectedSegment === idx
                  ? 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600 shadow-xs font-bold text-slate-900 dark:text-white'
                  : 'bg-slate-100/70 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900'
              }`}
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-2"
                style={{ backgroundColor: seg.accentColor }}
              />
              <span className="block">{seg.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Problem */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-semibold text-xs uppercase tracking-wide">
              <AlertCircle className="w-4 h-4" />
              Titik Kritis di Lapangan Tanpa ERP Terintegrasi
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {current.problemTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {current.problemDesc}
            </p>

            <div className="p-3.5 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-800 dark:text-rose-300">
              <span className="font-semibold block mb-0.5">Dampak Finansial:</span>
              Margin laba terkikis oleh pengeluaran tak terkontrol dan pembukuan manual yang terlambat ditutup di akhir bulan.
            </div>
          </div>

          {/* Right Column: SISCOM Solution */}
          <div className="space-y-4 md:border-l md:border-slate-200 dark:md:border-slate-800 md:pl-8">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4" />
              Alur Kontrol SISCOM ERP
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {current.solutionTitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {current.solutionDesc}
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-slate-400 block uppercase">
                Dokumen & Output Terstandar:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.keyDocuments.map((doc) => (
                  <span
                    key={doc}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={`/produk/${current.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/produk/${current.slug}`);
                }}
                className="text-xs font-semibold text-[#0B2447] dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                Pelajari rincian alur modul {current.title}
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/demo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/demo');
                }}
                className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Jadwalkan demo &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
