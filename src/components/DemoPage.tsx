import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall, Calendar, Building, Send } from 'lucide-react';
import { PRODUCT_SUITES } from '../content/products';
import { COMPANY_DATA } from '../content/company';

interface DemoPageProps {
  onNavigate: (route: string) => void;
}

export function DemoPage({ onNavigate }: DemoPageProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    city: '',
    selectedSuites: [] as string[],
    userCount: '10-25',
    deploymentPreference: 'cloud',
    preferredMeetingFormat: 'online',
    preferredDate: '',
    operationalNotes: '',
  });

  // Restore saved session if any
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('siscom_demo_request');
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // storage unavailable
    }
  }, []);

  const handleChange = (field: string, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    try {
      sessionStorage.setItem('siscom_demo_request', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const toggleSuite = (slug: string) => {
    const exists = formData.selectedSuites.includes(slug);
    const updated = exists
      ? formData.selectedSuites.filter((s) => s !== slug)
      : [...formData.selectedSuites, slug];
    handleChange('selectedSuites', updated);
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.companyName || !formData.phoneNumber) {
        alert('Mohon lengkapi nama lengkap, nama perusahaan, dan nomor kontak.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setIsSubmitted(true);
    }
    window.scrollTo(0, 0);
  };

  const generateWhatsAppLink = () => {
    const suitesText = formData.selectedSuites.length > 0 ? formData.selectedSuites.join(', ') : 'Konsultasi Umum';
    const text = `Halo Tim Sales SISCOM, saya ingin menjadwalkan demo sistem ERP.\n\n*Nama:* ${formData.fullName}\n*Jabatan:* ${formData.jobTitle || '-'}\n*Perusahaan:* ${formData.companyName}\n*Kota:* ${formData.city || '-'}\n*No. HP:* ${formData.phoneNumber}\n*Modul:* ${suitesText}\n*Kebutuhan User:* ${formData.userCount} user\n*Format Sesi:* ${formData.preferredMeetingFormat}\n*Tanggal:* ${formData.preferredDate || 'Segera'}`;
    return `https://wa.me/62${COMPANY_DATA.whatsappPrimary.replace(/[-+ ]/g, '').replace(/^0/, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-12 bg-[#FAFAF7] dark:bg-[#080E1E] min-h-screen transition-colors">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        {isSubmitted ? (
          <div className="bg-white dark:bg-[#111D38] p-8 sm:p-10 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Permohonan jadwal demo berhasil tersimpan.
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                Konsultan implementasi PT Shan Informasi Sistem akan menghubungi Anda via WhatsApp atau telepon dalam 1 hari kerja untuk mengonfirmasi agenda presentasi.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg text-left text-xs font-mono border border-slate-200 dark:border-slate-800 space-y-1.5 max-w-md mx-auto">
              <div><span className="text-slate-400">Perusahaan:</span> {formData.companyName}</div>
              <div><span className="text-slate-400">Penanggung Jawab:</span> {formData.fullName} ({formData.jobTitle || 'Manajemen'})</div>
              <div><span className="text-slate-400">Kontak:</span> {formData.phoneNumber}</div>
              <div><span className="text-slate-400">Format:</span> {formData.preferredMeetingFormat === 'online' ? 'Online (Zoom/Meet)' : 'Tatap Muka di Kantor'}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Send className="w-4 h-4" />
                Kirim ringkasan via WhatsApp ke Tim Sales
              </a>
              <button
                onClick={() => onNavigate('/')}
                className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#111D38] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            {/* Header & Steps Indicator */}
            <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Formulir Konsultasi B2B
                </span>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Jadwalkan demo sistem SISCOM ERP
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Presentasi disesuaikan dengan contoh alur kerja industri Anda tanpa biaya komitmen.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div
                  className={`h-1.5 rounded-full ${
                    step >= 1 ? 'bg-[#0B2447] dark:bg-amber-400' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
                <div
                  className={`h-1.5 rounded-full ${
                    step >= 2 ? 'bg-[#0B2447] dark:bg-amber-400' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
                <div
                  className={`h-1.5 rounded-full ${
                    step === 3 ? 'bg-[#0B2447] dark:bg-amber-400' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              </div>

              <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className={step === 1 ? 'font-bold text-[#0B2447] dark:text-white' : ''}>
                  1. Profil Perusahaan
                </span>
                <span className={step === 2 ? 'font-bold text-[#0B2447] dark:text-white' : ''}>
                  2. Kebutuhan Modul
                </span>
                <span className={step === 3 ? 'font-bold text-[#0B2447] dark:text-white' : ''}>
                  3. Format Pertemuan
                </span>
              </div>
            </div>

            {/* Form Steps Body */}
            <form onSubmit={handleNext} className="p-6 sm:p-8 space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="Contoh: Hendra Wijaya"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Jabatan / Posisi
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => handleChange('jobTitle', e.target.value)}
                        placeholder="Contoh: Direktur / CFO / Manajer Operasional"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Nama Perusahaan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Contoh: PT Bangun Persada Nusantara"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Kota Domisili Kantor
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        placeholder="Contoh: Jakarta Barat / Surabaya / Cikarang"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Nomor WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                        placeholder="Contoh: 081288991122"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Email Kerja
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => handleChange('workEmail', e.target.value)}
                        placeholder="nama@perusahaan.co.id"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447] dark:focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      Pilih Modul yang Ingin Dieksplorasi (Bisa lebih dari satu):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PRODUCT_SUITES.map((prod) => {
                        const isChecked = formData.selectedSuites.includes(prod.slug);
                        return (
                          <div
                            key={prod.slug}
                            onClick={() => toggleSuite(prod.slug)}
                            className={`p-3 rounded-lg border cursor-pointer text-xs transition-colors flex items-start gap-2.5 ${
                              isChecked
                                ? 'bg-slate-100 dark:bg-slate-800 border-[#0B2447] dark:border-amber-400 text-slate-900 dark:text-white'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              className="mt-0.5 rounded text-[#0B2447]"
                            />
                            <div>
                              <span className="font-bold block">{prod.name}</span>
                              <span className="text-[11px] text-slate-500">{prod.category}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Perkiraan Pengguna Sistem (Users)
                      </label>
                      <select
                        value={formData.userCount}
                        onChange={(e) => handleChange('userCount', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      >
                        <option value="1-5">1 – 5 Lisensi Pengguna</option>
                        <option value="6-15">6 – 15 Lisensi Pengguna</option>
                        <option value="16-50">16 – 50 Lisensi Pengguna</option>
                        <option value="50+">&gt; 50 Lisensi Pengguna (Multi-cabang)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Pilihan Skema Hosting
                      </label>
                      <select
                        value={formData.deploymentPreference}
                        onChange={(e) => handleChange('deploymentPreference', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      >
                        <option value="cloud">Private Cloud Indonesia (Tier 3/4)</option>
                        <option value="onpremise">On-Premise (Server Lokal Kantor)</option>
                        <option value="discuss">Belum Pasti (Butuh Saran Konsultan)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Format Sesi Presentasi
                      </label>
                      <select
                        value={formData.preferredMeetingFormat}
                        onChange={(e) => handleChange('preferredMeetingFormat', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      >
                        <option value="online">Online Video Call (Google Meet / Zoom)</option>
                        <option value="offline-client">Tatap Muka di Kantor Perusahaan Anda</option>
                        <option value="offline-siscom">Kunjungan ke Kantor SISCOM Jakarta Barat</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Preferensi Waktu Sesi
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Catatan Masalah Operasional yang Ingin Diselesaikan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.operationalNotes}
                      onChange={(e) => handleChange('operationalNotes', e.target.value)}
                      placeholder="Contoh: Kami mengalami kesulitan mengontrol pembelian material proyek di luar RAP, dan butuh integrasi ke e-Faktur PPN."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#0B2447]"
                    />
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as any)}
                    className="px-4 py-2.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                  >
                    Langkah Sebelumnya
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#0B2447] hover:bg-[#071930] text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 transition-colors shadow-xs"
                >
                  {step === 3 ? 'Kirim Permohonan Demo' : 'Lanjutkan Langkah Berikutnya'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
