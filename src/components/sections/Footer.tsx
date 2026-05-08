import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
            R
          </span>
          <span className="font-display text-base font-light"
            style={{ color: "rgba(248,244,255,0.6)" }}>
            Riddhi Shah
          </span>
        </div>

        {/* Center text */}
        <p className="text-xs font-mono flex items-center gap-1.5"
          style={{ color: "var(--color-text-faint)" }}>
          Built with{" "}
          <Heart size={11} className="inline text-pink-400" fill="currentColor" />
          {" "}using Next.js, Tailwind & Framer Motion · © {year}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/riddhishah09", icon: <Github size={15} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/riddhi-shah-2b2a0a390", icon: <Linkedin size={15} />, label: "LinkedIn" },
            { href: "mailto:riddhi.shah24@sakec.ac.in", icon: <Mail size={15} />, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 glass rounded-full flex items-center justify-center transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-[0_0_16px_rgba(217,70,239,0.2)]"
              style={{ color: "var(--color-text-faint)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
