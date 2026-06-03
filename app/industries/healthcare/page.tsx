import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const metadata: Metadata = {
  title: "Healthcare Digital Marketing Nashville | Medical Practice SEO & Ads | NDG",
  description:
    "HIPAA-compliant digital marketing for medical practices, dental offices, med spas & clinics in Nashville. Average 127% increase in appointment bookings. Free strategy session.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is your healthcare digital marketing HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every campaign we run for healthcare providers follows HIPAA guidelines. We never use patient data in retargeting, sign BAAs where required, and ensure all landing pages and forms meet compliance standards.",
      },
    },
    {
      "@type": "Question",
      name: "How long before we see more patient bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most practices see measurable increases in appointment requests within 30–60 days of launching PPC and local SEO campaigns. Organic SEO results compound over 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help manage our Google and Healthgrades reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our reputation management service monitors all major platforms — Google, Healthgrades, Zocdoc, Yelp — and automates review request workflows so satisfied patients leave feedback automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with dental offices, med spas, and specialty clinics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve a wide range of healthcare providers including general practitioners, dental offices, orthodontists, med spas, dermatology clinics, mental health practices, and more.",
      },
    },
    {
      "@type": "Question",
      name: "What is your pricing for healthcare marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our healthcare marketing packages start at $1,200/month and are customized based on your services, market, and goals. We offer a free strategy session to scope out exactly what's needed.",
      },
    },
  ],
}

export default function HealthcarePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] min-h-[80vh] flex items-center relative overflow-hidden py-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nashville-downtown.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#030812]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030812] to-transparent" />
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-teal-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Healthcare &amp; Medical Practices
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                More Patients. More Bookings.
                <br />
                <span className="text-sky-400">Less Wasted Ad Spend.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Nashville Digital Group helps medical practices, dental offices, med spas, and clinics fill their
                schedules with HIPAA-compliant marketing that actually converts.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">Get Free Strategy Session →</ShimmerLink>
                <a
                  href="tel:6152000170"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  (615) 200-0170
                </a>
              </div>
              <div className="flex gap-6 justify-center mt-14 flex-wrap">
                {[
                  { value: 127, suffix: "%", label: "Avg Increase in Bookings" },
                  { value: 4.8, suffix: "★", label: "Avg Google Rating" },
                  { value: 68, suffix: "%", label: "Reduction in Cost-Per-Patient" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[150px]"
                  >
                    <p className="text-2xl font-black text-white">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-white text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Sound Familiar?</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                The Challenges Holding Your Practice{" "}
                <span className="text-sky-400">Back</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "shield",
                title: "HIPAA Compliance Anxiety",
                desc: "Most marketing agencies don't understand healthcare regulations. One wrong retargeting pixel or improperly stored form submission can put your practice at legal risk. You need a team that builds campaigns around compliance from day one.",
              },
              {
                icon: "map-pin",
                title: "Lost in Local Search",
                desc: "Patients search 'dentist near me' or 'med spa Nashville' and you're nowhere to be found. Meanwhile, a less qualified competitor down the street ranks #1. Your expertise isn't showing up where patients look.",
              },
              {
                icon: "calendar",
                title: "Visitors Who Don't Book",
                desc: "You're paying for clicks but the phone isn't ringing. Patients land on your site, browse your services, and leave without scheduling. Your website looks great but isn't converting visitors into booked appointments.",
              },
              {
                icon: "star",
                title: "Negative Reviews Killing Referrals",
                desc: "One or two negative reviews are dragging down your entire online reputation. Satisfied patients rarely leave reviews on their own, but unhappy ones always do. The result: a rating that doesn't reflect your quality of care.",
              },
            ].map((pain, index) => (
              <BlurFade key={pain.title} delay={0.15 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors">
                  <div className="w-11 h-11 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 ring-1 ring-sky-500/20">
                    <Icon name={pain.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pain.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{pain.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Solutions</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Healthcare Marketing Built{" "}
                <span className="text-sky-400">For Your Practice</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "search",
                title: "Local Medical SEO",
                desc: "Rank for 'dentist near me', 'med spa Nashville', and every high-intent phrase your future patients are searching. We optimize your Google Business Profile, build local citations, and create content that earns trust.",
                tags: ["Google Business Profile", "Local Citations", "Medical Content"],
              },
              {
                icon: "target",
                title: "HIPAA-Compliant PPC",
                desc: "Google Ads and Meta campaigns that drive appointment requests without putting your practice at legal risk. We use compliant tracking, HIPAA-safe landing pages, and conversion-focused ad copy.",
                tags: ["Google Ads", "Meta Ads", "Compliant Tracking"],
              },
              {
                icon: "star",
                title: "Reputation Management",
                desc: "Automated review request campaigns that turn satisfied patients into 5-star reviews on Google, Healthgrades, and Zocdoc. We also monitor and respond to reviews on your behalf.",
                tags: ["Google Reviews", "Healthgrades", "Auto-Requests"],
              },
              {
                icon: "globe",
                title: "Medical Website Design",
                desc: "HIPAA-compliant websites with online booking integrations, patient portal links, and conversion-optimized layouts that turn visitors into scheduled appointments.",
                tags: ["Online Booking", "HIPAA Forms", "Mobile-First"],
              },
              {
                icon: "message-circle",
                title: "AI Patient Chatbot",
                desc: "An AI assistant on your website that answers FAQs, explains procedures, and collects appointment requests 24/7 — even at 11pm when your front desk is closed.",
                tags: ["24/7 Availability", "Appointment Capture", "FAQ Automation"],
              },
            ].map((solution, index) => (
              <BlurFade key={solution.title} delay={0.15 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors flex flex-col">
                  <div className="w-12 h-12 bg-sky-500/12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20">
                    <Icon name={solution.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{solution.title}</h3>
                  <p className="text-white text-sm leading-relaxed mb-4 flex-1">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-sky-500/8 text-sky-400 border border-sky-500/15 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Proven Results</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Numbers That Matter to{" "}
                <span className="text-sky-400">Your Practice</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: 127,
                suffix: "%",
                label: "Average Increase in Appointment Bookings",
                desc: "Across our healthcare clients in the first 6 months of working together.",
              },
              {
                value: 4.8,
                suffix: "★",
                label: "Average Google Rating After Reputation Management",
                desc: "Practices that start below 4.0 stars average 4.8 within 90 days of our review campaigns.",
              },
              {
                value: 68,
                suffix: "%",
                label: "Reduction in Cost-Per-New-Patient",
                desc: "By targeting high-intent local keywords and optimizing landing pages for conversion.",
              },
            ].map((kpi, index) => (
              <BlurFade key={kpi.label} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 text-center hover:border-sky-500/20 transition-colors">
                  <p className="text-5xl font-black text-sky-400 mb-2">
                    <NumberTicker value={kpi.value} />
                    {kpi.suffix}
                  </p>
                  <h3 className="text-white font-semibold text-base mb-3">{kpi.label}</h3>
                  <p className="text-white text-sm leading-relaxed">{kpi.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach Healthcare */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                How We Approach{" "}
                <span className="text-sky-400">Healthcare Marketing</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Compliance Audit",
                desc: "We start by reviewing your existing digital presence for HIPAA gaps — tracking pixels, contact forms, retargeting campaigns — and build a compliant foundation before we spend a dollar on ads.",
              },
              {
                step: "02",
                title: "Patient Journey Mapping",
                desc: "We map exactly how your ideal patient searches, compares providers, reads reviews, and decides to book — then align every marketing touchpoint with that journey.",
              },
              {
                step: "03",
                title: "Launch & Optimize",
                desc: "Campaigns go live with HIPAA-safe tracking, conversion-focused landing pages, and review automation. We optimize weekly based on real appointment data, not vanity metrics.",
              },
              {
                step: "04",
                title: "Reputation & Retention",
                desc: "We help you build a dominant online reputation and implement patient re-engagement campaigns so every patient you acquire becomes a long-term advocate.",
              },
            ].map((step, index) => (
              <BlurFade key={step.step} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors">
                  <p className="text-4xl font-black text-sky-400/30 mb-4">{step.step}</p>
                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{step.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="glass border border-white/6 rounded-2xl p-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sky-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                "Before NDG, we were spending $4,000 a month on Google Ads with almost no way to track if it was
                bringing in patients. Within 60 days of working with them, we had HIPAA-compliant tracking set up, our
                Google rating went from 4.1 to 4.9, and our new patient inquiries more than doubled. They actually
                understand healthcare."
              </blockquote>
              <div>
                <p className="text-white font-semibold text-lg">Dr. Sarah M.</p>
                <p className="text-sky-400 text-sm">Owner, Brentwood Med Spa — Brentwood, TN</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-alt py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Frequently Asked Questions
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Healthcare Marketing{" "}
                <span className="text-sky-400">FAQs</span>
              </h2>
            </div>
          </BlurFade>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <BlurFade key={faq.name} delay={0.1 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 hover:border-sky-500/20 transition-colors">
                  <h3 className="text-white font-semibold text-base mb-3">{faq.name}</h3>
                  <p className="text-white text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Fill Your Schedule?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free healthcare marketing strategy session. We'll show you exactly where you're losing patients and
              how to fix it — no obligation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Get Free Strategy Session →
              </ShimmerLink>
              <a
                href="tel:6152000170"
                className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
              >
                (615) 200-0170
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
