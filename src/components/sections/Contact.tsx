"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mail client as fallback (no server needed)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Riddhi,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    );
    window.open(`mailto:riddhi.shah24@sakec.ac.in?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #f472b6, transparent)" }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="section-label mb-3">06 / Contact</p>
          <h2 className="font-display font-light mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Let's{" "}
            <span className="gradient-text-static italic">connect</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "var(--color-text-muted)", fontWeight: 300 }}>
            Have an idea, opportunity, or just want to say hi? I'm always open to a good conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-2xl font-light mb-6"
              style={{ color: "rgba(248,244,255,0.85)" }}>
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-text-faint)" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-text-faint)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: "var(--color-text-faint)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className="form-input resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,70,239,0.3)]"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #d946ef, #ec4899)",
                  color: "white",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "riddhi.shah24@sakec.ac.in",
                href: "mailto:riddhi.shah24@sakec.ac.in",
                color: "#f472b6",
              },
              {
                icon: <Github size={20} />,
                label: "GitHub",
                value: "github.com/riddhishah09",
                href: "https://github.com/riddhishah09",
                color: "#8b5cf6",
              },
              {
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
                value: "linkedin.com/in/riddhi-shah",
                href: "https://www.linkedin.com/in/riddhi-shah-2b2a0a390",
                color: "#60a5fa",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-5 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}15`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase mb-0.5"
                    style={{ color: "var(--color-text-faint)" }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-medium"
                    style={{ color: "rgba(248,244,255,0.8)" }}>
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Quote */}
            <div className="glass rounded-2xl p-6 mt-4">
              <p className="font-display text-xl font-light italic leading-relaxed"
                style={{ color: "rgba(248,244,255,0.6)" }}>
                "I build things that are useful, beautiful, and{" "}
                <span className="gradient-text-static not-italic">worth shipping</span>."
              </p>
              <p className="mt-3 text-xs font-mono"
                style={{ color: "var(--color-text-faint)" }}>
                — Riddhi Shah
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
