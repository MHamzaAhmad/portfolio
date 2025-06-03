"use client";

import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { JsonObjectProps } from "../types";

const JsonObject: FC<JsonObjectProps> = ({
  name,
  children,
  hasComma = true,
  indentLevel = 1,
}) => {
  const marginLeft = `${indentLevel * 4}px`;
  const childIndentMargin = `${(indentLevel + 1) * 4}px`;

  return (
    <Box ml={marginLeft}>
      <Text display="inline" color="accent-color">
        &quot;{name}&quot;
      </Text>
      <Text display="inline" color="foreground-color">
        :{" "}
      </Text>
      <Text display="inline" color="purple-accent">
        {"{"}
      </Text>

      {children}

      <Text display="inline" color="purple-accent" ml={marginLeft}>
        {"}"}
      </Text>
      {hasComma && (
        <Text display="inline" color="foreground-color">
          ,
        </Text>
      )}
    </Box>
  );
};

export default JsonObject;
