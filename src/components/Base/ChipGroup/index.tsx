import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import Chip from "../Chip";
import Heading from "../Heading";
import { motion } from "framer-motion";

interface Props {
  chips: string[];
  title: string;
}

export const ChipGroup: React.FC<Props> = ({ chips, title }) => {
  return (
    <motion.div whileHover={{ scale: 1.01 }}>
      <Card
        className="mb-4"
        background="var(--background-color)"
        variant="outline"
        borderColor="var(--accent-color)"
        borderRadius="0.9375rem"
      >
        <CardHeader>
          <Heading>{"> " + title}</Heading>
        </CardHeader>
        <CardBody>
          {
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          }
        </CardBody>
      </Card>
    </motion.div>
  );
};
