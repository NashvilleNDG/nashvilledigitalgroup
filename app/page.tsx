import type { Metadata } from "next"
import Link from "next/link"
import { company, stats, services, testimonials, whyChooseItems } from "@/lib/site-data"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { MagicCard } from "@/components/magicui/magic-card"
import { Marquee } from "@/components/magicui/marquee"
import { Meteors } from "@/components/magicui/meteors"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { HeroVisual } from "@/components/ui/hero-visual"
import { Icon } from "@/components/ui/icon"
import { ParallaxHeroBg } from "@/components/ui/parallax-hero-bg"
import { TextReveal } from "@/components/ui/text-reveal"
import { Magnetic } from "@/components/ui/magnetic"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { ProposalForm } from "@/components/sections/ProposalForm"
import { TrustBadges } from "@/components/ui/trust-badges"
import { VideoTestimonials } from "@/components/ui/video-testimonials"
import { TechStack } from "@/components/ui/tech-stack"

export const metadata: Metadata = {
  title: "Nashville Digital Group | AI-Powered Digital Marketing Agency",
  description:
    "Nashville's #1 AI-powered digital marketing agency. 500+ businesses transformed. 98% client satisfaction. Free strategy consultation. Call (615) 200-0170.",
}

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030812]">
        {/* Parallax skyline background */}
        <ParallaxHeroBg />

        {/* Dot grid */}
        <DotPattern className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <BlurFade delay={0.1} inView>
                <div className="inline-flex items-center border border-sky-500/25 bg-sky-500/8 rounded-full mb-6 overflow-hidden">
                  <AnimatedShinyText className="px-4 py-1.5 text-sm font-medium text-sky-400" shimmerWidth={200}>
                    🚀 Nashville&apos;s #1 AI-Powered Marketing Agency
                  </AnimatedShinyText>
                </div>
              </BlurFade>

              {/* Hero h1 — word-by-word clip reveal */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6">
                <TextReveal
                  as="span"
                  className="block text-white"
                  delay={0.15}
                  wordDelay={0.07}
                >
                  Grow Faster
                </TextReveal>
                <TextReveal
                  as="span"
                  className="block text-sky-400"
                  delay={0.38}
                  wordDelay={0.1}
                >
                  With AI.
                </TextReveal>
              </h1>

              <BlurFade delay={0.6} inView>
                <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-xl">
                  {company.tagline}
                </p>
              </BlurFade>

              <BlurFade delay={0.7} inView>
                <div className="flex gap-4 flex-wrap">
                  <Magnetic strength={0.3}>
                    <ShimmerLink href="/contact" shimmerDuration="2.5s">
                      Get Free Consultation →
                    </ShimmerLink>
                  </Magnetic>
                  <Magnetic strength={0.3}>
                    <Link
                      href="/services"
                      className="border border-white/10 hover:border-sky-500/50 text-white hover:text-white px-6 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm"
                    >
                      View Services
                    </Link>
                  </Magnetic>
                </div>
              </BlurFade>

              <BlurFade delay={0.8} inView>
                <div className="flex items-center gap-6 mt-10 flex-wrap text-sm text-white">
                  <span className="flex items-center gap-1.5"><span className="text-sky-400">✓</span> 30-Day Money Back</span>
                  <span className="flex items-center gap-1.5"><span className="text-sky-400">✓</span> Free Strategy Call</span>
                  <span className="flex items-center gap-1.5"><span className="text-sky-400">✓</span> No Hidden Fees</span>
                </div>
              </BlurFade>
            </div>

            {/* Right: Animated visual */}
            <BlurFade delay={0.4} inView direction="left" className="w-full">
              <div className="relative h-[520px]">
                <HeroVisual />
                <div className="absolute bottom-5 left-5 z-30">
                  <div className="glass border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold">25+ Experts. 500+ Brands Scaled.</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Stats + Trusted By — combined social proof ── */}
      <section className="bg-white border-y border-slate-100 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-slate-100">
            {[
              { num: 500, suffix: "+", label: "Clients Served" },
              { num: 98, suffix: "%", label: "Satisfaction Rate" },
              { num: 300, suffix: "%", label: "Avg ROI (90 Days)" },
              { num: 1500000, suffix: "+", label: "Leads Generated", short: "1.5M" },
              { num: 4.9, suffix: "★", label: "Glassdoor Rating", decimal: 1 },
            ].map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 + i * 0.08} inView>
                <div className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-black text-sky-600 tabular-nums leading-none mb-1">
                    {stat.short ? (
                      <>{stat.short}{stat.suffix}</>
                    ) : (
                      <>
                        <NumberTicker
                          value={stat.num}
                          delay={0.2 + i * 0.08}
                          decimalPlaces={stat.decimal ?? 0}
                          className="text-sky-600"
                        />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 mt-10 pt-10">
            {/* Trusted By marquee */}
            <BlurFade delay={0.1} inView>
              <p className="text-center text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold mb-8">
                Trusted by Nashville&apos;s Leading Businesses
              </p>
            </BlurFade>
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
              <Marquee className="[--duration:28s]" pauseOnHover>
                {[
                  { name: "Big Pigs Wine & Spirits", icon: "🍷" },
                  { name: "Maharani Collections", icon: "👗" },
                  { name: "The Lounge at 2nd", icon: "🍸" },
                  { name: "Nashville Realty Group", icon: "🏠" },
                  { name: "Music City Motors", icon: "🚗" },
                  { name: "Brentwood Med Spa", icon: "💆" },
                  { name: "Tennessee Eats", icon: "🍔" },
                  { name: "Clearview Dental", icon: "🦷" },
                ].map((client) => (
                  <div
                    key={client.name}
                    className="mx-4 flex items-center gap-2.5 shrink-0 bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
                  >
                    <span className="text-lg">{client.icon}</span>
                    <span className="text-slate-600 text-sm font-medium whitespace-nowrap">{client.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
            <BlurFade delay={0.3} inView>
              <p className="text-center text-slate-400 text-xs mt-8">
                + 490 more businesses growing with NDG
              </p>
            </BlurFade>
          </div>

        </div>
      </section>

      {/* ── Services — Navy Blue (accent) ── */}
      <section className="bg-[#071427] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-white text-sm font-semibold uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="text-sky-400">Complete</span>{" "}
                <span className="text-sky-400">
                  Digital Solutions
                </span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto">
                From AI-powered campaigns to custom web development — everything your business needs to dominate online.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((service, i) => (
              <BlurFade key={service.id} delay={0.15 + i * 0.07} inView>
                <MagicCard
                  className="rounded-2xl h-full cursor-default"
                  gradientFrom="#38bdf8"
                  gradientTo="#818cf8"
                  gradientOpacity={0.12}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-sky-500/12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20">
                      <Icon name={service.icon} className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-sky-400 font-semibold text-lg mb-1">{service.title}</h3>
                    <p className="text-white text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-white text-xs flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-sky-500/60 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.6} inView>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors text-sm group"
              >
                View All 10 Services
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Why NDG — White ── */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <BlurFade delay={0.1} inView>
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Why NDG</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">
                The AI-First Agency
                <br />
                <span className="text-sky-600">
                  Built for Growth
                </span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We&apos;re committed to your success. If you&apos;re not satisfied within the first 30 days, we&apos;ll
                work for free until you are — or provide a full refund.
              </p>
              <p className="text-sm text-slate-400 italic mb-8">— Sarah Johnson, CEO</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseItems.slice(0, 8).map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <span className="text-sky-600 text-xs font-bold">✓</span>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: 500, suffix: "+", label: "Clients Served", bg: "bg-sky-50", border: "border-sky-200", numColor: "text-sky-700" },
                  { num: 98, suffix: "%", label: "Satisfaction Rate", bg: "bg-sky-50", border: "border-sky-200", numColor: "text-sky-700" },
                  { num: 300, suffix: "%", label: "Avg ROI in 90 Days", bg: "bg-sky-50", border: "border-sky-200", numColor: "text-sky-600" },
                  { num: 4.9, suffix: "★", label: "Glassdoor Rating", decimal: 1, bg: "bg-sky-50", border: "border-sky-100", numColor: "text-sky-500" },
                ].map((stat, i) => (
                  <div key={stat.label} className={`rounded-2xl p-6 text-center border-2 ${stat.border} ${stat.bg} shadow-sm`}>
                    <div className={`text-3xl font-black tabular-nums mb-1 ${stat.numColor}`}>
                      <NumberTicker value={stat.num} delay={0.3 + i * 0.1} decimalPlaces={stat.decimal ?? 0} className={stat.numColor} />
                      {stat.suffix}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Testimonials — Light Gray ── */}
      <section className="bg-slate-50 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Client Success Stories
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                What Our{" "}
                <span className="text-sky-600">
                  Clients Say
                </span>
              </h2>
            </div>
          </BlurFade>

          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:32s]">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.name} className="w-80 shrink-0 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col mx-3 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  {t.metric && (
                    <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start border border-sky-200">
                      {t.metric}
                    </span>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:32s] mt-4">
              {testimonials.slice(3).map((t) => (
                <div key={t.name} className="w-80 shrink-0 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col mx-3 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  {t.metric && (
                    <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start border border-sky-200">
                      {t.metric}
                    </span>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          <BlurFade delay={0.4} inView>
            <div className="text-center mt-10">
              <Link href="/testimonials" className="text-sky-600 hover:text-sky-500 text-sm font-medium transition-colors">
                Read All Reviews →
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <VideoTestimonials />

      {/* ── Tech Stack ── */}
      <TechStack />

      {/* ── Featured Work ── */}
      <FeaturedWork />

      {/* ── Proposal Form ── */}
      <ProposalForm />

      {/* ── CTA (Bright Gradient) ── */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={18} />
        {/* Inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Start Today
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Ready to Transform
              <br />
              Your Business?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-10">
              Join 500+ businesses that have already accelerated their growth with Nashville Digital Group.
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
              No commitment required · Free 30-minute strategy session
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
