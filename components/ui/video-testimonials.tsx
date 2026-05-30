import { BlurFade } from "@/components/magicui/blur-fade"

const testimonials = [
  {
    name: "Shiv Patel",
    role: "Owner",
    company: "Big Pigs Wine & Spirits",
    quote:
      "NDG completely transformed our digital presence. Their targeted ad campaigns brought in a flood of new customers we'd never reached before.",
    metric: "+340% leads in 3 months",
  },
  {
    name: "Pinal Patel",
    role: "Owner",
    company: "Maharani Collections",
    quote:
      "The team at Nashville Digital Group understood our brand immediately. Our online sales have grown beyond what I thought was possible.",
    metric: "+180% sales YoY",
  },
  {
    name: "Shiv Biradar",
    role: "Owner",
    company: "The Lounge at 2nd",
    quote:
      "Every month I see real, trackable results. NDG holds themselves accountable and delivers — that's rare in this industry.",
    metric: "Measurable results every month",
  },
]

function PlayIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-lg"
    >
      <circle cx="28" cy="28" r="28" fill="rgba(14,165,233,0.2)" />
      <circle cx="28" cy="28" r="22" fill="rgba(14,165,233,0.35)" />
      <polygon points="23,20 23,36 40,28" fill="#fff" />
    </svg>
  )
}

export function VideoTestimonials() {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-14">
            <p className="text-sky-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Client Success Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              See What Our Clients Say
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Real results from real Nashville businesses. Watch how NDG helped
              them grow.
            </p>
          </div>
        </BlurFade>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={0.15 + i * 0.1} inView>
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg ring-2 ring-sky-500/20 hover:ring-sky-500/50 transition-all cursor-pointer group">
                {/* Video thumbnail placeholder */}
                <div className="relative bg-slate-800 aspect-video flex items-center justify-center">
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f1729 0%, #1e293b 50%, #0c1524 100%)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Decorative lines */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.04) 10px, rgba(255,255,255,0.04) 11px)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <PlayIcon />
                  </div>
                  {/* Metric badge */}
                  <div className="absolute top-3 right-3 z-10 bg-sky-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    {t.metric}
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white flex flex-col flex-1 p-5">
                  <p className="text-slate-700 text-sm italic leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm flex-shrink-0"
                      aria-hidden="true"
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm leading-tight">
                        {t.name}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
