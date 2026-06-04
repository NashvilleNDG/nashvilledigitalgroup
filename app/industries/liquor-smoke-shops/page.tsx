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
  title: "Liquor Store & Smoke Shop Marketing | Compliant Local Growth | NDG",
  description:
    "Drive foot traffic and sales for liquor stores, smoke shops, and vape shops with compliant local SEO, Google Business Profile optimization, and loyalty marketing in Nashville.",
}

const liquorFaqs = [
  {
    question: "Can you actually run ads for alcohol and tobacco?",
    answer:
      "Paid ads for these products are heavily restricted, so we focus on channels that ARE compliant and effective: local SEO, Google Business Profile, organic social, SMS, and reputation. Where compliant paid options exist (e.g. certain age-gated formats), we use them carefully.",
  },
  {
    question: "How do you get customers in the door without paid ads?",
    answer:
      "Local search dominance. When someone nearby searches for what you sell, we make sure you're the first result on Google and Maps — that's the highest-intent traffic there is, and it's free once you rank.",
  },
  {
    question: "Is SMS marketing legal for these products?",
    answer:
      "Yes, with proper opt-in and age verification. We set up compliant SMS programs that follow TCPA and carrier rules while driving real repeat business.",
  },
  {
    question: "How long until we see more foot traffic?",
    answer:
      "Google Business Profile improvements can lift visibility within weeks. Local SEO ranking gains typically build over 60–90 days. Loyalty/SMS revenue compounds month over month.",
  },
  {
    question: "Do you work with vape shops too?",
    answer:
      "Yes — vape, smoke, CBD, and tobacco retailers. These face the strictest ad rules, which is exactly why our compliant local-growth approach matters most for them.",
  },
]

export default function LiquorSmokeShopsPage() {
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
                Liquor Stores &amp; Smoke Shops
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Marketing That Works
                <br />
                <span className="text-sky-400">Where Ads Are Banned.</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                Liquor stores, smoke shops, and vape retailers face advertising restrictions most agencies can't
                navigate. NDG drives foot traffic and repeat sales with compliant local SEO, Google Business Profile
                optimization, and loyalty marketing.
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
                  { value: "Top 3", label: "Local Map Rankings" },
                  { value: "+58%", label: "Repeat Customers" },
                  { value: "100%", label: "Ad-Policy Compliant" },
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
                The Unique Challenges These Stores{" "}
                <span className="text-sky-600">Face Online</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "shield",
                title: "Banned From Paid Ads",
                desc: "Meta, Google, and TikTok restrict or outright ban alcohol, tobacco, and vape ads. Most agencies give up here — we don't.",
              },
              {
                icon: "map-pin",
                title: "Invisible in Local Search",
                desc: "When someone searches \"liquor store near me\" or \"smoke shop near me,\" you need to own the map pack — or the shop down the street wins the sale.",
              },
              {
                icon: "users",
                title: "No Customer Loyalty",
                desc: "These are repeat-purchase businesses, but without SMS lists and loyalty programs you have no way to bring customers back.",
              },
              {
                icon: "star",
                title: "Reputation & Reviews",
                desc: "A handful of bad reviews tanks foot traffic. Most owners have no system to generate steady positive reviews.",
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
                Compliant Growth That Drives{" "}
                <span className="text-sky-400">Foot Traffic</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "map-pin",
                title: "Local SEO & Map Pack",
                desc: "Dominate \"near me\" searches and Google Maps for your product categories and neighborhoods.",
                tags: ["Near-Me Searches", "Google Maps", "Neighborhood Targeting"],
              },
              {
                icon: "store",
                title: "Google Business Profile",
                desc: "Fully optimized, regularly posted profiles that turn searches into store visits.",
                tags: ["Profile Optimization", "Regular Posts", "Store Visits"],
              },
              {
                icon: "shield",
                title: "Compliant Campaigns",
                desc: "Age-gated, policy-compliant promotion strategies that keep your accounts safe.",
                tags: ["Age-Gated", "Policy-Compliant", "Account Safety"],
              },
              {
                icon: "message-circle",
                title: "SMS & Loyalty Marketing",
                desc: "Build a customer list and drive repeat visits with compliant text campaigns and rewards.",
                tags: ["SMS Campaigns", "Loyalty Rewards", "TCPA-Compliant"],
              },
              {
                icon: "star",
                title: "Reputation Management",
                desc: "Automated review generation and response to build a 4.5★+ rating that wins trust.",
                tags: ["Review Generation", "Response Management", "4.5★+ Rating"],
              },
              {
                icon: "code",
                title: "Website & Menus",
                desc: "Fast, age-verified websites with up-to-date product/brand listings and store info.",
                tags: ["Age Verification", "Product Listings", "Store Info"],
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
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">Proven Results</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Results That Impact Your{" "}
                <span className="text-sky-600">Bottom Line</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: "Top 3",
                label: "Map Pack Rankings",
                desc: "We get our store clients into the top 3 local map results for their highest-intent product searches.",
              },
              {
                value: "+58%",
                label: "Repeat Customer Rate",
                desc: "Compliant SMS and loyalty programs bring customers back through the door again and again.",
              },
              {
                value: "4.7★",
                label: "Average Rating Achieved",
                desc: "Automated review generation builds the steady stream of positive ratings that wins new walk-ins.",
              },
            ].map((kpi, index) => (
              <BlurFade key={kpi.label} delay={0.1 + index * 0.1} inView>
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 text-center hover:border-sky-300 hover:shadow-md transition-colors">
                  <p className="text-5xl font-black text-sky-600 mb-2">{kpi.value}</p>
                  <h3 className="text-slate-900 font-semibold text-base mb-3">{kpi.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{kpi.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.4} inView>
            <p className="text-slate-600 text-center text-base max-w-3xl mx-auto mt-12 leading-relaxed">
              When paid advertising is off the table, owning local search and building real customer loyalty is how you
              win. Our compliant local-growth playbook turns high-intent searches into store visits — and one-time
              buyers into regulars.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        items={liquorFaqs}
        title="Liquor & Smoke Shop Marketing FAQs"
        dark={true}
      />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Grow Your Store?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Get a free strategy session. We'll audit your local presence and show you exactly where foot traffic and
              repeat sales are slipping away — no paid ads required.
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
