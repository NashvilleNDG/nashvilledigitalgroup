"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import type { CSSProperties } from "react"

interface ShimmerLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  shimmerColor?: string
  background?: string
  borderRadius?: string
  shimmerDuration?: string
}

export function ShimmerLink({
  href,
  children,
  className,
  shimmerColor = "#ffffff",
  background = "rgba(14, 165, 233, 0.9)",
  borderRadius = "0.75rem",
  shimmerDuration = "3s",
}: ShimmerLinkProps) {
  return (
    <Link
      href={href}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": "0.05em",
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden",
        "[border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap",
        "text-white font-semibold [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
    >
      {/* spark container */}
      <div className="-z-30 blur-[2px] @container-[size] absolute inset-0 overflow-visible">
        <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-[100cqh] rounded-none [mask:none]">
          <div className="animate-spin-around absolute -inset-full w-auto [translate:0_0] rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      {children}
      {/* highlight */}
      <div className="absolute inset-0 size-full rounded-xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />
      {/* backdrop */}
      <div className="absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" />
    </Link>
  )
}
