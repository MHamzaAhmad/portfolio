"use client";

import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { LineNumbers, JsonView, QuickLinks } from "./components";
import { contactData } from "./data";

const InfoSection: FC = () => {
  return (
    <Box p={4} h="full">
      <Box className="vscode-panel" h="full">
        <Flex
          h="full"
          fontFamily="var(--font-family-mono)"
          fontSize="var(--font-size-xs)"
        >
          <LineNumbers count={20} />

          <Box flex="1" p={4} bg="code-background" overflowY="auto">
            {/* JSON Structure */}
            <JsonView data={contactData} />

            {/* Quick links */}
            <QuickLinks data={contactData} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default InfoSection;
