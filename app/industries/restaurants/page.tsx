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
  title: "Restaurant & Bar Digital Marketing Nashville | SEO, Ads & Social | NDG",
  description:
    "Fill your restaurant every night with NDG's digital marketing for Nashville restaurants, bars, lounges & food businesses. +340% leads in 90 days for Big Pigs Wine & Spirits. Free strategy session.",
}

const restaurantFaqs = [
  {
    question: "How do you help restaurants rank for 'restaurants near me' searches?",
    answer:
      "We optimize your Google Business Profile with accurate hours, photos, menus, and regular posts. We also build local citations across Yelp, TripAdvisor, and food directories, and create location-specific landing pages that target your neighborhood. Most restaurants see improved local pack rankings within 45–60 days.",
  },
  {
    question: "Can you help us reduce no-shows and increase direct reservations?",
    answer:
      "Yes. We integrate direct booking widgets on your website and run targeted campaigns that drive reservations through your own system rather than third-party platforms that charge per-cover fees. We also set up automated SMS/email reminders to reduce no-shows.",
  },
  {
    question: "How do you compete with Yelp and DoorDash for visibility?",
    answer:
      "We help you own your own brand search — so when someone Googles your restaurant by name, they land on your site first. We also run Google and Meta ads that drive orders and reservations directly to you, cutting out commission-heavy aggregators.",
  },
  {
    question: "Do you manage social media for restaurants?",
    answer:
      "Yes. We create and manage content across Instagram, Facebook, and TikTok — including food photography direction, daily specials posts, event promotion, and influencer outreach for Nashville food bloggers.",
  },
  {
    question: "How much does restaurant digital marketing cost?",
    answer:
      "Our restaurant marketing packages start at $900/month and scale with your advertising budget. We offer a free strategy session where we'll audit your current presence and recommend a plan based on your specific goals.",
  },
]

export default function RestaurantsPage() {
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
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-orange-600/12 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-sky-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Restaurants, Bars &amp; Food &amp; Beverage
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Full Tables Every Night.
                <br />
                <span className="text-sky-400">On Your Terms.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                From Mexican and Indian kitchens to American bars and lounges, Nashville Digital Group helps restaurants
                of every cuisine pack the house — without handing a cut to Yelp or DoorDash for every cover.
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
                  { value: "+340%", label: "Leads in 90 Days (Big Pigs Wine & Spirits)" },
                  { value: "+180%", label: "Sales YoY (Maharani Collections)" },
                  { value: "2.4x", label: "Increase in Direct Reservations" },
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
                Why Nashville Restaurants{" "}
                <span className="text-sky-600">Struggle Online</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "calendar",
                title: "Empty Tables on Slow Nights",
                desc: "Tuesday and Wednesday are graveyards. You're paying full labor costs for half capacity. Without a way to drive demand on slow nights, you're leaving serious money on the table every single week.",
              },
              {
                icon: "search",
                title: "Invisible in 'Near Me' Searches",
                desc: "When someone in your neighborhood searches 'restaurants near me' or 'bars in East Nashville', you're not showing up. That's not a food quality problem — that's a digital marketing problem, and it's costing you covers every day.",
              },
              {
                icon: "dollar-sign",
                title: "Paying DoorDash & Yelp a Fortune",
                desc: "Third-party platforms take 15–30% per order and own the customer relationship. You're essentially renting your own customers. You need a way to own your audience and drive direct reservations and orders.",
              },
              {
                icon: "star",
                title: "A Few Bad Reviews Define You",
                desc: "One disgruntled customer can tank your rating overnight. Meanwhile, your 200 satisfied regulars never left a review. You need a system that captures the silent majority and protects your reputation proactively.",
              },
            ].map((pain, index) => (
              <BlurFade key={pain.title} delay={0.15 + index * 0.07} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 h-full hover:border-sky-300 hover:shadow-md transition-colors">
                  <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center mb-4 ring-1 ring-sky-200">
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
                A Full Table Is a{" "}
                <span className="text-sky-400">Marketing Problem</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "map-pin",
                title: "Local Restaurant SEO",
                desc: "We dominate local search for your cuisine type and neighborhood. Google Business Profile optimization, menu schema markup, review velocity campaigns, and location pages that rank.",
                tags: ["Google Maps Pack", "Menu SEO", "Citation Building"],
              },
              {
                icon: "target",
                title: "Slow-Night Ad Campaigns",
                desc: "Targeted Google and Meta campaigns that fire on your slowest days — driving reservations and walk-ins when you need them most. Promotions, events, and specials amplified to your local audience.",
                tags: ["Google Ads", "Meta Ads", "Geo-Targeting"],
              },
              {
                icon: "instagram",
                title: "Social Media & Content",
                desc: "Daily content that makes your food look irresistible. Instagram, TikTok, and Facebook management with food photography direction, event coverage, and influencer outreach in the Nashville food scene.",
                tags: ["Instagram", "TikTok", "Influencer Outreach"],
              },
              {
                icon: "star",
                title: "Review Generation",
                desc: "Automated post-visit review requests via SMS and email. We turn your regulars into vocal advocates and help you respond to every review — good and bad — to show you care.",
                tags: ["Google Reviews", "Yelp", "Automated SMS"],
              },
              {
                icon: "globe",
                title: "Restaurant Website & Booking",
                desc: "Fast, beautiful restaurant websites with direct online reservation and ordering capability. No more losing customers to slow pages or forcing them to book through third-party platforms.",
                tags: ["Direct Booking", "Online Ordering", "Menu Pages"],
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
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Client Results</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Real Nashville Restaurants.{" "}
                <span className="text-sky-600">Real Numbers.</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: 340,
                suffix: "%",
                label: "Increase in Leads in 90 Days",
                client: "Big Pigs Wine & Spirits",
                desc: "From targeted local ads and SEO driving high-intent foot traffic.",
              },
              {
                value: 180,
                suffix: "%",
                label: "Sales Growth Year-Over-Year",
                client: "Maharani Collections",
                desc: "Consistent paid and organic strategy compounding over 12 months.",
              },
              {
                value: 2.4,
                suffix: "x",
                label: "Increase in Direct Reservations",
                client: "The Lounge at 2nd",
                desc: "By driving bookings to their own system instead of third-party platforms.",
              },
            ].map((kpi, index) => (
              <BlurFade key={kpi.label} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center hover:border-sky-300 hover:shadow-md transition-colors">
                  <p className="text-5xl font-black text-sky-600 mb-1">
                    <NumberTicker value={kpi.value} />
                    {kpi.suffix}
                  </p>
                  <p className="text-sky-600 text-xs font-semibold uppercase tracking-widest mb-2">{kpi.client}</p>
                  <h3 className="text-slate-900 font-semibold text-base mb-3">{kpi.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{kpi.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach Restaurants */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                How We Approach{" "}
                <span className="text-sky-400">Restaurant Marketing</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Visibility Audit",
                desc: "We analyze exactly how you appear in local search, on Google Maps, Yelp, and social — and find every gap where competitors are stealing customers you should be capturing.",
              },
              {
                step: "02",
                title: "Audience & Timing Strategy",
                desc: "We identify your highest-value customer segments and the specific days, times, and occasions they're most likely to search, book, or walk in — then build campaigns around those windows.",
              },
              {
                step: "03",
                title: "Multi-Channel Launch",
                desc: "SEO, paid ads, social media, and review campaigns launch in a coordinated sequence. Every channel reinforces the others so you build compounding momentum instead of scattered results.",
              },
              {
                step: "04",
                title: "Revenue Attribution",
                desc: "We track every reservation, order, and walk-in back to its marketing source so you know exactly which campaigns are filling tables and which to scale.",
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

      {/* Testimonials */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-12">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Straight From Our{" "}
                <span className="text-sky-400">Clients</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "NDG completely transformed our online presence. In 90 days our lead volume was up 340% and we had customers coming in saying they found us on Google. Before, we were barely showing up.",
                name: "Owner",
                business: "Big Pigs Wine & Spirits — Nashville, TN",
              },
              {
                quote:
                  "We went from zero online reservations to booking out our lounge on weekends entirely through our own website. No more paying DoorDash and Yelp a cut of every table. NDG made that happen.",
                name: "General Manager",
                business: "The Lounge at 2nd — Nashville, TN",
              },
            ].map((testimonial, index) => (
              <BlurFade key={testimonial.business} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-8 hover:border-sky-500/20 transition-colors">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sky-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-white text-base leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sky-400 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={restaurantFaqs}
        title="Restaurant Marketing FAQs"
        dark={true}
      />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Fill Every Seat?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free restaurant marketing strategy session. We'll show you exactly where you're losing covers — and
              how to get them back.
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
