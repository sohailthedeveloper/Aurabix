"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your clinic's positioning, high-ticket treatments, and current traffic bottlenecks to architect a bespoke conversion strategy."
  },
  {
    number: "02",
    title: "UI/UX & Architecture",
    description: "Designing the Glassmorphism interfaces, interactive booking flows, and chatbot dialogs tailored to your unique clinical brand."
  },
  {
    number: "03",
    title: "Edge-Code Engineering",
    description: "Developing the architecture using React and Next.js, ensuring 99/100 Lighthouse speed scores and buttery smooth Framer Motion animations."
  },
  {
    number: "04",
    title: "Deployment & Scaling",
    description: "Pushing the machine live to Vercel's global edge network, followed by continuous monthly conversion rate optimization."
  }
];

export default function AgencyProcess() {
  return (
    <section className="py-24 sm:py-32 bg-[#030303] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Our Methodology</h2>
          <p className="text-white/50 text-lg">A systematic approach to engineering high-ticket conversion machines.</p>
        </div>

        <div className="space-y-12 sm:space-y-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-16"
            >
              <div className="shrink-0">
                <span className="text-5xl sm:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-black/20">
                  {step.number}
                </span>
              </div>
              <div className="pt-2 sm:pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
