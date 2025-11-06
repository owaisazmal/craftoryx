'use client';

import React, { CSSProperties, useEffect, useRef } from 'react';
import './ScrambledText.css';

type Props = {
  radius?: number;
  duration?: number; // seconds
  speed?: number; // intensity factor 0..1
  scrambleChars?: string;
  className?: string;
  style?: CSSProperties;
  children: string;
};

// Lightweight ScrambledText effect without external libraries.
// On pointer move, characters within a radius briefly scramble and resolve back.
export default function ScrambledText({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
}: Props) {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const charRefs = useRef<HTMLSpanElement[]>([]);
  const rafMap = useRef(new Map<HTMLElement, number>());

  // Helper: start scrambling animation for a single character
  const scrambleChar = (el: HTMLSpanElement) => {
    const original = el.dataset.content ?? el.textContent ?? '';
    const start = performance.now();
    const total = duration * 1000;

    // Cancel any existing animation on this element
    const prev = rafMap.current.get(el);
    if (prev) cancelAnimationFrame(prev);

    const rand = (s: string) => s[Math.floor(Math.random() * s.length)] || '';

    const tick = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / total);

      // How long we keep scrambling before resolving to original
      const scramblePhase = Math.max(0.15, 0.85 * speed); // between 0.15..0.85 window

      if (p < scramblePhase) {
        el.textContent = rand(scrambleChars);
        const id = requestAnimationFrame(tick);
        rafMap.current.set(el, id);
      } else {
        el.textContent = original;
        rafMap.current.delete(el);
      }
    };

    const id = requestAnimationFrame(tick);
    rafMap.current.set(el, id);
  };

  useEffect(() => {
    if (!rootRef.current) return;

    // Initialize refs and data-content for each character
    charRefs.current.forEach((c) => {
      c.dataset.content = c.textContent || '';
    });

    const handleMove = (e: PointerEvent) => {
      charRefs.current.forEach((c) => {
        const rect = c.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          scrambleChar(c);
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      // Cancel any pending RAFs
      rafMap.current.forEach((id) => cancelAnimationFrame(id));
      rafMap.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radius, duration, speed, scrambleChars]);

  return (
    <span
      ref={rootRef}
      className={`scramble-text ${className || ''}`}
      style={style}
      aria-label={children}
    >
      {/* Render characters as individual spans */}
      {children.split('').map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          ref={(el) => {
            if (el) charRefs.current[i] = el;
          }}
          className="scramble-char"
          data-content={ch}
          aria-hidden="true"
        >
          {ch}
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </span>
  );
}

