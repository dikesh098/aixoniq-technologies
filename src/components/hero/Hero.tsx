import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AixoniqCore } from '@/components/3d/AixoniqCore';
import { useIsTouch, useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const scrollProgress = useRef(0);
  const isTouch = useIsTouch();
  const reduced = useReducedMotion();

  // Boot sequence + scroll fade of the hero canvas.
  useEffect(() => {
    const tl = gsap.timeline();
    if (!reduced) {
      tl.to('#boot-logo-text', { opacity: 1, letterSpacing: '0.6em', duration: 0.8, ease: 'power2.out' })
        .to('#boot-logo', { opacity: 0, duration: 0.6, delay: 0.3, pointerEvents: 'none' })
        .to('#nav', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
        .to('#status-pill', { opacity: 1, duration: 0.5 })
        .to(headlineRef.current?.querySelectorAll('.line span') ?? [], {
          y: '0%', duration: 1, stagger: 0.12, ease: 'power4.out',
        }, '-=0.2')
        .to('#hero-sub', { opacity: 1, duration: 0.7 }, '-=0.5')
        .to('#hero-ctas', { opacity: 1, duration: 0.7 }, '-=0.5')
        .to('#scroll-cue', { opacity: 1, duration: 0.6 }, '-=0.4');
    } else {
      gsap.set(['#boot-logo'], { opacity: 0, pointerEvents: 'none' });
      gsap.set(['#nav', '#status-pill', '#hero-sub', '#hero-ctas', '#scroll-cue'], { opacity: 1, y: 0 });
      gsap.set(headlineRef.current?.querySelectorAll('.line span') ?? [], { y: '0%' });
    }

    const st = ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
        if (canvasWrapRef.current) {
          canvasWrapRef.current.style.opacity = String(Math.max(1 - self.progress, 0));
        }
      },
    });

    return () => { tl.kill(); st.kill(); };
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden px-6 md:px-20 pb-12 md:pb-24"
    >
      <div ref={canvasWrapRef} className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 9], fov: 45 }} dpr={isTouch ? [1, 1.5] : [1, 2]}>
            <fog attach="fog" args={['#06070A', 5, 14]} />
            <AixoniqCore isTouch={isTouch} scrollProgress={scrollProgress} />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgba(6,7,10,0.2),#06070A_78%)]" />

      <div className="relative z-[2]">
        <div id="status-pill" className="font-mono text-[11px] tracking-[0.1em] uppercase text-text-dim flex items-center gap-2 mb-5 opacity-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CFF8A] shadow-[0_0_8px_#4CFF8A] animate-pulse" />
          Available for new projects
        </div>

        <h1 ref={headlineRef} className="text-[44px] md:text-[8.4vw] lg:text-[132px] uppercase max-w-[16ch]">
          <span className="line overflow-hidden block"><span className="block translate-y-[110%]">Building the</span></span>
          <span className="line overflow-hidden block"><span className="block translate-y-[110%]">digital future.</span></span>
        </h1>

        <p id="hero-sub" className="mt-7 text-base md:text-lg text-text-dim max-w-[46ch] opacity-0">
          AI-powered technology. Intelligent software. Extraordinary digital experiences — engineered by Aixoniq Technologies.
        </p>

        <div id="hero-ctas" className="flex flex-wrap gap-4 mt-10 opacity-0">
          <a href="#contact" className="btn btn-primary magnetic" data-cursor="start"><span>Start a Project →</span></a>
          <a href="#work" className="btn btn-ghost magnetic" data-cursor="explore"><span>Explore Our Work</span></a>
        </div>
      </div>

      <div id="scroll-cue" className="absolute right-6 md:right-20 bottom-12 z-[2] [writing-mode:vertical-rl] font-mono text-[11px] tracking-[0.2em] text-text-dim opacity-0">
        SCROLL
      </div>
    </section>
  );
}
