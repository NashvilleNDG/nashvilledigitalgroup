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
  title: "E-Commerce Marketing Agency | Online Store Growth | NDG",
  description:
    "Nashville Digital Group helps online stores scale revenue with paid social, Google Shopping, email/SMS automation, and conversion rate optimization — no storefront required. Average +220% ROAS. Free growth audit.",
}

const ecommerceFaqs = [
  {
    question: "Do you only work with Shopify stores?",
    answer:
      "No. We work with Shopify, WooCommerce, BigCommerce, and custom/headless builds. Shopify is the most common platform among our clients, but we're completely platform-agnostic and tailor our approach to whatever stack your store runs on.",
  },
  {
    question: "We sell online only and have no physical location — can you still help?",
    answer:
      "Absolutely — that's our specialty. E-commerce marketing is 100% location-independent: paid social, Google Shopping, email/SMS automation, and conversion rate optimization all work regardless of where you or your customers are based. You don't need a storefront or local foot traffic for us to scale your revenue.",
  },
  {
    question: "How much ad budget do we need to start?",
    answer:
      "Most stores start seeing reliable data and momentum at $3,000–5,000/month in ad spend, but we tailor everything to your margins and goals. We focus on profitable scaling — spending efficiently to hit a target ROAS — not just burning through budget.",
  },
  {
    question: "How fast will we see results?",
    answer:
      "Paid social and Google Shopping can drive sales within the first 1–2 weeks. Email and SMS flows compound over 30–60 days as your list grows and automations mature. Sustainable, predictable ROAS improvements build over the first 90 days.",
  },
  {
    question: "Do you handle the creative (ads, photos, video)?",
    answer:
      "Yes. Our team produces scroll-stopping ad creative, product photography direction, and UGC-style video that actually converts. Creative is the single biggest lever on paid social performance, so we test relentlessly to find the winners.",
  },
]

export default function EcommercePage() {
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
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-indigo-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                E-Commerce &amp; Online Retail
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                More Traffic. More Conversions.
                <br />
                <span className="text-sky-400">More Revenue.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Nashville Digital Group helps online stores scale with paid social, Google Shopping, email/SMS
                automation, and conversion optimization — no storefront required.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">Get Free Growth Audit →</ShimmerLink>
                <a
                  href="tel:6152000170"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  (615) 200-0170
                </a>
              </div>
              <div className="flex gap-6 justify-center mt-14 flex-wrap">
                {[
                  { value: "+220%", label: "Average ROAS" },
                  { value: "3.1x", label: "Revenue From Email/SMS" },
                  { value: "+47%", label: "Conversion Rate" },
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
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Sound Familiar?</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                The Challenges Online Stores{" "}
                <span className="text-sky-600">Face Today</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "dollar-sign",
                title: "Rising Ad Costs, Shrinking Margins",
                desc: "Meta and Google CPMs keep climbing year after year. Without disciplined targeting and relentless creative testing, your ROAS bleeds out and every new customer costs more than the last.",
              },
              {
                icon: "store",
                title: "Abandoned Carts Everywhere",
                desc: "Nearly 70% of carts are abandoned before checkout. Without automated email and SMS recovery flows working in the background, you're leaving real money on the table every single day.",
              },
              {
                icon: "trending-up",
                title: "Traffic That Doesn't Convert",
                desc: "You're paying for clicks that bounce. A slow, cluttered, or untrustworthy store kills conversions before checkout — turning expensive ad spend into wasted budget instead of revenue.",
              },
              {
                icon: "users",
                title: "No Repeat Customers",
                desc: "Acquiring a customer once is expensive. Without retention through email, SMS, and loyalty programs, you never recoup the acquisition cost — and you're stuck on the paid-traffic treadmill forever.",
              },
            ].map((pain, index) => (
              <BlurFade key={pain.title} delay={0.15 + index * 0.07} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 h-full hover:border-sky-300 hover:shadow-md transition-colors text-center">
                  <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center mb-4 ring-1 ring-sky-200 mx-auto">
                    <Icon name={pain.icon} className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{pain.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pain.desc}</p>
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
                Full-Funnel E-Commerce{" "}
                <span className="text-sky-400">Growth</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "share-2",
                title: "Paid Social Ads",
                desc: "Meta, TikTok, and Pinterest ad funnels with relentless creative testing. We find the audiences and angles that drive profitable sales — then scale the winners aggressively.",
                tags: ["Meta Ads", "TikTok Ads", "Creative Testing"],
              },
              {
                icon: "search",
                title: "Google Shopping & PMax",
                desc: "Product feed optimization and Performance Max campaigns that capture high-intent buyers at the exact moment they're searching for what you sell.",
                tags: ["Shopping Feed", "Performance Max", "High-Intent Buyers"],
              },
              {
                icon: "mail",
                title: "Email & SMS Automation",
                desc: "Abandoned cart, welcome, post-purchase, and win-back flows that run 24/7 — recovering lost sales and driving repeat revenue without any extra ad spend.",
                tags: ["Klaviyo Flows", "Cart Recovery", "SMS Campaigns"],
              },
              {
                icon: "target",
                title: "Conversion Rate Optimization",
                desc: "Landing page, product page, and checkout optimization to turn more of your existing visitors into buyers — so every dollar of traffic works harder.",
                tags: ["A/B Testing", "Checkout UX", "Product Pages"],
              },
              {
                icon: "code",
                title: "Store Design & Development",
                desc: "Fast, mobile-first Shopify and headless builds engineered to convert. A storefront that loads instantly, builds trust, and removes friction from every step.",
                tags: ["Shopify", "Headless", "Mobile-First"],
              },
              {
                icon: "heart",
                title: "Retention & Loyalty",
                desc: "Subscription, loyalty, and lifecycle programs that boost lifetime value — turning one-time buyers into repeat customers who cost nothing to re-acquire.",
                tags: ["Subscriptions", "Loyalty", "Lifetime Value"],
              },
            ].map((solution, index) => (
              <BlurFade key={solution.title} delay={0.15 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors flex flex-col text-center">
                  <div className="w-12 h-12 bg-sky-500/12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20 mx-auto">
                    <Icon name={solution.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{solution.title}</h3>
                  <p className="text-white text-sm leading-relaxed mb-4 flex-1">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
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
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Proven Results</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Results That Move Your{" "}
                <span className="text-sky-600">Revenue</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: 220,
                prefix: "+",
                suffix: "%",
                label: "Average ROAS",
                desc: "Across our e-commerce clients after dialing in audiences, creative testing, and full-funnel paid social.",
              },
              {
                value: 32,
                suffix: "%",
                label: "Cart Recovery Rate",
                desc: "Recovered from abandoned carts through automated email and SMS flows that run around the clock.",
              },
              {
                value: 3.1,
                suffix: "x",
                label: "Revenue From Email/SMS",
                desc: "Growth in owned-channel revenue from lifecycle automation, segmentation, and retention campaigns.",
              },
            ].map((kpi, index) => (
              <BlurFade key={kpi.label} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center hover:border-sky-300 hover:shadow-md transition-colors">
                  <p className="text-5xl font-black text-sky-600 mb-2">
                    {kpi.prefix}
                    <NumberTicker value={kpi.value} />
                    {kpi.suffix}
                  </p>
                  <h3 className="text-slate-900 font-semibold text-base mb-3">{kpi.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{kpi.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.4} inView>
            <p className="text-slate-600 text-center text-base max-w-3xl mx-auto mt-12 leading-relaxed">
              Because e-commerce is location-independent, we're not limited by geography or foot traffic. We scale your
              store with profitable paid acquisition, owned-channel revenue from email and SMS, and a storefront tuned
              to convert — wherever your customers are.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* How We Approach E-Commerce */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                How We Scale{" "}
                <span className="text-sky-400">Online Stores</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Audit & Margins",
                desc: "We dig into your store data, ad accounts, and unit economics to understand your true margins and target ROAS — so every dollar we spend is engineered to be profitable.",
              },
              {
                step: "02",
                title: "Funnel & Creative",
                desc: "We map your full funnel from first click to repeat purchase, then build the paid social, Shopping, and email/SMS assets and creative to fill every stage of it.",
              },
              {
                step: "03",
                title: "Launch & Test",
                desc: "Campaigns and flows go live, then we test relentlessly — creative, audiences, landing pages, and offers — killing losers fast and pouring budget into proven winners.",
              },
              {
                step: "04",
                title: "Optimize & Scale",
                desc: "We track revenue, ROAS, and lifetime value end to end, then scale profitable channels and tighten retention so your growth compounds month after month.",
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
                "Our ad costs were climbing and growth had stalled. NDG rebuilt our paid social funnel, set up our
                Klaviyo flows from scratch, and reworked our product pages. Within 90 days our ROAS more than doubled,
                abandoned-cart emails were recovering a third of lost orders, and email had become our most profitable
                channel. They treat our store like their own."
              </blockquote>
              <div>
                <p className="text-white font-semibold text-lg">Mara L.</p>
                <p className="text-sky-400 text-sm">Founder, Direct-to-Consumer Apparel Brand</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={ecommerceFaqs}
        title="E-Commerce Marketing FAQs"
        dark={true}
      />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Scale Your Store?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free e-commerce growth audit. We'll review your store, ad accounts, and email setup and show you
              exactly where revenue is slipping through the cracks.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Get Free Growth Audit →
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
