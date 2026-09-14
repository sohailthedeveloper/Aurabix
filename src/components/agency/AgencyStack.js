"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  "Next.js 14", "React Server Components", "Framer Motion", "Tailwind CSS", 
  "Vercel Edge", "Stripe API", "WhatsApp Business API", "OpenAI", 
  "PostgreSQL", "Prisma ORM"
];

export default function AgencyStack() {
  return (
    <section className="py-24 bg-[#030303] overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Engineered with</p>
        <h3 className="text-2xl font-light text-white/80">The Modern Edge Stack</h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
        
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...stack, ...stack, ...stack].map((item, i) => (
            <span key={i} className="text-xl sm:text-3xl font-bold tracking-tighter text-white/10 hover:text-white transition-colors duration-500 cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
