"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Spinner, Flex, Box } from "@chakra-ui/react";
import { FaCode, FaBriefcase, FaUserAlt } from "react-icons/fa";

// Simple loading component with VSCode-like appearance
const VSCodeLoading = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    h="300px"
    w="full"
    className="vscode-panel"
  >
    <Spinner
      size="md"
      color="accent-color"
      thickness="2px"
      speed="0.8s"
      emptyColor="border-color"
    />
    <Box
      mt={4}
      fontSize="var(--font-size-xs)"
      color="foreground-color"
      fontFamily="var(--font-family-sans)"
    >
      Loading...
    </Box>
  </Flex>
);

// Dynamic imports with the appropriate loading states
const ProfileSection = dynamic(() => import("./components/ProfileSection"), {
  loading: () => <VSCodeLoading />,
  ssr: false,
});

const TimelineSection = dynamic(() => import("./components/TimelineSection"), {
  loading: () => <VSCodeLoading />,
  ssr: false,
});

const SkillsSection = dynamic(() => import("./components/SkillsSection"), {
  loading: () => <VSCodeLoading />,
  ssr: false,
});

const AboutMePage = () => {
  const [activeView, setActiveView] = useState("profile");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate the VSCode loading experience
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case "profile":
        return <ProfileSection />;
      case "experience":
        return <TimelineSection />;
      case "skills":
        return <SkillsSection />;
      default:
        return <ProfileSection />;
    }
  };

  if (!isLoaded) {
    return <VSCodeLoading />;
  }

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* VSCode-like tabs */}
      <div className="vscode-tabs">
        <div
          className={`vscode-tab ${activeView === "profile" ? "active" : ""}`}
          onClick={() => setActiveView("profile")}
        >
          <FaUserAlt className="inline-block mr-2" size={12} />
          Profile
        </div>
        <div
          className={`vscode-tab ${
            activeView === "experience" ? "active" : ""
          }`}
          onClick={() => setActiveView("experience")}
        >
          <FaBriefcase className="inline-block mr-2" size={12} />
          Experience
        </div>
        <div
          className={`vscode-tab ${activeView === "skills" ? "active" : ""}`}
          onClick={() => setActiveView("skills")}
        >
          <FaCode className="inline-block mr-2" size={12} />
          Skills
        </div>
      </div>

      {/* Content area */}
      <div className="flex-grow overflow-auto vscode-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutMePage;
