"use client";

import { motion } from "framer-motion";

const USERNAME = "riddhishah09";

export default function GitHubStats() {
  return (
    <section id="stats" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #60a5fa, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">04 / Activity</p>

          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            GitHub{" "}
            <span className="gradient-text-static italic">Stats</span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

          {/* GitHub Profile */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden"
          >
            <p className="section-label mb-4">GitHub Profile</p>

            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${USERNAME}&theme=tokyonight`}
              alt="GitHub Profile"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Most Used Languages */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden"
          >
            <p className="section-label mb-4">Top Languages</p>

            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${USERNAME}&theme=tokyonight`}
              alt="Top Languages"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden"
          >
            <p className="section-label mb-4">Stats</p>

            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${USERNAME}&theme=tokyonight`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="reveal glass rounded-3xl p-6 overflow-hidden"
        >
          <p className="section-label mb-6">Contribution Graph</p>

          <div className="overflow-x-auto">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&theme=tokyo-night&hide_border=true`}
              alt="GitHub Contribution Graph"
              className="w-full min-w-[700px] rounded-xl"
            />
          </div>

          <p
            className="mt-4 text-xs font-mono text-center"
            style={{ color: "var(--color-text-faint)" }}
          >
            Every contribution represents consistency and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
