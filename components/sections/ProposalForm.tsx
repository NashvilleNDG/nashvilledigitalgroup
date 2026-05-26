"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

const inputBase =
  "w-full bg-white/8 border border-white/20 rounded-xl px-4 py-3.5 text-white font-medium text-[15px] placeholder:text-white focus:outline-none focus:border-sky-400 focus:bg-white/12 transition-all duration-200"

const labelBase = "text-[11px] font-bold text-white uppercase tracking-[0.18em]"

export function ProposalForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <section className="relative min-h-[700px] flex items-stretch overflow-hidden">

      {/* ── Nashville skyline background ── */}
      <img
        src="/nashville-downtown.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Base dark overlay — ensures minimum contrast everywhere */}
      <div className="absolute inset-0 bg-[#030812]/75" />

      {/* Left-side extra darkening — makes heading text crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030812]/80 via-[#030812]/40 to-transparent" />

      {/* Right-side darkening — makes form panel readable */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#030812]/70 via-transparent to-transparent" />

      {/* Top + bottom fades */}
      <div className="absolute inset-x-0 top-0    h-28 bg-gradient-to-b from-[#030812] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030812] to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full
                      grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">

        {/* ── Left: Headline ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-sky-400" />
            <p className="text-xs font-bold tracking-[0.28em] text-sky-400 uppercase">
              Rule the Web!
            </p>
          </div>

          {/* Heading — pure white + drop-shadow for depth over image */}
          <h2
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.0] tracking-tight mb-6 text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
          >
            REQUEST A<br />
            {/* Sky-blue highlight — solid colour, clearly readable */}
            <span className="text-sky-400">FREE STRATEGY</span><br />
            PROPOSAL.
          </h2>

          {/* Description — bright enough to read */}
          <p className="text-white text-base leading-relaxed max-w-sm"
             style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            Tell us about your business and goals. We&apos;ll put together a
            custom growth strategy — no cost, no obligation.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 mt-8">
            {["Free Consultation", "No Hidden Fees", "48-hr Response"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm font-medium text-white">
                <CheckCircle size={14} className="text-sky-400 shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-5 py-16 px-8
                            rounded-2xl border border-sky-400/25 bg-black/60 backdrop-blur-xl text-center">
              <div className="w-16 h-16 rounded-full bg-sky-400/15 border border-sky-400/40
                              flex items-center justify-center">
                <CheckCircle size={32} className="text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">We&apos;ll be in touch!</h3>
              <p className="text-white text-sm max-w-xs">
                Thanks for reaching out. A Nashville Digital Group strategist
                will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/12 bg-black/55 backdrop-blur-xl p-8 flex flex-col gap-4"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className={labelBase}>
                  Full Name <span className="text-sky-400">*</span>
                </label>
                <input required type="text" placeholder="John Smith" className={inputBase} />
              </div>

              {/* Job Title + Company */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className={labelBase}>Job Title</label>
                  <input type="text" placeholder="CEO / Owner" className={inputBase} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelBase}>
                    Company <span className="text-sky-400">*</span>
                  </label>
                  <input required type="text" placeholder="Your Company" className={inputBase} />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className={labelBase}>
                    Email <span className="text-sky-400">*</span>
                  </label>
                  <input required type="email" placeholder="john@company.com" className={inputBase} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelBase}>Phone</label>
                  <input type="tel" placeholder="(615) 000-0000" className={inputBase} />
                </div>
              </div>

              {/* Website */}
              <div className="flex flex-col gap-2">
                <label className={labelBase}>Website URL</label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className={inputBase}
                />
              </div>

              {/* Goals */}
              <div className="flex flex-col gap-2">
                <label className={labelBase}>
                  What are your business goals? <span className="text-sky-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you want to achieve — more leads, better rankings, higher conversions…"
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 flex items-center justify-center gap-2 w-full py-4 rounded-xl
                           bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-bold
                           text-sm tracking-wide transition-all duration-200
                           hover:scale-[1.02] active:scale-[0.98]
                           shadow-lg shadow-sky-500/25"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending…
                  </span>
                ) : (
                  <>
                    <Send size={15} />
                    Get My Free Proposal
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-white">
                No spam. No commitment. We respond within 24 hours.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
