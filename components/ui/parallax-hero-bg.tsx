"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxHeroBg() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Image drifts down as hero scrolls out (parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.18, 0.06])
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.22])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <motion.img
        src="/nashville-downtown.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
        style={{ y, opacity, scale }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030812]/65 via-[#030812]/30 to-[#030812]/85" />
    </div>
  )
}
