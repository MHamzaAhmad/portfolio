"use client";

import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { LineNumbersProps } from "../types";

const LineNumbers: FC<LineNumbersProps> = ({ count }) => (
  <Box
    w="30px"
    minW="30px"
    bg="background-color"
    color="foreground-color"
    fontFamily="var(--font-family-mono)"
    fontSize="var(--font-size-xs)"
    textAlign="right"
    opacity={0.5}
    pr={1}
    borderRight="1px solid"
    borderColor="border-color"
  >
    {Array.from({ length: count }).map((_, i) => (
      <Box key={i} py="0.15rem" lineHeight="var(--line-height-tight)">
        {i + 1}
      </Box>
    ))}
  </Box>
);

export default LineNumbers;
