import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export function useIsTouch(): boolean {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(window.matchMedia('(hover: none)').matches);
  }, []);
  return touch;
}
