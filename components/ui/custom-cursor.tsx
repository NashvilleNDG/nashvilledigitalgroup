"use client"

/**
 * CustomCursor — Zero-lag sky-blue arrow + dot
 *
 * Architecture: RAF lerp → direct DOM writes (no React re-renders,
 * no Framer Motion JS spring overhead after mount).
 *
 * Position updates:  requestAnimationFrame loop → element.style.transform
 * Hover/vis states:  classList.add/remove → pure CSS transitions
 *
 * This keeps cursor movement on the compositor thread,
 * completely isolated from React rendering work.
 */

import { useEffect, useRef, useState } from "react"

// ─── COLORS ──────────────────────────────────────────────────────────────────
const CURSOR_BLUE      = "#38BDF8"
const CURSOR_BLUE_DARK = "#0EA5E9"

// ─── SIZES ───────────────────────────────────────────────────────────────────
const ARROW_W      = 26   // px
const ARROW_H      = 30   // px
const DOT_SIZE     = 7    // px diameter at rest
const DOT_OFFSET_X = 20   // px right of arrow tip
const DOT_OFFSET_Y = 22   // px below arrow tip

// ─── LERP FACTORS (per 60 fps frame — raise for snappier, lower for more trail)
const ARROW_LERP = 0.42   // arrow: near-instant
const DOT_LERP   = 0.24   // dot:   slight trail

const Z = 9999

// Single selector used for event-delegation hover detection
const INTERACTIVE =
  "a, button, [role='button'], input, select, textarea, label, [data-cursor-hover]"

// ─────────────────────────────────────────────────────────────────────────────

export function CustomCursor() {
  // Refs point to the OUTER (positioning) wrapper divs.
  // The RAF loop writes transform directly to these — zero React involvement.
  const arrowWrapRef = useRef<HTMLDivElement>(null)
  const dotWrapRef   = useRef<HTMLDivElement>(null)

  // Single state update: only to mount/unmount the JSX on desktop.
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // ── Touch / mobile guard ───────────────────────────────────────────────
    if (!window.matchMedia("(pointer: fine)").matches) return
    setIsDesktop(true)

    // ── Mutable vars live outside React — RAF reads & writes them directly ─
    let mx = -300, my = -300   // real mouse position
    let ax = -300, ay = -300   // arrow animated position
    let dx = -300, dy = -300   // dot   animated position
    let started = false
    let rafId: number

    // ── RAF loop ───────────────────────────────────────────────────────────
    // Lerp each animated position toward the real mouse position,
    // then write the result straight to the DOM — no setState, no diffing.
    const loop = () => {
      ax += (mx - ax) * ARROW_LERP
      ay += (my - ay) * ARROW_LERP
      dx += (mx - dx) * DOT_LERP
      dy += (my - dy) * DOT_LERP

      const aw = arrowWrapRef.current
      const dw = dotWrapRef.current
      if (aw) aw.style.transform = `translate(${ax - 3}px, ${ay - 2}px)`
      if (dw) dw.style.transform = `translate(${dx + DOT_OFFSET_X}px, ${dy + DOT_OFFSET_Y}px)`

      rafId = requestAnimationFrame(loop)
    }

    // ── Mouse tracking — passive so browser never waits for preventDefault ─
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!started) {
        started = true
        // Fade in both cursors on the first move
        arrowWrapRef.current?.classList.add("ndg-cursor--visible")
        dotWrapRef.current?.classList.add("ndg-cursor--visible")
      }
    }

    // ── Hover detection — single delegated listener on document ───────────
    // No per-element listeners, no MutationObserver, works for dynamic content.
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(INTERACTIVE)) {
        arrowWrapRef.current?.classList.add("ndg-cursor--hovered")
        dotWrapRef.current?.classList.add("ndg-cursor--hovered")
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest(INTERACTIVE)) {
        arrowWrapRef.current?.classList.remove("ndg-cursor--hovered")
        dotWrapRef.current?.classList.remove("ndg-cursor--hovered")
      }
    }

    rafId = requestAnimationFrame(loop)
    window.addEventListener  ("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout",  onOut,  { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener  ("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout",  onOut)
    }
  }, [])

  // Nothing on touch/mobile
  if (!isDesktop) return null

  return (
    <>
      {/*
        ── ARROW ─────────────────────────────────────────────────────────────
        Outer div:  RAF writes transform here (position only, no other CSS)
        Inner div:  CSS transitions handle opacity / scale / filter
                    Separating them prevents scale from warping the position math
      */}
      <div
        ref={arrowWrapRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",
          zIndex:        Z,
          willChange:    "transform",
          transform:     "translate(-300px, -300px)",
        }}
      >
        <div className="ndg-cursor-arrow-inner">
          <svg
            width={ARROW_W}
            height={ARROW_H}
            viewBox="0 0 18 22"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ndg-cg" x1="0" y1="0" x2="0.6" y2="1">
                <stop offset="0%"   stopColor={CURSOR_BLUE}      stopOpacity="1"   />
                <stop offset="100%" stopColor={CURSOR_BLUE_DARK} stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M2.5 2 L2.5 17 L6.5 13 L9.5 20.5 L12 19.5 L9 12.5 L15 12.5 Z"
              fill="url(#ndg-cg)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.65"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/*
        ── DOT ───────────────────────────────────────────────────────────────
        Same wrapper/inner pattern:
        outer → RAF position,  inner → CSS visual transitions
      */}
      <div
        ref={dotWrapRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",
          zIndex:        Z,
          willChange:    "transform",
          transform:     "translate(-300px, -300px)",
        }}
      >
        <div
          className="ndg-cursor-dot-inner"
          style={{ width: DOT_SIZE, height: DOT_SIZE }}
        />
      </div>
    </>
  )
}
