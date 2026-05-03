import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="logo">
            <span className="logo-bracket">[</span>Zulfikar
            <span className="logo-bracket">]</span>
          </span>
          <p className="footer-tagline">Making the internet weird again.</p>
        </div>

        <div className="footer-right">
          <span className="footer-copy">
            © 2026{" "}
            <a href="https://github.com/zulfikarelreal">zulfikarelreal</a>. No
            rights reserved, we're built different.
          </span>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
