"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { routePath } from "@/lib/basePath";

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

function linkIsActive(path: string, href: string): boolean {
  if (href === "/") return path === "/" || path === "";
  return path === href || path.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const path = routePath(pathname);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [isOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="nav-container">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
        <nav className={clsx("site-nav", isOpen && "open")} aria-label="Primary">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkIsActive(path, href) ? "nav-active" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
