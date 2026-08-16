import { useEffect, useRef } from 'react';
import { useIsTouch } from '@/hooks/useReducedMotion';

/**
 * Glowing-dot + magnetic-ring custom cursor. Skipped entirely on touch
 * devices. Any element with data-cursor="LABEL" shows that label in the ring.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();

  useEffect(() => {
    if (isTouch) return;
    document.body.classList.add('cursor-active');

    let mx = 0, my = 0, rx = 0, ry = 0, raf: number;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = `${mx}px`; dot.style.top = `${my}px`;
    };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = `${rx}px`; ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      ring.classList.add('grow');
      const label = el.dataset.cursor;
      if (label) {
        ring.classList.add('label');
        ring.dataset.label = label.toUpperCase();
      }
    };
    const onLeave = () => ring.classList.remove('grow', 'label');

    const interactive = document.querySelectorAll<HTMLElement>('a, button, [data-cursor]');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} id="cursor-dot" className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-signal pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={ringRef} id="cursor-ring" className="fixed top-0 left-0 w-9 h-9 rounded-full border border-signal pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,background] duration-200" />
    </>
  );
}
