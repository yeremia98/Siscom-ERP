import React, { useState } from 'react';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { 
  Building2, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Layers, 
  Lock,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (sector?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Modul Industri', href: '#modul' },
    { label: 'Kapabilitas Enterprise', href: '#kapabilitas' },
    { label: 'Metodologi', href: '#metodologi' },
    { label: 'Kepatuhan & Keamanan', href: '#kepatuhan' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      {/* Top Corporate Status Bar */}
      <div className="bg-slate-900/90 text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <strong className="text-white font-medium tracking-tight">SISCOM ERP</strong> — Enterprise Architecture Est. 1994
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-400 font-medium">
              {VERIFIED_CONTACTS.taxStatement}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-slate-400 font-medium">
              {VERIFIED_CONTACTS.supportStatement}
            </span>
            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP Enterprise.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition"
              title="Official WhatsApp Hotline"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Sales & Advisory: <strong className="text-white font-mono">0812-9981-7515</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main AstroWind Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 focus:outline-none group" aria-label="SISCOM Enterprise ERP Beranda">
            <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-md shadow-slate-950/50 flex items-center justify-center group-hover:ring-2 group-hover:ring-orange-500/50 transition-all duration-200 shrink-0">
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
                <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  SISCOM
                </span>
                <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 rounded-md">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Integrasi Bisnis & Kendali Finansial
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-orange-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 active:scale-95 transition-all duration-150 flex items-center gap-2"
            >
              <span>Jadwalkan Konsultasi Solusi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
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
              className="w-full py-2.5 rounded-xl border border-emerald-600/60 bg-emerald-950/30 text-emerald-400 font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sales: 0812-9981-7515</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
