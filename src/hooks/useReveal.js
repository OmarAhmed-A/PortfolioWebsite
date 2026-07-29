import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver that adds `.in` to every [data-rv]
 * element as it enters the viewport (one-shot, staggered via --i).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-rv]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
