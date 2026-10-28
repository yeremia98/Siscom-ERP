import React from 'react';
import { ViewType } from '../types';
import { VERIFIED_CONTACTS, PRODUCTS, INDUSTRIES } from '../data/erpData';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/60 to-slate-900/60 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ingin Mengetahui Bagaimana SISCOM Bekerja di Bisnis Anda?
            </h3>
            <p className="mt-2 text-slate-300 max-w-2xl text-sm">
              Jadwalkan sesi demonstrasi 30 menit gratis yang disesuaikan dengan alur bisnis Anda. Bebas komitmen.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDemo()}
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition flex items-center gap-2"
            >
              <span>Jadwalkan Demo 30 Menit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi sistem ERP via WhatsApp.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sales</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sitemap & Information Columns */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile & Verification */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
                S
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">SISCOM ERP</span>
                <span className="ml-2 text-[10px] px-2 py-0.5 bg-blue-900/80 text-blue-300 font-semibold rounded">Est. 1994</span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white">{VERIFIED_CONTACTS.companyName}</strong> adalah pengembang perangkat lunak ERP dan akuntansi lokal Indonesia terintegrasi sejak 1994, mendampingi lebih dari {VERIFIED_CONTACTS.verifiedClientsCount} bisnis hingga Go Live sukses.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{VERIFIED_CONTACTS.officeAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp Sales: <strong className="text-white">{VERIFIED_CONTACTS.primarySalesPhone}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{VERIFIED_CONTACTS.supportHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>sales@siscom.co.id | support@siscom.co.id</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Data Center Indonesia Tier 3/4 & Enkripsi AES-256</span>
            </div>
          </div>

          {/* Column 2: Produk Terpadu */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Produk ERP</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('product-contractor')}
                  className="hover:text-white transition text-left flex items-center gap-1.5"
                >
                  <span className="text-amber-400 font-bold">•</span>
                  <span>SIS Construction One</span>
                </button>
              </li>
              {PRODUCTS.filter(p => p.id !== 'contractor').slice(0, 5).map(prod => (
                <li key={prod.id}>
                  <button 
                    onClick={() => onNavigate('solutions')}
                    className="hover:text-white transition text-left"
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => onNavigate('solutions')}
                  className="text-blue-400 hover:underline pt-1 block"
                >
                  Lihat Semua 8 Modul &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solusi Industri */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Solusi Industri</h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.map(ind => (
                <li key={ind.id}>
                  <button
                    onClick={() => {
                      if (ind.id === 'contractor') onNavigate('product-contractor');
                      else onNavigate('solutions');
                    }}
                    className="hover:text-white transition text-left"
                  >
                    {ind.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Navigasi & Transparansi */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Transparansi</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white transition">
                  Paket Harga & Kalkulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-white transition">
                  Studi Kasus 6 Industri
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comparison')} className="hover:text-white transition">
                  Bandingkan vs Odoo / SAP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('security')} className="hover:text-white transition">
                  Keamanan & Kepatuhan PDP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition">
                  Checklist Memilih ERP (PDF)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition">
                  Alamat Kantor & Kontak
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, PDP notice & Audit Note */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} PT. Shan Informasi Sistem. Hak cipta dilindungi undang-undang.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => onNavigate('security')} className="hover:text-slate-300 transition">
              Kebijakan Privasi (UU PDP)
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('security')} className="hover:text-slate-300 transition">
              Ketentuan Layanan & MSC
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('security')} className="hover:text-slate-300 transition">
              Kebijakan Ekspor Data
            </button>
            <span>•</span>
            <a 
              href="https://siscom.co.id/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300 transition"
            >
              Sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
