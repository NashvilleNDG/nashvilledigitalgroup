import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { FAQSection } from "@/components/ui/faq-section"

export const metadata: Metadata = {
  title: "Franklin TN Digital Marketing Agency | Nashville Digital Group",
  description:
    "Digital marketing for Franklin, TN's fastest-growing businesses. SEO, PPC, and web development for Downtown Franklin, Williamson County, and the Cool Springs corridor. One of America's fastest-growing cities.",
}

const growthStats = [
  {
    num: 50,
    suffix: "%",
    label: "Population growth in Williamson County since 2010",
  },
  {
    num: 1,
    suffix: "st",
    label: "Franklin is consistently ranked #1 safest city in Tennessee",
  },
  {
    num: 85000,
    suffix: "+",
    label: "Current population, doubling since 2000",
  },
  {
    num: 96,
    suffix: "K",
    label: "Median household income — well above state average",
  },
]

const industries = [
  {
    icon: "home",
    title: "Real Estate & Development",
    description:
      "Franklin is one of the fastest-growing real estate markets in the United States. New subdivisions along Carothers Parkway, historic homes near downtown Franklin's Main Street, and commercial development along the 840 corridor all represent distinct buyer personas with distinct search behaviors. We build hyper-local real estate marketing strategies that capture buyers at every stage — from 'moving to Franklin TN' research to neighborhood-specific home searches.",
    highlight: "Williamson County home values have grown 85% over the past decade",
  },
  {
    icon: "heart",
    title: "Healthcare & Wellness",
    description:
      "Franklin's growth has brought a wave of healthcare practices — family medicine, pediatrics, physical therapy, chiropractic, and wellness centers catering to young families and active professionals. The competition for new patients in Franklin is intensifying as more practices open to serve the growing population. SEO and Google Ads are the primary channels through which new Franklin residents find their healthcare providers.",
    highlight: "Franklin's population skews younger than state average — growing demand for family health services",
  },
  {
    icon: "store",
    title: "Retail & Boutiques",
    description:
      "Downtown Franklin's historic district is one of Middle Tennessee's most charming retail destinations. The Factory at Franklin, The Factory at Franklin District, and the Main Street corridor attract both locals and visitors from across the Nashville metro. Boutiques, specialty shops, and local brands here compete against both e-commerce giants and Nashville mall retailers — requiring smart local SEO, social commerce, and community-focused content strategies.",
    highlight: "Downtown Franklin's historic Main Street draws over 2 million visitors annually",
  },
  {
    icon: "utensils",
    title: "Restaurants & Food",
    description:
      "Franklin's restaurant scene has blossomed alongside its population growth — from farm-to-table concepts near the Factory at Franklin to family-friendly chains along Cool Springs Boulevard. Franklin diners are loyal to local favorites and actively seek out new spots. We help Franklin restaurants build Google Business Profile authority, manage their reputation across review platforms, and convert online searches into full tables.",
    highlight: "Franklin diners are highly review-driven — 88% check Google reviews before choosing a restaurant",
  },
  {
    icon: "briefcase",
    title: "Professional Services",
    description:
      "As families and businesses relocate to Williamson County, demand for attorneys, accountants, financial planners, and insurance professionals has surged. These professionals need to establish digital authority in a market where they may be competing with well-established Nashville providers. We help Franklin-based professional service firms build local credibility fast and capture the influx of new residents who need trusted local advisors.",
    highlight: "Franklin's corporate sector includes HQ offices for Nissan North America and other major employers",
  },
]

const growthOpportunity = [
  {
    icon: "trending-up",
    title: "New Residents Are Searching Right Now",
    body: "Every week, hundreds of families relocate to Franklin with zero pre-established brand loyalties. They're searching Google for everything — dentists, restaurants, contractors, accountants. Businesses with strong local SEO capture these new customers before competitors even know they exist.",
  },
  {
    icon: "map-pin",
    title: "Williamson County's Economic Strength",
    body: "With a median household income near $96,000, Franklin consumers have high purchasing power. The ROI on digital marketing is measurably stronger here than in many other Middle Tennessee markets because the average transaction value is higher across nearly every category.",
  },
  {
    icon: "zap",
    title: "Less Saturated Than Nashville Proper",
    body: "Franklin's digital marketing landscape is less competitive than Nashville's core market — costs per click are lower, local rankings are more achievable, and first-mover advantage is still available in many niches. Businesses that invest now will be much harder to displace in two years.",
  },
  {
    icon: "users",
    title: "Community-First Marketing Works Here",
    body: "Franklin has a strong sense of local identity — residents genuinely want to support local businesses. Content that references Franklin's history, community events, and local landmarks resonates in a way that generic marketing never will. We build campaigns rooted in Franklin's authentic character.",
  },
]

const faqs = [
  {
    question: "How competitive is the Franklin, TN digital marketing market compared to Nashville?",
    answer: "Franklin is notably less saturated digitally than Nashville proper, which makes it an excellent time to invest. For most categories — from healthcare to restaurants — first-page Google rankings are more achievable in Franklin than in Nashville, and cost-per-click on Google Ads is often 30–50% lower. Businesses that establish strong rankings now will have a significant head start as competition increases with the city's continued growth.",
  },
  {
    question: "Should I target 'Franklin TN' or 'Williamson County' or both?",
    answer: "Both, plus more granular neighborhood terms. We typically build a tiered keyword strategy: city-level terms ('Franklin TN dentist'), area terms ('Williamson County family law'), and neighborhood/landmark terms ('Cool Springs financial advisor', 'downtown Franklin boutique'). The right mix depends on your business type and where your customers actually live and search from.",
  },
  {
    question: "We're a new business in Franklin — is it too late to build a strong online presence?",
    answer: "Not at all — and given Franklin's growth trajectory, new businesses have a genuine opportunity to build authority before the market matures. We've helped several Franklin businesses go from zero web presence to first-page rankings within 4–6 months. The key is starting with a strong foundation: a well-optimized website, a verified Google Business Profile, and a content strategy that targets your specific Franklin audience.",
  },
  {
    question: "Does The Factory at Franklin represent a digital marketing opportunity?",
    answer: "Yes, significantly. The Factory at Franklin is a destination that draws shoppers, diners, and event-goers from across the Nashville metro. Businesses in or near The Factory can benefit from content and local SEO that captures 'Factory at Franklin shopping' and related searches. We also help businesses leverage the Factory's foot traffic through social media strategies that convert in-person visitors into online followers and repeat customers.",
  },
  {
    question: "How do you approach marketing for Franklin businesses that also serve the broader Nashville metro?",
    answer: "We build a dual-market strategy. For your Franklin audience, we optimize for hyper-local Franklin and Williamson County terms. For broader Nashville metro reach, we layer in content and PPC that targets the full metro area while making clear you serve Franklin clients with premium service. This dual approach lets you capture local loyalty while competing for the larger Nashville market.",
  },
]

export default function FranklinPage() {
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
        <div className="absolute top-1/3 right-[-8%] w-[550px] h-[550px] bg-sky-600/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-[-5%] w-[400px] h-[400px] bg-emerald-600/8 rounded-full blur-[110px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Franklin, TN — Williamson County
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Digital Marketing for Franklin, TN's{" "}
                <span className="text-sky-400">Fastest-Growing Businesses</span>
              </h1>
              <p className="text-white text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Franklin is one of the fastest-growing cities in the United States. Hundreds of new residents arrive
                every week — searching for local services, restaurants, and businesses just like yours. Is your digital
                presence ready to capture them?
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">
                  Get Your Free Franklin SEO Audit →
                </ShimmerLink>
                <a
                  href="tel:+16152000170"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  (615) 200-0170
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Franklin Growth Stats */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                The Franklin Opportunity
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Franklin Is{" "}
                <span className="text-sky-600">Growing Fast</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                The numbers tell the story. Franklin and Williamson County represent one of the most significant
                growth opportunities for local businesses in the entire Southeast.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {growthStats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.15 + i * 0.08} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center hover:border-sky-300 hover:shadow-md transition-colors">
                  <div className="text-4xl font-black text-sky-600 tabular-nums mb-2">
                    <NumberTicker
                      value={stat.num}
                      delay={0.25 + i * 0.1}
                      decimalPlaces={0}
                      className="text-sky-600"
                    />
                    {stat.suffix}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Why growth = opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthOpportunity.map((item, i) => (
              <BlurFade key={item.title} delay={0.2 + i * 0.07} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 h-full hover:border-sky-300 hover:shadow-md transition-colors group text-center">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-200 group-hover:bg-sky-100 transition-colors mx-auto">
                    <Icon name={item.icon} className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Industries We Serve
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Built for Franklin's{" "}
                <span className="text-sky-400">Growing Economy</span>
              </h2>
            </div>
          </BlurFade>

          <div className="space-y-6">
            {industries.map((industry, i) => (
              <BlurFade key={industry.title} delay={0.1 + i * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 hover:border-sky-500/20 transition-colors group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center shrink-0 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                      <Icon name={industry.icon} className="w-6 h-6 text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-3">{industry.title}</h3>
                      <p className="text-white text-sm leading-relaxed mb-4">{industry.description}</p>
                      <div className="inline-flex items-center gap-2 bg-sky-500/8 border border-sky-500/15 rounded-xl px-4 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span className="text-sky-400 text-xs">{industry.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How NDG Helps Franklin Businesses */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                How NDG Helps Franklin{" "}
                <span className="text-sky-600">Businesses Win</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                A strategic playbook built around Franklin's unique market dynamics — not a Nashville strategy
                with a city name swapped in.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "01",
                title: "Capture New Resident Traffic",
                body: "We build content and optimize your Google Business Profile to capture the steady stream of new Franklin and Williamson County residents who are actively searching for everything from pediatricians to pizza. These high-intent searchers have no existing brand preferences — they're yours to win.",
              },
              {
                step: "02",
                title: "Dominate Franklin-Specific Searches",
                body: "We identify the exact search terms Franklin residents use — including neighborhood references, landmarks like The Factory at Franklin, and Williamson County geographic modifiers. Then we build the technical SEO and content infrastructure to own those terms.",
              },
              {
                step: "03",
                title: "Build Community Authority",
                body: "Franklin has a strong local identity and residents genuinely support local businesses. We help you become embedded in that community through local PR, content that references Franklin's history and character, and social strategies that build genuine community connections.",
              },
              {
                step: "04",
                title: "Scale With Your Growth",
                body: "As Franklin grows, your marketing strategy should evolve with it. We build scalable systems — not one-time campaigns — that compound over time. The businesses that invest in digital presence now will have structural advantages as Franklin's market matures.",
              },
            ].map((item, i) => (
              <BlurFade key={item.step} delay={0.15 + i * 0.08} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 h-full hover:border-sky-300 hover:shadow-md transition-colors">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-black text-sky-400/40 leading-none shrink-0">{item.step}</span>
                    <div>
                      <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqs} title="Franklin, TN Marketing FAQ" dark={true} />

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sky-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Franklin, TN — Williamson County
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Franklin Is Growing. Is Your Marketing Keeping Up?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-10">
              The businesses that capture Franklin's new residents and growing customer base today will be the
              dominant brands in five years. Let's build that position together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Start With a Free Audit →
              </ShimmerLink>
              <a
                href="tel:+16152000170"
                className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
              >
                Call (615) 200-0170
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
