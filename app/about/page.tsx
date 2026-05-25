import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { company, timeline, coreValues, awards } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nashville Digital Group — founded 2020, 25+ team members, 500+ clients transformed. AI-powered marketing agency in Nashville, TN.",
}

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/18 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                About Us
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Nashville&apos;s AI-Powered{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Marketing Leaders
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
                At Nashville Digital Group, we believe that every business deserves to thrive in the digital age. Our
                mission is to democratize access to cutting-edge AI-powered marketing solutions, making advanced
                technology accessible to businesses of all sizes.
              </p>
              {/* Stats row */}
              <div className="flex gap-8 justify-center flex-wrap">
                {[
                  { num: 25, suffix: "+", label: "Team Members" },
                  { num: 500, suffix: "+", label: "Clients Served" },
                  { num: 98, suffix: "%", label: "Satisfaction Rate" },
                  { num: 4.9, suffix: "★", label: "Glassdoor Rating", decimal: 1 },
                ].map((stat, i) => (
                  <BlurFade key={stat.label} delay={0.2 + i * 0.08} inView>
                    <div className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[110px]">
                      <div className="text-3xl font-black text-white tabular-nums">
                        <NumberTicker
                          value={stat.num}
                          delay={0.3 + i * 0.1}
                          decimalPlaces={stat.decimal ?? 0}
                          className="text-white"
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-section-alt border-y border-border/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlurFade delay={0.1} inView>
              <div className="glass border border-sky-500/15 rounded-2xl p-8 h-full hover:border-sky-500/30 transition-colors">
                <div className="w-12 h-12 bg-sky-500/15 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sky-400 text-sm uppercase tracking-widest mb-2">Our Mission</p>
                <h2 className="text-2xl font-bold text-white mb-4">Driving Digital Excellence</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  At Nashville Digital Group, we believe that every business deserves to thrive in the digital age. Our
                  mission is to democratize access to cutting-edge AI-powered marketing solutions, making advanced
                  technology accessible to businesses of all sizes. We combine human creativity with artificial
                  intelligence to deliver marketing strategies that drive real, measurable results.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="glass border border-violet-500/15 rounded-2xl p-8 h-full hover:border-violet-500/30 transition-colors">
                <div className="w-12 h-12 bg-violet-500/15 rounded-xl flex items-center justify-center mb-5 ring-1 ring-violet-500/20">
                  <span className="text-2xl">🔭</span>
                </div>
                <p className="text-violet-400 text-sm uppercase tracking-widest mb-2">Our Vision</p>
                <h2 className="text-2xl font-bold text-white mb-4">Leading the Southeast</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To be the leading AI-powered digital marketing agency in the Southeast, known for transforming
                  businesses through innovative technology and exceptional results. We envision a future where every
                  Nashville business has access to the tools and strategies that were once reserved for Fortune 500
                  companies.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Team Photography */}
      <section className="bg-background py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Meet the Team
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                The People Behind{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Your Growth
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
                25+ digital marketing experts, strategists, and AI engineers — all focused on one thing: your results.
              </p>
            </div>
          </BlurFade>

          {/* Photo grid */}
          <div className="grid grid-cols-12 gap-4 h-[520px]">
            {/* Large main photo */}
            <BlurFade delay={0.15} inView className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2 h-full">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85&auto=format"
                  alt="NDG team collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="glass border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    🤝 Strategy Sessions
                  </span>
                </div>
              </div>
            </BlurFade>

            {/* Top right */}
            <BlurFade delay={0.2} inView className="col-span-6 md:col-span-3 lg:col-span-4">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=85&auto=format"
                  alt="Team in meeting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </BlurFade>

            {/* Top far right */}
            <BlurFade delay={0.25} inView className="col-span-6 md:col-span-3 lg:col-span-3">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=85&auto=format"
                  alt="Team brainstorming"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </BlurFade>

            {/* Bottom right */}
            <BlurFade delay={0.3} inView className="col-span-6 md:col-span-3 lg:col-span-4">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=85&auto=format"
                  alt="Data analytics review"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="glass border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    📊 Data-Driven Results
                  </span>
                </div>
              </div>
            </BlurFade>

            {/* Bottom far right */}
            <BlurFade delay={0.35} inView className="col-span-6 md:col-span-3 lg:col-span-3">
              <div className="relative h-full rounded-2xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=85&auto=format"
                  alt="Creative team work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </BlurFade>
          </div>

          {/* Culture badges */}
          <BlurFade delay={0.4} inView>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {["🏆 Award-Winning Culture", "🌍 Remote-Friendly", "📚 L&D Budget $2K/yr", "🏥 Full Benefits", "🎉 Quarterly Retreats"].map((badge) => (
                <span key={badge} className="glass border border-white/8 text-slate-300 text-sm px-4 py-2 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Journey
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Five Years of{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
            </div>
          </BlurFade>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline vertical line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-sky-500/40 via-violet-500/30 to-transparent md:left-7" />
            {timeline.map((event, i) => (
              <BlurFade key={event.year} delay={0.1 + i * 0.1} inView>
                <div className="flex gap-6 md:gap-8 mb-10 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 z-10">
                    <span className="text-sky-400 font-black text-xs">{event.year}</span>
                  </div>
                  <div className="glass border border-white/6 rounded-2xl p-6 flex-1 hover:border-sky-500/20 transition-colors">
                    <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What We Stand For
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our Core{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value, i) => (
              <BlurFade key={value.title} delay={0.15 + i * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors group">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                    <Icon name={value.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Recognition
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Industry{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Awards &amp; Recognition
                </span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((award, i) => (
              <BlurFade key={award.title} delay={0.15 + i * 0.07} inView>
                <div className="glass border border-amber-500/15 rounded-2xl p-6 text-center h-full hover:border-amber-500/30 transition-colors">
                  <div className="text-3xl mb-4">🏆</div>
                  <h3 className="text-white font-semibold mb-2">{award.title}</h3>
                  <p className="text-sky-400 text-sm">{award.org}</p>
                  <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/15 text-xs px-3 py-1 rounded-full mt-3">
                    {award.year}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Promise / CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-violet-700">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="text-5xl mb-6">💬</div>
            <blockquote className="text-xl md:text-2xl text-white/90 italic max-w-3xl mx-auto text-center leading-relaxed mb-8 font-light">
              &ldquo;We&apos;re committed to your success. If you&apos;re not satisfied with our results within the
              first 30 days, we&apos;ll work for free until you are — or provide a full refund.&rdquo;
            </blockquote>
            <p className="text-blue-200/80 font-semibold mb-8">— Sarah Johnson, CEO &amp; Founder</p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Start Your Free Consultation →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
