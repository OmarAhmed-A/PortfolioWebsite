import { content } from '../content.js';
import '../styles/projects.css';

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="sec-h" data-rv style={{ '--i': 0 }}>
          Projects
        </h2>
        <ul className="projects-grid">
          {content.projects.map((project, i) => (
            <li
              className="project-card"
              key={project.name}
              data-rv
              style={{ '--i': i + 1 }}
            >
              <article>
                <span className="project-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{project.name}</h3>
                <p className="project-tag">{project.tag}</p>
                <p className="project-desc">{project.description}</p>
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
