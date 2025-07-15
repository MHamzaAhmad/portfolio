export interface LineNumbersProps {
  count: number;
}

export interface JsonPropertyProps {
  name: string;
  value: string;
  hasComma?: boolean;
  indentLevel?: number;
}

export interface JsonObjectProps {
  name: string;
  hasComma?: boolean;
  indentLevel?: number;
  children: React.ReactNode;
}

export interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isExternal?: boolean;
}

export interface ContactData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
  };
  social: {
    github: string;
    linkedin: string;
  };
  availability: string;
}
