'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CinematicEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-text');
    if (!revealElements.length || typeof IntersectionObserver === 'undefined') return;

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => scrollObserver.observe(el));

    return () => {
      scrollObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
