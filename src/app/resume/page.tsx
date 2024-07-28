"use client";
import { RESUME_PFD } from "@/common/constants";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumePage = () => {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={RESUME_PFD} />
      </Worker>
    </>
  );
};

export default ResumePage;
