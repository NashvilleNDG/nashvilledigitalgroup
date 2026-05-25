"use client"

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 *  CustomCursor  —  Sky Blue Neon Arrow + Dot
 *  Nashville Digital Group  |  components/ui/custom-cursor.tsx
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 *  QUICK CUSTOMIZATION MAP
 *  ┌────────────────────────────────────────────────────────────────┐
 *  │  Main colour ......... CURSOR_BLUE                            │
 *  │  Gradient tail ....... CURSOR_BLUE_DARK                       │
 *  │  Glow at rest ........ GLOW_IDLE                              │
 *  │  Glow on hover ....... GLOW_HOVER                             │
 *  │  Arrow width/height .. ARROW_W / ARROW_H  (px)               │
 *  │  Dot size (rest) ..... DOT_SIZE           (px)               │
 *  │  Dot size (hover) .... DOT_HOVER_SIZE     (px)               │
 *  │  Dot position ........ DOT_OFFSET_X / DOT_OFFSET_Y  (px)     │
 *  │  Arrow smoothness .... arrowSpring  {stiffness, damping}      │
 *  │  Dot smoothness ...... dotSpring    {stiffness, damping}      │
 *  │  Layer order ......... Z_INDEX                                │
 *  └────────────────────────────────────────────────────────────────┘
 */

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

// ─── 1. COLORS ──────────────────────────────────────────────────────────────
const CURSOR_BLUE      = "#38BDF8"                  // ← change main color here
const CURSOR_BLUE_DARK = "#0EA5E9"                  // ← gradient tail color
const GLOW_IDLE        = "rgba(56, 189, 248, 0.65)" // ← soft glow at rest
const GLOW_HOVER       = "rgba(56, 189, 248, 0.92)" // ← stronger glow on hover

// ─── 2. ARROW SIZE ──────────────────────────────────────────────────────────
const ARROW_W = 26  // rendered width  (px) — increase for bigger arrow
const ARROW_H = 30  // rendered height (px) — keep aspect ratio: H = W × 1.15

// ─── 3. DOT SIZE ────────────────────────────────────────────────────────────
const DOT_SIZE       = 7   // dot diameter at rest (px)
const DOT_HOVER_SIZE = 11  // dot diameter on hover (px) — expand on interaction

// ─── 4. DOT POSITION ────────────────────────────────────────────────────────
// Offsets the dot from the cursor tip so it sits at the lower-right of the arrow.
// Increase these numbers to push the dot further away from the arrow.
const DOT_OFFSET_X = 20   // px to the right of the cursor hot-point
const DOT_OFFSET_Y = 22   // px below the cursor hot-point

// ─── 5. SPRING PHYSICS ──────────────────────────────────────────────────────
// Higher stiffness = snappier / closer to the real pointer.
// Higher damping   = less bounce.
const arrowSpring = { stiffness: 260, damping: 24, mass: 0.35 } // arrow: fast
const dotSpring   = { stiffness: 180, damping: 20, mass: 0.45 } // dot: slight trail

// ─── 6. STACKING ORDER ──────────────────────────────────────────────────────
const Z_INDEX = 9999  // sits above all site content

// ────────────────────────────────────────────────────────────────────────────

export function CustomCursor() {
  const [visible,   setVisible]   = useState(false)
  const [hovered,   setHovered]   = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Raw cursor coordinates — updated every mousemove
  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)

  // Arrow follows with fast spring (stays close to real pointer)
  const arrowX = useSpring(mouseX, arrowSpring)
  const arrowY = useSpring(mouseY, arrowSpring)

  // Dot follows with slightly slower spring (subtle trail when moving)
  const dotX = useSpring(mouseX, dotSpring)
  const dotY = useSpring(mouseY, dotSpring)

  useEffect(() => {
    // ── Desktop-only: skip on touch/tablet/mobile ──────────────────────────
    if (!window.matchMedia("(pointer: fine)").matches) return
    setIsDesktop(true)

    // ── Track real mouse position ──────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    // ── Attach hover detection to interactive elements ─────────────────────
    // Add the attribute data-cursor-hover to any custom element you
    // want to trigger the hover state (e.g. cards, images, icons).
    const INTERACTIVE_SELECTOR = [
      "a",
      "button",
      "[role='button']",
      "input",
      "select",
      "textarea",
      "label",
      "[data-cursor-hover]",   // ← add this attr to any custom hoverable
    ].join(", ")

    const attachHoverListeners = () => {
      document.querySelectorAll(INTERACTIVE_SELECTOR).forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true))
        el.addEventListener("mouseleave", () => setHovered(false))
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    attachHoverListeners()

    // Re-attach after DOM mutations (dynamic content, SPA navigation)
    const mutationObserver = new MutationObserver(attachHoverListeners)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      mutationObserver.disconnect()
    }
  }, [mouseX, mouseY])

  // Nothing rendered on touch/mobile devices
  if (!isDesktop) return null

  // Glow filter — CSS transition handles the smooth change (not framer-motion)
  const arrowFilter = hovered
    ? `drop-shadow(0 0 7px ${GLOW_HOVER}) drop-shadow(0 0 14px rgba(56,189,248,0.4))`
    : `drop-shadow(0 0 4px ${GLOW_IDLE})  drop-shadow(0 0  2px rgba(56,189,248,0.25))`

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
           ARROW CURSOR
           The SVG arrow tip (hot-point) is at (2.5, 2) inside the viewBox.
           translateX/Y fine-tunes so the TIP pixel = real cursor position.
           pointer-events: none  →  never blocks any click on the page.
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        className="ndg-cursor-arrow"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",   // ← never intercepts clicks
          zIndex:        Z_INDEX,
          x:             arrowX,   // spring-smoothed X position
          y:             arrowY,   // spring-smoothed Y position
          translateX:    "-3px",   // align SVG tip to the exact cursor hot-point
          translateY:    "-2px",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:   hovered ? 0.88 : 1,  // subtle scale-down on hover keeps it premium
        }}
        transition={{
          opacity: { duration: 0.12 },
          scale:   { duration: 0.22, ease: "easeOut" },
        }}
      >
        <svg
          width={ARROW_W}
          height={ARROW_H}
          viewBox="0 0 18 22"
          fill="none"
          aria-hidden="true"
          style={{
            // Use CSS transition (not framer) for smooth glow on/off
            filter:     arrowFilter,
            transition: "filter 0.25s ease",
          }}
        >
          <defs>
            {/*
              Vertical gradient: bright sky-blue tip → deeper blue tail.
              Edit stopColor values to change the look.
            */}
            <linearGradient id="ndg-cursor-gradient" x1="0" y1="0" x2="0.6" y2="1">
              <stop offset="0%"   stopColor={CURSOR_BLUE}      stopOpacity="1"   />
              <stop offset="100%" stopColor={CURSOR_BLUE_DARK} stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/*
            ┌─────────────────────────────────────────────────────────┐
              ARROW SHAPE  (edit this path to change the cursor shape)
              ViewBox 18×22. Tip sits at ≈ (2.5, 2).

              Segments:
              M 2.5  2    → tip (top-left hot-point)
              L 2.5  17   → straight down the left edge
              L 6.5  13   → diagonal inward notch
              L 9.5  20.5 → down to tail bottom
              L 12   19.5 → right side of tail
              L 9    12.5 → up to inner shoulder
              L 15   12.5 → across the arrow-head right edge
              Z           → close path back to tip
            └─────────────────────────────────────────────────────────┘
          */}
          <path
            d="M2.5 2 L2.5 17 L6.5 13 L9.5 20.5 L12 19.5 L9 12.5 L15 12.5 Z"
            fill="url(#ndg-cursor-gradient)"
            stroke="rgba(255,255,255,0.18)"  // subtle white edge for definition
            strokeWidth="0.65"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
           COMPANION DOT
           Offset from the cursor tip to sit at the arrow's lower-right.
           Slower spring than the arrow → slight trail effect when moving.
           Expands + glows brighter on hover for clear interactive feedback.
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        className="ndg-cursor-dot"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          pointerEvents:   "none",
          zIndex:          Z_INDEX,
          x:               dotX,
          y:               dotY,
          // Static offset places dot lower-right of the arrow tip
          translateX:      `${DOT_OFFSET_X}px`,  // ← adjust DOT_OFFSET_X above
          translateY:      `${DOT_OFFSET_Y}px`,  // ← adjust DOT_OFFSET_Y above
          borderRadius:    "50%",
          backgroundColor: CURSOR_BLUE,
        }}
        animate={{
          width:  hovered ? DOT_HOVER_SIZE : DOT_SIZE,
          height: hovered ? DOT_HOVER_SIZE : DOT_SIZE,
          opacity: visible ? 1 : 0,
          // Glow ring expands on hover
          boxShadow: hovered
            ? `0 0 10px 3px ${GLOW_HOVER}, 0 0 22px 5px rgba(56,189,248,0.28)`
            : `0 0  6px 2px ${GLOW_IDLE}`,
        }}
        transition={{
          width:     { duration: 0.2,  ease: "easeOut" },
          height:    { duration: 0.2,  ease: "easeOut" },
          boxShadow: { duration: 0.25 },
          opacity:   { duration: 0.12 },
        }}
      />
    </>
  )
}
