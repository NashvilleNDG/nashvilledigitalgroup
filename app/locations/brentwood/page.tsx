import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const metadata: Metadata = {
  title: "Brentwood TN Digital Marketing Agency | Nashville Digital Group",
  description:
    "Premium digital marketing for Brentwood, TN businesses. AI-powered SEO, PPC, and web development for med spas, luxury real estate, and professional services in Cool Springs and Maryland Farms.",
}

const industries = [
  {
    icon: "sparkles",
    title: "Med Spas & Aesthetic Practices",
    description:
      "Brentwood's concentration of high-income households makes it one of Middle Tennessee's most competitive markets for aesthetic services. Patients here research extensively before committing to a provider — they compare credentials, read reviews meticulously, and expect polished digital experiences. We build med spa marketing programs that establish clinical authority through content, dominate local search for high-value treatments, and convert premium browsers into booked appointments.",
    note: "Client spotlight: Brentwood Med Spa — 210% increase in organic consultation bookings",
  },
  {
    icon: "home",
    title: "Luxury Real Estate",
    description:
      "The Maryland Farms corridor and neighborhoods south of Concord Road represent some of Tennessee's highest price-per-square-foot listings. Buyers and sellers in this market use digital research extensively but close on relationships. We help luxury agents and boutique brokerages build digital authority that earns trust before the first call — through premium property showcases, thought leadership content, and targeted advertising that reaches buyers actively searching in Brentwood's price brackets.",
    note: "Average home sale price in Brentwood exceeds $800K — your marketing should reflect that caliber",
  },
  {
    icon: "briefcase",
    title: "Professional Services & Wealth Management",
    description:
      "Cool Springs has become a hub for financial advisors, CPAs, estate attorneys, and executive coaches serving Brentwood's affluent professional community. These clients don't respond to aggressive sales tactics — they respond to demonstrated expertise. Our content marketing and LinkedIn strategies position your firm as the obvious choice for high-net-worth clients who are already searching for exactly what you offer.",
    note: "B2B and professional services targeting Brentwood's corporate corridor",
  },
  {
    icon: "utensils",
    title: "Upscale Dining & Hospitality",
    description:
      "Brentwood's dining scene has elevated significantly — fine dining establishments, boutique wine bars, and curated culinary experiences now compete for a discerning local clientele. Unlike Lower Broadway's tourist-driven foot traffic, Brentwood restaurant marketing requires capturing local loyalty and repeat visits. We build campaigns that convert neighborhood residents into regulars and attract special-occasion diners from across the Nashville metro.",
    note: "Reputation management and local SEO for restaurants in Brentwood Town Center",
  },
]

const differentiators = [
  {
    icon: "award",
    title: "Premium Positioning",
    body: "Brentwood clients expect excellence at every touchpoint. Our work reflects that — premium creative, sophisticated messaging, and marketing strategies calibrated to high-intent, high-budget buyers.",
  },
  {
    icon: "target",
    title: "High-Value Audience Targeting",
    body: "We use income-level targeting, behavioral signals, and intent data to reach Brentwood's affluent demographic — not just anyone searching in the 37027 zip code. Quality over volume.",
  },
  {
    icon: "bar-chart",
    title: "ROI-Focused Reporting",
    body: "Brentwood business owners are financially sophisticated. Our reporting goes beyond impressions and clicks — we track cost per qualified lead, revenue attribution, and lifetime customer value.",
  },
  {
    icon: "shield",
    title: "Reputation Stewardship",
    body: "In Brentwood's tight-knit professional community, reputation is everything. We monitor, manage, and proactively build your brand's standing across every platform that matters to your clients.",
  },
  {
    icon: "zap",
    title: "Conversion Rate Excellence",
    body: "Traffic means nothing without conversion. We optimize every landing page, inquiry form, and booking flow to match the expectations of sophisticated Brentwood consumers.",
  },
  {
    icon: "users",
    title: "White-Glove Service",
    body: "You won't be passed to a junior account manager after onboarding. Brentwood clients get senior strategists, priority response times, and a partner-level relationship from day one.",
  },
]

const caseStudies = [
  {
    client: "Brentwood Med Spa",
    service: "SEO + PPC + Reputation Management",
    challenge:
      "An established Brentwood med spa was losing ground to newer competitors who had invested heavily in digital. Their Google Business Profile lacked reviews and their website hadn't been updated in three years.",
    solution:
      "Complete website rebuild optimized for conversions and local SEO. Targeted PPC campaigns for high-value treatments. Systematic review generation program. Monthly content establishing clinical expertise.",
    results: [
      "210% increase in organic consultation bookings in 9 months",
      "Top-3 Google Maps ranking for core treatment keywords",
      "Average review rating improved from 3.8 to 4.8 stars",
      "Cost per booked consultation reduced by 44%",
    ],
  },
  {
    client: "Cool Springs Financial Advisory Firm",
    service: "Content Marketing + LinkedIn + SEO",
    challenge:
      "A boutique wealth management firm with $200M+ AUM needed to attract next-generation clients (ages 35–50) who research advisors online before any conversation.",
    solution:
      "Thought leadership content strategy covering estate planning, tax optimization, and retirement planning. LinkedIn presence targeting Brentwood and Cool Springs professionals. SEO targeting 'financial advisor Brentwood TN' and related wealth management terms.",
    results: [
      "First-page rankings for 12 high-intent financial advisory keywords",
      "340% increase in website contact form submissions",
      "LinkedIn following grew from 180 to 2,400 relevant professionals",
      "3 enterprise client relationships attributed to content marketing",
    ],
  },
]

const faqs = [
  {
    q: "Does digital marketing work differently in Brentwood compared to the broader Nashville market?",
    a: "Yes — meaningfully so. Brentwood consumers are more research-intensive, have higher expectations for quality, and respond to authority signals differently. They're more likely to check credentials, read long-form content, and compare multiple providers before converting. Marketing that works well for high-volume Nashville businesses can actually backfire in Brentwood if it feels too promotional. We calibrate tone, content depth, and ad messaging specifically for premium markets.",
  },
  {
    q: "What services do Brentwood businesses invest in most?",
    a: "For B2C businesses like med spas and restaurants, SEO and reputation management deliver the strongest ROI because Brentwood customers rely heavily on Google searches and reviews. Professional service firms tend to get more value from content marketing and LinkedIn strategy. For real estate and high-ticket services, PPC campaigns with strong landing pages are highly effective because the transaction value justifies the cost per click.",
  },
  {
    q: "How do you target Brentwood's affluent demographic specifically?",
    a: "We layer household income targeting, zip code targeting (37027), and behavioral signals — luxury brand affinity, travel behavior, financial product research. On Google, we bid on terms that affluent Brentwood consumers actually use. We also optimize for the qualitative signals that matter to this audience: professional imagery, authoritative content, and seamless user experiences that communicate premium positioning.",
  },
  {
    q: "Can you help a Brentwood business that relies primarily on word-of-mouth referrals?",
    a: "Absolutely — and this is one of the most common scenarios we encounter. Word-of-mouth is powerful, but it has a ceiling. Digital marketing extends your referral network exponentially: when someone is referred to you, the first thing they do is Google you. A strong digital presence validates the referral and increases the conversion rate. It also generates new leads during slow periods when referrals aren't coming in.",
  },
  {
    q: "What does a typical engagement look like for a Brentwood med spa?",
    a: "We start with a comprehensive audit of your current digital footprint, competitive landscape, and patient acquisition funnel. Month one is typically technical SEO and website optimization, Google Business Profile enhancement, and baseline PPC setup. Months 2–3 we layer in content marketing and review generation. By month 4–6, most clients are seeing meaningful increases in consultation volume. We provide detailed monthly reporting with full transparency on spend and ROI.",
  },
]

export default function BrentwoodPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/3 left-[-8%] w-[550px] h-[550px] bg-sky-600/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Brentwood, TN — Cool Springs &amp; Maryland Farms
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Digital Marketing for{" "}
                <span className="text-sky-400">Brentwood&apos;s</span>
                <br />
                Growing Businesses
              </h1>
              <p className="text-white text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                Brentwood businesses serve some of Tennessee&apos;s most discerning clients. Your digital marketing
                should match that standard — precise targeting, premium creative, and measurable results that reflect
                your market position.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">
                  Request a Brentwood Strategy Session →
                </ShimmerLink>
                <a
                  href="tel:+16152000170"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  (615) 200-0170
                </a>
              </div>
              {/* Outcome stats */}
              <div className="flex gap-6 justify-center mt-16 flex-wrap">
                {[
                  { num: 210, suffix: "%", label: "Avg. Consultation Increase" },
                  { num: 44, suffix: "%", label: "Lower Cost Per Lead" },
                  { num: 500, suffix: "+", label: "Clients Served Across TN" },
                  { num: 4.9, suffix: "★", label: "Client Satisfaction", decimal: 1 },
                ].map((stat, i) => (
                  <BlurFade key={stat.label} delay={0.25 + i * 0.08} inView>
                    <div className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[130px]">
                      <div className="text-3xl font-black text-white tabular-nums">
                        <NumberTicker
                          value={stat.num}
                          delay={0.35 + i * 0.1}
                          decimalPlaces={stat.decimal ?? 0}
                          className="text-white"
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-white text-xs mt-1">{stat.label}</div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Premium Differentiators */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Why Brentwood Businesses Choose Us
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Marketing as Premium as{" "}
                <span className="text-sky-400">Your Business</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                When your clients expect the best, your agency should too. We bring the same standard of excellence to
                your marketing that you bring to your clients.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <BlurFade key={item.title} delay={0.15 + i * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors group">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                    <Icon name={item.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.body}</p>
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
                Specialists in Brentwood&apos;s{" "}
                <span className="text-sky-400">Growth Industries</span>
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
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span className="text-sky-400 text-xs italic">{industry.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Proven Results
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Brentwood Clients,{" "}
                <span className="text-sky-400">Measurable Outcomes</span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <BlurFade key={study.client} delay={0.1 + i * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 flex flex-col h-full hover:border-sky-500/20 transition-colors">
                  <div className="mb-6">
                    <p className="text-sky-400 text-xs uppercase tracking-widest mb-1">Case Study</p>
                    <h3 className="text-white text-xl font-bold mb-1">{study.client}</h3>
                    <span className="text-xs bg-sky-500/8 text-sky-400 border border-sky-500/15 px-2.5 py-1 rounded-full">
                      {study.service}
                    </span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-sky-400 text-xs uppercase tracking-widest mb-1">Challenge</p>
                      <p className="text-white text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sky-400 text-xs uppercase tracking-widest mb-1">Solution</p>
                      <p className="text-white text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/6">
                    <p className="text-white text-xs uppercase tracking-widest mb-3">Results</p>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-white text-sm">
                          <span className="text-sky-400 mt-0.5 shrink-0">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Brentwood Marketing{" "}
                <span className="text-sky-400">FAQ</span>
              </h2>
            </div>
          </BlurFade>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <BlurFade key={faq.q} delay={0.1 + i * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 hover:border-sky-500/20 transition-colors">
                  <h3 className="text-white font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-white text-sm leading-relaxed">{faq.a}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sky-200 text-sm font-semibold uppercase tracking-widest mb-4">
              Brentwood, TN
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Your Brentwood Business Deserves Better Marketing
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s start with a premium strategy session — a deep look at your competitive landscape, your
              current digital presence, and the highest-value opportunities for your specific market.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Book Your Strategy Session →
              </ShimmerLink>
              <a
                href="mailto:office@nashvilledigitalgroup.com"
                className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
              >
                office@nashvilledigitalgroup.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
