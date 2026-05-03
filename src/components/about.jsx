import { useRef } from "react";
import useInView from "../hooks/useInView";
import "./About.css";

const values = [
  {
    icon: "⚡",
    title: "Fast AF",
    desc: "We don't believe in 3-month timelines for a landing page. We move quick, iterate quicker.",
  },
  {
    icon: "🎯",
    title: "No BS",
    desc: "No fluff decks, no 47-revision loops. We say what we think and ship what works.",
  },
  {
    icon: "🌀",
    title: "Always Weird",
    desc: "Boring is a choice. We actively fight against safe, predictable, forgettable design.",
  },
];

const team = [
  { name: "Zara K.", role: "Creative Director", emoji: "◎" },
  { name: "Rio M.", role: "Lead Developer", emoji: "⟨/⟩" },
  { name: "Nadia S.", role: "UX Strategist", emoji: "✦" },
];

export default function About() {
  const headRef = useRef();
  const headInView = useInView(headRef);
  const valuesRef = useRef();
  const valuesInView = useInView(valuesRef);
  const teamRef = useRef();
  const teamInView = useInView(teamRef);

  return (
    <section className="about" id="about">
      <div className="about-bg-shape" />

      <div className="container">
        {/* Header */}
        <div
          ref={headRef}
          className={`about-header fade-up ${headInView ? "visible" : ""}`}
        >
          <div className="about-header-left">
            <span className="tag">01. About</span>
            <h2 className="section-title">
              We're the ones
              <br />
              your client warned
              <br />
              <span className="outline-text">you about.</span>
            </h2>
          </div>

          <div className="about-header-right">
            <p className="about-lead">
              VOID is a remote-first creative studio obsessed with building
              digital experiences that actually slap. We're small on purpose —
              tight team, huge output.
            </p>
            <p className="about-body">
              Founded in 2021 by designers who were tired of cookie-cutter
              agencies, we started with one rule: never make something that
              blends in. Three years later, we've shipped 200+ projects for
              startups, scale-ups, and the occasional chaos enjoyer.
            </p>
            <div className="about-since">
              <span className="since-label">Est.</span>
              <span className="since-year">2021</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider" />

        {/* Values */}
        <div
          ref={valuesRef}
          className={`about-values fade-up ${valuesInView ? "visible" : ""}`}
        >
          <span className="about-sub-label">Our values (yes we have them)</span>
          <div className="values-grid">
            {values.map((v, i) => (
              <div
                className="value-card"
                key={v.title}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="value-icon">{v.icon}</span>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider" />

        {/* Team */}
        <div
          ref={teamRef}
          className={`about-team fade-up ${teamInView ? "visible" : ""}`}
        >
          <span className="about-sub-label">The humans behind the screen</span>
          <div className="team-grid">
            {team.map((member, i) => (
              <div
                className="team-card"
                key={member.name}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="team-avatar">
                  <span>{member.emoji}</span>
                  <div className="avatar-ring" />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <span className="team-role">{member.role}</span>
                </div>
                <div className="team-status">
                  <span className="status-dot" />
                  online
                </div>
              </div>
            ))}

            {/* Hiring card */}
            <div className="team-card team-hiring">
              <div className="team-avatar hiring-avatar">
                <span>?</span>
              </div>
              <div className="team-info">
                <h4 className="team-name">Could be you</h4>
                <span className="team-role">We're hiring</span>
              </div>
              <a href="#contact" className="hiring-btn">
                Apply ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
