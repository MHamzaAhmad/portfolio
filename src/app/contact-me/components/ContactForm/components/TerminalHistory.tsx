"use client";
import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { TerminalHistoryProps } from "../types";

const TerminalHistory: FC<TerminalHistoryProps> = ({ commandHistory }) => {
  return (
    <Box mb={4}>
      {commandHistory.map((entry, index) => (
        <Box key={index} mb={2}>
          {typeof entry === "string" ? (
            <Text
              color="secondary-text-color"
              fontFamily="var(--font-family-mono)"
            >
              {entry}
            </Text>
          ) : (
            entry
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TerminalHistory;
