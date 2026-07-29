import { content } from '../content.js';
import '../styles/hero.css';

export default function Hero() {
  const headline = content.heroHeadline;
  const [before, after] = headline.split('reliable');

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      {/* floating shapes — pure decoration */}
      <span className="hero-shape hero-shape-star" aria-hidden="true">✦</span>
      <span className="hero-shape hero-shape-circle" aria-hidden="true" />
      <span className="hero-shape hero-shape-plus" aria-hidden="true">+</span>

      <div className="container hero-inner">
        <p className="hero-eyebrow" data-lv style={{ '--i': 0 }}>
          <span>{content.name} — {content.location}</span>
        </p>

        <h1 id="hero-heading" className="hero-headline" data-lv style={{ '--i': 1 }}>
          {before}
          <span className="hero-ol">reliable</span>
          <span className="hero-grad">{after}</span>
        </h1>

        <p className="hero-sub" data-lv style={{ '--i': 2 }}>
          {content.heroSub}
        </p>

        <div className="hero-ctas" data-lv style={{ '--i': 3 }}>
          <a className="btn" href="#experience">
            View experience
          </a>
          <a
            className="btn btn-alt"
            href="https://raw.githubusercontent.com/OmarAhmed-A/Resume/main/Omar-Ahmed-Elsayed-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <ul className="hero-social" aria-label="Social links" data-lv style={{ '--i': 4 }}>
          <li>
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </li>
          <li aria-hidden="true" className="hero-social-dot">✦</li>
          <li>
            <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li aria-hidden="true" className="hero-social-dot">✦</li>
          <li>
            <a href={content.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <a className="hero-scrollcue" href="#stats" aria-label="Scroll to key numbers">
        <span>Scroll</span>
        <span className="hero-scrollcue-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
