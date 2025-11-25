"use client";

import { resumeData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

export default function MinimalUI() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<
    Record<number, { x: number; y: number }>
  >({});
  const [glowIntensities, setGlowIntensities] = useState<
    Record<number, number>
  >({});
  const animationFrameRef = useRef<number>();

  // Smoothly animate glow intensities
  useEffect(() => {
    const animate = () => {
      setGlowIntensities((prev) => {
        const next = { ...prev };
        resumeData.projects.forEach((_, i) => {
          const target = hoveredProject === i ? 1 : 0;
          const current = prev[i] || 0;
          // Smooth interpolation
          next[i] = current + (target - current) * 0.15;
          // Clamp very small values to 0
          if (next[i] < 0.01) next[i] = 0;
        });
        return next;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hoveredProject]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePositions((prev) => ({ ...prev, [index]: { x, y } }));
    },
    []
  );

  return (
    <div className="relative z-10 min-h-screen p-4 md:p-8 max-w-[1800px] mx-auto">
      {/* Massive Hero */}
      <section className="min-h-screen flex flex-col justify-between pb-20 pt-6 md:pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-[10px] md:text-[14px] lg:text-[16px] tracking-widest uppercase text-gray-500"
          >
            {resumeData.profile.location} — {new Date().getFullYear()}
          </motion.div>
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 font-mono text-[10px] md:text-[14px] lg:text-[16px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors w-fit"
          >
            [ Resume <Download className="w-3 h-3 md:w-4 md:h-4" /> ]
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-difference">
            {resumeData.profile.name.split(" ")[0].toUpperCase()}
            <br />
            <span className="ml-[10vw] text-gray-500 italic">
              {resumeData.profile.name.split(" ")[1].toUpperCase()}
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-gray-500 mb-2">{"///"} ROLE</p>
            <p className="font-sans text-xl text-white">
              {resumeData.profile.title}
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-2xl md:text-4xl text-gray-400 leading-tight">
              {resumeData.profile.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="mb-40">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <h2 className="font-serif text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter text-white">
            Selected
            <br className="md:hidden" />
            <span className="text-gray-500 italic ml-[5vw]">Works</span>
          </h2>
          <span className="font-mono text-xs text-gray-500 mb-4">
            (0{resumeData.projects.length})
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, i) => {
            const mousePos = mousePositions[i] || { x: 50, y: 50 };
            const glowIntensity = glowIntensities[i] || 0;
            const isHovered = hoveredProject === i;

            return (
              <motion.a
                key={i}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative p-8 md:p-10 min-h-[450px] flex flex-col justify-between overflow-hidden border transition-colors duration-500 ${
                  i === 0 || i === 3 ? "md:col-span-2" : ""
                }`}
                style={{
                  borderColor: `rgba(255, 255, 255, ${
                    0.08 + glowIntensity * 0.12
                  })`,
                  background: `
                    radial-gradient(
                      600px circle at ${mousePos.x}% ${mousePos.y}%,
                      rgba(255, 255, 255, ${0.02 + glowIntensity * 0.06}),
                      transparent 40%
                    ),
                    linear-gradient(
                      135deg,
                      rgba(255, 255, 255, 0.06) 0%,
                      rgba(255, 255, 255, 0.03) 50%,
                      rgba(255, 255, 255, 0.01) 100%
                    )
                  `,
                }}
              >
                {/* Cursor glow effect - smoothly animated */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: glowIntensity,
                    background: `radial-gradient(
                      500px circle at ${mousePos.x}% ${mousePos.y}%,
                      rgba(255, 255, 255, 0.1),
                      transparent 40%
                    )`,
                  }}
                />

                {/* Animated top edge highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent 0%,
                      rgba(255, 255, 255, ${0.1 + glowIntensity * 0.3}) ${
                      mousePos.x
                    }%,
                      transparent 100%
                    )`,
                  }}
                />

                {/* Animated left edge highlight */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-px pointer-events-none"
                  style={{
                    background: `linear-gradient(
                      180deg,
                      transparent 0%,
                      rgba(255, 255, 255, ${0.05 + glowIntensity * 0.25}) ${
                      mousePos.y
                    }%,
                      transparent 100%
                    )`,
                  }}
                />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-xs text-gray-500 tracking-widest">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-4 group-hover:italic transition-all duration-500 leading-[0.85] tracking-tighter">
                    {project.name}
                  </h3>
                  <p className="font-sans text-base md:text-lg text-gray-500 max-w-md group-hover:text-gray-400 transition-colors leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Experience Accordion */}
      <section className="mb-40">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <h2 className="font-serif text-[10vw] md:text-[8vw] leading-[0.85] tracking-tighter text-white">
            <span className="text-gray-500 italic">Career</span>
            <br className="md:hidden" />
            <span className="ml-[5vw]">Timeline</span>
          </h2>
          <span className="font-mono text-xs text-gray-500 mb-4 tracking-widest">
            {"///"} EXPERIENCE
          </span>
        </div>

        <div className="border-t border-white/10">
          {resumeData.experience.map((exp, i) => (
            <div
              key={i}
              className={`border-b border-white/10 transition-colors duration-300 ${
                expandedExp === i ? "bg-white/[0.02]" : ""
              }`}
            >
              <button
                onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                className="w-full py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between group text-left hover:bg-white/[0.03] transition-all duration-300 px-6 md:px-8"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
                  <span className="font-mono text-xs text-gray-500 tracking-widest md:w-36">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white group-hover:text-gray-200 transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <span className="font-mono text-sm text-gray-400 tracking-wide">
                    {exp.role}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                      expandedExp === i
                        ? "bg-white/10 rotate-0"
                        : "group-hover:border-white/40"
                    }`}
                  >
                    {expandedExp === i ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedExp === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 md:pb-16 pt-4 px-6 md:px-8">
                      <div className="md:ml-[11.5rem]">
                        <ul className="space-y-4">
                          {exp.highlights.map((highlight, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: j * 0.05 }}
                              className="font-sans text-xl md:text-2xl text-gray-400 leading-relaxed"
                            >
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-8 md:pb-12 pt-16 md:pt-24 border-t border-white/20">
        <div className="flex flex-col gap-8 md:gap-12">
          <div>
            <h2 className="font-serif text-[14vw] md:text-[12vw] leading-none text-white mb-6 md:mb-8">
              Let&apos;s Talk
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {Object.entries(resumeData.profile.socials).map(
                ([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs md:text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                  >
                    {platform}
                  </a>
                )
              )}
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="font-mono text-xs md:text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-[10px] md:text-xs text-gray-600">
              DESIGNED & DEVELOPED BY {resumeData.profile.name.toUpperCase()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
