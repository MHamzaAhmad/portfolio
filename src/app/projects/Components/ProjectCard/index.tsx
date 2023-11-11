"use client";

import Chip from "@/components/Base/Chip";
import SecondaryButton from "@/components/Base/SecondaryButton";
import { Badge, Card, CardBody, CardHeader } from "@chakra-ui/react";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import { FC } from "react";

interface Props {
  index: number;
  project: Models.Project;
}

const ProjectCard: FC<Props> = (props) => {
  const loader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <div>
      <div className="flex">
        <p className="text-one text-purple-text font-bold mr-3 mb-[0.92rem]">{`Project ${
          props.index + 1
        }`}</p>
        <p>{`// ${props.project.name.toLowerCase()}`}</p>
      </div>
      <Card
        variant="outline"
        bg="transparent"
        borderColor="var(--border-color)"
        borderRadius="0.9375rem"
      >
        <CardHeader className="border-b border-border-color">
          <Image
            loader={loader}
            src={props.project.image}
            alt={props.project.description}
            width={150}
            height={90}
          />
        </CardHeader>
        <CardBody className="bg-code-back text-foreground-color rounded-b-[0.975rem]">
          <div>{props.project.description}</div>
          <div className="mt-3">
            {props.project.technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
          <SecondaryButton className="mt-[1.4rem]" route="">
            view-project
          </SecondaryButton>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
