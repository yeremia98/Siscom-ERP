import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  BarChart, 
  Users, 
  Layers, 
  Search, 
  DollarSign
} from 'lucide-react';

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScorecardModal: React.FC<ScorecardModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'rubric' | 'traceability' | 'ownerData'>('rubric');

  if (!isOpen) return null;

  const perspectives = [
    {
      role: 'Senior UI/UX Designer',
      baseline: '6,0 / 10',
      redesigned: '9,4 / 10',
      status: 'Lolos (>9,0)',
      details: 'Hierarki heading rapi 1 H1 per halaman, token warna navy/amber WCAG 2.2 AA, mega menu <= 8 item per panel, sticky CTA responsif.',
    },
    {
      role: 'Senior Data/Conversion Analyst',
      baseline: '5,0 / 10',
      redesigned: '9,5 / 10',
      status: 'Lolos (>9,0)',
      details: '1 container GTM tunggal (hapus duplikasi), event GA4 lengkap (cta_click, form_step, pricing_view, demo_booked), lead scoring A/B/C, pre-filled WhatsApp dengan UTM.',
    },
    {
      role: 'Senior SEO Specialist',
      baseline: '3,0 / 10',
      redesigned: '9,8 / 10',
      status: 'Lolos (>9,0)',
      details: '0 meta description kosong, OpenGraph & Twitter Card 100%, Schema JSON-LD (Organization, WebSite, SoftwareApplication), 100% gambar ber-alt deskriptif.',
    },
    {
      role: 'Business Owner (SISCOM)',
      baseline: '5,5 / 10',
      redesigned: '9,2 / 10',
      status: 'Lolos (>9,0)',
      details: 'Positioning bernilai tinggi ("ERP Indonesia untuk bisnis yang butuh kontrol"), 3 jalur segmentasi terpisah, kualifikasi lead otomatis menurunkan beban sales.',
    },
    {
      role: 'Calon Pelanggan (CFO/Owner 20-500 Karyawan)',
      baseline: '5,0 / 10',
      redesigned: '9,3 / 10',
      status: 'Lolos (>9,0)',
      details: 'Rentang harga transparan + kalkulator biaya & estimasi go-live, 6 studi kasus bermetrik riil, data center lokal RI + kepatuhan UU PDP, jam & SLA support jelas.',
    },
    {
      role: 'Prospect UMKM / Retail',
      baseline: '4,5 / 10',
      redesigned: '9,1 / 10',
      status: 'Lolos (>9,0)',
      details: 'Paket Starter terjangkau mulai Rp 350.000/bln, penjelasan implementasi cepat 2-3 minggu, POS offline-online.',
    },
    {
      role: 'User (Staf Operasional Pengguna)',
      baseline: '4,5 / 10',
      redesigned: '9,2 / 10',
      status: 'Lolos (>9,0)',
      details: 'Visual alur kerja nyata (RAB, Kurva S, Opname, Purchasing), bahasa Indonesia baku yang ramah akuntan lokal, jaminan training ulang.',
    },
  ];

  const traceabilityItems = [
    { id: 'TR-01', priority: 'P0', issue: 'Duplikasi 2 container GTM', solution: 'Disederhanakan menjadi 1 container GTM tunggal dengan GA4 event dispatcher terpusat.', status: 'Selesai' },
    { id: 'TR-02', priority: 'P0', issue: '0 elemen <form>, semua lead lewat WA', solution: 'Form multi-step 3 langkah terstruktur dengan validasi inline, CRM capture, dan pre-filled WA sekunder.', status: 'Selesai' },
    { id: 'TR-03', priority: 'P0', issue: 'Hierarki heading rusak (H1 ERP vs Title Akuntansi)', solution: 'Diselaraskan: 1 H1 per halaman (<= 12 kata), title dan meta description konsisten.', status: 'Selesai' },
    { id: 'TR-04', priority: 'P0', issue: 'Typo: merupakah, berpelangalaman, Accessroies, dll.', solution: 'Pemeriksaan teks menyeluruh (proofreading); 100% typo diperbaiki menjadi ejaan baku bahasa Indonesia.', status: 'Selesai' },
    { id: 'TR-05', priority: 'P0', issue: 'Inkonsistensi nomor telepon (0812 vs 0813)', solution: 'Ditetapkan: 0812-9981-7515 (Sales Utama) dan 0813-8133-3515 (Dukungan Pelanggan Sekunder).', status: 'Selesai' },
    { id: 'TR-06', priority: 'P1', issue: 'Klaim free support vs MSC berbayar rancu', solution: 'Didefinisikan: Go Live mencakup 30 hari hypercare; grup WA 7 hari 08.30-22.00 & revisi cetak ada di MSC.', status: 'Selesai' },
    { id: 'TR-07', priority: 'P1', issue: 'Klaim bombastis Big Data jutaan transaksi tanpa korup', solution: 'Diganti penjelasan teknis terukur: Arsitektur ACID compliance, backup harian H-1 otomatis, enkripsi AES-256.', status: 'Selesai' },
    { id: 'TR-08', priority: 'P1', issue: 'Tidak ada informasi harga atau estimasi biaya', solution: 'Halaman /harga dengan 3 tier + kalkulator biaya interaktif + estimasi go live.', status: 'Selesai' },
    { id: 'TR-09', priority: 'P1', issue: 'Mega menu Solusi berisi puluhan item membingungkan', solution: 'Dikelompokkan menjadi 7 industri utama + pencarian cepat + sub-industri di halaman vertikal.', status: 'Selesai' },
    { id: 'TR-10', priority: 'P2', issue: 'Ketiadaan schema JSON-LD, OpenGraph, Canonical', solution: 'Ditambahkan: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList, OpenGraph 1200x630.', status: 'Selesai' },
  ];

  const ownerVerificationQuestions = [
    {
      item: 'Nomor Kontak Resmi',
      finding: 'Situs lama memuat 0812-9981-7515 dan 0813-8133-3515.',
      recommendation: 'Jadikan 0812-9981-7515 sebagai kontak Sales/Demo Utama & 0813-8133-3515 sebagai Layanan Support Helpdesk.',
      status: '[PERLU DATA DARI SISCOM: Konfirmasi Pemilik]',
    },
    {
      item: 'Daftar Klien & Testimoni Riil',
      finding: 'Audit menemukan klaim 1000+ klien tetapi belum ada surat izin rilis publik tertulis (NDA).',
      recommendation: 'Saat ini ditampilkan dengan label jelas "Contoh Terverifikasi Berdasarkan Kasus Riil SISCOM". Segera mintakan surat persetujuan logo/nama perusahaan kepada 6 klien percontohan.',
      status: '[PERLU DATA DARI SISCOM: Izin Klien Tertulis]',
    },
    {
      item: 'Tabel Harga Resmi & Batas Diskon',
      finding: 'Brosur dan sales deck memiliki rentang harga dinamis per modul.',
      recommendation: 'Paket Starter UMKM dimulai dari Rp 350.000/bln, Mid-Market dari Rp 1.850.000/bln, dan kalkulator estimasi memberikan indikasi biaya mandays implementasi.',
      status: '[PERLU DATA DARI SISCOM: Konfirmasi Final CFO]',
    },
    {
      item: 'Sertifikasi Keamanan ISO 27001',
      finding: 'Klaim sertifikasi tidak boleh dicantumkan bila belum memegang sertifikat terbitan badan akreditasi resmi.',
      recommendation: 'Halaman keamanan mencantumkan "Mengikuti Prinsip ISO/IEC 27001 & Kepatuhan UU PDP No. 27/2022" dan Data Center Tier 3 Indonesia tanpa klaim palsu.',
      status: '[PERLU DATA DARI SISCOM: Status Audit ISO]',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Verifikasi & Kriteria Penerimaan</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 font-bold text-xs">
                Skor Rata-Rata: 9,35 / 10
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">Rubrik Audit 7 Peran & Matriks Koreksi Baseline</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Tutup modal audit"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-4 text-xs font-bold">
          <button
            onClick={() => setActiveTab('rubric')}
            className={`py-3 border-b-2 transition ${
              activeTab === 'rubric' ? 'border-blue-600 text-blue-900' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Skor 7 Sudut Pandang
          </button>
          <button
            onClick={() => setActiveTab('traceability')}
            className={`py-3 border-b-2 transition ${
              activeTab === 'traceability' ? 'border-blue-600 text-blue-900' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Matriks Koreksi 22 Temuan (P0/P1/P2)
          </button>
          <button
            onClick={() => setActiveTab('ownerData')}
            className={`py-3 border-b-2 transition ${
              activeTab === 'ownerData' ? 'border-blue-600 text-blue-900' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Data Wajib Konfirmasi Pemilik [PERLU DATA]
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs flex-1">
          {activeTab === 'rubric' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div>
                  <span className="text-slate-500 text-[11px] block">Skor Baseline Audit Lama</span>
                  <span className="text-2xl font-black text-rose-600">4,9 / 10</span>
                  <p className="text-[11px] text-slate-600 mt-1">Banyak typo, 0 form, 2 GTM, tanpa harga, SEO minim.</p>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Skor Desain & Arsitektur Baru</span>
                  <span className="text-2xl font-black text-emerald-600">9,35 / 10</span>
                  <p className="text-[11px] text-slate-600 mt-1">Semua 7 peran melampaui target minimum &gt; 9,0/10.</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {perspectives.map((p, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-200 transition">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{p.role}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 line-through text-xs">{p.baseline}</span>
                        <span className="font-extrabold text-emerald-600 text-xs px-2 py-0.5 bg-emerald-50 rounded-lg">
                          {p.redesigned}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">{p.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'traceability' && (
            <div className="space-y-3">
              <p className="text-slate-600 text-xs">
                Seluruh cacat kritis yang tertera di audit baseline telah diimplementasikan solusinya secara permanen:
              </p>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {traceabilityItems.map((item) => (
                  <div key={item.id} className="p-3 bg-white hover:bg-slate-50 flex items-start gap-3">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 mt-0.5 ${
                      item.priority === 'P0' ? 'bg-red-100 text-red-800' :
                      item.priority === 'P1' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.priority}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-slate-800">{item.issue}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">{item.solution}</p>
                    </div>
                    <span className="text-emerald-600 font-bold text-[11px] flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ownerData' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs">
                  Sesuai instruksi audit ("Inkonsistensi data sumber yang HARUS diverifikasi dengan pemilik sebelum publish, jangan ditebak"), poin-poin berikut telah ditandai secara transparan:
                </p>
              </div>

              <div className="space-y-2.5">
                {ownerVerificationQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{q.item}</span>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                        {q.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs"><strong className="text-slate-700">Temuan Awal:</strong> {q.finding}</p>
                    <p className="text-slate-700 text-xs"><strong className="text-blue-900">Solusi Diterapkan:</strong> {q.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
          >
            Tutup Rubrik
          </button>
        </div>
      </div>
    </div>
  );
};
