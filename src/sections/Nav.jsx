import { useEffect, useState } from 'react';
import { content } from '../content.js';
import '../styles/nav.css';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || sections.length === 0) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  // close the sticker menu on Escape and when growing past the mobile breakpoint
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 861px)');
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <header className="nav-header">
      <nav className="nav container" aria-label="Primary">
        <a className="nav-name" href="#top" aria-label={`${content.name} — back to top`}>
          {content.name}
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={active === link.href ? 'active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="nav-resume"
          href="https://raw.githubusercontent.com/OmarAhmed-A/Resume/main/Omar-Ahmed-Elsayed-Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↓
        </a>
        <button
          type="button"
          className={`nav-burger${open ? ' open' : ''}`}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-burger-bar" aria-hidden="true" />
          <span className="nav-burger-bar" aria-hidden="true" />
          <span className="nav-burger-bar" aria-hidden="true" />
        </button>
      </nav>

      <div className={`nav-menu${open ? ' open' : ''}`} id="nav-menu" hidden={!open}>
        <ul>
          {links.map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                <span className="nav-menu-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
