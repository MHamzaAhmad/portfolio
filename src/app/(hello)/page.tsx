import React from "react";

const Hello: React.FC = () => {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 w-full h-full">
      <div className="col-span-1 flex flex-col justify-center laptop:items-end items-center">
        <div className="px-4">
          <div className="text-25 text-sec-text-color">{"Hi all. I am"}</div>
          <div className="text-heading text-sec-text-color">Hamza Ahmad</div>
          <div className="text-two text-purple-text">
            {"> FullStack Software Engineer"}
          </div>
          <div className="mt-[5.07rem]">{"// welcome to my humble abode"}</div>
          <div className="mt-3">{"// i can create platform of your dreams..."}</div>
          <div>{"// just like i have done in the past"}</div>
          <div>{"// lets connect! and create something amazing"}</div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
