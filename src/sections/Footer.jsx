import { content } from '../content.js';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-line">
          © 2026 {content.name} — {content.location}
        </p>
        <a className="footer-top" href="#top">
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
