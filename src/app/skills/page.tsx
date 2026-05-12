"use client";

import styles from "./skills.module.css";
import { motion, useReducedMotion } from "motion/react";
import { skillBadges, skillCategories } from "@/content/profile";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function Skills() {
  const reduced = useReducedMotion();

  return (
    <Section spacing="loose">
      <PageHeader
        title="Technical skills"
        subtitle="Modern ML, agentic systems, and the stack to ship them safely to production."
      />

      <motion.div
        className={styles.badgeRow}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduced ? { duration: 0.15 } : { duration: 0.4 }}
      >
        {skillBadges.map((item) => (
          <span key={item.name} className={styles.badgeWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element -- remote shields.io badges */}
            <img src={item.badge} alt={item.name} title={item.name} />
          </span>
        ))}
      </motion.div>

      {Object.entries(skillCategories).map(([category, items], index) => (
        <motion.div
          key={category}
          className={styles.block}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            reduced ? { duration: 0.15 } : { duration: 0.45, delay: index * 0.05 }
          }
        >
          <h3 className={styles.category}>{category}</h3>
          <ul className={styles.tagList}>
            {items.map((item) => (
              <li key={item} className={styles.tag}>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </Section>
  );
}
