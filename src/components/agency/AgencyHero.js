"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AgencyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] text-white pt-20">
      
      {/* Abstract Neon Grid / Orb Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
        
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-xs font-medium tracking-widest uppercase text-white/80">Next-Gen Web Architecture</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]"
        >
          We don't build websites.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/40">
            We engineer machines.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          AuraBix is a high-ticket digital architecture agency. We leverage React, Edge-Computing, and AI to build bespoke systems that capture, convert, and scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/generator" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300">
            Launch Generator
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link href="#portfolio" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white/80 hover:text-white transition-colors border border-white/10 hover:bg-white/5">
            View Live Demos
          </Link>
        </motion.div>

      </div>
      
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent z-10" />
    </section>
  );
}
