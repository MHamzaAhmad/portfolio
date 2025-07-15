"use client";

import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import JsonProperty from "./JsonProperty";
import JsonObject from "./JsonObject";
import { ContactData } from "../types";

interface JsonViewProps {
  data: ContactData;
}

const JsonView: FC<JsonViewProps> = ({ data }) => {
  return (
    <Box color="foreground-color">
      <Text color="purple-accent">{"{"}</Text>

      {/* Name */}
      <JsonProperty name="name" value={data.name} />

      {/* Title */}
      <JsonProperty name="title" value={data.title} />

      {/* Contact */}
      <JsonObject name="contact">
        <JsonProperty
          name="email"
          value={data.contact.email}
          indentLevel={2}
        />
        <JsonProperty
          name="phone"
          value={data.contact.phone}
          indentLevel={2}
          hasComma={false}
        />
      </JsonObject>

      {/* Social */}
      <JsonObject name="social">
        <JsonProperty
          name="github"
          value={data.social.github}
          indentLevel={2}
        />
        <JsonProperty
          name="linkedin"
          value={data.social.linkedin}
          indentLevel={2}
        />
      </JsonObject>

      {/* Availability */}
      <JsonProperty
        name="availability"
        value={data.availability}
        hasComma={false}
      />

      <Text color="purple-accent">{"}"}</Text>
    </Box>
  );
};

export default JsonView;
