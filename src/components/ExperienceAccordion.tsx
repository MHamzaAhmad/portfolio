"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

interface ExperienceAccordionProps {
  experiences: Experience[];
}

export default function ExperienceAccordion({
  experiences,
}: ExperienceAccordionProps) {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  return (
    <div className="border-t border-white/10">
      {experiences.map((exp, i) => (
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
  );
}
