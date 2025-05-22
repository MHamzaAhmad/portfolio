"use client";

import { useState, useEffect } from "react";
import { Box, Text, Flex, Code, Badge } from "@chakra-ui/react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaAngleDown,
  FaAngleRight,
  FaFolder,
  FaFolderOpen,
  FaFile,
} from "react-icons/fa";

interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  description: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  expanded?: boolean;
}

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

const SkillsSection = () => {
  const [categories, setCategories] = useState<SkillCategory[]>([
    {
      id: "frontend",
      name: "Frontend",
      icon: <FaCode />,
      expanded: true,
      skills: [
        {
          id: "skill1",
          name: "React & Next.js",
          level: 5,
          description:
            "Building modern web applications with React and Next.js",
        },
        {
          id: "skill2",
          name: "TypeScript",
          level: 4,
          description: "Type-safe JavaScript development",
        },
        {
          id: "skill3",
          name: "Flutter",
          level: 4,
          description: "Cross-platform mobile app development",
        },
        {
          id: "skill4",
          name: "CSS/SCSS",
          level: 4,
          description: "Modern styling and responsive design",
        },
        {
          id: "skill5",
          name: "UI/UX",
          level: 4,
          description: "Creating intuitive user interfaces",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <FaServer />,
      expanded: true,
      skills: [
        {
          id: "skill6",
          name: "Node.js",
          level: 5,
          description: "Server-side JavaScript runtime",
        },
        {
          id: "skill7",
          name: "Express/NestJS",
          level: 4,
          description: "Web frameworks for building APIs",
        },
        {
          id: "skill8",
          name: "GraphQL",
          level: 4,
          description: "Modern API query language",
        },
        {
          id: "skill9",
          name: "Python",
          level: 3,
          description: "Scripting and automation",
        },
        {
          id: "skill10",
          name: "Go",
          level: 3,
          description: "High-performance backend services",
        },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: <FaDatabase />,
      skills: [
        {
          id: "skill11",
          name: "MongoDB",
          level: 4,
          description: "NoSQL document database",
        },
        {
          id: "skill12",
          name: "PostgreSQL",
          level: 4,
          description: "Relational database",
        },
        {
          id: "skill13",
          name: "Redis",
          level: 3,
          description: "In-memory data structure store",
        },
        {
          id: "skill14",
          name: "Elasticsearch",
          level: 3,
          description: "Search and analytics engine",
        },
        {
          id: "skill15",
          name: "ORM/ODM",
          level: 4,
          description: "Data modeling and access",
        },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <FaCloud />,
      skills: [
        {
          id: "skill16",
          name: "Docker",
          level: 4,
          description: "Containerization",
        },
        {
          id: "skill17",
          name: "Kubernetes",
          level: 3,
          description: "Container orchestration",
        },
        {
          id: "skill18",
          name: "AWS",
          level: 4,
          description: "Cloud services",
        },
        {
          id: "skill19",
          name: "CI/CD",
          level: 4,
          description: "Automated testing and deployment",
        },
        {
          id: "skill20",
          name: "Monitoring",
          level: 3,
          description: "System observation and alerting",
        },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      icon: <FaTools />,
      skills: [
        {
          id: "skill21",
          name: "Git & GitHub",
          level: 5,
          description: "Version control",
        },
        {
          id: "skill22",
          name: "VS Code",
          level: 5,
          description: "Code editing",
        },
        {
          id: "skill23",
          name: "Jira/Agile",
          level: 4,
          description: "Project management",
        },
        {
          id: "skill24",
          name: "Testing",
          level: 4,
          description: "Unit, integration, and E2E testing",
        },
        {
          id: "skill25",
          name: "Performance",
          level: 4,
          description: "Web performance optimization",
        },
      ],
    },
  ]);

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set default selected skill
    if (categories.length > 0 && categories[0].skills.length > 0) {
      setSelectedSkill(categories[0].skills[0]);
    }
  }, []);

  const toggleCategoryExpanded = (id: string) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, expanded: !category.expanded }
          : category
      )
    );
  };

  const selectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  // Calculate content line count for the editor
  const getContentLineCount = (skill: Skill | null) => {
    if (!skill) return 10;
    // Basic JSON structure plus description and level visualization
    return 15;
  };

  // Convert skill level to visual representation
  const getSkillLevelVisualization = (level: number) => {
    const filled = Array(level).fill("■").join("");
    const empty = Array(5 - level)
      .fill("□")
      .join("");
    return filled + empty;
  };

  if (!isClient) {
    return (
      <Box className="vscode-panel" p={4}>
        <Text>Loading skills...</Text>
      </Box>
    );
  }

  return (
    <Box className="vscode-panel" h="full">
      <Flex h="full">
        {/* VSCode Explorer-like sidebar */}
        <Box
          w="220px"
          minW="220px"
          h="full"
          fontFamily="var(--font-family-mono)"
          fontSize="var(--font-size-xs)"
          borderRight="1px solid"
          borderColor="border-color"
          overflowY="auto"
        >
          {/* Header - like EXPLORER in VSCode */}
          <Flex
            p={2}
            bg="background-color"
            borderBottom="1px solid"
            borderColor="border-color"
            justify="space-between"
            align="center"
          >
            <Text
              className="vscode-section-title"
              letterSpacing="var(--letter-spacing-wide)"
              fontSize="var(--font-size-xs)"
              fontFamily="var(--font-family-sans)"
            >
              SKILLS EXPLORER
            </Text>
          </Flex>

          {/* Skill categories */}
          <Box p={0}>
            {categories.map((category) => (
              <Box key={category.id}>
                {/* Category header */}
                <Flex
                  p={2}
                  cursor="pointer"
                  align="center"
                  onClick={() => toggleCategoryExpanded(category.id)}
                  _hover={{ bg: "code-background" }}
                >
                  <Box color="accent-color" mr={2}>
                    {category.expanded ? (
                      <FaFolderOpen size={12} />
                    ) : (
                      <FaFolder size={12} />
                    )}
                  </Box>
                  <Text fontWeight="medium" fontSize="var(--font-size-xs)">
                    {category.name.toUpperCase()}
                  </Text>
                  <Box ml="auto" color="foreground-color">
                    {category.expanded ? (
                      <FaAngleDown size={10} />
                    ) : (
                      <FaAngleRight size={10} />
                    )}
                  </Box>
                </Flex>

                {/* Skills list */}
                {category.expanded && (
                  <Box>
                    {category.skills.map((skill) => (
                      <Flex
                        key={skill.id}
                        p={2}
                        pl={4}
                        cursor="pointer"
                        align="center"
                        onClick={() => selectSkill(skill)}
                        _hover={{ bg: "code-background" }}
                        bg={
                          selectedSkill?.id === skill.id
                            ? "code-background"
                            : "transparent"
                        }
                        borderLeft={
                          selectedSkill?.id === skill.id
                            ? "2px solid"
                            : "2px solid transparent"
                        }
                        borderColor={
                          selectedSkill?.id === skill.id
                            ? "accent-color"
                            : "transparent"
                        }
                      >
                        <Box
                          color={
                            selectedSkill?.id === skill.id
                              ? "accent-color"
                              : "foreground-color"
                          }
                          mr={2}
                        >
                          <FaFile size={10} />
                        </Box>
                        <Text
                          fontWeight={
                            selectedSkill?.id === skill.id ? "medium" : "normal"
                          }
                          color="secondary-text-color"
                          isTruncated
                        >
                          {skill.name}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                )}
              </Box>
            ))}

            {/* Currently Learning Section */}
            <Box mt={4} p={2}>
              <Text className="vscode-section-title" mb={2}>
                LEARNING
              </Text>
              <Flex wrap="wrap" gap={1} mt={1}>
                {["AI/ML", "Web3", "System Design", "UI/UX"].map((item) => (
                  <Badge
                    key={item}
                    fontSize="var(--font-size-xs)"
                    bg="code-background"
                    color="foreground-color"
                    borderRadius="sm"
                    px={1}
                    py={0.5}
                    mb={1}
                    fontFamily="var(--font-family-sans)"
                  >
                    {item}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </Box>
        </Box>

        {/* VSCode Editor-like content area */}
        {selectedSkill && (
          <Box flex="1" h="full" overflowY="auto">
            {/* Tab bar */}
            <Flex
              h="30px"
              bg="background-color"
              borderBottom="1px solid"
              borderColor="border-color"
              align="center"
            >
              <Box
                h="full"
                px={3}
                bg="code-background"
                borderRight="1px solid"
                borderColor="border-color"
                display="flex"
                alignItems="center"
                fontSize="var(--font-size-xs)"
                fontFamily="var(--font-family-sans)"
              >
                <Box mr={2} color="accent-color">
                  <FaFile size={10} />
                </Box>
                <Text color="secondary-text-color">
                  {selectedSkill.name
                    .toLowerCase()
                    .replace(/[&./\\()+ -]+/g, "_")}
                  .json
                </Text>
              </Box>
            </Flex>

            {/* Content with line numbers */}
            <Flex
              fontFamily="var(--font-family-mono)"
              fontSize="var(--font-size-xs)"
            >
              <LineNumbers count={getContentLineCount(selectedSkill)} />

              <Box flex="1" p={2} bg="code-background">
                {/* Content as JSON structure */}
                <Box mb={3} color="foreground-color">
                  <Box color="purple-accent">{"{"}</Box>

                  {/* Name */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "name"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedSkill.name}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Level */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "level"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      {selectedSkill.level}
                    </Text>
                    <Text display="inline" color="foreground-color">
                      , // {getSkillLevelVisualization(selectedSkill.level)}
                    </Text>
                  </Box>

                  {/* Description */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "description"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedSkill.description}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Category */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "category"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "
                      {categories.find((c) =>
                        c.skills.some((s) => s.id === selectedSkill.id)
                      )?.name || ""}
                      "
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Proficiency */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "proficiency"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "
                      {selectedSkill.level === 5
                        ? "Expert"
                        : selectedSkill.level === 4
                        ? "Advanced"
                        : selectedSkill.level === 3
                        ? "Proficient"
                        : selectedSkill.level === 2
                        ? "Intermediate"
                        : "Beginner"}
                      "
                    </Text>
                  </Box>

                  <Box color="purple-accent">{"}"}</Box>
                </Box>

                {/* Skill visualization */}
                <Box
                  mt={4}
                  p={3}
                  borderLeft="2px solid"
                  borderColor="accent-color"
                  bg="code-background"
                >
                  <Text color="accent-color" mb={2}>
                    // Proficiency Scale
                  </Text>
                  <Text fontSize="var(--font-size-xs)" color="foreground-color">
                    ■■■■■ Expert | ■■■■□ Advanced | ■■■□□ Proficient | ■■□□□
                    Intermediate | ■□□□□ Beginner
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default SkillsSection;
