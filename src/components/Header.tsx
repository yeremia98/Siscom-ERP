import React, { useState } from 'react';
import { useTheme, Theme } from '../context/ThemeContext';
import { Sun, Moon, Monitor, Menu, X, ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCT_SUITES } from '../content/products';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsProductMenuOpen(false);
  };

  const navItems = [
    { label: 'Produk', route: '/#produk', hasDropdown: true },
    { label: 'Industri', route: '/industri' },
    { label: 'Layanan', route: '/layanan' },
    { label: 'Klien', route: '/klien' },
    { label: 'Support', route: '/verifikasi' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 dark:bg-[#080E1E]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0B2447] dark:focus-visible:outline-amber-400 rounded-lg p-1"
          aria-label="SISCOM ERP Beranda"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0B2447] p-1.5 flex items-center justify-center shadow-xs">
            <img
              src="/assets/aistudio/logo_sis_reverse_81db699c.png"
              alt="Logo Resmi SISCOM ERP"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                SISCOM
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                ERP
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              PT Shan Informasi Sistem (Est. 1994)
            </span>
          </div>
        </a>

        {/* Desktop Navigation (Max 5 items) */}
        <nav className="hidden lg:flex items-center gap-1 text-[14px] font-medium text-slate-700 dark:text-slate-200" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.label} className="relative" onMouseLeave={() => setIsProductMenuOpen(false)}>
                  <button
                    onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                    onMouseEnter={() => setIsProductMenuOpen(true)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                    aria-expanded={isProductMenuOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Produk */}
                  {isProductMenuOpen && (
                    <div className="absolute top-full left-0 w-[580px] p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-2 gap-2 mt-1 z-50">
                      <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Jalur Modul Spesifik
                        </span>
                        <a
                          href="/#produk"
                          onClick={(e) => handleLinkClick(e, '/#produk')}
                          className="text-xs text-[#0B2447] dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                        >
                          Lihat semua modul
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                      {PRODUCT_SUITES.map((prod) => (
                        <a
                          key={prod.id}
                          href={`/produk/${prod.slug}`}
                          onClick={(e) => handleLinkClick(e, `/produk/${prod.slug}`)}
                          className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex flex-col group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#0B2447] dark:group-hover:text-amber-400 transition-colors">
                              {prod.name}
                            </span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {prod.track === 'ERP Industri' ? 'ERP' : 'POS'}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {prod.category}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.label}
                href={item.route}
                onClick={(e) => handleLinkClick(e, item.route)}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Theme Switcher & Single Primary CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-[#0B2447]"
              aria-label="Pilih mode tampilan"
            >
              {resolvedTheme === 'dark' ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-600" />}
            </button>

            {isThemeMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 py-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg z-50 text-xs">
                <button
                  onClick={() => {
                    setTheme('light');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    theme === 'light' ? 'font-bold text-[#0B2447] dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  Mode terang
                </button>
                <button
                  onClick={() => {
                    setTheme('dark');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    theme === 'dark' ? 'font-bold text-[#0B2447] dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  Mode gelap
                </button>
                <button
                  onClick={() => {
                    setTheme('system');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    theme === 'system' ? 'font-bold text-[#0B2447] dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  Sistem
                </button>
              </div>
            )}
          </div>

          {/* Primary CTA: "Jadwalkan demo" */}
          <a
            href="/demo"
            onClick={(e) => handleLinkClick(e, '/demo')}
            className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2447]"
          >
            Jadwalkan demo
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-b border-slate-200 dark:border-slate-800 bg-[#FAFAF7] dark:bg-[#080E1E] space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.route}
                onClick={(e) => handleLinkClick(e, item.route)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="/demo"
              onClick={(e) => handleLinkClick(e, '/demo')}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-[#0B2447] text-white dark:bg-amber-400 dark:text-slate-950"
            >
              Jadwalkan demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
