import { useEffect, useRef } from 'react'
import './Hero.css'

function GlitchText({ text }) {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  )
}

export default function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Background orb */}
      <div className="hero-orb" ref={orbRef} />
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-tag-row">
          <span className="tag">✦ Available for work</span>
          <span className="hero-status">
            <span className="status-dot" />
            Open to collab
          </span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">We don't</span>
          <span className="hero-title-line accent-line">
            <GlitchText text="design." />
          </span>
          <span className="hero-title-line">We disrupt.</span>
        </h1>

        <p className="hero-desc">
          A creative studio for brands that refuse to blend in.
          We build digital experiences that hit different — 
          for the ones who skip the tutorial.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            See Our Work
            <span className="btn-arrow">→</span>
          </a>
          <a href="#about" className="btn-ghost">
            Who we are ↘
          </a>
        </div>

        <div className="hero-stats">
          {[
            { num: '200+', label: 'Projects shipped' },
            { num: '4.9★', label: 'Client rating' },
            { num: '∞', label: 'Vibes delivered' },
          ].map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <div className="hero-badge badge-1">
        <span>Figma</span>
      </div>
      <div className="hero-badge badge-2">
        <span>React ⚛️</span>
      </div>
      <div className="hero-badge badge-3">
        <span>✦ Gen Z</span>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
