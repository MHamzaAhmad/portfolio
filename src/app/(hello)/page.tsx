import React, { ReactElement, ReactNode } from "react";
import { IconCloudComponent } from "./components/IconCloud";
import Meteors from "@/components/magicui/meteors";
import BoxReveal from "@/components/magicui/box-reveal";

interface RevealProps {
  children: ReactElement;
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  return <BoxReveal boxColor="#fea55f">{children}</BoxReveal>;
};

const Hello: React.FC = () => {
  return (
    <>
      <Meteors number={40} />
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
          </div>
        </div>
        <div className="col-span-1 flex justify-center laptop:items-end items-center">
          <IconCloudComponent />
        </div>
      </div>
    </>
  );
};

export default Hello;
