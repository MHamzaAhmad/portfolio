import React, { ReactElement, ReactNode } from "react";
import { IconCloudComponent } from "./components/IconCloud";
import Meteors from "@/components/magicui/meteors";
import BoxReveal from "@/components/magicui/box-reveal";
import PulsatingButton from "@/components/ui/pulsating-button";
import { Spacer } from "@chakra-ui/react";
import ConnectButton from "./components/ConnectButton";
import RetroGrid from "@/components/magicui/retro-grid";

interface RevealProps {
  children: ReactElement;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  return <BoxReveal boxColor="#fea55f">{children}</BoxReveal>;
};

const Hello: React.FC = () => {
  return (
    <>
      <div className="hidden laptop:inline-block">
        <Meteors number={40} />
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 w-full h-full">
        <div className="col-span-1 flex flex-col justify-center laptop:items-end items-center">
          <div className="px-4">
            <Reveal>
              <div className="text-25 text-sec-text-color">Hi all. I am</div>
            </Reveal>
            <Reveal>
              <div className="text-heading text-sec-text-color">
                Hamza Ahmad
              </div>
            </Reveal>
            <Reveal>
              <div className="text-two text-purple-text">
                {"> FullStack Software Engineer"}
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-[5.07rem]">
                {"// welcome to my humble abode"}
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-3">
                {"// i can create platform of your dreams..."}
              </div>
            </Reveal>
            <Reveal>
              <div>{"// just like i have done in the past"}</div>
            </Reveal>
            <Reveal>
              <div>{"// lets connect! and create something amazing"}</div>
            </Reveal>
            <Spacer height={10} />
            <ConnectButton />
          </div>
        </div>
        <div className="col-span-1 hidden justify-center laptop:items-end items-center laptop:flex">
          <IconCloudComponent />
        </div>
        <RetroGrid />
      </div>
    </>
  );
};

export default Hello;
