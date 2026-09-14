"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useDemoTheme } from './DemoThemeProvider';

const testimonials = [
  {
    id: 1,
    text: "I hadn't been to a dentist in 10 years out of pure fear. The team here didn't judge me once. They held my hand through the entire process. It was genuinely life-changing.",
    author: "Eleanor R.",
    treatment: "General Dentistry"
  },
  {
    id: 2,
    text: "The absolute pinnacle of private dental care. From the beautiful interior to the completely pain-free treatment, they have redefined what a dental visit should feel like.",
    author: "Marcus T.",
    treatment: "Porcelain Veneers"
  },
  {
    id: 3,
    text: "Discreet, highly professional, and exceptionally skilled. Dr. Harrison and his team transformed my smile with Invisalign. I couldn't be happier with the natural results.",
    author: "Sophia L.",
    treatment: "Invisalign Alignment"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { themePalette } = useDemoTheme();
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
  const { textSage, accentSand, mutedText } = palettes[themePalette] || palettes['cream-sage'];
  
  const fontHeading = { fontFamily: 'var(--font-playfair), serif' };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <div 
      className="w-full relative px-4 py-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Decorative Quote Mark */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[120px] leading-none opacity-20 pointer-events-none" 
        style={{ ...fontHeading, color: accentSand }}
      >
        "
      </div>

      <div className="max-w-4xl mx-auto relative h-[250px] sm:h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 sm:px-16"
          >
            {/* Stars */}
            <div className="flex gap-1.5 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={textSage} stroke={textSage} />
              ))}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl leading-[1.6] mb-8" style={{ ...fontHeading, color: textSage }}>
              {testimonials[currentIndex].text}
            </p>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest" style={{ color: textSage }}>
                {testimonials[currentIndex].author}
              </p>
              <p className="text-[13px] mt-1 opacity-80" style={{ color: mutedText }}>
                {testimonials[currentIndex].treatment}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-8 sm:mt-12">
        <button 
          onClick={handlePrev}
          className="p-3 rounded-full border transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
          style={{ borderColor: accentSand, color: textSage }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        
        {/* Indicators */}
        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: currentIndex === idx ? textSage : accentSand,
                transform: currentIndex === idx ? 'scale(1.2)' : 'scale(1)'
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-3 rounded-full border transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
          style={{ borderColor: accentSand, color: textSage }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
