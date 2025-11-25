"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface HeroProps {
  profile: {
    name: string;
    title: string;
    location: string;
    summary: string;
  };
  currentYear: number;
}

export default function HeroSection({ profile, currentYear }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-between pb-20 pt-6 md:pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] md:text-[14px] lg:text-[16px] tracking-widest uppercase text-gray-500"
        >
          {profile.location} — {currentYear}
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
          {profile.name.split(" ")[0].toUpperCase()}
          <br />
          <span className="ml-[10vw] text-gray-500 italic">
            {profile.name.split(" ")[1].toUpperCase()}
          </span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <p className="font-mono text-xs text-gray-500 mb-2">{"///"} ROLE</p>
          <p className="font-sans text-xl text-white">{profile.title}</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-sans text-2xl md:text-4xl text-gray-400 leading-tight">
            {profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
