import { BlurFade } from "@/components/magicui/blur-fade"

const categories = [
  {
    label: "Frontend & Web",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "WordPress"],
  },
  {
    label: "Mobile",
    techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    label: "Backend & APIs",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    label: "Cloud & Infrastructure",
    techs: ["AWS", "Vercel", "Firebase", "Cloudflare", "Docker", "CI/CD"],
  },
]

export function TechStack() {
  return (
    <section className="bg-[#030812] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-14">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Technologies We Work With
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              We build with the tools that power modern, scalable digital
              products — from landing pages to enterprise applications.
            </p>
          </div>
        </BlurFade>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <BlurFade key={cat.label} delay={0.15 + i * 0.08} inView>
              <div className="glass border border-white/6 rounded-2xl p-6">
                <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="glass border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Footer note */}
        <BlurFade delay={0.5} inView>
          <p className="text-center text-white/40 text-sm mt-10">
            Don&apos;t see your tech stack?{" "}
            <span className="text-white/60">
              We adapt to your existing infrastructure.
            </span>
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
