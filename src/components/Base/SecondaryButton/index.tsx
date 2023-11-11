import Link from "next/link";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  route: string;
  className?: string;
}

const SecondaryButton: FC<Props> = ({ children, route, className }) => {
  return (
    <Link
      className={`inline-block py-[0.625rem] px-[0.875rem] text-sec-text-color bg-light-grey text-[0.875rem] rounded-lg hover:bg-transparent hover:border-border-color border border-light-grey box-border ${className}`}
      href={route}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
