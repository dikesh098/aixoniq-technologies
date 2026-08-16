import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Attach to any section wrapper; fades/lifts all [data-reveal] children in.
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('[data-reveal]');
    const triggers = Array.from(els).map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        }
      )
    );
    return () => triggers.forEach((t) => t.scrollTrigger?.kill());
  }, []);

  return ref;
}
