"use client";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useState } from "react";

interface Props {
  name: string;
  route: string;
  leftBorder?: boolean;
}

const MenuItem: FC<Props> = ({ name, route, leftBorder }): ReactNode => {
  const currentPath = usePathname();
  const [path] = useState(currentPath);
  return (
    <div
      className={`text-center px-[1rem] ${
        leftBorder
          ? "border-l border-l-border-color "
          : "border-r border-r-border-color "
      } flex items-center hover:border-b hover:border-b-accent-color ${
        path === route ? "border-b-2 border-b-accent-color text-white" : ""
      }`}
    >
      {name}
    </div>
  );
};

export default MenuItem;
