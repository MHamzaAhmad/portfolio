'use client';
import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import NavDrawer from "../NavDrawer";

const MobileHeader: FC = (): ReactNode => {
  const [isOpen, setIsOpen] = useState(false);

  const menuIcon = () => {
    return <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
    >
      <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96" />
    </svg>;
  }
  return (
    <nav className="flex border-y border-y-border-color h-[3.51195rem] p-[1.13rem] items-center justify-between laptop:hidden">
      <div className="">hamza-ahmad</div>
        <button onClick={() => setIsOpen(true)}>
          {menuIcon()}
      </button>
      <NavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default MobileHeader;
