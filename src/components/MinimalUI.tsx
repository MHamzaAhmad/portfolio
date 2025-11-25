"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function MinimalUI() {
    return (
        <div className="relative z-10 min-h-screen p-8 md:p-16 max-w-6xl mx-auto">
            {/* Storytelling Hero */}
            <section className="min-h-[90vh] flex flex-col justify-center mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <p className="font-mono text-sm md:text-base text-gray-400 mb-8 tracking-[0.2em] uppercase">
                        Introduction
                    </p>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-12 text-white tracking-tight">
                        I am <span className="italic text-gray-500">{resumeData.profile.name}</span>, a {resumeData.profile.title} crafting digital experiences in {resumeData.profile.location}.
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light mb-12">
                        {resumeData.profile.summary}
                    </p>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-8 md:left-16 animate-pulse"
                >
                    <span className="font-mono text-xs text-gray-600 tracking-widest uppercase">Scroll to explore</span>
                </motion.div>
            </section>

            {/* Experience */}
            <section className="mb-48">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 mb-16 pl-2"
                >
                    Experience
                </motion.h2>
                <div className="space-y-8">
                    {resumeData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-colors duration-500"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-4">
                                    <span className="font-mono text-xs text-gray-500 block mb-3">
                                        {exp.period}
                                    </span>
                                    <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gray-300 transition-colors">
                                        {exp.company}
                                    </h3>
                                    <p className="font-mono text-sm text-gray-400">{exp.role}</p>
                                </div>
                                <div className="md:col-span-8">
                                    <ul className="space-y-4">
                                        {exp.highlights.map((highlight, j) => (
                                            <li key={j} className="font-sans text-gray-300 text-lg leading-relaxed font-light">
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-48">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 mb-16 pl-2"
                >
                    Selected Projects
                </motion.h2>
                <div className="grid grid-cols-1 gap-6">
                    {resumeData.projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="block group p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                                <h3 className="font-serif text-4xl md:text-6xl text-white group-hover:italic transition-all duration-500">
                                    {project.name}
                                </h3>
                                <span className="font-mono text-xs text-gray-500 mt-4 md:mt-0 group-hover:text-white transition-colors">
                                    View Project ↗
                                </span>
                            </div>
                            <p className="font-sans text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
                                {project.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="mb-24 pb-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-24 border-t border-white/10"
                >
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-16 leading-tight">
                        Let&apos;s create something <br />
                        <span className="italic text-gray-500">extraordinary</span>.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 mb-6">Contact</p>
                            <a
                                href={`mailto:${resumeData.profile.email}`}
                                className="font-sans text-2xl hover:text-white text-gray-300 transition-colors block mb-2"
                            >
                                {resumeData.profile.email}
                            </a>
                            <p className="font-sans text-lg text-gray-500">{resumeData.profile.phone}</p>
                        </div>

                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600 mb-6">Socials</p>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                {Object.entries(resumeData.profile.socials).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-sans text-lg text-gray-400 hover:text-white capitalize transition-colors underline decoration-gray-700 underline-offset-4 hover:decoration-white"
                                    >
                                        {platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
