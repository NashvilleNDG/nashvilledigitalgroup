"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, BarChart3, CheckCircle2 } from "lucide-react"

const barHeights = [35, 55, 42, 78, 60, 88, 72, 100]

export function HeroVisual() {
  return (
    <div className="relative h-[520px] w-full hidden lg:block" aria-hidden="true">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/12 rounded-full blur-[80px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-2/3 w-48 h-48 bg-sky-500/10 rounded-full blur-[60px] animate-pulse-slow [animation-delay:1.5s]" />
      </div>

      {/* ── Central ROI card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 glass rounded-3xl p-5 glow-sky z-20"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-white">Avg. ROI</span>
          <div className="w-7 h-7 bg-sky-500/20 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </div>
        <div className="text-4xl font-black text-white tracking-tight mb-0.5">300%</div>
        <div className="text-xs text-sky-400 mb-4">↑ within 90 days</div>
        {/* Mini bar chart */}
        <div className="flex items-end gap-[3px] h-10">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.7 + i * 0.06, duration: 0.5, ease: "easeOut" }}
              className="flex-1 rounded-sm bg-gradient-to-t from-sky-500 to-sky-400/30"
            />
          ))}
        </div>
      </motion.div>

      {/* ── Top-left: Clients card ── */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="absolute top-10 left-2 glass rounded-2xl p-4 flex items-center gap-3 z-10 shadow-xl animate-float"
      >
        <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center shrink-0">
          <Users className="w-5 h-5 text-sky-400" />
        </div>
        <div>
          <div className="text-xl font-bold text-white leading-tight">500+</div>
          <div className="text-[11px] text-white">Clients Served</div>
        </div>
      </motion.div>

      {/* ── Bottom-right: Satisfaction card ── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-20 right-0 glass rounded-2xl p-4 flex items-center gap-3 z-10 shadow-xl animate-float-slow"
      >
        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-sky-400" />
        </div>
        <div>
          <div className="text-xl font-bold text-white leading-tight">98%</div>
          <div className="text-[11px] text-white">Satisfaction Rate</div>
        </div>
      </motion.div>

      {/* ── Top-right: AI badge ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.5 }}
        className="absolute top-20 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 z-10 border border-sky-500/20 animate-float-delayed"
      >
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-[11px] text-white font-medium">AI Active 24/7</span>
      </motion.div>

      {/* ── Bottom-left: Leads badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-28 left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 z-10 border border-sky-500/20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
        <span className="text-[11px] text-white font-medium">+127% Lead Gen</span>
      </motion.div>

      {/* ── Top-center: small wins list ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-4 left-1/2 -translate-x-1/4 glass rounded-xl p-3 z-10 space-y-1.5 animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      >
        {["SEO Rankings ↑", "Revenue ↑ 3x", "Leads Qualified"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
            <span className="text-[10px] text-white">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
