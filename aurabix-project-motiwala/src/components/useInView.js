'use client'

import { useState, useEffect, useRef } from 'react'

/**
 * Simple IntersectionObserver hook for scroll-triggered animations.
 * @param {React.RefObject} ref - The element ref to observe
 * @param {IntersectionObserverInit} options
 * @returns {boolean} - Whether the element is in view
 */
export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        // Unobserve after first trigger for performance
        observerRef.current?.unobserve(entry.target)
      }
    }, { threshold: 0.15, ...options })

    observerRef.current.observe(ref.current)
    return () => observerRef.current?.disconnect()
  }, [ref])

  return inView
}
