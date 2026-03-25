import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { BootScreen } from "@/components/layout/boot-screen";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dhev — backend developer",
  description:
    "Dhev Sabharish — Java backend developer. Spring Boot, infrastructure, and systems.",
  metadataBase: new URL("https://dhev.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="font-mono">
        <BootScreen />
        {children}
      </body>
    </html>
  );
}
