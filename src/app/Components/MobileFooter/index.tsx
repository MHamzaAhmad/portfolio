"use client";
import { Icon, Text } from "@chakra-ui/react";
import MenuItem from "../Header/MenuItem";
import FooterItem from "../Footer/FooterItem";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const MobileFooter = () => {
  return (
    <>
      <nav className="flex justify-between border-y border-y-border-color laptop:hidden w-full">
        <div className="text-center px-[1.38rem] py-[0.94rem] flex items-center">
          find me in:
        </div>
        <div className="flex">
          <FooterItem
            left
            child={<Icon fontSize="2rem" as={AiFillInstagram} />}
            redirectUrl="https://www.instagram.com/hamzaahmad.i/"
          />
          <FooterItem
            left
            child={<Icon fontSize="2rem" as={AiFillLinkedin} />}
            redirectUrl="https://www.linkedin.com/in/mhamza88/"
          />
          <FooterItem
            left
            child={<Icon fontSize="2rem" as={AiFillGithub} />}
            redirectUrl="https://github.com/MHamzaAhmad"
          />
        </div>
      </nav>
    </>
  );
};

export default MobileFooter;
