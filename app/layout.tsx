import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import BG from "../public/images/Sant-sport-background-logo.svg";
import NavBar from "@/components/header/navBar/navBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SantSport | live sports scores like never before",
  description: "Experience the latest live sports scores like never before with Sant Sport. We are committed to providing you with all the trending sports news and real-time scores on the go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen h-full bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
          <div className="relative">
            <NavBar />
            <div className="md:p-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
