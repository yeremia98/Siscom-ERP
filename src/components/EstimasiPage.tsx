import React, { useState } from 'react';
import { ArrowLeft, Calculator, Clock, CheckCircle2, Shield, Send } from 'lucide-react';
import { PRODUCT_SUITES } from '../content/products';
import { COMPANY_DATA } from '../content/company';

interface EstimasiPageProps {
  onNavigate: (route: string) => void;
}

export function EstimasiPage({ onNavigate }: EstimasiPageProps) {
  const [userCount, setUserCount] = useState<number>(10);
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'sis-construction-one',
    'sis-corehr',
  ]);
  const [deploymentModel, setDeploymentModel] = useState<'cloud' | 'onpremise'>('cloud');
  const [branchCount, setBranchCount] = useState<number>(1);

  const toggleModule = (slug: string) => {
    if (selectedModules.includes(slug)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== slug));
      }
    } else {
      setSelectedModules([...selectedModules, slug]);
    }
  };

  // Realistic implementation timeline estimation
  const calculateWeeks = () => {
    let baseWeeks = 4;
    baseWeeks += selectedModules.length * 0.75;
    if (userCount > 25) baseWeeks += 1.5;
    if (branchCount > 2) baseWeeks += 1.5;
    if (deploymentModel === 'onpremise') baseWeeks += 1;
    return Math.round(baseWeeks);
  };

  const estimatedWeeks = calculateWeeks();

  const handleConsultProposal = () => {
    const selectedNames = PRODUCT_SUITES.filter((p) => selectedModules.includes(p.slug))
      .map((p) => p.name)
      .join(', ');
    const text = `Halo Tim Sales SISCOM, saya telah melakukan kalkulasi estimasi di website.\n\n*Pengguna:* ${userCount} lisensi\n*Cabang:* ${branchCount} lokasi\n*Skema:* ${deploymentModel === 'cloud' ? 'Private Cloud Indonesia' : 'On-Premise Server Lokal'}\n*Modul Terpilih:* ${selectedNames}\n*Estimasi Durasi:* ${estimatedWeeks} minggu\n\nMohon informasi rincian proposal resmi.`;
    const url = `https://wa.me/62${COMPANY_DATA.whatsappPrimary.replace(/[-+ ]/g, '').replace(/^0/, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#0B2447] dark:text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Kalkulator Kebutuhan B2B
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Kalkulator estimasi implementasi dan lisensi ERP.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Simulasikan kebutuhan pengguna, cakupan cabang, dan modul untuk mendapatkan gambaran waktu implementasi serta rincian lingkup kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Controls (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* User count slider */}
            <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-900 dark:text-white">
                  Jumlah Pengguna Aktif (Concurrent Users)
                </label>
                <span className="text-base font-mono font-bold text-[#0B2447] dark:text-amber-400 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  {userCount} Pengguna
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={100}
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full accent-[#0B2447] dark:accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>3 (Tim Inti)</span>
                <span>25 (Perusahaan Menengah)</span>
                <span>50</span>
                <span>100+ (Korporat Multi-Entitas)</span>
              </div>
            </div>

            {/* Modules Checkbox selection */}
            <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900 dark:text-white">
                  Pilih Modul Industri yang Diterapkan
                </label>
                <span className="text-xs font-mono text-slate-400">
                  {selectedModules.length} modul terpilih
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_SUITES.map((prod) => {
                  const isSelected = selectedModules.includes(prod.slug);
                  return (
                    <div
                      key={prod.slug}
                      onClick={() => toggleModule(prod.slug)}
                      className={`p-3.5 rounded-lg border text-xs cursor-pointer transition-colors flex items-start gap-3 ${
                        isSelected
                          ? 'bg-slate-50 dark:bg-slate-800/80 border-[#0B2447] dark:border-amber-400'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        className="mt-0.5 rounded text-[#0B2447]"
                      />
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">
                          {prod.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block">{prod.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Deployment & Branch Settings */}
            <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  Model Infrastruktur Server
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeploymentModel('cloud')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                      deploymentModel === 'cloud'
                        ? 'bg-[#0B2447] text-white dark:bg-amber-400 dark:text-slate-950 border-transparent'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    Private Cloud
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeploymentModel('onpremise')}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                      deploymentModel === 'onpremise'
                        ? 'bg-[#0B2447] text-white dark:bg-amber-400 dark:text-slate-950 border-transparent'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    On-Premise
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                  Jumlah Lokasi Gudang / Cabang
                </label>
                <select
                  value={branchCount}
                  onChange={(e) => setBranchCount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                >
                  <option value={1}>1 Lokasi Sentral (Kantor / Gudang Tunggal)</option>
                  <option value={2}>2 – 4 Lokasi Cabang Regional</option>
                  <option value={5}>5 – 10 Lokasi Gudang Tersebar</option>
                  <option value={15}>&gt; 10 Lokasi (Jaringan Luas)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Output Summary Card (1 col sticky) */}
          <div className="bg-white dark:bg-[#111D38] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 lg:sticky lg:top-24">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Ringkasan Lingkup Kerja
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Estimasi Jadwal Penerapan
              </h3>
            </div>

            {/* Estimated Duration Badge */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#0B2447] dark:text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Estimasi Durasi UAT:</span>
                <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">
                  {estimatedWeeks} Minggu
                </span>
              </div>
            </div>

            {/* Scope Items */}
            <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-4">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                Cakupan Pendampingan Termasuk:
              </span>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Asesmen alur persetujuan & SOP</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Migrasi master data dari spreadsheet</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pelatihan staf operasional di kantor/online</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Standby pendampingan saat go-live</span>
              </div>
            </div>

            {/* Proposal CTA */}
            <div className="pt-2">
              <button
                onClick={handleConsultProposal}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Dapatkan Rincian Proposal Resmi
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Proposal formal memuat breakdown lisensi dan SLA resmi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
