"use client";

import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

export const ClientTypingAnimation = ({ texts }: { texts: string[] }) => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // VSCode-like typing animation with better timing
  useEffect(() => {
    const text = texts[currentTextIndex];

    // Control typing/deleting speed
    const typingSpeed = 60; // ms per character when typing
    const deletingSpeed = 30; // ms per character when deleting
    const pauseBeforeDelete = 1500; // pause before starting to delete
    const pauseBeforeNextPhrase = 800; // pause before typing next phrase

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (typedText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timer = setTimeout(() => {}, pauseBeforeNextPhrase);
      } else {
        timer = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (typedText.length === text.length) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      } else {
        timer = setTimeout(() => {
          setTypedText((prev) => prev + text.charAt(prev.length));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentTextIndex, typedText, isDeleting, texts]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // VSCode cursor blink rate

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <Box
      fontFamily="var(--font-family-mono)"
      fontSize="var(--font-size-xs)"
      color="accent-color"
      className="flex items-start"
      mt={1}
      pl={2}
      borderLeft="2px solid"
      borderColor="border-color"
      opacity={0.9}
      lineHeight="var(--line-height-tight)"
    >
      <Text as="span" color="foreground-color" mr={1}>
        {">"}
      </Text>
      <Text as="span" color="secondary-text-color" fontWeight="medium">
        {typedText}
        <Text
          as="span"
          display="inline-block"
          width="0.5em"
          height="1em"
          backgroundColor={showCursor ? "accent-color" : "transparent"}
          transition="background-color 0.05s"
          marginLeft="1px"
          position="relative"
          top="0.1em"
        >
          &nbsp;
        </Text>
      </Text>
    </Box>
  );
};
