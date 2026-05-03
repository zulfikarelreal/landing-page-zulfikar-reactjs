import { useRef, useState } from 'react'
import useInView from '../hooks/useInView'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Brand Identity',
    desc: 'Logo systems, color theory, typography — building brand DNA that lives rent-free in people\'s heads.',
    icon: '◎',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Interfaces so intuitive your grandma could use them. Experiences that feel like a cheat code.',
    icon: '⬡',
  },
  {
    num: '03',
    title: 'Web Development',
    desc: 'Fast, clean, modern code. React, Next.js, whatever the stack — we ship things that actually work.',
    icon: '⟨/⟩',
  },
  {
    num: '04',
    title: 'Motion & Animation',
    desc: 'When static just doesn\'t slap. We make pixels move in ways that make people go "wait, how?"',
    icon: '✦',
  },
]

function ServiceRow({ service, delay }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`service-row fade-up ${inView ? 'visible' : ''} ${open ? 'open' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={() => setOpen(!open)}
    >
      <div className="service-row-header">
        <div className="service-left">
          <span className="service-num">{service.num}</span>
          <span className="service-icon">{service.icon}</span>
          <h3 className="service-name">{service.title}</h3>
        </div>
        <div className="service-right">
          <span className="service-toggle">{open ? '−' : '+'}</span>
        </div>
      </div>
      <div className="service-body">
        <p>{service.desc}</p>
        <a href="#contact" className="service-link">Start a project →</a>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <section className="services" id="services">
      <div className="container">
        <div
          ref={ref}
          className={`section-header fade-up ${inView ? 'visible' : ''}`}
        >
          <span className="tag">03. Services</span>
          <h2 className="section-title">
            What we<br />
            <span className="outline-text">actually do</span>
          </h2>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <ServiceRow key={s.num} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
