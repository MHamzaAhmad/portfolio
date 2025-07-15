"use client";

import Chip from "@/components/Base/Chip";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  index: number;
  project: Models.Project;
}

const ProjectCard: FC<Props> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "var(--code-background)",
        border: isHovered ? "2px solid var(--accent-color)" : "1px solid var(--border-color)",
        borderRadius: "0.75rem",
        boxShadow: isHovered ? "0 4px 24px rgba(0,0,0,0.12)" : "none",
        fontFamily: "var(--font-family-mono)",
        padding: "1.2rem 1rem",
        minHeight: "180px",
        transition: "border 0.2s, box-shadow 0.2s",
        position: "relative",
      }}
    >
      <div style={{ color: "var(--accent-color)", fontWeight: 700, fontSize: "1rem", marginBottom: 4 }}>
        {`project-${props.index + 1}`} <span style={{ color: "var(--purple-accent)", fontWeight: 400 }}>// {props.project.name.toLowerCase()}</span>
      </div>
      <div style={{ color: "var(--secondary-text-color)", fontSize: "0.95rem", marginBottom: 8 }}>
        {props.project.description}
      </div>
      <div style={{ color: "var(--foreground-color)", fontSize: "0.85rem", marginBottom: 8 }}>
        <span style={{ color: "var(--purple-accent)", fontWeight: 600 }}>Tech:</span>
        <span style={{ marginLeft: 8 }}>
          {props.project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </span>
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            bottom: 12,
            right: 16,
            color: "var(--accent-color)",
            fontSize: "0.8rem",
            fontStyle: "italic",
            opacity: 0.8,
          }}
        >
          Click to view details →
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
