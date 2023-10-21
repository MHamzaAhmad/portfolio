import CodeLine from "@/components/Base/CodeLine";
import React from "react";
import SnippetScroll from "./components/SnippetScroll";
import { url } from "inspector";

const Hello: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 laptop:grid-cols-2 w-full h-full"
      style={{
        backgroundImage: `url(
            "https://d14nscjm3gg2rb.cloudfront.net/home_background_blurs.svg"
          )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "60%",
        backgroundPosition: "right 0px top 10%",
      }}
    >
      <div className="col-span-1 flex flex-col justify-center items-end">
        <div>
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
      <div className="col-span-1 flex justify-center items-center">
        <SnippetScroll />
      </div>
    </div>
  );
};

export default Hello;
