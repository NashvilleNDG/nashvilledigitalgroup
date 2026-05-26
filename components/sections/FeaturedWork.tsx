"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react"

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    client: "Nashville Realty Group",
    category: "Web Design  ·  Local SEO  ·  Google Ads",
    description:
      "Complete digital transformation for Nashville's fastest-growing real estate firm. Rebuilt their web presence from scratch, launched hyper-local SEO, and ran precision PPC campaigns that dominated competitive keywords.",
    result: { metric: "312%", label: "Increase in qualified leads within 90 days" },
    tags: ["Web Design", "Local SEO", "PPC"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=85&auto=format",
    accent: "#38BDF8",
  },
  {
    id: 2,
    client: "Music City Kitchen",
    category: "Web Design  ·  Social Media  ·  Email Marketing",
    description:
      "Built a stunning online presence for this award-winning Nashville restaurant. Custom booking system, professional menu design, and a social strategy that grew their following to 50k+ and kept tables full year-round.",
    result: { metric: "2.4×", label: "Revenue growth after 6-month campaign" },
    tags: ["Web Design", "Social Media", "Email"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=85&auto=format",
    accent: "#38BDF8",
  },
  {
    id: 3,
    client: "Tennessee Auto Group",
    category: "Web Development  ·  Automotive SEO  ·  Video Ads",
    description:
      "Modernized their dealer website with real-time inventory integration, AI chat, and a statewide SEO campaign targeting every major Tennessee metro. Video ad creative that broke category benchmarks.",
    result: { metric: "540+", label: "Vehicles sold through digital channels in Q1" },
    tags: ["Web Dev", "SEO", "Video Ads"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=85&auto=format",
    accent: "#38BDF8",
  },
  {
    id: 4,
    client: "Brentwood Med Spa",
    category: "Branding  ·  Web Design  ·  Instagram Ads",
    description:
      "Luxury rebrand for Brentwood's premier medical spa. New visual identity, high-converting landing pages, and Instagram ad funnels that tripled new client bookings and elevated their market positioning.",
    result: { metric: "3×", label: "New client bookings month over month" },
    tags: ["Branding", "Web Design", "Paid Social"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=85&auto=format",
    accent: "#38BDF8",
  },
  {
    id: 5,
    client: "Clearview Dental",
    category: "Local SEO  ·  Web Design  ·  Reputation Management",
    description:
      "Helped this multi-location dental practice dominate local search results across 4 Nashville-area locations. Reputation management pushed their average Google rating from 3.8 to 4.9 stars.",
    result: { metric: "4.9 ★", label: "Google rating across all 4 locations" },
    tags: ["Local SEO", "Web Design", "Reviews"],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1400&q=85&auto=format",
    accent: "#38BDF8",
  },
]

// ─── Slide variants ───────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,   // reduced from ±80 — less overflow risk
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function FeaturedWork() {
  const [index, setIndex]     = useState(0)
  const [direction, setDir]   = useState(1)
  const project               = projects[index]

  const go = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1)
      setIndex(next)
    },
    [index],
  )

  const prev = () => go(index === 0 ? projects.length - 1 : index - 1)
  const next = () => go(index === projects.length - 1 ? 0 : index + 1)

  return (
    <section className="relative bg-[#05080f] py-24 md:py-32 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20 bg-sky-400" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
              FEATURED
              <span className="block gradient-text">WORK</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-base leading-relaxed md:text-right">
            Our passion is to provide innovative, highly functional, and visually
            compelling digital experiences that drive real business growth.
          </p>
        </div>

        {/* ── Carousel ── */}
        {/* overflow-hidden clips the x:±80 slide animations so they never
            create horizontal overflow that can trap or confuse scroll */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center"
            >
              {/* ── Left: Project Info ── */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                        background: `${project.accent}12`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Client name */}
                <div>
                  <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {project.client}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                {/* Result stat */}
                <div
                  className="flex items-center gap-4 rounded-2xl p-4 border"
                  style={{
                    background: `${project.accent}08`,
                    borderColor: `${project.accent}25`,
                  }}
                >
                  <span
                    className="text-4xl font-black leading-none shrink-0"
                    style={{ color: project.accent }}
                  >
                    {project.result.metric}
                  </span>
                  <span className="text-white/80 text-sm leading-snug">
                    {project.result.label}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: project.accent }}
                  >
                    <ExternalLink size={15} />
                    View Website
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/80 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200">
                    <ArrowRight size={15} />
                    Case Study
                  </button>
                </div>
              </div>

              {/* ── Right: Browser Mockup ── */}
              <div className="lg:col-span-3">
                <div className="relative">
                  {/* Glow behind mockup */}
                  <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 scale-95 translate-y-4 pointer-events-none bg-sky-400" />

                  {/* Browser frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117]">
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-white/5">
                      {/* Traffic lights */}
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                      </div>
                      {/* URL bar */}
                      <div className="flex-1 mx-2 bg-white/5 rounded-md h-6 flex items-center px-3 gap-2">
                        <div className="w-3 h-3 rounded-full border border-white/20 shrink-0" />
                        <span className="text-[10px] text-white/25 truncate">
                          nashvilledigitalgroup.com/work/{project.client.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={project.image}
                        alt={`${project.client} website`}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Subtle overlay at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05080f]/60 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-12">
            {/* Dot indicators */}
            <div className="flex gap-2 items-center">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => go(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                  style={{
                    width: i === index ? 32 : 8,
                    background: i === index ? project.accent : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Counter + Arrows */}
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-mono">
                <span className="text-white font-semibold">{String(index + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
