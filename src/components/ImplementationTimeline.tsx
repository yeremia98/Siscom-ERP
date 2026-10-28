import React from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

export function ImplementationTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Asesmen Alur Bisnis & Pemetaan Dokumen',
      duration: 'Minggu 1 – 2',
      activities: [
        'Wawancara alur operasional per divisi (pembelian, gudang, proyek/pabrik, keuangan)',
        'Identifikasi format dokumen yang digunakan (PO, Surat Jalan, BAP, SPK, Faktur)',
        'Penetapan matriks wewenang persetujuan (approval matrix) bertingkat',
      ],
    },
    {
      step: '02',
      title: 'Konfigurasi Sistem & Blueprint Prosedur',
      duration: 'Minggu 3 – 4',
      activities: [
        'Penyusunan Bagan Akun Standar (Chart of Accounts / COA) dan kode proyek',
        'Konfigurasi formula perpajakan (PPh 21 TER, e-Faktur PPN, PPh Final Konstruksi)',
        'Penyesuaian template cetakan form operasional sesuai identitas korporat',
      ],
    },
    {
      step: '03',
      title: 'Migrasi & Pembersihan Data Master',
      duration: 'Minggu 5',
      activities: [
        'Impor saldo awal buku besar, piutang, dan utang usaha dari spreadsheet/sistem lama',
        'Validasi data persediaan fisik, nomor part, dan multi-satuan barang',
        'Uji coba rekonsiliasi data pada basis data sandbox (lingkungan uji)',
      ],
    },
    {
      step: '04',
      title: 'Pelatihan Pengguna & User Acceptance Testing (UAT)',
      duration: 'Minggu 6 – 7',
      activities: [
        'Pelatihan intensif staf operasional per departemen dengan skenario transaksi nyata',
        'Simulasi transaksi akhir bulan, tutup kasir harian, dan pencetakan faktur pajak',
        'Penandatanganan Berita Acara UAT sebagai syarat kesiapan go-live',
      ],
    },
    {
      step: '05',
      title: 'Go-Live Cut-Off & Pendampingan Paralel',
      duration: 'Minggu 8',
      activities: [
        'Penarikan saldo cut-off final dan pembekuan sistem lama',
        'Konsultan teknis SISCOM standby di kantor pelanggan untuk mendampingi transaksi live awal',
        'Verifikasi posting perdana jurnal ke buku besar akuntansi',
      ],
    },
    {
      step: '06',
      title: 'Evaluasi Pasca-Implementasi & Dukungan Berkelanjutan',
      duration: 'Bulan ke-3 dst.',
      activities: [
        'Audit laporan laba rugi dan neraca saldo penutupan bulan pertama',
        'Pemberian akses ke portal tiket bantuan resmi SISCOM',
        'Pembaruan berkala regulasi perpajakan atau format pelaporan kepabeanan',
      ],
    },
  ];

  return (
    <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Metodologi Penerapan
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tahapan implementasi terukur tanpa klaim instan tanpa dasar.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Penerapan ERP enterprise memerlukan disiplin penataan data dan pelatihan staf. Kami menerapkan metodologi 6 tahap dengan durasi realistis 6 hingga 8 minggu.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((st) => (
            <div
              key={st.step}
              className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-[#0B2447] dark:text-amber-400">
                    {st.step}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Clock className="w-3 h-3" />
                    {st.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {st.title}
                </h3>

                <ul className="space-y-2 pt-1">
                  {st.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-400">
                Didampingi konsultan teknis langsung
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
