import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"

export const metadata: Metadata = {
  title: "How We Work | The NDG Revenue-First Framework",
  description:
    "Learn how Nashville Digital Group's proven 6-step Revenue-First Framework turns your goals into measurable revenue. Transparent process, real deliverables, no guesswork.",
}

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    timeline: "Week 1",
    deliverable: "Business & Competitive Audit Report",
    clientDoes: "1-hour onboarding call, share access to existing analytics, ad accounts, and website",
    ndgDoes:
      "Deep-dive audit of your current digital presence, SEO health, ad performance, competitor positioning, and revenue gaps. We benchmark you against the top 3 competitors in your market.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Strategy Blueprint",
    timeline: "Week 2",
    deliverable: "Custom Growth Plan with KPI targets",
    clientDoes: "Review and approve the strategy, align on budget allocation and primary KPIs",
    ndgDoes:
      "Build a tailored multi-channel growth plan with prioritized channels, 90-day KPI targets, budget recommendations, and a clear timeline for every initiative.",
    icon: "Map",
  },
  {
    number: "03",
    title: "Foundation Build",
    timeline: "Weeks 3–4",
    deliverable: "Tracking setup, landing pages, creative assets live",
    clientDoes: "Provide brand assets, review landing page copy, approve creative direction",
    ndgDoes:
      "Install full conversion tracking, build high-converting landing pages, produce ad creatives and copy, configure your tech stack, and QA everything before launch.",
    icon: "Layers",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    timeline: "Month 2",
    deliverable: "Live campaigns with weekly performance report",
    clientDoes: "Stay available for quick approvals; review weekly reports",
    ndgDoes:
      "Launch all campaigns, monitor performance daily, run A/B tests on creatives and audiences, adjust bids and budgets in real time to minimize cost-per-lead and maximize ROAS.",
    icon: "Rocket",
  },
  {
    number: "05",
    title: "Scale",
    timeline: "Month 3+",
    deliverable: "Expanded channel presence, decreased CPL, increased revenue",
    clientDoes: "Approve scaling budgets, participate in monthly strategy review",
    ndgDoes:
      "Identify the highest-performing campaigns and double down. Expand winning creative angles to new audiences, unlock new channels, and systematically cut underperformers.",
    icon: "TrendingUp",
  },
  {
    number: "06",
    title: "Reporting & Growth Reviews",
    timeline: "Ongoing",
    deliverable: "Live dashboard + monthly strategy call recording",
    clientDoes: "Attend monthly growth review call, provide business context for strategic pivots",
    ndgDoes:
      "Deliver transparent monthly reporting with attribution data, maintain your live dashboard updated daily, and run structured growth reviews to plan the next 30-day sprint.",
    icon: "BarChart2",
  },
]

const milestones = [
  {
    period: "First 30 Days",
    color: "border-sky-500/30",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    items: [
      "Full audit completed and delivered",
      "Custom strategy approved",
      "Conversion tracking installed",
      "Landing pages live",
      "Campaigns launched",
      "First performance data in dashboard",
    ],
  },
  {
    period: "First 90 Days",
    color: "border-violet-500/30",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    items: [
      "Cost-per-lead trending down",
      "2–3 winning ad angles identified",
      "SEO technical fixes complete",
      "First organic ranking improvements",
      "Scaling budget approved",
      "ROI positive on primary channel",
    ],
  },
  {
    period: "Year 1",
    color: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    items: [
      "Full multi-channel engine running",
      "Predictable monthly lead volume",
      "Strong organic search presence",
      "Brand awareness measurably increased",
      "Marketing automation workflows live",
      "Year-over-year revenue growth documented",
    ],
  },
]

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most clients see initial data and early performance signals within the first 30 days. Meaningful lead volume improvements typically appear by Month 2. Compounding results — lower CPL, organic traffic growth, and full-funnel attribution — build over 90 days and beyond. We set clear KPI benchmarks in Week 2 so you always know what to expect.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No long-term lock-ins. We work on month-to-month agreements after an initial 90-day commitment period (required to complete the Foundation Build and see real optimization data). We earn your continued business with results — not fine print.",
  },
  {
    question: "Who will be working on my account?",
    answer:
      "Every NDG client is assigned a dedicated Account Strategist who is your single point of contact and owns your growth plan. Behind them is a specialist team: an SEO lead, a paid media manager, a creative director, and a developer — all experienced in your service category.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We measure what matters to your revenue: leads generated, cost per lead, conversion rate, revenue attributed to digital, and ROI on ad spend. We do not obsess over vanity metrics. Every KPI target is set during Week 2 and tracked in your live dashboard.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Not much. We need access to your existing Google Analytics, Google Ads, and Facebook Ads accounts (if any), a 60-minute onboarding call, and your brand assets. Our team handles the rest. Most clients spend fewer than 2 hours per month on collaboration after the first 30 days.",
  },
  {
    question: "What happens if I'm not satisfied?",
    answer:
      "We stand behind our work with a 30-day satisfaction guarantee. If you complete onboarding and are not satisfied with our work within the first 30 days, we will either work at no charge until you are, or issue a full refund. After Month 1, you can cancel at any time with 30 days notice — no penalties.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HowWeWorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
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
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                How We Turn Your Goals{" "}
                <span className="text-sky-400">Into Revenue</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Every NDG engagement runs on a single proprietary methodology: the{" "}
                <strong className="text-white">NDG Revenue-First Framework</strong> — a 6-step
                system built to eliminate guesswork, move fast, and compound results month over month.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">Start Your Engagement →</ShimmerLink>
                <Link
                  href="#process"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  See the Framework
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-16">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                The NDG Revenue-First Framework
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                6 Steps.{" "}
                <span className="text-sky-400">Zero Guesswork.</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Every step has a defined owner, a clear timeline, and a tangible deliverable.
              </p>
            </div>
          </BlurFade>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <BlurFade key={step.number} delay={0.1 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 md:p-8 hover:border-sky-500/20 transition-colors">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Step number + icon */}
                    <div className="flex items-start gap-4 lg:w-56 shrink-0">
                      <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center ring-1 ring-sky-500/20 shrink-0">
                        <Icon name={step.icon} className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
                          Step {step.number}
                        </span>
                        <h3 className="text-white font-bold text-xl mt-0.5">{step.title}</h3>
                        <span className="inline-block bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-full mt-1.5">
                          {step.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Details grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="glass border border-white/4 rounded-xl p-4">
                        <p className="text-sky-400 text-xs uppercase tracking-widest mb-2 font-semibold">
                          You Do
                        </p>
                        <p className="text-white text-sm leading-relaxed">{step.clientDoes}</p>
                      </div>
                      <div className="glass border border-white/4 rounded-xl p-4">
                        <p className="text-sky-400 text-xs uppercase tracking-widest mb-2 font-semibold">
                          We Do
                        </p>
                        <p className="text-white text-sm leading-relaxed">{step.ndgDoes}</p>
                      </div>
                      <div className="glass border border-white/4 rounded-xl p-4">
                        <p className="text-sky-400 text-xs uppercase tracking-widest mb-2 font-semibold">
                          Deliverable
                        </p>
                        <p className="text-white text-sm leading-relaxed font-medium">
                          {step.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Timeline
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                What to Expect{" "}
                <span className="text-sky-600">and When</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                Real milestones at real intervals — not vague promises.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <BlurFade key={milestone.period} delay={0.15 + index * 0.1} inView>
                <div
                  className={`bg-white border ${milestone.color} rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-all`}
                >
                  <div
                    className={`inline-block ${milestone.bgColor} border ${milestone.color} rounded-xl px-3 py-1.5 mb-5`}
                  >
                    <span className={`${milestone.accentColor} text-sm font-bold`}>
                      {milestone.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {milestone.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <span
                          className={`w-4 h-4 rounded-full ${milestone.bgColor} flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <span className={`${milestone.accentColor} text-[9px]`}>✓</span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* The NDG Dashboard */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="glass border border-sky-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                    Live Reporting
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
                    The NDG Client Dashboard
                  </h2>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    Every client gets live access to their own reporting dashboard — no waiting for
                    month-end PDFs. See your ad spend, lead volume, cost-per-lead, and revenue
                    attributed to every channel, updated daily.
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    We believe radical transparency is a competitive advantage. When you can see
                    exactly where every dollar is going and what it produces, you make better decisions
                    faster — and so do we.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "DollarSign", label: "Ad Spend Tracked", value: "Daily" },
                    { icon: "Users", label: "Leads Attributed", value: "Real-time" },
                    { icon: "TrendingUp", label: "Revenue Reporting", value: "Per Channel" },
                    { icon: "BarChart2", label: "Strategy Reviews", value: "Monthly" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="glass border border-white/6 rounded-2xl p-5 text-center hover:border-sky-500/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 ring-1 ring-sky-500/20">
                        <Icon name={item.icon} className="w-5 h-5 text-sky-400" />
                      </div>
                      <p className="text-sky-400 text-xs font-bold uppercase tracking-wide mb-1">
                        {item.value}
                      </p>
                      <p className="text-white text-xs leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 md:py-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Frequently Asked{" "}
                <span className="text-sky-600">Questions</span>
              </h2>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <BlurFade key={faq.question} delay={0.1 + index * 0.07} inView>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:border-sky-300 hover:shadow-md transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-base leading-snug text-slate-900 flex-1">
                      {faq.question}
                    </h3>
                    <span className="text-sky-600 text-xl font-light leading-none shrink-0">+</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Start?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Book a free 30-minute strategy call. We&apos;ll audit your current digital presence
              and walk you through exactly what the first 30 days would look like.
            </p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Book Your Free Strategy Call →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
