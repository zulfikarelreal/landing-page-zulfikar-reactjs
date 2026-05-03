import { useRef } from 'react'
import useInView from '../hooks/useInView'
import './Work.css'

const projects = [
  {
    id: '01',
    title: 'NOURA',
    category: 'Brand Identity',
    year: '2024',
    tags: ['Branding', 'Art Direction'],
    color: '#c8ff00',
    emoji: '✦',
  },
  {
    id: '02',
    title: 'PULSE APP',
    category: 'Product Design',
    year: '2024',
    tags: ['UI/UX', 'Motion'],
    color: '#ff3cac',
    emoji: '◎',
  },
  {
    id: '03',
    title: 'VAULT NFT',
    category: 'Web3 Experience',
    year: '2023',
    tags: ['Web Dev', 'Web3'],
    color: '#00f0ff',
    emoji: '⬡',
  },
  {
    id: '04',
    title: 'DRIP STORE',
    category: 'E-Commerce',
    year: '2023',
    tags: ['Design', 'Dev'],
    color: '#ffb800',
    emoji: '◈',
  },
]

function ProjectCard({ project, delay }) {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-header">
        <span className="project-emoji" style={{ color: project.color }}>
          {project.emoji}
        </span>
        <span className="project-id">{project.id}</span>
      </div>

      <div className="project-preview" style={{ '--card-accent': project.color }}>
        <div className="project-preview-inner">
          <div className="project-circle" />
          <div className="project-lines">
            <span /><span /><span />
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-meta">
          <span className="tag" style={{ color: project.color, background: `${project.color}18`, borderColor: `${project.color}30` }}>
            {project.category}
          </span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tags">
          {project.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>

      <div className="project-hover-cta">View Case Study →</div>
    </div>
  )
}

export default function Work() {
  const titleRef = useRef()
  const titleInView = useInView(titleRef)

  return (
    <section className="work" id="work">
      <div className="container">
        <div
          ref={titleRef}
          className={`section-header fade-up ${titleInView ? 'visible' : ''}`}
        >
          <span className="tag">02. Our Work</span>
          <h2 className="section-title">
            Selected<br />
            <span className="outline-text">Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>

        <div className="work-footer">
          <a href="#" className="btn-primary">
            View All Work <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
