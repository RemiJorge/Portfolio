import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/NavBar';

export const metadata: Metadata = {
  title: "Remi's Portfolio",
  description: "Software & AI Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark-theme">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
