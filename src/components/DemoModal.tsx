import React, { useState } from 'react';
import { DemoFormData, LeadScoreResult } from '../types';
import { scoreInboundLead, generateWhatsAppLink } from '../utils/leadScorer';
import { analytics } from '../utils/analytics';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    workEmail: '',
    whatsapp: '',
    companyName: '',
    industry: prefilledProduct?.includes('Kontraktor') ? 'Kontraktor & Konstruksi' : 'Distributor & FMCG',
    companySize: '21-50',
    primaryModules: prefilledProduct ? [prefilledProduct] : ['Akuntansi & Keuangan', 'Persediaan Stok'],
    currentSystem: 'Excel / Spreadsheet',
    preferredDeployment: 'cloud',
    preferredDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [scoreResult, setScoreResult] = useState<LeadScoreResult | null>(null);

  if (!isOpen) return null;

  const handleModuleToggle = (module: string) => {
    setFormData((prev) => {
      const exists = prev.primaryModules.includes(module);
      return {
        ...prev,
        primaryModules: exists
          ? prev.primaryModules.filter((m) => m !== module)
          : [...prev.primaryModules, module],
      };
    });
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.industry) errs.industry = 'Silakan pilih industri bisnis Anda.';
    if (!formData.companySize) errs.companySize = 'Pilih rentang jumlah staf.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (formData.primaryModules.length === 0) {
      errs.primaryModules = 'Pilih minimal satu modul prioritas.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nama lengkap wajib diisi.';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errs.workEmail = 'Email kerja valid wajib diisi.';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 9) {
      errs.whatsapp = 'Nomor WhatsApp valid wajib diisi.';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Nama perusahaan wajib diisi.';
    if (!formData.preferredDate) errs.preferredDate = 'Pilih preferensi tanggal demo.';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        analytics.track('form_step_complete', { step: 1, industry: formData.industry });
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        analytics.track('form_step_complete', { step: 2, modules: formData.primaryModules });
        setStep(3);
      }
    } else if (step === 3) {
      if (validateStep3()) {
        const leadScore = scoreInboundLead(formData);
        setScoreResult(leadScore);
        
        analytics.track('form_submit', {
          form_name: 'demo_booking_3step',
          grade: leadScore.grade,
          score: leadScore.score,
          industry: formData.industry,
          company_size: formData.companySize,
        });
        analytics.track('demo_booked', {
          company: formData.companyName,
          lead_score: leadScore.score,
        });

        setStep(4);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 px-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Jadwal Demonstrasi Khusus</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] text-slate-300 font-mono">
                {step < 4 ? `Langkah ${step} dari 3` : 'Konfirmasi Berhasil'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1">
              {step === 1 && 'Pilih Industri & Skala Usaha Anda'}
              {step === 2 && 'Pilih Modul & Tantangan Utama'}
              {step === 3 && 'Informasi Kontak & Jadwal Demo'}
              {step === 4 && 'Jadwal Demo Anda Berhasil Diterima'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Tutup form demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-slate-100 h-1.5 flex">
            <div
              className="bg-orange-600 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Industri Bisnis Perusahaan Anda <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  <option value="Kontraktor & Konstruksi">Kontraktor & Konstruksi (Sipil, MEP, Interior)</option>
                  <option value="Distributor & FMCG">Distributor & FMCG (Multi-Gudang & Canvas)</option>
                  <option value="Manufaktur & Pabrik">Manufaktur & Pabrik (HPP, BOM, SPK)</option>
                  <option value="Retail & Toko Modern">Retail & Toko Modern (Kasir POS, Apotek, Bahan Bangunan)</option>
                  <option value="Kawasan Berikat">Kawasan Berikat (IT Inventory DJBC BC 2.3 & 4.0)</option>
                  <option value="Valas / Money Changer">Valas / Money Changer (KUPVA Laporan Bank Indonesia)</option>
                  <option value="Jasa & Logistik">Jasa, Workshop & Logistik</option>
                </select>
                {errors.industry && <p className="text-xs text-red-500 mt-1">{errors.industry}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Rentang Jumlah Karyawan / Pengguna <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['1-5 Karyawan', '6-20 Karyawan', '21-50 Karyawan', '51-200 Karyawan', '>200 Karyawan'].map((sz) => (
                    <button
                      type="button"
                      key={sz}
                      onClick={() => setFormData({ ...formData, companySize: sz.split(' ')[0] })}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                        formData.companySize === sz.split(' ')[0]
                          ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
                {errors.companySize && <p className="text-xs text-red-500 mt-1">{errors.companySize}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Preferensi Penempatan Sistem (Deployment)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredDeployment: 'cloud' })}
                    className={`p-3 rounded-xl border text-left transition ${
                      formData.preferredDeployment === 'cloud'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-bold text-xs block text-slate-900">Cloud Managed (Populer)</span>
                    <span className="text-[11px] text-slate-500 block">Server terkelola di Data Center Indonesia Tier 3</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredDeployment: 'on-premise' })}
                    className={`p-3 rounded-xl border text-left transition ${
                      formData.preferredDeployment === 'on-premise'
                        ? 'border-blue-600 bg-blue-50 text-blue-950 shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="font-bold text-xs block text-slate-900">On-Premise Server</span>
                    <span className="text-[11px] text-slate-500 block">Diinstal di server kantor/pabrik milik sendiri</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Pilih Modul yang Ingin Dilihat pada Sesi Demo <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-slate-500 mb-3">Pilih modul yang paling relevan dengan kebutuhan bisnis Anda.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'RAB & RAP Proyek Kontraktor',
                    'Akuntansi Finansial & Jurnal Otomatis',
                    'Multi Gudang & Persediaan Stok',
                    'Pembelian (Procurement & PO Approval)',
                    'Penjualan & Plafon Piutang Toko',
                    'Produksi, BOM & HPP Aktual Pabrik',
                    'HRIS, Absensi & Payroll PPh 21 TER',
                    'IT Inventory Bea Cukai / Valas BI',
                  ].map((mod) => (
                    <button
                      type="button"
                      key={mod}
                      onClick={() => handleModuleToggle(mod)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-medium flex items-center gap-2 transition ${
                        formData.primaryModules.includes(mod)
                          ? 'border-blue-600 bg-blue-50 text-blue-950 font-semibold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        formData.primaryModules.includes(mod) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400 bg-white'
                      }`}>
                        {formData.primaryModules.includes(mod) && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="flex-1">{mod}</span>
                    </button>
                  ))}
                </div>
                {errors.primaryModules && <p className="text-xs text-red-500 mt-1">{errors.primaryModules}</p>}
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1.5">
                  Sistem yang Saat Ini Digunakan
                </label>
                <select
                  value={formData.currentSystem}
                  onChange={(e) => setFormData({ ...formData, currentSystem: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none text-xs"
                >
                  <option value="Excel / Spreadsheet">Excel / Google Sheets Manual</option>
                  <option value="Software Akuntansi Sederhana (Accurate / Zahir / Jurnal)">Software Akuntansi Sederhana (Accurate / Zahir / Jurnal)</option>
                  <option value="ERP Lama (Odoo / SAP / Custom In-House)">ERP Lama (Odoo / SAP / Custom In-House)</option>
                  <option value="Belum Menggunakan Sistem">Belum Memiliki Sistem Terpadu</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 text-xs mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 text-xs mb-1">
                    Nama Perusahaan / Usaha <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: PT Bangun Mandiri"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  {errors.companyName && <p className="text-[11px] text-red-500 mt-0.5">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 text-xs mb-1">
                    Email Kerja (Corporate Preferred) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="budi@perusahaan.co.id"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  {errors.workEmail && <p className="text-[11px] text-red-500 mt-0.5">{errors.workEmail}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 text-xs mb-1">
                    Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="0812XXXXXXXX"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  {errors.whatsapp && <p className="text-[11px] text-red-500 mt-0.5">{errors.whatsapp}</p>}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 text-xs mb-1">
                  Preferensi Waktu Sesi Demo (30 Menit Online / Zoom) <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                {errors.preferredDate && <p className="text-[11px] text-red-500 mt-0.5">{errors.preferredDate}</p>}
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-blue-900 flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  <strong>SLA Komitmen Kami:</strong> Tim konsultan SISCOM akan menghubungi Anda via WhatsApp dalam <strong>maksimal 1 jam kerja</strong> untuk konfirmasi tautan video call dan materi demo.
                </span>
              </div>
            </div>
          )}

          {step === 4 && scoreResult && (
            <div className="space-y-4 py-2 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Jadwal Demonstrasi Dikonfirmasi!</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Terima kasih, <strong>{formData.fullName}</strong>. Data permintaan demo untuk <strong>{formData.companyName}</strong> telah masuk ke antrian prioritas konsultan kami.
                </p>
              </div>

              {/* Lead scoring badge & qualification status */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Prioritas Respon Sistem:</span>
                  <span className="font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px]">
                    Grade {scoreResult.grade} • {scoreResult.urgency}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Konsultan spesialis vertikal <strong>{formData.industry}</strong> kami akan menyiapkan skenario modul:
                  <div className="mt-1 flex flex-wrap gap-1">
                    {formData.primaryModules.map((m, idx) => (
                      <span key={idx} className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded text-[10px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={generateWhatsAppLink({
                    originPage: 'demo_modal_confirmed',
                    product: formData.industry,
                    clientName: formData.fullName,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Kirim Konfirmasi Cepat ke WA Sales</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 4 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 font-semibold text-xs flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <span className="text-[11px] text-slate-400">Privasi dijamin UU PDP No. 27/2022</span>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-600/20 flex items-center gap-2"
            >
              <span>{step === 3 ? 'Kirim Jadwal Demo' : 'Lanjutkan'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
