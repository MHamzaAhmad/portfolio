"use client";

import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import QuickLink from "./QuickLink";
import { ContactData } from "../types";

interface QuickLinksProps {
  data: ContactData;
}

const QuickLinks: FC<QuickLinksProps> = ({ data }) => {
  return (
    <Box
      mt={6}
      p={3}
      borderLeft="2px solid"
      borderColor="accent-color"
      bg="background-color"
    >
      <Text color="accent-color" mb={2}>
        {/* Quick Links */}
      </Text>
      <Flex direction="column" gap={2}>
        <QuickLink
          href={`mailto:${data.contact.email}`}
          icon={<FaEnvelope size={14} style={{ marginRight: "8px" }} />}
          text={data.contact.email}
        />
        <QuickLink
          href={`tel:${data.contact.phone}`}
          icon={<FaPhone size={14} style={{ marginRight: "8px" }} />}
          text={data.contact.phone}
        />
        <QuickLink
          href={data.social.github}
          icon={<FaGithub size={14} style={{ marginRight: "8px" }} />}
          text="github.com/hamza-ahmad-hamza"
          isExternal
        />
        <QuickLink
          href={data.social.linkedin}
          icon={<FaLinkedin size={14} style={{ marginRight: "8px" }} />}
          text="linkedin.com/in/hamza-ahmad-hamza"
          isExternal
        />
      </Flex>
    </Box>
  );
};

export default QuickLinks;
