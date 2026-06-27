"use client"

import { motion } from "framer-motion"

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/919579436423?text=Hi%20AuraBix%2C%20I%20am%20visiting%20the%20website%20and%20would%20love%20to%20consult%20on%20scaling%20my%20business%21"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#128C7E] text-white shadow-2xl transition-all duration-300 hover:bg-[#075E54] hover:shadow-[0_0_30px_rgba(18,140,126,0.5)] hover:-translate-y-1"
        id="floating-whatsapp-widget"
      >
        {/* Pulsing Outer Glow */}
        <span className="absolute inset-0 rounded-full bg-[#128C7E]/40 animate-ping opacity-75 group-hover:animate-none -z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.372-9.867 9.802-.001 1.73.473 3.41 1.37 4.91L2.013 22l6.634-1.74a9.7 9.7 0 00-.001-.001zM3.91 15.606c-.852-1.393-1.302-3-1.302-4.664.003-4.905 4.004-8.9 8.932-8.9a8.825 8.825 0 016.286 2.605c1.682 1.684 2.61 3.924 2.608 6.302-.004 4.905-4.005 8.9-8.931 8.9-1.587 0-3.14-.42-4.509-1.217l-.323-.191-3.957 1.037 1.055-3.854-.216-.343zM16.59 13.91c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.972-.94 1.172-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.492-.89-.8-1.49-1.79-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.57-.5-.5-.67-.51H7.84c-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.96 1.24 3.16c.15.2 2.15 3.28 5.21 4.6.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.3-.2-.6-.35z" />
        </svg>

        {/* Pulse Online Status Beacon */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#05040a] flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" />
        </span>

        {/* Message bubble on hover */}
        <div className="absolute right-20 bg-[#05040a] border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap text-offwhite opacity-0 pointer-events-none transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 shadow-xl">
          Chat with AuraBix
        </div>
      </a>
    </motion.div>
  )
}
