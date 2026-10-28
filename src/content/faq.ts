import { FaqItem } from './types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'arsitektur-deployment',
    category: 'Arsitektur & Infrastruktur',
    question: 'Apakah SISCOM ERP dapat dipasang di server lokal kantor (on-premise) atau cloud?',
    answer: 'SISCOM mendukung dua opsi deployment: On-Premise (server fisik di kantor atau fasilitas internal perusahaan) untuk kepatuhan tata kelola mandiri, dan Private Cloud (infrastruktur komputasi awan yang di-host di data center Indonesia tier 3/4) untuk fleksibilitas akses jarak jauh.',
    status: 'verified',
  },
  {
    id: 'kedaulatan-data',
    category: 'Keamanan & Kepatuhan',
    question: 'Di mana letak penyimpanan data perusahaan dan bagaimana kepatuhannya terhadap UU PDP?',
    answer: 'Seluruh basis data hosting privat ditempatkan di data center wilayah hukum Republik Indonesia (Jakarta), sesuai mandat Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022) dan Peraturan Pemerintah No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik.',
    status: 'verified',
  },
  {
    id: 'kepatuhan-pajak',
    category: 'Perpajakan & Regulasi',
    question: 'Bagaimana kepatuhan modul akuntansi SISCOM terhadap regulasi perpajakan terbaru di Indonesia?',
    answer: 'Modul akuntansi dan penggajian SISCOM mengikuti ketentuan resmi Direktorat Jenderal Pajak: skema PPh 21 Tarif Efektif Rata-rata (TER PP 58/2023), ekspor CSV e-Faktur PPN, pemotongan PPh Final Jasa Konstruksi Pasal 4(2), dan format standar Pernyataan Standar Akuntansi Keuangan (PSAK).',
    status: 'verified',
  },
  {
    id: 'migrasi-data',
    category: 'Implementasi & Layanan',
    question: 'Bagaimana prosedur migrasi data dari pembukuan spreadsheet Excel atau sistem lama?',
    answer: 'Tim konsultan SISCOM menyediakan template impor data master standar (bagan akun COA, saldo awal buku besar, daftar barang/satuan, rekanan supplier, dan data pelanggan). Data divalidasi dan diuji coba pada basis data sandbox sebelum cut-off operasional resmi.',
    status: 'verified',
  },
  {
    id: 'bea-cukai-per02',
    category: 'Kawasan Berikat',
    question: 'Apakah modul IT Inventory SISCOM PusatBerikat dapat diakses langsung oleh auditor Bea Cukai?',
    answer: 'Sesuai ketentuan PER-02/BC/2019, SISCOM PusatBerikat menyediakan hak akses khusus (read-only) untuk petugas pemeriksa Bea Cukai dengan tampilan 7 format laporan pertanggungjawaban mutasi barang pabean yang terkunci dari manipulasi manual.',
    status: 'verified',
  },
  {
    id: 'struktur-biaya',
    category: 'Investasi & Lisensi',
    question: 'Bagaimana struktur investasi lisensi dan biaya implementasi SISCOM ERP?',
    answer: 'Investasi dihitung secara transparan berdasarkan jumlah modul industri yang dipilih, jumlah lisensi pengguna aktif (concurrent/named users), serta lingkup pendampingan implementasi di lapangan. Rincian tertulis diberikan melalui proposal resmi setelah sesi asesmen alur kerja.',
    status: 'verified',
  },
  {
    id: 'pendampingan-training',
    category: 'Implementasi & Layanan',
    question: 'Apakah implementasi disertai pendampingan staf operasional dan training pengguna?',
    answer: 'Setiap paket implementasi mencakup sesi User Acceptance Testing (UAT), pelatihan staf per divisi operasional, pendampingan saat go-live, serta sesi evaluasi pasca-implementasi oleh konsultan teknis PT Shan Informasi Sistem.',
    status: 'verified',
  },
  {
    id: 'kustomisasi-spesifik',
    category: 'Teknis & Alur Kerja',
    question: 'Apakah modul SISCOM dapat disesuaikan dengan alur kerja internal perusahaan yang spesifik?',
    answer: 'Struktur kode dan formulir SISCOM dirancang modular. Parameter alur persetujuan bertingkat, format cetak dokumen operasional, dan formula biaya tambahan dapat dikonfigurasi sesuai Standard Operating Procedure (SOP) internal yang berlaku di perusahaan Anda.',
    status: 'verified',
  },
];
