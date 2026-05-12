"use client";

import styles from "./projects.module.css";
import Link from "next/link";
import { motion } from "motion/react";
import { PERSON } from "@/content/profile";

export default function Projects() {
  return (
    <div className={styles.container}>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.text}>
          A curated project gallery is on the way. In the meantime, you can
          explore public work and activity on{" "}
          <Link
            href={PERSON.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </Link>
          .
        </p>
      </motion.header>
    </div>
  );
}
