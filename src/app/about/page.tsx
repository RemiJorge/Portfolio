"use client";

import Link from "next/link";
import styles from "./about.module.css";
import { motion, useReducedMotion } from "motion/react";
import { pitchShort } from "@/content/profile";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <div className={styles.container}>
      <motion.h1
        initial={reduced ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? { duration: 0.15 } : { duration: 0.45 }}
        className={styles.title}
      >
        About
      </motion.h1>

      <motion.section
        className={styles.section}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? { duration: 0.15 } : { delay: 0.08, duration: 0.45 }}
      >
        <h2 className={styles.heading}>Who I am</h2>
        <p>
          I am an AI/ML engineer focused on <strong>production systems</strong>:
          multi-agent orchestration, RAG, model training and serving, and the
          DevOps and security practices that keep them reliable at scale. As{" "}
          <strong>CTO &amp; AI Expert at Covaloris</strong>, I lead delivery
          end-to-end for enterprise clients—from discovery to deployment—while
          growing a small, high-trust engineering team.
        </p>
        <p>{pitchShort}</p>
        <p>
          For a structured view of roles and impact, see the{" "}
          <Link href="/experience" className={styles.inlineLink}>
            Experience
          </Link>{" "}
          page.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? { duration: 0.15 } : { delay: 0.16, duration: 0.45 }}
      >
        <h2 className={styles.heading}>What drives me</h2>
        <ul className={styles.list}>
          <li>
            Shipping AI that survives real users: latency, evaluation, and
            operational guardrails—not just demos.
          </li>
          <li>
            Closing the loop between research and production: fine-tuning,
            retrieval quality, and measurable business outcomes.
          </li>
          <li>
            Clear architecture, honest trade-offs, and tight collaboration with
            stakeholders on both sides of the technical boundary.
          </li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? { duration: 0.15 } : { delay: 0.24, duration: 0.45 }}
      >
        <h2 className={styles.heading}>Projects &amp; confidentiality</h2>
        <p>
          Much of my professional and academic work lives in private repositories
          or client environments. I am happy to walk through architectures,
          results, and code samples in conversation when appropriate.
        </p>
      </motion.section>
    </div>
  );
}
