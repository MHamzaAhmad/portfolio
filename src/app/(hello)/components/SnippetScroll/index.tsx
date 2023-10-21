"use client";
import { motion } from "framer-motion";
import { useState, useEffect, FC, useRef } from "react";
import CodeSnippet from "../CodeSnippet";

interface Props {
  snippets?: Models.CodeSnippet[];
}

const list = ["item1", "item2", "item3", "item4", "item5"];
const SnippetScroll: FC<Props> = ({ snippets }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ overflow: "scroll" }} className="h-[70vh] w-full ps-5">
      <div
        ref={scrollRef}
        className="absolute w-full top-[40%] left-[50%] h-[15rem]"
      ></div>
      {list.map((item, index) => (
        <CodeSnippet key={index} content={item} />
      ))}
    </div>
  );
};

export default SnippetScroll;
