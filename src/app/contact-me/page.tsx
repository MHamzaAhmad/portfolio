"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, Tooltip } from "@chakra-ui/react";
import ContactForm from "./components/ContactForm";
import InfoSection from "./components/InfoSection";
import { FaTerminal, FaCode, FaTimes } from "react-icons/fa";

const ContactMePage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to handle tab closing with safety check
  const handleCloseTab = (tab: 'terminal' | 'info') => {
    // If trying to close the only visible tab, don't allow it
    if (tab === 'terminal' && !showInfo) return;
    if (tab === 'info' && !showTerminal) return;

    // Otherwise toggle the requested tab
    if (tab === 'terminal') setShowTerminal(false);
    if (tab === 'info') setShowInfo(false);
  };

  // Function to handle tab opening
  const handleOpenTab = (tab: 'terminal' | 'info') => {
    if (tab === 'terminal') setShowTerminal(true);
    if (tab === 'info') setShowInfo(true);
  };

  if (!isClient) {
    return (
      <Box className="vscode-panel" p={4}>
        <Text>Loading contact terminal...</Text>
      </Box>
    );
  }

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* VSCode-like tabs */}
      <div className="vscode-tabs">
        <div
          className={`vscode-tab ${showTerminal ? "active" : ""}`}
          onClick={() => handleOpenTab('terminal')}
        >
          <FaTerminal className="inline-block mr-2" size={12} />
          <span>contact-terminal.sh</span>
          {showTerminal && (
            <span
              className="close-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseTab('terminal');
              }}
            >
              <FaTimes size={10} />
            </span>
          )}
        </div>
        <div
          className={`vscode-tab ${showInfo ? "active" : ""}`}
          onClick={() => handleOpenTab('info')}
        >
          <FaCode className="inline-block mr-2" size={12} />
          <span>contact-info.json</span>
          {showInfo && (
            <span
              className="close-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseTab('info');
              }}
            >
              <FaTimes size={10} />
            </span>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-grow overflow-auto">
        {/* Flexible layout that adjusts based on visible panels */}
        <Flex h="full" className="vscode-split-view">
          {showTerminal && (
            <Box
              className="vscode-panel"
              h="full"
              bg="background-color"
              fontFamily="var(--font-family-mono)"
              flex={showInfo ? "1" : "1 1 100%"}
              borderRight={showInfo ? "1px solid" : "none"}
              borderColor="border-color"
            >
              <Box
                bg="code-background"
                p={4}
                h="full"
                overflow="auto"
                fontSize="var(--font-size-xs)"
                position="relative"
              >
                {/* Terminal Content */}
                <Box className="terminal-content">
                  <ContactForm />
                </Box>
              </Box>
            </Box>
          )}

          {showInfo && (
            <Box
              className="vscode-panel"
              h="full"
              bg="background-color"
              flex={showTerminal ? "1" : "1 1 100%"}
            >
              <InfoSection />
            </Box>
          )}
        </Flex>
      </div>

      {/* Add the CSS for the close icon */}
      <style jsx global>{`
        .vscode-tab {
          position: relative;
          display: flex;
          align-items: center;
        }

        .close-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
          width: 16px;
          height: 16px;
          border-radius: 3px;
          opacity: 0.7;
        }

        .close-icon:hover {
          background-color: rgba(255, 255, 255, 0.1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ContactMePage;
