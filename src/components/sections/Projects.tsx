"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Loader2, Star, GitFork } from "lucide-react";
import { GitHubRepo, GRAD_PALETTES, LANG_COLORS } from "@/lib/github";

const GITHUB_USERNAME = "riddhishah09";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data.filter((r) => !r.fork));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #d946ef, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-6">
          <p className="section-label mb-3">03 / Projects</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Things I've{" "}
              <span className="gradient-text-static italic">built</span>
            </h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all hover:border-fuchsia-500/40 self-start md:self-auto"
              style={{ color: "var(--color-plum)" }}
            >
              <Github size={13} />
              View GitHub
            </a>
          </div>
        </div>

        <p className="reveal mb-12 text-sm" style={{ color: "var(--color-text-faint)" }}>
          Fetched live from GitHub · updates automatically when new repos are published
        </p>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={24} className="animate-spin" style={{ color: "var(--color-plum)" }} />
            <span className="ml-3 font-mono text-sm" style={{ color: "var(--color-text-muted)" }}>
              Fetching repositories…
            </span>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="glass rounded-3xl p-12 text-center">
            <p className="font-mono text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              Couldn't load repositories right now.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
              style={{ color: "var(--color-plum)" }}
            >
              View on GitHub →
            </a>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && repos.length === 0 && (
          <div className="glass rounded-3xl p-12 text-center">
            <p className="font-mono text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
              No public repos found yet.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
              style={{ color: "var(--color-plum)" }}
            >
              GitHub Profile →
            </a>
          </div>
        )}

        {/* Future projects note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 glass rounded-3xl p-8 text-center"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-2"
            style={{ color: "var(--color-text-faint)" }}>
            Coming Soon
          </p>
          <p className="font-display text-xl font-light mb-1" style={{ color: "rgba(248,244,255,0.7)" }}>
            More exciting projects on the way
          </p>
          <p className="text-sm" style={{ color: "var(--color-text-faint)" }}>
            AI Resume Analyzer · Smart Home Automation · College ERP · Chat Application · and more
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Individual card ─────────────────────────────────────────────── */
function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const cardRef = { current: null as HTMLDivElement | null };
  const gradient = GRAD_PALETTES[index % GRAD_PALETTES.length];
  const langColor = repo.language ? LANG_COLORS[repo.language] ?? LANG_COLORS.default : LANG_COLORS.default;

  const displayName = repo.name
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="project-card relative overflow-hidden rounded-3xl glass glass-hover group flex flex-col"
    >
      <div className="card-glow pointer-events-none" />

      {/* Thumbnail */}
      <div className={`relative h-36 bg-gradient-to-br ${gradient} overflow-hidden flex-shrink-0`}>
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full"
          style={{ background: `${langColor}18`, border: `1px solid ${langColor}20` }} />
        <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl rotate-12"
          style={{ background: `${langColor}10` }} />
        {repo.language && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: langColor }} />
            <span className="text-xs font-mono text-white/60">{repo.language}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-medium text-sm mb-1.5 group-hover:text-white transition-colors"
          style={{ color: "rgba(248,244,255,0.85)" }}>
          {displayName}
        </h3>
        <p className="text-xs leading-5 mb-4 flex-1 line-clamp-2"
          style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
          {repo.description || `A ${repo.language || "web"} project. Check GitHub for details.`}
        </p>

        {/* Topics */}
        {repo.topics?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 3).map((t: string) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-auto"
          style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs font-mono"
              style={{ color: "var(--color-text-faint)" }}>
              <Star size={10} />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono"
              style={{ color: "var(--color-text-faint)" }}>
              <GitFork size={10} />
              {repo.forks_count}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 glass rounded-full flex items-center justify-center hover:border-fuchsia-500/40 transition-all"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Github size={12} />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                style={{ background: "linear-gradient(135deg, #7c3aed, #d946ef)", color: "white" }}
              >
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
