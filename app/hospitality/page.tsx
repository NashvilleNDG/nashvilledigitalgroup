import type { Metadata } from "next";
import Link from "next/link";
import { hospitalityFeatures, hospitalityCaseStudies, company } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerLink } from "@/components/magicui/shimmer-link";
import { Meteors } from "@/components/magicui/meteors";
import { Icon } from "@/components/ui/icon";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

export const metadata: Metadata = {
  title: "AI Solutions for Hospitality",
  description:
    "Revolutionize your hospitality business with AI. Boost revenue by 40%, automate guest communication, and optimize pricing with Nashville Digital Group.",
};

export default function HospitalityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] min-h-[75vh] flex items-center relative overflow-hidden py-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nashville-downtown.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#030812]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030812] to-transparent" />
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-sky-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                🏨 AI Solutions for Hospitality
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Boost Hotel Revenue With Generative AI
                <br />
                <span className="text-sky-400">
                  Up to 40%
                </span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Revolutionize your hospitality business with AI-powered guest communication, dynamic pricing, and streamlined operations.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">
                  Get a Free Demo →
                </ShimmerLink>
                <Link
                  href="#case-studies"
                  className="border border-white/10 hover:border-sky-500/40 text-white hover:text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
              {/* Hero stats */}
              <div className="flex gap-6 justify-center mt-14 flex-wrap">
                {[
                  { value: "+40%", label: "Average Revenue Boost" },
                  { value: "92%", label: "Inquiries Auto-Handled" },
                  { value: "24/7", label: "AI Guest Support" },
                ].map((stat) => (
                  <div key={stat.label} className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[130px]">
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-white text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 6 AI Features */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Six Ways AI Transforms Your{" "}
                <span className="text-sky-400">
                  Hotel
                </span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hospitalityFeatures.map((feature, index) => (
              <BlurFade key={feature.title} delay={0.15 + index * 0.07} inView>
                <SpotlightCard
                  className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors"
                  spotlightColor="rgba(56, 189, 248, 0.1)"
                >
                  <div className="w-12 h-12 bg-sky-500/12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20">
                    <Icon name={feature.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-sky-500/8 text-sky-400 border border-sky-500/15 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Proven Results
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Real Hotels. Real{" "}
                <span className="text-sky-400">
                  Results.
                </span>
              </h2>
            </div>
          </BlurFade>
          <div className="space-y-6">
            {hospitalityCaseStudies.map((study, index) => (
              <BlurFade key={study.property} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 hover:border-sky-500/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/3">
                      <p className="text-sky-400 text-xs uppercase tracking-widest mb-1">
                        Case Study
                      </p>
                      <h3 className="text-white text-xl font-bold mb-3">
                        {study.property}
                      </h3>
                      <p className="text-white text-xs uppercase tracking-widest">
                        Challenge:
                      </p>
                      <p className="text-white text-sm mt-1 mb-4">
                        {study.challenge}
                      </p>
                      <p className="text-white text-xs uppercase tracking-widest">
                        Solution:
                      </p>
                      <p className="text-white text-sm mt-1">
                        {study.solution}
                      </p>
                    </div>
                    <div className="md:w-2/3 bg-sky-500/4 border border-sky-500/10 rounded-xl p-6">
                      <p className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Results</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-start gap-2.5 text-white text-sm">
                            <span className="text-sky-400 mt-0.5 shrink-0">✓</span>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-background py-20 md:py-28 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Seamless Integration With Your{" "}
              <span className="text-sky-400">
                Existing Systems
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "🔌", title: "API-First Approach", desc: "Connect with any PMS, CRM, or booking system", color: "border-sky-500/15 hover:border-sky-500/30" },
                { icon: "🔒", title: "Secure & Compliant", desc: "Enterprise-grade security with full data compliance", color: "border-violet-500/15 hover:border-violet-500/30" },
                { icon: "🤝", title: "White-Glove Onboarding", desc: "Dedicated setup team and ongoing support", color: "border-emerald-500/15 hover:border-emerald-500/30" },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className={`glass border ${pillar.color} rounded-2xl p-6 text-center transition-colors`}
                >
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{pillar.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-white text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Transform Your Hotel?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Join leading Nashville hospitality businesses already using AI to drive revenue and delight guests.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Book a Free Demo →
              </ShimmerLink>
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="border border-white/20 hover:border-white/40 text-white hover:text-white px-6 py-3 rounded-xl transition-all duration-200"
              >
                {company.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
