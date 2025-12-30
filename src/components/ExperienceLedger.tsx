"use client";

import { motion } from "framer-motion";

interface Experience {
    role: string;
    company: string;
    period: string;
    highlights: string[];
}

export default function ExperienceLedger({ experiences }: { experiences: Experience[] }) {
    return (
        <section className="py-16 border-t border-black/5">
            <div className="centered-container space-y-8">
                <h2 className="font-mono text-xs text-[#999999] uppercase tracking-wider">
                    Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-baseline"
                        >
                            <span className="font-mono text-xs text-[#999999] shrink-0">
                                {exp.period.split('–')[0].trim()} — {exp.period.includes('Present') ? 'Now' : exp.period.split('–')[1].trim().split(' ')[1]}
                            </span>

                            <div className="space-y-2">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                                    <h3 className="font-sans text-sm font-medium text-black">
                                        {exp.role}
                                    </h3>
                                    <span className="font-sans text-sm text-[#666666]">
                                        at {exp.company}
                                    </span>
                                </div>
                                {/* Optional: Show only first highlight or condensed view for "sleek" feel */}
                                <p className="font-sans text-sm text-[#666666] leading-relaxed max-w-xl">
                                    {exp.highlights[0]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
