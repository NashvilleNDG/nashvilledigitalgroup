"use client"

import { useState } from "react"
import Link from "next/link"

const SERVICES = [
  { id: "seo", label: "SEO", oneTime: false },
  { id: "ppc", label: "PPC / Ads", oneTime: false },
  { id: "social", label: "Social Media", oneTime: false },
  { id: "web", label: "Web Development", oneTime: true },
  { id: "chatbot", label: "AI Chatbot", oneTime: false },
  { id: "email", label: "Email Marketing", oneTime: false },
  { id: "reputation", label: "Reputation Management", oneTime: false },
  { id: "app", label: "App Development", oneTime: true },
]

const BUSINESS_SIZES = [
  { id: "startup", label: "Startup", sublabel: "1–10 employees" },
  { id: "small", label: "Small Business", sublabel: "11–50 employees" },
  { id: "mid", label: "Mid-size", sublabel: "51–200 employees" },
  { id: "enterprise", label: "Enterprise", sublabel: "200+ employees" },
]

const GOALS = [
  { id: "leads", label: "More leads" },
  { id: "brand", label: "Brand awareness" },
  { id: "ecommerce", label: "E-commerce sales" },
  { id: "app-downloads", label: "App downloads" },
  { id: "local", label: "Local visibility" },
]

function getMonthlyRange(
  selectedServices: string[],
  businessSize: string
): { low: number; high: number } | null {
  if (!selectedServices.length || !businessSize) return null

  const recurringCount = selectedServices.filter(
    (id) => !["web", "app"].includes(id)
  ).length

  if (recurringCount === 0) return null

  if (
    recurringCount <= 2 &&
    (businessSize === "startup" || businessSize === "small")
  ) {
    return { low: 800, high: 1500 }
  }
  if (
    recurringCount <= 4 &&
    (businessSize === "small" || businessSize === "startup")
  ) {
    return { low: 2000, high: 4000 }
  }
  if (recurringCount <= 4 && businessSize === "mid") {
    return { low: 2500, high: 5000 }
  }
  if (
    recurringCount >= 5 ||
    businessSize === "mid" ||
    businessSize === "enterprise"
  ) {
    return { low: 5000, high: 15000 }
  }
  return { low: 2000, high: 4000 }
}

function hasOneTime(selectedServices: string[]): boolean {
  return selectedServices.some((id) => ["web", "app"].includes(id))
}

function fmt(n: number): string {
  return n.toLocaleString("en-US")
}

export default function PricingCalculatorPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [businessSize, setBusinessSize] = useState<string>("")
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  function toggleService(id: string) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  function toggleGoal(id: string) {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    )
  }

  const monthlyRange = getMonthlyRange(selectedServices, businessSize)
  const showOneTime = hasOneTime(selectedServices)
  const hasResults = monthlyRange !== null || showOneTime

  return (
    <div className="min-h-screen bg-[#030812] text-white">
      {/* Page header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Free Tool
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Pricing Calculator
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Get an instant ballpark estimate for your digital marketing investment.
          No email required.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: steps */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Step 1 */}
          <div className="glass border border-white/6 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-1">
              Step 1 — Select Services
            </h2>
            <p className="text-white/50 text-sm mb-5">
              Choose every service you&apos;re interested in.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((svc) => {
                const active = selectedServices.includes(svc.id)
                return (
                  <button
                    key={svc.id}
                    onClick={() => toggleService(svc.id)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all text-sm font-medium ${
                      active
                        ? "border-sky-500 bg-sky-500/10 text-sky-300"
                        : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                        active
                          ? "bg-sky-500 border-sky-500"
                          : "border-white/30"
                      }`}
                      aria-hidden="true"
                    >
                      {active && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {svc.label}
                    {svc.oneTime && (
                      <span className="ml-auto text-[10px] text-white/30 font-normal">
                        one-time
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass border border-white/6 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-1">
              Step 2 — Business Size
            </h2>
            <p className="text-white/50 text-sm mb-5">
              Select the size that best describes your company.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BUSINESS_SIZES.map((size) => {
                const active = businessSize === size.id
                return (
                  <button
                    key={size.id}
                    onClick={() => setBusinessSize(size.id)}
                    className={`flex flex-col items-center gap-1 rounded-xl border px-3 py-4 text-center transition-all ${
                      active
                        ? "border-sky-500 bg-sky-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        active ? "text-sky-300" : "text-white"
                      }`}
                    >
                      {size.label}
                    </span>
                    <span className="text-[11px] text-white/40">
                      {size.sublabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass border border-white/6 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-1">Step 3 — Your Goals</h2>
            <p className="text-white/50 text-sm mb-5">
              What outcomes matter most to you?
            </p>
            <div className="flex flex-wrap gap-3">
              {GOALS.map((goal) => {
                const active = selectedGoals.includes(goal.id)
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                      active
                        ? "border-sky-500 bg-sky-500/10 text-sky-300"
                        : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {goal.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: results */}
        <div className="flex flex-col gap-6">
          <div className="glass border border-white/6 rounded-2xl p-6 sticky top-6">
            <h2 className="text-base font-semibold text-white/80 mb-4">
              Your Estimate
            </h2>

            {!hasResults ? (
              <div className="text-center py-8">
                <p className="text-white/30 text-sm">
                  Select services and business size to see your estimate.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {monthlyRange && (
                  <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 text-center">
                    <p className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Estimated Monthly Investment
                    </p>
                    <p className="text-white text-2xl font-bold">
                      ${fmt(monthlyRange.low)} – ${fmt(monthlyRange.high)}
                      <span className="text-base font-normal text-white/50">
                        /mo
                      </span>
                    </p>
                  </div>
                )}

                {showOneTime && (
                  <div className="bg-white/4 border border-white/8 rounded-xl p-4 text-center">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">
                      Development (one-time)
                    </p>
                    <p className="text-white text-xl font-bold">
                      $3,000 – $15,000
                    </p>
                  </div>
                )}

                <p className="text-white/40 text-xs text-center leading-relaxed">
                  This is a ballpark estimate. Your exact proposal depends on
                  scope, competition, and goals.
                </p>

                <div className="flex flex-col gap-3 pt-1">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-sky-500 hover:bg-sky-400 transition-colors text-white font-semibold rounded-xl py-3 text-sm"
                  >
                    Get Your Exact Proposal
                  </Link>
                  <p className="text-center text-white/40 text-xs">
                    Free 30-minute strategy call included with every proposal
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
