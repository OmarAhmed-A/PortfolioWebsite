import { content } from '../content.js';
import '../styles/contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="contact-h" data-rv style={{ '--i': 0 }}>
          Contact
        </h2>
        <p className="contact-lead" data-rv style={{ '--i': 1 }}>
          Want to work together or just say hi? Reach me at{' '}
          <a href={`mailto:${content.email}`}>{content.email}</a>.
        </p>
        <p data-rv style={{ '--i': 2 }}>
          <a className="btn btn-yel contact-btn" href={`mailto:${content.email}`}>
            Email me
          </a>
        </p>
        <ul className="contact-links" aria-label="Other links" data-rv style={{ '--i': 3 }}>
          <li>
            <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={content.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={`https://${content.site}`} target="_blank" rel="noopener noreferrer">
              {content.site}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
