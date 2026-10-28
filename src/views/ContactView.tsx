import React, { useState } from 'react';
import { ViewType } from '../types';
import { VERIFIED_CONTACTS } from '../data/erpData';
import { analytics } from '../utils/analytics';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenDemo: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Konsultasi Implementasi ERP',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.phone) return;
    analytics.track('form_submit', {
      form_name: 'contact_page_inquiry',
      ...inquiry,
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-900">Beranda</button>
          <span>/</span>
          <span className="text-slate-900 font-bold">Kontak & Lokasi Kantor</span>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Hubungi Konsultan Kami</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
          Kantor Resmi & Saluran Layanan SISCOM ERP
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
          Dapatkan pendampingan langsung dari tim konsultan berbasis di Jakarta. Tersedia layanan tatap muka maupun daring.
        </p>
      </section>

      {/* 2-Column: Contacts + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office & SLA Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-5">
              <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Informasi Kantor Pusat
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-xs">{VERIFIED_CONTACTS.companyName}</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">{VERIFIED_CONTACTS.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">WhatsApp & Hotline Sales (Resmi):</span>
                    <a 
                      href={`https://wa.me/6281299817515?text=${encodeURIComponent('Halo Tim SISCOM, saya ingin konsultasi ERP.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline text-sm"
                    >
                      {VERIFIED_CONTACTS.primarySalesPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Helpdesk & Dukungan Pelanggan MSC:</span>
                    <strong className="text-slate-900 text-sm">{VERIFIED_CONTACTS.secondarySupportPhone}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Jam Dukungan Operasional:</span>
                    <span className="text-slate-800 font-semibold">{VERIFIED_CONTACTS.supportHours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Email Resmi:</span>
                    <span className="text-slate-800">sales@siscom.co.id | support@siscom.co.id</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Table */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm space-y-3 text-xs">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] block">
                Target Waktu Tanggap (SLA Response)
              </span>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/70">
                  <span className="text-rose-400 font-semibold">Prioritas 1 (Sistem Berhenti / Kritis):</span>
                  <strong className="text-white font-mono">&lt; 30 Menit</strong>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/70">
                  <span className="text-amber-400 font-semibold">Prioritas 2 (Kendala Fitur Tertentu):</span>
                  <strong className="text-white font-mono">&lt; 2 Jam</strong>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/70">
                  <span className="text-slate-300 font-semibold">Prioritas 3 (Pertanyaan Alur / Format Cetak):</span>
                  <strong className="text-white font-mono">&lt; 4 Jam Kerja</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Pesan Anda Berhasil Terkirim</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Terima kasih, <strong>{inquiry.name}</strong>. Tim konsultan kami akan menghubungi WhatsApp <strong>{inquiry.phone}</strong> dalam maksimal 1 jam kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Kirimkan Pertanyaan atau Permintaan Proposal</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Satu formulir langsung terhubung ke sistem antrian CRM SISCOM.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nomor WhatsApp Aktif *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812XXXXXXXX"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Kerja</label>
                    <input
                      type="email"
                      placeholder="budi@perusahaan.co.id"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Subjek Permintaan</label>
                    <select
                      value={inquiry.subject}
                      onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="Konsultasi Implementasi ERP">Konsultasi Implementasi ERP</option>
                      <option value="Permintaan Demo 30 Menit">Permintaan Demo 30 Menit</option>
                      <option value="Tanya Paket Harga & Lisensi">Tanya Paket Harga & Lisensi</option>
                      <option value="Layanan MSC & Kontrak Dukungan">Layanan MSC & Kontrak Dukungan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Keterangan / Kebutuhan Bisnis Anda</label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan gambaran singkat industri Anda, jumlah pengguna, atau tantangan operasional utama saat ini..."
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-xs"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 transition flex items-center justify-center gap-2"
                  >
                    <span>Kirim Pesan ke Konsultan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="py-3 px-5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs"
                  >
                    Atur Jadwal Demo Langsung
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
