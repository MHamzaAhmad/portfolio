"use client";
import Heading from "@/components/Base/Heading";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { FC } from "react";

interface Props {
  title: string;
  source: string;
}

const CodeDisplay: FC<Props> = ({ source, title }) => {
  return (
    <>
      <Heading>{`> ${title}`}</Heading>
      <div className="bg-code-back my-4 rounded-md">
        <MarkdownPreview disableCopy source={source} />
      </div>
    </>
  );
};

export default CodeDisplay;
