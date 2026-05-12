"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          RJ
        </Link>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "×" : "☰"}
        </button>
        <nav className={clsx("site-nav", isOpen && "open")} aria-label="Main">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                data-active={active ? "true" : "false"}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
