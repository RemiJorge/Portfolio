"use client";

import Link from "next/link";
import { motion } from "motion/react";
import styles from "./experience.module.css";
import { COVALORIS, PERSON } from "@/content/profile";
import { assetUrl } from "@/lib/basePath";

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.title}>Professional experience</h1>
        <p className={styles.intro}>
          {PERSON.tagline}
        </p>
      </motion.header>

      <motion.article
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.cardTop}>
          <div>
            <h2 className={styles.company}>{COVALORIS.company}</h2>
            <p className={styles.role}>{COVALORIS.role}</p>
            <p className={styles.meta}>
              {COVALORIS.location} · {COVALORIS.period}
            </p>
          </div>
        </div>
        <ul className={styles.list}>
          {COVALORIS.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.article>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        <p>
          Earlier internships, education, and how I got into engineering are
          on the{" "}
          <Link href="/journey" className={styles.link}>
            tech journey
          </Link>{" "}
          timeline — including Airbus (2025), Zumtobel (2023), and Polytech
          Montpellier.
        </p>
        <a className={styles.cta} href={assetUrl("/resume.pdf")} target="_blank" rel="noreferrer">
          Download résumé (PDF)
        </a>
      </motion.footer>
    </div>
  );
}
