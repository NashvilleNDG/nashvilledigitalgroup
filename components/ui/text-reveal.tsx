"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  wordDelay?: number
  as?: keyof React.JSX.IntrinsicElements
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  wordDelay = 0.055,
  as: Tag = "span",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-8% 0px" })
  const words = children.split(" ")

  return (
    // @ts-expect-error — dynamic tag typing
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={i} className="inline-block">
          <span className="inline-block overflow-hidden leading-[1.15]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * wordDelay,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  )
}
