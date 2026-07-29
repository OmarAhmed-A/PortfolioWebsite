import { content } from '../content.js';
import '../styles/education.css';

export default function Education() {
  const { education, certifications, volunteering } = content;

  return (
    <section className="education section" id="education" aria-labelledby="education-heading">
      <div className="container">
        <h2 id="education-heading" className="sec-h" data-rv style={{ '--i': 0 }}>
          Education &amp; Certifications
        </h2>

        <div className="education-grid">
          <section className="edu-card" aria-label="Education" data-rv style={{ '--i': 1 }}>
            <span className="edu-badge" aria-hidden="true">◉</span>
            <h3>Education</h3>
            <p className="edu-lead">{education.degree}</p>
            <p className="edu-body">{education.school}</p>
          </section>

          <section className="edu-card" aria-label="Certifications" data-rv style={{ '--i': 2 }}>
            <span className="edu-badge" aria-hidden="true">✦</span>
            <h3>Certifications</h3>
            <ul className="edu-certs">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="edu-card" aria-label="Volunteering" data-rv style={{ '--i': 3 }}>
            <span className="edu-badge" aria-hidden="true">✚</span>
            <h3>Volunteering</h3>
            {volunteering.map((v) => (
              <div className="edu-vol" key={`${v.role}-${v.org}`}>
                <p className="edu-lead">
                  {v.role} — {v.org}
                </p>
                <p className="edu-period">
                  <time>{v.period}</time>
                </p>
                <p className="edu-body">{v.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
