import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Work', 'Services', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <span className="logo-bracket">[</span>
          Zulfikar.
          <span className="logo-bracket">]</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((l, i) => (
            <li key={l} style={{ animationDelay: `${i * 0.07}s` }}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                <span className="link-num">0{i + 1}.</span> {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Let's Talk ↗
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
