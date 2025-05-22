"use client";
import { FC } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaKeyboard, FaTerminal } from "react-icons/fa";
import { WelcomeMessageProps } from "../types";

const WelcomeMessage: FC<WelcomeMessageProps> = ({ processCommand }) => {
  return (
    <>
      <Text color="accent-color" fontWeight="bold">
        Welcome to my Contact Terminal!
      </Text>
      <Text mt={1} mb={2}>
        Type <span className="text-purple-accent">help</span> to see available
        commands.
      </Text>
      <Flex gap={2} mb={2}>
        <Button
          size="xs"
          leftIcon={<FaTerminal size={10} />}
          onClick={() => processCommand("contact")}
          bg="accent-color"
          color="secondary-text-color"
          _hover={{
            bg: "light-accent-color",
            transform: "translateY(-1px)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          transition="all 0.2s"
        >
          CLI contact form
        </Button>
        <Button
          size="xs"
          leftIcon={<FaKeyboard size={10} />}
          onClick={() => processCommand("gui")}
          variant="outline"
          borderColor="border-color"
          color="foreground-color"
          _hover={{
            bg: "code-background",
            borderColor: "accent-color",
            color: "accent-color",
            transform: "translateY(-1px)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          transition="all 0.2s"
        >
          GUI contact form
        </Button>
      </Flex>
    </>
  );
};

export default WelcomeMessage;
