import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const metadata: Metadata = {
  title: "Law Firm Digital Marketing Nashville | Legal SEO & PPC | NDG",
  description:
    "Digital marketing for Nashville law firms and attorneys. Bar-compliant SEO, PPC, and AI intake chatbots that convert after-hours leads. Average 89% increase in consultation requests. Free strategy session.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is your legal marketing compliant with Tennessee Bar advertising rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're familiar with Tennessee Supreme Court Rules on attorney advertising and build every campaign around those guidelines — including required disclaimers, prohibition on certain outcome claims, and rules around specialization language. We review all ad copy for compliance before it goes live.",
      },
    },
    {
      "@type": "Question",
      name: "How do you help law firms compete with large firms that have huge marketing budgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small and mid-size firms can out-compete large firms by dominating long-tail, high-intent local searches that big firms ignore. We find the specific queries your ideal clients type in at 2am and make sure your firm appears first. Targeted beats broad every time in legal.",
      },
    },
    {
      "@type": "Question",
      name: "What is an AI chatbot for law firms and is it compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI intake chatbot handles initial contact — answering FAQs, collecting case details, and scheduling consultations — without providing legal advice. Every chatbot response is reviewed for compliance and includes appropriate disclaimers. It captures the leads who call at 2am when your intake staff isn't there.",
      },
    },
    {
      "@type": "Question",
      name: "How long does legal SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO improvements (Google Maps rankings) typically show within 45–90 days. Organic website rankings for competitive terms like 'Nashville personal injury attorney' can take 4–8 months to reach page one. PPC campaigns drive consultation requests immediately while SEO builds.",
      },
    },
    {
      "@type": "Question",
      name: "Do you specialize in specific practice areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with all practice areas but have deep experience in personal injury, family law, criminal defense, estate planning, and business law. Each practice area has specific search intent patterns, seasonal demand, and competitive dynamics we understand well.",
      },
    },
  ],
}

export default function LawFirmsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] min-h-[80vh] flex items-center relative overflow-hidden py-24">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-indigo-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Law Firms &amp; Legal Services
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                More Consultations.
                <br />
                <span className="text-sky-400">Never Miss a Case Again.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Nashville Digital Group helps law firms and attorneys generate more qualified consultation requests with
                bar-compliant digital marketing and AI intake that captures leads around the clock.
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
                  { value: "89%", label: "Avg Increase in Consultation Requests" },
                  { value: "3.2x", label: "Increase in Organic Traffic" },
                  { value: "73%", label: "After-Hours Inquiries Handled by AI" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[160px]"
                  >
                    <p className="text-2xl font-black text-white">{stat.value}</p>
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
                The Unique Challenges Law Firms{" "}
                <span className="text-sky-400">Face Online</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "shield",
                title: "Bar Advertising Rules Are a Minefield",
                desc: "Tennessee's attorney advertising rules govern what you can and can't say — outcome guarantees, specialization claims, testimonials, and more. Most marketing agencies don't know the rules. One non-compliant ad can trigger a bar complaint. You need a team that gets it.",
              },
              {
                icon: "trending-up",
                title: "Competing With Firms That Spend Millions",
                desc: "Morgan & Morgan and other mega-firms dominate TV and broad search terms. You can't outspend them — but you can outsmart them. The firms winning today are dominating specific, high-intent local search terms that big firms don't bother targeting.",
              },
              {
                icon: "moon",
                title: "Clients Search at 2AM, Nobody's There",
                desc: "Personal injury victims, people facing divorce, DUI arrests — these situations don't happen on a 9-to-5 schedule. When a potential client searches at midnight and reaches a competitor's intake form while yours goes to voicemail, you've lost that case.",
              },
              {
                icon: "map-pin",
                title: "Not Ranking for Local Attorney Searches",
                desc: "You're not showing up when someone Googles 'Nashville personal injury attorney' or 'criminal defense lawyer Brentwood TN'. Your website may be beautiful but it's not optimized for the local search terms that drive consultation requests.",
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
                Legal Marketing That Wins{" "}
                <span className="text-sky-400">More Cases</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "search",
                title: "Local Legal SEO",
                desc: "Dominate local search for your practice areas in Nashville and surrounding counties. We optimize your Google Business Profile, build authoritative legal content, and earn the local citations that move you into the Maps pack.",
                tags: ["Google Maps Pack", "Practice Area Pages", "Local Citations"],
              },
              {
                icon: "target",
                title: "Compliant PPC Campaigns",
                desc: "Google Ads campaigns written for legal compliance — no outcome guarantees, proper specialization disclaimers, reviewed against Bar rules before launch. Drives consultation requests immediately while SEO builds.",
                tags: ["Google Ads", "Bar-Compliant Copy", "Consultation Tracking"],
              },
              {
                icon: "message-circle",
                title: "AI Intake Chatbot",
                desc: "An AI-powered intake assistant on your website that collects case details, answers FAQs, and schedules consultations 24/7. Handles 73% of after-hours inquiries without providing legal advice.",
                tags: ["24/7 Intake", "Case Qualification", "Consultation Booking"],
              },
              {
                icon: "globe",
                title: "Law Firm Website Design",
                desc: "Authoritative, trust-building law firm websites that convert visitors into consultations. Practice area pages, attorney bios, case results (where permitted), and optimized consultation request forms.",
                tags: ["Conversion-Optimized", "Practice Area Pages", "Trust Signals"],
              },
              {
                icon: "star",
                title: "Attorney Review Management",
                desc: "Automated review request campaigns that build your Avvo, Google, and Martindale-Hubbell profiles. Positive client feedback builds the social proof that converts new visitors into callers.",
                tags: ["Google Reviews", "Avvo", "Martindale-Hubbell"],
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
                Results That Impact Your{" "}
                <span className="text-sky-400">Bottom Line</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: 89,
                suffix: "%",
                label: "Average Increase in Consultation Requests",
                desc: "Across our law firm clients in the first 6 months, combining SEO, PPC, and AI intake optimization.",
              },
              {
                value: 3.2,
                suffix: "x",
                label: "Increase in Organic Search Traffic",
                desc: "Through practice area content, local SEO, and authoritative link building in the legal space.",
              },
              {
                value: 73,
                suffix: "%",
                label: "After-Hours Inquiries Handled by AI",
                desc: "Our AI intake chatbot captures and qualifies leads 24/7, ensuring you never miss a case inquiry again.",
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

      {/* How We Approach Law Firms */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                How We Approach{" "}
                <span className="text-sky-400">Legal Marketing</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Compliance Review",
                desc: "Before we write a single ad or publish a single page, we review Tennessee Bar advertising rules as they apply to your practice areas and build your marketing framework around them.",
              },
              {
                step: "02",
                title: "Keyword & Competitor Analysis",
                desc: "We find every high-intent search term your ideal clients use — and every gap your competitors are ignoring. You get a roadmap showing exactly where the opportunity is in your practice areas and geography.",
              },
              {
                step: "03",
                title: "Multi-Channel Launch",
                desc: "PPC campaigns go live immediately for fast results. SEO and content build in parallel for long-term compounding. AI chatbot deploys on your site to capture after-hours leads from day one.",
              },
              {
                step: "04",
                title: "Case Attribution & Scale",
                desc: "We track which campaigns and keywords lead to signed cases — not just consultation requests. This lets us optimize for true ROI and scale what actually generates revenue for your firm.",
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
                "We were invisible on Google for personal injury searches in Nashville. NDG did a complete overhaul —
                our site, our Google profile, our ad campaigns. Within 4 months we were in the Maps pack for our key
                terms, consultation requests were up over 90%, and the AI chatbot they set up is capturing leads at
                midnight that we used to miss entirely. Best marketing investment we've made."
              </blockquote>
              <div>
                <p className="text-white font-semibold text-lg">James R.</p>
                <p className="text-sky-400 text-sm">Managing Partner, Nashville Personal Injury Law Group — Nashville, TN</p>
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
                Legal Marketing{" "}
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
              Ready to Win More Cases?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free legal marketing strategy session. We'll audit your online presence and show you exactly where
              consultation requests are slipping through the cracks.
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
