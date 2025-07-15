import { ChipGroup } from "@/components/Base/ChipGroup";
import Heading from "@/components/Base/Heading";
import SecondaryButton from "@/components/Base/SecondaryButton";
import { Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
  project: Models.Project;
  onClose: () => void;
}

export const ExpandedProjectCard: FC<Props> = ({ project, onClose }) => {
  return (
    <div className="relative p-2">
      <div>
        {/* Terminal-style header */}
        <div
          style={{
            background: "var(--code-background)",
            border: "1px solid var(--border-color)",
            borderRadius: "0.75rem",
            fontFamily: "var(--font-family-mono)",
            padding: "1.2rem 1rem 0.7rem 1rem",
            marginBottom: "1.5rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ color: "var(--accent-color)", fontWeight: 700, fontSize: "1.1rem" }}>
            $ project --view {project.name.toLowerCase().replace(/\s+/g, '-')}
          </div>
          <div style={{ color: "var(--purple-accent)", fontSize: "0.95rem", marginLeft: "0.5rem" }}>
            {/* {project.description} */}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Heading className="font-bold">{project.name}</Heading>
          <div className="flex items-center space-x-3">
            <SecondaryButton route={project.url}>view-project</SecondaryButton>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 bg-accent-color text-white rounded-full shadow-md"
            >
              <span className="text-xl font-bold">X</span>
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6">
          {/* Left column with details */}
          <div className="laptop:col-span-2">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-code-back p-5 rounded-lg mb-6"
              style={{ fontFamily: "var(--font-family-mono)" }}
            >
              <h3 className="text-lg font-medium mb-3 text-accent-color">
                Project Overview
              </h3>
              <p className="text-sm leading-relaxed">
                {project.detailedDescription}
              </p>
            </motion.div>
            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-code-back p-5 rounded-lg"
              style={{ fontFamily: "var(--font-family-mono)" }}
            >
              <h3 className="text-lg font-medium mb-3 text-accent-color">
                Technical Highlights
              </h3>
              <div className="space-y-2">
                {project.frontend.length > 0 && (
                  <div className="flex items-start">
                    <div className="bg-accent-color/20 text-accent-color p-1 rounded mr-3 text-xs">
                      FE
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Frontend Development
                      </p>
                      <p className="text-xs opacity-80">
                        Using {project.frontend.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
                {project.backend.length > 0 && (
                  <div className="flex items-start">
                    <div className="bg-accent-color/20 text-accent-color p-1 rounded mr-3 text-xs">
                      BE
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Backend Architecture
                      </p>
                      <p className="text-xs opacity-80">
                        Built with {project.backend.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
                {project.infra.length > 0 && (
                  <div className="flex items-start">
                    <div className="bg-accent-color/20 text-accent-color p-1 rounded mr-3 text-xs">
                      IN
                    </div>
                    <div>
                      <p className="text-sm font-medium">Infrastructure</p>
                      <p className="text-xs opacity-80">
                        Deployed on {project.infra.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
                {project.languages.length > 0 && (
                  <div className="flex items-start">
                    <div className="bg-accent-color/20 text-accent-color p-1 rounded mr-3 text-xs">
                      LG
                    </div>
                    <div>
                      <p className="text-sm font-medium">Core Languages</p>
                      <p className="text-xs opacity-80">
                        {project.languages.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          {/* Right column with technologies */}
          <div className="laptop:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-code-back p-5 rounded-lg"
              style={{ fontFamily: "var(--font-family-mono)" }}
            >
              <h3 className="text-md font-medium mb-4 text-accent-color">
                Tech Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm opacity-70 mb-2">frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-accent-color text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm opacity-70 mb-2">backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.backend.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-purple-text text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm opacity-70 mb-2">infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.infra.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-600 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.languages.length > 0 && (
                  <div>
                    <h4 className="text-sm opacity-70 mb-2">languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-1 text-xs rounded-full bg-accent-color/10 text-accent-color"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Project URL */}
              <div className="mt-6 pt-4 border-t border-border-color">
                <h4 className="text-sm opacity-70 mb-2">project url</h4>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-color hover:underline break-all"
                >
                  {project.url}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <Spacer h="1.5rem" />
        <div className="flex justify-end">
          <motion.button
            className="mb-2 px-5 py-2 bg-accent-color rounded-lg text-white font-medium"
            whileHover={{ scale: 1.03, backgroundColor: "var(--purple-text)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            Close
          </motion.button>
        </div>
      </div>
    </div>
  );
};
