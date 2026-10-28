import React from 'react';
import { Server, Cloud, Shield, Check, HelpCircle } from 'lucide-react';

export function DeploymentComparison() {
  const comparisonRows = [
    {
      feature: 'Lokasi Fisik Server',
      cloud: 'Data Center Tier 3/4 di Jakarta, Indonesia',
      onPremise: 'Ruang Server Fisik di Kantor / Pabrik Perusahaan',
    },
    {
      feature: 'Kedaulatan Data (UU PDP No. 27/2022)',
      cloud: '100% di wilayah yurisdiksi Indonesia',
      onPremise: '100% di bawah kendali fisik internal perusahaan',
    },
    {
      feature: 'Akses Cabang & Tim Mobile',
      cloud: 'Langsung melalui koneksi internet terenkripsi (HTTPS/TLS)',
      onPremise: 'Memerlukan konfigurasi VPN / IP Publik Dedicated',
    },
    {
      feature: 'Kebutuhan Staf IT Server',
      cloud: 'Minimal (pemeliharaan infrastruktur dikelola data center)',
      onPremise: 'Wajib memiliki staf IT hardware dan jaringan internal',
    },
    {
      feature: 'Mekanisme Backup Data',
      cloud: 'Pencadangan otomatis berkala harian ke storage terpisah',
      onPremise: 'Dikelola mandiri oleh staf IT (NAS / tape drive eksternal)',
    },
    {
      feature: 'Model Investasi',
      cloud: 'Berlangganan tahunan (Opex) atau lisensi hybrid',
      onPremise: 'Investasi perangkat keras server + lisensi di muka (Capex)',
    },
    {
      feature: 'Kecocokan Karakter Bisnis',
      cloud: 'Perusahaan multi-cabang, distributor regional, ritel',
      onPremise: 'Pabrik di kawasan terpencil, regulasi audit perbankan/militer',
    },
  ];

  return (
    <section className="py-20 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B2447] dark:bg-amber-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Opsi Infrastruktur
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pilih skema deployment: Private Cloud atau On-Premise.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            SISCOM memberikan kebebasan penuh bagi direksi dan tim IT untuk menentukan arsitektur penyimpanan data sesuai tata kelola dan kepatuhan perusahaan.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900">
                  <th className="p-4 sm:p-5 font-semibold text-slate-700 dark:text-slate-300 w-1/3">
                    Aspek Evaluasi
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-[#0B2447] dark:text-amber-400 w-1/3 border-l border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4" />
                      Private Cloud Indonesia
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-700 dark:text-slate-200 w-1/3 border-l border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4" />
                      On-Premise (Server Lokal)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}
                  >
                    <td className="p-4 sm:p-5 font-medium text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-800">
                      {row.cloud}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-800">
                      {row.onPremise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>
              Catatan: Migrasi antar skema (misal: On-Premise ke Cloud atau sebaliknya) didukung penuh tanpa perubahan struktur data akuntansi.
            </span>
            <a
              href="/estimasi"
              className="font-semibold text-[#0B2447] dark:text-amber-400 hover:underline"
            >
              Hitung estimasi skema di sini &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
