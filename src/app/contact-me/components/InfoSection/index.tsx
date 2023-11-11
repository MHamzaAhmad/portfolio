import CodeDisplay from "@/app/about-me/components/CodeDisplay";
import { FC } from "react";
import { contactInfo } from "./codes";

const InfoSection: FC = () => {
  return (
    <div className="px-4 pt-2">
      <CodeDisplay title="Contact Info" source={contactInfo} />
    </div>
  );
};

export default InfoSection;
