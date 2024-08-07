import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Providers from "../config/Providers";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { Box } from "@chakra-ui/react";
import ProgressBar from "@/config/ProgressBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/config/highlightTheme.css";

const fira = localFont({
  src: "../fonts/FiraCode-VF.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hamza",
  description: "A great engineer who treaded the path of the unknown.",
  keywords: [
    "freelance",
    "software",
    "engineer",
    "react",
    "nextjs",
    "typescript",
    "javascript",
    "web developer",
    "app developer",
    "flutter",
    "mobile application developer",
    "full stack software engineer",
    "hamza",
    "muhammad hamza",
    "hamza ahmad",
    "ios",
    "android",
    "ios developer",
    "android developer",
    "flutter developer",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "nodejs",
    "expressjs",
    "express",
    "mongodb",
    "mongodb developer",
    "firebase",
    "firebase developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Providers>
          <ProgressBar>
            <header className="sticky top-0">
              <MainHeader />
              <MobileHeader />
            </header>
            <Box className="h-dvh overflow-scroll">{children}</Box>
            <footer className="sticky bottom-0">
              <Footer />
              <MobileFooter />
            </footer>
          </ProgressBar>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
