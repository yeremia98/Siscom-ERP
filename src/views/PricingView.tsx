import React, { useState } from 'react';
import { ViewType } from '../types';
import { PRICING_TIERS } from '../data/erpData';
import { calculateErpEstimate, formatRupiah } from '../utils/pricingCalculator';
import { analytics } from '../utils/analytics';
import { 
  DollarSign, 
  Check, 
  X as CloseIcon, 
  ArrowRight, 
  Calculator, 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  Headphones, 
  Sparkles,
  Phone,
  Server
} from 'lucide-react';

interface PricingViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  
  // Calculator States
  const [calcSegment, setCalcSegment] = useState<'retail' | 'distributor' | 'contractor' | 'manufacturing' | 'regulated'>('contractor');
  const [calcUsers, setCalcUsers] = useState<number>(8);
  const [calcBranches, setCalcBranches] = useState<number>(2);
  const [calcDeployment, setCalcDeployment] = useState<'cloud' | 'on-premise'>('cloud');
  const [calcModules, setCalcModules] = useState<string[]>([
    'RAB & RAP Proyek',
    'Akuntansi Keuangan',
    'Persediaan Stok',
    'Pembelian Material',
  ]);

  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteSent, setQuoteSent] = useState(false);

  const estimate = calculateErpEstimate({
    segment: calcSegment,
    userCount: calcUsers,
    branchCount: calcBranches,
    selectedModules: calcModules,
    deployment: calcDeployment,
  });

  const handleModuleToggle = (moduleName: string) => {
    analytics.track('calculator_use', { action: 'toggle_module', module: moduleName });
    setCalcModules((prev) =>
      prev.includes(moduleName) ? prev.filter((m) => m !== moduleName) : [...prev, moduleName]
    );
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteEmail) return;
    analytics.track('form_submit', {
      form_name: 'pricing_calculator_quote',
      email: quoteEmail,
      segment: calcSegment,
      users: calcUsers,
      branches: calcBranches,
      estimated_monthly: estimate.softwareMonthly,
      estimated_impl: estimate.implementationCost,
    });
    setQuoteSent(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Paket Harga & Kalkulator</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Investasi Transparan</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Paket Harga SISCOM ERP & Simulasi Estimasi Biaya
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Model biaya terukur tanpa biaya tersembunyi. Dilengkapi simulasi go-live dan pendampingan implementasi penuh.
        </p>

        {/* Billing Switch */}
        <div className="mt-6 inline-flex items-center p-1 bg-slate-200/80 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-xl transition ${
              billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tagihan Bulanan
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
              billingCycle === 'annual' ? 'bg-blue-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Tagihan Tahunan</span>
            <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-extrabold">
              Hemat 15%
            </span>
          </button>
        </div>
      </section>

      {/* 3 PRICING TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition ${
                tier.isPopular
                  ? 'bg-white border-blue-600 shadow-xl shadow-blue-900/10 ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200 hover:shadow-md'
              }`}
            >
              <div>
                {tier.isPopular && (
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                    Paling Banyak Digunakan
                  </span>
                )}
                <h2 className="text-2xl font-black text-slate-900">{tier.name}</h2>
                <p className="text-xs text-slate-500 mt-1">{tier.targetSegment}</p>

                <div className="my-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      {tier.priceMonthly}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 block mt-1">{tier.idealFor}</span>
                  <div className="mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block">
                    {billingCycle === 'annual' ? tier.priceAnnualBilled : 'Siklus fleksibel per bulan'}
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-xs text-slate-600">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Estimasi Implementasi:</span>
                    <strong className="text-slate-800">{tier.implementationEst}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Estimasi Waktu Go Live:</span>
                    <strong className="text-emerald-700 font-bold">{tier.goLiveTime}</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-900 block mb-2">Termasuk dalam Paket:</span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  {tier.excluded && (
                    <div className="pt-2 space-y-1.5 opacity-60">
                      {tier.excluded.map((exc, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-500 text-[11px]">
                          <CloseIcon className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="line-through">{exc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenDemo(tier.name)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                    tier.isPopular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md shadow-orange-600/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PRICING CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Kalkulator Simulasi Biaya & Durasi Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Hitung Estimasi Biaya Lisensi & Waktu Go Live Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Sesuaikan parameter pengguna, cabang, sektor industri, dan modul untuk mendapatkan estimasi investasi transparan.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Sliders & Selectors */}
            <div className="lg:col-span-7 space-y-6">
              {/* Segment Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Sektor Industri Bisnis:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'retail', name: 'Retail & POS' },
                    { id: 'distributor', name: 'Distributor FMCG' },
                    { id: 'contractor', name: 'Kontraktor Sipil/MEP' },
                    { id: 'manufacturing', name: 'Pabrik & Manufaktur' },
                    { id: 'regulated', name: 'Kawasan Berikat / Valas' },
                  ].map((seg) => (
                    <button
                      key={seg.id}
                      type="button"
                      onClick={() => setCalcSegment(seg.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition ${
                        calcSegment === seg.id
                          ? 'border-blue-500 bg-blue-600 text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      {seg.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders: Users & Branches */}
              <div className="space-y-4 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-semibold">Jumlah Pengguna Sistem (Users):</span>
                    <strong className="text-amber-400 text-sm font-mono">{calcUsers} Pengguna Aktif</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={calcUsers}
                    onChange={(e) => setCalcUsers(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1 User</span>
                    <span>25 Users</span>
                    <span>50+ Users</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-semibold">Jumlah Cabang / Gudang Operasional:</span>
                    <strong className="text-amber-400 text-sm font-mono">{calcBranches} Cabang</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={calcBranches}
                    onChange={(e) => setCalcBranches(parseInt(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1 Cabang</span>
                    <span>8 Cabang</span>
                    <span>15 Cabang</span>
                  </div>
                </div>
              </div>

              {/* Deployment Option */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Pilihan Deployment Server:</label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setCalcDeployment('cloud')}
                    className={`p-3 rounded-xl border text-left transition ${
                      calcDeployment === 'cloud'
                        ? 'border-blue-500 bg-blue-950/60 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-white">Cloud Managed SISCOM</span>
                    <span className="text-[11px] text-slate-400">Data Center Tier 3 Indonesia, backup otomatis</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcDeployment('on-premise')}
                    className={`p-3 rounded-xl border text-left transition ${
                      calcDeployment === 'on-premise'
                        ? 'border-blue-500 bg-blue-950/60 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400'
                    }`}
                  >
                    <span className="font-bold block text-white">On-Premise Server Lokal</span>
                    <span className="text-[11px] text-slate-400">Dikelola di server gedung kantor sendiri</span>
                  </button>
                </div>
              </div>

              {/* Modules Checklist */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">Pilihan Cakupan Modul:</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Akuntansi Keuangan',
                    'Persediaan Stok',
                    'Pembelian Material',
                    'Penjualan & Piutang',
                    'RAB & RAP Proyek',
                    'BOM & HPP Manufaktur',
                    'HRIS & Payroll TER',
                    'IT Inventory Bea Cukai / BI',
                  ].map((mod) => (
                    <button
                      type="button"
                      key={mod}
                      onClick={() => handleModuleToggle(mod)}
                      className={`p-2 rounded-xl border text-left text-xs font-medium flex items-center gap-2 transition ${
                        calcModules.includes(mod)
                          ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                        calcModules.includes(mod) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-600 bg-transparent'
                      }`}>
                        {calcModules.includes(mod) && <Check className="w-3 h-3" />}
                      </div>
                      <span className="truncate">{mod}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Live Estimate Summary Card */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase">Hasil Estimasi Sistem</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 font-bold text-[11px]">
                  Kategori: {estimate.tierRecommended}
                </span>
              </div>

              {/* Price Figures */}
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] text-slate-400 block">Estimasi Lisensi Bulanan:</span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {formatRupiah(estimate.softwareMonthly)}
                    <span className="text-xs text-slate-400 font-normal"> / bulan</span>
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 block">Estimasi Tagihan Tahunan (Hemat 15%):</span>
                  <span className="text-lg font-bold text-amber-400 font-mono">
                    {formatRupiah(estimate.softwareAnnual)} / tahun
                  </span>
                  <span className="text-[10px] text-emerald-400 block">
                    (Hemat {formatRupiah(estimate.savingsAnnual)} dibandingkan bulanan)
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Estimasi Biaya Implementasi:</span>
                    <strong className="text-white font-mono">{formatRupiah(estimate.implementationCost)}</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="text-slate-400">Estimasi Durasi Sampai Go Live:</span>
                    <strong className="text-emerald-400 font-bold">{estimate.estimatedWeeksToGoLive} Minggu</strong>
                  </div>
                </div>
              </div>

              {/* Included Breakdown */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                <span className="font-bold text-white text-[11px] block">Rincian Perhitungan:</span>
                {estimate.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                    <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Lead capture: Send quotation to email */}
              <div className="pt-2">
                {quoteSent ? (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center text-xs text-emerald-300">
                    Estimasi penawaran berhasil dikirimkan ke <strong>{quoteEmail}</strong>.
                  </div>
                ) : (
                  <form onSubmit={handleSendQuote} className="space-y-2">
                    <label className="block text-[11px] text-slate-400">
                      Kirimkan rincian estimasi ini ke email kerja Anda:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="email@perusahaan.co.id"
                        value={quoteEmail}
                        onChange={(e) => setQuoteEmail(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0"
                      >
                        Kirim
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <button
                onClick={() => onOpenDemo(estimate.tierRecommended)}
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
              >
                <span>Jadwalkan Demo Sesuai Simulasi Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD VS ON-PREMISE COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Arsitektur Fleksibel</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Perbandingan Cloud Server vs On-Premise
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Pilih opsi penempatan data yang paling sesuai dengan kepatuhan internal dan anggaran IT perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-900">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">SISCOM Cloud Managed</h3>
                <span className="text-xs text-blue-700 font-semibold">Pilihan 85% Pelanggan Baru</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Infrastruktur terkelola sepenuhnya di Data Center Tier 3/4 di Jakarta, Indonesia. Tanpa perlu membeli perangkat server fisik atau merekrut staf sysadmin IT in-house.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Backup otomatis harian (H-1) dengan retensi berlapis</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses aman SSL 256-bit dari mana saja via browser & mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Gratis upgrade versi aplikasi dan penyesuaian regulasi baru</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-800">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">SISCOM On-Premise Server</h3>
                <span className="text-xs text-slate-600 font-semibold">Untuk Perusahaan dengan SOP Ketat</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Software diinstal langsung di mesin server lokal yang ditempatkan di ruang server gedung kantor Anda. Sangat disukai instansi dengan data sensitif atau lokasi tambang/kebun dengan keterbatasan internet.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>100% kepemilikan fisik data berada di bawah kendali kantor Anda</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tetap beroperasi lancar di jaringan LAN lokal saat internet publik padam</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dukungan instalasi, tuning database, dan SOP backup oleh tim SISCOM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
