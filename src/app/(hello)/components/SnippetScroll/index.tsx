"use client";
import { motion } from "framer-motion";
import { useState, useEffect, FC, useRef } from "react";

interface Props {
  snippets?: Models.CodeSnippet[];
}

const list = ["item1", "item2", "item3", "item4", "item5"];
const SnippetScroll: FC<Props> = ({ snippets }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ overflow: "scroll" }} className="h-[5rem]">
      {list.map((item, index) => (
        <div key={index} ref={scrollRef} className="snippet-scroll">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
          >
            {item}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SnippetScroll;
