import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "./Components/Header";
import MobileHeader from "./Components/MobileHeader";
import Providers from "./Config/Providers";
import Footer from "./Components/Footer";
import MobileFooter from "./Components/MobileFooter";
import { Box } from "@chakra-ui/react";

const fira = localFont({
  src: "./fonts/FiraCode-VF.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hamza",
  description: "A great engineer who treaded the path of the unknown.",
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
          <MainHeader />
          <MobileHeader />
          <Box className="grow">{children}</Box>
          <footer className="sticky bottom-0">
            <Footer />
            <MobileFooter />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
