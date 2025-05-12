import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Remi's Portfolio",
  description: "Software & AI Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
