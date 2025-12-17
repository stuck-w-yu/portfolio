import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wahyu Firmansyah | Front-End Developer",
  description: "University of Putera Batam's Student majoring at Informatics Engineering, Specialize at Front-End  Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121c24]">
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />    
        </div>
        {children}
      </body>
    </html>
  );
}
