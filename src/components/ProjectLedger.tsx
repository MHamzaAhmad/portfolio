"use client";

import { motion } from "framer-motion";

interface Project {
    name: string;
    description: string;
    link: string | null;
}

export default function ProjectLedger({ projects }: { projects: Project[] }) {
    return (
        <section className="py-16 border-t border-black/5">
            <div className="centered-container space-y-8">
                <h2 className="font-mono text-xs text-[#999999] uppercase tracking-wider">
                    Selected Work
                </h2>

                <div className="grid gap-px bg-black/5 border border-black/5 rounded-lg overflow-hidden">
                    {projects.map((project) => (
                        <motion.a
                            key={project.name}
                            href={project.link || "#"}
                            target={project.link ? "_blank" : undefined}
                            rel={project.link ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="block bg-white p-4 hover:bg-[#fafafa] transition-colors group"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                                <h3 className="font-mono text-sm font-medium text-black group-hover:text-black/70 transition-colors">
                                    {project.name}
                                </h3>
                                <span className="font-sans text-xs text-[#999999] truncate hidden sm:block">
                                    {project.link ? new URL(project.link).hostname : ''}
                                </span>
                            </div>
                            <p className="font-sans text-sm text-[#666666] mt-2 max-w-xl leading-relaxed">
                                {project.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
