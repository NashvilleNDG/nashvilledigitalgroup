import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"

export const metadata: Metadata = {
  title: "Resources & Insights | Free Marketing Tools and Guides",
  description:
    "Free tools, case studies, guides, and research to help Nashville businesses grow. ROI calculator, pricing calculator, downloadable benchmarks, and expert articles.",
}

const caseStudies = [
  {
    client: "Big Pigs Wine & Spirits",
    industry: "Retail / Liquor",
    result: "+218% online revenue in 60 days",
    services: ["Paid Social", "Google Ads", "Landing Pages"],
    resultColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/10",
  },
  {
    client: "Maharani Collections",
    industry: "Fashion & Apparel",
    result: "+340% qualified leads in 90 days",
    services: ["SEO", "Paid Search", "Email Marketing"],
    resultColor: "text-sky-400",
    borderColor: "border-sky-500/20",
    bgColor: "bg-sky-500/10",
  },
  {
    client: "Nashville Realty Group",
    industry: "Real Estate",
    result: "+312% increase in buyer inquiries",
    services: ["Web Development", "Local SEO", "PPC"],
    resultColor: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/10",
  },
]

const guides = [
  {
    icon: "ClipboardList",
    title: "The 12-Question Checklist for Evaluating a Digital Marketing Agency",
    description:
      "Before you sign anything, ask these 12 questions. Separate agencies that will actually grow your business from those that will take your budget and disappear.",
    param: "guide=agency-checklist",
  },
  {
    icon: "BarChart2",
    title: "2025 Nashville Business Digital Marketing Benchmarks",
    description:
      "What are Nashville businesses spending on digital marketing? What CPL, ROAS, and conversion rates should you expect? Real data from 500+ local businesses.",
    param: "guide=2025-benchmarks",
  },
  {
    icon: "Calculator",
    title: "How to Calculate True Marketing ROI (Template)",
    description:
      "Most ROI calculations are wrong. This spreadsheet template walks you through attributing revenue to every channel — including first-touch, last-touch, and linear models.",
    param: "guide=roi-template",
  },
]

const articles = [
  {
    category: "AI & SEO",
    title: "How AI Search Is Changing SEO in 2025 — and What to Do About It",
    excerpt:
      "Google's AI Overviews now appear on 65% of commercial searches. Here's how to optimize your content strategy for the AI-first SERP before your competitors do.",
    slug: "#",
  },
  {
    category: "Local SEO",
    title: "The Complete Guide to Local SEO for Nashville Businesses",
    excerpt:
      "From Google Business Profile optimization to neighborhood-level keyword targeting — a step-by-step playbook built specifically for Nashville service businesses.",
    slug: "#",
  },
  {
    category: "Web Development",
    title: "How to Choose the Right Web Development Agency (Without Getting Burned)",
    excerpt:
      "6 critical questions that separate agencies who can actually build performant, scalable sites from those who'll deliver a pretty template and disappear after launch.",
    slug: "#",
  },
]

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Resources
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Resources &amp;{" "}
                <span className="text-sky-400">Insights</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Free tools, guides, and research to help you grow — built from real campaigns
                across 500+ Nashville businesses.
              </p>
              <div className="flex gap-8 justify-center flex-wrap">
                {[
                  { value: "2", label: "Free Tools" },
                  { value: "3+", label: "Case Studies" },
                  { value: "3", label: "Downloadable Guides" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[110px]"
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

      {/* Free Tools */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Interactive Tools
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Free Tools to{" "}
                <span className="text-sky-400">Run the Numbers</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                No email required. Use these calculators to model your revenue potential before you
                ever speak with us.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BlurFade delay={0.15} inView>
              <div className="glass border border-sky-500/20 rounded-2xl p-8 flex flex-col h-full hover:border-sky-500/40 transition-colors group">
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                  <Icon name="TrendingUp" className="w-6 h-6 text-sky-400" />
                </div>
                <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  Free Tool
                </p>
                <h3 className="text-white text-2xl font-bold mb-3">ROI Calculator</h3>
                <p className="text-white text-sm leading-relaxed mb-6 flex-1">
                  Enter your current lead volume, average deal size, and close rate. Instantly see
                  what a 2x, 3x, or 5x improvement in any metric means for your annual revenue.
                </p>
                <Link
                  href="/tools/roi-calculator"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm w-fit"
                >
                  Open ROI Calculator →
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="glass border border-violet-500/20 rounded-2xl p-8 flex flex-col h-full hover:border-violet-500/40 transition-colors group">
                <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-violet-500/20 group-hover:bg-violet-500/15 transition-colors">
                  <Icon name="Calculator" className="w-6 h-6 text-violet-400" />
                </div>
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  Free Tool
                </p>
                <h3 className="text-white text-2xl font-bold mb-3">Pricing Calculator</h3>
                <p className="text-white text-sm leading-relaxed mb-6 flex-1">
                  Select the services you need and get an instant estimated investment range. No
                  sales call required — transparent pricing based on your actual scope.
                </p>
                <Link
                  href="/tools/pricing-calculator"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm w-fit"
                >
                  Open Pricing Calculator →
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Client Results
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Real Businesses.{" "}
                <span className="text-sky-400">Real Numbers.</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                These aren&apos;t projections or industry averages — these are results we produced
                for Nashville-area businesses.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <BlurFade key={study.client} delay={0.15 + index * 0.08} inView>
                <div
                  className={`glass border ${study.borderColor} rounded-2xl p-6 flex flex-col h-full hover:brightness-110 transition-all`}
                >
                  <div
                    className={`inline-block ${study.bgColor} border ${study.borderColor} rounded-lg px-2.5 py-1 mb-4 w-fit`}
                  >
                    <span className="text-white text-xs font-semibold">{study.industry}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{study.client}</h3>
                  <p className={`text-3xl font-black mb-4 ${study.resultColor}`}>
                    {study.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="bg-white/5 border border-white/8 text-white text-xs px-2.5 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-colors"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Free Downloads
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Guides Built From{" "}
                <span className="text-sky-400">Real Campaigns</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Download free — just provide your email and we&apos;ll send it over instantly.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <BlurFade key={guide.title} delay={0.15 + index * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 flex flex-col h-full hover:border-sky-500/20 transition-colors group">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                    <Icon name={guide.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <span className="bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-full w-fit mb-4">
                    Free Guide
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-3 flex-1">
                    {guide.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-6">{guide.description}</p>
                  <Link
                    href={`/contact?${guide.param}`}
                    className="inline-flex items-center gap-2 border border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10 text-sky-400 font-semibold px-4 py-2.5 rounded-xl transition-all text-sm w-fit"
                  >
                    Download Free →
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Articles */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                From the Blog
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Latest{" "}
                <span className="text-sky-400">Insights</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Practical marketing and growth articles written by the NDG team — no fluff, all
                actionable.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <BlurFade key={article.title} delay={0.15 + index * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 flex flex-col h-full hover:border-sky-500/20 transition-colors group">
                  <span className="bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-full w-fit mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-3 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-section-blue py-20 md:py-24 border-y border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 ring-1 ring-sky-500/20">
              <Icon name="Mail" className="w-5 h-5 text-sky-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Monthly Insights, Straight to Your Inbox
            </h2>
            <p className="text-white text-base mb-8 max-w-xl mx-auto">
              Get monthly insights on digital marketing, AI search, and growth strategies used by
              the fastest-growing Nashville businesses. No spam. Unsubscribe anytime.
            </p>
            <Link
              href="/contact?newsletter=true"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Subscribe Free →
            </Link>
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
              Ready to Put These Insights to Work?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Book a free strategy call and let us show you exactly what&apos;s possible for your
              business in the next 90 days.
            </p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Book a Free Strategy Call →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
