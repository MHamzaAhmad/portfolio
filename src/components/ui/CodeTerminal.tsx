"use client";

import React, { useEffect, useState, memo, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CURSOR_BLINK_SPEED = 530; // ms
const TYPING_SPEED = 35; // ms per character

interface CodeLine {
  text: string;
  type: "command" | "output" | "comment" | "prompt";
  delay?: number; // Additional delay before typing this line
}

const codeContent: CodeLine[] = [
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: " whoami" },
  { type: "output", text: "Hamza Ahmad - Full Stack Software Engineer" },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: "ls languages/" },
  {
    type: "output",
    text: "JavaScript  TypeScript  Python  Go",
  },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: " ls skills/" },
  {
    type: "output",
    text: "frontend/  backend/  cloud/  databases/  tools/",
  },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: " cat skills/frontend/technologies.txt" },
  {
    type: "output",
    text: "React.js  Next.js  TypeScript  JavaScript  HTML5  CSS3  Tailwind  Chakra UI",
  },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: " cat skills/backend/technologies.txt" },
  {
    type: "output",
    text: "Go  Node.js  Express  NestJS  Fastify Python  Flask  FastAPI",
  },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: "cat skills/tools/tools.txt" },
  { type: "output", text: "Docker  Kubernetes  AWS  GCP  Firebase" },
  { type: "prompt", text: "hamza@portfolio:~$" },
  { type: "command", text: " cat projects.json | jq" },
  {
    type: "output",
    text: '[\n  {\n    "name": "Portfolio",\n    "tech": ["Next.js", "TypeScript", "Chakra UI"]\n  },\n  {\n    "name": "...",\n    "status": "Many more projects to explore!"\n  }\n]',
  },
  { type: "prompt", text: "hamza@portfolio:~$" },
];

const CodeTerminal = memo(() => {
  const [visibleContent, setVisibleContent] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Ref for the container div to enable auto-scrolling
  const contentRef = useRef<HTMLDivElement>(null);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, CURSOR_BLINK_SPEED);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom when content updates
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [visibleContent, currentChar]);

  // Typing animation
  useEffect(() => {
    if (currentLine >= codeContent.length) {
      setIsComplete(true);
      return;
    }

    const line = codeContent[currentLine];
    const isCommandComplete = currentChar >= line.text.length;

    if (isCommandComplete) {
      // Move to next line after completing the current line
      const timer = setTimeout(() => {
        setVisibleContent((prev) => [...prev, line.text]);
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, line.delay || 500);
      return () => clearTimeout(timer);
    }

    // Type the next character
    const timer = setTimeout(() => {
      setCurrentChar((prev) => prev + 1);
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  // Render the current line that's being typed
  const renderCurrentLine = () => {
    if (currentLine >= codeContent.length) return null;

    const line = codeContent[currentLine];
    const textTyped = line.text.substring(0, currentChar);

    return (
      <div className="flex">
        <span className={getTextClass(line.type)}>{textTyped}</span>
        {cursorVisible && <span className="text-white">▌</span>}
      </div>
    );
  };

  // Get the appropriate text color class based on line type
  const getTextClass = (type: CodeLine["type"]) => {
    switch (type) {
      case "command":
        return "text-accent-color";
      case "output":
        return "text-sec-text-color";
      case "comment":
        return "text-purple-text";
      case "prompt":
        return "text-green-400";
      default:
        return "text-white";
    }
  };

  // Render previous completed lines
  const renderCompletedLines = () => {
    return visibleContent.map((text, index) => {
      const lineType = codeContent[index].type;
      return (
        <div key={index} className={cn(getTextClass(lineType))}>
          {text}
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-w-[320px] mobile:min-w-[420px] max-w-[600px] h-full bg-code-back rounded-lg shadow-lg p-5 overflow-hidden border border-border-color"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="flex-1 text-center text-xs text-foreground-color">
          Terminal - bash
        </div>
      </div>

      <div
        ref={contentRef}
        className="font-mono text-sm h-[calc(100%-28px)] overflow-auto scroll-smooth"
      >
        {renderCompletedLines()}
        {renderCurrentLine()}
      </div>
    </motion.div>
  );
});

CodeTerminal.displayName = "CodeTerminal";

export default CodeTerminal;
