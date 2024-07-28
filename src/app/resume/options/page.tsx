"use client";

import { RESUME_PFD } from "@/common/constants";
import Heading from "@/components/Base/Heading";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ResumeSelectOptions = () => {
  const router = useRouter();

  const downloadResume = async () => {
    try {
      const url = RESUME_PFD;
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
    <div className="flex flex-col items-center justify-center h-full gap-3 px-[1rem]">
      <Heading>Choose an option</Heading>
      <div>Do you want to view or download the resume?</div>
      <div className="flex"></div>
      <div className="flex gap-2">
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
      </div>
    </div>
  );
};

export default ResumeSelectOptions;
