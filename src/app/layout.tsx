import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "./Components/Header";
import MobileHeader from "./Components/MobileHeader";
import Providers from "./Config/Providers";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
