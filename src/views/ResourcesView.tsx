import React, { useState } from 'react';
import { ViewType } from '../types';
import { analytics } from '../utils/analytics';
import { 
  FileText, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Search,
  Sparkles
} from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [glossarySearch, setGlossarySearch] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    analytics.track('download_resource', {
      resource_name: 'Checklist_Memilih_ERP_Indonesia_2024.pdf',
      user_email: emailInput,
    });
    setDownloadSuccess(true);
  };

  const glossaryItems = [
    { term: 'RAB vs RAP', def: 'RAB (Rencana Anggaran Biaya) adalah estimasi biaya tender yang diserahkan ke klien/owner. RAP (Rencana Anggaran Pelaksanaan) adalah pagu anggaran internal riil yang digunakan kontraktor untuk mengunci biaya material, upah borongan, dan sewa alat.' },
    { term: 'BOM (Bill of Materials)', def: 'Daftar formula bahan baku, komponen, dan bahan penolong beserta kuantitasnya yang dibutuhkan untuk memproduksi satu unit barang jadi pada pabrik manufaktur.' },
    { term: 'FEFO (First-Expired, First-Out)', def: 'Metode rotasi persediaan di mana barang dengan tanggal kedaluwarsa paling dekat harus dikeluarkan atau dijual terlebih dahulu, umum digunakan pada apotek, makanan, dan kimia.' },
    { term: 'PPh 21 TER 2024', def: 'Skema Tarif Efektif Rata-rata (TER) PPh Pasal 21 berdasarkan PP No. 58/2023 dan PMK No. 168/2023 yang membagi pemotongan pajak bulanan karyawan menjadi Kategori A, B, dan C.' },
    { term: 'Dokumen BC 2.3 & BC 4.0', def: 'Format dokumen pabean Direktorat Jenderal Bea dan Cukai (DJBC). BC 2.3 digunakan untuk impor bahan baku ke Kawasan Berikat, sedangkan BC 4.0 digunakan untuk pemasukan barang asal tempat lain dalam daerah pabean (TLDDP).' },
    { term: 'KUPVA Bukan Bank', def: 'Kegiatan Usaha Penukaran Valuta Asing (Money Changer) yang beroperasi di bawah izin dan pengawasan Bank Indonesia dengan kewajiban pelaporan transaksi berkala dan kepatuhan APU-PPT.' },
    { term: 'Opname Fisik Lapangan', def: 'Proses pemeriksaan dan pengukuran kemajuan fisik riil pekerjaan di proyek lapangan sebelum Berita Acara Pembayaran (BAP) diterbitkan untuk subkontraktor.' },
    { term: 'MSC (Maintenance Support Contract)', def: 'Kontrak pemeliharaan dan dukungan berkelanjutan pasca Go Live yang mencakup grup WhatsApp privat 7 hari, revisi format cetak tanpa batas, dan update regulasi pajak baru.' },
  ];

  const filteredGlossary = glossaryItems.filter(
    (g) => g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
           g.def.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Sumber Daya & Edukasi ERP</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Pusat Pengetahuan</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Panduan, Glosarium & Checklist Memilih ERP Indonesia
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Materi edukasi objektif untuk membantu Anda merancang implementasi sistem ERP yang tepat sasaran dan menghindari kegagalan implementasi.
        </p>
      </section>

      {/* Lead Magnet Banner: Download Checklist */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
              Lead Magnet Gratis (PDF)
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Checklist 35 Poin Evaluasi Vendor ERP untuk Bisnis Indonesia
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Daftar periksa kritis: validasi PPh 21 TER, biaya kustomisasi alur, SLA dukungan lokal, hak ekspor data, dan mitigasi risiko molor implementasi.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            {downloadSuccess ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700 text-center text-xs text-emerald-300">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-1 text-emerald-400" />
                <span>Dokumen PDF berhasil dikirim ke <strong>{emailInput}</strong>!</span>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Masukkan email kerja Anda"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Gratis</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ERP Glossary Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Glosarium Istilah ERP & Regulasi Bisnis</h2>
              <p className="text-xs text-slate-500 mt-0.5">Penjelasan ringkas terminologi operasional di industri Indonesia.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari istilah..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 text-xs block text-blue-900">{item.term}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
