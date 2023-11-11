"use client";
import { FC, ReactNode } from "react";

interface FooterItemProps {
  child: ReactNode;
  left?: boolean;
  redirectUrl?: string;
}

const FooterItem: FC<FooterItemProps> = ({ child, left, redirectUrl }) => {
  return (
    <div
      className={`text-center px-[1rem] ${
        left
          ? "border-l border-l-border-color "
          : "border-r border-r-border-color "
      } flex items-center hover:border-b hover:border-b-accent-color`}
    >
      <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
        {child}
      </a>
    </div>
  );
};

export default FooterItem;
