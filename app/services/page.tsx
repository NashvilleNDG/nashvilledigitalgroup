import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerLink } from "@/components/magicui/shimmer-link";
import { Meteors } from "@/components/magicui/meteors";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "10 AI-powered digital marketing services including SEO, web development, AI chatbots, and more. Starting from $249/month.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                AI-Powered Services for{" "}
                <span className="bg-gradient-to-r from-sky-400 to-sky-400 bg-clip-text text-transparent">
                  Every Business Need
                </span>
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
                From intelligent automation to custom web development — comprehensive digital solutions starting from $249/month.
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
                  <span className="inline-block bg-sky-500/10 text-sky-400 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-sky-500/15">
                    {service.price}
                  </span>
                  <h2 className="text-white text-xl font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 border-t border-border pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-white/80 text-sm">
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

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={14} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Not Sure Which Service Is Right For You?
            </h2>
            <p className="text-blue-100/80 text-lg max-w-xl mx-auto mb-8">
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
