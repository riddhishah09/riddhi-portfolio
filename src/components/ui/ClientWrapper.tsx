"use client";
import { useEffect, useRef } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const cursorGlow = useRef<HTMLDivElement>(null);
  const scrollBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ─── Cursor ───────────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let glowX = 0, glowY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;

      if (cursorDot.current) {
        cursorDot.current.style.left = mouseX + "px";
        cursorDot.current.style.top = mouseY + "px";
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = ringX + "px";
        cursorRing.current.style.top = ringY + "px";
      }
      if (cursorGlow.current) {
        cursorGlow.current.style.left = glowX + "px";
        cursorGlow.current.style.top = glowY + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    // Hover interactions
    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor-grow]")) {
        cursorRing.current?.style.setProperty("width", "60px");
        cursorRing.current?.style.setProperty("height", "60px");
        cursorRing.current?.style.setProperty("border-color", "rgba(217,70,239,0.8)");
        cursorDot.current?.style.setProperty("opacity", "0");
      }
    };
    const onMouseOut = () => {
      cursorRing.current?.style.setProperty("width", "36px");
      cursorRing.current?.style.setProperty("height", "36px");
      cursorRing.current?.style.setProperty("border-color", "rgba(217,70,239,0.5)");
      cursorDot.current?.style.setProperty("opacity", "1");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    raf = requestAnimationFrame(animate);

    // ─── Scroll Progress ──────────────────────────────────────
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (scrollBar.current) {
        scrollBar.current.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ─── Scroll Reveal ────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div id="cursor-dot" ref={cursorDot} />
      <div id="cursor-ring" ref={cursorRing} />
      <div id="cursor-glow" ref={cursorGlow} />
      {/* Scroll progress */}
      <div id="scroll-progress" ref={scrollBar} />
      {children}
    </>
  );
}
