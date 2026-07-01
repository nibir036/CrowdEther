import type { Metadata } from "next";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";

export const metadata: Metadata = {
  title: "CrowdEther — Fund the Future",
  description: "Crowdfunding platform for bold ideas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}