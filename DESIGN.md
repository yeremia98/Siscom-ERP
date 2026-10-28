# SISCOM ERP Design System (DESIGN.md)
*Dokumen Master Standar Desain, Tipografi, Warna, dan Interaksi UI/UX*
*Versi: 2.0.0 (B2B SaaS Swiss & Minimalism)*

---

## 1. Filosofi & Prinsip Desain
1. **Kejelasan di Atas Ornamen**: Setiap piksel, garis pembatas, dan teks memiliki tujuan fungsional bisnis. Tidak ada gradien dekoratif ungu-oranye generik, blob animasi, atau efek glassmorphism yang mengaburkan data.
2. **Anti-AI Slop**:
   - Tanpa kata buzzword klise ("solusi terbaik", "inovatif", "revolusioner", "seamless", "powerful").
   - Tanpa emoji dan tanpa tanda seru (!).
   - Tanpa karakter maskot kartun/robot dengan balon bicara di landing page enterprise.
   - Tanpa counter statistik palsu animasi tanpa audit independen.
   - Sentence case untuk seluruh judul dan heading.
   - Bold hanya digunakan untuk label UI, nama modul, status dokumen, atau metrik kunci.
3. **Penyajian Data Berbasis Fakta**: Seluruh modul merefleksikan alur kerja akuntansi dan regulasi riil Indonesia (RAP, Kurva S, PPh 21 TER 2024, Bea Cukai BC 2.3, e-Faktur, Multi-satuan persediaan).

---

## 2. Palet Warna (Color System)

### 2.1 Netral Utama (Warm Neutrals & Foundations)
- **Background Utama (Light)**: `#FAFAF7` (Kertas hangat natural, mengurangi silau kontras tinggi)
- **Surface / Card Background (Light)**: `#FFFFFF`
- **Surface Muted / Alt Background**: `#F1F1EC`
- **Border Default**: `#E5E7EB` (Border tipis 1px presisi)
- **Border Strong**: `#D1D5DB`
- **Text Primary**: `#111827` (Slate 900 / Kehitaman rasio kontras 14:1)
- **Text Secondary**: `#4B5563` (Slate 600 / Rasio kontras 6.8:1)
- **Text Muted / Caption**: `#6B7280`

### 2.2 Brand & Aksi
- **Brand Navy Utama**: `#0B2447` (Navy korporat resmi SISCOM)
- **Brand Navy Deep**: `#071930`
- **Brand Navy Surface**: `#EBF2FA`
- **Primary Action (Light Mode)**: Solid Navy `#0B2447` dengan teks `#FFFFFF`
- **Dark Mode Background**: `#0B132B` / `#080E1E`
- **Dark Mode Surface**: `#111D38` / `#162344`
- **Dark Mode Accent Action**: Amber `#FFB020` dengan teks `#0B2447`

### 2.3 Aksen Fungsional per Vertikal Industri
Setiap suite industri memiliki token warna fungsional untuk badge, status indikator, dan visual chart:
- **Kontraktor & Konstruksi**: `#E8792B` (Orange Bata)
- **Distributor & Logistik**: `#C62828` (Merah Marun)
- **Manufaktur & Pabrikasi**: `#E3B617` (Kuning Industri)
- **Kawasan Berikat & Bea Cukai**: `#4B2FBF` (Indigo Bea Cukai)
- **Valuta Asing & Money Changer**: `#1B7F4B` (Hijau Finansial)
- **Retail & SmartPOS**: `#0E7C93` (Cyan Petrol)
- **HRIS & Payroll TER**: `#0B8F7B` (Teal Kepegawaian)

---

## 3. Tipografi (Typography Scale)

### 3.1 Font Family
- **Display & Heading**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
  - Weights: `600` (SemiBold), `700` (Bold)
  - Letter spacing: `-0.02em` (rapat, tegas khas Swiss modern)
  - Transformasi: *Sentence case* mutlak.
- **Body Text**: `'IBM Plex Sans', -apple-system, 'Segoe UI', Roboto, sans-serif`
  - Weights: `400` (Regular), `500` (Medium)
  - Line height: `1.6` hingga `1.65` untuk kenyamanan membaca dokumen B2B panjang.
- **Data, Nilai Finansial, dan Kode Akun**: `'IBM Plex Mono', 'JetBrains Mono', monospace`
  - Weights: `400`, `500`
  - Penerapan: Nomor akun COA, nomor dokumen BC 2.3, nominal rupiah, persentase deviasi RAP.

### 3.2 Hierarki Skala Tipografi
| Level | Font Size | Line Height | Tracking | Weight | Kasus Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | 44px – 56px | 1.15 | -0.025em | 700 | Headline utama hero |
| **Section H2** | 30px – 36px | 1.25 | -0.02em | 700 | Judul seksi halaman |
| **Card H3** | 20px – 22px | 1.35 | -0.01em | 600 | Judul modul bento / fitur |
| **Subhead H4** | 16px – 18px | 1.4 | 0 | 600 | Subjudul alur kerja & tab |
| **Body Large** | 18px | 1.6 | 0 | 400 | Paragraf pembuka / lead text |
| **Body Base** | 15px – 16px | 1.6 | 0 | 400 | Teks deskripsi modul & tabel |
| **Body Small** | 13px – 14px | 1.5 | 0 | 400/500 | Metadata, catatan kaki, badge |
| **Mono Data** | 13px – 14px | 1.4 | 0 | 500 | Angka neraca, RAP, BC docs |

---

## 4. Sistem Layout & Grid (Bento & Spacing)
- **Container Max-Width**: `1240px` (desktop standar) dengan padding horizontal `24px` (mobile: `16px`).
- **Bento Grid**:
  - Diterapkan secara ketat hanya pada blok modul vertikal.
  - Struktur 12-kolom: modul unggulan (6 atau 8 kolom), modul pendukung (4 atau 6 kolom).
  - Gap: `20px` konsisten.
  - Border radius: `12px` (subtle, tidak rounded bubble berlebih).
  - Background card: `#FFFFFF` di light mode dengan border `1px solid #E5E7EB`.
  - Tanpa bayangan mengambang berlebih: `shadow-xs` atau `shadow-sm` tipis.

---

## 5. Komponen Interaksi & Aksesibilitas (WCAG 2.1 AA)
1. **Navigasi Header**:
   - Maksimal 5 menu teks: `Produk`, `Industri`, `Layanan`, `Klien`, `Support`.
   - 1 Tombol Aksi Utama: `"Jadwalkan demo"`.
   - Logo resmi SIS circular dengan teks `SISCOM ERP`.
2. **State Interaktif**:
   - Focus ring: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2447]`.
   - Hover state: transisi warna latar `150ms ease-in-out` tanpa translasi skala melompat (*no jarring scale 1.05 transform*).
3. **Format Angka & Mata Uang**:
   - Pemisah ribuan titik (`Rp 1.500.000,00`).
   - Persentase dengan koma (`12,4%`).
4. **Alur Form & Funnel**:
   - Form multi-langkah dengan progress bar terukur (1/3, 2/3, 3/3).
   - Input field: label jelas di atas input, placeholder informatif, error message dengan teks merah presisi tanpa ikon emosional.
