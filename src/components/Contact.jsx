import { useRef } from "react";
import useInView from "../hooks/useInView";
import "./Contact.css";

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <section className="contact" id="contact">
      <div className="contact-bg-text">LET'S GO</div>
      <div className="container">
        <div
          ref={ref}
          className={`contact-inner fade-up ${inView ? "visible" : ""}`}
        >
          <span className="tag">04. Contact</span>
          <h2 className="contact-title">
            Got a wild idea?
            <br />
            <span className="contact-highlight">Let's build it.</span>
          </h2>
          <p className="contact-sub">
            No boring briefs, no corporate fluff. Just tell us what you're
            trying to do and we'll figure out the rest.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:hello@void.studio"
              className="btn-primary contact-btn"
            >
              Drop us a line ✉
            </a>
            <div className="contact-socials">
              {["Twitter/X", "Instagram", "Dribbble"].map((s) => (
                <a
                  key={s}
                  href="https://instagram.com/zulfikarelreal"
                  className="social-link"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-footer-row">
            <span className="contact-email">hello@void.studio</span>
            <span className="contact-location">
              📍 Remote-first. Worldwide.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
