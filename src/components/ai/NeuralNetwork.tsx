import { useEffect, useRef } from 'react';

interface Node {
  x: number; y: number; vx: number; vy: number; r: number;
}

/**
 * Lightweight 2D canvas neural network — deliberately not WebGL, so the AI
 * section stays cheap to render even with the hero's R3F scene already
 * mounted above it.
 */
export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const NODE_COUNT = isTouch ? 60 : 140;

    let w = 0, h = 0;
    const nodes: Node[] = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = canvas!.clientWidth; h = canvas!.clientHeight;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      });
    }

    let mouseX = -9999, mouseY = -9999;
    const onMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left; mouseY = e.clientY - rect.top;
    };
    const onLeave = () => { mouseX = -9999; mouseY = -9999; };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    let raf: number;
    function frame() {
      raf = requestAnimationFrame(frame);
      ctx!.clearRect(0, 0, w, h);
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = mouseX - n.x, dy = mouseY - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) { n.x -= dx * 0.01; n.y -= dy * 0.01; }
      });
      const linkDist = 100;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            ctx!.strokeStyle = `rgba(73,240,255,${(1 - d / linkDist) * 0.35})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx!.beginPath();
        ctx!.fillStyle = 'rgba(232,236,241,0.8)';
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      });
    }
    if (!reduced) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[420px] md:h-[520px] block mt-12 border border-line" />;
}
