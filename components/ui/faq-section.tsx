"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

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
  // Accordion state — which item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
    <section className={`py-16 ${dark ? "bg-[#030812]" : "bg-white"}`}>
      {/* JSON-LD FAQ Schema — full answer text stays in the DOM for SEO/AI,
          independent of the visual accordion state */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
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
          </motion.div>
        )}

        {/* FAQ items — click to expand */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl border overflow-hidden ${
                  dark
                    ? "glass border-white/6"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                {/* Question row — button toggles the answer */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left"
                >
                  <h3
                    className={`font-semibold text-base leading-snug flex-1 ${
                      dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`flex-shrink-0 mt-0.5 ${
                      dark ? "text-sky-400" : "text-sky-500"
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={20} strokeWidth={2.5} />
                  </motion.span>
                </button>

                {/* Answer — animated expand/collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`px-6 pb-6 text-sm leading-relaxed ${
                          dark ? "text-white/60" : "text-slate-600"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
