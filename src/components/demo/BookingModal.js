"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoTheme } from './DemoThemeProvider';
import { X, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const { clinicName, token, layout, themePalette } = useDemoTheme();
  
  const [step, setStep] = useState(1);
  const [treatment, setTreatment] = useState('Consultation');
  const [day, setDay] = useState('Today');
  const [time, setTime] = useState('09:30 AM');
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Boutique Palette Theme Mapping
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
  
  // Font styles inline for modal encapsulation
  const fontHeading = { fontFamily: 'var(--font-playfair), serif' };
  const fontBody = { fontFamily: 'var(--font-jakarta), sans-serif' };

  if (!isOpen) return null;

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);

    if (token) {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token,
          name: clinicName,
          template: layout || 'dental-v2',
          page: 'demo',
          action: `Booked mock appointment: ${treatment} (${day} at ${time})`
        })
      }).catch(() => {});
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    }}>
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(12px)' }}
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          width: '100%', maxWidth: '500px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', backgroundColor: bgCream,
          borderRadius: '32px', overflow: 'hidden', position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(44, 76, 59, 0.25)', border: '1px solid rgba(255, 255, 255, 0.5)',
          ...fontBody, color: textSage
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors z-20"
          style={{ color: mutedText }}
        >
          <X size={20} />
        </button>

        <div className="relative overflow-hidden w-full flex-1 min-h-[450px] sm:min-h-[500px]">
          <AnimatePresence mode="wait" custom={step === 1 ? -1 : 1}>
            
            {/* ── STEP 1: TIME & TREATMENT ── */}
            {step === 1 && (
              <motion.div 
                key="step1" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 sm:p-10 overflow-y-auto"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl mb-2" style={fontHeading}>Private Consultation</h3>
                  <p className="text-sm" style={{ color: mutedText }}>Select your preferred schedule at {clinicName}</p>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: mutedText }}>Select Treatment</label>
                  <select 
                    value={treatment} onChange={(e) => setTreatment(e.target.value)}
                    className="w-full p-4 rounded-2xl outline-none text-sm transition-colors border"
                    style={{ backgroundColor: 'transparent', borderColor: accentSand, color: textSage }}
                  >
                    <option value="Consultation">Free Invisalign Consultation</option>
                    <option value="Implants">Dental Implants Consultation</option>
                    <option value="Veneers">Porcelain Veneers Consultation</option>
                    <option value="General">Comprehensive Oral Health Check</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: mutedText }}>Choose Day</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today', 'Tomorrow', 'Monday'].map((d) => (
                      <button
                        key={d} type="button" onClick={() => setDay(d)}
                        className="py-3 text-sm font-medium rounded-2xl transition-all border"
                        style={{
                          borderColor: day === d ? textSage : accentSand,
                          backgroundColor: day === d ? textSage : 'transparent',
                          color: day === d ? bgCream : textSage
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: mutedText }}>Choose Time</label>
                  <div className="flex flex-wrap gap-2">
                    {['09:30 AM', '11:00 AM', '02:15 PM', '04:30 PM'].map((t) => (
                      <button
                        key={t} type="button" onClick={() => setTime(t)}
                        className="py-2.5 px-5 text-sm font-medium rounded-full transition-all border"
                        style={{
                          borderColor: time === t ? textSage : accentSand,
                          backgroundColor: time === t ? textSage : 'transparent',
                          color: time === t ? bgCream : textSage
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleNext}
                  className="w-full py-4 rounded-full flex justify-center items-center gap-2 font-medium transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: textSage, color: bgCream }}
                >
                  Continue <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {/* ── STEP 2: DETAILS ── */}
            {step === 2 && (
              <motion.div 
                key="step2" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 sm:p-10 overflow-y-auto"
              >
                <div className="flex items-center mb-8">
                  <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-black/5" style={{ color: mutedText }}>
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex-1 text-center pr-6">
                    <h3 className="text-2xl mb-1" style={fontHeading}>Your Details</h3>
                    <p className="text-xs" style={{ color: mutedText }}>{treatment} • {day} at {time}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 mb-10">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: mutedText }}>Full Name</label>
                    <input 
                      type="text" required placeholder="Eleanor Rigby"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 rounded-2xl outline-none text-sm transition-colors border"
                      style={{ backgroundColor: 'transparent', borderColor: accentSand, color: textSage }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: mutedText }}>Email Address</label>
                    <input 
                      type="email" required placeholder="eleanor@example.com"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 rounded-2xl outline-none text-sm transition-colors border"
                      style={{ backgroundColor: 'transparent', borderColor: accentSand, color: textSage }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: mutedText }}>Phone Number</label>
                    <input 
                      type="tel" required placeholder="07000 000 000"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 rounded-2xl outline-none text-sm transition-colors border"
                      style={{ backgroundColor: 'transparent', borderColor: accentSand, color: textSage }}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full py-4 rounded-full font-medium transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: textSage, color: bgCream }}
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ── STEP 3: SUCCESS ── */}
            {step === 3 && (
              <motion.div 
                key="step3" custom={1} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl" style={{ backgroundColor: textSage, color: bgCream }}>
                  <CheckCircle2 size={40} />
                </div>
                
                <h3 className="text-3xl mb-3" style={fontHeading}>Booking Confirmed</h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: mutedText }}>
                  Thank you, {formData.name.split(' ')[0]}. We look forward to seeing you for your {treatment} on {day} at {time}. We will send a confirmation email shortly.
                </p>

                <div className="p-4 rounded-2xl text-xs mb-8 border" style={{ backgroundColor: 'rgba(44, 76, 59, 0.05)', borderColor: accentSand, color: mutedText }}>
                  * This is a demonstration booking. In a production environment, this integrates seamlessly with Google Calendar and your clinic CRM.
                </div>

                <button 
                  onClick={onClose}
                  className="px-8 py-3 rounded-full font-medium transition-transform hover:scale-[1.02] border"
                  style={{ borderColor: textSage, color: textSage }}
                >
                  Return to Website
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
