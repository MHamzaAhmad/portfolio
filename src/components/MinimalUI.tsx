import { resumeData } from "@/data/resume";
import HeroSection from "./HeroSection";
import ExperienceLedger from "./ExperienceLedger";
import ProjectLedger from "./ProjectLedger";

export default function MinimalUI() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen selection:bg-[#eeeeee] selection:text-black">
      <HeroSection profile={resumeData.profile} currentYear={currentYear} />

      <ExperienceLedger experiences={resumeData.experience} />

      <ProjectLedger projects={resumeData.projects} />

      <footer className="py-16 border-t border-black/5 mt-12">
        <div className="centered-container flex flex-col sm:flex-row justify-between items-start gap-8">
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-[#999999] uppercase tracking-wider">
              Connect
            </h2>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="font-mono text-sm text-black hover:underline"
              >
                {resumeData.profile.email}
              </a>
              <div className="flex gap-4">
                {Object.entries(resumeData.profile.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#666666] hover:text-black transition-colors capitalize"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:text-right">
            <h2 className="font-mono text-xs text-[#999999] uppercase tracking-wider">
              Education
            </h2>
            <div className="font-sans text-sm text-[#444444]">
              {resumeData.education.institution}
              <br />
              <span className="text-[#999999] text-xs">
                {resumeData.education.degree} ({resumeData.education.gpa})
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
