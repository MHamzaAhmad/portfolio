"use client";
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { FaCheckCircle, FaArrowLeft, FaProjectDiagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  return (
    <Flex minH="80vh" align="center" justify="center" bg="code-background">
      <Box
        maxW="420px"
        w="full"
        p={8}
        bg="background-color"
        borderRadius="lg"
        boxShadow="0 4px 24px rgba(0,0,0,0.10)"
        textAlign="center"
      >
        <Icon as={FaCheckCircle} w={16} h={16} color="accent-color" mb={4} />
        <Text fontSize="2xl" fontWeight="bold" color="accent-color" mb={2}>
          Thank you!
        </Text>
        <Text color="foreground-color" fontSize="md" mb={4}>
          Your message has been received and delivered to my inbox.<br />
          I appreciate you reaching out and will get back to you as soon as possible (typically within 24-48 hours).
        </Text>
        <Text color="purple-accent" fontStyle="italic" fontSize="sm" mb={6}>
          In the meantime, feel free to explore my projects or send another message.
        </Text>
        <Flex gap={3} justify="center">
          <Button
            leftIcon={<FaArrowLeft />}
            variant="outline"
            borderColor="border-color"
            color="foreground-color"
            _hover={{
              bg: "code-background",
              borderColor: "accent-color",
              color: "accent-color",
              transform: "translateY(-1px)",
            }}
            onClick={() => router.push("/contact-me")}
            transition="all 0.2s"
          >
            Back to Contact
          </Button>
          <Button
            leftIcon={<FaProjectDiagram />}
            bg="accent-color"
            color="white"
            _hover={{
              bg: "light-accent-color",
              transform: "translateY(-1px)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
            onClick={() => router.push("/projects")}
            transition="all 0.2s"
          >
            View Projects
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
} 