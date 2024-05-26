"use client";
import Heading from "@/components/Base/Heading";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { FC } from "react";

interface Props {
  title: string;
  source: string;
}

const CodeDisplay: FC<Props> = ({ source, title }) => {
  return (
    <>
      <Card
        className="mb-4 hover:drop-shadow-xl transition duration-300 ease-in-out"
        background="var(--background-color)"
        variant="outline"
        borderColor="var(--border-color)"
        borderRadius="0.9375rem"
      >
        <CardHeader>
          <Heading>{`> ${title}`}</Heading>
        </CardHeader>
        <CardBody>
          <div className="bg-code-back my-4 rounded-md">
            <MarkdownPreview disableCopy source={source} />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CodeDisplay;
