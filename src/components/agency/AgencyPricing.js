"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Website Start",
    price: "from £1,490",
    subtitle: "Your professional online presence",
    description: "Perfect for single campaigns, landing pages, or small businesses starting out.",
    features: [
      "1-3 Pages, Custom Design",
      "SEO & AI Optimized",
      "Mobile Responsive",
      "Free initial draft"
    ],
    highlighted: false,
    buttonText: "Request Start Draft"
  },
  {
    name: "Website Pro",
    price: "from £3,490",
    subtitle: "Everything your business needs",
    description: "Comprehensive digital architecture for established clinics and agencies.",
    features: [
      "Everything in Website Start",
      "5-10 Pages, Custom Design",
      "System Integrations",
      "Free initial draft"
    ],
    highlighted: true,
    buttonText: "Request Pro Draft"
  },
  {
    name: "Online Store",
    price: "from £3,990",
    subtitle: "Sells 24/7, all year round",
    description: "Full-scale ecommerce infrastructure for physical or digital products.",
    features: [
      "Products, Cart & Orders",
      "Secure Payments & Shipping",
      "Intuitive Management Dashboard",
      "Free initial draft"
    ],
    highlighted: false,
    buttonText: "Request Store Draft"
  },
  {
    name: "Web Application",
    price: "Custom",
    subtitle: "Logins, Backend & Automation",
    description: "Bespoke software development for complex operational requirements.",
    features: [
      "User Authentication & Portals",
      "Custom APIs & Automations",
      "Dedicated Backend Architecture",
      "Highly Scalable & Secure"
    ],
    highlighted: false,
    buttonText: "Request Custom Quote"
  }
];

export default function AgencyPricing() {
  return (
    <section className="py-24 sm:py-32 bg-[#000000] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Investment Tiers</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Elite digital architecture priced to deliver maximum ROI. One captured patient pays for the entire system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative rounded-[2rem] p-8 sm:p-12 overflow-hidden border ${tier.highlighted ? 'border-purple-500/50 bg-[#050505]' : 'border-white/10 bg-[#030303]'} transition-transform duration-500 hover:-translate-y-2`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-xs text-white/50 mb-6 font-medium">{tier.subtitle}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-black tracking-tighter">{tier.price}</span>
              </div>
              
              <p className="text-white/50 mb-8 leading-relaxed text-xs">{tier.description}</p>
              
              <ul className="space-y-4 mb-10">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={18} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${tier.highlighted ? 'bg-white text-black hover:bg-white/90' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
