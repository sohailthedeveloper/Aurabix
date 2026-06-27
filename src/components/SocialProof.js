"use client"

const metrics = [
  "£10M+ Client Revenue Generated", 
  "Zenith Dental Platform Launch",
  "400% GA4 Ads Attribution ROI", 
  "Luxe MedSpa Scaled by 48%",
  "10x Organic Google Traffic", 
  "Apex SaaS static migration",
  "Elite Web Infrastructure Built", 
  "Rank #1 Implants Keywords"
]

export default function SocialProof() {
  return (
    <section className="py-14 bg-[#090710]/25 border-y border-white/5 overflow-hidden relative z-10">
      
      {/* Injecting Pure Hardware-Accelerated CSS Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-gpu-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
      ` }} />

      {/* Left/Right Vignette Blurs for Premium Lighting Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05040a] via-[#05040a]/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05040a] via-[#05040a]/40 to-transparent z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden w-full">
        <div className="marquee-gpu-track gap-20 pr-20 items-center transform-gpu">
          {/* Double array map for seamless infinite scrolling loop */}
          {[...metrics, ...metrics].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 font-display text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-muted/30 whitespace-nowrap hover:text-gold transition-colors duration-300 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rotate-45 border border-gold/40 group-hover:bg-gold transition-colors shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
