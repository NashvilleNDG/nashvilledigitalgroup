"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * ScrollRevealInit — Panel-stack safety layer
 *
 * The base sticky + z-index + card-edge styles live in globals.css
 * (outside @layer so they beat Tailwind utilities). Every `main > section`
 * is sticky by default, which creates the panel-stack scroll effect.
 *
 * Problem: a sticky section TALLER than the viewport gets pinned at top:0
 * with its lower content below the fold. The next section then rises over
 * that hidden region, so the visible (top) part appears frozen — it reads
 * as "scrolling is stuck" and the section's own bottom content (e.g. the
 * Featured Work carousel controls) becomes unreachable.
 *
 * Fix: any section taller than the viewport is switched to position:relative
 * so it scrolls normally. Sections that fit keep the sticky panel-stack
 * effect. This re-runs on route change AND on resize, and RESTORES sticky
 * when a section once again fits (e.g. after enlarging the window).
 */
export function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    let raf = 0
    let resizeTimer: ReturnType<typeof setTimeout> | undefined

    const apply = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section")
      )
      const vh = window.innerHeight

      sections.forEach((s) => {
        // Temporarily clear the inline override so we measure the section's
        // natural height (sticky vs relative doesn't change height, but this
        // keeps the logic robust if other inline styles were applied).
        const tooTall = s.offsetHeight > vh * 1.02 // any section taller than the viewport

        if (tooTall) {
          // Fall back to normal scroll so all content stays reachable
          s.style.position = "relative"
          s.style.top = ""
        } else {
          // Restore the sticky panel-stack effect (defer to globals.css)
          s.style.position = ""
          s.style.top = ""
        }
      })
    }

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => requestAnimationFrame(apply))
    }

    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(schedule, 150)
    }

    schedule()
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", onResize)
    }
  }, [pathname])

  return null
}
