"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";

const TYPING_STRINGS = [
  "Full Stack Developer",
  "AI Enthusiast",
  "React & Next.js Crafter",
  "Problem Solver",
  "Creative Technologist",
];

function useTyping(strings: string[], speed = 70, pause = 1800) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"type" | "pause" | "delete">("type");
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = strings[idx];
    let timeout: NodeJS.Timeout;

    if (phase === "type") {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase("delete"), pause);
      }
    } else if (phase === "delete") {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, speed / 2);
      } else {
        setIdx((i) => (i + 1) % strings.length);
        setPhase("type");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIdx, idx, strings, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(TYPING_STRINGS);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background blobs ── */}
      <div
        className="blob blob-1 w-[600px] h-[600px] -top-40 -left-40 opacity-20"
        style={{ background: "radial-gradient(circle, #7c3aed, #a21caf)" }}
      />
      <div
        className="blob blob-2 w-[500px] h-[500px] top-1/2 -right-32 opacity-15"
        style={{ background: "radial-gradient(circle, #0ea5e9, #6366f1)" }}
      />
      <div
        className="blob blob-3 w-[400px] h-[400px] bottom-0 left-1/3 opacity-10"
        style={{ background: "radial-gradient(circle, #db2777, #9333ea)" }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,70,239,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(217,70,239,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        {/* Pill label */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="glass px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--color-plum)" }}>
            <Sparkles size={11} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-light leading-none mb-4"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", letterSpacing: "-0.02em" }}
        >
          <span style={{ color: "rgba(248,244,255,0.9)" }}>Riddhi</span>
          <br />
          <span className="gradient-text italic">Shah</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="mb-6 h-9 flex items-center justify-center"
        >
          <span
            className="font-mono text-base md:text-lg tracking-wider typing-cursor"
            style={{ color: "var(--color-text-muted)" }}
          >
            {typed}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-text-muted)", fontWeight: 300 }}
        >
          Crafting elegant digital experiences at the intersection of{" "}
          <em className="not-italic" style={{ color: "var(--color-pink)" }}>
            design
          </em>{" "}
          and{" "}
          <em className="not-italic" style={{ color: "var(--color-violet)" }}>
            technology
          </em>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full overflow-hidden text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,70,239,0.35)]"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #d946ef, #ec4899)",
              backgroundSize: "200% auto",
            }}
          >
            <span className="relative z-10 text-white">View My Work</span>
          </a>
          <a
            href="#contact"
            className="glass px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-white/[0.06]"
            style={{ color: "rgba(248,244,255,0.8)" }}
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-5"
        >
          {[
            { href: "https://github.com/riddhishah09", icon: <Github size={18} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/riddhi-shah-2b2a0a390", icon: <Linkedin size={18} />, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:-translate-y-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              {s.icon}
            </a>
          ))}
          <div className="w-px h-6 mx-1" style={{ background: "var(--color-border)" }} />
          <span className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
            Mumbai, India 🇮🇳
          </span>
        </motion.div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--color-text-faint)" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} style={{ color: "var(--color-text-faint)" }} />
        </motion.div>
      </motion.div>

      {/* ── Floating avatar orb ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="relative w-48 h-48 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 opacity-20 blur-2xl scale-150" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-600/30 to-pink-600/30 border border-white/10" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/[0.07] flex items-center justify-center">
            <span className="font-display text-5xl font-light italic gradient-text">R</span>
          </div>
          {/* Orbiting dots */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "var(--color-plum)" : "var(--color-pink)",
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(88px) translateY(-50%)`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
