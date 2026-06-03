import type { Metadata } from "next";
import Link from "next/link";
import { jobs, benefits } from "@/lib/site-data";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerLink } from "@/components/magicui/shimmer-link";
import { Meteors } from "@/components/magicui/meteors";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Nashville Digital Group team. 6 open positions in AI/ML, marketing, and development. Competitive salaries, remote options, great culture.",
};

export default function CareersPage() {
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
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-[-5%] w-[400px] h-[400px] bg-sky-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Join Our Team
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Build the Future of
                <br />
                <span className="text-sky-400">
                  Digital Marketing
                </span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-12">
                Join Nashville Digital Group&apos;s team of 25+ digital experts. Remote-friendly, mission-driven, and always growing.
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                {[
                  { value: "25+", label: "Team Members" },
                  { value: "4.9★", label: "Glassdoor" },
                  { value: "100%", label: "Remote Options" },
                ].map((stat) => (
                  <div key={stat.label} className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[110px]">
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-white text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Perks &amp; Benefits
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Why Work at{" "}
                <span className="text-sky-600">
                  NDG
                </span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <BlurFade key={benefit.title} delay={0.15 + index * 0.07} inView>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:border-sky-300 hover:shadow-md transition-colors h-full group">
                  <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-5 ring-1 ring-sky-200 group-hover:bg-sky-100 transition-colors">
                    <Icon name={benefit.icon} className="w-5 h-5 text-sky-600" />
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Open Positions
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                6 Roles We&apos;re{" "}
                <span className="text-sky-400">
                  Hiring For
                </span>
              </h2>
            </div>
          </BlurFade>
          <div className="space-y-5">
            {jobs.map((job, index) => (
              <BlurFade key={job.title} delay={0.1 + index * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 hover:border-sky-500/20 transition-colors">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{job.title}</h3>
                      <span className="bg-sky-500/10 text-sky-400 border border-sky-500/15 text-xs px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sky-400 font-bold text-lg">{job.salary}</p>
                  </div>
                  <div className="flex gap-3 flex-wrap mt-3 mb-4">
                    <span className="bg-sky-500/10 text-sky-400 border border-sky-500/15 text-xs px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-white text-sm flex items-center gap-1.5">
                      <span className="text-xs">📍</span> {job.location}
                    </span>
                  </div>
                  <div className="border-t border-white/6 pt-4">
                    <p className="text-white text-xs uppercase tracking-widest mb-3">
                      Requirements:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {job.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-2 text-white text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60 shrink-0" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <Link
                      href={`/contact?role=${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-4 py-2 rounded-xl transition-all text-sm"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-slate-50 py-20 md:py-28 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Culture</h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed mb-10">
              We&apos;re a team of passionate experts who believe in continuous learning, radical transparency, and delivering exceptional results. Remote-friendly, diverse, and always excited about the next challenge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "🌟", title: "Innovation", desc: "We embrace new technologies and creative thinking to solve complex problems.", color: "border-amber-200 hover:border-amber-300" },
                { icon: "🤝", title: "Collaboration", desc: "Great work happens together. We build on each other's strengths.", color: "border-sky-200 hover:border-sky-300" },
                { icon: "📈", title: "Growth", desc: "Every team member has a clear path to learn, advance, and thrive.", color: "border-emerald-200 hover:border-emerald-300" },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className={`bg-white border ${pillar.color} rounded-2xl shadow-sm p-6 text-center transition-colors hover:shadow-md`}
                >
                  <p className="text-3xl mb-3">{pillar.icon}</p>
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
        <Meteors number={12} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              We&apos;re always looking for talented people. Send us your resume.
            </p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Get In Touch →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
