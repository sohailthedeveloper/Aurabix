"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Growth Partner",
    price: "£999",
    subtitle: "+ £750/mo Retainer",
    description: "The complete digital architecture with long-term growth and maintenance included. Lowest barrier to entry.",
    features: [
      "Bespoke Glassmorphism Design",
      "Virtual Patient Coordinator (AI Chatbot)",
      "Multi-Step Conversion Booking Modal",
      "Next.js 14 Edge Architecture",
      "Ultra-Fast Cloud Hosting",
      "Monthly SEO & Conversion Optimization",
      "Unlimited Minor Content Updates"
    ],
    highlighted: true,
    buttonText: "Apply for Partnership"
  },
  {
    name: "Full Ownership",
    price: "£8,000",
    subtitle: "One-Time Investment",
    description: "Complete buyout of the custom architecture. Ideal for established clinics with in-house tech teams.",
    features: [
      "Everything in Growth Partner",
      "Full Source Code Ownership",
      "Custom Brand Color Dictionary",
      "Advanced WhatsApp Integration",
      "CRM & Calendar Integrations",
      "1-Month Post-Launch Support",
      "Self-Hosted or Vercel Handover"
    ],
    highlighted: false,
    buttonText: "Book Architecture Call"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              
              <h3 className="text-xl font-medium text-white/80 mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold tracking-tighter">{tier.price}</span>
              </div>
              <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-6">{tier.subtitle}</p>
              
              <p className="text-white/50 mb-8 leading-relaxed text-sm">{tier.description}</p>
              
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
