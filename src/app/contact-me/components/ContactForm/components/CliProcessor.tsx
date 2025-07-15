"use client";
import { FC, useState, useCallback, ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight, FaCog } from "react-icons/fa";

interface CliProcessorProps {
  addOutput: (output: ReactNode) => void;
  submitForm: (name: string, email: string, message: string) => void;
}

const CliProcessor = ({ addOutput, submitForm }: CliProcessorProps) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const startCliContact = useCallback(() => {
    setStep(1);

    addOutput(
      <>
        <Text color="accent-color" fontWeight="bold" mb={1}>
          <FaCog className="inline-block mr-2 animate-spin" />
          Starting Contact CLI...
        </Text>
        <Box
          pl={4}
          borderLeft="2px solid"
          borderColor="accent-color"
          py={1}
          mb={2}
        >
          <Text color="foreground-color">Step 1/3: Enter your name</Text>
        </Box>
        <Text color="secondary-text-color">What&apos;s your name?</Text>
      </>
    );
  }, [addOutput]);

  const processCliInput = useCallback(
    (input: string) => {
      switch (step) {
        case 1: // Name
          if (!input.trim()) {
            addOutput(
              <Text color="red.400">
                Name cannot be empty. Please try again.
              </Text>
            );
            return false;
          }
          setName(input);
          setStep(2);
          addOutput(
            <>
              <Box
                pl={4}
                borderLeft="2px solid"
                borderColor="accent-color"
                py={1}
                mb={2}
              >
                <Text color="foreground-color">Step 2/3: Enter your email</Text>
              </Box>
              <Text color="secondary-text-color">What&apos;s your email?</Text>
            </>
          );
          return true;

        case 2: // Email
          if (!input.trim() || !input.includes("@")) {
            addOutput(
              <Text color="red.400">Please enter a valid email address.</Text>
            );
            return false;
          }
          setEmail(input);
          setStep(3);
          addOutput(
            <>
              <Box
                pl={4}
                borderLeft="2px solid"
                borderColor="accent-color"
                py={1}
                mb={2}
              >
                <Text color="foreground-color">
                  Step 3/3: Enter your message
                </Text>
              </Box>
              <Text color="secondary-text-color">Your message:</Text>
            </>
          );
          return true;

        case 3: // Message
          if (!input.trim()) {
            addOutput(
              <Text color="red.400">
                Message cannot be empty. Please try again.
              </Text>
            );
            return false;
          }
          setMessage(input);
          setStep(4);

          // Show summary and confirmation
          addOutput(
            <>
              <Box
                pl={4}
                borderLeft="2px solid"
                borderColor="accent-color"
                py={1}
                mb={2}
              >
                <Text color="accent-color" fontWeight="bold">
                  Message Summary:
                </Text>
                <Text color="foreground-color">Name: {name}</Text>
                <Text color="foreground-color">Email: {email}</Text>
                <Text color="foreground-color">Message: {input}</Text>
              </Box>
              <Flex mt={2} gap={2}>
                <Button
                  size="xs"
                  onClick={() => submitForm(name, email, input)}
                  colorScheme="blue"
                  bg="accent-color"
                  color="secondary-text-color"
                  _hover={{
                    bg: "light-accent-color",
                    transform: "translateY(-1px)",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                  transition="all 0.2s"
                  leftIcon={<FaArrowRight size={10} />}
                >
                  confirm-and-send
                </Button>
                <Button
                  size="xs"
                  onClick={() => {
                    setStep(1);
                    addOutput(
                      <>
                        <Text color="foreground-color">Restarting form...</Text>
                        <Box
                          pl={4}
                          borderLeft="2px solid"
                          borderColor="accent-color"
                          py={1}
                          mb={2}
                        >
                          <Text color="foreground-color">
                            Step 1/3: Enter your name
                          </Text>
                        </Box>
                        <Text color="secondary-text-color">
                          What&apos;s your name?
                        </Text>
                      </>
                    );
                  }}
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
                >
                  restart
                </Button>
              </Flex>
            </>
          );
          return true;

        default:
          return false;
      }
    },
    [step, name, email, addOutput, submitForm]
  );

  return {
    step,
    processCliInput,
    startCliContact,
    getCurrentPrompt: () => {
      switch (step) {
        case 1:
          return "What&apos;s your name?";
        case 2:
          return "What&apos;s your email?";
        case 3:
          return "Your message:";
        default:
          return "";
      }
    },
    isCliActive: step > 0,
    resetCli: () => {
      setStep(0);
      setName("");
      setEmail("");
      setMessage("");
    },
  };
};

export default CliProcessor;
