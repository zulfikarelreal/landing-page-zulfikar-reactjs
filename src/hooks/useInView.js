import { useEffect, useState } from 'react'

export default function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // trigger once
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return inView
}
