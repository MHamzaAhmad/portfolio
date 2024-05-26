"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumePage = () => {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-dae28.appspot.com/o/hamza_resume_may.pdf?alt=media&token=948ade1a-8998-44c8-b104-15f10f820b21" />
      </Worker>
    </>
  );
};

export default ResumePage;
