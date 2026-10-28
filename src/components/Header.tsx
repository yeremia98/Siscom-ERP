import React, { useState, useRef, useEffect } from 'react';
import { VERIFIED_CONTACTS, MEGA_MENU_SUITES } from '../data/erpData';
import { useTheme, Theme } from '../context/ThemeContext';
import { 
  Building2, 
  ShoppingBag, 
  Users, 
  Truck, 
  ShieldAlert, 
  Coins, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  ChevronDown, 
  Sun, 
  Moon, 
  Laptop, 
  Sparkles,
  Layers,
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenConsultation }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterMega = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  const getSuiteIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-orange-500" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-500" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-indigo-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'Coins': return <Coins className="w-5 h-5 text-cyan-500" />;
      default: return <Layers className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Top Corporate Status Bar */}
      <div className="bg-slate-100/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800/60 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <strong className="text-slate-900 dark:text-white font-semibold tracking-tight">SISCOM ERP</strong> — Enterprise Architecture Est. 1994
            </span>
            <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-600 dark:text-slate-400 font-medium">
              {VERIFIED_CONTACTS.taxStatement}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-slate-500 dark:text-slate-400 font-medium">
              Telp: {VERIFIED_CONTACTS.marketingPhone1}
            </span>
            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
              title="Official WhatsApp Hotline"
            >
              <Phone className="w-3 h-3 text-emerald-500" />
              <span>WhatsApp: <strong className="font-mono">{VERIFIED_CONTACTS.whatsappSales}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <button
            onClick={() => {
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 focus:outline-none group text-left"
            aria-label="SISCOM Enterprise ERP Beranda"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md shadow-slate-950/10 dark:shadow-slate-950/50 flex items-center justify-center group-hover:ring-2 group-hover:ring-orange-500/50 transition-all duration-200 shrink-0 border border-slate-200 dark:border-transparent">
              <picture className="w-full h-full flex items-center justify-center">
                <source type="image/webp" srcSet="/assets/aistudio/logo_sis.webp" />
                <img
                  src="/assets/aistudio/logo_sis_reverse_81db699c.png"
                  alt="Logo Resmi SISCOM ERP"
                  width="36"
                  height="36"
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  SISCOM
                </span>
                <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30 rounded-md">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Integrasi Bisnis & Kendali Finansial
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700 dark:text-slate-300">
            {/* Mega Menu Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterMega}
              onMouseLeave={handleMouseLeaveMega}
            >
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  megaMenuOpen || currentRoute.startsWith('/product')
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'hover:text-orange-600 dark:hover:text-white'
                }`}
              >
                <span>Solusi ERP Spesifik</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-orange-500' : ''}`} />
              </button>

              {/* Mega Menu Box (HashMicro / SAP Grid Style) */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-20 w-[780px] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-950/20 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Solusi Industri Native Indonesia (6 Flagship Suites)
                    </span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">
                      Kepatuhan Perpajakan & Alur Standar SAK
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    {MEGA_MENU_SUITES.map((suite) => (
                      <button
                        key={suite.slug}
                        onClick={() => {
                          setMegaMenuOpen(false);
                          onNavigate(`/product/${suite.slug}`);
                        }}
                        className="p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-left transition-all group flex items-start gap-3.5"
                      >
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 transition shrink-0 mt-0.5">
                          {getSuiteIcon(suite.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                              {suite.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                              {suite.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
                            {suite.tagline}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Butuh solusi kustom untuk industri spesifik Anda?</span>
                    <button
                      onClick={() => {
                        setMegaMenuOpen(false);
                        onOpenConsultation('Konsultasi Solusi ERP Spesifik');
                      }}
                      className="font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                    >
                      <span>Jadwalkan Diskusi Kustom</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#fitur"
              onClick={(e) => {
                if (currentRoute !== '/') {
                  e.preventDefault();
                  onNavigate('/');
                  setTimeout(() => {
                    document.getElementById('fitur')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="hover:text-orange-600 dark:hover:text-white transition-colors py-1"
            >
              Kapabilitas Enterprise
            </a>

            <a
              href="#metodologi"
              onClick={(e) => {
                if (currentRoute !== '/') {
                  e.preventDefault();
                  onNavigate('/');
                  setTimeout(() => {
                    document.getElementById('metodologi')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="hover:text-orange-600 dark:hover:text-white transition-colors py-1"
            >
              Metodologi
            </a>

            <button
              onClick={() => onNavigate('/blog')}
              className={`hover:text-orange-600 dark:hover:text-white transition-colors py-1 flex items-center gap-1 ${
                currentRoute === '/blog' ? 'text-orange-600 dark:text-orange-400 font-bold' : ''
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Insights & Regulasi</span>
            </button>

            <button
              onClick={() => onNavigate('/faq')}
              className={`hover:text-orange-600 dark:hover:text-white transition-colors py-1 flex items-center gap-1 ${
                currentRoute === '/faq' ? 'text-orange-600 dark:text-orange-400 font-bold' : ''
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </button>
          </nav>

          {/* Right Action Controls: Theme Switcher & Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Selector Toggle */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Pilih Mode Tampilan (Dark, Light, System)"
                title="Pilih Tema (Dark/Light/System)"
              >
                {resolvedTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-sky-400" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-50 text-xs font-medium text-slate-700 dark:text-slate-300 animate-in fade-in duration-100">
                  <button
                    onClick={() => {
                      setTheme('light');
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                      theme === 'light' ? 'text-orange-600 font-bold' : ''
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Mode Terang</span>
                  </button>
                  <button
                    onClick={() => {
                      setTheme('dark');
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                      theme === 'dark' ? 'text-orange-600 font-bold' : ''
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-sky-400" />
                    <span>Mode Gelap</span>
                  </button>
                  <button
                    onClick={() => {
                      setTheme('system');
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition ${
                      theme === 'system' ? 'text-orange-600 font-bold' : ''
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5 text-slate-400" />
                    <span>System Default</span>
                  </button>
                </div>
              )}
            </div>

            {/* Primary Action CTA Button */}
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 active:scale-95 transition-all duration-150 flex items-center gap-2"
            >
              <span>Jadwalkan Konsultasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions (Theme Toggle & Menu Drawer Trigger) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Ganti mode gelap/terang"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-500" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 pb-1">
              Solusi ERP Spesifik
            </p>
            {MEGA_MENU_SUITES.map((suite) => (
              <button
                key={suite.slug}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(`/product/${suite.slug}`);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center justify-between"
              >
                <span>{suite.title}</span>
                <span className="text-[10px] text-slate-400">{suite.badge}</span>
              </button>
            ))}

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/blog');
                }}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span>Wawasan & Regulasi Bisnis</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/faq');
                }}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span>Pertanyaan Umum (FAQ)</span>
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm text-center shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Konsultasi Solusi</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-600/60 bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Sales: 0812-9981-7515</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
