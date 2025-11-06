'use client';

import { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

type Props = {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
  fitOffset?: number; // pixels to expand (+) or shrink (-) the frame
  offsetX?: number; // global X nudge in px (fine-tune alignment)
  offsetY?: number; // global Y nudge in px (fine-tune alignment)
  hoverGrow?: number; // extra outward grow when locking on a target
};

const TargetCursor = ({ targetSelector = '.cursor-target', spinDuration = 2, hideDefaultCursor = true, fitOffset = 0, offsetX = 0, offsetY = 0, hoverGrow = 6 }: Props) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const rotatorRef = useRef<HTMLDivElement | null>(null);
  const cornersRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const spinTl = useRef<gsap.core.Timeline | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const updateCornersRef = useRef<((mouseX?: number, mouseY?: number) => void) | null>(null);
  const lastMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Enable only on non-coarse pointers and larger screens
  const [enabled, setEnabled] = useState(false);

  const constants = useMemo(
    () => ({
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  // Avoid hydration mismatch: render nothing until mounted on client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    try {
      const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      setEnabled(!coarse);
    } catch {
      setEnabled(true);
    }
  }, [mounted]);

  const moveCursor = useCallback((x: number, y: number) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { x, y, duration: 0.1, ease: 'power3.out' });
    }
    if (rotatorRef.current) {
      gsap.to(rotatorRef.current, { x, y, duration: 0.1, ease: 'power3.out' });
    }
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = overlayRef.current?.querySelectorAll('.target-cursor-corner') || null;

    let activeTarget: Element | null = null;
    let currentTargetMove: ((ev: MouseEvent) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentTargetMove) {
        target.removeEventListener('mousemove', currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    if (rotatorRef.current) {
      gsap.set(rotatorRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }

    const createSpinTimeline = () => {
      if (spinTl.current) spinTl.current.kill();
      const target = rotatorRef.current || cursor;
      spinTl.current = gsap.timeline({ repeat: -1 }).to(target, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    };

    createSpinTimeline();

    const moveHandler = (e: MouseEvent) => {
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      moveCursor(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', moveHandler as any);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;

      const mouseX = lastMouseRef.current.x;
      const mouseY = lastMouseRef.current.y;

      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        !!elementUnderMouse && (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);

      if (!isStillOverTarget) {
        currentLeaveHandler?.();
      } else {
        // Realign corners on scroll to account for layout changes
        updateCornersRef.current?.();
      }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current!, { scale: 0.9, duration: 0.2 });
    };
    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current!, { scale: 1, duration: 0.2 });
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as Element | null;

      const allTargets: Element[] = [];
      let current: Element | null = directTarget;
      while (current && current !== document.body) {
        if ((current as Element).matches?.(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;

      if (activeTarget) cleanupTarget(activeTarget);

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      const corners = Array.from(cornersRef.current);
      corners.forEach((corner) => gsap.killTweensOf(corner));

      if (rotatorRef.current) {
        gsap.killTweensOf(rotatorRef.current, 'rotation');
        spinTl.current?.pause();
        gsap.set(rotatorRef.current, { rotation: 0 });
      }

      // Stage overlay corners at the current mouse position (small square), then animate to target
      if (cornersRef.current) {
        const { cornerSize } = constants;
        const mX = lastMouseRef.current.x;
        const mY = lastMouseRef.current.y;
        const startPositions = [
          { x: mX - cornerSize * 1.5, y: mY - cornerSize * 1.5 },
          { x: mX + cornerSize * 0.5, y: mY - cornerSize * 1.5 },
          { x: mX + cornerSize * 0.5, y: mY + cornerSize * 0.5 },
          { x: mX - cornerSize * 1.5, y: mY + cornerSize * 0.5 },
        ];
        const cs = Array.from(cornersRef.current);
        cs.forEach((corner, i) => {
          gsap.set(corner, { x: startPositions[i].x, y: startPositions[i].y, opacity: 1 });
        });
      }

      // Measure the stroke width from CSS so alignment stays exact if styles change
      const stroke = (() => {
        try {
          const w = parseFloat(getComputedStyle(corners[0]).borderTopWidth || '3');
          return Number.isFinite(w) ? w : 3;
        } catch {
          return 3;
        }
      })();

      const updateCorners = (mouseX?: number, mouseY?: number) => {
        if (!cornersRef.current) return;
        const rect = target.getBoundingClientRect();
        const [tlc, trc, brc, blc] = Array.from(cornersRef.current);

        const { cornerSize, parallaxStrength } = constants;

        // Align borders centered on element edges.
        // fitOffset > 0 expands outward, < 0 contracts inward.
        const S = stroke; // border stroke width in CSS
        const half = S / 2;
        const w = cornerSize;
        const h = cornerSize;

        const extra = hoverGrow; // outward grow when hovering
        const Lc = rect.left - (fitOffset + extra);
        const Tc = rect.top - (fitOffset + extra);
        const Rc = rect.right + (fitOffset + extra);
        const Bc = rect.bottom + (fitOffset + extra);

        let tlOffset = {
          x: Lc + half + offsetX,
          y: Tc + half + offsetY,
        };
        let trOffset = {
          x: Rc - half - w + offsetX,
          y: Tc + half + offsetY,
        };
        let brOffset = {
          x: Rc - half - w + offsetX,
          y: Bc - half - h + offsetY,
        };
        let blOffset = {
          x: Lc + half + offsetX,
          y: Bc - half - h + offsetY,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const c = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];
        c.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: 'power2.out',
            },
            0
          );
        });
      };
      updateCornersRef.current = updateCorners;

      isAnimatingToTarget = true;
      // Hide rotator and dot while locking to target
      if (rotatorRef.current) gsap.to(rotatorRef.current, { autoAlpha: 0, duration: 0.1, overwrite: true });
      if (dotRef.current) gsap.to(dotRef.current, { autoAlpha: 0, duration: 0.1, overwrite: true });
      updateCorners();
      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: MouseEvent) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          updateCorners(ev.clientX, ev.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;
        updateCornersRef.current = null;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const mX = lastMouseRef.current.x;
          const mY = lastMouseRef.current.y;
          const positions = [
            { x: mX - cornerSize * 1.5, y: mY - cornerSize * 1.5 },
            { x: mX + cornerSize * 0.5, y: mY - cornerSize * 1.5 },
            { x: mX + cornerSize * 0.5, y: mY + cornerSize * 0.5 },
            { x: mX - cornerSize * 1.5, y: mY + cornerSize * 0.5 },
          ];

          // Fade out locked corners when leaving
          gsap.to(corners, { opacity: 0, duration: 0.15 });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && (rotatorRef.current || cursorRef.current) && spinTl.current) {
            const target = rotatorRef.current || cursorRef.current!;
            const currentRotation = Number(gsap.getProperty(target, 'rotation'));
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap.timeline({ repeat: -1 }).to(target, { rotation: '+=360', duration: spinDuration, ease: 'none' });

            gsap.to(target, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: 'none',
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        if (activeTarget) cleanupTarget(activeTarget);
        // Show rotator and dot again
        if (rotatorRef.current) gsap.to(rotatorRef.current, { autoAlpha: 1, duration: 0.15, overwrite: true });
        if (dotRef.current) gsap.to(dotRef.current, { autoAlpha: 1, duration: 0.15, overwrite: true });
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;
      target.addEventListener('mousemove', targetMove as unknown as EventListener);
      target.addEventListener('mouseleave', leaveHandler as unknown as EventListener);
    };

    window.addEventListener('mouseover', enterHandler as any, { passive: true } as any);

    return () => {
      window.removeEventListener('mousemove', moveHandler as any);
      window.removeEventListener('mouseover', enterHandler as any);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);

      if (activeTarget) cleanupTarget(activeTarget);

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
      updateCornersRef.current = null;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor, enabled]);

  useEffect(() => {
    if (!enabled || !cursorRef.current || !spinTl.current) return;
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap.timeline({ repeat: -1 }).to(cursorRef.current, { rotation: '+=360', duration: spinDuration, ease: 'none' });
    }
  }, [spinDuration, enabled]);

  if (!mounted || !enabled) return null;

  return (
    <>
      <div ref={cursorRef} className="target-cursor-wrapper">
        <div ref={dotRef} className="target-cursor-dot" />
      </div>
      <div ref={rotatorRef} className="target-cursor-rotator">
        <div className="rotator-corner corner-tl" />
        <div className="rotator-corner corner-tr" />
        <div className="rotator-corner corner-br" />
        <div className="rotator-corner corner-bl" />
      </div>
      <div ref={overlayRef} className="target-cursor-overlay">
        <div className="target-cursor-corner corner-tl" />
        <div className="target-cursor-corner corner-tr" />
        <div className="target-cursor-corner corner-br" />
        <div className="target-cursor-corner corner-bl" />
      </div>
    </>
  );
};

export default TargetCursor;
