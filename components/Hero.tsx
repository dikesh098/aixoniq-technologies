"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const FLOAT_TAGS = [
  { label: "AI Model // deployed", top: "16%", left: "6%", delay: 0 },
  { label: "SOC monitoring: active", top: "70%", left: "5%", delay: 1.2 },
  { label: "uptime 99.98%", top: "22%", left: "84%", delay: 0.6 },
  { label: "build passed ✓", top: "74%", left: "82%", delay: 1.8 },
];

// Node-and-line network — the "intelligence" signature, drawn once and
// animated with a slow pulse rather than left as flat decoration.
const NODES = [
  [60, 90], [180, 40], [300, 120], [420, 60], [540, 140],
  [110, 220], [260, 260], [400, 210], [520, 260], [640, 100],
];
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [3, 7], [4, 8],
  [5, 6], [6, 7], [7, 8], [8, 9], [4, 9], [0, 5],
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-void">
      {/* Optional cinematic video layer — add /public/hero-loop.mp4 to enable */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Generated backdrop: radial glow + node network, visible with or without video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(36,81,255,0.35),transparent),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(34,211,238,0.18),transparent)]" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <svg
        className="pointer-events-none absolute right-[-8%] top-1/2 hidden w-[46%] -translate-y-1/2 opacity-40 md:block lg:opacity-60"
        viewBox="0 0 700 320"
        fill="none"
      >
        {EDGES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]}
            stroke="url(#edgeGrad)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + i * 0.05, ease: "easeOut" }}
          />
        ))}
        {NODES.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5}
            fill={i % 3 === 0 ? "#22D3EE" : "#4A6CFF"}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
          />
        ))}
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2451FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient beam sweep — the bolt motif, softened */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/3 h-[140%] w-1/3 -rotate-12 bg-beam opacity-25 animate-slash" />
      </div>

      {/* Floating status cards */}
      {FLOAT_TAGS.map((tag) => (
        <motion.div
          key={tag.label}
          className="glass-dark absolute hidden rounded-full px-4 py-2 font-mono text-[11px] text-cyan-bright/90 md:block"
          style={{ top: tag.top, left: tag.left }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: tag.delay, ease: "easeInOut" }}
        >
          {tag.label}
        </motion.div>
      ))}

      <div className="shell relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex flex-wrap items-center gap-4"
        >
          <span className="eyebrow-num !h-7 !w-11">01</span>
          <p className="eyebrow">AI · Software · Cybersecurity · Cloud · SEO</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl text-balance font-display text-6xl font-semibold leading-[1.02] tracking-tight text-white md:text-8xl"
        >
          Engineering at
          <span className="block bg-gradient-to-r from-cyan-bright via-royal-bright to-cyan-bright bg-clip-text text-transparent">
            intelligent scale.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted/90"
        >
          We build AI-powered software, secure digital infrastructure, ERP
          platforms, and result-driven SEO and digital marketing services —
          for startups, institutions, and enterprises that need it to work
          the first time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link href="/services" className="btn-secondary-dark">
            <PlayCircle size={16} /> Explore Services
          </Link>
        </motion.div>

        {/* Entain-style slide index strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex items-center gap-3 font-mono text-xs text-ink-faint"
        >
          {["01", "02", "03", "04", "05"].map((n, i) => (
            <span key={n} className="flex items-center gap-3">
              <span className={i === 0 ? "text-cyan-bright" : ""}>{n}</span>
              {i < 4 && <span className="h-px w-8 bg-white/15" />}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
