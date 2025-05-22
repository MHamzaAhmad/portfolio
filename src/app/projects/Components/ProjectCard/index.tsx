"use client";

import Chip from "@/components/Base/Chip";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import Image, { ImageLoaderProps } from "next/image";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  index: number;
  project: Models.Project;
}

const ProjectCard: FC<Props> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const loader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        <p className="text-one text-purple-text font-bold mr-3 mb-[0.92rem]">{`project-${
          props.index + 1
        }`}</p>
        <p>{`// ${props.project.name.toLowerCase()}`}</p>
      </div>
      <Card
        variant="outline"
        bg="transparent"
        borderColor="var(--border-color)"
        borderRadius="0.9375rem"
        minW="18rem"
        className="transition-all duration-300 ease-in-out overflow-hidden"
        boxShadow={isHovered ? "0 8px 15px rgba(0, 0, 0, 0.1)" : "none"}
      >
        <CardHeader className="border-b border-border-color p-0 h-[12rem] w-full relative overflow-hidden">
          <div className="absolute inset-0 rounded-t-[0.9375rem] overflow-hidden">
            <Image
              loader={loader}
              src={props.project.image}
              alt={props.project.description}
              fill
              className={`transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-4 rounded-t-[0.9375rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white font-medium truncate">
                {props.project.frontend.length > 0 && (
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-xs opacity-70">Frontend:</span>
                    <span className="text-xs text-accent-color">
                      {props.project.frontend[0]}
                    </span>
                  </div>
                )}
                {props.project.backend.length > 0 && (
                  <div className="flex items-center space-x-1">
                    <span className="text-xs opacity-70">Backend:</span>
                    <span className="text-xs text-accent-color">
                      {props.project.backend[0]}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </CardHeader>
        <CardBody className="bg-code-back text-foreground-color rounded-b-[0.975rem]">
          <div>{props.project.description}</div>
          <div className="mt-3">
            {props.project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
          {isHovered && (
            <motion.div
              className="mt-3 w-full flex justify-end"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs italic text-accent-color">
                Click to view details →
              </span>
            </motion.div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
