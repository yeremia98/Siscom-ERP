import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Headphones, Database, Users, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '../content/company';

interface LayananPageProps {
  onNavigate: (route: string) => void;
}

export function LayananPage({ onNavigate }: LayananPageProps) {
  const services = [
    {
      title: 'Pendampingan Implementasi & Blueprint',
      icon: Users,
      description: 'Konsultan teknis kami memetakan Standard Operating Procedure (SOP) perusahaan Anda ke dalam arsitektur modul SISCOM. Meliputi konfigurasi Bagan Akun (COA), matriks persetujuan berjenjang, dan rancangan form operasional.',
    },
    {
      title: 'Migrasi & Pembersihan Master Data',
      icon: Database,
      description: 'Layanan terstruktur untuk memindahkan data saldo awal buku besar, piutang per outlet, utang rekanan supplier, dan kartu persediaan multi-satuan dari pembukuan spreadsheet Excel atau sistem warisan sebelumnya.',
    },
    {
      title: 'Pelatihan Staf Operasional & UAT',
      icon: CheckCircle2,
      description: 'Sesi pelatihan terarah untuk pengguna harian per departemen (admin gudang, staf purchasing, akuntan proyek, kasir toko). Dilengkapi modul uji coba User Acceptance Testing (UAT) sebelum go-live cut-off.',
    },
    {
      title: 'Dukungan Teknis & Pembaruan Regulasi',
      icon: Headphones,
      description: 'Dukungan responsif langsung dari tim spesialis software di kantor pusat Jakarta Barat via WhatsApp hotline, telepon kantor, dan remote desktop. Memastikan sistem selalu patuh pada aturan pajak DJP dan Bea Cukai terkini.',
    },
  ];

  return (
    <div className="py-12 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-screen transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#0B2447] dark:text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Layanan Profesional
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pendampingan implementasi langsung dari pengembang lokal.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Keberhasilan software ERP ditentukan oleh kualitas adopsi pengguna dan penataan data. PT Shan Informasi Sistem mendampingi Anda di setiap tahap migrasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#0B2447] dark:text-amber-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {svc.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SLA Information Box */}
        <div className="mt-10 p-6 sm:p-8 bg-slate-100/70 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Komitmen Waktu Tanggap & Jalur Bantuan Resmi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono">Tiket Kritis Operasional:</span>
              <span className="text-base font-mono font-bold text-slate-900 dark:text-white block">
                &lt; 2 Jam Kerja
              </span>
              <span className="text-slate-500">Gangguan transaksi kasir atau sistem buku besar.</span>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono">Konsultasi Fitur & Form:</span>
              <span className="text-base font-mono font-bold text-slate-900 dark:text-white block">
                Hari Kerja 08:30 - 17:30 WIB
              </span>
              <span className="text-slate-500">Panduan konfigurasi dan tutorial pengguna.</span>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 block font-mono">Pembaruan Regulasi Pajak:</span>
              <span className="text-base font-mono font-bold text-slate-900 dark:text-white block">
                Terjadwal Rutin
              </span>
              <span className="text-slate-500">Pembaruan formula PPh dan patch e-Faktur resmi.</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between p-6 bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Ingin mendiskusikan rencana migrasi data perusahaan Anda?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Konsultan kami siap melakukan audit awal format spreadsheet dan database lama Anda.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/demo')}
            className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#0B2447] text-white hover:bg-[#071930] dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 transition-colors shrink-0"
          >
            Jadwalkan demo
          </button>
        </div>
      </div>
    </div>
  );
}
