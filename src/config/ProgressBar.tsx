"use client";
import { Next13ProgressBar } from "next13-progressbar";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ProgressBar: FC<Props> = ({ children }) => {
  return (
    <>
      <Next13ProgressBar color="var(--accent-color)" />
      {children}
    </>
  );
};

export default ProgressBar;
