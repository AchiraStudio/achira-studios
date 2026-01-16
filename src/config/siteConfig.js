import { Monitor, Smartphone, Layout, PenTool, Server, Box, Globe, Shield, Zap, Layers, MessageSquare, Mail } from 'lucide-react';

export const siteConfig = {
  brand: {
    name: "AchiraStudios",
    initials: "AS",
  },
  whyChoose: [
    { id: 1, title: "Cost Effective", desc: "Premium quality without the agency price tag.", icon: "CircleDollarSign" },
    { id: 2, title: "Lightning Fast", desc: "98+ PageSpeed scores for better SEO ranking.", icon: "Zap" },
    { id: 3, title: "Mobile First", desc: "Flawless experience on every screen size.", icon: "Smartphone" },
    { id: 4, title: "Scalable", desc: "Built on tech stacks that grow with you.", icon: "TrendingUp" },
    { id: 5, title: "Secure", desc: "Enterprise-grade security standards.", icon: "ShieldCheck" },
    { id: 6, title: "24/7 Support", desc: "We are always here when you need us.", icon: "Headphones" },
  ],
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Capabilities", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Plans", href: "#pricing" },
  ],
  services: [
    { id: 1, title: "UI/UX Design", desc: "Crafting intuitive digital experiences.", icon: Layout },
    { id: 2, title: "Web Development", desc: "High-performance React & Next.js builds.", icon: Monitor },
    { id: 3, title: "Mobile Apps", desc: "Cross-platform solutions for iOS & Android.", icon: Smartphone },
    { id: 4, title: "Rebranding", desc: "Modernizing your visual identity.", icon: PenTool },
  ],
  portfolio: [
    { id: 1, title: "Recis Ascension", category: "Event Site", url: "https://recisascension.com/ascension-cup" },
    { id: 2, title: "Recis SHS", category: "Education", url: "https://recisascension.com/r-shs" },
    { id: 3, title: "Kotakan Cafe", category: "E-Commerce", url: "https://food-shop-template.pages.dev/" },
    { id: 4, title: "Recis Revival", category: "Campaign", url: "https://recisrevival.pages.dev/" },
  ],
  pricing: [
    {
      id: "lite",
      name: "Lite",
      price: "250K",
      desc: "Perfect for personal profiles.",
      features: ["One Page Site", "Mobile Responsive", "1 Week Support", "Fast Delivery"],
      featured: false
    },
    {
      id: "pro",
      name: "Business",
      price: "750K",
      desc: "For growing brands.",
      features: ["Up to 5 Pages", "SEO Optimization", "WhatsApp Integration", "1 Month Support", "Analytics Setup"],
      featured: true
    },
    {
      id: "custom",
      name: "Enterprise",
      price: "2JT+",
      desc: "Full-scale custom solutions.",
      features: ["Unlimited Pages", "Custom CMS", "Advanced Animation", "Priority Support", "Server Setup"],
      featured: false
    },
  ],
  contact: {
    email: "hello@achirastudios.com",
    phone: "+62 831 8266 0328"
  }
};