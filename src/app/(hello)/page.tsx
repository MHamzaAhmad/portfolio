import CodeLine from "@/components/Base/CodeLine";
import React from "react";

const Hello: React.FC = () => {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 w-full h-full">
      <div className="col-span-1 flex flex-col justify-center laptop:items-end items-center">
        <div className="px-4">
          <div className="text-25 text-sec-text-color">{"Hi all. I am"}</div>
          <div className="text-heading text-sec-text-color">Muhammad Hamza</div>
          <div className="text-two text-purple-text">
            {"> FullStack Software Engineer"}
          </div>
          <div className="mt-[5.07rem]">{"// welcome to my humble abode"}</div>
          <div>{"// you can also visit me here too"}</div>
          <CodeLine
            code={'const githubLink = "https://github.com/MHamzaAhmad"'}
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
