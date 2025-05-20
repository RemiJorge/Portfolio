import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Remi's Portfolio",
  description: "Software & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body className="dark-theme">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
