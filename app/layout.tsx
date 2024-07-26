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
        <div className="relative bg-blue-400/40 min-h-[1700px] lg:min-h-[900px]">
          <div className="absolute inset-0 h-full">
            <Image
              src={BG}
              alt="Sant-sport-background-logo"
              title="Sant-sport-background-logo"
              className="object-cover w-full h-full"
              width={1000}
              height={700}
            />
          </div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/10 to-black">
            <div className="relative">
              <NavBar />
              <div className="md:p-10">
              {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
