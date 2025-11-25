import { resumeData } from "@/data/resume";
import HeroSection from "./HeroSection";
import InteractiveCards from "./InteractiveCards";
import ExperienceAccordion from "./ExperienceAccordion";

export default function MinimalUI() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative z-10 min-h-screen p-4 md:p-8 max-w-[1800px] mx-auto">
      {/* Massive Hero - Client component for animations */}
      <HeroSection profile={resumeData.profile} currentYear={currentYear} />

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

        {/* Interactive Cards - Client component for cursor tracking */}
        <InteractiveCards projects={resumeData.projects} />
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

        {/* Experience Accordion - Client component for expand/collapse */}
        <ExperienceAccordion experiences={resumeData.experience} />
      </section>

      {/* Footer - Static content */}
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
