import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Calendar, Phone, MessageSquare } from 'lucide-react';
import { useDemoTheme } from './DemoThemeProvider';

export default function BoutiqueChatbot({ phone, onBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const { themePalette, name } = useDemoTheme();
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
  const { bgCream, textSage, accentSand } = palettes[themePalette] || palettes['cream-sage'];

  // Automatically pop up after 6 seconds to be friendly
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  // WhatsApp Pre-filled message
  const waMessage = encodeURIComponent(`Hello, I'd like to enquire about booking a consultation at ${name}.`);
  // Strip spaces from phone for WA link
  const waNumber = phone ? phone.replace(/\s+/g, '') : '';

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setIsOpen(true); setHasOpened(true); }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] p-4 sm:p-5 rounded-full shadow-[0_10px_40px_-10px_rgba(44,76,59,0.4)] flex items-center justify-center transition-opacity hover:opacity-80"
        style={{ backgroundColor: textSage, color: bgCream }}
        aria-label="Open concierge chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[70] w-[calc(100vw-48px)] sm:w-[400px] rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-black/5"
            style={{ backgroundColor: accentSand }}
            role="dialog"
            aria-label="Dental Concierge"
          >
            {/* Header */}
            <div className="p-5 flex justify-between items-center border-b border-black/5" style={{ backgroundColor: bgCream }}>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&w=150&q=80" 
                    alt="Patient Coordinator" 
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide" style={{ color: textSage, fontFamily: 'var(--font-jakarta)' }}>Sarah</h4>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500">Patient Coordinator</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-6 min-h-[160px] flex flex-col justify-end">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-2xl rounded-tl-none shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-black/5 text-sm leading-relaxed"
                style={{ backgroundColor: bgCream, color: textSage, fontFamily: 'var(--font-jakarta)' }}
              >
                <p className="mb-3">Welcome to {name}. 👋</p>
                <p>I'm here to help you get started. Would you like to schedule a private consultation, or would you prefer to speak directly with our team?</p>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="p-5 border-t border-black/5 flex flex-col gap-3" style={{ backgroundColor: bgCream }}>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onBook();
                }}
                className="w-full py-3.5 px-4 flex items-center justify-center gap-3 rounded-xl font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: textSage, color: bgCream, fontFamily: 'var(--font-jakarta)' }}
              >
                <Calendar size={18} />
                Book a Consultation
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl font-medium border transition-colors hover:bg-slate-50 text-sm"
                  style={{ borderColor: accentSand, color: textSage }}
                >
                  <MessageSquare size={16} />
                  WhatsApp
                </a>
                <a 
                  href={`tel:${phone}`}
                  className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl font-medium border transition-colors hover:bg-slate-50 text-sm"
                  style={{ borderColor: accentSand, color: textSage }}
                >
                  <Phone size={16} />
                  Call Clinic
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
