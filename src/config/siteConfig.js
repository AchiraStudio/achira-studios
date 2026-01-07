// src/config/siteConfig.js
import { Monitor, Smartphone, PenTool, Layout, Server, Zap, CheckCircle, Infinity, MessageSquare, Mail } from 'lucide-react';

export const siteConfig = {
  brand: {
    name: "AchiraStudios",
    initials: "AS",
    tagline: "Modern Websites. Affordable Solutions.",
    subTagline: "Solusi Website Modern untuk Bisnis Lokal.",
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Website Modern & Terjangkau untuk Bisnis Anda",
    subheadline: "AchiraStudios membantu UMKM dan bisnis lokal tampil profesional di dunia digital dengan desain futuristik dan performa tinggi.",
    ctaPrimary: "Lihat Paket",
    ctaSecondary: "Hubungi Kami",
  },
  services: [
    {
      id: 1,
      title: "Company Profile",
      description: "Tampilkan profesionalitas bisnis Anda ke seluruh dunia.",
      icon: Monitor,
    },
    {
      id: 2,
      title: "F&B / Cafe Website",
      description: "Desain menggugah selera dengan integrasi menu digital.",
      icon: Smartphone,
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Halaman khusus untuk konversi penjualan produk Anda.",
      icon: Layout,
    },
    {
      id: 4,
      title: "Website Redesign",
      description: "Perbarui tampilan website lama menjadi lebih modern.",
      icon: PenTool,
    },
    {
      id: 5,
      title: "Maintenance",
      description: "Dukungan teknis dan update konten berkala.",
      icon: Server,
    },
  ],
  whyChoose: [
    { id: 1, title: "Harga Terjangkau", desc: "Solusi hemat tanpa mengorbankan kualitas.", icon: CheckCircle },
    { id: 2, title: "Desain Modern", desc: "Tampilan estetis dan relevan dengan tren terkini.", icon: Monitor },
    { id: 3, title: "Mobile Friendly", desc: "Akses sempurna dari HP, Tablet, dan Desktop.", icon: Smartphone },
    { id: 4, title: "Cepat & Efisien", desc: "Pengerjaan tepat waktu sesuai target bisnis Anda.", icon: Zap },
    { id: 5, title: "Revisi Tanpa Batas", desc: "Kami pastikan Anda puas 100% dengan hasilnya.", icon: Infinity },
    { id: 6, title: "After Sales Support", desc: "Bantuan teknis setelah website online.", icon: MessageSquare },
  ],
  portfolio: [
    { 
      id: 1, 
      title: "Recis Ascension", 
      category: "Events", 
      url: "https://recisascension.com/ascension-cup"
    },
    { 
      id: 2, 
      title: "Recis-SHS", 
      category: "Profile", 
      url: "https://recisascension.com/r-shs", 
    },
    { 
      id: 3, 
      title: "Kotakan Cafe", 
      category: "F&B", 
      url: "https://food-shop-template.pages.dev/", 
    },
    { 
      id: 4, 
      title: "Recis Revival", 
      category: "Events", 
      url: "https://recisrevival.pages.dev/", 
    },
  ],
  pricing: [
    {
      id: "basic",
      name: "Basic",
      price: "Rp 250.000",
      features: ["Up to 5 Pages", "Responsive Mobile/Desktop", "NO Revision Limit", "Standard Design", "1 Month Support"],
      isPopular: false,
    },
    {
      id: "standard",
      name: "Standard",
      price: "Rp 750k - 1.5jt",
      features: ["Unlimited Pages", "Custom Contact Form", "WhatsApp Integration", "NO Revision Limit", "SEO Basic Setup", "3 Months Support"],
      isPopular: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "Rp 2.000.000+",
      features: ["Unlimited Pages", "Fully Custom Design", "Advanced Animations", "Priority Support", "NO Revision Limit", "CMS Integration"],
      isPopular: false,
    },
  ],
  contact: {
    email: "hello@achirastudios.com",
    whatsapp: "+62 878 9702 5720",
    address: "Bogor, Indonesia",
  },
};