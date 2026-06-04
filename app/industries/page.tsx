import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Industries We Serve | Nashville Digital Group",
  description:
    "NDG specializes in digital marketing for healthcare, restaurants, real estate, law firms, e-commerce, liquor & smoke shops, and hospitality in Nashville, TN. Industry-specific strategies that actually work. Free strategy session.",
}

const industries = [
  {
    href: "/industries/healthcare",
    icon: "activity",
    label: "Healthcare",
    title: "Medical Practices, Dental & Med Spas",
    desc: "HIPAA-compliant marketing that fills appointment books. Local SEO, compliant PPC, reputation management, and AI chatbots built specifically for healthcare providers.",
    stats: [
      { value: "127%", label: "Avg Booking Increase" },
      { value: "4.8★", label: "Avg Google Rating" },
      { value: "68%", label: "Lower Cost-Per-Patient" },
    ],
    color: "from-teal-500/10 to-sky-500/5",
    borderHover: "hover:border-teal-500/30",
  },
  {
    href: "/industries/restaurants",
    icon: "utensils",
    label: "Restaurants & F&B",
    title: "Restaurants, Bars & Food Businesses",
    desc: "Fill tables on slow nights, own your reservations, and stop paying DoorDash and Yelp a cut of every cover. Local SEO, social media, and reputation campaigns for Nashville's food scene.",
    stats: [
      { value: "+340%", label: "Leads in 90 Days" },
      { value: "+180%", label: "Sales YoY" },
      { value: "2.4x", label: "Direct Reservations" },
    ],
    color: "from-orange-500/10 to-sky-500/5",
    borderHover: "hover:border-orange-500/30",
  },
  {
    href: "/industries/real-estate",
    icon: "home",
    label: "Real Estate",
    title: "Agents, Brokerages & Property Managers",
    desc: "Stop paying Zillow for leads on your own listings. We generate qualified buyers and renters through your own digital presence with neighborhood SEO, targeted PPC, and AI intake.",
    stats: [
      { value: "312%", label: "Qualified Lead Growth" },
      { value: "4.1x", label: "Property Page Views" },
      { value: "58%", label: "Lower Cost-Per-Lead" },
    ],
    color: "from-violet-500/10 to-sky-500/5",
    borderHover: "hover:border-violet-500/30",
  },
  {
    href: "/industries/law-firms",
    icon: "scale",
    label: "Law Firms",
    title: "Attorneys & Legal Services",
    desc: "Bar-compliant SEO and PPC that brings in more consultation requests. AI intake chatbots capture leads at 2am when your competitors' phones go to voicemail.",
    stats: [
      { value: "89%", label: "More Consultations" },
      { value: "3.2x", label: "Organic Traffic" },
      { value: "73%", label: "After-Hours by AI" },
    ],
    color: "from-sky-500/10 to-indigo-500/5",
    borderHover: "hover:border-sky-500/30",
  },
  {
    href: "/industries/ecommerce",
    icon: "store",
    label: "E-Commerce",
    title: "Online Stores & D2C Brands",
    desc: "Scale your online store with paid social, Google Shopping, email/SMS automation, and conversion optimization. No storefront required — pure online growth.",
    stats: [
      { value: "+220%", label: "Average ROAS" },
      { value: "3.1x", label: "Email/SMS Revenue" },
      { value: "+47%", label: "Conversion Rate" },
    ],
    color: "from-emerald-500/10 to-sky-500/5",
    borderHover: "hover:border-emerald-500/30",
  },
  {
    href: "/industries/liquor-smoke-shops",
    icon: "shield",
    label: "Liquor & Smoke Shops",
    title: "Liquor Stores, Smoke & Vape Shops",
    desc: "Marketing for businesses other agencies are scared to touch. Compliant local SEO, Google Business Profile, and loyalty marketing that drives foot traffic where paid ads are banned.",
    stats: [
      { value: "Top 3", label: "Local Map Rankings" },
      { value: "+58%", label: "Repeat Customers" },
      { value: "100%", label: "Ad-Policy Compliant" },
    ],
    color: "from-amber-500/10 to-sky-500/5",
    borderHover: "hover:border-amber-500/30",
  },
  {
    href: "/hospitality",
    icon: "building",
    label: "Hospitality",
    title: "Hotels, Venues & Events",
    desc: "AI-powered marketing for hotels, event venues, and hospitality businesses. Direct-booking strategies that reduce OTA dependency and fill rooms year-round.",
    stats: [
      { value: "Up to 40%", label: "Revenue Boost" },
      { value: "+2.5x", label: "Direct Bookings" },
      { value: "24/7", label: "AI Concierge" },
    ],
    color: "from-rose-500/10 to-sky-500/5",
    borderHover: "hover:border-rose-500/30",
  },
]

export default function IndustriesPage() {
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
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                We Specialize In{" "}
                <span className="text-sky-400">Your Industry</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Generic marketing gets generic results. NDG builds campaigns around the specific challenges, compliance
                requirements, and customer behavior in your industry — so every dollar works harder.
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
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Verticals</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Deep Expertise Across{" "}
                <span className="text-sky-600">Your Industry</span>
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto mt-4">
                Click any industry below to see specific pain points, solutions, and real client results.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <BlurFade key={industry.href} delay={0.1 + index * 0.1} inView>
                <Link
                  href={industry.href}
                  className={`bg-white border border-slate-200 shadow-sm ${industry.borderHover} hover:shadow-md rounded-2xl p-8 flex flex-col h-full transition-all duration-200 group hover:scale-[1.01] block`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center ring-1 ring-sky-200 shrink-0">
                        <Icon name={industry.icon} className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-sky-600 text-xs font-semibold uppercase tracking-widest mb-1">
                          {industry.label}
                        </p>
                        <h3 className="text-slate-900 font-bold text-xl leading-tight">{industry.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{industry.desc}</p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {industry.stats.map((stat) => (
                        <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <p className="text-slate-900 font-bold text-lg">{stat.value}</p>
                          <p className="text-slate-500 text-xs mt-0.5 leading-tight">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sky-600 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      See {industry.label} Solutions
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Specialization Matters */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Industry-Specific Marketing{" "}
                <span className="text-sky-400">Outperforms Generic</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "shield",
                title: "Compliance Built In",
                desc: "Healthcare needs HIPAA compliance. Law firms have Bar advertising rules. Restaurants have FTC guidelines on claims. We build campaigns around your industry's specific rules so you never have to worry.",
              },
              {
                icon: "users",
                title: "We Know Your Customer",
                desc: "A patient searching for a dentist behaves completely differently than a buyer searching for a home. We understand the decision journey, seasonal patterns, and conversion triggers for each industry we serve.",
              },
              {
                icon: "trending-up",
                title: "Proven Playbooks",
                desc: "We've run hundreds of campaigns across these industries since 2020. We know what works, what doesn't, and how to get results faster because we've already solved your industry's hardest marketing problems.",
              },
            ].map((pillar, index) => (
              <BlurFade key={pillar.title} delay={0.1 + index * 0.1} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 text-center hover:border-sky-500/20 transition-colors">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 ring-1 ring-sky-500/20">
                    <Icon name={pillar.icon} className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{pillar.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed Section */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Don't See Your Industry?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              We Work With Businesses Across Nashville
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Our four featured verticals represent our deepest expertise, but we serve businesses across all industries
              in Nashville and Middle Tennessee. If you need AI-powered digital marketing, we can help.
            </p>
            <ShimmerLink href="/contact">
              Talk to Our Team →
            </ShimmerLink>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free strategy session tailored to your industry. We'll show you exactly where you're leaving revenue
              on the table and how to capture it.
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
