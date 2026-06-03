import type { Metadata } from "next";
import { company } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import ContactForm from "@/components/contact/ContactForm";
import { DotPattern } from "@/components/magicui/dot-pattern";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nashville Digital Group. Free strategy consultation. Call (615) 200-0170 or email office@nashvilledigitalgroup.com.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
      <DotPattern className="text-sky-500/12 absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" width={20} height={20} />
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <AnimatedSection>
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Let&apos;s Grow Your Business
              <br />
              <span className="text-sky-400">
                Together
              </span>
            </h1>
            <p className="text-white text-lg mb-10">
              Ready to transform your digital presence? Get a free strategy consultation with our team of AI-powered marketing experts.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-white text-xs uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p className="text-white font-medium">{company.phone}</p>
                  <p className="text-white font-medium">{company.phone2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-white text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-white font-medium">{company.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-white text-xs uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-white font-medium">{company.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 text-lg shrink-0">
                  🕐
                </div>
                <div>
                  <p className="text-white text-xs uppercase tracking-widest mb-1">
                    Hours
                  </p>
                  <p className="text-white font-medium">{company.hours}</p>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="mt-10">
              <p className="text-white font-semibold mb-4">What to Expect</p>
              <div className="space-y-3">
                {[
                  "1. Free 30-min Strategy Call",
                  "2. Custom Marketing Plan",
                  "3. Measurable Results",
                ].map((step, index) => (
                  <div key={step} className="flex gap-3 text-white text-sm">
                    <span className="bg-sky-500/10 text-sky-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    {step.replace(/^\d+\.\s/, "")}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right column */}
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
    </main>
  );
}
