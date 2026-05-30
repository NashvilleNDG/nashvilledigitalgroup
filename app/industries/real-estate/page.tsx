import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const metadata: Metadata = {
  title: "Real Estate Digital Marketing Nashville | SEO for Agents & Brokerages | NDG",
  description:
    "Digital marketing for Nashville real estate agents, brokerages, property managers & apartments. 312% increase in qualified leads for Nashville Realty Group. Free strategy session.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you generate more qualified real estate leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine hyper-local SEO targeting specific Nashville neighborhoods with Google and Meta lead gen campaigns that use qualifying filters — price range, move timeline, pre-approval status — so you spend less time on leads that go nowhere.",
      },
    },
    {
      "@type": "Question",
      name: "How do you compete with Zillow and Realtor.com?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build your own brand and website authority so buyers and sellers who already know you find you directly, and we create neighborhood-specific content that ranks for searches Zillow can't serve — things like 'best neighborhoods in Nashville for families' or 'Germantown condos for sale under $500k'.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual agents or only brokerages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We have packages designed for individual agents building their brand as well as brokerages looking to generate leads at scale and attract agent talent. Property managers and apartment communities are also a core specialty.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with property listing pages and virtual tour marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build high-performance property listing pages with proper schema markup so listings appear in Google Property Search, and we create paid social campaigns that showcase virtual tours and drone footage to active buyers.",
      },
    },
    {
      "@type": "Question",
      name: "What does real estate digital marketing cost with NDG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individual agent packages start at $1,000/month. Brokerage and property management plans are custom-scoped based on your portfolio size and market. We offer a free strategy session to build a plan that fits your goals and budget.",
      },
    },
  ],
}

export default function RealEstatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] min-h-[80vh] flex items-center relative overflow-hidden py-24">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Real Estate, Agents &amp; Property Management
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                More Qualified Leads.
                <br />
                <span className="text-sky-400">Less Time Chasing Dead Ends.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Nashville Digital Group helps real estate agents, brokerages, and property managers generate
                high-quality leads from buyers and renters who are ready to move — not just browsing Zillow.
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
                  { value: "312%", label: "Increase in Qualified Leads" },
                  { value: "4.1x", label: "Increase in Property Page Views" },
                  { value: "58%", label: "Lower Cost Per Qualified Lead" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[150px]"
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
                What&apos;s Holding Your Real Estate Business{" "}
                <span className="text-sky-400">Back</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "filter",
                title: "Lots of Leads, None of Them Qualified",
                desc: "You're getting inquiries from people with no pre-approval, no real timeline, or looking in the wrong price range. Every unqualified lead wastes hours you could spend closing. You need marketing that attracts buyers who are actually ready.",
              },
              {
                icon: "search",
                title: "Invisible on Google Locally",
                desc: "When a buyer searches 'real estate agent in Green Hills' or 'condos for sale in Germantown', you're not showing up. Zillow and Realtor.com dominate the organic results, and you're paying for referrals instead of owning your own traffic.",
              },
              {
                icon: "home",
                title: "Losing Buyers to Zillow",
                desc: "Your own listings live on Zillow's platform, and Zillow sells those leads back to your competition. Your buyer inquires on your listing and gets a call from three other agents. You need your own digital presence that captures buyers before they hit the portals.",
              },
              {
                icon: "image",
                title: "Property Pages That Don't Convert",
                desc: "Your listing pages load slowly, look generic on mobile, and don't rank in search. Buyers find the property through Zillow, contact you from there — and Zillow charges you for the privilege of selling your own listing.",
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
                Marketing That Brings in{" "}
                <span className="text-sky-400">Ready-to-Buy Leads</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "map-pin",
                title: "Neighborhood SEO",
                desc: "Rank for every high-intent local search in your market — 'homes for sale in [neighborhood]', 'Nashville real estate agent', 'apartments near downtown Nashville'. We build neighborhood guide content that earns organic traffic month after month.",
                tags: ["Local Pack Rankings", "Neighborhood Pages", "Long-Tail Keywords"],
              },
              {
                icon: "target",
                title: "Qualified Lead Campaigns",
                desc: "Google and Meta ads with pre-qualification questions built into the lead form — budget, timeline, pre-approval status — so you only spend time on people ready to transact.",
                tags: ["Lead Qualification", "Google Ads", "Meta Lead Ads"],
              },
              {
                icon: "home",
                title: "Property Listing Pages",
                desc: "Custom property pages with RealScout or MLS IDX integration, virtual tour embeds, and schema markup so listings appear in Google Property Search directly — without paying Zillow per lead.",
                tags: ["IDX Integration", "Property Schema", "Virtual Tours"],
              },
              {
                icon: "globe",
                title: "Agent & Brokerage Websites",
                desc: "Fast, conversion-optimized websites that establish your authority in the Nashville market. Built with personal branding, neighborhood guides, and lead capture designed to convert browsers into clients.",
                tags: ["Personal Branding", "Lead Capture", "Mobile-First"],
              },
              {
                icon: "message-circle",
                title: "AI Buyer & Renter Chatbot",
                desc: "An AI assistant on your website that pre-qualifies leads 24/7, answers property FAQs, schedules showings, and captures contact info from buyers who browse at midnight.",
                tags: ["24/7 Lead Capture", "Showing Scheduler", "Pre-Qualification"],
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
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                KPIs That Move the{" "}
                <span className="text-sky-400">Needle</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: 312,
                suffix: "%",
                label: "Increase in Qualified Leads",
                client: "Nashville Realty Group",
                desc: "By combining neighborhood SEO with pre-qualification ad targeting, their pipeline went from noise to signal.",
              },
              {
                value: 4.1,
                suffix: "x",
                label: "Increase in Property Page Views",
                client: "Nashville Realty Group",
                desc: "After relaunching with optimized IDX pages, neighborhood guides, and virtual tour integrations.",
              },
              {
                value: 58,
                suffix: "%",
                label: "Lower Cost Per Qualified Lead",
                client: "Nashville Apartment Portfolio",
                desc: "Pre-qualification filters in lead forms eliminated unqualified traffic and dramatically cut wasted ad spend.",
              },
            ].map((kpi, index) => (
              <BlurFade key={kpi.label} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 text-center hover:border-sky-500/20 transition-colors">
                  <p className="text-5xl font-black text-sky-400 mb-1">
                    <NumberTicker value={kpi.value} />
                    {kpi.suffix}
                  </p>
                  <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-2">{kpi.client}</p>
                  <h3 className="text-white font-semibold text-base mb-3">{kpi.label}</h3>
                  <p className="text-white text-sm leading-relaxed">{kpi.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach Real Estate */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                How We Approach{" "}
                <span className="text-sky-400">Real Estate Marketing</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Market Analysis",
                desc: "We analyze your farm area, competing agents, and the specific search terms buyers and renters use in your target neighborhoods. You get a clear picture of where the opportunity is before we spend anything.",
              },
              {
                step: "02",
                title: "Digital Foundation",
                desc: "We audit or rebuild your website for local SEO performance, set up conversion tracking on every lead form and CTA, and create the neighborhood content library that becomes your long-term organic traffic engine.",
              },
              {
                step: "03",
                title: "Paid Lead Gen Launch",
                desc: "Google Search and Meta campaigns targeting buyers and renters with intent signals. Lead forms include pre-qualification questions so your CRM fills with actionable leads, not tire-kickers.",
              },
              {
                step: "04",
                title: "Lead Nurture & Scale",
                desc: "Automated email drips keep you top-of-mind with leads who aren't ready yet. We optimize campaigns monthly and scale what's converting. Most clients see a clear ROI within 60 days.",
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
                "We were getting plenty of leads from Zillow but paying through the nose for them and competing with five
                other agents on our own listings. NDG built us a real digital presence. Now buyers come directly to us,
                we're ranking for our neighborhoods, and our cost per qualified lead dropped by more than half. The ROI
                has been incredible."
              </blockquote>
              <div>
                <p className="text-white font-semibold text-lg">Marcus T.</p>
                <p className="text-sky-400 text-sm">Broker-Owner, Nashville Realty Group — Nashville, TN</p>
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
                Real Estate Marketing{" "}
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
              Ready to Generate Better Leads?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free real estate marketing strategy session. We'll audit your current digital presence and show you
              exactly where you're leaving qualified leads on the table.
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
