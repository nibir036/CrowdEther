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
      <body>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
