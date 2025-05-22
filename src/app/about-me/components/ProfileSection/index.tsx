"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useCloudinary from "@/services/CloudinaryService";
import { Box, Flex, HStack, VStack, Button, Text } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ClientTypingAnimation } from "./ClientTypingAnimation";

// Component for showing line numbers
const LineNumbers = ({ count }: { count: number }) => (
  <Box
    w="30px"
    minW="30px"
    bg="background-color"
    color="foreground-color"
    fontFamily="var(--font-family-mono)"
    fontSize="var(--font-size-xs)"
    textAlign="right"
    opacity={0.5}
    pr={1}
    borderRight="1px solid"
    borderColor="border-color"
  >
    {Array.from({ length: count }).map((_, i) => (
      <Box key={i} py="0.15rem" lineHeight="var(--line-height-tight)">
        {i + 1}
      </Box>
    ))}
  </Box>
);

const ProfileSection = () => {
  const router = useRouter();
  const { getImgOptimized } = useCloudinary();
  const [activeTab, setActiveTab] = useState("about");

  const texts = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const handleContactClick = () => {
    router.push("/contact-me");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <Flex className="text-foreground-color text-sm leading-relaxed">
            <LineNumbers count={15} />
            <Box flex="1" p={2}>
              <p className="vscode-code">
                <span className="text-accent-color">
                  // Go language representation
                </span>
                <br />
                <span className="text-purple-accent">package</span>{" "}
                <span className="text-secondary-text-color">main</span>
                <br />
                <br />
                <span className="text-purple-accent">import</span>{" "}
                <span className="text-secondary-text-color">(</span>
                <br />
                <span className="ml-4 text-accent-color">"fmt"</span>
                <br />
                <span className="text-secondary-text-color">)</span>
                <br />
                <br />
                <span className="text-purple-accent">type</span>{" "}
                <span className="text-secondary-text-color">Engineer</span>{" "}
                <span className="text-purple-accent">struct</span>{" "}
                <span className="text-secondary-text-color">{"{"}</span>
                <br />
                <span className="ml-4">
                  Name <span className="text-purple-accent">string</span>
                </span>
                <br />
                <span className="ml-4">
                  Skills <span className="text-purple-accent">[]string</span>
                </span>
                <br />
                <span className="ml-4">
                  YearsOfExperience{" "}
                  <span className="text-purple-accent">int</span>
                </span>
                <br />
                <span className="text-secondary-text-color">{"}"}</span>
                <br />
                <br />
                <span className="text-purple-accent">func</span>{" "}
                <span className="text-secondary-text-color">main()</span>{" "}
                <span className="text-secondary-text-color">{"{"}</span>
                <br />
                <span className="ml-4">me := Engineer{"{"}</span>
                <br />
                <span className="ml-8">
                  Name: <span className="text-accent-color">"Hamza Ahmad"</span>
                  ,
                </span>
                <br />
                <span className="ml-8">
                  Skills: []<span className="text-purple-accent">string</span>
                  {"{"}
                  <span className="text-accent-color">
                    "Full-stack", "React", "Node.js", "Flutter"
                  </span>
                  {"}"},
                </span>
                <br />
                <span className="ml-8">
                  YearsOfExperience:{" "}
                  <span className="text-secondary-text-color">4</span>,
                </span>
                <br />
                <span className="ml-4">{"}"}</span>
                <br />
                <span className="ml-4">fmt.Println(me)</span>
                <br />
                <span className="text-secondary-text-color">{"}"}</span>
              </p>
            </Box>
          </Flex>
        );
      case "expertise":
        return (
          <Flex>
            <LineNumbers count={22} />
            <Box flex="1" p={2}>
              <p className="vscode-code">
                <span className="text-accent-color">
                  // TypeScript representation of skills
                </span>
                <br />
                <span className="text-purple-accent">interface</span>{" "}
                <span className="text-secondary-text-color">Skill</span> {"{"}
                <br />
                <span className="ml-4">
                  name: <span className="text-purple-accent">string</span>;
                </span>
                <br />
                <span className="ml-4">
                  level: <span className="text-purple-accent">number</span>;{" "}
                  <span className="text-accent-color">// 1-5</span>
                </span>
                <br />
                <span className="ml-4">
                  details?: <span className="text-purple-accent">string</span>;
                </span>
                <br />
                {"}"}
                <br />
                <br />
                <span className="text-purple-accent">type</span>{" "}
                <span className="text-secondary-text-color">SkillCategory</span>{" "}
                = <span className="text-purple-accent">'frontend'</span> |{" "}
                <span className="text-purple-accent">'backend'</span> |{" "}
                <span className="text-purple-accent">'database'</span> |{" "}
                <span className="text-purple-accent">'devops'</span>;
                <br />
                <br />
                <span className="text-purple-accent">class</span>{" "}
                <span className="text-secondary-text-color">SkillSet</span>{" "}
                {"{"}
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">private</span> _frontend:{" "}
                  <span className="text-secondary-text-color">Skill</span>[] = [
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'React & Next.js'</span>
                    , level:{" "}
                    <span className="text-secondary-text-color">5</span> {"}"},{" "}
                  </span>
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'TypeScript'</span>,
                    level: <span className="text-secondary-text-color">4</span>{" "}
                    {"}"},{" "}
                  </span>
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'Flutter'</span>, level:{" "}
                    <span className="text-secondary-text-color">4</span> {"}"}
                  </span>
                  <br />
                  <span className="ml-4">];</span>
                </span>
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">private</span> _backend:{" "}
                  <span className="text-secondary-text-color">Skill</span>[] = [
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'Node.js'</span>, level:{" "}
                    <span className="text-secondary-text-color">5</span> {"}"},{" "}
                  </span>
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'NestJS'</span>, level:{" "}
                    <span className="text-secondary-text-color">4</span> {"}"},{" "}
                  </span>
                  <br />
                  <span className="ml-8">
                    {"{"} name:{" "}
                    <span className="text-accent-color">'GraphQL & REST'</span>,
                    level: <span className="text-secondary-text-color">4</span>{" "}
                    {"}"}
                  </span>
                  <br />
                  <span className="ml-4">];</span>
                </span>
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">public</span>{" "}
                  <span className="text-secondary-text-color">getSkills</span>
                  (category:{" "}
                  <span className="text-secondary-text-color">
                    SkillCategory
                  </span>
                  ): <span className="text-secondary-text-color">Skill</span>[]{" "}
                  {"{"}
                  <br />
                  <span className="ml-8">
                    <span className="text-purple-accent">return</span> category
                    === <span className="text-accent-color">'frontend'</span> ?{" "}
                    <span className="text-purple-accent">this</span>._frontend :{" "}
                    <span className="text-purple-accent">this</span>._backend;
                  </span>
                  <br />
                  <span className="ml-4">{"}"}</span>
                </span>
                <br />
                {"}"}
              </p>
            </Box>
          </Flex>
        );
      case "interests":
        return (
          <Flex className="text-foreground-color text-sm leading-relaxed">
            <LineNumbers count={16} />
            <Box flex="1" p={2}>
              <p className="vscode-code">
                <span className="text-accent-color">
                  # Python representation of interests
                </span>
                <br />
                <br />
                <span className="text-purple-accent">class</span>{" "}
                <span className="text-secondary-text-color">
                  DeveloperInterests
                </span>
                :
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">def</span>{" "}
                  <span className="text-secondary-text-color">__init__</span>
                  (self):
                </span>
                <br />
                <span className="ml-8">self.tech_interests = [</span>
                <br />
                <span className="ml-12">
                  <span className="text-accent-color">
                    "Exploring emerging technologies"
                  </span>
                  ,
                </span>
                <br />
                <span className="ml-12">
                  <span className="text-accent-color">
                    "Contributing to open-source"
                  </span>
                  ,
                </span>
                <br />
                <span className="ml-12">
                  <span className="text-accent-color">
                    "System optimization"
                  </span>
                  ,
                </span>
                <br />
                <span className="ml-12">
                  <span className="text-accent-color">
                    "Creating intuitive UIs"
                  </span>
                </span>
                <br />
                <span className="ml-8">]</span>
                <br />
                <span className="ml-8">
                  self.learning_focus = {"{"}
                  <span className="text-accent-color">'current'</span>: [
                  <span className="text-accent-color">'AI integration'</span>,{" "}
                  <span className="text-accent-color">'System Design'</span>],
                  <span className="text-accent-color">'upcoming'</span>:{" "}
                  <span className="text-accent-color">
                    'Cloud Architecture'
                  </span>
                  {"}"}
                </span>
                <br />
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">def</span>{" "}
                  <span className="text-secondary-text-color">
                    display_interests
                  </span>
                  (self):
                </span>
                <br />
                <span className="ml-8">
                  <span className="text-purple-accent">for</span> interest{" "}
                  <span className="text-purple-accent">in</span>{" "}
                  self.tech_interests:
                </span>
                <br />
                <span className="ml-12">
                  <span className="text-purple-accent">print</span>(
                  <span className="text-accent-color">
                    f"- {"{"}interest{"}"}"
                  </span>
                  )
                </span>
                <br />
                <br />
                <span className="ml-4">
                  <span className="text-purple-accent">def</span>{" "}
                  <span className="text-secondary-text-color">
                    get_current_focus
                  </span>
                  (self):
                </span>
                <br />
                <span className="ml-8">
                  <span className="text-purple-accent">return</span>{" "}
                  self.learning_focus[
                  <span className="text-accent-color">'current'</span>]
                </span>
              </p>
            </Box>
          </Flex>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vscode-panel h-full">
      <Flex direction={{ base: "column", md: "row" }} h="full">
        {/* Sidebar - Similar to VSCode's explorer */}
        <Box
          w={{ base: "full", md: "220px" }}
          borderRight="1px solid"
          borderColor="border-color"
          p={4}
        >
          <VStack align="center" spacing={4}>
            <Box
              className="w-[150px] h-[150px] rounded-sm overflow-hidden border border-border-color"
              position="relative"
            >
              <Image
                src={getImgOptimized({
                  name: "portfolio/assets/flg811xzifnw3ocgxwxm",
                })}
                alt="Hamza Ahmad"
                width={150}
                height={150}
                className="object-cover object-bottom"
                priority
              />
            </Box>

            <Box textAlign="center">
              <Text
                fontSize="var(--font-size-sm)"
                fontWeight="medium"
                color="secondary-text-color"
                letterSpacing="var(--letter-spacing-normal)"
                mb={1}
                fontFamily="var(--font-family-mono)"
              >
                Hamza Ahmad
              </Text>
              <ClientTypingAnimation texts={texts} />
            </Box>

            <HStack spacing={4} mt={2}>
              <a
                href="https://github.com/hamza-ahmad-hamza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-color hover:text-accent-color transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com/in/hamza-ahmad-hamza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-color hover:text-accent-color transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://twitter.com/hamza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-color hover:text-accent-color transition-colors"
              >
                <FaTwitter size={16} />
              </a>
              <button
                onClick={handleContactClick}
                className="text-foreground-color hover:text-accent-color transition-colors"
              >
                <FaEnvelope size={16} />
              </button>
            </HStack>

            <Button
              onClick={handleContactClick}
              size="sm"
              w="full"
              variant="outline"
              borderColor="accent-color"
              color="accent-color"
              _hover={{ bg: "code-background" }}
              mt={2}
              borderRadius={0}
            >
              Contact Me
            </Button>
          </VStack>
        </Box>

        {/* Main content area - Like VSCode editor */}
        <Box flex="1" overflow="auto">
          {/* VSCode-like tab bar */}
          <div className="vscode-tabs text-xs">
            <div
              className={`vscode-tab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              about.go
            </div>
            <div
              className={`vscode-tab ${
                activeTab === "expertise" ? "active" : ""
              }`}
              onClick={() => setActiveTab("expertise")}
            >
              experience.ts
            </div>
            <div
              className={`vscode-tab ${
                activeTab === "interests" ? "active" : ""
              }`}
              onClick={() => setActiveTab("interests")}
            >
              interests.py
            </div>
          </div>

          {/* Content area */}
          <Box p={4} className="vscode-content">
            {renderContent()}
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default ProfileSection;
