"use client";

import styles from "./skills.module.css";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "@/content/profile";

export default function Skills() {
  const categories = Object.entries(SKILL_CATEGORIES);

  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={styles.title}
      >
        Technical skills
      </motion.h1>
      <p className={styles.lead}>
        Production ML, modern agentic stacks, and the infrastructure to ship
        them safely at scale.
      </p>
      {categories.map(([category, items], index) => (
        <motion.section
          key={category}
          className={styles.block}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className={styles.category}>{category}</h2>
          <ul className={styles.chipList}>
            {items.map((name) => (
              <li key={name}>
                <span className={styles.chip}>{name}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
