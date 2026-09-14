import React from 'react';
import Link from 'next/link';

export default function AgencyFooter() {
  return (
    <footer className="bg-[#000000] text-white border-t border-white/5 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">AuraBix</h2>
            <p className="text-white/40 text-sm">Next-Gen Digital Architecture for High-Ticket Clinics.</p>
          </div>
          
          <div className="flex items-center gap-8">
            <Link href="/generator" className="text-sm text-white/60 hover:text-white transition-colors">Concept Generator</Link>
            <a href="mailto:hello@aurabix.com" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
            <a href="https://twitter.com/aurabix" className="text-sm text-white/60 hover:text-white transition-colors">Twitter</a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} AuraBix. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Built with Next.js & Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5 text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
