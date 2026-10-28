import { ClientStory } from './types';

export const CLIENT_STORIES: ClientStory[] = [
  {
    companyName: 'PT Mitra Pratama Mandiri',
    industry: 'Konstruksi & Infrastruktur Sipil',
    operationalScale: '45+ Proyek Aktif Lintas Provinsi',
    implementedModule: 'SIS Construction One',
    businessOutcome: 'Penguncian pagu RAP di sistem menghentikan pembengkakan biaya material lapangan dan menghasilkan kurva S otomatis per minggu.',
    permission: true,
    status: 'verified',
  },
  {
    companyName: 'PT Cipta Sarana Logistik',
    industry: 'Distributor Fast-Moving Consumer Goods (FMCG)',
    operationalScale: '6 Gudang Regional & 120 Armada',
    implementedModule: 'SIS Distribution Suite',
    businessOutcome: 'Pencegahan piutang macet dengan penguncian limit kredit otomatis outlet dan pelacakan batch kedaluwarsa FEFO.',
    permission: true,
    status: 'verified',
  },
  {
    companyName: 'PT Surya Kemasan Prima',
    industry: 'Manufaktur Kemasan & Plastik Fleksibel',
    operationalScale: '3 Lini Produksi 24 Jam',
    implementedModule: 'SIS Manufacturing Suite',
    businessOutcome: 'Kalkulasi HPP aktual berbasis Bill of Materials bertingkat memisahkan biaya bahan baku, jam mesin, dan sisa bahan scrap.',
    permission: true,
    status: 'verified',
  },
  {
    companyName: 'Perusahaan Ekspor Garmen Kawasan Berikat',
    industry: 'Kawasan Berikat & Tekstil Ekspor',
    operationalScale: 'Penerima Fasilitas KB Jawa Barat',
    implementedModule: 'SIS PusatBerikat',
    businessOutcome: 'Laporan pertanggungjawaban mutasi barang IT Inventory sesuai PER-02/BC/2019 siap audit oleh petugas Bea Cukai tanpa penyesuaian manual.',
    permission: false, // Flagged pending formal brand release, anonymized industry reference
    status: 'verified',
  },
  {
    companyName: 'PT Artha Valasindo Utama',
    industry: 'Pedagang Valuta Asing (KUPVA Bukan Bank)',
    operationalScale: '8 Gerai Penukaran Valas',
    implementedModule: 'SIS ForexSuite',
    businessOutcome: 'Pencatatan denominasi uang kertas asing dan laporan kepatuhan transaksi valuta asing siap unggah ke portal Bank Indonesia.',
    permission: true,
    status: 'verified',
  },
  {
    companyName: 'Jaringan Ritel Furnitur & Perlengkapan Rumah',
    industry: 'Retail Multi-Cabang',
    operationalScale: '24 Outlet & 1 Gudang Sentral',
    implementedModule: 'SIS SmartPOS & Distribution',
    businessOutcome: 'Kasir tetap memproses transaksi saat jaringan internet lokal terputus dan stok multi-satuan tersinkronisasi saat kembali online.',
    permission: false, // Flagged pending formal brand release, anonymized
    status: 'verified',
  },
];
