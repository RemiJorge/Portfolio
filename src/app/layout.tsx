import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/NavBar";
import { pitchOneLine } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rémi Jorge — AI/ML Engineer & CTO",
  description: pitchOneLine,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`dark-theme ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
