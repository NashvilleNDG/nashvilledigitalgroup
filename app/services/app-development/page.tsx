import type { Metadata } from "next"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ShimmerLink } from "@/components/magicui/shimmer-link"
import { Meteors } from "@/components/magicui/meteors"
import { Icon } from "@/components/ui/icon"
import { NumberTicker } from "@/components/magicui/number-ticker"

export const metadata: Metadata = {
  title: "Custom App Development | iOS, Android & Web Apps",
  description:
    "Nashville Digital Group builds custom iOS, Android, cross-platform, and web apps. From MVP to enterprise — with full maintenance and support after launch.",
}

const whatWeBuild = [
  {
    icon: "Smartphone",
    title: "iOS Apps",
    description:
      "Native Swift and SwiftUI apps built for iPhone and iPad. App Store submission, TestFlight beta testing, and ongoing iOS version support included.",
    tags: ["Swift", "SwiftUI", "App Store"],
  },
  {
    icon: "Cpu",
    title: "Android Apps",
    description:
      "Native Kotlin apps optimized for the full Android device ecosystem. Google Play Store submission, crash analytics, and update management.",
    tags: ["Kotlin", "Jetpack Compose", "Google Play"],
  },
  {
    icon: "Layers",
    title: "Cross-Platform",
    description:
      "One codebase, two platforms. We use React Native and Flutter to ship high-quality iOS and Android apps faster — without sacrificing native performance.",
    tags: ["React Native", "Flutter", "Expo"],
  },
  {
    icon: "Globe",
    title: "Web Applications",
    description:
      "Progressive Web Apps and complex web platforms built with modern frameworks. Fast, offline-capable, and installable on any device — no app store required.",
    tags: ["Next.js", "PWA", "TypeScript"],
  },
]

const devProcess = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Stakeholder interviews, user story mapping, technical requirements document, and project scope defined.",
    duration: "1–2 weeks",
  },
  {
    step: "02",
    title: "Wireframes & Prototyping",
    description: "Low-fidelity wireframes for all core user flows, clickable prototype for stakeholder validation before any code is written.",
    duration: "1–2 weeks",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "High-fidelity designs, component library, interaction patterns, and final design system handed off to development.",
    duration: "2–3 weeks",
  },
  {
    step: "04",
    title: "Development Sprints",
    description: "Agile 2-week sprints with working demos after each sprint. Continuous integration, automated testing, and code review throughout.",
    duration: "6–10 weeks",
  },
  {
    step: "05",
    title: "QA & Testing",
    description: "Manual and automated testing across devices, browsers, and edge cases. Performance profiling, security audit, and accessibility review.",
    duration: "1–2 weeks",
  },
  {
    step: "06",
    title: "Launch",
    description: "App Store / Play Store submission, production deployment, monitoring setup, and full launch checklist execution.",
    duration: "1 week",
  },
  {
    step: "07",
    title: "Ongoing Support",
    description: "Bug fixes, OS update compatibility, new feature development, and performance monitoring — handled by the same team that built your app.",
    duration: "Ongoing",
  },
]

const techStack = [
  {
    category: "Frontend",
    color: "border-sky-500/20",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    icon: "Monitor",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    color: "border-violet-500/20",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    icon: "Smartphone",
    items: ["React Native", "Flutter", "Expo", "Swift", "Kotlin"],
  },
  {
    category: "Backend",
    color: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    icon: "Server",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    color: "border-amber-500/20",
    accentColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    icon: "Cloud",
    items: ["AWS", "Vercel", "Firebase", "Docker", "GitHub Actions"],
  },
]

const maintenanceTiers = [
  {
    name: "Basic",
    price: "$299",
    period: "/mo",
    responseTime: "48-hour response",
    borderColor: "border-white/10",
    accentColor: "text-white",
    badgeColor: "bg-white/5 border-white/10 text-white",
    features: [
      "Bug fixes and patch releases",
      "OS compatibility updates",
      "Security vulnerability patches",
      "Monthly uptime monitoring report",
      "48-hour response SLA",
      "Up to 4 hours of changes/month",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$799",
    period: "/mo",
    responseTime: "24-hour response",
    borderColor: "border-sky-500/40",
    accentColor: "text-sky-400",
    badgeColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    badge: "Most Popular",
    features: [
      "Everything in Basic",
      "New feature development (8 hrs/mo)",
      "Priority support queue",
      "24-hour response SLA",
      "Performance optimization",
      "Monthly strategy call",
      "Analytics and crash reporting",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    responseTime: "4-hour SLA",
    borderColor: "border-violet-500/30",
    accentColor: "text-violet-400",
    badgeColor: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    features: [
      "Dedicated senior developer",
      "4-hour emergency response SLA",
      "Unlimited feature development",
      "24/7 on-call support",
      "Custom SLA agreement",
      "Dedicated Slack channel",
      "Quarterly roadmap planning",
    ],
    cta: "Contact Us",
  },
]

const faqs = [
  {
    question: "How long does app development take?",
    answer:
      "A typical MVP takes 12–16 weeks from signed contract to App Store submission. This includes 2 weeks of discovery, 2–3 weeks of design, 6–10 weeks of development sprints, and 1–2 weeks of QA. More complex apps with custom backends, third-party integrations, or enterprise features may take 20–28 weeks. We establish a firm timeline during Discovery based on your specific requirements.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. We regularly inherit and improve existing apps. Our process begins with a technical audit of your current codebase to assess quality, security, and scalability. We then provide an honest assessment — whether that means building on what exists, refactoring key sections, or recommending a rebuild if the foundation is unsalvageable. We never recommend a rebuild without strong technical justification.",
  },
  {
    question: "What happens after the app launches?",
    answer:
      "We don't disappear. Every project transitions to our maintenance program where the same development team that built your app handles ongoing bugs, OS updates, and new features. We monitor your app's crash rate and performance post-launch and proactively address issues before they affect users — without waiting for you to report them.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, and we consider it essential. Mobile operating systems release major updates annually (iOS and Android), and without active maintenance, apps break, get removed from stores, or create poor user experiences. Our Basic plan starts at $299/month and covers all bug fixes, security patches, and OS compatibility updates. Growth and Enterprise plans include proactive feature development.",
  },
  {
    question: "How do you handle IP and source code ownership?",
    answer:
      "You own 100% of the source code, intellectual property, and all work product we produce. Upon final payment, we transfer all code, assets, design files, and credentials to you. No licensing fees, no lock-in. We also provide complete documentation and a transition guide so your team — or any future agency — can continue development independently if you choose.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function AppDevelopmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#030812] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                App Development
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Custom App Development
                <br />
                <span className="text-sky-400">Built to Scale</span>
              </h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10">
                From MVP to enterprise — we design, build, and maintain iOS, Android, cross-platform,
                and web applications that generate real business results.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <ShimmerLink href="/contact">Start Your Project →</ShimmerLink>
                <Link
                  href="#process"
                  className="border border-white/10 hover:border-sky-500/40 text-white px-6 py-3 rounded-xl transition-all duration-200"
                >
                  See Our Process
                </Link>
              </div>
              {/* Hero Stats */}
              <div className="flex gap-6 justify-center mt-14 flex-wrap">
                {[
                  { num: 50, suffix: "+", label: "Apps Shipped", decimal: 0 },
                  { num: 98, suffix: "%", label: "On-Time Delivery", decimal: 0 },
                  { num: 4.9, suffix: "★", label: "App Store Rating Avg", decimal: 1 },
                ].map((stat, i) => (
                  <BlurFade key={stat.label} delay={0.2 + i * 0.08} inView>
                    <div className="glass border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[130px]">
                      <div className="text-3xl font-black text-white tabular-nums">
                        <NumberTicker
                          value={stat.num}
                          delay={0.3 + i * 0.1}
                          decimalPlaces={stat.decimal}
                          className="text-white"
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-white text-xs mt-1">{stat.label}</div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Capabilities
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                What We{" "}
                <span className="text-sky-400">Build</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Whether you need a consumer app, an internal tool, or a complex platform — we have
                the team and the track record.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeBuild.map((item, index) => (
              <BlurFade key={item.title} delay={0.15 + index * 0.08} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 flex flex-col h-full hover:border-sky-500/20 transition-colors group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center ring-1 ring-sky-500/20 group-hover:bg-sky-500/15 transition-colors shrink-0">
                      <Icon name={item.icon} className="w-5 h-5 text-sky-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl mt-1.5">{item.title}</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-5 flex-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-full"
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

      {/* Dev Process */}
      <section id="process" className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How We Build
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our App Dev{" "}
                <span className="text-sky-400">Process</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Typical MVP: <strong className="text-white">12–16 weeks</strong> from kickoff to
                App Store. Every step is visible and predictable.
              </p>
            </div>
          </BlurFade>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-sky-500/40 via-violet-500/30 to-transparent" />
            {devProcess.map((step, index) => (
              <BlurFade key={step.step} delay={0.1 + index * 0.07} inView>
                <div className="flex gap-6 mb-8 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-500/5 border border-sky-500/30 flex items-center justify-center shrink-0 z-10">
                    <span className="text-sky-400 font-black text-xs">{step.step}</span>
                  </div>
                  <div className="glass border border-white/6 rounded-2xl p-5 flex-1 hover:border-sky-500/20 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-semibold text-base">{step.title}</h3>
                      <span className="bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs px-2.5 py-1 rounded-full shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Technology
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our{" "}
                <span className="text-sky-400">Tech Stack</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                We use proven, modern tools — not experimental frameworks. Your app is built on
                technologies with deep community support and long-term viability.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((stack, index) => (
              <BlurFade key={stack.category} delay={0.15 + index * 0.08} inView>
                <div
                  className={`glass border ${stack.color} rounded-2xl p-6 h-full hover:brightness-110 transition-all`}
                >
                  <div
                    className={`w-10 h-10 ${stack.bgColor} rounded-xl flex items-center justify-center mb-4 ring-1 ${stack.color}`}
                  >
                    <Icon name={stack.icon} className={`w-4 h-4 ${stack.accentColor}`} />
                  </div>
                  <h3 className={`font-bold text-sm uppercase tracking-widest mb-4 ${stack.accentColor}`}>
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="glass border border-sky-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs px-3 py-1.5 rounded-full font-semibold mb-4 inline-block">
                    Case Study — Real Estate
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
                    Nashville Realty Group
                  </h2>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    Nashville Realty Group&apos;s legacy website was slow, unresponsive on mobile,
                    and converting fewer than 1% of visitors. They needed a complete platform
                    rebuild — fast.
                  </p>
                  <p className="text-white text-sm leading-relaxed mb-8">
                    NDG rebuilt their entire web platform in 14 weeks: a Next.js frontend, custom
                    property search with real-time MLS data, and an automated lead nurture system.
                    The result was immediate and dramatic.
                  </p>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 border border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10 text-sky-400 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
                  >
                    View Full Case Study →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { metric: "+312%", label: "Qualified leads in 90 days" },
                    { metric: "14 weeks", label: "Full platform rebuild timeline" },
                    { metric: "2.8s → 0.9s", label: "Page load time improvement" },
                    { metric: "98/100", label: "Lighthouse performance score" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="glass border border-white/6 rounded-xl p-5 flex items-center gap-4 hover:border-sky-500/20 transition-colors"
                    >
                      <p className="text-sky-400 text-2xl font-black tabular-nums shrink-0">
                        {stat.metric}
                      </p>
                      <p className="text-white text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Maintenance & Support */}
      <section className="bg-section-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Post-Launch Support
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                We Don&apos;t Disappear{" "}
                <span className="text-sky-400">After Launch</span>
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4">
                Most agencies ship your app and move on. We treat launch as the beginning — not the
                end. Every NDG app client has access to ongoing support plans that keep your product
                healthy, secure, and improving.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceTiers.map((tier, index) => (
              <BlurFade key={tier.name} delay={0.15 + index * 0.1} inView>
                <div
                  className={`glass border ${tier.borderColor} rounded-2xl p-6 flex flex-col h-full hover:brightness-110 transition-all relative`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className={`${tier.badgeColor} border text-xs px-3 py-1 rounded-full font-semibold`}>
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-5 pt-2">
                    <p className={`${tier.accentColor} text-sm font-bold uppercase tracking-widest mb-1`}>
                      {tier.name}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-white text-4xl font-black">{tier.price}</span>
                      <span className="text-white/60 text-sm pb-1">{tier.period}</span>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{tier.responseTime}</p>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-white text-sm">
                        <span
                          className={`w-4 h-4 rounded-full bg-sky-500/15 flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <span className="text-sky-400 text-[9px]">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 border ${tier.borderColor} hover:bg-sky-500/10 ${tier.accentColor} font-semibold px-4 py-2.5 rounded-xl transition-all text-sm`}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#030812] py-24 md:py-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Frequently Asked{" "}
                <span className="text-sky-400">Questions</span>
              </h2>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <BlurFade key={faq.question} delay={0.1 + index * 0.07} inView>
                <div className="glass border border-white/6 rounded-2xl p-6 hover:border-sky-500/20 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-base leading-snug text-white flex-1">
                      {faq.question}
                    </h3>
                    <span className="text-sky-400 text-xl font-light leading-none shrink-0">+</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{faq.answer}</p>
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
              Have an App Idea?
            </h2>
            <p className="text-white text-lg max-w-xl mx-auto mb-8">
              Tell us what you&apos;re building. We&apos;ll give you an honest assessment, a
              rough timeline, and a ballpark investment range — in a free 30-minute call.
            </p>
            <ShimmerLink
              href="/contact"
              background="rgba(255,255,255,0.18)"
              shimmerColor="rgba(255,255,255,0.6)"
              className="text-white border-white/20"
            >
              Start Your Free Consultation →
            </ShimmerLink>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
