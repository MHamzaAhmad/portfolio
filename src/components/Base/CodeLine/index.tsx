"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import Prism from "prismjs";
Prism.languages.javascript.rest = /[a-zA-Z_$][a-zA-Z0-9_$]*/;

interface CodeLineProps {
  code: string;
  language?: string;
}

const CodeLine: React.FC<CodeLineProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      const html = Prism.highlight(
        code,
        Prism.languages[language || "js"],
        language || "js"
      );
      codeRef.current.innerHTML = html;
    }
  }, []);

  return (
    <pre>
      <code ref={codeRef}>{code}</code>
    </pre>
  );
};

export default CodeLine;
