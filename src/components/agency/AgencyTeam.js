"use client";
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Sohail Shaikh",
    role: "Founder & Lead Architect",
    description: "The mastermind behind the AuraBix architecture. Specializing in high-ticket conversion systems and edge-computing.",
    image: "/founder.jpg"
  },
  {
    name: "Ayush Tyagi",
    role: "Director of Partnerships",
    description: "Driving clinic growth and strategic partnerships. Ensures our digital machines perfectly align with your business goals.",
    image: null
  }
];

export default function AgencyTeam() {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Meet the Engineers</h2>
          <p className="text-white/50 text-lg">The team building your next digital asset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border border-white/10 bg-[#0A0A0A] flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="text-4xl font-light text-white/20">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold tracking-tighter mb-1">{member.name}</h3>
              <p className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
