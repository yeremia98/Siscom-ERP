import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, AlertTriangle, Building, Phone, Mail, CheckCircle2, XCircle, Search } from 'lucide-react';
import { COMPANY_DATA } from '../content/company';

interface VerifikasiPageProps {
  onNavigate: (route: string) => void;
}

export function VerifikasiPage({ onNavigate }: VerifikasiPageProps) {
  const [verificationInput, setVerificationInput] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    tested: boolean;
    isOfficial: boolean;
    matchedEntity?: string;
  }>({ tested: false, isOfficial: false });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = verificationInput.trim().toLowerCase().replace(/[-+ .]/g, '');

    // Check bank accounts
    const matchedBank = COMPANY_DATA.bankAccounts.find((b) =>
      b.accountNumber.replace(/[-+ .]/g, '').includes(clean)
    );

    // Check phones / WA
    const isWaSales = clean.includes('081299817515') || clean.includes('6281299817515');
    const isWaSupport = clean.includes('081381333515') || clean.includes('6281381333515');
    const isLandline = clean.includes('56945002') || clean.includes('56945003');

    // Check emails
    const isEmail = clean.includes('siscom.co.id');

    if (matchedBank) {
      setVerificationResult({
        tested: true,
        isOfficial: true,
        matchedEntity: `Rekening Resmi Terverifikasi: ${matchedBank.bank} (${matchedBank.accountHolder})`,
      });
    } else if (isWaSales) {
      setVerificationResult({
        tested: true,
        isOfficial: true,
        matchedEntity: 'Nomor WhatsApp Resmi Penjualan & Konsultasi SISCOM (0812-9981-7515)',
      });
    } else if (isWaSupport) {
      setVerificationResult({
        tested: true,
        isOfficial: true,
        matchedEntity: 'Nomor WhatsApp Resmi Layanan Bantuan Teknis SISCOM (0813-8133-3515)',
      });
    } else if (isLandline) {
      setVerificationResult({
        tested: true,
        isOfficial: true,
        matchedEntity: 'Nomor Telepon Kantor Pusat Cengkareng PT Shan Informasi Sistem',
      });
    } else if (isEmail) {
      setVerificationResult({
        tested: true,
        isOfficial: true,
        matchedEntity: 'Alamat Email Domain Resmi PT Shan Informasi Sistem (@siscom.co.id)',
      });
    } else {
      setVerificationResult({
        tested: true,
        isOfficial: false,
      });
    }
  };

  return (
    <div className="py-12 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-screen transition-colors">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Kanal Resmi & Anti-Penipuan
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Verifikasi rekening bank dan kontak resmi PT Shan Informasi Sistem.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Untuk melindungi keamanan transaksi calon pelanggan dan klien aktif, halaman ini mencatat seluruh data perbankan dan kanal komunikasi resmi berbadan hukum.
          </p>
        </div>

        {/* Live Verification Search Input */}
        <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-10">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
            Cek Validitas Nomor Rekening / Kontak
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Masukkan nomor rekening, nomor WhatsApp, atau nomor telepon untuk memeriksa apakah kanal tersebut terdaftar resmi di PT Shan Informasi Sistem.
          </p>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={verificationInput}
                onChange={(e) => setVerificationInput(e.target.value)}
                placeholder="Contoh: 0812-9981-7515 atau nomor rekening bank"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors"
            >
              Periksa Sekarang
            </button>
          </form>

          {verificationResult.tested && (
            <div
              className={`mt-4 p-4 rounded-lg border text-xs flex items-start gap-3 ${
                verificationResult.isOfficial
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}
            >
              {verificationResult.isOfficial ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="font-bold block text-sm">
                  {verificationResult.isOfficial
                    ? 'Kanal Terverifikasi Resmi'
                    : 'Peringatan: Tidak Terdaftar di Data Resmi Kami'}
                </span>
                <span className="block mt-0.5">
                  {verificationResult.isOfficial
                    ? verificationResult.matchedEntity
                    : 'Nomor atau rekening yang Anda masukkan tidak terdaftar sebagai kanal resmi PT Shan Informasi Sistem. Jangan lakukan transfer dana dan segera laporkan ke kantor pusat kami.'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Official Master Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Official Bank Accounts */}
          <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#0B2447] dark:text-amber-400" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Rekening Bank Resmi Perusahaan
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Seluruh transaksi pembayaran proyek, lisensi, dan pemeliharaan hanya sah bila ditujukan ke rekening atas nama berbadan hukum:
            </p>

            <div className="space-y-3 font-mono text-xs">
              {COMPANY_DATA.bankAccounts.map((acc) => (
                <div
                  key={acc.accountNumber}
                  className="p-3.5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1"
                >
                  <div className="text-slate-500 font-sans">{acc.bank}</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white tracking-wide">
                    {acc.accountNumber}
                  </div>
                  <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-sans font-semibold">
                    A/N: {acc.accountHolder}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Communications */}
          <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0B2447] dark:text-amber-400" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Kontak & Komunikasi Terverifikasi
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Konsultan dan staf representatif kami hanya berkomunikasi melalui saluran resmi berikut:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block">
                  Telepon Kantor Pusat (Hunting):
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-300">
                  {COMPANY_DATA.phones.join(' / ')}
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block">
                  WhatsApp Konsultasi & Penjualan:
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-300">
                  {COMPANY_DATA.whatsappPrimary}
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block">
                  WhatsApp Dukungan Teknis Klien:
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-300">
                  {COMPANY_DATA.whatsappSupport}
                </span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block">
                  Domain Website & Email Resmi:
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-300">
                  {COMPANY_DATA.officialDomains.join(' | ')} (Email: @siscom.co.id)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Callout Box */}
        <div className="mt-8 p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
          <span className="font-bold block text-sm">Pemberitahuan Khusus:</span>
          <p className="leading-relaxed">
            PT Shan Informasi Sistem tidak pernah mengarahkan pembayaran ke rekening tabungan pribadi atau atas nama perseorangan. Apabila Anda menerima instruksi rekening selain yang tercantum di halaman ini, segera konfirmasikan ke kantor pusat kami di nomor telepon <strong>+62 21 5694 5002</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
