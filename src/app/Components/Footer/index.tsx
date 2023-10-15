'use client';
import { Icon, Text } from "@chakra-ui/react";
import MenuItem from "../Header/MenuItem";
import FooterItem from "./FooterItem";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <nav className="grid grid-cols-3 border-y border-y-border-color laptop:grid smallest:hidden">
        <div className="col-span-2 flex">
          <div className="text-center px-[1.38rem] py-[0.94rem] border-r border-r-border-color flex items-center">
            find me in:
          </div>
          <FooterItem child={<Icon fontSize="2rem" as={AiFillInstagram} />} />
          <FooterItem child={<Icon fontSize="2rem" as={AiFillLinkedin} />} />
        </div>
        <div className="col-span-1 flex justify-end">
          <FooterItem
            child={
              <div>
                <Text className="inline me-2">@username</Text>
                <Icon fontSize='2rem' as={AiFillGithub} />
              </div>
            }
            left
          />
        </div>
      </nav>
    </>
  );
};

export default Footer;
