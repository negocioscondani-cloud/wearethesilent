'use client';

import React, { useEffect } from 'react';

export default function CinematicEffects() {
  useEffect(() => {
    // 1. Custom Cursor Movement
    const cursor = document.getElementById('cursor');
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 2. Cursor Hover Classes and Text Injection on Links/Buttons
    const handleMouseEnter = (e: Event) => {
      document.body.classList.add('cursor-hover');
      const target = e.currentTarget as HTMLElement;
      const cursorText = target.getAttribute('data-cursor-text');
      const dot = document.getElementById('cursor-dot');
      if (dot) {
        if (cursorText) {
          dot.textContent = cursorText;
          dot.style.color = '#000000';
        } else {
          dot.textContent = '';
          dot.style.color = 'transparent';
        }
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-hover');
      const dot = document.getElementById('cursor-dot');
      if (dot) {
        dot.textContent = '';
        dot.style.color = 'transparent';
      }
    };

    const updateHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, [role="button"]');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateHoverListeners();

    // Observe DOM changes to re-bind hover events after page navigations
    const domObserver = new MutationObserver(() => {
      updateHoverListeners();
      
      // Also observe newly added reveal-text elements
      const revealElements = document.querySelectorAll('.reveal-text');
      revealElements.forEach((el) => {
        scrollObserver.observe(el);
      });
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    // 3. Scroll Reveal Observer
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el) => scrollObserver.observe(el));

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      domObserver.disconnect();
      scrollObserver.disconnect();
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor */}
      <div id="cursor" className="custom-cursor hidden md:block">
        <div id="cursor-dot" className="custom-cursor-dot"></div>
      </div>
      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain"></div>
    </>
  );
}
