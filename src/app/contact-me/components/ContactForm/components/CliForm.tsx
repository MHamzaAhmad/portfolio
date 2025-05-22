"use client";
import { FC } from "react";
import { CliFormProps } from "../types";
import TerminalInput from "./TerminalInput";

const CliForm: FC<CliFormProps> = ({
  cliStep,
  cliCurrentPrompt,
  currentCommand,
  setCurrentCommand,
  handleKeyDown,
}) => {
  const getPlaceholder = () => {
    switch (cliStep) {
      case 1:
        return "Enter your name...";
      case 2:
        return "Enter your email...";
      case 3:
        return "Enter your message...";
      default:
        return "Type your response...";
    }
  };

  return (
    <TerminalInput
      currentCommand={currentCommand}
      setCurrentCommand={setCurrentCommand}
      handleKeyDown={handleKeyDown}
      cliInputMode={true}
      placeholder={getPlaceholder()}
    />
  );
};

export default CliForm;
