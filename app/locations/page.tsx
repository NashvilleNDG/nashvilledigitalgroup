import type { Metadata } from "next"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Locations — Nashville & Middle Tennessee | Nashville Digital Group",
  description:
    "Nashville Digital Group serves businesses across Middle Tennessee — Nashville, Brentwood, Franklin, Murfreesboro, Hendersonville, Mt. Juliet, and Smyrna. AI-powered digital marketing across the region.",
}

const primaryMarkets = [
  {
    city: "Nashville",
    state: "TN",
    slug: "nashville",
    description:
      "Our flagship market and home base. We serve businesses across every Nashville neighborhood — Lower Broadway, The Gulch, East Nashville, 12 South, Music Row, Green Hills, and beyond. Over 500 Nashville businesses transformed since 2020.",
    industries: ["Tourism & Hospitality", "Healthcare", "Real Estate", "Food & Bev", "Tech Startups"],
    highlight: "500+ Nashville clients since 2020",
    icon: "map-pin",
    featured: true,
  },
  {
    city: "Brentwood",
    state: "TN",
    slug: "brentwood",
    description:
      "Premium digital marketing for Brentwood's discerning business owners. Serving the Cool Springs corridor, Maryland Farms business park, and Brentwood Town Center — where clients expect excellence and budgets reflect it.",
    industries: ["Med Spas", "Luxury Real Estate", "Wealth Management", "Fine Dining", "Professional Services"],
    highlight: "Home of Brentwood Med Spa — 210% consultation growth",
    icon: "star",
    featured: true,
  },
  {
    city: "Franklin",
    state: "TN",
    slug: "franklin",
    description:
      "One of America's fastest-growing cities is also one of its best digital marketing opportunities. Downtown Franklin, The Factory at Franklin, and the Williamson County growth corridor represent a market that is still less saturated than Nashville proper.",
    industries: ["Real Estate", "Healthcare", "Retail & Boutiques", "Restaurants", "Professional Services"],
    highlight: "50% population growth in Williamson County since 2010",
    icon: "trending-up",
    featured: true,
  },
]

const additionalMarkets = [
  {
    city: "Murfreesboro",
    state: "TN",
    description:
      "Tennessee's fastest-growing city and home to Middle Tennessee State University. A diverse economy spanning healthcare, retail, manufacturing, and a large student and faculty market.",
    industries: ["Healthcare", "Retail", "Restaurants", "Education-Adjacent", "Auto"],
  },
  {
    city: "Smyrna",
    state: "TN",
    description:
      "Smyrna's industrial base — anchored by Nissan's Tennessee manufacturing plant — supports a strong workforce and growing residential population. Solid market for service businesses, auto-adjacent services, and local retail.",
    industries: ["Auto Services", "Manufacturing B2B", "Local Retail", "Restaurants", "Healthcare"],
  },
  {
    city: "Hendersonville",
    state: "TN",
    description:
      "A family-oriented community on Old Hickory Lake with strong residential growth. Hendersonville businesses serve a loyal local customer base and benefit from hyperlocal digital strategies that emphasize community ties.",
    industries: ["Family Services", "Home Services", "Healthcare", "Restaurants", "Retail"],
  },
  {
    city: "Mt. Juliet",
    state: "TN",
    description:
      "One of Tennessee's fastest-growing suburban markets — positioned between Nashville and Lebanon with strong new residential development along Providence Marketplace. A prime market for businesses serving new homeowners.",
    industries: ["Home Services", "Healthcare", "Restaurants", "Fitness & Wellness", "Retail"],
  },
]

const whyRegional = [
  {
    icon: "map",
    title: "Deep Regional Knowledge",
    body: "We understand the differences between Nashville's tourism-driven downtown and Franklin's family-driven suburban market — and we build strategies accordingly. Generic national agencies apply the same playbook everywhere. We don't.",
  },
  {
    icon: "cpu",
    title: "AI Tools With Local Intelligence",
    body: "Our AI-powered keyword research, content generation, and campaign optimization systems are tuned to Middle Tennessee's search behavior — not national averages. We know how people in Williamson County search differently from Rutherford County.",
  },
  {
    icon: "trending-up",
    title: "Cross-Market Capabilities",
    body: "Businesses with locations or customers across multiple Middle Tennessee markets benefit from coordinated strategies. We can run unified campaigns while localizing content and targeting for each market's specific audience.",
  },
  {
    icon: "globe",
    title: "National Reach for Digital Services",
    body: "While our roots are in Middle Tennessee, our digital capabilities scale nationally. E-commerce, SaaS, and service businesses without geographic constraints benefit from our AI-powered content and PPC strategies regardless of location.",
  },
]

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-sky-600/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-[-5%] w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Service Areas
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Serving Nashville &amp;{" "}
                <span className="text-sky-400">Middle Tennessee</span>
              </h1>
              <p className="text-white text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                We work with businesses across Middle Tennessee — from Nashville&apos;s downtown corridor to the
                fastest-growing suburbs in the country. Our roots are local. Our capabilities scale nationally.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">
                  Get a Free Strategy Consultation →
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

      {/* Primary Markets Grid */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Primary Markets
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our Core{" "}
                <span className="text-sky-400">Service Areas</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Deep local expertise and proven results in Middle Tennessee&apos;s most important business markets.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {primaryMarkets.map((market, i) => (
              <BlurFade key={market.city} delay={0.15 + i * 0.1} inView>
                <Link
                  href={`/locations/${market.slug}`}
                  className="block glass border border-white/6 rounded-2xl p-8 h-full hover:border-sky-500/30 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-sky-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-4 ring-1 ring-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                          <Icon name={market.icon} className="w-5 h-5 text-sky-400" />
                        </div>
                        <h3 className="text-white text-2xl font-bold">{market.city}</h3>
                        <p className="text-sky-400 text-sm">{market.state}</p>
                      </div>
                      <span className="text-sky-400 group-hover:translate-x-1 transition-transform duration-200 mt-1 text-lg">→</span>
                    </div>

                    {/* Description */}
                    <p className="text-white text-sm leading-relaxed mb-6 flex-1">{market.description}</p>

                    {/* Industries */}
                    <div className="mb-6">
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Industries Served</p>
                      <div className="flex flex-wrap gap-2">
                        {market.industries.map((industry) => (
                          <span
                            key={industry}
                            className="text-xs bg-sky-500/8 text-sky-400 border border-sky-500/15 px-2.5 py-1 rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight */}
                    <div className="flex items-center gap-2 pt-5 border-t border-white/6">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span className="text-sky-400 text-xs">{market.highlight}</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regional Expertise Matters */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Regional Advantage
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                We Know Middle Tennessee{" "}
                <span className="text-sky-400">From the Inside</span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyRegional.map((item, i) => (
              <BlurFade key={item.title} delay={0.15 + i * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 h-full hover:border-sky-500/20 transition-colors group">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                    <Icon name={item.icon} className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{item.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="bg-section-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Also Serving
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                More Middle Tennessee{" "}
                <span className="text-sky-400">Communities</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Beyond our primary markets, we serve businesses across the broader Middle Tennessee region — each with
                their own market dynamics and growth opportunities.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalMarkets.map((market, i) => (
              <BlurFade key={market.city} delay={0.15 + i * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 hover:border-sky-500/20 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl">{market.city}</h3>
                      <p className="text-sky-400 text-sm">{market.state}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="text-sky-400 text-sm hover:text-sky-300 transition-colors shrink-0 mt-1"
                    >
                      Get started →
                    </Link>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-4">{market.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {market.industries.map((industry) => (
                      <span
                        key={industry}
                        className="text-xs bg-white/5 text-white/70 border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* National Reach Statement */}
      <section className="bg-background py-20 md:py-28 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-sky-500/20">
              <Icon name="globe" className="w-7 h-7 text-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              We Serve Clients{" "}
              <span className="text-sky-400">Nationally</span>
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              While our roots are in Middle Tennessee, our digital capabilities are fully remote-ready. We work with
              businesses across Middle Tennessee and serve clients nationally for digital services — SEO, PPC, content
              marketing, web development, and AI chatbots require no geographic boundaries. If you&apos;re outside the
              Nashville metro and want to work with a results-driven AI-powered agency, we&apos;d love to hear from you.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mt-8">
              {["SEO", "PPC / Google Ads", "Social Media", "Web Development", "AI Chatbots", "Content Marketing"].map(
                (service) => (
                  <span
                    key={service}
                    className="text-sm bg-sky-500/8 text-sky-400 border border-sky-500/15 px-3 py-1.5 rounded-full"
                  >
                    {service}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Work With Middle Tennessee&apos;s AI-Powered Agency?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-10">
              Whether you&apos;re in Nashville, Brentwood, Franklin, or anywhere across Middle Tennessee — start with a
              free consultation. We&apos;ll analyze your market, your competitors, and your biggest opportunities.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <ShimmerLink
                href="/contact"
                background="rgba(255,255,255,0.18)"
                shimmerColor="rgba(255,255,255,0.6)"
                className="text-white border-white/20"
              >
                Schedule Your Free Consultation →
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
