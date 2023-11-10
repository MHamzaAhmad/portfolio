import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Heading: FC<Props> = ({ children, className }) => {
  return (
    <div className={`text-25 text-purple-text ${className}`}>{children}</div>
  );
};

export default Heading;
