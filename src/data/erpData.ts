/**
 * SISCOM Enterprise ERP Master Dataset
 * Structured for AstroWind architecture and high-authority enterprise positioning
 */

export interface EnterpriseModule {
  id: string;
  name: string;
  category: string;
  badge?: string;
  tagline: string;
  summary: string;
  keyWorkflows: string[];
  operationalCapabilities: {
    title: string;
    description: string;
  }[];
  systemMetrics: {
    label: string;
    value: string;
  }[];
}

export interface EnterpriseFeature {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export const VERIFIED_CONTACTS = {
  companyName: 'PT. Shan Informasi Sistem',
  brandName: 'SISCOM ERP',
  foundingYear: 1994,
  primarySalesPhone: '0812-9981-7515',
  secondarySupportPhone: '0813-8133-3515',
  salesEmail: 'sales@siscom.co.id',
  supportEmail: 'support@siscom.co.id',
  officeAddress: 'Ruko Mangga Dua Square Blok F No. 18, Jl. Gunung Sahari Raya No. 1, Jakarta Utara 14420',
  supportStatement: 'Dedicated Enterprise Support & Responsive Technical Assistance',
  taxStatement: 'Dukungan Kepatuhan Perpajakan & Pelaporan Finansial Standar Industri Indonesia',
  dataCenterLocation: 'Tier 3/4 Data Center Jakarta, Indonesia (Kedaulatan Data UU PDP No. 27/2022)',
};

export const ENTERPRISE_MODULES: EnterpriseModule[] = [
  {
    id: 'kontraktor',
    name: 'Kontraktor & Konstruksi',
    category: 'Konstruksi & Engineering',
    badge: 'Spesialisasi Proyek',
    tagline: 'Kendali Ketat RAP, Pengadaan Material Site, & Opname Fisik Lapangan',
    summary: 'Mencegah pembengkakan anggaran proyek konstruksi melalui validasi otomatis kuota Rencana Anggaran Pelaksanaan (RAP) sebelum Purchase Order diterbitkan.',
    keyWorkflows: [
      'Penyusunan WBS & Analisa Harga Satuan (AHS) terintegrasi',
      'Penguncian Pagu RAP (Budget Locking) pada setiap Purchase Request',
      'Kurva S otomatis berbasis realisasi biaya dan progres fisik',
      'Verifikasi opname fisik subkontraktor sebelum penerbitan BAP',
      'Otomatisasi pemotongan PPh Final Pasal 4 Ayat 2 & retensi termin',
    ],
    operationalCapabilities: [
      {
        title: 'RAP Budget Locking',
        description: 'Sistem secara otomatis menolak PO yang melebihi pagu RAP tanpa otorisasi bertingkat dari Direksi.',
      },
      {
        title: 'Kurva S Real-Time',
        description: 'Menyandingkan kurva rencana waktu terhadap pengeluaran biaya aktual lapangan secara presisi.',
      },
      {
        title: 'Laba Rugi Per Proyek',
        description: 'Menyajikan neraca laba rugi komparatif untuk setiap proyek aktif hingga masa pemeliharaan selesai.',
      },
    ],
    systemMetrics: [
      { label: 'Akurasi Pengadaan', value: '100% Sesuai RAP' },
      { label: 'Rekonsiliasi Opname', value: 'Terverifikasi Fisik' },
    ],
  },
  {
    id: 'exhibition',
    name: 'Exhibition Contractor',
    category: 'Event & Pameran',
    badge: 'Industri Kreatif & Konstruksi Booth',
    tagline: 'Orkestrasi SPK Multi-Event, Workshop Material, & Sewa Booth Cepat',
    summary: 'Dirancang khusus untuk kontraktor pameran dan booth builder dengan siklus produksi kilat, monitoring bahan baku workshop, serta utilisasi aset sewa dekorasi.',
    keyWorkflows: [
      'Manajemen penawaran desain 3D & estimasi biaya RAB per event',
      'Penerbitan Surat Perintah Kerja (SPK) terpisah untuk workshop & tim loading',
      'Kontrol stok material dekorasi (kayu, rangka besi, akrilik, lampu, printing)',
      'Manajemen inventaris aset sewa (furniture, showcase, signage display)',
      'Konsolidasi biaya produksi terhadap invoice penagihan event organizer',
    ],
    operationalCapabilities: [
      {
        title: 'Multi-Event Tracking',
        description: 'Memantau kesiapan puluhan booth di berbagai venue pameran secara paralel dari satu dashboard terpusat.',
      },
      {
        title: 'Logistik Loading & Unloading',
        description: 'Pencatatan akurat barang keluar dari gudang workshop hingga penarikan kembali pasca event selesai.',
      },
      {
        title: 'Analisa Margin Event',
        description: 'Menghitung profitabilitas riil tiap booth pameran dengan memperhitungkan upah lembur dan bahan terpakai.',
      },
    ],
    systemMetrics: [
      { label: 'Visibilitas Aset Sewa', value: 'Real-Time' },
      { label: 'Kendali Scrap Material', value: 'Termonitor Penuh' },
    ],
  },
  {
    id: 'property',
    name: 'Property Management',
    category: 'Real Estate & Pengelolaan Gedung',
    badge: 'Apartemen & Komersial',
    tagline: 'Otomatisasi Billing Tenancy, Iuran Pengelolaan (IPL), & Perawatan Fasilitas',
    summary: 'Platform manajemen properti terpadu untuk gedung perkantoran, kawasan pergudangan, apartemen, dan pusat perbelanjaan komersial.',
    keyWorkflows: [
      'Master data unit properti, layout denah, dan status ketersediaan sewa',
      'Perjanjian sewa (tenancy contract) dengan jadwal pembayaran termin',
      'Perhitungan otomatis tagihan IPL, sinking fund, pemakaian listrik & air',
      'Portal mandiri tenant untuk pengajuan permohonan kerja & invoice',
      'Penerbitan work order otomatis untuk perawatan preventif lift, genset, & AC',
    ],
    operationalCapabilities: [
      {
        title: 'Otomatisasi Penagihan Massal',
        description: 'Menerbitkan ratusan invoice IPL dan utilitas bulanan kepada penyewa dalam hitungan detik.',
      },
      {
        title: 'Monitoring Meteran Air & Listrik',
        description: 'Pencatatan angka meteran unit via mobile app dengan rumus tarif bertingkat dan PPN terintegrasi.',
      },
      {
        title: 'Helpdesk Perawatan Fasilitas',
        description: 'Melacak tiket keluhan penghuni dari pembuatan surat izin kerja hingga penyelesaian teknisi gedung.',
      },
    ],
    systemMetrics: [
      { label: 'Efisiensi Siklus Billing', value: '95% Otomatis' },
      { label: 'Kepatuhan Penagihan', value: 'Audit-Ready' },
    ],
  },
  {
    id: 'hris',
    name: 'HRIS & Enterprise Payroll',
    category: 'Manajemen SDM & Finansial',
    badge: 'Kepatuhan Regulasi Tenaga Kerja',
    tagline: 'Otomatisasi PPh 21 Skema TER 2024, BPJS, & Portal Mandiri Karyawan',
    summary: 'Solusi pengelolaan sumber daya manusia skala menengah-besar dengan perhitungan pajak gaji terkini, absensi multi-lokasi, dan integrasi jurnal payroll.',
    keyWorkflows: [
      'Perhitungan PPh 21 TER (Tarif Efektif Rata-rata) Kategori A, B, C otomatis',
      'Kalkulasi BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) & BPJS Kesehatan',
      'Absensi mobile berbasis koordinat GPS, radius geofencing, & face recognition',
      'Employee Self-Service (ESS) untuk pengajuan cuti, lembur, dan slip gaji digital',
      'Jurnal otomatis biaya gaji per divisi/cabang ke General Ledger akuntansi',
    ],
    operationalCapabilities: [
      {
        title: 'Regulasi Pajak Gaji Terkini',
        description: 'Algoritma sistem selalu disesuaikan dengan PMK No. 168/2023 tanpa perlu modul tambahan.',
      },
      {
        title: 'Pengelolaan Shift Fleksibel',
        description: 'Mendukung jadwal kerja bergilir 24 jam untuk staf pabrik, perhotelan, retail, dan tenaga medis.',
      },
      {
        title: 'Keamanan Data Personalia',
        description: 'Data kompensasi dan rekam medis karyawan dilindungi enkripsi dengan hak akses terbatas tingkat direksi.',
      },
    ],
    systemMetrics: [
      { label: 'Kalkulasi Payroll', value: 'Zero Discrepancy' },
      { label: 'Kepatuhan Pajak & BPJS', value: 'Sesuai UU RI' },
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Branch POS',
    category: 'Perdagangan & Distribusi',
    badge: 'Toko Modern & Jaringan Cabang',
    tagline: 'Kasir Cepat Anti-Macet, Multi-Satuan Bertingkat, & Sinkronisasi Offline',
    summary: 'Sistem Point of Sale dan inventaris modern untuk jaringan toko retail, apotek, minimarket, dan toko bahan bangunan dengan ratusan ribu SKU.',
    keyWorkflows: [
      'Antarmuka kasir cepat dengan pemindaian barcode & pembayaran digital QRIS',
      'Mode transaksi offline-online: kasir tetap aktif saat internet padam',
      'Manajemen persediaan multi-satuan bertingkat (dus, pack, botol, pcs)',
      'Pengawasan First-Expired-First-Out (FEFO) dan peringatan barang mendekati kadaluwarsa',
      'Sinkronisasi otomatis stok cabang ke gudang pusat dan integrasi e-Faktur pajak',
    ],
    operationalCapabilities: [
      {
        title: 'Keandalan Offline Teruji',
        description: 'Menjamin kontinuitas operasional kasir tanpa hambatan koneksi internet lokal.',
      },
      {
        title: 'Promosi & Loyalty Terpusat',
        description: 'Mengatur skema diskon bundling, poin member, dan voucher belanja dari kantor pusat untuk seluruh cabang.',
      },
      {
        title: 'Stock Opname Cepat',
        description: 'Pemeriksaan stok harian menggunakan pemindai portabel tanpa harus menutup jam operasional toko.',
      },
    ],
    systemMetrics: [
      { label: 'Ketahanan Operasional', value: 'Offline-Ready' },
      { label: 'Sinkronisasi Multi-Cabang', value: 'Sub-Detik' },
    ],
  },
  {
    id: 'manufaktur',
    name: 'Manufaktur & Fabrikasi',
    category: 'Produksi & Industri Pengolahan',
    badge: 'HPP Presisi Per Batch',
    tagline: 'Bill of Materials Dinamis, Penjadwalan SPK, & Kalkulasi HPP Aktual',
    summary: 'Mengintegrasikan lantai pabrik dengan manajemen persediaan bahan baku, melacak scrap, dan menghitung Harga Pokok Penjualan (HPP) riil hingga ke level komponen.',
    keyWorkflows: [
      'Penyusunan Bill of Materials (BOM) multi-level beserta instruksi kerja mesin',
      'Penerbitan Surat Perintah Kerja (SPK) dan pemantauan Work In Progress (WIP)',
      'Alokasi biaya bahan baku, tenaga kerja langsung, dan overhead pabrik (BOP)',
      'Perhitungan HPP aktual per nomor batch produksi secara otomatis',
      'Pencatatan sisa bahan (scrap) dan pengawasan standar mutu (Quality Control)',
    ],
    operationalCapabilities: [
      {
        title: 'Presisi HPP Real-Time',
        description: 'Menghilangkan estimasi manual akhir bulan dengan kalkulasi biaya riil otomatis saat barang selesai dirakit.',
      },
      {
        title: 'Perencanaan Kebutuhan Bahan (MRP)',
        description: 'Menghitung kebutuhan pembelian bahan baku secara akurat berdasarkan pesanan penjualan yang masuk.',
      },
      {
        title: 'Efisiensi Lini Perakitan',
        description: 'Mengidentifikasi bottleneck pada stasiun kerja untuk menjaga utilitas mesin produksi tetap optimal.',
      },
    ],
    systemMetrics: [
      { label: 'Kalkulasi Biaya Produksi', value: 'Batch-Level Precision' },
      { label: 'Pengawasan Bahan Sisa', value: 'Terdokumentasi Penuh' },
    ],
  },
  {
    id: 'rental',
    name: 'Rental Aset & Alat Berat',
    category: 'Penyewaan & Utilitas Aset',
    badge: 'Armada & Peralatan Khusus',
    tagline: 'Penjadwalan Utilisasi Aset, Pengawasan Jam Kerja, & Log Servis Berkala',
    summary: 'Solusi terintegrasi untuk bisnis penyewaan alat berat (crane, excavator, genset), armada logistik, dan peralatan konstruksi dengan kalkulasi biaya operasi.',
    keyWorkflows: [
      'Kalender reservasi aset untuk mencegah bentrok jadwal pengiriman',
      'Pencatatan Surat Perintah Pengiriman (SPP) dan Berita Acara Serah Terima Aset',
      'Monitoring jam kerja mesin (Hour Meter) dan konsumsi bahan bakar lapangan',
      'Jadwal pemeliharaan preventif, penggantian suku cadang, dan uji kelayakan K3',
      'Penagihan sewa otomatis berdasarkan durasi hari, minggu, jam kerja, atau kontrak proyek',
    ],
    operationalCapabilities: [
      {
        title: 'Visibilitas Utilisasi Armada',
        description: 'Mengetahui posisi dan status operasional seluruh unit aset di berbagai lokasi proyek secara seketika.',
      },
      {
        title: 'Perpanjangan Masa Pakai Aset',
        description: 'Pengingat servis berkala otomatis untuk meminimalkan risiko kerusakan mendadak di lapangan.',
      },
      {
        title: 'Analisa Profitabilitas Aset',
        description: 'Membandingkan total pendapatan sewa terhadap biaya bahan bakar dan perbaikan unit selama siklus hidup aset.',
      },
    ],
    systemMetrics: [
      { label: 'Efisiensi Utilisasi Unit', value: 'Termonitor Maksimal' },
      { label: 'Ketertiban Perawatan', value: 'Preventif Terjadwal' },
    ],
  },
];

export const ENTERPRISE_CAPABILITIES: EnterpriseFeature[] = [
  {
    id: 'single-database',
    title: 'Arsitektur Single Source of Truth',
    description: 'Seluruh divisi operasional, logistik, proyek, dan keuangan beroperasi pada satu basis data relasional terpadu yang konsisten dan patuh terhadap standar ACID.',
    highlight: 'Zero Data Silo',
  },
  {
    id: 'audit-trail',
    title: 'Keamanan Granular & Audit Trail Abadi',
    description: 'Hak akses didefinisikan secara spesifik per peran pengguna. Setiap penambahan, pengubahan, atau penghapusan data terekam lengkap beserta identitas pengguna dan cap waktu.',
    highlight: 'Enterprise Governance',
  },
  {
    id: 'deployment-choice',
    title: 'Fleksibilitas Private Cloud & Sovereign On-Premise',
    description: 'Pilihan penempatan sistem sesuai mandat keamanan korporat Anda: Private Cloud terkelola di Data Center Tier 3 Indonesia atau instalasi mandiri di server lokal milik sendiri.',
    highlight: 'Data Sovereignty',
  },
  {
    id: 'tax-native',
    title: 'Dukungan Kepatuhan Perpajakan & Standar SAK Indonesia',
    description: 'Didesain secara khusus untuk regulasi fiskal Indonesia: e-Faktur terintegrasi, PPh 21 TER, PPh 23, PPh Final Konstruksi, serta format pelaporan keuangan Standar Akuntansi Keuangan.',
    highlight: '100% SAK Compliant',
  },
  {
    id: 'multi-branch',
    title: 'Konsolidasi Finansial Multi-Entitas & Multi-Cabang',
    description: 'Menghubungkan puluhan cabang, gudang, dan entitas anak perusahaan ke dalam satu laporan laba rugi konsolidasi secara instan tanpa kompilasi manual.',
    highlight: 'Instan Konsolidasi',
  },
  {
    id: 'support-tier',
    title: 'Dedicated Enterprise Support & Responsive Assistance',
    description: 'Didukung langsung oleh tim rekayasa perangkat lunak dan konsultan bisnis lokal berbasis di Jakarta dengan jaminan Service Level Agreement (SLA) respons terukur.',
    highlight: 'Local Expert Advisory',
  },
];

export const IMPLEMENTATION_STEPS = [
  {
    number: '01',
    title: 'Discovery & Business Process Mapping',
    description: 'Audit mendalam terhadap alur operasional, struktur hierarki persetujuan, dan tata kelola dokumen bisnis Anda untuk merumuskan dokumen Scope of Work (SOW) yang presisi.',
    duration: 'Minggu 1',
  },
  {
    number: '02',
    title: 'System Configuration & Data Migration',
    description: 'Penyusunan basis data, konfigurasi hak akses pengguna, integrasi bagan akun (COA), serta pembersihan dan migrasi master data saldo awal secara terstruktur.',
    duration: 'Minggu 2 - 3',
  },
  {
    number: '03',
    title: 'Role-Specific Hands-on Enablement',
    description: 'Pelatihan intensif berbasis studi kasus riil untuk masing-masing peran staf: tim lapangan, gudang, estimator, human resource, hingga akuntan kantor pusat.',
    duration: 'Minggu 4',
  },
  {
    number: '04',
    title: 'Supervised Go-Live & Formal Sign-Off',
    description: 'Pemberlakuan sistem aktif untuk pencatatan transaksi riil perusahaan yang didampingi secara langsung di lokasi oleh konsultan senior hingga terbit Berita Acara (BAST).',
    duration: 'Minggu 5 - 6',
  },
  {
    number: '05',
    title: 'Hypercare Warranty & Ongoing Strategic Partnership',
    description: 'Masa pengawasan intensif pasca go-live guna memastikan seluruh staf lancar dan laporan keuangan konsolidasi pertama dapat ditutup secara tepat waktu tanpa kendala.',
    duration: 'Berkelanjutan',
  },
];

export const ENTERPRISE_FAQS = [
  {
    question: 'Mengapa SISCOM ERP lebih unggul untuk industri di Indonesia dibandingkan Odoo atau SAP?',
    answer: 'SISCOM dibangun dari bawah ke atas dengan pemahaman mendalam terhadap regulasi bisnis di Indonesia. Kepatuhan perpajakan (PPh 21 skema TER 2024, e-Faktur, PPh Final Jasa Konstruksi), format dokumen operasional, serta alur bisnis seperti RAP proyek kontraktor atau booth pameran telah tersedia secara bawaan (native). Anda tidak dibebani biaya kustomisasi tinggi atau ketergantungan pada modul pihak ketiga yang rentan rusak saat regulasi pemerintah berganti.',
  },
  {
    question: 'Bagaimana penanganan keamanan data dan kepatuhan terhadap UU Perlindungan Data Pribadi (UU PDP)?',
    answer: 'Infrastruktur cloud SISCOM berlokasi secara fisik di Tier 3/4 Data Center Jakarta, menjamin kedaulatan data di wilayah yurisdiksi Indonesia. Seluruh transmisi data dilindungi protokol TLS 1.3 dengan enkripsi AES-256 pada media penyimpanan. Sistem dilengkapi pencatatan audit trail menyeluruh dan kepemilikan data seutuhnya tetap berada di tangan perusahaan Anda dengan hak ekspor penuh.',
  },
  {
    question: 'Apakah SISCOM ERP dapat dipasang pada server milik perusahaan kami sendiri (On-Premise)?',
    answer: 'Ya. SISCOM mendukung model penempatan sistem yang sepenuhnya fleksibel: Dedicated Private Cloud terkelola atau Sovereign On-Premise di pusat data milik gedung kantor Anda. Model On-Premise memberikan kendali fisik mutlak dan sangat ideal bagi entitas yang memiliki protokol kerahasiaan ketat atau lokasi cabang dengan keterbatasan internet.',
  },
  {
    question: 'Bagaimana pendekatan implementasi SISCOM untuk mencegah risiko kegagalan adopsi sistem oleh staf?',
    answer: 'Kegagalan implementasi umumnya bukan karena software, melainkan minimnya pendampingan manusia. SISCOM menerapkan metodologi implementasi 5-tahap teruji di mana konsultan senior kami hadir langsung mendampingi tim Anda dari pemetaan alur, migrasi master data, simulasi transaksi, hingga masa hypercare 30 hari pasca Go Live sampai terbit Berita Acara Serah Terima resmi.',
  },
  {
    question: 'Bagaimana dukungan teknis diberikan setelah sistem beroperasi aktif?',
    answer: 'Kami menyediakan Dedicated Enterprise Support & Responsive Technical Assistance yang dikelola langsung oleh tim spesialis lokal di Jakarta. Klien korporat mendapatkan kanal komunikasi terdedikasi dengan komitmen Service Level Agreement (SLA) waktu tanggap berjenjang, pendampingan saat terjadi pergantian staf, dan pembaruan regulasi perpajakan berkala.',
  },
  {
    question: 'Berapa lama rata-rata durasi waktu dari tahap kick-off hingga Go Live resmi?',
    answer: 'Durasi implementasi bervariasi bergantung pada skala entitas dan kompleksitas modul: 2 hingga 4 minggu untuk retail modern dan manajemen properti; 4 hingga 8 minggu untuk kontraktor proyek dan pabrik manufaktur. Setiap tahapan diatur secara ketat dalam Project Charter yang disepakati bersama di awal kerja sama.',
  },
];
