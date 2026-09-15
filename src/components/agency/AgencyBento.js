"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, PenTool, LayoutDashboard } from 'lucide-react';

const features = [
  {
    title: "AI Patient Coordinators",
    description: "Intelligent, conversational agents that engage browsers 24/7, answer clinical FAQs, and pre-qualify leads directly into WhatsApp.",
    icon: <Bot className="text-purple-400" size={24} />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-purple-900/20 to-black"
  },
  {
    title: "Edge-Deployed Speed",
    description: "Built on Next.js 14. Near-instant load times that dominate local SEO rankings and eliminate bounce rates.",
    icon: <Zap className="text-yellow-400" size={24} />,
    colSpan: "col-span-1 md:col-span-1",
    bg: "bg-gradient-to-br from-yellow-900/10 to-black"
  },
  {
    title: "Glassmorphism UI",
    description: "Ultra-premium, editorial design aesthetics that position your clinic as a high-ticket authority the second a patient lands on the page.",
    icon: <PenTool className="text-pink-400" size={24} />,
    colSpan: "col-span-1 md:col-span-1",
    bg: "bg-gradient-to-br from-pink-900/10 to-black"
  },
  {
    title: "Frictionless Booking",
    description: "Multi-step, high-converting interactive booking modals that break down the barrier to entry and capture high-intent patients effortlessly.",
    icon: <LayoutDashboard className="text-blue-400" size={24} />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-blue-900/20 to-black"
  }
];

export default function AgencyBento() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">AI-Powered<br/><span className="text-white/40">Business Development.</span></h2>
          <p className="text-white/50 text-lg">We don't just design websites. We engineer autonomous systems meticulously designed to lower acquisition costs and turn passive traffic into high-ticket patients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group rounded-3xl p-8 sm:p-10 overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-500 ${feature.colSpan} ${feature.bg}`}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed max-w-md">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
