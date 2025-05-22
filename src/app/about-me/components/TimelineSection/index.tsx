"use client";

import { useState, useEffect } from "react";
import { Box, Text, Flex, Badge, Code } from "@chakra-ui/react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAngleRight,
  FaAngleDown,
  FaCode,
  FaFolder,
  FaFolderOpen,
  FaFile,
  FaCalendarAlt,
  FaBuilding,
  FaLaptopCode,
} from "react-icons/fa";

interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  period: string;
  description: string[];
  type: "work" | "education";
  technologies?: string[];
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

const TimelineSection = () => {
  const [workExpanded, setWorkExpanded] = useState(true);
  const [educationExpanded, setEducationExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [items, setItems] = useState<TimelineItem[]>([
    {
      id: "job1",
      title: "FullStack Software Engineer",
      company: "Septem Systems",
      period: "Sep 2023 - Present",
      description: [
        "Leading development of enterprise-grade applications",
        "Implementing microservices architecture with Kubernetes",
        "Optimizing CI/CD pipelines for improved deployment efficiency",
      ],
      technologies: ["React", "Node.js", "Kubernetes", "AWS", "TypeScript"],
      type: "work",
      expanded: true,
    },
    {
      id: "job2",
      title: "Software Engineer",
      company: "Devsinc",
      period: "Jun 2022 - Sep 2023",
      description: [
        "Developed responsive web applications with React and TypeScript",
        "Built backend APIs using Node.js and Express",
        "Implemented real-time features with WebSockets",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
      type: "work",
    },
    {
      id: "job3",
      title: "Software Engineer",
      company: "Freelance",
      period: "Sep 2020 - Apr 2022",
      description: [
        "Created mobile applications using Flutter",
        "Developed custom client solutions for diverse business needs",
        "Managed full project lifecycle from conception to deployment",
      ],
      technologies: ["Flutter", "Firebase", "Node.js", "REST APIs"],
      type: "work",
    },
    {
      id: "edu1",
      title: "Bachelor in Computer Science",
      company: "University of Engineering and Technology, Lahore",
      period: "2016 - 2020",
      description: [
        "Specialized in software engineering and database systems",
        "Graduated with honors",
      ],
      type: "education",
    },
  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set default selected item
    setSelectedItem(items[0]);
  }, []);

  const toggleItem = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      setSelectedItem(item);
    }

    setItems(
      items.map((item) => (item.id === id ? { ...item, expanded: true } : item))
    );
  };

  const toggleWorkSection = () => {
    setWorkExpanded(!workExpanded);
  };

  const toggleEducationSection = () => {
    setEducationExpanded(!educationExpanded);
  };

  if (!isClient) {
    return (
      <Box className="vscode-panel" p={4}>
        <Text>Loading timeline...</Text>
      </Box>
    );
  }

  // Get work and education items
  const workItems = items.filter((item) => item.type === "work");
  const educationItems = items.filter((item) => item.type === "education");

  // Calculate content line count for the editor
  const getContentLineCount = (item: TimelineItem | null) => {
    if (!item) return 10;

    // Basic content: title, company, period
    let count = 10;

    // Add lines for description
    count += item.description.length * 2;

    // Add lines for technologies
    if (item.technologies) {
      count += item.technologies.length + 4;
    }

    return count;
  };

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
              EXPERIENCE EXPLORER
            </Text>
          </Flex>

          {/* Main explorer tree */}
          <Box p={0}>
            {/* Work Experience Section - Folder */}
            <Box>
              <Flex
                p={2}
                cursor="pointer"
                align="center"
                onClick={toggleWorkSection}
                _hover={{ bg: "code-background" }}
              >
                <Box color="accent-color" mr={2}>
                  {workExpanded ? (
                    <FaFolderOpen size={12} />
                  ) : (
                    <FaFolder size={12} />
                  )}
                </Box>
                <Text fontWeight="medium">WORK EXPERIENCE</Text>
                <Box ml="auto" color="foreground-color">
                  {workExpanded ? (
                    <FaAngleDown size={10} />
                  ) : (
                    <FaAngleRight size={10} />
                  )}
                </Box>
              </Flex>

              {/* Work Items */}
              {workExpanded && (
                <Box>
                  {workItems.map((item) => (
                    <Flex
                      key={item.id}
                      p={2}
                      pl={4}
                      cursor="pointer"
                      align="center"
                      onClick={() => toggleItem(item.id)}
                      _hover={{ bg: "code-background" }}
                      bg={
                        selectedItem?.id === item.id
                          ? "code-background"
                          : "transparent"
                      }
                      borderLeft={
                        selectedItem?.id === item.id
                          ? "2px solid"
                          : "2px solid transparent"
                      }
                      borderColor={
                        selectedItem?.id === item.id
                          ? "accent-color"
                          : "transparent"
                      }
                    >
                      <Box
                        color={
                          selectedItem?.id === item.id
                            ? "accent-color"
                            : "foreground-color"
                        }
                        mr={2}
                      >
                        <FaLaptopCode size={10} />
                      </Box>
                      <Text
                        fontWeight={
                          selectedItem?.id === item.id ? "medium" : "normal"
                        }
                        color="secondary-text-color"
                        isTruncated
                      >
                        {item.title}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Box>

            {/* Education Section - Folder */}
            <Box>
              <Flex
                p={2}
                cursor="pointer"
                align="center"
                onClick={toggleEducationSection}
                _hover={{ bg: "code-background" }}
              >
                <Box color="purple-accent" mr={2}>
                  {educationExpanded ? (
                    <FaFolderOpen size={12} />
                  ) : (
                    <FaFolder size={12} />
                  )}
                </Box>
                <Text fontWeight="medium">EDUCATION</Text>
                <Box ml="auto" color="foreground-color">
                  {educationExpanded ? (
                    <FaAngleDown size={10} />
                  ) : (
                    <FaAngleRight size={10} />
                  )}
                </Box>
              </Flex>

              {/* Education Items */}
              {educationExpanded && (
                <Box>
                  {educationItems.map((item) => (
                    <Flex
                      key={item.id}
                      p={2}
                      pl={4}
                      cursor="pointer"
                      align="center"
                      onClick={() => toggleItem(item.id)}
                      _hover={{ bg: "code-background" }}
                      bg={
                        selectedItem?.id === item.id
                          ? "code-background"
                          : "transparent"
                      }
                      borderLeft={
                        selectedItem?.id === item.id
                          ? "2px solid"
                          : "2px solid transparent"
                      }
                      borderColor={
                        selectedItem?.id === item.id
                          ? "purple-accent"
                          : "transparent"
                      }
                    >
                      <Box
                        color={
                          selectedItem?.id === item.id
                            ? "purple-accent"
                            : "foreground-color"
                        }
                        mr={2}
                      >
                        <FaFile size={10} />
                      </Box>
                      <Text
                        fontWeight={
                          selectedItem?.id === item.id ? "medium" : "normal"
                        }
                        color="secondary-text-color"
                        isTruncated
                      >
                        {item.title}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {/* VSCode Editor-like content area */}
        {selectedItem && (
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
                <Box
                  mr={2}
                  color={
                    selectedItem.type === "work"
                      ? "accent-color"
                      : "purple-accent"
                  }
                >
                  {selectedItem.type === "work" ? (
                    <FaLaptopCode size={10} />
                  ) : (
                    <FaFile size={10} />
                  )}
                </Box>
                <Text color="secondary-text-color">
                  {selectedItem.title}.json
                </Text>
              </Box>
            </Flex>

            {/* Content with line numbers */}
                      <Flex fontFamily="var(--font-family-mono)" fontSize="var(--font-size-xs)">
            <LineNumbers count={getContentLineCount(selectedItem)} />

            <Box flex="1" p={2} bg="code-background">
                {/* Content as JSON structure */}
                <Box mb={3} color="foreground-color">
                  <Box color="purple-accent">{"{"}</Box>

                  {/* Title */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "title"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedItem.title}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Company */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "company"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedItem.company}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Period */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "period"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedItem.period}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Type */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "type"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      :{" "}
                    </Text>
                    <Text display="inline" color="secondary-text-color">
                      "{selectedItem.type}"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      ,
                    </Text>
                  </Box>

                  {/* Description */}
                  <Box ml={4}>
                    <Text display="inline" color="accent-color">
                      "description"
                    </Text>
                    <Text display="inline" color="foreground-color">
                      : [
                    </Text>
                    {selectedItem.description.map((desc, i) => (
                      <Box key={i} ml={8}>
                        <Text display="inline" color="secondary-text-color">
                          "{desc}"
                        </Text>
                        {i < selectedItem.description.length - 1 && (
                          <Text display="inline" color="foreground-color">
                            ,
                          </Text>
                        )}
                      </Box>
                    ))}
                    <Box ml={4}>
                      <Text display="inline" color="foreground-color">
                        ],
                      </Text>
                    </Box>
                  </Box>

                  {/* Technologies */}
                  {selectedItem.technologies && (
                    <Box ml={4}>
                      <Text display="inline" color="accent-color">
                        "technologies"
                      </Text>
                      <Text display="inline" color="foreground-color">
                        : [
                      </Text>
                      {selectedItem.technologies.map((tech, i) => (
                        <Box key={i} ml={8}>
                          <Text display="inline" color="secondary-text-color">
                            "{tech}"
                          </Text>
                          {i < selectedItem.technologies.length - 1 && (
                            <Text display="inline" color="foreground-color">
                              ,
                            </Text>
                          )}
                        </Box>
                      ))}
                      <Box ml={4}>
                        <Text display="inline" color="foreground-color">
                          ]
                        </Text>
                      </Box>
                    </Box>
                  )}

                  <Box color="purple-accent">{"}"}</Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default TimelineSection;
