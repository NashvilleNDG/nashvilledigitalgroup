"use client"

import { HTMLMotionProps } from "framer-motion"
import { motion } from "@/components/motion/motion-elements"
import { cn } from "@/lib/utils"

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  delay?: number
  className?: string
  children: React.ReactNode
}

export function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
