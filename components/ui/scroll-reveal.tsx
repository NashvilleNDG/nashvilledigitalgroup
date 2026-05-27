"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * ScrollRevealInit — Panel-stack safety layer
 *
 * The main sticky + z-index + card-edge styles live in globals.css
 * (outside @layer so they beat Tailwind utilities).
 *
 * This component's only job: after the browser has measured layout,
 * un-sticky any section whose natural height is taller than the
 * viewport — otherwise the section would hide its own lower content
 * (e.g. the Services grid on mobile where 6 cards stack vertically).
 *
 * It re-runs on every route change so other pages work too.
 */
export function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Double-rAF: let the browser finish layout before measuring heights
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>("main > section")
        )
        const vh = window.innerHeight

        sections.forEach((s) => {
          if (s.offsetHeight > vh * 1.25) {
            // Section is too tall — fall back to normal scroll so
            // the content below the fold stays reachable
            s.style.position = "relative"
            s.style.top = ""
          }
        })
      })
    )

    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
