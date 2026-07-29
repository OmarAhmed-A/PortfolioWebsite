import { content } from '../content.js';
import '../styles/stats.css';

export default function Stats() {
  return (
    <section className="stats section" id="stats" aria-label="Key numbers">
      <div className="container">
        <dl className="stats-list">
          {content.stats.map((stat, i) => (
            <div
              className="stat"
              key={stat.label}
              data-rv
              style={{ '--i': i }}
            >
              <dd className="stat-value">{stat.value}</dd>
              <dt className="stat-label">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
