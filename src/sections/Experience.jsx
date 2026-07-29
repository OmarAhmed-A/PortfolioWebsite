import { content } from '../content.js';
import '../styles/experience.css';

export default function Experience() {
  return (
    <section className="experience section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="sec-h" data-rv style={{ '--i': 0 }}>
          Experience
        </h2>
        <ol className="experience-timeline">
          {content.experience.map((job, i) => (
            <li
              className="experience-item"
              key={`${job.title}-${job.period}`}
              data-rv
              style={{ '--i': i + 1 }}
            >
              <span className="experience-idx" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <article className="experience-card">
                <header className="experience-header">
                  <h3>
                    {job.title} <span className="experience-co">— {job.company}</span>
                  </h3>
                  <p className="experience-meta">
                    <time className="experience-date">{job.period}</time>
                    <span className="experience-loc">{job.location}</span>
                  </p>
                </header>
                <ul className="experience-bullets">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
