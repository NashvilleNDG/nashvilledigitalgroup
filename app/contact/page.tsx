import type { Metadata } from "next";
import { company } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import ContactForm from "@/components/contact/ContactForm";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerLink } from "@/components/magicui/shimmer-link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nashville Digital Group. Free strategy consultation. Call (615) 200-0170 or email office@nashvilledigitalgroup.com.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center bg-[#030812] overflow-hidden py-28 md:py-36">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nashville-downtown.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#030812]/78" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030812] to-transparent" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />

        {/* Dot grid */}
        <DotPattern className="text-sky-500/10 absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" width={20} height={20} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurFade delay={0.1} inView>
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Let&apos;s Grow Your Business
              <br />
              <span className="text-sky-400">Together</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Ready to transform your digital presence? Get a free strategy consultation with our team of AI-powered marketing experts.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <ShimmerLink href="#contact-form">
                Get Free Consultation →
              </ShimmerLink>
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="border border-white/10 hover:border-sky-500/50 text-white px-6 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm font-semibold"
              >
                {company.phone}
              </a>
            </div>
          </BlurFade>

          {/* Quick trust stats */}
          <BlurFade delay={0.5} inView>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { value: "30-Min", label: "Free Strategy Call" },
                { value: "24hr", label: "Response Time" },
                { value: "No", label: "Long-Term Contracts" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-black text-sky-400">{item.value}</div>
                  <div className="text-white text-xs uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Contact Form + Details ── */}
      <section id="contact-form" className="bg-[#030812] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <AnimatedSection>
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-white text-lg mb-10">
                Fill out the form or reach us directly — we respond within 24 hours on business days.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white font-medium">{company.phone}</p>
                    <p className="text-white font-medium">{company.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium">{company.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-medium">{company.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                    🕐
                  </div>
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest mb-1">Hours</p>
                    <p className="text-white font-medium">{company.hours}</p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="mt-10">
                <p className="text-white font-semibold mb-4">What to Expect</p>
                <div className="space-y-3">
                  {[
                    "Free 30-min Strategy Call",
                    "Custom Marketing Plan",
                    "Measurable Results",
                  ].map((step, index) => (
                    <div key={step} className="flex gap-3 text-white text-sm">
                      <span className="bg-sky-500/10 text-sky-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right column — form */}
            <AnimatedSection delay={0.2}>
              <div className="glass border border-white/8 rounded-2xl p-8">
                <h2 className="text-white text-2xl font-bold mb-8">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
