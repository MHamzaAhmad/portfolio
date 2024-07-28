"use client";

import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";

const ConnectButton = () => {
  const router = useRouter();
  return (
    <>
      <PulsatingButton
        className="dark:bg-accent-color"
        onClick={() => router.push("/contact-me")}
      >
        {"Let's Connect"}
      </PulsatingButton>
    </>
  );
};

export default ConnectButton;
