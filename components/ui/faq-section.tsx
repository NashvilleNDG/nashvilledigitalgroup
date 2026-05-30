interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  dark?: boolean
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  dark = true,
}: FAQSectionProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <section
      className={`py-16 ${dark ? "bg-[#030812]" : "bg-white"}`}
    >
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2
                className={`text-3xl sm:text-4xl font-bold ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 text-base ${
                  dark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* FAQ items — static, all expanded for SEO */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${
                dark
                  ? "glass border-white/6"
                  : "border-slate-200 bg-slate-50"
              } p-6`}
            >
              {/* Question row */}
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={`font-semibold text-base leading-snug flex-1 ${
                    dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.question}
                </h3>
                <span
                  className={`flex-shrink-0 text-xl font-light leading-none ${
                    dark ? "text-sky-400" : "text-sky-500"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              {/* Answer */}
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  dark ? "text-white/60" : "text-slate-600"
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
