"use client";

import React, { useState, useCallback, memo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CodeTerminal from "@/components/ui/CodeTerminal";
import { useRouter } from "next/navigation";

interface Command {
  input: string;
  output: string;
  isRedirecting?: boolean;
}

const InteractiveTerminal = memo(() => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [customCommands, setCustomCommands] = useState<Command[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Ref for the interactive terminal content
  const interactiveContentRef = useRef<HTMLDivElement>(null);

  const handleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInput(e.target.value);
    },
    []
  );

  // Auto-scroll to bottom when commands are added
  useEffect(() => {
    if (interactiveContentRef.current && customCommands.length > 0) {
      interactiveContentRef.current.scrollTop =
        interactiveContentRef.current.scrollHeight;
    }
  }, [customCommands]);

  const redirect = useCallback(
    (path: string) => {
      setIsRedirecting(true);
      // Much shorter delay - only 300ms
      setTimeout(() => {
        router.push(path);
      }, 300);
    },
    [router]
  );

  const handleInputSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!userInput.trim() || isRedirecting) return;

      let output = "Command not recognized. Try 'help' for available commands.";
      let redirectCommand = false;

      // Process command
      const inputLower = userInput.toLowerCase().trim();

      if (inputLower === "help") {
        output = "Available commands: help, about, contact, projects, clear";
      } else if (inputLower === "about") {
        output =
          "Full Stack Software Engineer with expertise in modern web technologies.";
      } else if (inputLower === "contact") {
        output = "Redirecting to contact page...";
        redirectCommand = true;
        redirect("/contact-me");
      } else if (inputLower === "projects") {
        output = "Redirecting to projects page...";
        redirectCommand = true;
        redirect("/projects");
      } else if (inputLower === "clear") {
        setCustomCommands([]);
        setUserInput("");
        return;
      }

      setCustomCommands((prev) => [
        ...prev,
        { input: userInput, output, isRedirecting: redirectCommand },
      ]);
      setUserInput("");
    },
    [userInput, redirect, isRedirecting]
  );

  return (
    <div
      className="relative min-w-[320px] mobile:min-w-[420px] w-full max-w-[600px] mx-auto h-[350px] laptop:h-[400px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateY: isExpanded ? 180 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`relative w-full h-full ${
          isExpanded ? "pointer-events-none" : ""
        }`}
        onClick={handleExpand}
      >
        <CodeTerminal />

        {isHovered && !isExpanded && (
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent-color px-4 py-2 rounded-md text-black font-semibold"
            >
              Click to interact
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Interactive side (back of card) */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, rotateY: -180 }}
          animate={{
            opacity: 1,
            rotateY: 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 min-w-[320px] mobile:min-w-[420px] bg-code-back rounded-lg shadow-lg p-5 border border-border-color overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                onClick={handleExpand}
              ></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-center text-xs text-foreground-color">
              Interactive Terminal
            </div>
            <button
              onClick={handleExpand}
              className="text-xs text-foreground-color hover:text-sec-text-color"
            >
              Back
            </button>
          </div>

          <div
            ref={interactiveContentRef}
            className="font-mono text-sm h-[calc(100%-80px)] overflow-auto mb-2 scroll-smooth"
          >
            <div className="text-sec-text-color mb-3">
              Welcome to the interactive terminal! Type &apos;help&apos; to see
              available commands.
            </div>

            {customCommands.map((cmd, index) => (
              <div key={index} className="mb-2">
                <div className="flex">
                  <span className="text-green-400">guest@portfolio:~$</span>
                  <span className="text-accent-color ml-1">{cmd.input}</span>
                </div>
                {cmd.isRedirecting ? (
                  <div className="flex items-center text-sec-text-color">
                    <span>{cmd.output}</span>
                    <div className="ml-2 flex space-x-1">
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent-color"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent-color"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent-color"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-sec-text-color">{cmd.output}</div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleInputSubmit} className="flex items-center">
            <span className="text-green-400 mr-1">guest@portfolio:~$</span>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              className="flex-1 bg-transparent border-none outline-none text-accent-color"
              autoFocus
              disabled={isRedirecting}
            />
          </form>

          {isRedirecting && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="bg-code-back p-4 rounded-md border border-accent-color">
                <div className="flex items-center">
                  <span className="text-sec-text-color mr-2">Redirecting</span>
                  <div className="flex space-x-1">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-color"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-color"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-color"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
});

InteractiveTerminal.displayName = "InteractiveTerminal";

export default InteractiveTerminal;
