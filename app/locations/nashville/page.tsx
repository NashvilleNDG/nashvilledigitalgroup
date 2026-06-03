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
  title: "Nashville Digital Marketing Agency | Nashville Digital Group",
  description:
    "Nashville's AI-powered digital marketing agency. SEO, PPC, web development, and AI chatbots for Nashville businesses on Lower Broadway, The Gulch, Music Row, and beyond. 500+ Nashville clients since 2020.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nashville Digital Group",
  description:
    "AI-powered digital marketing agency serving Nashville, TN businesses with SEO, PPC, social media, web development, and AI chatbot services.",
  url: "https://nashvilledigitalgroup.com",
  telephone: "+16152000170",
  email: "office@nashvilledigitalgroup.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1627",
    longitude: "-86.7816",
  },
  areaServed: {
    "@type": "City",
    name: "Nashville",
    sameAs: "https://en.wikipedia.org/wiki/Nashville,_Tennessee",
  },
  foundingDate: "2020",
  numberOfEmployees: { "@type": "QuantitativeValue", value: "25" },
}

const industries = [
  {
    icon: "music",
    title: "Tourism & Hospitality",
    description:
      "Lower Broadway draws 14 million visitors annually, but standing out among hundreds of honky-tonks, rooftop bars, and Broadway venues takes more than a neon sign. We help bars, restaurants, and experience businesses capture tourist searches at the moment of intent — 'things to do in Nashville tonight' — and convert them before competitors do.",
    clients: "Bars, Hotels, Tour Operators, Event Venues",
  },
  {
    icon: "heart",
    title: "Healthcare & Med Spas",
    description:
      "Nashville's medical corridor — from Vanderbilt Medical Center to the HCA Healthcare campus — creates intense demand for healthcare-adjacent services. Med spas in Midtown and Green Hills compete fiercely for high-intent patients. We dominate local search for procedures, drive qualified leads, and build the reputation that turns first-time visitors into loyal patients.",
    clients: "Med Spas, Dental Practices, Physical Therapy, Specialists",
  },
  {
    icon: "building",
    title: "Real Estate",
    description:
      "Nashville's housing market remains one of the most dynamic in the Southeast. From luxury condos in The Gulch to historic homes in East Nashville and family neighborhoods in Bellevue, buyers and sellers search differently depending on the market. We build hyper-local SEO strategies that target neighborhood-level searches, not just city-wide terms.",
    clients: "Residential Agents, Commercial Brokers, Property Managers, Developers",
  },
  {
    icon: "utensils",
    title: "Food & Beverage",
    description:
      "Nashville's culinary scene has exploded from hot chicken to James Beard-nominated dining. The 12 South corridor, Germantown, and East Nashville neighborhoods drive serious food tourism. We help restaurants build digital presences that earn organic foot traffic, manage their reputations across Yelp and Google, and turn first-time diners into regulars.",
    clients: "Restaurants, Bars, Food Halls, Catering Companies",
  },
  {
    icon: "briefcase",
    title: "Professional Services",
    description:
      "Nashville's growth has created enormous demand for attorneys, accountants, financial advisors, and consultants. With corporate headquarters relocating to Nashville — AllianceBernstein, Oracle, Amazon's Operations Hub — the market for B2B services has expanded significantly. We help professional service firms build authority and capture decision-maker searches.",
    clients: "Law Firms, Accounting, Financial Services, Consulting",
  },
]

const caseStudies = [
  {
    client: "Big Pigs Wine & Spirits",
    neighborhood: "Nashville, TN",
    challenge:
      "A beloved local bottle shop competing against national chains and big-box retailers in Google Shopping and local search.",
    solution:
      "Hyper-local SEO targeting Nashville neighborhood searches, Google Business Profile optimization, and a PPC campaign focusing on curated selections that chains don't carry.",
    results: [
      "280% increase in organic foot traffic within 6 months",
      "First-page rankings for 'wine shop Nashville' and 15+ neighborhood terms",
      "4.9-star Google profile with 200+ new reviews",
    ],
  },
  {
    client: "Maharani Collections",
    neighborhood: "Nashville, TN",
    challenge:
      "An Indian fashion boutique needed to reach Nashville's growing South Asian community and fashion-forward shoppers beyond word-of-mouth.",
    solution:
      "Social media strategy focused on Instagram and Pinterest for visual product discovery, combined with local SEO and targeted Meta ads reaching South Asian demographics in the Nashville metro.",
    results: [
      "340% growth in Instagram engagement in 90 days",
      "Online sales launched and exceeded in-store revenue within 4 months",
      "Featured in Nashville Lifestyles and StyleBlueprint",
    ],
  },
  {
    client: "The Lounge at 2nd",
    neighborhood: "Second Avenue, Nashville",
    challenge:
      "A new entertainment venue on Second Avenue needed to establish digital presence and compete for Lower Broadway nightlife searches during Nashville's competitive tourism season.",
    solution:
      "Google Business Profile dominance strategy, event-driven social content calendar, targeted PPC for 'nightlife Nashville' searches from out-of-state visitors, and AI chatbot for instant reservation inquiries.",
    results: [
      "Ranked #3 for 'Nashville nightlife' within 8 months of launch",
      "85% of reservation inquiries handled by AI chatbot 24/7",
      "Average 4.7-star rating across Google, Yelp, and TripAdvisor",
    ],
  },
]

const faqs = [
  {
    question: "How long does it take to rank on Google for Nashville keywords?",
    answer: "For most Nashville businesses, you'll see meaningful ranking improvements within 3–4 months for mid-competition terms. Highly competitive terms like 'Nashville SEO agency' or 'Nashville personal injury lawyer' can take 6–12 months to crack the first page. We always prioritize quick wins first — neighborhood-specific and long-tail terms that drive real business while we build authority for bigger terms.",
  },
  {
    question: "Do Nashville-specific keywords perform better than generic ones?",
    answer: "Dramatically better. 'Hot chicken restaurant Nashville' converts at 3–5x the rate of just 'hot chicken restaurant' because the searcher has clear purchase intent in your market. We build content and technical SEO strategies around Nashville's specific neighborhoods, districts, and local vernacular — Lower Broadway, The Gulch, East Nashville, Green Hills — because that's how locals and tourists actually search.",
  },
  {
    question: "Is PPC worth it in Nashville's competitive market?",
    answer: "It depends on your category. Nashville PPC is highly competitive in tourism, real estate, and legal — CPCs can run $8–$40. But for the right business with good margins, it's extremely effective. We always run a profitability analysis before recommending PPC, and we combine it with conversion rate optimization on your landing pages so every click has the best possible chance of converting.",
  },
  {
    question: "How do you handle reputation management for Nashville hospitality businesses?",
    answer: "Nashville hospitality is review-driven — tourists make decisions based on TripAdvisor, Google, and Yelp. We deploy a proactive review generation system that catches satisfied customers at the right moment and makes it easy to leave a review. For negative reviews, we respond promptly with a resolution-focused approach that demonstrates to prospective customers how you treat concerns.",
  },
  {
    question: "Can you help my Nashville business compete against national chains?",
    answer: "Yes — and local SEO is your biggest weapon. National chains have big budgets but they can't match your neighborhood relevance, authentic community connections, and the trust that comes with being Nashville-owned. We've helped dozens of locally owned Nashville businesses outrank national brands for their target keywords by leaning into local authority, community content, and hyper-specific geographic signals.",
  },
]

export default function NashvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-[-5%] w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  Nashville, TN — Our Home Market
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                  Nashville&apos;s{" "}
                  <span className="text-sky-400">AI-Powered</span>
                  <br />
                  Digital Marketing Agency
                </h1>
                <p className="text-white text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                  From Lower Broadway to Green Hills, from Music Row to East Nashville — we&apos;ve helped 500+ Nashville
                  businesses dominate local search, fill their pipelines, and outgrow their competitors since 2020.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <ShimmerLink href="/contact">
                    Get Your Free Nashville SEO Audit →
                  </ShimmerLink>
                  <a
                    href="tel:+16152000170"
                    className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    (615) 200-0170
                  </a>
                </div>
                {/* Stats */}
                <div className="flex gap-6 justify-center mt-16 flex-wrap">
                  {[
                    { num: 500, suffix: "+", label: "Nashville Businesses Transformed" },
                    { num: 2020, suffix: "", label: "Locally Founded" },
                    { num: 98, suffix: "%", label: "Client Retention Rate" },
                    { num: 4.9, suffix: "★", label: "Google Rating", decimal: 1 },
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

        {/* Why Nashville Businesses Choose NDG */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-14">
                <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                  Why Work With Us
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Why Nashville Businesses{" "}
                  <span className="text-sky-600">Choose NDG</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                  We live here. We know which neighborhoods are trending, which industries are growing, and exactly how
                  Nashville consumers search. That local intelligence is baked into everything we do.
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "map-pin",
                  title: "Born & Bred in Nashville",
                  body: "We opened our doors in Nashville in 2020, and this city is our only home base. We understand the Music City market from the inside — its seasonality, its neighborhoods, its culture — in a way a remote agency never could.",
                },
                {
                  icon: "cpu",
                  title: "AI Tools, Human Strategy",
                  body: "We pair proprietary AI systems for keyword research, content generation, and campaign optimization with experienced strategists who understand Nashville's business context. Technology amplifies human judgment — it doesn't replace it.",
                },
                {
                  icon: "trending-up",
                  title: "Results You Can Measure",
                  body: "Every campaign ties back to revenue metrics, not vanity numbers. We report on what matters: leads, calls, appointments, and revenue — segmented by Nashville neighborhoods and demographics.",
                },
                {
                  icon: "users",
                  title: "Deep Local Network",
                  body: "Five years in Nashville means relationships with local media, influential bloggers, event organizers, and business networks. Link building and PR opportunities that national agencies can't access.",
                },
                {
                  icon: "shield",
                  title: "No Long-Term Lock-Ins",
                  body: "Month-to-month contracts. If we don't deliver results, you can leave. We believe our work should earn your loyalty every month — not a 24-month contract should.",
                },
                {
                  icon: "zap",
                  title: "Full-Service Under One Roof",
                  body: "SEO, PPC, social media, web development, AI chatbots, reputation management — coordinated by a single team with a unified strategy. No fragmented agencies pulling in different directions.",
                },
              ].map((card, i) => (
                <BlurFade key={card.title} delay={0.15 + i * 0.07} inView>
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 h-full hover:border-sky-300 hover:shadow-md transition-colors group">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-200 group-hover:bg-sky-100 transition-colors">
                      <Icon name={card.icon} className="w-5 h-5 text-sky-600" />
                    </div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-14">
                <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Industries We Serve
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Deep Expertise in{" "}
                  <span className="text-sky-400">Nashville&apos;s Key Sectors</span>
                </h2>
                <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                  Generic marketing agencies serve everyone and specialize in nothing. We&apos;ve built real expertise in
                  the industries that drive Nashville&apos;s economy.
                </p>
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
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sky-400 text-xs uppercase tracking-widest">We serve:</span>
                          {industry.clients.split(", ").map((client) => (
                            <span
                              key={client}
                              className="text-xs bg-sky-500/8 text-sky-400 border border-sky-500/15 px-2.5 py-1 rounded-full"
                            >
                              {client}
                            </span>
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

        {/* Case Studies */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-14">
                <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                  Client Success Stories
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Real Nashville Businesses.{" "}
                  <span className="text-sky-600">Real Results.</span>
                </h2>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <BlurFade key={study.client} delay={0.1 + i * 0.1} inView>
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 flex flex-col h-full hover:border-sky-300 hover:shadow-md transition-colors">
                    <div className="mb-6">
                      <p className="text-sky-600 text-xs uppercase tracking-widest mb-1">Case Study</p>
                      <h3 className="text-slate-900 text-xl font-bold mb-1">{study.client}</h3>
                      <p className="text-slate-400 text-xs">{study.neighborhood}</p>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="text-sky-600 text-xs uppercase tracking-widest mb-1">Challenge</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sky-600 text-xs uppercase tracking-widest mb-1">Solution</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-slate-900 text-xs uppercase tracking-widest mb-3">Results</p>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="text-sky-600 mt-0.5 shrink-0">✓</span>
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
        <FAQSection
          items={faqs}
          title="Nashville SEO & Marketing FAQ"
          dark={true}
        />

        {/* CTA */}
        <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
          <Meteors number={14} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <p className="text-sky-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Nashville, TN
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Ready to Grow Your Nashville Business?
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Start with a free audit. We&apos;ll analyze your current digital presence, identify your biggest
                opportunities, and show you exactly what we&apos;d do — no obligation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink
                  href="/contact"
                  background="rgba(255,255,255,0.18)"
                  shimmerColor="rgba(255,255,255,0.6)"
                  className="text-white border-white/20"
                >
                  Get Your Free Audit →
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
    </>
  )
}
