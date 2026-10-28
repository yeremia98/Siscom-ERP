import React, { useState } from 'react';
import { ViewType, IndustryItem } from '../types';
import { INDUSTRIES, PRODUCTS } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  Building2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  HardHat, 
  Truck, 
  Factory, 
  Store, 
  Wrench, 
  Coins, 
  FileCheck 
} from 'lucide-react';

interface SolutionsViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  const filteredIndustries = INDUSTRIES.filter((ind) =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ind.subIndustries.some((sub) => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <HardHat className="w-6 h-6 text-amber-600" />;
      case 'Truck': return <Truck className="w-6 h-6 text-blue-600" />;
      case 'Factory': return <Factory className="w-6 h-6 text-indigo-600" />;
      case 'ShoppingBag': return <Store className="w-6 h-6 text-emerald-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-cyan-600" />;
      case 'Coins': return <Coins className="w-6 h-6 text-amber-500" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-green-600" />;
      default: return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Solusi Industri</span>
        </div>
      </div>

      {/* Header & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900">7 Sektor Spesialisasi</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Solusi ERP yang Disesuaikan dengan Karakteristik Industri Anda
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Tidak ada dua industri yang identik. Kami mendesain modul fungsional yang menjawab tantangan spesifik bidang usaha Anda.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Ketik industri Anda: Apotek, Bengkel, FMCG, Garment, MEP..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 text-xs shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
      </section>

      {/* Main 2-Column Interface: List of Industries on Left, Deep Dive on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 7 Industries Cards */}
          <div className="lg:col-span-5 space-y-3">
            {filteredIndustries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-2xl border transition cursor-pointer text-left ${
                  selectedIndustry.id === ind.id
                    ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-sm shrink-0">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">{ind.name}</h3>
                      <span className="text-[11px] font-semibold text-blue-700">{ind.subIndustries.length} Sub-Sektor</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{ind.tagline}</p>
                  </div>
                </div>
              </div>
            ))}

            {filteredIndustries.length === 0 && (
              <div className="p-8 text-center bg-slate-50 rounded-2xl text-xs text-slate-500">
                Industri tidak ditemukan. Hubungi tim konsultan kami untuk analisis kebutuhan kustom.
              </div>
            )}
          </div>

          {/* Right Column: Deep Dive Details for Selected Industry */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold text-blue-900 uppercase">Spesifikasi Modul Vertikal</span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">{selectedIndustry.name}</h2>
                <p className="text-xs text-slate-600 mt-1">{selectedIndustry.description}</p>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-900 shrink-0">
                {getIndustryIcon(selectedIndustry.iconName)}
              </div>
            </div>

            {/* Sub-industries tags */}
            <div>
              <span className="text-xs font-bold text-slate-800 block mb-2">Cakupan Varian & Sub-Industri:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedIndustry.subIndustries.map((sub, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Pain Points solved */}
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
              <span className="text-xs font-bold text-rose-900 block">Tantangan Khas yang Diselesaikan SISCOM:</span>
              <div className="space-y-1.5">
                {selectedIndustry.keyPainPoints.map((pain, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="text-rose-600 font-bold shrink-0">•</span>
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Product Suite */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-blue-800 font-medium block">Produk Rekomendasi Utama:</span>
                <span className="text-base font-bold text-slate-900">{selectedIndustry.recommendedProduct}</span>
              </div>
              {selectedIndustry.id === 'contractor' ? (
                <button
                  onClick={() => onNavigate('product-contractor')}
                  className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs"
                >
                  Buka Halaman Spesifik &rarr;
                </button>
              ) : (
                <button
                  onClick={() => onOpenDemo(selectedIndustry.name)}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs"
                >
                  Jadwalkan Demo &rarr;
                </button>
              )}
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenDemo(selectedIndustry.name)}
                className="flex-1 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-600/20"
              >
                <span>Jadwalkan Demo Khusus {selectedIndustry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs"
              >
                Hitung Biaya Sektor Ini
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
