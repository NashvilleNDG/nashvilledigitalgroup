"use client"

import Link from "next/link"
import { testimonials } from "@/lib/site-data"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Marquee } from "@/components/magicui/marquee"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { Meteors } from "@/components/magicui/meteors"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { motion } from "framer-motion"

// Floating review score widget
function ReviewWidget({
  score,
  platform,
  color,
  delay,
  floatClass,
}: {
  score: string
  platform: string
  color: string
  delay: number
  floatClass: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`glass border border-white/10 rounded-2xl px-5 py-4 flex flex-col items-center gap-1 shadow-xl ${floatClass}`}
    >
      <div className={`text-2xl font-black ${color}`}>{score}</div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-amber-400 text-xs">★</span>
        ))}
      </div>
      <div className="text-white text-xs font-medium">{platform}</div>
    </motion.div>
  )
}

// Animated hero visual for testimonials
function TestimonialsHeroVisual() {
  return (
    <div className="relative w-full h-72 md:h-80">
      {/* Central score card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass border border-sky-500/30 rounded-3xl px-10 py-8 text-center shadow-2xl shadow-sky-500/10 animate-float">
          <div className="text-6xl font-black text-sky-400 leading-none mb-2">
            4.9
          </div>
          <div className="flex gap-1 justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-amber-400 text-xl">★</span>
            ))}
          </div>
          <div className="text-white text-sm font-semibold">Overall Rating</div>
          <div className="text-white text-xs mt-1">Across all platforms</div>
        </div>
      </motion.div>

      {/* Surrounding platform widgets */}
      <div className="absolute top-0 left-4 md:left-8">
        <ReviewWidget score="4.9★" platform="Google" color="text-sky-400" delay={0.4} floatClass="animate-float-slow" />
      </div>
      <div className="absolute top-0 right-4 md:right-8">
        <ReviewWidget score="4.8★" platform="Glassdoor" color="text-sky-400" delay={0.5} floatClass="animate-float-delayed" />
      </div>
      <div className="absolute bottom-0 left-8 md:left-16">
        <ReviewWidget score="5.0★" platform="Clutch" color="text-sky-400" delay={0.55} floatClass="animate-float" />
      </div>
      <div className="absolute bottom-0 right-8 md:right-16">
        <ReviewWidget score="4.9★" platform="Facebook" color="text-amber-400" delay={0.6} floatClass="animate-float-slow" />
      </div>

      {/* Faint connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
        <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="20%" y2="85%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <main className="bg-background">
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden bg-[#030812]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nashville-downtown.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#030812]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030812] to-transparent" />
        <DotPattern className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <BlurFade delay={0.1} inView>
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  Client Success Stories
                </p>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Real Results.
                  <br />
                  <span className="text-sky-400">
                    Real Clients.
                  </span>
                </h1>
                <p className="text-white text-lg max-w-xl leading-relaxed mb-10">
                  Join 500+ businesses that have transformed their digital presence and achieved measurable growth with Nashville Digital Group.
                </p>
              </BlurFade>

              {/* Stats row */}
              <BlurFade delay={0.25} inView>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: 500, suffix: "+", label: "Businesses" },
                    { num: 98, suffix: "%", label: "Satisfaction" },
                    { num: 4.9, suffix: "★", label: "Avg Rating", decimal: 1 },
                  ].map((stat, i) => (
                    <div key={stat.label} className="glass border border-white/8 rounded-2xl px-4 py-4 text-center">
                      <div className="text-2xl font-black text-white tabular-nums">
                        <NumberTicker
                          value={stat.num}
                          delay={0.4 + i * 0.1}
                          decimalPlaces={stat.decimal ?? 0}
                          className="text-white"
                        />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-white text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>

            {/* Right: animated visual */}
            <BlurFade delay={0.3} inView direction="left">
              <TestimonialsHeroVisual />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── All Testimonials (Marquee) ── */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What They Say
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Voices of{" "}
                <span className="text-sky-400">
                  Our Clients
                </span>
              </h2>
            </div>
          </BlurFade>

          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
            <Marquee pauseOnHover className="[--duration:35s]">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.name} className="w-80 shrink-0 glass border border-white/5 rounded-2xl p-6 flex flex-col mx-3 hover:border-sky-500/20 transition-colors">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  {t.metric && (
                    <span className="bg-sky-500/10 text-sky-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 self-start border border-sky-500/15">
                      {t.metric}
                    </span>
                  )}
                  <p className="text-white text-sm leading-relaxed flex-1 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white text-xs">{t.role} at {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
              {testimonials.slice(3).map((t) => (
                <div key={t.name} className="w-80 shrink-0 glass border border-white/5 rounded-2xl p-6 flex flex-col mx-3 hover:border-sky-500/20 transition-colors">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  {t.metric && (
                    <span className="bg-sky-500/10 text-sky-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 self-start border border-sky-500/15">
                      {t.metric}
                    </span>
                  )}
                  <p className="text-white text-sm leading-relaxed flex-1 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white text-xs">{t.role} at {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* ── Trust Proof Strip ── */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              Why Clients Choose NDG
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { value: "30-Day", label: "Money Back Guarantee", icon: "🛡️" },
                { value: "Free", label: "Strategy Consultation", icon: "📞" },
                { value: "24/7", label: "AI-Powered Support", icon: "🤖" },
                { value: "98%", label: "Client Retention Rate", icon: "🔒" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center hover:border-sky-300 hover:shadow-md transition-colors">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <p className="text-2xl font-bold text-sky-600">
                    {stat.value}
                  </p>
                  <p className="text-slate-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={16} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Join Our Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Ready to Be Our
              <br />Next Success Story?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-10">
              Let&apos;s build something great together. Start with a free strategy call — no commitment required.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                shimmerDuration="2.5s"
                className="text-white border-white/20"
              >
                Get Free Consultation →
              </ShimmerLink>
              <a
                href="tel:6152000170"
                className="border border-white/20 hover:border-white/40 text-white hover:text-white px-6 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                (615) 200-0170
              </a>
            </div>
            <p className="text-white text-sm mt-6">
              Free 30-minute session · No commitment required
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
