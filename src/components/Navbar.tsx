import React, { useState, useRef, useEffect } from 'react';
import { ViewType } from '../types';
import { PRODUCTS, INDUSTRIES, VERIFIED_CONTACTS } from '../data/erpData';
import { 
  Building2, 
  ChevronDown, 
  HardHat, 
  Truck, 
  Factory, 
  Store, 
  Calculator, 
  Users, 
  ShieldCheck, 
  Coins, 
  Menu, 
  X, 
  Phone, 
  Clock, 
  Sparkles,
  Search,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  BarChart2
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenDemo: (prefilledProduct?: string) => void;
  onOpenAnalytics: () => void;
  onOpenScorecard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenDemo,
  onOpenAnalytics,
  onOpenScorecard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'solutions' | null>(null);
  const [industrySearch, setIndustrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat': return <HardHat className="w-5 h-5 text-amber-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-blue-600" />;
      case 'Factory': return <Factory className="w-5 h-5 text-indigo-600" />;
      case 'Store': return <Store className="w-5 h-5 text-emerald-600" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-cyan-600" />;
      case 'Users': return <Users className="w-5 h-5 text-violet-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-green-600" />;
      case 'Coins': return <Coins className="w-5 h-5 text-amber-500" />;
      default: return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredIndustries = INDUSTRIES.filter((ind) => 
    ind.name.toLowerCase().includes(industrySearch.toLowerCase()) ||
    ind.subIndustries.some(sub => sub.toLowerCase().includes(industrySearch.toLowerCase()))
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Banner: Verified Contact & Support Hours */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <strong className="text-white font-medium">SISCOM ERP</strong> — Didampingi Sampai Go Live Sejak 1994
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Support 7 Hari 08.30 - 22.00 WIB (Private WA Group MSC)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a 
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi ERP.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-200 hover:text-emerald-400 transition"
              title="Official Sales WhatsApp Hotline"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Sales: <span className="font-semibold text-white">0812-9981-7515</span></span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Support: 0813-8133-3515</span>
            <button
              onClick={onOpenScorecard}
              className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 border border-blue-700/50 hover:bg-blue-800 text-[11px] font-medium"
              title="Lihat Rubrik Skor Audit & Traceability"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              Audit Skor &gt; 9,0
            </button>
            <button
              onClick={onOpenAnalytics}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 text-[11px] font-mono"
              title="Buka Data Layer & Live Event Inspector"
            >
              <BarChart2 className="w-3 h-3 text-emerald-400" />
              Live Events
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <button
            onClick={() => { onNavigate('home'); setActiveDropdown(null); }}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="SISCOM ERP Beranda"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-blue-950/20 group-hover:scale-105 transition">
              S
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-blue-900 transition">SISCOM</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-800 rounded">ERP</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-none">Kontrol Penuh Bisnis Anda</p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {/* Mega Menu: Produk */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  activeDropdown === 'products' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'products'}
              >
                <span>Produk</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-[540px] mt-2 p-4 bg-white rounded-2xl shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">Operasional Lapangan</p>
                      <div className="space-y-1">
                        {PRODUCTS.filter(p => p.category === 'Operasional').map(product => (
                          <button
                            key={product.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              if (product.id === 'contractor') onNavigate('product-contractor');
                              else onNavigate('solutions');
                            }}
                            className="w-full text-left p-2 rounded-xl hover:bg-blue-50/80 transition flex items-start gap-2.5 group"
                          >
                            <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm">
                              {getProductIcon(product.iconName)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-900 text-xs group-hover:text-blue-900">{product.name}</span>
                                {product.badge && (
                                  <span className="text-[9px] px-1 py-0.2 bg-amber-100 text-amber-800 rounded font-medium">
                                    {product.id === 'contractor' ? 'Spesial' : 'Unggulan'}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1">{product.shortDesc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">Keuangan & Regulasi Khusus</p>
                      <div className="space-y-1">
                        {PRODUCTS.filter(p => p.category !== 'Operasional').map(product => (
                          <button
                            key={product.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate('solutions');
                            }}
                            className="w-full text-left p-2 rounded-xl hover:bg-blue-50/80 transition flex items-start gap-2.5 group"
                          >
                            <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm">
                              {getProductIcon(product.iconName)}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-900 text-xs group-hover:text-blue-900">{product.name}</span>
                                {product.badge && (
                                  <span className="text-[9px] px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded font-medium">Regulasi</span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1">{product.shortDesc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => { setActiveDropdown(null); onNavigate('product-contractor'); }}
                          className="w-full py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-blue-900 text-xs font-semibold flex items-center justify-between"
                        >
                          <span>Halaman Mendalam: SIS Construction One</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu: Solusi Industri (7 Categories + Search) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  activeDropdown === 'solutions' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                }`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solusi Industri</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full -left-20 w-[620px] mt-2 p-4 bg-white rounded-2xl shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="mb-3 relative">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Cari industri Anda (Apotek, Bengkel, FMCG, MEP, Garment...)"
                      value={industrySearch}
                      onChange={(e) => setIndustrySearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                    {filteredIndustries.map(ind => (
                      <button
                        key={ind.id}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (ind.id === 'contractor') onNavigate('product-contractor');
                          else onNavigate('solutions');
                        }}
                        className="text-left p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-900 text-xs group-hover:text-blue-900">{ind.name}</span>
                          <span className="text-[10px] text-blue-700 font-semibold">{ind.subIndustries.length} Varian</span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mb-1.5">{ind.tagline}</p>
                        <div className="flex flex-wrap gap-1">
                          {ind.subIndustries.slice(0, 2).map((sub, idx) => (
                            <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Sub-industri ditampilkan lengkap di halaman Solusi.</span>
                    <button
                      onClick={() => { setActiveDropdown(null); onNavigate('solutions'); }}
                      className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                    >
                      Buka Semua 7 Solusi <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            <button
              onClick={() => { onNavigate('pricing'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'pricing' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Harga & Kalkulator
            </button>

            <button
              onClick={() => { onNavigate('case-studies'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'case-studies' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Studi Kasus
            </button>

            <button
              onClick={() => { onNavigate('comparison'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'comparison' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Bandingkan
            </button>

            <button
              onClick={() => { onNavigate('security'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'security' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Keamanan
            </button>

            <button
              onClick={() => { onNavigate('resources'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'resources' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Panduan
            </button>

            <button
              onClick={() => { onNavigate('contact'); setActiveDropdown(null); }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                currentView === 'contact' ? 'text-blue-900 bg-blue-50' : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Kontak
            </button>
          </nav>

          {/* Consistent CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onNavigate('pricing')}
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-xl transition"
            >
              Lihat Harga
            </button>
            <button
              onClick={() => onOpenDemo()}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/25 hover:shadow-orange-600/35 active:scale-95 transition flex items-center gap-2"
            >
              <span>Jadwalkan Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-4 max-h-[85vh] overflow-y-auto space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'home' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Beranda
            </button>
            <button
              onClick={() => { onNavigate('product-contractor'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'product-contractor' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              ERP Kontraktor
            </button>
            <button
              onClick={() => { onNavigate('solutions'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'solutions' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Solusi Industri (7)
            </button>
            <button
              onClick={() => { onNavigate('pricing'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'pricing' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Harga & Kalkulator
            </button>
            <button
              onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'case-studies' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Studi Kasus (6)
            </button>
            <button
              onClick={() => { onNavigate('comparison'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'comparison' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Bandingkan vs Odoo
            </button>
            <button
              onClick={() => { onNavigate('security'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'security' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Keamanan Data
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-left text-sm font-bold ${currentView === 'contact' ? 'bg-blue-50 text-blue-900' : 'text-slate-800'}`}
            >
              Kontak & Alamat
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => { onOpenDemo(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-center shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Demo 30 Menit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin tanya paket ERP via WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-600 text-emerald-700 font-bold text-center flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Sales: 0812-9981-7515</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
