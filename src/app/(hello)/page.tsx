"use client";

import React, { ReactElement, Suspense, useEffect, useState } from "react";
import { Spacer } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import BoxReveal from "@/components/magicui/box-reveal";
import RetroGrid from "@/components/magicui/retro-grid";

// Client components
import ConnectButton from "./components/ConnectButton";

// Only import the meteor effect on the client side
const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
  loading: () => null,
});

// Import Interactive Terminal component
const InteractiveTerminal = dynamic(
  () => import("./components/InteractiveTerminal"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-sec-text-color">
        Loading terminal...
      </div>
    ),
  }
);

// Simple text content component that can be server-rendered
function TextContent() {
  return (
    <>
      <div className="text-25 text-sec-text-color">Hi all. I am</div>
      <div className="text-heading text-sec-text-color mt-2">Hamza Ahmad</div>
      <div className="text-two text-purple-text mt-2">
        {"> FullStack Software Engineer"}
      </div>
      <div className="mt-[5.07rem]">{"// Welcome to my creative space"}</div>
      <div className="mt-3">
        {"// Crafting innovative solutions for your next big idea"}
      </div>
      <div className="mt-1">
        {"// Turning visions into reality with experience and passion"}
      </div>
      <div className="mt-1">
        {"// Let's collaborate and build something extraordinary"}
      </div>
    </>
  );
}

// Single animated reveal component to wrap all text instead of multiple reveals
function AnimatedContent() {
  "use client";
  return (
    <BoxReveal boxColor="#fea55f" duration={0.5} width="100%">
      <div>
        <TextContent />
      </div>
    </BoxReveal>
  );
}

export default function Hello() {
  const [isMounted, setIsMounted] = useState(false);

  // Only enable the meteor effect after mounting to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="hidden laptop:block">
        <Meteors number={15} />
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 w-full h-full">
        <div className="col-span-1 flex flex-col justify-center laptop:justify-center laptop:items-start items-center">
          <div className="px-4 laptop:pl-[15%] w-full">
            <AnimatedContent />
            <Spacer height={10} />
            <ConnectButton />
          </div>
        </div>
        <div className="col-span-1 hidden justify-center laptop:items-center items-center laptop:flex overflow-hidden">
          <div className="px-4 w-full flex justify-center">
            <Suspense
              fallback={
                <div className="w-full min-w-[420px] max-w-[600px] h-[400px] flex items-center justify-center text-sec-text-color">
                  Loading terminal...
                </div>
              }
            >
              <InteractiveTerminal />
            </Suspense>
          </div>
        </div>

        {/* Mobile Terminal (visible only on smaller screens) */}
        <div className="col-span-1 flex justify-center items-center laptop:hidden mt-8 px-2 overflow-hidden">
          <div className="w-full flex justify-center">
            <Suspense
              fallback={
                <div className="w-full h-[300px] flex items-center justify-center text-sec-text-color">
                  Loading terminal...
                </div>
              }
            >
              <InteractiveTerminal />
            </Suspense>
          </div>
        </div>

        <RetroGrid />
      </div>
    </>
  );
}
