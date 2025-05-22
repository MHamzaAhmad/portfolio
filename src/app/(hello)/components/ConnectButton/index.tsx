"use client";

import { memo } from "react";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";

const ConnectButton = memo(() => {
  const router = useRouter();
  return (
    <PulsatingButton
      className="dark:bg-accent-color"
      onClick={() => router.push("/contact-me")}
    >
      {"Let's Connect"}
    </PulsatingButton>
  );
});

ConnectButton.displayName = "ConnectButton";

export default ConnectButton;
