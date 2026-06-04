"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * ScrollRevealInit — Panel-stack safety layer
 *
 * Every `main > section` is sticky by default (globals.css) → panel-stack
 * scroll effect. A sticky section TALLER than the viewport pins at top:0 with
 * its lower content below the fold; the next section rises over that hidden
 * region, so the visible top appears frozen ("scroll stuck") and the section's
 * own bottom content becomes unreachable.
 *
 * Fix: any section taller than the viewport → position:relative (normal
 * scroll); sections that fit keep the sticky panel-stack effect.
 *
 * Reliability: layout height isn't final at mount (images/fonts/grids settle
 * late), so we re-run `apply` from MANY triggers — rAF, staggered timeouts,
 * window load, window resize, and a ResizeObserver on every section. Whichever
 * fires once the real heights exist gets it right; later runs are idempotent.
 */
export function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    let frame = 0
    const timers: ReturnType<typeof setTimeout>[] = []

    const apply = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section")
      )
      const vh = window.innerHeight
      if (!vh) return
      // A sticky section taller than the viewport gets its lower content
      // permanently covered by the next rising panel (unreachable). So only
      // sections that essentially fit the viewport keep the sticky panel-stack
      // effect; taller ones fall back to normal scroll. On mobile most content
      // sections are taller than the screen, so the effect naturally applies
      // only to short sections there — by design, to never hide content.
      const MAX_RATIO = 1.02
      sections.forEach((s) => {
        const tooTall = s.offsetHeight > vh * MAX_RATIO
        if (tooTall) {
          if (s.style.position !== "relative") {
            s.style.position = "relative"
            s.style.top = ""
          }
        } else if (s.style.position) {
          s.style.position = ""
          s.style.top = ""
        }
      })
    }

    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => requestAnimationFrame(apply))
    }

    // 1. Immediate (double-rAF)
    schedule()
    // 2. Staggered fallbacks — catch late layout (images, fonts, grids)
    ;[100, 300, 600, 1200].forEach((ms) => timers.push(setTimeout(apply, ms)))
    // 3. After full window load (all images decoded)
    window.addEventListener("load", apply)
    // 4. On viewport resize
    window.addEventListener("resize", schedule)

    // 5. ResizeObserver — re-run whenever any section's height changes
    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null
    if (ro) {
      document
        .querySelectorAll<HTMLElement>("main > section")
        .forEach((s) => ro.observe(s))
    }

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
      window.removeEventListener("load", apply)
      window.removeEventListener("resize", schedule)
      ro?.disconnect()
    }
  }, [pathname])

  return null
}
