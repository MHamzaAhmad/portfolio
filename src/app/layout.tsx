import type { Metadata } from "next";
import { Instrument_Serif, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Hamza | Software Engineer",
  description:
    "Software Engineer specializing in building and launching products across the entire lifecycle. Focused on robust systems, cloud-native architecture, and high-performance APIs.",
  keywords: ["Software Engineer", "Go", "TypeScript", "System Architecture", "Cloud Native", "High Performance", "AI"],
  authors: [{ name: "Muhammad Hamza" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NKWJWYCZ0Y"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NKWJWYCZ0Y');
            `,
          }}
        />
      </head>
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased bg-white text-[#111111] selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
