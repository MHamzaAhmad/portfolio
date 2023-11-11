import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Chip: FC<Props> = ({ children }) => {
  return (
    <div className="m-1 inline-block text-[0.8rem] border py-1 px-2 rounded-2xl border-border-color text-purple-text">
      {children}
    </div>
  );
};

export default Chip;
