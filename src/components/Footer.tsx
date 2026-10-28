import React from 'react';
import { VERIFIED_CONTACTS, ENTERPRISE_MODULES } from '../data/erpData';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Lock,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Entity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white p-1 shadow-sm flex items-center justify-center shrink-0">
                <picture className="w-full h-full flex items-center justify-center">
                  <source type="image/webp" srcSet="/assets/aistudio/logo_sis.webp" />
                  <img 
                    src="/assets/aistudio/logo_sis_reverse_81db699c.png" 
                    alt="Logo Resmi SISCOM ERP" 
                    width="32" 
                    height="32" 
                    className="w-full h-full object-contain" 
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-white tracking-tight">SISCOM ERP</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 font-bold border border-orange-500/30">
                  Est. 1994
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white">{VERIFIED_CONTACTS.companyName}</strong> adalah pengembang perangkat lunak Enterprise Resource Planning lokal Indonesia dengan pengalaman rekayasa berkesinambungan sejak 1994.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{VERIFIED_CONTACTS.officeAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp Sales: <strong className="text-white font-mono">{VERIFIED_CONTACTS.primarySalesPhone}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>sales@siscom.co.id • support@siscom.co.id</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Data Center Tier 3/4 Jakarta (Kedaulatan Data UU PDP)</span>
              </div>
            </div>
          </div>

          {/* Core Modules Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Modul Enterprise Spesifik
            </h4>
            <ul className="space-y-2 text-xs">
              {ENTERPRISE_MODULES.map((mod) => (
                <li key={mod.id}>
                  <a href="#modul" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{mod.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Navigation & Legal Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Korporat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#kapabilitas" className="hover:text-white transition-colors">
                  Kapabilitas Arsitektur
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-white transition-colors">
                  Metodologi 5-Tahap
                </a>
              </li>
              <li>
                <a href="#kepatuhan" className="hover:text-white transition-colors">
                  Kepatuhan Fiskal & SAK
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab Teknis
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="text-orange-400 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Jadwalkan Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0">
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
          <div className="flex items-center gap-6 text-[11px]">
            <span>{VERIFIED_CONTACTS.taxStatement}</span>
            <span>•</span>
            <span>{VERIFIED_CONTACTS.supportStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
