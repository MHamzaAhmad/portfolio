"use client";

import { FC } from "react";
import { Link, Text } from "@chakra-ui/react";
import { QuickLinkProps } from "../types";

const QuickLink: FC<QuickLinkProps> = ({
  href,
  icon,
  text,
  isExternal = false,
}) => {
  return (
    <Link
      href={href}
      isExternal={isExternal}
      display="flex"
      alignItems="center"
      color="foreground-color"
      _hover={{ color: "accent-color" }}
    >
      {icon}
      <Text>{text}</Text>
    </Link>
  );
};

export default QuickLink;
