"use client";
import { Button, Box, Text, Flex, Code } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { FaTerminal, FaCheck, FaSpinner } from "react-icons/fa";

interface Props {
  onNewMessage: () => void;
}

const ThankYou: FC<Props> = ({ onNewMessage }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Message received. Delivery confirmed.";
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500);

    // Simulate typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <Box fontFamily="var(--font-family-mono)" fontSize="var(--font-size-xs)">
      {showSpinner ? (
        <Flex direction="column" align="center" justify="center" py={4}>
          <FaSpinner
            className="animate-spin"
            size={24}
            color="var(--accent-color)"
          />
          <Text mt={3} color="accent-color">
            Processing message...
          </Text>
        </Flex>
      ) : (
        <>
          <Box
            mb={4}
            p={4}
            bg="code-background"
            border="1px solid"
            borderColor="accent-color"
            borderRadius="4px"
          >
            <Flex align="center" mb={3}>
              <Box
                color="accent-color"
                mr={2}
                bg="background-color"
                p={2}
                borderRadius="full"
              >
                <FaCheck />
              </Box>
              <Text
                color="secondary-text-color"
                fontSize="var(--font-size-sm)"
                fontWeight="bold"
              >
                {typedText}
              </Text>
            </Flex>

            <Box
              p={3}
              bg="background-color"
              color="foreground-color"
              borderRadius="md"
              mb={3}
            >
              <Text fontFamily="var(--font-family-mono)" mb={2}>
                <span className="text-accent-color">$</span> echo $?
              </Text>
              <Text>0</Text>
            </Box>

            <Box mb={3}>
              <Text color="foreground-color">
                <span className="text-accent-color">$</span> cat message-log.txt
              </Text>
              <Box
                mt={2}
                p={2}
                bg="background-color"
                borderRadius="md"
                borderLeft="3px solid"
                borderColor="accent-color"
              >
                <Text>[SUCCESS] Message delivered to inbox</Text>
                <Text>[INFO] Response time: typically 24-48 hours</Text>
              </Box>
            </Box>

            <Box
              color="purple-accent"
              fontStyle="italic"
              fontSize="var(--font-size-xs)"
            >
              <Text>{/* Thank you for reaching out! */}</Text>
              <Text>{/* I&apos;ll get back to you as soon as possible */}</Text>
            </Box>
          </Box>

          <Flex gap={2}>
            <Button
              onClick={onNewMessage}
              size="sm"
              variant="outline"
              borderColor="border-color"
              color="foreground-color"
              _hover={{
                bg: "code-background",
                borderColor: "accent-color",
                color: "accent-color",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
              leftIcon={<FaTerminal />}
              borderRadius="2px"
            >
              clear-terminal
            </Button>
            <Code
              color="purple-accent"
              bg="code-background"
              p={2}
              fontSize="var(--font-size-xs)"
            >
              Press any key to continue...
            </Code>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default ThankYou;
