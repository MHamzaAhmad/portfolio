"use client";
import { FC, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

interface CommandProcessorProps {
  command: string;
  addOutput: (output: ReactNode) => void;
  startCliContact: () => void;
  setShowClassicUI: (value: boolean) => void;
  clearTerminal: () => void;
}

const CommandProcessor: FC<CommandProcessorProps> = ({
  command,
  addOutput,
  startCliContact,
  setShowClassicUI,
  clearTerminal,
}) => {
  const processCommand = (cmd: string) => {
    const trimmedCommand = cmd.trim().toLowerCase();

    // Process command
    switch (trimmedCommand) {
      case "help":
        return addOutput(
          <>
            <Text color="accent-color" fontWeight="bold" mb={1}>
              Available Commands:
            </Text>
            <Text>
              <span className="text-purple-accent">contact</span> - Start CLI
              contact form
            </Text>
            <Text>
              <span className="text-purple-accent">gui</span> - Open graphical
              contact form
            </Text>
            <Text>
              <span className="text-purple-accent">about</span> - About the
              developer
            </Text>
            <Text>
              <span className="text-purple-accent">clear</span> - Clear terminal
            </Text>
            <Text>
              <span className="text-purple-accent">help</span> - Show this help
            </Text>
          </>
        );
      case "about":
        return addOutput(
          <>
            <Text color="accent-color" fontWeight="bold" mb={1}>
              About Me:
            </Text>
            <Text mb={1}>
              Full-stack software engineer with 4+ years of experience building
              modern web and mobile applications.
            </Text>
            <Text>
              Passionate about clean code, performance optimization, and
              user-centered design.
            </Text>
          </>
        );
      case "contact":
        startCliContact();
        return;
      case "gui":
        setShowClassicUI(true);
        return addOutput(
          <Text color="accent-color">Opening graphical contact form...</Text>
        );
      case "clear":
        clearTerminal();
        return;
      default:
        return addOutput(
          <Text color="red.400">
            Command not found: {trimmedCommand}. Type &apos;help&apos; to see available
            commands.
          </Text>
        );
    }
  };

  // This component doesn't render anything directly, it just processes commands
  return null;
};

export default CommandProcessor;
