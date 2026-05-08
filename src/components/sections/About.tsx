"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Palette, Rocket } from "lucide-react";

const CARDS = [
  {
    icon: <Code2 size={20} />,
    title: "Full Stack Craftsmanship",
    body: "I build end-to-end web applications — from pixel-perfect frontends to robust, scalable backends — with a relentless focus on clean code and intuitive UX.",
    color: "#8b5cf6",
  },
  {
    icon: <Brain size={20} />,
    title: "AI & Emerging Tech",
    body: "Genuinely fascinated by artificial intelligence and how it reshapes what software can do. I actively explore LLMs, automation, and smart systems in my projects.",
    color: "#d946ef",
  },
  {
    icon: <Palette size={20} />,
    title: "Design-First Thinking",
    body: "Good code deserves beautiful interfaces. I care deeply about the visual and interactive quality of everything I create — details matter.",
    color: "#f472b6",
  },
  {
    icon: <Rocket size={20} />,
    title: "Always Learning",
    body: "Technology moves fast and I love keeping pace. Whether it's a new framework, design pattern, or AI paradigm — I'm always in pursuit of the next skill.",
    color: "#60a5fa",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #d946ef, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">01 / About</p>
          <h2
            className="font-display font-light leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            A developer who{" "}
            <span className="gradient-text-static italic">thinks in code</span>
            <br />
            and{" "}
            <span className="gradient-text-static italic">dreams in design</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="reveal space-y-5">
            <p className="text-base leading-8" style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
              Hi, I'm{" "}
              <strong className="font-medium" style={{ color: "var(--color-text)" }}>
                Riddhi Shah
              </strong>{" "}
              — a Full Stack Developer and AI enthusiast based in Mumbai, India. I'm passionate
              about building digital products that are not just functional, but genuinely
              delightful to use.
            </p>
            <p className="text-base leading-8" style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
              My journey in web development started with curiosity — wondering what lies behind
              a beautiful website. That curiosity grew into a craft. Today I combine modern
              frontend frameworks with solid backend architecture to ship full-featured
              applications.
            </p>
            <p className="text-base leading-8" style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
              Beyond traditional web dev, I'm deeply interested in{" "}
              <span style={{ color: "var(--color-pink)" }}>AI-powered applications</span> —
              exploring how machine learning and large language models can create smarter,
              more adaptive experiences. I believe the best products sit at the intersection
              of great engineering and thoughtful design.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: "Projects Built", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Open Source", value: "GitHub" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-2xl gradient-text-static mb-1">{s.value}</div>
                  <div className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${c.color}20`, color: c.color }}
                >
                  {c.icon}
                </div>
                <h3
                  className="font-medium text-sm mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {c.title}
                </h3>
                <p className="text-xs leading-6" style={{ color: "var(--color-text-muted)" }}>
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
