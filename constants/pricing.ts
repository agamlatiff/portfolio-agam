import {
  // POS & Retail Icons
  Store, ShoppingCart, CreditCard, Receipt, Barcode, ShoppingBag,
  // Inventory & Warehouse Icons  
  Package, Warehouse, TruckIcon as Truck, ClipboardList, Archive,
  // Website & Development Icons
  Globe, Layout, Code2, Palette, Smartphone as MobileIcon, Monitor,
  // Booking & Calendar Icons
  Calendar, CalendarCheck, CalendarClock, Clock, UserCheck,
  // Business & Management Icons
  Building2, Users, UserCog, Briefcase, TrendingUp,
  // Tech & System Icons
  Database, Server, Zap, Activity, Network, Layers,
  // Marketing & Design Icons
  PenTool, Megaphone, Eye, MousePointer2, Search,
  // Travel & Location Icons
  Plane, MapPin, Map, Compass, Hotel,
  // Tools & Utilities Icons
  Settings, RefreshCw, Hammer, Wrench, CheckCircle2,
  // Premium & Special Icons
  Crown, Star, Sparkles, Rocket, Award
} from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular: boolean;
  cta: string;
  icon: any;
  // Detailed breakdown for the modal
  details: {
    feature: string;
    problem: string;
    solution: string;
    benefit: string;
  }[];
}

export const POS_PACKAGES: PricingPlan[] = [
  {
    id: 'pos-basic',
    name: 'Paket BASIC',
    price: 'Rp 4.500.000',
    originalPrice: 'Rp 6.000.000',
    description: 'Cocok untuk: UMKM kecil, kios, barbershop, kedai minuman.',
    features: [
      'Point of Sale (Kasir) dasar',
      'Manajemen Produk (CRUD)',
      'Kategori Produk',
      'Diskon per item / per transaksi',
      'Cetak Struk Thermal (USB/Bluetooth)',
      'Riwayat Transaksi',
      'Laporan Penjualan Harian',
      'Multi User (Admin + Kasir)',
      'Dashboard sederhana',
      'Backup & Restore data manual',
      'Revisi 2x',
      'Maintenance 15 hari',
      'Free Tutorial Video'
    ],
    isPopular: false,
    cta: 'Ambil Paket Basic',
    icon: CreditCard, // POS = Payment/Cashier
    details: [
      {
        feature: "Mencegah Kebocoran",
        problem: "Catatan manual/Excel rawan salah hitung, salah input, atau manipulasi.",
        solution: "Transaksi otomatis tercatat, transparan, dan tidak bisa diubah seenaknya.",
        benefit: "Keuangan lebih aman dan akurat."
      },
      {
        feature: "Kecepatan Layanan",
        problem: "Menghitung manual bikin antrean panjang saat jam ramai.",
        solution: "Tinggal klik produk, hitung otomatis, cetak struk instan.",
        benefit: "Layanan lebih cepat = pelanggan lebih puas."
      },
      {
        feature: "Hemat Biaya Operasional",
        problem: "Rekap laporan manual tiap malam makan waktu.",
        solution: "Rekap otomatis, laporan tinggal buka, gak perlu admin tambahan.",
        benefit: "Hemat waktu & biaya untuk jangka panjang."
      }
    ]
  },
  {
    id: 'pos-standard',
    name: 'Paket STANDARD',
    price: 'Rp 8.500.000',
    originalPrice: 'Rp 12.000.000',
    description: 'Cocok untuk: restoran, toko baju, toko kelontong, retail menengah.',
    features: [
      'Semua fitur BASIC',
      'Manajemen Stok / Inventory',
      'Notifikasi Stok Menipis',
      'Modifiers (extra topping, size)',
      'Multiple Payment (QRIS + Cash)',
      'Keamanan User (Role Detail)',
      'Laporan Lengkap (Laba Kotor)',
      'Struk Custom (Logo)',
      'Export Laporan (PDF/Excel)',
      'Dashboard Real-time',
      'Revisi 2x',
      'Maintenance 30 hari',
      'Free Tutorial Video'
    ],
    isPopular: true,
    cta: 'Ambil Paket Standard',
    icon: Receipt, // POS with inventory tracking
    details: [
      {
        feature: "Kontrol Stok Rapi",
        problem: "Barang hilang, habis telat reorder, atau menumpuk gak laku.",
        solution: "Notifikasi stok menipis, riwayat keluar/masuk, laporan barang terlaris.",
        benefit: "Stop kerugian stok & keputusan pembelian lebih tepat."
      },
      {
        feature: "Pantau Dari Mana Saja",
        problem: "Owner harus nongkrong di toko sepanjang hari.",
        solution: "Laporan omzet, performa kasir bisa dilihat dari HP/Laptop.",
        benefit: "Kebebasan waktu bagi owner bisnis."
      },
      {
        feature: "Keputusan Berbasis Data",
        problem: "Ambil keputusan cuma pakai perasaan.",
        solution: "Data tren penjualan, jam ramai, dan kategori terlaris tercatat otomatis.",
        benefit: "Bisnis tumbuh lebih cepat dan terukur."
      }
    ]
  },
  {
    id: 'pos-premium',
    name: 'Paket PREMIUM',
    price: 'Rp 14.900.000',
    originalPrice: 'Rp 20.000.000',
    description: 'Cocok untuk: restoran besar, chain store, minimarket, multi-device.',
    features: [
      'Semua fitur STANDARD',
      'Multi Cabang + Multi Kasir',
      'Multi Device (Mobile/Tablet/Laptop)',
      'Manajemen Supplier',
      'Purchase Order (PO) & Auto Refill',
      'Laporan COGS (HPP) Lengkap',
      'Manajemen Hak Akses Lanjutan',
      'Integrasi QRIS Gateway (Midtrans)',
      'Printer Dapur / Bar (Optional)',
      'Mode Offline (Auto Sync)',
      'Custom Fitur Ringan',
      'Revisi 2x & Maintenance 45 hari',
      'Free Tutorial Video'
    ],
    isPopular: false,
    cta: 'Ambil Paket Premium',
    icon: Store, // POS Pro = Full store system
    details: [
      {
        feature: "Siap Scale Up",
        problem: "Sistem manual amburadul saat nambah cabang/produk.",
        solution: "Support multi cabang, multi kasir, dan transfer stok antar cabang.",
        benefit: "Skalabilitas lebih gampang & profesional."
      },
      {
        feature: "Supply Chain",
        problem: "Ribet urus supplier dan restock.",
        solution: "Manajemen supplier, PO, dan Auto Stok Refill.",
        benefit: "Operasional gudang lebih efisien."
      },
      {
        feature: "Integrasi Payment",
        problem: "Pembayaran non-tunai tidak terverifikasi otomatis.",
        solution: "Integrasi QRIS Gateway (Midtrans/Xendit) untuk status lunas otomatis.",
        benefit: "Pembukuan keuangan lebih rapi."
      }
    ]
  }
];

export const QUEUE_PACKAGES: PricingPlan[] = [
  {
    id: 'queue-basic',
    name: 'BASIC QUEUE',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.000.000',
    description: 'Single Counter Queue. Antrian basic tapi rapi untuk UKM, Klinik Kecil, atau Service Center.',
    features: [
      'Sistem antrian sederhana (1 Layanan/Loket)',
      'Cetak nomor antrian (Thermal Bluetooth)',
      'Display antrian sederhana (Web Based)',
      'Panggilan nomor manual (Klik to Call)',
      'Dashboard Next/Hold/Recall',
      'Statistik Harian',
      'Mode Responsif (TV/Tablet)',
      'Branding warna sesuai bisnis',
      'Revisi 2x & Maintenance 15 Hari'
    ],
    isPopular: false,
    cta: 'Ambil Basic Queue',
    icon: ClipboardList, // Queue = List/Order management
    details: [
      {
        feature: "Hilangkan Penumpukan",
        problem: "Pelanggan numpuk di depan loket, terlihat tidak profesional.",
        solution: "Pelanggan ambil nomor, duduk santai, nomor berjalan otomatis.",
        benefit: "First impression bagus, ruangan tertib dan rapi."
      },
      {
        feature: "Kurangi Emosi Pelanggan",
        problem: "Diserobot, lupa urutan, salah panggil bikin pelanggan marah.",
        solution: "Sistem digital adil, teratur, dan transparan.",
        benefit: "Konflik berkurang, pelanggan lebih tenang."
      },
      {
        feature: "Efisien & Modern",
        problem: "Antrian manual, teriak panggil nama, minim kontak.",
        solution: "Tiket digital/thermal, panggilan sistem.",
        benefit: "Lebih higienis, aman, dan modern pasca-pandemi."
      }
    ]
  },
  {
    id: 'queue-standard',
    name: 'STANDARD QUEUE',
    price: 'Rp 5.900.000',
    originalPrice: 'Rp 8.500.000',
    description: 'Multi Service + Voice Call. Solusi ideal untuk Puskesmas, Bengkel, atau Kantor Pelayanan.',
    features: [
      'Semua fitur BASIC',
      'Multi Layanan (CS/Kasir/Obat)',
      'Multi Loket/Counter',
      'Voice Call Otomatis (Suara Google)',
      'Custom Prefix (A-001, B-001)',
      'Real-time Dashboard Display TV',
      'Statistik Mingguan/Bulanan',
      'Log Aktivitas Petugas',
      'Revisi 4x & Maintenance 30 Hari'
    ],
    isPopular: true,
    cta: 'Ambil Standard Queue',
    icon: Users, // Queue with multiple counters = Users
    details: [
      {
        feature: "Efisiensi Staff",
        problem: "Staf capek teriak panggil nomor, bingung urutan.",
        solution: "Panggilan suara otomatis, dashboard monitor antrian.",
        benefit: "Produktivitas naik, waktu pelayanan lebih singkat."
      },
      {
        feature: "Pengalaman Profesional",
        problem: "Bisnis terkesan berantakan dan manual.",
        solution: "Sistem antrian digital memberi kesan terpercaya dan 'corporate'.",
        benefit: "Bisnis kecil terlihat level menengah-premium."
      },
      {
        feature: "Data untuk Manajemen",
        problem: "Tidak tahu jam ramai atau layanan favorit.",
        solution: "Statistik kunjungan harian, layanan terbanyak, performa loket.",
        benefit: "Owner bisa hitung kebutuhan staf & jam operasional akurat."
      }
    ]
  },
  {
    id: 'queue-premium',
    name: 'PREMIUM QUEUE',
    price: 'Rp 9.500.000',
    originalPrice: 'Rp 14.000.000',
    description: 'Advanced Queue + Monitoring. Untuk RS, Bank, atau Instansi dengan kebutuhan kompleks.',
    features: [
      'Semua fitur STANDARD',
      'Manajemen Multi Cabang',
      'Tampilan Display Premium (Full Animasi)',
      'Custom Voice (Pria/Wanita)',
      'Auto Distribute ke Counter Tersedia',
      'Laporan Performa Petugas (KPI)',
      'Mode Offline Sync',
      'Penjadwalan Jam Layanan',
      'Revisi 6x & Maintenance 45 Hari'
    ],
    isPopular: false,
    cta: 'Konsultasi Premium',
    icon: Monitor, // Queue with display screen
    details: [
      {
        feature: "Kurangi Beban Admin",
        problem: "Salah panggil, tercampur layanan, antrian hilang.",
        solution: "Sistem otomatis mengatur distribusi antrian.",
        benefit: "Staff tenang, human error diminimalisir."
      },
      {
        feature: "Scale Up Ready",
        problem: "Bisnis berkembang punya banyak layanan/cabang.",
        solution: "Sistem siap multi-cabang dan multi-layanan.",
        benefit: "Aset jangka panjang yang siap berkembang."
      },
      {
        feature: "Monitoring Terpusat",
        problem: "Sulit pantau antrian di banyak cabang.",
        solution: "Monitoring center untuk melihat kepadatan antrian real-time.",
        benefit: "Kontrol penuh dari pusat."
      }
    ]
  }
];

export const ATTENDANCE_PACKAGES: PricingPlan[] = [
  {
    id: 'attendance-basic',
    name: 'BASIC ATTENDANCE',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.000.000',
    description: 'QR Attendance Starter. Solusi absen digital hemat untuk hilangkan titip absen.',
    features: [
      'Absensi QR Check-in & Check-out',
      'Rekap harian & bulanan otomatis',
      'Export CSV/Excel basic',
      'User role admin & staff',
      'Pengaturan jam kerja',
      'Dashboard sederhana',
      '2x revisi',
      'Maintenance 15 hari'
    ],
    isPopular: false,
    cta: 'Ambil Basic Presensi',
    icon: Clock, // Attendance Basic = Time tracking
    details: [
      {
        feature: "Hilangkan Kecurangan",
        problem: "Titip absen, jam dimundurin, data dihapus manual.",
        solution: "QR + Sistem Digital menghilangkan celah manipulasi.",
        benefit: "Data jauh lebih jujur dan akurat."
      },
      {
        feature: "Data Aman",
        problem: "Buku absen rusak, hilang, atau ketumpahan kopi.",
        solution: "Semua data tersimpan rapi di database cloud.",
        benefit: "Tidak ada risiko kehilangan data presensi."
      },
      {
        feature: "Hemat Admin",
        problem: "Satu admin khusus rekap presensi manual.",
        solution: "Proses rekap otomatis oleh sistem.",
        benefit: "Kurangi biaya admin atau alihkan ke tugas lain."
      }
    ]
  },
  {
    id: 'attendance-standard',
    name: 'STANDARD ATTENDANCE',
    price: 'Rp 6.000.000',
    originalPrice: 'Rp 8.500.000',
    description: 'Smart Attendance + GPS Lock. Paling laku untuk bisnis dengan tim mobile/lapangan.',
    features: [
      'Semua fitur BASIC',
      'GPS Lock (Anti absen luar area)',
      'Selfie Validation (Bukti foto)',
      'Multi Shift Support',
      'Sistem Cuti (Izin, Sakit, WFH)',
      'Peta Lokasi Absensi',
      'Notifikasi Telat / Pulang Cepat',
      'Dashboard Lengkap',
      '4x revisi & Maintenance 30 hari'
    ],
    isPopular: true,
    cta: 'Ambil Standard Presensi',
    icon: MapPin, // Attendance with location = GPS
    details: [
      {
        feature: "Monitoring Real-time",
        problem: "Owner tidak tahu siapa telat atau bolos tanpa tanya admin.",
        solution: "Dashboard real-time status kehadiran karyawan.",
        benefit: "Pantau kedisiplinan langsung dari HP."
      },
      {
        feature: "Rekap Gaji Cepat",
        problem: "Hitung telat, lembur, cuti makan waktu berhari-hari.",
        solution: "Rekap kehadiran otomatis terhubung ke data gaji.",
        benefit: "Hemat waktu rekap gaji tiap bulan."
      },
      {
        feature: "Bisnis Profesional",
        problem: "Karyawan santai karena pengawasan longgar.",
        solution: "Sistem ketat (GPS + Selfie) mendisiplinkan karyawan.",
        benefit: "Disiplin naik, produktivitas kerja meningkat."
      }
    ]
  },
  {
    id: 'attendance-premium',
    name: 'PREMIUM ATTENDANCE',
    price: 'Rp 9.500.000',
    originalPrice: 'Rp 14.000.000',
    description: 'Enterprise Performance. Untuk perusahaan multi-cabang dengan kebutuhan payroll otomatis.',
    features: [
      'Semua fitur STANDARD',
      'Multi Cabang Management',
      'Face Recognition (Webcam)',
      'GPS Akurasi Tinggi',
      'Payroll Auto (Hitung Jam Kerja)',
      'Performance Tracking',
      'Approval Cuti Berlevel',
      'Integrasi Sistem Lain (API)',
      '6x revisi & Maintenance 45 hari'
    ],
    isPopular: false,
    cta: 'Konsultasi Premium',
    icon: UserCog, // Attendance = User management
    details: [
      {
        feature: "Multi Cabang",
        problem: "Susah pantau pegawai di banyak cabang dengan manual.",
        solution: "Satu dashboard untuk semua cabang, data tidak tercampur.",
        benefit: "Owner kontrol penuh seluruh operasional cabang."
      },
      {
        feature: "Audit & HRD Rapi",
        problem: "Komplain gaji atau jam kerja, data berantakan.",
        solution: "Log aktivitas lengkap dan transparan.",
        benefit: "Mudah diaudit dan meminimalisir sengketa karyawan."
      },
      {
        feature: "Teknologi Canggih",
        problem: "Selfie masih bisa diakali (jarang terjadi tapi mungkin).",
        solution: "Face Recognition dan GPS High Accuracy.",
        benefit: "Keamanan data kehadiran level enterprise."
      }
    ]
  }
];

export const SERVICE_PRICING: Record<string, PricingPlan[]> = {
  'pos-system': POS_PACKAGES, // Added mapping for System Solution
  'landing-page': [
    {
      id: 'lp-basic',
      name: 'BASIC',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      description: 'Landing Page Cepat & Profesional. Solusi hemat untuk validasi bisnis baru.',
      features: [
        '1 Halaman Clean & Modern',
        'Gratis Domain .com + Hosting 6 bulan',
        'Mobile Friendly (Responsive)',
        'Copywriting Ringan (Judul + CTA)',
        'Form Kontak Sederhana',
        'Setup Email Bisnis',
        'Video Tutorial Edit Konten',
        '2x Revisi',
        'Garansi & Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Promo Basic',
      icon: MousePointer2, // Landing Page = Click/Conversion
      details: [
        {
          feature: "Kehilangan Pelanggan (Visibility)",
          problem: "Bisnis tanpa website = tidak terlihat online. Pelanggan lari ke kompetitor yang punya web.",
          solution: "Landing Page membuat bisnis Anda 'ada' dan mudah ditemukan 24 jam.",
          benefit: "Stop kehilangan pelanggan potensial setiap hari hanya karena tidak online."
        },
        {
          feature: "Terima Beres (All-in-One)",
          problem: "Pusing urus teknis seperti beli domain, hosting, dan install website.",
          solution: "Paket sudah termasuk Domain, Hosting Cepat 6 Bulan, & Setup. Tinggal terima jadi.",
          benefit: "Praktis. Tidak perlu pusing teknis, langsung fokus jualan."
        },
        {
          feature: "Trust Meningkat 3-5x",
          problem: "Calon pembeli ragu transfer karena bisnis terlihat kurang serius/kurang bonafit.",
          solution: "Website resmi memberikan kesan profesional dan kredibel secara instan.",
          benefit: "Closing lebih mudah karena pelanggan lebih percaya pada brand Anda."
        }
      ]
    },
    {
      id: 'lp-premium',
      name: 'PREMIUM',
      price: 'Rp 2.700.000',
      originalPrice: 'Rp 4.500.000',
      description: 'High-Conversion Landing Page. Desain interaktif untuk menghasilkan leads & penjualan.',
      features: [
        'Semua Fitur Basic',
        'Gratis Domain .com + Hosting 6 bulan',
        'Desain Modern + Animasi Ringan',
        'Copywriting High Conversion',
        'Analitik (Tracking Pengunjung)',
        'Optimasi Speed & SEO Dasar',
        'Video Tutorial Admin Lengkap',
        '4x Revisi',
        'Garansi & Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Promo Premium',
      icon: Sparkles, // Landing Page Premium = Premium/Special
      details: [
        {
          feature: "Percepat Keputusan Pembeli",
          problem: "Pelanggan chat lama cuma buat tanya info, ujungnya nggak beli.",
          solution: "Informasi lengkap & CTA jelas dalam satu halaman yang terstruktur.",
          benefit: "Pelanggan nggak mikir lama, langsung tekan tombol Order/WA."
        },
        {
          feature: "Aset Seumur Hidup",
          problem: "Iklan atau sewa lapak marketplace itu biaya operasional yang habis terus.",
          solution: "Landing Page adalah aset digital milik sendiri (sekali bayar, manfaat selamanya).",
          benefit: "Bukan biaya, tapi investasi yang terus menghasilkan leads jangka panjang."
        },
        {
          feature: "Menangkan Kompetisi",
          problem: "Kompetitor sudah punya website duluan dan mendominasi pasar.",
          solution: "Bangun brand online sekarang sebelum makin tertinggal jauh.",
          benefit: "Siapa yang lebih cepat bangun aset digital, dia yang menang."
        }
      ]
    },
    {
      id: 'lp-pro',
      name: 'PRO',
      price: 'Rp 3.500.000',
      originalPrice: 'Rp 8.000.000',
      description: 'Branding Landing Page + Strategy. Tampil mahal & dominan untuk jangka panjang.',
      features: [
        'Semua Fitur Premium',
        'Gratis Domain .com + Hosting 6 bulan',
        'Premium Branding + Storytelling',
        'Desain Eksklusif + Micro-interactions',
        'Optimasi Core Web Vitals (High Speed)',
        'Advanced SEO (Schema, Meta Tags)',
        'Integrasi Chatbot WA',
        'Video Tutorial + Strategi',
        '6x Revisi',
        'Garansi & Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Promo Pro',
      icon: Award, // Landing Page Pro = Award/Best
      details: [
        {
          feature: "Wajib Untuk Iklan (Ads)",
          problem: "Iklan FB/TikTok/Google tanpa Landing Page hasilnya mahal & konversi kecil.",
          solution: "LP khusus traffic ads agar data pengunjung terekam & terukur.",
          benefit: "Biaya iklan turun, konversi penjualan naik drastis."
        },
        {
          feature: "Diversifikasi & Keamanan",
          problem: "Cuma andalkan IG/TikTok? Kalau akun ke-banned/hack, bisnis lumpuh.",
          solution: "Website adalah 'Rumah Sendiri'. Kendali 100% di tangan Anda, bukan numpang.",
          benefit: "Bisnis aman jangka panjang, tidak tergantung algoritma sosmed."
        },
        {
          feature: "Dominasi Brand Premium",
          problem: "Brand terlihat sama saja dengan kompetitor, sulit jual harga tinggi.",
          solution: "Desain eksklusif & storytelling yang membangun ikatan emosional.",
          benefit: "Brand Positioning kuat, terlihat jauh lebih mahal & premium."
        }
      ]
    }
  ],
  'company-profile': [
    {
      id: 'cp-basic',
      name: 'BASIC',
      price: 'Rp 2.200.000',
      originalPrice: 'Rp 3.000.000',
      description: 'Mulai Tampil Profesional. Website cepat dan rapi untuk UMKM & Freelancer.',
      features: [
        '1 Landing Page Utama',
        '3 Halaman Tambahan (Home/About/Service)',
        'Gratis Domain .com + Hosting 6 Bulan',
        'Desain Clean & Modern',
        'Kontak + Tombol WhatsApp',
        'Integrasi Google Maps',
        'Video Tutorial Update Konten',
        '2x Revisi',
        'Garansi & Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Promo Basic',
      icon: Globe,
      details: [
        {
          feature: "Kredibilitas Langsung",
          problem: "Tanpa website, calon pelanggan ragu bisnis Anda asli atau tidak.",
          solution: "Website profesional menjadi bukti eksistensi digital yang valid.",
          benefit: "Pelanggan langsung percaya saat melihat website resmi Anda."
        },
        {
          feature: "Info Selalu Up-to-Date",
          problem: "Capek jawab pertanyaan berulang tentang alamat, jam buka, atau harga.",
          solution: "Website jadi pusat informasi akurat yang bisa diakses 24 jam.",
          benefit: "Menghemat waktu admin dan memudahkan pelanggan mencari info."
        },
        {
          feature: "Mudah Ditemukan (SEO Basic)",
          problem: "Bisnis tidak muncul saat orang mencari di Google sekitar lokasi.",
          solution: "Optimasi dasar agar bisnis muncul di pencarian lokal & Maps.",
          benefit: "Potensi pelanggan baru datang langsung dari Google."
        }
      ]
    },
    {
      id: 'cp-premium',
      name: 'PREMIUM',
      price: 'Rp 3.200.000',
      originalPrice: 'Rp 5.500.000',
      description: 'Tingkatkan Kredibilitas Bisnis. Desain premium + Portfolio untuk bisnis berkembang.',
      features: [
        '5-6 Halaman Lengkap',
        'Gratis Domain .com + Hosting 6 Bulan',
        'Desain Premium + Animasi Halus',
        'Copywriting Tingkatkan Trust',
        'Halaman Portfolio (Max 10 item)',
        'Analitik Pengunjung Website',
        'Video Tutorial Admin',
        '4x Revisi',
        'Garansi & Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Promo Premium',
      icon: Building2,
      details: [
        {
          feature: "Ubah Pengunjung Jadi Prospek",
          problem: "Banyak yang lihat tapi lalu pergi tanpa kontak.",
          solution: "Penempatan tombol CTA (Call to Action) strategis & copywriting persuasif.",
          benefit: "Lebih banyak pengunjung yang akhirnya chat WA atau isi form."
        },
        {
          feature: "Hemat Biaya Marketing",
          problem: "Ketergantungan iklan berbayar yang biayanya naik terus.",
          solution: "Website bekerja sebagai 'salesman' 24 jam dengan biaya sekali bayar.",
          benefit: "Investasi aset jangka panjang yang jauh lebih murah dari gaji sales."
        },
        {
          feature: "Kontrol Narasi Brand",
          problem: "Susah menceritakan keunggulan bisnis secara utuh di medsos.",
          solution: "Halaman 'Tentang Kami' & 'Layanan' yang menceritakan value bisnis Anda.",
          benefit: "Brand awareness meningkat, pelanggan paham kenapa harus pilih Anda."
        }
      ]
    },
    {
      id: 'cp-pro',
      name: 'PRO',
      price: 'Rp 5.500.000',
      originalPrice: 'Rp 9.000.000',
      description: 'Branding & Trust Level Maksimal. Website eksklusif untuk aset marketing jangka panjang.',
      features: [
        'Hingga 10 Halaman Custom',
        'Gratis Domain .com + Hosting 6 Bulan',
        'Desain Eksklusif + Micro-interactions',
        'Fitur Blog / Artikel',
        'Halaman Testimoni Dinamis',
        'SEO Advanced (Indexing & Keyword)',
        'Laporan Performa Website',
        '6x Revisi',
        'Garansi & Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Promo Pro',
      icon: Crown,
      details: [
        {
          feature: "Kurangi Hambatan Transaksi",
          problem: "Pelanggan butuh waktu lama untuk memutuskan beli.",
          solution: "Informasi super lengkap & testimoni dinamis yang meyakinkan.",
          benefit: "Mempercepat proses pengambilan keputusan pelanggan."
        },
        {
          feature: "Keunggulan Kompetitif",
          problem: "Kompetitor lain mulai punya website juga.",
          solution: "Desain eksklusif & fitur blog yang membuat Anda terlihat sebagai market leader.",
          benefit: "Menang persaingan dengan image yang jauh lebih bonafit."
        },
        {
          feature: "Aman & Mandiri",
          problem: "Takut akun sosmed/marketplace kena banned atau algoritma berubah.",
          solution: "Website adalah aset 100% milik Anda. Kontrol penuh.",
          benefit: "Bisnis tidak rentan, traffic organik tetap aman."
        }
      ]
    }
  ],
  'e-commerce': [
    {
      id: 'ec-basic',
      name: 'BASIC',
      price: 'Rp 2.400.000',
      originalPrice: 'Rp 3.500.000',
      description: 'Start Selling Fast. Landing page produk + katalog simpel untuk jualan cepat via WA.',
      features: [
        '1 Halaman Landing Utama',
        'Katalog Max 20 Produk',
        'Gratis Domain & Hosting',
        'Checkout via WhatsApp + Form',
        'Manajemen Produk Sederhana',
        'Desain Mobile Friendly',
        'Akses Admin Ringan',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Basic',
      icon: ShoppingBag,
      details: [
        {
          feature: "Pegang Aset Sendiri",
          problem: "Algoritma marketplace berubah, jualan sepi. Perang harga tidak ada habisnya.",
          solution: "Membangun website sendiri berarti punya kontrol 100% tanpa tergantung platform lain.",
          benefit: "Bisnis lebih aman & sustain jangka panjang."
        },
        {
          feature: "Kurangi Chat Berulang",
          problem: "Capek jawab pertanyaan 'Mbak harga berapa?' atau 'Ada foto lain?' setiap hari.",
          solution: "Katalog produk lengkap dengan foto, harga, dan deskripsi yang jelas.",
          benefit: "Hemat energi & waktu admin, proses jualan lebih cepat."
        },
        {
          feature: "Menangkan Kompetisi",
          problem: "Banyak kompetitor masih jualan manual lewat chat atau marketplace saja.",
          solution: "Tampil beda dengan website profesional yang meyakinkan.",
          benefit: "Kesempatan emas untuk terlihat lebih bonafit dari pesaing."
        }
      ]
    },
    {
      id: 'ec-premium',
      name: 'PREMIUM',
      price: 'Rp 3.900.000',
      originalPrice: 'Rp 5.000.000',
      description: 'Full E-Commerce Modern. Sistem keranjang belanja & fitur lengkap tanpa biaya bulanan.',
      features: [
        'Semua Fitur Basic',
        'Struktur Halaman Lengkap',
        'Sistem Keranjang (Cart) Website',
        'Auto Checkout ke WhatsApp',
        'Unlimited Produk (Upload CSV)',
        'Fitur Search & Filter Kategori',
        'Tracking Analitik Lengkap',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Premium',
      icon: Store, // Full retail system
      details: [
        {
          feature: "Jualan Auto-Pilot 24/7",
          problem: "Toko tutup, admin tidur, orderan hilang.",
          solution: "Website e-commerce bekerja 24 jam. Pelanggan bisa lihat produk & checkout kapan saja.",
          benefit: "Tetap jualan dan terima orderan bahkan saat Anda tidur."
        },
        {
          feature: "Data Pengunjung (Analytics)",
          problem: "Di IG/Marketplace data pelanggan terbatas. Susah retargeting.",
          solution: "Tracking lengkap: produk paling dilihat, asal pengunjung, & perilaku klik.",
          benefit: "Strategi marketing lebih tajam & biaya iklan lebih efisien."
        },
        {
          feature: "Brand Credibility",
          problem: "Pembeli makin pintar, suka cek website sebelum transfer.",
          solution: "Website lengkap dengan keranjang belanja membuktikan bisnis Anda serius.",
          benefit: "Trust naik drastis, pelanggan tidak ragu untuk beli."
        }
      ]
    },
    {
      id: 'ec-pro',
      name: 'PRO',
      price: 'Rp 5.900.000',
      originalPrice: 'Rp 8.500.000',
      description: 'Serious Online Store Growth. Full Payment Gateway & Dashboard Admin untuk scale-up.',
      features: [
        'Semua Fitur Premium',
        'Full Checkout Website (No WA)',
        'Integrasi Payment Gateway (QRIS)',
        'Dashboard Admin Full Control',
        'Manajemen Stok & Harga',
        'Fitur Promo & Diskon',
        'Tracking Pixel (FB/Google Ads)',
        'Laporan Insight 30 Hari',
        '6x Revisi & Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Pro',
      icon: Crown,
      details: [
        {
          feature: "Modal Kecil, Efek Panjang",
          problem: "Iklan berbayar biayanya habis kalau saldo habis.",
          solution: "Website dibayar sekali, jadi aset marketing seumur hidup.",
          benefit: "Investasi marketing paling hemat dengan ROI tinggi."
        },
        {
          feature: "Leveling Up Brand",
          problem: "Bisnis UMKM sering dianggap kecil dan kurang terpercaya.",
          solution: "Tampilan website pro dengan fitur canggih (promo, payment gateway) membuat bisnis terlihat besar.",
          benefit: "Lebih meyakinkan investor, mitra, dan pelanggan premium."
        },
        {
          feature: "Pondasi Digital Marketing",
          problem: "Bingung mau arahkan traffic iklan kemana agar konversi tinggi.",
          solution: "Website adalah landing page terbaik untuk semua aktivitas iklan (FB/IG/TikTok Ads).",
          benefit: "Satu pusat kontrol untuk semua channel penjualan."
        }
      ]
    }
  ],
  'booking-system': [
    {
      id: 'book-basic',
      name: 'BASIC',
      price: 'Rp 2.900.000',
      originalPrice: 'Rp 4.000.000',
      description: 'Booking Starter. Solusi awal untuk barbershop, klinik, atau studio kecil.',
      features: [
        'Form Booking Sederhana',
        'Kalender Pilihan Tanggal',
        'Konfirmasi via Email/WA',
        'Mini Admin (Cek Booking)',
        'Integrasi WhatsApp Follow-up',
        'Gratis Domain & Hosting 6 Bulan',
        'Free Video Tutorial',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Basic',
      icon: CalendarCheck, // Booking Basic = Calendar with check
      details: [
        {
          feature: "Pelanggan Malas Chat Manual",
          problem: "Calon pelanggan sering batal booking karena malas chat admin atau respon lama.",
          solution: "Fitur self-service dimana pelanggan bisa langsung pilih slot kosong sendiri.",
          benefit: "Mengurangi risiko lost lead karena proses yang ribet."
        },
        {
          feature: "Kurangi Miss-communication",
          problem: "Sering terjadi double-booking, salah jam, atau lupa catat nama di buku.",
          solution: "Sistem mencatat otomatis semua data booking dengan rapi dan akurat.",
          benefit: "Operasional bebas stres, risiko kesalahan manusia jadi minimal."
        },
        {
          feature: "Hemat Waktu Admin",
          problem: "Waktu habis hanya untuk membalas pertanyaan 'jam ini kosong nggak?'.",
          solution: "Booking masuk otomatis, pemilik/admin tinggal cek notifikasi.",
          benefit: "Bisa lebih fokus melayani pelanggan di lokasi atau pengembangan bisnis."
        }
      ]
    },
    {
      id: 'book-standard',
      name: 'STANDARD',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 6.500.000',
      description: 'Smart Booking System. Fitur durasi layanan otomatis dan manajemen staf.',
      features: [
        'Semua Fitur Basic',
        'Pilihan Layanan & Durasi',
        'Manajemen Staff/Terapis',
        'Blokir Jam Istirahat/Libur',
        'Reschedule Mandiri',
        'Laporan Booking Bulanan',
        'Custom Form Field',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Standard',
      icon: CalendarClock, // Booking Standard = Calendar with time
      details: [
        {
          feature: "Manajemen Durasi Otomatis",
          problem: "Jadwal berantakan karena estimasi durasi layanan tidak akurat.",
          solution: "Sistem otomatis memblokir slot waktu sesuai durasi layanan yang dipilih.",
          benefit: "Jadwal lebih presisi, tidak ada tumpang tindih antar pelanggan."
        },
        {
          feature: "Pilih Staf Favorit",
          problem: "Pelanggan ingin dilayani staf tertentu tapi susah atur jadwalnya.",
          solution: "Fitur pemilihan staf saat booking, otomatis cek ketersediaan staf tersebut.",
          benefit: "Kepuasan pelanggan meningkat, loyalitas terhadap staf terjaga."
        },
        {
          feature: "Reschedule Mandiri",
          problem: "Admin repot urus perubahan jadwal pelanggan.",
          solution: "Link reschedule yang bisa diakses pelanggan untuk ubah jadwal sendiri (H-1).",
          benefit: "Beban admin berkurang, pelanggan lebih leluasa."
        }
      ]
    },
    {
      id: 'book-premium',
      name: 'PREMIUM',
      price: 'Rp 6.500.000',
      originalPrice: 'Rp 10.000.000',
      description: 'Full Automation. Pembayaran DP otomatis dan fitur reminder canggih.',
      features: [
        'Semua Fitur Standard',
        'Integrasi Payment Gateway (DP)',
        'WhatsApp Automation (Reminder H-1)',
        'Sistem Membership / Diskon',
        'Multi-Cabang Support',
        'Sync Google Calendar',
        'Analitik Pelanggan Lengkap',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Premium',
      icon: UserCheck, // Booking Premium = User verification
      details: [
        {
          feature: "Cegah No-Show",
          problem: "Pelanggan booking tapi tidak datang (ghosting).",
          solution: "Wajib DP saat booking & Reminder otomatis via WhatsApp H-1.",
          benefit: "Tingkat kehadiran naik drastis, omzet lebih terjamin."
        },
        {
          feature: "Database Pelanggan",
          problem: "Data riwayat treatment pelanggan tidak tercatat.",
          solution: "Rekam medis/riwayat booking tersimpan rapi untuk personalisasi layanan.",
          benefit: "Bisa tawarkan promo spesifik sesuai kebiasaan pelanggan (Retensi)."
        },
        {
          feature: "Multi-Lokasi",
          problem: "Punya beberapa cabang tapi sistem booking terpisah-pisah.",
          solution: "Satu sistem pusat untuk kelola jadwal semua cabang.",
          benefit: "Monitoring bisnis lebih mudah, standar layanan seragam."
        }
      ]
    }
  ],
  'travel-website': [
    {
      id: 'travel-basic',
      name: 'BASIC',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      description: 'Website Travel Starter. Tampilkan paket wisata dan galeri destinasi.',
      features: [
        'Landing Page Travel',
        'Katalog 6 Paket Wisata',
        'Detail Itinerary & Harga',
        'Tombol Booking WhatsApp',
        'Galeri Foto Destinasi',
        'Gratis Domain & Hosting',
        'Mobile Friendly',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Basic',
      icon: Plane,
      details: [
        {
          feature: "Katalog Digital Rapi",
          problem: "Capek kirim PDF/Foto paket wisata berulang-ulang ke calon tamu.",
          solution: "Website jadi katalog digital yang bisa diakses kapan saja.",
          benefit: "Info lengkap tersedia 24 jam, hemat waktu CS."
        },
        {
          feature: "Visual Destinasi",
          problem: "Foto di chat WA pecah/kurang meyakinkan.",
          solution: "Galeri foto HD dan layout menarik di website.",
          benefit: "Meningkatkan desire (keinginan) pelanggan untuk liburan."
        },
        {
          feature: "Trust Agen Travel",
          problem: "Banyak penipuan travel, pelanggan hati-hati.",
          solution: "Website resmi dengan domain .com meningkatkan kepercayaan.",
          benefit: "Closing lebih mudah karena kredibilitas terjaga."
        }
      ]
    },
    {
      id: 'travel-premium',
      name: 'PREMIUM',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 7.000.000',
      description: 'Professional Travel Agent. Unlimited paket & formulir booking lengkap.',
      features: [
        'Unlimited Paket Wisata',
        'Filter Destinasi / Kategori',
        'Form Booking Custom',
        'Blog Travel Tips',
        'Testimoni Pelanggan',
        'Integrasi Google Maps',
        'SEO Basic untuk Wisata',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Ambil Paket Premium',
      icon: Map,
      details: [
        {
          feature: "Pencarian Paket Mudah",
          problem: "Pelanggan bingung cari paket yang cocok.",
          solution: "Fitur filter berdasarkan lokasi, harga, atau durasi hari.",
          benefit: "User experience bagus, pelanggan cepat menemukan yang dicari."
        },
        {
          feature: "SEO Pariwisata",
          problem: "Ingin ditemukan turis yang cari 'Paket Wisata Bali' di Google.",
          solution: "Struktur web SEO friendly dan fitur blog untuk artikel wisata.",
          benefit: "Traffic gratis dari Google (Organic Search)."
        },
        {
          feature: "Data Tamu Lengkap",
          problem: "Data booking di WA sering tidak lengkap.",
          solution: "Form booking website meminta detail lengkap (Paspor/NIK/Tgl).",
          benefit: "Administrasi tour lebih rapi sejak awal."
        }
      ]
    },
    {
      id: 'travel-pro',
      name: 'PRO',
      price: 'Rp 7.500.000',
      originalPrice: 'Rp 12.000.000',
      description: 'Online Travel Agent (OTA) System. Pembayaran online & invoice otomatis.',
      features: [
        'Sistem Booking Engine',
        'Pilih Tanggal & Pax Realtime',
        'Payment Gateway (CC/VA)',
        'Invoice Otomatis Email',
        'Manajemen Seat/Kuota',
        'Dashboard Laporan Penjualan',
        'Member Area (Riwayat Trip)',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Ambil Paket Pro',
      icon: Globe,
      details: [
        {
          feature: "Transaksi Instant",
          problem: "Proses transfer manual dan konfirmasi bukti bayar ribet.",
          solution: "Bayar pakai QRIS/VA, otomatis lunas dan tiket terbit.",
          benefit: "Cashflow lebih cepat, sistem kerja seperti Traveloka/Tiket.com."
        },
        {
          feature: "Manajemen Kuota",
          problem: "Takut overbooked di tanggal high season.",
          solution: "Sistem lock kuota otomatis saat ada yang booking.",
          benefit: "Mencegah kerugian akibat kesalahan administrasi seat."
        },
        {
          feature: "Database Member",
          problem: "Susah maintain pelanggan lama.",
          solution: "Member area untuk melihat riwayat trip dan poin reward.",
          benefit: "Repeat order lebih tinggi dengan program loyalitas."
        }
      ]
    }
  ],
  'revamp-website': [
    {
      id: 'revamp-basic',
      name: 'BASIC',
      price: 'Rp 1.700.000',
      originalPrice: 'Rp 2.500.000',
      description: 'Refresh Tampilan Utama. Fokus pada Homepage agar lebih modern.',
      features: [
        'Redesign Homepage (Halaman Depan)',
        'Perbaikan Navigasi Menu',
        'Mobile Responsiveness Fix',
        'Update Banner & Gambar',
        'Perbaikan Broken Link',
        'Optimasi Loading Dasar',
        'Backup Web Lama',
        '2x Revisi',
        'Maintenance 15 Hari'
      ],
      isPopular: false,
      cta: 'Revamp Basic',
      icon: Wrench, // Revamp Basic = Tools/Fix
      details: [
        {
          feature: "Kesan Pertama",
          problem: "Website lama terlihat jadul, pengunjung langsung close tab.",
          solution: "Homepage modern dengan UI/UX terkini.",
          benefit: "Bounce rate turun, pengunjung betah browsing."
        },
        {
          feature: "Mobile Friendly",
          problem: "Tampilan berantakan saat dibuka di HP.",
          solution: "Perbaikan layout agar responsif di semua ukuran layar.",
          benefit: "Menjangkau 80% pengguna internet yang pakai HP."
        },
        {
          feature: "Struktur Rapi",
          problem: "Menu membingungkan, pengunjung tersesat.",
          solution: "Navigasi disederhanakan dan diperjelas.",
          benefit: "Pengalaman pengguna (UX) lebih baik."
        }
      ]
    },
    {
      id: 'revamp-premium',
      name: 'PREMIUM',
      price: 'Rp 2.900.000',
      originalPrice: 'Rp 4.500.000',
      description: 'Total Redesign & Performance. Upgrade tampilan dan kecepatan website.',
      features: [
        'Redesign 5-6 Halaman Utama',
        'Optimasi Core Web Vitals (Speed)',
        'SEO On-Page Optimization',
        'Copywriting Refresh',
        'Integrasi CTA WhatsApp Baru',
        'Security Patch / Update Plugin',
        'Setup Analytics Terbaru',
        '4x Revisi',
        'Maintenance 30 Hari'
      ],
      isPopular: true,
      cta: 'Revamp Premium',
      icon: Settings, // Revamp Premium = Settings/Upgrade
      details: [
        {
          feature: "Loading Cepat (Speed)",
          problem: "Website lemot, ditinggal pengunjung.",
          solution: "Optimasi kode, gambar, dan cache untuk loading < 3 detik.",
          benefit: "Ranking Google naik, user happy."
        },
        {
          feature: "SEO Boost",
          problem: "Traffic organik turun terus.",
          solution: "Perbaikan struktur heading, meta tags, dan sitemap.",
          benefit: "Website lebih mudah ditemukan di Google."
        },
        {
          feature: "Konversi Fokus",
          problem: "Banyak traffic tapi sedikit yang kontak.",
          solution: "Penataan ulang CTA dan copywriting yang menjual.",
          benefit: "Lebih banyak leads masuk dari pengunjung yang sama."
        }
      ]
    },
    {
      id: 'revamp-pro',
      name: 'PRO',
      price: 'Rp 4.500.000',
      originalPrice: 'Rp 7.000.000',
      description: 'Platform Migration / Rebuild. Pindah platform atau bangun ulang dengan teknologi baru.',
      features: [
        'Rebuild ulang (Misal: WP ke React/NextJS)',
        'Migrasi Semua Konten/Artikel',
        'Redesign UI/UX Full Custom',
        'Penambahan Fitur Baru Custom',
        'Advanced Security Setup',
        'Server Optimization / Pindah Hosting',
        'SEO Retention Strategy',
        '6x Revisi',
        'Maintenance 45 Hari'
      ],
      isPopular: false,
      cta: 'Revamp Pro',
      icon: Rocket, // Revamp Pro = Launch/Transform
      details: [
        {
          feature: "Teknologi Modern",
          problem: "Website lama pakai teknologi usang yang rentan hack.",
          solution: "Rebuild dengan stack modern (Next.js/Laravel) yang aman & cepat.",
          benefit: "Website future-proof, aman, dan scalable."
        },
        {
          feature: "Fitur Custom",
          problem: "Website lama fiturnya terbatas, tidak bisa tambah ini itu.",
          solution: "Coding ulang memungkinkan penambahan fitur apa saja sesuai request.",
          benefit: "Sistem mengikuti perkembangan bisnis."
        },
        {
          feature: "SEO Retention",
          problem: "Takut ganti web malah ranking Google hilang.",
          solution: "Strategi redirect 301 dan migrasi URL yang hati-hati.",
          benefit: "Ranking aman, bahkan naik karena performa lebih baik."
        }
      ]
    }
  ]
};
