"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"

// Helper function to easily trigger the contact modal from anywhere in the app
export function openContactModal(data = {}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: data }))
  }
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [validationErrors, setValidationErrors] = useState({})

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  })

  // Listen for the custom event to open the modal
  useEffect(() => {
    const handleOpen = (e) => {
      const { service, budget } = e.detail || {}
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: service || "",
        budget: budget || "",
        message: ""
      })
      setErrorMessage("")
      setValidationErrors({})
      setIsSuccess(false)
      setIsOpen(true)
    }

    window.addEventListener("open-contact-modal", handleOpen)
    return () => window.removeEventListener("open-contact-modal", handleOpen)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Automatically open the modal if the URL contains "?contact=true"
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      if (params.get("contact") === "true") {
        setIsOpen(true)
      }
    }
  }, [])

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: "" }))
    }
  };

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Full Name is required"
    if (!formData.email.trim()) {
      errors.email = "Business Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) errors.message = "Please tell us a bit about your project"
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setIsSuccess(true)
    } catch (err) {
      setErrorMessage(err.message || "Failed to submit request. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => !isLoading && setIsOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0c0a15] to-[#050409] shadow-[0_0_50px_rgba(223,186,115,0.08)] z-10 overflow-hidden transform-gpu flex flex-col max-h-[90dvh]"
          >
            {/* Background Glows (behind z-0) */}
            <div className="absolute top-[-30%] right-[-30%] w-[70%] aspect-square rounded-full opacity-[0.03] pointer-events-none bg-gold filter blur-[100px] z-0" />
            <div className="absolute bottom-[-30%] left-[-30%] w-[70%] aspect-square rounded-full opacity-[0.03] pointer-events-none bg-electric filter blur-[100px] z-0" />

            {/* Sticky Modal Header */}
            <div className="relative p-6 pb-4 sm:p-8 sm:pb-4 border-b border-white/[0.06] bg-[#0c0a15]/95 backdrop-blur-md z-20 flex-shrink-0 flex justify-between items-start">
              <div className="pr-8">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-1.5">
                  Direct Scaling Partner
                </span>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-offwhite">
                  Request a Strategy <span className="text-gradient-gold">Consultation</span>
                </h2>
              </div>
              
              {/* Close Button - Stays sticky at top right */}
              <button
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
                className="p-2 rounded-full border border-white/5 bg-white/[0.02] text-muted hover:text-white hover:border-white/10 hover:bg-white/[0.05] transition-all disabled:opacity-50 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 z-10">
              {isSuccess ? (
                /* Success Content */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6 sm:py-10 transform-gpu"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Request Submitted Successfully
                  </h3>
                  <p className="text-muted text-sm sm:text-base max-w-md leading-relaxed font-light font-sans mb-8">
                    Your response has been submitted, thank you. Sohail Shaikh will review your business details and contact you shortly. A confirmation has been sent to your email.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3.5 rounded-full bg-offwhite text-black hover:bg-gold font-bold font-sans tracking-wider uppercase text-xs hover:-translate-y-0.5 transition-all duration-300 transform-gpu shadow-lg cursor-pointer"
                  >
                    Return to Site
                  </button>
                </motion.div>
              ) : (
                /* Contact Form Content */
                <div>
                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl border border-red-500/25 bg-red-500/5 text-red-400 text-sm font-sans font-light">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border text-offwhite placeholder:text-muted/40 font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                          validationErrors.name
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/10 focus:border-gold/40"
                        }`}
                      />
                      {validationErrors.name && (
                        <span className="block text-[11px] text-red-400 font-sans font-light mt-1">
                          {validationErrors.name}
                        </span>
                      )}
                    </div>

                    {/* Row 2: Email & Phone Number (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                          Business Email <span className="text-gold">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@yourcompany.com"
                          className={`w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border text-offwhite placeholder:text-muted/40 font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                            validationErrors.email
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-white/10 focus:border-gold/40"
                          }`}
                        />
                        {validationErrors.email && (
                          <span className="block text-[11px] text-red-400 font-sans font-light mt-1">
                            {validationErrors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-offwhite placeholder:text-muted/40 font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => handleInputChange("service", e.target.value)}
                          className="w-full px-5 py-3.5 rounded-xl bg-[#0c0a15] border border-white/10 text-offwhite font-sans text-sm focus:outline-none focus:border-gold/40 transition-all duration-300"
                        >
                          <option value="">Select Service...</option>
                          <option value="Premium Web Design & Dev">Premium Web Design & Dev</option>
                          <option value="Organic SEO Dominance">Organic SEO Dominance</option>
                          <option value="Social Media Authority">Social Media Authority</option>
                          <option value="Precision Paid Ads">Precision Paid Ads</option>
                          <option value="Video Production">Video Production</option>
                          <option value="Full-Stack Digital Growth">Full-Stack Digital Growth</option>
                          <option value="Other">Other / Custom Strategy</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                          Estimated Budget Tier
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="w-full px-5 py-3.5 rounded-xl bg-[#0c0a15] border border-white/10 text-offwhite font-sans text-sm focus:outline-none focus:border-gold/40 transition-all duration-300"
                        >
                          <option value="">Select Budget...</option>
                          <option value="Starter Pack">Starter ($499+ / ₹25k+)</option>
                          <option value="Business Growth Pack">Business Growth ($799+ / ₹40k+)</option>
                          <option value="Premium Brand Pack">Premium Brand ($1,499+ / ₹70k+)</option>
                          <option value="Custom Platform / Enterprise">Custom Platform ($3,999+ / ₹2L+)</option>
                          <option value="Not Sure / To Be Evaluated">To Be Evaluated</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted font-sans mb-2">
                        Tell us about your brand and scaling needs <span className="text-gold">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please share details such as your current website, business goals, and current acquisition issues..."
                        rows={4}
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.02] border text-offwhite placeholder:text-muted/40 font-sans text-sm focus:outline-none focus:bg-white/[0.04] transition-all duration-300 ${
                          validationErrors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/10 focus:border-gold/40"
                        }`}
                      />
                      {validationErrors.message && (
                        <span className="block text-[11px] text-red-400 font-sans font-light mt-1">
                          {validationErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-gold to-[#B45309] text-black font-bold font-sans tracking-wide uppercase text-xs hover:shadow-[0_0_30px_rgba(223,186,115,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:pointer-events-none transform-gpu cursor-pointer"
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4.5 w-4.5 text-black" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing Project Details...
                          </>
                        ) : (
                          <>
                            Request Strategy Call
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
