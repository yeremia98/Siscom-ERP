import React from 'react';
import { VERIFIED_CONTACTS, MEGA_MENU_SUITES } from '../data/erpData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Lock,
  ArrowRight,
  Headset
} from 'lucide-react';

interface FooterProps {
  onNavigate?: (route: string) => void;
  onOpenConsultation: (sector?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNav = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Entity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 shadow-sm flex items-center justify-center shrink-0 border border-slate-200 dark:border-transparent">
                <picture className="w-full h-full flex items-center justify-center">
                  <source type="image/webp" srcSet="/assets/aistudio/logo_sis.webp" />
                  <img 
                    src="/assets/aistudio/logo_sis_reverse_81db699c.png" 
                    alt="Logo Resmi SISCOM ERP" 
                    width="36" 
                    height="36" 
                    className="w-full h-full object-contain" 
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">SISCOM ERP</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 font-bold border border-orange-500/30">
                  Est. 1994
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-900 dark:text-white">{VERIFIED_CONTACTS.companyName}</strong> adalah pengembang perangkat lunak Enterprise Resource Planning (ERP) lokal Indonesia dengan rekam jejak kepatuhan dan rekayasa berkesinambungan sejak 1994.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {VERIFIED_CONTACTS.headOfficeAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Headset className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>
                  Telepon Marketing: <strong className="text-slate-900 dark:text-white font-mono">{VERIFIED_CONTACTS.marketingPhone1}</strong> | <strong className="text-slate-900 dark:text-white font-mono">{VERIFIED_CONTACTS.marketingPhone2}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  WhatsApp Sales: <strong className="text-slate-900 dark:text-white font-mono">{VERIFIED_CONTACTS.whatsappSales}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  {VERIFIED_CONTACTS.marketingEmail} • {VERIFIED_CONTACTS.salesEmail}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  {VERIFIED_CONTACTS.dataCenterLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Flagship Suites Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Solusi ERP Spesifik Industri
            </h4>
            <ul className="space-y-2 text-xs">
              {MEGA_MENU_SUITES.map((suite) => (
                <li key={suite.slug}>
                  <button
                    onClick={() => handleNav(`/product/${suite.slug}`)}
                    className="hover:text-orange-600 dark:hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{suite.title} ({suite.category})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Navigation & Legal Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Pusat Informasi & Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/blog')}
                  className="hover:text-orange-600 dark:hover:text-white transition-colors"
                >
                  Insights & Regulasi Perpajakan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/faq')}
                  className="hover:text-orange-600 dark:hover:text-white transition-colors"
                >
                  Pertanyaan Umum (FAQ)
                </button>
              </li>
              <li>
                <a href="#fitur" className="hover:text-orange-600 dark:hover:text-white transition-colors">
                  Kapabilitas Arsitektur
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-orange-600 dark:hover:text-white transition-colors">
                  Metodologi 5-Tahap Go-Live
                </a>
              </li>
              <li>
                <a href="#kepatuhan" className="hover:text-orange-600 dark:hover:text-white transition-colors">
                  Kepatuhan Fiskal SAK & UU PDP
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Jadwalkan Konsultasi Solusi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0 border border-slate-200 dark:border-transparent">
              <picture className="w-full h-full flex items-center justify-center">
                <source type="image/webp" srcSet="/assets/aistudio/logo_sis.webp" />
                <img 
                  src="/assets/aistudio/logo_sis_reverse_81db699c.png" 
                  alt="SISCOM" 
                  width="20" 
                  height="20" 
                  className="w-full h-full object-contain" 
                  loading="lazy"
                />
              </picture>
            </div>
            <p>
              &copy; {new Date().getFullYear()} PT. Shan Informasi Sistem. Hak cipta dilindungi undang-undang.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500">
            <span>{VERIFIED_CONTACTS.taxStatement}</span>
            <span>•</span>
            <span>{VERIFIED_CONTACTS.supportStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
