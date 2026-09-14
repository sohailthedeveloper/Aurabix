"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Image as ImageIcon, Layout, ArrowRight } from 'lucide-react';
import { useDemoTheme } from './DemoThemeProvider';

export default function DemoWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, themePalette } = useDemoTheme();

  useEffect(() => {
    // Show after a brief delay so the site loads first
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const palettes = {
    'cream-sage': { bgCream: '#FDFBF7', textSage: '#2C4C3B', accentSand: '#E8E1D5', mutedText: '#6B705C' },
    'midnight-gold': { bgCream: '#0F172A', textSage: '#D4AF37', accentSand: '#1E293B', mutedText: '#94A3B8' },
    'obsidian-pearl': { bgCream: '#0A0A0A', textSage: '#F8FAFC', accentSand: '#171717', mutedText: '#A1A1AA' },
    'blush-slate': { bgCream: '#FAF5F5', textSage: '#334155', accentSand: '#F1E9E9', mutedText: '#64748B' },
    'peach-sage': { bgCream: '#FFFBF7', textSage: '#2D3748', accentSand: '#FADAC6', mutedText: '#4A5568' },
    'navy-rose': { bgCream: '#FAFAFA', textSage: '#0A192F', accentSand: '#E6F1FF', mutedText: '#334155' },
    'ivory-jade': { bgCream: '#FFFFF0', textSage: '#1F2937', accentSand: '#E0F2FE', mutedText: '#4B5563' },
    'charcoal-copper': { bgCream: '#121212', textSage: '#E0E0E0', accentSand: '#2D2D2D', mutedText: '#A3A3A3' },
    'lavender-platinum': { bgCream: '#F8F9FA', textSage: '#343A40', accentSand: '#E9ECEF', mutedText: '#6C757D' },
    'sapphire-frost': { bgCream: '#FFFFFF', textSage: '#0F172A', accentSand: '#F1F5F9', mutedText: '#475569' }
  };
  const { bgCream, textSage, accentSand, mutedText } = palettes[themePalette] || palettes['cream-sage'];
  
  const fontHeading = { fontFamily: 'var(--font-playfair), serif' };
  const fontBody = { fontFamily: 'var(--font-jakarta), sans-serif' };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        style={fontBody}
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="relative w-full max-w-[600px] max-h-[90vh] flex flex-col rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border"
          style={{ backgroundColor: bgCream, borderColor: accentSand }}
        >
          {/* Header Area */}
          <div className="p-8 sm:p-10 pb-6 text-center border-b" style={{ borderColor: accentSand }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg" style={{ backgroundColor: textSage, color: bgCream }}>
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-3" style={{ ...fontHeading, color: textSage }}>
              Welcome to your Concept Demo
            </h2>
            <p className="text-[15px] leading-relaxed max-w-md mx-auto" style={{ color: mutedText }}>
              This is a live, interactive preview of what your clinic's digital presence could look like, crafted specifically for <strong>{name}</strong>.
            </p>
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-10 space-y-6 overflow-y-auto" style={{ backgroundColor: accentSand }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: accentSand, color: textSage }}>
                <ImageIcon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[15px] mb-1" style={{ color: textSage }}>Placeholder Content</h4>
                <p className="text-[14px] leading-relaxed" style={{ color: mutedText }}>
                  The beautiful images and text you see are premium stock placeholders. We will replace these entirely with your clinic's original photography and preferred copywriting. (If you prefer our curated content, we can keep it!)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full shrink-0" style={{ backgroundColor: accentSand, color: textSage }}>
                <Layout size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[15px] mb-1" style={{ color: textSage }}>100% Customizable</h4>
                <p className="text-[14px] leading-relaxed" style={{ color: mutedText }}>
                  Every single element is modular. We can completely redesign the layout, adjust the color palette, and configure every interaction (Booking forms, WhatsApp flows, Google Maps) to perfectly match your operational needs.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Area */}
          <div className="p-8 sm:p-10 pt-6 text-center" style={{ backgroundColor: accentSand }}>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-transform hover:scale-[1.02] shadow-xl"
              style={{ backgroundColor: textSage, color: bgCream }}
            >
              Explore the Concept <ArrowRight size={18} />
            </button>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-widest opacity-60" style={{ color: textSage }}>
              Powered by AuraBix Web Architecture
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
