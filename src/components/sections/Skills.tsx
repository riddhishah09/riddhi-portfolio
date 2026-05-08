"use client";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    color: "#8b5cf6",
    skills: [
      { name: "HTML & CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    label: "Backend",
    color: "#d946ef",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
      { name: "MySQL", level: 72 },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#60a5fa",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Firebase", level: 74 },
      { name: "REST APIs", level: 82 },
      { name: "Vercel", level: 80 },
    ],
  },
];

const TECH_ICONS = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind", "Node.js", "Express", "MySQL", "Firebase",
  "Git", "GitHub", "Vercel", "REST API",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">02 / Skills</p>
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Technologies I{" "}
            <span className="gradient-text-static italic">work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="reveal space-y-10">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: group.color }}
                  />
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </span>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-light" style={{ color: "var(--color-text-muted)" }}>
                          {s.name}
                        </span>
                        <span className="text-xs font-mono" style={{ color: "var(--color-text-faint)" }}>
                          {s.level}%
                        </span>
                      </div>
                      <div
                        className="h-[3px] rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech cloud */}
          <div className="reveal">
            <div className="glass rounded-3xl p-8 h-full">
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8"
                style={{ color: "var(--color-text-faint)" }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {TECH_ICONS.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="tech-badge cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Currently learning */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                <p className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--color-text-faint)" }}>
                  Currently Exploring
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI / LLMs", "Framer Motion", "Three.js", "Docker"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-mono border"
                      style={{
                        background: "rgba(96,165,250,0.06)",
                        borderColor: "rgba(96,165,250,0.2)",
                        color: "rgba(96,165,250,0.8)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
