"use client";

import { resumeData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function MinimalUI() {
    const [expandedExp, setExpandedExp] = useState<number | null>(null);

    return (
        <div className="relative z-10 min-h-screen p-4 md:p-8 max-w-[1600px] mx-auto">
            {/* Massive Hero */}
            <section className="min-h-screen flex flex-col justify-between pb-20 pt-10">
                <div className="flex justify-between items-start">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-mono text-xs md:text-sm tracking-widest uppercase text-gray-500"
                    >
                        {resumeData.profile.location} — {new Date().getFullYear()}
                    </motion.div>
                    <motion.a
                        href="/resume.pdf"
                        download
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                        [ Download Resume <Download className="w-3 h-3" /> ]
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
                        <p className="font-sans text-xl text-white">{resumeData.profile.title}</p>
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
                <div className="flex items-end justify-between mb-12 border-b border-white/20 pb-4">
                    <h2 className="font-serif text-6xl md:text-8xl text-white">Selected Works</h2>
                    <span className="font-mono text-xs text-gray-500 mb-2">(0{resumeData.projects.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resumeData.projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative p-8 min-h-[400px] flex flex-col justify-between bg-[#111] hover:bg-[#161616] transition-colors duration-500 ${i === 0 || i === 3 ? "md:col-span-2" : ""
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-gray-500">0{i + 1}</span>
                                <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                            </div>

                            <div>
                                <h3 className="font-serif text-4xl md:text-5xl text-white mb-4 group-hover:italic transition-all">
                                    {project.name}
                                </h3>
                                <p className="font-sans text-lg text-gray-400 max-w-md">
                                    {project.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Experience Accordion */}
            <section className="mb-40">
                <div className="flex items-end justify-between mb-12 border-b border-white/20 pb-4">
                    <h2 className="font-serif text-6xl md:text-8xl text-white">Experience</h2>
                    <span className="font-mono text-xs text-gray-500 mb-2">{"///"} TIMELINE</span>
                </div>

                <div className="border-t border-white/10">
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button
                                onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                                className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between group text-left"
                            >
                                <div className="flex items-baseline gap-8">
                                    <span className="font-mono text-xs text-gray-500 w-32">{exp.period}</span>
                                    <h3 className="font-serif text-4xl md:text-5xl text-white group-hover:text-gray-300 transition-colors">
                                        {exp.company}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-4 mt-4 md:mt-0">
                                    <span className="font-mono text-sm text-gray-400">{exp.role}</span>
                                    {expandedExp === i ? (
                                        <Minus className="w-5 h-5 text-white" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedExp === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pl-0 md:pl-40 pr-4 md:pr-20">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                                {exp.highlights.map((highlight, j) => (
                                                    <li key={j} className="font-sans text-lg text-gray-400 leading-relaxed border-l border-white/10 pl-4">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="pb-12 pt-24 border-t border-white/20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div>
                        <h2 className="font-serif text-[10vw] leading-none text-white mb-8">
                            Let&apos;s Talk
                        </h2>
                        <div className="flex gap-8">
                            {Object.entries(resumeData.profile.socials).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                                >
                                    {platform}
                                </a>
                            ))}
                            <a
                                href={`mailto:${resumeData.profile.email}`}
                                className="font-mono text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-mono text-xs text-gray-600">
                            DESIGNED & DEVELOPED BY {resumeData.profile.name.toUpperCase()}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
