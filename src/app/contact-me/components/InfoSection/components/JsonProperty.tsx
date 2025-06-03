"use client";

import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { JsonPropertyProps } from "../types";

const JsonProperty: FC<JsonPropertyProps> = ({
  name,
  value,
  hasComma = true,
  indentLevel = 1,
}) => {
  const marginLeft = `${indentLevel * 4}px`;

  return (
    <Box ml={marginLeft}>
      <Text display="inline" color="accent-color">
        &quot;{name}&quot;
      </Text>
      <Text display="inline" color="foreground-color">
        :{" "}
      </Text>
      <Text display="inline" color="secondary-text-color">
        &quot;{value}&quot;
      </Text>
      {hasComma && (
        <Text display="inline" color="foreground-color">
          ,
        </Text>
      )}
    </Box>
  );
};

export default JsonProperty;
