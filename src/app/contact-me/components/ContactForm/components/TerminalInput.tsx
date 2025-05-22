"use client";
import { FC } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import { TerminalInputProps } from "../types";

const TerminalInput: FC<TerminalInputProps> = ({
  currentCommand,
  setCurrentCommand,
  handleKeyDown,
  cliInputMode = false,
  placeholder = "Type a command...",
}) => {
  return (
    <Flex align="center" mb={4}>
      <Text color="accent-color" mr={2}>
        {cliInputMode ? ">" : "$"}
      </Text>
      <Input
        value={currentCommand}
        onChange={(e) => setCurrentCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        border="none"
        outline="none"
        _hover={{
          border: "none",
          outline: "none",
          bg: "transparent",
        }}
        _focus={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          bg: "transparent",
        }}
        bg="transparent"
        fontFamily="var(--font-family-mono)"
        fontSize="var(--font-size-xs)"
        color="foreground-color"
        pl={1}
        autoFocus
        className="terminal-input"
      />
    </Flex>
  );
};

export default TerminalInput;
