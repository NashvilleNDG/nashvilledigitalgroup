"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export { useGSAP };

/**
 * Fade-in-up on scroll. Returns a ref to attach to the target element.
 */
export function useFadeInOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const { y = 40, duration = 0.7, delay = 0, start = "top 85%" } = options;
  const ref = useRef<T>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      }
    );
  });

  return ref;
}

/**
 * Horizontal parallax on scroll. Returns a ref to attach to the target element.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.3
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.set(el, { y: self.progress * speed * -100 });
      },
    });
    return () => trigger.kill();
  }, [speed]);

  return ref;
}
