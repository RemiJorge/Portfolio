"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "./page.module.css";
import { PERSON } from "@/content/profile";
import { assetUrl } from "@/lib/basePath";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/journey", label: "Journey" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <div className={styles.wrap}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.heroGrid}>
          <div className={styles.identity}>
            <Image
              className={styles.avatar}
              src={assetUrl("/avatar.jpg")}
              alt={PERSON.displayName}
              width={168}
              height={168}
              priority
            />
            <div>
              <p className={styles.kicker}>AI / ML · Production systems</p>
              <h1 className={styles.name}>{PERSON.displayName}</h1>
              <p className={styles.roleLine}>
                {PERSON.headline} · {PERSON.subheadline}
              </p>
              <p className={styles.tagline}>{PERSON.tagline}</p>
              <p className={styles.openTo}>{PERSON.openTo}</p>
            </div>
          </div>
          <div className={styles.side}>
            <div className={styles.social}>
              <a
                href={PERSON.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
              <a
                href={PERSON.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a href={`mailto:${PERSON.email}`} className={styles.socialLink}>
                Email
              </a>
              <a href={`tel:${PERSON.phone}`} className={styles.socialLink}>
                Phone
              </a>
            </div>
            <a
              className={styles.resume}
              href={assetUrl("/resume.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé (PDF)
            </a>
          </div>
        </div>
      </motion.section>

      <motion.nav
        className={styles.quickNav}
        aria-label="Sections"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {navLinks.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.05, duration: 0.4 }}
          >
            <Link href={item.href} className={styles.quickLink}>
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
}
