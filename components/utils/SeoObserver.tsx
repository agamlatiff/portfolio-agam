
import React, { useEffect, useState } from 'react';

const SEO_DATA: Record<string, { title: string; desc: string }> = {
  hero: {
    title: "Agam | Modern Web & App Developer",
    desc: "Membangun website & aplikasi modern yang scalable untuk menjawab masalah bisnis nyata. Fokus pada performa, UX, dan efisiensi operasional."
  },
  'roi-calculator': {
    title: "Cegah Kebocoran Keuangan UMKM | Agam",
    desc: "Hitung potensi uang hilang akibat stok selisih dan pembukuan manual. Solusi digital untuk profit maksimal."
  },
  services: {
    title: "Jasa Pembuatan Sistem Bisnis & Website | Agam",
    desc: "Paket lengkap: QR Menu, Website Company Profile, Booking System, dan Warehouse Inventory. Solusi operasional rapi untuk UMKM."
  },
  'pain-points': {
    title: "Solusi Masalah Operasional Bisnis | Agam",
    desc: "Atasi stok berantakan, orderan manual yang ribet, dan branding yang kurang profesional. Transformasi digital praktis."
  },
  'trust-factors': {
    title: "Keamanan & Hak Milik Aset | Agam",
    desc: "Investasi aman. 100% Source Code milik Anda (Tanpa Sewa), Garansi Bug 1-4 minggu, dan Support Prioritas."
  },
  comparison: {
    title: "Kenapa Pilih Agam vs SaaS? | Agam",
    desc: "Bandingkan keuntungan sistem Jual Putus (Milik Sendiri) vs Aplikasi Langganan. Lebih hemat jangka panjang."
  },
  pricing: {
    title: "Harga Jasa Pembuatan Sistem | Agam",
    desc: "Transparan. Paket Basic, Premium, Pro untuk berbagai skala bisnis. Tanpa biaya bulanan tersembunyi."
  },
  process: {
    title: "Alur Kerja Pembuatan Sistem | Agam",
    desc: "Proses transparan dari konsultasi, pengerjaan, hingga serah terima source code dan training penggunaan."
  },
  projects: {
    title: "Portofolio Sistem & Website | Agam",
    desc: "Studi kasus: Sistem Gudang Distributor, POS Coffee Shop, dan Website Company Profile yang telah berjalan."
  },
  testimonials: {
    title: "Kata Pemilik Bisnis | Agam",
    desc: "Apa kata pengusaha yang sudah merapikan bisnisnya dengan sistem buatan Agam. Bukti nyata efisiensi."
  },
  about: {
    title: "Tentang Agam | Partner Digital Anda",
    desc: "Freelance developer yang fokus membantu UMKM naik kelas lewat sistem operasional yang rapi dan efisien."
  },
  faq: {
    title: "FAQ Solusi Bisnis | Agam",
    desc: "Pertanyaan umum seputar biaya, waktu pengerjaan, dan garansi sistem custom."
  },
  contact: {
    title: "Konsultasi Bisnis Gratis | Agam",
    desc: "Punya masalah stok atau kasir? Hubungi saya untuk diskusi solusi digital yang tepat untuk bisnis Anda."
  },
};

const SeoObserver: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px', // Trigger when section is near center
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections defined in SEO_DATA
    Object.keys(SEO_DATA).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const data = SEO_DATA[activeSection];
    if (data) {
      // Update Title
      document.title = data.title;

      // Update Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.desc);
    }
  }, [activeSection]);

  return null;
};

export default SeoObserver;
