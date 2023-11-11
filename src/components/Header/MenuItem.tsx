"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode, use, useEffect, useState } from "react";

interface Props {
  name: string;
  route: string;
  leftBorder?: boolean;
}

const MenuItem: FC<Props> = ({ name, route, leftBorder }): ReactNode => {
  const currentPath = usePathname();
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);
  return (
    <Link
      href={route}
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
      {name}
    </Link>
  );
};

export default MenuItem;
