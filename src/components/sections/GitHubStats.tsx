"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const USERNAME = "riddhishah09";

export default function GitHubStats() {
  return (
    <section id="stats" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">04 / Activity</p>
          <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            GitHub{" "}
            <span className="gradient-text-static italic">Stats</span>
          </h2>
        </div>

        {/* Stats cards grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {/* GitHub Stats Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden"
          >
            <p className="section-label mb-4">GitHub Stats</p>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=d946ef&icon_color=8b5cf6&text_color=a0a0c0&bg_color=00000000&count_private=true`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Top Languages */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden"
          >
            <p className="section-label mb-4">Languages</p>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=d946ef&text_color=a0a0c0&bg_color=00000000`}
              alt="Top Languages"
              className="w-full rounded-xl"
            />
          </motion.div>

          {/* Streak */}
          <motion.div
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 overflow-hidden md:col-span-2 lg:col-span-1"
          >
            <p className="section-label mb-4">Streak</p>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=transparent&hide_border=true&stroke=d946ef&ring=8b5cf6&fire=f472b6&currStreakNum=d946ef&sideNums=a0a0c0&currStreakLabel=a0a0c0&sideLabels=a0a0c0&dates=60606090`}
              alt="Streak Stats"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>

        {/* Contribution graph */}
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
              src={`https://ghchart.rshah.org/d946ef/${USERNAME}`}
              alt="GitHub Contribution Chart"
              className="w-full min-w-[600px] opacity-80"
            />
          </div>
          <p className="mt-4 text-xs font-mono text-center"
            style={{ color: "var(--color-text-faint)" }}>
            Every square is a commit. Every commit is a step forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
