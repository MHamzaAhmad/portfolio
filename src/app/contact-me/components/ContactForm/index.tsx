"use client";
import { FC, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import * as yup from "yup";
import ThankYou from "../ThankYou";
import { CommandHistoryItem } from "./types";
import { FaArrowRight, FaCog } from "react-icons/fa";

// Import custom components
import {
  TerminalHistory,
  TerminalInput,
  WelcomeMessage,
  GuiForm,
  CliForm
} from "./components";

// Get base URL from environment variables or default to localhost
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://hamza-ahmad-hamza.vercel.app";
const THANK_YOU_PATH = "/thank-you";
const THANK_YOU_URL = `${BASE_URL}${THANK_YOU_PATH}`;

const ContactForm: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>(
    []
  );
  const [currentCommand, setCurrentCommand] = useState("");
  const [showClassicUI, setShowClassicUI] = useState(false);
  const initialMessageShownRef = useRef(false);

  // CLI Form State
  const [cliMode, setCliMode] = useState(false);
  const [cliStep, setCliStep] = useState(0);
  const [cliName, setCliName] = useState("");
  const [cliEmail, setCliEmail] = useState("");
  const [cliMessage, setCliMessage] = useState("");
  const [cliInputMode, setCliInputMode] = useState(false);
  const [cliCurrentPrompt, setCliCurrentPrompt] = useState("");

  // Replace your email here
  const formSubmitEmail = "hamzabuzz88@gmail.com";

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().max(500).required("Message is required"),
  });

  const addCommandToHistory = useCallback((command: string) => {
    setCommandHistory((prev) => [...prev, `$ ${command}`]);
    setCurrentCommand("");
  }, []);

  const addOutput = useCallback((output: ReactNode) => {
    setCommandHistory((prev) => [...prev, output]);
  }, []);

  const clearTerminal = useCallback(() => {
    setCommandHistory([]);
    setShowClassicUI(false);
    setCliMode(false);
    setCliStep(0);
    initialMessageShownRef.current = false; // Reset this flag so welcome message shows again
  }, []);

  const onNew = useCallback(() => {
    setSubmitted(false);
    setShowClassicUI(false);
    setCliMode(false);
    setCliStep(0);
    setCliName("");
    setCliEmail("");
    setCliMessage("");
    setCliInputMode(false);
    addCommandToHistory("clear");
  }, [addCommandToHistory]);

  const startCliContact = useCallback(() => {
    setCliMode(true);
    setCliStep(1);
    setCliInputMode(true);
    setCliCurrentPrompt("What's your name?");

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
        <Text color="secondary-text-color">What's your name?</Text>
      </>
    );
  }, [addOutput]);

  const submitCliForm = useCallback(() => {
    // Create a hidden form and submit it
    const form = document.createElement("form");
    form.method = "POST"; // Explicitly set POST method
    form.action = `https://formsubmit.co/${formSubmitEmail}`;

    // Add hidden fields
    const addHiddenField = (name: string, value: string) => {
      const field = document.createElement("input");
      field.type = "hidden";
      field.name = name;
      field.value = value;
      form.appendChild(field);
    };

    addHiddenField("name", cliName);
    addHiddenField("email", cliEmail);
    addHiddenField("message", cliMessage);
    addHiddenField("_subject", "New Portfolio Contact Form Submission");
    addHiddenField("_template", "table");
    addHiddenField("_next", THANK_YOU_URL);
    addHiddenField("_captcha", "true");

    document.body.appendChild(form);
    console.log("Submitting form via POST");
    form.submit();

    // Show thank you message
    setSubmitted(true);
  }, [cliName, cliEmail, cliMessage, formSubmitEmail]);

  const handleCliInput = useCallback(
    (input: string) => {
      // Add input to history with prompt
      addCommandToHistory(`${cliCurrentPrompt} ${input}`);

      // Process based on current step
      switch (cliStep) {
        case 1: // Name
          if (!input.trim()) {
            addOutput(
              <Text color="red.400">
                Name cannot be empty. Please try again.
              </Text>
            );
            return;
          }
          setCliName(input);
          setCliStep(2);
          setCliCurrentPrompt("What's your email?");
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
              <Text color="secondary-text-color">What's your email?</Text>
            </>
          );
          break;

        case 2: // Email
          if (!input.trim() || !input.includes("@")) {
            addOutput(
              <Text color="red.400">Please enter a valid email address.</Text>
            );
            return;
          }
          setCliEmail(input);
          setCliStep(3);
          setCliCurrentPrompt("Your message:");
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
          break;

        case 3: // Message
          if (!input.trim()) {
            addOutput(
              <Text color="red.400">
                Message cannot be empty. Please try again.
              </Text>
            );
            return;
          }
          setCliMessage(input);
          setCliInputMode(false);
          setCliStep(4);

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
                <Text color="foreground-color">Name: {cliName}</Text>
                <Text color="foreground-color">Email: {cliEmail}</Text>
                <Text color="foreground-color">Message: {input}</Text>
              </Box>
              <Flex mt={2} gap={2}>
                <Button
                  size="xs"
                  onClick={submitCliForm}
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
                    setCliStep(1);
                    setCliInputMode(true);
                    setCliCurrentPrompt("What's your name?");
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
                          What's your name?
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
          break;
      }
    },
    [
      cliStep,
      cliCurrentPrompt,
      addCommandToHistory,
      addOutput,
      cliName,
      cliEmail,
      submitCliForm,
    ]
  );

  const processCommand = useCallback(
    (cmd: string) => {
      const command = cmd.trim().toLowerCase();

      // If in CLI input mode, handle input differently
      if (cliInputMode) {
        handleCliInput(command);
        return;
      }

      // Add command to history
      addCommandToHistory(command);

      // Process command
      switch (command) {
        case "help":
          return addOutput(
            <>
              <Text color="accent-color" fontWeight="bold" mb={1}>
                Available Commands:
              </Text>
              <Text>
                <span className="text-purple-accent">contact</span> - Start CLI
                contact form
              </Text>
              <Text>
                <span className="text-purple-accent">gui</span> - Open graphical
                contact form
              </Text>
              <Text>
                <span className="text-purple-accent">about</span> - About the
                developer
              </Text>
              <Text>
                <span className="text-purple-accent">clear</span> - Clear
                terminal
              </Text>
              <Text>
                <span className="text-purple-accent">help</span> - Show this
                help
              </Text>
            </>
          );
        case "about":
          return addOutput(
            <>
              <Text color="accent-color" fontWeight="bold" mb={1}>
                About Me:
              </Text>
              <Text mb={1}>
                Full-stack software engineer with 4+ years of experience
                building modern web and mobile applications.
              </Text>
              <Text>
                Passionate about clean code, performance optimization, and
                user-centered design.
              </Text>
            </>
          );
        case "contact":
          startCliContact();
          return;
        case "gui":
          setShowClassicUI(true);
          return addOutput(
            <Text color="accent-color">Opening graphical contact form...</Text>
          );
        case "clear":
          clearTerminal();
          return;
        default:
          return addOutput(
            <Text color="red.400">
              Command not found: {command}. Type 'help' to see available
              commands.
            </Text>
          );
      }
    },
    [
      addCommandToHistory,
      addOutput,
      handleCliInput,
      cliInputMode,
      startCliContact,
      clearTerminal,
    ]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && currentCommand) {
        e.preventDefault();
        processCommand(currentCommand);
      }
    },
    [currentCommand, processCommand]
  );

  // Add initial greeting only once
  useEffect(() => {
    // Only add greeting if it hasn't been shown yet
    if (!initialMessageShownRef.current) {
      initialMessageShownRef.current = true;
      addOutput(<WelcomeMessage processCommand={processCommand} />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="terminal-container">
      {/* Terminal history */}
      <TerminalHistory commandHistory={commandHistory} />

      {/* Custom style for terminal inputs */}
      <style jsx global>{`
        .terminal-input {
          caret-color: var(--accent-color);
        }
        .terminal-input:focus,
        .terminal-input:hover {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* Terminal input */}
      {!submitted && !showClassicUI && (
        <>
          {cliInputMode ? (
            <CliForm
              cliStep={cliStep}
              cliCurrentPrompt={cliCurrentPrompt}
              currentCommand={currentCommand}
              setCurrentCommand={setCurrentCommand}
              handleKeyDown={handleKeyDown}
            />
          ) : (
            !cliMode && (
              <TerminalInput
                currentCommand={currentCommand}
                setCurrentCommand={setCurrentCommand}
                handleKeyDown={handleKeyDown}
                placeholder="Type a command..."
              />
            )
          )}
        </>
      )}

      {/* GUI Contact Form */}
      {showClassicUI && !submitted && (
        <GuiForm
          formSubmitEmail={formSubmitEmail}
          validationSchema={validationSchema}
          setShowClassicUI={setShowClassicUI}
          setSubmitted={setSubmitted}
          THANK_YOU_URL={THANK_YOU_URL}
        />
      )}

      {/* Thank You message */}
      {submitted && (
        <Box className="terminal-thankyou" mt={4}>
          <ThankYou onNewMessage={onNew} />
        </Box>
      )}
    </div>
  );
};

export default ContactForm;
