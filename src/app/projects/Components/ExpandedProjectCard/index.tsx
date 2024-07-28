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
    <div className="max-h-[50dvh]">
      <div className="flex justify-between items-center">
        <Heading className="font-bold">{project.name}</Heading>
        <div className="flex">
          <SecondaryButton className="me-4" route={project.url}>
            view-project
          </SecondaryButton>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onClose}
            className="text-2xl font-bold text-accent-color"
          >
            X
          </motion.button>
        </div>
      </div>
      <div>
        <Spacer h="1rem" />
        <p>{project.detailedDescription}</p>
        <Spacer h="2rem" />
        <ChipGroup chips={project.frontend} title="frontend" />
        <Spacer h="0.5rem" />
        <ChipGroup chips={project.backend} title="backend" />
        <Spacer h="0.5rem" />
        <ChipGroup chips={project.infra} title="infra-structure" />
        <Spacer h="1.5rem" />
        <div className="flex justify-end">
          <motion.button
            className="mb-6 p-3 bg-accent-color rounded-lg text-white font-bold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            Close
          </motion.button>
        </div>
      </div>
    </div>
  );
};
