import { CompanyInfo, VerificationStatus } from './types';

export const COMPANY_DATA: CompanyInfo = {
  legalName: 'PT. Shan Informasi Sistem',
  brandName: 'SISCOM ERP',
  foundingYear: 1994,
  establishedHistory: 'Didirikan pada tahun 1994 di Jakarta, PT. Shan Informasi Sistem telah mengembangkan perangkat lunak bisnis terintegrasi dan akuntansi untuk ragam industri di Indonesia.',
  headOffice: {
    address: 'City Resort Rukan Malibu Blok J No. 75-77 Mutiara Taman Palem, Cengkareng',
    city: 'Jakarta Barat',
    postalCode: '11730',
    country: 'Indonesia',
  },
  phones: ['+62 21 5694 5002', '+62 21 5694 5003'],
  whatsappPrimary: '0812-9981-7515',
  whatsappSupport: '0813-8133-3515',
  emails: {
    sales: 'sales@siscom.co.id',
    marketing: 'marketing@siscom.co.id',
    support: 'support@siscom.co.id',
  },
  bankAccounts: [
    {
      bank: 'Bank Central Asia (BCA)',
      accountNumber: '253-300-8888',
      accountHolder: 'PT Shan Informasi Sistem',
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '118-000-788-9999',
      accountHolder: 'PT Shan Informasi Sistem',
    },
  ],
  officialDomains: ['siscom.co.id', 'www.siscom.co.id'],
};

export interface TimelineMilestone {
  year: string;
  milestone: string;
  status: VerificationStatus;
}

export const COMPANY_TIMELINE: TimelineMilestone[] = [
  {
    year: '1994',
    milestone: 'Pendirian PT Shan Informasi Sistem di Jakarta, mengawali pengembangan sistem akuntansi desktop DOS dan Windows.',
    status: 'verified',
  },
  {
    year: '2004',
    milestone: 'Peluncuran modul terintegrasi untuk distributor multi-gudang dan kontrol serial number.',
    status: 'verified',
  },
  {
    year: '2012',
    milestone: 'Pengembangan SIS Construction One dengan perhitungan Rencana Anggaran Biaya (RAB) dan Rencana Anggaran Pelaksanaan (RAP).',
    status: 'verified',
  },
  {
    year: '2017',
    milestone: 'Integrasi sistem IT Inventory Kawasan Berikat sesuai Peraturan Direktur Jenderal Bea dan Cukai (PER-02/BC/2019).',
    status: 'verified',
  },
  {
    year: '2021',
    milestone: 'Implementasi arsitektur cloud hybrid dan API perbankan terverifikasi untuk ekosistem ERP dan POS.',
    status: 'verified',
  },
  {
    year: '2024',
    milestone: 'Pembaruan mesin kalkulasi PPh 21 skema Tarif Efektif Rata-rata (TER) PP No. 58/2023 dan integrasi e-Faktur terpusat.',
    status: 'verified',
  },
];
