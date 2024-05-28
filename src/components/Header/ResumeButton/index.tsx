"use client";
import {
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Portal } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  leftBorder?: boolean;
}

const route = "/resume";

const ResumeButton: FC<Props> = ({ leftBorder }): ReactNode => {
  const currentPath = usePathname();
  const [path, setPath] = useState(currentPath);
  const initialFocusRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  const downloadResume = async () => {
    try {
      const url =
        "https://firebasestorage.googleapis.com/v0/b/portfolio-dae28.appspot.com/o/hamza_resume_may.pdf?alt=media&token=948ade1a-8998-44c8-b104-15f10f820b21";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "hamza_resume.pdf";
      link.click();
      window.URL.revokeObjectURL(link.href); // Clean up URL object after download
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <button
          className={`text-center px-[1rem] ${
            leftBorder
              ? "border-l border-l-border-color "
              : "border-r border-r-border-color "
          } flex items-center hover:border-b hover:border-b-accent-color ${
            path === route
              ? "border-b-2 border-b-accent-color text-sec-text-color"
              : ""
          }`}
        >
          _resume
        </button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          bg="var(--code-background)"
          color="blue.800"
          borderColor="var(--border-color)"
        >
          <PopoverHeader pt={4} border="0">
            Do you want to view or download the resume?
          </PopoverHeader>
          <PopoverArrow
            bg="var(--code-background)"
            borderColor="var(--border-color)"
          />
          <PopoverCloseButton />
          <PopoverFooter border="0" pb={4} className="flex justify-end gap-3">
            <motion.button
              className="bg-accent-color p-2 text-[0.8rem] rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.8 }}
              onClick={downloadResume}
            >
              download
            </motion.button>
            <motion.button
              className="bg-accent-color p-2 text-[0.8rem] rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                router.push("/resume");
              }}
            >
              view
            </motion.button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ResumeButton;
