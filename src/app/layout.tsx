import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import { SITE } from "@/content/profile";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87N7X2YXWX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-87N7X2YXWX');
          `}
        </Script>
      </head>
      <body className="dark-theme site-body">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
