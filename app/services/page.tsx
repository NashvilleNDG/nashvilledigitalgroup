import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerLink } from "@/components/magicui/shimmer-link";
import { Meteors } from "@/components/magicui/meteors";
import { Icon } from "@/components/ui/icon";
import { FAQSection } from "@/components/ui/faq-section";

const serviceFAQs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Most clients see measurable improvements within 30–60 days. Paid advertising (PPC/Social Ads) delivers results within the first week. SEO typically shows meaningful ranking improvements within 60–90 days. Overall business growth — more leads, more revenue — is typically evident within the first 90-day cycle."
  },
  {
    question: "Do you work with businesses outside Nashville?",
    answer: "Absolutely. While we're headquartered in Nashville and serve hundreds of Middle Tennessee businesses, we work with clients across the US. Digital services like SEO, PPC, social media, AI chatbots, and web development are 100% location-independent. We have active clients in over 20 states."
  },
  {
    question: "What makes NDG different from other digital marketing agencies?",
    answer: "Three things: (1) AI-first — we use artificial intelligence for campaign optimization, content, and reporting, not as a buzzword but as actual tooling that improves results. (2) Revenue focus — we report on leads and revenue attributed, not impressions and clicks. (3) No long-term lock-ins — we earn your business every month. Our 98% satisfaction rate and 500+ client portfolio speak for themselves."
  },
  {
    question: "How much does digital marketing cost?",
    answer: "Investment depends on the services and scale needed for your goals. Our Pricing Calculator at /tools/pricing-calculator gives you a real-time estimate based on your selections. As a general guide: individual services start around $500–800/month; comprehensive multi-channel programs run $2,000–8,000/month; web development and app projects are quoted per scope."
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No long-term contracts required. We operate on month-to-month agreements after an initial 90-day onboarding period (which gives campaigns enough runway to show results). Our 30-day money-back guarantee for the first month means there's zero risk in getting started."
  },
  {
    question: "Can I use just one service, or do I need a full package?",
    answer: "You can absolutely start with a single service — many clients begin with SEO or PPC and expand over time. That said, our most successful clients combine 3–4 complementary services (e.g., SEO + content + social + email) because digital channels reinforce each other. We'll recommend the right mix based on your goals and budget during your free strategy call."
  },
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "10 AI-powered digital marketing services including SEO, web development, AI chatbots, and more. Get a free strategy consultation today.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nashville-downtown.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#030812]/80" />
        {/* Bottom fade to blend into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030812] to-transparent" />
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                AI-Powered Services for
                <br />
                <span className="text-sky-400">
                  Every Business Need
                </span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                From intelligent automation to custom web development — comprehensive digital solutions tailored to your business.
              </p>
              <ShimmerLink href="/contact">
                Get Free Consultation →
              </ShimmerLink>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <BlurFade key={service.id} delay={0.1 + index * 0.05} inView>
                <div
                  id={service.id}
                  className="bg-card border border-border rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group hover:border-sky-500/25 transition-colors"
                >
                  <BorderBeam size={100} duration={12} delay={index * 0.9} colorFrom="#38bdf8" colorTo="#818cf8" />
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors">
                    <Icon name={service.icon} className="w-6 h-6 text-sky-400" />
                  </div>
                  <h2 className="text-white text-xl font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-white text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 border-t border-border pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-white text-sm">
                        <span className="w-4 h-4 rounded-full bg-sky-500/15 flex items-center justify-center shrink-0">
                          <span className="text-sky-400 text-[9px]">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — FAQSection renders its own <section>, kept as a direct child
          of <main> so the panel-stack scroll transition applies */}
      <FAQSection
        items={serviceFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with NDG"
        dark={false}
      />

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Not Sure Which Service Is Right For You?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Our team will analyze your business and recommend the perfect combination of services.
            </p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Schedule Free Strategy Call →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
