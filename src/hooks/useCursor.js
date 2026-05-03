import { useEffect } from 'react'

export default function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const ring = document.querySelector('.cursor-ring')
    if (!cursor || !ring) return

    let ringX = 0, ringY = 0
    let curX = 0, curY = 0
    let raf

    const onMove = (e) => {
      curX = e.clientX
      curY = e.clientY
    }

    const animate = () => {
      ringX += (curX - ringX) * 0.12
      ringY += (curY - ringY) * 0.12

      cursor.style.left = curX + 'px'
      cursor.style.top = curY + 'px'
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'

      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    // Scale on hover interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '6px'
        cursor.style.height = '6px'
        ring.style.width = '56px'
        ring.style.height = '56px'
        ring.style.opacity = '0.8'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.opacity = '0.5'
      })
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}
