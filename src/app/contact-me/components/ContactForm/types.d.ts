export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type CommandHistoryItem = string | React.ReactNode;

export interface TerminalInputProps {
  currentCommand: string;
  setCurrentCommand: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cliInputMode?: boolean;
  placeholder?: string;
}

export interface TerminalHistoryProps {
  commandHistory: CommandHistoryItem[];
}

export interface CliFormProps {
  cliStep: number;
  cliCurrentPrompt: string;
  currentCommand: string;
  setCurrentCommand: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface GuiFormProps {
  formSubmitEmail: string;
  validationSchema: any;
  setShowClassicUI: (value: boolean) => void;
  setSubmitted: (value: boolean) => void;
  THANK_YOU_URL: string;
}

export interface WelcomeMessageProps {
  processCommand: (command: string) => void;
}
