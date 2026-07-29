import { content } from '../content.js';
import '../styles/skills.css';

export default function Skills() {
  const allItems = content.skillGroups.flatMap((group) => group.items);
  const rowA = allItems.map((item, i) => ({ item, group: content.skillGroups.findIndex((g) => g.items.includes(item)) }));
  const rowB = [...rowA].reverse();

  const renderSet = (items, hidden) => (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {items.map(({ item, group }, i) => (
        <span className="marquee-item" data-g={group} key={`${item}-${i}`}>
          {item}
          <span className="marquee-dot" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="skills section" id="skills" aria-labelledby="skills-heading">
      <div className="marquee-band" data-rv style={{ '--i': 0 }}>
        <div className="marquee marquee-a" aria-label="Skills ticker">
          <div className="marquee-track">
            {renderSet(rowA, false)}
            {renderSet(rowA, true)}
          </div>
        </div>
        <div className="marquee marquee-b" aria-hidden="true">
          <div className="marquee-track marquee-track-rev">
            {renderSet(rowB, true)}
            {renderSet(rowB, true)}
          </div>
        </div>
      </div>

      <div className="container">
        <h2 id="skills-heading" className="sec-h" data-rv style={{ '--i': 0 }}>
          Skills
        </h2>
        <div className="skills-groups">
          {content.skillGroups.map((group, i) => (
            <section
              className="skill-group"
              key={group.group}
              aria-label={group.group}
              data-rv
              style={{ '--i': i + 1 }}
            >
              <h3>{group.group}</h3>
              <ul className="skill-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
