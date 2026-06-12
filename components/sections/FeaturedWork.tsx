"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react"

// ─── Project data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    client: "The Grilled Cheeserie",
    url: "https://the-grilled-cheeserie-copy-f1fa1a1c.base44.app",
    category: "Web Design  ·  Online Ordering  ·  Local SEO",
    description:
      "A bold, mobile-first build for Nashville's premier grilled cheese destination. We unified their café, food truck, and catering under one brand with interactive menus, location details, and seamless online ordering.",
    result: { metric: "3-in-1", label: "Café, food truck & catering on one platform" },
    tags: ["Web Design", "Online Ordering", "Local SEO"],
    image: "/work/grilled-cheeserie.jpg",
  },
  {
    id: 2,
    client: "Greenbrier Station",
    url: "https://greenbrierstation.com/",
    category: "Web Design  ·  Local SEO",
    description:
      "A clean, locally-optimized site for this neighborhood Shell station, grocery & deli in Greenbrier, TN. Built from scratch to make fuel, fresh groceries, and hot deli meals easy to find — and to win local search.",
    result: { metric: "Local", label: "Tuned for Google Maps & 'near me' search" },
    tags: ["Web Design", "Local SEO"],
    image: "/work/greenbrier-station.jpg",
  },
  {
    id: 3,
    client: "Blueoaak",
    url: "https://blueoaak.com/",
    category: "Web Design  ·  SEO  ·  Lead Generation",
    description:
      "A polished, conversion-focused website for a nationwide bookkeeping and accounting firm. Clear service pages for tax, payroll, and business setup, backed by SEO built to bring in small-business leads.",
    result: { metric: "Nationwide", label: "Lead-gen site for a US-wide finance firm" },
    tags: ["Web Design", "SEO", "Lead Gen"],
    image: "/work/blueoaak.jpg",
  },
  {
    id: 4,
    client: "The Green Ash",
    url: "https://thegreenash.com/",
    category: "Web Design  ·  Local SEO  ·  Branding",
    description:
      "A premium, galaxy-themed storefront for this Nashville smoke shop on Gallatin Pike. We built the brand experience around their cigars, accessories, CBD and Delta-8 lineup, with local SEO to drive walk-in traffic.",
    result: { metric: "Local", label: "Built to win Nashville map-pack visibility" },
    tags: ["Web Design", "Local SEO", "Branding"],
    image: "/work/green-ash.jpg",
  },
  {
    id: 5,
    client: "Palms Resort & Beach",
    url: "https://palmsresortbeach.com/",
    category: "Web Design  ·  Direct Booking  ·  SEO",
    description:
      "An immersive site for the only resort on St. Croix with a mile-long private palm-lined beach. We showcased the rooms, dining, and water activities and built a direct-booking flow that keeps revenue commission-free.",
    result: { metric: "Direct", label: "Commission-free bookings — no OTA fees" },
    tags: ["Web Design", "Booking", "SEO"],
    image: "/work/palms-resort.jpg",
  },
  {
    id: 6,
    client: "Indian Harbor Caterings",
    url: "https://indianharborcaterings.com/",
    category: "SEO  ·  AEO  ·  GEO",
    description:
      "Florida's most trusted catering company needed to own AI and local search. We delivered an SEO, AEO, and GEO strategy that surfaces their weddings and corporate catering across Florida — and inside AI answers.",
    result: { metric: "FL-wide", label: "AI-search visibility across Florida catering" },
    tags: ["SEO", "AEO", "GEO"],
    image: "/work/indian-harbor.jpg",
  },
  {
    id: 7,
    client: "Serene Minds Psychotherapy",
    url: "https://serenemindspsychotherapy.com/",
    category: "SEO  ·  AEO  ·  GEO  ·  Web",
    description:
      "A telehealth psychotherapy practice serving all 67 Florida counties. We optimized the site for SEO, AEO, and GEO so clients searching for therapy — in English, Gujarati, or Hindi — find them first.",
    result: { metric: "67/67", label: "Optimized to reach every Florida county" },
    tags: ["SEO", "AEO", "GEO"],
    image: "/work/serene-minds.jpg",
  },
]

// ─── Slide variants ───────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.35, ease: EASE },
  }),
}

export function FeaturedWork() {
  const [index, setIndex]   = useState(0)
  const [direction, setDir] = useState(1)
  const project             = projects[index]

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
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20 bg-sky-400" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            {/* Label */}
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase mb-3">
              Our Work
            </p>
            {/* Heading — FEATURED white, WORK solid sky blue */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
              <span className="text-white">FEATURED</span>
              <span className="block text-sky-400">WORK</span>
            </h2>
          </div>
          {/* Description — white */}
          <p className="max-w-sm text-white text-base leading-relaxed md:text-right">
            Our passion is to provide innovative, highly functional, and visually
            compelling digital experiences that drive real business growth.
          </p>
        </div>

        {/* ── Carousel ── */}
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

                {/* Tags — sky blue border + bg tint */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full border border-sky-400/30 bg-sky-400/10 text-sky-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category — white subheading */}
                <div>
                  <p className="text-xs font-semibold tracking-widest text-white uppercase mb-2">
                    {project.category}
                  </p>
                  {/* Client name — solid sky blue */}
                  <h3 className="text-3xl md:text-4xl font-black text-sky-400 leading-tight">
                    {project.client}
                  </h3>
                </div>

                {/* Description — white */}
                <p className="text-white text-[15px] leading-relaxed">
                  {project.description}
                </p>

                {/* Result stat — sky blue metric, white label */}
                <div className="flex items-center gap-4 rounded-2xl p-4 border border-sky-400/25 bg-sky-400/8">
                  <span className="text-4xl font-black leading-none shrink-0 text-sky-400">
                    {project.result.metric}
                  </span>
                  <span className="text-white text-sm leading-snug">
                    {project.result.label}
                  </span>
                </div>

                {/* Buttons — suppressHydrationWarning guards against browser
                    extensions (form-fillers/password managers) that inject
                    fdprocessedid attributes into buttons before hydration */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <ExternalLink size={15} />
                    View Website
                  </a>
                  <button
                    suppressHydrationWarning
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-200"
                  >
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
                    {/* Chrome bar */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 mx-2 bg-white/5 rounded-md h-6 flex items-center px-3 gap-2">
                        <div className="w-3 h-3 rounded-full border border-white/20 shrink-0" />
                        <span className="text-[10px] text-white/25 truncate">
                          {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
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
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05080f]/60 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-12">
            {/* Dot indicators — active = sky blue, inactive = white/15 */}
            <div className="flex gap-2 items-center">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  suppressHydrationWarning
                  onClick={() => go(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-sky-400 w-8" : "bg-white/20 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Counter + Arrows */}
            <div className="flex items-center gap-4">
              <span className="text-white text-sm font-mono">
                <span className="font-bold">{String(index + 1).padStart(2, "0")}</span>
                &nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  suppressHydrationWarning
                  onClick={prev}
                  aria-label="Previous project"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-sky-400 hover:text-sky-400 transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  suppressHydrationWarning
                  onClick={next}
                  aria-label="Next project"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-sky-400 hover:text-sky-400 transition-all duration-200"
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
