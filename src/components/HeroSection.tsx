"use client";

import { motion } from "framer-motion";

interface HeroProps {
  profile: {
    name: string;
    title: string;
    location: string;
    summary: string;
    email: string;
  };
  currentYear: number;
}

export default function HeroSection({ profile, currentYear }: HeroProps) {
  return (
    <section className="pt-32 pb-16">
      <div className="centered-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Identity */}
          <div className="space-y-2">
            <h1 className="font-sans text-4xl md:text-5xl font-semibold tracking-tight text-black">
              {profile.name}
            </h1>
            <p className="font-mono text-sm text-[#999999]">
              {profile.title} • {profile.location}
            </p>
          </div>

          {/* Bio */}
          <p className="font-sans text-base text-[#444444] max-w-lg leading-relaxed">
            Software engineer specializing in building and launching products.
            Focusing on robust systems, cloud-native architecture, and high-performance APIs.
          </p>

          {/* Actions */}
          <div className="flex gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs text-black hover:underline underline-offset-4"
            >
              [Email]
            </a>
            <a
              href="/resume.pdf"
              className="font-mono text-xs text-black hover:underline underline-offset-4"
            >
              [Resume]
            </a>
            <a
              href="https://github.com/MHamzaAhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-black hover:underline underline-offset-4"
            >
              [GitHub]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
