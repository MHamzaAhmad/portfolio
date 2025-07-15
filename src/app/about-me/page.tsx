"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Input, Text, VStack, HStack, Button } from "@chakra-ui/react";

const COMMANDS = [
  { command: "help", description: "List available commands" },
  { command: "bio", description: "Show a short bio" },
  { command: "skills", description: "List technical skills" },
  { command: "experience", description: "Show work experience" },
  { command: "contact", description: "Show contact information" },
];

const RESPONSES: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    ...COMMANDS.map((c) => `  ${c.command} - ${c.description}`),
  ],
  bio:
    "I'm Hamza Ahmad, a passionate full-stack software engineer with 4+ years of experience. I specialize in building scalable web and mobile applications using modern technologies. I love solving problems and creating impactful digital experiences.",
  skills: [
    "Languages: Go, JavaScript, TypeScript, Python, Dart",
    "Frontend: React, Next.js, Flutter",
    "Backend: Go, Node.js, Express, NestJS, GraphQL, Python",
    "Databases: MongoDB, PostgreSQL, MySQL, Elasticsearch",
    "Cloud/DevOps: AWS, GCP, Docker, Kubernetes, CI/CD",
    "Tools: Git, VS Code, Jira, Testing, Performance, Microservices",
  ],
  experience: [
    "Stealth Startup (Nov 2024 - Present): Senior Software Engineer",
    "Septem Systems (Sep 2023 - Nov 2024): Senior Software Engineer",
    "Devsinc (Jun 2022 - Sep 2023): Software Engineer",
    "Freelance (Sep 2020 - Apr 2022): Software Engineer",
  ],
  contact: [
    "Email: hamzabuzz88@gmail.com",
    "GitHub: github.com/MHamzaAhmad",
    "LinkedIn: linkedin.com/in/mhamza88/"
  ],
};

const PROMPT = "hamza:portfolio>";

const getLineType = (line: string) => {
  if (line.startsWith(PROMPT)) return "prompt";
  if (line.startsWith("Available commands:")) return "comment";
  if (line.startsWith("Command not found:")) return "error";
  if (line.startsWith("  ")) return "command-list";
  return "output";
};

const getLineColor = (type: string) => {
  switch (type) {
    case "prompt":
      return "var(--accent-color)";
    case "command-list":
      return "var(--foreground-color)";
    case "comment":
      return "var(--purple-accent)";
    case "error":
      return "#e99287";
    case "output":
    default:
      return "var(--secondary-text-color)";
  }
};

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Hamza Ahmad's Portfolio Terminal! Type 'help' to get started.",
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let response: string | string[] =
      RESPONSES[command] || `Command not found: ${command}`;
    setHistory((prev) => [
      ...prev,
      `${PROMPT} ${cmd}`,
      ...(Array.isArray(response) ? response : [response]),
    ]);
  };

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsProcessing(true);
    handleCommand(input);
    setInput("");
    setIsProcessing(false);
  };

  return (
    <Box
      maxW="700px"
      mx="auto"
      mt={10}
      p={6}
      borderRadius="md"
      bg="var(--code-background)"
      color="var(--foreground-color)"
      fontFamily="var(--font-family-mono)"
      boxShadow="lg"
      minH="500px"
      className="terminal-portfolio"
      border="1px solid var(--border-color)"
    >
      <VStack align="stretch" spacing={2} minH="400px">
        {history.map((line, idx) => {
          const type = getLineType(line);
          return (
            <Text
              key={idx}
              whiteSpace="pre-line"
              fontSize="sm"
              sx={{ color: getLineColor(type) }}
            >
              {type === "prompt" ? (
                <>
                  <span style={{ color: "var(--accent-color)", fontWeight: 600 }}>{PROMPT}</span>
                  <span style={{ color: "var(--foreground-color)" }}>{line.slice(PROMPT.length)}</span>
                </>
              ) : (
                line
              )}
            </Text>
          );
        })}
        <form onSubmit={handleInput} style={{ width: "100%" }}>
          <HStack>
            <Text as="span" sx={{ color: "var(--accent-color)", fontWeight: 600 }}>
              {PROMPT}
            </Text>
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              variant="unstyled"
              color="var(--foreground-color)"
              fontFamily="var(--font-family-mono)"
              fontSize="sm"
              autoFocus
              disabled={isProcessing}
              placeholder="Type a command..."
              _placeholder={{ color: "gray.500" }}
              bg="transparent"
            />
            <Button
              type="submit"
              size="sm"
              variant="outline"
              borderColor="var(--accent-color)"
              color="var(--accent-color)"
              _hover={{ bg: "var(--background-color)", borderColor: "var(--light-accent-color)", color: "var(--light-accent-color)" }}
              isLoading={isProcessing}
            >
              Run
            </Button>
          </HStack>
        </form>
        <Box mt={4}>
          <Text color="var(--purple-accent)" fontSize="xs" mb={2}>
            Try:
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            {COMMANDS.map((c) => (
              <Button
                key={c.command}
                size="xs"
                variant="outline"
                borderColor="var(--accent-color)"
                color="var(--accent-color)"
                fontFamily="var(--font-family-mono)"
                fontSize="xs"
                _hover={{ bg: "var(--background-color)", borderColor: "var(--light-accent-color)", color: "var(--light-accent-color)" }}
                onClick={() => {
                  if (!isProcessing) {
                    setIsProcessing(true);
                    handleCommand(c.command);
                    setIsProcessing(false);
                  }
                }}
                disabled={isProcessing}
              >
                {c.command}
              </Button>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Terminal; 