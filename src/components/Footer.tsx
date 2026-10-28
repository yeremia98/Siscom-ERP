import React from 'react';
import { COMPANY_DATA } from '../content/company';
import { PRODUCT_SUITES } from '../content/products';
import { ShieldCheck, Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#060B18] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      {/* Upper Footer: Anti-Fraud Warning Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800/80 bg-slate-200/50 dark:bg-slate-900/40 py-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Peringatan Keamanan Transaksi:</strong> Seluruh pembayaran tagihan dan lisensi resmi hanya disalurkan ke rekening bank atas nama <strong>PT Shan Informasi Sistem</strong>.
            </span>
          </div>
          <a
            href="/verifikasi"
            onClick={(e) => handleLink(e, '/verifikasi')}
            className="text-[#0B2447] dark:text-amber-400 font-semibold hover:underline shrink-0"
          >
            Verifikasi rekening & kontak resmi &rarr;
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand & Address Column (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0B2447] p-1.5 flex items-center justify-center">
              <img
                src="/assets/aistudio/logo_sis_reverse_81db699c.png"
                alt="Logo SISCOM"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                PT SHAN INFORMASI SISTEM
              </span>
              <span className="block text-[11px] text-slate-500 font-medium">
                Penyedia Solusi ERP & Akuntansi sejak 1994
              </span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
            {COMPANY_DATA.establishedHistory}
          </p>

          <div className="space-y-2 text-xs pt-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                {COMPANY_DATA.headOffice.address}, {COMPANY_DATA.headOffice.city} {COMPANY_DATA.headOffice.postalCode}, {COMPANY_DATA.headOffice.country}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Telepon Kantor: {COMPANY_DATA.phones.join(' / ')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Penjualan: {COMPANY_DATA.emails.sales} | Dukungan: {COMPANY_DATA.emails.support}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: ERP Industri */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            ERP Industri
          </h4>
          <ul className="space-y-2">
            {PRODUCT_SUITES.filter((p) => p.track === 'ERP Industri').map((p) => (
              <li key={p.id}>
                <a
                  href={`/produk/${p.slug}`}
                  onClick={(e) => handleLink(e, `/produk/${p.slug}`)}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: POS & Sektor */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            POS & Industri
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/produk/sis-smartpos"
                onClick={(e) => handleLink(e, '/produk/sis-smartpos')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                SIS SmartPOS Kasir
              </a>
            </li>
            <li>
              <a
                href="/industri"
                onClick={(e) => handleLink(e, '/industri')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Peta Sektor Industri
              </a>
            </li>
            <li>
              <a
                href="/layanan"
                onClick={(e) => handleLink(e, '/layanan')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Metodologi Penerapan
              </a>
            </li>
            <li>
              <a
                href="/klien"
                onClick={(e) => handleLink(e, '/klien')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Klien & Hasil Nyata
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Tata Kelola & Aksi */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Kepatuhan & Layanan
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/verifikasi"
                onClick={(e) => handleLink(e, '/verifikasi')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verifikasi Kanal Resmi
              </a>
            </li>
            <li>
              <a
                href="/estimasi"
                onClick={(e) => handleLink(e, '/estimasi')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Kalkulator Estimasi
              </a>
            </li>
            <li>
              <a
                href="/demo"
                onClick={(e) => handleLink(e, '/demo')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors font-semibold text-[#0B2447] dark:text-amber-400"
              >
                Jadwalkan demo sistem
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => handleLink(e, '/#faq')}
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                FAQ Regulasi & Teknis
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <p>&copy; {new Date().getFullYear()} PT Shan Informasi Sistem. Hak cipta dilindungi undang-undang.</p>
        <div className="flex items-center gap-4">
          <span>Kedaulatan Data UU PDP No. 27/2022</span>
          <span>•</span>
          <span>DJP e-Faktur & PPh 21 TER</span>
          <span>•</span>
          <span>PER-02/BC/2019 Bea Cukai</span>
        </div>
      </div>
    </footer>
  );
}
