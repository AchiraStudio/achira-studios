export const siteConfig = {
  brand: {
    name: "AchiraStudios",
    logo: "AS",
    tagline: "Modern Websites. Affordable Solutions.",
    secondaryTagline: "Solusi Website Modern untuk Bisnis Lokal.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Website Modern & Terjangkau untuk Bisnis Anda",
    subheadline:
      "AchiraStudios membantu UMKM dan bisnis lokal tampil profesional di dunia digital.",
    ctaPrimary: "Lihat Paket",
    ctaSecondary: "Hubungi Kami",
  },
  services: [
    {
      title: "Company Profile",
      desc: "Tampilkan kredibilitas bisnis Anda dengan desain elegan.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // Building icon path
    },
    {
      title: "Cafe / Restaurant",
      desc: "Menu digital, reservasi, dan galeri foto yang menggugah selera.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // Book/Menu icon path
    },
    {
      title: "Landing Page",
      desc: "Halaman konversi tinggi untuk penawaran produk spesifik.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning icon path
    },
    {
      title: "Website Redesign",
      desc: "Perbarui tampilan lama Anda menjadi sesuai standar modern.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", // Refresh icon path
    },
  ],
  whyUs: [
    "Harga terjangkau",
    "Desain modern",
    "Mobile-friendly",
    "Cepat & efisien",
    "Revisi tanpa batas",
    "Support setelah website jadi",
  ],
  portfolio: [
    {
      id: 1,
      title: "Kopi Senja",
      category: "Cafe & Resto",
      image: "https://picsum.photos/seed/cafe1/600/400",
    },
    {
      id: 2,
      title: "BajuKita Store",
      category: "E-Commerce",
      image: "https://picsum.photos/seed/store1/600/400",
    },
    {
      id: 3,
      title: "Corporate CV",
      category: "Company Profile",
      image: "https://picsum.photos/seed/office1/600/400",
    },
  ],
  pricing: [
    {
      name: "Basic Package",
      price: 250000,
      desc: "Untuk UMKM & Personal",
      features: [
        "Hingga 5 Halaman",
        "Desain Responsive Modern",
        "Revisi Tanpa Batas",
        "Gratis Domain .my.id (1th)",
      ],
    },
    {
      name: "Standard Package",
      priceRange: "Rp 750.000 - Rp 1.500.000",
      desc: "Untuk Bisnis Berkembang",
      features: [
        "Halaman Unlimited",
        "UI Konsisten & Modern",
        "Integrasi WhatsApp",
        "Form Kontak",
        "Revisi Tanpa Batas",
      ],
      highlight: true,
    },
    {
      name: "Premium Package",
      price: 2000000,
      desc: "Custom & Prioritas",
      features: [
        "Fully Custom Design",
        "Halaman Unlimited",
        "Fitur Advanced",
        "Priority Support",
        "Revisi Tanpa Batas",
        "Optimasi SEO Dasar",
      ],
    },
  ],
  contact: {
    whatsapp: "6281234567890",
    email: "halo@achirastudios.com",
    address: "Bogor, Indonesia",
  },
  footer: {
    copyright: "© 2025 AchiraStudios. All rights reserved.",
  },
};