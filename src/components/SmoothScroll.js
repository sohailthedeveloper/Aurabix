"use client"

import { ReactLenis } from "lenis/react"

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Controls the smoothing. Lower = smoother/slower.
        duration: 1.2, // Controls the duration of the scroll animation
        smoothWheel: true,
        smoothTouch: false, // Touch scrolling is usually already smooth
        wheelMultiplier: 1.1, // Slightly faster wheel scrolling
      }}
    >
      {children}
    </ReactLenis>
  )
}
