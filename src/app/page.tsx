"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { getBasePath } from "@/lib/basePath";
import { identity, pitchOneLine, pitchShort } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Home() {
  const basePath = getBasePath();
  const reduced = useReducedMotion();

  return (
    <div className={styles.hero}>
      <div className={styles.mesh} aria-hidden />
      <div className={styles.inner}>
        <motion.div
          className={styles.identity}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduced ? { duration: 0.15 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            className={styles.avatar}
            src={`${basePath}/avatar.jpg`}
            alt={identity.name}
            width={176}
            height={176}
            priority
          />
          <p className={styles.kicker}>AI / ML · Multi-agent systems · Production</p>
          <h1 className={styles.name}>{identity.name}</h1>
          <p className={styles.roleLine}>
            CTO &amp; AI Expert at Covaloris — open to fully remote US roles
          </p>
          <p className={styles.pitch}>{pitchOneLine}</p>
          <p className={styles.pitchSub}>{pitchShort}</p>
        </motion.div>

        <motion.nav
          className={styles.ctas}
          aria-label="Primary actions"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduced ? { duration: 0.15 } : { delay: 0.12, duration: 0.45 }
          }
        >
          <Button href="/experience" variant="primary">
            View experience
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
          <Button href={`${basePath}/resume.pdf`} variant="ghost" external>
            Resume PDF
          </Button>
        </motion.nav>

        <motion.div
          className={styles.social}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? { duration: 0.15 } : { delay: 0.25, duration: 0.4 }}
        >
          <a href={identity.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.dot} aria-hidden />
          <a href={identity.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className={styles.dot} aria-hidden />
          <a href={`mailto:${identity.email}`}>{identity.email}</a>
        </motion.div>

        <motion.nav
          className={styles.quickLinks}
          aria-label="Site sections"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? { duration: 0.15 } : { delay: 0.35, duration: 0.4 }}
        >
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
        </motion.nav>
      </div>
    </div>
  );
}
