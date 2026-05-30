"use client"

import { useState } from "react"
import Link from "next/link"

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 })
}

function fmtDollar(n: number): string {
  return "$" + fmt(n)
}

export default function ROICalculatorPage() {
  const [visitors, setVisitors] = useState<number>(1000)
  const [conversionRate, setConversionRate] = useState<number>(2)
  const [clientValue, setClientValue] = useState<number>(2000)

  // Current metrics
  const currentLeads = visitors * (conversionRate / 100)
  const currentRevenue = currentLeads * clientValue

  // NDG-improved metrics (30% lift across the board)
  const improvedVisitors = visitors * 1.3
  const improvedRate = conversionRate * 1.3
  const newLeads = improvedVisitors * (improvedRate / 100)
  const newRevenue = newLeads * clientValue

  const monthlyIncrease = newRevenue - currentRevenue
  const annualIncrease = monthlyIncrease * 12

  return (
    <div className="min-h-screen bg-[#030812] text-white">
      {/* Page header */}
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Free Tool
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">ROI Calculator</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          See how much revenue you&apos;re leaving on the table — and what a
          30% performance improvement with NDG could mean for your bottom line.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24 flex flex-col gap-8">
        {/* Inputs */}
        <div className="glass border border-white/6 rounded-2xl p-8">
          <h2 className="text-lg font-semibold mb-6">Your Current Numbers</h2>

          <div className="flex flex-col gap-8">
            {/* Input 1: Monthly Visitors */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="visitors"
                  className="text-sm font-medium text-white/80"
                >
                  Monthly Website Visitors
                </label>
                <span className="text-sky-400 font-bold text-sm">
                  {fmt(visitors)}
                </span>
              </div>
              <input
                id="visitors"
                type="range"
                min={100}
                max={100000}
                step={100}
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/30 mt-1">
                <span>100</span>
                <span>100,000</span>
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  min={1}
                  value={visitors}
                  onChange={(e) =>
                    setVisitors(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Enter exact number"
                />
              </div>
            </div>

            {/* Input 2: Conversion Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="conversion"
                  className="text-sm font-medium text-white/80"
                >
                  Current Lead Conversion Rate
                </label>
                <span className="text-sky-400 font-bold text-sm">
                  {conversionRate.toFixed(1)}%
                </span>
              </div>
              <input
                id="conversion"
                type="range"
                min={0.1}
                max={20}
                step={0.1}
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/30 mt-1">
                <span>0.1%</span>
                <span>20%</span>
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  min={0.1}
                  max={100}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) =>
                    setConversionRate(
                      Math.min(100, Math.max(0.1, Number(e.target.value)))
                    )
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Enter exact %"
                />
              </div>
            </div>

            {/* Input 3: Average Client Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="clientvalue"
                  className="text-sm font-medium text-white/80"
                >
                  Average Client / Order Value
                </label>
                <span className="text-sky-400 font-bold text-sm">
                  {fmtDollar(clientValue)}
                </span>
              </div>
              <input
                id="clientvalue"
                type="range"
                min={100}
                max={50000}
                step={100}
                value={clientValue}
                onChange={(e) => setClientValue(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-white/30 mt-1">
                <span>$100</span>
                <span>$50,000</span>
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  min={1}
                  value={clientValue}
                  onChange={(e) =>
                    setClientValue(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="Enter exact value"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="glass border border-white/6 rounded-2xl p-8">
          <h2 className="text-lg font-semibold mb-6">Your Revenue Projection</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Current */}
            <div className="bg-white/4 border border-white/8 rounded-xl p-5">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
                Current (Without NDG)
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Monthly leads</span>
                  <span className="text-white font-semibold">
                    {fmt(currentLeads)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Monthly revenue</span>
                  <span className="text-white font-semibold">
                    {fmtDollar(currentRevenue)}
                  </span>
                </div>
              </div>
            </div>

            {/* After NDG */}
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-5">
              <p className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
                After NDG (+30% improvement)
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sky-300/70 text-sm">Monthly leads</span>
                  <span className="text-sky-200 font-semibold">
                    {fmt(newLeads)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sky-300/70 text-sm">
                    Monthly revenue
                  </span>
                  <span className="text-sky-200 font-semibold">
                    {fmtDollar(newRevenue)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue increase callout */}
          <div className="bg-gradient-to-r from-sky-500/20 to-sky-400/10 border border-sky-400/30 rounded-2xl p-6 text-center mb-6">
            <p className="text-white/60 text-sm mb-1">
              Monthly Revenue Increase
            </p>
            <p className="text-sky-400 text-5xl font-bold mb-1">
              {fmtDollar(monthlyIncrease)}
              <span className="text-xl font-normal text-sky-400/60">/mo</span>
            </p>
            <div className="w-16 h-px bg-white/10 mx-auto my-3" />
            <p className="text-white/60 text-sm mb-1">Annual Revenue Increase</p>
            <p className="text-white text-3xl font-bold">
              {fmtDollar(annualIncrease)}
            </p>
          </div>

          <p className="text-center text-white/40 text-sm mb-8 italic">
            This is the revenue you&apos;re leaving on the table every month.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-sky-500 hover:bg-sky-400 transition-colors text-white font-semibold rounded-xl px-8 py-4 text-base"
            >
              Book a Free Strategy Call to Capture This Revenue
            </Link>
            <p className="text-white/30 text-xs">
              No obligation. 30 minutes. Real insights for your business.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs px-4">
          * Projections assume a 30% average performance improvement across
          traffic, conversion rate, and lead quality — consistent with NDG client
          averages. Individual results vary based on industry, competition, and
          budget. This calculator is for illustrative purposes only.
        </p>
      </div>
    </div>
  )
}
