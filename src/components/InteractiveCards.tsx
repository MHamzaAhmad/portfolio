"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

interface Project {
  name: string;
  link: string | null;
  description: string;
}

interface InteractiveCardsProps {
  projects: Project[];
}

export default function InteractiveCards({ projects }: InteractiveCardsProps) {
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
        projects.forEach((_, i) => {
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
  }, [hoveredProject, projects]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => {
        const mousePos = mousePositions[i] || { x: 50, y: 50 };
        const glowIntensity = glowIntensities[i] || 0;

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
              <h3 className="font-serif text-[12vw] md:text-[8vw] lg:text-[6vw] text-white mb-4 group-hover:italic transition-all duration-500 leading-[0.85] tracking-tighter">
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
  );
}
