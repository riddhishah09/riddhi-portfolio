"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { GitHubRepo, LANG_COLORS, GRAD_PALETTES } from "@/lib/github";

interface Props {
  repo: GitHubRepo;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ repo, index, featured = false }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const gradient = GRAD_PALETTES[index % GRAD_PALETTES.length];
  const langColor = repo.language
    ? LANG_COLORS[repo.language] ?? LANG_COLORS.default
    : LANG_COLORS.default;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current?.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current?.style.setProperty("--mouse-y", `${y}%`);
  };

  // Clean up display name
  const displayName = repo.name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`project-card relative overflow-hidden rounded-3xl glass glass-hover group ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Glow overlay */}
      <div className="card-glow pointer-events-none" />

      {/* Gradient thumbnail */}
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        {/* Decorative shapes */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
          style={{ background: `${langColor}15`, border: `1px solid ${langColor}20` }} />
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-2xl rotate-12"
          style={{ background: `${langColor}10`, border: `1px solid ${langColor}15` }} />
        {/* Language indicator */}
        {repo.language && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
            <div className="w-2 h-2 rounded-full" style={{ background: langColor }} />
            <span className="text-xs font-mono text-white/70">{repo.language}</span>
          </div>
        )}
        {/* Repo name large */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-medium text-base mb-2 group-hover:text-white transition-colors"
          style={{ color: "rgba(248,244,255,0.85)" }}
        >
          {displayName}
        </h3>
        <p
          className="text-sm leading-6 mb-4 line-clamp-2"
          style={{ color: "var(--color-text-muted)", fontWeight: 300 }}
        >
          {repo.description || `A ${repo.language || "web"} project — open on GitHub for details.`}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 3).map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs font-mono"
              style={{ color: "var(--color-text-faint)" }}>
              <Star size={11} />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono"
              style={{ color: "var(--color-text-faint)" }}>
              <GitFork size={11} />
              {repo.forks_count}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-full flex items-center justify-center transition-all hover:border-fuchsia-500/40"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Github size={14} />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #d946ef)",
                  color: "white",
                }}
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
