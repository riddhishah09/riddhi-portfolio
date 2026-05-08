"use client";
import { motion } from "framer-motion";
import { Award, BookOpen, Code2, Cpu, Layers, Zap, Cloud, Database, Trophy } from "lucide-react";

// ── Real credentials ──────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    icon: <Cloud size={20} />,
    title: "Cloud Gen AI Virtual Internship",
    subtitle: "AICTE · EduSkills · AWS Academy  |  July – Sept 2025",
    desc: "Successfully completed a 10-week virtual internship on Cloud & Generative AI, with curriculum provided by AWS Academy. Awarded by AICTE–NEAT Cell and EduSkills (Grade P).",
    color: "#f59e0b",
    tag: "Internship",
    link: null,
    issuer: "AICTE / EduSkills",
  },
  {
    icon: <Cpu size={20} />,
    title: "AWS Academy Machine Learning Foundations",
    subtitle: "Amazon Web Services Academy  |  Sept 6, 2025",
    desc: "Graduate-level AWS Academy certification covering core ML concepts, model training, evaluation, and cloud-based ML services. 20 hours completed. Verified digital badge on Credly.",
    color: "#ff9900",
    tag: "Certification",
    link: "https://www.credly.com/go/NgAi7N5c",
    issuer: "AWS Academy",
  },
  {
    icon: <Database size={20} />,
    title: "Big Data — 301",
    subtitle: "Infosys Springboard  |  May 2, 2026",
    desc: "Completed the Big Data 301 course on Infosys Springboard (Wingspan platform), covering big data architecture, processing frameworks, and analytical workflows.",
    color: "#0ea5e9",
    tag: "Certificate",
    link: null,
    issuer: "Infosys Springboard",
  },
  {
    icon: <Code2 size={20} />,
    title: "Python Data Structures & Algorithms",
    subtitle: "Infosys Springboard  |  Oct 30, 2025",
    desc: "Certified in Python DSA — arrays, linked lists, trees, sorting, and algorithmic problem-solving via Infosys Springboard.",
    color: "#3b82f6",
    tag: "Certificate",
    link: null,
    issuer: "Infosys Springboard",
  },
  {
    icon: <Layers size={20} />,
    title: "Java Programming Fundamentals",
    subtitle: "Infosys Springboard  |  May 4, 2025",
    desc: "Completed Java Programming Fundamentals on Infosys Springboard — covering OOP concepts, exception handling, collections, and core Java programming patterns.",
    color: "#8b5cf6",
    tag: "Certificate",
    link: null,
    issuer: "Infosys Springboard",
  },
  {
    icon: <Trophy size={20} />,
    title: "Infosys Springboard Badges",
    subtitle: "Infosys Springboard  |  May 2025",
    desc: "Earned achievement badges: 🛡 Warrior (first course completed), 🪄 Genie (100 quiz resources), 🏳 Ace (25 quiz resources).",
    color: "#d946ef",
    tag: "Badges",
    link: null,
    issuer: "Infosys Springboard",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full blur-3xl opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #f472b6, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-4">
          <p className="section-label mb-3">05 / Credentials</p>
          <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Certifications &{" "}
            <span className="gradient-text-static italic">Internship</span>
          </h2>
        </div>
        <p className="reveal mb-12 text-sm" style={{ color: "var(--color-text-faint)" }}>
          Real credentials — verified by Infosys Springboard, AWS Academy, and AICTE
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-6 group flex flex-col"
              style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${a.color}18`, color: a.color }}
                >
                  {a.icon}
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: `${a.color}12`,
                    color: a.color,
                    border: `1px solid ${a.color}25`,
                  }}
                >
                  {a.tag}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-1" style={{ color: "rgba(248,244,255,0.9)" }}>
                {a.title}
              </h3>
              <p className="text-xs font-mono mb-3" style={{ color: a.color, opacity: 0.7 }}>
                {a.subtitle}
              </p>
              <p className="text-xs leading-5 flex-1" style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
                {a.desc}
              </p>
              {/* Issuer + optional verify link */}
              <div className="flex items-center justify-between mt-4 pt-3"
                style={{ borderTop: "1px solid var(--color-border)" }}>
                <span className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
                  {a.issuer}
                </span>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono underline transition-opacity hover:opacity-80"
                    style={{ color: a.color }}
                  >
                    Verify ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
